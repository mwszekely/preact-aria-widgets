import { ElementProps, Nullable, TargetedOmit, monitorCallCount, returnFalse, useMergedProps, useRefElement, useStableCallback } from "preact-prop-helpers";
import { EnhancedEventHandler, OmitStrong, Prefices, TargetedEnhancedEvent, enhanceEvent } from "./props.js";
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
}

export interface UseCheckboxParameters<LP extends LabelPosition, I extends Element, L extends Element> extends
    OmitStrong<UseCheckboxLikeParameters<LP, I, L>, "refElementLabelReturn" | "refElementInputReturn" | "checkboxLikeParameters" | "randomIdInputParameters" | "randomIdLabelParameters">,
    TargetedOmit<UseCheckboxLikeParameters<LP, I, L>, "checkboxLikeParameters", "onInput" | "role"> {
    checkboxParameters: UseCheckboxParametersSelf;
}
export interface UseCheckboxReturnTypeSelf<InputType extends Element> { propsUnstable: ElementProps<InputType> }

export interface UseCheckboxReturnType<InputType extends Element, LabelType extends Element> extends UseCheckboxLikeReturnType<InputType, LabelType> {
    checkboxReturn: UseCheckboxReturnTypeSelf<InputType>;
}

export function useCheckbox<LP extends LabelPosition, InputType extends Element, LabelType extends Element>({
    checkboxParameters: { onCheckedChange },
    checkboxLikeParameters,
    labelParameters,
}: UseCheckboxParameters<LP, InputType, LabelType>): UseCheckboxReturnType<InputType, LabelType> {
    monitorCallCount(useCheckbox);

    const { tagInput, labelPosition } = labelParameters;
    const { checked } = checkboxLikeParameters;

    const { refElementReturn: refElementInputReturn, propsStable: propsRefInput } = useRefElement<InputType>({});
    const { refElementReturn: refElementLabelReturn, propsStable: propsRefLabel } = useRefElement<LabelType>({});

    const onInputEnhanced = useStableCallback((e: Event) => onCheckedChange?.(enhanceEvent(e, { checked: !checked })));
    const { propsInput, propsLabel, ...ret } = useCheckboxLike<LP, InputType, LabelType>({
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
