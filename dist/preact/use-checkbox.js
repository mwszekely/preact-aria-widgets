import { assertEmptyObject, enhanceEvent, useMergedProps, useRefElement, useStableCallback } from "preact-prop-helpers/preact";
import { Prefices, monitored } from "./props.js";
import { useCheckboxLike } from "./use-checkbox-like.js";
/**
 * Implements a [Checkbox](https://www.w3.org/WAI/ARIA/apg/patterns/checkbox/) pattern.
 *
 * @compositeParams
 */
export const useCheckbox = monitored(function useCheckbox({ checkboxLikeParameters: { checked, disabled, ...void2 }, checkboxParameters: { onCheckedChange, ...void4 }, labelParameters, pressParameters, ...void1 }) {
    const { tagInput, labelPosition } = labelParameters;
    const { refElementReturn: refElementInputReturn, propsStable: propsRefInput } = useRefElement({ refElementParameters: {} });
    const { refElementReturn: refElementLabelReturn, propsStable: propsRefLabel } = useRefElement({ refElementParameters: {} });
    const { propsInput, propsLabel, checkboxLikeInputReturn, checkboxLikeLabelReturn, checkboxLikeReturn, pressInputReturn, pressLabelReturn, pressReturn, randomIdInputReturn, randomIdLabelReturn, ...void3 } = useCheckboxLike({
        randomIdInputParameters: { prefix: Prefices.checkboxLikeInput },
        randomIdLabelParameters: { prefix: Prefices.checkboxLikeLabel },
        refElementInputReturn,
        refElementLabelReturn,
        checkboxLikeParameters: { role: "checkbox", checked, disabled },
        pressParameters: {
            onPressSync: useStableCallback(e => { onCheckedChange?.(enhanceEvent(e, { checked: !checked, previous: checked })); }),
            ...pressParameters,
        },
        labelParameters,
    });
    assertEmptyObject(void1);
    assertEmptyObject(void2);
    assertEmptyObject(void3);
    assertEmptyObject(void4);
    return {
        checkboxReturn: { propsUnstable: { type: (tagInput == "input" && labelPosition != "wrapping" ? "checkbox" : undefined) } },
        propsInput: useMergedProps(propsInput, propsRefInput),
        propsLabel: useMergedProps(propsLabel, propsRefLabel),
        checkboxLikeInputReturn,
        checkboxLikeLabelReturn,
        checkboxLikeReturn,
        pressInputReturn,
        pressLabelReturn,
        pressReturn,
        randomIdInputReturn,
        randomIdLabelReturn
    };
});
//# sourceMappingURL=use-checkbox.js.map