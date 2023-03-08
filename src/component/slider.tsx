import { ComponentChildren, createContext, Ref, VNode } from "preact";
import { useContext, useImperativeHandle } from "preact/hooks";
import { SliderContext, SliderThumbInfo, useSlider, UseSliderParameters, UseSliderReturnType, useSliderThumb, UseSliderThumbParameters, UseSliderThumbReturnType } from "../use-slider.js";
import { memoForwardRef } from "./util.js";

type Get<T, K extends keyof T> = T[K];

export interface SliderProps extends Get<UseSliderParameters<SliderThumbInfo>, "managedChildrenParameters">, Get<UseSliderParameters<SliderThumbInfo>, "sliderParameters"> {
    children: ComponentChildren;
    ref?: Ref<UseSliderReturnType<SliderThumbInfo>>;
}

export interface SliderThumbProps<ThumbElement extends Element> extends Get<UseSliderThumbParameters<ThumbElement, SliderThumbInfo>, "managedChildParameters">, Get<UseSliderThumbParameters<ThumbElement, SliderThumbInfo>, "sliderThumbParameters"> {
    render(info: UseSliderThumbReturnType<ThumbElement, SliderThumbInfo>): VNode;
}

const SliderThumbContext = createContext<SliderContext<any>>(null!);

export const Slider = memoForwardRef(function Slider({ max, min, onAfterChildLayoutEffect, onChildrenMountChange, children }: SliderProps, ref?: Ref<any>) {
    const info = useSlider({
        managedChildrenParameters: { onAfterChildLayoutEffect, onChildrenMountChange },
        sliderParameters: { max, min }
    });

    useImperativeHandle(ref!, () => info);

    return (
        <SliderThumbContext.Provider value={info.context}>{children}</SliderThumbContext.Provider>
    );
})

export const SliderThumb = memoForwardRef(function SliderThumbU<ThumbElement extends Element>({ label, tag, value, max, min, onValueChange, index, render, valueText }: SliderThumbProps<ThumbElement>, ref?: Ref<any>) {
    const context = (useContext(SliderThumbContext) as SliderContext<SliderThumbInfo>);
    console.assert(context != null, `This SliderThumb is not contained within a Slider`);

    const info = useSliderThumb({
        context,
        managedChildParameters: { index },
        sliderThumbParameters: { label, tag, value, max, min, onValueChange, valueText },
    });

    useImperativeHandle(ref!, () => info);

    return render(info);
});
