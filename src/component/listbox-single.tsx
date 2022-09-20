import { createContext, createElement, h, VNode } from "preact";
import { forwardRef } from "preact/compat";
import { useContext } from "preact/hooks";
import { ElementToTag, PropModifier } from "props";
//import { ElementToTag } from "../props";
import { useAriaListboxSingle, useListboxGroup, UseListboxSingleItem, UseListboxSingleItemParameters, UseListboxSingleItemReturnTypeInfo, UseListboxSingleParameters, UseListboxSingleReturnTypeInfo } from "../use-listbox-single";

type Get<T, K extends keyof T> = T[K];

export interface ListboxSingleProps<LabelElement extends Element, ListElement extends Element, ListItemElement extends Element> extends
    Get<UseListboxSingleParameters<LabelElement, ListElement>, "singleSelection">,
    Get<UseListboxSingleParameters<LabelElement, ListElement>, "linearNavigation">,
    Get<UseListboxSingleParameters<LabelElement, ListElement>, "listNavigation">,
    Get<UseListboxSingleParameters<LabelElement, ListElement>, "rovingTabIndex">,
    Get<UseListboxSingleParameters<LabelElement, ListElement>, "typeaheadNavigation">,
    Get<UseListboxSingleParameters<LabelElement, ListElement>, "managedChildren">,
    Get<UseListboxSingleParameters<LabelElement, ListElement>, "childrenHaveFocus">,
    Get<UseListboxSingleParameters<LabelElement, ListElement>, "listboxSingle"> {
    //tagLabel: ElementToTag<LabelElement>;
    render(info: UseListboxSingleReturnTypeInfo<ListItemElement>, modifyPropsLabel: PropModifier<LabelElement>, modifyPropsList: PropModifier<ListElement>): VNode<any>;
}






export interface ListboxSingleItemProps<ListboxItemElement extends Element> extends
    Get<UseListboxSingleItemParameters<ListboxItemElement>, "managedChild">,
    Omit<Get<UseListboxSingleItemParameters<ListboxItemElement>, "listNavigation">, "subInfo">,
    Get<UseListboxSingleItemParameters<ListboxItemElement>, "rovingTabIndex">,
    Get<UseListboxSingleItemParameters<ListboxItemElement>, "hasFocus">,
    Get<UseListboxSingleItemParameters<ListboxItemElement>, "listboxSingleItem"> {
    //tagListItem: ElementToTag<ListboxItemElement>;
    render(info: UseListboxSingleItemReturnTypeInfo<ListboxItemElement>, modifyListItemProps: PropModifier<ListboxItemElement>): VNode<any>;
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
    typeaheadTimeout,
    onAllLostFocus,
    onAnyGainedFocus,
    selectionMode,
    tagList,
    onSelect
}: ListboxSingleProps<LabelElement, ListElement, ListItemElement>) {
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
        rovingTabIndex: { initialIndex, onTabbableIndexChange, onTabbableRender },
        singleSelection: { selectedIndex },
        typeaheadNavigation: { collator, noTypeahead, typeaheadTimeout },
        childrenHaveFocus: { onAllLostFocus, onAnyGainedFocus }
    });

    const { useListboxSingleLabelProps } = useListboxSingleLabel();
    //const label = createElement(tagLabel, useListboxSingleLabelProps({}) as any);
    //const list = createElement(tagList, useListboxSingleProps({ children: vnodeChildren, ref }) as any);


    return (
        <ListboxSingleContext.Provider value={useListboxSingleItem}>
            {render({ ...listboxReturnType }, useListboxSingleLabelProps, useListboxSingleProps)}
        </ListboxSingleContext.Provider>
    )
}

export function defaultRenderListboxSingle<LabelElement extends Element, ListElement extends HTMLElement, ListItemElement extends Element>({ makePropsList, makePropsLabel, tagLabel, tagList }: { tagLabel: ElementToTag<LabelElement>, tagList: ElementToTag<ListElement>, makePropsLabel: (info: UseListboxSingleReturnTypeInfo<ListItemElement>) => h.JSX.HTMLAttributes<LabelElement>, makePropsList: (info: UseListboxSingleReturnTypeInfo<ListItemElement>) => h.JSX.HTMLAttributes<ListElement> }) {
    return defaultRenderList<LabelElement, ListElement, UseListboxSingleReturnTypeInfo<ListItemElement>>({ makePropsLabel, makePropsList, tagLabel, tagList })
}

export function defaultRenderListboxSingleItem<ListItemElement extends HTMLElement>({ makePropsListItem, tagListItem }: { tagListItem: ElementToTag<ListItemElement>, makePropsListItem: (info: UseListboxSingleItemReturnTypeInfo<ListItemElement>) => h.JSX.HTMLAttributes<ListItemElement> }) {
    return defaultRenderListItem<ListItemElement, UseListboxSingleItemReturnTypeInfo<ListItemElement>>({ makePropsListItem, tagListItem });
}



function ListboxSingleItemU<ListItemElement extends Element>({ index, blurSelf, disabled, flags, focusSelf, getDocument, getWindow, onActiveElementChange, onElementChange, onFocusedChanged, onFocusedInnerChanged, onLastActiveElementChange, onLastFocusedChanged, onLastFocusedInnerChanged, onMount, onUnmount, onWindowFocusedChange, render, text, hidden }: ListboxSingleItemProps<ListItemElement>) {
    const { useListboxSingleItemProps, rovingTabIndex, singleSelection } = useContext(ListboxSingleContext)({
        managedChild: { index, flags },
        rovingTabIndex: { blurSelf, focusSelf, hidden },
        listNavigation: { text },
        listboxSingleItem: { disabled },
        hasFocus: { getDocument, getWindow, onActiveElementChange, onElementChange, onFocusedChanged, onFocusedInnerChanged, onLastActiveElementChange, onLastFocusedChanged, onLastFocusedInnerChanged, onMount, onUnmount, onWindowFocusedChange }
    });

    return (
        <>{render({ rovingTabIndex, singleSelection }, useListboxSingleItemProps)}</>
    )
}

export const ListboxSingle = forwardRef(ListboxSingleU) as typeof ListboxSingleU;
export const ListboxSingleItem = forwardRef(ListboxSingleItemU) as typeof ListboxSingleItemU;
export const ListboxGroup = forwardRef(ListboxGroupU) as typeof ListboxGroupU;

export interface ListboxGroupProps<ContainerElement extends Element, LabelElement extends Element> {
    render(modifyContainerProps: PropModifier<ContainerElement>, modifyLabelProps: PropModifier<LabelElement>): VNode;
}

function ListboxGroupU<ContainerElement extends Element, LabelElement extends Element>({ render }: ListboxGroupProps<ContainerElement, LabelElement>) {
    const { useListboxGroupHeadingProps, useListboxGroupContainerProps } = useListboxGroup<ContainerElement, LabelElement>();
    return (render(useListboxGroupContainerProps, useListboxGroupHeadingProps))
}

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