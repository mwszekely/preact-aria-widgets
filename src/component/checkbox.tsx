import { createElement, h, VNode, ComponentChildren } from "preact";
import { ElementToTag, PropModifier } from "props";
import { useAriaCheckbox, UseAriaCheckboxParameters, UseAriaCheckboxReturnTypeInfo } from "../use-checkbox";

type Get<T, K extends keyof T> = T[K];

export interface AriaCheckboxProps<I extends HTMLElement, L extends HTMLElement> extends
    Get<UseAriaCheckboxParameters<I, L>, "checkboxLike">,
    Get<UseAriaCheckboxParameters<I, L>, "checkbox">,
    Get<UseAriaCheckboxParameters<I, L>, "label"> {
    render(info: UseAriaCheckboxReturnTypeInfo<I, L>, modifyInputProps: PropModifier<I>, modifyLabelProps: PropModifier<L>): VNode<any>;
}

export function defaultRenderCheckboxLike<I extends HTMLElement, L extends HTMLElement, InfoType>({ labelPosition, tagInput, tagLabel, makeInputProps, makeLabelProps }: DefaultRenderCheckboxLikeParameters<I, L, InfoType>) {
    return function (info: InfoType, modifyInputProps: PropModifier<I>, modifyLabelProps: PropModifier<L>): VNode<any> {

        if (labelPosition == "wrapping") {
            const input = createElement(tagInput as never, modifyInputProps(makeInputProps(info)));
            const { children, ...labelProps } = makeLabelProps(info);
            const label = createElement(tagLabel as never, modifyLabelProps({ ...labelProps, children: <>{input}{children}</> }));

            return (
                <>
                    {label}
                </>
            )
        }
        else if (labelPosition == "separate") {
            const input = createElement(tagInput as never, modifyInputProps(makeInputProps(info)));
            const label = createElement(tagLabel as never, modifyLabelProps(makeLabelProps(info)));

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

export interface DefaultRenderCheckboxLikeParameters<I extends HTMLElement, L extends HTMLElement, InfoType> { 
    labelPosition: "wrapping" | "separate" | "hidden", 
    tagInput: ElementToTag<I>, 
    tagLabel: ElementToTag<L>, 
    makeInputProps: (info: InfoType) => h.JSX.HTMLAttributes<I>, 
    makeLabelProps: (info: InfoType) => h.JSX.HTMLAttributes<L> 
}

export interface DefaultRenderCheckboxParameters<I extends HTMLElement, L extends HTMLElement> extends DefaultRenderCheckboxLikeParameters<I, L, UseAriaCheckboxReturnTypeInfo<I, L>> { }

export function defaultRenderCheckbox<I extends HTMLElement, L extends HTMLElement>({ labelPosition, tagInput, tagLabel, makeInputProps, makeLabelProps }: DefaultRenderCheckboxParameters<I, L>) {
    return defaultRenderCheckboxLike<I, L, UseAriaCheckboxReturnTypeInfo<I, L>>({ labelPosition, tagInput, tagLabel, makeInputProps, makeLabelProps });
}



export function AriaCheckbox<I extends HTMLElement, L extends HTMLElement>({ checked, disabled, tagLabel, labelPosition, tagInput, onInput, render }: AriaCheckboxProps<I, L>) {
    const { useCheckboxInputElement, useCheckboxLabelElement, ...checkboxInfo } = useAriaCheckbox({ checkbox: { onInput }, checkboxLike: { checked, disabled, labelPosition }, label: { tagInput, tagLabel } });
    const { useCheckboxInputElementProps } = useCheckboxInputElement();
    const { useCheckboxLabelElementProps } = useCheckboxLabelElement();


    return render(checkboxInfo, useCheckboxInputElementProps, useCheckboxLabelElementProps);
}
