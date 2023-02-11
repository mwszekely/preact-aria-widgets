import { h } from "preact";
import { useMergedProps, usePress, UsePressParameters, UsePressReturnType, UseRefElementReturnType, useStableCallback } from "preact-prop-helpers";
import { useEffect } from "preact/hooks";
import { DisabledType, OmitStrong } from "./props";
import { LabelPosition, useLabel, UseLabelParameters, UseLabelReturnType } from "./use-label";


function preventDefault(e: Event) {
    e.preventDefault();
}


export type CheckboxCheckedType = boolean | "mixed";



export interface UseCheckboxLikeParameters<LP extends LabelPosition, InputType extends Element, LabelType extends Element> extends OmitStrong<UseLabelParameters<LP, InputType, LabelType>, "labelParameters"> {
    checkboxLikeParameters: {

        /** The role attribute to use, when applicable */
        role: string;
        disabled: DisabledType;
        checked: CheckboxCheckedType;
        onInput(event: Event): void;
    };
    pressParameters: Pick<UsePressParameters<any>["pressParameters"], "excludeSpace">;

    labelParameters: OmitStrong<UseLabelParameters<LP, InputType, LabelType>["labelParameters"], "onLabelClick">;

    refElementLabelReturn: UseRefElementReturnType<LabelType>["refElementReturn"];
    refElementInputReturn: UseRefElementReturnType<InputType>["refElementReturn"];
}

export interface UseCheckboxLikeReturnType<InputType extends Element, LabelType extends Element> extends UseLabelReturnType<InputType, LabelType> {
    pressLabelReturn: UsePressReturnType<LabelType>["pressReturn"];
    pressInputReturn: UsePressReturnType<InputType>["pressReturn"];
    checkboxLikeInputReturn: { propsUnstable: h.JSX.HTMLAttributes<InputType> }
    checkboxLikeLabelReturn: { propsUnstable: h.JSX.HTMLAttributes<LabelType> }
    checkboxLikeReturn: {
        /**
         * Call this to focus whichever element handles the focus based on `labelPosition`.
         */
        focusSelf(): void;
    }
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
    pressParameters: { excludeSpace }
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
        labelParameters: {
            ...labelParameters,
            onLabelClick: useStableCallback((e) => {
                if (!disabled && tagInput != "input" && tagLabel != "label" && labelPosition != "separate") {
                    focusSelf();
                    onInputSync(e);
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

        elementToFocus?.focus();
    })

    const onClickInputSync = (labelPosition == "wrapping" ? undefined : onInputSync);
    const onClickLabelSync = onInputSync;//(labelPosition != "wrapping" ? undefined : onInputSync);
    const { pressReturn: pressInputReturn } = usePress<InputType>({ pressParameters: { excludeSpace, focusSelf, onPressSync: (disabled) ? undefined : onClickInputSync }, refElementReturn: refElementInputReturn });
    const { pressReturn: pressLabelReturn } = usePress<LabelType>({ pressParameters: { excludeSpace, focusSelf, onPressSync: (disabled) ? undefined : onClickLabelSync }, refElementReturn: refElementLabelReturn });
    const propsUnstableInput: h.JSX.HTMLAttributes<InputType> = {};
    const propsUnstableLabel: h.JSX.HTMLAttributes<LabelType> = {};

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
                propsUnstableInput.onFocus = _ => (getLabelElement?.() as HTMLElement | null)?.focus?.();
            }
            else {
                // With a wrapping label, we're just using the input for visual styling and ignoring all interaction.
                // With a div, we get that for free and don't need to do anything here.
            }


            // Wrapping labels are the actual inputs that are interacted with
            // And are very similar conceptually to div inputs when separated
            propsUnstableLabel.role = role;
            propsUnstableLabel.tabIndex = 0;
            propsUnstableLabel["aria-checked"] = (checked ?? false).toString();
            propsUnstableLabel["aria-disabled"] = (!!disabled).toString();

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
        propsInput: useMergedProps(propsInput, propsUnstableInput, pressInputReturn.propsUnstable, refElementInputReturn.propsStable),
        propsLabel: useMergedProps(propsLabel, propsUnstableLabel, pressLabelReturn.propsUnstable, refElementLabelReturn.propsStable),
        checkboxLikeReturn: { focusSelf }
    }
}



