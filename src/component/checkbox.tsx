import { createElement, h, VNode, ComponentChildren } from "preact";
import { useAriaCheckbox, UseAriaCheckboxParameters, UseAriaCheckboxReturnTypeInfo } from "../use-checkbox";

type Get<T, K extends keyof T> = T[K];

export interface AriaCheckboxProps<I extends HTMLElement, L extends HTMLElement> extends
    Get<UseAriaCheckboxParameters<I, L>, "checkboxLike">,
    Get<UseAriaCheckboxParameters<I, L>, "checkbox">,
    Get<UseAriaCheckboxParameters<I, L>, "label"> {
    //propsInput(): h.JSX.HTMLAttributes<I>;
   // propsLabel(): h.JSX.HTMLAttributes<L>;
    render?(info: UseAriaCheckboxReturnTypeInfo<I, L>, input: h.JSX.HTMLAttributes<I>, label: h.JSX.HTMLAttributes<L>): VNode<any>;

    // Technically this is covered by `render`, but it's here for convenience.
    children?: ComponentChildren;
}

export function defaultRenderSeparate(inputTag: string, inputLabel: string) {
    return function (info: unknown, inputProps: h.JSX.HTMLAttributes<any>, labelProps: h.JSX.HTMLAttributes<any>): VNode<any> {
        const input = createElement(inputTag, inputProps);
        const label = createElement(inputLabel, labelProps);

        return (
            <>
                {input}
                {label}
            </>
        )
    }
}

export function defaultRenderWrapping(inputTag: string, inputLabel: string) {
    return function (info: unknown, inputProps: h.JSX.HTMLAttributes<any>, {children, ...labelProps}: h.JSX.HTMLAttributes<any>): VNode<any> {
        const input = createElement(inputTag, inputProps);
        const label = createElement(inputLabel, { ...labelProps, children: <>{input}{children}</> });

        return (
            <>
                {label}
            </>
        )
    }
}

export function AriaCheckbox<I extends HTMLElement, L extends HTMLElement>({ checked, disabled, tagLabel, labelPosition, tagInput, onInput, render, children }: AriaCheckboxProps<I, L>) {
    const { useCheckboxInputElement, useCheckboxLabelElement, ...checkboxInfo } = useAriaCheckbox({ checkbox: { onInput }, checkboxLike: { checked, disabled, labelPosition }, label: { tagInput, tagLabel } });
    const { useCheckboxInputElementProps } = useCheckboxInputElement();
    const { useCheckboxLabelElementProps } = useCheckboxLabelElement();

    const input = useCheckboxInputElementProps({});
    const label = useCheckboxLabelElementProps({ children });
    if (labelPosition == "separate") {
        return (render ?? defaultRenderSeparate(tagInput, tagLabel))(checkboxInfo, input, label);
    }
    else {
        return (render ?? defaultRenderWrapping(tagInput, tagLabel))(checkboxInfo, input, label);
    }
}
