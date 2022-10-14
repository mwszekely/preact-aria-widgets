import { h } from "preact";
import { UseHasFocusParameters, useMergedProps, usePress, useRandomId, useRefElement, useStableCallback } from "preact-prop-helpers";
import { useCallback, useEffect } from "preact/hooks";
import { ElementToTag } from "./props";

interface ULI<InputElement extends Element, LabelElement extends Element> {
    prefixLabel: string;
    prefixInput: string;
    tagInput: ElementToTag<InputElement>;
    tagLabel: ElementToTag<LabelElement>;
}

export type LabelOmits = keyof ULI<any, any>;

export interface UseLabelParameters<InputElement extends Element, LabelElement extends Element, LOmits extends LabelOmits> {
    label: Omit<ULI<InputElement, LabelElement>, LOmits>
}

export interface UseLabelReturnTypeInfo {
    label: {
        labelId: string | undefined;
        inputId: string | undefined;
        /** **Stable** */
        getLabelId: () => string | undefined;
        /** **Stable** */
        getInputId: () => string | undefined;
    }
}

export interface UseLabelReturnTypeWithHooks<InputElement extends Element, LabelElement extends Element> extends UseLabelReturnTypeInfo {
    /** *Notably unstable* */
    useLabelInput: () => { useLabelInputProps: (props: h.JSX.HTMLAttributes<InputElement>) => h.JSX.HTMLAttributes<InputElement>; };
    /** *Notably unstable* */
    useLabelLabel: () => { useLabelLabelProps: (props: h.JSX.HTMLAttributes<LabelElement>) => h.JSX.HTMLAttributes<LabelElement>; };
}

/**
 * Adds an ID and "aria-labelledby" for two elements, an "input" element and a "label" element.
 * 
 * Returns the `useReferencedIdProps` hooks if you need to also add other ID-referencer attributes, like `for`
 * 
 * @see useInputLabel
 */
export function useLabel<InputElement extends Element, LabelElement extends Element>({ label: { prefixInput, prefixLabel, tagInput, tagLabel } }: UseLabelParameters<InputElement, LabelElement, never>): UseLabelReturnTypeWithHooks<InputElement, LabelElement> {

    const { useRandomIdSourceElement: useLabelAsSourceId, useRandomIdReferencerElement: useLabelAsReferencerId, randomId: { usedId: labelId, getUsedId: getLabelId } } = useRandomId<LabelElement>({ randomId: { prefix: prefixLabel }, managedChildren: { onAfterChildLayoutEffect: null, onChildrenMountChange: null } });
    const { useRandomIdSourceElement: useInputAsSourceId, useRandomIdReferencerElement: useInputAsReferencerId, randomId: { usedId: inputId, getUsedId: getInputId } } = useRandomId<InputElement>({ randomId: { prefix: prefixInput }, managedChildren: { onAfterChildLayoutEffect: null, onChildrenMountChange: null } });
    const { useRandomIdSourceElementProps: useLabelAsSourceIdProps } = useLabelAsSourceId();
    const { useRandomIdSourceElementProps: useInputAsSourceIdProps } = useInputAsSourceId();
    const { useRandomIdReferencerElementProps: useLabelAsReferencerIdProps } = useLabelAsReferencerId<InputElement>("aria-labelledby" as never);
    const { useRandomIdReferencerElementProps: useInputAsReferencerIdProps } = useInputAsReferencerId<LabelElement>("for");

    const isSyntheticLabel = (tagInput != "input" || tagLabel != "label");

    const useLabelLabel: (() => { useLabelLabelProps: (props: h.JSX.HTMLAttributes<LabelElement>) => h.JSX.HTMLAttributes<LabelElement>; }) = useCallback(function useLabelLabel() {
        return {
            useLabelLabelProps: (props: h.JSX.HTMLAttributes<LabelElement>): h.JSX.HTMLAttributes<LabelElement> => {
                const propsWithoutFor = useLabelAsSourceIdProps(props);
                const propsWithFor = useInputAsReferencerIdProps(propsWithoutFor);
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
                if (isSyntheticLabel && !props["aria-label"])
                    return propsWithAriaLabelledBy;
                else
                    return propsWithoutAriaLabelledBy;

            }
        }
    }, [isSyntheticLabel])

    return {
        useLabelInput,
        useLabelLabel,
        label: {
            labelId,
            inputId,
            getLabelId,
            getInputId
        }
    }

}




