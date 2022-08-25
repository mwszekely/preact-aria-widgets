import { h } from "preact";
import { generateRandomId, useLayoutEffect, UseListNavigationParameters, useListNavigationSingleSelection, useManagedChildren, useMergedProps, useRandomId, useStableCallback, useState } from "preact-prop-helpers";
import { ManagedChildInfoBase } from "preact-prop-helpers/use-child-manager";
import { UseListNavigationSingleSelectionInfoBase } from "preact-prop-helpers/use-list-navigation";
import { useCallback } from "preact/hooks";
import { EventDetail } from "./props";
import { usePressEventHandlers } from "./use-button";


export type TabsChangeEvent<E extends Element> = { [EventDetail]: { selectedIndex: number } } & Pick<h.JSX.TargetedEvent<E>, "target" | "currentTarget">;

export interface UseAriaTabsParameters<K extends string = string, I extends UseTabInfo<K> = UseTabInfo<K>> extends UseListNavigationParameters<K, I> {
    selectedIndex: number | null;
    onSelect(event: TabsChangeEvent<Element>): void;
    selectionMode: "focus" | "activate";
    orientation: "inline" | "block";
}

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
//export type UseTabParameters<E extends Element, I extends UseTabSetItemInfo<E>> = Omit<I, never>;

//export interface UseTabPanelParameters2 extends Omit<UseTabPanelInfo2, "focus" | "setVisible" | "getVisible"> { }

//export interface UseTabInfo extends UseListNavigationChildInfo {
//setSelected(selected: boolean): void;
//getSelected(): boolean | null;

//tabId: string | undefined;
//setTabPanelId(tabId: string | undefined): void;
//setSelectionMode(mode: "focus" | "activate"): void;
//}

interface UseTabPanelInfo2 extends ManagedChildInfoBase<number> {
    setVisible(visible: boolean): void;
    getVisible(): boolean | null;
    //tabPanelId: string | undefined;
    //setTabId(tabId: string | undefined): void;
    focus(): void;
}

export interface UseTabInfo<K extends string = string> extends UseListNavigationSingleSelectionInfoBase<K> {
    disabled?: boolean;
    setCorrespondingPanelId(panelId: string): void;
    //getElement(): E;
}

export interface UseTabPanelInfo extends ManagedChildInfoBase<number> {
    setCorrespondingTabId(tagId: string): void;
    setVisible(visible: boolean): void;
}

/*
export type UseTabSet<TabElement extends HTMLElement | SVGElement, TabPanelElement extends Element, I extends UseTabSetItemInfo<TabElement>> = (info: I) => {
    useTabProps: (props: h.JSX.HTMLAttributes<TabElement>) => h.JSX.HTMLAttributes<TabElement>;
    usePanelProps: (props: h.JSX.HTMLAttributes<TabPanelElement>) => h.JSX.HTMLAttributes<TabPanelElement>;
    selected: boolean;
    tabbable: boolean;
    getSelected: () => boolean;
}*/

//export type UseTabsList2<TabListElement extends Element> = () => { useTabListProps: (props: h.JSX.HTMLAttributes<TabListElement>) => h.JSX.HTMLAttributes<TabListElement>; }
//export type UseTabsLabel2 = <E extends Element>() => { useTabsLabelProps: <P extends h.JSX.HTMLAttributes<E>>({ ...props }: P) => UseRandomIdPropsReturnType<P>; }
//export type UseTab2<TabElement extends Element, I extends UseTabInfo> = (info: UseTabParameters<TabElement, I>) => { selected: boolean | null; useTabProps: ({ ...props }: h.JSX.HTMLAttributes<TabElement>) => h.JSX.HTMLAttributes<TabElement>; }
//export type UseTabPanel2<PanelElement extends Element> = (info: UseTabPanelParameters2) => { visible: boolean | null, useTabPanelProps: (p: h.JSX.HTMLAttributes<PanelElement>) => h.JSX.HTMLAttributes<PanelElement> }
export type UseTab<TabElement extends HTMLElement | SVGElement> = ({ ...info }: Omit<UseTabInfo, "setCorrespondingPanelId">) => {
    getElement: () => TabElement | null;
    getSelected: () => boolean;
    selected: boolean;
    tabbable: boolean;
    useTabProps: (props: h.JSX.HTMLAttributes<TabElement>) => h.JSX.HTMLAttributes<TabElement>;
};

