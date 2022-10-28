import { h } from "preact";
import { useEnsureStability, useMergedProps, UseRandomIdSourceElementReturn, usePress, UsePressParameters, UsePressReturnType, useRandomId, UseRandomIdParameters, UseRandomIdReferencerElementParameters, UseRandomIdReturnTypeInfo, UseRandomIdSourceElement, useRefElement, UseRefElementReturnType, useRovingTabIndex, useStableCallback, UseRandomIdReferencerElementReturn, UseRandomIdReferencerElementParametersOmits, UseRandomIdParametersOmits } from "preact-prop-helpers";
import { useCallback, useEffect, useRef } from "preact/hooks";
import { DisabledType, ElementToTag } from "./props";

interface UseLabelGenericParameters<InputElement extends Element, LabelElement extends Element, RIPOmits extends UseRandomIdParametersOmits, RIREPOmits extends UseRandomIdReferencerElementParametersOmits> {
    randomIdInputParameters: UseRandomIdParameters<RIPOmits>["randomIdParameters"];
    randomIdLabelParameters: UseRandomIdParameters<RIPOmits>["randomIdParameters"];
    randomIdReferencerElementInputParameters: UseRandomIdReferencerElementParameters<InputElement, RIREPOmits>["randomIdReferencerParameters"];
    randomIdReferencerElementLabelParameters: UseRandomIdReferencerElementParameters<LabelElement, RIREPOmits>["randomIdReferencerParameters"];
}

interface UseLabelGenericReturnTypeInfo<InputElement extends Element, LabelElement extends Element> {
    randomIdInputReturn: UseRandomIdReturnTypeInfo["randomIdReturn"];
    randomIdLabelReturn: UseRandomIdReturnTypeInfo["randomIdReturn"];
    randomIdSourceInputReturn: UseRandomIdSourceElementReturn<InputElement>["randomIdSourceReturn"];
    randomIdSourceLabelReturn: UseRandomIdSourceElementReturn<LabelElement>["randomIdSourceReturn"];
    randomIdReferencerInputReturn: UseRandomIdReferencerElementReturn<InputElement>["randomIdReferencerReturn"];
    randomIdReferencerLabelReturn: UseRandomIdReferencerElementReturn<LabelElement>["randomIdReferencerReturn"];
}

interface UseLabelGenericReturnTypeWithHooks<InputElement extends Element, LabelElement extends Element> extends UseLabelGenericReturnTypeInfo<InputElement, LabelElement> { }

interface UseLabelGenericLabelParameters<_InputElement extends Element, LabelElement extends Element> extends UseRandomIdReferencerElementParameters<LabelElement, never> { }
interface UseLabelGenericInputParameters<InputElement extends Element, _LabelElement extends Element> extends UseRandomIdReferencerElementParameters<InputElement, never> { }

interface UseLabelGenericInputReturnType<InputElement extends Element, LabelElement extends Element> {
    randomIdSourceReturnInput: {
        propsStable: h.JSX.HTMLAttributes<InputElement>;
    };
    randomIdReferencerReturnInput: {
        propsStable: h.JSX.HTMLAttributes<InputElement>;
    };
}

interface UseLabelGenericLabelReturnType<InputElement extends Element, LabelElement extends Element> {
    randomIdSourceReturnLabel: {
        propsStable: h.JSX.HTMLAttributes<LabelElement>;
    };
    randomIdReferencerReturnLabel: {
        propsStable: h.JSX.HTMLAttributes<LabelElement>;
    };
}

/**
 * Adds an ID and "aria-labelledby" for two elements, an "input" element and a "label" element.
 * 
 * Returns the `useReferencedIdProps` hooks if you need to also add other ID-referencer attributes, like `for`
 * 
 * @see useInputLabel
 */
