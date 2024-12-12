import { assertEmptyObject, createContext, identity, memo, useEnsureStability } from "preact-prop-helpers";
import { useContextWithWarning } from "../props.js";
import { useCheckboxGroup, useCheckboxGroupChild, useCheckboxGroupParent } from "../use-checkbox-group.js";
import { useComponent, useDefault } from "./util.js";
const UseCheckboxGroupChildContext = createContext(null);
export const CheckboxGroup = /* @__PURE__ */ memo((function CheckboxGroup({ render, collator, disableHomeEndKeys, noTypeahead, typeaheadTimeout, onTabbableIndexChange, untabbable, navigatePastEnd, navigatePastStart, pageNavigationSize, orientation, onNavigateLinear, onNavigateTypeahead, imperativeHandle, onElementChange, onMount, onUnmount, multiSelectionAriaPropName, multiSelectionMode, onSelectionChange, getSortValueAt, compare, getIndex, ...void1 }) {
    getSortValueAt ??= identity;
    useEnsureStability("CheckboxGroup", getSortValueAt);
    assertEmptyObject(void1);
    return useComponent(imperativeHandle, render, UseCheckboxGroupChildContext, useCheckboxGroup({
        linearNavigationParameters: {
            onNavigateLinear,
            navigatePastEnd: navigatePastEnd ?? "wrap",
            navigatePastStart: navigatePastStart ?? "wrap",
            disableHomeEndKeys: useDefault("disableHomeEndKeys", disableHomeEndKeys),
            pageNavigationSize: useDefault("pageNavigationSize", pageNavigationSize)
        },
        checkboxGroupParameters: {
            orientation: orientation ?? "vertical"
        },
        rovingTabIndexParameters: {
            onTabbableIndexChange,
            untabbable: untabbable || false
        },
        typeaheadNavigationParameters: {
            onNavigateTypeahead,
            collator: useDefault("collator", collator),
            noTypeahead: useDefault("noTypeahead", noTypeahead),
            typeaheadTimeout: useDefault("typeaheadTimeout", typeaheadTimeout)
        },
        refElementParameters: { onElementChange, onMount, onUnmount },
        multiSelectionParameters: { multiSelectionAriaPropName, multiSelectionMode: multiSelectionMode || "activation", onSelectionChange },
        processedIndexManglerParameters: {
            compare,
            getIndex: useDefault("getIndex", getIndex),
            getSortValueAt
        }
    }));
}));
export const CheckboxGroupParent = /* @__PURE__ */ memo((function CheckboxGroupParent({ render, index, focusSelf, untabbable, imperativeHandle, getText, onCurrentFocusedChanged, onCurrentFocusedInnerChanged, onElementChange, onMount, onUnmount, initiallyMultiSelected, multiSelectionDisabled, onMultiSelectChange, singleSelectionDisabled, onTextContentChange, 
//info,
..._rest }) {
    const context = useContextWithWarning(UseCheckboxGroupChildContext, "checkbox group");
    console.assert(context != null, `This CheckboxGroupParent is not contained within a CheckboxGroup`);
    return (useComponent(imperativeHandle, render, null, useCheckboxGroupParent({
        info: {
            index,
            untabbable: untabbable || false,
            focusSelf,
        },
        context,
        textContentParameters: {
            getText: useDefault("getText", getText),
            onTextContentChange
        },
        hasCurrentFocusParameters: { onCurrentFocusedChanged, onCurrentFocusedInnerChanged },
        refElementParameters: { onElementChange, onMount, onUnmount },
        multiSelectionChildParameters: { multiSelectionDisabled: multiSelectionDisabled || false, initiallyMultiSelected: initiallyMultiSelected || false, onMultiSelectChange },
        singleSelectionChildParameters: { singleSelectionDisabled: singleSelectionDisabled || false }
    })));
}));
export const CheckboxGroupChild = /* @__PURE__ */ memo((function CheckboxGroupChild({ index, render, checked, onChangeFromParent, untabbable, getText, focusSelf, 
//info,
imperativeHandle, onCurrentFocusedChanged, onCurrentFocusedInnerChanged, onElementChange, onMount, onUnmount, multiSelectionDisabled, onMultiSelectChange, onTextContentChange, ...void1 }) {
    assertEmptyObject(void1);
    return useComponent(imperativeHandle, render, null, useCheckboxGroupChild({
        checkboxGroupChildParameters: {
            checked: checked,
            onChangeFromParent
        },
        info: {
            index,
            untabbable: untabbable || false,
            focusSelf
        },
        textContentParameters: {
            getText: useDefault("getText", getText),
            onTextContentChange,
        },
        context: useContextWithWarning(UseCheckboxGroupChildContext, "checkbox group"),
        hasCurrentFocusParameters: {
            onCurrentFocusedChanged,
            onCurrentFocusedInnerChanged
        },
        refElementParameters: {
            onElementChange,
            onMount,
            onUnmount
        },
        multiSelectionChildParameters: { multiSelectionDisabled: multiSelectionDisabled || false, onMultiSelectChange },
    }));
}));
//# sourceMappingURL=checkbox-group.js.map