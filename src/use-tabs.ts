import { h } from "preact";
import { generateRandomId, ManagedChildInfo, OnPassiveStateChange, PassiveStateUpdater, returnTrue, useCompleteGridNavigationRow, useCompleteListNavigation, useCompleteListNavigationChild, UseCompleteListNavigationChildParameters, UseCompleteListNavigationChildReturnType, UseCompleteListNavigationParameters, UseCompleteListNavigationReturnType, useListNavigationSingleSelection, UseListNavigationSingleSelectionSortableChildInfo, useManagedChild, useManagedChildren, UseManagedChildrenReturnType, useMergedProps, usePress, useStableCallback, useStableObject, useState } from "preact-prop-helpers";
import { ChildFlagOperations, OnChildrenMountChange, useChildrenFlag, UseManagedChildParameters, UseManagedChildrenParameters } from "preact-prop-helpers";
import { UseListNavigationSingleSelectionChildParameters, UseListNavigationSingleSelectionParameters } from "preact-prop-helpers";
import { StateUpdater, useCallback, useEffect, useRef } from "preact/hooks";
import { useLabel, UseLabelParameters } from "./use-label";
import { debugLog, EnhancedEvent, enhanceEvent, EventDetail, overwriteWithWarning } from "./props";
import { UseChildrenHaveFocusParameters } from "preact-prop-helpers";


interface TabPanelInfo extends ManagedChildInfo<number> {
    getVisible(): boolean;
    setVisible: StateUpdater<boolean>;
}

interface TabInfo<E extends Element> extends UseListNavigationSingleSelectionSortableChildInfo<E> {
}


export type TabsChangeEvent<E extends Element> = { [EventDetail]: { selectedIndex: number } } & Pick<h.JSX.TargetedEvent<E>, "target" | "currentTarget">;

export interface UseTabsParameters<TabContainerElement extends Element, TabElement extends Element, TabLabelElement extends Element> extends UseLabelParameters<TabContainerElement, TabLabelElement>, UseTabListParameters<TabContainerElement, TabElement> {
    //tabPanels: UseManagedChildrenParameters<TabPanelInfo>;
    tabsParameters: {
        orientation: "horizontal" | "vertical";
        role?: "tablist" | string;
    }
}
export interface UseTabParameters<TabElement extends Element> extends Omit<UseCompleteListNavigationChildParameters<TabElement, TabInfo<TabElement>>, "singleSelectionChildParameters"> {
    singleSelectionChildParameters: Omit<UseCompleteListNavigationChildParameters<TabElement, TabInfo<TabElement>>["singleSelectionChildParameters"], "ariaPropName">;
    tabContext: TabContext;
    // hasFocus: UseHasFocusParameters<E>;
}

export interface UseTabPanelParameters extends Omit<UseManagedChildParameters<TabPanelInfo>, "managedChildParameters"> {
    managedChildParameters: Omit<UseManagedChildParameters<TabPanelInfo>["managedChildParameters"], "getVisible" | "setVisible">
    panelsContext: TabPanelContext;
}

export interface UseTabReturnType<TabElement extends Element> extends UseCompleteListNavigationChildReturnType<TabElement> { }


export interface UseTabLabelParameters { }
interface UseTabListParameters<TabContainerElement extends Element, TabElement extends Element> extends UseCompleteListNavigationParameters<TabContainerElement, TabElement, TabInfo<TabElement>> {
    //tabs: { onSelectedIndexChange(e: EnhancedEvent<TabElement, Event, { selectedIndex: number }>): void; };
    //childrenHaveFocus: UseChildrenHaveFocusParameters["childrenHaveFocus"];
    //tabsContext: TabsContext;

}
export interface UseTabListReturnType<ParentElement extends Element, ChildElement extends Element> extends UseCompleteListNavigationReturnType<ParentElement, ChildElement, TabInfo<ChildElement>> {
}

/*
export interface UseTabListReturnTypeWithHooks<TabContainerElement extends Element, TabElement extends Element, TC, TK extends string> extends UseTabListReturnTypeInfo<TabElement, TC> {
    useTabListProps: (props: h.JSX.HTMLAttributes<TabContainerElement>) => h.JSX.HTMLAttributes<TabContainerElement>;
    useTab: ({ listNavigation, managedChild, rovingTabIndex }: UseTabParameters<TabElement, TC, TK, TC>) => UseTabReturnTypeWithHooks<TabElement>
}*/


export interface UseTabPanelReturnType<E extends Element> {
    props: h.JSX.HTMLAttributes<E>;
    tabPanelReturnType: { visible: boolean; getVisible: () => boolean; };
}
/*export interface UseTabPanelReturnTypeWithHooks<LabelElement extends Element> extends UseTabPanelReturnTypeInfo {
    useTabPanelProps: (props: h.JSX.HTMLAttributes<LabelElement>) => h.JSX.HTMLAttributes<LabelElement>;
}*/


