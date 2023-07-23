import { assertEmptyObject, focus, monitorCallCount, useMergedProps, usePress, useStableCallback } from "preact-prop-helpers";
import { useEffect } from "preact/hooks";
import { useLabel } from "./use-label.js";
function preventDefault(e) {
    e.preventDefault();
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
export function useCheckboxLike({ labelParameters, randomIdInputParameters, randomIdLabelParameters, checkboxLikeParameters: { checked, disabled, onInput: onInputSync, role, ...void1 }, refElementInputReturn, refElementLabelReturn, pressParameters: { excludeSpace, longPressThreshold, ...void2 }, ...void3 }) {
    monitorCallCount(useCheckboxLike);
    const { getElement: getInputElement } = refElementInputReturn;
    const { getElement: getLabelElement } = refElementLabelReturn;
    const { tagInput, tagLabel, labelPosition } = labelParameters;
    // onClick and onChange are a bit messy, so we need to
    // *always* make sure that the visible state is correct
    // after all the event dust settles.
    // See https://github.com/preactjs/preact/issues/2745,
    // and https://github.com/preactjs/preact/issues/1899#issuecomment-525690194
    useEffect(() => {
        const element = getInputElement();
        if (element && tagInput == "input") {
            element.indeterminate = (checked === "mixed");
            element.checked = (checked === true);
        }
    }, [tagInput, (checked ?? false)]);
    const { randomIdInputReturn, randomIdLabelReturn, propsInput, propsLabel, pressReturn } = useLabel({
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
        let elementToFocus = null;
        if (labelPosition == "wrapping")
            elementToFocus = getLabelElement();
        else
            elementToFocus = getInputElement();
        focus(elementToFocus);
    });
    const onClickInputSync = (labelPosition == "wrapping" ? undefined : onInputSync);
    const onClickLabelSync = onInputSync;
    const { pressReturn: pressInputReturn, props: propsPressInput } = usePress({ pressParameters: { excludeSpace, allowRepeatPresses: false, excludeEnter: null, excludePointer: null, longPressThreshold, onPressingChange: null, focusSelf, onPressSync: (disabled) ? undefined : onClickInputSync }, refElementReturn: refElementInputReturn });
    const { pressReturn: pressLabelReturn, props: propsPressLabel } = usePress({ pressParameters: { excludeSpace, allowRepeatPresses: false, excludeEnter: null, excludePointer: null, longPressThreshold, onPressingChange: null, focusSelf, onPressSync: (disabled) ? undefined : onClickLabelSync }, refElementReturn: refElementLabelReturn });
    const propsUnstableInput = {};
    const propsUnstableLabel = {};
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
                propsUnstableInput.onFocus = _ => focus(getLabelElement?.());
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
    };
}
//# sourceMappingURL=use-checkbox-like.js.map