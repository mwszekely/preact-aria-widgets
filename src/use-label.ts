import { h } from "preact";
import { useEnsureStability, usePress, UsePressReturnType, useRandomId, UseRandomIdParameters, UseRandomIdParametersOmits, UseRandomIdReferencerElementParameters, UseRandomIdReferencerElementParametersOmits, UseRandomIdReferencerElementReturn, UseRandomIdReturnTypeInfo, UseRandomIdSourceElementReturn, UseRefElementReturnType } from "preact-prop-helpers";
import { useCallback, useEffect } from "preact/hooks";
import { DisabledType, ElementToTag } from "./props";

interface UseLabelGenericParameters<InputElement extends Element, LabelElement extends Element, RIPOmits extends UseRandomIdParametersOmits, RIREPOmits extends UseRandomIdReferencerElementParametersOmits> {
    randomIdInputParameters: UseRandomIdParameters<RIPOmits>["randomIdParameters"];
    randomIdLabelParameters: UseRandomIdParameters<RIPOmits>["randomIdParameters"];
    randomIdReferencerElementInputParameters: UseRandomIdReferencerElementParameters<InputElement, RIREPOmits>["randomIdReferencerParameters"];
    randomIdReferencerElementLabelParameters: UseRandomIdReferencerElementParameters<LabelElement, RIREPOmits>["randomIdReferencerParameters"];
}

export interface UseLabelGenericReturnType<InputElement extends Element, LabelElement extends Element> {
    randomIdInputReturn: UseRandomIdReturnTypeInfo["randomIdReturn"];
    randomIdLabelReturn: UseRandomIdReturnTypeInfo["randomIdReturn"];
    randomIdSourceInputReturn: UseRandomIdSourceElementReturn<InputElement>["randomIdSourceReturn"];
    randomIdSourceLabelReturn: UseRandomIdSourceElementReturn<LabelElement>["randomIdSourceReturn"];
    randomIdReferencerInputReturn: UseRandomIdReferencerElementReturn<InputElement>["randomIdReferencerReturn"];
    randomIdReferencerLabelReturn: UseRandomIdReferencerElementReturn<LabelElement>["randomIdReferencerReturn"];
}


interface UseLabelGenericLabelParameters<_InputElement extends Element, LabelElement extends Element> extends UseRandomIdReferencerElementParameters<LabelElement, never> { }
interface UseLabelGenericInputParameters<InputElement extends Element, _LabelElement extends Element> extends UseRandomIdReferencerElementParameters<InputElement, never> { }

interface UseLabelGenericInputReturnType<InputElement extends Element, _LabelElement extends Element> {
    randomIdSourceReturnInput: {
        propsStable: h.JSX.HTMLAttributes<InputElement>;
    };
    randomIdReferencerReturnInput: {
        propsStable: h.JSX.HTMLAttributes<InputElement>;
    };
}

interface UseLabelGenericLabelReturnType<_InputElement extends Element, LabelElement extends Element> {
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
export function useLabelGeneric<InputElement extends Element, LabelElement extends Element>({
    randomIdInputParameters,
    randomIdLabelParameters,
    randomIdReferencerElementInputParameters,
    randomIdReferencerElementLabelParameters
}: UseLabelGenericParameters<InputElement, LabelElement, never, never>): UseLabelGenericReturnType<InputElement, LabelElement> {

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

export interface UseLabelReturnType<InputElement extends Element, LabelElement extends Element> extends UseLabelGenericReturnType<InputElement, LabelElement> {
    labelInputReturn: { unstableProps: h.JSX.HTMLAttributes<InputElement> }
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
}: UseLabelParameters<InputElement, LabelElement, never>): UseLabelReturnType<InputElement, LabelElement> {
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
}

export interface UseCheckboxLikeReturnType<InputType extends Element, LabelType extends Element> extends UseLabelReturnType<InputType, LabelType> {
    pressLabelReturn: UsePressReturnType<LabelType>["pressReturn"];
    pressInputReturn: UsePressReturnType<InputType>["pressReturn"];
    checkboxLikeInputReturn: { propsUnstable: h.JSX.HTMLAttributes<InputType> }
    checkboxLikeLabelReturn: { propsUnstable: h.JSX.HTMLAttributes<LabelType> }
}

/**
 * Handles any component where there's:
 * 1. Some kind of an on/off binary/trinary input element that needs event handlers
 * 2. Some kind of label for that input element
 * 
 * See also `useLabel` for when there's a label for a non-checkbox-like component.
 * 
 * @param param0 
 * @returns 
 */
export function useCheckboxLike<InputType extends Element, LabelType extends Element>({
    labelParameters,
    randomIdInputParameters,
    randomIdLabelParameters,
    randomIdReferencerElementInputParameters,
    randomIdReferencerElementLabelParameters,
    checkboxLikeParameters: { checked, disabled, onInput: onInputSync, role },
    refElementInputReturn,
    refElementLabelReturn,
}: UseCheckboxLikeParameters<InputType, LabelType, never, never>): UseCheckboxLikeReturnType<InputType, LabelType> {
    
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
    const { pressReturn: pressInputReturn } = usePress<InputType>({ pressParameters: { exclude: {}, focusSelf: focusInput, onPressSync: (disabled)? undefined : onClickInputSync, onPseudoActiveStart: null, onPseudoActiveStop: null }, refElementReturn: refElementInputReturn });
    const { pressReturn: pressLabelReturn } = usePress<LabelType>({ pressParameters: { exclude: {}, focusSelf: focusLabel, onPressSync: (disabled)? undefined : onClickLabelSync, onPseudoActiveStart: null, onPseudoActiveStop: null }, refElementReturn: refElementLabelReturn });
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



