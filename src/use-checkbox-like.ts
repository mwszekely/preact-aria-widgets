import { assertEmptyObject, ElementProps, focus, JSX, monitored, PressEventReason, TargetedOmit, TargetedPick, useMergedProps, usePress, UsePressParameters, UsePressReturnType, UseRefElementReturnType, useStableCallback } from "preact-prop-helpers";
import { useEffect } from "preact/hooks";
import { DisabledType, OmitStrong } from "./props.js";
import { LabelPosition, useLabel, UseLabelParameters, UseLabelReturnType } from "./use-label.js";


function preventDefault(e: Event) {
    e.preventDefault();
}


export type CheckboxCheckedType = boolean | "mixed";

export interface UseCheckboxLikeParametersSelf<C extends CheckboxCheckedType> {

    /** The role attribute to use, when applicable */
    role: JSX.AriaRole;
    /** Disables this checkbox-like */
    disabled: DisabledType;
    /** Controls the checked state of this checkbox-like */
    checked: C;
}

export interface UseCheckboxLikeParameters<LP extends LabelPosition, InputType extends Element, LabelType extends Element, C extends CheckboxCheckedType> extends
    OmitStrong<UseLabelParameters<LP, InputType, LabelType>, "labelParameters">,
    TargetedOmit<UseLabelParameters<LP, InputType, LabelType>, "labelParameters", "onLabelClick">,
    TargetedPick<UsePressParameters<any>, "pressParameters", "longPressThreshold" | "excludeSpace" | "onPressSync"> {
    checkboxLikeParameters: UseCheckboxLikeParametersSelf<C>;


    refElementLabelReturn: UseRefElementReturnType<LabelType>["refElementReturn"];
    refElementInputReturn: UseRefElementReturnType<InputType>["refElementReturn"];
}

export interface UseCheckboxLikeReturnTypeSelf {
    /**
     * Call this to focus whichever element handles the focus based on `labelPosition`.
     */
    focusSelf(): void;
}

export interface UseCheckboxLikeReturnType<InputType extends Element, LabelType extends Element> extends UseLabelReturnType<InputType, LabelType> {
    pressLabelReturn: UsePressReturnType<LabelType>["pressReturn"];
    pressInputReturn: UsePressReturnType<InputType>["pressReturn"];
    // TODO
    checkboxLikeInputReturn: { propsUnstable: ElementProps<InputType> }
    checkboxLikeLabelReturn: { propsUnstable: ElementProps<LabelType> }
    checkboxLikeReturn: UseCheckboxLikeReturnTypeSelf
}

/**
 * Handles any component that's "checkbox-like" (checkboxes, radios, switches, etc.)
 * 
 * @remarks Handles any component where there's:
 * ```md-literal
 * 1. Some kind of an on/off binary/trinary input element that needs event handlers
 * 2. Some kind of label for that input element
 * ```md-literal
 * 
 * See also `useLabel` for when there's a label for a non-checkbox-like component.
 * 
 * @compositeParams
 */
