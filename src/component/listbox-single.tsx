import { ComponentChildren, createContext, createElement, VNode } from "preact";
import { useContext } from "preact/hooks";
import { ElementToTag } from "props";
import { useAriaListboxSingle, UseListboxSingleItem, UseListboxSingleItemParameters, UseListboxSingleItemReturnType, UseListboxSingleParameters, UseListboxSingleReturnType } from "../use-listbox-single";

type Get<T, K extends keyof T> = T[K];

export interface ListboxSingleProps<LabelElement extends Element, ListElement extends HTMLElement | SVGElement, ListItemElement extends HTMLElement | SVGElement> extends
    Get<UseListboxSingleParameters<LabelElement, ListElement>, "singleSelection">,
    Get<UseListboxSingleParameters<LabelElement, ListElement>, "linearNavigation">,
    Get<UseListboxSingleParameters<LabelElement, ListElement>, "listNavigation">,
    Get<UseListboxSingleParameters<LabelElement, ListElement>, "rovingTabIndex">,
    Get<UseListboxSingleParameters<LabelElement, ListElement>, "typeaheadNavigation">,
    Get<UseListboxSingleParameters<LabelElement, ListElement>, "managedChildren">,
    Get<UseListboxSingleParameters<LabelElement, ListElement>, "listboxSingle"> {
    tagLabel: ElementToTag<LabelElement>;
    render?(info: Omit<UseListboxSingleReturnType<LabelElement, ListElement, ListItemElement>, `use${string}`>, label: VNode<any>, list: VNode<any>): VNode<any>;
    children: ComponentChildren;
}






export interface ListboxSingleItemProps<ListboxItemElement extends Element> extends
    Get<UseListboxSingleItemParameters, "ls">,
    Get<UseListboxSingleItemParameters, "rti">,
    Get<UseListboxSingleItemParameters, "managedChild">,
    Get<UseListboxSingleItemParameters, "lbs"> {
    tagListItem: ElementToTag<ListboxItemElement>;
    render?(info: Omit<UseListboxSingleItemReturnType<ListboxItemElement>, `use${string}`>, listItem: VNode<any>): VNode<any>;
}

const ListboxSingleContext = createContext<UseListboxSingleItem<any>>(null!);

export function ListboxSingle<LabelElement extends Element, ListElement extends HTMLElement, ListItemElement extends HTMLElement>({
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
}: ListboxSingleProps<LabelElement, ListElement, ListItemElement>) {
    const {
        children: managedChildren,
        linearNavigation,
        listNavigation,
        rovingTabIndex,
        typeaheadNavigation,
        useListboxSingleItem,
        useListboxSingleLabel,
        useListboxSingleProps
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
    const list = createElement(tagList, useListboxSingleProps({ children: vnodeChildren }) as any);


    return (
        <ListboxSingleContext.Provider value={useListboxSingleItem}>
            {(render ?? defaultListRender)({ children: managedChildren, linearNavigation, listNavigation, rovingTabIndex, typeaheadNavigation }, label, list)}
        </ListboxSingleContext.Provider>
    )
}

function defaultListRender(...[info, label, list]: Parameters<NonNullable<ListboxSingleProps<any, any, any>["render"]>>): VNode<any> {
    return (
        <>{label}{list}</>
    )
}

function defaultListItemRender(...[info, listItem]: Parameters<NonNullable<ListboxSingleItemProps<any>["render"]>>): VNode<any> {
    return (
        <>{listItem}</>
    )
}


export interface AriaListboxSinglePropsDerivedFrom {
    selected: boolean;
    tabbable: boolean;
}

export function ListboxSingleItem<ListItemElement extends Element>({ index, tagListItem, blurSelf, disabled, flags, focusSelf, render, text, hidden }: ListboxSingleItemProps<ListItemElement>) {
    const { getSelected, selected, tabbable, useListboxSingleItemProps } = useContext(ListboxSingleContext)({ managedChild: { index, flags }, rti: { blurSelf, focusSelf }, ls: { subInfo: {}, text, hidden }, lbs: { disabled } });
    const listItem = createElement(tagListItem, useListboxSingleItemProps({}) as any);
    return (
        <>{(render ?? defaultListItemRender)({ getSelected, selected, tabbable }, listItem)}</>
    )
}

function foo() {
    return (
        <ListboxSingle selectedIndex={9} selectionMode="activate" tagLabel="label" tagList="ul" >
            <ListboxSingleItem index={0} text="" subInfo={{}} tagListItem="li"></ListboxSingleItem>
        </ListboxSingle>
    )
}
