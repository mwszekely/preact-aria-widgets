import { Ref, VNode } from "preact";
import { UseAsyncHandlerParameters } from "preact-prop-helpers";
import { useImperativeHandle } from "preact/hooks";
import { useProgress, UseProgressParameters, UseProgressReturnType, useProgressWithHandler, UseProgressWithHandlerParameters, UseProgressWithHandlerReturnType } from "../use-progress";
import { memoForwardRef, PartialExcept } from "./util";

type Get<T, K extends keyof T> = T[K];

interface ProgressPropsBase<IndicatorElement extends Element, LabelElement extends Element> extends Get<UseProgressParameters<IndicatorElement, LabelElement>, "labelParameters">, Get<UseProgressParameters<IndicatorElement, LabelElement>, "progressIndicatorParameters"> {
    ref?: Ref<UseProgressReturnType<IndicatorElement, LabelElement>>;
}

interface ProgressWithHandlerPropsBase<EventType, CaptureType, IndicatorElement extends Element, LabelElement extends Element> extends
    Get<UseProgressWithHandlerParameters<EventType, CaptureType, IndicatorElement, LabelElement>, "labelParameters">,
    Get<UseProgressWithHandlerParameters<EventType, CaptureType, IndicatorElement, LabelElement>, "progressIndicatorParameters">,
    Get<UseProgressWithHandlerParameters<EventType, CaptureType, IndicatorElement, LabelElement>, "progressWithHandlerParameters">,
    UseAsyncHandlerParameters<EventType, CaptureType> {
    ref?: Ref<UseProgressReturnType<IndicatorElement, LabelElement>>;
}

export interface ProgressProps<IndicatorElement extends Element, LabelElement extends Element> extends PartialExcept<ProgressPropsBase<IndicatorElement, LabelElement>, "tagIndicator" | "ariaLabel"> {
    render(info: UseProgressReturnType<IndicatorElement, LabelElement>): VNode<any>;
}

export interface ProgressWithHandlerProps<EventType, CaptureType, IndicatorElement extends Element, LabelElement extends Element> extends PartialExcept<ProgressWithHandlerPropsBase<EventType, CaptureType, IndicatorElement, LabelElement>, "capture" | "tagIndicator" | "ariaLabel" | "asyncHandler"> {
    render(info: UseProgressWithHandlerReturnType<EventType, CaptureType, IndicatorElement, LabelElement>): VNode<any>;
}

export const Progress = memoForwardRef(function Progress<IndicatorElement extends Element, LabelElement extends Element>({ tagIndicator, ariaLabel, max, render, value, valueText }: ProgressProps<IndicatorElement, LabelElement>, ref?: Ref<any>) {
    const info = useProgress<IndicatorElement, LabelElement>({
        labelParameters: { ariaLabel },
        progressIndicatorParameters: {
            max: max ?? 100,
            value: value ?? "indeterminate",
            valueText: valueText ?? null,
            tagIndicator
        }
    });

    useImperativeHandle(ref!, () => info);

    return render(info);
})

export const ProgressWithHandler = memoForwardRef(function ProgressWithHandler<EventType, CaptureType, IndicatorElement extends Element, LabelElement extends Element>({ ariaLabel, forciblyPending, render, tagIndicator, asyncHandler, capture, debounce, throttle }: ProgressWithHandlerProps<EventType, CaptureType, IndicatorElement, LabelElement>, ref?: Ref<any>) {
    const info = useProgressWithHandler<EventType, CaptureType, IndicatorElement, LabelElement>({
        asyncHandlerParameters: { asyncHandler, capture, debounce, throttle },
        labelParameters: { ariaLabel },
        progressIndicatorParameters: { tagIndicator },
        progressWithHandlerParameters: { forciblyPending: forciblyPending ?? false }
    })

    useImperativeHandle(ref!, () => info);

    return (render(info))
});
