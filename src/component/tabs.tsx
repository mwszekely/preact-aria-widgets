import { createContext, h, VNode } from "preact";
import { useContext } from "preact/hooks";
import { UseAriaTab, UseAriaTabListReturnTypeInfo, UseAriaTabPanel, UseAriaTabParameters, UseAriaTabReturnTypeInfo, useAriaTabs, UseAriaTabsParameters, UseAriaTabsReturnTypeInfo } from "../use-tabs";

type Get<T, K extends keyof T> = T[K];
type Get2<T, K extends keyof T, K2 extends keyof T[K]> = T[K][K2];

export interface TabsProps<LabelElement extends Element, ListElement extends Element, TabElement extends Element> extends
    Get2<UseAriaTabsParameters, "tabList", "linearNavigation">,
    Get2<UseAriaTabsParameters, "tabList", "listNavigation">,
    Get2<UseAriaTabsParameters, "tabList", "managedChildren">,
    Get2<UseAriaTabsParameters, "tabList", "rovingTabIndex">,
    Get2<UseAriaTabsParameters, "tabList", "singleSelection">,
    Get2<UseAriaTabsParameters, "tabList", "typeaheadNavigation">,
    Get2<UseAriaTabsParameters, "tabPanels", "managedChildren"> {
    render?(tabsInfo: UseAriaTabsReturnTypeInfo & UseAriaTabListReturnTypeInfo<TabElement>, labelProps: h.JSX.HTMLAttributes<LabelElement>, tabListProps: h.JSX.HTMLAttributes<ListElement>): VNode<any>;
}

export interface TabProps<TabElement extends Element> extends Get<UseAriaTabParameters, "listNavigation">,
    Get<UseAriaTabParameters, "managedChild">,
    Get<UseAriaTabParameters, "rovingTabIndex"> {
    // tagListItem: ElementToTag<ListboxItemElement>;
    // propsListItem: (args: AriaListboxSinglePropsDerivedFrom) => h.JSX.HTMLAttributes<ListboxItemElement>;
    render?(info: UseAriaTabReturnTypeInfo<TabElement>, listItem: h.JSX.HTMLAttributes<TabElement>): VNode<any>;
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
    onTabbedInTo,
    onTabbedOutOf,
    typeaheadTimeout,
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
            rovingTabIndex: { initialIndex, onTabbableIndexChange, onTabbableRender, onTabbedInTo, onTabbedOutOf },
            singleSelection: { selectedIndex },
            typeaheadNavigation: { collator, noTypeahead, typeaheadTimeout }
        },
        tabPanels: {
            managedChildren: { onAfterChildLayoutEffect, onChildrenMountChange }
        }
    });

    const { useAriaTab, useAriaTabListProps, ...tablistInfo } = useAriaTabList({});
    const { useAriaTabListLabelProps } = useAriaTabListLabel({})


    return (
        <TabContext.Provider value={useAriaTab}>
            <TabPanelContext.Provider value={useAriaTabPanel}>
                {(render ?? defaultTabsRender)({ ...tabsInfo, ...tablistInfo }, useAriaTabListLabelProps({}), useAriaTabListProps({}))}
            </TabPanelContext.Provider>
        </TabContext.Provider>
    )
}

export function Tab<TabElement extends Element>({ index, text, blurSelf, flags, focusSelf, hidden, render }: TabProps<TabElement>) {
    const { useAriaTabProps, ...tabInfo } = useContext(TabContext)({ listNavigation: { text }, managedChild: { index, flags }, rovingTabIndex: { blurSelf, focusSelf, hidden } });

    return (render ?? defaultTabRender)(tabInfo, useAriaTabProps({}))


}

function defaultTabsRender(tabsInfo: UseAriaTabsReturnTypeInfo & UseAriaTabListReturnTypeInfo<any>, labelProps: h.JSX.HTMLAttributes<any>, listProps: h.JSX.HTMLAttributes<any>) {
    const label = <div {...labelProps} />;
    const list = <div {...listProps} />;
    return (
        <>{label}{list}</>
    )
}

function defaultTabRender(tabInfo: UseAriaTabReturnTypeInfo<any>, tabProps: h.JSX.HTMLAttributes<any>) {
    const tab = <div {...tabProps} />;
    return (tab)
}
