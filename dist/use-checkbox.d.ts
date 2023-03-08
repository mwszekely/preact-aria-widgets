import { h } from "preact";
import { EnhancedEvent, OmitStrong } from "./props.js";
import { UseCheckboxLikeParameters, UseCheckboxLikeReturnType } from "./use-checkbox-like.js";
import { LabelPosition } from "./use-label.js";
export type CheckboxChangeEvent<E extends EventTarget> = EnhancedEvent<E, Event, {
    checked: boolean;
}>;
export interface UseCheckboxParameters<LP extends LabelPosition, I extends Element, L extends Element> extends OmitStrong<UseCheckboxLikeParameters<LP, I, L>, "refElementLabelReturn" | "refElementInputReturn" | "checkboxLikeParameters" | "randomIdInputParameters" | "randomIdLabelParameters"> {
    checkboxLikeParameters: OmitStrong<UseCheckboxLikeParameters<LP, I, L>["checkboxLikeParameters"], "onInput" | "role">;
    checkboxParameters: {
        onCheckedChange(event: CheckboxChangeEvent<I>): void;
    };
}
export interface UseCheckboxReturnType<InputType extends Element, LabelType extends Element> extends UseCheckboxLikeReturnType<InputType, LabelType> {
    checkboxReturn: {
        propsUnstable: h.JSX.HTMLAttributes<InputType>;
    };
}
export declare function useCheckbox<LP extends LabelPosition, InputType extends Element, LabelType extends Element>({ checkboxParameters: { onCheckedChange }, checkboxLikeParameters, labelParameters, }: UseCheckboxParameters<LP, InputType, LabelType>): UseCheckboxReturnType<InputType, LabelType>;
//# sourceMappingURL=use-checkbox.d.ts.map