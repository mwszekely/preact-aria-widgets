import { returnFalse, useMergedProps, useRefElement, useStableCallback } from "preact-prop-helpers";
import { debugLog, enhanceEvent, Prefices } from "./props.js";
import { useCheckboxLike } from "./use-checkbox-like.js";
export function useCheckbox({ checkboxParameters: { onCheckedChange }, checkboxLikeParameters, labelParameters, }) {
    debugLog("useCheckbox");
    const { tagInput, labelPosition } = labelParameters;
    const { checked } = checkboxLikeParameters;
    const { refElementReturn: refElementInputReturn, propsStable: propsRefInput } = useRefElement({});
    const { refElementReturn: refElementLabelReturn, propsStable: propsRefLabel } = useRefElement({});
    const onInputEnhanced = useStableCallback((e) => onCheckedChange?.(enhanceEvent(e, { checked: !checked })));
    const { propsInput, propsLabel, ...ret } = useCheckboxLike({
        randomIdInputParameters: { prefix: Prefices.checkboxLikeInput },
        randomIdLabelParameters: { prefix: Prefices.checkboxLikeLabel },
        refElementInputReturn,
        refElementLabelReturn,
        checkboxLikeParameters: { role: "checkbox", onInput: onInputEnhanced, ...checkboxLikeParameters },
        pressParameters: { excludeSpace: returnFalse },
        labelParameters
    });
    return {
        checkboxReturn: { propsUnstable: { type: (tagInput == "input" && labelPosition != "wrapping" ? "checkbox" : undefined) } },
        propsInput: useMergedProps(propsInput, propsRefInput),
        propsLabel: useMergedProps(propsLabel, propsRefLabel),
        ...ret
    };
}
//# sourceMappingURL=use-checkbox.js.map