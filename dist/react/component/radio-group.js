import { createContext } from "preact";
import { assertEmptyObject, memo } from "preact-prop-helpers/react";
import { useContextWithWarning } from "../props.js";
import { useRadio, useRadioGroup } from "../use-radio-group.js";
import { useComponent, useDefault } from "./util.js";
const RadioContext = createContext(null);
//const ProcessedChildrenContext = createContext<UseProcessedChildrenContext>(null!);
export const RadioGroup = memo((function RadioGroup({ render, name, collator, disableHomeEndKeys, arrowKeyDirection, noTypeahead, typeaheadTimeout, ariaLabel, navigatePastEnd, navigatePastStart, selectedValue, untabbable, onTabbableIndexChange, onNavigateLinear, onNavigateTypeahead, pageNavigationSize, onElementChange, onMount, onUnmount, imperativeHandle, onSelectedValueChange, singleSelectionMode, ...void1 }) {
    untabbable ??= false;
    assertEmptyObject(void1);
    return useComponent(imperativeHandle, render, RadioContext, useRadioGroup({
        singleSelectionParameters: { singleSelectionMode: singleSelectionMode ?? "focus" },
        linearNavigationParameters: {
            onNavigateLinear,
            arrowKeyDirection: arrowKeyDirection ?? "either",
            navigatePastEnd: navigatePastEnd ?? "wrap",
            navigatePastStart: navigatePastStart ?? "wrap",
            disableHomeEndKeys: useDefault("disableHomeEndKeys", disableHomeEndKeys),
            pageNavigationSize: useDefault("pageNavigationSize", pageNavigationSize)
        },
        labelParameters: { ariaLabel },
        radioGroupParameters: { name, selectedValue, onSelectedValueChange },
        rovingTabIndexParameters: {
            onTabbableIndexChange,
            untabbable
        },
        typeaheadNavigationParameters: {
            onNavigateTypeahead,
            collator: useDefault("collator", collator),
            noTypeahead: useDefault("noTypeahead", noTypeahead),
            typeaheadTimeout: useDefault("typeaheadTimeout", typeaheadTimeout)
        },
        refElementParameters: { onElementChange, onMount, onUnmount },
    }));
}));
export const Radio = memo((function Radio({ disabled, index, render, value, ariaLabel, labelPosition, untabbable, tagInput, tagLabel, getText, longPressThreshold, onElementChange, onMount, onUnmount, onCurrentFocusedChanged, onCurrentFocusedInnerChanged, imperativeHandle, onTextContentChange, ...void1 }) {
    assertEmptyObject(void1);
    const context = useContextWithWarning(RadioContext, "radio group");
    console.assert(context != null, `This Radio is not contained within a RadioGroup`);
    //const getValue = useStableGetter(value);
    return useComponent(imperativeHandle, render, null, useRadio({
        radioParameters: { value },
        checkboxLikeParameters: { disabled: disabled ?? false },
        info: { index, untabbable: untabbable || false },
        context,
        labelParameters: { ariaLabel, labelPosition, tagInput, tagLabel },
        textContentParameters: { getText: useDefault("getText", getText), onTextContentChange },
        pressParameters: { longPressThreshold },
        hasCurrentFocusParameters: { onCurrentFocusedChanged, onCurrentFocusedInnerChanged },
        refElementParameters: { onElementChange, onMount, onUnmount }
    }));
}));
//# sourceMappingURL=radio-group.js.map