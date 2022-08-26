import { h } from "preact";
import { ListNavigationChildInfoBase, useLayoutEffect, useListNavigation, UseListNavigationParameters, useMergedProps, useRefElement, useStableCallback, useStableGetter, useState } from "preact-prop-helpers";
import { useCallback, useEffect } from "preact/hooks";
import { ElementToTag, EventDetail, TagSensitiveProps } from "./props";
import { usePressEventHandlers } from "./use-button";
import { useLabel } from "./use-label";

export type ListboxMultiSelectEvent<E extends EventTarget> = { [EventDetail]: { selected: boolean } } & Pick<h.JSX.TargetedEvent<E>, "target" | "currentTarget">;

export interface UseListboxMultiParameters<LabelElement extends Element, ListElement extends Element, ListItemElement extends Element, K extends string, I extends UseListboxMultiItemInfoBase<ListItemElement, K>> extends UseListNavigationParameters<K, I> {
    tagLabel: ElementToTag<LabelElement>;
    tagList: ElementToTag<ListElement>
}



type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;


export interface UseListboxMultiItemInfoBase<E extends Element, K extends string = string> extends ListNavigationChildInfoBase<K>, TagSensitiveProps<E> {
    selected: boolean;
    onSelect?(event: (ListboxMultiSelectEvent<Element>)): void;
    setTypeaheadInProgress(inProgress: boolean): void;
}

export type UseListboxMultiItemParameters<E extends Element, K extends string = string, I extends UseListboxMultiItemInfoBase<E, K> = UseListboxMultiItemInfoBase<E, K>> = {
    info:  Omit<I, "setTypeaheadInProgress" | "getElement" | "flags" | "blurSelf" | "focusSelf">;
    disabled?: boolean;
};

export type UseListboxMultiItem<E extends Element, K extends string = string, I extends UseListboxMultiItemInfoBase<E, K> = UseListboxMultiItemInfoBase<E, K>> = (info: UseListboxMultiItemParameters<E, K, I>) => {
    useListboxMultiItemProps: (props: h.JSX.HTMLAttributes<E>) => h.JSX.HTMLAttributes<E>;
    tabbable: boolean;
}




export function useAriaListboxMulti<LabelElement extends Element, ListElement extends HTMLElement | SVGElement, ListItemElement extends HTMLElement | SVGElement, K extends string = string, I extends UseListboxMultiItemInfoBase<ListItemElement, K> = UseListboxMultiItemInfoBase<ListItemElement, K>>({ tagLabel, tagList, ...args }: UseListboxMultiParameters<LabelElement, ListElement, ListItemElement, K, I>) {


    //const { useHasFocusProps, getFocusedInner } = useHasFocus<ListElement>({});

    const { useLabelInput, useLabelLabel } = useLabel<ListElement, LabelElement>({ labelPrefix: "aria-listbox-label-", inputPrefix: "aria-listbox-", tagLabel: tagLabel as never, tagInput: tagList as never })
    const { useListNavigationChild, useListNavigationProps, setTabbableIndex, currentTypeahead, invalidTypeahead, children } = useListNavigation<ListElement, ListItemElement, string, UseListboxMultiItemInfoBase<ListItemElement, K>>({ ...args });
    const { useLabelInputProps } = useLabelInput();

    const [, setShiftHeld, getShiftHeld] = useState(false);

    const typeaheadInProgress = (!!currentTypeahead);

    useEffect(() => {
        children.forEach(child => child.setTypeaheadInProgress(typeaheadInProgress));
    }, [typeaheadInProgress]);

    const useListboxMultiItem: UseListboxMultiItem<ListItemElement, K, I> = useCallback(({info: { index, selected, tag, text, hidden, onSelect, ...restInfo }, disabled}: UseListboxMultiItemParameters<ListItemElement, K, I>) => {
        type E = ListItemElement;
        const [typeaheadInProgress, setTypeaheadInProgress] = useState(false);
        const getSelected = useStableGetter(selected);
        const { useRefElementProps, getElement } = useRefElement<E>({});
        const stableOnSelect = useStableCallback(onSelect ?? (() => { }));

        const { tabbable, useListNavigationChildProps } = useListNavigationChild({ info: { index, selected, tag, text, hidden, onSelect, setTypeaheadInProgress, flags: {}, ...restInfo } });

        useLayoutEffect(() => {
            const element = getElement();
            if (element && getShiftHeld()) {
                stableOnSelect?.({ target: element, currentTarget: element, [EventDetail]: { selected: true } });
            }
        }, [tabbable]);

        return { useListboxMultiItemProps, tabbable };

        function useListboxMultiItemProps(props: h.JSX.HTMLAttributes<E>): h.JSX.HTMLAttributes<E> {
            const newProps: h.JSX.HTMLAttributes<E> = usePressEventHandlers<E>(disabled ? null : (e) => {
                console.log(`Multi ${index} is ${getSelected().toString()} and changing to ${(!getSelected()).toString()}`)
                setTabbableIndex(index, false);
                stableOnSelect?.({ ...e, [EventDetail]: { selected: !getSelected() } });
                e.preventDefault();
            }, { space: typeaheadInProgress ? "exclude" : undefined });

            props.role = "option";
            //props["aria-setsize"] = (childCount).toString();
            //props["aria-posinset"] = (info.index + 1).toString();
            props["aria-selected"] = (tabbable ?? false).toString();
            if (disabled)
                props["aria-disabled"] = "true";

            return useRefElementProps(useListNavigationChildProps(useMergedProps<E>(newProps, props)));
        }

    }, [useListNavigationChild, typeaheadInProgress]);

    const useListboxMultiLabel = useCallback(function useListboxMultiLabel() {
        function useListboxMultiLabelProps(props: h.JSX.HTMLAttributes<LabelElement>): h.JSX.HTMLAttributes<LabelElement> {
            const { useLabelLabelProps } = useLabelLabel();
            return useLabelLabelProps(props);
        }

        return { useListboxMultiLabelProps };
    }, [useLabelLabel]);

    return { useListboxMultiItem, useListboxMultiProps, useListboxMultiLabel, currentTypeahead, invalidTypeahead };


    function useListboxMultiProps(props: h.JSX.HTMLAttributes<ListElement>): h.JSX.HTMLAttributes<ListElement> {
        props.role = "listbox";
        props["aria-multiselectable"] = "true";
        return useListNavigationProps(useLabelInputProps(useMergedProps<ListElement>({ onKeyDown, onKeyUp, onfocusout: onFocusOut }, props)));
    }



    function onKeyDown(e: KeyboardEvent) { if (e.key == "Shift") setShiftHeld(true); }
    function onKeyUp(e: KeyboardEvent) { if (e.key == "Shift") setShiftHeld(false); }
    function onFocusOut(_: FocusEvent) { setShiftHeld(false); }

}