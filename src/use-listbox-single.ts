import { h } from "preact";
import { UseHasFocusParameters, useRandomId, useStableCallback } from "preact-prop-helpers";
import { useListNavigationSingleSelection, UseListNavigationSingleSelectionChildParameters, UseListNavigationSingleSelectionChildReturnTypeInfo, UseListNavigationSingleSelectionParameters, UseListNavigationSingleSelectionReturnTypeInfo } from "preact-prop-helpers/use-list-navigation";
import { useCallback } from "preact/hooks";
import { debugLog, ElementToTag, enhanceEvent, EventDetail, warnOnOverwrite } from "./props";
import { useLabel, UseLabelReturnTypeInfo } from "./use-label";

export type ListboxSingleSelectEvent<E extends EventTarget> = { [EventDetail]: { selectedIndex: number } } & Pick<h.JSX.TargetedEvent<E>, "target" | "currentTarget">;

export interface UseListboxSingleParameters<LabelElement extends Element, ListElement extends Element> extends UseListNavigationSingleSelectionParameters<never | "onSelectedIndexChange", never, never, never, never, never> {
    listboxSingle: {
        //selectionMode: "focus" | "activate";
        onSelect?(event: ListboxSingleSelectEvent<Element>): void;
        tagLabel: ElementToTag<LabelElement>;
        tagList: ElementToTag<ListElement>;
    }
}

export interface UseListboxSingleItemParameters<E extends Element> extends Omit<UseListNavigationSingleSelectionChildParameters<E, {}, never, never, never, never, never>, "subInfo"> {
    listboxSingleItem: { disabled?: boolean; }
    hasFocus: UseHasFocusParameters<E>;
}



export type UseListboxSingleItem<ListItemElement extends Element> = (info: UseListboxSingleItemParameters<ListItemElement>) => UseListboxSingleItemReturnTypeWithHooks<ListItemElement>;

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

export function useListboxSingle<LabelElement extends Element, ListElement extends Element, ListItemElement extends Element>({
    listboxSingle: { tagLabel, tagList, onSelect, ..._lbs },
    singleSelection: { selectedIndex, ...ss },
    linearNavigation: { ...ln },
    listNavigation: { ...ls },
    managedChildren: { ...mc },
    rovingTabIndex: { ...rti },
    typeaheadNavigation: { ...tn },
    childrenHaveFocus: { ...chf }
}: UseListboxSingleParameters<LabelElement, ListElement>): UseListboxSingleReturnTypeWithHooks<LabelElement, ListElement, ListItemElement> {
    debugLog("useListboxSingle", selectedIndex);

    const { useLabelInput, useLabelLabel, ...labelReturnType } = useLabel<ListElement, LabelElement>({
        label: {
            prefixLabel: "aria-listbox-label-",
            prefixInput: "aria-listbox-",
            tagInput: tagList,
            tagLabel: tagLabel
        }
    });

    const onSelectedIndexChange = useStableCallback((event: Event, newIndex: number) => {
        stableOnSelect(enhanceEvent<ListItemElement, Event, { selectedIndex: number }>(event, { selectedIndex: newIndex }))
    });

    const { useListNavigationSingleSelectionChild, useListNavigationSingleSelectionProps, ...listReturnType } = useListNavigationSingleSelection<ListElement, ListItemElement, {}, never>({
        childrenHaveFocus: { ...chf },
        linearNavigation: { ...ln },
        listNavigation: { ...ls },
        managedChildren: { ...mc },
        rovingTabIndex: {
            ...rti
        },
        singleSelection: { ...ss, onSelectedIndexChange, selectedIndex },
        typeaheadNavigation: tn
    });
    
    const { useLabelInputProps } = useLabelInput();
    const stableOnSelect = useStableCallback(onSelect ?? (() => { }));


    const useListboxSingleItem = useCallback<UseListboxSingleItem<ListItemElement>>(({ listboxSingleItem: { disabled }, listNavigation, managedChild, rovingTabIndex, hasFocus }) => {
        debugLog("useListboxSingleItem", managedChild.index);
        const { rovingTabIndex: rti_ret, singleSelection: ss_ret, useListNavigationSingleSelectionChildProps } = useListNavigationSingleSelectionChild({
            managedChild,
            listNavigation,
            rovingTabIndex,
            hasFocus,
            subInfo: {}
        });
        //const index = managedChild.index;

        /*useEffect(() => {
            const element = rti_ret.getElement();
            if (element && rti_ret.tabbable && selectionMode == "focus") {
                stableOnSelect?.({ target: element, currentTarget: element, [EventDetail]: { selectedIndex: index } });
            }
        }, [rti_ret.tabbable, selectionMode, index]);*/

        return {
            useListboxSingleItemProps,
            rovingTabIndex: rti_ret,
            singleSelection: ss_ret
        };

        function useListboxSingleItemProps<P extends h.JSX.HTMLAttributes<ListItemElement>>(props: P) {
            /*const newProps: h.JSX.HTMLAttributes<ListItemElement> = usePressEventHandlers<ListItemElement>(disabled ? null : (e) => {
                const element = rti_ret.getElement();
                if (element)
                    stableOnSelect?.({ target: element, currentTarget: element, [EventDetail]: { selectedIndex: index } });
                e.preventDefault();
            }, undefined);*/

            props.role = "option";
            //props["aria-setsize"] = (children.getHighestIndex() + 1).toString();
            //props["aria-posinset"] = (info.index + 1).toString();
            props["aria-selected"] = (ss_ret.selected ?? false).toString();
            if (disabled)
                props["aria-disabled"] = "true";

            return useListNavigationSingleSelectionChildProps(props);
        }
    }, [useListNavigationSingleSelectionChild]);


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



export function useListboxGroup<ContainerElement extends Element, HeadingElement extends Element>() {
    const { useRandomIdReferencerElement, useRandomIdSourceElement } = useRandomId<HeadingElement>({ randomId: { prefix: "listbox-multi-group" }, managedChildren: {} });
    const { useRandomIdSourceElementProps } = useRandomIdSourceElement();
    const { useRandomIdReferencerElementProps } = useRandomIdReferencerElement<ContainerElement>("aria-labelledby");
    const useListboxGroupHeadingProps = (props: h.JSX.HTMLAttributes<HeadingElement>): h.JSX.HTMLAttributes<HeadingElement> => {
        return useRandomIdSourceElementProps(props);
    };
    const useListboxGroupContainerProps = ({ role, ...props }: h.JSX.HTMLAttributes<ContainerElement>): h.JSX.HTMLAttributes<ContainerElement> => {
        return useRandomIdReferencerElementProps({
            role: warnOnOverwrite("useListboxMultiGroupProps", "role", role, "group"),
            ...props
        })
    }

    return {
        useListboxGroupContainerProps,
        useListboxGroupHeadingProps,
    }
}
