import { TargetedPick, UsePressReturnType, UseRandomDualIdsParameters, UseRandomDualIdsReturnType } from "preact-prop-helpers";
import { ElementToTag, OmitStrong } from "./props.js";
export type LabelPosition = "separate" | "wrapping" | "none";
export type FocusableLabelElement<LP extends LabelPosition, InputElement extends Element, LabelElement extends Element> = LP extends "wrapping" ? LabelElement : InputElement;
export interface UseLabelParametersSelf<LP extends LabelPosition, InputElement extends Element, LabelElement extends Element> {
    onLabelClick: null | ((e: Event) => void);
    tagInput: ElementToTag<InputElement>;
    tagLabel: ElementToTag<LabelElement>;
    /**
     * Where is this component's label relative to the component itself?
     *
     * * `"separate"`: `<label /><input />`
     * * `"wrapping"`: `<label><input /></label>`
     * * `"none"`: `<input aria-label="..." />`
     *
     * In cases where you're using non-`input` and `label` elements, `"separate"` and `"wrapping"` are identical;
     * this is most important for native `label` and `input` elements, as they only need a `for` prop when the label doesn't wrap the input.
     */
    labelPosition: LP;
    /**
     * When `null`, this corresponds to having a visible label (with `labelPosition` == `"separate"` or `"wrapping"`).
     *
     * When a string, this corresponds to `labelPosition` == `"none"`; this label is only visible to assistive technologies and *not* visible otherwise.
     */
    ariaLabel: LP extends "none" ? string : null;
}
export interface UseLabelParameters<LP extends LabelPosition, InputElement extends Element, LabelElement extends Element> {
    randomIdInputParameters: OmitStrong<UseRandomDualIdsParameters["randomIdInputParameters"], "otherReferencerProp">;
    randomIdLabelParameters: OmitStrong<UseRandomDualIdsParameters["randomIdLabelParameters"], "otherReferencerProp">;
    labelParameters: UseLabelParametersSelf<LP, InputElement, LabelElement>;
}
export interface UseLabelReturnType<InputElement extends Element, LabelElement extends Element> extends UseRandomDualIdsReturnType<InputElement, LabelElement>, OmitStrong<UsePressReturnType<LabelElement>, "props"> {
}
/**
 * @compositeParams
 */
export declare function useLabel<LP extends LabelPosition, InputElement extends Element, LabelElement extends Element>({ randomIdInputParameters, randomIdLabelParameters, labelParameters: { tagInput, tagLabel, ariaLabel, labelPosition, onLabelClick } }: UseLabelParameters<LP, InputElement, LabelElement>): UseLabelReturnType<InputElement, LabelElement>;
export interface UseLabelSyntheticParameters extends TargetedPick<UseLabelParameters<LabelPosition, any, any>, "labelParameters", "ariaLabel" | "onLabelClick"> {
    randomIdInputParameters: OmitStrong<UseRandomDualIdsParameters["randomIdInputParameters"], "otherReferencerProp">;
    randomIdLabelParameters: OmitStrong<UseRandomDualIdsParameters["randomIdLabelParameters"], "otherReferencerProp">;
}
/**
 * Shortcut for `useLabel` that assumes we're just never working with native HTML `input` and `label` elements. So for labelling guaranteably non-native elements.
 *
 * @compositeParams
 */
export declare function useLabelSynthetic<InputElement extends Element, LabelElement extends Element>({ labelParameters: { ariaLabel, onLabelClick }, ...rest }: UseLabelSyntheticParameters): UseLabelReturnType<InputElement, LabelElement>;
//# sourceMappingURL=use-label.d.ts.map