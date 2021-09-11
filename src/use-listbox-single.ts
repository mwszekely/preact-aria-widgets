import { h } from "preact";
import { useActiveElement, useHasFocus } from "preact-prop-helpers";
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
import { useChildFlag } from "preact-prop-helpers/use-child-manager";

export type ListboxSingleSelectEvent<E extends EventTarget> = { [EventDetail]: { selectedIndex: number } } & Pick<h.JSX.TargetedEvent<E>, "target" | "currentTarget">;

export interface UseListboxSingleParameters extends Omit<UseListNavigationParameters, "shouldFocus"> {
    selectionMode: "focus" | "activate";
    selectedIndex: number;
    onSelect?(event: ListboxSingleSelectEvent<Element>): void;
}

export interface UseListboxSingleItemInfo<E extends Element> extends UseListNavigationChildInfo, TagSensitiveProps<E> {
    setSelected(selected: boolean): void;
}



export type UseListboxSingleItem<E extends Element, I extends UseListboxSingleItemInfo<E> = UseListboxSingleItemInfo<E>> = (info: Omit<I, "setSelected" | "setTabbable">) => {
    useListboxSingleItemProps: <P extends h.JSX.HTMLAttributes<E>>(props: P) => UseListNavigationChildPropsReturnType<E, MergedProps<E, h.JSX.HTMLAttributes<E>, UseRefElementPropsReturnType<E, P>>>;
    tabbable: boolean;
    selected: boolean;
    getSelected: () => boolean;
}


export function useAriaListboxSingle<ParentElement extends Element, ChildElement extends Element, I extends UseListboxSingleItemInfo<ChildElement>>({ selectedIndex, onSelect, selectionMode, ...args }: UseListboxSingleParameters) {

    const { lastFocusedInner, useHasFocusProps } = useHasFocus<ParentElement>();

    const { useGenericLabelInput, useGenericLabelLabel, useReferencedInputIdProps, useReferencedLabelIdProps, inputElement } = useGenericLabel({ labelPrefix: "aria-listbox-label-", inputPrefix: "aria-listbox-" })
    const { useListNavigationChild, navigateToIndex, managedChildren, setTabbableIndex, ...listRest } = useListNavigation<ParentElement, ChildElement, I>({ ...args, focusOnChange: lastFocusedInner });
    const { useGenericLabelInputProps } = useGenericLabelInput<ParentElement>();
    const stableOnSelect = useStableCallback(onSelect ?? (() => { }));

    useChildFlag(selectedIndex, managedChildren.length, (i, selected) => managedChildren[i]?.setSelected(selected));

    useLayoutEffect(([]) => {
        navigateToIndex(selectedIndex);
    }, [selectedIndex, managedChildren.length]);

    const childCount = managedChildren.length;



    const { lastActiveElement } = useActiveElement();
    let anyRadiosFocused = (!!inputElement?.contains(lastActiveElement));
    useEffect(() => {
        if (!anyRadiosFocused)
            setTabbableIndex(selectedIndex);
    }, [anyRadiosFocused, selectedIndex, setTabbableIndex]);

    const useListboxSingleItem: UseListboxSingleItem<ChildElement, I> = useCallback((info: Omit<I, "setSelected" | "setTabbable">) => {
        type E = ChildElement;
        const [selected, setSelected, getSelected] = useState(false);
        const { tabbable, useListNavigationSiblingProps, useListNavigationChildProps } = useListNavigationChild({ setSelected, ...info } as I);
        const { element, useRefElementProps } = useRefElement<E>();
        const index = info.index;

        useEffect(() => {
            if (element && tabbable && selectionMode == "focus") {
                stableOnSelect?.({ target: element, currentTarget: element, [EventDetail]: { selectedIndex: index } });
            }
        }, [element, tabbable, selectionMode, index]);

        return { useListboxSingleItemProps, tabbable, selected, getSelected };

        function useListboxSingleItemProps<P extends h.JSX.HTMLAttributes<E>>(props: P) {
            const newProps: h.JSX.HTMLAttributes<E> = useButtonLikeEventHandlers<E>(info.tag, (e) => {
                navigateToIndex(info.index);
                if (element)
                    stableOnSelect?.({ target: element, currentTarget: element, [EventDetail]: { selectedIndex: index } });
                e.preventDefault();
            }, undefined)({});

            props.role = "option";
            props["aria-setsize"] = (childCount).toString();
            props["aria-posinset"] = (info.index + 1).toString();
            props["aria-selected"] = selected.toString();

            return useListNavigationChildProps(useMergedProps<E>()(newProps, useRefElementProps(props)));
        }
    }, [useListNavigationChild, selectionMode, childCount]);


    const useListboxSingleLabel = useCallback(function useListboxSingleLabel<E extends HTMLElement>() {
        function useListboxSingleLabelProps<P extends h.JSX.HTMLAttributes<E>>(props: P) {
            const { useGenericLabelLabelProps } = useGenericLabelLabel<E>();
            useGenericLabelLabelProps(props);
        }

        return { useListboxSingleLabelProps };
    }, [useGenericLabelLabel]);


    return { useListboxSingleItem, useListboxSingleProps, useListboxSingleLabel, ...listRest };


    function useListboxSingleProps<P extends h.JSX.HTMLAttributes<ParentElement>>(props: P) {
        props.role = "listbox";
        return useHasFocusProps(useGenericLabelInputProps(props));
    }
}
