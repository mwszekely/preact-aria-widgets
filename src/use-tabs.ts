import { h } from "preact";
import { generateRandomId, returnTrue, useListNavigationSingleSelection, useManagedChildren, useMergedProps, usePress, useStableCallback, useState } from "preact-prop-helpers";
import { ChildFlagOperations, OnChildrenMountChange, useChildrenFlag, UseManagedChildParameters, UseManagedChildrenParameters, UseManagedChildrenReturnTypeInfo } from "preact-prop-helpers";
import { UseListNavigationSingleSelectionChildParameters, UseListNavigationSingleSelectionChildReturnTypeInfo, UseListNavigationSingleSelectionParameters, UseListNavigationSingleSelectionReturnTypeInfo } from "preact-prop-helpers";
import { useCallback, useEffect, useRef } from "preact/hooks";
import { useLabel } from "./use-label";
import { debugLog, EnhancedEvent, enhanceEvent, EventDetail, overwriteWithWarning } from "./props";
import { UseChildrenHaveFocusParameters, UseHasFocusParameters } from "preact-prop-helpers";


export type TabsChangeEvent<E extends Element> = { [EventDetail]: { selectedIndex: number } } & Pick<h.JSX.TargetedEvent<E>, "target" | "currentTarget">;

export interface UseTabsParameters {
    tabPanels: UseManagedChildrenParameters<number, never>;
}
export interface UseTabParameters<E extends Element, C, K extends string, SubbestInfo> extends UseListNavigationSingleSelectionChildParameters<E, C, K, "ariaPropName", never, never, never, SubbestInfo> {
    hasFocus: UseHasFocusParameters<E>;
}

export interface UseTabPanelParameters<C, K extends string, SubbestInfo> extends UseManagedChildParameters<number, C, K | "visible", never, SubbestInfo> { }

export interface UseTabReturnTypeInfo<TabElement extends Element> extends UseListNavigationSingleSelectionChildReturnTypeInfo<TabElement> { }
export interface UseTabReturnTypeWithHooks<TabElement extends Element> extends UseTabReturnTypeInfo<TabElement> {
    useTabProps(props: h.JSX.HTMLAttributes<TabElement>): h.JSX.HTMLAttributes<TabElement>;
}

