import { h } from "preact";
import { useStableCallback } from "preact-prop-helpers";
import { useCallback } from "preact/hooks";
import { debugLog, EnhancedEvent, enhanceEvent } from "./props";
import { useCheckboxLike, UseCheckboxLikeParameters, UseCheckboxLikeReturnTypeInfo } from "./use-label";



export type CheckboxChangeEvent<E extends EventTarget> = EnhancedEvent<E, Event, { checked: boolean }>;

export interface UseCheckboxParameters<I extends Element, L extends Element> extends UseCheckboxLikeParameters<I, L, "onInput" | "role", "prefix"> {
    checkboxParameters: {
        onCheckedChange(event: CheckboxChangeEvent<I>): void;
    }
}

export interface UseCheckboxReturnTypeInfo<InputType extends Element, LabelType extends Element> extends UseCheckboxLikeReturnTypeInfo<InputType, LabelType> {
    checkboxReturn: { propsUnstable: h.JSX.HTMLAttributes<InputType> }
}


export interface UseCheckboxReturnTypeWithHooks<InputType extends Element, LabelType extends Element> extends UseCheckboxReturnTypeInfo<InputType, LabelType> {
    /** **Notably unstable** */
    //useCheckboxInputElement: UseCheckboxInputElement<InputType, LabelType>;
    /** **Notably unstable** */
    //useCheckboxLabelElement: UseCheckboxLabelElement<InputType, LabelType>;
}

export function useCheckbox<InputType extends Element, LabelType extends Element>({
    checkboxParameters: { onCheckedChange },
    checkboxLikeParameters,
    labelParameters,
    randomIdInputParameters,
    randomIdLabelParameters,
    randomIdReferencerElementInputParameters,
    randomIdReferencerElementLabelParameters,
    refElementInputReturn,
    refElementLabelReturn
}: UseCheckboxParameters<InputType, LabelType>): UseCheckboxReturnTypeWithHooks<InputType, LabelType> {
    debugLog("useCheckbox");

    const { tagInput, labelPosition } = labelParameters;
    const { checked } = checkboxLikeParameters;

    const onInputEnhanced = useStableCallback((e: Event) => onCheckedChange?.(enhanceEvent<InputType, Event, { checked: boolean }>(e, { checked: !checked })));
    const {
        pressInputReturn,
        pressLabelReturn,
        randomIdInputReturn,
        randomIdLabelReturn,
        randomIdReferencerInputReturn,
        randomIdReferencerLabelReturn,
        randomIdSourceInputReturn,
        randomIdSourceLabelReturn,
        labelInputReturn,
        checkboxLikeInputReturn,
        checkboxLikeLabelReturn
    } = useCheckboxLike<InputType, LabelType>({
        randomIdInputParameters: { ...randomIdInputParameters, prefix: "checkbox-i-" },
        randomIdLabelParameters: { ...randomIdLabelParameters, prefix: "checkbox-l-" },
        randomIdReferencerElementInputParameters,
        randomIdReferencerElementLabelParameters,
        refElementInputReturn,
        refElementLabelReturn,
        checkboxLikeParameters: { role: "checkbox", onInput: onInputEnhanced, ...checkboxLikeParameters },
        labelParameters
    });


    return {
        checkboxReturn: { propsUnstable: { type: (tagInput == "input" && labelPosition != "wrapping" ? "checkbox" : undefined) } },
        pressInputReturn,
        pressLabelReturn,
        randomIdInputReturn,
        randomIdLabelReturn,
        randomIdReferencerInputReturn,
        randomIdReferencerLabelReturn,
        randomIdSourceInputReturn,
        randomIdSourceLabelReturn,
        labelInputReturn,
        checkboxLikeInputReturn,
        checkboxLikeLabelReturn
    };

}
