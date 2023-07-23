import { Ref, VNode } from "preact";
import { Get10, Get2, OmitStrong } from "../props.js";
import { TabInfo, TabPanelInfo, UseTabPanelReturnType, UseTabParameters, UseTabReturnType, UseTabsParameters, UseTabsReturnType } from "../use-tabs.js";
import { PartialExcept } from "./util.js";
interface TabsPropsBase<TabContainerElement extends Element, TabElement extends Element, TabLabelElement extends Element, M extends TabInfo<TabElement>> extends Get10<UseTabsParameters<TabContainerElement, TabElement, TabLabelElement, M>, "labelParameters", "linearNavigationParameters", "rearrangeableChildrenParameters", "rovingTabIndexParameters", "singleSelectionParameters", "sortableChildrenParameters", "staggeredChildrenParameters", "tabsParameters", "typeaheadNavigationParameters", "singleSelectionParameters"> {
}
interface TabPropsBase<TabElement extends Element, M extends TabInfo<TabElement>> extends Pick<M, "index" | "untabbable" | "unselectable" | "getSortValue">, Get2<UseTabParameters<TabElement, M>, "pressParameters", "textContentParameters"> {
    focusSelf: M["focusSelf"];
    info?: OmitStrong<M, keyof TabInfo<TabElement>>;
}
interface TabPanelPropsBase<M extends TabPanelInfo> extends Pick<M, "index"> {
    info?: OmitStrong<M, keyof TabPanelInfo>;
}
export interface TabsProps<TabContainerElement extends Element, TabElement extends Element, TabLabelElement extends Element, M extends TabInfo<TabElement>> extends PartialExcept<TabsPropsBase<TabContainerElement, TabElement, TabLabelElement, M>, "orientation" | "ariaLabel"> {
    render(info: UseTabsReturnType<TabContainerElement, TabElement, TabLabelElement, M>): VNode<any>;
}
export interface TabProps<TabElement extends Element, M extends TabInfo<TabElement>> extends PartialExcept<TabPropsBase<TabElement, M>, "index" | "getSortValue"> {
    render(info: UseTabReturnType<TabElement, M>): VNode<any>;
}
export interface TabPanelProps<PanelElement extends Element, M extends TabPanelInfo> extends PartialExcept<TabPanelPropsBase<M>, "index"> {
    render(info: UseTabPanelReturnType<PanelElement>): VNode<any>;
}
export declare const Tabs: <TabContainerElement extends Element, TabElement extends Element, TabLabelElement extends Element, M extends TabInfo<TabElement> = TabInfo<TabElement>>({ ariaLabel, collator, compare, disableHomeEndKeys, getIndex, initiallySelectedIndex, navigatePastEnd, navigatePastStart, noTypeahead, onSelectedIndexChange, onTabbableIndexChange, orientation, staggered, pageNavigationSize, localStorageKey, selectionMode, untabbable, typeaheadTimeout, role, onNavigateLinear, onNavigateTypeahead, render }: TabsProps<TabContainerElement, TabElement, TabLabelElement, M>, ref?: Ref<any>) => import("preact").JSX.Element;
export declare const Tab: <E extends Element, M extends TabInfo<E> = TabInfo<E>>({ unselectable, focusSelf, untabbable, index, getText, getSortValue, render, longPressThreshold, onPressingChange, info: uinfo }: TabProps<E, M>, ref?: Ref<any>) => VNode<any>;
export declare function TabPanel<E extends Element, M extends TabPanelInfo = TabPanelInfo>({ index, render, info: uinfo }: TabPanelProps<E, M>): VNode<any>;
export {};
//# sourceMappingURL=tabs.d.ts.map