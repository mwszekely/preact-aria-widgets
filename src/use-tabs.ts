import { h } from "preact";
import { generateRandomId, returnTrue, useEffect, useListNavigationSingleSelection, useManagedChildren, useMergedProps, useStableCallback, useState } from "preact-prop-helpers";
import { ChildFlagOperations, OnChildrenMountChange, useChildrenFlag, UseManagedChildParameters, UseManagedChildrenParameters, UseManagedChildrenReturnTypeInfo } from "preact-prop-helpers/use-child-manager";
import { UseListNavigationReturnTypeInfo, UseListNavigationSingleSelectionChildParameters, UseListNavigationSingleSelectionChildReturnTypeInfo, UseListNavigationSingleSelectionParameters } from "preact-prop-helpers/use-list-navigation";
import { useCallback, useRef } from "preact/hooks";
import { useLabel } from "./use-label";
import { debugLog, EventDetail, warnOnOverwrite } from "./props";


export type TabsChangeEvent<E extends Element> = { [EventDetail]: { selectedIndex: number } } & Pick<h.JSX.TargetedEvent<E>, "target" | "currentTarget">;

export interface UseAriaTabsParameters { tabList: UseListNavigationSingleSelectionParameters<never, never, never, never, never, never>; tabPanels: UseManagedChildrenParameters<number, never> }
export interface UseAriaTabParameters extends Omit<UseListNavigationSingleSelectionChildParameters<never, never, never, never, never, never>, "subInfo"> { }
export interface UseAriaTabPanelParameters extends UseManagedChildParameters<number, {}, "visible", never> { }

export interface UseAriaTabReturnTypeInfo<TabElement extends Element> extends UseListNavigationSingleSelectionChildReturnTypeInfo<TabElement> {}
export interface UseAriaTabReturnTypeWithHooks<TabElement extends Element> extends UseAriaTabReturnTypeInfo<TabElement> {
    useAriaTabProps(props: h.JSX.HTMLAttributes<TabElement>): h.JSX.HTMLAttributes<TabElement>;
}

export interface UseAriaTabLabelParameters { }
export interface UseAriaTabListParameters { }
export interface UseAriaTabListReturnTypeInfo<TabElement extends Element> {
    tabList: UseListNavigationReturnTypeInfo<TabElement, TabInfo, never>;
}
export interface UseAriaTabListReturnTypeWithHooks<TabContainerElement extends Element, TabElement extends Element> extends UseAriaTabListReturnTypeInfo<TabElement> {
    useAriaTabListProps: (props: h.JSX.HTMLAttributes<TabContainerElement>) => h.JSX.HTMLAttributes<TabContainerElement>;
    useAriaTab: ({ listNavigation, managedChild, rovingTabIndex }: UseAriaTabParameters) => UseAriaTabReturnTypeWithHooks<TabElement>
}


export interface UseAriaTabPanelReturnTypeInfo {
    tabPanel: { visible: boolean; getVisible: () => boolean; };
}
export interface UseAriaTabPanelReturnTypeWithHooks<LabelElement extends Element> extends UseAriaTabPanelReturnTypeInfo {
    useAriaTabPanelProps: (props: h.JSX.HTMLAttributes<LabelElement>) => h.JSX.HTMLAttributes<LabelElement>;
}


export interface UseAriaTabListLabelReturnTypeInfo { }
export interface UseAriaTabLabelReturnTypeWithHooks<LabelElement extends Element> extends UseAriaTabListLabelReturnTypeInfo {
    useAriaTabListLabelProps: (props: h.JSX.HTMLAttributes<LabelElement>) => h.JSX.HTMLAttributes<LabelElement>;
}

export interface UseAriaTabsReturnTypeInfo {
    tabPanels: UseManagedChildrenReturnTypeInfo<number, TabPanelInfo, never>;
}

