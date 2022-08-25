import { h } from "preact";
import { useMergedProps, useRandomId, useRefElement, useStableCallback } from "preact-prop-helpers";
import { useCallback, useEffect, useState } from "preact/hooks";
import { ElementToTag, TagSensitiveProps } from "./props";
import { usePressEventHandlers } from "./use-button";

export interface UseLabelParameters<InputElement extends Element, LabelElement extends Element> {
    labelPrefix: string;
    inputPrefix: string;
    tagInput: ElementToTag<InputElement>;
    tagLabel: ElementToTag<LabelElement>;
}

/**
 * Adds an ID and "aria-labelledby" for two elements, an "input" element and a "label" element.
 * 
 * Returns the `useReferencedIdProps` hooks if you need to also add other ID-referencer attributes, like `for`
 * 
 * @see useInputLabel
 */
export function useLabel<InputElement extends Element, LabelElement extends Element>({ labelPrefix, inputPrefix, tagInput, tagLabel }: UseLabelParameters<InputElement, LabelElement> = { labelPrefix: "label-", inputPrefix: "input-", tagInput: "input" as never, tagLabel: "label" as never }) {

    const { useRandomIdSourceElement: useLabelAsSourceId, useRandomIdReferencerElement: useLabelAsReferencerId, usedId: labelId } = useRandomId<LabelElement>({ prefix: labelPrefix, onAfterChildLayoutEffect: null, onChildrenMountChange: null });
    const { useRandomIdSourceElement: useInputAsSourceId, useRandomIdReferencerElement: useInputAsReferencerId, usedId: inputId } = useRandomId<InputElement>({ prefix: inputPrefix, onAfterChildLayoutEffect: null, onChildrenMountChange: null });
    const { useRandomIdSourceElementProps: useLabelAsSourceIdProps } = useLabelAsSourceId();
    const { useRandomIdSourceElementProps: useInputAsSourceIdProps } = useInputAsSourceId();
    const { useRandomIdReferencerElementProps: useLabelAsReferencerIdProps } = useLabelAsReferencerId<InputElement>("aria-labelledby" as never);
    const { useRandomIdReferencerElementProps: useInputAsReferencerIdProps } = useInputAsReferencerId<LabelElement>("for");

    let isSyntheticLabel = (tagInput != "input" || tagLabel != "label");

    const useLabelLabel: (() => {useLabelLabelProps: (props: h.JSX.HTMLAttributes<LabelElement>) => h.JSX.HTMLAttributes<LabelElement>;}) = useCallback(function useLabelLabel() {
        return {
            useLabelLabelProps: (props: h.JSX.HTMLAttributes<LabelElement>): h.JSX.HTMLAttributes<LabelElement> => {
                let propsWithoutFor = useLabelAsSourceIdProps(props);
                let propsWithFor = useInputAsReferencerIdProps(propsWithoutFor);
                if (tagLabel == "label" && tagInput == "input")
                    return propsWithFor;
                else
                    return propsWithoutFor;
            }
        }
    }, [isSyntheticLabel]);

    const useLabelInput = useCallback(function useLabelInput() {
        return {
            useLabelInputProps: ({ "aria-labelledby": ariaLabelledby, ...props }: h.JSX.HTMLAttributes<InputElement>): h.JSX.HTMLAttributes<InputElement> => {
                console.assert(!ariaLabelledby);

                const propsWithoutAriaLabelledBy = useInputAsSourceIdProps(props);
                const propsWithAriaLabelledBy = useLabelAsReferencerIdProps(propsWithoutAriaLabelledBy);
                if (isSyntheticLabel)
                    return propsWithAriaLabelledBy;
                else
                    return propsWithoutAriaLabelledBy;

            }
        }
    }, [])

    return {
        useLabelInput,
        useLabelLabel,
        labelId,
        inputId
    }

}






