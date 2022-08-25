import { createContext, createElement, h, render, VNode } from "preact";
import { useContext } from "preact/hooks";
import { ElementToTag } from "props";
import { useAriaListboxSingle, UseListboxSingleItem, UseListboxSingleItemInfo, UseListboxSingleItemParameters, UseListboxSingleParameters } from "../use-listbox-single";

export interface ListboxSingleProps<LabelElement extends Element, ListElement extends Element, ListItemElement extends Element, K extends string, I extends UseListboxSingleItemInfo<ListItemElement, K>> extends Omit<UseListboxSingleParameters<LabelElement, ListElement, ListItemElement, K, I>, "indexMangler" | "indexDemangler" | "onAfterChildLayoutEffect" | "onChildrenMountChange" | "onTabbableIndexChange" | "onTabbableRender" | "onTabbedInTo" | "onTabbedOutOf"> {
    tagLabel: ElementToTag<LabelElement>;
    propsLabel: () => h.JSX.HTMLAttributes<LabelElement>;
    propsList: () => h.JSX.HTMLAttributes<ListElement>;
    render?(label: VNode<any>, list: VNode<any>): VNode<any>;
}

export type ListboxSingleItemProps<ListboxItemElement extends Element, K extends string, I extends UseListboxSingleItemInfo<ListboxItemElement, K>> = Omit<UseListboxSingleItemParameters<ListboxItemElement, K, I>, "blurSelf" | "focusSelf" | "flags"> & {
    tagListItem: ElementToTag<ListboxItemElement>;
    propsListItem: (args: AriaListboxSinglePropsDerivedFrom) => h.JSX.HTMLAttributes<ListboxItemElement>;
    render?(listItem: VNode<any>): VNode<any>;
}

const ListboxSingleContext = createContext<UseListboxSingleItem<any, any, any>>(null!);

export function ListboxSingle<LabelElement extends Element, ListElement extends HTMLElement, ListItemElement extends HTMLElement>({
    tagLabel,
    tagList,
    selectedIndex,
    selectionMode,
    collator,
    disableArrowKeys,
    disableHomeEndKeys,
    navigationDirection,
    noTypeahead,
    onSelect,
    typeaheadTimeout,
    propsLabel,
    propsList,
    render
}: ListboxSingleProps<LabelElement, ListElement, ListItemElement, string, UseListboxSingleItemInfo<ListItemElement, string>>) {
    const {
        children: listItems,
        currentTypeahead,
        invalidTypeahead,
        useListboxSingleItem,
        useListboxSingleLabel,
        useListboxSingleProps
    } = useAriaListboxSingle<LabelElement, ListElement, ListItemElement, string, UseListboxSingleItemInfo<ListItemElement, string>>({
        tagLabel,
        tagList,
        selectedIndex,
        selectionMode,
        collator,
        disableArrowKeys,
        disableHomeEndKeys,
        navigationDirection,
        noTypeahead,
        onSelect,
        typeaheadTimeout
    });

    const { useListboxSingleLabelProps } = useListboxSingleLabel();
    const label = createElement(tagLabel, useListboxSingleLabelProps(propsLabel()) as any);
    const list = createElement(tagList, useListboxSingleProps(propsList()) as any);


    return (
        <ListboxSingleContext.Provider value={useListboxSingleItem}>
            {(render ?? defaultListRender)(label, list)}
        </ListboxSingleContext.Provider>
    )
}

function defaultListRender(label: VNode<any>, list: VNode<any>): VNode<any> {
    return (
        <>{label}{list}</>
    )
}

function defaultListItemRender(listItem: VNode<any>): VNode<any> {
    return (
        <>{listItem}</>
    )
}


export interface AriaListboxSinglePropsDerivedFrom {
    selected: boolean;
    tabbable: boolean;
}

export function ListboxSingleItem<ListItemElement extends Element>({ info: { index, text, ...restInfo }, disabled, propsListItem, tagListItem, render }: ListboxSingleItemProps<ListItemElement, string, UseListboxSingleItemInfo<ListItemElement, string>>) {
    const { getSelected, selected, tabbable, useListboxSingleItemProps } = useContext(ListboxSingleContext)({ info: { index, text, ...restInfo }, disabled });
    const listItem = createElement(tagListItem, useListboxSingleItemProps(propsListItem({ selected, tabbable })) as any);
    return (
        <>{(render ?? defaultListItemRender)(listItem)}</>
    )
}
