import { h } from "preact";
import { ManagedChildInfo, useAsyncHandler, UseAsyncHandlerParameters, UseAsyncHandlerReturnType, useManagedChild, UseManagedChildParameters, useManagedChildren, UseManagedChildrenParameters, UseManagedChildrenReturnType, useMergedProps, useState } from "preact-prop-helpers";
import { StateUpdater, useCallback, useEffect } from "preact/hooks";
import { ElementToTag } from "./props";
import { useLabel, UseLabelParameters, UseLabelReturnType } from "./use-label";

type T = "indicator" | "region" | "label";

export interface UseProgressParameters<IndicatorElement extends Element, LabelElement extends Element> extends UseManagedChildrenParameters<ProgressSubInfo>, Omit<UseLabelParameters<IndicatorElement, LabelElement>, "randomIdLabelParameters" | "randomIdInputParameters"> {
    /*progressParameters: {
        tagProgress: ElementToTag<IndicatorElement>;
        tagLabel: ElementToTag<LabelElement>;
    }*/
}

interface PSI_Base extends ManagedChildInfo<T> {
}

interface PSI_I extends PSI_Base {
    index: "indicator";
}

interface PSI_R extends PSI_Base {
    index: "region";
    setBusy: StateUpdater<boolean>;
}


interface PSI_L extends PSI_Base {
    index: "label";
    setHidden: StateUpdater<boolean>;
}

export type ProgressSubInfo = (PSI_I | PSI_R | PSI_L);

export interface UseProgressIndicatorParameters extends Omit<UseManagedChildParameters<PSI_I>, "managedChildParameters"> {
    managedChildParameters: Omit<UseManagedChildParameters<PSI_I>["managedChildParameters"], "index">;
    progressIndicatorParameters: {
        max: number;
        value: number | "indeterminate" | "disabled";
        valueText: string;
    }
}
export interface UseProgressLabelParameters extends UseManagedChildParameters<PSI_L> { }
export interface UseProgressRegionParameters extends UseManagedChildParameters<PSI_R> { }

export interface UseProgressReturnType<ProgressElement extends Element, ProgressLabelElement extends Element> extends UseManagedChildrenReturnType<ProgressSubInfo>, UseLabelReturnType<ProgressElement, ProgressLabelElement> {

}

/*export interface UseProgressReturnTypeInfoWithHooks<I extends Element, L extends Element, C, K extends string> extends UseProgressReturnTypeInfo<C, K> {
    useProgressIndicator: UseProgressIndicator<I, C, K>;
    useProgressLabel: UseProgressLabel<L, C, K>;
    useProgressRegion: UseProgressRegion<any, C, K>;
}*/

export type UseProgressIndicator<I extends Element> = (a: UseProgressIndicatorParameters) => { progress: { busy: boolean; }; useProgressIndicatorProps: (props: h.JSX.HTMLAttributes<I>) => h.JSX.HTMLAttributes<I> };
export type UseProgressRegion<R extends Element> = (a: UseProgressRegionParameters) => { progress: { busy: boolean; }; useProgressRegionProps: (props: h.JSX.HTMLAttributes<R>) => h.JSX.HTMLAttributes<R> };
export type UseProgressLabel<L extends Element> = (a: UseProgressLabelParameters) => { progress: { busy: boolean; }; useProgressLabelProps: (props: h.JSX.HTMLAttributes<L>) => h.JSX.HTMLAttributes<L> };

export function useProgress<ProgressElement extends Element, LabelElement extends Element>({
    managedChildrenParameters,
    labelParameters,
}: UseProgressParameters<ProgressElement, LabelElement>): UseProgressReturnType<ProgressElement, LabelElement> {

    const {
        propsInput,
        propsLabel,
        randomIdInputReturn,
        randomIdLabelReturn
    } = useLabel({
        labelParameters,
        randomIdInputParameters: { prefix: "progress-indicator-" },
        randomIdLabelParameters: { prefix: "progress-label-" }
    })
    const {
        managedChildContext,
        managedChildrenReturn
    } = useManagedChildren<ProgressSubInfo>({
        managedChildrenParameters
    });

    return {
        propsInput,
        propsLabel,
        randomIdInputReturn,
        randomIdLabelReturn,
        managedChildContext,
        managedChildrenReturn
    }
}



