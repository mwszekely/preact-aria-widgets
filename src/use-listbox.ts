import { h } from "preact";
import { useCallback, useEffect } from "preact/hooks";
import { useAsyncHandler } from "preact-prop-helpers/use-async-handler";
import { useLayoutEffect } from "preact-prop-helpers/use-layout-effect";
import { useListNavigation, UseListNavigationChildInfo, UseListNavigationChildPropsReturnType, UseListNavigationParameters } from "preact-prop-helpers/use-list-navigation";
import { MergedProps, useMergedProps } from "preact-prop-helpers/use-merged-props";
import { useRefElement } from "preact-prop-helpers/use-ref-element";
import { useStableCallback } from "preact-prop-helpers/use-stable-callback";
import { useState } from "preact-prop-helpers/use-state";
import { useButtonLikeEventHandlers } from "./use-button";
import { useGenericLabel } from "./use-label";

export interface UseListboxSingleParameters extends UseListNavigationParameters {
    selectionMode: "focus" | "activate";
    selectedIndex: number;
    onSelect(index: number, event: h.JSX.TargetedEvent<Element> | null): void | Promise<void>
}

export interface UseListboxMultiParameters extends UseListNavigationParameters {

}

export interface UseListboxSingleItemInfo extends UseListNavigationChildInfo {
    setSelected(selected: boolean): void;
}

export interface UseListboxMultiItemInfo extends UseListNavigationChildInfo {
    selected: boolean;
    onSelect(selected: boolean, event: h.JSX.TargetedEvent<Element> | null): void | Promise<void>
}

export type UseListboxSingleItem<I extends UseListboxSingleItemInfo = UseListboxSingleItemInfo> = <E extends HTMLElement>(info: Omit<I, "setSelected" | "setTabbable">) => {
    useListboxSingleItemProps: <P extends h.JSX.HTMLAttributes<E>>(props: P) => UseListNavigationChildPropsReturnType<E, MergedProps<E, h.JSX.HTMLAttributes<E>, P>>;
    tabbable: boolean;
    selected: boolean;
    getSelected: () => boolean;
}

export type UseListboxMultiItem<I extends UseListboxMultiItemInfo = UseListboxMultiItemInfo> = <E extends HTMLElement>(info: Omit<I, "setTabbable">) => {
    useListboxMultiItemProps: <P extends h.JSX.HTMLAttributes<E>>(props: P) => UseListNavigationChildPropsReturnType<E, MergedProps<E, h.JSX.HTMLAttributes<E>, P>>;
    tabbable: boolean;
}

export function useAriaListboxSingle<E extends Element, I extends UseListboxSingleItemInfo>({ selectedIndex, onSelect: asyncOnSelect, selectionMode, ...args }: UseListboxSingleParameters) {

    const { useGenericLabelInput, useGenericLabelLabel, useReferencedInputIdProps, useReferencedLabelIdProps } = useGenericLabel({ labelPrefix: "aria-listbox-label-", inputPrefix: "aria-listbox-" })
    const { useListNavigationChild, useListNavigationProps, navigateToIndex, managedChildren, indicesByElement } = useListNavigation<E, I>(args);
    const stableAsyncOnSelect = useStableCallback(asyncOnSelect);
    const { useGenericLabelInputProps } = useGenericLabelInput<E>();

    useLayoutEffect(([prevSelectedIndex]) => {
        navigateToIndex(selectedIndex);
        managedChildren[prevSelectedIndex]?.setSelected(false);
        managedChildren[selectedIndex]?.setSelected(true);
    }, [selectedIndex, managedChildren.length]);

    const childCount = managedChildren.length;

    const { getSyncOnClick: getSyncOnSelect, ...asyncInfo } = useAsyncHandler<E>()({ event: "onClick", capture: (e: Event) => indicesByElement.get(e.target!) ?? -1 });
    const onSelect = getSyncOnSelect(asyncInfo.pending ? null : asyncOnSelect);

    const useListboxSingleItem: UseListboxSingleItem<I> = useCallback(<E extends HTMLElement>(info: Omit<I, "setSelected" | "setTabbable">) => {
        const [selected, setSelected, getSelected] = useState(false);
        const { tabbable, useListNavigationSiblingProps, useListNavigationChildProps } = useListNavigationChild<E>({ setSelected, ...info } as I);
        const { element, useRefElementProps } = useRefElement<E>();


        useEffect(() => {
            if (tabbable && selectionMode == "focus") {
                onSelect?.bind(element as never)({ target: element, currentTarget: element } as any);
            }
        }, [tabbable, selectionMode]);

        return { useListboxSingleItemProps, tabbable, selected, getSelected, asyncInfo };

        function useListboxSingleItemProps<P extends h.JSX.HTMLAttributes<E>>(props: P) {
            const newProps: h.JSX.HTMLAttributes<E> = useButtonLikeEventHandlers<E>((e) => {
                navigateToIndex(info.index);
                onSelect?.bind(null!)(null!);
                e.preventDefault();
            })({});

            props.role = "option";
            props["aria-setsize"] = (childCount).toString();
            props["aria-posinset"] = (info.index + 1).toString();
            props["aria-selected"] = selected.toString();

            return useListNavigationChildProps(useMergedProps<E>()(newProps, useRefElementProps(props)));
        }
    }, [useListNavigationChild, selectionMode, childCount]);

    return { useListboxSingleItem, useListboxSingleProps, useListboxSingleLabel };


    function useListboxSingleProps<P extends h.JSX.HTMLAttributes<E>>(props: P) {
        props.role = "listbox";
        return useListNavigationProps(useGenericLabelInputProps(props));
    }

    function useListboxSingleLabel<E extends HTMLElement>() {
        function useListboxSingleLabelProps<P extends h.JSX.HTMLAttributes<E>>(props: P) {
            const { useGenericLabelLabelProps } = useGenericLabelLabel<E>();
            useGenericLabelLabelProps(props);
        }

        return { useListboxSingleLabelProps };
    }


}

