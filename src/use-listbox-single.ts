import { h } from "preact";
import { useMergedProps, useStableCallback } from "preact-prop-helpers";
import { ManagedChildren } from "preact-prop-helpers/use-child-manager";
import { ListNavigationChildInfoBase, useListNavigationSingleSelection, UseListNavigationSingleSelectionParameters } from "preact-prop-helpers/use-list-navigation";
import { useCallback, useEffect } from "preact/hooks";
import { ElementToTag, EventDetail } from "./props";
import { usePressEventHandlers } from "./use-button";
import { useLabel } from "./use-label";

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type ListboxSingleSelectEvent<E extends EventTarget> = { [EventDetail]: { selectedIndex: number } } & Pick<h.JSX.TargetedEvent<E>, "target" | "currentTarget">;

export interface UseListboxSingleParameters<LabelElement extends Element, ListElement extends Element, ListItemElement extends Element, K extends string, I extends UseListboxSingleItemInfoBase<ListItemElement, K>> extends UseListNavigationSingleSelectionParameters<K, I> {
    selectionMode: "focus" | "activate";
    selectedIndex: number | null;
    onSelect?(event: ListboxSingleSelectEvent<Element>): void;
    tagLabel: ElementToTag<LabelElement>;
    tagList: ElementToTag<ListElement>;
}



export type UseListboxSingleItem<E extends Element, K extends string = string, I extends UseListboxSingleItemInfoBase<E, K> = UseListboxSingleItemInfoBase<E, K>> = (info: UseListboxSingleItemParameters<E, K, I>) => UseListboxSingleItemReturnType<E>;

export interface UseListboxSingleItemReturnType<E extends Element> {
    useListboxSingleItemProps: (props: h.JSX.HTMLAttributes<E>) => h.JSX.HTMLAttributes<E>;
    tabbable: boolean;
    selected: boolean;
    getSelected: () => boolean | null;
}

export interface UseListboxSingleReturnType<LabelElement extends Element, ListElement extends HTMLElement | SVGElement, ListItemElement extends HTMLElement | SVGElement, K extends string, I extends UseListboxSingleItemInfoBase<ListItemElement, K>> {
    useListboxSingleItem: UseListboxSingleItem<ListItemElement, K, I>;
    useListboxSingleProps: (props: h.JSX.HTMLAttributes<ListElement>) => h.JSX.HTMLAttributes<ListElement>;
    useListboxSingleLabel: () => { useListboxSingleLabelProps: (props: h.JSX.HTMLAttributes<LabelElement>) => h.JSX.HTMLAttributes<LabelElement>; }
    currentTypeahead: string | null;
    invalidTypeahead: boolean | null;
    children: ManagedChildren<I>;
}


export type UseListboxSingleItemParameters<E extends Element, K extends string, I extends UseListboxSingleItemInfoBase<E, K>> = {
    info: Omit<I, "getElement" | "flags">;
    disabled?: boolean;
};

export interface UseListboxSingleItemInfoBase<E extends Element, K extends string> extends ListNavigationChildInfoBase<K> {
    getElement(): E;
}

export function useAriaListboxSingle<LabelElement extends Element, ListElement extends HTMLElement | SVGElement, ListItemElement extends HTMLElement | SVGElement, K extends string = string, I extends UseListboxSingleItemInfoBase<ListItemElement, K> =  UseListboxSingleItemInfoBase<ListItemElement, K>>({ selectedIndex, onSelect, onTabbableIndexChange: otic, selectionMode, tagList, tagLabel, ...args }: UseListboxSingleParameters<LabelElement, ListElement, ListItemElement, K, I>): UseListboxSingleReturnType<LabelElement, ListElement, ListItemElement, K, I> {

    const { useLabelInput, useLabelLabel } = useLabel<ListElement, LabelElement>({ labelPrefix: "aria-listbox-label-", inputPrefix: "aria-listbox-", tagInput: tagList as never, tagLabel: tagLabel as never })
    const {
        useListNavigationSingleSelectionChild,
        useListNavigationSingleSelectionProps,
        currentTypeahead,
        invalidTypeahead,
        children
    } = useListNavigationSingleSelection<ListElement, ListItemElement, "tabbable" | "selected", I>({
        selectedIndex,
        onTabbableIndexChange: useStableCallback<NonNullable<typeof otic>>((i) => {
            otic?.(i);
            if (selectionMode == "focus") {
                const target = (children.getAt(i!)?.getElement());
                if (target)
                    onSelect?.({ target, currentTarget: target, [EventDetail]: { selectedIndex: i! } });
            }
        }),
        ...args
    });
    const { useLabelInputProps } = useLabelInput();
    const stableOnSelect = useStableCallback(onSelect ?? (() => { }));


    const useListboxSingleItem = useCallback<UseListboxSingleItem<ListItemElement, K, I>>(({ info: { ...info }, disabled }): UseListboxSingleItemReturnType<ListItemElement> => {
        const { tabbable, selected, getSelected, useListNavigationChildProps, getElement } = useListNavigationSingleSelectionChild({ info: { ...info, getElement: useStableCallback(() => getElement()), flags: {} } as I });
        const index = info.index;

        useEffect(() => {
            const element = getElement();
            if (element && tabbable && selectionMode == "focus") {
                stableOnSelect?.({ target: element, currentTarget: element, [EventDetail]: { selectedIndex: index } });
            }
        }, [tabbable, selectionMode, index]);

        return { useListboxSingleItemProps, tabbable, selected, getSelected };

        function useListboxSingleItemProps<P extends h.JSX.HTMLAttributes<ListItemElement>>(props: P) {
            const newProps: h.JSX.HTMLAttributes<ListItemElement> = usePressEventHandlers<ListItemElement>(disabled ? null : (e) => {
                const element = getElement();
                if (element)
                    stableOnSelect?.({ target: element, currentTarget: element, [EventDetail]: { selectedIndex: index } });
                e.preventDefault();
            }, undefined);

            props.role = "option";
            //props["aria-setsize"] = (children.getHighestIndex() + 1).toString();
            //props["aria-posinset"] = (info.index + 1).toString();
            props["aria-selected"] = (selected ?? false).toString();
            if (disabled)
                props["aria-disabled"] = "true"

            return useListNavigationChildProps(useMergedProps<ListItemElement>(newProps, props));
        }
    }, [useListNavigationSingleSelectionChild, selectionMode]);


    const useListboxSingleLabel = useCallback(function useListboxSingleLabel() {
        function useListboxSingleLabelProps(props: h.JSX.HTMLAttributes<LabelElement>) {
            const { useLabelLabelProps } = useLabelLabel();
            return useLabelLabelProps(props);
        }

        return { useListboxSingleLabelProps };
    }, [useLabelLabel]);


    return { useListboxSingleItem, useListboxSingleProps, useListboxSingleLabel, currentTypeahead, invalidTypeahead, children };


    function useListboxSingleProps(props: h.JSX.HTMLAttributes<ListElement>) {
        props.role = "listbox";
        return useListNavigationSingleSelectionProps(useLabelInputProps(props));
    }
}



