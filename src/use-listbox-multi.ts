import { h } from "preact";
import { useHasFocus, useStableGetter } from "preact-prop-helpers";
import { useLayoutEffect } from "preact-prop-helpers/use-layout-effect";
import { useListNavigation, UseListNavigationChildInfo, UseListNavigationChildPropsReturnType, UseListNavigationParameters } from "preact-prop-helpers/use-list-navigation";
import { MergedProps, useMergedProps } from "preact-prop-helpers/use-merged-props";
import { useRefElement, UseRefElementPropsReturnType } from "preact-prop-helpers/use-ref-element";
import { useStableCallback } from "preact-prop-helpers/use-stable-callback";
import { useState } from "preact-prop-helpers/use-state";
import { useCallback, useEffect } from "preact/hooks";
import { EventDetail, TagSensitiveProps } from "./props";
import { useButtonLikeEventHandlers } from "./use-button";
import { useGenericLabel } from "./use-label";

export type ListboxMultiSelectEvent<E extends EventTarget> = { [EventDetail]: { selected: boolean } } & Pick<h.JSX.TargetedEvent<E>, "target" | "currentTarget">;

export interface UseListboxMultiParameters extends Omit<UseListNavigationParameters, "shouldFocus"> {  }





export interface UseListboxMultiItemInfo<E extends Element> extends UseListNavigationChildInfo, TagSensitiveProps<E> {
    selected: boolean;
    onSelect?(event: (ListboxMultiSelectEvent<Element>)): void;
    setTypeaheadInProgress(inProgress: boolean): void;
}

export type UseListboxMultiItem<E extends Element, I extends UseListboxMultiItemInfo<E> = UseListboxMultiItemInfo<E>> = (info: Omit<I, "setTabbable" | "setTypeaheadInProgress">) => {
    useListboxMultiItemProps: <P extends h.JSX.HTMLAttributes<E>>(props: P) => UseRefElementPropsReturnType<E, UseListNavigationChildPropsReturnType<E, MergedProps<E, h.JSX.HTMLAttributes<E>, P>>>;
    tabbable: boolean;
}




export function useAriaListboxMulti<ParentElement extends Element, ChildElement extends Element, I extends UseListboxMultiItemInfo<ChildElement>>({ ...args }: UseListboxMultiParameters) {
    type E = ParentElement;
    const { lastFocusedInner, useHasFocusProps } = useHasFocus<E>();

    const { useGenericLabelInput, useGenericLabelLabel, useReferencedInputIdProps, useReferencedLabelIdProps } = useGenericLabel({ labelPrefix: "aria-listbox-label-", inputPrefix: "aria-listbox-" })
    const { useListNavigationChild, navigateToIndex, managedChildren, currentTypeahead, ...listRest } = useListNavigation<E, ChildElement, UseListboxMultiItemInfo<ChildElement>>({ ...args, focusOnChange: lastFocusedInner });
    const { useGenericLabelInputProps } = useGenericLabelInput<E>();

    const childCount = managedChildren.length;

    const [shiftHeld, setShiftHeld, getShiftHeld] = useState(false);

    const typeaheadInProgress = (!!currentTypeahead);

    useEffect(() => {
        for (let i = 0; i < childCount; ++i) {
            managedChildren[i].setTypeaheadInProgress(typeaheadInProgress);
        }
    }, [typeaheadInProgress, childCount]);

    const useListboxMultiItem: UseListboxMultiItem<ChildElement, I> = useCallback((info: Omit<I, "setTabbable" | "setTypeaheadInProgress">) => {
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
            const newProps: h.JSX.HTMLAttributes<E> = useButtonLikeEventHandlers<E>(info.tag, (e) => {
                navigateToIndex(info.index);
                stableOnSelect?.({ ...e, [EventDetail]: { selected: !getSelected() } });
                e.preventDefault();
            }, { space: typeaheadInProgress ? "exclude" : undefined })({});

            props.role = "option";
            props["aria-setsize"] = (childCount).toString();
            props["aria-posinset"] = (info.index + 1).toString();
            props["aria-selected"] = tabbable.toString();

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

    return { useListboxMultiItem, useListboxMultiProps, useListboxMultiLabel, currentTypeahead, ...listRest };


    function useListboxMultiProps<P extends h.JSX.HTMLAttributes<E>>(props: P) {
        props.role = "listbox";
        props["aria-multiselectable"] = "true";
        return useHasFocusProps(useGenericLabelInputProps(useMergedProps<E>()({ onKeyDown, onKeyUp, onBlur }, props)));
    }



    function onKeyDown(e: KeyboardEvent) { if (e.key == "Shift") setShiftHeld(true); }
    function onKeyUp(e: KeyboardEvent) { if (e.key == "Shift") setShiftHeld(false); }
    function onBlur(e: FocusEvent) { setShiftHeld(false); }

}