export const useCheckboxLike = monitored(function useCheckboxLike<LP extends LabelPosition, InputType extends Element, LabelType extends Element, C extends CheckboxCheckedType>({
    labelParameters,
    randomIdInputParameters,
    randomIdLabelParameters,
    checkboxLikeParameters: { checked, disabled, role, ...void1 },
    refElementInputReturn,
    refElementLabelReturn,
    pressParameters: { excludeSpace, longPressThreshold, onPressSync: onInputSync, ...void2 },
    ...void3
}: UseCheckboxLikeParameters<LP, InputType, LabelType, C>): UseCheckboxLikeReturnType<InputType, LabelType> {

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
        propsLabel,
        pressReturn
    } = useLabel<LP, InputType, LabelType>({
        labelParameters: {
            ...labelParameters,
            onLabelClick: useStableCallback((e) => {
                if (!disabled && tagInput != "input" && tagLabel != "label" && labelPosition != "separate") {
                    focusSelf();
                    onInputSync?.(e as PressEventReason<any>);
                }
            })
        },
        randomIdInputParameters,
        randomIdLabelParameters,
    });

    const focusSelf = useStableCallback(() => {
        let elementToFocus: HTMLElement | null = null;
        if (labelPosition == "wrapping")
            elementToFocus = getLabelElement() as Element as HTMLElement;
        else
            elementToFocus = getInputElement() as Element as HTMLElement;

        focus(elementToFocus);
    })

    const onClickInputSync = (labelPosition == "wrapping" ? undefined : onInputSync);
    const onClickLabelSync = onInputSync;
    const { pressReturn: pressInputReturn, props: propsPressInput } = usePress<InputType>({ pressParameters: { excludeSpace, allowRepeatPresses: false, excludeEnter: null, excludePointer: null, longPressThreshold, onPressingChange: null, focusSelf, onPressSync: (disabled) ? undefined : onClickInputSync }, refElementReturn: refElementInputReturn });
    const { pressReturn: pressLabelReturn, props: propsPressLabel } = usePress<LabelType>({ pressParameters: { excludeSpace, allowRepeatPresses: false, excludeEnter: null, excludePointer: null, longPressThreshold, onPressingChange: null, focusSelf, onPressSync: (disabled) ? undefined : onClickLabelSync }, refElementReturn: refElementLabelReturn });
    const propsUnstableInput: ElementProps<InputType> = {};
    const propsUnstableLabel: ElementProps<LabelType> = {};

    // Make sure that label clicks can't affect the visual state of the checkbox
    propsUnstableInput.onClick = preventDefault;
    propsUnstableLabel.onClick = preventDefault;

    propsUnstableInput.onInput = preventDefault;
    propsUnstableInput.onChange = preventDefault;

    propsUnstableInput.type = role == "radio" ? "radio" : "checkbox";

    switch (labelPosition) {
        case "none":
        case "separate": {
            if (tagInput == "input") {
                // Even in the most default input behavior, we still need to handle
                // special abstraction over checked="mixed" and disabled="soft"
                propsUnstableInput.checked = (checked === true);
                if (disabled === true || disabled === 'hard')
                    propsUnstableInput.disabled = true;
                else if (disabled == "soft")
                    propsUnstableInput["aria-disabled"] = "true";
            }
            else {
                // div inputs need their various ARIA roles and properties
                propsUnstableInput.role = role;
                propsUnstableInput.tabIndex = 0;
                propsUnstableInput["aria-checked"] = (checked ?? false);
                propsUnstableInput["aria-disabled"] = (!!disabled);
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
                // For form submission and styling
                propsUnstableInput.checked = (checked === true);
                propsUnstableInput.disabled = (disabled === true);

                // Because the wrapped label handles all interactions,
                // we need to make sure this element can't be interacted with
                // even if it's an input element.
                propsUnstableInput.inert = true;
                propsUnstableInput.tabIndex = -1;
                propsUnstableInput.role = "presentation";
                propsUnstableInput["aria-hidden"] = "true";
                propsUnstableInput.onFocus = _ => focus(getLabelElement?.() as HTMLElement | null);
            }
            else {
                // With a wrapping label, we're just using the input for visual styling and ignoring all interaction.
                // With a div, we get that for free and don't need to do anything here.
            }


            // Wrapping labels are the actual inputs that are interacted with
            // And are very similar conceptually to div inputs when separated
            propsUnstableLabel.role = role;
            propsUnstableLabel.tabIndex = 0;
            propsUnstableLabel["aria-checked"] = (checked ?? false);
            propsUnstableLabel["aria-disabled"] = (!!disabled);

            break;
        }
    }

    assertEmptyObject(void1);
    assertEmptyObject(void2);
    assertEmptyObject(void3);

    return {
        randomIdInputReturn,
        randomIdLabelReturn,
        pressInputReturn,
        pressLabelReturn,
        checkboxLikeInputReturn: { propsUnstable: propsUnstableInput },
        checkboxLikeLabelReturn: { propsUnstable: propsUnstableLabel },
        propsInput: useMergedProps(propsInput, propsUnstableInput, propsPressInput),
        propsLabel: useMergedProps(propsLabel, propsUnstableLabel, propsPressLabel),
        checkboxLikeReturn: { focusSelf },
        pressReturn
    }
})



