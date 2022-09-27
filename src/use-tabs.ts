import { h } from "preact";
import { generateRandomId, returnTrue, useListNavigationSingleSelection, useManagedChildren, useMergedProps, usePress, useStableCallback, useState } from "preact-prop-helpers";
import { ChildFlagOperations, OnChildrenMountChange, useChildrenFlag, UseManagedChildParameters, UseManagedChildrenParameters, UseManagedChildrenReturnTypeInfo } from "preact-prop-helpers/use-child-manager";
import { UseListNavigationSingleSelectionChildParameters, UseListNavigationSingleSelectionChildReturnTypeInfo, UseListNavigationSingleSelectionParameters, UseListNavigationSingleSelectionReturnTypeInfo } from "preact-prop-helpers/use-list-navigation";
import { useCallback, useEffect, useRef } from "preact/hooks";
import { useLabel } from "./use-label";
import { debugLog, EnhancedEvent, enhanceEvent, EventDetail, warnOnOverwrite } from "./props";
import { UseChildrenHaveFocusParameters, UseHasFocusParameters } from "preact-prop-helpers/use-has-focus";


export type TabsChangeEvent<E extends Element> = { [EventDetail]: { selectedIndex: number } } & Pick<h.JSX.TargetedEvent<E>, "target" | "currentTarget">;

export interface UseTabsParameters {
    tabPanels: UseManagedChildrenParameters<number, never>;
}
export interface UseTabParameters<E extends Element> extends Omit<UseListNavigationSingleSelectionChildParameters<E, never, never, never, never, never, never>, "subInfo"> {
    hasFocus: UseHasFocusParameters<E>;
}

export interface UseTabPanelParameters extends UseManagedChildParameters<number, {}, "visible", "subInfo"> { }

export interface UseTabReturnTypeInfo<TabElement extends Element> extends UseListNavigationSingleSelectionChildReturnTypeInfo<TabElement> { }
export interface UseTabReturnTypeWithHooks<TabElement extends Element> extends UseTabReturnTypeInfo<TabElement> {
    useTabProps(props: h.JSX.HTMLAttributes<TabElement>): h.JSX.HTMLAttributes<TabElement>;
}

export interface UseTabLabelParameters { }
export interface UseTabListParameters<TabElement extends EventTarget> extends UseListNavigationSingleSelectionParameters<never | "onSelectedIndexChange", never, never, never, never, never> {
    tabs: { onSelectedIndexChange(e: EnhancedEvent<TabElement, Event, { selectedIndex: number }>): void; };
    childrenHaveFocus: UseChildrenHaveFocusParameters["childrenHaveFocus"];

}
export interface UseTabListReturnTypeInfo<TabElement extends Element> {
    tabList: UseListNavigationSingleSelectionReturnTypeInfo<TabElement, TabInfo, never>;
}
export interface UseTabListReturnTypeWithHooks<TabContainerElement extends Element, TabElement extends Element> extends UseTabListReturnTypeInfo<TabElement> {
    useTabListProps: (props: h.JSX.HTMLAttributes<TabContainerElement>) => h.JSX.HTMLAttributes<TabContainerElement>;
    useTab: ({ listNavigation, managedChild, rovingTabIndex }: UseTabParameters<TabElement>) => UseTabReturnTypeWithHooks<TabElement>
}


export interface UseTabPanelReturnTypeInfo {
    tabPanel: { visible: boolean; getVisible: () => boolean; };
}
export interface UseTabPanelReturnTypeWithHooks<LabelElement extends Element> extends UseTabPanelReturnTypeInfo {
    useTabPanelProps: (props: h.JSX.HTMLAttributes<LabelElement>) => h.JSX.HTMLAttributes<LabelElement>;
}


export interface UseTabListLabelReturnTypeInfo { }
export interface UseTabLabelReturnTypeWithHooks<LabelElement extends Element> extends UseTabListLabelReturnTypeInfo {
    useTabListLabelProps: (props: h.JSX.HTMLAttributes<LabelElement>) => h.JSX.HTMLAttributes<LabelElement>;
}

export interface UseTabsReturnTypeInfo {
    tabPanels: UseManagedChildrenReturnTypeInfo<number, TabPanelInfo, never>;
}

