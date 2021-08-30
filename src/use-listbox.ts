import { h } from "preact";
import { useCallback, useEffect } from "preact/hooks";
import { useLayoutEffect } from "preact-prop-helpers/use-layout-effect";
import { useListNavigation, UseListNavigationChildInfo, UseListNavigationChildPropsReturnType, UseListNavigationParameters } from "preact-prop-helpers/use-list-navigation";
import { MergedProps, useMergedProps } from "preact-prop-helpers/use-merged-props";
import { useRefElement, UseRefElementPropsReturnType } from "preact-prop-helpers/use-ref-element";
import { useStableCallback } from "preact-prop-helpers/use-stable-callback";
import { useState } from "preact-prop-helpers/use-state";
import { useButtonLikeEventHandlers } from "./use-button";
import { useGenericLabel } from "./use-label";
import { useActiveElement, useStableGetter } from "preact-prop-helpers";
import { EventDetail, useChildFlag } from "./props";

export type ListboxSingleSelectEvent<E extends EventTarget> = { [EventDetail]: { selectedIndex: number } } & Pick<h.JSX.TargetedEvent<E>, "target" | "currentTarget">;
export type ListboxMultiSelectEvent<E extends EventTarget> = { [EventDetail]: { selected: boolean } } & Pick<h.JSX.TargetedEvent<E>, "target" | "currentTarget">;

export interface UseListboxSingleParameters extends UseListNavigationParameters {
    selectionMode: "focus" | "activate";
    selectedIndex: number;
    onSelect(event: ListboxSingleSelectEvent<Element>): void;
}

export interface UseListboxMultiParameters extends UseListNavigationParameters {

}

export interface UseListboxSingleItemInfo extends UseListNavigationChildInfo {
    setSelected(selected: boolean): void;
}

export interface UseListboxMultiItemInfo extends UseListNavigationChildInfo {
    selected: boolean;
    onSelect(event: (ListboxMultiSelectEvent<Element>)): void;
    setTypeaheadInProgress(inProgress: boolean): void;
}

export type UseListboxSingleItem<E extends Element, I extends UseListboxSingleItemInfo = UseListboxSingleItemInfo> = (info: Omit<I, "setSelected" | "setTabbable">) => {
    useListboxSingleItemProps: <P extends h.JSX.HTMLAttributes<E>>(props: P) => UseListNavigationChildPropsReturnType<E, MergedProps<E, h.JSX.HTMLAttributes<E>, UseRefElementPropsReturnType<E, P>>>;
    tabbable: boolean;
    selected: boolean;
    getSelected: () => boolean;
}

export type UseListboxMultiItem<E extends Element, I extends UseListboxMultiItemInfo = UseListboxMultiItemInfo> = (info: Omit<I, "setTabbable" | "setTypeaheadInProgress">) => {
    useListboxMultiItemProps: <P extends h.JSX.HTMLAttributes<E>>(props: P) => UseRefElementPropsReturnType<E, UseListNavigationChildPropsReturnType<E, MergedProps<E, h.JSX.HTMLAttributes<E>, P>>>;
    tabbable: boolean;
}