export interface UseTabListLabelReturnTypeInfo { }
export interface UseTabLabelReturnTypeWithHooks<LabelElement extends Element> extends UseTabListLabelReturnTypeInfo {
    useTabListLabelProps: (props: h.JSX.HTMLAttributes<LabelElement>) => h.JSX.HTMLAttributes<LabelElement>;
}

export interface UseTabsReturnType<TabContainerElement extends Element, LabelElement extends Element> {
    propsContainer: h.JSX.HTMLAttributes<TabContainerElement>;
    propsLabel: h.JSX.HTMLAttributes<LabelElement>;
    contextPanels: TabPanelContext;
    contextTab: TabContext;
    managedChildrenContextPanels: UseManagedChildrenReturnType<TabPanelInfo>["managedChildContext"];
}

/*export interface UseTabsReturnTypeWithHooks<TabContainerElement extends Element, TabElement extends Element, PanelElement extends Element, LabelElement extends Element, TC, PC, TK extends string, PK extends string> extends UseTabsReturnTypeInfo<PC> {
    useTabList: UseTabList<TabContainerElement, TabElement, TC, TK>;
    useTabPanel: UseTabPanel<PanelElement, PC, PK>;
    useTabListLabel: UseTabListLabel<LabelElement>;
}*/

interface TabPanelContext {
    getVisibleIndex: () => number | null;
    getPanelId: (index: number) => string;
    getTabId: (index: number) => string;
    setSelectedIndex: PassiveStateUpdater<number | null>;
}

interface TabContext extends TabPanelContext {
    //changeVisiblePanel: (arg: number | ((prevState: number | null) => number | null) | null) => number | null;
}

export type UseTab<TabContainerElement extends Element, TabElement extends Element> = (args: UseTabParameters<TabElement>) => UseTabReturnType<TabElement>;
export type UseTabList<TabContainerElement extends Element, TabElement extends Element> = (args: UseTabListParameters<TabContainerElement, TabElement>) => UseTabListReturnType<TabContainerElement, TabElement>;
export type UseTabPanel<PanelElement extends Element> = (args: UseTabPanelParameters) => UseTabPanelReturnType<PanelElement>;
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

export function useTabs<TabListElement extends Element, TabElement extends Element, PanelElement extends Element, LabelElement extends Element>({
    labelParameters,
    randomIdInputParameters,
    randomIdLabelParameters,
    linearNavigationParameters,
    rearrangeableChildrenParameters,
    rovingTabIndexParameters,
    singleSelectionParameters: { onSelectedIndexChange: osic, ...singleSelectionParameters },
    sortableChildrenParameters,
    typeaheadNavigationParameters,
    tabsParameters: { orientation, role }
    // tabPanels: { managedChildren: { onChildrenMountChange: ocmc, ...tabPanelsManagedChildren } } 
}: UseTabsParameters<TabListElement, TabElement, LabelElement>): UseTabsReturnType<TabListElement, LabelElement> {

    debugLog("useTabs");


    const baseId = generateRandomId("aria-tabs-");
    //const getTabListId = useCallback(() => { return baseId + "-tab-list"; }, []);
    const getTabId = useCallback((index: number) => { return baseId + "-tab-" + index; }, []);
    const getPanelId = useCallback((index: number) => { return baseId + "-panel-" + index; }, []);

    // Used for the panels, not the tabs in the tablist.
    // Those are in useTabList itself.
    const { managedChildContext: managedChildrenContextPanels, managedChildrenReturn: panelChildrenReturn } = useManagedChildren<TabPanelInfo>({
        managedChildrenParameters: {

            onChildrenMountChange: useStableCallback<OnChildrenMountChange<number>>((m, u) => { reevaluateClosestFit(); })
        }
    });
    const { getChildren: getPanels } = panelChildrenReturn;
    const { changeIndex: changeVisiblePanel, getCurrentIndex: getVisibleIndex, reevaluateClosestFit } = useChildrenFlag({
        getChildren: panelChildrenReturn.getChildren,
        closestFit: false,
        initialIndex: null,
        getAt: useStableCallback((i) => { return (getPanels().getAt(i)?.getVisible() ?? false) }, []),
        setAt: useStableCallback((i, b) => { (getPanels().getAt(i)?.setVisible(b)); }, []),
        isValid: returnTrue,
        onIndexChange: null
    });

    //const { useRandomIdReferencerElement, useRandomIdSourceElement } = useRandomId({ randomId: { prefix: "aria-tabs-" }, managedChildren: { onAfterChildLayoutEffect: null, onChildrenMountChange: null } });

    const {
        propsInput,
        propsLabel,
        randomIdInputReturn,
        randomIdLabelReturn,
    } = useLabel<TabListElement, LabelElement>({
        labelParameters,
        randomIdInputParameters,
        randomIdLabelParameters,
    });


    /*const useTabListLabel = useCallback(() => {
        const { useLabelLabelProps } = useLabelLabel();
        function useTabListLabelProps(props: h.JSX.HTMLAttributes<LabelElement>) { return useLabelLabelProps(props); }
        return { useTabListLabelProps };
    }, [useLabelLabel]);*/
    const {
        props: listNavigationSingleSelectionProps,
        context,
        ...listNavRet1
    } = useCompleteListNavigation<TabListElement, TabElement, TabInfo<TabElement>>({
        linearNavigationParameters,
        rearrangeableChildrenParameters,
        rovingTabIndexParameters,
        singleSelectionParameters: { ...singleSelectionParameters, onSelectedIndexChange: useStableCallback<OnPassiveStateChange<number | null>>((i, p) => { osic?.(i, p); changeVisiblePanel(i); }) },
        sortableChildrenParameters,
        typeaheadNavigationParameters
    });

    /*useEffect(() => {
        changeVisiblePanel(singleSelectionParameters.se);
    }, [singleSelectionParameters.selectedIndex]);*/


    const { singleSelectionReturn: { setSelectedIndex } } = listNavRet1;


    const contextPanels = useStableObject({
        getVisibleIndex,
        getPanelId,
        getTabId,
        setSelectedIndex
    });

    const contextTabs = {
        changeVisiblePanel
    }

    return {
        managedChildrenContextPanels,

        contextPanels,
        contextTab: contextPanels,
        propsContainer: useMergedProps(listNavigationSingleSelectionProps, {
            role: "tablist",
            propsInput,
            "aria-orientation": orientation ?? "horizontal",
        } as {}),
        propsLabel
    }
}


