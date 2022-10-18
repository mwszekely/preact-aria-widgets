import { h } from "preact";
import { OnTabbableIndexChange, returnFalse, UseHasFocusParameters, useListNavigation, UseListNavigationChildParameters, UseListNavigationChildReturnTypeInfo, UseListNavigationParameters, UseListNavigationReturnTypeInfo, useMergedProps, usePassiveState, usePress, useRefElement, useStableCallback, useStableGetter } from "preact-prop-helpers";
import { useCallback, useLayoutEffect } from "preact/hooks";
import { debugLog, ElementToTag, EventDetail } from "./props";
import { useLabel } from "./use-label";

export type ListboxMultiSelectEvent<E extends EventTarget> = { [EventDetail]: { selected: boolean } } & Pick<h.JSX.TargetedEvent<E>, "target" | "currentTarget">;

export interface UseListboxMultiParameters<LabelElement extends Element, ListElement extends Element> extends UseListNavigationParameters<never, never, never, never, never> {
    listboxMulti: {
        tagLabel: ElementToTag<LabelElement>;
        tagList: ElementToTag<ListElement>
    }
}

export interface UseListboxMultiItemParameters<E extends Element, C, K extends string> extends UseListNavigationChildParameters<E, UseListboxMultiSubInfo<C>, K, never, never, never, C> {
    listboxMultiItem: {
        disabled?: boolean;
        selected: boolean;
        onSelectedChange?(event: (ListboxMultiSelectEvent<E>)): void;
    };
    hasFocus: UseHasFocusParameters<E>;
}



export type UseListboxMultiItem<E extends Element, C, K extends string> = (info: UseListboxMultiItemParameters<E, C, K>) => UseListboxMultiItemReturnTypeWithHooks<E>;

export interface UseListboxMultiItemReturnTypeInfo<E extends Element> extends UseListNavigationChildReturnTypeInfo<E> {
    listboxMultiItem: {
        tabbable: boolean;
    }
}
export interface UseListboxMultiItemReturnTypeWithHooks<E extends Element> extends UseListboxMultiItemReturnTypeInfo<E> {
    useListboxMultiItemProps: (props: h.JSX.HTMLAttributes<E>) => h.JSX.HTMLAttributes<E>;
}

export interface UseListboxMultiReturnTypeInfo<ListItemElement extends Element, C, K extends string> extends UseListNavigationReturnTypeInfo<ListItemElement, UseListboxMultiSubInfo<C>, K> {

}

export interface UseListboxMultiReturnTypeWithHooks<LabelElement extends Element, ListElement extends Element, ListItemElement extends Element, C, K extends string> extends UseListboxMultiReturnTypeInfo<ListItemElement, C, K> {
    useListboxMultiItem: UseListboxMultiItem<ListItemElement, C, K>;
    useListboxMultiProps: (props: h.JSX.HTMLAttributes<ListElement>) => h.JSX.HTMLAttributes<ListElement>;
    useListboxMultiLabel: () => { useListboxMultiLabelProps: (props: h.JSX.HTMLAttributes<LabelElement>) => h.JSX.HTMLAttributes<LabelElement>; }
}


export interface UseListboxMultiSubInfo<C> {
    selected: boolean;
    onSelect?(event: (ListboxMultiSelectEvent<Element>)): void;
    subInfo: C;
}


