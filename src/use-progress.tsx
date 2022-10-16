import { h } from "preact";
import { useAsyncHandler, UseAsyncHandlerParameters, UseAsyncHandlerReturnType, UseManagedChildParameters, useManagedChildren, UseManagedChildrenParameters, UseManagedChildrenReturnTypeInfo, useMergedProps, useState } from "preact-prop-helpers";
import { StateUpdater, useCallback, useEffect } from "preact/hooks";
import { ElementToTag } from "./props";
import { useLabel, UseLabelReturnTypeInfo } from "./use-label";

type T = "indicator" | "region" | "label";

export interface UseProgressParameters<IndicatorElement extends Element, LabelElement extends Element> extends UseManagedChildrenParameters<T, never> {
    progress: {
        tagProgress: ElementToTag<IndicatorElement>;
        tagLabel: ElementToTag<LabelElement>;
    }
}

interface PSI_Base<C> {
    subInfo: C
}

interface PSI_I<C> extends PSI_Base<C> {
    type: "indicator";
}

interface PSI_R<C> extends PSI_Base<C> {
    type: "region";
    setBusy: StateUpdater<boolean>;
}


interface PSI_L<C> extends PSI_Base<C> {
    type: "label";
    setHidden: StateUpdater<boolean>;
}

export type ProgressSubInfo<C> = (PSI_I<C> | PSI_R<C> | PSI_L<C>);

export interface UseProgressIndicatorParameters<C, K extends string, SubbestInfo> extends UseManagedChildParameters<"indicator", ProgressSubInfo<C>, K, "index", SubbestInfo> {
    progress: {
        max: number;
        value: number | "indeterminate" | "disabled";
        valueText: string;
    }
}
export interface UseProgressLabelParameters<C, K extends string, SubbestInfo> extends UseManagedChildParameters<"label", ProgressSubInfo<C>, K, "index", SubbestInfo> { }
export interface UseProgressRegionParameters<C, K extends string, SubbestInfo> extends UseManagedChildParameters<"region", ProgressSubInfo<C>, K, "index", SubbestInfo> { }

export interface UseProgressReturnTypeInfo<C, K extends string> extends UseManagedChildrenReturnTypeInfo<T, ProgressSubInfo<C>, K>, UseLabelReturnTypeInfo {

}

export interface UseProgressReturnTypeInfoWithHooks<I extends Element, L extends Element, C, K extends string> extends UseProgressReturnTypeInfo<C, K> {
    useProgressIndicator: UseProgressIndicator<I, C, K>;
    useProgressLabel: UseProgressLabel<L, C, K>;
    useProgressRegion: UseProgressRegion<any, C, K>;
}

export type UseProgressIndicator<I extends Element, C, K extends string> = (a: UseProgressIndicatorParameters<C, K, C>) => { progress: { busy: boolean; }; useProgressIndicatorProps: (props: h.JSX.HTMLAttributes<I>) => h.JSX.HTMLAttributes<I> };
export type UseProgressRegion<R extends Element, C, K extends string> = (a: UseProgressRegionParameters<C, K, C>) => { progress: { busy: boolean; }; useProgressRegionProps: (props: h.JSX.HTMLAttributes<R>) => h.JSX.HTMLAttributes<R> };
export type UseProgressLabel<L extends Element, C, K extends string> = (a: UseProgressLabelParameters<C, K, C>) => { progress: { busy: boolean; }; useProgressLabelProps: (props: h.JSX.HTMLAttributes<L>) => h.JSX.HTMLAttributes<L> };

export function useProgress<ProgressElement extends Element, LabelElement extends Element, C, K extends string>({ managedChildren, progress: { tagProgress: tag, tagLabel } }: UseProgressParameters<ProgressElement, LabelElement>): UseProgressReturnTypeInfoWithHooks<ProgressElement, LabelElement, C, K> {

    const { useLabelInput, useLabelLabel, ...labelInfo } = useLabel({ label: { prefixInput: "progress-indicator", prefixLabel: "progress-label-", tagInput: tag, tagLabel } })
    const { useManagedChild, ...mcInfo } = useManagedChildren<T, ProgressSubInfo<C>, K>({
        managedChildren
    });

    const { managedChildren: { children } } = mcInfo;

    const useProgressIndicator = useCallback(({ managedChild, subInfo, progress: { max, value, valueText } }: UseProgressIndicatorParameters<C, K, C>) => {
        const _: void = useManagedChild({ managedChild: { index: "indicator", ...managedChild }, subInfo: { type: "indicator", subInfo } });

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

    }, [useLabelInput]);

    const useProgressLabel = useCallback(({ managedChild, subInfo }: UseProgressLabelParameters<C, K, C>) => {
        const [hidden, setHidden] = useState(false);
        const _: void = useManagedChild({ managedChild: { index: "label", ...managedChild }, subInfo: { type: "label", setHidden, subInfo } });
        const { useLabelLabelProps } = useLabelLabel();
        return { progress: { busy: !hidden }, useProgressLabelProps: (props: h.JSX.HTMLAttributes<LabelElement>) => useLabelLabelProps(useMergedProps<LabelElement>(props, { "aria-hidden": (hidden ? "true" : undefined) })) }
    }, [useLabelLabel]);

    const useProgressRegion = useCallback(({ managedChild, subInfo }: UseProgressRegionParameters<C, K, C>) => {
        const [busy, setBusy] = useState(false);
        const _: void = useManagedChild({ managedChild: { index: "region", ...managedChild }, subInfo: { type: "region", setBusy, subInfo } });
        return { progress: { busy }, useProgressRegionProps: (props: h.JSX.HTMLAttributes<any>) => { return useMergedProps(props, { "aria-busy": busy.toString() }) } }
    }, []);

    return {
        ...labelInfo,
        ...mcInfo,
        useProgressIndicator,
        useProgressRegion,
        useProgressLabel
    }
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
