import { h } from "preact";
import { OnTabbableIndexChange, returnFalse, useLayoutEffect, useListNavigation, UseListNavigationChildParameters, UseListNavigationChildReturnTypeInfo, UseListNavigationParameters, UseListNavigationReturnTypeInfo, useMergedProps, usePassiveState, useRefElement, useStableCallback, useStableGetter } from "preact-prop-helpers";
import { useCallback } from "preact/hooks";
import { ElementToTag, EventDetail } from "./props";
import { usePressEventHandlers } from "./use-button";
import { useLabel } from "./use-label";

export type ListboxMultiSelectEvent<E extends EventTarget> = { [EventDetail]: { selected: boolean } } & Pick<h.JSX.TargetedEvent<E>, "target" | "currentTarget">;

export interface UseListboxMultiParameters<LabelElement extends Element, ListElement extends Element> extends UseListNavigationParameters<never, never, never, never, never> {
    listboxMulti: {
        tagLabel: ElementToTag<LabelElement>;
        tagList: ElementToTag<ListElement>
    }
}

export interface UseListboxMultiItemParameters extends Omit<UseListNavigationChildParameters<Info, never, never, never, never, never>, "subInfo"> {
    listboxMultiItem: { disabled?: boolean; } & Info;
}



export type UseListboxMultiItem<E extends Element> = (info: UseListboxMultiItemParameters) => UseListboxMultiItemReturnTypeWithHooks<E>;

export interface UseListboxMultiItemReturnTypeInfo<E extends Element> extends UseListNavigationChildReturnTypeInfo<E> {
    listboxMultiItem: {
        tabbable: boolean;
    }
}
export interface UseListboxMultiItemReturnTypeWithHooks<E extends Element> extends UseListboxMultiItemReturnTypeInfo<E> {
    useListboxMultiItemProps: (props: h.JSX.HTMLAttributes<E>) => h.JSX.HTMLAttributes<E>;
}

export interface UseListboxMultiReturnTypeInfo<ListItemElement extends Element> extends UseListNavigationReturnTypeInfo<ListItemElement, Info, never> {

}

export interface UseListboxMultiReturnTypeWithHooks<LabelElement extends Element, ListElement extends Element, ListItemElement extends Element> extends UseListboxMultiReturnTypeInfo<ListItemElement> {
    useListboxMultiItem: UseListboxMultiItem<ListItemElement>;
    useListboxMultiProps: (props: h.JSX.HTMLAttributes<ListElement>) => h.JSX.HTMLAttributes<ListElement>;
    useListboxMultiLabel: () => { useListboxMultiLabelProps: (props: h.JSX.HTMLAttributes<LabelElement>) => h.JSX.HTMLAttributes<LabelElement>; }
}


interface Info {
    selected: boolean;
    onSelect?(event: (ListboxMultiSelectEvent<Element>)): void;
}


/*export interface UseListboxMultiReturnType<LabelElement extends Element, ListElement extends Element, ListItemElement extends Element> extends Omit<UseListNavigationReturnType<ListElement, ListItemElement, {}, never>, "useListNavigationChild" | "useListNavigationProps"> {
    useListboxMultiItem: UseListboxMultiItem<ListItemElement>;
    useListboxMultiProps: (props: h.JSX.HTMLAttributes<ListElement>) => h.JSX.HTMLAttributes<ListElement>;
    useListboxMultiLabel: () => { useListboxMultiLabelProps: (props: h.JSX.HTMLAttributes<LabelElement>) => h.JSX.HTMLAttributes<LabelElement>; }
}*/


