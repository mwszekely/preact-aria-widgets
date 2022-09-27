import { h } from "preact";
import { useCallback } from "preact/hooks";
import { debugLog, EnhancedEvent, enhanceEvent } from "./props";
import { useCheckboxLike, UseCheckboxLikeParameters, UseCheckboxLikeReturnTypeInfo } from "./use-label";



export type CheckboxChangeEvent<E extends EventTarget> = EnhancedEvent<E, Event, { checked: boolean }>;

export type UseCheckboxInputElement<InputType extends Element> = () => { useCheckboxInputElementProps: ({ ...p0 }: h.JSX.HTMLAttributes<InputType>) => h.JSX.HTMLAttributes<InputType>; }
export type UseCheckboxLabelElement<LabelType extends Element> = () => { useCheckboxLabelElementProps: ({ ...p0 }: h.JSX.HTMLAttributes<LabelType>) => h.JSX.HTMLAttributes<LabelType>; }


export interface UseCheckboxParameters<I extends Element, L extends Element> {
    checkboxLike: Omit<UseCheckboxLikeParameters<I, L>["checkboxLike"], "onCheckedChange" | "role">;
    label: UseCheckboxLikeParameters<I, L>["label"];
    checkbox: {
        onCheckedChange?(event: CheckboxChangeEvent<I>): void;
    }
}

export interface UseCheckboxReturnTypeInfo<InputType extends Element, LabelType extends Element> extends UseCheckboxLikeReturnTypeInfo<InputType, LabelType> {
    //checkboxLike: UseCheckboxLikeReturnType<InputType, LabelType>["checkboxLike"];
    //label: UseCheckboxLikeReturnType<InputType, LabelType>["label"];
}

export interface UseCheckboxReturnTypeWithHooks<InputType extends Element, LabelType extends Element> extends UseCheckboxReturnTypeInfo<InputType, LabelType> {
    /** **Notably unstable** */
    useCheckboxInputElement: UseCheckboxInputElement<InputType>;
    /** **Notably unstable** */
    useCheckboxLabelElement: UseCheckboxLabelElement<LabelType>;
}

export function useCheckbox<InputType extends Element, LabelType extends Element>({ checkboxLike, label, checkbox }: UseCheckboxParameters<InputType, LabelType>): UseCheckboxReturnTypeWithHooks<InputType, LabelType> {
    debugLog("useCheckbox");

    const { disabled, labelPosition, checked } = checkboxLike;
    const { tagInput, tagLabel } = label;
    const { onCheckedChange: onInput } = checkbox;

    const onInputEnhanced = (e: h.JSX.TargetedEvent<InputType>) => onInput?.(enhanceEvent<InputType, Event, { checked: boolean }>(e, { checked: !checked }));
    const { useCheckboxLikeInputElement, useCheckboxLikeLabelElement, ...checkboxLikeRest } = useCheckboxLike<InputType, LabelType>({ checkboxLike: { role: "checkbox", checked, onCheckedChange: onInputEnhanced, disabled, labelPosition, }, label });

    const useCheckboxInputElement: UseCheckboxInputElement<InputType> = useCallback(function useCheckboxInputElement() {
        const tag = tagInput;
        const { useCheckboxLikeInputElementProps } = useCheckboxLikeInputElement();

        return { useCheckboxInputElementProps };

        function useCheckboxInputElementProps({ ...p0 }: h.JSX.HTMLAttributes<InputType>) {

            const props: h.JSX.HTMLAttributes<InputType> = useCheckboxLikeInputElementProps(p0);
            props.checked ??= !!checked;

            if (tag == "input")
                props.type = "checkbox";

            return props;
        }
    }, [useCheckboxLikeInputElement, checked, labelPosition, disabled, tagInput]);

    const useCheckboxLabelElement = useCallback(function useCheckboxLabelElement() {
        const { useCheckboxLikeLabelElementProps } = useCheckboxLikeLabelElement();

        function useCheckboxLabelElementProps({ ...props }: h.JSX.HTMLAttributes<LabelType>) {
            return useCheckboxLikeLabelElementProps(props);
        }

        return { useCheckboxLabelElementProps };
    }, [useCheckboxLikeLabelElement, disabled, labelPosition, tagLabel]);


    return {
        useCheckboxInputElement,
        useCheckboxLabelElement,
        ...checkboxLikeRest
    };

}
