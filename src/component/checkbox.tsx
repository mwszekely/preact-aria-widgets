import { createElement, h, Ref, VNode } from "preact";
import { useMergedProps, useRefElement } from "preact-prop-helpers";
import { useImperativeHandle } from "preact/hooks";
import { LabelPosition } from "../use-label";
import { ElementToTag } from "../props";
import { useCheckbox, UseCheckboxParameters, UseCheckboxReturnType } from "../use-checkbox";
import { memoForwardRef } from "./util";

type Get<T, K extends keyof T> = T[K];

export interface CheckboxProps<I extends Element, L extends Element> extends
    Get<UseCheckboxParameters<LabelPosition, I, L>, "checkboxLikeParameters">,
    Get<UseCheckboxParameters<LabelPosition, I, L>, "checkboxParameters">,
    Get<UseCheckboxParameters<LabelPosition, I, L>, "labelParameters"> {
    imperativeHandle?: Ref<UseCheckboxReturnType<I, L>>;
    render(info: UseCheckboxReturnType<I, L>): VNode<any>;
}

export function defaultRenderCheckboxLike<I extends Element, L extends Element, InfoType extends { propsInput: any, propsLabel: any }>({ labelPosition, tagInput, tagLabel, makePropsInput, makePropsLabel }: DefaultRenderCheckboxLikeParameters<I, L, InfoType>) {
    return function (info: InfoType): VNode<any> {

        const inputProps = useMergedProps(makePropsInput(info), info.propsInput)
        const { children, ...labelProps } = useMergedProps(makePropsLabel(info), info.propsLabel)
        if (labelPosition == "wrapping") {

            //const inputProps = modifyInputProps(makeInputProps(info));
            //const { children, ...labelProps } = modifyLabelProps(makeLabelProps(info));

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
            const userProps = makePropsInput(info);
            console.assert(!!userProps["aria-label"]);
            return createElement(tagInput as never, useMergedProps(userProps, info.propsInput));
        }
    }
}

export interface DefaultRenderCheckboxLikeParameters<I extends Element, L extends Element, InfoType> {
    labelPosition: "wrapping" | "separate" | "hidden",
    tagInput: ElementToTag<I>,
    tagLabel: ElementToTag<L>,
    makePropsInput: (info: InfoType) => h.JSX.HTMLAttributes<I>,
    makePropsLabel: (info: InfoType) => h.JSX.HTMLAttributes<L>
}

export interface DefaultRenderCheckboxParameters<I extends Element, L extends Element> extends DefaultRenderCheckboxLikeParameters<I, L, UseCheckboxReturnType<I, L>> { }

export function defaultRenderCheckbox<I extends Element, L extends Element>({ labelPosition, tagInput, tagLabel, makePropsInput, makePropsLabel }: DefaultRenderCheckboxParameters<I, L>) {
    return defaultRenderCheckboxLike<I, L, UseCheckboxReturnType<I, L>>({ labelPosition, tagInput, tagLabel, makePropsInput, makePropsLabel });
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

    const { refElementReturn: refElementInputReturn } = useRefElement<I>({ refElementParameters: {} });
    const { refElementReturn: refElementLabelReturn } = useRefElement<L>({ refElementParameters: {} });

    const checkbox = useCheckbox<LabelPosition, I, L>({
        checkboxLikeParameters: { checked, disabled },
        checkboxParameters: { onCheckedChange },
        labelParameters: { ariaLabel, labelPosition, tagInput, tagLabel },
        randomIdInputParameters: { prefix: "checkbox-input-" },
        randomIdLabelParameters: { prefix: "checkbox-label-" },
        refElementInputReturn,
        refElementLabelReturn
    });

    useImperativeHandle(ref!, () => checkbox);


    return render(checkbox);
});
