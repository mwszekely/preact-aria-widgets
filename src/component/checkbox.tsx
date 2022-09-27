import { createElement, h, VNode, ComponentChildren } from "preact";
import { ElementToTag, PropModifier } from "props";
import { useCheckbox, UseCheckboxParameters, UseCheckboxReturnTypeInfo } from "../use-checkbox";

type Get<T, K extends keyof T> = T[K];

export interface CheckboxProps<I extends HTMLElement, L extends HTMLElement> extends
    Get<UseCheckboxParameters<I, L>, "checkboxLike">,
    Get<UseCheckboxParameters<I, L>, "checkbox">,
    Get<UseCheckboxParameters<I, L>, "label"> {
    render(info: UseCheckboxReturnTypeInfo<I, L>, modifyInputProps: PropModifier<I>, modifyLabelProps: PropModifier<L>): VNode<any>;
}

export function defaultRenderCheckboxLike<I extends HTMLElement, L extends HTMLElement, InfoType>({ labelPosition, tagInput, tagLabel, makeInputProps, makeLabelProps }: DefaultRenderCheckboxLikeParameters<I, L, InfoType>) {
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

export interface DefaultRenderCheckboxLikeParameters<I extends HTMLElement, L extends HTMLElement, InfoType> {
    labelPosition: "wrapping" | "separate" | "hidden",
    tagInput: ElementToTag<I>,
    tagLabel: ElementToTag<L>,
    makeInputProps: (info: InfoType) => h.JSX.HTMLAttributes<I>,
    makeLabelProps: (info: InfoType) => h.JSX.HTMLAttributes<L>
}

export interface DefaultRenderCheckboxParameters<I extends HTMLElement, L extends HTMLElement> extends DefaultRenderCheckboxLikeParameters<I, L, UseCheckboxReturnTypeInfo<I, L>> { }

export function defaultRenderCheckbox<I extends HTMLElement, L extends HTMLElement>({ labelPosition, tagInput, tagLabel, makeInputProps, makeLabelProps }: DefaultRenderCheckboxParameters<I, L>) {
    return defaultRenderCheckboxLike<I, L, UseCheckboxReturnTypeInfo<I, L>>({ labelPosition, tagInput, tagLabel, makeInputProps, makeLabelProps });
}



export function Checkbox<I extends HTMLElement, L extends HTMLElement>({ checked, disabled, tagLabel, labelPosition, tagInput, onCheckedChange, render }: CheckboxProps<I, L>) {
    const { useCheckboxInputElement, useCheckboxLabelElement, ...checkboxInfo } = useCheckbox({ checkbox: { onCheckedChange }, checkboxLike: { checked, disabled, labelPosition }, label: { tagInput, tagLabel } });
    const { useCheckboxInputElementProps } = useCheckboxInputElement();
    const { useCheckboxLabelElementProps } = useCheckboxLabelElement();


    return render(checkboxInfo, useCheckboxInputElementProps, useCheckboxLabelElementProps);
}
