import { ComponentChildren, Ref, VNode } from "preact";
import { SliderThumbInfo, UseSliderParameters, UseSliderReturnType, UseSliderThumbParameters, UseSliderThumbReturnType } from "../use-slider.js";
type Get<T, K extends keyof T> = T[K];
export interface SliderProps extends Get<UseSliderParameters<SliderThumbInfo>, "managedChildrenParameters">, Get<UseSliderParameters<SliderThumbInfo>, "sliderParameters"> {
    children: ComponentChildren;
    ref?: Ref<UseSliderReturnType<SliderThumbInfo>>;
}
export interface SliderThumbProps<ThumbElement extends Element> extends Get<UseSliderThumbParameters<ThumbElement, SliderThumbInfo>, "managedChildParameters">, Get<UseSliderThumbParameters<ThumbElement, SliderThumbInfo>, "sliderThumbParameters"> {
    render(info: UseSliderThumbReturnType<ThumbElement, SliderThumbInfo>): VNode;
}
export declare const Slider: ({ max, min, onAfterChildLayoutEffect, onChildrenMountChange, children }: SliderProps, ref?: Ref<any>) => import("preact").JSX.Element;
export declare const SliderThumb: <ThumbElement extends Element>({ label, tag, value, max, min, onValueChange, index, render, valueText }: SliderThumbProps<ThumbElement>, ref?: Ref<any>) => VNode<{}>;
export {};
//# sourceMappingURL=slider.d.ts.map