export type UseTabPanel<TabPanelElement extends Element> = ({ ...info }: Omit<UseTabPanelInfo, "setCorrespondingTabId" | "setVisible">) => {
    visible: boolean;
    useTabPanelProps: (props: h.JSX.HTMLAttributes<TabPanelElement>) => h.JSX.HTMLAttributes<TabPanelElement>;
}

export function useAriaTabs<ListElement extends HTMLElement, TabElement extends HTMLElement | SVGElement, TabPanelElement extends Element, LabelElement extends Element, K extends string = string, I extends UseTabInfo<K> = UseTabInfo<K>>({ selectionMode, selectedIndex, onSelect, orientation: logicalOrientation, collator, disableArrowKeys, disableHomeEndKeys, indexDemangler, indexMangler, initialIndex, navigationDirection, noTypeahead, onChildrenMountChange, onTabbableIndexChange: otic, typeaheadTimeout, ...args }: UseAriaTabsParameters<K, I>) {
    selectionMode ??= "focus";

    const {
        children: tabs,
        currentTypeahead,
        focusSelf,
        getTabbableIndex,
        setTabbableIndex,
        useListNavigationSingleSelectionChild,
        useListNavigationSingleSelectionProps
    } = useListNavigationSingleSelection<ListElement, TabElement, string, UseTabInfo>({
        selectedIndex,
        collator,
        disableArrowKeys,
        disableHomeEndKeys,
        indexDemangler,
        indexMangler,
        navigationDirection,
        noTypeahead,
        onChildrenMountChange,
        onTabbableIndexChange: useStableCallback<NonNullable<typeof otic>>((i) => {
            otic?.(i);
            if (selectionMode == "focus") {
                const target = tabs.getAt(i!)?.getElement()!;
                onSelect?.({ target, currentTarget: target, [EventDetail]: { selectedIndex: i! } });
            }
        }),
        typeaheadTimeout,
        ...args
    });

    const { children: panels, useManagedChild: useManagedPanel } = useManagedChildren<UseTabPanelInfo>({ onAfterChildLayoutEffect: null, onChildrenMountChange: null })
    const { useRandomIdSourceElement: useLabelIdSourceElement, useRandomIdReferencerElement: useLabelIdReferencerElement } = useRandomId<LabelElement>({ prefix: "tabs-label-", onAfterChildLayoutEffect: null, onChildrenMountChange: null });
    //const { useRandomIdSourceElement: useListIdSourceElement, useRandomIdReferencerElement: useListIdReferencerElement } = useRandomId({ prefix: "tabs-list-" });
    const { useRandomIdSourceElementProps: useLabelIdSourceElementProps } = useLabelIdSourceElement();
    const { useRandomIdReferencerElementProps: useLabelIdReferencerElementProps } = useLabelIdReferencerElement<ListElement>("labelled-by" as never);
    //const { useRandomIdSourceElementProps: useListIdSourceElementProps } = useListIdSourceElement();
    //const { useRandomIdReferencerElementProps: useListIdReferencerElementProps } = useListIdReferencerElement("labelled-by" as never);
    const useTabsLabelProps = useCallback((props: h.JSX.HTMLAttributes<LabelElement>): h.JSX.HTMLAttributes<LabelElement> => { return useLabelIdSourceElementProps(useMergedProps<LabelElement>({}, props)) }, []);
    const useTabsListProps = useCallback((props: h.JSX.HTMLAttributes<ListElement>): h.JSX.HTMLAttributes<ListElement> => { return useLabelIdReferencerElementProps(useListNavigationSingleSelectionProps(useMergedProps<ListElement>({ role: "tablist" }, props))) }, []);
    /*const useTabSet: UseTabSet<TabElement, TabPanelElement, I> = useCallback((info: I) => {
        const { useRandomIdSourceElement: useTabIdSourceElement, useRandomIdReferencerElement: useTabIdReferencerElement } = useRandomId<TabElement>({ prefix: "tab-" });
        const { useRandomIdSourceElement: useTabPanelIdSourceElement, useRandomIdReferencerElement: useTabPanelIdReferencerElement } = useRandomId<TabPanelElement>({ prefix: "tab-panel-" });
        const { useRandomIdSourceElementProps: useTabIdSourceElementProps } = useTabIdSourceElement();
        const { useRandomIdReferencerElementProps: useTabIdReferencerElementProps } = useTabIdReferencerElement<TabPanelElement>("labelled-by" as never);
        const { useRandomIdSourceElementProps: useTabPanelIdSourceElementProps } = useTabPanelIdSourceElement();
        const { useRandomIdReferencerElementProps: useTabPanelIdReferencerElementProps } = useTabPanelIdReferencerElement<TabElement>("aria-controls" as never);
        const { getElement, getSelected, selected, tabbable, useListNavigationChildProps } = useListNavigationSingleSelectionChild(info);
        const useTabProps = useCallback((props: h.JSX.HTMLAttributes<TabElement>): h.JSX.HTMLAttributes<TabElement> => { return useTabIdSourceElementProps(useTabPanelIdReferencerElementProps(useListNavigationChildProps(useMergedProps<TabElement>({ role: "tab" }, props)))) }, []);
        const usePanelProps = useCallback((props: h.JSX.HTMLAttributes<TabPanelElement>): h.JSX.HTMLAttributes<TabPanelElement> => { return useTabPanelIdSourceElementProps(useTabIdReferencerElementProps(useMergedProps<TabPanelElement>({ role: "tabpanel" }, props))) }, []);

        return {
            useTabProps,
            usePanelProps,
            selected,
            tabbable,
            getSelected
        }
    }, []);*/

    const useTab: UseTab<TabElement> = useCallback(({ ...info }: Omit<UseTabInfo, "setCorrespondingPanelId">) => {
        const [correspondingPanelId, setCorrespondingPanelId] = useState<string | null>(null);
        const [randomTabId] = useState(() => generateRandomId("tab-"));
        const { getElement, getSelected, selected, tabbable, useListNavigationChildProps } = useListNavigationSingleSelectionChild({ info: { ...info, setCorrespondingPanelId } });

        const pressProps = usePressEventHandlers(e => { onSelect({ ...(e as h.JSX.TargetedMouseEvent<TabElement>), [EventDetail]: { selectedIndex: info.index } }); }, {});

        useLayoutEffect(() => {
            panels.getAt(info.index)?.setVisible(selected);
        }, [info.index, selected])

        return {
            getElement,
            getSelected,
            selected,
            tabbable,
            useTabProps: function useTabProps(props: h.JSX.HTMLAttributes<TabElement>): h.JSX.HTMLAttributes<TabElement> { return useListNavigationChildProps(useMergedProps<TabElement>({ "aria-controls": correspondingPanelId, id: randomTabId, ...pressProps } as {}, props)); }
        }
    }, []);
    const useTabPanel: UseTabPanel<TabPanelElement> = useCallback(({ ...info }: Omit<UseTabPanelInfo, "setCorrespondingTabId" | "setVisible">) => {
        const [correspondingTabId, setCorrespondingTabId] = useState<string | null>(null);
        const [visible, setVisible] = useState(false);
        const _: void = useManagedPanel({ info: { ...info, setCorrespondingTabId, setVisible } })
        const [randomPanelId] = useState(() => generateRandomId("tab-panel-"));
        return {
            visible,
            useTabPanelProps: function useTabPanelProps(props: h.JSX.HTMLAttributes<TabPanelElement>): h.JSX.HTMLAttributes<TabPanelElement> { return useMergedProps<TabPanelElement>({ "aria-labelledby": correspondingTabId, id: randomPanelId } as {}, props); }
        }
    }, []);

    return {
        useTabsLabelProps,
        useTabsListProps,
        useTab,
        useTabPanel,
        currentTypeahead,
        focusSelf,
        getTabbableIndex,
    }

    /* const { useHasFocusProps: useTabListHasFocusProps, getFocusedInner: getTabListFocusedInner } = useHasFocus<ListElement>({});
     const [physicalOrientation, setPhysicalOrientation] = useState<"horizontal" | "vertical">("horizontal");
     const { convertToPhysicalOrientation, useLogicalDirectionProps } = useLogicalDirection<ListElement>({ onLogicalDirectionChange: useCallback((logicalDirectionInfo: LogicalDirectionInfo | null) => setPhysicalOrientation(convertToPhysicalOrientation(logicalOrientation, logicalDirectionInfo)), []) });
 
     //const { useRandomIdProps: useTabListIdProps, useReferencedIdProps: useReferencedTabListId } = useRandomId({ prefix: "aria-tab-list-" });
 
     const { useRandomIdSourceElement: useTabListId, useRandomIdReferencerElement: useTabListIdReferencer } = useRandomId<ListElement>({ prefix: "aria-tabs-label-" });
     const { useRandomIdSourceElementProps: useTabListIdProps } = useTabListId();
     const { useRandomIdReferencerElementProps: useTabListIdReferencerProps } = useTabListIdReferencer("aria-labelledby");
 
     const { managedChildren: managedTabs, navigateToIndex, useListNavigationChild, useListNavigationProps, tabbableIndex, invalidTypeahead, currentTypeahead, focusCurrent } = useListNavigation<TabElement, UseTabInfo>({ ...args, shouldFocusOnChange: getTabListFocusedInner, keyNavigation: logicalOrientation });
     const { managedChildren: managedPanels, useManagedChild: useManagedTabPanel } = useChildManager<UseTabPanelInfo2>()
 
     const childCount = managedTabs.length;
 
 
     useLayoutEffect(() => {
         for (const child of managedTabs)
             child.setSelectionMode(selectionMode);
     }, [selectionMode])
 
 
     useChildFlag({ activatedIndex: selectedIndex, managedChildren: managedTabs, setChildFlag: (i, selected) => managedTabs[i]?.setSelected(selected), getChildFlag: i => (managedTabs[i]?.getSelected()) });
     useChildFlag({ activatedIndex: selectedIndex, managedChildren: managedPanels, setChildFlag: (i, visible) => managedPanels[i]?.setVisible(visible), getChildFlag: i => (managedPanels[i]?.getVisible()) });
 
     useLayoutEffect((_prev) => {
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
 
     const { useRandomIdSourceElement: useLabelIdElement, useRandomIdReferencerElement: useLabelIdReferencer } = useRandomId<LabelElement>({ prefix: "aria-tabs-label" });
     const { useRandomIdReferencerElementProps: useLabelIdReferencerProps } = useLabelIdReferencer<ListElement>("aria-labelledby");
 
     const useTabSet = useCallback((info: UseTabSetParameters<TabElement, I>) => {
 
         const [selectionModeL, setSelectionModeL] = useState<"focus" | "activate">(selectionMode);
         const { useRefElementProps, getElement } = useRefElement<TabElement>({})
         const { useRandomIdSourceElement: useTabIdElement, useRandomIdReferencerElement: useTabIdReferencer } = useRandomId<TabElement>({ prefix: "aria-tab-" });
         const { useRandomIdSourceElement: useTabPanelIdElement, useRandomIdReferencerElement: useTabPanelIdReferencer } = useRandomId<TabPanelElement>({ prefix: "aria-tab-panel" });
         const [selected, setSelected, getSelected] = useState<boolean | null>(null);
         const { tabbable, useListNavigationChildProps } = useListNavigationChild({ setSelected, getSelected, setSelectionMode: setSelectionModeL, ...info });
         const getIndex = useStableGetter(info.index);
 
         const useTabProps = (props: h.JSX.HTMLAttributes<TabElement>) => {
             const { useRandomIdReferencerElementProps: useTabPanelIdReferencerProps } = useTabIdReferencer<TabElement>("aria-labelledby");
             const { useRandomIdSourceElementProps: useTabIdProps } = useTabIdElement();
             const newProps: h.JSX.HTMLAttributes<TabElement> = usePressEventHandlers<TabElement>((e) => {
                 navigateToIndex(info.index);
                 onSelect?.(enhanceEvent(e, { selectedIndex: getIndex() }));
                 e.preventDefault();
             }, undefined)(props);
 
             newProps.role = "tab";
             newProps["aria-selected"] = (selected ?? false).toString();
 
             return useTabPanelIdReferencerProps(useTabIdProps(useListNavigationChildProps(useRefElementProps(newProps))));
         };
         const useTabPanelProps = (props: h.JSX.HTMLAttributes<TabPanelElement>) => {
             const { useRandomIdReferencerElementProps: useTabIdReferencerProps } = useTabIdReferencer<TabPanelElement>("aria-controls");
             const { useRandomIdSourceElementProps: useTabPanelIdProps } = useTabPanelIdElement();
             props.role = "tabpanel";
             props.tabIndex ??= -1;      // Make sure the tab panel is tabbable.
             return useMergedProps<TabPanelElement>({}, useTabIdReferencerProps(useTabPanelIdProps(props)));
         };
 
         return { useTabProps, useTabPanelProps }
     }, []);
 
 
     const useTabListProps = (props: h.JSX.HTMLAttributes<ListElement>) => {
         return useMergedProps({ role: "tablist" }, useLabelIdReferencerProps(props));
     };
 
 
     return { useTabSet, useTabListProps, tabbableIndex, focusTabList: focusCurrent, currentTypeahead, invalidTypeahead, managedPanels, managedTabs };*/

}