export function useAriaListboxMulti<LabelElement extends Element, ListElement extends Element, ListItemElement extends Element>({
    listboxMulti: { tagLabel, tagList },
    linearNavigation: { ...ln },
    listNavigation: { ...ls },
    managedChildren: { ...mc },
    rovingTabIndex: { onTabbableIndexChange, ...rti },
    typeaheadNavigation: { ...tn }
}: UseListboxMultiParameters<LabelElement, ListElement>): UseListboxMultiReturnTypeWithHooks<LabelElement, ListElement, ListItemElement> {


    //const { useHasFocusProps, getFocusedInner } = useHasFocus<ListElement>({});

    const { useLabelInput, useLabelLabel } = useLabel<ListElement, LabelElement>({
        label: {
            prefixLabel: "aria-listbox-label-",
            prefixInput: "aria-listbox-",
            tagLabel: tagLabel,
            tagInput: tagList
        }
    });

    const listReturnType = useListNavigation<ListElement, ListItemElement, Info, never>({

        linearNavigation: { ...ln },
        listNavigation: { ...ls },
        managedChildren: { ...mc },
        rovingTabIndex: {
            ...rti,
            onTabbableIndexChange: useStableCallback<OnTabbableIndexChange>((i) => {
                onTabbableIndexChange?.(i);
                /*if (selectionMode == "focus") {
                    const target = (children.getAt(i!)?.subInfo.getElement());
                    if (target)
                        onSelect?.({ target, currentTarget: target, [EventDetail]: { selectedIndex: i! } });
                }*/
            }),
        },
        typeaheadNavigation: tn
    });

    const {
        useListNavigationChild,
        useListNavigationProps,
        rovingTabIndex: { setTabbableIndex }
    } = listReturnType

    const { useLabelInputProps } = useLabelInput();

    const [getShiftHeld, setShiftHeld] = usePassiveState(null, returnFalse);

    const useListboxMultiItem = useCallback<UseListboxMultiItem<ListItemElement>>(({ listboxMultiItem: { selected, disabled, onSelect }, managedChild, listNavigation: ls, rovingTabIndex: rti }) => {
        type E = ListItemElement;
        const getSelected = useStableGetter(selected);
        const { useRefElementProps, getElement } = useRefElement<E>({});
        const stableOnSelect = useStableCallback(onSelect ?? (() => { }));

        const { useListNavigationChildProps, rovingTabIndex: rti2_ret } = useListNavigationChild({ listNavigation: ls, managedChild, rovingTabIndex: rti, subInfo: { selected, onSelect } });

        useLayoutEffect(() => {
            const element = getElement();
            if (element && getShiftHeld()) {
                stableOnSelect?.({ target: element, currentTarget: element, [EventDetail]: { selected: true } });
            }
        }, [rti2_ret.tabbable]);

        return { useListboxMultiItemProps, listboxMultiItem: { getSelected, tabbable: rti2_ret.tabbable }, rovingTabIndex: rti2_ret };

        function useListboxMultiItemProps(props: h.JSX.HTMLAttributes<E>): h.JSX.HTMLAttributes<E> {
            const newProps: h.JSX.HTMLAttributes<E> = usePressEventHandlers<E>(disabled ? null : (e) => {
                console.log(`Multi ${managedChild.index} is ${getSelected().toString()} and changing to ${(!getSelected()).toString()}`)
                setTabbableIndex(managedChild.index, false);
                stableOnSelect?.({ ...e, [EventDetail]: { selected: !getSelected() } });
                e.preventDefault();
            }, {});

            props.role = "option";
            //props["aria-setsize"] = (childCount).toString();
            //props["aria-posinset"] = (info.index + 1).toString();
            props["aria-selected"] = (rti2_ret.tabbable ?? false).toString();
            if (disabled)
                props["aria-disabled"] = "true";

            return useRefElementProps(useListNavigationChildProps(useMergedProps<E>(newProps, props)));
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
        return useListNavigationProps(useLabelInputProps(useMergedProps<ListElement>({ onKeyDown, onKeyUp, onfocusout: onFocusOut }, props)));
    }



    function onKeyDown(e: KeyboardEvent) { if (e.key == "Shift") setShiftHeld(true); }
    function onKeyUp(e: KeyboardEvent) { if (e.key == "Shift") setShiftHeld(false); }
    function onFocusOut(_: FocusEvent) { setShiftHeld(false); }

}