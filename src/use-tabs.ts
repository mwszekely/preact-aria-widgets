import { h } from "preact";
import { CompleteListNavigationContext, generateRandomId, ManagedChildInfo, OnPassiveStateChange, PassiveStateUpdater, returnTrue, useCompleteListNavigation, useCompleteListNavigationChild, UseCompleteListNavigationChildParameters, UseCompleteListNavigationChildReturnType, UseCompleteListNavigationParameters, UseCompleteListNavigationReturnType, useListNavigationSingleSelection, UseListNavigationSingleSelectionSortableChildInfo, useManagedChild, useManagedChildren, UseManagedChildrenContext, UseManagedChildrenReturnType, useMergedProps, usePress, UseSortableChildrenParameters, useStableCallback, useStableObject, useState } from "preact-prop-helpers";
import { OnChildrenMountChange, useChildrenFlag, UseManagedChildParameters } from "preact-prop-helpers";
import { } from "preact-prop-helpers";
import { StateUpdater, useCallback } from "preact/hooks";
import { LabelPosition, useLabel, UseLabelParameters } from "./use-label";
import { debugLog, EventDetail, overwriteWithWarning } from "./props";
import { } from "preact-prop-helpers";
import { UseListboxParameters } from "./use-listbox";


interface TabPanelInfo extends ManagedChildInfo<number> {
    getVisible(): boolean;
    setVisible: StateUpdater<boolean>;
}

interface TabInfo<E extends Element> extends UseListNavigationSingleSelectionSortableChildInfo<E> {}


export type TabsChangeEvent<E extends Element> = { [EventDetail]: { selectedIndex: number } } & Pick<h.JSX.TargetedEvent<E>, "target" | "currentTarget">;

export interface UseTabsParameters<TabContainerElement extends Element, TabElement extends Element, TabLabelElement extends Element> extends UseLabelParameters<LabelPosition, TabContainerElement, TabLabelElement>, UseTabListParameters<TabContainerElement, TabElement> {
    //tabPanels: UseManagedChildrenParameters<TabPanelInfo>;
    tabsParameters: {
        orientation: "horizontal" | "vertical";
        role?: "tablist" | string;
        type: Pick<UseListboxParameters<TabContainerElement, TabElement, TabLabelElement, TabInfo<TabElement>>["listboxParameters"], "type">["type"]
    }
}
export interface UseTabParameters<TabElement extends Element> extends Omit<UseCompleteListNavigationChildParameters<TabElement, TabInfo<TabElement>>, "singleSelectionChildParameters"> {
    singleSelectionChildParameters: Omit<UseCompleteListNavigationChildParameters<TabElement, TabInfo<TabElement>>["singleSelectionChildParameters"], "ariaPropName">;
    context: TabsContext<any, TabElement, TabInfo<TabElement>>;
    // hasFocus: UseHasFocusParameters<E>;
}

export interface UseTabPanelParameters extends Omit<UseManagedChildParameters<TabPanelInfo>, "managedChildParameters"> {
    managedChildParameters: Omit<UseManagedChildParameters<TabPanelInfo>["managedChildParameters"], "getVisible" | "setVisible">
    context: TabPanelsContext<TabPanelInfo>;
}

export interface TabsContext<ParentElement extends Element, ChildElement extends Element, M extends TabInfo<ChildElement>> extends CompleteListNavigationContext<ParentElement, ChildElement, M> {
    tabsContext: TC;
}

export interface TabPanelsContext<M extends TabPanelInfo> extends UseManagedChildrenContext<M> {
    tabPanelContext: TC;
}

interface TC {
    getVisibleIndex: () => number | null;
    getPanelId: (index: number) => string;
    getTabId: (index: number) => string;
    setSelectedIndex: PassiveStateUpdater<number | null>;
}

export interface UseTabReturnType<TabElement extends Element> extends UseCompleteListNavigationChildReturnType<TabElement, TabInfo<TabElement>> { }


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
    tabPanelReturn: { visible: boolean; getVisible: () => boolean; };
}
/*export interface UseTabPanelReturnTypeWithHooks<LabelElement extends Element> extends UseTabPanelReturnTypeInfo {
    useTabPanelProps: (props: h.JSX.HTMLAttributes<LabelElement>) => h.JSX.HTMLAttributes<LabelElement>;
}*/


export interface UseTabListLabelReturnTypeInfo { }
export interface UseTabLabelReturnTypeWithHooks<LabelElement extends Element> extends UseTabListLabelReturnTypeInfo {
    useTabListLabelProps: (props: h.JSX.HTMLAttributes<LabelElement>) => h.JSX.HTMLAttributes<LabelElement>;
}

export interface UseTabsReturnType<TabContainerElement extends Element, TabElement extends Element, LabelElement extends Element> {
    propsContainer: h.JSX.HTMLAttributes<TabContainerElement>;
    propsLabel: h.JSX.HTMLAttributes<LabelElement>;
    contextPanels: TabPanelsContext<TabPanelInfo>; //{ tabPanelContext: TabPanelsContext<TabPanelInfo> } & UseManagedChildrenContext<TabPanelInfo>;
    contextTabs: TabsContext<TabContainerElement, TabElement, TabInfo<TabElement>>; //{ tabContext: TabsContext<TabContainerElement, TabElement, TabInfo<TabElement>> } & CompleteListNavigationContext<TabContainerElement, TabElement, TabInfo<TabElement>>;
    //contextPanels: TabPanelContext;
    //contextTab: TabContext;
    // managedChildrenContextPanels: UseManagedChildrenReturnType<TabPanelInfo>["managedChildContext"];
}

