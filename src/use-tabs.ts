import { h } from "preact";
import { LogicalDirectionInfo, ManagedChildInfo, MergedProps, useChildFlag, useChildManager, useHasFocus, useLayoutEffect, useListNavigation, UseListNavigationChildInfo, UseListNavigationChildParameters, UseListNavigationParameters, useLogicalDirection, useMergedProps, useRandomId, UseRandomIdPropsReturnType, useRefElement, UseRefElementPropsReturnType, UseReferencedIdPropsReturnType, useStableCallback, useStableGetter, useState } from "preact-prop-helpers";
import { useCallback, useEffect } from "preact/hooks";
import { enhanceEvent, EventDetail, TagSensitiveProps } from "./props";
import { usePressEventHandlers } from "./use-button";

export type TabsChangeEvent<E extends Element> = { [EventDetail]: { selectedIndex: number } } & Pick<h.JSX.TargetedEvent<E>, "target" | "currentTarget">;

export interface UseAriaTabsParameters extends Omit<UseListNavigationParameters, "keyNavigation" | "shouldFocusOnChange"> {
    selectedIndex: number | null;
    onSelect(event: TabsChangeEvent<Element>): void;
    selectionMode: "focus" | "activate";
    orientation: "inline" | "block";
}

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type UseTabParameters<E extends Element, I extends UseTabInfo> = UseListNavigationChildParameters<Omit<I, "tabId" | "setTabPanelId" | "setSelected" | "getSelected" | "setSelectionMode">> & TagSensitiveProps<E>;

export interface UseTabPanelParameters extends Omit<UseTabPanelInfo, "tabPanelId" | "setTabId" | "focus" | "setVisible" | "getVisible"> { }

export interface UseTabInfo extends UseListNavigationChildInfo {
    setSelected(selected: boolean): void;
    getSelected(): boolean | null;

    tabId: string | undefined;
    setTabPanelId(tabId: string | undefined): void;
    setSelectionMode(mode: "focus" | "activate"): void;
}

export interface UseTabPanelInfo extends ManagedChildInfo<number> {
    setVisible(visible: boolean): void;
    getVisible(): boolean | null;
    tabPanelId: string | undefined;
    setTabId(tabId: string | undefined): void;
    focus(): void;
}

export type UseTabsList<TabListElement extends Element> = () => { useTabListProps: <P extends h.JSX.HTMLAttributes<TabListElement>>(props: P) => h.JSX.HTMLAttributes<TabListElement>; }
export type UseTabsLabel = <E extends Element>() => { useTabsLabelProps: <P extends h.JSX.HTMLAttributes<E>>({ ...props }: P) => UseRandomIdPropsReturnType<P>; }
export type UseTab<TabElement extends Element, I extends UseTabInfo> = (info: UseTabParameters<TabElement, I>) => { selected: boolean | null; useTabProps: <P extends h.JSX.HTMLAttributes<TabElement>>({ ...props }: P) => MergedProps<TabElement, {}, UseReferencedIdPropsReturnType<UseRandomIdPropsReturnType<any>, "aria-controls">>; }
export type UseTabPanel<PanelElement extends Element> = (info: UseTabPanelParameters) => { visible: boolean | null, useTabPanelProps: <P extends h.JSX.HTMLAttributes<PanelElement>>(p: P) => MergedProps<PanelElement, {}, UseRandomIdPropsReturnType<UseRefElementPropsReturnType<PanelElement, P>>> }

