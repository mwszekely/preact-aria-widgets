import { h } from "preact";
import { useStableCallback } from "preact-prop-helpers";
import { debugLog, EnhancedEvent, enhanceEvent } from "./props";
import { useCheckboxLike, UseCheckboxLikeParameters, UseCheckboxLikeReturnType } from "./use-label";



export type CheckboxChangeEvent<E extends EventTarget> = EnhancedEvent<E, Event, { checked: boolean }>;

export interface UseCheckboxParameters<I extends Element, L extends Element> extends Omit<UseCheckboxLikeParameters<I, L>, "checkboxLikeParameters"> {
    checkboxLikeParameters: Omit<UseCheckboxLikeParameters<I, L>["checkboxLikeParameters"], "onInput" | "role" | "prefix">;
    checkboxParameters: {
        onCheckedChange(event: CheckboxChangeEvent<I>): void;
    }
}

export interface UseCheckboxReturnType<InputType extends Element, LabelType extends Element> extends UseCheckboxLikeReturnType<InputType, LabelType> {
    checkboxReturn: { propsUnstable: h.JSX.HTMLAttributes<InputType> }
}

export function useCheckbox<InputType extends Element, LabelType extends Element>({
    checkboxParameters: { onCheckedChange },
    checkboxLikeParameters,
    labelParameters,
    randomIdInputParameters,
    randomIdLabelParameters,
    refElementInputReturn,
    refElementLabelReturn
}: UseCheckboxParameters<InputType, LabelType>): UseCheckboxReturnType<InputType, LabelType> {
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
        checkboxLikeInputReturn,
        checkboxLikeLabelReturn
    } = useCheckboxLike<InputType, LabelType>({
        randomIdInputParameters: { ...randomIdInputParameters, prefix: "checkbox-i-" },
        randomIdLabelParameters: { ...randomIdLabelParameters, prefix: "checkbox-l-" },
        refElementInputReturn,
        refElementLabelReturn,
        checkboxLikeParameters: { role: "checkbox", onInput: onInputEnhanced,  ...checkboxLikeParameters },
        labelParameters
    });


    return {
        checkboxReturn: { propsUnstable: { type: (tagInput == "input" && labelPosition != "wrapping" ? "checkbox" : undefined) } },
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
