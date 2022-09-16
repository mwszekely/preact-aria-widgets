import { ComponentChildren, createContext, h, Ref, VNode } from "preact";
import { forwardRef } from "preact/compat";
import { useContext } from "preact/hooks";
import { useAriaListboxMulti, UseListboxMultiItem, UseListboxMultiItemParameters, UseListboxMultiItemReturnTypeInfo, UseListboxMultiParameters, UseListboxMultiReturnTypeInfo } from "../use-listbox-multi";



type Get<T, K extends keyof T> = T[K];

export interface ListboxMultiProps<LabelElement extends Element, ListElement extends Element, ListItemElement extends Element> extends
    Get<UseListboxMultiParameters<LabelElement, ListElement>, "linearNavigation">,
    Get<UseListboxMultiParameters<LabelElement, ListElement>, "listNavigation">,
    Get<UseListboxMultiParameters<LabelElement, ListElement>, "rovingTabIndex">,
    Get<UseListboxMultiParameters<LabelElement, ListElement>, "typeaheadNavigation">,
    Get<UseListboxMultiParameters<LabelElement, ListElement>, "managedChildren">,
    Get<UseListboxMultiParameters<LabelElement, ListElement>, "listboxMulti"> {
    //tagLabel: ElementToTag<LabelElement>;
    render?(info: UseListboxMultiReturnTypeInfo<ListItemElement>, label: h.JSX.HTMLAttributes<LabelElement>, list: h.JSX.HTMLAttributes<ListElement>): VNode<any>;
    children?: ComponentChildren;
}






export interface ListboxMultiItemProps<ListboxItemElement extends Element> extends
    Get<UseListboxMultiItemParameters, "managedChild">,
    Omit<Get<UseListboxMultiItemParameters, "listNavigation">, "subInfo">,
    Get<UseListboxMultiItemParameters, "rovingTabIndex">,
    Get<UseListboxMultiItemParameters, "listboxMultiItem"> {
    render?(info: UseListboxMultiItemReturnTypeInfo<ListboxItemElement>, listItemProps: h.JSX.HTMLAttributes<ListboxItemElement>): VNode<any>;
    children?: ComponentChildren;
}

export const ListboxMultiContext = createContext<UseListboxMultiItem<any>>(null!);

function ListboxMultiU<LabelElement extends Element, ListElement extends HTMLElement, ListItemElement extends HTMLElement>({
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
}: ListboxMultiProps<LabelElement, ListElement, ListItemElement>, ref: Ref<ListElement>) {
    const {
        useListboxMultiItem,
        useListboxMultiLabel,
        useListboxMultiProps,
        ...listboxReturnType
    } = useAriaListboxMulti<LabelElement, ListElement, ListItemElement>({
        linearNavigation: { disableArrowKeys, disableHomeEndKeys, navigationDirection },
        listboxMulti: { tagLabel, tagList },
        listNavigation: { indexDemangler, indexMangler },
        managedChildren: { onAfterChildLayoutEffect, onChildrenMountChange },
        rovingTabIndex: { initialIndex, onTabbableIndexChange, onTabbableRender, onTabbedInTo, onTabbedOutOf },
        typeaheadNavigation: { collator, noTypeahead, typeaheadTimeout }
    });

    const { useListboxMultiLabelProps } = useListboxMultiLabel();

    const p1 =  useListboxMultiLabelProps({});
    const p2 = useListboxMultiProps({ children: vnodeChildren, ref });
    return (
        <ListboxMultiContext.Provider value={useListboxMultiItem}>
            {(render ?? defaultListRender)(listboxReturnType, p1, p2)}
        </ListboxMultiContext.Provider>
    )
}

function defaultListRender(info: UseListboxMultiReturnTypeInfo<any>, labelProps: h.JSX.HTMLAttributes<any>, listProps: h.JSX.HTMLAttributes<any>): VNode<any> {
    const label = <div {...labelProps} />;
    const list = <ul {...listProps} />;
    return (
        <>{label}{list}</>
    )
}

function defaultListItemRender(info: UseListboxMultiItemReturnTypeInfo<any>, listItemProps: h.JSX.HTMLAttributes<any>): VNode<any> {
    const listItem = <li {...listItemProps} />;
    return (
        <>{listItem}</>
    )
}

function ListboxMultiItemU<ListItemElement extends Element>({ index, blurSelf, disabled, flags, focusSelf, render, text, hidden, selected, onSelect, children }: ListboxMultiItemProps<ListItemElement>, ref: Ref<ListItemElement>) {
    const { useListboxMultiItemProps, ...itemReturn } = useContext(ListboxMultiContext)({ 
        managedChild: { index, flags }, 
        rovingTabIndex: { blurSelf, focusSelf, hidden }, 
        listNavigation: { text }, 
        listboxMultiItem: { disabled, selected, onSelect}
    });
    //const listItem = createElement(tagListItem, useListboxMultiItemProps({ ref }) as any);
    return (
        <>{(render ?? defaultListItemRender)(itemReturn, useListboxMultiItemProps({ ref, children }))}</>
    )
}

export const ListboxMulti = forwardRef(ListboxMultiU) as typeof ListboxMultiU;
export const ListboxMultiItem = forwardRef(ListboxMultiItemU) as typeof ListboxMultiItemU;
