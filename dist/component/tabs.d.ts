import { Ref, VNode } from "preact";
import { OmitStrong } from "../props.js";
import { TabInfo, TabPanelInfo, UseTabPanelReturnType, UseTabParameters, UseTabReturnType, UseTabsParameters, UseTabsReturnType } from "../use-tabs.js";
import { PartialExcept } from "./util.js";
type Get<T, K extends keyof T> = T[K];
interface TabsPropsBase<TabContainerElement extends Element, TabElement extends Element, TabLabelElement extends Element, M extends TabInfo<TabElement>> extends Get<UseTabsParameters<TabContainerElement, TabElement, TabLabelElement, M>, "labelParameters">, Get<UseTabsParameters<TabContainerElement, TabElement, TabLabelElement, M>, "linearNavigationParameters">, Get<UseTabsParameters<TabContainerElement, TabElement, TabLabelElement, M>, "rearrangeableChildrenParameters">, Get<UseTabsParameters<TabContainerElement, TabElement, TabLabelElement, M>, "rovingTabIndexParameters">, Get<UseTabsParameters<TabContainerElement, TabElement, TabLabelElement, M>, "singleSelectionParameters">, Get<UseTabsParameters<TabContainerElement, TabElement, TabLabelElement, M>, "sortableChildrenParameters">, Get<UseTabsParameters<TabContainerElement, TabElement, TabLabelElement, M>, "staggeredChildrenParameters">, Get<UseTabsParameters<TabContainerElement, TabElement, TabLabelElement, M>, "tabsParameters">, Get<UseTabsParameters<TabContainerElement, TabElement, TabLabelElement, M>, "typeaheadNavigationParameters">, Get<UseTabsParameters<TabContainerElement, TabElement, TabLabelElement, M>, "singleSelectionParameters"> {
}
interface TabPropsBase<TabElement extends Element, M extends TabInfo<TabElement>> extends Pick<M, "index" | "untabbable" | "unselectable">, Get<UseTabParameters<TabElement, M>, "sortableChildParameters">, Get<UseTabParameters<TabElement, M>, "textContentParameters"> {
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
export declare const Tabs: <TabContainerElement extends Element, TabElement extends Element, TabLabelElement extends Element, M extends TabInfo<TabElement> = TabInfo<TabElement>>({ ariaLabel, collator, compare, disableHomeEndKeys, getIndex, initiallySelectedIndex, navigatePastEnd, navigatePastStart, noTypeahead, onSelectedIndexChange, onTabbableIndexChange, orientation, staggered, pageNavigationSize, localStorageKey, selectionMode, untabbable, typeaheadTimeout, role, render }: TabsProps<TabContainerElement, TabElement, TabLabelElement, M>, ref?: Ref<any>) => import("preact").JSX.Element;
export declare const Tab: <E extends Element, M extends TabInfo<E> = TabInfo<E>>({ unselectable, focusSelf, untabbable, index, getText, getSortValue, render, info: uinfo }: TabProps<E, M>, ref?: Ref<any>) => VNode<any>;
export declare function TabPanel<E extends Element, M extends TabPanelInfo = TabPanelInfo>({ index, render, info: uinfo }: TabPanelProps<E, M>): VNode<any>;
export {};
//# sourceMappingURL=tabs.d.ts.map