export type CheckboxCheckedType = boolean | "mixed";

export interface UseCheckboxLikeParameters<InputType extends Element, LabelType extends Element> {
    label: UseLabelParameters<InputType, LabelType, "prefixLabel" | "prefixInput">["label"];
    checkboxLike: {
        labelPosition: "wrapping" | "separate";
        /** The role attribute to use, when applicable */
        role: string;
        disabled: boolean;
        checked: CheckboxCheckedType;
        onCheckedChange?(event: h.JSX.TargetedEvent<InputType>): void;
        //onInput?(event: h.JSX.TargetedEvent<LabelType>): void;
    }
    hasFocusInput: UseHasFocusParameters<InputType>;
    hasFocusLabel: UseHasFocusParameters<LabelType>;
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
    /** *Unstable* */
    useCheckboxLikeInputElementProps: ({ ...p0 }: h.JSX.HTMLAttributes<InputType>) => h.JSX.HTMLAttributes<InputType>;
}

export type UseCheckboxLikeLabelElement<LabelType extends Element> = () => {
    /** *Unstable* */
    useCheckboxLikeLabelElementProps: ({ ...p0 }: h.JSX.HTMLAttributes<LabelType>) => h.JSX.HTMLAttributes<LabelType>;
}

export interface UseCheckboxLikeReturnTypeInfo<InputType extends Element, LabelType extends Element> extends UseLabelReturnTypeInfo {
    checkboxLike: {
        /** **STABLE** */
        getLabelElement: () => LabelType | null;
        /** **STABLE** */
        getInputElement: () => InputType | null;

        /** 
         * **Quasi-Stable** (don't call during render)
         * 
         * This is guaranteed to focus whichever element is appropriate based on `labelPosition`
         */
        focusSelf(): void;

        /** 
         * **Quasi-Stable** (don't call during render)
         * 
         * Returns whichever element is considered the "actual" element based on `labelPosition`
         */
        getControlElement(): void;
    }
}

export interface UseCheckboxLikeReturnTypeWithHooks<InputType extends Element, LabelType extends Element> extends UseCheckboxLikeReturnTypeInfo<InputType, LabelType> {
    /** *Notably unstable* */
    useCheckboxLikeInputElement: UseCheckboxLikeInputElement<InputType>;
    /** *Notably unstable* */
    useCheckboxLikeLabelElement: () => { useCheckboxLikeLabelElementProps: ({ ...p0 }: h.JSX.HTMLAttributes<LabelType>) => h.JSX.HTMLAttributes<LabelType>; };
}

/**
 * Handles label type (wrapping or separate) for checkboxes, radios, switches, etc.
 * 
 * If it's a toggleable click-thing with a label (that can also be clicked), then it's a checkbox-like.
 * @param param0 
 * @returns 
 */
