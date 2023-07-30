import { assertEmptyObject, memo } from "preact-prop-helpers";
import { useProgress, useProgressWithHandler } from "../use-progress.js";
import { memoForwardRef, useComponent } from "./util.js";
export const Progress = memo(function Progress({ tagProgressIndicator, ariaLabel, max, render, value, valueText, imperativeHandle }) {
    return useComponent(imperativeHandle, render, null, useProgress({
        labelParameters: { ariaLabel },
        progressIndicatorParameters: {
            max: max ?? 100,
            value: value ?? "indeterminate",
            valueText,
            tagProgressIndicator
        }
    }));
});
export const ProgressWithHandler = memoForwardRef(function ProgressWithHandler({ ariaLabel, forciblyPending, render, tagProgressIndicator, asyncHandler, capture, debounce, throttle, notifyFailure, notifyPending, notifySuccess, imperativeHandle, ...void1 }) {
    assertEmptyObject(void1);
    return useComponent(imperativeHandle, render, null, useProgressWithHandler({
        asyncHandlerParameters: { asyncHandler, capture, debounce, throttle },
        labelParameters: { ariaLabel },
        progressIndicatorParameters: { tagProgressIndicator },
        progressWithHandlerParameters: { forciblyPending, notifyFailure, notifyPending, notifySuccess }
    }));
});
//# sourceMappingURL=progress.js.map