export interface UseAriaTabsReturnTypeWithHooks<TabContainerElement extends Element, TabElement extends Element, PanelElement extends Element, LabelElement extends Element> extends UseAriaTabsReturnTypeInfo {
    useAriaTabList: UseAriaTabList<TabContainerElement, TabElement>;
    useAriaTabPanel: UseAriaTabPanel<PanelElement>;
    useAriaTabListLabel: UseAriaTabListLabel<LabelElement>;
    tabPanels: UseManagedChildrenReturnTypeInfo<number, TabPanelInfo, never>;
}

export type UseAriaTab<TabElement extends Element> = (args: UseAriaTabParameters) => UseAriaTabReturnTypeWithHooks<TabElement>;
export type UseAriaTabList<TabContainerElement extends Element, TabElement extends Element> = (args: UseAriaTabListParameters) => UseAriaTabListReturnTypeWithHooks<TabContainerElement, TabElement>;
export type UseAriaTabPanel<PanelElement extends Element> = (args: UseAriaTabPanelParameters) => UseAriaTabPanelReturnTypeWithHooks<PanelElement>;
export type UseAriaTabListLabel<LabelElement extends Element> = (args: UseAriaTabLabelParameters) => UseAriaTabLabelReturnTypeWithHooks<LabelElement>;

