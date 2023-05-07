import { h } from "preact";
import { EnhancedEventHandler, OmitStrong, TargetedEnhancedEvent } from "./props.js";
import { UseCheckboxLikeParameters, UseCheckboxLikeReturnType } from "./use-checkbox-like.js";
import { LabelPosition } from "./use-label.js";
export interface CheckboxChangeEventDetail {
    checked: boolean;
}
export type TargetedCheckboxChangeEvent<E extends EventTarget> = TargetedEnhancedEvent<E, Event, CheckboxChangeEventDetail>;
export type CheckboxChangeEventHandler<E extends EventTarget> = EnhancedEventHandler<E, Event, CheckboxChangeEventDetail>;
export interface UseCheckboxParameters<LP extends LabelPosition, I extends Element, L extends Element> extends OmitStrong<UseCheckboxLikeParameters<LP, I, L>, "refElementLabelReturn" | "refElementInputReturn" | "checkboxLikeParameters" | "randomIdInputParameters" | "randomIdLabelParameters"> {
    checkboxLikeParameters: OmitStrong<UseCheckboxLikeParameters<LP, I, L>["checkboxLikeParameters"], "onInput" | "role">;
    checkboxParameters: {
        onCheckedChange: undefined | CheckboxChangeEventHandler<I>;
    };
}
export interface UseCheckboxReturnType<InputType extends Element, LabelType extends Element> extends UseCheckboxLikeReturnType<InputType, LabelType> {
    checkboxReturn: {
        propsUnstable: h.JSX.HTMLAttributes<InputType>;
    };
}
export declare function useCheckbox<LP extends LabelPosition, InputType extends Element, LabelType extends Element>({ checkboxParameters: { onCheckedChange }, checkboxLikeParameters, labelParameters, }: UseCheckboxParameters<LP, InputType, LabelType>): UseCheckboxReturnType<InputType, LabelType>;
//# sourceMappingURL=use-checkbox.d.ts.map