function useLabelGeneric<InputElement extends Element, LabelElement extends Element>({
    randomIdInputParameters,
    randomIdLabelParameters,
    randomIdReferencerElementInputParameters,
    randomIdReferencerElementLabelParameters
}: UseLabelGenericParameters<InputElement, LabelElement, never, never>): UseLabelGenericReturnTypeWithHooks<InputElement, LabelElement> {

    // A label assigned an ID to both the control and the label elements.
    // The behavior depends on the tags used for each type

    const { randomIdReturn: randomIdInputReturn, useRandomIdReferencerElement: useRandomIdReferencerInputElement, useRandomIdSourceElement: useRandomIdSourceInputElement } = useRandomId<InputElement>({ randomIdParameters: randomIdInputParameters });
    const { randomIdReturn: randomIdLabelReturn, useRandomIdReferencerElement: useRandomIdReferencerLabelElement, useRandomIdSourceElement: useRandomIdSourceLabelElement } = useRandomId<LabelElement>({ randomIdParameters: randomIdLabelParameters });

    const { randomIdSourceReturn: randomIdSourceLabelReturn } = useRandomIdSourceLabelElement();
    const { randomIdSourceReturn: randomIdSourceInputReturn } = useRandomIdSourceInputElement();
    const { randomIdReferencerReturn: randomIdReferencerLabelReturn } = useRandomIdReferencerInputElement<LabelElement>({ randomIdReferencerParameters: randomIdReferencerElementLabelParameters });
    const { randomIdReferencerReturn: randomIdReferencerInputReturn } = useRandomIdReferencerLabelElement<InputElement>({ randomIdReferencerParameters: randomIdReferencerElementInputParameters });


    return {
        randomIdSourceInputReturn,
        randomIdSourceLabelReturn,
        randomIdReferencerInputReturn,
        randomIdReferencerLabelReturn,
        randomIdInputReturn,
        randomIdLabelReturn
    }
}




export interface UseLabelParameters<InputElement extends Element, LabelElement extends Element, RIPOmits extends UseRandomIdParametersOmits> extends UseLabelGenericParameters<InputElement, LabelElement, RIPOmits, "referencerProp"> {
    labelParameters: {
        tagInput: ElementToTag<InputElement>;
        tagLabel: ElementToTag<LabelElement>;
        /**
         * Where is this component's label relative to the component itself?
         * 
         * In cases where you're using non-`input` and `label` elements, `"separate"` and `"wrapping"` are identical; 
         * this is most important for native `label` and `input` elements, as they only need a `for` prop when the label doesn't wrap the input.
         * 
         * * `"separate": `<label /><input />`
         * * `"wrapping"`: `<label><input /></label>`
         * * `"none"`: <input aria-label="..." />
         */
        labelPosition: "separate" | "wrapping" | "none";

        /** Only used when labelPosition is "none", but **must** be non-null in that case */
        ariaLabel: string | null;
    }
}

export interface UseLabelReturnTypeInfo<InputElement extends Element, LabelElement extends Element> extends UseLabelGenericReturnTypeInfo<InputElement, LabelElement> {
    //randomIdReturnControl: UseRandomIdReturnTypeInfo["randomIdReturn"];
    //randomIdReturnLabel: UseRandomIdReturnTypeInfo["randomIdReturn"];
    labelInputReturn: { unstableProps: h.JSX.HTMLAttributes<InputElement> }
}

export interface UseLabelReturnTypeWithHooks<InputElement extends Element, LabelElement extends Element> extends UseLabelReturnTypeInfo<InputElement, LabelElement> {
    /** **STABLE** */
    //useLabelInput: (a: UseLabelInputParameters<InputElement, LabelElement>) => UseLabelInputReturnType<InputElement, LabelElement>;
    /** **STABLE** */
    //useLabelLabel: (a: UseLabelLabelParameters<InputElement, LabelElement>) => UseLabelLabelReturnType<InputElement, LabelElement>;
}

export interface UseLabelLabelParameters<_InputElement extends Element, LabelElement extends Element> extends UseLabelGenericLabelParameters<_InputElement, LabelElement> { }
export interface UseLabelInputParameters<_InputElement extends Element, LabelElement extends Element> extends UseLabelGenericInputParameters<_InputElement, LabelElement> { }

/*export interface UseLabelInputParameters<InputElement extends Element, _LabelElement extends Element> {
    //randomIdReferencerParameters: Omit<UseRandomIdReferencerElementParameters<InputElement>["randomIdReferencerParameters"], "referencerProp">
}*/

