import { createContext, VNode } from "preact";
import { useCallback, useContext } from "preact/hooks";
import { TabPanelsContext, TabsContext, useTab, useTabPanel, UseTabPanelParameters, UseTabPanelReturnType, UseTabParameters, UseTabReturnType, useTabs, UseTabsParameters, UseTabsReturnType } from "../use-tabs";
import { PartialExcept, useDefault } from "./util";

type Get<T, K extends keyof T> = T[K];
//type Get2<T, K extends keyof T, K2 extends keyof T[K]> = T[K][K2];

interface TabsPropsBase<TabContainerElement extends Element, TabElement extends Element, TabLabelElement extends Element> extends
    Get<UseTabsParameters<TabContainerElement, TabElement, TabLabelElement>, "labelParameters">,
    Get<UseTabsParameters<TabContainerElement, TabElement, TabLabelElement>, "linearNavigationParameters">,
    Get<UseTabsParameters<TabContainerElement, TabElement, TabLabelElement>, "rearrangeableChildrenParameters">,
    Get<UseTabsParameters<TabContainerElement, TabElement, TabLabelElement>, "rovingTabIndexParameters">,
    Get<UseTabsParameters<TabContainerElement, TabElement, TabLabelElement>, "singleSelectionParameters">,
    Get<UseTabsParameters<TabContainerElement, TabElement, TabLabelElement>, "sortableChildrenParameters">,
    Get<UseTabsParameters<TabContainerElement, TabElement, TabLabelElement>, "tabsParameters">,
    Get<UseTabsParameters<TabContainerElement, TabElement, TabLabelElement>, "typeaheadNavigationParameters"> {
}

interface TabPropsBase<TabElement extends Element> extends
    Get<UseTabParameters<TabElement>, "managedChildParameters">,
    Get<UseTabParameters<TabElement>, "pressParameters">,
    Get<UseTabParameters<TabElement>, "singleSelectionChildParameters">,
    Get<UseTabParameters<TabElement>, "sortableChildParameters">,
    Get<UseTabParameters<TabElement>, "rovingTabIndexChildParameters">,
    Get<UseTabParameters<TabElement>, "textContentParameters">,
    Get<UseTabParameters<TabElement>, "completeListNavigationChildParameters"> {
}

interface TabPanelPropsBase extends
    Get<UseTabPanelParameters, "managedChildParameters"> {
}

export interface TabsProps<TabContainerElement extends Element, TabElement extends Element, TabLabelElement extends Element> extends PartialExcept<TabsPropsBase<TabContainerElement, TabElement, TabLabelElement>, "orientation" | "groupingType" | "ariaLabel"> {
    render(info: UseTabsReturnType<TabContainerElement, TabElement, TabLabelElement>): VNode<any>;
}

export interface TabProps<TabElement extends Element> extends PartialExcept<TabPropsBase<TabElement>, "index" | "getSortValue"> {
    render(info: UseTabReturnType<TabElement>): VNode<any>;
}

export interface TabPanelProps<PanelElement extends Element> extends PartialExcept<TabPanelPropsBase, "index"> {
    render(info: UseTabPanelReturnType<PanelElement>): VNode<any>;
}

const TabsContext = createContext<TabsContext<any, any, any>>(null!);
const TabPanelsContext = createContext<TabPanelsContext<any>>(null!);

