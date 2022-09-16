import { h } from "preact";
import { useCallback } from "preact/hooks";
import { debugLog, enhanceEvent, EventDetail } from "./props";
import { useCheckboxLike, UseCheckboxLikeParameters, UseCheckboxLikeReturnTypeInfo } from "./use-label";



export type CheckboxChangeEvent<EventType extends Event> = EventType & { [EventDetail]: { checked: boolean } };

export type UseCheckboxInputElement<InputType extends Element> = () => { useCheckboxInputElementProps: ({ ...p0 }: h.JSX.HTMLAttributes<InputType>) => h.JSX.HTMLAttributes<InputType>; }
export type UseCheckboxLabelElement<LabelType extends Element> = () => { useCheckboxLabelElementProps: ({ ...p0 }: h.JSX.HTMLAttributes<LabelType>) => h.JSX.HTMLAttributes<LabelType>; }


export interface UseAriaCheckboxParameters<I extends Element, L extends Element> {
    checkboxLike: Omit<UseCheckboxLikeParameters<I, L>["checkboxLike"], "onInput" | "role">;
    label: UseCheckboxLikeParameters<I, L>["label"];
    checkbox: {
        onInput?(event: CheckboxChangeEvent<h.JSX.TargetedEvent<I>>): void;
        onInput?(event: CheckboxChangeEvent<h.JSX.TargetedEvent<L>>): void;
    }
}

export interface UseAriaCheckboxReturnTypeInfo<InputType extends Element, LabelType extends Element> extends UseCheckboxLikeReturnTypeInfo<InputType, LabelType> {
    //checkboxLike: UseCheckboxLikeReturnType<InputType, LabelType>["checkboxLike"];
    //label: UseCheckboxLikeReturnType<InputType, LabelType>["label"];
}

export interface UseAriaCheckboxReturnTypeWithHooks<InputType extends Element, LabelType extends Element> extends UseAriaCheckboxReturnTypeInfo<InputType, LabelType> {
    /** **Notably unstable** */
    useCheckboxInputElement: UseCheckboxInputElement<InputType>;
    /** **Notably unstable** */
    useCheckboxLabelElement: UseCheckboxLabelElement<LabelType>;
}

export function useAriaCheckbox<InputType extends Element, LabelType extends Element>({ checkboxLike, label, checkbox }: UseAriaCheckboxParameters<InputType, LabelType>): UseAriaCheckboxReturnTypeWithHooks<InputType, LabelType> {
    debugLog("useAriaCheckbox");

    const { disabled, labelPosition, checked } = checkboxLike;
    const { tagInput, tagLabel } = label;
    const { onInput } = checkbox;

    const onInputEnhanced = (e: h.JSX.TargetedEvent<InputType | LabelType, Event>) => onInput?.(enhanceEvent(e as h.JSX.TargetedEvent<InputType, Event>, { checked: !checked }));
    const { useCheckboxLikeInputElement, useCheckboxLikeLabelElement, ...checkboxLikeRest } = useCheckboxLike<InputType, LabelType>({ checkboxLike: { role: "checkbox", checked, onInput: onInputEnhanced, disabled, labelPosition,  }, label });

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
