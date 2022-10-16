import { createContext, h, Ref, VNode } from "preact";
import { useContext, useImperativeHandle } from "preact/hooks";
import { ElementToTag, PropModifier } from "../props";
import { useListboxMulti, UseListboxMultiItem, UseListboxMultiItemParameters, UseListboxMultiItemReturnTypeInfo, UseListboxMultiParameters, UseListboxMultiReturnTypeInfo } from "../use-listbox-multi";
import { defaultRenderList, defaultRenderListItem } from "./listbox-single";
import { memoForwardRef } from "./util";



type Get<T, K extends keyof T> = T[K];

export interface ListboxMultiProps<LabelElement extends Element, ListElement extends Element, ListItemElement extends Element, C, K extends string> extends
    Get<UseListboxMultiParameters<LabelElement, ListElement>, "linearNavigation">,
    Get<UseListboxMultiParameters<LabelElement, ListElement>, "listNavigation">,
    Get<UseListboxMultiParameters<LabelElement, ListElement>, "rovingTabIndex">,
    Get<UseListboxMultiParameters<LabelElement, ListElement>, "typeaheadNavigation">,
    Get<UseListboxMultiParameters<LabelElement, ListElement>, "managedChildren">,
    Get<UseListboxMultiParameters<LabelElement, ListElement>, "listboxMulti"> {
    //tagLabel: ElementToTag<LabelElement>;
    ref?: Ref<UseListboxMultiReturnTypeInfo<ListItemElement, C, K>>;
    render(info: UseListboxMultiReturnTypeInfo<ListItemElement, C, K>, modifyPropsLabel: PropModifier<LabelElement>, modifyPropsList: PropModifier<ListElement>): VNode<any>;
}






export interface ListboxMultiItemProps<ListboxItemElement extends Element, C, K extends string> extends
    Get<UseListboxMultiItemParameters<ListboxItemElement, C, K>, "managedChild">,
    Omit<Get<UseListboxMultiItemParameters<ListboxItemElement, C, K>, "listNavigation">, "subInfo">,
    Get<UseListboxMultiItemParameters<ListboxItemElement, C, K>, "rovingTabIndex">,
    Get<UseListboxMultiItemParameters<ListboxItemElement, C, K>, "listboxMultiItem">,
    Get<UseListboxMultiItemParameters<ListboxItemElement, C, K>, "hasFocus"> {
    subInfo: Get<UseListboxMultiItemParameters<ListboxItemElement, C, K>, "subInfo">;
    ref?: Ref<UseListboxMultiItemReturnTypeInfo<ListboxItemElement>>;
    render(info: UseListboxMultiItemReturnTypeInfo<ListboxItemElement>, modifyListItemProps: PropModifier<ListboxItemElement>): VNode<any>;
}

export const ListboxMultiContext = createContext<UseListboxMultiItem<any, any, any>>(null!);

export const ListboxMulti = memoForwardRef(function ListboxMulti<LabelElement extends Element, ListElement extends HTMLElement, ListItemElement extends HTMLElement, C = undefined, K extends string = never>({
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
}: ListboxMultiProps<LabelElement, ListElement, ListItemElement, C, K>, ref?: Ref<any>) {
    const {
        useListboxMultiItem,
        useListboxMultiLabel,
        useListboxMultiProps,
        ...listboxReturnType
    } = useListboxMulti<LabelElement, ListElement, ListItemElement, C, K>({
        linearNavigation: { disableArrowKeys, disableHomeEndKeys, navigationDirection },
        listboxMulti: { tagLabel, tagList },
        listNavigation: { indexDemangler, indexMangler },
        managedChildren: { onAfterChildLayoutEffect, onChildrenMountChange },
        rovingTabIndex: { initialIndex, onTabbableIndexChange, onTabbableRender },
        typeaheadNavigation: { collator, noTypeahead, typeaheadTimeout }
    });

    useImperativeHandle(ref!, () => listboxReturnType);

    const { useListboxMultiLabelProps } = useListboxMultiLabel();
    return (
        <ListboxMultiContext.Provider value={useListboxMultiItem}>
            {render(listboxReturnType, useListboxMultiLabelProps, useListboxMultiProps)}
        </ListboxMultiContext.Provider>
    )
})


export function defaultRenderListboxMulti<LabelElement extends Element, ListElement extends HTMLElement, ListItemElement extends Element, C, K extends string>({ makePropsList, makePropsLabel, tagLabel, tagList }: { tagLabel: ElementToTag<LabelElement>, tagList: ElementToTag<ListElement>, makePropsLabel: (info: UseListboxMultiReturnTypeInfo<ListItemElement, C, K>) => h.JSX.HTMLAttributes<LabelElement>, makePropsList: (info: UseListboxMultiReturnTypeInfo<ListItemElement, C, K>) => h.JSX.HTMLAttributes<ListElement> }) {
    return defaultRenderList<LabelElement, ListElement, UseListboxMultiReturnTypeInfo<ListItemElement, C, K>>({ makePropsLabel, makePropsList, tagLabel, tagList })
}

export function defaultRenderListboxMultiItem<ListItemElement extends HTMLElement>({ makePropsListItem, tagListItem }: { tagListItem: ElementToTag<ListItemElement>, makePropsListItem: (info: UseListboxMultiItemReturnTypeInfo<ListItemElement>) => h.JSX.HTMLAttributes<ListItemElement> }) {
    return defaultRenderListItem<ListItemElement, UseListboxMultiItemReturnTypeInfo<ListItemElement>>({ makePropsListItem, tagListItem });
}

export const ListboxMultiItem = memoForwardRef(function ListboxMultiItem<ListItemElement extends Element, C = undefined, K extends string = never>({ index, noModifyTabIndex, disabled, flags, focusSelf, render, text, hidden, selected, onSelectedChange, getDocument, getWindow, onActiveElementChange, onElementChange, onFocusedChanged, onFocusedInnerChanged, onLastActiveElementChange, onLastFocusedChanged, onLastFocusedInnerChanged, onMount, onUnmount, onWindowFocusedChange, subInfo }: ListboxMultiItemProps<ListItemElement, C, K>, ref?: Ref<any>) {
    const { useListboxMultiItemProps, ...itemReturn } = useContext(ListboxMultiContext)({
        managedChild: { index, flags },
        rovingTabIndex: { focusSelf, hidden, noModifyTabIndex },
        listNavigation: { text },
        listboxMultiItem: { disabled, selected, onSelectedChange },
        hasFocus: { getDocument, getWindow, onActiveElementChange, onElementChange, onFocusedChanged, onFocusedInnerChanged, onLastActiveElementChange, onLastFocusedChanged, onLastFocusedInnerChanged, onMount, onUnmount, onWindowFocusedChange },
        subInfo
    });

    useImperativeHandle(ref!, () => itemReturn);

    return (
        <>{render(itemReturn, useListboxMultiItemProps)}</>
    )
})