export function useAriaListboxMulti<E extends Element, I extends UseListboxMultiItemInfo>({ ...args }: UseListboxMultiParameters) {

    const { useGenericLabelInput, useGenericLabelLabel, useReferencedInputIdProps, useReferencedLabelIdProps } = useGenericLabel({ labelPrefix: "aria-listbox-label-", inputPrefix: "aria-listbox-" })
    const { useListNavigationChild, useListNavigationProps, navigateToIndex, managedChildren, currentTypeahead } = useListNavigation<E, I>(args);
    const { useGenericLabelInputProps } = useGenericLabelInput<E>();

    const childCount = managedChildren.length;

    const [shiftHeld, setShiftHeld, getShiftHeld] = useState(false);

    const useListboxMultiItem: UseListboxMultiItem<I> = useCallback(<E extends HTMLElement>(info: Omit<I, "setTabbable">) => {
        const selected = info.selected;
        const onSelectAsync = info.onSelect;
        const stableOnSelect = useStableCallback(onSelectAsync);



        const { getSyncOnClick: getSyncOnSelect, ...asyncInfo } = useAsyncHandler<E>()({ event: "onClick", capture: e => !selected });
        const onSelect = getSyncOnSelect(asyncInfo.pending ? null : onSelectAsync);
        const { tabbable, useListNavigationSiblingProps, useListNavigationChildProps } = useListNavigationChild<E>(info);

        useLayoutEffect(() => {
            if (getShiftHeld()) {
                stableOnSelect(true, null);
            }
        }, [tabbable])

        return { useListboxMultiItemProps, tabbable, asyncInfo };

        function useListboxMultiItemProps<P extends h.JSX.HTMLAttributes<E>>(props: P) {
            const newProps: h.JSX.HTMLAttributes<E> = useButtonLikeEventHandlers<E>((e) => {
                navigateToIndex(info.index);
                onSelect?.bind(e.target as never)(e);
                e.preventDefault();
            }, {
                // TODO: The space key conflicts with typeahead,
                // but it's the recommended activation method.
                // It's also keyUp by default, which is sort of awkward.
                space: "exclude"
            })({});

            props.role = "option";
            props["aria-setsize"] = (childCount).toString();
            props["aria-posinset"] = (info.index + 1).toString();
            props["aria-selected"] = tabbable.toString();

            return useListNavigationChildProps(useMergedProps<E>()(newProps, props));
        }


    }, [useListNavigationChild, childCount]);

    return { useListboxMultiItem, useListboxMultiProps, useListboxMultiLabel };


    function useListboxMultiProps<P extends h.JSX.HTMLAttributes<E>>(props: P) {
        props.role = "listbox";
        props["aria-multiselectable"] = "true";
        return useListNavigationProps(useGenericLabelInputProps(useMergedProps<E>()({ onKeyDown, onKeyUp, onBlur }, props)));
    }

    function useListboxMultiLabel<E extends HTMLElement>() {
        function useListboxMultiLabelProps<P extends h.JSX.HTMLAttributes<E>>(props: P) {
            const { useGenericLabelLabelProps } = useGenericLabelLabel<E>();
            return useGenericLabelLabelProps(props);
        }

        return { useListboxMultiLabelProps };
    }


    function onKeyDown(e: KeyboardEvent) { if (e.key == "Shift") setShiftHeld(true); }
    function onKeyUp(e: KeyboardEvent) { if (e.key == "Shift") setShiftHeld(false); }
    function onBlur(e: FocusEvent) { setShiftHeld(false); }

}