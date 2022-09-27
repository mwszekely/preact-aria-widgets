import { createContext, h, VNode } from "preact";
import { memo } from "preact/compat";
import { useContext } from "preact/hooks";
import { ElementToTag, PropModifier } from "props";
import { useListboxMulti, UseListboxMultiItem, UseListboxMultiItemParameters, UseListboxMultiItemReturnTypeInfo, UseListboxMultiParameters, UseListboxMultiReturnTypeInfo } from "../use-listbox-multi";
import { defaultRenderList, defaultRenderListItem } from "./listbox-single";



type Get<T, K extends keyof T> = T[K];

export interface ListboxMultiProps<LabelElement extends Element, ListElement extends Element, ListItemElement extends Element> extends
    Get<UseListboxMultiParameters<LabelElement, ListElement>, "linearNavigation">,
    Get<UseListboxMultiParameters<LabelElement, ListElement>, "listNavigation">,
    Get<UseListboxMultiParameters<LabelElement, ListElement>, "rovingTabIndex">,
    Get<UseListboxMultiParameters<LabelElement, ListElement>, "typeaheadNavigation">,
    Get<UseListboxMultiParameters<LabelElement, ListElement>, "managedChildren">,
    Get<UseListboxMultiParameters<LabelElement, ListElement>, "listboxMulti"> {
    //tagLabel: ElementToTag<LabelElement>;
    render(info: UseListboxMultiReturnTypeInfo<ListItemElement>, modifyPropsLabel: PropModifier<LabelElement>, modifyPropsList: PropModifier<ListElement>): VNode<any>;
}






export interface ListboxMultiItemProps<ListboxItemElement extends Element> extends
    Get<UseListboxMultiItemParameters<ListboxItemElement>, "managedChild">,
    Omit<Get<UseListboxMultiItemParameters<ListboxItemElement>, "listNavigation">, "subInfo">,
    Get<UseListboxMultiItemParameters<ListboxItemElement>, "rovingTabIndex">,
    Get<UseListboxMultiItemParameters<ListboxItemElement>, "listboxMultiItem">,
    Get<UseListboxMultiItemParameters<ListboxItemElement>, "hasFocus"> {
    render(info: UseListboxMultiItemReturnTypeInfo<ListboxItemElement>, modifyListItemProps: PropModifier<ListboxItemElement>): VNode<any>;
}

export const ListboxMultiContext = createContext<UseListboxMultiItem<any>>(null!);

export const ListboxMulti = memo(function ListboxMulti<LabelElement extends Element, ListElement extends HTMLElement, ListItemElement extends HTMLElement>({
    render,
    tagLabel,
    collator,
    disableArrowKeys,
    disableHomeEndKeys,
    indexDemangler,
    indexMangler,
    initialIndex,
    navigationDirection,
    noTypeahead,
    onAfterChildLayoutEffect,
    onChildrenMountChange,
    onTabbableIndexChange,
    onTabbableRender,

    typeaheadTimeout,
    tagList,
}: ListboxMultiProps<LabelElement, ListElement, ListItemElement>) {
    const {
        useListboxMultiItem,
        useListboxMultiLabel,
        useListboxMultiProps,
        ...listboxReturnType
    } = useListboxMulti<LabelElement, ListElement, ListItemElement>({
        linearNavigation: { disableArrowKeys, disableHomeEndKeys, navigationDirection },
        listboxMulti: { tagLabel, tagList },
        listNavigation: { indexDemangler, indexMangler },
        managedChildren: { onAfterChildLayoutEffect, onChildrenMountChange },
        rovingTabIndex: { initialIndex, onTabbableIndexChange, onTabbableRender },
        typeaheadNavigation: { collator, noTypeahead, typeaheadTimeout }
    });

    const { useListboxMultiLabelProps } = useListboxMultiLabel();
    return (
        <ListboxMultiContext.Provider value={useListboxMultiItem}>
            {render(listboxReturnType, useListboxMultiLabelProps, useListboxMultiProps)}
        </ListboxMultiContext.Provider>
    )
})


export function defaultRenderListboxMulti<LabelElement extends Element, ListElement extends HTMLElement, ListItemElement extends Element>({ makePropsList, makePropsLabel, tagLabel, tagList }: { tagLabel: ElementToTag<LabelElement>, tagList: ElementToTag<ListElement>, makePropsLabel: (info: UseListboxMultiReturnTypeInfo<ListItemElement>) => h.JSX.HTMLAttributes<LabelElement>, makePropsList: (info: UseListboxMultiReturnTypeInfo<ListItemElement>) => h.JSX.HTMLAttributes<ListElement> }) {
    return defaultRenderList<LabelElement, ListElement, UseListboxMultiReturnTypeInfo<ListItemElement>>({ makePropsLabel, makePropsList, tagLabel, tagList })
}

export function defaultRenderListboxMultiItem<ListItemElement extends HTMLElement>({ makePropsListItem, tagListItem }: { tagListItem: ElementToTag<ListItemElement>, makePropsListItem: (info: UseListboxMultiItemReturnTypeInfo<ListItemElement>) => h.JSX.HTMLAttributes<ListItemElement> }) {
    return defaultRenderListItem<ListItemElement, UseListboxMultiItemReturnTypeInfo<ListItemElement>>({ makePropsListItem, tagListItem });
}

export const ListboxMultiItem = memo(function ListboxMultiItem<ListItemElement extends Element>({ index, disabled, flags, focusSelf, render, text, hidden, selected, onSelectedChange, getDocument, getWindow, onActiveElementChange, onElementChange, onFocusedChanged, onFocusedInnerChanged, onLastActiveElementChange, onLastFocusedChanged, onLastFocusedInnerChanged, onMount, onUnmount, onWindowFocusedChange }: ListboxMultiItemProps<ListItemElement>) {
    const { useListboxMultiItemProps, ...itemReturn } = useContext(ListboxMultiContext)({
        managedChild: { index, flags },
        rovingTabIndex: { focusSelf, hidden },
        listNavigation: { text },
        listboxMultiItem: { disabled, selected, onSelectedChange },
        hasFocus: { getDocument, getWindow, onActiveElementChange, onElementChange, onFocusedChanged, onFocusedInnerChanged, onLastActiveElementChange, onLastFocusedChanged, onLastFocusedInnerChanged, onMount, onUnmount, onWindowFocusedChange }
    });

    return (
        <>{render(itemReturn, useListboxMultiItemProps)}</>
    )
})

