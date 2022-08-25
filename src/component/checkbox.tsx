import { createElement, h, VNode } from "preact";
import { useAriaCheckbox, UseAriaCheckboxParameters } from "use-checkbox";

export interface AriaCheckboxProps<I extends HTMLElement, L extends HTMLElement> extends UseAriaCheckboxParameters<I, L> {
    propsInput(): h.JSX.HTMLAttributes<I>;
    propsLabel(): h.JSX.HTMLAttributes<L>;
    render?(input: VNode<any>, label: VNode<any>): VNode<any>;
}

function defaultRenderSeparate(input: VNode<any>, label: VNode<any>): VNode<any> {
    return (
        <>
            {input}
            {label}
        </>
    )
}

function defaultRenderCombined(input: VNode<any>, label: VNode<any>): VNode<any> {
    label.props.children = <>{input}{label.props.children}</>
    return (
        <>
            {label}
        </>
    )
}

export function AriaCheckbox<I extends HTMLElement, L extends HTMLElement>({ checked, disabled, tagLabel, labelPosition, tagInput, onInput, propsInput, propsLabel, render }: AriaCheckboxProps<I, L>) {
    const { inputId, labelId, useCheckboxInputElement, useCheckboxLabelElement } = useAriaCheckbox({ checked, disabled, tagInput, labelPosition, tagLabel, onInput });
    const { useCheckboxInputElementProps } = useCheckboxInputElement();
    const { useCheckboxLabelElementProps } = useCheckboxLabelElement();

    const input = createElement(tagInput, useCheckboxInputElementProps(propsInput()) as any);
    const label = createElement(tagLabel, useCheckboxLabelElementProps(propsLabel()) as any);
    if (labelPosition == "separate") {
        return (render ?? defaultRenderSeparate)(input, label);
    }
    else {
        return (render ?? defaultRenderCombined)(input, label);
    }
}
