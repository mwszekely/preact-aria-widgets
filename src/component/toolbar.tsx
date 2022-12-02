import { createContext, createElement, h, Ref, VNode } from "preact";
import { useMergedProps } from "preact-prop-helpers";
import { useCallback, useContext, useImperativeHandle } from "preact/hooks";
import { ElementToTag, PropModifier } from "../props";
//import { ElementToTag } from "../props";
import { useToolbar, useToolbarChild, UseToolbarReturnType, UseToolbarChildReturnType, UseToolbarChildParameters, UseToolbarParameters, UseToolbarSubInfo, UseToolbarContext } from "../use-toolbar";
import { memoForwardRef, PartialExcept, useDefault } from "./util";

type Get<T, K extends keyof T> = T[K];

export interface ToolbarPropsBase<ToolbarContainerElement extends Element, ToolbarChildElement extends Element, M extends UseToolbarSubInfo<ToolbarChildElement>> extends
    Get<UseToolbarParameters<ToolbarContainerElement, ToolbarChildElement, M>, "linearNavigationParameters">,
    Get<UseToolbarParameters<ToolbarContainerElement, ToolbarChildElement, M>, "singleSelectionParameters">,
    Get<UseToolbarParameters<ToolbarContainerElement, ToolbarChildElement, M>, "rovingTabIndexParameters">,
    Get<UseToolbarParameters<ToolbarContainerElement, ToolbarChildElement, M>, "typeaheadNavigationParameters">,
    Get<UseToolbarParameters<ToolbarContainerElement, ToolbarChildElement, M>, "sortableChildrenParameters">,
    Get<UseToolbarParameters<ToolbarContainerElement, ToolbarChildElement, M>, "rearrangeableChildrenParameters">,
    Get<UseToolbarParameters<ToolbarContainerElement, ToolbarChildElement, M>, "toolbarParameters"> {
    ref?: Ref<UseToolbarReturnType<ToolbarContainerElement, ToolbarChildElement, M>>;
}





export interface ToolbarChildPropsBase<ToolbarChildElement extends Element, M extends UseToolbarSubInfo<ToolbarChildElement>> extends
    Get<UseToolbarChildParameters<ToolbarChildElement, M>, "pressParameters">,
    Get<UseToolbarChildParameters<ToolbarChildElement, M>, "singleSelectionChildParameters">,
    Get<UseToolbarChildParameters<ToolbarChildElement, M>, "rovingTabIndexChildParameters">,
    Get<UseToolbarChildParameters<ToolbarChildElement, M>, "sortableChildParameters">,
    Get<UseToolbarChildParameters<ToolbarChildElement, M>, "textContentParameters">,
    Pick<Get<UseToolbarChildParameters<any, any>, "managedChildParameters">, "index"> {
//    subInfo: UseToolbarChildParameters<ToolbarChildElement, M>["completeListNavigationChildParameters"];
    ref?: Ref<UseToolbarChildReturnType<ToolbarChildElement, M>>;
}

export interface ToolbarProps<ToolbarContainerElement extends Element, ToolbarChildElement extends Element, M extends UseToolbarSubInfo<ToolbarChildElement>> extends PartialExcept<ToolbarPropsBase<ToolbarContainerElement, ToolbarChildElement, M>, "orientation"> {
    render(info: UseToolbarReturnType<ToolbarContainerElement, ToolbarChildElement, M>): VNode<any>;
}

export interface ToolbarChildProps<ToolbarChildElement extends Element, M extends UseToolbarSubInfo<ToolbarChildElement>> extends PartialExcept<ToolbarChildPropsBase<ToolbarChildElement, M>, "getSortValue" | "ariaPropName" | "index" | "selectionMode"> {
    render(info: UseToolbarChildReturnType<ToolbarChildElement, M>): VNode<any>;
}

const ToolbarContext = createContext<UseToolbarContext<any, any, any>>(null!);

