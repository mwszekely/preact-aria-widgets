import { jsx as _jsx } from "preact/jsx-runtime";
import { createContext } from "preact";
import { useStableGetter } from "preact-prop-helpers";
import { useContext, useImperativeHandle } from "preact/hooks";
import { useRadio, useRadioGroup } from "../use-radio-group.js";
import { memoForwardRef, useDefault } from "./util.js";
const RadioContext = createContext(null);
export const RadioGroup = memoForwardRef(function RadioGroup({ render, name, onSelectedValueChange, collator, disableHomeEndKeys, arrowKeyDirection, noTypeahead, typeaheadTimeout, ariaLabel, compare, staggered, getIndex, navigatePastEnd, navigatePastStart, selectedValue, untabbable, onTabbableIndexChange, pageNavigationSize, }, ref) {
    const info = useRadioGroup({
        linearNavigationParameters: {
            arrowKeyDirection: arrowKeyDirection ?? "either",
            navigatePastEnd: navigatePastEnd ?? "wrap",
            navigatePastStart: navigatePastStart ?? "wrap",
            disableHomeEndKeys: useDefault("disableHomeEndKeys", disableHomeEndKeys),
            pageNavigationSize: useDefault("pageNavigationSize", pageNavigationSize)
        },
        staggeredChildrenParameters: { staggered: staggered || false },
        labelParameters: { ariaLabel },
        rearrangeableChildrenParameters: { getIndex: useDefault("getIndex", getIndex) },
        sortableChildrenParameters: { compare: compare ?? null },
        radioGroupParameters: { name, onSelectedValueChange, selectedValue },
        rovingTabIndexParameters: {
            onTabbableIndexChange: onTabbableIndexChange ?? null,
            untabbable: untabbable ?? false
        },
        typeaheadNavigationParameters: {
            collator: useDefault("collator", collator),
            noTypeahead: useDefault("noTypeahead", noTypeahead),
            typeaheadTimeout: useDefault("typeaheadTimeout", typeaheadTimeout)
        },
    });
    useImperativeHandle(ref, () => info);
    return (_jsx(RadioContext.Provider, { value: info.context, children: render(info) }));
});
export const Radio = memoForwardRef(function Radio({ disabled, index, render, value, ariaLabel, focusSelf, labelPosition, hidden, tagInput, tagLabel, getText }, ref) {
    const context = useContext(RadioContext);
    console.assert(context != null, `This Radio is not contained within a RadioGroup`);
    const getValue = useStableGetter(value);
    const defaultFocusSelf = () => info.checkboxLikeReturn.focusSelf();
    const info = useRadio({
        rovingTabIndexChildParameters: { hidden: hidden ?? false },
        sortableChildParameters: { getSortValue: getValue },
        radioParameters: { value },
        checkboxLikeParameters: { disabled: disabled ?? false },
        info: { index, focusSelf: focusSelf ?? defaultFocusSelf },
        context,
        labelParameters: { ariaLabel, labelPosition, tagInput, tagLabel },
        singleSelectionChildParameters: { disabled: !!disabled },
        textContentParameters: { getText: useDefault("getText", getText) }
    });
    useImperativeHandle(ref, () => info);
    return render(info);
});
//# sourceMappingURL=radio-group.js.map