export function useAriaTabs<ListElement extends Element, TabElement extends Element, TabPanelElement extends Element>({ selectionMode, selectedIndex, onSelect, orientation: logicalOrientation, ...args }: UseAriaTabsParameters) {

    const { useHasFocusProps: useTabListHasFocusProps, getFocusedInner: getTabListFocusedInner } = useHasFocus<ListElement>({});
    const [physicalOrientation, setPhysicalOrientation] = useState<"horizontal" | "vertical">("horizontal");
    const { getLogicalDirectionInfo, convertToPhysicalOrientation, useLogicalDirectionProps } = useLogicalDirection<ListElement>({ onLogicalDirectionChange: useCallback((logicalDirectionInfo: LogicalDirectionInfo | null) => setPhysicalOrientation(convertToPhysicalOrientation(logicalOrientation, logicalDirectionInfo)), []) });

    const { useRandomIdProps: useTabListIdProps, useReferencedIdProps: useReferencedTabListId } = useRandomId({ prefix: "aria-tab-list-" });
    const { useRandomIdProps: useTabLabelIdProps, useReferencedIdProps: useReferencedTabLabelId } = useRandomId({ prefix: "aria-tab-label-" });

    const { managedChildren: managedTabs, navigateToIndex, useListNavigationChild, useListNavigationProps, tabbableIndex, invalidTypeahead, currentTypeahead, focusCurrent } = useListNavigation<TabElement, UseTabInfo>({ ...args, shouldFocusOnChange: getTabListFocusedInner, keyNavigation: logicalOrientation });
    const { managedChildren: managedPanels, useManagedChild: useManagedTabPanel } = useChildManager<UseTabPanelInfo>()

    const stableOnSelect = useStableCallback(onSelect);
    const childCount = managedTabs.length;


    useLayoutEffect(() => {
        for (let child of managedTabs)
            child.setSelectionMode(selectionMode);
    }, [selectionMode])


    useChildFlag({ activatedIndex: selectedIndex, managedChildren: managedTabs, setChildFlag: (i, selected) => managedTabs[i]?.setSelected(selected), getChildFlag: i => (managedTabs[i]?.getSelected()) });
    useChildFlag({ activatedIndex: selectedIndex, managedChildren: managedPanels, setChildFlag: (i, visible) => managedPanels[i]?.setVisible(visible), getChildFlag: i => (managedPanels[i]?.getVisible()) });

    useLayoutEffect((prev) => {
        if (selectedIndex != null && selectionMode == "activate") {
            // TODO: We need to wait a moment so that the tab panel we want to focus
            // is actually visible (i.e. we need to wait for the child to re-render itself).
            // We could, alternatively, signal to the child that it should focus itself
            // the next time it renders itself as visible,
            // which might be better?
            queueMicrotask(() => {
                managedPanels[selectedIndex]?.focus();
            });
        }
    }, [childCount, selectedIndex, selectionMode]);


    const useTab: UseTab<TabElement, UseTabInfo> = useCallback(function useTab(info: UseTabParameters<TabElement, UseTabInfo>) {
        const [selectionModeL, setSelectionModeL] = useState<"focus" | "activate">(selectionMode);
        const { useRefElementProps, getElement } = useRefElement<TabElement>({})
        const [tabPanelId, setTabPanelId] = useState<string | undefined>(undefined)
        const { useRandomIdProps: useTabIdProps, id: tabId, getId: getTabId } = useRandomId({ prefix: "aria-tab-" });
        const [selected, setSelected, getSelected] = useState<boolean | null>(null);
        const { tabbable, useListNavigationChildProps, useListNavigationSiblingProps } = useListNavigationChild({ setSelected, getSelected, tabId, setTabPanelId, setSelectionMode: setSelectionModeL, ...info });
        const getIndex = useStableGetter(info.index);

        useEffect(() => {
            const element = getElement();
            if (tabbable && selectionModeL == "focus") {
                onSelect({ target: element, currentTarget: element, [EventDetail]: { selectedIndex: getIndex() } } as TabsChangeEvent<Element>);
            }
        }, [tabbable, selectionMode]);

        useEffect(() => { managedPanels[info.index]?.setTabId(tabId) }, [tabId, info.index]);


        function useTabProps<P extends h.JSX.HTMLAttributes<TabElement>>({ ...props }: P) {
            const newProps: h.JSX.HTMLAttributes<TabElement> = usePressEventHandlers<TabElement>((e) => {
                navigateToIndex(info.index);
                onSelect?.(enhanceEvent(e, { selectedIndex: getIndex() }));
                e.preventDefault();
            }, undefined)(props);

            newProps.role = "tab";
            newProps["aria-selected"] = (selected ?? false).toString();
            newProps["aria-controls"] = tabPanelId;

            return useMergedProps<TabElement>()({}, useTabIdProps(useListNavigationChildProps(useRefElementProps(newProps))));
        }

        return { useTabProps, selected };
    }, []);

    const useTabPanel: UseTabPanel<TabPanelElement> = useCallback(function usePanel(info: UseTabPanelParameters) {
        //const [shouldFocus, setShouldFocus] = useState(false);
        const [tabId, setTabId] = useState<undefined | string>(undefined);
        const [visible, setVisible, getVisible] = useState<boolean | null>(null);
        const { useRandomIdProps: usePanelIdProps, useReferencedIdProps: useReferencedPanelId, id: tabPanelId } = useRandomId({ prefix: "aria-tab-panel-" });
        const { useManagedChildProps, getElement } = useManagedTabPanel<TabPanelElement>({ ...info, tabPanelId, setTabId, focus, setVisible: setVisible, getVisible: getVisible });

        function focus() {
            const element = getElement();
            if (element && getTabListFocusedInner()) {
                (element as Element | null as HTMLOrSVGElement | null)?.focus({ preventScroll: true });
            }
        }

        useEffect(() => { managedTabs[info.index]?.setTabPanelId(tabPanelId) }, [tabPanelId, info.index]);

        function useTabPanelProps<P extends h.JSX.HTMLAttributes<TabPanelElement>>({ ...props }: P) {
            props["aria-labelledby"] = managedTabs[info.index]?.tabId;
            props.role = "tabpanel";
            props.tabIndex ??= -1;      // Make sure the tab panel is tabbable.
            return useMergedProps<TabPanelElement>()({}, usePanelIdProps(useManagedChildProps(props)));
        }

        return { useTabPanelProps, visible };
    }, []);


    const useTabsList: UseTabsList<ListElement> = useCallback(function useTabList() {

        function useTabListProps<P extends h.JSX.HTMLAttributes<ListElement>>({ ...props }: P) {
            props.role = "tablist";
            props["aria-orientation"] = physicalOrientation;
            return useReferencedTabLabelId("aria-labelledby")(useTabListHasFocusProps(useLogicalDirectionProps(useListNavigationProps(props as any))) as h.JSX.HTMLAttributes<ListElement> as unknown as MergedProps<ListElement, {}, P>);
        }

        return { useTabListProps };
    }, [useListNavigationProps, physicalOrientation]);


    const useTabsLabel = useCallback(function useTabsLabel<E extends Element>() {
        function useTabsLabelProps<P extends h.JSX.HTMLAttributes<E>>({ ...props }: P) {
            return useTabLabelIdProps(props) as UseRandomIdPropsReturnType<P>;
        }

        return { useTabsLabelProps };
    }, []);

    return { useTab, useTabPanel, useTabsList, useTabsLabel, tabbableIndex, focusTabList: focusCurrent, currentTypeahead, invalidTypeahead, managedPanels, managedTabs };

}
