import { h } from "preact";
import { generateRandomId, returnTrue, useListNavigationSingleSelection, useManagedChildren, useMergedProps, usePress, useStableCallback, useState } from "preact-prop-helpers";
import { ChildFlagOperations, OnChildrenMountChange, useChildrenFlag, UseManagedChildParameters, UseManagedChildrenParameters, UseManagedChildrenReturnTypeInfo } from "preact-prop-helpers/use-child-manager";
import { UseListNavigationSingleSelectionChildParameters, UseListNavigationSingleSelectionChildReturnTypeInfo, UseListNavigationSingleSelectionParameters, UseListNavigationSingleSelectionReturnTypeInfo } from "preact-prop-helpers/use-list-navigation";
import { useCallback, useEffect, useRef } from "preact/hooks";
import { useLabel } from "./use-label";
import { debugLog, EnhancedEvent, enhanceEvent, EventDetail, warnOnOverwrite } from "./props";
import { UseChildrenHaveFocusParameters, UseHasFocusParameters } from "preact-prop-helpers/use-has-focus";


export type TabsChangeEvent<E extends Element> = { [EventDetail]: { selectedIndex: number } } & Pick<h.JSX.TargetedEvent<E>, "target" | "currentTarget">;

export interface UseAriaTabsParameters {
    tabPanels: UseManagedChildrenParameters<number, never>;
}
export interface UseAriaTabParameters<E extends Element> extends Omit<UseListNavigationSingleSelectionChildParameters<E, never, never, never, never, never, never>, "subInfo"> {
    hasFocus: UseHasFocusParameters<E>;
}

export interface UseAriaTabPanelParameters extends UseManagedChildParameters<number, {}, "visible", "subInfo"> { }

export interface UseAriaTabReturnTypeInfo<TabElement extends Element> extends UseListNavigationSingleSelectionChildReturnTypeInfo<TabElement> { }
export interface UseAriaTabReturnTypeWithHooks<TabElement extends Element> extends UseAriaTabReturnTypeInfo<TabElement> {
    useAriaTabProps(props: h.JSX.HTMLAttributes<TabElement>): h.JSX.HTMLAttributes<TabElement>;
}

export interface UseAriaTabLabelParameters { }
export interface UseAriaTabListParameters<TabElement extends EventTarget> extends UseListNavigationSingleSelectionParameters<never, never, never, never, never, never> {
    tabs: { onSelectedIndexChange(e: EnhancedEvent<TabElement, Event, { selectedIndex: number }>): void; };
    childrenHaveFocus: UseChildrenHaveFocusParameters["childrenHaveFocus"];

}
export interface UseAriaTabListReturnTypeInfo<TabElement extends Element> {
    tabList: UseListNavigationSingleSelectionReturnTypeInfo<TabElement, TabInfo, never>;
}
export interface UseAriaTabListReturnTypeWithHooks<TabContainerElement extends Element, TabElement extends Element> extends UseAriaTabListReturnTypeInfo<TabElement> {
    useAriaTabListProps: (props: h.JSX.HTMLAttributes<TabContainerElement>) => h.JSX.HTMLAttributes<TabContainerElement>;
    useAriaTab: ({ listNavigation, managedChild, rovingTabIndex }: UseAriaTabParameters<TabElement>) => UseAriaTabReturnTypeWithHooks<TabElement>
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
}

export type UseAriaTab<TabElement extends Element> = (args: UseAriaTabParameters<TabElement>) => UseAriaTabReturnTypeWithHooks<TabElement>;
export type UseAriaTabList<TabContainerElement extends Element, TabElement extends Element> = (args: UseAriaTabListParameters<TabElement>) => UseAriaTabListReturnTypeWithHooks<TabContainerElement, TabElement>;
export type UseAriaTabPanel<PanelElement extends Element> = (args: UseAriaTabPanelParameters) => UseAriaTabPanelReturnTypeWithHooks<PanelElement>;
export type UseAriaTabListLabel<LabelElement extends Element> = (args: UseAriaTabLabelParameters) => UseAriaTabLabelReturnTypeWithHooks<LabelElement>;
/*
export function useAriaTabs<TabListElement extends Element, TabElement extends Element, PanelElement extends Element, LabelElement extends Element>({ tabPanels: { managedChildren: { onChildrenMountChange: ocmc, ...tabPanelsManagedChildren } } }: UseAriaTabsParameters): UseAriaTabsReturnTypeWithHooks<TabListElement, TabElement, PanelElement, LabelElement> {
    const { 
        useListNavigationSingleSelectionChild, 
        useListNavigationSingleSelectionProps 
    } = useListNavigationSingleSelection<TabListElement, TabElement, TabInfo, never>({ 
        childrenHaveFocus: {}, 
        linearNavigation: {}, 
        listNavigation: {}, 
        managedChildren: {}, 
        rovingTabIndex: {}, 
        singleSelection: {}, 
        typeaheadNavigation: {}
     });

    const useTab = useCallback(() => {}, []);
    const useTabPanel = useCallback(() => {});
    function useTabListProps(props: h.JSX.HTMLAttributes<TabListElement>) { return useListNavigationSingleSelectionProps(props); }
    function useTabLabelProps() {}

    return {

    }
    
}*/