export interface UseTabsReturnTypeWithHooks<TabContainerElement extends Element, TabElement extends Element, PanelElement extends Element, LabelElement extends Element> extends UseTabsReturnTypeInfo {
    useTabList: UseTabList<TabContainerElement, TabElement>;
    useTabPanel: UseTabPanel<PanelElement>;
    useTabListLabel: UseTabListLabel<LabelElement>;
}

export type UseTab<TabElement extends Element> = (args: UseTabParameters<TabElement>) => UseTabReturnTypeWithHooks<TabElement>;
export type UseTabList<TabContainerElement extends Element, TabElement extends Element> = (args: UseTabListParameters<TabElement>) => UseTabListReturnTypeWithHooks<TabContainerElement, TabElement>;
export type UseTabPanel<PanelElement extends Element> = (args: UseTabPanelParameters) => UseTabPanelReturnTypeWithHooks<PanelElement>;
export type UseTabListLabel<LabelElement extends Element> = (args: UseTabLabelParameters) => UseTabLabelReturnTypeWithHooks<LabelElement>;
/*
export function useTabs<TabListElement extends Element, TabElement extends Element, PanelElement extends Element, LabelElement extends Element>({ tabPanels: { managedChildren: { onChildrenMountChange: ocmc, ...tabPanelsManagedChildren } } }: UseTabsParameters): UseTabsReturnTypeWithHooks<TabListElement, TabElement, PanelElement, LabelElement> {
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

export function useTabs<TabListElement extends Element, TabElement extends Element, PanelElement extends Element, LabelElement extends Element>({ tabPanels: { managedChildren: { onChildrenMountChange: ocmc, ...tabPanelsManagedChildren } } }: UseTabsParameters): UseTabsReturnTypeWithHooks<TabListElement, TabElement, PanelElement, LabelElement> {

    debugLog("useTabs");


    const baseId = generateRandomId("aria-tabs-");
    //const getTabListId = useCallback(() => { return baseId + "-tab-list"; }, []);
    const getTabId = useCallback((index: number) => { return baseId + "-tab-" + index; }, []);
    const getPanelId = useCallback((index: number) => { return baseId + "-panel-" + index; }, []);

    // Used for the panels, not the tabs in the tablist.
    // Those are in useTabList itself.
    const { useManagedChild, ...managedChildrenRet } = useManagedChildren<number, TabPanelInfo, "visible">({ managedChildren: { ...tabPanelsManagedChildren, onChildrenMountChange: useStableCallback<OnChildrenMountChange<number>>((m, u) => { ocmc?.(m, u); reevaluateClosestFit(); }) } });
    const { changeIndex: changeVisiblePanel, getCurrentIndex: getVisibleIndex, reevaluateClosestFit } = useChildrenFlag({ children: managedChildrenRet.managedChildren.children, closestFit: false, initialIndex: null, key: "visible" });

    //const { useRandomIdReferencerElement, useRandomIdSourceElement } = useRandomId({ randomId: { prefix: "aria-tabs-" }, managedChildren: { onAfterChildLayoutEffect: null, onChildrenMountChange: null } });

    const { useLabelInput, useLabelLabel } = useLabel<TabListElement, LabelElement>({ label: { prefixInput: "", prefixLabel: "", tagInput: "div" as any, tagLabel: "div" as any } });


    const useTabListLabel = useCallback(() => {
        const { useLabelLabelProps } = useLabelLabel();
        function useTabListLabelProps(props: h.JSX.HTMLAttributes<LabelElement>) { return useLabelLabelProps(props); }
        return { useTabListLabelProps };
    }, [useLabelLabel]);

    const useTabList = useCallback<UseTabList<TabListElement, TabElement>>(({ childrenHaveFocus, tabs: { onSelectedIndexChange }, linearNavigation, listNavigation, managedChildren: tabListManagedChildren, rovingTabIndex, singleSelection, typeaheadNavigation }) => {
        debugLog("useTabList");
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
            singleSelection: {
                ...singleSelection,
                onSelectedIndexChange: useCallback((event: Event, index: number) => {
                    onSelectedIndexChange?.(enhanceEvent<TabElement, Event, { selectedIndex: number }>(event, { selectedIndex: index }))
                }, [])
            },
            typeaheadNavigation,
            childrenHaveFocus
        });

        useEffect(() => {
            changeVisiblePanel(singleSelection.selectedIndex);
        }, [singleSelection.selectedIndex]);

        const { useLabelInputProps } = useLabelInput()

        const useTab = useCallback<UseTab<TabElement>>(({ listNavigation, managedChild, rovingTabIndex, hasFocus }: UseTabParameters<TabElement>): UseTabReturnTypeWithHooks<TabElement> => {
            debugLog("useTab", managedChild.index);
            const { useListNavigationSingleSelectionChildProps, ...listNavRet2 } = useListNavigationSingleSelectionChild({ listNavigation, managedChild, rovingTabIndex, subInfo: {}, hasFocus });
            const { singleSelection: { selected }, rovingTabIndex: { tabbable } } = listNavRet2;

            const useTabProps = ({ role, "aria-controls": ariaControls, "aria-selected": ariaSelected, ...props }: h.JSX.HTMLAttributes<TabElement>) => {
                const panelId = getPanelId(managedChild.index);
                const tabId = getTabId(managedChild.index);

                const usePressProps = usePress<TabElement>((e) => { stableOnSelectedIndexChange(enhanceEvent(e, { selectedIndex: managedChild.index })) }, {});

                return useListNavigationSingleSelectionChildProps(useMergedProps({
                    role: warnOnOverwrite("useTab", "role", role, "tab"),
                    "aria-controls": warnOnOverwrite("useTab", "ariaControls", ariaControls, panelId),
                    "aria-selected": warnOnOverwrite("useTab", "ariaSelected", ariaSelected, selected ? "true" : undefined),
                    "data-tabbable": tabbable.toString(),
                    id: tabId
                } as {}, usePressProps(props)));
            };
            return {
                useTabProps,
                ...listNavRet2
            }
        }, [useLabelInput, useListNavigationSingleSelectionChild]);

        const useTabListProps = ({ role, "aria-orientation": ariaOrientation, ...props }: h.JSX.HTMLAttributes<TabListElement>) => {
            return useListNavigationSingleSelectionProps(useLabelInputProps(useMergedProps({
                role: warnOnOverwrite("useTabList", "role", role, "tablist"),
                "aria-orientation": ariaOrientation ?? "horizontal",
            } as {},
                props)))
        };

        return {
            tabList: listNavRet1,
            useTabListProps,
            useTab
        }
    }, [useLabelInput]);

    const useTabPanel = useCallback(({ managedChild: { flags, ...managedChild } }: UseTabPanelParameters) => {
        debugLog("useTabPanel", managedChild.index);
        //const [correspondingTabId, setCorrespondingTabId] = useState<string | null>(null);
        const [isVisible, setIsVisible, getIsVisible] = useState(getVisibleIndex() == managedChild.index);
        const visibleRef = useRef<ChildFlagOperations>({ get: getIsVisible, set: setIsVisible, isValid: returnTrue });
        useManagedChild({ managedChild: { ...managedChild, flags: { visible: visibleRef.current, ...flags }, subInfo: {} } });
        const panelId = getPanelId(managedChild.index);
        const tabId = getTabId(managedChild.index);

        const useTabPanelProps = ({ role, "aria-labelledby": ariaLabelledBy, id, ...props }: h.JSX.HTMLAttributes<PanelElement>) => {
            return useMergedProps({
                role: warnOnOverwrite("useTabPanelProps", "role", role, "tabpanel"),
                "aria-labelledby": warnOnOverwrite("useTabPanelProps", "aria-labelledby", ariaLabelledBy, tabId),
                id: warnOnOverwrite("useTabPanelProps", "id", id, panelId)
            } as {}, props);
        }

        return {
            useTabPanelProps,
            tabPanel: {
                visible: isVisible,
                getVisible: getIsVisible
            }
        }
    }, []);

    return {
        useTabListLabel,
        useTabList,
        useTabPanel,
        tabPanels: managedChildrenRet
    }

}

interface TabPanelInfo {
    //setCorrespondingTabId(tabId: string): void;
}

interface TabInfo {
    //setCorrespondingPanelId(tabId: string): void;
}
