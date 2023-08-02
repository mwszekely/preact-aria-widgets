import { createContext } from "preact";
import { assertEmptyObject, focus, memo } from "preact-prop-helpers";
import { useCallback, useImperativeHandle } from "preact/hooks";
import { Get10, Get5, OmitStrong, useContextWithWarning } from "../props.js";
import { UseToolbarChildParameters, UseToolbarChildReturnType, UseToolbarContext, UseToolbarParameters, UseToolbarReturnType, UseToolbarSubInfo, useToolbar, useToolbarChild } from "../use-toolbar.js";
import { GenericComponentProps, useComponent, useDefault } from "./util.js";

export type ToolbarProps<ToolbarContainerElement extends Element, ToolbarChildElement extends Element, LabelElement extends Element, M extends UseToolbarSubInfo<ToolbarChildElement>> = GenericComponentProps<
    UseToolbarReturnType<ToolbarContainerElement, ToolbarChildElement, LabelElement, M>,
    Get10<UseToolbarParameters<ToolbarContainerElement, ToolbarChildElement, M>, "linearNavigationParameters", "rovingTabIndexParameters", "typeaheadNavigationParameters", "sortableChildrenParameters", "rearrangeableChildrenParameters", "labelParameters", "staggeredChildrenParameters", "toolbarParameters", "singleSelectionParameters", "refElementParameters">,
    "orientation" | "ariaLabel" | "selectionLimit"
>;

export type ToolbarChildProps<ToolbarChildElement extends Element, M extends UseToolbarSubInfo<ToolbarChildElement>> = GenericComponentProps<
    UseToolbarChildReturnType<ToolbarChildElement, UseToolbarSubInfo<ToolbarChildElement>>,
    Get5<UseToolbarChildParameters<ToolbarChildElement, UseToolbarSubInfo<ToolbarChildElement>>, "textContentParameters", "toolbarChildParameters", "info", "hasCurrentFocusParameters", "refElementParameters">,
    "disabledProp" | "getSortValue" | "index"
> & { info?: OmitStrong<M, keyof UseToolbarSubInfo<ToolbarChildElement>> };

// TODO: Are there performance/sanity implications for having one context per primitive?
const UntabbableContext = createContext(false);
const AriaPropNameContext = createContext<UseToolbarParameters<any, any, any>["singleSelectionParameters"]["ariaPropName"]>("aria-selected")
const SelectionModeContext = createContext<UseToolbarParameters<any, any, any>["singleSelectionParameters"]["selectionMode"]>("focus");
const ToolbarContext = createContext<UseToolbarContext<any, any>>(null!);

export const Toolbar = memo(function ToolbarU<ContainerElement extends Element, ChildElement extends Element, LabelElement extends Element>({
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
    onNavigateTypeahead,
    onElementChange,
    onMount,
    onUnmount,
    selectionLimit,
    imperativeHandle,
    ...void1
}: ToolbarProps<ContainerElement, ChildElement, LabelElement, UseToolbarSubInfo<ChildElement>>) {
    ariaPropName ??= "aria-selected";
    selectionMode ??= "activation";
    untabbable ||= false;

    assertEmptyObject(void1);

    return (
        <AriaPropNameContext.Provider value={ariaPropName}>
            <SelectionModeContext.Provider value={selectionMode}>
                <UntabbableContext.Provider value={untabbable}>
                    {useComponent<UseToolbarReturnType<ContainerElement, ChildElement, LabelElement, UseToolbarSubInfo<ChildElement>>>(
                        imperativeHandle,
                        render,
                        ToolbarContext,
                        useToolbar<ContainerElement, ChildElement, LabelElement>({
                            rearrangeableChildrenParameters: { getIndex: useDefault("getIndex", getIndex) },
                            sortableChildrenParameters: { compare: compare },
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
                                selectedIndex,
                                onSelectedIndexChange,
                                selectionLimit
                            },
                            staggeredChildrenParameters: { staggered: staggered || false },
                            rovingTabIndexParameters: { onTabbableIndexChange, untabbable },
                            typeaheadNavigationParameters: {
                                onNavigateTypeahead,
                                collator: useDefault("collator", collator),
                                noTypeahead: useDefault("noTypeahead", noTypeahead),
                                typeaheadTimeout: useDefault("typeaheadTimeout", typeaheadTimeout)
                            },
                            labelParameters: { ariaLabel },
                            singleSelectionParameters: { ariaPropName: ariaPropName, selectionMode },
                            refElementParameters: { onElementChange, onMount, onUnmount },
                        }))}
                </UntabbableContext.Provider>
            </SelectionModeContext.Provider>
        </AriaPropNameContext.Provider>
    )
})


export function ToolbarChild<ToolbarChildElement extends Element>({
    index,
    render,
    focusSelf,
    getSortValue,
    getText,
    unselectable,
    disabledProp,
    untabbable,
    onElementChange,
    onMount,
    onUnmount,
    onCurrentFocusedChanged,
    onCurrentFocusedInnerChanged,
    imperativeHandle,
    info: uinfo
}: ToolbarChildProps<ToolbarChildElement, UseToolbarSubInfo<ToolbarChildElement>>) {
    const context = useContextWithWarning(ToolbarContext, "toolbar") as UseToolbarContext<ToolbarChildElement, UseToolbarSubInfo<ToolbarChildElement>>;
    console.assert(context != null, `This ToolbarChild is not contained within a Toolbar`);
    const focusSelfDefault = useCallback((e: any) => { focus(e); }, []);
    focusSelf ??= focusSelfDefault;

    const info = useToolbarChild<ToolbarChildElement>({
        context,
        toolbarChildParameters: { disabledProp },
        info: {
            index,
            focusSelf,
            unselectable: unselectable || false,
            untabbable: untabbable || false,
            getSortValue
        },
        textContentParameters: { getText: useDefault("getText", getText) },
        hasCurrentFocusParameters: { onCurrentFocusedChanged, onCurrentFocusedInnerChanged },
        refElementParameters: { onElementChange, onMount, onUnmount }
    });

    useImperativeHandle(imperativeHandle!, () => info);

    return (
        <>{render(info)}</>
    )
};
