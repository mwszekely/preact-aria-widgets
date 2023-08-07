import { createContext } from "preact";
import { assertEmptyObject, memo, useStableGetter } from "preact-prop-helpers";
import { useContextWithWarning } from "../props.js";
import { useRadio, useRadioGroup } from "../use-radio-group.js";
import { useComponent, useDefault } from "./util.js";
const RadioContext = createContext(null);
export const RadioGroup = memo(function RadioGroup({ render, name, collator, disableHomeEndKeys, arrowKeyDirection, noTypeahead, typeaheadTimeout, ariaLabel, compare, staggered, getIndex, navigatePastEnd, navigatePastStart, selectedValue, untabbable, onTabbableIndexChange, onNavigateLinear, onNavigateTypeahead, pageNavigationSize, onElementChange, onMount, onUnmount, imperativeHandle, onSelectedValueChange, ...void1 }) {
    untabbable ??= false;
    assertEmptyObject(void1);
    return useComponent(imperativeHandle, render, RadioContext, useRadioGroup({
        linearNavigationParameters: {
            onNavigateLinear,
            arrowKeyDirection: arrowKeyDirection ?? "either",
            navigatePastEnd: navigatePastEnd ?? "wrap",
            navigatePastStart: navigatePastStart ?? "wrap",
            disableHomeEndKeys: useDefault("disableHomeEndKeys", disableHomeEndKeys),
            pageNavigationSize: useDefault("pageNavigationSize", pageNavigationSize)
        },
        staggeredChildrenParameters: { staggered: staggered || false },
        labelParameters: { ariaLabel },
        rearrangeableChildrenParameters: { getIndex: useDefault("getIndex", getIndex) },
        sortableChildrenParameters: { compare },
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
});
export const Radio = memo(function Radio({ disabled, index, render, value, ariaLabel, labelPosition, untabbable, tagInput, tagLabel, getText, longPressThreshold, onElementChange, onMount, onUnmount, onCurrentFocusedChanged, onCurrentFocusedInnerChanged, imperativeHandle, ...void1 }) {
    assertEmptyObject(void1);
    const context = useContextWithWarning(RadioContext, "radio group");
    console.assert(context != null, `This Radio is not contained within a RadioGroup`);
    const getValue = useStableGetter(value);
    return useComponent(imperativeHandle, render, null, useRadio({
        radioParameters: { value },
        checkboxLikeParameters: { disabled: disabled ?? false },
        info: { index, untabbable: untabbable || false, getSortValue: getValue },
        context,
        labelParameters: { ariaLabel, labelPosition, tagInput, tagLabel },
        textContentParameters: { getText: useDefault("getText", getText) },
        pressParameters: { longPressThreshold },
        hasCurrentFocusParameters: { onCurrentFocusedChanged, onCurrentFocusedInnerChanged },
        refElementParameters: { onElementChange, onMount, onUnmount }
    }));
});
//# sourceMappingURL=radio-group.js.map