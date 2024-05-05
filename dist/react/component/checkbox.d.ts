import { createElement, ElementProps, VNode } from "preact-prop-helpers/preact";
import { ElementToTag, Get4 } from "../props.js";
import { UseCheckboxParameters, UseCheckboxReturnType } from "../use-checkbox.js";
import { LabelPosition } from "../use-label.js";
import { GenericComponentProps } from "./util.js";
export type CheckboxProps<InputElement extends Element, LabelElement extends Element> = GenericComponentProps<UseCheckboxReturnType<InputElement, LabelElement>, Get4<UseCheckboxParameters<LabelPosition, InputElement, LabelElement>, "checkboxLikeParameters", "labelParameters", "pressParameters", "checkboxParameters">, "tagInput" | "tagLabel" | "labelPosition" | "ariaLabel" | "checked">;
export declare function defaultRenderCheckboxLike<I extends Element, L extends Element, InfoType>({ labelPosition, tagInput, tagLabel, makePropsInput, makePropsLabel }: DefaultRenderCheckboxLikeParameters<I, L, InfoType>): (info: InfoType) => VNode;
export interface DefaultRenderCheckboxLikeParameters<I extends Element, L extends Element, InfoType> {
    labelPosition: "wrapping" | "separate" | "hidden";
    tagInput: ElementToTag<I>;
    tagLabel: ElementToTag<L>;
    makePropsInput: (info: InfoType) => ElementProps<I>;
    makePropsLabel: (info: InfoType) => ElementProps<L>;
}
export declare const Checkbox: <I extends Element, L extends Element>({ checked, disabled, tagLabel, labelPosition, tagInput, ariaLabel, longPressThreshold, excludeSpace, imperativeHandle, render, onCheckedChange, ...void1 }: CheckboxProps<I, L>) => createElement.JSX.Element | import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=checkbox.d.ts.map