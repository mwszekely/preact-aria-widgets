import { createContext, createElement, h, VNode } from "preact";
import { UseHasFocusParameters } from "preact-prop-helpers";
import { useContext } from "preact/hooks";
import { ElementToTag, PropModifier } from "props";
import { UseAriaTab, UseAriaTabListReturnTypeInfo, UseAriaTabPanel, UseAriaTabPanelParameters, UseAriaTabPanelReturnTypeInfo, UseAriaTabParameters, UseAriaTabReturnTypeInfo, useAriaTabs, UseAriaTabsParameters, UseAriaTabsReturnTypeInfo } from "../use-tabs";

type Get<T, K extends keyof T> = T[K];
type Get2<T, K extends keyof T, K2 extends keyof T[K]> = T[K][K2];

export interface TabsProps<LabelElement extends Element, ListElement extends Element, TabElement extends Element> extends
    Get2<UseAriaTabsParameters, "tabList", "linearNavigation">,
    Get2<UseAriaTabsParameters, "tabList", "listNavigation">,
    Get2<UseAriaTabsParameters, "tabList", "managedChildren">,
    Get2<UseAriaTabsParameters, "tabList", "rovingTabIndex">,
    Get2<UseAriaTabsParameters, "tabList", "singleSelection">,
    Get2<UseAriaTabsParameters, "tabList", "typeaheadNavigation">,
    Get2<UseAriaTabsParameters, "tabList", "childrenHaveFocus">,
    Get2<UseAriaTabsParameters, "tabPanels", "managedChildren"> {
    render(tabsInfo: UseAriaTabsReturnTypeInfo & UseAriaTabListReturnTypeInfo<TabElement>, modifyLabelProps: PropModifier<LabelElement>, modifyTabListProps: PropModifier<ListElement>): VNode<any>;
}

export interface TabProps<TabElement extends Element> extends Get<UseAriaTabParameters<TabElement>, "listNavigation">,
    Get<UseAriaTabParameters<TabElement>, "managedChild">,
    UseHasFocusParameters<TabElement>,
    Get<UseAriaTabParameters<TabElement>, "rovingTabIndex"> {
    // tagListItem: ElementToTag<ListboxItemElement>;
    // propsListItem: (args: AriaListboxSinglePropsDerivedFrom) => h.JSX.HTMLAttributes<ListboxItemElement>;
    render(info: UseAriaTabReturnTypeInfo<TabElement>, modifyListItem: PropModifier<TabElement>): VNode<any>;
}

export interface TabPanelProps<TabPanelElement extends Element> extends Get<UseAriaTabPanelParameters, "managedChild"> {
    render(info: UseAriaTabPanelReturnTypeInfo, modifyTabPanelProps: PropModifier<TabPanelElement>): VNode;
}

const TabContext = createContext<UseAriaTab<any>>(null!);
const TabPanelContext = createContext<UseAriaTabPanel<any>>(null!);

export function Tabs<LabelElement extends Element, ListElement extends Element, TabElement extends Element, TabPanelElement extends Element>({
    selectedIndex,
    collator,
    disableArrowKeys,
    disableHomeEndKeys,
    indexDemangler,
    indexMangler,
    initialIndex,
    navigationDirection,
    noTypeahead,
    onAfterChildLayoutEffect,
    onChildrenMountChange,
    onTabbableIndexChange,
    onTabbableRender,
    typeaheadTimeout,
    onAllLostFocus,
    onAnyGainedFocus,
    render
}: TabsProps<LabelElement, ListElement, TabElement>) {
    const {
        useAriaTabList,
        useAriaTabListLabel,
        useAriaTabPanel,
        ...tabsInfo
    } = useAriaTabs<ListElement, TabElement, TabPanelElement, LabelElement>({
        tabList: {
            linearNavigation: { disableArrowKeys, disableHomeEndKeys, navigationDirection },
            listNavigation: { indexDemangler, indexMangler },
            managedChildren: { onAfterChildLayoutEffect, onChildrenMountChange },
            rovingTabIndex: { initialIndex, onTabbableIndexChange, onTabbableRender },
            singleSelection: { selectedIndex },
            typeaheadNavigation: { collator, noTypeahead, typeaheadTimeout },
            childrenHaveFocus: { onAllLostFocus, onAnyGainedFocus }
        },
        tabPanels: {
            managedChildren: { onAfterChildLayoutEffect, onChildrenMountChange }
        }
    });

    const { useAriaTab, useAriaTabListProps, ...tablistInfo } = useAriaTabList({ childrenHaveFocus: { onAllLostFocus, onAnyGainedFocus } });
    const { useAriaTabListLabelProps } = useAriaTabListLabel({})


    return (
        <TabContext.Provider value={useAriaTab}>
            <TabPanelContext.Provider value={useAriaTabPanel}>
                {render({ ...tabsInfo, ...tablistInfo }, useAriaTabListLabelProps, useAriaTabListProps)}
            </TabPanelContext.Provider>
        </TabContext.Provider>
    )
}