export interface UseLabelInputReturnType<InputElement extends Element, LabelElement extends Element> extends UseLabelGenericInputReturnType<InputElement, LabelElement> {
    randomIdSourceReturnInput: {
        propsStable: h.JSX.HTMLAttributes<InputElement>;
    };
    randomIdReferencerReturnInput: {
        propsStable: h.JSX.HTMLAttributes<InputElement>;
    };
}

export interface UseLabelLabelReturnType<InputElement extends Element, LabelElement extends Element> extends UseLabelGenericLabelReturnType<InputElement, LabelElement> {
    randomIdSourceReturnLabel: {
        propsStable: h.JSX.HTMLAttributes<LabelElement>;
    };
    randomIdReferencerReturnLabel: {
        propsStable: h.JSX.HTMLAttributes<LabelElement>;
    };
}

export function useLabel<InputElement extends Element, LabelElement extends Element>({
    randomIdInputParameters,
    randomIdLabelParameters,
    randomIdReferencerElementInputParameters,
    randomIdReferencerElementLabelParameters,
    labelParameters: { tagInput, tagLabel, ariaLabel, labelPosition }
}: UseLabelParameters<InputElement, LabelElement, never>): UseLabelReturnTypeWithHooks<InputElement, LabelElement> {
    useEnsureStability("useLabel", tagInput, tagLabel, labelPosition);
    const synthetic = !(tagInput == "input" && tagLabel == "label");

    /**
     * |Synthetic?|Position    |Input Prop   |Label Prop|
     * |----------|------------|-------------|----------|
     * |N         |`"separate"`|-            |`for`     |
     * |N         |`"wrapping"`|-            |-         |
     * |Y         |`"separate"`|`labelled-by`|-         |
     * |Y         |`"wrapping"`|`labelled-by`|-         |
     * 
     */
    let _comment: any;

    const {
        randomIdInputReturn,
        randomIdLabelReturn,
        randomIdReferencerInputReturn,
        randomIdReferencerLabelReturn,
        randomIdSourceInputReturn,
        randomIdSourceLabelReturn
    } = useLabelGeneric<InputElement, LabelElement>({
        randomIdInputParameters,
        randomIdLabelParameters,
        randomIdReferencerElementInputParameters: { ...randomIdReferencerElementInputParameters, referencerProp: synthetic? "aria-labelledby" : null },
        randomIdReferencerElementLabelParameters: { ...randomIdReferencerElementLabelParameters, referencerProp: !synthetic && labelPosition === "separate"? "for" : null },
    });

    return {
        randomIdInputReturn,
        randomIdLabelReturn,
        randomIdReferencerInputReturn,
        randomIdReferencerLabelReturn,
        randomIdSourceInputReturn,
        randomIdSourceLabelReturn,
        labelInputReturn: { unstableProps: { ["aria-label"]: labelPosition == "none" ? ariaLabel! : undefined } }
    }
}


function preventDefault(e: Event) {
    e.preventDefault();
}


export type CheckboxCheckedType = boolean | "mixed";
//export type LabelPosition = "wrapping" | "separate" | "dual" | "none";

interface CLP {
    /**
     * Where the label element is positioned relative to the input element.
     * * `wrapping`: The label wraps the input and no `id` or `for` props are needed, as in `<label><input /> label content</label>`
     * * `separate`: The label and input are in separate branches, as in `<input /><label>label content</label>`
     * * `dual`: One element serves in both roles at once, as in `<div role="checkbox">label content</div> `
     * * `none`: There is no visible label element, as in `<input aria-label="label content" />`
     * 
     * In combination with `tagInput` and `tagLabel`, `labelPosition` determines which element receives which props and event handlers.
     */
    //labelPosition: LabelPosition;
    /** The role attribute to use, when applicable */
    role: string;
    disabled: DisabledType;
    checked: CheckboxCheckedType;
    onInput(event: Event): void;
}

