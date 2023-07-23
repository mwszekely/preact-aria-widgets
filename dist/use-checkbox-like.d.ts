import { ElementProps, JSX, TargetedOmit, TargetedPick, UsePressParameters, UsePressReturnType, UseRefElementReturnType } from "preact-prop-helpers";
import { DisabledType, OmitStrong } from "./props.js";
import { LabelPosition, UseLabelParameters, UseLabelReturnType } from "./use-label.js";
export type CheckboxCheckedType = boolean | "mixed";
export interface UseCheckboxLikeParametersSelf {
    /** The role attribute to use, when applicable */
    role: JSX.AriaRole;
    disabled: DisabledType;
    checked: CheckboxCheckedType;
    onInput(event: Event): void;
}
export interface UseCheckboxLikeParameters<LP extends LabelPosition, InputType extends Element, LabelType extends Element> extends OmitStrong<UseLabelParameters<LP, InputType, LabelType>, "labelParameters">, TargetedOmit<UseLabelParameters<LP, InputType, LabelType>, "labelParameters", "onLabelClick">, TargetedPick<UsePressParameters<any>, "pressParameters", "longPressThreshold" | "excludeSpace"> {
    checkboxLikeParameters: UseCheckboxLikeParametersSelf;
    refElementLabelReturn: UseRefElementReturnType<LabelType>["refElementReturn"];
    refElementInputReturn: UseRefElementReturnType<InputType>["refElementReturn"];
}
export interface UseCheckboxLikeReturnTypeSelf {
    /**
     * Call this to focus whichever element handles the focus based on `labelPosition`.
     */
    focusSelf(): void;
}
export interface UseCheckboxLikeReturnType<InputType extends Element, LabelType extends Element> extends UseLabelReturnType<InputType, LabelType> {
    pressLabelReturn: UsePressReturnType<LabelType>["pressReturn"];
    pressInputReturn: UsePressReturnType<InputType>["pressReturn"];
    checkboxLikeInputReturn: {
        propsUnstable: ElementProps<InputType>;
    };
    checkboxLikeLabelReturn: {
        propsUnstable: ElementProps<LabelType>;
    };
    checkboxLikeReturn: UseCheckboxLikeReturnTypeSelf;
}
/**
 * Handles any component where there's:
 * ```md-literal
 * 1. Some kind of an on/off binary/trinary input element that needs event handlers
 * 2. Some kind of label for that input element
 * ```md-literal
 *
 * See also `useLabel` for when there's a label for a non-checkbox-like component.
 *
 * @compositeParams
 */
export declare function useCheckboxLike<LP extends LabelPosition, InputType extends Element, LabelType extends Element>({ labelParameters, randomIdInputParameters, randomIdLabelParameters, checkboxLikeParameters: { checked, disabled, onInput: onInputSync, role, ...void1 }, refElementInputReturn, refElementLabelReturn, pressParameters: { excludeSpace, longPressThreshold, ...void2 }, ...void3 }: UseCheckboxLikeParameters<LP, InputType, LabelType>): UseCheckboxLikeReturnType<InputType, LabelType>;
//# sourceMappingURL=use-checkbox-like.d.ts.map