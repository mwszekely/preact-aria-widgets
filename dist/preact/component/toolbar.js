import { assertEmptyObject, createContext, focus, memo, useCallback } from "preact-prop-helpers";
import { useContextWithWarning } from "../props.js";
import { useToolbar, useToolbarChild } from "../use-toolbar.js";
import { useComponent, useComponentC, useDefault } from "./util.js";
// TODO: Are there performance/sanity implications for having one context per primitive?
// const UntabbableContext = createContext(false);
//const AriaPropNameContext = createContext<UseToolbarParameters<any, any, any>["singleSelectionParameters"]["singleSelectionAriaPropName"]>("aria-selected")
//const SelectionModeContext = createContext<UseToolbarParameters<any, any, any>["singleSelectionParameters"]["singleSelectionMode"]>("focus");
const ToolbarContext = createContext(null);
const ProcessedChildrenContext = createContext(null);
export const Toolbar = /* @__PURE__ */ memo((function ToolbarU({ render, role, collator, disableHomeEndKeys, disabled, navigatePastEnd, navigatePastStart, pageNavigationSize, singleSelectedIndex, onSingleSelectedIndexChange, orientation, noTypeahead, onTabbableIndexChange, typeaheadTimeout, ariaLabel, imperativeHandle, multiSelectionAriaPropName, multiSelectionMode, onSelectionChange, singleSelectionAriaPropName, singleSelectionMode, untabbable, onNavigateLinear, onNavigateTypeahead, onElementChange, onMount, onUnmount }) {
    return (useComponentC(imperativeHandle, render, ToolbarContext, ProcessedChildrenContext, useToolbar({
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
    })));
}));
export const ToolbarChild = /* @__PURE__ */ memo((function ToolbarChild({ index, render, focusSelf, getText, disabledProp, untabbable, onElementChange, onMount, onUnmount, onCurrentFocusedChanged, onCurrentFocusedInnerChanged, imperativeHandle, info: uinfo, initiallyMultiSelected, multiSelectionDisabled, onMultiSelectChange, singleSelectionDisabled, onTextContentChange, ...void1 }) {
    const context = useContextWithWarning(ToolbarContext, "toolbar");
    const focusSelfDefault = useCallback((e) => { focus(e); }, []);
    focusSelf ??= focusSelfDefault;
    assertEmptyObject(void1);
    return useComponent(imperativeHandle, render, null, useToolbarChild({
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
//# sourceMappingURL=toolbar.js.map