import { h } from "preact";
import { OnTabbableIndexChange, useMergedProps, useStableCallback } from "preact-prop-helpers";
import { useListNavigationSingleSelection, UseListNavigationSingleSelectionChildParameters, UseListNavigationSingleSelectionChildReturnTypeInfo, UseListNavigationSingleSelectionParameters, UseListNavigationSingleSelectionReturnTypeInfo } from "preact-prop-helpers/use-list-navigation";
import { useCallback, useEffect } from "preact/hooks";
import { ElementToTag, EventDetail } from "./props";
import { usePressEventHandlers } from "./use-button";
import { useLabel, UseLabelReturnTypeInfo } from "./use-label";

export type ListboxSingleSelectEvent<E extends EventTarget> = { [EventDetail]: { selectedIndex: number } } & Pick<h.JSX.TargetedEvent<E>, "target" | "currentTarget">;

export interface UseListboxSingleParameters<LabelElement extends Element, ListElement extends Element> extends UseListNavigationSingleSelectionParameters<never, never, never, never, never, never> {
    listboxSingle: {
        selectionMode: "focus" | "activate";
        onSelect?(event: ListboxSingleSelectEvent<Element>): void;
        tagLabel: ElementToTag<LabelElement>;
        tagList: ElementToTag<ListElement>;
    }
}

export interface UseListboxSingleItemParameters extends Omit<UseListNavigationSingleSelectionChildParameters<{}, never, never, never, never, never>, "subInfo"> {
    listboxSingleItem: { disabled?: boolean; }
}



export type UseListboxSingleItem<ListItemElement extends Element> = (info: UseListboxSingleItemParameters) => UseListboxSingleItemReturnTypeWithHooks<ListItemElement>;

export interface UseListboxSingleItemReturnTypeInfo<ListItemElement extends Element> extends UseListNavigationSingleSelectionChildReturnTypeInfo<ListItemElement> {
}

export interface UseListboxSingleItemReturnTypeWithHooks<ListItemElement extends Element> extends UseListboxSingleItemReturnTypeInfo<ListItemElement> {
    useListboxSingleItemProps: (props: h.JSX.HTMLAttributes<ListItemElement>) => h.JSX.HTMLAttributes<ListItemElement>;
}

export interface UseListboxSingleReturnTypeInfo<ListItemElement extends Element> extends UseListNavigationSingleSelectionReturnTypeInfo<ListItemElement, {}, never>, UseLabelReturnTypeInfo {

}

export interface UseListboxSingleReturnTypeWithHooks<LabelElement extends Element, ListElement extends Element, ListItemElement extends Element> extends UseListboxSingleReturnTypeInfo<ListItemElement> {
    useListboxSingleItem: UseListboxSingleItem<ListItemElement>;
    useListboxSingleProps: (props: h.JSX.HTMLAttributes<ListElement>) => h.JSX.HTMLAttributes<ListElement>;
    useListboxSingleLabel: () => { useListboxSingleLabelProps: (props: h.JSX.HTMLAttributes<LabelElement>) => h.JSX.HTMLAttributes<LabelElement>; }
}

