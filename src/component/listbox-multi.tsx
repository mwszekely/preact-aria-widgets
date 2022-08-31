import { ComponentChildren, createContext, createElement, h, render, VNode } from "preact";
import { useContext } from "preact/hooks";
import { ElementToTag } from "props";
import { useAriaListboxMulti, UseListboxMultiItem, UseListboxMultiItemParameters, UseListboxMultiItemReturnType, UseListboxMultiParameters, UseListboxMultiReturnType } from "../use-listbox-multi";



type Get<T, K extends keyof T> = T[K];

export interface ListboxMultiProps<LabelElement extends Element, ListElement extends Element, ListItemElement extends Element> extends
    Get<UseListboxMultiParameters<LabelElement, ListElement>, "linearNavigation">,
    Get<UseListboxMultiParameters<LabelElement, ListElement>, "listNavigation">,
    Get<UseListboxMultiParameters<LabelElement, ListElement>, "rovingTabIndex">,
    Get<UseListboxMultiParameters<LabelElement, ListElement>, "typeaheadNavigation">,
    Get<UseListboxMultiParameters<LabelElement, ListElement>, "managedChildren">,
    Get<UseListboxMultiParameters<LabelElement, ListElement>, "listboxMulti"> {
    tagLabel: ElementToTag<LabelElement>;
    render?(info: Omit<UseListboxMultiReturnType<LabelElement, ListElement, ListItemElement>, `use${string}`>, label: VNode<any>, list: VNode<any>): VNode<any>;
    children: ComponentChildren;
}






export interface ListboxMultiItemProps<ListElement extends Element, ListboxItemElement extends Element> extends
    Get<UseListboxMultiItemParameters, "managedChild">,
    Omit<Get<UseListboxMultiItemParameters, "listNavigation">, "subInfo">,
    Get<UseListboxMultiItemParameters, "rovingTabIndex">,
    Get<UseListboxMultiItemParameters, "lbm"> {
    tagListItem: ElementToTag<ListboxItemElement>;
    render?(info: Omit<UseListboxMultiItemReturnType<ListboxItemElement>, `use${string}`>, listItem: VNode<any>): VNode<any>;
}

const ListboxMultiContext = createContext<UseListboxMultiItem<any>>(null!);

export function ListboxMulti<LabelElement extends Element, ListElement extends HTMLElement, ListItemElement extends HTMLElement>({
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
    onTabbedInTo,
    onTabbedOutOf,
    typeaheadTimeout,
    tagList,
    children: vnodeChildren
}: ListboxMultiProps<LabelElement, ListElement, ListItemElement>) {
    const {
        children: managedChildren,
        linearNavigation,
        listNavigation,
        rovingTabIndex,
        typeaheadNavigation,
        useListboxMultiItem,
        useListboxMultiLabel,
        useListboxMultiProps,
    } = useAriaListboxMulti<LabelElement, ListElement, ListItemElement>({
        linearNavigation: { disableArrowKeys, disableHomeEndKeys, navigationDirection },
        listboxMulti: { tagLabel, tagList },
        listNavigation: { indexDemangler, indexMangler },
        managedChildren: { onAfterChildLayoutEffect, onChildrenMountChange },
        rovingTabIndex: { initialIndex, onTabbableIndexChange, onTabbableRender, onTabbedInTo, onTabbedOutOf },
        typeaheadNavigation: { collator, noTypeahead, typeaheadTimeout }
    });

    const { useListboxMultiLabelProps } = useListboxMultiLabel();
    const label = createElement(tagLabel, useListboxMultiLabelProps({}) as any);
    const list = createElement(tagList, useListboxMultiProps({ children: vnodeChildren }) as any);


    return (
        <ListboxMultiContext.Provider value={useListboxMultiItem}>
            {(render ?? defaultListRender)({ children: managedChildren, linearNavigation, listNavigation, rovingTabIndex, typeaheadNavigation }, label, list)}
        </ListboxMultiContext.Provider>
    )
}

function defaultListRender(...[info, label, list]: Parameters<NonNullable<ListboxMultiProps<any, any, any>["render"]>>): VNode<any> {
    return (
        <>{label}{list}</>
    )
}

function defaultListItemRender(...[info, listItem]: Parameters<NonNullable<ListboxMultiItemProps<any, any>["render"]>>): VNode<any> {
    return (
        <>{listItem}</>
    )
}


export interface AriaListboxMultiPropsDerivedFrom {
    selected: boolean;
    tabbable: boolean;
}

export function ListboxMultiItem<ListElement extends Element, ListItemElement extends Element>({ index, tagListItem, blurSelf, disabled, flags, focusSelf, render, text, hidden, selected, onSelect }: ListboxMultiItemProps<ListElement, ListItemElement>) {
    const { useListboxMultiItemProps, rovingTabIndex, lbm } = useContext(ListboxMultiContext)({ managedChild: { index, flags }, rovingTabIndex: { blurSelf, focusSelf, hidden }, listNavigation: { subInfo: { selected, onSelect }, text }, lbm: { disabled, selected, onSelect} });
    const listItem = createElement(tagListItem, useListboxMultiItemProps({}) as any);
    return (
        <>{(render ?? defaultListItemRender)({ rovingTabIndex, lbm }, listItem)}</>
    )
}

function foo() {
    return (
        <ListboxMulti tagLabel="label" tagList="ul" >
            <ListboxMultiItem index={0} text="" selected={false} tagListItem="li"></ListboxMultiItem>
        </ListboxMulti>
    )
}
