import { h } from "preact";
import { ManagedChildInfo, useManagedChild, useManagedChildren, UseManagedChildrenReturnType, UseManagedChildReturnType, useMergedProps, useRandomId } from "preact-prop-helpers";
import { UseManagedChildParameters, UseManagedChildrenParameters } from "preact-prop-helpers";
import { StateUpdater, useCallback, useMemo, useState } from "preact/hooks";
import { useLabel } from "use-label";
import { debugLog, EventDetail, TagSensitiveProps } from "./props";




export type RangeChangeEvent<E extends EventTarget> = { [EventDetail]: { value: number } } & Pick<h.JSX.TargetedEvent<E>, "target" | "currentTarget">;

export interface SliderThumbInfo extends ManagedChildInfo<number> {
    //setMin: StateUpdater<number>;
    //setMax: StateUpdater<number>;
}

export interface UseSliderThumbParameters<E extends Element, M extends SliderThumbInfo> extends UseManagedChildParameters<M> {
    sliderThumbParameters: TagSensitiveProps<E> & {
        value: number;
        valueText?: string;
        onValueChange?: (e: RangeChangeEvent<E>) => void;
        min?: number;
        max?: number;

        /**
         * There's no, like, "slider container" for multi-thumb sliders defined,
         * so each individual slider needs its own label.
         * TODO: This is like a tab/tabpanel linking thing where each label is outside
         * of the container. For now, it's easier to just 
         * assume a string-based label instead of an element-based one.
         * 
         */
        label: string;
    }
    sliderThumbContext: SliderContext;
}

export interface UseSliderThumbProps<E extends Element> extends h.JSX.HTMLAttributes<E> {

}

export interface UseSliderParameters<M extends SliderThumbInfo> extends UseManagedChildrenParameters<M> {
    sliderParameters: {
        min: number;
        max: number;
    }
}

export interface UseSliderThumbReturnType<E extends Element, M extends SliderThumbInfo> extends UseManagedChildReturnType<M> {
    sliderThumbReturn: {
        min: number;
        max: number;
    }
    propsSliderThumb: h.JSX.HTMLAttributes<E>;
}


export type UseSliderThumb<ThumbElement extends Element, M extends SliderThumbInfo> = (props: UseSliderThumbParameters<ThumbElement, M>) => UseSliderThumbReturnType<ThumbElement, M>;

export interface UseSliderReturnType<M extends SliderThumbInfo> extends UseManagedChildrenReturnType<M> {
    sliderContext: SliderContext;
}

interface SliderContext {
    min: number;
    max: number;
    baseId: string;
}


export function useSlider<ThumbElement extends Element, LabelElement extends Element>({ sliderParameters: { max, min }, managedChildrenParameters }: UseSliderParameters<SliderThumbInfo>): UseSliderReturnType<SliderThumbInfo> {
    debugLog("useSlider");
    const { managedChildContext, managedChildrenReturn } = useManagedChildren<SliderThumbInfo>({ managedChildrenParameters });

    const { propsReferencer, propsSource, randomIdReturn: { id: baseId } } = useRandomId<LabelElement, ThumbElement>({ randomIdParameters: { prefix: "aria-thumb-", referencerProp: "aria-labelledby" } })

    /*const {
        propsInput,
        propsLabel,
        randomIdInputReturn,
        randomIdLabelReturn
    } = useLabel<ThumbElement, LabelElement>({ labelParameters: { ariaLabel: null }, randomIdInputParameters, randomIdLabelParameters });*/

    return {
        managedChildContext,
        managedChildrenReturn,
        sliderContext: useMemo(() => ({
            min,
            max,
            baseId
        }), [min, max, baseId])
    };
}


export function useSliderThumb<ThumbElement extends Element, M extends SliderThumbInfo>({
    managedChildParameters,
    managedChildContext,
    sliderThumbContext: { max: maxParent, min: minParent },
    sliderThumbParameters
}: UseSliderThumbParameters<ThumbElement, M>): UseSliderThumbReturnType<ThumbElement, SliderThumbInfo> {
    debugLog("useSliderThumb", managedChildParameters.index);
    const { managedChildReturn } = useManagedChild<SliderThumbInfo>({ managedChildParameters, managedChildContext });
    const { getChildren: _getThumbs } = managedChildReturn;

    const { tag, value, max: maxOverride, min: minOverride, onValueChange, valueText, label } = sliderThumbParameters;

    const min = (minOverride ?? minParent);
    const max = (maxOverride ?? maxParent);

    let newProps: h.JSX.HTMLAttributes<ThumbElement> = (
        tag == "input" ?
            { min, max, value, type: "range" } :
            { "aria-valuemax": `${max}`, "aria-valuemin": `${min}`, "aria-valuenow": `${value}` }
    );
    newProps = { ...newProps, "aria-label": label, "aria-valuetext": valueText, style: { "--range-value": `${value}`, "--range-value-text": `${valueText}` } };
    if (tag == "input") {
        newProps.onInput = e => {
            onValueChange?.({ currentTarget: e.currentTarget, target: e.target, [EventDetail]: { value: (e.currentTarget as Element as HTMLInputElement).valueAsNumber } })
        }
    }
    else {
        throw new Error("Unimplemented");
    }

    return {
        sliderThumbReturn: {
            min,
            max
        },
        managedChildReturn,
        propsSliderThumb: newProps
    }
}
