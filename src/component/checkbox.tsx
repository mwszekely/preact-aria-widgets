import { createElement, Ref, VNode } from "preact";
import { ElementProps, returnFalse } from "preact-prop-helpers";
import { useImperativeHandle } from "preact/hooks";
import { ElementToTag } from "../props.js";
import { useCheckbox, UseCheckboxParameters, UseCheckboxReturnType } from "../use-checkbox.js";
import { LabelPosition } from "../use-label.js";
import { memoForwardRef, PartialExcept } from "./util.js";

type Get<T, K extends keyof T> = T[K];

interface CheckboxPropsBase<I extends Element, L extends Element> extends
    Get<UseCheckboxParameters<LabelPosition, I, L>, "checkboxLikeParameters">,
    Get<UseCheckboxParameters<LabelPosition, I, L>, "checkboxParameters">,
    Get<UseCheckboxParameters<LabelPosition, I, L>, "labelParameters"> {
    ref?: Ref<UseCheckboxReturnType<I, L>>;
}

export interface CheckboxProps<I extends Element, L extends Element> extends PartialExcept<CheckboxPropsBase<I, L>, "tagInput" | "tagLabel" | "labelPosition" | "ariaLabel" | "checked" | "onCheckedChange"> {
    render(info: UseCheckboxReturnType<I, L>): VNode<any>;
}

export function defaultRenderCheckboxLike<I extends Element, L extends Element, InfoType>({ labelPosition, tagInput, tagLabel, makePropsInput, makePropsLabel }: DefaultRenderCheckboxLikeParameters<I, L, InfoType>) {
    return function (info: InfoType): VNode<any> {

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
            console.assert(!!inputProps["aria-label"]);
            return createElement(tagInput as never, inputProps);
        }
    }
}

export interface DefaultRenderCheckboxLikeParameters<I extends Element, L extends Element, InfoType> {
    labelPosition: "wrapping" | "separate" | "hidden",
    tagInput: ElementToTag<I>,
    tagLabel: ElementToTag<L>,
    makePropsInput: (info: InfoType) => ElementProps<I>,
    makePropsLabel: (info: InfoType) => ElementProps<L>
}

export const Checkbox = memoForwardRef(function Checkbox<I extends Element, L extends Element>({
    checked,
    disabled,
    tagLabel,
    labelPosition,
    tagInput,
    ariaLabel,
    onCheckedChange,
    render
}: CheckboxProps<I, L>, ref: Ref<any>) {

    const checkbox = useCheckbox<LabelPosition, I, L>({
        checkboxLikeParameters: { checked: checked ?? false, disabled: disabled ?? false },
        checkboxParameters: { onCheckedChange },
        labelParameters: { ariaLabel: ariaLabel, labelPosition, tagInput, tagLabel },
        pressParameters: { excludeSpace: returnFalse }
    });

    useImperativeHandle(ref!, () => checkbox);

    return render(checkbox);
});
