import { createContext, createElement, h, VNode, Ref } from "preact";
import { memo } from "preact/compat";
import { useContext, useImperativeHandle } from "preact/hooks";
import { ElementToTag, PropModifier } from "props";
//import { ElementToTag } from "../props";
import { useListboxSingle, useListboxGroup, UseListboxSingleItem, UseListboxSingleItemParameters, UseListboxSingleItemReturnTypeInfo, UseListboxSingleParameters, UseListboxSingleReturnTypeInfo } from "../use-listbox-single";
import { memoForwardRef } from "./util";

type Get<T, K extends keyof T> = T[K];

export interface ListboxSingleProps<LabelElement extends Element, ListElement extends Element, ListItemElement extends Element, C, K extends string> extends
    Get<UseListboxSingleParameters<LabelElement, ListElement, ListItemElement, C, K>, "singleSelection">,
    Get<UseListboxSingleParameters<LabelElement, ListElement, ListItemElement, C, K>, "linearNavigation">,
    Get<UseListboxSingleParameters<LabelElement, ListElement, ListItemElement, C, K>, "listNavigation">,
    Get<UseListboxSingleParameters<LabelElement, ListElement, ListItemElement, C, K>, "rovingTabIndex">,
    Get<UseListboxSingleParameters<LabelElement, ListElement, ListItemElement, C, K>, "typeaheadNavigation">,
    Get<UseListboxSingleParameters<LabelElement, ListElement, ListItemElement, C, K>, "managedChildren">,
    Get<UseListboxSingleParameters<LabelElement, ListElement, ListItemElement, C, K>, "childrenHaveFocus">,
    Get<UseListboxSingleParameters<LabelElement, ListElement, ListItemElement, C, K>, "listboxSingle"> {
    //tagLabel: ElementToTag<LabelElement>;
    ref?: Ref<UseListboxSingleReturnTypeInfo<ListItemElement, C, K>>;
    render(info: UseListboxSingleReturnTypeInfo<ListItemElement, C, K>, modifyPropsLabel: PropModifier<LabelElement>, modifyPropsList: PropModifier<ListElement>): VNode<any>;
}






export interface ListboxSingleItemProps<ListboxItemElement extends Element, C, K extends string> extends
    Get<UseListboxSingleItemParameters<ListboxItemElement, C, K>, "managedChild">,
    Get<UseListboxSingleItemParameters<ListboxItemElement, C, K>, "listNavigation">,
    Get<UseListboxSingleItemParameters<ListboxItemElement, C, K>, "rovingTabIndex">,
    Get<UseListboxSingleItemParameters<ListboxItemElement, C, K>, "hasFocus">,
    Get<UseListboxSingleItemParameters<ListboxItemElement, C, K>, "listboxSingleItem">,
    Get<UseListboxSingleItemParameters<ListboxItemElement, C, K>, "singleSelection"> {
    //tagListItem: ElementToTag<ListboxItemElement>;
    subInfo: Get<UseListboxSingleItemParameters<ListboxItemElement, C, K>, "subInfo">;
    ref?: Ref<UseListboxSingleItemReturnTypeInfo<ListboxItemElement>>;
    render(info: UseListboxSingleItemReturnTypeInfo<ListboxItemElement>, modifyListItemProps: PropModifier<ListboxItemElement>): VNode<any>;
}

const ListboxSingleContext = createContext<UseListboxSingleItem<any, any, any>>(null!);

export const ListboxSingle = memoForwardRef(function ListboxSingleU<LabelElement extends Element, ListElement extends HTMLElement, ListItemElement extends HTMLElement, C = undefined, K extends string = never>({
    render,

    selectedIndex,
    tagLabel,
    collator,
    disableArrowKeys,
    disableHomeEndKeys,
    indexDemangler,
    indexMangler,
    navigationDirection,
    noTypeahead,
    onAfterChildLayoutEffect,
    onChildrenMountChange,
    onTabbableIndexChange,
    onTabbableRender,
    typeaheadTimeout,
    onAllLostFocus,
    onAnyGainedFocus,
    selectionMode,
    tagList,
    onSelect
}: ListboxSingleProps<LabelElement, ListElement, ListItemElement, C, K>, ref?: Ref<any>) {
    const {
        useListboxSingleItem,
        useListboxSingleLabel,
        useListboxSingleProps,
        ...listboxReturnType
    } = useListboxSingle<LabelElement, ListElement, ListItemElement, C, K>({
        linearNavigation: { disableArrowKeys, disableHomeEndKeys, navigationDirection },
        listboxSingle: { tagLabel, tagList, onSelect },
        listNavigation: { indexDemangler, indexMangler },
        managedChildren: { onAfterChildLayoutEffect, onChildrenMountChange },
        rovingTabIndex: { onTabbableIndexChange, onTabbableRender },
        singleSelection: { selectedIndex, selectionMode },
        typeaheadNavigation: { collator, noTypeahead, typeaheadTimeout },
        childrenHaveFocus: { onAllLostFocus, onAnyGainedFocus }
    });

    useImperativeHandle(ref!, () => listboxReturnType);

    const { useListboxSingleLabelProps } = useListboxSingleLabel();
    //const label = createElement(tagLabel, useListboxSingleLabelProps({}) as any);
    //const list = createElement(tagList, useListboxSingleProps({ children: vnodeChildren, ref }) as any);


    return (
        <ListboxSingleContext.Provider value={useListboxSingleItem}>
            {render(listboxReturnType, useListboxSingleLabelProps, useListboxSingleProps)}
        </ListboxSingleContext.Provider>
    )
})

