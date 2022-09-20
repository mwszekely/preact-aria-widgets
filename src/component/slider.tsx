import { ComponentChildren, createContext, createElement, h, Ref, VNode } from "preact";
import { forwardRef } from "preact/compat";
import { useContext } from "preact/hooks";
import { ElementToTag, PropModifier } from "props";
import { useAriaSlider, UseAriaSliderParameters, UseAriaSliderThumb, UseAriaSliderThumbParameters, UseAriaSliderThumbReturnTypeInfo } from "../use-slider";

type Get<T, K extends keyof T> = T[K];

export interface SliderProps extends Get<UseAriaSliderParameters, "managedChildren">, Get<UseAriaSliderParameters, "slider"> {
    children: ComponentChildren;
}

export interface SliderThumbProps<ThumbElement extends Element> extends Get<UseAriaSliderThumbParameters<ThumbElement>, "managedChild">, Get<UseAriaSliderThumbParameters<ThumbElement>, "sliderThumb"> {
    render(info: UseAriaSliderThumbReturnTypeInfo, modifyThumbProps: PropModifier<ThumbElement>): VNode;
}

const SliderThumbContext = createContext<UseAriaSliderThumb<any>>(null!);

export function Slider({ max, min, onAfterChildLayoutEffect, onChildrenMountChange, children }: SliderProps) {
    const { useAriaSliderThumb, ..._sliderInfo } = useAriaSlider({
        managedChildren: { onAfterChildLayoutEffect, onChildrenMountChange },
        slider: { max, min }
    });

    return (
        <SliderThumbContext.Provider value={useAriaSliderThumb}>{children}</SliderThumbContext.Provider>
    );
}

function SliderThumbU<ThumbElement extends Element>({ label, tag, value, max, min, onValueChange, index, flags, render, valueText }: SliderThumbProps<ThumbElement>, ref: Ref<ThumbElement>) {
    const { useAriaSliderThumbProps, ...sliderInfo } = useContext(SliderThumbContext)({ managedChild: { index, flags }, sliderThumb: { label, tag, value, max, min, onValueChange, valueText } });

    return render(sliderInfo, useAriaSliderThumbProps)
}

export function defaultRenderSliderThumb<E extends Element>({ tagThumb, makePropsThumb }: { tagThumb: ElementToTag<E>, makePropsThumb: (info: UseAriaSliderThumbReturnTypeInfo) => h.JSX.HTMLAttributes<E> }) {
    return function (info: UseAriaSliderThumbReturnTypeInfo, modifyThumbProps: PropModifier<E>) {
        return createElement(tagThumb as never, modifyThumbProps(makePropsThumb(info)))
    }
}

export const SliderThumb = forwardRef(SliderThumbU) as typeof SliderThumbU;
