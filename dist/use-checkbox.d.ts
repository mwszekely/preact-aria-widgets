import { ElementProps, Nullable, TargetedOmit } from "preact-prop-helpers";
import { EnhancedEventHandler, OmitStrong, TargetedEnhancedEvent } from "./props.js";
import { UseCheckboxLikeParameters, UseCheckboxLikeReturnType } from "./use-checkbox-like.js";
import { LabelPosition } from "./use-label.js";
export interface CheckboxChangeEventDetail {
    checked: boolean;
}
export type TargetedCheckboxChangeEvent = TargetedEnhancedEvent<Event, CheckboxChangeEventDetail>;
export type CheckboxChangeEventHandler = EnhancedEventHandler<Event, CheckboxChangeEventDetail>;
export interface UseCheckboxParametersSelf {
    onCheckedChange: Nullable<CheckboxChangeEventHandler>;
}
export interface UseCheckboxParameters<LP extends LabelPosition, I extends Element, L extends Element> extends OmitStrong<UseCheckboxLikeParameters<LP, I, L>, "refElementLabelReturn" | "refElementInputReturn" | "checkboxLikeParameters" | "randomIdInputParameters" | "randomIdLabelParameters">, TargetedOmit<UseCheckboxLikeParameters<LP, I, L>, "checkboxLikeParameters", "onInput" | "role"> {
    checkboxParameters: UseCheckboxParametersSelf;
}
export interface UseCheckboxReturnTypeSelf<InputType extends Element> {
    propsUnstable: ElementProps<InputType>;
}
export interface UseCheckboxReturnType<InputType extends Element, LabelType extends Element> extends UseCheckboxLikeReturnType<InputType, LabelType> {
    checkboxReturn: UseCheckboxReturnTypeSelf<InputType>;
}
/**
 * Implements a [Checkbox](https://www.w3.org/WAI/ARIA/apg/patterns/checkbox/) pattern.
 *
 * @compositeParams
 */
export declare function useCheckbox<LP extends LabelPosition, InputType extends Element, LabelType extends Element>({ checkboxParameters: { onCheckedChange }, checkboxLikeParameters, labelParameters, pressParameters }: UseCheckboxParameters<LP, InputType, LabelType>): UseCheckboxReturnType<InputType, LabelType>;
//# sourceMappingURL=use-checkbox.d.ts.map