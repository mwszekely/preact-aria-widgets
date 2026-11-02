import { JSX, assertEmptyObject, createElement, ElementProps, memo, VNode } from "preact-prop-helpers/preact";
import { Get4 } from "../props.js";
import { useCheckbox, UseCheckboxParameters, UseCheckboxReturnType } from "../use-checkbox.js";
import { LabelPosition } from "../use-label.js";
import { GenericComponentProps, useComponent } from "./util.js";

export type CheckboxProps<InputElement extends keyof JSX.IntrinsicElements, LabelElement extends keyof JSX.IntrinsicElements> = GenericComponentProps<
    UseCheckboxReturnType<InputElement, LabelElement>,
    Get4<UseCheckboxParameters<LabelPosition, InputElement, LabelElement>, "checkboxLikeParameters", "labelParameters", "pressParameters", "checkboxParameters">,
    "tagInput" | "tagLabel" | "labelPosition" | "ariaLabel" | "checked"
>;

export function defaultRenderCheckboxLike<I extends keyof JSX.IntrinsicElements, L extends keyof JSX.IntrinsicElements, InfoType>({ labelPosition, tagInput, tagLabel, makePropsInput, makePropsLabel }: DefaultRenderCheckboxLikeParameters<I, L, InfoType>) {
    return function (info: InfoType): VNode {

        const inputProps = (makePropsInput(info))
        const { children, ...labelProps } = (makePropsLabel(info))
        if (labelPosition == "wrapping") {

            const input = createElement(tagInput as never, inputProps);
            const label = createElement(tagLabel as never, { ...labelProps, children: <>{input}{children}</> });

            return (
                <>
                    {label}
                </>
            )
        }
        else if (labelPosition == "separate") {

            const input = createElement(tagInput as never, inputProps);
            const label = createElement(tagLabel as never, { children, ...labelProps });

            return (
                <>
                    {input}
                    {label}
                </>
            )
        }
        else {
            console.assert(!!inputProps["aria-label"], `defaultRenderCheckboxLike: inputProps missing aria-label, despite the labelPosition`);
            return createElement(tagInput as never, inputProps);
        }
    }
}

export interface DefaultRenderCheckboxLikeParameters<I extends keyof JSX.IntrinsicElements, L extends keyof JSX.IntrinsicElements, InfoType> {
    labelPosition: "wrapping" | "separate" | "hidden",
    tagInput: I,
    tagLabel: L,
    makePropsInput: (info: InfoType) => ElementProps<I>,
    makePropsLabel: (info: InfoType) => ElementProps<L>
}

export const Checkbox = /* @__PURE__ */ memo((function Checkbox<I extends keyof JSX.IntrinsicElements, L extends keyof JSX.IntrinsicElements>({
    checked,
    disabled,
    tagLabel,
    labelPosition,
    tagInput,
    ariaLabel,
    longPressThreshold,
    excludeSpace,
    imperativeHandle,
    render,
    onCheckedChange,
    ...void1
}: CheckboxProps<I, L>) {
    assertEmptyObject(void1);

    return useComponent(
        imperativeHandle,
        render,
        null,
        useCheckbox<LabelPosition, I, L>({
            checkboxLikeParameters: { checked, disabled: disabled ?? false },
            labelParameters: { ariaLabel: ariaLabel, labelPosition, tagInput, tagLabel },
            pressParameters: { excludeSpace, longPressThreshold },
            checkboxParameters: { onCheckedChange }
        })
    );

}));