export interface UseTabLabelParameters { }
export interface UseTabListParameters<TabElement extends Element, C, K extends string> extends UseListNavigationSingleSelectionParameters<TabElement, C, K, never, never, never, never, never, never> {
    //tabs: { onSelectedIndexChange(e: EnhancedEvent<TabElement, Event, { selectedIndex: number }>): void; };
    childrenHaveFocus: UseChildrenHaveFocusParameters["childrenHaveFocus"];

}
export interface UseTabListReturnTypeInfo<TabElement extends Element, TC> {
    tabList: UseListNavigationSingleSelectionReturnTypeInfo<TabElement, TabInfo<TC>, never>;
}
export interface UseTabListReturnTypeWithHooks<TabContainerElement extends Element, TabElement extends Element, TC, TK extends string> extends UseTabListReturnTypeInfo<TabElement, TC> {
    useTabListProps: (props: h.JSX.HTMLAttributes<TabContainerElement>) => h.JSX.HTMLAttributes<TabContainerElement>;
    useTab: ({ listNavigation, managedChild, rovingTabIndex }: UseTabParameters<TabElement, TC, TK, TC>) => UseTabReturnTypeWithHooks<TabElement>
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

export interface UseTabsReturnTypeInfo<PC> {
    tabPanels: UseManagedChildrenReturnTypeInfo<number, TabPanelInfo<PC>, never>;
}

export interface UseTabsReturnTypeWithHooks<TabContainerElement extends Element, TabElement extends Element, PanelElement extends Element, LabelElement extends Element, TC, PC, TK extends string, PK extends string> extends UseTabsReturnTypeInfo<PC> {
    useTabList: UseTabList<TabContainerElement, TabElement, TC, TK>;
    useTabPanel: UseTabPanel<PanelElement, PC, PK>;
    useTabListLabel: UseTabListLabel<LabelElement>;
}

export type UseTab<TabElement extends Element, TC, TK extends string> = (args: UseTabParameters<TabElement, TC, TK, TC>) => UseTabReturnTypeWithHooks<TabElement>;
export type UseTabList<TabContainerElement extends Element, TabElement extends Element, C, K extends string> = (args: UseTabListParameters<TabElement, C, K>) => UseTabListReturnTypeWithHooks<TabContainerElement, TabElement, C, K>;
export type UseTabPanel<PanelElement extends Element, PC, PK extends string> = (args: UseTabPanelParameters<PC, PK, PC>) => UseTabPanelReturnTypeWithHooks<PanelElement>;
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

export function useTabs<TabListElement extends Element, TabElement extends Element, PanelElement extends Element, LabelElement extends Element, TC, PC, TK extends string, PK extends string>({ tabPanels: { managedChildren: { onChildrenMountChange: ocmc, ...tabPanelsManagedChildren } } }: UseTabsParameters): UseTabsReturnTypeWithHooks<TabListElement, TabElement, PanelElement, LabelElement, TC, PC, TK, PK> {

    debugLog("useTabs");


    const baseId = generateRandomId("aria-tabs-");
    //const getTabListId = useCallback(() => { return baseId + "-tab-list"; }, []);
    const getTabId = useCallback((index: number) => { return baseId + "-tab-" + index; }, []);
    const getPanelId = useCallback((index: number) => { return baseId + "-panel-" + index; }, []);

    // Used for the panels, not the tabs in the tablist.
    // Those are in useTabList itself.
    const { useManagedChild, ...managedChildrenRet } = useManagedChildren<number, TabPanelInfo<PC>, "visible">({ managedChildren: { ...tabPanelsManagedChildren, onChildrenMountChange: useStableCallback<OnChildrenMountChange<number>>((m, u) => { ocmc?.(m, u); reevaluateClosestFit(); }) } });
    const { changeIndex: changeVisiblePanel, getCurrentIndex: getVisibleIndex, reevaluateClosestFit } = useChildrenFlag({ children: managedChildrenRet.managedChildren.children, closestFit: false, initialIndex: null, key: "visible" });

    //const { useRandomIdReferencerElement, useRandomIdSourceElement } = useRandomId({ randomId: { prefix: "aria-tabs-" }, managedChildren: { onAfterChildLayoutEffect: null, onChildrenMountChange: null } });

    const { useLabelInput, useLabelLabel } = useLabel<TabListElement, LabelElement>({ label: { prefixInput: "", prefixLabel: "", tagInput: "div" as any, tagLabel: "div" as any } });


    const useTabListLabel = useCallback(() => {
        const { useLabelLabelProps } = useLabelLabel();
        function useTabListLabelProps(props: h.JSX.HTMLAttributes<LabelElement>) { return useLabelLabelProps(props); }
        return { useTabListLabelProps };
    }, [useLabelLabel]);

    const useTabList = useCallback<UseTabList<TabListElement, TabElement, TC, TK>>(({ childrenHaveFocus, linearNavigation, listNavigation, managedChildren: tabListManagedChildren, rovingTabIndex, singleSelection, typeaheadNavigation }) => {
        debugLog("useTabList");
        const stableOnSelectedIndexChange = useStableCallback(singleSelection.setSelectedIndex);

        const {
            useListNavigationSingleSelectionChild,
            useListNavigationSingleSelectionProps,
            ...listNavRet1
        } = useListNavigationSingleSelection<TabListElement, TabElement, TabInfo<TC>, never>({
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

        const useTab = useCallback<UseTab<TabElement, TC, TK>>(({ listNavigation, managedChild, rovingTabIndex, hasFocus, singleSelection, subInfo }) => {
            debugLog("useTab", managedChild.index);
            const { useListNavigationSingleSelectionChildProps, ...listNavRet2 } = useListNavigationSingleSelectionChild({ listNavigation, managedChild, rovingTabIndex, subInfo: { subInfo }, hasFocus, singleSelection: { ariaPropName: "aria-selected", ...singleSelection } });
            const { singleSelection: { selected }, rovingTabIndex: { tabbable } } = listNavRet2;

            const useTabProps = (props: h.JSX.HTMLAttributes<TabElement>) => {
                const panelId = getPanelId(managedChild.index);
                const tabId = getTabId(managedChild.index);

                const usePressProps = usePress<TabElement>({
                    onClickSync: (e) => { stableOnSelectedIndexChange(managedChild.index, e) },
                    exclude: {},
                    hasFocus,
                    focusSelf: rovingTabIndex.focusSelf
                });


                overwriteWithWarning("useTab", props, "role", "tab");
                overwriteWithWarning("useTab", props, "aria-controls", panelId);

                return useListNavigationSingleSelectionChildProps(useMergedProps({
                    "data-tabbable": tabbable.toString(),
                    id: tabId
                } as {}, usePressProps(props)));
            };
            return {
                useTabProps,
                ...listNavRet2
            }
        }, [useLabelInput, useListNavigationSingleSelectionChild]);

        const useTabListProps = ({ "aria-orientation": ariaOrientation, ...props }: h.JSX.HTMLAttributes<TabListElement>) => {
            overwriteWithWarning("useTabList", props, "role", "tablist");
            return useListNavigationSingleSelectionProps(useLabelInputProps(useMergedProps({
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

    const useTabPanel = useCallback<UseTabPanel<PanelElement, PC, PK>>(({ managedChild: { flags, ...managedChild }, subInfo }) => {
        debugLog("useTabPanel", managedChild.index);
        //const [correspondingTabId, setCorrespondingTabId] = useState<string | null>(null);
        const [isVisible, setIsVisible, getIsVisible] = useState(getVisibleIndex() == managedChild.index);
        const visibleRef = useRef<ChildFlagOperations>({ get: getIsVisible, set: setIsVisible, isValid: returnTrue });
        useManagedChild({ managedChild: { ...managedChild, flags: { visible: visibleRef.current, ...flags } }, subInfo: { subInfo } });
        const panelId = getPanelId(managedChild.index);
        const tabId = getTabId(managedChild.index);

        const useTabPanelProps = (props: h.JSX.HTMLAttributes<PanelElement>) => {
            overwriteWithWarning("useTabPanelProps", props, "role", "tabpanel");
            overwriteWithWarning("useTabPanelProps", props, "aria-labelledby", tabId);
            overwriteWithWarning("useTabPanelProps", props, "id", panelId);
            return useMergedProps({
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

interface TabPanelInfo<PC> {
    subInfo: PC;
    //setCorrespondingTabId(tabId: string): void;
}

interface TabInfo<TC> {
    subInfo: TC;
    //setCorrespondingPanelId(tabId: string): void;
}