export function useAriaListboxSingle<LabelElement extends Element, ListElement extends Element, ListItemElement extends Element>({
    listboxSingle: { selectionMode, tagLabel, tagList, onSelect, ..._lbs },
    singleSelection: { selectedIndex, ...ss },
    linearNavigation: { ...ln },
    listNavigation: { ...ls },
    managedChildren: { ...mc },
    rovingTabIndex: { onTabbableIndexChange, ...rti },
    typeaheadNavigation: { ...tn }
}: UseListboxSingleParameters<LabelElement, ListElement>): UseListboxSingleReturnTypeWithHooks<LabelElement, ListElement, ListItemElement> {

    const { useLabelInput, useLabelLabel, ...labelReturnType } = useLabel<ListElement, LabelElement>({
        label: {
            prefixLabel: "aria-listbox-label-",
            prefixInput: "aria-listbox-",
            tagInput: tagList,
            tagLabel: tagLabel
        }
    });

    const { useListNavigationSingleSelectionChild, useListNavigationSingleSelectionProps, ...listReturnType } = useListNavigationSingleSelection<ListElement, ListItemElement, {}, never>({

        linearNavigation: { ...ln },
        listNavigation: { ...ls },
        managedChildren: { ...mc },
        rovingTabIndex: {
            ...rti,
            onTabbableIndexChange: useStableCallback<OnTabbableIndexChange>((i) => {
                onTabbableIndexChange?.(i);
                if (selectionMode == "focus") {
                    const target = (children.getAt(i!)?.subInfo.getElement());
                    if (target)
                        onSelect?.({ target, currentTarget: target, [EventDetail]: { selectedIndex: i! } });
                }
            }),
        },
        singleSelection: { ...ss, selectedIndex },
        typeaheadNavigation: tn
    });
    const { managedChildren: { children } } = listReturnType;
    const { useLabelInputProps } = useLabelInput();
    const stableOnSelect = useStableCallback(onSelect ?? (() => { }));


    const useListboxSingleItem = useCallback<UseListboxSingleItem<ListItemElement>>(({ listboxSingleItem: { disabled }, listNavigation, managedChild, rovingTabIndex }) => {
        const { rovingTabIndex: rti_ret, singleSelection: ss_ret, useListNavigationSingleSelectionChildProps } = useListNavigationSingleSelectionChild({
            managedChild,
            listNavigation,
            rovingTabIndex,
            subInfo: {}
        });
        const index = managedChild.index;

        useEffect(() => {
            const element = rti_ret.getElement();
            if (element && rti_ret.tabbable && selectionMode == "focus") {
                stableOnSelect?.({ target: element, currentTarget: element, [EventDetail]: { selectedIndex: index } });
            }
        }, [rti_ret.tabbable, selectionMode, index]);

        return {
            useListboxSingleItemProps,
            rovingTabIndex: rti_ret,
            singleSelection: ss_ret
        };

        function useListboxSingleItemProps<P extends h.JSX.HTMLAttributes<ListItemElement>>(props: P) {
            const newProps: h.JSX.HTMLAttributes<ListItemElement> = usePressEventHandlers<ListItemElement>(disabled ? null : (e) => {
                const element = rti_ret.getElement();
                if (element)
                    stableOnSelect?.({ target: element, currentTarget: element, [EventDetail]: { selectedIndex: index } });
                e.preventDefault();
            }, undefined);

            props.role = "option";
            //props["aria-setsize"] = (children.getHighestIndex() + 1).toString();
            //props["aria-posinset"] = (info.index + 1).toString();
            props["aria-selected"] = (ss_ret.selected ?? false).toString();
            if (disabled)
                props["aria-disabled"] = "true";

            return useListNavigationSingleSelectionChildProps(useMergedProps<ListItemElement>(newProps, props));
        }
    }, [useListNavigationSingleSelectionChild, selectionMode]);


    const useListboxSingleLabel = useCallback(function useListboxSingleLabel() {
        function useListboxSingleLabelProps(props: h.JSX.HTMLAttributes<LabelElement>) {
            const { useLabelLabelProps } = useLabelLabel();
            return useLabelLabelProps(props);
        }

        return { useListboxSingleLabelProps };
    }, [useLabelLabel]);


    return {
        useListboxSingleItem,
        useListboxSingleProps,
        useListboxSingleLabel,
        ...listReturnType,
        ...labelReturnType
        /*label: labelReturnType.label,
        linearNavigation: listReturnType.linearNavigation,
        listNavigation: listReturnType.listNavigation,
        managedChildren: listReturnType.managedChildren,
        rovingTabIndex: listReturnType.rovingTabIndex,
        typeaheadNavigation: listReturnType.typeaheadNavigation*/
    };


    function useListboxSingleProps(props: h.JSX.HTMLAttributes<ListElement>) {
        props.role = "listbox";
        return useListNavigationSingleSelectionProps(useLabelInputProps(props));
    }
}



