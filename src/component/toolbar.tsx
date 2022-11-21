import { createContext, createElement, h, Ref, VNode } from "preact";
import { useMergedProps } from "preact-prop-helpers";
import { useContext, useImperativeHandle } from "preact/hooks";
import { ElementToTag, PropModifier } from "../props";
//import { ElementToTag } from "../props";
import { useToolbar, useToolbarChild, UseToolbarReturnType, UseToolbarChildReturnType, UseToolbarChildParameters, UseToolbarParameters, UseToolbarSubInfo, UseToolbarContext } from "../use-toolbar";
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
    render(info: UseToolbarReturnType<ToolbarContainerElement, ToolbarChildElement, M>): VNode<any>;
}





export interface ToolbarChildProps<ToolbarChildElement extends Element, M extends UseToolbarSubInfo<ToolbarChildElement>> extends
    Get<UseToolbarChildParameters<ToolbarChildElement, M>, "pressParameters">,
    Get<UseToolbarChildParameters<ToolbarChildElement, M>, "singleSelectionChildParameters">,
    Get<UseToolbarChildParameters<ToolbarChildElement, M>, "typeaheadNavigationChildParameters">,
    Pick<Get<UseToolbarChildParameters<any, any>, "managedChildParameters">, "index" | "hidden" | "disabled"> {
    subInfo: UseToolbarChildParameters<ToolbarChildElement, M>["completeListNavigationChildParameters"];
    ref?: Ref<UseToolbarChildReturnType<ToolbarChildElement, M>>;
    render(info: UseToolbarChildReturnType<ToolbarChildElement, M>): VNode<any>;
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
    navigatePastEnd,
    navigatePastStart,
    pageNavigationSize,
    initiallySelectedIndex,
    initiallyTabbedIndex,
    navigationDirection,
    onSelectedIndexChange,
    orientation,
    noTypeahead,
    onTabbableIndexChange,
    typeaheadTimeout
}: ToolbarProps<ContainerElement, ChildElement, UseToolbarSubInfo<ChildElement>>, ref?: Ref<any>) {
    const listboxReturnType = useToolbar<ContainerElement, ChildElement>({
        rearrangeableChildrenParameters: { getIndex },
        singleSelectionParameters: { initiallySelectedIndex, onSelectedIndexChange },
        sortableChildrenParameters: { compare },
        linearNavigationParameters: { disableArrowKeys, disableHomeEndKeys, navigationDirection, navigatePastEnd, navigatePastStart, pageNavigationSize },
        toolbarParameters: { orientation, role },
        rovingTabIndexParameters: { onTabbableIndexChange, initiallyTabbedIndex },
        typeaheadNavigationParameters: { collator, noTypeahead, typeaheadTimeout },
    });

    useImperativeHandle(ref!, () => listboxReturnType);

    return (
        <ToolbarContext.Provider value={listboxReturnType.context}>
            {render(listboxReturnType)}
        </ToolbarContext.Provider>
    )
})


export const ToolbarChild = memoForwardRef(function ToolbarChildU<ToolbarChildElement extends Element>({
    index,
    render,
    ariaPropName,
    disabled,
    exclude,
    onPressSync,
    selectionMode,
    focusSelf,
    hidden,
    text,
    subInfo
}: ToolbarChildProps<ToolbarChildElement, UseToolbarSubInfo<ToolbarChildElement>>, ref?: Ref<any>) {
    const context = (useContext(ToolbarContext) as UseToolbarContext<any, ToolbarChildElement, UseToolbarSubInfo<ToolbarChildElement>>)

    const info = useToolbarChild<ToolbarChildElement>({
        context,
        completeListNavigationChildParameters: subInfo,
        pressParameters: { exclude, focusSelf, onPressSync },
        managedChildParameters: { disabled, hidden, index },
        singleSelectionChildParameters: { ariaPropName, selectionMode },
        typeaheadNavigationChildParameters: { text },
    });

    useImperativeHandle(ref!, () => info);

    return (
        <>{render(info)}</>
    )
})

export function defaultRenderToolbar<ContainerElement extends Element, ChildElement extends Element,  M extends UseToolbarSubInfo<ChildElement>>({ makePropsContainer, tagContainer }: { tagContainer: ElementToTag<ContainerElement>, makePropsContainer: (info: UseToolbarReturnType<ContainerElement, ChildElement, M>) => h.JSX.HTMLAttributes<ContainerElement> }) {
    return function (info: UseToolbarReturnType<ContainerElement, ChildElement, M>): VNode<any> {
        const list = createElement(tagContainer as never, makePropsContainer(info));
        return (
            <>
                {list}
            </>
        )
    }
}

export function defaultRenderToolbarChild<ChildElement extends Element, M extends UseToolbarSubInfo<ChildElement>>({ makePropsChild, tagChild }: { tagChild: ElementToTag<ChildElement>, makePropsChild: (info: UseToolbarChildReturnType<ChildElement, M>) => h.JSX.HTMLAttributes<ChildElement> }) {
    return function (info: UseToolbarChildReturnType<ChildElement, M>): VNode<any> {
        return createElement(tagChild as never, makePropsChild(info));
    }
}