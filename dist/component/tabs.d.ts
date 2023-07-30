import { Ref } from "preact";
import { OmitStrong } from "preact-prop-helpers";
import { Get, Get11, Get5 } from "../props.js";
import { TabInfo, TabPanelInfo, UseTabPanelParameters, UseTabPanelReturnType, UseTabParameters, UseTabReturnType, UseTabsParameters, UseTabsReturnType } from "../use-tabs.js";
import { GenericComponentProps } from "./util.js";
export type TabsProps<TabContainerElement extends Element, TabElement extends Element, TabLabelElement extends Element, M extends TabInfo<TabElement>> = GenericComponentProps<UseTabsReturnType<TabContainerElement, TabElement, TabLabelElement, M>, Get11<UseTabsParameters<TabContainerElement, TabElement, M>, "labelParameters", "linearNavigationParameters", "rearrangeableChildrenParameters", "rovingTabIndexParameters", "singleSelectionParameters", "sortableChildrenParameters", "staggeredChildrenParameters", "tabsParameters", "typeaheadNavigationParameters", "singleSelectionParameters", "refElementParameters">, "orientation" | "ariaLabel">;
export type TabProps<TabElement extends Element, M extends TabInfo<TabElement>> = GenericComponentProps<UseTabReturnType<TabElement, M>, Get5<UseTabParameters<TabElement, TabInfo<TabElement>>, "pressParameters", "textContentParameters", "info", "hasCurrentFocusParameters", "refElementParameters">, "index" | "getSortValue"> & {
    info?: OmitStrong<M, keyof TabInfo<TabElement>>;
};
export type TabPanelProps<PanelElement extends Element, M extends TabPanelInfo> = GenericComponentProps<UseTabPanelReturnType<PanelElement>, Get<UseTabPanelParameters<M>, "info">, "index"> & {
    info?: OmitStrong<M, keyof TabPanelInfo>;
};
export declare const Tabs: <TabContainerElement extends Element, TabElement extends Element, TabLabelElement extends Element>({ ariaLabel, collator, compare, disableHomeEndKeys, getIndex, initiallySelectedIndex, navigatePastEnd, navigatePastStart, noTypeahead, onSelectedIndexChange, onTabbableIndexChange, orientation, staggered, pageNavigationSize, localStorageKey, selectionMode, untabbable, typeaheadTimeout, role, onNavigateLinear, onNavigateTypeahead, imperativeHandle, onElementChange, onMount, onUnmount, render }: TabsProps<TabContainerElement, TabElement, TabLabelElement, TabInfo<TabElement>>, ref?: Ref<any>) => import("preact").JSX.Element;
export declare function Tab<E extends Element>({ unselectable, focusSelf, untabbable, index, getText, render, longPressThreshold, onPressingChange, getSortValue, imperativeHandle, onElementChange, onMount, onUnmount, onCurrentFocusedChanged, onCurrentFocusedInnerChanged, info: uinfo }: TabProps<E, TabInfo<E>>): import("preact").JSX.Element;
export declare function TabPanel<E extends Element>({ index, render, info: uinfo }: TabPanelProps<E, TabPanelInfo>): import("preact").JSX.Element;
//# sourceMappingURL=tabs.d.ts.map