import { h } from "preact";
import { useCallback, useEffect } from "preact/hooks";
import { useAsyncHandler } from "preact-prop-helpers/use-async-handler";
import { ManagedChildInfo, useChildManager } from "preact-prop-helpers/use-child-manager";
import { useLayoutEffect } from "preact-prop-helpers/use-layout-effect";
import { useListNavigation, UseListNavigationChildInfo, UseListNavigationChildParameters, UseListNavigationChildProps, UseListNavigationParameters, UseListNavigationPropsReturnType } from "preact-prop-helpers/use-list-navigation";
import { MergedProps, useMergedProps } from "preact-prop-helpers/use-merged-props";
import { useRandomId, UseRandomIdPropsReturnType, UseReferencedIdPropsReturnType } from "preact-prop-helpers/use-random-id";
import { useStableCallback } from "preact-prop-helpers/use-stable-callback";
import { useState } from "preact-prop-helpers/use-state";
import { useButtonLikeEventHandlers } from "./use-button";
import { useRefElement, UseRefElementPropsReturnType } from "preact-prop-helpers/use-ref-element";
import { useHasFocus, useStableGetter } from "preact-prop-helpers";

export interface UseAriaTabsParameters extends UseListNavigationParameters {
    selectedIndex: number | null;
    onSelect(index: number, event: h.JSX.TargetedEvent<Element> | null): void | Promise<void>;
    selectionMode: "focus" | "activate";
}

export interface UseTabParameters extends Omit<UseListNavigationChildParameters<UseTabInfo>, "tabId" | "setTabPanelId" | "setSelected" | "setSelectionMode"> {

}

export interface UseTabPanelParameters extends Omit<UseTabPanelInfo, "tabPanelId" | "setTabId" | "focus" | "setVisible"> { }

export interface UseTabInfo extends UseListNavigationChildInfo {
    setSelected(selected: boolean): void;
    tabId: string | undefined;
    setTabPanelId(tabId: string | undefined): void;
    setSelectionMode(mode: "focus" | "activate"): void;
    //setSelectedTabPanelId(id: string): void;
}

export interface UseTabPanelInfo extends ManagedChildInfo<number> {
    setVisible(visible: boolean): void;
    tabPanelId: string | undefined;
    setTabId(tabId: string | undefined): void;
    focus(): void;
    //setSelectedTabId(id: string): void;
}

export type UseTabsList = <TabListElement extends Element>() => { useTabListProps: <P extends h.JSX.HTMLAttributes<TabListElement>>(props: P) => UseListNavigationPropsReturnType<TabListElement, P>; }
export type UseTabsLabel = <E extends Element>() => { useTabsLabelProps: <P extends h.JSX.HTMLAttributes<E>>({ ...props }: P) => UseRandomIdPropsReturnType<P>; }
export type UseTab = <TabElement extends Element>(info: UseTabParameters) => { selected: boolean; useTabProps: <P extends h.JSX.HTMLAttributes<TabElement>>({ ...props }: P) => MergedProps<TabElement, {}, UseReferencedIdPropsReturnType<UseRandomIdPropsReturnType<any>, "aria-controls">>; }
export type UseTabPanel = <PanelElement extends Element>(info: UseTabPanelParameters) => { selected: boolean, useTabPanelProps: <P extends h.JSX.HTMLAttributes<PanelElement>>(p: P) => MergedProps<PanelElement, {}, UseRandomIdPropsReturnType<UseRefElementPropsReturnType<PanelElement, P>>> }

