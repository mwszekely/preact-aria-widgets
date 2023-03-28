import { createContext, Ref, VNode } from "preact";
import { useCallback, useContext, useImperativeHandle } from "preact/hooks";
import { Get, OmitStrong } from "../props.js";
import { useToolbar, useToolbarChild, UseToolbarChildParameters, UseToolbarChildReturnType, UseToolbarContext, UseToolbarParameters, UseToolbarReturnType, UseToolbarSubInfo } from "../use-toolbar.js";
import { memoForwardRef, PartialExcept, useDefault } from "./util.js";


export interface ToolbarPropsBase<ToolbarContainerElement extends Element, ToolbarChildElement extends Element, LabelElement extends Element, M extends UseToolbarSubInfo<ToolbarChildElement>> extends
    Get<UseToolbarParameters<ToolbarContainerElement, ToolbarChildElement, M>, "linearNavigationParameters">,
    Get<UseToolbarParameters<ToolbarContainerElement, ToolbarChildElement, M>, "rovingTabIndexParameters">,
    Get<UseToolbarParameters<ToolbarContainerElement, ToolbarChildElement, M>, "typeaheadNavigationParameters">,
    Get<UseToolbarParameters<ToolbarContainerElement, ToolbarChildElement, M>, "sortableChildrenParameters">,
    Get<UseToolbarParameters<ToolbarContainerElement, ToolbarChildElement, M>, "rearrangeableChildrenParameters">,
    Get<UseToolbarParameters<ToolbarContainerElement, ToolbarChildElement, M>, "labelParameters">,
    Get<UseToolbarParameters<ToolbarContainerElement, ToolbarChildElement, M>, "staggeredChildrenParameters">,
    Get<UseToolbarParameters<ToolbarContainerElement, ToolbarChildElement, M>, "toolbarParameters">,
    Get<UseToolbarParameters<ToolbarContainerElement, ToolbarChildElement, M>, "singleSelectionParameters"> {
    ref?: Ref<UseToolbarReturnType<ToolbarContainerElement, ToolbarChildElement, LabelElement, M>>;
}





export interface ToolbarChildPropsBase<ToolbarChildElement extends Element, M extends UseToolbarSubInfo<ToolbarChildElement>> extends
    Get<UseToolbarChildParameters<ToolbarChildElement, M>, "sortableChildParameters">,
    Get<UseToolbarChildParameters<ToolbarChildElement, M>, "textContentParameters">,
    Pick<Get<UseToolbarChildParameters<any, any>, "info">, "index" | "hidden" | "disabled"> {
    focusSelf?: M["focusSelf"];
    info?: OmitStrong<Get<UseToolbarChildParameters<ToolbarChildElement, M>, "info">, never>
    ref?: Ref<UseToolbarChildReturnType<ToolbarChildElement, M>>;
}

export interface ToolbarProps<ToolbarContainerElement extends Element, ToolbarChildElement extends Element, LabelElement extends Element, M extends UseToolbarSubInfo<ToolbarChildElement>> extends PartialExcept<ToolbarPropsBase<ToolbarContainerElement, ToolbarChildElement, LabelElement, M>, "orientation" | "ariaLabel"> {
    render(info: UseToolbarReturnType<ToolbarContainerElement, ToolbarChildElement, LabelElement, M>): VNode<any>;
}

export interface ToolbarChildProps<ToolbarChildElement extends Element, M extends UseToolbarSubInfo<ToolbarChildElement>> extends PartialExcept<ToolbarChildPropsBase<ToolbarChildElement, M>, "getSortValue" | "index"> {
    render(info: UseToolbarChildReturnType<ToolbarChildElement, M>): VNode<any>;
}

const ToolbarContext = createContext<UseToolbarContext<any, any, any>>(null!);

export const Toolbar = memoForwardRef(function ToolbarU<ContainerElement extends Element, ChildElement extends Element, LabelElement extends Element, M extends UseToolbarSubInfo<ChildElement> = UseToolbarSubInfo<ChildElement>>({
    render,
    role,
    collator,
    disableHomeEndKeys,
    untabbable,
    compare,
    getIndex,
    navigatePastEnd,
    navigatePastStart,
    pageNavigationSize,
    selectedIndex,
    onSelectedIndexChange,
    orientation,
    noTypeahead,
    onTabbableIndexChange,
    typeaheadTimeout,
    staggered,
    ariaLabel,
    ariaPropName, 
    selectionMode
}: ToolbarProps<ContainerElement, ChildElement, LabelElement, M>, ref?: Ref<any>) {
    const listboxReturnType = useToolbar<ContainerElement, ChildElement, LabelElement, M>({
        rearrangeableChildrenParameters: { getIndex: useDefault("getIndex", getIndex) },
        sortableChildrenParameters: { compare: compare ?? null },
        linearNavigationParameters: {
            //: useDefault("disableArrowKeys", disableArrowKeys),
            disableHomeEndKeys: useDefault("disableHomeEndKeys", disableHomeEndKeys),
            navigatePastEnd: navigatePastEnd ?? "wrap",
            navigatePastStart: navigatePastStart ?? "wrap",
            pageNavigationSize: useDefault("pageNavigationSize", pageNavigationSize)
        },
        toolbarParameters: {
            orientation,
            role: role ?? "toolbar",
            selectedIndex: selectedIndex ?? null,
            onSelectedIndexChange: onSelectedIndexChange ?? null
        },
        staggeredChildrenParameters: { staggered: staggered || false },
        rovingTabIndexParameters: { onTabbableIndexChange: onTabbableIndexChange ?? null, untabbable: untabbable || false },
        typeaheadNavigationParameters: {
            collator: useDefault("collator", collator),
            noTypeahead: useDefault("noTypeahead", noTypeahead),
            typeaheadTimeout: useDefault("typeaheadTimeout", typeaheadTimeout)
        },
        labelParameters: { ariaLabel },
        singleSelectionParameters: { ariaPropName: ariaPropName ?? "aria-selected", selectionMode: selectionMode ?? "activation" }
    });

    useImperativeHandle(ref!, () => listboxReturnType);

    return (
        <ToolbarContext.Provider value={listboxReturnType.context}>
            {render(listboxReturnType)}
        </ToolbarContext.Provider>
    )
})


export const ToolbarChild = memoForwardRef(function ToolbarChildU<ToolbarChildElement extends Element, M extends UseToolbarSubInfo<ToolbarChildElement> = UseToolbarSubInfo<ToolbarChildElement>>({
    index,
    render,
    focusSelf,
    getSortValue,
    getText,
    info: uinfo
}: ToolbarChildProps<ToolbarChildElement, M>, ref?: Ref<any>) {
    const context = (useContext(ToolbarContext) as UseToolbarContext<any, ToolbarChildElement, M>);
    console.assert(context != null, `This ToolbarChild is not contained within a Toolbar`);
    const focusSelfDefault = useCallback((e: any) => { e?.focus(); }, []);

    const info = useToolbarChild<ToolbarChildElement, M>({
        context,
        info: { index, focusSelf: focusSelf ?? focusSelfDefault, ...uinfo } as M,
        sortableChildParameters: { getSortValue },
        textContentParameters: { getText: useDefault("getText", getText) },
    });

    useImperativeHandle(ref!, () => info);

    return (
        <>{render(info)}</>
    )
});
