import { ComponentChildren, createContext, createElement, h, VNode } from "preact";
import { memo } from "preact/compat";
import { useContext } from "preact/hooks";
import { ElementToTag, PropModifier } from "props";
import { useSlider, UseSliderParameters, UseSliderThumb, UseSliderThumbParameters, UseSliderThumbReturnTypeInfo } from "../use-slider";

type Get<T, K extends keyof T> = T[K];

export interface SliderProps extends Get<UseSliderParameters, "managedChildren">, Get<UseSliderParameters, "slider"> {
    children: ComponentChildren;
}

export interface SliderThumbProps<ThumbElement extends Element, C, K extends string> extends Get<UseSliderThumbParameters<ThumbElement, C, K>, "managedChild">, Get<UseSliderThumbParameters<ThumbElement, C, K>, "sliderThumb"> {
    subInfo: Get<UseSliderThumbParameters<ThumbElement, C, K>, "subInfo">;
    render(info: UseSliderThumbReturnTypeInfo, modifyThumbProps: PropModifier<ThumbElement>): VNode;
}

const SliderThumbContext = createContext<UseSliderThumb<any, any, any>>(null!);

export const Slider = memo( function Slider({ max, min, onAfterChildLayoutEffect, onChildrenMountChange, children }: SliderProps) {
    const { useSliderThumb, ..._sliderInfo } = useSlider({
        managedChildren: { onAfterChildLayoutEffect, onChildrenMountChange },
        slider: { max, min }
    });

    return (
        <SliderThumbContext.Provider value={useSliderThumb}>{children}</SliderThumbContext.Provider>
    );
})

export const SliderThumb = memo(function SliderThumbU<ThumbElement extends Element, C = undefined, K extends string = never>({ label, tag, value, max, min, onValueChange, index, flags, render, valueText, subInfo }: SliderThumbProps<ThumbElement, C, K>) {
    const { useSliderThumbProps, ...sliderInfo } = (useContext(SliderThumbContext) as UseSliderThumb<ThumbElement, C, K>)({ 
        managedChild: { index, flags }, 
        sliderThumb: { label, tag, value, max, min, onValueChange, valueText },
        subInfo
     });

    return render(sliderInfo, useSliderThumbProps)
})

export function defaultRenderSliderThumb<E extends Element>({ tagThumb, makePropsThumb }: { tagThumb: ElementToTag<E>, makePropsThumb: (info: UseSliderThumbReturnTypeInfo) => h.JSX.HTMLAttributes<E> }) {
    return function (info: UseSliderThumbReturnTypeInfo, modifyThumbProps: PropModifier<E>) {
        return createElement(tagThumb as never, modifyThumbProps(makePropsThumb(info)))
    }
}