export interface UseCheckboxLikeParameters<InputType extends Element, LabelType extends Element, CLPOmits extends keyof CLP, RIPOmits extends UseRandomIdParametersOmits> extends UseLabelParameters<InputType, LabelType, RIPOmits> {
    checkboxLikeParameters: Omit<CLP, CLPOmits>;
    refElementLabelReturn: Required<Pick<UseRefElementReturnType<LabelType>["refElementReturn"], "getElement">>;
    refElementInputReturn: Required<Pick<UseRefElementReturnType<InputType>["refElementReturn"], "getElement">>;
    //pressLabelParameters: UsePressParameters<LabelType, "onClickSync" | "exclude">["pressParameters"];
    //pressInputParameters: UsePressParameters<InputType, "onClickSync" | "exclude">["pressParameters"];
}

export interface UseCheckboxLikeReturnTypeInfo<InputType extends Element, LabelType extends Element> extends UseLabelReturnTypeInfo<InputType, LabelType> {
    pressLabelReturn: UsePressReturnType<LabelType>["pressReturn"];
    pressInputReturn: UsePressReturnType<InputType>["pressReturn"];
    checkboxLikeInputReturn: { propsUnstable: h.JSX.HTMLAttributes<InputType> }
    checkboxLikeLabelReturn: { propsUnstable: h.JSX.HTMLAttributes<LabelType> }
}
export interface UseCheckboxLikeReturnTypeWithHooks<InputType extends Element, LabelType extends Element> extends UseCheckboxLikeReturnTypeInfo<InputType, LabelType> {}

