import { h } from "preact";
import { OnTabbableIndexChange, useMergedProps, useStableCallback } from "preact-prop-helpers";
import { useListNavigationSingleSelection, UseListNavigationSingleSelectionChildParameters, UseListNavigationSingleSelectionChildReturnType, UseListNavigationSingleSelectionParameters, UseListNavigationSingleSelectionReturnType } from "preact-prop-helpers/use-list-navigation";
import { useCallback, useEffect } from "preact/hooks";
import { ElementToTag, EventDetail } from "./props";
import { usePressEventHandlers } from "./use-button";
import { useLabel } from "./use-label";

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type ListboxSingleSelectEvent<E extends EventTarget> = { [EventDetail]: { selectedIndex: number } } & Pick<h.JSX.TargetedEvent<E>, "target" | "currentTarget">;

export interface UseListboxSingleParameters<LabelElement extends Element, ListElement extends Element> extends UseListNavigationSingleSelectionParameters {
    listboxSingle: {
        selectionMode: "focus" | "activate";
        onSelect?(event: ListboxSingleSelectEvent<Element>): void;
        tagLabel: ElementToTag<LabelElement>;
        tagList: ElementToTag<ListElement>;
    }
}

export interface UseListboxSingleItemParameters extends UseListNavigationSingleSelectionChildParameters<{}, never> {
    lbs: { disabled?: boolean; }
}



export type UseListboxSingleItem<ListItemElement extends Element> = (info: UseListboxSingleItemParameters) => UseListboxSingleItemReturnType<ListItemElement>;

export interface UseListboxSingleItemReturnType<ListItemElement extends Element> extends UseListNavigationSingleSelectionChildReturnType<ListItemElement> {
    useListboxSingleItemProps: (props: h.JSX.HTMLAttributes<ListItemElement>) => h.JSX.HTMLAttributes<ListItemElement>;
}

export interface UseListboxSingleReturnType<LabelElement extends Element, ListElement extends Element, ListItemElement extends Element> extends Omit<UseListNavigationSingleSelectionReturnType<ListElement, ListItemElement, {}, never>, "useListNavigationSingleSelectionChild" | "useListNavigationSingleSelectionProps"> {
    useListboxSingleItem: UseListboxSingleItem<ListItemElement>;
    useListboxSingleProps: (props: h.JSX.HTMLAttributes<ListElement>) => h.JSX.HTMLAttributes<ListElement>;
    useListboxSingleLabel: () => { useListboxSingleLabelProps: (props: h.JSX.HTMLAttributes<LabelElement>) => h.JSX.HTMLAttributes<LabelElement>; }
}


/*export interface UseListboxSingleItemInfoBase<E extends Element, K extends string> extends ListNavigationChildInfoBase<K> {
    getElement(): E;
}*/

export function useAriaListboxSingle<LabelElement extends Element, ListElement extends Element, ListItemElement extends Element>({
    listboxSingle: { selectionMode, tagLabel, tagList, onSelect, ..._lbs },
    singleSelection: { selectedIndex, ...ss },
    linearNavigation: { ...ln },
    listNavigation: { ...ls },
    managedChildren: { ...mc },
    rovingTabIndex: { onTabbableIndexChange, ...rti },
    typeaheadNavigation: { ...tn }
}: UseListboxSingleParameters<LabelElement, ListElement>): UseListboxSingleReturnType<LabelElement, ListElement, ListItemElement> {

    const { useLabelInput, useLabelLabel } = useLabel<ListElement, LabelElement>({
        labelPrefix: "aria-listbox-label-",
        inputPrefix: "aria-listbox-",
        tagInput: tagList,
        tagLabel: tagLabel
    });

    const parentReturnType = useListNavigationSingleSelection<ListElement, ListItemElement, {}, never>({

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
    const { useListNavigationSingleSelectionChild, useListNavigationSingleSelectionProps, managedChildren: { children } } = parentReturnType;
    const { useLabelInputProps } = useLabelInput();
    const stableOnSelect = useStableCallback(onSelect ?? (() => { }));


    const useListboxSingleItem = useCallback<UseListboxSingleItem<ListItemElement>>(({ lbs, listNavigation, managedChild, rovingTabIndex }) => {
        const { rovingTabIndex: rti_ret, singleSelection: ss_ret, useListNavigationChildProps } = useListNavigationSingleSelectionChild({
            managedChild,
            listNavigation,
            rovingTabIndex
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
            singleSelection: ss_ret,

            useListNavigationChildProps
        };

        function useListboxSingleItemProps<P extends h.JSX.HTMLAttributes<ListItemElement>>(props: P) {
            const newProps: h.JSX.HTMLAttributes<ListItemElement> = usePressEventHandlers<ListItemElement>(lbs.disabled ? null : (e) => {
                const element = rti_ret.getElement();
                if (element)
                    stableOnSelect?.({ target: element, currentTarget: element, [EventDetail]: { selectedIndex: index } });
                e.preventDefault();
            }, undefined);

            props.role = "option";
            //props["aria-setsize"] = (children.getHighestIndex() + 1).toString();
            //props["aria-posinset"] = (info.index + 1).toString();
            props["aria-selected"] = (ss_ret.selected ?? false).toString();
            if (lbs.disabled)
                props["aria-disabled"] = "true";

            return useListNavigationChildProps(useMergedProps<ListItemElement>(newProps, props));
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
        linearNavigation: parentReturnType.linearNavigation,
        listNavigation: parentReturnType.listNavigation,
        managedChildren: parentReturnType.managedChildren,
        rovingTabIndex: parentReturnType.rovingTabIndex,
        typeaheadNavigation: parentReturnType.typeaheadNavigation
    };


    function useListboxSingleProps(props: h.JSX.HTMLAttributes<ListElement>) {
        props.role = "listbox";
        return useListNavigationSingleSelectionProps(useLabelInputProps(props));
    }
}