export function Tab<TabElement extends Element>({ index, text, blurSelf, flags, focusSelf, hidden, getDocument, getWindow, onActiveElementChange, onElementChange, onFocusedChanged, onFocusedInnerChanged, onLastActiveElementChange, onLastFocusedChanged, onLastFocusedInnerChanged, onMount, onUnmount, onWindowFocusedChange, render }: TabProps<TabElement>) {
    const { useAriaTabProps, ...tabInfo } = useContext(TabContext)({ listNavigation: { text }, managedChild: { index, flags }, rovingTabIndex: { blurSelf, focusSelf, hidden }, hasFocus: { getDocument, getWindow, onActiveElementChange, onElementChange, onFocusedChanged, onFocusedInnerChanged, onLastActiveElementChange, onLastFocusedChanged, onLastFocusedInnerChanged, onMount, onUnmount, onWindowFocusedChange } });

    return render(tabInfo, useAriaTabProps)
}

export function TabPanel<TabPanelElement extends Element>({ index, flags, render }: TabPanelProps<TabPanelElement>) {
    const { useAriaTabPanelProps, ...tabPanelInfo } = useContext(TabPanelContext)({ managedChild: { index, flags } });

    return render(tabPanelInfo, useAriaTabPanelProps)
}

export function defaultRenderTabs<LabelElement extends Element, ListElement extends Element>({ tagLabel, tagList, makePropsLabel, makePropsList }: { tagLabel: ElementToTag<LabelElement>, tagList: ElementToTag<ListElement>, makePropsLabel: (info: UseAriaTabsReturnTypeInfo) => h.JSX.HTMLAttributes<LabelElement>, makePropsList: (info: UseAriaTabsReturnTypeInfo) => h.JSX.HTMLAttributes<ListElement> }) {
    return function (tabsInfo: UseAriaTabsReturnTypeInfo & UseAriaTabListReturnTypeInfo<any>, modifyLabelProps: PropModifier<LabelElement>, modifyListProps: PropModifier<ListElement>) {
        const label = createElement(tagLabel as never, modifyLabelProps(makePropsLabel(tabsInfo)))
        const list = createElement(tagList as never, modifyListProps(makePropsList(tabsInfo)));
        return (
            <>
                {label}
                {list}
            </>
        )
    }
}

export function defaultRenderTab<TabElement extends Element>({ makePropsTab, tagTab }: { tagTab: ElementToTag<TabElement>, makePropsTab: (info: UseAriaTabReturnTypeInfo<TabElement>) => h.JSX.HTMLAttributes<TabElement> }) {
    return function (tabInfo: UseAriaTabReturnTypeInfo<TabElement>, modifyTabProps: PropModifier<TabElement>) {
        return createElement(tagTab as never, modifyTabProps(makePropsTab(tabInfo)));
    }
}

export function defaultRenderTabPanel<TabPanelElement extends Element>({ makePropsTabPanel, tagTabPanel }: { tagTabPanel: ElementToTag<TabPanelElement>, makePropsTabPanel: (info: UseAriaTabReturnTypeInfo<TabPanelElement>) => h.JSX.HTMLAttributes<TabPanelElement> }) {
    return function (tabPanelInfo: UseAriaTabReturnTypeInfo<TabPanelElement>, modifyTabPanelProps: PropModifier<TabPanelElement>) {
        return createElement(tagTabPanel as never, modifyTabPanelProps(makePropsTabPanel(tabPanelInfo)));
    }
}
