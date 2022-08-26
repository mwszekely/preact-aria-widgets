import { h } from "preact";
import { useCallback, useEffect } from "preact/hooks";
import { ElementToTag, enhanceEvent, EventDetail } from "./props";
import { useCheckboxLike, UseCheckboxLikeParameters, UseCheckboxLikeReturnType } from "./use-label";



export type CheckboxChangeEvent<EventType extends Event> = EventType & { [EventDetail]: { checked: boolean } };

export type UseCheckboxInputElement<InputType extends Element> = () => { useCheckboxInputElementProps: ({ ...p0 }: h.JSX.HTMLAttributes<InputType>) => h.JSX.HTMLAttributes<InputType>; }
export type UseCheckboxLabelElement<LabelType extends Element> = () => { useCheckboxLabelElementProps: ({ ...p0 }: h.JSX.HTMLAttributes<LabelType>) => h.JSX.HTMLAttributes<LabelType>; }


export interface UseAriaCheckboxParameters<I extends Element, L extends Element> extends Omit<UseCheckboxLikeParameters<I, L>, "onInput" | "role" | "checked"> {
    checked: boolean | "mixed";
    onInput?(event: CheckboxChangeEvent<h.JSX.TargetedEvent<I>>): void;
    onInput?(event: CheckboxChangeEvent<h.JSX.TargetedEvent<L>>): void;
    tagInput: ElementToTag<I>;
    tagLabel: ElementToTag<L>;
}

export interface UseAriaCheckboxReturnType<InputType extends Element, LabelType extends HTMLElement | SVGElement> extends Omit<UseCheckboxLikeReturnType<InputType, LabelType>, "useCheckboxLikeInputElement" | "useCheckboxLikeLabelElement"> {
    /** **Notably unstable** */
    useCheckboxInputElement: UseCheckboxInputElement<InputType>;
    /** **Notably unstable** */
    useCheckboxLabelElement: UseCheckboxLabelElement<LabelType>;
    inputId: string | undefined;
    labelId: string | undefined;
}

export function useAriaCheckbox<InputType extends Element, LabelType extends HTMLElement | SVGElement>({ labelPosition, checked, onInput, disabled, tagInput, tagLabel }: UseAriaCheckboxParameters<InputType, LabelType>): UseAriaCheckboxReturnType<InputType, LabelType> {

    const onInputEnhanced = (e: h.JSX.TargetedEvent<InputType | LabelType, Event>) => onInput?.(enhanceEvent(e as h.JSX.TargetedEvent<InputType, Event>, { checked: !checked }));
    const { useCheckboxLikeInputElement, useCheckboxLikeLabelElement, ...checkboxLikeRest } = useCheckboxLike<InputType, LabelType>({ checked: !!checked, labelPosition, role: "checkbox", disabled, onInput: onInputEnhanced, tagInput: tagInput as never, tagLabel: tagLabel as never });

    const useCheckboxInputElement: UseCheckboxInputElement<InputType> = useCallback(function useCheckboxInputElement() {
        const tag = tagInput;
        const { getInputElement, useCheckboxLikeInputElementProps } = useCheckboxLikeInputElement()
        const isMixed = (checked == "mixed");

        useEffect(() => {
            const inputElement = getInputElement();
            if (inputElement && tag === "input") {
                (inputElement as any).indeterminate = isMixed;
            }
        }, [isMixed, tag]);

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
