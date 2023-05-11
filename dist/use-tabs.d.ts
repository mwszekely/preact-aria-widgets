import { h } from "preact";
import { CompleteListNavigationContext, ManagedChildInfo, PersistentStates, UseCompleteListNavigationChildInfo, UseCompleteListNavigationChildParameters, UseCompleteListNavigationChildReturnType, UseCompleteListNavigationParameters, UseCompleteListNavigationReturnType, UseManagedChildParameters, UseManagedChildrenContext, UsePressReturnType } from "preact-prop-helpers";
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
} & Pick<h.JSX.TargetedEvent<E>, "target" | "currentTarget">;
export interface UseTabsParameters<TabContainerElement extends Element, TabElement extends Element, TabLabelElement extends Element, M extends TabInfo<TabElement>> extends UseTabListParameters<TabContainerElement, TabElement, M> {
    labelParameters: OmitStrong<UseLabelSyntheticParameters["labelParameters"], "onLabelClick">;
    tabsParameters: {
        localStorageKey: keyof PersistentStates | null;
        orientation: "horizontal" | "vertical";
        role?: "tablist" | string;
    };
}
export interface UseTabParameters<TabElement extends Element, M extends TabInfo<TabElement>> extends OmitStrong<UseCompleteListNavigationChildParameters<TabElement, M>, "singleSelectionParameters"> {
    singleSelectionParameters: OmitStrong<UseCompleteListNavigationChildParameters<TabElement, M>["singleSelectionParameters"], "ariaPropName">;
    context: TabsContext<any, TabElement, M>;
}
export interface UseTabPanelParameters<M extends TabPanelInfo> extends OmitStrong<UseManagedChildParameters<M>, "info"> {
    info: OmitStrong<UseManagedChildParameters<M>["info"], "setVisibleIndex" | "getVisible">;
    context: TabPanelsContext<M>;
}
export interface TabsContext<ParentElement extends Element, ChildElement extends Element, M extends TabInfo<ChildElement>> extends CompleteListNavigationContext<ParentElement, ChildElement, M> {
    tabsContext: TC;
}
export interface TabPanelsContext<M extends TabPanelInfo> extends UseManagedChildrenContext<M> {
    tabPanelContext: TC;
}
interface TC {
    getVisibleIndex: () => number | null;
    getPanelId: (index: number) => string;
    getTabId: (index: number) => string;
}
export interface UseTabReturnType<TabElement extends Element, M extends TabInfo<TabElement>> extends UseCompleteListNavigationChildReturnType<TabElement, M>, UsePressReturnType<TabElement> {
}
export interface UseTabLabelParameters {
}
interface UseTabListParameters<TabContainerElement extends Element, TabElement extends Element, M extends TabInfo<TabElement>> extends OmitStrong<UseCompleteListNavigationParameters<TabContainerElement, TabElement, M>, "paginatedChildrenParameters" | "linearNavigationParameters" | "singleSelectionParameters"> {
    linearNavigationParameters: OmitStrong<UseCompleteListNavigationParameters<TabContainerElement, TabElement, M>["linearNavigationParameters"], "arrowKeyDirection">;
    singleSelectionParameters: Partial<OmitStrong<UseCompleteListNavigationParameters<TabContainerElement, TabElement, M>["singleSelectionParameters"], "ariaPropName">>;
}
export interface UseTabListReturnType<ParentElement extends Element, ChildElement extends Element, M extends TabInfo<ChildElement>> extends UseCompleteListNavigationReturnType<ParentElement, ChildElement, M> {
}
export interface UseTabPanelReturnType<E extends Element> {
    props: h.JSX.HTMLAttributes<E>;
    tabPanelReturn: {
        visibleOffset: number | null;
        visible: boolean | null;
        getVisible: () => boolean;
    };
}
export interface UseTabListLabelReturnTypeInfo {
}
export interface UseTabLabelReturnTypeWithHooks<LabelElement extends Element> extends UseTabListLabelReturnTypeInfo {
    useTabListLabelProps: (props: h.JSX.HTMLAttributes<LabelElement>) => h.JSX.HTMLAttributes<LabelElement>;
}
export interface UseTabsReturnType<TabContainerElement extends Element, TabElement extends Element, LabelElement extends Element, M extends TabInfo<TabElement>> extends OmitStrong<UseCompleteListNavigationReturnType<TabContainerElement, TabElement, M>, "props" | "context"> {
    propsContainer: h.JSX.HTMLAttributes<TabContainerElement>;
    propsLabel: h.JSX.HTMLAttributes<LabelElement>;
    contextPanels: TabPanelsContext<TabPanelInfo>;
    contextTabs: TabsContext<TabContainerElement, TabElement, M>;
}
export type UseTab<_TabContainerElement extends Element, TabElement extends Element, M extends TabInfo<TabElement>> = (args: UseTabParameters<TabElement, M>) => UseTabReturnType<TabElement, M>;
export type UseTabList<TabContainerElement extends Element, TabElement extends Element, M extends TabInfo<TabElement>> = (args: UseTabListParameters<TabContainerElement, TabElement, M>) => UseTabListReturnType<TabContainerElement, TabElement, M>;
export type UseTabPanel<PanelElement extends Element, M extends TabPanelInfo> = (args: UseTabPanelParameters<M>) => UseTabPanelReturnType<PanelElement>;
export type UseTabListLabel<LabelElement extends Element> = (args: UseTabLabelParameters) => UseTabLabelReturnTypeWithHooks<LabelElement>;
export declare function useTabs<TabListElement extends Element, TabElement extends Element, LabelElement extends Element, M extends TabInfo<TabElement>>({ labelParameters, linearNavigationParameters, singleSelectionParameters: { initiallySelectedIndex, onSelectedIndexChange: ssi, selectionMode, ...singleSelectionParameters }, tabsParameters: { orientation, role, localStorageKey }, ...restParams }: UseTabsParameters<TabListElement, TabElement, LabelElement, M>): UseTabsReturnType<TabListElement, TabElement, LabelElement, M>;
export declare function useTab<TabElement extends Element, M extends TabInfo<TabElement>>({ info: { focusSelf, ...info }, textContentParameters, sortableChildParameters, pressParameters, rovingTabIndexParameters, singleSelectionParameters, context }: UseTabParameters<TabElement, M>): UseTabReturnType<TabElement, M>;
export declare function useTabPanel<PanelElement extends Element, M extends TabPanelInfo>({ info, context }: UseTabPanelParameters<M>): UseTabPanelReturnType<PanelElement>;
export {};
//# sourceMappingURL=use-tabs.d.ts.map