export function Tabs<TabContainerElement extends Element, TabElement extends Element, TabLabelElement extends Element>({
    ariaLabel,
    collator,
    compare,
    disableArrowKeys,
    disableHomeEndKeys,
    getIndex,
    initiallySelectedIndex,
    navigatePastEnd,
    navigatePastStart,
    noTypeahead,
    onSelectedIndexChange,
    onTabbableIndexChange,
    orientation,
    pageNavigationSize,
    groupingType,
    untabbable,
    typeaheadTimeout,
    role,
    render
}: TabsProps<TabContainerElement, TabElement, TabLabelElement>) {
    const info = useTabs<TabContainerElement, TabElement, TabLabelElement>({
        labelParameters: { ariaLabel },
        linearNavigationParameters: {
            disableArrowKeys: useDefault("disableArrowKeys", disableArrowKeys),
            disableHomeEndKeys: useDefault("disableHomeEndKeys", disableHomeEndKeys),
            navigatePastEnd: navigatePastEnd ?? "wrap",
            navigatePastStart: navigatePastStart ?? "wrap",
            pageNavigationSize: useDefault("pageNavigationSize", pageNavigationSize)
        },
        rearrangeableChildrenParameters: { getIndex: useDefault("getIndex", getIndex) },
        rovingTabIndexParameters: {
            onTabbableIndexChange: onTabbableIndexChange ?? null,
            untabbable: untabbable ?? false
        },
        singleSelectionParameters: { initiallySelectedIndex: initiallySelectedIndex ?? 0, onSelectedIndexChange: onSelectedIndexChange ?? null },
        sortableChildrenParameters: { compare: compare ?? null },
        tabsParameters: { orientation, groupingType, role },
        typeaheadNavigationParameters: {
            collator: useDefault("collator", collator),
            noTypeahead: useDefault("noTypeahead", noTypeahead),
            typeaheadTimeout: useDefault("typeaheadTimeout", typeaheadTimeout)
        }
    });

    const { contextPanels, contextTabs } = info;


    return (
        <TabsContext.Provider value={contextTabs}>
            <TabPanelsContext.Provider value={contextPanels}>
                {render(info)}
            </TabPanelsContext.Provider>
        </TabsContext.Provider>
    )
}

export function Tab<E extends Element>({
    disabled,
    exclude,
    focusSelf,
    hidden,
    index,
    onPressSync,
    getText,
    getSortValue,
    render
}: TabProps<E>) {
    const context = useContext(TabsContext);
    console.assert(context != null, `This Tab is not contained within a Tabs component`);
    const focusSelfDefault = useCallback((e: any) => { e?.focus(); }, []);
    const info = useTab<E>({
        completeListNavigationChildParameters: {},
        context,
        rovingTabIndexChildParameters: { hidden: hidden ?? false },
        sortableChildParameters: { getSortValue },
        managedChildParameters: { index },
        pressParameters: { exclude, focusSelf: focusSelf ?? focusSelfDefault, onPressSync },
        singleSelectionChildParameters: { disabled: disabled ?? false, selectionMode: "focus" },
        textContentParameters: { getText: useDefault("getText", getText) }
    });
    return render(info);
}

export function TabPanel<E extends Element>({
    index,
    render
}: TabPanelProps<E>) {
    const context = useContext(TabPanelsContext);
    const info = useTabPanel<E>({
        context,
        managedChildParameters: { index }
    });
    return render(info);
}