export function useCheckboxLike<InputType extends Element, LabelType extends Element>({
    labelParameters,
    randomIdInputParameters,
    randomIdLabelParameters,
    randomIdReferencerElementInputParameters,
    randomIdReferencerElementLabelParameters,
    checkboxLikeParameters: { checked, disabled, onInput: onInputSync, role },
    refElementInputReturn,
    refElementLabelReturn,
}: UseCheckboxLikeParameters<InputType, LabelType, never, never>): UseCheckboxLikeReturnTypeWithHooks<InputType, LabelType> {
    
    const { getElement: getInputElement } = refElementInputReturn;
    const { getElement: getLabelElement } = refElementLabelReturn;
    const { tagInput, tagLabel, labelPosition } = labelParameters;

    // onClick and onChange are a bit messy, so we need to
    // *always* make sure that the visible state is correct
    // after all the event dust settles.
    // See https://github.com/preactjs/preact/issues/2745,
    // and https://github.com/preactjs/preact/issues/1899#issuecomment-525690194
    useEffect(() => {
        const element = getInputElement!();
        if (element && tagInput == "input") {
            (element as Element as HTMLInputElement).indeterminate = (checked === "mixed");
            (element as Element as HTMLInputElement).checked = (checked === true)
        }
    }, [tagInput, (checked ?? false)])

    const {
        randomIdInputReturn,
        randomIdLabelReturn,
        randomIdReferencerInputReturn,
        randomIdReferencerLabelReturn,
        randomIdSourceInputReturn,
        randomIdSourceLabelReturn,
        labelInputReturn
    } = useLabel<InputType, LabelType>({
        labelParameters,
        randomIdInputParameters,
        randomIdLabelParameters,
        randomIdReferencerElementInputParameters,
        randomIdReferencerElementLabelParameters,
    });
    const { getElement: getInput } = refElementInputReturn;
    const { getElement: getLabel } = refElementLabelReturn;
    const focusInput = useCallback(() => { (getInput() as (HTMLElement | null))?.focus(); }, []);
    const focusLabel = useCallback(() => { (getLabel() as (HTMLElement | null))?.focus(); }, []);
    const onClickInputSync = (labelPosition == "wrapping"? undefined : onInputSync);
    const onClickLabelSync = (labelPosition == "none"? undefined : onInputSync);
    const { pressReturn: pressInputReturn } = usePress<InputType>({ pressParameters: { exclude: {}, focusSelf: focusInput, onPressSync: (!!disabled)? undefined : onClickInputSync, onPseudoActiveStart: null, onPseudoActiveStop: null }, refElementReturn: refElementInputReturn });
    const { pressReturn: pressLabelReturn } = usePress<LabelType>({ pressParameters: { exclude: {}, focusSelf: focusLabel, onPressSync: (!!disabled)? undefined : onClickLabelSync, onPseudoActiveStart: null, onPseudoActiveStop: null }, refElementReturn: refElementLabelReturn });
    const propsUnstableInput: h.JSX.HTMLAttributes<InputType> = {};
    const propsUnstableLabel: h.JSX.HTMLAttributes<LabelType> = {};
    //const propsUnstableLabel = useRef<h.JSX.HTMLAttributes<LabelType>>({});

    // Make sure that label clicks can't affect the visual state of the checkbox while it's disabled
    propsUnstableInput.onClick = disabled ? preventDefault : undefined;
    propsUnstableLabel.onClick = disabled ? preventDefault : undefined;

    switch (labelPosition) {
        case "none":
        case "separate": {
            if (tagInput == "input") {
                // Even in the most default input behavior, we still need to handle
                // special abstraction over checked="mixed" and disabled="soft"
                propsUnstableInput.checked = (checked === true);
                if (disabled === true || disabled === 'hard')
                    propsUnstableInput.disabled = true;
                else
                    propsUnstableInput["aria-disabled"] = "true";
            }
            else {
                // div inputs need their various ARIA roles and properties
                propsUnstableInput.role = role;
                propsUnstableInput.tabIndex = 0;
                propsUnstableInput["aria-checked"] = (checked ?? false).toString();
                propsUnstableInput["aria-disabled"] = (!!disabled).toString();
            }

            if (tagLabel != "label") {
                // We don't need to do anything special for regular labels
            }
            else {
                // The special handling for div labels is already covered by useLabel
            }
            break;
        }
        case "wrapping": {
            if (tagInput == "input") {
                // Because the wrapped label handles all interactions,
                // we need to make sure this element can't be interacted with
                // even if it's an input element.
                propsUnstableInput.inert = true;
                propsUnstableInput.tabIndex = -1;
                propsUnstableInput.role = "presentation";
                propsUnstableInput["aria-hidden"] = "true";
                propsUnstableInput.onFocus = _ => (getLabelElement?.() as HTMLElement | null)?.focus?.();
            }
            else {
                // With a wrapping label, we're just using the input for visual styling and ignoring all interaction.
                // With a div, we get that for free and don't need to do anything here.
            }

            if (tagLabel == "label") {
                // Wrapping labels are the actual inputs that are interacted with
                // And are very similar conceptually to div inputs when separated
                propsUnstableLabel.role = role;
                propsUnstableLabel.tabIndex = 0;
                propsUnstableLabel["aria-checked"] = (checked ?? false).toString();
                propsUnstableLabel["aria-disabled"] = (!!disabled).toString();
            }
            break;
        }
    }

    return {
        randomIdInputReturn,
        randomIdLabelReturn,
        randomIdReferencerInputReturn,
        randomIdReferencerLabelReturn,
        randomIdSourceInputReturn,
        randomIdSourceLabelReturn,
        pressInputReturn,
        pressLabelReturn,
        labelInputReturn,
        checkboxLikeInputReturn: { propsUnstable: propsUnstableInput },
        checkboxLikeLabelReturn: { propsUnstable: propsUnstableLabel },
    }
}





