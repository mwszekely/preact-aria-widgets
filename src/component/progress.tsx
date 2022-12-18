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
})
/*
export function DemoProgress() {
    return (
        <>
            <Progress<HTMLProgressElement, HTMLLabelElement>
                ariaLabel={null}
                max={100}
                tagIndicator={"progress"}

                value={50}
                valueText={null}
                render={info => {
                    return (
                        <>
                            <label {...info.propsLabel}>Progress</label>
                            <progress {...info.propsIndicator} />
                            <button {...info.propsRegion}></button>
                        </>
                    )
                }}


            />
        </>
    )
}
*/
/*
export interface ProgressProps<ProgressElement extends Element, LabelElement extends Element, EventType extends Event, CaptureType, C, K extends string> extends
    Get<UseProgressWithHandlerParameters<ProgressElement, LabelElement, EventType, CaptureType>, "managedChildren">,
    Get<UseProgressWithHandlerParameters<ProgressElement, LabelElement, EventType, CaptureType>, "progress">,
    Get<UseProgressWithHandlerParameters<ProgressElement, LabelElement, EventType, CaptureType>, "asyncHandler"> {
    render(info: UseProgressWithHandlerReturnTypeInfo<EventType, CaptureType, C, K>): VNode;
}

export interface ProgressIndicatorProps<I extends Element, C, K extends string> extends
    Get<UseProgressIndicatorParameters<C, K, C>, "managedChild">,
    Get<UseProgressIndicatorParameters<C, K, C>, "progress"> {
    subInfo: Get<UseProgressIndicatorParameters<C, K, C>, "subInfo">;
    render(info: { progress: { busy: boolean } }, useModifiedProps: PropModifier<I>): VNode;
}

export interface ProgressRegionProps<I extends Element, C, K extends string> extends
    Get<UseProgressRegionParameters<C, K, C>, "managedChild"> {
    subInfo: Get<UseProgressRegionParameters<C, K, C>, "subInfo">;
    render(info: { progress: { busy: boolean } }, useModifiedProps: PropModifier<I>): VNode;
}

export interface ProgressLabelProps<I extends Element, C, K extends string> extends
    Get<UseProgressLabelParameters<C, K, C>, "managedChild"> {
    subInfo: Get<UseProgressLabelParameters<C, K, C>, "subInfo">;
    render(info: { progress: { busy: boolean } }, useModifiedProps: PropModifier<I>): VNode;
}

const IndicatorContext = createContext<UseProgressIndicator<any, any, any>>(null!);
const RegionContext = createContext<UseProgressRegion<any, any, any>>(null!);
const LabelContext = createContext<UseProgressLabel<any, any, any>>(null!);

export const Progress = memoForwardRef(function Progress<ProgressElement extends Element, LabelElement extends Element, EventType extends Event, CaptureType, C = undefined, K extends string = never>({
    asyncHandler,
    capture,
    tagLabel,
    tagProgress,
    debounce,
    onAfterChildLayoutEffect,
    onChildrenMountChange,
    throttle,
    render
}: ProgressProps<ProgressElement, LabelElement, EventType, CaptureType, C, K>, ref?: Ref<any>) {

    const { useProgressIndicator, useProgressLabel, useProgressRegion, ...info } = useProgressWithHandler<ProgressElement, LabelElement, EventType, CaptureType, C, K>({
        asyncHandler: { asyncHandler, capture, debounce, throttle },
        managedChildren: { onAfterChildLayoutEffect, onChildrenMountChange },
        progress: { tagLabel, tagProgress }
    });

    useImperativeHandle(ref!, () => info);

    return (
        <IndicatorContext.Provider value={useProgressIndicator}>
            <RegionContext.Provider value={useProgressRegion}>
                <LabelContext.Provider value={useProgressLabel}>
                    {render(info)}
                </LabelContext.Provider>
            </RegionContext.Provider>
        </IndicatorContext.Provider>
    )
})

export const ProgressIndicator = memoForwardRef(function ProgressIndicator<I extends Element, C, K extends string>({
    max,
    render,
    subInfo,
    value,
    valueText,
    flags
}: ProgressIndicatorProps<I, C, K>, ref?: Ref<any>) {
    const useProgressIndicator = useContext(IndicatorContext) as UseProgressIndicator<I, C, K>;
    const { useProgressIndicatorProps, ...info } = useProgressIndicator({
        managedChild: { flags },
        progress: { max, value, valueText },
        subInfo
    });

    useImperativeHandle(ref!, () => info);

    return render(info, useProgressIndicatorProps);
})

export const ProgressLabel = memoForwardRef(function ProgressLabel<I extends Element, C, K extends string>({
    render,
    subInfo,
    flags
}: ProgressLabelProps<I, C, K>, ref?: Ref<any>) {
    const useProgressLabel = useContext(LabelContext) as UseProgressLabel<I, C, K>;
    const { useProgressLabelProps, ...info } = useProgressLabel({
        managedChild: { flags },
        subInfo
    });

    useImperativeHandle(ref!, () => info);

    return render(info, useProgressLabelProps);
})

export const ProgressRegion = memoForwardRef(function ProgressRegion<I extends Element, C, K extends string>({
    render,
    subInfo,
    flags
}: ProgressRegionProps<I, C, K>, ref?: Ref<any>) {
    const useProgressRegion = useContext(RegionContext) as UseProgressRegion<I, C, K>;
    const { useProgressRegionProps, ...info } = useProgressRegion({
        managedChild: { flags },
        subInfo
    });

    useImperativeHandle(ref!, () => info);

    return render(info, useProgressRegionProps);
})
*/
