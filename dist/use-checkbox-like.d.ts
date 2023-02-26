import { h } from "preact";
import { UsePressParameters, UsePressReturnType, UseRefElementReturnType } from "preact-prop-helpers";
import { DisabledType, OmitStrong } from "./props.js";
import { LabelPosition, UseLabelParameters, UseLabelReturnType } from "./use-label.js";
export type CheckboxCheckedType = boolean | "mixed";
export interface UseCheckboxLikeParameters<LP extends LabelPosition, InputType extends Element, LabelType extends Element> extends OmitStrong<UseLabelParameters<LP, InputType, LabelType>, "labelParameters"> {
    checkboxLikeParameters: {
        /** The role attribute to use, when applicable */
        role: h.JSX.AriaRole;
        disabled: DisabledType;
        checked: CheckboxCheckedType;
        onInput(event: Event): void;
    };
    pressParameters: Pick<UsePressParameters<any>["pressParameters"], "excludeSpace">;
    labelParameters: OmitStrong<UseLabelParameters<LP, InputType, LabelType>["labelParameters"], "onLabelClick">;
    refElementLabelReturn: UseRefElementReturnType<LabelType>["refElementReturn"];
    refElementInputReturn: UseRefElementReturnType<InputType>["refElementReturn"];
}
export interface UseCheckboxLikeReturnType<InputType extends Element, LabelType extends Element> extends UseLabelReturnType<InputType, LabelType> {
    pressLabelReturn: UsePressReturnType<LabelType>["pressReturn"];
    pressInputReturn: UsePressReturnType<InputType>["pressReturn"];
    checkboxLikeInputReturn: {
        propsUnstable: h.JSX.HTMLAttributes<InputType>;
    };
    checkboxLikeLabelReturn: {
        propsUnstable: h.JSX.HTMLAttributes<LabelType>;
    };
    checkboxLikeReturn: {
        /**
         * Call this to focus whichever element handles the focus based on `labelPosition`.
         */
        focusSelf(): void;
    };
}
/**
 * Handles any component where there's:
 * 1. Some kind of an on/off binary/trinary input element that needs event handlers
 * 2. Some kind of label for that input element
 *
 * See also `useLabel` for when there's a label for a non-checkbox-like component.
 *
 * @param param0
 * @returns
 */
export declare function useCheckboxLike<LP extends LabelPosition, InputType extends Element, LabelType extends Element>({ labelParameters, randomIdInputParameters, randomIdLabelParameters, checkboxLikeParameters: { checked, disabled, onInput: onInputSync, role }, refElementInputReturn, refElementLabelReturn, pressParameters: { excludeSpace } }: UseCheckboxLikeParameters<LP, InputType, LabelType>): UseCheckboxLikeReturnType<InputType, LabelType>;
//# sourceMappingURL=use-checkbox-like.d.ts.map