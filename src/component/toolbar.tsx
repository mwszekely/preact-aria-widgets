import { assertEmptyObject, createContext, focus, identity, memo, useCallback, useEnsureStability, UseProcessedChildrenContext } from "preact-prop-helpers";
import { Get11, Get8, OmitStrong, useContextWithWarning } from "../props.js";
import { useToolbar, useToolbarChild, UseToolbarChildParameters, UseToolbarChildReturnType, UseToolbarContext, UseToolbarParameters, UseToolbarReturnType, UseToolbarSubInfo } from "../use-toolbar.js";
import { GenericComponentProps, useComponent, useDefault } from "./util.js";

export type ToolbarProps<ToolbarContainerElement extends Element, ToolbarChildElement extends Element, LabelElement extends Element, M extends UseToolbarSubInfo<ToolbarChildElement>> = GenericComponentProps<
    UseToolbarReturnType<ToolbarContainerElement, ToolbarChildElement, LabelElement, M>,
    Get11<UseToolbarParameters<ToolbarContainerElement, ToolbarChildElement, M>, "linearNavigationParameters", "rovingTabIndexParameters", "typeaheadNavigationParameters", "labelParameters", "toolbarParameters", "singleSelectionParameters", "refElementParameters", "singleSelectionParameters", "multiSelectionParameters", "singleSelectionDeclarativeParameters", "processedIndexManglerParameters">,
    "orientation" | "ariaLabel" | "singleSelectionMode" | "multiSelectionMode"
>;

export type ToolbarChildProps<ToolbarChildElement extends Element, M extends UseToolbarSubInfo<ToolbarChildElement>> = GenericComponentProps<
    UseToolbarChildReturnType<ToolbarChildElement, UseToolbarSubInfo<ToolbarChildElement>>,
    Get8<UseToolbarChildParameters<ToolbarChildElement, UseToolbarSubInfo<ToolbarChildElement>>, "textContentParameters", "toolbarChildParameters", "info", "hasCurrentFocusParameters", "refElementParameters", "singleSelectionChildParameters", "multiSelectionChildDeclarativeParameters", "multiSelectionChildParameters">,
    "disabledProp" | "index"
> & { info?: OmitStrong<M, keyof UseToolbarSubInfo<ToolbarChildElement>> };

// TODO: Are there performance/sanity implications for having one context per primitive?
// const UntabbableContext = createContext(false);
//const AriaPropNameContext = createContext<UseToolbarParameters<any, any, any>["singleSelectionParameters"]["singleSelectionAriaPropName"]>("aria-selected")
//const SelectionModeContext = createContext<UseToolbarParameters<any, any, any>["singleSelectionParameters"]["singleSelectionMode"]>("focus");
const ToolbarContext = createContext<UseToolbarContext<any, any>>(null!);
const ProcessedChildrenContext = createContext<UseProcessedChildrenContext>(null!);

export const Toolbar = /* @__PURE__ */ memo((function ToolbarU<ContainerElement extends Element, ChildElement extends Element, LabelElement extends Element>({
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
    onUnmount,
    getSortValueAt,
    compare,
    getIndex
}: ToolbarProps<ContainerElement, ChildElement, LabelElement, UseToolbarSubInfo<ChildElement>>) {
    getSortValueAt ??= identity;
    useEnsureStability("Toolbar", getSortValueAt);

    const r = useToolbar<ContainerElement, ChildElement, LabelElement>({
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
        processedIndexManglerParameters: { getSortValueAt, compare, getIndex: useDefault("getIndex", getIndex) }
    });


    return (
        useComponent<UseToolbarReturnType<ContainerElement, ChildElement, LabelElement, UseToolbarSubInfo<ChildElement>>>(
            imperativeHandle,
            render,
            ToolbarContext,
            r)
    )
}))


export const ToolbarChild = /* @__PURE__ */ memo((function ToolbarChild<ToolbarChildElement extends Element>({
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
    multiSelectionDisabled,
    singleSelectionDisabled,
    onTextContentChange,
    multiSelected,
    onMultiSelectedChange,
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
            multiSelectionChildParameters: { multiSelectionDisabled: multiSelectionDisabled || false },
            multiSelectionChildDeclarativeParameters: { multiSelected: multiSelected ?? null, onMultiSelectedChange },

        }));
}));