export function defaultRenderListboxSingle<LabelElement extends Element, ListElement extends HTMLElement, ListItemElement extends Element, C, K extends string>({ makePropsList, makePropsLabel, tagLabel, tagList }: { tagLabel: ElementToTag<LabelElement>, tagList: ElementToTag<ListElement>, makePropsLabel: (info: UseListboxSingleReturnTypeInfo<ListItemElement, C, K>) => h.JSX.HTMLAttributes<LabelElement>, makePropsList: (info: UseListboxSingleReturnTypeInfo<ListItemElement, C, K>) => h.JSX.HTMLAttributes<ListElement> }) {
    return defaultRenderList<LabelElement, ListElement, UseListboxSingleReturnTypeInfo<ListItemElement, C, K>>({ makePropsLabel, makePropsList, tagLabel, tagList })
}

export function defaultRenderListboxSingleItem<ListItemElement extends HTMLElement>({ makePropsListItem, tagListItem }: { tagListItem: ElementToTag<ListItemElement>, makePropsListItem: (info: UseListboxSingleItemReturnTypeInfo<ListItemElement>) => h.JSX.HTMLAttributes<ListItemElement> }) {
    return defaultRenderListItem<ListItemElement, UseListboxSingleItemReturnTypeInfo<ListItemElement>>({ makePropsListItem, tagListItem });
}



export const ListboxSingleItem = memoForwardRef(function ListboxSingleItem<ListItemElement extends Element, C = undefined, K extends string = never>({ index, disabled, noModifyTabIndex, flags, focusSelf, getDocument, getWindow, onActiveElementChange, onElementChange, onFocusedChanged, onFocusedInnerChanged, onLastActiveElementChange, onLastFocusedChanged, onLastFocusedInnerChanged, onMount, onUnmount, onWindowFocusedChange, render, text, hidden, subInfo, ariaPropName, unselectable }: ListboxSingleItemProps<ListItemElement, C, K>, ref?: Ref<any>) {
    const { useListboxSingleItemProps, ...info } = (useContext(ListboxSingleContext) as UseListboxSingleItem<ListItemElement, C, K>)({
        managedChild: { index, flags },
        rovingTabIndex: { focusSelf, hidden, noModifyTabIndex },
        listNavigation: { text },
        listboxSingleItem: { disabled },
        singleSelection: { ariaPropName, unselectable, focusSelf },
        hasFocus: { getDocument, getWindow, onActiveElementChange, onElementChange, onFocusedChanged, onFocusedInnerChanged, onLastActiveElementChange, onLastFocusedChanged, onLastFocusedInnerChanged, onMount, onUnmount, onWindowFocusedChange },
        subInfo
    });

    useImperativeHandle(ref!, () => info);

    return (
        <>{render(info, useListboxSingleItemProps)}</>
    )
})


export interface ListboxGroupProps<ContainerElement extends Element, LabelElement extends Element> {
    render(modifyContainerProps: PropModifier<ContainerElement>, modifyLabelProps: PropModifier<LabelElement>): VNode;
}

export const ListboxGroup = memoForwardRef(function ListboxGroupU<ContainerElement extends Element, LabelElement extends Element>({ render }: ListboxGroupProps<ContainerElement, LabelElement>, ref?: Ref<any>) {
    const { useListboxGroupHeadingProps, useListboxGroupContainerProps, ...info } = useListboxGroup<ContainerElement, LabelElement>();
    useImperativeHandle(ref!, () => info);
    return (render(useListboxGroupContainerProps, useListboxGroupHeadingProps))
})

export function defaultListboxGroupRender<ContainerElement extends Element, LabelElement extends Element>({ tagContainer, tagLabel, makePropsContainer, makePropsLabel }: { tagContainer: ElementToTag<ContainerElement>, tagLabel: ElementToTag<LabelElement>, makePropsContainer: () => h.JSX.HTMLAttributes<ContainerElement>, makePropsLabel: () => h.JSX.HTMLAttributes<LabelElement> }) {
    return function (modifyContainerProps: PropModifier<ContainerElement>, modifyLabelProps: PropModifier<LabelElement>) {
        const { children, ...propsContainer } = modifyContainerProps(makePropsContainer());
        return createElement(tagContainer as never, propsContainer, <>
            {createElement(tagLabel as never, modifyLabelProps(makePropsLabel()))}
            {children}
        </>)
    }
}



export function defaultRenderList<LabelElement extends Element, ListElement extends HTMLElement, InfoType>({ makePropsList, makePropsLabel, tagLabel, tagList }: { tagLabel: ElementToTag<LabelElement>, tagList: ElementToTag<ListElement>, makePropsLabel: (info: InfoType) => h.JSX.HTMLAttributes<LabelElement>, makePropsList: (info: InfoType) => h.JSX.HTMLAttributes<ListElement> }) {
    return function (info: InfoType, modifyPropsLabel: PropModifier<LabelElement>, modifyPropsList: PropModifier<ListElement>): VNode<any> {
        const label = createElement(tagLabel as never, modifyPropsLabel(makePropsLabel(info)));
        const list = createElement(tagList as never, modifyPropsList(makePropsList(info)));
        return (
            <>
                {label}
                {list}
            </>
        )
    }
}

export function defaultRenderListItem<ListItemElement extends HTMLElement, InfoType>({ makePropsListItem, tagListItem }: { tagListItem: ElementToTag<ListItemElement>, makePropsListItem: (info: InfoType) => h.JSX.HTMLAttributes<ListItemElement> }) {
    return function (info: InfoType, modifyPropsListItem: PropModifier<ListItemElement>): VNode<any> {
        return createElement(tagListItem as never, modifyPropsListItem(makePropsListItem(info)));
    }
}