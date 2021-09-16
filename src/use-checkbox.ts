import { h } from "preact";
import { useCallback, useEffect } from "preact/hooks";
import { enhanceEvent, EventDetail, TagSensitiveProps } from "./props";
import { useCheckboxLike, UseCheckboxLikeParameters } from "./use-label";



export type CheckboxChangeEvent<EventType extends Event> = EventType & { [EventDetail]: { checked: boolean } };

export type UseCheckboxInputElement<InputType extends Element> = ({ tag }: TagSensitiveProps<InputType>) => { useCheckboxInputElementProps: <P extends h.JSX.HTMLAttributes<InputType>>({ ...p0 }: P) => h.JSX.HTMLAttributes<InputType>; }
export type UseCheckboxLabelElement<LabelType extends Element> = ({ tag }: TagSensitiveProps<LabelType>) => { useCheckboxLabelElementProps: <P extends h.JSX.HTMLAttributes<LabelType>>({ ...p0 }: P) => h.JSX.HTMLAttributes<LabelType>; }


interface UseAriaCheckboxParameters<I extends Element, L extends Element> extends Omit<UseCheckboxLikeParameters<I, L>, "onInput" | "role" | "checked"> {
    checked: boolean | "mixed";
    onInput?(event: CheckboxChangeEvent<h.JSX.TargetedEvent<I>>): void;
    onInput?(event: CheckboxChangeEvent<h.JSX.TargetedEvent<L>>): void;
}


export function useAriaCheckbox<InputType extends Element, LabelType extends Element>({ labelPosition, checked, onInput, disabled }: UseAriaCheckboxParameters<InputType, LabelType>) {

    const onInputEnhanced = (e: h.JSX.TargetedEvent<InputType | LabelType, Event>) => onInput?.(enhanceEvent(e as h.JSX.TargetedEvent<InputType, Event>, { checked: !checked }));
    const { getInputElement, getLabelElement, useCheckboxLikeInputElement, useCheckboxLikeLabelElement } = useCheckboxLike<InputType, LabelType>({ checked: !!checked, labelPosition, role: "checkbox", disabled, onInput: onInputEnhanced });

    const useCheckboxInputElement: UseCheckboxInputElement<InputType> = useCallback(function useCheckboxInputElement({ tag }: TagSensitiveProps<InputType>) {
        const { inputElement, useCheckboxLikeInputElementProps } = useCheckboxLikeInputElement({ tag })
        const isMixed = (checked == "mixed");

        useEffect(() => {
            if (inputElement && tag === "input") {
                (inputElement as any).indeterminate = isMixed;
            }
        }, [inputElement, isMixed, tag]);

        return { useCheckboxInputElementProps };

        function useCheckboxInputElementProps<P extends h.JSX.HTMLAttributes<InputType>>({ ...p0 }: P) {

            let props: h.JSX.HTMLAttributes<InputType> = useCheckboxLikeInputElementProps(p0);
            props.checked ??= !!checked;

            if (tag == "input")
                props.type = "checkbox";

            return props;
        }
    }, [checked, labelPosition, disabled]);

    const useCheckboxLabelElement = useCallback(function useCheckboxLabelElement({ tag }: TagSensitiveProps<LabelType>) {
        const { useCheckboxLikeLabelElementProps } = useCheckboxLikeLabelElement({ tag });

        function useCheckboxLabelElementProps<P extends h.JSX.HTMLAttributes<LabelType>>({ ...props }: P) {
            return useCheckboxLikeLabelElementProps(props);
        };

        return { useCheckboxLabelElementProps };
    }, [useCheckboxLikeLabelElement, disabled, labelPosition]);


    return {
        useCheckboxInputElement,
        useCheckboxLabelElement
    };

}
