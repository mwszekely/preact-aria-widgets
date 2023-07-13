import { createContext, Ref, VNode } from "preact";
import { focus } from "preact-prop-helpers";
import { useCallback, useImperativeHandle } from "preact/hooks";
import { Get, OmitStrong, useContextWithWarning } from "../props.js";
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
    Get<UseToolbarChildParameters<ToolbarChildElement, M>, "textContentParameters">,
    Get<UseToolbarChildParameters<ToolbarChildElement, M>, "toolbarChildParameters">,
    Pick<Get<UseToolbarChildParameters<any, any>, "info">, "getSortValue" | "index" | "untabbable" | "unselectable"> {
    focusSelf?: M["focusSelf"];
    info?: OmitStrong<Get<UseToolbarChildParameters<ToolbarChildElement, M>, "info">, never>
    ref?: Ref<UseToolbarChildReturnType<ToolbarChildElement, M>>;
}

export interface ToolbarProps<ToolbarContainerElement extends Element, ToolbarChildElement extends Element, LabelElement extends Element, M extends UseToolbarSubInfo<ToolbarChildElement>> extends PartialExcept<ToolbarPropsBase<ToolbarContainerElement, ToolbarChildElement, LabelElement, M>, "orientation" | "ariaLabel"> {
    render(info: UseToolbarReturnType<ToolbarContainerElement, ToolbarChildElement, LabelElement, M>): VNode<any>;
}

export interface ToolbarChildProps<ToolbarChildElement extends Element, M extends UseToolbarSubInfo<ToolbarChildElement>> extends PartialExcept<ToolbarChildPropsBase<ToolbarChildElement, M>, "getSortValue" | "index" | "disabledProp"> {
    render(info: UseToolbarChildReturnType<ToolbarChildElement, M>): VNode<any>;
}

// TODO: Are there performance/sanity implications for having one context per primitive?
const UntabbableContext = createContext(false);
const AriaPropNameContext = createContext<UseToolbarParameters<any, any, any>["singleSelectionParameters"]["ariaPropName"]>("aria-selected")
const SelectionModeContext = createContext<UseToolbarParameters<any, any, any>["singleSelectionParameters"]["selectionMode"]>("focus");
const ToolbarContext = createContext<UseToolbarContext<any, any, any>>(null!);

export const Toolbar = memoForwardRef(function ToolbarU<ContainerElement extends Element, ChildElement extends Element, LabelElement extends Element, M extends UseToolbarSubInfo<ChildElement> = UseToolbarSubInfo<ChildElement>>({
    render,
    role,
    collator,
    disableHomeEndKeys,
    disabled,
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
    selectionMode,
    untabbable,
    onNavigateLinear,
    onNavigateTypeahead
}: ToolbarProps<ContainerElement, ChildElement, LabelElement, M>, ref?: Ref<any>) {
    ariaPropName ??= "aria-selected";
    selectionMode ??= "activation";
    untabbable ||= false

    const listboxReturnType = useToolbar<ContainerElement, ChildElement, LabelElement, M>({
        rearrangeableChildrenParameters: { getIndex: useDefault("getIndex", getIndex) },
        sortableChildrenParameters: { compare: compare ?? null },
        linearNavigationParameters: {
            onNavigateLinear,
            disableHomeEndKeys: useDefault("disableHomeEndKeys", disableHomeEndKeys),
            navigatePastEnd: navigatePastEnd ?? "wrap",
            navigatePastStart: navigatePastStart ?? "wrap",
            pageNavigationSize: useDefault("pageNavigationSize", pageNavigationSize)
        },
        toolbarParameters: {
            orientation,
            disabled: disabled || false,
            role: role ?? "toolbar",
            selectedIndex: selectedIndex ?? null,
            onSelectedIndexChange: onSelectedIndexChange ?? null
        },
        staggeredChildrenParameters: { staggered: staggered || false },
        rovingTabIndexParameters: { onTabbableIndexChange: onTabbableIndexChange ?? null, untabbable },
        typeaheadNavigationParameters: {
            onNavigateTypeahead,
            collator: useDefault("collator", collator),
            noTypeahead: useDefault("noTypeahead", noTypeahead),
            typeaheadTimeout: useDefault("typeaheadTimeout", typeaheadTimeout)
        },
        labelParameters: { ariaLabel },
        singleSelectionParameters: { ariaPropName: ariaPropName, selectionMode }
    });

    useImperativeHandle(ref!, () => listboxReturnType);

    return (
        <AriaPropNameContext.Provider value={ariaPropName}>
            <SelectionModeContext.Provider value={selectionMode}>
                <UntabbableContext.Provider value={untabbable}>
                    <ToolbarContext.Provider value={listboxReturnType.context}>
                        {render(listboxReturnType)}
                    </ToolbarContext.Provider>
                </UntabbableContext.Provider>
            </SelectionModeContext.Provider>
        </AriaPropNameContext.Provider>
    )
})


export const ToolbarChild = memoForwardRef(function ToolbarChildU<ToolbarChildElement extends Element, M extends UseToolbarSubInfo<ToolbarChildElement> = UseToolbarSubInfo<ToolbarChildElement>>({
    index,
    render,
    focusSelf,
    getSortValue,
    getText,
    unselectable,
    disabledProp,
    untabbable,
    info: uinfo
}: ToolbarChildProps<ToolbarChildElement, M>, ref?: Ref<any>) {
    const context = useContextWithWarning(ToolbarContext, "toolbar") as UseToolbarContext<any, ToolbarChildElement, M>;
    console.assert(context != null, `This ToolbarChild is not contained within a Toolbar`);
    const focusSelfDefault = useCallback((e: any) => { focus(e); }, []);
    focusSelf ??= focusSelfDefault;

    const info = useToolbarChild<ToolbarChildElement, M>({
        context,
        toolbarChildParameters: { disabledProp },
        info: { index, focusSelf, unselectable, untabbable, getSortValue, ...uinfo } as M,
        textContentParameters: { getText: useDefault("getText", getText) },
    });

    useImperativeHandle(ref!, () => info);

    return (
        <>{render(info)}</>
    )
});
