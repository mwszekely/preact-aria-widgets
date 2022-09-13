import { ComponentChildren, createContext, createElement, Ref, VNode } from "preact";
import { forwardRef } from "preact/compat";
import { useContext } from "preact/hooks";
import { ElementToTag } from "props";
import { useAriaListboxSingle, UseListboxSingleItem, UseListboxSingleItemParameters, UseListboxSingleItemReturnTypeInfo, UseListboxSingleParameters, UseListboxSingleReturnTypeInfo } from "../use-listbox-single";

type Get<T, K extends keyof T> = T[K];

export interface ListboxSingleProps<LabelElement extends Element, ListElement extends Element, ListItemElement extends Element> extends
    Get<UseListboxSingleParameters<LabelElement, ListElement>, "singleSelection">,
    Get<UseListboxSingleParameters<LabelElement, ListElement>, "linearNavigation">,
    Get<UseListboxSingleParameters<LabelElement, ListElement>, "listNavigation">,
    Get<UseListboxSingleParameters<LabelElement, ListElement>, "rovingTabIndex">,
    Get<UseListboxSingleParameters<LabelElement, ListElement>, "typeaheadNavigation">,
    Get<UseListboxSingleParameters<LabelElement, ListElement>, "managedChildren">,
    Get<UseListboxSingleParameters<LabelElement, ListElement>, "listboxSingle"> {
    tagLabel: ElementToTag<LabelElement>;
    render?(info: UseListboxSingleReturnTypeInfo<ListItemElement>, label: VNode<any>, list: VNode<any>): VNode<any>;
    children: ComponentChildren;
}






export interface ListboxSingleItemProps<ListboxItemElement extends Element> extends
    Get<UseListboxSingleItemParameters, "managedChild">,
    Omit<Get<UseListboxSingleItemParameters, "listNavigation">, "subInfo">,
    Get<UseListboxSingleItemParameters, "rovingTabIndex">,
    Get<UseListboxSingleItemParameters, "listboxSingleItem"> {
    tagListItem: ElementToTag<ListboxItemElement>;
    render?(info: UseListboxSingleItemReturnTypeInfo<ListboxItemElement>, listItem: VNode<any>): VNode<any>;
}

const ListboxSingleContext = createContext<UseListboxSingleItem<any>>(null!);

function ListboxSingleU<LabelElement extends Element, ListElement extends HTMLElement, ListItemElement extends HTMLElement>({
    render,

    selectedIndex,
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
    onTabbedInTo,
    onTabbedOutOf,
    typeaheadTimeout,
    selectionMode,
    tagList,
    onSelect,
    children: vnodeChildren
}: ListboxSingleProps<LabelElement, ListElement, ListItemElement>, ref: Ref<ListElement>) {
    const {
        useListboxSingleItem,
        useListboxSingleLabel,
        useListboxSingleProps,
        ...listboxReturnType
    } = useAriaListboxSingle<LabelElement, ListElement, ListItemElement>({
        linearNavigation: { disableArrowKeys, disableHomeEndKeys, navigationDirection },
        listboxSingle: { selectionMode, tagLabel, tagList, onSelect },
        listNavigation: { indexDemangler, indexMangler },
        managedChildren: { onAfterChildLayoutEffect, onChildrenMountChange },
        rovingTabIndex: { initialIndex, onTabbableIndexChange, onTabbableRender, onTabbedInTo, onTabbedOutOf },
        singleSelection: { selectedIndex },
        typeaheadNavigation: { collator, noTypeahead, typeaheadTimeout }
    });

    const { useListboxSingleLabelProps } = useListboxSingleLabel();
    const label = createElement(tagLabel, useListboxSingleLabelProps({}) as any);
    const list = createElement(tagList, useListboxSingleProps({ children: vnodeChildren, ref }) as any);


    return (
        <ListboxSingleContext.Provider value={useListboxSingleItem}>
            {(render ?? defaultListRender)({ ...listboxReturnType }, label, list)}
        </ListboxSingleContext.Provider>
    )
}

function defaultListRender(...[_info, label, list]: Parameters<NonNullable<ListboxSingleProps<any, any, any>["render"]>>): VNode<any> {
    return (
        <>{label}{list}</>
    )
}

function defaultListItemRender(...[_info, listItem]: Parameters<NonNullable<ListboxSingleItemProps<any>["render"]>>): VNode<any> {
    return (
        <>{listItem}</>
    )
}



function ListboxSingleItemU<ListItemElement extends Element>({ index, tagListItem, blurSelf, disabled, flags, focusSelf, render, text, hidden }: ListboxSingleItemProps<ListItemElement>, ref: Ref<ListItemElement>) {
    const { useListboxSingleItemProps, rovingTabIndex, singleSelection } = useContext(ListboxSingleContext)({
        managedChild: { index, flags },
        rovingTabIndex: { blurSelf, focusSelf, hidden },
        listNavigation: { text },
        listboxSingleItem: { disabled }
    });
    const listItem = createElement(tagListItem, useListboxSingleItemProps({ ref }) as any);
    return (
        <>{(render ?? defaultListItemRender)({ rovingTabIndex, singleSelection }, listItem)}</>
    )
}

function _foo() {
    return (
        <ListboxSingle selectedIndex={9} selectionMode="activate" tagLabel="label" tagList="ul" >
            <ListboxSingleItem index={0} text="" tagListItem="li"></ListboxSingleItem>
        </ListboxSingle>
    )
}

export const ListboxSingle = forwardRef(ListboxSingleU);
export const ListboxSingleItem = forwardRef(ListboxSingleItemU);
