import { createContext, createElement, h, render, VNode } from "preact";
import { useContext } from "preact/hooks";
import { ElementToTag } from "props";
import { useAriaListboxMulti, UseListboxMultiItem, UseListboxMultiItemInfoBase, UseListboxMultiItemParameters, UseListboxMultiParameters } from "../use-listbox-multi";

export interface ListboxMultiProps<LabelElement extends Element, ListElement extends Element, ListItemElement extends Element, K extends string, I extends UseListboxMultiItemInfoBase<ListItemElement, K>> extends Omit<UseListboxMultiParameters<LabelElement, ListElement, ListItemElement, K, I>, "indexMangler" | "indexDemangler" | "onAfterChildLayoutEffect" | "onChildrenMountChange" | "onTabbableIndexChange" | "onTabbableRender" | "onTabbedInTo" | "onTabbedOutOf"> {
    tagLabel: ElementToTag<LabelElement>;
    tagList: ElementToTag<ListElement>;
    propsLabel: () => h.JSX.HTMLAttributes<LabelElement>;
    propsList: () => h.JSX.HTMLAttributes<ListElement>;
    render?(label: VNode<any>, list: VNode<any>): VNode<any>;
}

export type ListboxMultiItemProps<ListboxItemElement extends Element, K extends string, I extends UseListboxMultiItemInfoBase<ListboxItemElement, K>> = Omit<UseListboxMultiItemParameters<ListboxItemElement, K, I>, "blurSelf" | "focusSelf" | "flags"> & {
    tagListItem: ElementToTag<ListboxItemElement>;
    propsListItem: (args: AriaListboxMultiPropsDerivedFrom) => h.JSX.HTMLAttributes<ListboxItemElement>;
    render?(listItem: VNode<any>): VNode<any>;
}

const ListboxMultiContext = createContext<UseListboxMultiItem<any, any, any>>(null!);

export function ListboxMulti<LabelElement extends Element, ListElement extends HTMLElement, ListItemElement extends HTMLElement>({
    tagLabel,
    tagList,
    collator,
    disableArrowKeys,
    disableHomeEndKeys,
    navigationDirection,
    noTypeahead,
    typeaheadTimeout,
    propsLabel,
    propsList,
    render
}: ListboxMultiProps<LabelElement, ListElement, ListItemElement, string, UseListboxMultiItemInfoBase<ListItemElement, string>>) {
    const {
        currentTypeahead,
        invalidTypeahead,
        useListboxMultiItem,
        useListboxMultiLabel,
        useListboxMultiProps
    } = useAriaListboxMulti<LabelElement, ListElement, ListItemElement, string, UseListboxMultiItemInfoBase<ListItemElement, string>>({
        collator,
        disableArrowKeys,
        disableHomeEndKeys,
        navigationDirection,
        noTypeahead,
        typeaheadTimeout,
        tagLabel,
        initialIndex: 0,
        tagList
    });

    const { useListboxMultiLabelProps } = useListboxMultiLabel();
    const label = createElement(tagLabel, useListboxMultiLabelProps(propsLabel()) as any);
    const list = createElement(tagList, useListboxMultiProps(propsList()) as any);


    return (
        <ListboxMultiContext.Provider value={useListboxMultiItem}>
            {(render ?? defaultListRender)(label, list)}
        </ListboxMultiContext.Provider>
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


export interface AriaListboxMultiPropsDerivedFrom {
    tabbable: boolean;
}

export function ListboxMultiItem<ListItemElement extends Element>({ info: { index, text, ...restInfo }, disabled, propsListItem, tagListItem, render }: ListboxMultiItemProps<ListItemElement, string, UseListboxMultiItemInfoBase<ListItemElement, string>>) {
    const { tabbable, useListboxMultiItemProps } = useContext(ListboxMultiContext)({ info: { index, text, ...restInfo }, disabled });
    const listItem = createElement(tagListItem, useListboxMultiItemProps(propsListItem({ tabbable })) as any);
    return (
        <>{(render ?? defaultListItemRender)(listItem)}</>
    )
}
