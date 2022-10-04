import { createContext, createElement, h, VNode } from "preact";
import { memo } from "preact/compat";
import { useContext } from "preact/hooks";
import { ElementToTag, PropModifier } from "props";
//import { ElementToTag } from "../props";
import { useToolbar, UseToolbarChild, UseToolbarChildParameters, UseToolbarChildReturnTypeInfo, UseToolbarParameters, UseToolbarReturnTypeInfo } from "../use-toolbar";

type Get<T, K extends keyof T> = T[K];

export interface ToolbarProps<ToolbarContainerElement extends Element, ToolbarChildElement extends Element> extends
    Get<UseToolbarParameters, "linearNavigation">,
    Get<UseToolbarParameters, "listNavigation">,
    Get<UseToolbarParameters, "rovingTabIndex">,
    Get<UseToolbarParameters, "typeaheadNavigation">,
    Get<UseToolbarParameters, "managedChildren">,
    Get<UseToolbarParameters, "toolbar"> {
    //tagLabel: ElementToTag<LabelElement>;
    render(info: UseToolbarReturnTypeInfo<ToolbarChildElement>, modifyPropsToolbar: PropModifier<ToolbarContainerElement>): VNode<any>;
}






export interface ToolbarChildProps<ToolbarChildElement extends Element> extends
    Get<UseToolbarChildParameters, "managedChild">,
    Get<UseToolbarChildParameters, "rovingTabIndex">,
    Get<UseToolbarChildParameters, "listNavigation"> {
    //tagListItem: ElementToTag<ListboxItemElement>;
    render(info: UseToolbarChildReturnTypeInfo<ToolbarChildElement>, modifyPropsToolbarChild: PropModifier<ToolbarChildElement>): VNode<any>;
}

const ToolbarContext = createContext<UseToolbarChild<any>>(null!);

function ToolbarU<ContainerElement extends Element, ChildElement extends Element>({
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
}: ToolbarProps<ContainerElement, ChildElement>) {
    const {
        useToolbarChild,
        useToolbarProps,
        ...listboxReturnType
    } = useToolbar<ContainerElement, ChildElement>({
        linearNavigation: { disableArrowKeys, disableHomeEndKeys },
        toolbar: { orientation },
        listNavigation: { indexDemangler, indexMangler },
        managedChildren: { onAfterChildLayoutEffect, onChildrenMountChange },
        rovingTabIndex: { onTabbableIndexChange, onTabbableRender, initialIndex },
        typeaheadNavigation: { collator, noTypeahead, typeaheadTimeout }
    });

    return (
        <ToolbarContext.Provider value={useToolbarChild}>
            {render({ ...listboxReturnType }, useToolbarProps)}
        </ToolbarContext.Provider>
    )
}


function ToolbarChildU<ListItemElement extends Element>({
    index,
    render,
    flags,
    focusSelf,
    hidden,
    text
}: ToolbarChildProps<ListItemElement>) {
    const { useToolbarChildProps, rovingTabIndex } = useContext(ToolbarContext)({
        managedChild: { index, flags },
        rovingTabIndex: { focusSelf, hidden },
        listNavigation: { text },
        subInfo: undefined!
    });

    return (
        <>{render({ rovingTabIndex }, useToolbarChildProps)}</>
    )
}

export const Toolbar = memo(ToolbarU) as typeof ToolbarU;
export const ToolbarChild = memo(ToolbarChildU) as typeof ToolbarChildU;

export function defaultRenderToolbar<ContainerElement extends Element, ChildElement extends Element>({ makePropsContainer, tagContainer }: { tagContainer: ElementToTag<ContainerElement>, makePropsContainer: (info: UseToolbarReturnTypeInfo<ChildElement>) => h.JSX.HTMLAttributes<ContainerElement> }) {
    return function (info: UseToolbarReturnTypeInfo<ChildElement>, modifyPropsContainer: PropModifier<ContainerElement>): VNode<any> {
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