import { createContext, createElement, h, Ref, VNode } from "preact";
import { useContext, useImperativeHandle } from "preact/hooks";
import { ElementToTag, PropModifier } from "../props";
//import { ElementToTag } from "../props";
import { useToolbar, useToolbarChild, UseToolbarChildReturnTypeWithHooks, UseToolbarReturnType, UseToolbarChildParameters, UseToolbarChildReturnTypeInfo, UseToolbarParameters, UseToolbarSubInfo, UseToolbarContext } from "../use-toolbar";
import { memoForwardRef } from "./util";

type Get<T, K extends keyof T> = T[K];

export interface ToolbarProps<ToolbarContainerElement extends Element, ToolbarChildElement extends Element, M extends UseToolbarSubInfo<ToolbarChildElement>> extends
    Get<UseToolbarParameters<ToolbarContainerElement, ToolbarChildElement, M>, "linearNavigationParameters">,
    Get<UseToolbarParameters<ToolbarContainerElement, ToolbarChildElement, M>, "singleSelectionParameters">,
    Get<UseToolbarParameters<ToolbarContainerElement, ToolbarChildElement, M>, "rovingTabIndexParameters">,
    Get<UseToolbarParameters<ToolbarContainerElement, ToolbarChildElement, M>, "typeaheadNavigationParameters">,
    Get<UseToolbarParameters<ToolbarContainerElement, ToolbarChildElement, M>, "sortableChildrenParameters">,
    Get<UseToolbarParameters<ToolbarContainerElement, ToolbarChildElement, M>, "rearrangeableChildrenParameters">,
    Get<UseToolbarParameters<ToolbarContainerElement, ToolbarChildElement, M>, "toolbarParameters"> {
    ref?: Ref<UseToolbarReturnType<ToolbarContainerElement, ToolbarChildElement, M>>;
    render(info: UseToolbarReturnType<ToolbarContainerElement, ToolbarChildElement, M>, props: { toolbar: h.JSX.HTMLAttributes<ToolbarContainerElement> }): VNode<any>;
}






export interface ToolbarChildProps<ToolbarChildElement extends Element, M extends UseToolbarSubInfo<ToolbarChildElement>> extends
    Get<UseToolbarChildParameters<ToolbarChildElement, M>, "pressParameters">,
    Get<UseToolbarChildParameters<ToolbarChildElement, M>, "managedChildParameters">,
    Get<UseToolbarChildParameters<ToolbarChildElement, M>, "singleSelectionChildParameters">,
    Get<UseToolbarChildParameters<ToolbarChildElement, M>, "typeaheadNavigationChildParameters"> {
    subInfo: UseToolbarChildParameters<ToolbarChildElement, M>["completeListNavigationChildParameters"];
    ref?: Ref<UseToolbarChildReturnTypeInfo<ToolbarChildElement>>;
    render(info: UseToolbarChildReturnTypeInfo<ToolbarChildElement>, props: { toolbarChild: h.JSX.HTMLAttributes<ToolbarChildElement> }): VNode<any>;
}

const ToolbarContext = createContext<UseToolbarContext<any, any, any>>(null!);

export const Toolbar = memoForwardRef(function ToolbarU<ContainerElement extends Element, ChildElement extends Element, M extends UseToolbarSubInfo<ChildElement>>({
    render,
    role,
    collator,
    disableArrowKeys,
    disableHomeEndKeys,
    compare,
    getIndex,
    getValid,
    initiallySelectedIndex,
    initiallyTabbedIndex,
    navigationDirection,
    onSelectedIndexChange,
    orientation,
    noTypeahead,
    onTabbableIndexChange,
    typeaheadTimeout
}: ToolbarProps<ContainerElement, ChildElement, M>, ref?: Ref<any>) {
    const listboxReturnType = useToolbar<ContainerElement, ChildElement, M>({
        rearrangeableChildrenParameters: { getIndex, getValid },
        singleSelectionParameters: { initiallySelectedIndex, onSelectedIndexChange },
        sortableChildrenParameters: { compare },
        linearNavigationParameters: { disableArrowKeys, disableHomeEndKeys, navigationDirection },
        toolbarParameters: { orientation, role },
        rovingTabIndexParameters: { onTabbableIndexChange, initiallyTabbedIndex },
        typeaheadNavigationParameters: { collator, noTypeahead, typeaheadTimeout },
    });

    useImperativeHandle(ref!, () => listboxReturnType);

    return (
        <ToolbarContext.Provider value={listboxReturnType.context}>
            {render(listboxReturnType, { toolbar: listboxReturnType.props })}
        </ToolbarContext.Provider>
    )
})


export const ToolbarChild = memoForwardRef(function ToolbarChildU<ToolbarChildElement extends Element, M extends UseToolbarSubInfo<ToolbarChildElement>>({
    index,
    render,
    ariaPropName,
    disabled,
    exclude,
    onPseudoActiveStart,
    onPseudoActiveStop,
    selectionMode,
    focusSelf,
    hidden,
    text,
    subInfo
}: ToolbarChildProps<ToolbarChildElement, M>, ref?: Ref<any>) {
    const context = (useContext(ToolbarContext) as UseToolbarContext<any, ToolbarChildElement, M>)

    const info = useToolbarChild({
        ...context,
        completeListNavigationChildParameters: subInfo,
        pressParameters: { exclude, focusSelf, onPseudoActiveStart, onPseudoActiveStop },
        managedChildParameters: { disabled, hidden, index },
        singleSelectionChildParameters: { ariaPropName, selectionMode },
        typeaheadNavigationChildParameters: { text },
    });

    useImperativeHandle(ref!, () => info);

    return (
        <>{render(info, { toolbarChild: info.props })}</>
    )
})

export function defaultRenderToolbar<ContainerElement extends Element, ChildElement extends Element,  M extends UseToolbarSubInfo<ChildElement>>({ makePropsContainer, tagContainer }: { tagContainer: ElementToTag<ContainerElement>, makePropsContainer: (info: UseToolbarReturnType<ContainerElement, ChildElement, M>) => h.JSX.HTMLAttributes<ContainerElement> }) {
    return function (info: UseToolbarReturnType<ContainerElement, ChildElement, M>, modifyPropsContainer: PropModifier<ContainerElement>): VNode<any> {
        const list = createElement(tagContainer as never, modifyPropsContainer(makePropsContainer(info)));
        return (
            <>
                {list}
            </>
        )
    }
}

export function defaultRenderToolbarChild<ChildElement extends Element>({ makePropsChild, tagChild }: { tagChild: ElementToTag<ChildElement>, makePropsChild: (info: UseToolbarChildReturnTypeInfo<ChildElement>) => h.JSX.HTMLAttributes<ChildElement> }) {
    return function (info: UseToolbarChildReturnTypeInfo<ChildElement>, modifyPropsListItem: PropModifier<ChildElement>): VNode<any> {
        return createElement(tagChild as never, modifyPropsListItem(makePropsChild(info)));
    }
}