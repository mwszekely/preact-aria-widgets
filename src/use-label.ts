import { h } from "preact"
import { useMergedProps, useRefElement } from "preact-prop-helpers";
import { useRandomId } from "preact-prop-helpers/use-random-id";
import { useCallback } from "preact/hooks";
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
