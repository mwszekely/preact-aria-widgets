import { h } from "preact";
import { generateRandomId, returnTrue, useEffect, useLayoutEffect, UseListNavigationParameters, useListNavigationSingleSelection, useManagedChildren, useMergedProps, useRandomId, useStableCallback, useState } from "preact-prop-helpers";
import { ChildFlagOperations, OnChildrenMountChange, useChildrenFlag, UseManagedChildParameters, UseManagedChildrenParameters, UseManagedChildrenReturnTypeInfo } from "preact-prop-helpers/use-child-manager";
import { UseListNavigationReturnTypeInfo, UseListNavigationSingleSelectionChildParameters, UseListNavigationSingleSelectionChildReturnTypeInfo, UseListNavigationSingleSelectionParameters } from "preact-prop-helpers/use-list-navigation";
import { useCallback, useRef } from "preact/hooks";
import { EventDetail } from "./props";
import { usePressEventHandlers } from "./use-button";


export type TabsChangeEvent<E extends Element> = { [EventDetail]: { selectedIndex: number } } & Pick<h.JSX.TargetedEvent<E>, "target" | "currentTarget">;

export interface UseAriaTabsParameters { tabList: UseListNavigationSingleSelectionParameters<never, never, never, never, never, never>; tabPanels: UseManagedChildrenParameters<number, never> }
export interface UseAriaTabParameters extends UseListNavigationSingleSelectionChildParameters<never, never, never, never, never, never> { }
export interface UseAriaTabPanelParameters extends UseManagedChildParameters<number, {}, "visible", never> { }

export interface UseAriaTabReturnType<TabElement extends Element> extends UseListNavigationSingleSelectionChildReturnTypeInfo<TabElement> {

}

export interface UseAriaTabsReturnType<TabContainerElement extends Element, TabElement extends Element, PanelElement extends Element> {
    useAriaTabList: () => { useAriaTabListProps: (props: h.JSX.HTMLAttributes<TabContainerElement>) => h.JSX.HTMLAttributes<TabContainerElement>; useAriaTab: ({ listNavigation, managedChild, rovingTabIndex, subInfo }: UseAriaTabParameters) => UseAriaTabReturnType<TabElement> };
    useAriaTabPanel: ({ managedChild: { flags, ...managedChild } }: UseAriaTabPanelParameters) => {
        useAriaTabPanelProps: (props: h.JSX.HTMLAttributes<PanelElement>) => h.JSX.HTMLAttributes<PanelElement>;
        tabPanel: { visible: boolean; getVisible: () => boolean; };
    };
    tabList: UseListNavigationReturnTypeInfo<TabElement, TabInfo, never>;
    tabPanels: UseManagedChildrenReturnTypeInfo<number, TabPanelInfo, never>;
}

export function useAriaTabs<TabContainerElement extends Element, TabElement extends Element, PanelElement extends Element>({ tabList: { linearNavigation, listNavigation, managedChildren: tabListManagedChildren, rovingTabIndex, singleSelection, typeaheadNavigation }, tabPanels: { managedChildren: { onChildrenMountChange: ocmc, ...tabPanelsManagedChildren } } }: UseAriaTabsParameters): UseAriaTabsReturnType<TabContainerElement, TabElement, PanelElement> {

    const {
        useListNavigationSingleSelectionChild,
        useListNavigationSingleSelectionProps,
        ...listNavRet1
    } = useListNavigationSingleSelection<TabContainerElement, TabElement, TabInfo, never>({
        linearNavigation,
        listNavigation,
        managedChildren: tabListManagedChildren,
        rovingTabIndex,
        singleSelection,
        typeaheadNavigation
    });

    const baseId = generateRandomId("aria-tabs-");
    const getTabId = useCallback((index: number) => { return baseId + "-tab-" + index; }, []);
    const getPanelId = useCallback((index: number) => { return baseId + "-panel-" + index; }, []);

    const { useManagedChild, ...managedChildrenRet } = useManagedChildren<number, TabPanelInfo, "visible">({ managedChildren: { ...tabPanelsManagedChildren, onChildrenMountChange: useStableCallback<OnChildrenMountChange<number>>((m, u) => { ocmc?.(m, u); reevaluateClosestFit(); }) } });
    const { changeIndex, getCurrentIndex: getVisibleIndex, reevaluateClosestFit } = useChildrenFlag({ children: managedChildrenRet.managedChildren.children, closestFit: false, initialIndex: singleSelection.selectedIndex, key: "visible" });

    useEffect(() => {
        changeIndex(singleSelection.selectedIndex);
    }, [singleSelection.selectedIndex])

    const useAriaTabList = useCallback(() => {
        const useAriaTab = useCallback(({ listNavigation, managedChild, rovingTabIndex, subInfo }: UseAriaTabParameters) => {
            const panelId = getPanelId(managedChild.index);
            const tabId = getTabId(managedChild.index);
            const { useListNavigationSingleSelectionChildProps, ...listNavRet2 } = useListNavigationSingleSelectionChild({ listNavigation, managedChild, rovingTabIndex, subInfo });
            const { singleSelection: { getSelected, selected }, rovingTabIndex: { getElement, getTabbable, tabbable } } = listNavRet2;

            const useAriaTabProps = useCallback((props: h.JSX.HTMLAttributes<TabElement>) => { return useListNavigationSingleSelectionChildProps(useMergedProps({ "aria-controls": panelId, id: tabId } as {}, props)); }, []);
            return {
                useAriaTabProps,
                ...listNavRet2
            }
        }, []);

        const useAriaTabListProps = (props: h.JSX.HTMLAttributes<TabContainerElement>) => useListNavigationSingleSelectionProps(useMergedProps(props, {}));

        return {
            useAriaTabListProps,
            useAriaTab
        }
    }, []);

    const useAriaTabPanel = useCallback(({ managedChild: { flags, ...managedChild } }: UseAriaTabPanelParameters) => {
        //const [correspondingTabId, setCorrespondingTabId] = useState<string | null>(null);
        const [isVisible, setIsVisible, getIsVisible] = useState(getVisibleIndex() == managedChild.index);
        const visibleRef = useRef<ChildFlagOperations>({ get: getIsVisible, set: setIsVisible, isValid: returnTrue });
        useManagedChild({ managedChild: { ...managedChild, flags: { visible: visibleRef.current }, subInfo: {  } } });
        const panelId = getPanelId(managedChild.index);
        const tabId = getTabId(managedChild.index);

        const useAriaTabPanelProps = (props: h.JSX.HTMLAttributes<PanelElement>) => { return useMergedProps({ "aria-labelledby": tabId, id: panelId } as {}, props) }

        return {
            useAriaTabPanelProps,
            tabPanel: { 
                visible: isVisible, 
                getVisible: getIsVisible 
            }
        }
    }, []);

    return {
        useAriaTabList,
        useAriaTabPanel,
        tabList: listNavRet1,
        tabPanels: managedChildrenRet
    }

}

interface TabPanelInfo {
    //setCorrespondingTabId(tabId: string): void;
}

interface TabInfo {
    //setCorrespondingPanelId(tabId: string): void;
}
