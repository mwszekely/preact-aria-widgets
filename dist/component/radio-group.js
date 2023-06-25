import { jsx as _jsx } from "preact/jsx-runtime";
import { createContext } from "preact";
import { useStableGetter } from "preact-prop-helpers";
import { useImperativeHandle } from "preact/hooks";
import { useContextWithWarning } from "../props.js";
import { useRadio, useRadioGroup } from "../use-radio-group.js";
import { memoForwardRef, useDefault } from "./util.js";
const RadioContext = createContext(null);
export const RadioGroup = memoForwardRef(function RadioGroup({ render, name, onSelectedValueChange, collator, disableHomeEndKeys, arrowKeyDirection, noTypeahead, typeaheadTimeout, ariaLabel, compare, staggered, getIndex, navigatePastEnd, navigatePastStart, selectedValue, untabbable, onTabbableIndexChange, pageNavigationSize, }, ref) {
    untabbable ??= false;
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
            untabbable
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
export const Radio = memoForwardRef(function Radio({ unselectable, disabled, index, render, value, ariaLabel, focusSelf, labelPosition, untabbable, tagInput, tagLabel, getText }, ref) {
    const defaultFocusSelf = () => info.checkboxLikeReturn.focusSelf();
    focusSelf ??= defaultFocusSelf;
    const context = useContextWithWarning(RadioContext, "radio group");
    console.assert(context != null, `This Radio is not contained within a RadioGroup`);
    const getValue = useStableGetter(value);
    const info = useRadio({
        sortableChildParameters: { getSortValue: getValue },
        radioParameters: { value },
        checkboxLikeParameters: { disabled: disabled ?? false },
        info: { index, focusSelf, untabbable: untabbable || false, unselectable: !!unselectable },
        context,
        labelParameters: { ariaLabel, labelPosition, tagInput, tagLabel },
        textContentParameters: { getText: useDefault("getText", getText) },
        pressParameters: null
    });
    useImperativeHandle(ref, () => info);
    return render(info);
});
//# sourceMappingURL=radio-group.js.map