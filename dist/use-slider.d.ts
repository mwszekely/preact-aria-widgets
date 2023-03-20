import { h } from "preact";
import { ManagedChildInfo, UseManagedChildParameters, UseManagedChildrenContext, UseManagedChildrenParameters, UseManagedChildrenReturnType, UseManagedChildReturnType } from "preact-prop-helpers";
import { EventDetail, TagSensitiveProps } from "./props.js";
export type RangeChangeEvent<E extends EventTarget> = {
    [EventDetail]: {
        value: number;
    };
} & Pick<h.JSX.TargetedEvent<E>, "target" | "currentTarget">;
export interface SliderThumbInfo extends ManagedChildInfo<number> {
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
    };
    context: SliderContext<M>;
}
export interface UseSliderThumbProps<E extends Element> extends h.JSX.HTMLAttributes<E> {
}
export interface UseSliderParameters<M extends SliderThumbInfo> extends UseManagedChildrenParameters<M> {
    sliderParameters: {
        min: number;
        max: number;
    };
}
export interface UseSliderThumbReturnType<E extends Element, M extends SliderThumbInfo> extends UseManagedChildReturnType<M> {
    sliderThumbReturn: {
        min: number;
        max: number;
    };
    propsSliderThumb: h.JSX.HTMLAttributes<E>;
}
export type UseSliderThumb<ThumbElement extends Element, M extends SliderThumbInfo> = (props: UseSliderThumbParameters<ThumbElement, M>) => UseSliderThumbReturnType<ThumbElement, M>;
export interface UseSliderReturnType<M extends SliderThumbInfo> extends UseManagedChildrenReturnType<M> {
    context: SliderContext<M>;
}
export interface SliderContext<M extends SliderThumbInfo> extends UseManagedChildrenContext<M> {
    sliderContext: {
        min: number;
        max: number;
        baseId: string;
    };
}
export declare function useSlider({ sliderParameters: { max, min }, managedChildrenParameters }: UseSliderParameters<SliderThumbInfo>): UseSliderReturnType<SliderThumbInfo>;
export declare function useSliderThumb<ThumbElement extends Element, M extends SliderThumbInfo>({ info, context: { sliderContext: { max: maxParent, min: minParent }, ...context }, sliderThumbParameters }: UseSliderThumbParameters<ThumbElement, M>): UseSliderThumbReturnType<ThumbElement, SliderThumbInfo>;
//# sourceMappingURL=use-slider.d.ts.map