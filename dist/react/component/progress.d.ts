import { UseAsyncHandlerParameters } from "preact-prop-helpers/react";
import { Get3 } from "../props.js";
import { UseProgressParameters, UseProgressReturnType, UseProgressWithHandlerParameters, UseProgressWithHandlerReturnType } from "../use-progress.js";
import { GenericComponentProps, PartialExcept } from "./util.js";
type Get<T, K extends keyof T> = T[K];
interface ProgressPropsBase<IndicatorElement extends Element, LabelElement extends Element> extends Get<UseProgressParameters<IndicatorElement, LabelElement>, "labelParameters">, Get<UseProgressParameters<IndicatorElement, LabelElement>, "progressIndicatorParameters"> {
}
interface ProgressWithHandlerPropsBase<EventType, CaptureType, IndicatorElement extends Element, LabelElement extends Element> extends Get3<UseProgressWithHandlerParameters<EventType, CaptureType, IndicatorElement, LabelElement>, "labelParameters", "progressIndicatorParameters", "progressWithHandlerParameters">, UseAsyncHandlerParameters<EventType, CaptureType> {
}
export interface ProgressProps<IndicatorElement extends Element, LabelElement extends Element> extends GenericComponentProps<UseProgressReturnType<IndicatorElement, LabelElement>, PartialExcept<ProgressPropsBase<IndicatorElement, LabelElement>, "tagProgressIndicator" | "ariaLabel">, "tagProgressIndicator"> {
}
export interface ProgressWithHandlerProps<EventType, CaptureType, IndicatorElement extends Element, LabelElement extends Element> extends GenericComponentProps<UseProgressWithHandlerReturnType<EventType, CaptureType, IndicatorElement, LabelElement>, PartialExcept<ProgressWithHandlerPropsBase<EventType, CaptureType, IndicatorElement, LabelElement>, "capture" | "tagProgressIndicator" | "ariaLabel" | "asyncHandler">, "capture" | "tagProgressIndicator"> {
}
export declare const Progress: <IndicatorElement extends Element, LabelElement extends Element>({ tagProgressIndicator, ariaLabel, max, render, value, valueText, imperativeHandle, ...void1 }: ProgressProps<IndicatorElement, LabelElement>) => import("preact-prop-helpers/react").JSX.Element;
export declare const ProgressWithHandler: <EventType, CaptureType, IndicatorElement extends Element, LabelElement extends Element>({ ariaLabel, forciblyPending, render, tagProgressIndicator, asyncHandler, capture, debounce, throttle, notifyFailure, notifyPending, notifySuccess, imperativeHandle, ...void1 }: ProgressWithHandlerProps<EventType, CaptureType, IndicatorElement, LabelElement>) => import("preact-prop-helpers/react").JSX.Element;
export {};
//# sourceMappingURL=progress.d.ts.map