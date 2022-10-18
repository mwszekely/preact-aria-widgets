import { createElement, h, Ref, VNode } from "preact";
import { useMergedProps, useRefElement } from "preact-prop-helpers";
import { useCallback, useImperativeHandle } from "preact/hooks";
import { ElementToTag, PropModifier } from "../props";
import { useCheckbox, UseCheckboxParameters, UseCheckboxReturnTypeInfo } from "../use-checkbox";
import { memoForwardRef } from "./util";

type Get<T, K extends keyof T> = T[K];

export interface CheckboxProps<I extends Element, L extends Element> extends
Get<UseCheckboxParameters<I, L>, "checkboxLikeParameters">,
Get<UseCheckboxParameters<I, L>, "checkboxParameters">,
Get<UseCheckboxParameters<I, L>, "labelParameters">
//Get<UseCheckboxParameters<I, L>, "">,
//Get<UseCheckboxParameters<I, L>, "checkboxLikeParameters">,
//Get<UseCheckboxParameters<I, L>, "checkboxLikeParameters">,
//    Get<UseCheckboxParameters<I, L>, "checkbox">,
//    Get<UseCheckboxParameters<I, L>, "label">,
//    Get<UseCheckboxParameters<I, L>, "hasFocusInput">
 {
    ref?: Ref<UseCheckboxReturnTypeInfo<I, L>>;
    render(info: UseCheckboxReturnTypeInfo<I, L>, inputProps: h.JSX.HTMLAttributes<I>, labelProps: h.JSX.HTMLAttributes<L>): VNode<any>;
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
    
    const { refElementReturn: refElementInputReturn } = useRefElement<I>({ refElementParameters: {  } });
    const { refElementReturn: refElementLabelReturn } = useRefElement<L>({ refElementParameters: {  } });
    
    const checkbox = useCheckbox<I, L>({
        checkboxLikeParameters: { checked, disabled },
        checkboxParameters: { onCheckedChange },
        labelParameters: { ariaLabel, labelPosition, tagInput, tagLabel },
        randomIdInputParameters: { prefix: "checkbox-input-" },
        randomIdLabelParameters: { prefix: "checkbox-label-" },
        randomIdReferencerElementInputParameters: {},
        randomIdReferencerElementLabelParameters: {},
        refElementInputReturn,
        refElementLabelReturn
    });
    
    useImperativeHandle(ref!, () => checkbox);
    
    const { 
        checkboxReturn: { propsUnstable: p1 },
        labelInputReturn: { unstableProps: p2 },
        pressInputReturn: { propsStable: p3 },
        pressLabelReturn: { propsStable: p5 },
        randomIdInputReturn: {  },
        randomIdLabelReturn: {  },
        randomIdReferencerInputReturn: { propsStable: p7 },
        randomIdReferencerLabelReturn: { propsStable: p8 },
        randomIdSourceInputReturn: { propsStable: p9 },
        randomIdSourceLabelReturn: { propsStable: p10 },
        checkboxLikeInputReturn: { propsUnstable: p11 },
        checkboxLikeLabelReturn: { propsUnstable: p12 }
     } = checkbox;

     const a1 = useMergedProps(p1, p2, p3, p7, p9);
     const a2 = useMergedProps(p5, p8, p10);


    return render(checkbox, a1, a2);
});
