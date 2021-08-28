import { h } from "preact"
import { useMergedProps, useRefElement, useStableCallback } from "preact-prop-helpers";
import { useRandomId } from "preact-prop-helpers/use-random-id";
import { useCallback } from "preact/hooks";
import { useButtonLikeEventHandlers } from "./use-button";
import { TagSensitiveProps } from "./props";

export interface UseGenericLabelParameters {
    labelPrefix: string;
    inputPrefix: string;
    backupText?: string
}

/**
 * Adds an ID and "aria-labelledby" for two elements, an "input" element and a "label" element.
 * 
 * Returns the `useReferencedIdProps` hooks if you need to also add other ID-referencing attributes, like `for`
 * 
 * @see useInputLabel
 */
export function useGenericLabel({ labelPrefix, inputPrefix, backupText }: UseGenericLabelParameters = { labelPrefix: "label-", inputPrefix: "input-" }) {

    const { element: labelElement, getElement: getLabelElement, useRefElementProps: useLabelRefElementProps } = useRefElement<any>();
    const { element: inputElement, getElement: getInputElement, useRefElementProps: useInputRefElementProps } = useRefElement<any>();
    const { useRandomIdProps: useLabelRandomIdProps, id: labelId, randomId: labelRandomId, useReferencedIdProps: useReferencedLabelIdProps } = useRandomId({ prefix: labelPrefix });
    const { useRandomIdProps: useInputRandomIdProps, id: inputId, randomId: inputRandomId, useReferencedIdProps: useReferencedInputIdProps } = useRandomId({ prefix: inputPrefix });

    const labelHasMounted = !!(labelElement);
    const inputHasMounted = !!(inputElement);

    const useGenericLabelLabel = useCallback(function useGenericLabelLabel<E extends Element>() {
        return {
            useGenericLabelLabelProps: <P extends h.JSX.HTMLAttributes<E>>(props: P) => { return useLabelRandomIdProps(useLabelRefElementProps(props)); }
        }
    }, []);

    const useGenericLabelInput = useCallback(function useGenericLabelInput<E extends Element>() {
        return {
            useGenericLabelInputProps: <P extends h.JSX.HTMLAttributes<E>>({ "aria-labelledby": ariaLabelledby, "aria-label": ariaLabel, ...props }: P) => {
                return (useInputRandomIdProps(
                    useReferencedLabelIdProps("aria-labelledby")(
                        useInputRefElementProps(
                            useMergedProps<E>()({ "aria-label": (!labelHasMounted ? backupText : ariaLabel) ?? ariaLabel }, props)
                        )
                    )
                ));
            }
        }
    }, [labelHasMounted])

    return {
        useGenericLabelInput,
        useGenericLabelLabel,
        useReferencedLabelIdProps,
        useReferencedInputIdProps,
        labelId,
        inputId,
        labelElement,
        inputElement,
        getLabelElement,
        getInputElement,
    }

}

/**
 * Handles the attributes `id`, `for`, and `aria-labelledby` for to related elements.
 * 
 * It's assumed that the label is an `HTMLLabelElement`, and the input is something for which
 * the `for` attribute can reference.
 * 
 */
export function useInputLabel({ labelPrefix, inputPrefix } = { labelPrefix: "label-", inputPrefix: "input-" }) {

    const { useGenericLabelInput, useGenericLabelLabel, useReferencedInputIdProps, useReferencedLabelIdProps, inputId, labelId, inputElement, getInputElement, labelElement, getLabelElement } = useGenericLabel({ labelPrefix, inputPrefix });

    const useInputLabelLabel = useCallback(function useInputLabelLabel<E extends Element>({ tag }: TagSensitiveProps<E>) {
        const { useGenericLabelLabelProps } = useGenericLabelLabel<E>();

        return {
            useInputLabelLabelProps<P extends h.JSX.HTMLAttributes<E>>(props: P) {
                const withFor = useReferencedInputIdProps("for")(props);
                const withoutFor = props;

                return useGenericLabelLabelProps(tag == "label" ? withFor : withoutFor);
            }
        }
    }, [useGenericLabelInput]);

    const useInputLabelInput = useCallback(function useInputLabelInput<E extends Element>() {
        const { useGenericLabelInputProps } = useGenericLabelInput<E>();

        return {
            useInputLabelInputProps<P extends h.JSX.HTMLAttributes<E>>(props: P) {
                return useGenericLabelInputProps(props);
            }
        }
    }, [useGenericLabelLabel]);

    return {
        useInputLabelLabel,
        useInputLabelInput,
        labelId,
        inputId,
        inputElement,
        labelElement,
        getInputElement,
        getLabelElement
    }
}