export interface UseCheckboxLikeParameters<InputType extends Element, LabelType extends Element> {
    labelPosition: "wrapping" | "separate";
    role: string;
    disabled: boolean;
    checked: boolean;
    tagInput: ElementToTag<InputType>;
    tagLabel: ElementToTag<LabelType>;
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

export type UseCheckboxLikeInputElement<InputType extends Element> = () => {
    getInputElement: () => InputType | null;
    useCheckboxLikeInputElementProps: ({ ...p0 }: h.JSX.HTMLAttributes<InputType>) => h.JSX.HTMLAttributes<InputType>;
}

export type UseCheckboxLikeLabelElement<LabelType extends Element> = () => {
    useCheckboxLikeLabelElementProps: ({ ...p0 }: h.JSX.HTMLAttributes<LabelType>) => h.JSX.HTMLAttributes<LabelType>;
}

/**
 * Handles label type (wrapping or separate) for checkboxes, radios, switches, etc.
 * @param param0 
 * @returns 
 */
export function useCheckboxLike<InputType extends Element, LabelType extends HTMLElement | SVGElement>({ checked, disabled, labelPosition, onInput, role, tagInput, tagLabel }: UseCheckboxLikeParameters<InputType, LabelType>) {

    const stableOnInput = useStableCallback((e: h.JSX.TargetedEvent<InputType> | h.JSX.TargetedEvent<LabelType>) => { e.preventDefault(); onInput?.(e as h.JSX.TargetedEvent<InputType>); });

    const { useLabelInput: useILInput, useLabelLabel: useILLabel, inputId, labelId } = useLabel<InputType, LabelType>({ labelPrefix: "aria-checkbox-label-", inputPrefix: "aria-checkbox-input-", tagInput: tagInput as never, tagLabel: tagLabel as never });


    const { getElement: getLabelElement, useRefElementProps: useLabelRefElementProps } = useRefElement<LabelType>();
    const { getElement: getInputElement, useRefElementProps: useInputRefElementProps } = useRefElement<InputType>();

    const useCheckboxLikeInputElement: UseCheckboxLikeInputElement<InputType> = useCallback(function useCheckboxInputElement() {
        const tag = tagInput;
        const { useLabelInputProps: useILInputProps } = useILInput();
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


        function useCheckboxLikeInputElementProps({ ...p0 }: h.JSX.HTMLAttributes<InputType>): h.JSX.HTMLAttributes<InputType> {

            // For some reason, Chrome won't fire onInput events for radio buttons that are tabIndex=-1??
            // Needs investigating, but onInput works fine in Firefox
            // TODO
            let props: h.JSX.HTMLAttributes<InputType> = usePressEventHandlers<InputType>(disabled || !handlesInput(tag, labelPosition, "input-element") ? undefined : stableOnInput, undefined);

            if (tag == "input")
                props.onInput = (e: Event) => e.preventDefault();

            props = useRefElementProps(useILInputProps(props));


            if (labelPosition == "wrapping") {
                // Because the wrapped label handles all interactions,
                // we need to make sure this element can't be interacted with
                // even if it's an input element.
                props.inert = true;
                props.tabIndex = -1;
                props.onFocus = _ => getLabelElement()?.focus();
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
            props.onClick = disabled ? ((e) => { e.preventDefault() }) : props.onClick;

            return useInputRefElementProps(useMergedProps<InputType>(p0, props));
        }
    }, [useILInput, role, labelPosition, disabled, checked, tagInput]);

    const useCheckboxLikeLabelElement = useCallback(function useCheckboxLabelElement() {
        const tag = tagLabel;
        const { useLabelLabelProps: useILLabelProps } = useILLabel();

        function useCheckboxLikeLabelElementProps({ ...p0 }: h.JSX.HTMLAttributes<LabelType>): h.JSX.HTMLAttributes<LabelType> {

            const newProps: h.JSX.HTMLAttributes<LabelType> = usePressEventHandlers<LabelType>(disabled || !handlesInput(tag, labelPosition, "label-element") ? undefined : stableOnInput, undefined);

            if (labelPosition == "wrapping") {
                if (p0.tabIndex == null)
                    newProps.tabIndex = 0;
                if (p0.role == null)
                    newProps.role = role;
                newProps["aria-disabled"] = disabled.toString();
                newProps["aria-checked"] = checked.toString();
            }
            else {
                // The one case where there's almost nothing to do
                // The most normal case where everything acts according normal HTML mechanics.

            }

            // Just make sure that label clicks can't affect the checkbox while it's disabled
            newProps.onClick = disabled ? ((e) => { e.preventDefault() }) : newProps.onClick;

            return useLabelRefElementProps(useMergedProps<LabelType>(newProps, useILLabelProps(p0)));
        }

        return { useCheckboxLikeLabelElementProps };

    }, [useILLabel, disabled, checked, role, labelPosition, tagLabel]);


    return {
        useCheckboxLikeInputElement,
        useCheckboxLikeLabelElement,
        getLabelElement,
        getInputElement,
        inputId,
        labelId
    };


}
