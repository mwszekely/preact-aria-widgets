import { h } from "preact";
import { CompleteListNavigationContext, ElementProps, ManagedChildInfo, PersistentStates, UseCompleteListNavigationChildInfo, UseCompleteListNavigationChildParameters, UseCompleteListNavigationChildReturnType, UseCompleteListNavigationParameters, UseCompleteListNavigationReturnType, UseManagedChildParameters, UseManagedChildrenContext, UsePressParameters, UsePressReturnType } from "preact-prop-helpers";
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
export interface UseTabParameters<TabElement extends Element, M extends TabInfo<TabElement>> extends OmitStrong<UseCompleteListNavigationChildParameters<TabElement, M>, never> {
    context: UseTabsContext<any, TabElement, M>;
    pressParameters: OmitStrong<UsePressParameters<TabElement>["pressParameters"], "excludeSpace" | "onPressSync">;
}
export interface UseTabPanelParameters<M extends TabPanelInfo> extends OmitStrong<UseManagedChildParameters<M>, "info"> {
    info: OmitStrong<UseManagedChildParameters<M>["info"], "setVisibleIndex" | "getVisible">;
    context: UseTabPanelsContext<M>;
}
export interface UseTabsContext<ParentElement extends Element, ChildElement extends Element, M extends TabInfo<ChildElement>> extends CompleteListNavigationContext<ParentElement, ChildElement, M> {
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
export interface UseTabReturnType<TabElement extends Element, M extends TabInfo<TabElement>> extends OmitStrong<UseCompleteListNavigationChildReturnType<TabElement, M>, "pressParameters">, UsePressReturnType<TabElement> {
}
export interface UseTabLabelParameters {
}
interface UseTabListParameters<TabContainerElement extends Element, TabElement extends Element, M extends TabInfo<TabElement>> extends OmitStrong<UseCompleteListNavigationParameters<TabContainerElement, TabElement, M>, "rovingTabIndexParameters" | "paginatedChildrenParameters" | "linearNavigationParameters" | "singleSelectionParameters"> {
    rovingTabIndexParameters: OmitStrong<UseCompleteListNavigationParameters<TabContainerElement, TabElement, M>["rovingTabIndexParameters"], "focusSelfParent">;
    linearNavigationParameters: OmitStrong<UseCompleteListNavigationParameters<TabContainerElement, TabElement, M>["linearNavigationParameters"], "arrowKeyDirection">;
    singleSelectionParameters: Partial<OmitStrong<UseCompleteListNavigationParameters<TabContainerElement, TabElement, M>["singleSelectionParameters"], "ariaPropName">>;
}
export interface UseTabListReturnType<ParentElement extends Element, ChildElement extends Element, M extends TabInfo<ChildElement>> extends UseCompleteListNavigationReturnType<ParentElement, ChildElement, M> {
}
export interface UseTabPanelReturnType<E extends Element> {
    props: ElementProps<E>;
    tabPanelReturn: {
        visibleOffset: number | null;
        visible: boolean | null;
        getVisible: () => boolean;
    };
}
export interface UseTabListLabelReturnTypeInfo {
}
export interface UseTabLabelReturnTypeWithHooks<LabelElement extends Element> extends UseTabListLabelReturnTypeInfo {
    useTabListLabelProps: (props: ElementProps<LabelElement>) => ElementProps<LabelElement>;
}
export interface UseTabsReturnType<TabContainerElement extends Element, TabElement extends Element, LabelElement extends Element, M extends TabInfo<TabElement>> extends OmitStrong<UseCompleteListNavigationReturnType<TabContainerElement, TabElement, M>, "props" | "context"> {
    propsContainer: ElementProps<TabContainerElement>;
    propsLabel: ElementProps<LabelElement>;
    contextPanels: UseTabPanelsContext<TabPanelInfo>;
    contextTabs: UseTabsContext<TabContainerElement, TabElement, M>;
}
export type UseTab<_TabContainerElement extends Element, TabElement extends Element, M extends TabInfo<TabElement>> = (args: UseTabParameters<TabElement, M>) => UseTabReturnType<TabElement, M>;
export type UseTabList<TabContainerElement extends Element, TabElement extends Element, M extends TabInfo<TabElement>> = (args: UseTabListParameters<TabContainerElement, TabElement, M>) => UseTabListReturnType<TabContainerElement, TabElement, M>;
export type UseTabPanel<PanelElement extends Element, M extends TabPanelInfo> = (args: UseTabPanelParameters<M>) => UseTabPanelReturnType<PanelElement>;
export type UseTabListLabel<LabelElement extends Element> = (args: UseTabLabelParameters) => UseTabLabelReturnTypeWithHooks<LabelElement>;
export declare function useTabs<TabListElement extends Element, TabElement extends Element, LabelElement extends Element, M extends TabInfo<TabElement>>({ labelParameters, linearNavigationParameters, singleSelectionParameters: { initiallySelectedIndex, onSelectedIndexChange: ssi, selectionMode, ...singleSelectionParameters }, tabsParameters: { orientation, role, localStorageKey }, rovingTabIndexParameters, ...restParams }: UseTabsParameters<TabListElement, TabElement, LabelElement, M>): UseTabsReturnType<TabListElement, TabElement, LabelElement, M>;
export declare function useTab<TabElement extends Element, M extends TabInfo<TabElement>>({ info: { focusSelf: focusSelfParent, ...info }, textContentParameters, sortableChildParameters, pressParameters: { focusSelf: focusSelfChild, allowRepeatPresses, excludeEnter, excludePointer, longPressThreshold, onPressingChange, ...void2 }, context }: UseTabParameters<TabElement, M>): UseTabReturnType<TabElement, M>;
export declare function useTabPanel<PanelElement extends Element, M extends TabPanelInfo>({ info, context }: UseTabPanelParameters<M>): UseTabPanelReturnType<PanelElement>;
export {};
//# sourceMappingURL=use-tabs.d.ts.map