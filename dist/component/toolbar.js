import { jsx as _jsx } from "preact/jsx-runtime";
import { createContext } from "preact";
import { assertEmptyObject, focus, memo } from "preact-prop-helpers";
import { useCallback, useImperativeHandle } from "preact/hooks";
import { useContextWithWarning } from "../props.js";
import { useToolbar, useToolbarChild } from "../use-toolbar.js";
import { useComponent, useDefault } from "./util.js";
// TODO: Are there performance/sanity implications for having one context per primitive?
const UntabbableContext = createContext(false);
//const AriaPropNameContext = createContext<UseToolbarParameters<any, any, any>["singleSelectionParameters"]["singleSelectionAriaPropName"]>("aria-selected")
//const SelectionModeContext = createContext<UseToolbarParameters<any, any, any>["singleSelectionParameters"]["singleSelectionMode"]>("focus");
const ToolbarContext = createContext(null);
export const Toolbar = memo(function ToolbarU({ render, role, collator, disableHomeEndKeys, disabled, compare, getIndex, navigatePastEnd, navigatePastStart, pageNavigationSize, singleSelectedIndex, onSingleSelectedIndexChange, orientation, noTypeahead, onTabbableIndexChange, typeaheadTimeout, staggered, ariaLabel, imperativeHandle, multiSelectionAriaPropName, multiSelectionMode, onSelectionChange, singleSelectionAriaPropName, singleSelectionMode, untabbable, onNavigateLinear, onNavigateTypeahead, onElementChange, onMount, onUnmount }, ref) {
    const listboxReturnType = useToolbar({
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
            singleSelectedIndex,
            onSingleSelectedIndexChange
        },
        staggeredChildrenParameters: { staggered: staggered || false },
        rovingTabIndexParameters: { onTabbableIndexChange, untabbable: untabbable || false },
        typeaheadNavigationParameters: {
            onNavigateTypeahead,
            collator: useDefault("collator", collator),
            noTypeahead: useDefault("noTypeahead", noTypeahead),
            typeaheadTimeout: useDefault("typeaheadTimeout", typeaheadTimeout)
        },
        labelParameters: { ariaLabel },
        singleSelectionParameters: { singleSelectionAriaPropName, singleSelectionMode: useDefault("singleSelectionMode", singleSelectionMode) },
        multiSelectionParameters: { multiSelectionAriaPropName, multiSelectionMode: useDefault("multiSelectionMode", multiSelectionMode), onSelectionChange },
        refElementParameters: { onElementChange, onMount, onUnmount },
    });
    useImperativeHandle(ref, () => listboxReturnType);
    return (_jsx(ToolbarContext.Provider, { value: listboxReturnType.context, children: render(listboxReturnType) }));
});
export function ToolbarChild({ index, render, focusSelf, getSortValue, getText, disabledProp, untabbable, onElementChange, onMount, onUnmount, onCurrentFocusedChanged, onCurrentFocusedInnerChanged, imperativeHandle, info: uinfo, initiallyMultiSelected, multiSelectionDisabled, onMultiSelectChange, singleSelectionDisabled, ...void1 }) {
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
            getSortValue
        },
        textContentParameters: { getText: useDefault("getText", getText) },
        hasCurrentFocusParameters: { onCurrentFocusedChanged, onCurrentFocusedInnerChanged },
        refElementParameters: { onElementChange, onMount, onUnmount },
        singleSelectionChildParameters: { singleSelectionDisabled: singleSelectionDisabled || false },
        multiSelectionChildParameters: { multiSelectionDisabled: multiSelectionDisabled || false, initiallyMultiSelected: initiallyMultiSelected || false, onMultiSelectChange }
    }));
}
;
//# sourceMappingURL=toolbar.js.map