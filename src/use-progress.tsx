import { assertEmptyObject, ElementProps, monitorCallCount, Nullable, TargetedOmit, TargetedPick, useAsyncHandler, UseAsyncHandlerParameters, UseAsyncHandlerReturnType, useMergedProps, VNode } from "preact-prop-helpers";
import { ElementToTag, OmitStrong, Prefices } from "./props.js";
import { UseLabelReturnType, useLabelSynthetic, UseLabelSyntheticParameters } from "./use-label.js";
import { useNotify } from "./use-notify.js";


export interface UseProgressParametersSelf<IndicatorElement extends Element> {
    max: number;
    value: number | "indeterminate" | "disabled";
    valueText: Nullable<string>;
    tagProgressIndicator: ElementToTag<IndicatorElement>;
}

export interface UseProgressParameters<IndicatorElement extends Element, _LabelElement extends Element> extends
    TargetedOmit<UseLabelSyntheticParameters, "labelParameters", "onLabelClick"> {
    progressIndicatorParameters: UseProgressParametersSelf<IndicatorElement>;
}

export interface UseProgressReturnType<ProgressElement extends Element, ProgressLabelElement extends Element> extends OmitStrong<UseLabelReturnType<ProgressElement, ProgressLabelElement>, "propsInput" | "propsLabel"> {
    propsProgressIndicator: ElementProps<ProgressElement>;
    propsProgressLabel: ElementProps<ProgressLabelElement>;
    propsProgressRegion: ElementProps<any>;
}

/**
 * Provides the attributes and roles for a progress bar.
 * 
 * @compositeParams
 */
export function useProgress<ProgressElement extends Element, LabelElement extends Element>({
    labelParameters,
    progressIndicatorParameters: {
        max,
        value,
        valueText,
        tagProgressIndicator,
        ...void1
    },
    ...void2
}: UseProgressParameters<ProgressElement, LabelElement>): UseProgressReturnType<ProgressElement, LabelElement> {

    monitorCallCount(useProgress);

    const {
        propsInput,
        propsLabel,
        randomIdInputReturn,
        randomIdLabelReturn,
        pressReturn,
        ...void3
    } = useLabelSynthetic<ProgressElement, LabelElement>({
        labelParameters: { ...labelParameters, onLabelClick: null },
        randomIdInputParameters: { prefix: Prefices.progressIndicator },
        randomIdLabelParameters: { prefix: Prefices.progressLabel }
    });

    // This isn't an input in the usual sense -- it's not tabbable.
    // TODO: Make this an option in the hook itself
    propsInput.tabIndex = -1;

    const busy = value && value != "disabled"; //value == "disabled" || !value? false : true;// (!!value);
    const disabled = (value == "disabled");
    if (typeof value != "number") {
        value = null!;
        max ??= 100;
    }
    const indicatorProps: ElementProps<ProgressElement> = tagProgressIndicator === "progress" ?
        {
            max,
            value: (value ?? undefined),
            "aria-valuemin": 0,
            "aria-valuenow": value == null ? undefined : value,
        } satisfies ElementProps<ProgressElement>
        :
        {
            "aria-valuemin": 0,
            "aria-valuemax": max == null ? undefined : max,
            "aria-valuetext": valueText == null ? undefined : `${valueText}`,
            "aria-valuenow": value == null ? undefined : value,
            role: "progressbar"
        } satisfies ElementProps<ProgressElement>;

    if (disabled) {
        indicatorProps["aria-hidden"] = true;
    }

    const labelProps: ElementProps<LabelElement> = {
        "aria-hidden": (!busy ? "true" : undefined)
    };

    const regionProps: ElementProps<any> = {
        "aria-busy": !!(busy),
        "aria-describedby": randomIdInputReturn.id
    }

    assertEmptyObject(void1);
    assertEmptyObject(void2);
    assertEmptyObject(void3);

    return {
        propsProgressIndicator: useMergedProps(indicatorProps, propsInput),
        propsProgressLabel: useMergedProps(labelProps, propsLabel),
        propsProgressRegion: regionProps,
        randomIdInputReturn,
        randomIdLabelReturn,
        pressReturn,
    }
}