export interface UseCheckboxLikeParameters<InputType extends Element, LabelType extends Element> {
    labelPosition: "wrapping" | "separate";
    role: string;
    disabled: boolean;
    onInput(event: h.JSX.TargetedEvent<InputType>): void;
    onInput(event: h.JSX.TargetedEvent<LabelType>): void;
}

/**
 * Handles label type (wrapping or separate) for checkboxes, radios, switches, etc.
 * @param param0 
 * @returns 
 */
export function useCheckboxLike<InputType extends Element, LabelType extends Element>({ disabled, labelPosition, onInput, role }: UseCheckboxLikeParameters<InputType, LabelType>) {

    const stableOnInput = useStableCallback(onInput);

    const { inputId, labelId, useInputLabelInput: useILInput, useInputLabelLabel: useILLabel, getLabelElement, getInputElement } = useInputLabel({ labelPrefix: "aria-checkbox-label-", inputPrefix: "aria-checkbox-input-" });

    const useCheckboxLikeInputElement = useCallback(function useCheckboxInputElement({ tag }: TagSensitiveProps<InputType>) {
        const { useInputLabelInputProps: useILInputProps } = useILInput<InputType>();
        const { element, useRefElementProps } = useRefElement<InputType>();


        return { inputElement: element, useCheckboxLikeInputElementProps };


        function useCheckboxLikeInputElementProps<P extends h.JSX.HTMLAttributes<InputType>>({ ...p0 }: P) {

            let props: h.JSX.HTMLAttributes<InputType> = useButtonLikeEventHandlers<InputType>(stableOnInput, disabled ? "exclude" : tag != "input" || labelPosition == "wrapping" ? undefined : "exclude")({});

            if (tag == "input" && labelPosition == "separate") {
                if (!disabled) {
                    props.onInput =  stableOnInput;
                }
            }

            props = useRefElementProps(useILInputProps(props));


            if (labelPosition == "wrapping") {
                // Because the wrapped label handles all interactions,
                // we need to make sure this element can't be interacted with
                // even if it's an input element.
                props.inert = true;
                props.tabIndex = -1;
                props.onFocus = e => getLabelElement().focus();
            }
            else {
                if (tag != "input" && props.type != "checkbox") {
                    props.role = role;
                }
                props["aria-disabled"] = disabled.toString();

                props.tabIndex = 0;
            }

            return useMergedProps<InputType>()(p0, props);
        }
    }, [useILInput, role, labelPosition, disabled]);

    const useCheckboxLikeLabelElement = useCallback(function useCheckboxLabelElement({ tag }: TagSensitiveProps<LabelType>) {
        const { useInputLabelLabelProps: useILLabelProps } = useILLabel<LabelType>({ tag });

        function useCheckboxLikeLabelElementProps<P extends h.JSX.HTMLAttributes<LabelType>>({ ...p0 }: P) {

            let newProps: h.JSX.HTMLAttributes<LabelType> = useButtonLikeEventHandlers<LabelType>(stableOnInput, disabled || (labelPosition == "separate" && tag == "label") ? "exclude" : undefined)({});

            if (labelPosition == "wrapping") {
                newProps.tabIndex = 0;
                newProps.role = role;
                newProps["aria-disabled"] = disabled.toString();
            }
            else {
                // The one case where there's almost nothing to do
                // The most normal case where everything acts according normal HTML mechanics.
            }

            return useMergedProps<LabelType>()(newProps, useILLabelProps(p0));
        }

        return { useCheckboxLikeLabelElementProps };

    }, [useILLabel, role, labelPosition]);


    return {
        useCheckboxLikeInputElement,
        useCheckboxLikeLabelElement,
        getLabelElement,
        getInputElement
    };

    
}