export function useListboxMulti<LabelElement extends Element, ListElement extends Element, ListItemElement extends Element, C = undefined, K extends string = never>({
    listboxMulti: { tagLabel, tagList },
    linearNavigation: { ...ln },
    listNavigation: { ...ls },
    managedChildren: { ...mc },
    rovingTabIndex: { onTabbableIndexChange, ...rti },
    typeaheadNavigation: { ...tn }
}: UseListboxMultiParameters<LabelElement, ListElement>): UseListboxMultiReturnTypeWithHooks<LabelElement, ListElement, ListItemElement, C, K> {

    debugLog("useListboxMulti");

    const { useLabelInput, useLabelLabel } = useLabel<ListElement, LabelElement>({
        label: {
            prefixLabel: "aria-listbox-label-",
            prefixInput: "aria-listbox-",
            tagLabel: tagLabel,
            tagInput: tagList
        }
    });

    const listReturnType = useListNavigation<ListElement, ListItemElement, UseListboxMultiSubInfo<C>, K>({

        linearNavigation: { ...ln },
        listNavigation: { ...ls },
        managedChildren: { ...mc },
        rovingTabIndex: {
            ...rti,
            onTabbableIndexChange: useStableCallback<OnTabbableIndexChange>((i) => {
                onTabbableIndexChange?.(i);
            }),
        },
        typeaheadNavigation: tn
    });

    const {
        useListNavigationChild,
        props: listNavigationProps,
        rovingTabIndex: { setTabbableIndex }
    } = listReturnType

    const { useLabelInputProps } = useLabelInput();

    const [getShiftHeld, setShiftHeld] = usePassiveState(null, returnFalse);


    const useListboxMultiItem = useCallback<UseListboxMultiItem<ListItemElement, C, K>>(({ listboxMultiItem: { selected, disabled, onSelectedChange }, managedChild, listNavigation: ls, rovingTabIndex: rti, hasFocus, subInfo }) => {
        debugLog("useListboxMultiItem", managedChild.index, selected);
        type E = ListItemElement;
        const getSelected = useStableGetter(selected);
        const { props: refElementProps, getElement } = useRefElement<E>({});
        const stableOnSelect = useStableCallback(onSelectedChange ?? (() => { }));

        const { props: listNavigationChildProps, rovingTabIndex: rti2_ret, hasFocus: hf2_ret } = useListNavigationChild({ listNavigation: ls, managedChild, rovingTabIndex: rti, subInfo: { subInfo, selected, onSelect: stableOnSelect } });

        useLayoutEffect(() => {
            const element = getElement();
            if (element && getShiftHeld()) {
                stableOnSelect?.({ target: element, currentTarget: element, [EventDetail]: { selected: true } });
            }
        }, [rti2_ret.tabbable]);

        return { useListboxMultiItemProps, listboxMultiItem: { getSelected, tabbable: rti2_ret.tabbable }, rovingTabIndex: rti2_ret, hasFocus: hf2_ret };

        function useListboxMultiItemProps(props: h.JSX.HTMLAttributes<E>): h.JSX.HTMLAttributes<E> {
            const { props: pressProps } = usePress<E>({
                onClickSync: disabled ? null : (e) => {
                    setTabbableIndex(managedChild.index, false);
                    stableOnSelect?.({ ...e, [EventDetail]: { selected: !getSelected() } });
                    e.preventDefault();
                },
                exclude: {},
                hasFocus,
                focusSelf: e => rti.focusSelf
            });

            props.role = "option";
            //props["aria-setsize"] = (childCount).toString();
            //props["aria-posinset"] = (info.index + 1).toString();
            props["aria-selected"] = (rti2_ret.tabbable ?? false).toString();
            if (disabled)
                props["aria-disabled"] = "true";

            return useMergedProps(useMergedProps(refElementProps, listNavigationChildProps), useMergedProps(pressProps, props));
        }

    }, [useListNavigationChild]);

    const useListboxMultiLabel = useCallback(function useListboxMultiLabel() {
        function useListboxMultiLabelProps(props: h.JSX.HTMLAttributes<LabelElement>): h.JSX.HTMLAttributes<LabelElement> {
            const { useLabelLabelProps } = useLabelLabel();
            return useLabelLabelProps(props);
        }

        return { useListboxMultiLabelProps };
    }, [useLabelLabel]);

    return {
        useListboxMultiItem,
        useListboxMultiProps,
        useListboxMultiLabel,
        linearNavigation: listReturnType.linearNavigation,
        listNavigation: listReturnType.listNavigation,
        rovingTabIndex: listReturnType.rovingTabIndex,
        typeaheadNavigation: listReturnType.typeaheadNavigation,
        managedChildren: listReturnType.managedChildren
    };


    function useListboxMultiProps(props: h.JSX.HTMLAttributes<ListElement>): h.JSX.HTMLAttributes<ListElement> {
        props.role = "listbox";
        props["aria-multiselectable"] = "true";
        return useLabelInputProps(useMergedProps(listNavigationProps, useMergedProps<ListElement>({ onKeyDown, onKeyUp, onfocusout: onFocusOut }, props)));
    }



    function onKeyDown(e: KeyboardEvent) { if (e.key == "Shift") setShiftHeld(true); }
    function onKeyUp(e: KeyboardEvent) { if (e.key == "Shift") setShiftHeld(false); }
    function onFocusOut(_: FocusEvent) { setShiftHeld(false); }

}