export const Toolbar = memoForwardRef(function ToolbarU<ContainerElement extends Element, ChildElement extends Element>({
    render,
    role,
    collator,
    disableArrowKeys,
    disableHomeEndKeys,
    untabbable,
    compare,
    getIndex,
    navigatePastEnd,
    navigatePastStart,
    pageNavigationSize,
    initiallySelectedIndex,
    setSelectedIndex,
    orientation,
    noTypeahead,
    onTabbableIndexChange,
    typeaheadTimeout
}: ToolbarProps<ContainerElement, ChildElement, UseToolbarSubInfo<ChildElement>>, ref?: Ref<any>) {
    const listboxReturnType = useToolbar<ContainerElement, ChildElement>({
        rearrangeableChildrenParameters: { getIndex: useDefault("getIndex", getIndex) },
        singleSelectionParameters: { initiallySelectedIndex: initiallySelectedIndex ?? null, setSelectedIndex: setSelectedIndex ?? null },
        sortableChildrenParameters: { compare: compare ?? null },
        linearNavigationParameters: {
            disableArrowKeys: useDefault("disableArrowKeys", disableArrowKeys),
            disableHomeEndKeys: useDefault("disableHomeEndKeys", disableHomeEndKeys),
            navigatePastEnd: navigatePastEnd ?? "wrap",
            navigatePastStart: navigatePastStart ?? "wrap",
            pageNavigationSize: useDefault("pageNavigationSize", pageNavigationSize)
        },
        toolbarParameters: {
            orientation,
            role: role ?? "toolbar"
        },
        rovingTabIndexParameters: { onTabbableIndexChange: onTabbableIndexChange ?? null, untabbable: untabbable ?? false },
        typeaheadNavigationParameters: { 
            collator: useDefault("collator", collator), 
            noTypeahead: useDefault("noTypeahead", noTypeahead), 
            typeaheadTimeout: useDefault("typeaheadTimeout", typeaheadTimeout)
         },
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
    getSortValue,
    hidden,
    getText
}: ToolbarChildProps<ToolbarChildElement, UseToolbarSubInfo<ToolbarChildElement>>, ref?: Ref<any>) {
    const context = (useContext(ToolbarContext) as UseToolbarContext<any, ToolbarChildElement, UseToolbarSubInfo<ToolbarChildElement>>);
    const focusSelfDefault = useCallback((e: any) => { e?.focus(); }, []);

    const info = useToolbarChild<ToolbarChildElement>({
        context,
        //completeListNavigationChildParameters: subInfo,
        completeListNavigationChildParameters: {},
        pressParameters: { exclude, focusSelf: focusSelf ?? focusSelfDefault, onPressSync },
        managedChildParameters: { index },
        rovingTabIndexChildParameters: { hidden: hidden ?? false },
        sortableChildParameters: { getSortValue },
        singleSelectionChildParameters: { ariaPropName, selectionMode, disabled: disabled ?? false },
        textContentParameters: { getText: useDefault("getText", getText) },
    });

    useImperativeHandle(ref!, () => info);

    return (
        <>{render(info)}</>
    )
})

function defaultRenderToolbar<ContainerElement extends Element, ChildElement extends Element, M extends UseToolbarSubInfo<ChildElement>>({ makePropsContainer, tagContainer }: { tagContainer: ElementToTag<ContainerElement>, makePropsContainer: (info: UseToolbarReturnType<ContainerElement, ChildElement, M>) => h.JSX.HTMLAttributes<ContainerElement> }) {
    return function (info: UseToolbarReturnType<ContainerElement, ChildElement, M>): VNode<any> {
        const list = createElement(tagContainer as never, makePropsContainer(info));
        return (
            <>
                {list}
            </>
        )
    }
}

function defaultRenderToolbarChild<ChildElement extends Element, M extends UseToolbarSubInfo<ChildElement>>({ makePropsChild, tagChild }: { tagChild: ElementToTag<ChildElement>, makePropsChild: (info: UseToolbarChildReturnType<ChildElement, M>) => h.JSX.HTMLAttributes<ChildElement> }) {
    return function (info: UseToolbarChildReturnType<ChildElement, M>): VNode<any> {
        return createElement(tagChild as never, makePropsChild(info));
    }
}