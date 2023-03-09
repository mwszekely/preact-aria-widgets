import { h } from "preact";
import { returnFalse, useMergedProps, useRefElement, useStableCallback } from "preact-prop-helpers";
import { debugLog, EnhancedEvent, enhanceEvent, OmitStrong, Prefices } from "./props.js";
import { useCheckboxLike, UseCheckboxLikeParameters, UseCheckboxLikeReturnType } from "./use-checkbox-like.js";
import { LabelPosition } from "./use-label.js";



export type CheckboxChangeEvent<E extends EventTarget> = EnhancedEvent<E, Event, { checked: boolean }>;

export interface UseCheckboxParameters<LP extends LabelPosition, I extends Element, L extends Element> extends OmitStrong<UseCheckboxLikeParameters<LP, I, L>, "refElementLabelReturn" | "refElementInputReturn" | "checkboxLikeParameters" | "randomIdInputParameters" | "randomIdLabelParameters"> {
    checkboxLikeParameters: OmitStrong<UseCheckboxLikeParameters<LP, I, L>["checkboxLikeParameters"], "onInput" | "role">;
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
}: UseCheckboxParameters<LP, InputType, LabelType>): UseCheckboxReturnType<InputType, LabelType> {
    debugLog("useCheckbox");

    const { tagInput, labelPosition } = labelParameters;
    const { checked } = checkboxLikeParameters;

    const { refElementReturn: refElementInputReturn, propsStable: propsRefInput } = useRefElement<InputType>({  });
    const { refElementReturn: refElementLabelReturn, propsStable: propsRefLabel } = useRefElement<LabelType>({  });

    const onInputEnhanced = useStableCallback((e: Event) => onCheckedChange?.(enhanceEvent<InputType, Event, { checked: boolean }>(e, { checked: !checked })));
    const { propsInput, propsLabel, ...ret} = useCheckboxLike<LP, InputType, LabelType>({
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
