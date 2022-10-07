import { createContext, createElement, h, VNode } from "preact";
import { memo } from "preact/compat";
import { useContext } from "preact/hooks";
import { ElementToTag, PropModifier } from "props";
//import { ElementToTag } from "../props";
import { useListboxSingle, useListboxGroup, UseListboxSingleItem, UseListboxSingleItemParameters, UseListboxSingleItemReturnTypeInfo, UseListboxSingleParameters, UseListboxSingleReturnTypeInfo } from "../use-listbox-single";

type Get<T, K extends keyof T> = T[K];

export interface ListboxSingleProps<LabelElement extends Element, ListElement extends Element, ListItemElement extends Element, C, K extends string> extends
    Get<UseListboxSingleParameters<LabelElement, ListElement>, "singleSelection">,
    Get<UseListboxSingleParameters<LabelElement, ListElement>, "linearNavigation">,
    Get<UseListboxSingleParameters<LabelElement, ListElement>, "listNavigation">,
    Get<UseListboxSingleParameters<LabelElement, ListElement>, "rovingTabIndex">,
    Get<UseListboxSingleParameters<LabelElement, ListElement>, "typeaheadNavigation">,
    Get<UseListboxSingleParameters<LabelElement, ListElement>, "managedChildren">,
    Get<UseListboxSingleParameters<LabelElement, ListElement>, "childrenHaveFocus">,
    Get<UseListboxSingleParameters<LabelElement, ListElement>, "listboxSingle"> {
    //tagLabel: ElementToTag<LabelElement>;
    render(info: UseListboxSingleReturnTypeInfo<ListItemElement, C, K>, modifyPropsLabel: PropModifier<LabelElement>, modifyPropsList: PropModifier<ListElement>): VNode<any>;
}






export interface ListboxSingleItemProps<ListboxItemElement extends Element, C, K extends string> extends
    Get<UseListboxSingleItemParameters<ListboxItemElement, C, K>, "managedChild">,
    Get<UseListboxSingleItemParameters<ListboxItemElement, C, K>, "listNavigation">,
    Get<UseListboxSingleItemParameters<ListboxItemElement, C, K>, "rovingTabIndex">,
    Get<UseListboxSingleItemParameters<ListboxItemElement, C, K>, "hasFocus">,
    Get<UseListboxSingleItemParameters<ListboxItemElement, C, K>, "listboxSingleItem"> {
    //tagListItem: ElementToTag<ListboxItemElement>;
    subInfo: Get<UseListboxSingleItemParameters<ListboxItemElement, C, K>, "subInfo">,
    render(info: UseListboxSingleItemReturnTypeInfo<ListboxItemElement>, modifyListItemProps: PropModifier<ListboxItemElement>): VNode<any>;
}

const ListboxSingleContext = createContext<UseListboxSingleItem<any, any, any>>(null!);

function ListboxSingleU<LabelElement extends Element, ListElement extends HTMLElement, ListItemElement extends HTMLElement, C = undefined, K extends string = never>({
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
}: ListboxSingleProps<LabelElement, ListElement, ListItemElement, C, K>) {
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

    const { useListboxSingleLabelProps } = useListboxSingleLabel();
    //const label = createElement(tagLabel, useListboxSingleLabelProps({}) as any);
    //const list = createElement(tagList, useListboxSingleProps({ children: vnodeChildren, ref }) as any);


    return (
        <ListboxSingleContext.Provider value={useListboxSingleItem}>
            {render(listboxReturnType, useListboxSingleLabelProps, useListboxSingleProps)}
        </ListboxSingleContext.Provider>
    )
}

export function defaultRenderListboxSingle<LabelElement extends Element, ListElement extends HTMLElement, ListItemElement extends Element, C, K extends string>({ makePropsList, makePropsLabel, tagLabel, tagList }: { tagLabel: ElementToTag<LabelElement>, tagList: ElementToTag<ListElement>, makePropsLabel: (info: UseListboxSingleReturnTypeInfo<ListItemElement, C, K>) => h.JSX.HTMLAttributes<LabelElement>, makePropsList: (info: UseListboxSingleReturnTypeInfo<ListItemElement, C, K>) => h.JSX.HTMLAttributes<ListElement> }) {
    return defaultRenderList<LabelElement, ListElement, UseListboxSingleReturnTypeInfo<ListItemElement, C, K>>({ makePropsLabel, makePropsList, tagLabel, tagList })
}

export function defaultRenderListboxSingleItem<ListItemElement extends HTMLElement>({ makePropsListItem, tagListItem }: { tagListItem: ElementToTag<ListItemElement>, makePropsListItem: (info: UseListboxSingleItemReturnTypeInfo<ListItemElement>) => h.JSX.HTMLAttributes<ListItemElement> }) {
    return defaultRenderListItem<ListItemElement, UseListboxSingleItemReturnTypeInfo<ListItemElement>>({ makePropsListItem, tagListItem });
}



function ListboxSingleItemU<ListItemElement extends Element, C = undefined, K extends string = never>({ index, disabled, flags, focusSelf, getDocument, getWindow, onActiveElementChange, onElementChange, onFocusedChanged, onFocusedInnerChanged, onLastActiveElementChange, onLastFocusedChanged, onLastFocusedInnerChanged, onMount, onUnmount, onWindowFocusedChange, render, text, hidden, subInfo }: ListboxSingleItemProps<ListItemElement, C, K>) {
    const { useListboxSingleItemProps, rovingTabIndex, singleSelection } = (useContext(ListboxSingleContext) as UseListboxSingleItem<ListItemElement, C, K>)({
        managedChild: { index, flags },
        rovingTabIndex: { focusSelf, hidden },
        listNavigation: { text },
        listboxSingleItem: { disabled },
        hasFocus: { getDocument, getWindow, onActiveElementChange, onElementChange, onFocusedChanged, onFocusedInnerChanged, onLastActiveElementChange, onLastFocusedChanged, onLastFocusedInnerChanged, onMount, onUnmount, onWindowFocusedChange },
        subInfo
    });

    return (
        <>{render({ rovingTabIndex, singleSelection }, useListboxSingleItemProps)}</>
    )
}

export const ListboxSingle = memo(ListboxSingleU) as typeof ListboxSingleU;
export const ListboxSingleItem = memo(ListboxSingleItemU) as typeof ListboxSingleItemU;
export const ListboxGroup = memo(ListboxGroupU) as typeof ListboxGroupU;

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