/*
export interface UseCheckboxLikeParameters<InputType extends Element, LabelType extends Element, CLPOmits extends keyof CLP> extends UseLabelParameters<InputType, LabelType> {
    checkboxLikeParameters: Omit<CLP, CLPOmits>;
}

const handlesInput = <E extends Element>(tag: ElementToTag<E>, labelPosition: LabelPosition, which: "input-element" | "label-element") => {
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

    // dual and none
    return true;
};

export type UseCheckboxLikeInputElement<InputType extends Element, LabelType extends Element> = (args: UseCheckboxLikeInputElementParameters<InputType, LabelType>) => UseCheckboxLikeInputElementReturnType<InputType, LabelType>;
export type UseCheckboxLikeLabelElement<InputType extends Element, LabelType extends Element> = (args: UseCheckboxLikeLabelElementParameters<InputType, LabelType>) => UseCheckboxLikeLabelElementReturnType<InputType, LabelType>;

export interface UseCheckboxLikeReturnTypeInfo<InputType extends Element, LabelType extends Element> extends UseLabelReturnTypeInfo<InputType, LabelType> {
    checkboxLikeReturn: {
        /** **STABLE** */
        //getLabelElement: () => LabelType | null;
        /** **STABLE** */
        //getInputElement: () => InputType | null;

        /** 
         * **Quasi-Stable** (don't call during render)
         * 
         * This is guaranteed to focus whichever element is appropriate based on `labelPosition`
         */
        //focusSelf(): void;

        /** 
         * **Quasi-Stable** (don't call during render)
         * 
         * Returns whichever element is considered the "actual" element based on `labelPosition`
         *\/
        getControlElement<T extends InputType | LabelType>(): T | null;
    }
}

export interface UseCheckboxLikeReturnTypeWithHooks<InputType extends Element, LabelType extends Element> extends UseCheckboxLikeReturnTypeInfo<InputType, LabelType> {
    /** *Notably unstable* *\/
    useCheckboxLikeInputElement: UseCheckboxLikeInputElement<InputType, LabelType>;
    /** *Notably unstable* *\/
    useCheckboxLikeLabelElement: UseCheckboxLikeLabelElement<InputType, LabelType>;
}

export interface UseCheckboxLikeInputElementParameters<InputType extends Element, LabelType extends Element> extends UseLabelInputParameters<InputType, LabelType>, UsePressParameters<InputType, "onClickSync"> { }
export interface UseCheckboxLikeLabelElementParameters<InputType extends Element, LabelType extends Element> extends UseLabelLabelParameters<InputType, LabelType>, UsePressParameters<LabelType, "onClickSync"> { }


/*
function useCheckboxLikeInput<InputType extends Element, LabelType extends Element>({ labelPosition, tagInput, tagLabel, pressParameters, refElementReturn }: { labelPosition: LabelPosition, tagInput: ElementToTag<InputType>, tagLabel: ElementToTag<LabelType>, pressParameters: UsePressParameters<InputType>["pressParameters"], refElementReturn: UsePressParameters<InputType>["refElementReturn"] }) {

    const propsUnstable = useRef<h.JSX.HTMLAttributes<InputType>>({});
    const propsStable = useRef<h.JSX.HTMLAttributes<InputType>>({});
    const { pressReturn } = usePress<InputType>({ pressParameters, refElementReturn });

    const key = `${labelPosition};${tagInput == "input" ? "i" : "d"};${tagLabel == "label" ? "l" : "d"};` as const
    switch (key) {
        case "separate;i;l;":
            propsUnstable.current.tabIndex = -1;
            propsStable.current.onInput = preventDefault;
            break;
    }
}

export function useCheckboxLike<InputType extends Element, LabelType extends Element>({
    checkboxLike: { checked, disabled, labelPosition, role, onCheckedChange },
    labelParameters,
    randomIdParametersControl,
    randomIdParametersLabel
}: UseCheckboxLikeParameters<InputType, LabelType>): UseCheckboxLikeReturnTypeWithHooks<InputType, LabelType> {
    const { tagInput, tagLabel } = labelParameters;

    useEnsureStability("useCheckboxLike", tagInput, tagLabel, labelPosition, role);

    const { randomIdReturnControl, randomIdReturnLabel, useLabelInput, useLabelLabel } = useLabel({ labelParameters, randomIdParametersControl, randomIdParametersLabel });

    const useCheckboxLikeInputElement = useCallback(({ pressParameters, randomIdReferencerParameters, refElementReturn }: UseCheckboxLikeInputElementParameters<InputType, LabelType>) => {
        const { randomIdReferencerReturnInput, randomIdSourceReturnInput } = useLabelInput({ randomIdReferencerParameters });
        const { pressReturn } = usePress({ pressParameters, refElementReturn });
        const propsUnstable = useRef<h.JSX.HTMLAttributes<InputType>>({});
        const propsStable = useRef<h.JSX.HTMLAttributes<InputType>>({});
        switch (labelPosition) {
            case "none":
                if (tagInput == "input") {
                    propsUnstable.current.onInput = preventDefault;
                }
                else {

                }
                break;
            case "dual":
                break;
            case "separate":
                break;
            case "wrapping":
                break;
        }
    }, [])
}*/