export function useAriaListboxSingle<ParentElement extends Element, ChildElement extends Element, I extends UseListboxSingleItemInfo>({ selectedIndex, onSelect, selectionMode, ...args }: UseListboxSingleParameters) {

    const { useGenericLabelInput, useGenericLabelLabel, useReferencedInputIdProps, useReferencedLabelIdProps, inputElement } = useGenericLabel({ labelPrefix: "aria-listbox-label-", inputPrefix: "aria-listbox-" })
    const { useListNavigationChild, useListNavigationProps, navigateToIndex, managedChildren, setTabbableIndex, ...listRest } = useListNavigation<ParentElement, ChildElement, I>(args);
    const stableOnSelect = useStableCallback(onSelect);
    const { useGenericLabelInputProps } = useGenericLabelInput<ParentElement>();

    /*useLayoutEffect(([prevSelectedIndex]) => {
        navigateToIndex(selectedIndex);
        managedChildren[prevSelectedIndex]?.setSelected(false);
        managedChildren[selectedIndex]?.setSelected(true);
    }, [selectedIndex, managedChildren.length]);*/


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

    //const { getSyncHandler, ...asyncInfo } = useAsyncHandler<E>()({ capture: (e: Event) => indicesByElement.get(e.target!) ?? -1 });
    //const onSelect = getSyncHandler(asyncInfo.pending ? null : asyncOnSelect);

    const useListboxSingleItem: UseListboxSingleItem<ChildElement, I> = useCallback((info: Omit<I, "setSelected" | "setTabbable">) => {
        type E = ChildElement;
        const [selected, setSelected, getSelected] = useState(false);
        const { tabbable, useListNavigationSiblingProps, useListNavigationChildProps } = useListNavigationChild({ setSelected, ...info } as I);
        const { element, useRefElementProps } = useRefElement<E>();
        const index = info.index;

        useEffect(() => {
            if (element && tabbable && selectionMode == "focus") {
                onSelect?.({ target: element, currentTarget: element, [EventDetail]: { selectedIndex: index } });
            }
        }, [element, tabbable, selectionMode, index]);

        return { useListboxSingleItemProps, tabbable, selected, getSelected };

        function useListboxSingleItemProps<P extends h.JSX.HTMLAttributes<E>>(props: P) {
            const newProps: h.JSX.HTMLAttributes<E> = useButtonLikeEventHandlers<E>((e) => {
                navigateToIndex(info.index);
                if (element)
                    onSelect?.({ target: element, currentTarget: element, [EventDetail]: { selectedIndex: index } });
                e.preventDefault();
            })({});

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
        return useListNavigationProps(useGenericLabelInputProps(props));
    }



}

export function useAriaListboxMulti<ParentElement extends Element, ChildElement extends Element, I extends UseListboxMultiItemInfo>({ ...args }: UseListboxMultiParameters) {
    type E = ParentElement;

    const { useGenericLabelInput, useGenericLabelLabel, useReferencedInputIdProps, useReferencedLabelIdProps } = useGenericLabel({ labelPrefix: "aria-listbox-label-", inputPrefix: "aria-listbox-" })
    const { useListNavigationChild, useListNavigationProps, navigateToIndex, managedChildren, currentTypeahead, ...listRest } = useListNavigation<E, ChildElement, UseListboxMultiItemInfo>(args);
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
        //const onSelectAsync = info.onSelect;
        const [typeaheadInProgress, setTypeaheadInProgress] = useState(false);
        const getSelected = useStableGetter(selected);
        const stableOnSelect = useStableCallback(info.onSelect);
        const { element, useRefElementProps } = useRefElement<E>()



        //const { getSyncHandler, ...asyncInfo } = useAsyncHandler<E>()({ capture: e => !selected });
        //const onSelect = getSyncHandler(asyncInfo.pending ? null : (onSelectAsync ?? null));
        const { tabbable, useListNavigationSiblingProps, useListNavigationChildProps } = useListNavigationChild({...info, setTypeaheadInProgress });

        useLayoutEffect(() => {
            if (element && getShiftHeld()) {
                stableOnSelect({ target: element, currentTarget: element, [EventDetail]: { selected: true } });
            }
        }, [element, tabbable]);

        return { useListboxMultiItemProps, tabbable };

        function useListboxMultiItemProps<P extends h.JSX.HTMLAttributes<E>>(props: P) {
            const newProps: h.JSX.HTMLAttributes<E> = useButtonLikeEventHandlers<E>((e) => {
                //const event = e as any as ({ selected: boolean } & Pick<h.JSX.TargetedEvent<Element>, "target" | "currentTarget">);
                navigateToIndex(info.index);
                //event.selected = !getSelected();


                stableOnSelect?.({ ...e, [EventDetail]: { selected: !getSelected() } });
                //stableOnSelect?.(event);

                e.preventDefault();
            }, {
                space: typeaheadInProgress? "exclude" : undefined
            })({});

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
        return useListNavigationProps(useGenericLabelInputProps(useMergedProps<E>()({ onKeyDown, onKeyUp, onBlur }, props)));
    }



    function onKeyDown(e: KeyboardEvent) { if (e.key == "Shift") setShiftHeld(true); }
    function onKeyUp(e: KeyboardEvent) { if (e.key == "Shift") setShiftHeld(false); }
    function onBlur(e: FocusEvent) { setShiftHeld(false); }

}