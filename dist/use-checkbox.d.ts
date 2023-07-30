import { ElementProps, Nullable, TargetedOmit } from "preact-prop-helpers";
import { EnhancedEventHandler, OmitStrong, TargetedEnhancedEvent } from "./props.js";
import { CheckboxCheckedType, UseCheckboxLikeParameters, UseCheckboxLikeReturnType } from "./use-checkbox-like.js";
import { LabelPosition } from "./use-label.js";
export interface CheckboxChangeEventDetail {
    /**
     * This is always a `true`/`false` value, instead of including `"mixed"`
     */
    checked: boolean;
    previous: CheckboxCheckedType;
}
export type TargetedCheckboxChangeEvent = TargetedEnhancedEvent<Event, CheckboxChangeEventDetail>;
export type CheckboxChangeEventHandler = EnhancedEventHandler<Event, CheckboxChangeEventDetail>;
export interface UseCheckboxParametersSelf {
    /** Called when the user changes the value of the checkbox.
     *
     * @remarks If you need this to be async, see {@link useProgressWithHandler}
     */
    onCheckedChange: Nullable<CheckboxChangeEventHandler>;
}
export interface UseCheckboxParameters<LP extends LabelPosition, I extends Element, L extends Element> extends OmitStrong<UseCheckboxLikeParameters<LP, I, L, boolean | "mixed">, "pressParameters" | "checkboxLikeParameters" | "randomIdInputParameters" | "randomIdLabelParameters" | "refElementLabelReturn" | "refElementInputReturn">, TargetedOmit<UseCheckboxLikeParameters<LP, I, L, boolean | "mixed">, "pressParameters", "onPressSync">, TargetedOmit<UseCheckboxLikeParameters<LP, I, L, boolean | "mixed">, "checkboxLikeParameters", "role"> {
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
export declare function useCheckbox<LP extends LabelPosition, InputType extends Element, LabelType extends Element>({ checkboxLikeParameters: { checked, disabled, ...void2 }, checkboxParameters: { onCheckedChange, ...void4 }, labelParameters, pressParameters, ...void1 }: UseCheckboxParameters<LP, InputType, LabelType>): UseCheckboxReturnType<InputType, LabelType>;
//# sourceMappingURL=use-checkbox.d.ts.map