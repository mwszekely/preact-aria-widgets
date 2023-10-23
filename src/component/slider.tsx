import { createContext } from "preact";
import { OmitStrong, assertEmptyObject } from "preact-prop-helpers";
import { Get2, useContextWithWarning } from "../props.js";
import { SliderContext, SliderThumbInfo, UseSliderParameters, UseSliderReturnType, UseSliderThumbParameters, UseSliderThumbReturnType, useSlider, useSliderThumb } from "../use-slider.js";
import { GenericComponentProps, useComponent } from "./util.js";

export type SliderProps<M extends SliderThumbInfo> = GenericComponentProps<
    UseSliderReturnType<M>,
    Get2<UseSliderParameters<M>, "managedChildrenParameters", "sliderParameters">,
    "min" | "max"
>;

export type SliderThumbProps<ThumbElement extends Element, M extends SliderThumbInfo = SliderThumbInfo> = GenericComponentProps<
    UseSliderThumbReturnType<ThumbElement>,
    Get2<UseSliderThumbParameters<ThumbElement>, "sliderThumbParameters", "info">,
    "index" | "label" | "tag" | "value"
> & { info?: OmitStrong<M, keyof SliderThumbInfo> };

const SliderThumbContext = createContext<SliderContext<any>>(null!);

export function Slider({
    max,
    min,
    onAfterChildLayoutEffect,
    onChildrenMountChange,
    render,
    imperativeHandle,
    onChildrenCountChange,
    ...void1
}: SliderProps<SliderThumbInfo>) {
    assertEmptyObject(void1);
    return useComponent(
        imperativeHandle,
        render,
        SliderThumbContext,
        useSlider<SliderThumbInfo>({
            managedChildrenParameters: { onAfterChildLayoutEffect, onChildrenMountChange, onChildrenCountChange },
            sliderParameters: { max, min }
        })
    );
}

export function SliderThumb<ThumbElement extends Element>({
    label,
    tag,
    value,
    max,
    min,
    index,
    render,
    valueText,
    imperativeHandle,
    onValueChange,
    info,
    ...void1
}: SliderThumbProps<ThumbElement>) {
    assertEmptyObject(void1);
    return useComponent(
        imperativeHandle,
        render,
        null,
        useSliderThumb<ThumbElement>({
            context: (useContextWithWarning(SliderThumbContext, "slider")),
            info: { index, ...info },
            sliderThumbParameters: { label, tag, value, max, min, valueText, onValueChange },
        })
    );
}
