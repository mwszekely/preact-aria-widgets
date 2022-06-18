import { h } from "preact";
import { MergedProps, useActiveElement, useChildFlag, useLayoutEffect, useListNavigation, UseListNavigationChildInfo, UseListNavigationChildPropsReturnType, UseListNavigationParameters, useMergedProps, useRefElement, UseRefElementPropsReturnType, useStableCallback, useState } from "preact-prop-helpers";
import { useCallback, useEffect } from "preact/hooks";
import { EventDetail, TagSensitiveProps } from "./props";
import { usePressEventHandlers } from "./use-button";
import { useGenericLabel } from "./use-label";

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type ListboxSingleSelectEvent<E extends EventTarget> = { [EventDetail]: { selectedIndex: number } } & Pick<h.JSX.TargetedEvent<E>, "target" | "currentTarget">;

export interface UseListboxSingleParameters extends Omit<UseListNavigationParameters, "shouldFocusOnChange"> {
    selectionMode: "focus" | "activate";
    selectedIndex: number | null;
    onSelect?(event: ListboxSingleSelectEvent<Element>): void;
}

export interface UseListboxSingleItemInfo<E extends Element> extends UseListNavigationChildInfo, TagSensitiveProps<E> {
    setSelected(selected: boolean): void;
    getSelected(): boolean | null;
}



export type UseListboxSingleItem<E extends Element, I extends UseListboxSingleItemInfo<E>> = (info: UseListboxSingleItemParameters<E, I>) => UseListboxSingleItemReturnType<E>;

export interface UseListboxSingleItemReturnType<E extends Element> {
    useListboxSingleItemProps: <P extends h.JSX.HTMLAttributes<E>>(props: P) => UseListNavigationChildPropsReturnType<E, MergedProps<E, h.JSX.HTMLAttributes<E>, UseRefElementPropsReturnType<E, P>>>;
    tabbable: boolean | null;
    selected: boolean | null;
    getSelected: () => boolean | null;
}


export type UseListboxSingleItemParameters<E extends Element, I extends UseListboxSingleItemInfo<E>> = Omit<I, "getTabbable" | "setTabbable" | "rerenderAndFocus" | "getSelected" | "setSelected"> & {
    disabled?: boolean;
};

export function useAriaListboxSingle<ParentElement extends Element, ChildElement extends Element, I extends UseListboxSingleItemInfo<ChildElement>>({ selectedIndex, onSelect, selectionMode, ...args }: UseListboxSingleParameters) {

    const [anyItemsFocused, setAnyItemsFocused, getAnyItemsFocused] = useState(false);

    const { useGenericLabelInput, useGenericLabelLabel, getInputElement } = useGenericLabel({ labelPrefix: "aria-listbox-label-", inputPrefix: "aria-listbox-" })
    const { useListNavigationChild, useListNavigationProps, navigateToIndex, managedChildren, tabbableIndex, focusCurrent, currentTypeahead, invalidTypeahead } = useListNavigation<ChildElement, I>({ ...args, shouldFocusOnChange: getAnyItemsFocused });
    const { useGenericLabelInputProps } = useGenericLabelInput<ParentElement>();
    const stableOnSelect = useStableCallback(onSelect ?? (() => { }));

    // Track whether the currently focused element is a child of the list box parent element.
    // When it's not, we reset the tabbable index back to the currently selected element.
    const { useActiveElementProps } = useActiveElement<ParentElement>({ onActiveElementChange: useCallback((activeElement: Node | null) => setAnyItemsFocused(!!(getInputElement()?.contains(activeElement))), []) });
    useEffect(() => {
        if (!anyItemsFocused)
            navigateToIndex(selectedIndex);
    }, [anyItemsFocused, selectedIndex, navigateToIndex]);

    useChildFlag({
        activatedIndex: selectedIndex,
        managedChildren,
        setChildFlag: (i, selected) => managedChildren[i]?.setSelected(selected),
        getChildFlag: (i) => (managedChildren[i]?.getSelected() ?? null)
    });

    useLayoutEffect(() => {
        navigateToIndex(selectedIndex);
    }, [selectedIndex, managedChildren.length]);

    const childCount = managedChildren.length;

    const useListboxSingleItem: UseListboxSingleItem<ChildElement, I> = useCallback((info: UseListboxSingleItemParameters<ChildElement, I>): UseListboxSingleItemReturnType<ChildElement> => {
        type E = ChildElement;
        const [selected, setSelected, getSelected] = useState<boolean | null>(null);
        const { tabbable, useListNavigationChildProps } = useListNavigationChild({ setSelected, getSelected, ...info } as I);
        const { getElement, useRefElementProps } = useRefElement<ChildElement>({});
        const index = info.index;

        useEffect(() => {
            const element = getElement();
            if (element && tabbable && selectionMode == "focus") {
                stableOnSelect?.({ target: element, currentTarget: element, [EventDetail]: { selectedIndex: index } });
            }
        }, [tabbable, selectionMode, index]);

        return { useListboxSingleItemProps, tabbable, selected, getSelected };

        function useListboxSingleItemProps<P extends h.JSX.HTMLAttributes<E>>(props: P) {
            const newProps: h.JSX.HTMLAttributes<E> = usePressEventHandlers<E>(info.disabled? null : (e) => {
                navigateToIndex(info.index);
                const element = getElement();
                if (element)
                    stableOnSelect?.({ target: element, currentTarget: element, [EventDetail]: { selectedIndex: index } });
                e.preventDefault();
            }, undefined)({});

            props.role = "option";
            props["aria-setsize"] = (childCount).toString();
            props["aria-posinset"] = (info.index + 1).toString();
            props["aria-selected"] = (selected ?? false).toString();
            if (info.disabled)
                props["aria-disabled"] = "true"

            return useListNavigationChildProps(useMergedProps<ChildElement>()(newProps, useRefElementProps(props)));
        }
    }, [useListNavigationChild, selectionMode, childCount]);


    const useListboxSingleLabel = useCallback(function useListboxSingleLabel<E extends HTMLElement>() {
        function useListboxSingleLabelProps<P extends h.JSX.HTMLAttributes<E>>(props: P) {
            const { useGenericLabelLabelProps } = useGenericLabelLabel<E>();
            useGenericLabelLabelProps(props);
        }

        return { useListboxSingleLabelProps };
    }, [useGenericLabelLabel]);


    return { useListboxSingleItem, useListboxSingleProps, useListboxSingleLabel, tabbableIndex, focus: focusCurrent, currentTypeahead, invalidTypeahead, managedChildren };


    function useListboxSingleProps<P extends h.JSX.HTMLAttributes<ParentElement>>(props: P) {
        props.role = "listbox";
        return useListNavigationProps(useGenericLabelInputProps(useActiveElementProps(props)));
    }
}