export interface UseProgressWithHandlerParametersSelf {
    /** If true, the progress bar will always read as at least having an indeterminate value. Nothing is announced to ATs when this changes. */
    forciblyPending: Nullable<boolean>;
    /** This will be announced to ATs when the async handler starts running */
    notifyPending: Nullable<VNode>;
    /** This will be announced to ATs when the async handler succeeds */
    notifySuccess: Nullable<VNode>;
    /** This will be announced to ATs when the async handler throws */
    notifyFailure: Nullable<VNode>;
}

export interface UseProgressWithHandlerParameters<EventType, CaptureType, IndicatorElement extends Element, LabelElement extends Element> extends
    TargetedPick<UseProgressParameters<IndicatorElement, LabelElement>, "progressIndicatorParameters", "tagProgressIndicator">,
    Pick<UseProgressParameters<IndicatorElement, LabelElement>, "labelParameters"> {
    progressWithHandlerParameters: UseProgressWithHandlerParametersSelf;
    asyncHandlerParameters: UseAsyncHandlerParameters<EventType, CaptureType>;
}

export interface UseProgressWithHandlerReturnType<EventType, CaptureType, IndicatorElement extends Element, LabelElement extends Element> {
    propsProgressIndicator: UseProgressReturnType<IndicatorElement, LabelElement>["propsProgressIndicator"];
    propsProgressLabel: UseProgressReturnType<IndicatorElement, LabelElement>["propsProgressLabel"];
    propsProgressRegion: UseProgressReturnType<IndicatorElement, LabelElement>["propsProgressRegion"];
    asyncHandlerReturn: UseAsyncHandlerReturnType<EventType, CaptureType>
}

/**
 * Provides props for a progress bar based on the progress of an async event handler, and notifies ATs when the operation has started/finished.
 * 
 * @remarks
 * 
 * @compositeParams
 */
export function useProgressWithHandler<EventType, CaptureType, IndicatorElement extends Element, LabelElement extends Element>({
    labelParameters,
    progressIndicatorParameters,
    asyncHandlerParameters: { asyncHandler, ...asyncHandlerParameters },
    progressWithHandlerParameters: { forciblyPending, notifyFailure, notifyPending, notifySuccess, ...void1 },
    ...void2
}: UseProgressWithHandlerParameters<EventType, CaptureType, IndicatorElement, LabelElement>): UseProgressWithHandlerReturnType<EventType, CaptureType, IndicatorElement, LabelElement> {
    monitorCallCount(useProgressWithHandler);
    assertEmptyObject(void1);
    assertEmptyObject(void2);

    const notify = useNotify();

    const asyncInfo = useAsyncHandler({
        ...asyncHandlerParameters, asyncHandler: async (...args) => {
            try {
                let promiseOrValue = asyncHandler?.(...args);
                if (promiseOrValue && "then" in promiseOrValue) {
                    if (notifyPending)
                        notify("assertive", notifyPending);
                    let value = await promiseOrValue;
                    if (notifySuccess)
                        notify("assertive", notifySuccess);
                    return value;
                }
                return promiseOrValue;
            }
            catch (ex) {
                if (notifyFailure)
                    notify("assertive", notifyFailure);
                throw ex;
            }
        }
    });


    const {
        propsProgressIndicator,
        propsProgressLabel,
        propsProgressRegion
    } = useProgress<IndicatorElement, LabelElement>({
        labelParameters,
        progressIndicatorParameters: {
            max: 1,
            value: (forciblyPending || asyncInfo.pending) ? "indeterminate" : "disabled",
            valueText: null,
            ...progressIndicatorParameters
        },
    });

    return {
        propsProgressIndicator,
        propsProgressLabel,
        propsProgressRegion,
        asyncHandlerReturn: asyncInfo
    }
}


