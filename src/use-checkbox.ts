import { h } from "preact";
import { useStableCallback } from "preact-prop-helpers";
import { debugLog, EnhancedEvent, enhanceEvent, Prefices } from "./props";
import { LabelPosition, useCheckboxLike, UseCheckboxLikeParameters, UseCheckboxLikeReturnType } from "./use-label";



export type CheckboxChangeEvent<E extends EventTarget> = EnhancedEvent<E, Event, { checked: boolean }>;

export interface UseCheckboxParameters<LP extends LabelPosition, I extends Element, L extends Element> extends Omit<UseCheckboxLikeParameters<LP, I, L>, "checkboxLikeParameters" | "randomIdInputParameters" | "randomIdLabelParameters"> {
    checkboxLikeParameters: Omit<UseCheckboxLikeParameters<LP, I, L>["checkboxLikeParameters"], "onInput" | "role" | "prefix">;
    checkboxParameters: {
        onCheckedChange(event: CheckboxChangeEvent<I>): void;
    }
}

export interface UseCheckboxReturnType<InputType extends Element, LabelType extends Element> extends UseCheckboxLikeReturnType<InputType, LabelType> {
    checkboxReturn: { propsUnstable: h.JSX.HTMLAttributes<InputType> }
}

export function useCheckbox<LP extends LabelPosition, InputType extends Element, LabelType extends Element>({
    checkboxParameters: { onCheckedChange },
    checkboxLikeParameters,
    labelParameters,
    refElementInputReturn,
    refElementLabelReturn
}: UseCheckboxParameters<LP, InputType, LabelType>): UseCheckboxReturnType<InputType, LabelType> {
    debugLog("useCheckbox");

    const { tagInput, labelPosition } = labelParameters;
    const { checked } = checkboxLikeParameters;

    const onInputEnhanced = useStableCallback((e: Event) => onCheckedChange?.(enhanceEvent<InputType, Event, { checked: boolean }>(e, { checked: !checked })));
    const {
        pressInputReturn,
        pressLabelReturn,
        randomIdInputReturn,
        randomIdLabelReturn,
        propsInput,
        propsLabel,
        checkboxLikeReturn,
        checkboxLikeInputReturn,
        checkboxLikeLabelReturn
    } = useCheckboxLike<LP, InputType, LabelType>({
        randomIdInputParameters: { prefix: Prefices.checkboxLikeInput },
        randomIdLabelParameters: { prefix: Prefices.checkboxLikeLabel },
        refElementInputReturn,
        refElementLabelReturn,
        checkboxLikeParameters: { role: "checkbox", onInput: onInputEnhanced,  ...checkboxLikeParameters },
        labelParameters
    });


    return {
        checkboxReturn: { propsUnstable: { type: (tagInput == "input" && labelPosition != "wrapping" ? "checkbox" : undefined) } },
        checkboxLikeReturn,
        pressInputReturn,
        pressLabelReturn,
        randomIdInputReturn,
        randomIdLabelReturn,
        propsInput,
        propsLabel,
        checkboxLikeInputReturn,
        checkboxLikeLabelReturn
    };

}