export function useAriaTabs({ selectionMode, selectedIndex, onSelect: asyncOnSelect, ...args }: UseAriaTabsParameters) {

    const { useRandomIdProps: useTabListIdProps, useReferencedIdProps: useReferencedTabListId } = useRandomId({ prefix: "aria-tab-list-" });
    const { useRandomIdProps: useTabLabelIdProps, useReferencedIdProps: useReferencedTabLabelId } = useRandomId({ prefix: "aria-tab-label-" });

    const { managedChildren: managedTabs, navigateToIndex, useListNavigationChild, useListNavigationProps } = useListNavigation<Element, UseTabInfo>(args)
    const { managedChildren: managedPanels, useManagedChild: useManagedTabPanel } = useChildManager<UseTabPanelInfo>()

    const stableAsyncOnSelect = useStableCallback(asyncOnSelect);
    const childCount = managedTabs.length;

    const { useHasFocusProps: useTabListHasFocusProps, focusedInner: tabListFocused } = useHasFocus<Element>();

    useLayoutEffect(() => {
        for (let child of managedTabs)
            child.setSelectionMode(selectionMode);
    }, [selectionMode])


    useLayoutEffect(([prevChildCount, prevSelectedIndex]) => {
        if (prevSelectedIndex != null) {
            managedTabs[prevSelectedIndex]?.setSelected(false);
            managedPanels[prevSelectedIndex]?.setVisible(false);
        }
        if (selectedIndex != null) {
            managedTabs[selectedIndex]?.setSelected(true);
            managedPanels[selectedIndex]?.setVisible(true);
        }
    }, [childCount, selectedIndex]);



    useLayoutEffect(([prevChildCount, prevSelectedIndex]) => {
        if (selectedIndex != null && selectionMode == "activate") {
            managedPanels[selectedIndex]?.focus();
        }
    }, [childCount, selectedIndex, selectionMode]);

    const getTabListIsFocused = useStableGetter(tabListFocused);


    const useTab: UseTab = useCallback(function useTab<TabElement extends Element>(info: UseTabParameters) {
        //const [selectedTabId, setSelectedTabId, getSelectedTabId] = useState<string | undefined>(undefined);
        const [selectionModeL, setSelectionModeL] = useState<"focus" | "activate">(selectionMode);
        const {element, useRefElementProps} = useRefElement<TabElement>()
        const [tabPanelId, setTabPanelId] = useState<string | undefined>(undefined)
        const { useRandomIdProps: useTabIdProps, id: tabId, getId: getTabId } = useRandomId({ prefix: "aria-tab-" });
        const [selected, setSelected, getSelected] = useState(false);
        const { tabbable, useListNavigationChildProps, useListNavigationSiblingProps } = useListNavigationChild<TabElement>({ ...info, setSelected, tabId, setTabPanelId, setSelectionMode: setSelectionModeL });
        const { getSyncOnClick: getSyncOnSelect, ...asyncInfo } = useAsyncHandler<Element>()({ event: "onClick", capture: (e: unknown) => info.index });
        const onSelect = getSyncOnSelect(asyncInfo.pending? null : stableAsyncOnSelect);

        useEffect(() => {
            if (tabbable && selectionModeL == "focus") {
                onSelect?.bind(null!)({ target: element, currentTarget: element } as Event as h.JSX.TargetedMouseEvent<Element>);
            }
        }, [tabbable, selectionModeL, element]);

        useEffect(() => { managedPanels[info.index]?.setTabId(tabId) }, [tabId, info.index]);

        /*useEffect(() => {
            if (selected)
                setSelectedTabId(tabId);
        }, [selected, tabId])*/


        function useTabProps<P extends h.JSX.HTMLAttributes<TabElement>>({ ...props }: P) {
            const newProps: h.JSX.HTMLAttributes<TabElement> = useButtonLikeEventHandlers<TabElement>((e) => {
                navigateToIndex(info.index);
                onSelect?.bind(null!)(e);
                e.preventDefault();
            })(props);

            newProps.role = "tab";
            newProps["aria-selected"] = selected.toString();
            newProps["aria-controls"] = tabPanelId;

            return useMergedProps<TabElement>()({}, useTabIdProps(useListNavigationChildProps(useRefElementProps(newProps))));
        }

        return { useTabProps, selected };
    }, []);

    const useTabPanel: UseTabPanel = useCallback(function usePanel<TabPanelElement extends Element>(info: UseTabPanelParameters) {
        //const [selectedTabPanelId, setSelectedTabPanelId, getSelectedTabPanelId] = useState<string | undefined>(undefined);
        const [shouldFocus, setShouldFocus] = useState(false);
        const [tabId, setTabId] = useState<undefined | string>(undefined);
        const [selected, setSelected, getSelected] = useState(false);
        const { useRandomIdProps: usePanelIdProps, useReferencedIdProps: useReferencedPanelId, id: tabPanelId } = useRandomId({ prefix: "aria-tab-panel-" });
        const { element, useManagedChildProps } = useManagedTabPanel<TabPanelElement>({ ...info, tabPanelId, setTabId, focus, setVisible: setSelected });


        function focus() {
            if (getTabListIsFocused()) {
                setShouldFocus(true);
            }
        }

        useEffect(() => {
            if (shouldFocus) {
                (element as HTMLOrSVGElement | null)?.focus();
                setShouldFocus(false);
            }
        }, [element, shouldFocus])

        useEffect(() => { managedTabs[info.index]?.setTabPanelId(tabPanelId) }, [tabPanelId, info.index]);

        function useTabPanelProps<P extends h.JSX.HTMLAttributes<TabPanelElement>>({ ...props }: P) {
            props["aria-labelledby"] = managedTabs[info.index]?.tabId;
            props.role = "tabpanel";
            props.tabIndex ??= -1;      // Make sure the tab panel is tabbable.
            return useMergedProps<TabPanelElement>()({}, usePanelIdProps(useManagedChildProps(props)));
        }

        return { useTabPanelProps, selected };
    }, []);


    const useTabsList: UseTabsList = useCallback(function useTabList<TabListElement extends Element>() {

        function useTabListProps<P extends h.JSX.HTMLAttributes<TabListElement>>({ ...props }: P) {
            props.role = "tablist";
            return useListNavigationProps(useReferencedTabLabelId("aria-labelledby")(useTabListHasFocusProps(props as any)) as h.JSX.HTMLAttributes<Element>) as unknown as UseListNavigationPropsReturnType<TabListElement, P>;
        }

        return { useTabListProps };
    }, []);


    const useTabsLabel = useCallback(function useTabsLabel<E extends Element>() {
        function useTabsLabelProps<P extends h.JSX.HTMLAttributes<E>>({ ...props }: P) {
            return useTabLabelIdProps(props) as UseRandomIdPropsReturnType<P>;
        }

        return { useTabsLabelProps };
    }, []);

    return { useTab, useTabPanel, useTabsList, useTabsLabel };

    /*const { managedChildren: managedTabs, useListNavigationChild, useListNavigationProps } = useListNavigation<E>(args)
    const { managedChildren: managedTabPanels, useManagedChild: useManagedTabPanel } = useChildManager();


    const useAriaTab = useCallback(<E extends Element>(args: UseAriaTabParameters) => {
        const { tabbable, useListNavigationChildProps, useListNavigationSiblingProps } = useListNavigationChild<E>(args);
        function useAriaTabProps<P extends h.JSX.HTMLAttributes<E>>(props: P) {
            return useListNavigationChildProps(props);
         }

         return { useAriaTabProps };
    }, []);

    const useAriaTabPanel = useCallback(<E extends Element>(args: UseAriaTabPanelParameters) => {
        const never = useManagedTabPanel(args);

        function useAriaTabPanelProps<P extends h.JSX.HTMLAttributes<E>>(props: P) {
            return useMergedProps<E>()({}, props);
        }

        return { useAriaTabPanelProps };
     }, []);

    function useAriaTabsProps<P extends h.JSX.HTMLAttributes<E>>({...props}: P) {
        props.role = "tablist";
        return useListNavigationProps(props);
    }


    return {
        useAriaTabsProps,
        useAriaTab,
        useAriaTabPanel
    }*/
}
