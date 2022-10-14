import { createElement, h, VNode } from "preact";
import { memo } from "preact/compat";
import { ElementToTag, PropModifier } from "props";
import { useCheckbox, UseCheckboxParameters, UseCheckboxReturnTypeInfo } from "../use-checkbox";

type Get<T, K extends keyof T> = T[K];

export interface CheckboxProps<I extends Element, L extends Element> extends
    Get<UseCheckboxParameters<I, L>, "checkboxLike">,
    Get<UseCheckboxParameters<I, L>, "checkbox">,
    Get<UseCheckboxParameters<I, L>, "label">,
    Get<UseCheckboxParameters<I, L>, "hasFocusInput"> {
    render(info: UseCheckboxReturnTypeInfo<I, L>, modifyInputProps: PropModifier<I>, modifyLabelProps: PropModifier<L>): VNode<any>;
}

export function defaultRenderCheckboxLike<I extends Element, L extends Element, InfoType>({ labelPosition, tagInput, tagLabel, makeInputProps, makeLabelProps }: DefaultRenderCheckboxLikeParameters<I, L, InfoType>) {
    return function (info: InfoType, modifyInputProps: PropModifier<I>, modifyLabelProps: PropModifier<L>): VNode<any> {

        if (labelPosition == "wrapping") {
            const inputPropsBase = makeInputProps(info);
            const labelPropsBase = makeLabelProps(info);

            const inputProps = modifyInputProps(inputPropsBase);
            const { children, ...labelProps } = modifyLabelProps(labelPropsBase);
            const input = createElement(tagInput as never, inputProps);
            const label = createElement(tagLabel as never, { ...labelProps, children: <>{input}{children}</> });

            return (
                <>
                    {label}
                </>
            )
        }
        else if (labelPosition == "separate") {
            const inputProps = modifyInputProps(makeInputProps(info))
            const labelProps = modifyLabelProps(makeLabelProps(info))

            const input = createElement(tagInput as never, inputProps);
            const label = createElement(tagLabel as never, labelProps);

            return (
                <>
                    {input}
                    {label}
                </>
            )
        }
        else {
            const userProps = makeInputProps(info);
            console.assert(!!userProps["aria-label"]);
            return createElement(tagInput as never, modifyInputProps(userProps));
        }
    }
}

export interface DefaultRenderCheckboxLikeParameters<I extends Element, L extends Element, InfoType> {
    labelPosition: "wrapping" | "separate" | "hidden",
    tagInput: ElementToTag<I>,
    tagLabel: ElementToTag<L>,
    makeInputProps: (info: InfoType) => h.JSX.HTMLAttributes<I>,
    makeLabelProps: (info: InfoType) => h.JSX.HTMLAttributes<L>
}

export interface DefaultRenderCheckboxParameters<I extends Element, L extends Element> extends DefaultRenderCheckboxLikeParameters<I, L, UseCheckboxReturnTypeInfo<I, L>> { }

export function defaultRenderCheckbox<I extends Element, L extends Element>({ labelPosition, tagInput, tagLabel, makeInputProps, makeLabelProps }: DefaultRenderCheckboxParameters<I, L>) {
    return defaultRenderCheckboxLike<I, L, UseCheckboxReturnTypeInfo<I, L>>({ labelPosition, tagInput, tagLabel, makeInputProps, makeLabelProps });
}



export const Checkbox = memo(function Checkbox<I extends Element, L extends Element>({ checked, disabled, tagLabel, labelPosition, tagInput, onCheckedChange, render, getDocument, getWindow, onActiveElementChange, onElementChange, onFocusedChanged, onFocusedInnerChanged, onLastActiveElementChange, onLastFocusedChanged, onLastFocusedInnerChanged, onMount, onUnmount, onWindowFocusedChange }: CheckboxProps<I, L>) {
    const { useCheckboxInputElement, useCheckboxLabelElement, ...checkboxInfo } = useCheckbox<I, L>({
        checkbox: { onCheckedChange },
        checkboxLike: { checked, disabled, labelPosition },
        label: { tagInput, tagLabel },
        hasFocusInput: { getDocument, getWindow, onActiveElementChange, onElementChange, onFocusedChanged, onFocusedInnerChanged, onLastActiveElementChange, onLastFocusedChanged, onLastFocusedInnerChanged, onMount, onUnmount, onWindowFocusedChange },
        hasFocusLabel: { getDocument, getWindow, onActiveElementChange, onElementChange: onElementChange as any, onFocusedChanged, onFocusedInnerChanged, onLastActiveElementChange, onLastFocusedChanged, onLastFocusedInnerChanged, onMount: onMount as any, onUnmount: onUnmount as any, onWindowFocusedChange }
    });
    const { useCheckboxInputElementProps } = useCheckboxInputElement();
    const { useCheckboxLabelElementProps } = useCheckboxLabelElement();


    return render(checkboxInfo, useCheckboxInputElementProps, useCheckboxLabelElementProps);
})