export function useAriaTabs<TabListElement extends Element, TabElement extends Element, PanelElement extends Element, LabelElement extends Element>({ tabList: { linearNavigation, listNavigation, managedChildren: tabListManagedChildren, rovingTabIndex, singleSelection, typeaheadNavigation }, tabPanels: { managedChildren: { onChildrenMountChange: ocmc, ...tabPanelsManagedChildren } } }: UseAriaTabsParameters): UseAriaTabsReturnTypeWithHooks<TabListElement, TabElement, PanelElement, LabelElement> {

    debugLog("useAriaTabs");

    const baseId = generateRandomId("aria-tabs-");
    //const getTabListId = useCallback(() => { return baseId + "-tab-list"; }, []);
    const getTabId = useCallback((index: number) => { return baseId + "-tab-" + index; }, []);
    const getPanelId = useCallback((index: number) => { return baseId + "-panel-" + index; }, []);

    // Used for the panels, not the tabs in the tablist.
    // Those are in useAriaTabList itself.
    const { useManagedChild, ...managedChildrenRet } = useManagedChildren<number, TabPanelInfo, "visible">({ managedChildren: { ...tabPanelsManagedChildren, onChildrenMountChange: useStableCallback<OnChildrenMountChange<number>>((m, u) => { ocmc?.(m, u); reevaluateClosestFit(); }) } });
    const { changeIndex, getCurrentIndex: getVisibleIndex, reevaluateClosestFit } = useChildrenFlag({ children: managedChildrenRet.managedChildren.children, closestFit: false, initialIndex: singleSelection.selectedIndex, key: "visible" });

    //const { useRandomIdReferencerElement, useRandomIdSourceElement } = useRandomId({ randomId: { prefix: "aria-tabs-" }, managedChildren: { onAfterChildLayoutEffect: null, onChildrenMountChange: null } });

    const { useLabelInput, useLabelLabel } = useLabel<TabListElement, LabelElement>({ label: { prefixInput: "", prefixLabel: "", tagInput: "div" as any, tagLabel: "div" as any } });

    useEffect(() => {
        changeIndex(singleSelection.selectedIndex);
    }, [singleSelection.selectedIndex])

    const useAriaTabListLabel = useCallback(() => {
        const { useLabelLabelProps } = useLabelLabel();
        function useAriaTabListLabelProps(props: h.JSX.HTMLAttributes<LabelElement>) { return useLabelLabelProps(props); }
        return { useAriaTabListLabelProps };
    }, [useLabelLabel]);

    const useAriaTabList = useCallback<UseAriaTabList<TabListElement, TabElement>>(({ ..._args }) => {
        debugLog("useAriaTabList");
        const {
            useListNavigationSingleSelectionChild,
            useListNavigationSingleSelectionProps,
            ...listNavRet1
        } = useListNavigationSingleSelection<TabListElement, TabElement, TabInfo, never>({
            linearNavigation,
            listNavigation,
            managedChildren: tabListManagedChildren,
            rovingTabIndex,
            singleSelection,
            typeaheadNavigation
        });

        const { useLabelInputProps } = useLabelInput()

        const useAriaTab = useCallback<UseAriaTab<TabElement>>(({ listNavigation, managedChild, rovingTabIndex }: UseAriaTabParameters) => {
            debugLog("useAriaTab", managedChild.index);
            const { useListNavigationSingleSelectionChildProps, ...listNavRet2 } = useListNavigationSingleSelectionChild({ listNavigation, managedChild, rovingTabIndex, subInfo: {} });
            const { singleSelection: { selected }, rovingTabIndex: { tabbable } } = listNavRet2;

            const useAriaTabProps = useCallback(({ role, "aria-controls": ariaControls, "aria-selected": ariaSelected, ...props }: h.JSX.HTMLAttributes<TabElement>) => {
                const panelId = getPanelId(managedChild.index);
                const tabId = getTabId(managedChild.index);

                return useListNavigationSingleSelectionChildProps(useMergedProps({
                    role: warnOnOverwrite("useAriaTab", "role", role, "tab"),
                    "aria-controls": warnOnOverwrite("useAriaTab", "ariaControls", ariaControls, panelId),
                    "aria-selected": warnOnOverwrite("useAriaTab", "ariaSelected", ariaSelected, selected ? "true" : undefined),
                    "data-tabbable": tabbable.toString(),
                    id: tabId
                } as {}, props));
            }, []);
            return {
                useAriaTabProps,
                ...listNavRet2
            }
        }, [useLabelInput]);

        const useAriaTabListProps = ({ role, "aria-orientation": ariaOrientation, ...props }: h.JSX.HTMLAttributes<TabListElement>) => {
            return useListNavigationSingleSelectionProps(useLabelInputProps(useMergedProps({
                role: warnOnOverwrite("useAriaTabList", "role", role, "tablist"),
                "aria-orientation": ariaOrientation ?? "horizontal",
            } as {},
                props)))
        };

        return {
            tabList: listNavRet1,
            useAriaTabListProps,
            useAriaTab
        }
    }, []);

    const useAriaTabPanel = useCallback(({ managedChild: { flags, ...managedChild } }: UseAriaTabPanelParameters) => {
        debugLog("useAriaTabPanel", managedChild.index);
        //const [correspondingTabId, setCorrespondingTabId] = useState<string | null>(null);
        const [isVisible, setIsVisible, getIsVisible] = useState(getVisibleIndex() == managedChild.index);
        const visibleRef = useRef<ChildFlagOperations>({ get: getIsVisible, set: setIsVisible, isValid: returnTrue });
        useManagedChild({ managedChild: { ...managedChild, flags: { visible: visibleRef.current, ...flags }, subInfo: {} } });
        const panelId = getPanelId(managedChild.index);
        const tabId = getTabId(managedChild.index);

        const useAriaTabPanelProps = ({ role, "aria-labelledby": ariaLabelledBy, id, ...props }: h.JSX.HTMLAttributes<PanelElement>) => {
            return useMergedProps({
                role: warnOnOverwrite("useAriaTabPanelProps", "role", role, "tabpanel"),
                "aria-labelledby": warnOnOverwrite("useAriaTabPanelProps", "aria-labelledby", ariaLabelledBy, tabId),
                id: warnOnOverwrite("useAriaTabPanelProps", "id", id, panelId)
            } as {}, props);
        }

        return {
            useAriaTabPanelProps,
            tabPanel: {
                visible: isVisible,
                getVisible: getIsVisible
            }
        }
    }, []);

    return {
        useAriaTabListLabel,
        useAriaTabList,
        useAriaTabPanel,
        tabPanels: managedChildrenRet
    }

}

interface TabPanelInfo {
    //setCorrespondingTabId(tabId: string): void;
}

interface TabInfo {
    //setCorrespondingPanelId(tabId: string): void;
}