export function useProgressIndicator<ProgressElement extends Element>({ managedChildParameters, managedChildContext, progressIndicatorParameters: { max, value, valueText } }: UseProgressIndicatorParameters) {
    const _: void = useManagedChild<PSI_I>({ managedChildParameters: { index: "indicator", ...managedChildParameters }, managedChildContext });

    const busy = (!!value);
    useEffect(() => {
        const region = children.getAt("region");
        const label = children.getAt("label");
        if (region && region.subInfo.type == "region") {
            region.subInfo.setBusy(busy);
        }
        if (label && label.subInfo.type == "label") {
            label.subInfo.setHidden(busy);
        }
    }, [busy]);
    const { useLabelInputProps } = useLabelInput();
    return {
        progress: { busy },
        useProgressIndicatorProps: ({ "aria-valuemax": ariaValueMax, "aria-valuenow": ariaValueNow, "aria-valuetext": ariaValueText, role, ...p }: h.JSX.HTMLAttributes<ProgressElement>) => {
            if (value == "disabled") {
                p["aria-hidden"] = "true";
            }
            if (typeof value != "number") {
                value = null!;
                max ??= 100;
            }
            const extraProps: h.JSX.HTMLAttributes<ProgressElement> = tag === "progress" ?
                {
                    max,
                    value: (value ?? undefined),
                    "aria-valuemin": "0",
                    "aria-valuenow": value == null ? undefined : `${value}`,
                } as h.JSX.HTMLAttributes<HTMLProgressElement> as any as h.JSX.HTMLAttributes<ProgressElement>
                :
                {
                    "aria-valuemin": "0",
                    "aria-valuemax": max == null ? undefined : `${max}`,
                    "aria-valuetext": valueText == null ? undefined : `${valueText}`,
                    "aria-valuenow": value == null ? undefined : `${value}`,
                    role: "progressbar"
                };


            return useLabelInputProps(useMergedProps<ProgressElement>(p, extraProps));

        }
    }

}

export function useProgressLabel({ managedChild, subInfo }: UseProgressLabelParameters<C, K, C>) {
    const [hidden, setHidden] = useState(false);
    const _: void = useManagedChild({ managedChild: { index: "label", ...managedChild }, subInfo: { type: "label", setHidden, subInfo } });
    const { useLabelLabelProps } = useLabelLabel();
    return { progress: { busy: !hidden }, useProgressLabelProps: (props: h.JSX.HTMLAttributes<LabelElement>) => useLabelLabelProps(useMergedProps<LabelElement>(props, { "aria-hidden": (hidden ? "true" : undefined) })) }
};

export function useProgressRegion({ managedChild, subInfo }: UseProgressRegionParameters<C, K, C>) {
    const [busy, setBusy] = useState(false);
    const _: void = useManagedChild({ managedChild: { index: "region", ...managedChild }, subInfo: { type: "region", setBusy, subInfo } });
    return { progress: { busy }, useProgressRegionProps: (props: h.JSX.HTMLAttributes<any>) => { return useMergedProps(props, { "aria-busy": busy.toString() }) } }
}













export interface UseProgressWithHandlerParameters<IndicatorElement extends Element, LabelElement extends Element, EventType extends Event, CaptureType> extends UseProgressParameters<IndicatorElement, LabelElement> {
    asyncHandler: UseAsyncHandlerParameters<EventType, CaptureType>;
}

export type AsyncHandler<EventType extends Event, CaptureType> = ((c: CaptureType, e: EventType) => (Promise<void> | void));

export interface UseProgressWithHandlerReturnTypeInfo<EventType extends Event, CaptureType, C, K extends string> extends UseProgressReturnTypeInfo<C, K> {
    asyncHandler: UseAsyncHandlerReturnType<EventType, CaptureType>;
}

export interface UseProgressWithHandlerReturnTypeInfoWithHooks<I extends Element, L extends Element, EventType extends Event, CaptureType, C, K extends string> extends UseProgressWithHandlerReturnTypeInfo<EventType, CaptureType, C, K> {
    useProgressIndicator: UseProgressIndicator<I, C, K>;
    useProgressLabel: UseProgressLabel<L, C, K>;
    useProgressRegion: UseProgressRegion<any, C, K>;
}

export function useProgressWithHandler<ProgressElement extends Element, LabelElement extends Element, EventType extends Event, CaptureType, C, K extends string>({ asyncHandler, progress, managedChildren }: UseProgressWithHandlerParameters<ProgressElement, LabelElement, EventType, CaptureType>): UseProgressWithHandlerReturnTypeInfoWithHooks<ProgressElement, LabelElement, EventType, CaptureType, C, K> {
    const asyncRet = useAsyncHandler<EventType, CaptureType>(asyncHandler);
    const { useProgressIndicator, useProgressLabel, useProgressRegion, ...progressRet } = useProgress<ProgressElement, LabelElement, C, K>({ progress, managedChildren });

    return {
        useProgressIndicator,
        useProgressLabel,
        useProgressRegion,
        ...progressRet,
        asyncHandler: asyncRet
    }
}
