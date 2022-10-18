import { h } from "preact";
import { UseHasFocusParameters, useMergedProps, useRandomId, useStableCallback } from "preact-prop-helpers";
import { useListNavigationSingleSelection, UseListNavigationSingleSelectionChildParameters, UseListNavigationSingleSelectionChildReturnTypeInfo, UseListNavigationSingleSelectionParameters, UseListNavigationSingleSelectionReturnTypeInfo } from "preact-prop-helpers";
import { useCallback } from "preact/hooks";
import { debugLog, ElementToTag, enhanceEvent, EventDetail, overwriteWithWarning } from "./props";
import { useLabel, UseLabelReturnTypeInfo } from "./use-label";

export type ListboxSingleSelectEvent<E extends EventTarget> = { [EventDetail]: { selectedIndex: number } } & Pick<h.JSX.TargetedEvent<E>, "target" | "currentTarget">;

export interface UseListboxSingleParameters<LabelElement extends Element, ListElement extends Element, ListItemElement extends Element, C, K extends string> extends UseListNavigationSingleSelectionParameters<ListItemElement, C, K, never | "setSelectedIndex", never, never, never, never, never> {
    listboxSingle: {
        //selectionMode: "focus" | "activate";
        onSelect?(event: ListboxSingleSelectEvent<Element>): void;
        tagLabel: ElementToTag<LabelElement>;
        tagList: ElementToTag<ListElement>;
    }
}

export interface UseListboxSingleItemParameters<E extends Element, C, K extends string> extends UseListNavigationSingleSelectionChildParameters<E, UseListboxSingleSubInfo<C>, K, never, never, never, never, C> {
    listboxSingleItem: { disabled?: boolean; }
    hasFocus: UseHasFocusParameters<E>;
}



export type UseListboxSingleItem<ListItemElement extends Element, C, K extends string> = (info: UseListboxSingleItemParameters<ListItemElement, C, K>) => UseListboxSingleItemReturnTypeWithHooks<ListItemElement>;

export interface UseListboxSingleItemReturnTypeInfo<ListItemElement extends Element> extends UseListNavigationSingleSelectionChildReturnTypeInfo<ListItemElement> {
}

export interface UseListboxSingleItemReturnTypeWithHooks<ListItemElement extends Element> extends UseListboxSingleItemReturnTypeInfo<ListItemElement> {
    useListboxSingleItemProps: (props: h.JSX.HTMLAttributes<ListItemElement>) => h.JSX.HTMLAttributes<ListItemElement>;
}

export interface UseListboxSingleReturnTypeInfo<ListItemElement extends Element, C, K extends string> extends UseListNavigationSingleSelectionReturnTypeInfo<ListItemElement, UseListboxSingleSubInfo<C>, K>, UseLabelReturnTypeInfo {

}

export interface UseListboxSingleReturnTypeWithHooks<LabelElement extends Element, ListElement extends Element, ListItemElement extends Element, C, K extends string> extends UseListboxSingleReturnTypeInfo<ListItemElement, C, K> {
    useListboxSingleItem: UseListboxSingleItem<ListItemElement, C, K>;
    useListboxSingleProps: (props: h.JSX.HTMLAttributes<ListElement>) => h.JSX.HTMLAttributes<ListElement>;
    useListboxSingleLabel: () => { useListboxSingleLabelProps: (props: h.JSX.HTMLAttributes<LabelElement>) => h.JSX.HTMLAttributes<LabelElement>; }
}

export interface UseListboxSingleSubInfo<C> {
    subInfo: C;
}

