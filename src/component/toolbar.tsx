import { createContext, createElement, h, VNode } from "preact";
import { memo } from "preact/compat";
import { useContext } from "preact/hooks";
import { ElementToTag, PropModifier } from "props";
//import { ElementToTag } from "../props";
import { useToolbar, UseToolbarChild, UseToolbarChildParameters, UseToolbarChildReturnTypeInfo, UseToolbarParameters, UseToolbarReturnTypeInfo } from "../use-toolbar";

type Get<T, K extends keyof T> = T[K];

export interface ToolbarProps<ToolbarContainerElement extends Element, ToolbarChildElement extends Element, C, K extends string> extends
    Get<UseToolbarParameters, "linearNavigation">,
    Get<UseToolbarParameters, "listNavigation">,
    Get<UseToolbarParameters, "rovingTabIndex">,
    Get<UseToolbarParameters, "typeaheadNavigation">,
    Get<UseToolbarParameters, "managedChildren">,
    Get<UseToolbarParameters, "toolbar"> {
    //tagLabel: ElementToTag<LabelElement>;
    render(info: UseToolbarReturnTypeInfo<ToolbarChildElement, C, K>, modifyPropsToolbar: PropModifier<ToolbarContainerElement>): VNode<any>;
}






export interface ToolbarChildProps<ToolbarChildElement extends Element, C, K extends string> extends
    Get<UseToolbarChildParameters<C, K>, "managedChild">,
    Get<UseToolbarChildParameters<C, K>, "rovingTabIndex">,
    Get<UseToolbarChildParameters<C, K>, "listNavigation"> {
    //tagListItem: ElementToTag<ListboxItemElement>;
    subInfo: Get<UseToolbarChildParameters<C, K>, "subInfo">;
    render(info: UseToolbarChildReturnTypeInfo<ToolbarChildElement>, modifyPropsToolbarChild: PropModifier<ToolbarChildElement>): VNode<any>;
}

const ToolbarContext = createContext<UseToolbarChild<any, any, any>>(null!);

function ToolbarU<ContainerElement extends Element, ChildElement extends Element, C = undefined, K extends string = never>({
    render,
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
}: ToolbarProps<ContainerElement, ChildElement, C, K>) {
    const {
        useToolbarChild,
        useToolbarProps,
        ...listboxReturnType
    } = useToolbar<ContainerElement, ChildElement, C, K>({
        linearNavigation: { disableArrowKeys, disableHomeEndKeys },
        toolbar: { orientation },
        listNavigation: { indexDemangler, indexMangler },
        managedChildren: { onAfterChildLayoutEffect, onChildrenMountChange },
        rovingTabIndex: { onTabbableIndexChange, onTabbableRender, initialIndex },
        typeaheadNavigation: { collator, noTypeahead, typeaheadTimeout }
    });

    return (
        <ToolbarContext.Provider value={useToolbarChild}>
            {render(listboxReturnType, useToolbarProps)}
        </ToolbarContext.Provider>
    )
}


function ToolbarChildU<ToolbarChildElement extends Element, C = undefined, K extends string = never>({
    index,
    render,
    flags,
    focusSelf,
    hidden,
    text,
    subInfo
}: ToolbarChildProps<ToolbarChildElement, C, K>) {
    const { useToolbarChildProps, rovingTabIndex } = (useContext(ToolbarContext) as UseToolbarChild<ToolbarChildElement, C, K>)({
        managedChild: { index, flags },
        rovingTabIndex: { focusSelf, hidden },
        listNavigation: { text },
        subInfo
    });

    return (
        <>{render({ rovingTabIndex }, useToolbarChildProps)}</>
    )
}

export const Toolbar = memo(ToolbarU) as typeof ToolbarU;
export const ToolbarChild = memo(ToolbarChildU) as typeof ToolbarChildU;

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