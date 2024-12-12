import { CompleteListNavigationContext, ElementProps, EventType, ManagedChildInfo, Nullable, PersistentStates, TargetedOmit, UseCompleteListNavigationChildInfo, UseCompleteListNavigationChildParameters, UseCompleteListNavigationChildReturnType, UseCompleteListNavigationParameters, UseCompleteListNavigationReturnType, UseGenericChildParameters, UseManagedChildParameters, UseManagedChildrenContext, UsePressParameters, UsePressReturnType } from "preact-prop-helpers";
import { EventDetail, OmitStrong } from "./props.js";
import { UseLabelSyntheticParameters } from "./use-label.js";
export interface TabPanelInfo extends ManagedChildInfo<number> {
    getVisible(): boolean;
    setVisibleIndex: (newIndex: number | null, previousIndex: number | null) => void;
}
export interface TabInfo<E extends Element> extends UseCompleteListNavigationChildInfo<E> {
}
export type TabsChangeEvent<E extends Element> = {
    [EventDetail]: {
        selectedIndex: number;
    };
} & Pick<EventType<E, Event>, "target" | "currentTarget">;
export interface UseTabsParametersSelf {
    localStorageKey: Nullable<keyof PersistentStates>;
    orientation: "horizontal" | "vertical";
    role: Nullable<"tablist" | string>;
}
export interface UseTabsParameters<TabContainerElement extends Element, TabElement extends Element, M extends TabInfo<TabElement>> extends UseTabListParameters<TabContainerElement, TabElement, M>, TargetedOmit<UseLabelSyntheticParameters, "labelParameters", "onLabelClick"> {
    tabsParameters: UseTabsParametersSelf;
}
export interface UseTabParameters<TabElement extends Element, M extends TabInfo<TabElement>> extends UseGenericChildParameters<UseTabsContext<TabElement, M>, Pick<TabInfo<TabElement>, "index" | "focusSelf" | "untabbable">>, OmitStrong<UseCompleteListNavigationChildParameters<TabElement, M>, "context" | "info" | "multiSelectionChildParameters">, TargetedOmit<UsePressParameters<TabElement>, "pressParameters", "excludeEnter" | "excludePointer" | "excludeSpace" | "allowRepeatPresses" | "onPressSync"> {
}
export interface UseTabPanelParameters<M extends TabPanelInfo> extends UseGenericChildParameters<UseTabPanelsContext<M>, Pick<M, "index">>, OmitStrong<UseManagedChildParameters<M>, "context" | "info"> {
}
export interface UseTabsContext<ChildElement extends Element, M extends TabInfo<ChildElement>> extends CompleteListNavigationContext<ChildElement, M> {
    tabsContext: TC;
}
export interface UseTabPanelsContext<M extends TabPanelInfo> extends UseManagedChildrenContext<M> {
    tabPanelContext: TC;
}
interface TC {
    getVisibleIndex: () => number | null;
    getPanelId: (index: number) => string;
    getTabId: (index: number) => string;
}
export interface UseTabReturnType<TabElement extends Element, M extends TabInfo<TabElement>> extends OmitStrong<UseCompleteListNavigationChildReturnType<TabElement, M>, "pressParameters" | "propsChild" | "propsTabbable">, UsePressReturnType<TabElement> {
    props: ElementProps<TabElement>;
}
export interface UseTabLabelParameters {
}
export interface UseTabListParameters<TabContainerElement extends Element, TabElement extends Element, M extends TabInfo<TabElement>> extends OmitStrong<UseCompleteListNavigationParameters<TabContainerElement, TabElement, M>, "rovingTabIndexParameters" | "paginatedChildrenParameters" | "linearNavigationParameters" | "singleSelectionParameters" | "multiSelectionParameters">, TargetedOmit<UseCompleteListNavigationParameters<TabContainerElement, TabElement, M>, "rovingTabIndexParameters", "focusSelfParent">, TargetedOmit<UseCompleteListNavigationParameters<TabContainerElement, TabElement, M>, "linearNavigationParameters", "arrowKeyDirection">, TargetedOmit<UseCompleteListNavigationParameters<TabContainerElement, TabElement, M>, "singleSelectionParameters", "singleSelectionAriaPropName"> {
}
export interface UseTabListReturnType<ParentElement extends Element, ChildElement extends Element, M extends TabInfo<ChildElement>> extends UseCompleteListNavigationReturnType<ParentElement, ChildElement, M> {
}
export interface UseTabPanelReturnTypeSelf {
    visibleOffset: number | null;
    visible: boolean | null;
    getVisible: () => boolean;
}
export interface UseTabPanelReturnType<E extends Element> {
    props: ElementProps<E>;
    tabPanelReturn: UseTabPanelReturnTypeSelf;
}
export interface UseTabListLabelReturnTypeInfo {
}
export interface UseTabLabelReturnTypeWithHooks<LabelElement extends Element> extends UseTabListLabelReturnTypeInfo {
    useTabListLabelProps: (props: ElementProps<LabelElement>) => ElementProps<LabelElement>;
}
export interface UseTabsReturnType<TabContainerElement extends Element, TabElement extends Element, LabelElement extends Element, M extends TabInfo<TabElement> = TabInfo<TabElement>> extends OmitStrong<UseCompleteListNavigationReturnType<TabContainerElement, TabElement, M>, "props" | "context"> {
    propsContainer: ElementProps<TabContainerElement>;
    propsLabel: ElementProps<LabelElement>;
    contextPanels: UseTabPanelsContext<TabPanelInfo>;
    contextTabs: UseTabsContext<TabElement, M>;
}
export type UseTab<_TabContainerElement extends Element, TabElement extends Element, M extends TabInfo<TabElement>> = (args: UseTabParameters<TabElement, M>) => UseTabReturnType<TabElement, M>;
export type UseTabList<TabContainerElement extends Element, TabElement extends Element, M extends TabInfo<TabElement>> = (args: UseTabListParameters<TabContainerElement, TabElement, M>) => UseTabListReturnType<TabContainerElement, TabElement, M>;
export type UseTabPanel<PanelElement extends Element, M extends TabPanelInfo> = (args: UseTabPanelParameters<M>) => UseTabPanelReturnType<PanelElement>;
export type UseTabListLabel<LabelElement extends Element> = (args: UseTabLabelParameters) => UseTabLabelReturnTypeWithHooks<LabelElement>;
/**
 * Implements a [Tabs](https://www.w3.org/WAI/ARIA/apg/patterns/tabs/) pattern.
 *
 * @remarks Tabs consist of both a list of tabs and a list of tab panels.
 * A Tab and a TabPanel that share the same index are linked together; when that tab is selected that panel is shown.
 *
 * @compositeParams
 *
 * @hasChild {@link useTab}
 * @hasChild {@link useTabPanel}
 */
