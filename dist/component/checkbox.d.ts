import { Ref, VNode } from "preact";
import { ElementProps } from "preact-prop-helpers";
import { ElementToTag, Get3 } from "../props.js";
import { UseCheckboxParameters, UseCheckboxReturnType } from "../use-checkbox.js";
import { LabelPosition } from "../use-label.js";
import { PartialExcept } from "./util.js";
interface CheckboxPropsBase<I extends Element, L extends Element> extends Get3<UseCheckboxParameters<LabelPosition, I, L>, "checkboxLikeParameters", "checkboxParameters", "labelParameters"> {
    ref?: Ref<UseCheckboxReturnType<I, L>>;
}
export interface CheckboxProps<I extends Element, L extends Element> extends PartialExcept<CheckboxPropsBase<I, L>, "tagInput" | "tagLabel" | "labelPosition" | "ariaLabel" | "checked" | "onCheckedChange"> {
    render(info: UseCheckboxReturnType<I, L>): VNode<any>;
}
export declare function defaultRenderCheckboxLike<I extends Element, L extends Element, InfoType>({ labelPosition, tagInput, tagLabel, makePropsInput, makePropsLabel }: DefaultRenderCheckboxLikeParameters<I, L, InfoType>): (info: InfoType) => VNode<any>;
export interface DefaultRenderCheckboxLikeParameters<I extends Element, L extends Element, InfoType> {
    labelPosition: "wrapping" | "separate" | "hidden";
    tagInput: ElementToTag<I>;
    tagLabel: ElementToTag<L>;
    makePropsInput: (info: InfoType) => ElementProps<I>;
    makePropsLabel: (info: InfoType) => ElementProps<L>;
}
export declare const Checkbox: <I extends Element, L extends Element>({ checked, disabled, tagLabel, labelPosition, tagInput, ariaLabel, onCheckedChange, render }: CheckboxProps<I, L>, ref: Ref<any>) => VNode<any>;
export {};
//# sourceMappingURL=checkbox.d.ts.map