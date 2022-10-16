import { ComponentChildren, createContext, createElement, h, Ref, VNode } from "preact";
import { useContext, useImperativeHandle } from "preact/hooks";
import { ElementToTag, PropModifier } from "../props";
import { useSlider, UseSliderParameters, UseSliderReturnTypeInfo, UseSliderThumb, UseSliderThumbParameters, UseSliderThumbReturnTypeInfo } from "../use-slider";
import { memoForwardRef } from "./util";

type Get<T, K extends keyof T> = T[K];

export interface SliderProps<C, K extends string> extends Get<UseSliderParameters, "managedChildren">, Get<UseSliderParameters, "slider"> {
    children: ComponentChildren;
    ref?: Ref<UseSliderReturnTypeInfo<C, K>>;
}

export interface SliderThumbProps<ThumbElement extends Element, C, K extends string> extends Get<UseSliderThumbParameters<ThumbElement, C, K>, "managedChild">, Get<UseSliderThumbParameters<ThumbElement, C, K>, "sliderThumb"> {
    subInfo: Get<UseSliderThumbParameters<ThumbElement, C, K>, "subInfo">;
    ref?: Ref<UseSliderThumbReturnTypeInfo>;
    render(info: UseSliderThumbReturnTypeInfo, modifyThumbProps: PropModifier<ThumbElement>): VNode;
}

const SliderThumbContext = createContext<UseSliderThumb<any, any, any>>(null!);

export const Slider = memoForwardRef(function Slider<E extends Element, C = undefined, K extends string = never>({ max, min, onAfterChildLayoutEffect, onChildrenMountChange, children }: SliderProps<C, K>, ref?: Ref<any>) {
    const { useSliderThumb, ...sliderInfo } = useSlider<E, C, K>({
        managedChildren: { onAfterChildLayoutEffect, onChildrenMountChange },
        slider: { max, min }
    });

    useImperativeHandle(ref!, () => sliderInfo);

    return (
        <SliderThumbContext.Provider value={useSliderThumb}>{children}</SliderThumbContext.Provider>
    );
})

export const SliderThumb = memoForwardRef(function SliderThumbU<ThumbElement extends Element, C = undefined, K extends string = never>({ label, tag, value, max, min, onValueChange, index, flags, render, valueText, subInfo }: SliderThumbProps<ThumbElement, C, K>, ref?: Ref<any>) {
    const { useSliderThumbProps, ...sliderInfo } = (useContext(SliderThumbContext) as UseSliderThumb<ThumbElement, C, K>)({
        managedChild: { index, flags },
        sliderThumb: { label, tag, value, max, min, onValueChange, valueText },
        subInfo
    });

    useImperativeHandle(ref!, () => sliderInfo);

    return render(sliderInfo, useSliderThumbProps);
})

export function defaultRenderSliderThumb<E extends Element>({ tagThumb, makePropsThumb }: { tagThumb: ElementToTag<E>, makePropsThumb: (info: UseSliderThumbReturnTypeInfo) => h.JSX.HTMLAttributes<E> }) {
    return function (info: UseSliderThumbReturnTypeInfo, modifyThumbProps: PropModifier<E>) {
        return createElement(tagThumb as never, modifyThumbProps(makePropsThumb(info)))
    }
}