export function useListboxSingle<LabelElement extends Element, ListElement extends Element, ListItemElement extends Element, C = undefined, K extends string = never>({
    listboxSingle: { tagLabel, tagList, onSelect, ..._lbs },
    singleSelection: { selectedIndex, ...ss },
    linearNavigation,
    listNavigation,
    managedChildren,
    rovingTabIndex,
    typeaheadNavigation,
    childrenHaveFocus,
}: UseListboxSingleParameters<LabelElement, ListElement, ListItemElement, C, K>): UseListboxSingleReturnTypeWithHooks<LabelElement, ListElement, ListItemElement, C, K> {
    debugLog("useListboxSingle", selectedIndex);

    const { useLabelInput, useLabelLabel, ...labelReturnType } = useLabel<ListElement, LabelElement>({
        label: {
            prefixLabel: "aria-listbox-label-",
            prefixInput: "aria-listbox-",
            tagInput: tagList,
            tagLabel: tagLabel
        }
    });

    const onSelectedIndexChange = useStableCallback((newIndex: number, event: any) => {
        stableOnSelect(enhanceEvent<ListItemElement, Event, { selectedIndex: number }>(event, { selectedIndex: newIndex }))
    });

    const { useListNavigationSingleSelectionChild, props: listNavigationSingleSelectionProps, ...listReturnType } = useListNavigationSingleSelection<ListElement, ListItemElement, UseListboxSingleSubInfo<C>, K>({
        childrenHaveFocus,
        linearNavigation,
        listNavigation,
        managedChildren,
        rovingTabIndex,
        singleSelection: { ...ss, setSelectedIndex: onSelectedIndexChange, selectedIndex },
        typeaheadNavigation,
    });

    const { useLabelInputProps } = useLabelInput();
    const stableOnSelect = useStableCallback(onSelect ?? (() => { }));


    const useListboxSingleItem = useCallback<UseListboxSingleItem<ListItemElement, C, K>>(({ listboxSingleItem: { disabled }, listNavigation, managedChild, rovingTabIndex, hasFocus, singleSelection, subInfo }) => {
        debugLog("useListboxSingleItem", managedChild.index);
        const { rovingTabIndex: rti_ret, singleSelection: ss_ret, props: listNavigationSingleSelectionChildProps, hasFocus: hf_ret } = useListNavigationSingleSelectionChild({
            managedChild,
            listNavigation,
            rovingTabIndex,
            hasFocus,
            singleSelection: { ...singleSelection },
            subInfo: { 
                subInfo 
            }
        });

        return {
            useListboxSingleItemProps,
            rovingTabIndex: rti_ret,
            singleSelection: ss_ret,
            hasFocus: hf_ret
        };

        function useListboxSingleItemProps<P extends h.JSX.HTMLAttributes<ListItemElement>>(props: P) {

            props.role = "option";
            props["aria-selected"] = (ss_ret.selected ?? false).toString();
            if (disabled)
                props["aria-disabled"] = "true";

            return useMergedProps(listNavigationSingleSelectionChildProps, props);
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
        label: labelReturnType.label,
        linearNavigation: listReturnType.linearNavigation,
        listNavigation: listReturnType.listNavigation,
        managedChildren: listReturnType.managedChildren,
        rovingTabIndex: listReturnType.rovingTabIndex,
        singleSelection: listReturnType.singleSelection,
        typeaheadNavigation: listReturnType.typeaheadNavigation
    };


    function useListboxSingleProps(props: h.JSX.HTMLAttributes<ListElement>) {
        props.role = "listbox";
        return useMergedProps(listNavigationSingleSelectionProps, useLabelInputProps(props));
    }
}



export function useListboxGroup<ContainerElement extends Element, HeadingElement extends Element>() {
    const { useRandomIdReferencerElement, useRandomIdSourceElement } = useRandomId<HeadingElement>({ randomId: { prefix: "listbox-multi-group" }, managedChildren: {} });
    const { useProps: useRandomIdSourceElementProps } = useRandomIdSourceElement();
    const { useProps: useRandomIdReferencerElementProps } = useRandomIdReferencerElement<ContainerElement>("aria-labelledby");
    const useListboxGroupHeadingProps = (props: h.JSX.HTMLAttributes<HeadingElement>): h.JSX.HTMLAttributes<HeadingElement> => {
        return useRandomIdSourceElementProps(props);
    };
    const useListboxGroupContainerProps = (props: h.JSX.HTMLAttributes<ContainerElement>): h.JSX.HTMLAttributes<ContainerElement> => {
        overwriteWithWarning("useListboxMultiGroupProps", props, "role", "group");
        return useRandomIdReferencerElementProps(props);
    }

    return {
        useListboxGroupContainerProps,
        useListboxGroupHeadingProps,
    }
}