export declare function useTabs<TabListElement extends Element, TabElement extends Element, LabelElement extends Element>({ labelParameters, linearNavigationParameters, singleSelectionParameters: { initiallySingleSelectedIndex, onSingleSelectedIndexChange: ssi, singleSelectionMode, ...singleSelectionParameters }, tabsParameters: { orientation, role, localStorageKey }, rovingTabIndexParameters, ...restParams }: UseTabsParameters<TabListElement, TabElement, TabInfo<TabElement>>): UseTabsReturnType<TabListElement, TabElement, LabelElement, TabInfo<TabElement>>;
/**
 * Implements a single tab of a Tabs component.
 *
 * The index that this child uses controls which TabPanel it shows when selected.
 *
 * @compositeParams
 */
export declare function useTab<TabElement extends Element>({ info: { focusSelf: focusSelfParent, index, untabbable, ...info }, textContentParameters, pressParameters: { focusSelf: focusSelfChild, longPressThreshold, onPressingChange, ...void2 }, context, hasCurrentFocusParameters, refElementParameters, singleSelectionChildParameters, ...void3 }: UseTabParameters<TabElement, TabInfo<TabElement>>): UseTabReturnType<TabElement, TabInfo<TabElement>>;
/**
 * Implements the TabPanel a Tab controls.
 *
 * @remarks A hidden tab panel is made `inert` so that it cannot be interacted with, so you can just set `opacity: 0` on your hidden panels if that's how you want to style them.
 * They'll still be properly removed from the tab order (i.e. you don't **also** need `display: none`).
 *
 * @compositeParams
 */
export declare function useTabPanel<PanelElement extends Element>({ info, context }: UseTabPanelParameters<TabPanelInfo>): UseTabPanelReturnType<PanelElement>;
export {};
//# sourceMappingURL=use-tabs.d.ts.map