export function useAriaTabs<TabListElement extends Element, TabElement extends Element, PanelElement extends Element, LabelElement extends Element>({ tabPanels: { managedChildren: { onChildrenMountChange: ocmc, ...tabPanelsManagedChildren } } }: UseAriaTabsParameters): UseAriaTabsReturnTypeWithHooks<TabListElement, TabElement, PanelElement, LabelElement> {

    debugLog("useAriaTabs");


    const baseId = generateRandomId("aria-tabs-");
    //const getTabListId = useCallback(() => { return baseId + "-tab-list"; }, []);
    const getTabId = useCallback((index: number) => { return baseId + "-tab-" + index; }, []);
    const getPanelId = useCallback((index: number) => { return baseId + "-panel-" + index; }, []);

    // Used for the panels, not the tabs in the tablist.
    // Those are in useAriaTabList itself.
    const { useManagedChild, ...managedChildrenRet } = useManagedChildren<number, TabPanelInfo, "visible">({ managedChildren: { ...tabPanelsManagedChildren, onChildrenMountChange: useStableCallback<OnChildrenMountChange<number>>((m, u) => { ocmc?.(m, u); reevaluateClosestFit(); }) } });
    const { changeIndex: changeVisiblePanel, getCurrentIndex: getVisibleIndex, reevaluateClosestFit } = useChildrenFlag({ children: managedChildrenRet.managedChildren.children, closestFit: false, initialIndex: null, key: "visible" });

    //const { useRandomIdReferencerElement, useRandomIdSourceElement } = useRandomId({ randomId: { prefix: "aria-tabs-" }, managedChildren: { onAfterChildLayoutEffect: null, onChildrenMountChange: null } });

    const { useLabelInput, useLabelLabel } = useLabel<TabListElement, LabelElement>({ label: { prefixInput: "", prefixLabel: "", tagInput: "div" as any, tagLabel: "div" as any } });


    const useAriaTabListLabel = useCallback(() => {
        const { useLabelLabelProps } = useLabelLabel();
        function useAriaTabListLabelProps(props: h.JSX.HTMLAttributes<LabelElement>) { return useLabelLabelProps(props); }
        return { useAriaTabListLabelProps };
    }, [useLabelLabel]);

    const useAriaTabList = useCallback<UseAriaTabList<TabListElement, TabElement>>(({ childrenHaveFocus, tabs: { onSelectedIndexChange }, linearNavigation, listNavigation, managedChildren: tabListManagedChildren, rovingTabIndex, singleSelection, typeaheadNavigation }) => {
        debugLog("useAriaTabList");
        const stableOnSelectedIndexChange = useStableCallback(onSelectedIndexChange);

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
            typeaheadNavigation,
            childrenHaveFocus
        });

        useEffect(() => {
            changeVisiblePanel(singleSelection.selectedIndex);
        }, [singleSelection.selectedIndex]);

        const { useLabelInputProps } = useLabelInput()

        const useAriaTab = useCallback<UseAriaTab<TabElement>>(({ listNavigation, managedChild, rovingTabIndex, hasFocus }: UseAriaTabParameters<TabElement>): UseAriaTabReturnTypeWithHooks<TabElement> => {
            debugLog("useAriaTab", managedChild.index);
            const { useListNavigationSingleSelectionChildProps, ...listNavRet2 } = useListNavigationSingleSelectionChild({ listNavigation, managedChild, rovingTabIndex, subInfo: {}, hasFocus });
            const { singleSelection: { selected }, rovingTabIndex: { tabbable } } = listNavRet2;

            const useAriaTabProps = ({ role, "aria-controls": ariaControls, "aria-selected": ariaSelected, ...props }: h.JSX.HTMLAttributes<TabElement>) => {
                const panelId = getPanelId(managedChild.index);
                const tabId = getTabId(managedChild.index);

                const usePressProps = usePress<TabElement>((e) => { stableOnSelectedIndexChange(enhanceEvent(e, { selectedIndex: managedChild.index })) }, {});

                return useListNavigationSingleSelectionChildProps(useMergedProps({
                    role: warnOnOverwrite("useAriaTab", "role", role, "tab"),
                    "aria-controls": warnOnOverwrite("useAriaTab", "ariaControls", ariaControls, panelId),
                    "aria-selected": warnOnOverwrite("useAriaTab", "ariaSelected", ariaSelected, selected ? "true" : undefined),
                    "data-tabbable": tabbable.toString(),
                    id: tabId
                } as {}, usePressProps(props)));
            };
            return {
                useAriaTabProps,
                ...listNavRet2
            }
        }, [useLabelInput, useListNavigationSingleSelectionChild]);

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
    }, [useLabelInput]);

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
