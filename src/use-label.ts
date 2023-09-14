import { monitored, returnTrue, TargetedPick, useMergedProps, usePress, UsePressReturnType, useRandomDualIds, UseRandomDualIdsParameters, UseRandomDualIdsReturnType, useRefElement } from "preact-prop-helpers";
import { ElementToTag, noop, OmitStrong } from "./props.js";

export type LabelPosition = "separate" | "wrapping" | "none";
export type FocusableLabelElement<LP extends LabelPosition, InputElement extends Element, LabelElement extends Element> = LP extends "wrapping" ? LabelElement : InputElement;

export interface UseLabelParametersSelf<LP extends LabelPosition, InputElement extends Element, LabelElement extends Element> {
    onLabelClick: null | ((e: Event) => void);
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

    /** 
     * When `null`, this corresponds to having a visible label (with `labelPosition` == `"separate"` or `"wrapping"`).
     * 
     * When a string, this corresponds to `labelPosition` == `"none"`; this label is only visible to assistive technologies and *not* visible otherwise.
     */
    ariaLabel: LP extends "none" ? string : (null | undefined);
}

export interface UseLabelParameters<LP extends LabelPosition, InputElement extends Element, LabelElement extends Element> {
    randomIdInputParameters: OmitStrong<UseRandomDualIdsParameters["randomIdInputParameters"], "otherReferencerProp">;
    randomIdLabelParameters: OmitStrong<UseRandomDualIdsParameters["randomIdLabelParameters"], "otherReferencerProp">;

    labelParameters: UseLabelParametersSelf<LP, InputElement, LabelElement>;
}

export interface UseLabelReturnType<InputElement extends Element, LabelElement extends Element> extends
    UseRandomDualIdsReturnType<InputElement, LabelElement>,
    OmitStrong<UsePressReturnType<LabelElement>, "props"> { }

/**
 * @compositeParams
 */
export function useLabel<LP extends LabelPosition, InputElement extends Element, LabelElement extends Element>({
    randomIdInputParameters,
    randomIdLabelParameters,
    labelParameters: { tagInput, tagLabel, ariaLabel, labelPosition, onLabelClick }
}: UseLabelParameters<LP, InputElement, LabelElement>): UseLabelReturnType<InputElement, LabelElement> {
    const nativeHTMLBehavior = (tagInput == "input" && tagLabel == "label" && labelPosition != "wrapping");
    const synthetic = !nativeHTMLBehavior;

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
        randomIdInputParameters: { ...randomIdInputParameters, otherReferencerProp: !synthetic && labelPosition === "separate" ? "for" : null },
        randomIdLabelParameters: { ...randomIdLabelParameters, otherReferencerProp: synthetic ? "aria-labelledby" : null },
    });
    const { refElementReturn, propsStable: propsRef } = useRefElement<LabelElement>({ refElementParameters: {} });

    if (labelPosition == 'none') {
        // When we set the aria-label, intentionally clobber element-based labels (for example, in case they don't exist).
        propsInput["aria-label"] = (ariaLabel!);
        propsInput["aria-labelledby"] = undefined;
        propsLabel["for"] = undefined;
    }

    const { pressReturn, props: propsPress } = usePress({
        pressParameters: {
            excludeEnter: returnTrue,
            excludeSpace: returnTrue,
            onPressSync: onLabelClick,
            focusSelf: noop,
            allowRepeatPresses: false,
            excludePointer: null,
            longPressThreshold: null,
            onPressingChange: null
        },
        refElementReturn
    });

    return {
        pressReturn,
        propsInput,
        propsLabel: useMergedProps(propsLabel, propsRef, propsPress),
        randomIdInputReturn,
        randomIdLabelReturn,
    }
}

export interface UseLabelSyntheticParameters extends TargetedPick<UseLabelParameters<LabelPosition, any, any>, "labelParameters", "ariaLabel" | "onLabelClick"> {
    randomIdInputParameters: OmitStrong<UseRandomDualIdsParameters["randomIdInputParameters"], "otherReferencerProp">;
    randomIdLabelParameters: OmitStrong<UseRandomDualIdsParameters["randomIdLabelParameters"], "otherReferencerProp">;
}

/**
 * Shortcut for `useLabel` that assumes we're just never working with native HTML `input` and `label` elements. So for labelling guaranteably non-native elements.
 * 
 * @compositeParams
 */
export const useLabelSynthetic = monitored(function useLabelSynthetic<InputElement extends Element, LabelElement extends Element>({
    labelParameters: { ariaLabel, onLabelClick },
    ...rest
}: UseLabelSyntheticParameters) {

    return useLabel<LabelPosition, InputElement, LabelElement>({
        labelParameters: {
            ariaLabel,
            labelPosition: ariaLabel == null ? "separate" : "none",
            tagInput: "div" as never,
            tagLabel: "div" as never,
            onLabelClick
        },
        ...rest
    })
})