/*
export interface UseCheckboxLikeInputElementReturnType<InputElement extends Element, LabelElement extends Element> extends UseLabelInputReturnType<InputElement, LabelElement>, UsePressReturnType<InputElement> {
    checkboxLikeInput: { propsStable: h.JSX.HTMLAttributes<InputElement>; propsUnstable: h.JSX.HTMLAttributes<InputElement>; }
}

export interface UseCheckboxLikeLabelElementReturnType<InputElement extends Element, LabelElement extends Element> extends UseLabelLabelReturnType<InputElement, LabelElement>, UsePressReturnType<LabelElement> {
    checkboxLikeLabel: { propsStable: h.JSX.HTMLAttributes<LabelElement>; propsUnstable: h.JSX.HTMLAttributes<LabelElement>; }
}

/**
 * Handles label type (wrapping or separate) for checkboxes, radios, switches, etc.
 * 
 * If it's a toggleable click-thing with a label (that can also be clicked), then it's a checkbox-like.
 * @param param0 
 * @returns 
 *\/
export function useCheckboxLike<InputType extends Element, LabelType extends Element>({
    checkboxLikeParameters: { checked, disabled, labelPosition, role, onInput: unstableOnInput },
    labelParameters,
    randomIdParametersControl,
    randomIdParametersLabel
}: UseCheckboxLikeParameters<InputType, LabelType, never>): UseCheckboxLikeReturnTypeWithHooks<InputType, LabelType> {

    const stableOnInput = useStableCallback((e: Event) => {
        if (unstableOnInput) {
            e.preventDefault();
            unstableOnInput(e);
        }
    });

    const getInputElement = useRef<(() => (InputType | null)) | null>(null);
    const getLabelElement = useRef<(() => (InputType | null)) | null>(null);

    const { useLabelInput: useILInput, useLabelLabel: useILLabel, randomIdReturnControl, randomIdReturnLabel } = useLabel<InputType, LabelType>({ labelParameters, randomIdParametersControl, randomIdParametersLabel });
    const { tagInput, tagLabel } = labelParameters;

    const useCheckboxLikeInputElement: UseCheckboxLikeInputElement<InputType, LabelType> = useCallback<UseCheckboxLikeInputElement<InputType, LabelType>>(function useCheckboxInputElement({
        randomIdReferencerParameters,
        pressParameters,
        refElementReturn
    }: UseCheckboxLikeInputElementParameters<InputType, LabelType>): UseCheckboxLikeInputElementReturnType<InputType, LabelType> {
        const tag = tagInput;
        const {
            randomIdReferencerReturnInput,
            randomIdSourceReturnInput
        } = useILInput({ randomIdReferencerParameters });

        const unstableProps = useRef<h.JSX.HTMLAttributes<InputType>>({});
        const stableProps = useRef<h.JSX.HTMLAttributes<InputType>>({});
        const { getElement } = refElementReturn;
        getInputElement.current ??= getElement;

        // onClick and onChange are a bit messy, so we need to
        // *always* make sure that the visible state is correct
        // after all the event dust settles.
        // See https://github.com/preactjs/preact/issues/2745,
        // and https://github.com/preactjs/preact/issues/1899#issuecomment-525690194
        useEffect(() => {
            const element = getElement!();
            if (element && tag == "input") {
                (element as Element as HTMLInputElement).indeterminate = (checked === "mixed");
                (element as Element as HTMLInputElement).checked = (checked === true)
            }
        }, [tag, checked])

        // For some reason, Chrome won't fire onInput events for radio buttons that are tabIndex=-1??
        // Needs investigating, but onInput works fine in Firefox
        // TODO
        const {
            pressReturn
        } = usePress<InputType>(
            {
                pressParameters: {
                    onClickSync: !!disabled || !handlesInput(tag, labelPosition, "input-element") ? undefined : stableOnInput,
                    ...pressParameters
                },
                refElementReturn
            }

                /*{
                onClickSync: !!disabled || !handlesInput(tag, labelPosition, "input-element") ? undefined : stableOnInput,
                exclude: undefined,
                hasFocus: hasFocusInput,
                focusSelf
            }*\/);
        //const props: h.JSX.HTMLAttributes<InputType> = { onInput: tag == "input" ? ((e: Event) => e.preventDefault()) : undefined };

        if (tag == "input")
            stableProps.current.onInput = preventDefault;

        if (labelPosition == "wrapping") {
            // Because the wrapped label handles all interactions,
            // we need to make sure this element can't be interacted with
            // even if it's an input element.
            unstableProps.current.inert = true;
            unstableProps.current.tabIndex = -1;
            unstableProps.current.role = "presentation";
            unstableProps.current["aria-hidden"] = "true";
            stableProps.current.onFocus = _ => (getLabelElement.current?.() as HTMLElement | null)?.focus?.();
        }
        else {
            if (tag === "input") {
                unstableProps.current.checked = (checked === true);
                if (disabled === true || disabled === 'hard')
                    unstableProps.current.disabled = true;
                else
                    unstableProps.current["aria-disabled"] = "true";
            }
            else {
                unstableProps.current.role = role;
                unstableProps.current.tabIndex = 0;
                unstableProps.current["aria-checked"] = checked === "mixed" ? "mixed" : checked === true ? "true" : undefined;
                unstableProps.current["aria-disabled"] = "true";
            }

        }

        // Make sure that label clicks can't affect the checkbox while it's disabled
        unstableProps.current.onClick = disabled ? preventDefault : undefined;

        return {
            checkboxLikeInput: {
                propsStable: stableProps.current,
                propsUnstable: unstableProps.current
            },
            pressReturn,
            randomIdReferencerReturnInput,
            randomIdSourceReturnInput
        }

    }, [useILInput, role, labelPosition, disabled, checked, tagInput]);

    const useCheckboxLikeLabelElement = useCallback(function useCheckboxLabelElement({ pressParameters, randomIdReferencerParameters, refElementReturn }: UseCheckboxLikeLabelElementParameters<InputType, LabelType>): UseCheckboxLikeLabelElementReturnType<InputType, LabelType> {
        const tag = tagLabel;
        const { randomIdReferencerReturnLabel, randomIdSourceReturnLabel } = useILLabel({ randomIdReferencerParameters });
        const unstableProps = useRef<h.JSX.HTMLAttributes<LabelType>>({});
        const stableProps = useRef<h.JSX.HTMLAttributes<LabelType>>({});
        const { getElement } = refElementReturn;
        getInputElement.current ??= getElement;

        const { pressReturn } = usePress<LabelType>({
            pressParameters: {
                onClickSync: !!disabled || !handlesInput(tag, labelPosition, "label-element") ? undefined : stableOnInput,
                ...pressParameters
            },
            refElementReturn
        });

        if (labelPosition == "wrapping") {
            unstableProps.current.tabIndex = 0;
            unstableProps.current.role = role;
            unstableProps.current["aria-disabled"] = (!!disabled).toString();
            unstableProps.current["aria-checked"] = checked.toString();
        }

        stableProps.current.onClick = disabled ? ((e) => { e.preventDefault() }) : undefined;

        return {
            randomIdReferencerReturnLabel,
            randomIdSourceReturnLabel,
            pressReturn,
            checkboxLikeLabel: {
                propsStable: stableProps.current,
                propsUnstable: unstableProps.current
            }
        }

    }, [useILLabel, disabled, checked, role, labelPosition, tagLabel]);

    const getControlElement = useStableCallback(<T extends InputType | LabelType>() => {
        return (((labelPosition == "wrapping") ? getLabelElement.current?.() : getInputElement.current?.()) as T | null) ?? null;
    });


    return {
        useCheckboxLikeInputElement,
        useCheckboxLikeLabelElement,
        checkboxLikeReturn: {
            getControlElement
        },
        randomIdReturnControl,
        randomIdReturnLabel
    };


}*/


