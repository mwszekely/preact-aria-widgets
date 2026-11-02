import {
    JSX,
    returnTrue,
    TargetedPick,
    useMergedProps,
    usePress,
    UsePressReturnType,
    useRandomDualIds,
    UseRandomDualIdsParameters,
    UseRandomDualIdsReturnType,
    useRefElement
} from "preact-prop-helpers/preact";
import { noop, OmitStrong, useMonitoring } from "./props.js";

export type LabelPosition = "separate" | "wrapping" | "none";
export type FocusableLabelElement<LP extends LabelPosition, InputElement extends keyof JSX.IntrinsicElements, LabelElement extends keyof JSX.IntrinsicElements> = LP extends "wrapping" ? LabelElement : InputElement;

export interface UseLabelParametersSelf<LP extends LabelPosition, InputElementTag extends keyof JSX.IntrinsicElements, LabelElementTag extends keyof JSX.IntrinsicElements> {
    onLabelClick: null | ((e: Event) => void);
    tagInput: InputElementTag;
    tagLabel: LabelElementTag;
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

export interface UseLabelParameters<LP extends LabelPosition, InputTag extends keyof JSX.IntrinsicElements, LabelTag extends keyof JSX.IntrinsicElements> {
    randomIdInputParameters: OmitStrong<UseRandomDualIdsParameters["randomIdInputParameters"], "otherReferencerProp">;
    randomIdLabelParameters: OmitStrong<UseRandomDualIdsParameters["randomIdLabelParameters"], "otherReferencerProp">;

    labelParameters: UseLabelParametersSelf<LP, InputTag, LabelTag>;
}

export interface UseLabelReturnType<InputElementTag extends keyof JSX.IntrinsicElements, LabelElementTag extends keyof JSX.IntrinsicElements> extends
    UseRandomDualIdsReturnType<InputElementTag, LabelElementTag>,
    OmitStrong<UsePressReturnType<LabelElementTag>, "props"> { }

/**
 * @compositeParams
 */
export function useLabel<LP extends LabelPosition, InputElementTag extends keyof JSX.IntrinsicElements, LabelElementTag extends keyof JSX.IntrinsicElements>({
    randomIdInputParameters,
    randomIdLabelParameters,
    labelParameters: { tagInput, tagLabel, ariaLabel, labelPosition, onLabelClick }
}: UseLabelParameters<LP, InputElementTag, LabelElementTag>): UseLabelReturnType<InputElementTag, LabelElementTag> {
    return useMonitoring(function useLabel(): UseLabelReturnType<InputElementTag, LabelElementTag> {
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
        } = useRandomDualIds<InputElementTag, LabelElementTag>({
            randomIdInputParameters: { ...randomIdInputParameters, otherReferencerProp: !synthetic && labelPosition === "separate" ? "for" as never : null },
            randomIdLabelParameters: { ...randomIdLabelParameters, otherReferencerProp: synthetic ? "aria-labelledby" : null },
        });
        const { refElementReturn, propsStable: propsRef } = useRefElement<LabelElementTag>({ refElementParameters: {} });

        if (labelPosition == 'none') {
            // When we set the aria-label, intentionally clobber element-based labels (for example, in case they don't exist).
            propsInput["aria-label"] = (ariaLabel!);
            propsInput["aria-labelledby"] = undefined;
            propsLabel["for" as keyof typeof propsLabel] = undefined as never;
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
    });
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
export function useLabelSynthetic<InputElementTag extends keyof JSX.IntrinsicElements, LabelElementTag extends keyof JSX.IntrinsicElements>({
    labelParameters: { ariaLabel, onLabelClick },
    ...rest
}: UseLabelSyntheticParameters) {
    return useMonitoring(function useLabelSynthetic() {
        return useLabel<LabelPosition, InputElementTag, LabelElementTag>({
            labelParameters: {
                ariaLabel,
                labelPosition: ariaLabel == null ? "separate" : "none",
                tagInput: "div" as never,
                tagLabel: "div" as never,
                onLabelClick
            },
            ...rest
        });
    });
}