/*export interface UseTabsReturnTypeWithHooks<TabContainerElement extends Element, TabElement extends Element, PanelElement extends Element, LabelElement extends Element, TC, PC, TK extends string, PK extends string> extends UseTabsReturnTypeInfo<PC> {
    useTabList: UseTabList<TabContainerElement, TabElement, TC, TK>;
    useTabPanel: UseTabPanel<PanelElement, PC, PK>;
    useTabListLabel: UseTabListLabel<LabelElement>;
}*/

export type UseTab<_TabContainerElement extends Element, TabElement extends Element> = (args: UseTabParameters<TabElement>) => UseTabReturnType<TabElement>;
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

export function useTabs<TabListElement extends Element, TabElement extends Element, LabelElement extends Element>({
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
}: UseTabsParameters<TabListElement, TabElement, LabelElement>): UseTabsReturnType<TabListElement, TabElement, LabelElement> {

    debugLog("useTabs");


    const baseId = generateRandomId("aria-tabs-");
    //const getTabListId = useCallback(() => { return baseId + "-tab-list"; }, []);
    const getTabId = useCallback((index: number) => { return baseId + "-tab-" + index; }, []);
    const getPanelId = useCallback((index: number) => { return baseId + "-panel-" + index; }, []);

    // Used for the panels, not the tabs in the tablist.
    // Those are in useTabList itself.
    const { context: managedChildContext, managedChildrenReturn: panelChildrenReturn } = useManagedChildren<TabPanelInfo>({
        managedChildrenParameters: {

            onChildrenMountChange: useStableCallback<OnChildrenMountChange<number>>((_m, _u) => { reevaluateClosestFit(); })
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

    const {
        propsInput,
        propsLabel,
        randomIdInputReturn: { id: _inputId },
        randomIdLabelReturn: { id: _labelId },
    } = useLabel<LabelPosition, TabListElement, LabelElement>({
        labelParameters,
        randomIdInputParameters,
        randomIdLabelParameters,
    });


    const {
        props: listNavigationSingleSelectionProps,
        context,
        ...listNavRet1
    } = useCompleteListNavigation<TabListElement, TabElement, TabInfo<TabElement>>({
        linearNavigationParameters,
        rovingTabIndexParameters,
        singleSelectionParameters: { ...singleSelectionParameters, onSelectedIndexChange: useStableCallback<OnPassiveStateChange<number | null>>((i, p) => { osic?.(i, p); changeVisiblePanel(i); }) },
        typeaheadNavigationParameters,
        rearrangeableChildrenParameters,
        sortableChildrenParameters
    });


    const { singleSelectionReturn: { setSelectedIndex } } = listNavRet1;

    return {
        contextPanels: useStableObject({
            ...managedChildContext,
            tabPanelContext: useStableObject({
                getPanelId,
                getTabId,
                getVisibleIndex,
                setSelectedIndex
            })
        }),
        contextTabs: useStableObject({
            ...context,
            tabsContext: useStableObject({ getTabId, getPanelId, getVisibleIndex, setSelectedIndex })
        }),
        propsContainer: useMergedProps(listNavigationSingleSelectionProps, {
            role: (role ?? "tablist"),
            propsInput,
            "aria-orientation": orientation ?? "horizontal",
        } as {}),
        propsLabel
    }
}


export function useTab<TabElement extends Element>({ completeListNavigationChildParameters, managedChildParameters, pressParameters: { onPressSync, ...pressParameters }, singleSelectionChildParameters, typeaheadNavigationChildParameters, context }: UseTabParameters<TabElement>) {
    debugLog("useTab", managedChildParameters.index);
    const { props: listNavigationSingleSelectionChildProps, ...listNavRet2 } = useCompleteListNavigationChild({
        completeListNavigationChildParameters,
        context,
        managedChildParameters,
        pressParameters: {
            onPressSync: (e) => { onPressSync?.(e); setSelectedIndex(managedChildParameters.index) },
            ...pressParameters
        },
        singleSelectionChildParameters: { ariaPropName: "aria-selected", ...singleSelectionChildParameters },
        typeaheadNavigationChildParameters,
    });
    const { singleSelectionChildReturn: { selected }, rovingTabIndexChildReturn: { tabbable } } = listNavRet2;
    const { getPanelId, getTabId, setSelectedIndex } = context.tabsContext;

    const panelId = getPanelId(managedChildParameters.index);
    const tabId = getTabId(managedChildParameters.index);


    return {
        props: useMergedProps(listNavigationSingleSelectionChildProps, {
            "data-tabbable": tabbable.toString(),
            "data-selected": selected.toString(),
            role: "tab",
            "aria-controls": panelId,
            id: tabId
        } as {}),
        ...listNavRet2
    }
}


export function useTabPanel<PanelElement extends Element>({ managedChildParameters, context }: UseTabPanelParameters): UseTabPanelReturnType<PanelElement> {
    debugLog("useTabPanel", managedChildParameters.index);
    const { tabPanelContext: { getVisibleIndex, getPanelId, getTabId } } = context;
    //const [correspondingTabId, setCorrespondingTabId] = useState<string | null>(null);
    const [isVisible, setIsVisible, getIsVisible] = useState(getVisibleIndex() == managedChildParameters.index);
    //const visibleRef = useRef<ChildFlagOperations>({ get: getIsVisible, set: setIsVisible, isValid: returnTrue });
    useManagedChild<TabPanelInfo>({ context, managedChildParameters: { getVisible: getIsVisible, setVisible: setIsVisible, ...managedChildParameters } });
    const panelId = getPanelId(managedChildParameters.index);
    const tabId = getTabId(managedChildParameters.index);


    return {
        props: useMergedProps<PanelElement>({
            role: "tabpanel",
            "aria-labelledby": tabId,
            id: panelId,
            inert: !isVisible
        } as {}),
        tabPanelReturn: {
            visible: isVisible,
            getVisible: getIsVisible
        }
    }
}