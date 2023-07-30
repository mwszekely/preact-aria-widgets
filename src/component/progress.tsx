import { UseAsyncHandlerParameters, assertEmptyObject, memo } from "preact-prop-helpers";
import { Get3 } from "../props.js";
import { UseProgressParameters, UseProgressReturnType, UseProgressWithHandlerParameters, UseProgressWithHandlerReturnType, useProgress, useProgressWithHandler } from "../use-progress.js";
import { GenericComponentProps, PartialExcept, useComponent } from "./util.js";

type Get<T, K extends keyof T> = T[K];

interface ProgressPropsBase<IndicatorElement extends Element, LabelElement extends Element> extends Get<UseProgressParameters<IndicatorElement, LabelElement>, "labelParameters">, Get<UseProgressParameters<IndicatorElement, LabelElement>, "progressIndicatorParameters"> {

}

interface ProgressWithHandlerPropsBase<EventType, CaptureType, IndicatorElement extends Element, LabelElement extends Element> extends
    Get3<UseProgressWithHandlerParameters<EventType, CaptureType, IndicatorElement, LabelElement>, "labelParameters", "progressIndicatorParameters", "progressWithHandlerParameters">,
    UseAsyncHandlerParameters<EventType, CaptureType> {

}

export interface ProgressProps<IndicatorElement extends Element, LabelElement extends Element> extends
    GenericComponentProps<UseProgressReturnType<IndicatorElement, LabelElement>,
        PartialExcept<ProgressPropsBase<IndicatorElement, LabelElement>, "tagProgressIndicator" | "ariaLabel">,
        "tagProgressIndicator"> {
}

export interface ProgressWithHandlerProps<EventType, CaptureType, IndicatorElement extends Element, LabelElement extends Element> extends
    GenericComponentProps<
        UseProgressWithHandlerReturnType<EventType, CaptureType, IndicatorElement, LabelElement>,
        PartialExcept<ProgressWithHandlerPropsBase<EventType, CaptureType, IndicatorElement, LabelElement>, "capture" | "tagProgressIndicator" | "ariaLabel" | "asyncHandler">,
        "capture" | "tagProgressIndicator"> {
}

export const Progress = memo(function Progress<IndicatorElement extends Element, LabelElement extends Element>({
    tagProgressIndicator,
    ariaLabel,
    max,
    render,
    value,
    valueText,
    imperativeHandle,
    ...void1
}: ProgressProps<IndicatorElement, LabelElement>) {
    assertEmptyObject(void1);
    
    return useComponent(
        imperativeHandle,
        render,
        null,
        useProgress<IndicatorElement, LabelElement>({
            labelParameters: { ariaLabel },
            progressIndicatorParameters: {
                max: max ?? 100,
                value: value ?? "indeterminate",
                valueText,
                tagProgressIndicator
            }
        }));
})

export const ProgressWithHandler = memo(function ProgressWithHandler<EventType, CaptureType, IndicatorElement extends Element, LabelElement extends Element>({
    ariaLabel,
    forciblyPending,
    render,
    tagProgressIndicator,
    asyncHandler,
    capture,
    debounce,
    throttle,
    notifyFailure,
    notifyPending,
    notifySuccess,
    imperativeHandle,
    ...void1
}: ProgressWithHandlerProps<EventType, CaptureType, IndicatorElement, LabelElement>) {
    assertEmptyObject(void1);
    
    return useComponent(
        imperativeHandle,
        render,
        null,
        useProgressWithHandler<EventType, CaptureType, IndicatorElement, LabelElement>({
            asyncHandlerParameters: { asyncHandler, capture, debounce, throttle },
            labelParameters: { ariaLabel },
            progressIndicatorParameters: { tagProgressIndicator },
            progressWithHandlerParameters: { forciblyPending, notifyFailure, notifyPending, notifySuccess }
        })
    );
});
