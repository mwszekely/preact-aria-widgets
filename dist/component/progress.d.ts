import { Ref, VNode } from "preact";
import { UseAsyncHandlerParameters } from "preact-prop-helpers";
import { Get3 } from "../props.js";
import { UseProgressParameters, UseProgressReturnType, UseProgressWithHandlerParameters, UseProgressWithHandlerReturnType } from "../use-progress.js";
import { PartialExcept } from "./util.js";
type Get<T, K extends keyof T> = T[K];
interface ProgressPropsBase<IndicatorElement extends Element, LabelElement extends Element> extends Get<UseProgressParameters<IndicatorElement, LabelElement>, "labelParameters">, Get<UseProgressParameters<IndicatorElement, LabelElement>, "progressIndicatorParameters"> {
    ref?: Ref<UseProgressReturnType<IndicatorElement, LabelElement>>;
}
interface ProgressWithHandlerPropsBase<EventType, CaptureType, IndicatorElement extends Element, LabelElement extends Element> extends Get3<UseProgressWithHandlerParameters<EventType, CaptureType, IndicatorElement, LabelElement>, "labelParameters", "progressIndicatorParameters", "progressWithHandlerParameters">, UseAsyncHandlerParameters<EventType, CaptureType> {
    ref?: Ref<UseProgressReturnType<IndicatorElement, LabelElement>>;
}
export interface ProgressProps<IndicatorElement extends Element, LabelElement extends Element> extends PartialExcept<ProgressPropsBase<IndicatorElement, LabelElement>, "tagIndicator" | "ariaLabel"> {
    render(info: UseProgressReturnType<IndicatorElement, LabelElement>): VNode<any>;
}
export interface ProgressWithHandlerProps<EventType, CaptureType, IndicatorElement extends Element, LabelElement extends Element> extends PartialExcept<ProgressWithHandlerPropsBase<EventType, CaptureType, IndicatorElement, LabelElement>, "capture" | "tagIndicator" | "ariaLabel" | "asyncHandler"> {
    render(info: UseProgressWithHandlerReturnType<EventType, CaptureType, IndicatorElement, LabelElement>): VNode<any>;
}
export declare const Progress: <IndicatorElement extends Element, LabelElement extends Element>({ tagIndicator, ariaLabel, max, render, value, valueText }: ProgressProps<IndicatorElement, LabelElement>, ref?: Ref<any>) => VNode<any>;
export declare const ProgressWithHandler: <EventType, CaptureType, IndicatorElement extends Element, LabelElement extends Element>({ ariaLabel, forciblyPending, render, tagIndicator, asyncHandler, capture, debounce, throttle }: ProgressWithHandlerProps<EventType, CaptureType, IndicatorElement, LabelElement>, ref?: Ref<any>) => VNode<any>;
export {};
//# sourceMappingURL=progress.d.ts.map