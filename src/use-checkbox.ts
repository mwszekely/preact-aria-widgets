import { ElementProps, Nullable, TargetedOmit, assertEmptyObject, enhanceEvent, monitorCallCount, useMergedProps, useRefElement, useStableCallback } from "preact-prop-helpers";
import { EnhancedEventHandler, OmitStrong, Prefices, TargetedEnhancedEvent } from "./props.js";
import { UseCheckboxLikeParameters, UseCheckboxLikeReturnType, useCheckboxLike } from "./use-checkbox-like.js";
import { LabelPosition } from "./use-label.js";

export interface CheckboxChangeEventDetail {
    checked: boolean;
};

// These are not typed because they could come from the input OR the label.
export type TargetedCheckboxChangeEvent = TargetedEnhancedEvent<Event, CheckboxChangeEventDetail>;
export type CheckboxChangeEventHandler = EnhancedEventHandler<Event, CheckboxChangeEventDetail>;
export interface UseCheckboxParametersSelf {
    onCheckedChange: Nullable<CheckboxChangeEventHandler>;
    //onCheckedChange: Nullable<CheckboxChangeEventHandler>;
}

export interface UseCheckboxParameters<LP extends LabelPosition, I extends Element, L extends Element> extends
    OmitStrong<UseCheckboxLikeParameters<LP, I, L, boolean | "mixed">, "pressParameters" | "checkboxLikeParameters" | "randomIdInputParameters" | "randomIdLabelParameters" | "refElementLabelReturn" | "refElementInputReturn">,
    TargetedOmit<UseCheckboxLikeParameters<LP, I, L, boolean | "mixed">, "pressParameters", "onPressSync">,
    //OmitStrong<UseProgressWithHandlerParameters<TargetedCheckboxChangeEvent, CheckboxCheckedType, ProgressIndicatorType, ProgressLabelType>, "asyncHandlerParameters" | "labelParameters">,
    //TargetedOmit<UseProgressWithHandlerParameters<TargetedCheckboxChangeEvent, CheckboxCheckedType, ProgressIndicatorType, ProgressLabelType>, "asyncHandlerParameters", "capture">,
    TargetedOmit<UseCheckboxLikeParameters<LP, I, L, boolean | "mixed">, "checkboxLikeParameters", "role"> {
    checkboxParameters: UseCheckboxParametersSelf;
}

export interface UseCheckboxReturnTypeSelf<InputType extends Element> { propsUnstable: ElementProps<InputType> }

export interface UseCheckboxReturnType<InputType extends Element, LabelType extends Element> extends
    //OmitStrong<UseProgressWithHandlerReturnType<TargetedCheckboxChangeEvent, CheckboxCheckedType, ProgressIndicatorType, ProgressLabelType>, never>,
    UseCheckboxLikeReturnType<InputType, LabelType> {
    checkboxReturn: UseCheckboxReturnTypeSelf<InputType>;
}

/**
 * Implements a [Checkbox](https://www.w3.org/WAI/ARIA/apg/patterns/checkbox/) pattern.
 * 
 * @compositeParams
 */
export function useCheckbox<LP extends LabelPosition, InputType extends Element, LabelType extends Element>({
    checkboxLikeParameters: { checked, disabled, ...void2 },
    checkboxParameters: { onCheckedChange, ...void4 },
    labelParameters,
    pressParameters,
    ...void1
}: UseCheckboxParameters<LP, InputType, LabelType>): UseCheckboxReturnType<InputType, LabelType> {
    monitorCallCount(useCheckbox);

    const { tagInput, labelPosition } = labelParameters;

    const { refElementReturn: refElementInputReturn, propsStable: propsRefInput } = useRefElement<InputType>({ refElementParameters: {} });
    const { refElementReturn: refElementLabelReturn, propsStable: propsRefLabel } = useRefElement<LabelType>({ refElementParameters: {} });

    const {
        propsInput,
        propsLabel,
        checkboxLikeInputReturn,
        checkboxLikeLabelReturn,
        checkboxLikeReturn,
        pressInputReturn,
        pressLabelReturn,
        pressReturn,
        randomIdInputReturn,
        randomIdLabelReturn,
        ...void3
    } = useCheckboxLike<LP, InputType, LabelType, boolean | "mixed">({
        randomIdInputParameters: { prefix: Prefices.checkboxLikeInput },
        randomIdLabelParameters: { prefix: Prefices.checkboxLikeLabel },
        refElementInputReturn,
        refElementLabelReturn,
        checkboxLikeParameters: { role: "checkbox", checked, disabled },
        pressParameters: {
            onPressSync: useStableCallback(e => { onCheckedChange?.(enhanceEvent(e, { checked: !checked })) }),
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

}
