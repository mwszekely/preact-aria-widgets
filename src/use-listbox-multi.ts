import { h } from "preact";
import { MergedProps, useHasFocus, useLayoutEffect, useListNavigation, UseListNavigationChildInfo, UseListNavigationChildParameters, UseListNavigationChildPropsReturnType, UseListNavigationParameters, useMergedProps, useRefElement, UseRefElementPropsReturnType, useStableCallback, useStableGetter, useState } from "preact-prop-helpers";
import { useCallback, useEffect } from "preact/hooks";
import { EventDetail, TagSensitiveProps } from "./props";
import { useButtonLikeEventHandlers } from "./use-button";
import { useGenericLabel } from "./use-label";

export type ListboxMultiSelectEvent<E extends EventTarget> = { [EventDetail]: { selected: boolean } } & Pick<h.JSX.TargetedEvent<E>, "target" | "currentTarget">;

export interface UseListboxMultiParameters extends Omit<UseListNavigationParameters, "shouldFocusOnChange"> {  }



type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;


export interface UseListboxMultiItemInfo<E extends Element> extends TagSensitiveProps<E>, UseListNavigationChildInfo {
    selected: boolean;
    onSelect?(event: (ListboxMultiSelectEvent<Element>)): void;
    setTypeaheadInProgress(inProgress: boolean): void;
}

export type UseListboxMultiItemParameters<E extends Element, I extends UseListboxMultiItemInfo<E>> = UseListNavigationChildParameters<Omit<UseListboxMultiItemInfo<E>, "setTypeaheadInProgress">>;

export type UseListboxMultiItem<E extends Element, I extends UseListboxMultiItemInfo<E>> = (info: UseListboxMultiItemParameters<E, I>) => {
    useListboxMultiItemProps: <P extends h.JSX.HTMLAttributes<E>>(props: P) => UseRefElementPropsReturnType<E, UseListNavigationChildPropsReturnType<E, MergedProps<E, h.JSX.HTMLAttributes<E>, P>>>;
    tabbable: boolean | null;
}




export function useAriaListboxMulti<ParentElement extends Element, ChildElement extends Element, I extends UseListboxMultiItemInfo<ChildElement>>({ ...args }: UseListboxMultiParameters) {
    type E = ParentElement;

    const [focusedInner, setFocusedInner, getFocusedInner] = useState(false);
    const { useHasFocusProps } = useHasFocus<E>({ setFocusedInner });

    const { useGenericLabelInput, useGenericLabelLabel, useReferencedInputIdProps, useReferencedLabelIdProps } = useGenericLabel({ labelPrefix: "aria-listbox-label-", inputPrefix: "aria-listbox-" })
    const { useListNavigationChild, navigateToIndex, managedChildren, currentTypeahead, focusCurrent, tabbableIndex, invalidTypeahead } = useListNavigation<ChildElement, UseListboxMultiItemInfo<ChildElement>>({ ...args, shouldFocusOnChange: getFocusedInner });
    const { useGenericLabelInputProps } = useGenericLabelInput<E>();

    const childCount = managedChildren.length;

    const [shiftHeld, setShiftHeld, getShiftHeld] = useState(false);

    const typeaheadInProgress = (!!currentTypeahead);

    useEffect(() => {
        for (let i = 0; i < childCount; ++i) {
            managedChildren[i].setTypeaheadInProgress(typeaheadInProgress);
        }
    }, [typeaheadInProgress, childCount]);

    const useListboxMultiItem: UseListboxMultiItem<ChildElement, I> = useCallback((info: UseListboxMultiItemParameters<ChildElement, I>) => {
        type E = ChildElement;
        const selected = info.selected;
        const [typeaheadInProgress, setTypeaheadInProgress] = useState(false);
        const getSelected = useStableGetter(selected);
        const { element, useRefElementProps } = useRefElement<E>();
        const stableOnSelect = useStableCallback(info.onSelect ?? (() => { }));

        const { tabbable, useListNavigationSiblingProps, useListNavigationChildProps } = useListNavigationChild({ ...info, setTypeaheadInProgress });

        useLayoutEffect(() => {
            if (element && getShiftHeld()) {
                stableOnSelect?.({ target: element, currentTarget: element, [EventDetail]: { selected: true } });
            }
        }, [element, tabbable]);

        return { useListboxMultiItemProps, tabbable };

        function useListboxMultiItemProps<P extends h.JSX.HTMLAttributes<E>>(props: P) {
            const newProps: h.JSX.HTMLAttributes<E> = useButtonLikeEventHandlers<E>((e) => {
                navigateToIndex(info.index);
                stableOnSelect?.({ ...e, [EventDetail]: { selected: !getSelected() } });
                e.preventDefault();
            }, { space: typeaheadInProgress ? "exclude" : undefined })({});

            props.role = "option";
            props["aria-setsize"] = (childCount).toString();
            props["aria-posinset"] = (info.index + 1).toString();
            props["aria-selected"] = (tabbable ?? false).toString();

            return useRefElementProps(useListNavigationChildProps(useMergedProps<E>()(newProps, props)));
        }

    }, [useListNavigationChild, childCount, typeaheadInProgress]);

    const useListboxMultiLabel = useCallback(function useListboxMultiLabel<E extends HTMLElement>() {
        function useListboxMultiLabelProps<P extends h.JSX.HTMLAttributes<E>>(props: P) {
            const { useGenericLabelLabelProps } = useGenericLabelLabel<E>();
            return useGenericLabelLabelProps(props);
        }

        return { useListboxMultiLabelProps };
    }, [useGenericLabelLabel]);

    return { useListboxMultiItem, useListboxMultiProps, useListboxMultiLabel, tabbableIndex, currentTypeahead, invalidTypeahead, focus: focusCurrent };


    function useListboxMultiProps<P extends h.JSX.HTMLAttributes<E>>(props: P) {
        props.role = "listbox";
        props["aria-multiselectable"] = "true";
        return useHasFocusProps(useGenericLabelInputProps(useMergedProps<E>()({ onKeyDown, onKeyUp, onFocusOut }, props)));
    }



    function onKeyDown(e: KeyboardEvent) { if (e.key == "Shift") setShiftHeld(true); }
    function onKeyUp(e: KeyboardEvent) { if (e.key == "Shift") setShiftHeld(false); }
    function onFocusOut(e: FocusEvent) { setShiftHeld(false); }

}