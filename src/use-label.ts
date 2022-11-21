import { h } from "preact";
import { useMergedProps, usePress, UsePressReturnType, useRandomDualIds, UseRandomDualIdsParameters, UseRandomDualIdsReturnType, UseRefElementReturnType } from "preact-prop-helpers";
import { useCallback, useEffect } from "preact/hooks";
import { DisabledType, ElementToTag } from "./props";

export type LabelPosition =  "separate" | "wrapping" | "none";
export type FocusableLabelElement<LP extends LabelPosition, InputElement extends Element, LabelElement extends Element> = LP extends "wrapping"? LabelElement : InputElement;

export interface UseLabelParameters<LP extends LabelPosition, InputElement extends Element, LabelElement extends Element> {
    randomIdInputParameters: Omit<UseRandomDualIdsParameters["randomIdInputParameters"], "referencerProp">;
    randomIdLabelParameters: Omit<UseRandomDualIdsParameters["randomIdLabelParameters"], "referencerProp">;

    labelParameters: {
        tagInput: ElementToTag<InputElement>;
        tagLabel: ElementToTag<LabelElement>;
        /**
         * Where is this component's label relative to the component itself?
         * 
         * * `"separate"`: `<label /><input />`
         * * `"wrapping"`: `<label><input /></label>`
         * * `"none"`: `<input aria-label="..." />`
         * 
         * In cases where you're using non-`input` and `label` elements, `"separate"` and `"wrapping"` are identical; 
         * this is most important for native `label` and `input` elements, as they only need a `for` prop when the label doesn't wrap the input.
         */
        labelPosition: LP;

        /** Only used when labelPosition is "none", but **must** be non-null in that case */
        ariaLabel: LP extends "none"? string : null;
    }
}

export interface UseLabelReturnType<InputElement extends Element, LabelElement extends Element> extends UseRandomDualIdsReturnType<InputElement, LabelElement> {}

export function useLabel<LP extends LabelPosition, InputElement extends Element, LabelElement extends Element>({
    randomIdInputParameters,
    randomIdLabelParameters,
    labelParameters: { tagInput, tagLabel, ariaLabel, labelPosition }
}: UseLabelParameters<LP, InputElement, LabelElement>): UseLabelReturnType<InputElement, LabelElement> {
    //useEnsureStability("useLabel", tagInput, tagLabel, labelPosition);
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
        propsInput,
        propsLabel,
        randomIdInputReturn,
        randomIdLabelReturn
    } = useRandomDualIds<InputElement, LabelElement>({
        randomIdInputParameters: { ...randomIdInputParameters, referencerProp: synthetic? "aria-labelledby" : null },
        randomIdLabelParameters: { ...randomIdLabelParameters, referencerProp: !synthetic && labelPosition === "separate"? "for" : null },
    });

    if (labelPosition == 'none')
        propsInput["aria-label"] = (ariaLabel!);

    return {
        propsInput,
        propsLabel,
        randomIdInputReturn,
        randomIdLabelReturn,
    }
}


function preventDefault(e: Event) {
    e.preventDefault();
}


export type CheckboxCheckedType = boolean | "mixed";
//export type LabelPosition = "wrapping" | "separate" | "dual" | "none";



export interface UseCheckboxLikeParameters<LP extends LabelPosition, InputType extends Element, LabelType extends Element> extends UseLabelParameters<LP, InputType, LabelType> {
    checkboxLikeParameters:{
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
    };

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
export function useCheckboxLike<LP extends LabelPosition, InputType extends Element, LabelType extends Element>({
    labelParameters,
    randomIdInputParameters,
    randomIdLabelParameters,
    checkboxLikeParameters: { checked, disabled, onInput: onInputSync, role },
    refElementInputReturn,
    refElementLabelReturn,
}: UseCheckboxLikeParameters<LP, InputType, LabelType>): UseCheckboxLikeReturnType<InputType, LabelType> {
    
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
        propsInput,
        propsLabel
    } = useLabel<LP, InputType, LabelType>({
        labelParameters,
        randomIdInputParameters,
        randomIdLabelParameters,
    });
    const { getElement: getInput } = refElementInputReturn;
    const { getElement: getLabel } = refElementLabelReturn;
    const focusInput = useCallback(() => { (getInput() as (HTMLElement | null))?.focus(); }, []);
    const focusLabel = useCallback(() => { (getLabel() as (HTMLElement | null))?.focus(); }, []);
    const onClickInputSync = (labelPosition == "wrapping"? undefined : onInputSync);
    const onClickLabelSync = (labelPosition == "none"? undefined : onInputSync);
    const { pressReturn: pressInputReturn } = usePress<InputType>({ pressParameters: { exclude: {}, focusSelf: focusInput, onPressSync: (disabled)? undefined : onClickInputSync }, refElementReturn: refElementInputReturn });
    const { pressReturn: pressLabelReturn } = usePress<LabelType>({ pressParameters: { exclude: {}, focusSelf: focusLabel, onPressSync: (disabled)? undefined : onClickLabelSync }, refElementReturn: refElementLabelReturn });
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
        pressInputReturn,
        pressLabelReturn,
        checkboxLikeInputReturn: { propsUnstable: propsUnstableInput },
        checkboxLikeLabelReturn: { propsUnstable: propsUnstableLabel },
        propsInput: useMergedProps(propsInput, propsUnstableInput),
        propsLabel: useMergedProps(propsLabel, propsUnstableLabel)
    }
}



