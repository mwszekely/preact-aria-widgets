import { h } from "preact";
import { MergedProps, useMergedProps, useRandomId, UseRandomIdPropsReturnType, useRefElement, UseRefElementPropsReturnType, UseReferencedIdPropsReturnType, useStableCallback } from "preact-prop-helpers";
import { useCallback, useEffect, useState } from "preact/hooks";
import { ElementToTag, TagSensitiveProps } from "./props";
import { useButtonLikeEventHandlers } from "./use-button";

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

    const [labelElement, setLabelElement] = useState<any>(null);
    const [inputElement, setInputElement] = useState<any>(null);
    const { getElement: getLabelElement, useRefElementProps: useLabelRefElementProps } = useRefElement<any>({ onElementChange: setLabelElement });
    const { getElement: getInputElement, useRefElementProps: useInputRefElementProps } = useRefElement<any>({ onElementChange: setInputElement });
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

export type UseInputLabelLabel = <E extends Element>({ tag }: TagSensitiveProps<E>) => {
    useInputLabelLabelProps<P extends h.JSX.HTMLAttributes<E>>(props: P): UseRandomIdPropsReturnType<UseRefElementPropsReturnType<any, P | UseReferencedIdPropsReturnType<P, "for">>>;
};

export type UseInputLabelInput = <E extends Element>() => {
    useInputLabelInputProps<P extends h.JSX.HTMLAttributes<E>>(props: P): UseRandomIdPropsReturnType<UseReferencedIdPropsReturnType<UseRefElementPropsReturnType<any, MergedProps<E, {
        "aria-label": string | undefined;
    }, Omit<P, "aria-labelledby" | "aria-label">>>, "aria-labelledby">>;
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

    const useInputLabelLabel: UseInputLabelLabel = useCallback(function useInputLabelLabel<E extends Element>({ tag }: TagSensitiveProps<E>) {
        const { useGenericLabelLabelProps } = useGenericLabelLabel<E>();

        return {
            useInputLabelLabelProps<P extends h.JSX.HTMLAttributes<E>>(props: P) {
                const withFor = useReferencedInputIdProps("for")(props);
                const withoutFor = props;

                return useGenericLabelLabelProps(tag == "label" ? withFor : withoutFor);
            }
        }
    }, [useGenericLabelInput]);

    const useInputLabelInput: UseInputLabelInput = useCallback(function useInputLabelInput<E extends Element>() {
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
    checked: boolean;
    onInput?(event: h.JSX.TargetedEvent<InputType>): void;
    onInput?(event: h.JSX.TargetedEvent<LabelType>): void;
}

const handlesInput = <E extends Element>(tag: ElementToTag<E>, labelPosition: "wrapping" | "separate", which: "input-element" | "label-element") => {
    if (labelPosition === "separate") {
        if (which === "input-element")
            return true;
        else if (which === "label-element")
            return tag != "input";
    }
    else if (labelPosition === "wrapping") {
        if (which === "input-element")
            return false;
        if (which == "label-element")
            return true;
    }
};

export type UseCheckboxLikeInputElement<InputType extends Element> = ({ tag }: TagSensitiveProps<InputType>) => {
    getInputElement: () => InputType | null;
    useCheckboxLikeInputElementProps: <P extends h.JSX.HTMLAttributes<InputType>>({ ...p0 }: P) => MergedProps<InputType, P, h.JSX.HTMLAttributes<InputType>>;
}

export type UseCheckboxLikeLabelElement<LabelType extends Element> = ({ tag }: TagSensitiveProps<LabelType>) => {
    useCheckboxLikeLabelElementProps: <P extends h.JSX.HTMLAttributes<LabelType>>({ ...p0 }: P) => h.JSX.HTMLAttributes<LabelType>;
}

/**
 * Handles label type (wrapping or separate) for checkboxes, radios, switches, etc.
 * @param param0 
 * @returns 
 */
export function useCheckboxLike<InputType extends Element, LabelType extends Element>({ checked, disabled, labelPosition, onInput, role }: UseCheckboxLikeParameters<InputType, LabelType>) {

    const stableOnInput = useStableCallback((e: h.JSX.TargetedEvent<InputType> | h.JSX.TargetedEvent<LabelType>) => { e.preventDefault(); onInput?.(e as h.JSX.TargetedEvent<InputType>); });

    const { inputId, labelId, useInputLabelInput: useILInput, useInputLabelLabel: useILLabel, getLabelElement, getInputElement } = useInputLabel({ labelPrefix: "aria-checkbox-label-", inputPrefix: "aria-checkbox-input-" });




    const useCheckboxLikeInputElement: UseCheckboxLikeInputElement<InputType> = useCallback(function useCheckboxInputElement({ tag }: TagSensitiveProps<InputType>) {
        const { useInputLabelInputProps: useILInputProps } = useILInput<InputType>();
        const { useRefElementProps, getElement } = useRefElement<InputType>({});

        // onClick and onChange are a bit messy, so we need to
        // *always* make sure that the visible state is correct
        // after all the event dust settles.
        // See https://github.com/preactjs/preact/issues/2745,
        // and https://github.com/preactjs/preact/issues/1899#issuecomment-525690194
        useEffect(() => {
            const element = getElement();
            if (element && tag == "input") {
                (element as Element as HTMLInputElement).checked = checked
            }
        }, [tag, checked])

        return { getInputElement: getElement, useCheckboxLikeInputElementProps };


        function useCheckboxLikeInputElementProps<P extends h.JSX.HTMLAttributes<InputType>>({ ...p0 }: P) {

            // For some reason, Chrome won't fire onInput events for radio buttons that are tabIndex=-1??
            // Needs investigating, but onInput works fine in Firefox
            // TODO
            let props: h.JSX.HTMLAttributes<InputType> = useButtonLikeEventHandlers<InputType>(disabled || !handlesInput(tag, labelPosition, "input-element") ? undefined : stableOnInput, undefined)({});

            if (tag == "input")
                props.onInput = (e: Event) => e.preventDefault();

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
                if (tag === "input") {
                    props.checked = checked;
                }
                else {
                    props.role = role;
                    props.tabIndex = 0;
                    props["aria-checked"] = checked ? "true" : undefined;
                }
                props["aria-disabled"] = disabled.toString();

            }

            // Make sure that label clicks can't affect the checkbox while it's disabled
            props.onClick = disabled? ((e) => { e.preventDefault()}) :  props.onClick;

            return useMergedProps<InputType>()(p0, props);
        }
    }, [useILInput, role, labelPosition, disabled, checked]);

    const useCheckboxLikeLabelElement = useCallback(function useCheckboxLabelElement({ tag }: TagSensitiveProps<LabelType>) {
        const { useInputLabelLabelProps: useILLabelProps } = useILLabel<LabelType>({ tag });

        function useCheckboxLikeLabelElementProps<P extends h.JSX.HTMLAttributes<LabelType>>({ ...p0 }: P) {

            let newProps: h.JSX.HTMLAttributes<LabelType> = useButtonLikeEventHandlers<LabelType>(disabled || !handlesInput(tag, labelPosition, "label-element") ? undefined : stableOnInput, undefined)({ });

            if (labelPosition == "wrapping") {
                newProps.tabIndex = 0;
                newProps.role = role;
                newProps["aria-disabled"] = disabled.toString();
                newProps["aria-checked"] = checked.toString();
            }
            else {
                // The one case where there's almost nothing to do
                // The most normal case where everything acts according normal HTML mechanics.

            }

            // Just make sure that label clicks can't affect the checkbox while it's disabled
            newProps.onClick = disabled? ((e) => { e.preventDefault()}) : newProps.onClick;

            return useMergedProps<LabelType>()(newProps, useILLabelProps(p0));
        }

        return { useCheckboxLikeLabelElementProps };

    }, [useILLabel, disabled, checked, role, labelPosition]);


    return {
        useCheckboxLikeInputElement,
        useCheckboxLikeLabelElement,
        getLabelElement,
        getInputElement
    };


}
