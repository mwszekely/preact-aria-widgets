import { ComponentChildren, createContext, createElement, h, Ref, VNode } from "preact";
import { forwardRef } from "preact/compat";
import { useContext } from "preact/hooks";
import { ElementToTag, PropModifier } from "props";
import { useSlider, UseSliderParameters, UseSliderThumb, UseSliderThumbParameters, UseSliderThumbReturnTypeInfo } from "../use-slider";

type Get<T, K extends keyof T> = T[K];

export interface SliderProps extends Get<UseSliderParameters, "managedChildren">, Get<UseSliderParameters, "slider"> {
    children: ComponentChildren;
}

export interface SliderThumbProps<ThumbElement extends Element> extends Get<UseSliderThumbParameters<ThumbElement>, "managedChild">, Get<UseSliderThumbParameters<ThumbElement>, "sliderThumb"> {
    render(info: UseSliderThumbReturnTypeInfo, modifyThumbProps: PropModifier<ThumbElement>): VNode;
}

const SliderThumbContext = createContext<UseSliderThumb<any>>(null!);

export function Slider({ max, min, onAfterChildLayoutEffect, onChildrenMountChange, children }: SliderProps) {
    const { useSliderThumb, ..._sliderInfo } = useSlider({
        managedChildren: { onAfterChildLayoutEffect, onChildrenMountChange },
        slider: { max, min }
    });

    return (
        <SliderThumbContext.Provider value={useSliderThumb}>{children}</SliderThumbContext.Provider>
    );
}

function SliderThumbU<ThumbElement extends Element>({ label, tag, value, max, min, onValueChange, index, flags, render, valueText }: SliderThumbProps<ThumbElement>, ref: Ref<ThumbElement>) {
    const { useSliderThumbProps, ...sliderInfo } = useContext(SliderThumbContext)({ managedChild: { index, flags }, sliderThumb: { label, tag, value, max, min, onValueChange, valueText } });

    return render(sliderInfo, useSliderThumbProps)
}

export function defaultRenderSliderThumb<E extends Element>({ tagThumb, makePropsThumb }: { tagThumb: ElementToTag<E>, makePropsThumb: (info: UseSliderThumbReturnTypeInfo) => h.JSX.HTMLAttributes<E> }) {
    return function (info: UseSliderThumbReturnTypeInfo, modifyThumbProps: PropModifier<E>) {
        return createElement(tagThumb as never, modifyThumbProps(makePropsThumb(info)))
    }
}

export const SliderThumb = forwardRef(SliderThumbU) as typeof SliderThumbU;
