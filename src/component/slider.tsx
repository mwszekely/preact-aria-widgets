import { ComponentChildren, createContext, createElement, h, Ref, VNode } from "preact";
import { useContext, useImperativeHandle } from "preact/hooks";
import { ElementToTag, PropModifier } from "../props";
import { SliderContext, SliderThumbInfo, useSlider, UseSliderParameters, UseSliderReturnType, useSliderThumb, UseSliderThumb, UseSliderThumbParameters, UseSliderThumbReturnType } from "../use-slider";
import { memoForwardRef } from "./util";

type Get<T, K extends keyof T> = T[K];

export interface SliderProps extends Get<UseSliderParameters<SliderThumbInfo>, "managedChildrenParameters">, Get<UseSliderParameters<SliderThumbInfo>, "sliderParameters"> {
    children: ComponentChildren;
    ref?: Ref<UseSliderReturnType<SliderThumbInfo>>;
}

export interface SliderThumbProps<ThumbElement extends Element> extends Get<UseSliderThumbParameters<ThumbElement, SliderThumbInfo>, "managedChildParameters">, Get<UseSliderThumbParameters<ThumbElement, SliderThumbInfo>, "sliderThumbParameters"> {
    //subInfo: Get<UseSliderThumbParameters<ThumbElement, SliderThumbInfo>, "subInfo">;
    //ref?: Ref<UseSliderThumbReturnType<ThumbElement, SliderThumbInfo>>;
    render(info: UseSliderThumbReturnType<ThumbElement, SliderThumbInfo>): VNode;
}

const SliderThumbContext = createContext<SliderContext<any>>(null!);

export const Slider = memoForwardRef(function Slider<SliderElement extends Element, LabelElement extends Element>({ max, min, onAfterChildLayoutEffect, onChildrenMountChange, children }: SliderProps, ref?: Ref<any>) {
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
    const context = (useContext(SliderThumbContext) as SliderContext<SliderThumbInfo>)
    
    const info = useSliderThumb({
        context,
        managedChildParameters: { index },
        sliderThumbParameters: { label, tag, value, max, min, onValueChange, valueText },
        //subInfo
    });

    useImperativeHandle(ref!, () => info);

    return render(info);
})

function defaultRenderSliderThumb<E extends Element>({ tagThumb, makePropsThumb }: { tagThumb: ElementToTag<E>, makePropsThumb: (info: UseSliderThumbReturnType<E, SliderThumbInfo>) => h.JSX.HTMLAttributes<E> }) {
    return function (info: UseSliderThumbReturnType<E, SliderThumbInfo>) {
        return createElement(tagThumb as never, (makePropsThumb(info)))
    }
}