/*

export interface TabsProps<LabelElement extends Element, ListElement extends Element, TabElement extends Element, TC, PC, TK extends string> extends
    Get<UseTabListParameters<TabElement, TC, TK>, "linearNavigation">,
    Get<UseTabListParameters<TabElement, TC, TK>, "listNavigation">,
    Get<UseTabListParameters<TabElement, TC, TK>, "managedChildren">,
    Get<UseTabListParameters<TabElement, TC, TK>, "rovingTabIndex">,
    Get<UseTabListParameters<TabElement, TC, TK>, "singleSelection">,
    Get<UseTabListParameters<TabElement, TC, TK>, "typeaheadNavigation">,
    Get<UseTabListParameters<TabElement, TC, TK>, "childrenHaveFocus">,
    //Get<UseTabListParameters<TabElement, TC, TK>, >,
    Get2<UseTabsParameters, "tabPanels", "managedChildren"> {
    ref?: Ref<UseTabsReturnTypeInfo<PC>>;
    render(tabListInfo: UseTabListReturnTypeInfo<TabElement, TC>, tabsInfo: UseTabsReturnTypeInfo<PC>, modifyLabelProps: PropModifier<LabelElement>, modifyTabListProps: PropModifier<ListElement>): VNode<any>;
}

export interface TabProps<TabElement extends Element, TC, TK extends string> extends Get<UseTabParameters<TabElement, TC, TK, TC>, "listNavigation">,
    Get<UseTabParameters<TabElement, TC, TK, TC>, "managedChild">,
    UseHasFocusParameters<TabElement>,
    Get<UseTabParameters<TabElement, TC, TK, TC>, "rovingTabIndex">,
    Get<UseTabParameters<TabElement, TC, TK, TC>, "singleSelection"> {
    subInfo: Get<UseTabParameters<TabElement, TC, TK, TC>, "subInfo">;
    ref?: Ref<UseTabReturnTypeInfo<TabElement>>;
    render(info: UseTabReturnTypeInfo<TabElement>, modifyListItem: PropModifier<TabElement>): VNode<any>;
}

export interface TabPanelProps<TabPanelElement extends Element, PC, PK extends string> extends Get<UseTabPanelParameters<PC, PK, PC>, "managedChild"> {
    subInfo: Get<UseTabPanelParameters<PC, PK, PC>, "subInfo">;
    ref?: Ref<UseTabPanelReturnTypeInfo>;
    render(info: UseTabPanelReturnTypeInfo, modifyTabPanelProps: PropModifier<TabPanelElement>): VNode;
}

const TabContext = createContext<UseTab<any, any, any>>(null!);
const TabPanelContext = createContext<UseTabPanel<any, any, any>>(null!);

export const Tabs = memoForwardRef(function Tabs<LabelElement extends Element, ListElement extends Element, TabElement extends Element, TabPanelElement extends Element, TC = undefined, PC = undefined, TK extends string = never, PK extends string = never>({
    selectedIndex,
    selectionMode,
    collator,
    disableArrowKeys,
    disableHomeEndKeys,
    indexDemangler,
    indexMangler,
    navigationDirection,
    noTypeahead,
    onAfterChildLayoutEffect,
    onChildrenMountChange,
    onTabbableIndexChange,
    onTabbableRender,
    typeaheadTimeout,
    onAllLostFocus,
    onAnyGainedFocus,
    setSelectedIndex,
    render
}: TabsProps<LabelElement, ListElement, TabElement, TC, PC, TK>, ref?: Ref<any>) {
    const {
        useTabList,
        useTabListLabel,
        useTabPanel,
        ...tabsInfo
    } = useTabs<ListElement, TabElement, TabPanelElement, LabelElement, TC, PC, TK, PK>({
        tabPanels: {
            managedChildren: { onAfterChildLayoutEffect, onChildrenMountChange }
        }
    });

    useImperativeHandle(ref!, () => tabsInfo);

    const { useTab, useTabListProps, ...tablistInfo } = useTabList({
        childrenHaveFocus: { onAllLostFocus, onAnyGainedFocus },
        linearNavigation: { disableArrowKeys, disableHomeEndKeys, navigationDirection },
        listNavigation: { indexDemangler, indexMangler },
        managedChildren: { onAfterChildLayoutEffect, onChildrenMountChange },
        rovingTabIndex: { onTabbableIndexChange, onTabbableRender },
        singleSelection: { selectedIndex, selectionMode, setSelectedIndex },
        typeaheadNavigation: { collator, noTypeahead, typeaheadTimeout }
    });
    const { useTabListLabelProps } = useTabListLabel({});

    return (
        <TabContext.Provider value={useTab}>
            <TabPanelContext.Provider value={useTabPanel}>
                {render(tablistInfo, tabsInfo, useTabListLabelProps, useTabListProps)}
            </TabPanelContext.Provider>
        </TabContext.Provider>
    )
})

export const Tab = memoForwardRef(function Tab<TabElement extends Element, TC = undefined, TK extends string = never>({ index, text, flags, focusSelf, hidden, getDocument, getWindow, onActiveElementChange, onElementChange, onFocusedChanged, onFocusedInnerChanged, onLastActiveElementChange, onLastFocusedChanged, onLastFocusedInnerChanged, onMount, onUnmount, onWindowFocusedChange, render, subInfo, noModifyTabIndex, unselectable }: TabProps<TabElement, TC, TK>, ref?: Ref<any>) {
    const { useTabProps, ...tabInfo } = useContext(TabContext)({
        listNavigation: { text },
        singleSelection: { unselectable, focusSelf },
        managedChild: { index, flags },
        rovingTabIndex: { focusSelf, hidden, noModifyTabIndex },
        hasFocus: { getDocument, getWindow, onActiveElementChange, onElementChange, onFocusedChanged, onFocusedInnerChanged, onLastActiveElementChange, onLastFocusedChanged, onLastFocusedInnerChanged, onMount, onUnmount, onWindowFocusedChange },
        subInfo
    });

    useImperativeHandle(ref!, () => tabInfo);

    return render(tabInfo, useTabProps)
})

export const TabPanel = memoForwardRef(function TabPanel<TabPanelElement extends Element, PC = undefined, PK extends string = never>({ index, flags, render, subInfo }: TabPanelProps<TabPanelElement, PC, PK>, ref?: Ref<any>) {
    const { useTabPanelProps, ...tabPanelInfo } = (useContext(TabPanelContext) as UseTabPanel<TabPanelElement, PC, PK>)({ managedChild: { index, flags }, subInfo });

    useImperativeHandle(ref!, () => tabPanelInfo);

    return render(tabPanelInfo, useTabPanelProps)
})

export function defaultRenderTabs<LabelElement extends Element, ListElement extends Element, TabElement extends Element, TC, PC>({ tagLabel, tagList, makePropsLabel, makePropsList, panels }: { panels: VNode[], tagLabel: ElementToTag<LabelElement>, tagList: ElementToTag<ListElement>, makePropsLabel: (infoTabs: UseTabsReturnTypeInfo<PC>, infoList: UseTabListReturnTypeInfo<TabElement, TC>) => h.JSX.HTMLAttributes<LabelElement>, makePropsList: (infoTabs: UseTabsReturnTypeInfo<PC>, infoList: UseTabListReturnTypeInfo<TabElement, TC>) => h.JSX.HTMLAttributes<ListElement> }) {
    return function (tablistInfo: UseTabListReturnTypeInfo<TabElement, TC>, tabsInfo: UseTabsReturnTypeInfo<PC>, modifyLabelProps: PropModifier<LabelElement>, modifyListProps: PropModifier<ListElement>) {
        const label = createElement(tagLabel as never, modifyLabelProps(makePropsLabel(tabsInfo, tablistInfo)))
        const list = createElement(tagList as never, modifyListProps(makePropsList(tabsInfo, tablistInfo)));
        return (
            <>
                {label}
                {list}
                {panels}
            </>
        )
    }
}

export function defaultRenderTab<TabElement extends Element>({ makePropsTab, tagTab }: { tagTab: ElementToTag<TabElement>, makePropsTab: (info: UseTabReturnTypeInfo<TabElement>) => h.JSX.HTMLAttributes<TabElement> }) {
    return function (tabInfo: UseTabReturnTypeInfo<TabElement>, modifyTabProps: PropModifier<TabElement>) {
        return createElement(tagTab as never, modifyTabProps(makePropsTab(tabInfo)));
    }
}

export function defaultRenderTabPanel<TabPanelElement extends Element>({ makePropsTabPanel, tagTabPanel }: { tagTabPanel: ElementToTag<TabPanelElement>, makePropsTabPanel: (info: UseTabPanelReturnTypeInfo) => h.JSX.HTMLAttributes<TabPanelElement> }) {
    return function (tabPanelInfo: UseTabPanelReturnTypeInfo, modifyTabPanelProps: PropModifier<TabPanelElement>) {
        return createElement(tagTabPanel as never, modifyTabPanelProps(makePropsTabPanel(tabPanelInfo)));
    }
}
*/