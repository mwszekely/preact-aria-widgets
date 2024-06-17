import { OmitStrong } from "preact-prop-helpers";
import { Get, Get6, Get8 } from "../props.js";
import { TabInfo, TabPanelInfo, UseTabPanelParameters, UseTabPanelReturnType, UseTabParameters, UseTabReturnType, UseTabsParameters, UseTabsReturnType } from "../use-tabs.js";
import { GenericComponentProps } from "./util.js";
export type TabsProps<TabContainerElement extends Element, TabElement extends Element, TabLabelElement extends Element, M extends TabInfo<TabElement> = TabInfo<TabElement>> = GenericComponentProps<UseTabsReturnType<TabContainerElement, TabElement, TabLabelElement, M>, Get8<UseTabsParameters<TabContainerElement, TabElement, M>, "labelParameters", "linearNavigationParameters", "rovingTabIndexParameters", "singleSelectionParameters", "tabsParameters", "typeaheadNavigationParameters", "singleSelectionParameters", "refElementParameters">, "orientation" | "ariaLabel">;
export type TabProps<TabElement extends Element, M extends TabInfo<TabElement> = TabInfo<TabElement>> = GenericComponentProps<UseTabReturnType<TabElement, M>, Get6<UseTabParameters<TabElement, TabInfo<TabElement>>, "pressParameters", "textContentParameters", "info", "hasCurrentFocusParameters", "refElementParameters", "singleSelectionChildParameters">, "index"> & {
    info?: OmitStrong<M, keyof TabInfo<TabElement>>;
};
export type TabPanelProps<PanelElement extends Element, M extends TabPanelInfo = TabPanelInfo> = GenericComponentProps<UseTabPanelReturnType<PanelElement>, Get<UseTabPanelParameters<M>, "info">, "index"> & {
    info?: OmitStrong<M, keyof TabPanelInfo>;
};
export declare const Tabs: <TabContainerElement extends Element, TabElement extends Element, TabLabelElement extends Element>({ ariaLabel, collator, disableHomeEndKeys, initiallySingleSelectedIndex, navigatePastEnd, navigatePastStart, noTypeahead, onSingleSelectedIndexChange, onTabbableIndexChange, orientation, pageNavigationSize, localStorageKey, singleSelectionMode, untabbable, typeaheadTimeout, role, onNavigateLinear, onNavigateTypeahead, imperativeHandle, onElementChange, onMount, onUnmount, render, ...void1 }: TabsProps<TabContainerElement, TabElement, TabLabelElement>) => import("preact-prop-helpers").JSX.Element;
export declare const Tab: <E extends Element>({ focusSelf, untabbable, index, getText, render, longPressThreshold, onPressingChange, imperativeHandle, onElementChange, onMount, onUnmount, onCurrentFocusedChanged, onCurrentFocusedInnerChanged, singleSelectionDisabled, onTextContentChange, info: uinfo, ...void1 }: TabProps<E, TabInfo<E>>) => import("preact-prop-helpers").JSX.Element;
export declare const TabPanel: <E extends Element>({ index, render, info: uinfo }: TabPanelProps<E, TabPanelInfo>) => import("preact-prop-helpers").JSX.Element;
//# sourceMappingURL=tabs.d.ts.map