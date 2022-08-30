import { h } from "preact";
import { OnTabbableIndexChange, useMergedProps, useStableCallback } from "preact-prop-helpers";
import { useListNavigationSingleSelection, UseListNavigationSingleSelectionChildParameters, UseListNavigationSingleSelectionParameters, UseListNavigationSingleSelectionReturnType } from "preact-prop-helpers/use-list-navigation";
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
};



export type UseListboxSingleItem<E extends Element> = (info: UseListboxSingleItemParameters) => UseListboxSingleItemReturnType<E>;

export interface UseListboxSingleItemReturnType<E extends Element> {
    useListboxSingleItemProps: (props: h.JSX.HTMLAttributes<E>) => h.JSX.HTMLAttributes<E>;
    tabbable: boolean;
    selected: boolean;
    getSelected: () => boolean | null;
}

export interface UseListboxSingleReturnType<LabelElement extends Element, ListElement extends HTMLElement | SVGElement, ListItemElement extends HTMLElement | SVGElement> extends Omit<UseListNavigationSingleSelectionReturnType<ListElement, ListItemElement, {}, never>, "useListNavigationSingleSelectionChild" | "useListNavigationSingleSelectionProps"> {
    useListboxSingleItem: UseListboxSingleItem<ListItemElement>;
    useListboxSingleProps: (props: h.JSX.HTMLAttributes<ListElement>) => h.JSX.HTMLAttributes<ListElement>;
    useListboxSingleLabel: () => { useListboxSingleLabelProps: (props: h.JSX.HTMLAttributes<LabelElement>) => h.JSX.HTMLAttributes<LabelElement>; }
    //currentTypeahead: string | null;
    //invalidTypeahead: boolean | null;
    //children: ManagedChildren<number, {}, never>;
}


/*export interface UseListboxSingleItemInfoBase<E extends Element, K extends string> extends ListNavigationChildInfoBase<K> {
    getElement(): E;
}*/

export function useAriaListboxSingle<LabelElement extends Element, ListElement extends HTMLElement | SVGElement, ListItemElement extends HTMLElement | SVGElement>({
    listboxSingle: { selectionMode, tagLabel, tagList, onSelect, ...lbs },
    singleSelection: { selectedIndex, ...ss },
    linearNavigation: { disableArrowKeys, disableHomeEndKeys, navigationDirection, ...ln },
    listNavigation: { indexDemangler, indexMangler, ...ls },
    managedChildren: { onAfterChildLayoutEffect, onChildrenMountChange, ...mc },
    rovingTabIndex: { initialIndex, onTabbableIndexChange, onTabbableRender, onTabbedInTo, onTabbedOutOf, ...rti },
    typeaheadNavigation: { collator, noTypeahead, typeaheadTimeout, ...tn }
}: UseListboxSingleParameters<LabelElement, ListElement>): UseListboxSingleReturnType<LabelElement, ListElement, ListItemElement> {

    const { useLabelInput, useLabelLabel } = useLabel<ListElement, LabelElement>({
        labelPrefix: "aria-listbox-label-",
        inputPrefix: "aria-listbox-",
        tagInput: tagList as never,
        tagLabel: tagLabel as never
    });

    const {
        useListNavigationSingleSelectionChild,
        useListNavigationSingleSelectionProps,
        linearNavigation: ln_ret,
        listNavigation: ls_ret,
        rovingTabIndex: rti_ret,
        typeaheadNavigation: tn_ret,
        children
    } = useListNavigationSingleSelection<ListElement, ListItemElement, {}, never>({

        linearNavigation: { disableArrowKeys, disableHomeEndKeys, navigationDirection, ...ln },
        listNavigation: { indexDemangler, indexMangler, ...ls },
        managedChildren: { onChildrenMountChange, onAfterChildLayoutEffect, ...mc },
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
    const { useLabelInputProps } = useLabelInput();
    const stableOnSelect = useStableCallback(onSelect ?? (() => { }));


    const useListboxSingleItem = useCallback<UseListboxSingleItem<ListItemElement>>(({ ls, lbs: { disabled }, managedChild, rti }) => {
        const { tabbable, selected, getSelected, useListNavigationChildProps, getElement } = useListNavigationSingleSelectionChild({
            managedChild,
            ls,
            rti
        });
        const index = managedChild.index;

        useEffect(() => {
            const element = getElement();
            if (element && tabbable && selectionMode == "focus") {
                stableOnSelect?.({ target: element, currentTarget: element, [EventDetail]: { selectedIndex: index } });
            }
        }, [tabbable, selectionMode, index]);

        return { useListboxSingleItemProps, tabbable, selected, getSelected };

        function useListboxSingleItemProps<P extends h.JSX.HTMLAttributes<ListItemElement>>(props: P) {
            const newProps: h.JSX.HTMLAttributes<ListItemElement> = usePressEventHandlers<ListItemElement>(disabled ? null : (e) => {
                const element = getElement();
                if (element)
                    stableOnSelect?.({ target: element, currentTarget: element, [EventDetail]: { selectedIndex: index } });
                e.preventDefault();
            }, undefined);

            props.role = "option";
            //props["aria-setsize"] = (children.getHighestIndex() + 1).toString();
            //props["aria-posinset"] = (info.index + 1).toString();
            props["aria-selected"] = (selected ?? false).toString();
            if (disabled)
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
        children,
        linearNavigation: ln_ret,
        listNavigation: ls_ret,
        rovingTabIndex: rti_ret,
        typeaheadNavigation: tn_ret
    };


    function useListboxSingleProps(props: h.JSX.HTMLAttributes<ListElement>) {
        props.role = "listbox";
        return useListNavigationSingleSelectionProps(useLabelInputProps(props));
    }
}



