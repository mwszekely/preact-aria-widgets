import { createContext, createElement, h, VNode } from "preact";
import { UseHasFocusParameters } from "preact-prop-helpers";
import { memo } from "preact/compat";
import { useContext } from "preact/hooks";
import { ElementToTag, PropModifier } from "props";
import { UseTab, UseTabListParameters, UseTabListReturnTypeInfo, UseTabPanel, UseTabPanelParameters, UseTabPanelReturnTypeInfo, UseTabParameters, UseTabReturnTypeInfo, useTabs, UseTabsParameters, UseTabsReturnTypeInfo } from "../use-tabs";

type Get<T, K extends keyof T> = T[K];
type Get2<T, K extends keyof T, K2 extends keyof T[K]> = T[K][K2];

export interface TabsProps<LabelElement extends Element, ListElement extends Element, TabElement extends Element> extends
    Get<UseTabListParameters<TabElement>, "linearNavigation">,
    Get<UseTabListParameters<TabElement>, "listNavigation">,
    Get<UseTabListParameters<TabElement>, "managedChildren">,
    Get<UseTabListParameters<TabElement>, "rovingTabIndex">,
    Get<UseTabListParameters<TabElement>, "singleSelection">,
    Get<UseTabListParameters<TabElement>, "typeaheadNavigation">,
    Get<UseTabListParameters<TabElement>, "childrenHaveFocus">,
    Get<UseTabListParameters<TabElement>, "tabs">,
    Get2<UseTabsParameters, "tabPanels", "managedChildren"> {
    render(tabsInfo: UseTabsReturnTypeInfo & UseTabListReturnTypeInfo<TabElement>, modifyLabelProps: PropModifier<LabelElement>, modifyTabListProps: PropModifier<ListElement>): VNode<any>;
}

export interface TabProps<TabElement extends Element> extends Get<UseTabParameters<TabElement>, "listNavigation">,
    Get<UseTabParameters<TabElement>, "managedChild">,
    UseHasFocusParameters<TabElement>,
    Get<UseTabParameters<TabElement>, "rovingTabIndex"> {
    // tagListItem: ElementToTag<ListboxItemElement>;
    // propsListItem: (args: ListboxSinglePropsDerivedFrom) => h.JSX.HTMLAttributes<ListboxItemElement>;
    render(info: UseTabReturnTypeInfo<TabElement>, modifyListItem: PropModifier<TabElement>): VNode<any>;
}

export interface TabPanelProps<TabPanelElement extends Element> extends Get<UseTabPanelParameters, "managedChild"> {
    render(info: UseTabPanelReturnTypeInfo, modifyTabPanelProps: PropModifier<TabPanelElement>): VNode;
}

const TabContext = createContext<UseTab<any>>(null!);
const TabPanelContext = createContext<UseTabPanel<any>>(null!);

export const Tabs = memo(function Tabs<LabelElement extends Element, ListElement extends Element, TabElement extends Element, TabPanelElement extends Element>({
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
    onSelectedIndexChange,
    render
}: TabsProps<LabelElement, ListElement, TabElement>) {
    const {
        useTabList,
        useTabListLabel,
        useTabPanel,
        ...tabsInfo
    } = useTabs<ListElement, TabElement, TabPanelElement, LabelElement>({
        tabPanels: {
            managedChildren: { onAfterChildLayoutEffect, onChildrenMountChange }
        }
    });

    const { useTab, useTabListProps, ...tablistInfo } = useTabList({
        childrenHaveFocus: { onAllLostFocus, onAnyGainedFocus },
        tabs: { onSelectedIndexChange },
        linearNavigation: { disableArrowKeys, disableHomeEndKeys, navigationDirection },
        listNavigation: { indexDemangler, indexMangler },
        managedChildren: { onAfterChildLayoutEffect, onChildrenMountChange },
        rovingTabIndex: { onTabbableIndexChange, onTabbableRender },
        singleSelection: { selectedIndex, selectionMode },
        typeaheadNavigation: { collator, noTypeahead, typeaheadTimeout }
    });
    const { useTabListLabelProps } = useTabListLabel({});

    return (
        <TabContext.Provider value={useTab}>
            <TabPanelContext.Provider value={useTabPanel}>
                {render({ ...tabsInfo, ...tablistInfo }, useTabListLabelProps, useTabListProps)}
            </TabPanelContext.Provider>
        </TabContext.Provider>
    )
})

export const Tab = memo(function Tab<TabElement extends Element>({ index, text, flags, focusSelf, hidden, getDocument, getWindow, onActiveElementChange, onElementChange, onFocusedChanged, onFocusedInnerChanged, onLastActiveElementChange, onLastFocusedChanged, onLastFocusedInnerChanged, onMount, onUnmount, onWindowFocusedChange, render }: TabProps<TabElement>) {
    const { useTabProps, ...tabInfo } = useContext(TabContext)({
        listNavigation: { text },
        managedChild: { index, flags },
        rovingTabIndex: { focusSelf, hidden },
        hasFocus: { getDocument, getWindow, onActiveElementChange, onElementChange, onFocusedChanged, onFocusedInnerChanged, onLastActiveElementChange, onLastFocusedChanged, onLastFocusedInnerChanged, onMount, onUnmount, onWindowFocusedChange }
    });

    return render(tabInfo, useTabProps)
})

export const TabPanel = memo(function TabPanel<TabPanelElement extends Element>({ index, flags, render }: TabPanelProps<TabPanelElement>) {
    const { useTabPanelProps, ...tabPanelInfo } = useContext(TabPanelContext)({ managedChild: { index, flags } });

    return render(tabPanelInfo, useTabPanelProps)
})

export function defaultRenderTabs<LabelElement extends Element, ListElement extends Element>({ tagLabel, tagList, makePropsLabel, makePropsList, panels }: { panels: VNode[], tagLabel: ElementToTag<LabelElement>, tagList: ElementToTag<ListElement>, makePropsLabel: (info: UseTabsReturnTypeInfo) => h.JSX.HTMLAttributes<LabelElement>, makePropsList: (info: UseTabsReturnTypeInfo) => h.JSX.HTMLAttributes<ListElement> }) {
    return function (tabsInfo: UseTabsReturnTypeInfo & UseTabListReturnTypeInfo<any>, modifyLabelProps: PropModifier<LabelElement>, modifyListProps: PropModifier<ListElement>) {
        const label = createElement(tagLabel as never, modifyLabelProps(makePropsLabel(tabsInfo)))
        const list = createElement(tagList as never, modifyListProps(makePropsList(tabsInfo)));
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
