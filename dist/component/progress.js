import { useImperativeHandle } from "preact/hooks";
import { useProgress, useProgressWithHandler } from "../use-progress.js";
import { memoForwardRef } from "./util.js";
export const Progress = memoForwardRef(function Progress({ tagIndicator, ariaLabel, max, render, value, valueText }, ref) {
    const info = useProgress({
        labelParameters: { ariaLabel },
        progressIndicatorParameters: {
            max: max ?? 100,
            value: value ?? "indeterminate",
            valueText: valueText ?? null,
            tagIndicator
        }
    });
    useImperativeHandle(ref, () => info);
    return render(info);
});
export const ProgressWithHandler = memoForwardRef(function ProgressWithHandler({ ariaLabel, forciblyPending, render, tagIndicator, asyncHandler, capture, debounce, throttle }, ref) {
    const info = useProgressWithHandler({
        asyncHandlerParameters: { asyncHandler, capture, debounce, throttle },
        labelParameters: { ariaLabel },
        progressIndicatorParameters: { tagIndicator },
        progressWithHandlerParameters: { forciblyPending: forciblyPending ?? false }
    });
    useImperativeHandle(ref, () => info);
    return (render(info));
});
//# sourceMappingURL=progress.js.map