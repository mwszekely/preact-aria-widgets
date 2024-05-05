import { OmitStrong } from "preact-prop-helpers/preact";
import { Get2 } from "../props.js";
import { SliderThumbInfo, UseSliderParameters, UseSliderReturnType, UseSliderThumbParameters, UseSliderThumbReturnType } from "../use-slider.js";
import { GenericComponentProps } from "./util.js";
export type SliderProps<M extends SliderThumbInfo> = GenericComponentProps<UseSliderReturnType<M>, Get2<UseSliderParameters<M>, "managedChildrenParameters", "sliderParameters">, "min" | "max">;
export type SliderThumbProps<ThumbElement extends Element, M extends SliderThumbInfo = SliderThumbInfo> = GenericComponentProps<UseSliderThumbReturnType<ThumbElement>, Get2<UseSliderThumbParameters<ThumbElement>, "sliderThumbParameters", "info">, "index" | "label" | "tag" | "value"> & {
    info?: OmitStrong<M, keyof SliderThumbInfo>;
};
export declare function Slider({ max, min, onAfterChildLayoutEffect, onChildrenMountChange, render, imperativeHandle, onChildrenCountChange, ...void1 }: SliderProps<SliderThumbInfo>): import("preact-prop-helpers").JSX.Element;
export declare function SliderThumb<ThumbElement extends Element>({ label, tag, value, max, min, index, render, valueText, imperativeHandle, onValueChange, info, ...void1 }: SliderThumbProps<ThumbElement>): import("preact-prop-helpers").JSX.Element;
//# sourceMappingURL=slider.d.ts.map