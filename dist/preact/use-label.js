import { returnTrue, useMergedProps, usePress, useRandomDualIds, useRefElement } from "preact-prop-helpers/preact";
import { monitored, noop } from "./props.js";
/**
 * @compositeParams
 */
export function useLabel({ randomIdInputParameters, randomIdLabelParameters, labelParameters: { tagInput, tagLabel, ariaLabel, labelPosition, onLabelClick } }) {
    const nativeHTMLBehavior = (tagInput == "input" && tagLabel == "label" && labelPosition != "wrapping");
    const synthetic = !nativeHTMLBehavior;
    /**
     * |Synthetic?|Position    |Input Prop   |Label Prop|
     * |----------|------------|-------------|----------|
     * |N         |`"separate"`|-            |`for`     |
     * |N         |`"wrapping"`|-            |-         |
     * |Y         |`"separate"`|`labelled-by`|-         |
     * |Y         |`"wrapping"`|`labelled-by`|-         |
     *
     */
    let _comment;
    const { propsInput, propsLabel, randomIdInputReturn, randomIdLabelReturn } = useRandomDualIds({
        randomIdInputParameters: { ...randomIdInputParameters, otherReferencerProp: !synthetic && labelPosition === "separate" ? "for" : null },
        randomIdLabelParameters: { ...randomIdLabelParameters, otherReferencerProp: synthetic ? "aria-labelledby" : null },
    });
    const { refElementReturn, propsStable: propsRef } = useRefElement({ refElementParameters: {} });
    if (labelPosition == 'none') {
        // When we set the aria-label, intentionally clobber element-based labels (for example, in case they don't exist).
        propsInput["aria-label"] = (ariaLabel);
        propsInput["aria-labelledby"] = undefined;
        propsLabel["for"] = undefined;
    }
    const { pressReturn, props: propsPress } = usePress({
        pressParameters: {
            excludeEnter: returnTrue,
            excludeSpace: returnTrue,
            onPressSync: onLabelClick,
            focusSelf: noop,
            allowRepeatPresses: false,
            excludePointer: null,
            longPressThreshold: null,
            onPressingChange: null
        },
        refElementReturn
    });
    return {
        pressReturn,
        propsInput,
        propsLabel: useMergedProps(propsLabel, propsRef, propsPress),
        randomIdInputReturn,
        randomIdLabelReturn,
    };
}
/**
 * Shortcut for `useLabel` that assumes we're just never working with native HTML `input` and `label` elements. So for labelling guaranteably non-native elements.
 *
 * @compositeParams
 */
export const useLabelSynthetic = monitored(function useLabelSynthetic({ labelParameters: { ariaLabel, onLabelClick }, ...rest }) {
    return useLabel({
        labelParameters: {
            ariaLabel,
            labelPosition: ariaLabel == null ? "separate" : "none",
            tagInput: "div",
            tagLabel: "div",
            onLabelClick
        },
        ...rest
    });
});
//# sourceMappingURL=use-label.js.map