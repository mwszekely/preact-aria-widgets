import { ElementProps, monitorCallCount, useAsyncHandler, UseAsyncHandlerParameters, UseAsyncHandlerReturnType, useMergedProps } from "preact-prop-helpers";
import { ElementToTag, OmitStrong, Prefices } from "./props.js";
import { UseLabelReturnType, useLabelSynthetic, UseLabelSyntheticParameters } from "./use-label.js";


export interface UseProgressParameters<IndicatorElement extends Element, _LabelElement extends Element> {
    labelParameters: OmitStrong<UseLabelSyntheticParameters["labelParameters"], "onLabelClick">;
    progressIndicatorParameters: {
        max: number;
        value: number | "indeterminate" | "disabled";
        valueText: string | null;
        tagIndicator: ElementToTag<IndicatorElement>;
    }
}

export interface UseProgressReturnType<ProgressElement extends Element, ProgressLabelElement extends Element> extends OmitStrong<UseLabelReturnType<ProgressElement, ProgressLabelElement>, "propsInput" | "propsLabel"> {
    propsIndicator: ElementProps<ProgressElement>;
    propsLabel: ElementProps<ProgressLabelElement>;
    propsRegion: ElementProps<any>;
}

export function useProgress<ProgressElement extends Element, LabelElement extends Element>({
    labelParameters,
    progressIndicatorParameters: {
        max,
        value,
        valueText,
        tagIndicator
    }
}: UseProgressParameters<ProgressElement, LabelElement>): UseProgressReturnType<ProgressElement, LabelElement> {

    monitorCallCount(useProgress);

    const {
        propsInput,
        propsLabel,
        randomIdInputReturn,
        randomIdLabelReturn,
        pressReturn
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
    const indicatorProps: ElementProps<ProgressElement> = tagIndicator === "progress" ?
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


    return {
        propsIndicator: useMergedProps(indicatorProps, propsInput),
        propsLabel: useMergedProps(labelProps, propsLabel),
        propsRegion: regionProps,
        randomIdInputReturn,
        randomIdLabelReturn,
        pressReturn,
    }
}

export interface UseProgressWithHandlerParameters<EventType, CaptureType, IndicatorElement extends Element, LabelElement extends Element> {
    labelParameters: UseProgressParameters<IndicatorElement, LabelElement>["labelParameters"];
    progressIndicatorParameters: Pick<UseProgressParameters<IndicatorElement, LabelElement>["progressIndicatorParameters"], "tagIndicator">;
    progressWithHandlerParameters: {
        forciblyPending: boolean | null;
    };
    asyncHandlerParameters: UseAsyncHandlerParameters<EventType, CaptureType>;
}

export interface UseProgressWithHandlerReturnType<EventType, CaptureType, IndicatorElement extends Element, LabelElement extends Element> {
    propsIndicator: UseProgressReturnType<IndicatorElement, LabelElement>["propsIndicator"];
    propsLabel: UseProgressReturnType<IndicatorElement, LabelElement>["propsLabel"];
    propsRegion: UseProgressReturnType<IndicatorElement, LabelElement>["propsRegion"];
    asyncHandlerReturn: UseAsyncHandlerReturnType<EventType, CaptureType>
}

export function useProgressWithHandler<EventType, CaptureType, IndicatorElement extends Element, LabelElement extends Element>({
    labelParameters,
    progressIndicatorParameters,
    asyncHandlerParameters,
    progressWithHandlerParameters: { forciblyPending }
}: UseProgressWithHandlerParameters<EventType, CaptureType, IndicatorElement, LabelElement>): UseProgressWithHandlerReturnType<EventType, CaptureType, IndicatorElement, LabelElement> {
    monitorCallCount(useProgressWithHandler);
    
    const asyncInfo = useAsyncHandler(asyncHandlerParameters);

    const {
        propsIndicator,
        propsLabel,
        propsRegion
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
        propsIndicator,
        propsLabel,
        propsRegion,
        asyncHandlerReturn: asyncInfo
    }
}


