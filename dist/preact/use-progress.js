import { assertEmptyObject, useAsyncHandler, useMergedProps } from "preact-prop-helpers";
import { monitored, Prefices } from "./props.js";
import { useLabelSynthetic } from "./use-label.js";
import { useNotify } from "./use-notify.js";
/**
 * Provides the attributes and roles for a progress bar.
 *
 * @compositeParams
 */
export const useProgress = /* @__PURE__ */ monitored(function useProgress({ labelParameters, progressIndicatorParameters: { max, value, valueText, tagProgressIndicator, ...void1 }, ...void2 }) {
    const { propsInput, propsLabel, randomIdInputReturn, randomIdLabelReturn, pressReturn, ...void3 } = useLabelSynthetic({
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
    const indicatorProps = tagProgressIndicator === "progress" ?
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
    };
});
/**
 * Provides props for a progress bar based on the progress of an async event handler, and notifies ATs when the operation has started/finished.
 *
 * @remarks This hook is meant to be combined with other hooks, generally wrapping around the other hook.
 * You don't actually need an entire progress bar element as long as your `notify*` parameters are good.
 *
 * @compositeParams
 */
export const useProgressWithHandler = /* @__PURE__ */ monitored(function useProgressWithHandler({ labelParameters, progressIndicatorParameters, asyncHandlerParameters: { asyncHandler, ...asyncHandlerParameters }, progressWithHandlerParameters: { forciblyPending, notifyFailure, notifyPending, notifySuccess, ...void1 }, ...void2 }) {
    assertEmptyObject(void1);
    assertEmptyObject(void2);
    const notify = useNotify();
    const asyncInfo = useAsyncHandler({
        ...asyncHandlerParameters,
        asyncHandler: (...args) => {
            try {
                let promiseOrValue = asyncHandler?.(...args);
                if (promiseOrValue && "then" in promiseOrValue) {
                    if (notifyPending)
                        notify("assertive", notifyPending);
                    return promiseOrValue.then((value) => {
                        if (notifySuccess)
                            notify("assertive", notifySuccess);
                        return value;
                    });
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
    const { propsProgressIndicator, propsProgressLabel, propsProgressRegion } = useProgress({
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
    };
});
//# sourceMappingURL=use-progress.js.map