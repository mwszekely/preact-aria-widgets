import { h } from "preact"
import { useRandomId } from "preact-prop-helpers/use-random-id";
import { TagSensitiveProps } from "./props";


/**
 * Adds an ID and "aria-labelledby" for two elements, an "input" element and a "label" element.
 * 
 * Returns the `useReferencedIdProps` hooks if you need to also add other ID-referencing attributes, like `for`
 * 
 * @see useInputLabel
 */
export function useGenericLabel({ labelPrefix, inputPrefix } = { labelPrefix: "label-", inputPrefix: "input-" }) {

    const { useRandomIdProps: useLabelRandomIdProps, id: labelId, randomId: labelRandomId, useReferencedIdProps: useReferencedLabelIdProps } = useRandomId({ prefix: labelPrefix });
    const { useRandomIdProps: useInputRandomIdProps, id: inputId, randomId: inputRandomId, useReferencedIdProps: useReferencedInputIdProps } = useRandomId({ prefix: inputPrefix });

    function useGenericLabelLabel<E extends Element>() {
        return {
            useGenericLabelLabelProps: <P extends h.JSX.HTMLAttributes<E>>(props: P) => { return useLabelRandomIdProps(props); }
        }
    }

    function useGenericLabelInput<E extends Element>() {
        // TODO: Only add this prop when the label mounts
        return {
            useGenericLabelInputProps: <P extends h.JSX.HTMLAttributes<E>>({ "aria-labelledby": ariaLabelledby, ...props }: P) => useInputRandomIdProps(useReferencedLabelIdProps("aria-labelledby")(props))
        }
    }

    return {
        useGenericLabelInput,
        useGenericLabelLabel,
        useReferencedLabelIdProps,
        useReferencedInputIdProps,
        labelId,
        inputId,
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

    const { useGenericLabelInput, useGenericLabelLabel, useReferencedInputIdProps, useReferencedLabelIdProps, inputId, labelId } = useGenericLabel({ labelPrefix, inputPrefix });

    function useInputLabelLabel<E extends Element>({ tag }: TagSensitiveProps<E>) {
        const { useGenericLabelLabelProps } = useGenericLabelLabel<E>();

        return {
            useInputLabelLabelProps<P extends h.JSX.HTMLAttributes<E>>(props: P) {
                const withFor = useReferencedInputIdProps("for")(props);
                const withoutFor = props;

                return useGenericLabelLabelProps(tag == "label"? withFor : withoutFor);
            }
        }
    }

    function useInputLabelInput<E extends Element>() {
        const { useGenericLabelInputProps } = useGenericLabelInput<E>();

        return {
            useInputLabelInputProps<P extends h.JSX.HTMLAttributes<E>>(props: P) {
                return useGenericLabelInputProps(props);
            }
        }
    }

    return {
        useInputLabelLabel,
        useInputLabelInput,
        labelId,
        inputId,
    }
}
