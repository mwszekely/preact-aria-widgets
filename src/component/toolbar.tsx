import { createContext, createElement, h, Ref, VNode } from "preact";
import { useContext, useImperativeHandle } from "preact/hooks";
import { ElementToTag, PropModifier } from "../props";
//import { ElementToTag } from "../props";
import { useToolbar, UseToolbarChild, UseToolbarChildParameters, UseToolbarChildReturnTypeInfo, UseToolbarParameters, UseToolbarReturnTypeInfo } from "../use-toolbar";
import { memoForwardRef } from "./util";

type Get<T, K extends keyof T> = T[K];

export interface ToolbarProps<ToolbarContainerElement extends Element, ToolbarChildElement extends Element, C, K extends string> extends
    Get<UseToolbarParameters<never>, "linearNavigation">,
    Get<UseToolbarParameters<never>, "listNavigation">,
    Get<UseToolbarParameters<never>, "rovingTabIndex">,
    Get<UseToolbarParameters<never>, "typeaheadNavigation">,
    Get<UseToolbarParameters<never>, "managedChildren">,
    Get<UseToolbarParameters<never>, "toolbar"> {
    ref?: Ref<UseToolbarReturnTypeInfo<ToolbarChildElement, C, K>>;
    render(info: UseToolbarReturnTypeInfo<ToolbarChildElement, C, K>, propsToolbar: PropModifier<ToolbarContainerElement>): VNode<any>;
}






export interface ToolbarChildProps<ToolbarChildElement extends Element, C, K extends string> extends
    Get<UseToolbarChildParameters<ToolbarChildElement, C, K, C>, "managedChild">,
    Get<UseToolbarChildParameters<ToolbarChildElement, C, K, C>, "rovingTabIndex">,
    Get<UseToolbarChildParameters<ToolbarChildElement, C, K, C>, "listNavigation"> {
    //tagListItem: ElementToTag<ListboxItemElement>;
    subInfo: Get<UseToolbarChildParameters<ToolbarChildElement, C, K, C>, "subInfo">;
    ref?: Ref<UseToolbarChildReturnTypeInfo<ToolbarChildElement>>;
    render(info: UseToolbarChildReturnTypeInfo<ToolbarChildElement>, modifyPropsToolbarChild: h.JSX.HTMLAttributes<ToolbarChildElement>): VNode<any>;
}

const ToolbarContext = createContext<UseToolbarChild<any, any, any>>(null!);

export const Toolbar = memoForwardRef(function ToolbarU<ContainerElement extends Element, ChildElement extends Element, C = undefined, K extends string = never>({
    render,
    role,
    collator,
    disableArrowKeys,
    disableHomeEndKeys,
    indexDemangler,
    indexMangler,
    orientation,
    noTypeahead,
    onAfterChildLayoutEffect,
    onChildrenMountChange,
    onTabbableIndexChange,
    onTabbableRender,
    typeaheadTimeout,
    initialIndex
}: ToolbarProps<ContainerElement, ChildElement, C, K>, ref?: Ref<any>) {
    const {
        useToolbarChild,
        useToolbarProps,
        ...listboxReturnType
    } = useToolbar<ContainerElement, ChildElement, C, K>({
        linearNavigation: { disableArrowKeys, disableHomeEndKeys },
        toolbar: { orientation, role },
        listNavigation: { indexDemangler, indexMangler },
        managedChildren: { onAfterChildLayoutEffect, onChildrenMountChange },
        rovingTabIndex: { onTabbableIndexChange, onTabbableRender, initialIndex },
        typeaheadNavigation: { collator, noTypeahead, typeaheadTimeout }
    });

    useImperativeHandle(ref!, () => listboxReturnType);

    return (
        <ToolbarContext.Provider value={useToolbarChild}>
            {render(listboxReturnType, useToolbarProps)}
        </ToolbarContext.Provider>
    )
})


export const ToolbarChild = memoForwardRef(function ToolbarChildU<ToolbarChildElement extends Element, C = undefined, K extends string = never>({
    index,
    render,
    flags,
    focusSelf,
    hidden,
    text,
    noModifyTabIndex,
    subInfo
}: ToolbarChildProps<ToolbarChildElement, C, K>, ref?: Ref<any>) {
    const { toolbarChildProps, ...info } = (useContext(ToolbarContext) as UseToolbarChild<ToolbarChildElement, C, K>)({
        managedChild: { index, flags },
        rovingTabIndex: { focusSelf, hidden, noModifyTabIndex },
        listNavigation: { text },
        subInfo
    });

    useImperativeHandle(ref!, () => info);

    return (
        <>{render(info, toolbarChildProps)}</>
    )
})

export function defaultRenderToolbar<ContainerElement extends Element, ChildElement extends Element, C, K extends string>({ makePropsContainer, tagContainer }: { tagContainer: ElementToTag<ContainerElement>, makePropsContainer: (info: UseToolbarReturnTypeInfo<ChildElement, C, K>) => h.JSX.HTMLAttributes<ContainerElement> }) {
    return function (info: UseToolbarReturnTypeInfo<ChildElement, C, K>, modifyPropsContainer: PropModifier<ContainerElement>): VNode<any> {
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