export function useTab<TabElement extends Element>({ completeListNavigationChildParameters, childrenHaveFocusChildContext, managedChildContext, managedChildParameters, pressParameters: { onPressSync, ...pressParameters }, rovingTabIndexChildContext, singleSelectionChildParameters, singleSelectionContext, typeaheadNavigationChildContext, typeaheadNavigationChildParameters, tabContext }: UseTabParameters<TabElement>) {
    debugLog("useTab", managedChildParameters.index);
    const { props: listNavigationSingleSelectionChildProps, ...listNavRet2 } = useCompleteListNavigationChild({
        completeListNavigationChildParameters,
        childrenHaveFocusChildContext,
        managedChildContext,
        managedChildParameters,
        pressParameters: {
            onPressSync: (e) => { onPressSync?.(e); setSelectedIndex(managedChildParameters.index) },
            ...pressParameters
        },
        rovingTabIndexChildContext,
        singleSelectionChildParameters: { ariaPropName: "aria-selected", ...singleSelectionChildParameters },
        singleSelectionContext,
        typeaheadNavigationChildContext,
        typeaheadNavigationChildParameters,
    });
    const { singleSelectionChildReturn: { selected }, rovingTabIndexChildReturn: { tabbable } } = listNavRet2;
    const { getPanelId, getTabId, setSelectedIndex } = tabContext;

    const panelId = getPanelId(managedChildParameters.index);
    const tabId = getTabId(managedChildParameters.index);


    return {
        props: useMergedProps(listNavigationSingleSelectionChildProps, {
            "data-tabbable": tabbable.toString(),
            role: "tab",
            "aria-controls": panelId,
            id: tabId
        } as {}),
        ...listNavRet2
    }
}


export function useTabPanel<PanelElement extends Element>({ managedChildParameters, managedChildContext, panelsContext }: UseTabPanelParameters) {
    debugLog("useTabPanel", managedChildParameters.index);
    const { getVisibleIndex, getPanelId, getTabId } = panelsContext;
    //const [correspondingTabId, setCorrespondingTabId] = useState<string | null>(null);
    const [isVisible, setIsVisible, getIsVisible] = useState(getVisibleIndex() == managedChildParameters.index);
    const visibleRef = useRef<ChildFlagOperations>({ get: getIsVisible, set: setIsVisible, isValid: returnTrue });
    useManagedChild<TabPanelInfo>({ managedChildContext, managedChildParameters: { getVisible: getIsVisible, setVisible: setIsVisible, ...managedChildParameters } });
    const panelId = getPanelId(managedChildParameters.index);
    const tabId = getTabId(managedChildParameters.index);

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
}