export function useCheckboxLike<InputType extends Element, LabelType extends Element>({ checkboxLike: { checked, disabled, labelPosition, role, onCheckedChange }, label: { tagInput, tagLabel }, hasFocusInput, hasFocusLabel }: UseCheckboxLikeParameters<InputType, LabelType>): UseCheckboxLikeReturnTypeWithHooks<InputType, LabelType> {

    const stableOnInput = useStableCallback((e: h.JSX.TargetedEvent<InputType> | h.JSX.TargetedEvent<LabelType>) => {
        e.preventDefault();
        onCheckedChange?.(e as h.JSX.TargetedEvent<InputType>);
    });

    const { useLabelInput: useILInput, useLabelLabel: useILLabel, label } = useLabel<InputType, LabelType>({ label: { prefixLabel: "aria-checkbox-label-", prefixInput: "aria-checkbox-input-", tagInput: tagInput, tagLabel: tagLabel } });


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
                (element as Element as HTMLInputElement).indeterminate = (checked === "mixed");
                (element as Element as HTMLInputElement).checked = (checked === true)
            }
        }, [tag, checked])

        return { getInputElement: getElement, useCheckboxLikeInputElementProps };


        function useCheckboxLikeInputElementProps({ ...userProps }: h.JSX.HTMLAttributes<InputType>): h.JSX.HTMLAttributes<InputType> {

            // For some reason, Chrome won't fire onInput events for radio buttons that are tabIndex=-1??
            // Needs investigating, but onInput works fine in Firefox
            // TODO
            const usePressProps = usePress<InputType>({
                onClickSync: disabled || !handlesInput(tag, labelPosition, "input-element") ? undefined : stableOnInput,
                exclude: undefined,
                hasFocus: hasFocusInput
            });
            let props: h.JSX.HTMLAttributes<InputType> = useMergedProps<InputType>(
                useRefElementProps(useILInputProps(usePressProps({}))),
                { onInput: tag == "input" ? ((e: Event) => e.preventDefault()) : undefined }
            );

            if (labelPosition == "wrapping") {
                // Because the wrapped label handles all interactions,
                // we need to make sure this element can't be interacted with
                // even if it's an input element.
                props.inert = true;
                props.tabIndex = -1;
                props.role = "presentation";
                props["aria-hidden"] = "true";
                props.onFocus = _ => (getLabelElement() as HTMLElement | null)?.focus();
            }
            else {
                if (tag === "input") {
                    props.checked = (checked === true);
                }
                else {
                    props.role = role;
                    props.tabIndex = 0;
                    props["aria-checked"] = checked === "mixed" ? "mixed" : checked === true ? "true" : undefined;
                }
                props["aria-disabled"] = disabled.toString();

            }

            // Make sure that label clicks can't affect the checkbox while it's disabled
            props.onClick = disabled ? ((e) => { e.preventDefault() }) : props.onClick;

            return useInputRefElementProps(useMergedProps(userProps, props));
        }
    }, [useILInput, role, labelPosition, disabled, checked, tagInput]);

    const useCheckboxLikeLabelElement = useCallback(function useCheckboxLabelElement() {
        const tag = tagLabel;
        const { useLabelLabelProps: useILLabelProps } = useILLabel();

        function useCheckboxLikeLabelElementProps({ ...userProps }: h.JSX.HTMLAttributes<LabelType>): h.JSX.HTMLAttributes<LabelType> {

            const usePressProps = usePress<LabelType>({
                onClickSync: disabled || !handlesInput(tag, labelPosition, "label-element") ? undefined : stableOnInput,
                exclude: undefined,
                hasFocus: hasFocusLabel
            });
            const newProps: h.JSX.HTMLAttributes<LabelType> = usePressProps({});

            if (labelPosition == "wrapping") {
                if (newProps.tabIndex == null)
                    newProps.tabIndex = 0;
                if (newProps.role == null)
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

            return useILLabelProps(useLabelRefElementProps(useMergedProps(newProps, userProps)));
        }

        return { useCheckboxLikeLabelElementProps };

    }, [useILLabel, disabled, checked, role, labelPosition, tagLabel]);

    const getControlElement = useStableCallback(<T extends InputType | LabelType>() => {
        return (((labelPosition == "wrapping") ? getLabelElement() : getInputElement()) as T | null);
    });

    const focusSelf = useStableCallback(() => {
        let element = getControlElement() as HTMLElement | null;
        element?.focus();
    })


    return {
        useCheckboxLikeInputElement,
        useCheckboxLikeLabelElement,
        checkboxLike: {
            getLabelElement,
            getInputElement,
            focusSelf,
            getControlElement
        },
        label
    };


}
