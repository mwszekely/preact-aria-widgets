import { createContext } from "preact";
import { assertEmptyObject, focus, memo, UseProcessedChildrenContext } from "preact-prop-helpers";
import { useCallback } from "preact/hooks";
import { Get10, Get7, OmitStrong, useContextWithWarning } from "../props.js";
import { useToolbar, useToolbarChild, UseToolbarChildParameters, UseToolbarChildReturnType, UseToolbarContext, UseToolbarParameters, UseToolbarReturnType, UseToolbarSubInfo } from "../use-toolbar.js";
import { GenericComponentProps, useComponent, useComponentC, useDefault } from "./util.js";

export type ToolbarProps<ToolbarContainerElement extends Element, ToolbarChildElement extends Element, LabelElement extends Element, M extends UseToolbarSubInfo<ToolbarChildElement>> = GenericComponentProps<
    UseToolbarReturnType<ToolbarContainerElement, ToolbarChildElement, LabelElement, M>,
    Get10<UseToolbarParameters<ToolbarContainerElement, ToolbarChildElement, M>, "linearNavigationParameters", "rovingTabIndexParameters", "typeaheadNavigationParameters", "labelParameters", "toolbarParameters", "singleSelectionParameters", "refElementParameters", "singleSelectionParameters", "multiSelectionParameters", "singleSelectionDeclarativeParameters">,
    "orientation" | "ariaLabel" | "singleSelectionMode" | "multiSelectionMode"
>;

export type ToolbarChildProps<ToolbarChildElement extends Element, M extends UseToolbarSubInfo<ToolbarChildElement>> = GenericComponentProps<
    UseToolbarChildReturnType<ToolbarChildElement, UseToolbarSubInfo<ToolbarChildElement>>,
    Get7<UseToolbarChildParameters<ToolbarChildElement, UseToolbarSubInfo<ToolbarChildElement>>, "textContentParameters", "toolbarChildParameters", "info", "hasCurrentFocusParameters", "refElementParameters", "singleSelectionChildParameters", "multiSelectionChildParameters">,
    "disabledProp" | "index"
> & { info?: OmitStrong<M, keyof UseToolbarSubInfo<ToolbarChildElement>> };

// TODO: Are there performance/sanity implications for having one context per primitive?
// const UntabbableContext = createContext(false);
//const AriaPropNameContext = createContext<UseToolbarParameters<any, any, any>["singleSelectionParameters"]["singleSelectionAriaPropName"]>("aria-selected")
//const SelectionModeContext = createContext<UseToolbarParameters<any, any, any>["singleSelectionParameters"]["singleSelectionMode"]>("focus");
const ToolbarContext = createContext<UseToolbarContext<any, any>>(null!);
const ProcessedChildrenContext = createContext<UseProcessedChildrenContext>(null!);

export const Toolbar = memo((function ToolbarU<ContainerElement extends Element, ChildElement extends Element, LabelElement extends Element>({
    render,
    role,
    collator,
    disableHomeEndKeys,
    disabled,
    navigatePastEnd,
    navigatePastStart,
    pageNavigationSize,
    singleSelectedIndex,
    onSingleSelectedIndexChange,
    orientation,
    noTypeahead,
    onTabbableIndexChange,
    typeaheadTimeout,
    ariaLabel,
    imperativeHandle,
    multiSelectionAriaPropName,
    multiSelectionMode,
    onSelectionChange,
    singleSelectionAriaPropName,
    singleSelectionMode,
    untabbable,
    onNavigateLinear,
    onNavigateTypeahead,
    onElementChange,
    onMount,
    onUnmount
}: ToolbarProps<ContainerElement, ChildElement, LabelElement, UseToolbarSubInfo<ChildElement>>) {

    return (
        useComponentC<UseToolbarReturnType<ContainerElement, ChildElement, LabelElement, UseToolbarSubInfo<ChildElement>>>(
            imperativeHandle,
            render,
            ToolbarContext,
            ProcessedChildrenContext,
            useToolbar<ContainerElement, ChildElement, LabelElement>({
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

                },
                rovingTabIndexParameters: { onTabbableIndexChange, untabbable: untabbable || false },
                typeaheadNavigationParameters: {
                    onNavigateTypeahead,
                    collator: useDefault("collator", collator),
                    noTypeahead: useDefault("noTypeahead", noTypeahead),
                    typeaheadTimeout: useDefault("typeaheadTimeout", typeaheadTimeout)
                },
                labelParameters: { ariaLabel },
                singleSelectionParameters: { singleSelectionAriaPropName, singleSelectionMode },
                multiSelectionParameters: { multiSelectionAriaPropName, multiSelectionMode, onSelectionChange },
                singleSelectionDeclarativeParameters: { singleSelectedIndex, onSingleSelectedIndexChange },
                refElementParameters: { onElementChange, onMount, onUnmount },
            }))
    )
}))


export const ToolbarChild = memo((function ToolbarChild<ToolbarChildElement extends Element>({
    index,
    render,
    focusSelf,
    getText,
    disabledProp,
    untabbable,
    onElementChange,
    onMount,
    onUnmount,
    onCurrentFocusedChanged,
    onCurrentFocusedInnerChanged,
    imperativeHandle,
    info: uinfo,
    initiallyMultiSelected,
    multiSelectionDisabled,
    onMultiSelectChange,
    singleSelectionDisabled,
    onTextContentChange,
    ...void1
}: ToolbarChildProps<ToolbarChildElement, UseToolbarSubInfo<ToolbarChildElement>>) {
    const context = useContextWithWarning(ToolbarContext, "toolbar") as UseToolbarContext<ToolbarChildElement, UseToolbarSubInfo<ToolbarChildElement>>;
    const focusSelfDefault = useCallback((e: any) => { focus(e); }, []);
    focusSelf ??= focusSelfDefault;

    assertEmptyObject(void1);

    return useComponent(
        imperativeHandle,
        render,
        null,
        useToolbarChild<ToolbarChildElement>({
            context,
            toolbarChildParameters: { disabledProp },
            info: {
                index,
                focusSelf,
                untabbable: untabbable || false,
                ...uinfo
            },
            textContentParameters: { getText: useDefault("getText", getText), onTextContentChange },
            hasCurrentFocusParameters: { onCurrentFocusedChanged, onCurrentFocusedInnerChanged },
            refElementParameters: { onElementChange, onMount, onUnmount },
            singleSelectionChildParameters: { singleSelectionDisabled: singleSelectionDisabled || false },
            multiSelectionChildParameters: { multiSelectionDisabled: multiSelectionDisabled || false, initiallyMultiSelected: initiallyMultiSelected || false, onMultiSelectChange }
        }));
}));
