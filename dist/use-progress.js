import { monitorCallCount, useAsyncHandler, useMergedProps } from "preact-prop-helpers";
import { Prefices } from "./props.js";
import { useLabelSynthetic } from "./use-label.js";
export function useProgress({ labelParameters, progressIndicatorParameters: { max, value, valueText, tagIndicator } }) {
    monitorCallCount(useProgress);
    const { propsInput, propsLabel, randomIdInputReturn, randomIdLabelReturn, pressReturn } = useLabelSynthetic({
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
        value = null;
        max ??= 100;
    }
    const indicatorProps = tagIndicator === "progress" ?
        {
            max,
            value: (value ?? undefined),
            "aria-valuemin": 0,
            "aria-valuenow": value == null ? undefined : value,
        }
        :
            {
                "aria-valuemin": 0,
                "aria-valuemax": max == null ? undefined : max,
                "aria-valuetext": valueText == null ? undefined : `${valueText}`,
                "aria-valuenow": value == null ? undefined : value,
                role: "progressbar"
            };
    if (disabled) {
        indicatorProps["aria-hidden"] = true;
    }
    const labelProps = {
        "aria-hidden": (!busy ? "true" : undefined)
    };
    const regionProps = {
        "aria-busy": !!(busy),
        "aria-describedby": randomIdInputReturn.id
    };
    return {
        propsIndicator: useMergedProps(indicatorProps, propsInput),
        propsLabel: useMergedProps(labelProps, propsLabel),
        propsRegion: regionProps,
        randomIdInputReturn,
        randomIdLabelReturn,
        pressReturn,
    };
}
export function useProgressWithHandler({ labelParameters, progressIndicatorParameters, asyncHandlerParameters, progressWithHandlerParameters: { forciblyPending } }) {
    monitorCallCount(useProgressWithHandler);
    const asyncInfo = useAsyncHandler(asyncHandlerParameters);
    const { propsIndicator, propsLabel, propsRegion } = useProgress({
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
    };
}
//# sourceMappingURL=use-progress.js.map