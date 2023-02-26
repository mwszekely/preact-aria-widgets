import { Ref, VNode } from "preact";
import { OmitStrong } from "../props.js";
import { TabInfo, TabPanelInfo, UseTabPanelParameters, UseTabPanelReturnType, UseTabParameters, UseTabReturnType, UseTabsParameters, UseTabsReturnType } from "../use-tabs.js";
import { PartialExcept } from "./util.js";
type Get<T, K extends keyof T> = T[K];
interface TabsPropsBase<TabContainerElement extends Element, TabElement extends Element, TabLabelElement extends Element, M extends TabInfo<TabElement>> extends Get<UseTabsParameters<TabContainerElement, TabElement, TabLabelElement, M>, "labelParameters">, Get<UseTabsParameters<TabContainerElement, TabElement, TabLabelElement, M>, "linearNavigationParameters">, Get<UseTabsParameters<TabContainerElement, TabElement, TabLabelElement, M>, "rearrangeableChildrenParameters">, Get<UseTabsParameters<TabContainerElement, TabElement, TabLabelElement, M>, "rovingTabIndexParameters">, Get<UseTabsParameters<TabContainerElement, TabElement, TabLabelElement, M>, "singleSelectionParameters">, Get<UseTabsParameters<TabContainerElement, TabElement, TabLabelElement, M>, "sortableChildrenParameters">, Get<UseTabsParameters<TabContainerElement, TabElement, TabLabelElement, M>, "staggeredChildrenParameters">, Get<UseTabsParameters<TabContainerElement, TabElement, TabLabelElement, M>, "tabsParameters">, Get<UseTabsParameters<TabContainerElement, TabElement, TabLabelElement, M>, "typeaheadNavigationParameters"> {
}
interface TabPropsBase<TabElement extends Element, M extends TabInfo<TabElement>> extends Get<UseTabParameters<TabElement, M>, "managedChildParameters">, Get<UseTabParameters<TabElement, M>, "singleSelectionChildParameters">, Get<UseTabParameters<TabElement, M>, "sortableChildParameters">, Get<UseTabParameters<TabElement, M>, "rovingTabIndexChildParameters">, Get<UseTabParameters<TabElement, M>, "textContentParameters"> {
    focusSelf: Get<UseTabParameters<TabElement, M>, "completeListNavigationChildParameters">["focusSelf"];
    subInfo?: OmitStrong<Get<UseTabParameters<TabElement, M>, "completeListNavigationChildParameters">, "focusSelf">;
}
interface TabPanelPropsBase<M extends TabPanelInfo> extends Get<UseTabPanelParameters<M>, "managedChildParameters"> {
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
export declare const Tabs: <TabContainerElement extends Element, TabElement extends Element, TabLabelElement extends Element, M extends TabInfo<TabElement> = TabInfo<TabElement>>({ ariaLabel, collator, compare, disableArrowKeys, disableHomeEndKeys, getIndex, initiallySelectedIndex, navigatePastEnd, navigatePastStart, noTypeahead, onSelectedIndexChange, onTabbableIndexChange, orientation, staggered, pageNavigationSize, localStorageKey, untabbable, typeaheadTimeout, role, render }: TabsProps<TabContainerElement, TabElement, TabLabelElement, M>, ref?: Ref<any>) => import("preact").JSX.Element;
export declare const Tab: <E extends Element, M extends TabInfo<E> = TabInfo<E>>({ disabled, focusSelf, hidden, index, getText, getSortValue, render, selectionMode, subInfo }: TabProps<E, M>, ref?: Ref<any>) => VNode<any>;
export declare function TabPanel<E extends Element, M extends TabPanelInfo = TabPanelInfo>({ index, render }: TabPanelProps<E, M>): VNode<any>;
export {};
//# sourceMappingURL=tabs.d.ts.map