import { h } from "preact";
import { ElementProps, ManagedChildInfo, Nullable, UseGenericChildParameters, UseManagedChildrenContext, UseManagedChildrenParameters, UseManagedChildrenReturnType, UseManagedChildReturnType } from "preact-prop-helpers/react";
import { EventDetail, TagSensitiveProps } from "./props.js";
export type RangeChangeEvent<E extends EventTarget> = {
    [EventDetail]: {
        value: number;
    };
} & Pick<h.JSX.TargetedEvent<E>, "target" | "currentTarget">;
export interface SliderThumbInfo extends ManagedChildInfo<number> {
}
export interface UseSliderThumbParametersSelf<E extends Element> extends TagSensitiveProps<E> {
    value: number;
    valueText: Nullable<string>;
    onValueChange: Nullable<(e: RangeChangeEvent<E>) => void>;
    min: Nullable<number>;
    max: Nullable<number>;
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
export interface UseSliderThumbParameters<ThumbElement extends Element, M extends SliderThumbInfo = SliderThumbInfo> extends UseGenericChildParameters<SliderContext<M>, Pick<M, "index">> {
    sliderThumbParameters: UseSliderThumbParametersSelf<ThumbElement>;
}
export interface UseSliderParametersSelf {
    min: number;
    max: number;
}
export interface UseSliderParameters<M extends SliderThumbInfo> extends UseManagedChildrenParameters<M> {
    sliderParameters: UseSliderParametersSelf;
}
export interface UseSliderThumbReturnTypeSelf {
    min: number;
    max: number;
}
export interface UseSliderThumbReturnType<E extends Element, M extends SliderThumbInfo = SliderThumbInfo> extends UseManagedChildReturnType<M> {
    sliderThumbReturn: UseSliderThumbReturnTypeSelf;
    propsSliderThumb: ElementProps<E>;
}
export interface UseSliderReturnType<M extends SliderThumbInfo> extends UseManagedChildrenReturnType<M> {
    context: SliderContext<M>;
}
export interface SliderContextSelf {
    min: number;
    max: number;
    baseId: string;
}
export interface SliderContext<M extends SliderThumbInfo> extends UseManagedChildrenContext<M> {
    sliderContext: SliderContextSelf;
}
/**
 * Implements a [Slider](https://www.w3.org/WAI/ARIA/apg/patterns/slider-multithumb/) pattern.
 *
 * @compositeParams
 *
 * @hasChild {@link useSliderThumb}
 */
export declare const useSlider: <M extends SliderThumbInfo>({ sliderParameters: { max, min }, managedChildrenParameters }: UseSliderParameters<M>) => UseSliderReturnType<M>;
/**
 * @compositeParams
 */
export declare const useSliderThumb: <ThumbElement extends Element>({ sliderThumbParameters: { tag, value, max: maxOverride, min: minOverride, valueText, label, onValueChange, ...void2 }, info, context: { sliderContext: { max: maxParent, min: minParent }, ...context }, ...void1 }: UseSliderThumbParameters<ThumbElement, SliderThumbInfo>) => UseSliderThumbReturnType<ThumbElement, SliderThumbInfo>;
//# sourceMappingURL=use-slider.d.ts.map