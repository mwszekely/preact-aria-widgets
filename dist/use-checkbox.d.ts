import { ElementProps } from "preact-prop-helpers";
import { EnhancedEventHandler, OmitStrong, TargetedEnhancedEvent } from "./props.js";
import { UseCheckboxLikeParameters, UseCheckboxLikeReturnType } from "./use-checkbox-like.js";
import { LabelPosition } from "./use-label.js";
export interface CheckboxChangeEventDetail {
    checked: boolean;
}
export type TargetedCheckboxChangeEvent = TargetedEnhancedEvent<Event, CheckboxChangeEventDetail>;
export type CheckboxChangeEventHandler = EnhancedEventHandler<Event, CheckboxChangeEventDetail>;
export interface UseCheckboxParameters<LP extends LabelPosition, I extends Element, L extends Element> extends OmitStrong<UseCheckboxLikeParameters<LP, I, L>, "refElementLabelReturn" | "refElementInputReturn" | "checkboxLikeParameters" | "randomIdInputParameters" | "randomIdLabelParameters"> {
    checkboxLikeParameters: OmitStrong<UseCheckboxLikeParameters<LP, I, L>["checkboxLikeParameters"], "onInput" | "role">;
    checkboxParameters: {
        onCheckedChange: undefined | CheckboxChangeEventHandler;
    };
}
export interface UseCheckboxReturnType<InputType extends Element, LabelType extends Element> extends UseCheckboxLikeReturnType<InputType, LabelType> {
    checkboxReturn: {
        propsUnstable: ElementProps<InputType>;
    };
}
export declare function useCheckbox<LP extends LabelPosition, InputType extends Element, LabelType extends Element>({ checkboxParameters: { onCheckedChange }, checkboxLikeParameters, labelParameters, }: UseCheckboxParameters<LP, InputType, LabelType>): UseCheckboxReturnType<InputType, LabelType>;
//# sourceMappingURL=use-checkbox.d.ts.map