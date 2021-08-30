import { h } from "preact";
import { useCallback, useEffect } from "preact/hooks";
import { ManagedChildInfo, useChildManager } from "preact-prop-helpers/use-child-manager";
import { useLayoutEffect } from "preact-prop-helpers/use-layout-effect";
import { useListNavigation, UseListNavigationChildInfo, UseListNavigationChildParameters, UseListNavigationChildProps, UseListNavigationParameters, UseListNavigationPropsReturnType } from "preact-prop-helpers/use-list-navigation";
import { MergedProps, useMergedProps } from "preact-prop-helpers/use-merged-props";
import { useRandomId, UseRandomIdPropsReturnType, UseReferencedIdPropsReturnType } from "preact-prop-helpers/use-random-id";
import { useStableCallback } from "preact-prop-helpers/use-stable-callback";
import { useState } from "preact-prop-helpers/use-state";
import { useButtonLikeEventHandlers } from "./use-button";
import { useRefElement, UseRefElementPropsReturnType } from "preact-prop-helpers/use-ref-element";
import { useHasFocus, useLogicalDirection, useStableGetter } from "preact-prop-helpers";
import { enhanceEvent, EventDetail, useChildFlag } from "./props";

export type TabsChangeEvent<E extends Element> = { [EventDetail]: { selectedIndex: number } } & Pick<h.JSX.TargetedEvent<E>, "target" | "currentTarget">;

export interface UseAriaTabsParameters extends Omit<UseListNavigationParameters, "keyNavigation"> {
    selectedIndex: number | null;
    onSelect(event: TabsChangeEvent<Element>): void;
    selectionMode: "focus" | "activate";
    orientation: "inline" | "block";
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

export type UseTabsList<TabListElement extends Element> = () => { useTabListProps: <P extends h.JSX.HTMLAttributes<TabListElement>>(props: P) => UseListNavigationPropsReturnType<TabListElement, P>; }
export type UseTabsLabel = <E extends Element>() => { useTabsLabelProps: <P extends h.JSX.HTMLAttributes<E>>({ ...props }: P) => UseRandomIdPropsReturnType<P>; }
export type UseTab<TabElement extends Element> = (info: UseTabParameters) => { selected: boolean | null; useTabProps: <P extends h.JSX.HTMLAttributes<TabElement>>({ ...props }: P) => MergedProps<TabElement, {}, UseReferencedIdPropsReturnType<UseRandomIdPropsReturnType<any>, "aria-controls">>; }
export type UseTabPanel<PanelElement extends Element> = (info: UseTabPanelParameters) => { selected: boolean, useTabPanelProps: <P extends h.JSX.HTMLAttributes<PanelElement>>(p: P) => MergedProps<PanelElement, {}, UseRandomIdPropsReturnType<UseRefElementPropsReturnType<PanelElement, P>>> }

export function useAriaTabs<ListElement extends Element, TabElement extends Element, TabPanelElement extends Element>({ selectionMode, selectedIndex, onSelect, orientation: logicalOrientation, ...args }: UseAriaTabsParameters) {

    const { element: listElement, useRefElementProps } = useRefElement<any>();
    const { getLogicalDirection, convertToPhysicalOrientation } = useLogicalDirection(listElement);
    const physicalOrientation = convertToPhysicalOrientation(logicalOrientation);

    const { useRandomIdProps: useTabListIdProps, useReferencedIdProps: useReferencedTabListId } = useRandomId({ prefix: "aria-tab-list-" });
    const { useRandomIdProps: useTabLabelIdProps, useReferencedIdProps: useReferencedTabLabelId } = useRandomId({ prefix: "aria-tab-label-" });

    const { managedChildren: managedTabs, navigateToIndex, useListNavigationChild, useListNavigationProps } = useListNavigation<ListElement, TabElement, UseTabInfo>({...args, keyNavigation: logicalOrientation });
    const { managedChildren: managedPanels, useManagedChild: useManagedTabPanel } = useChildManager<UseTabPanelInfo>()

    const stableOnSelect = useStableCallback(onSelect);
    const childCount = managedTabs.length;

    const { useHasFocusProps: useTabListHasFocusProps, focusedInner: tabListFocused } = useHasFocus<ListElement>();

    useLayoutEffect(() => {
        for (let child of managedTabs)
            child.setSelectionMode(selectionMode);
    }, [selectionMode])


    useChildFlag(selectedIndex, managedTabs.length, (i, selected) => managedTabs[i]?.setSelected(selected));
    useChildFlag(selectedIndex, managedPanels.length, (i, visible) => managedPanels[i]?.setVisible(visible));



    useLayoutEffect(([prevChildCount, prevSelectedIndex]) => {
        if (selectedIndex != null && selectionMode == "activate") {
            managedPanels[selectedIndex]?.focus();
        }
    }, [childCount, selectedIndex, selectionMode]);

    const getTabListIsFocused = useStableGetter(tabListFocused);


    const useTab: UseTab<TabElement> = useCallback(function useTab(info: UseTabParameters) {
        //const [selectedTabId, setSelectedTabId, getSelectedTabId] = useState<string | undefined>(undefined);
        const [selectionModeL, setSelectionModeL] = useState<"focus" | "activate">(selectionMode);
        const { element, useRefElementProps } = useRefElement<TabElement>()
        const [tabPanelId, setTabPanelId] = useState<string | undefined>(undefined)
        const { useRandomIdProps: useTabIdProps, id: tabId, getId: getTabId } = useRandomId({ prefix: "aria-tab-" });
        const [selected, setSelected, getSelected] = useState<boolean | null>(null);
        const { tabbable, useListNavigationChildProps, useListNavigationSiblingProps } = useListNavigationChild({ ...info, setSelected, tabId, setTabPanelId, setSelectionMode: setSelectionModeL });
        const getIndex = useStableGetter(info.index);
        // const { getSyncHandler, ...asyncInfo } = useAsyncHandler<Element>()({ capture: (e: unknown) => info.index });
        // const onSelect = getSyncHandler(asyncInfo.pending? null : (stableAsyncOnSelect ?? null));

        useEffect(() => {
            if (tabbable && selectionModeL == "focus") {
                onSelect({ target: element, currentTarget: element, [EventDetail]: { selectedIndex: getIndex() } } as TabsChangeEvent<Element>);
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
                onSelect?.(enhanceEvent(e, { selectedIndex: getIndex() }));
                e.preventDefault();
            })(props);

            newProps.role = "tab";
            newProps["aria-selected"] = (selected ?? false).toString();
            newProps["aria-controls"] = tabPanelId;

            return useMergedProps<TabElement>()({}, useTabIdProps(useListNavigationChildProps(useRefElementProps(newProps))));
        }

        return { useTabProps, selected };
    }, []);

    const useTabPanel: UseTabPanel<TabPanelElement> = useCallback(function usePanel(info: UseTabPanelParameters) {
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


    const useTabsList: UseTabsList<ListElement> = useCallback(function useTabList() {

        function useTabListProps<P extends h.JSX.HTMLAttributes<ListElement>>({ ...props }: P) {
            props.role = "tablist";
            props["aria-orientation"] = physicalOrientation;
            return useListNavigationProps(useReferencedTabLabelId("aria-labelledby")(useTabListHasFocusProps(useRefElementProps(props as any))) as h.JSX.HTMLAttributes<ListElement>) as unknown as UseListNavigationPropsReturnType<ListElement, P>;
        }

        return { useTabListProps };
    }, [physicalOrientation]);


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
