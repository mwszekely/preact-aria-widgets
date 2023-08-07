import { createContext } from "preact";
import { assertEmptyObject, memo } from "preact-prop-helpers";
import { useContextWithWarning } from "../props.js";
import { useCheckboxGroup, useCheckboxGroupChild, useCheckboxGroupParent } from "../use-checkbox-group.js";
import { useComponent, useDefault } from "./util.js";
const UseCheckboxGroupChildContext = createContext(null);
export const CheckboxGroup = memo(function CheckboxGroup({ render, collator, disableHomeEndKeys, noTypeahead, typeaheadTimeout, onTabbableIndexChange, compare, staggered, getIndex, untabbable, navigatePastEnd, navigatePastStart, pageNavigationSize, orientation, onNavigateLinear, onNavigateTypeahead, imperativeHandle, onElementChange, onMount, onUnmount, multiSelectionAriaPropName, multiSelectionMode, onSelectionChange, ...void1 }) {
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
        staggeredChildrenParameters: {
            staggered: staggered || false
        },
        rearrangeableChildrenParameters: {
            getIndex: useDefault("getIndex", getIndex)
        },
        rovingTabIndexParameters: {
            onTabbableIndexChange,
            untabbable: untabbable || false
        },
        sortableChildrenParameters: {
            compare,
        },
        typeaheadNavigationParameters: {
            onNavigateTypeahead,
            collator: useDefault("collator", collator),
            noTypeahead: useDefault("noTypeahead", noTypeahead),
            typeaheadTimeout: useDefault("typeaheadTimeout", typeaheadTimeout)
        },
        refElementParameters: { onElementChange, onMount, onUnmount },
        multiSelectionParameters: { multiSelectionAriaPropName, multiSelectionMode: multiSelectionMode || "activation", onSelectionChange }
    }));
});
export const CheckboxGroupParent = memo(function CheckboxGroupParent({ render, index, focusSelf, untabbable, getSortValue, imperativeHandle, getText, onCurrentFocusedChanged, onCurrentFocusedInnerChanged, onElementChange, onMount, onUnmount, initiallyMultiSelected, multiSelectionDisabled, onMultiSelectChange, singleSelectionDisabled, 
//info,
..._rest }) {
    const context = useContextWithWarning(UseCheckboxGroupChildContext, "checkbox group");
    console.assert(context != null, `This CheckboxGroupParent is not contained within a CheckboxGroup`);
    return (useComponent(imperativeHandle, render, null, useCheckboxGroupParent({
        info: {
            index,
            untabbable: untabbable || false,
            focusSelf,
            getSortValue,
        },
        context,
        textContentParameters: {
            getText: useDefault("getText", getText)
        },
        hasCurrentFocusParameters: { onCurrentFocusedChanged, onCurrentFocusedInnerChanged },
        refElementParameters: { onElementChange, onMount, onUnmount },
        multiSelectionChildParameters: { multiSelectionDisabled: multiSelectionDisabled || false, initiallyMultiSelected: initiallyMultiSelected || false, onMultiSelectChange },
        singleSelectionChildParameters: { singleSelectionDisabled: singleSelectionDisabled || false }
    })));
});
export const CheckboxGroupChild = (function CheckboxGroupChild({ index, render, checked, onChangeFromParent, getSortValue, untabbable, getText, focusSelf, 
//info,
imperativeHandle, onCurrentFocusedChanged, onCurrentFocusedInnerChanged, onElementChange, onMount, onUnmount, multiSelectionDisabled, onMultiSelectChange, ...void1 }) {
    assertEmptyObject(void1);
    return useComponent(imperativeHandle, render, null, useCheckboxGroupChild({
        checkboxGroupChildParameters: {
            checked: checked,
            onChangeFromParent
        },
        info: {
            index,
            untabbable: untabbable || false,
            focusSelf,
            getSortValue
        },
        textContentParameters: {
            getText: useDefault("getText", getText)
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
});
//# sourceMappingURL=checkbox-group.js.map