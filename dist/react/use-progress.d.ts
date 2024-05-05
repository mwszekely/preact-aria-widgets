import { ElementProps, Nullable, TargetedOmit, TargetedPick, UseAsyncHandlerParameters, UseAsyncHandlerReturnType, VNode } from "preact-prop-helpers/preact";
import { ElementToTag, OmitStrong } from "./props.js";
import { UseLabelReturnType, UseLabelSyntheticParameters } from "./use-label.js";
export interface UseProgressParametersSelf<IndicatorElement extends Element> {
    max: number;
    value: number | "indeterminate" | "disabled";
    valueText: Nullable<string>;
    tagProgressIndicator: ElementToTag<IndicatorElement>;
}
export interface UseProgressParameters<IndicatorElement extends Element, _LabelElement extends Element> extends TargetedOmit<UseLabelSyntheticParameters, "labelParameters", "onLabelClick"> {
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
export declare const useProgress: <ProgressElement extends Element, LabelElement extends Element>({ labelParameters, progressIndicatorParameters: { max, value, valueText, tagProgressIndicator, ...void1 }, ...void2 }: UseProgressParameters<ProgressElement, LabelElement>) => UseProgressReturnType<ProgressElement, LabelElement>;
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
export interface UseProgressWithHandlerParameters<EventType, CaptureType, IndicatorElement extends Element, LabelElement extends Element> extends TargetedPick<UseProgressParameters<IndicatorElement, LabelElement>, "progressIndicatorParameters", "tagProgressIndicator">, Pick<UseProgressParameters<IndicatorElement, LabelElement>, "labelParameters"> {
    progressWithHandlerParameters: UseProgressWithHandlerParametersSelf;
    asyncHandlerParameters: UseAsyncHandlerParameters<EventType, CaptureType>;
}
export interface UseProgressWithHandlerReturnType<EventType, CaptureType, IndicatorElement extends Element, LabelElement extends Element> {
    propsProgressIndicator: UseProgressReturnType<IndicatorElement, LabelElement>["propsProgressIndicator"];
    propsProgressLabel: UseProgressReturnType<IndicatorElement, LabelElement>["propsProgressLabel"];
    propsProgressRegion: UseProgressReturnType<IndicatorElement, LabelElement>["propsProgressRegion"];
    asyncHandlerReturn: UseAsyncHandlerReturnType<EventType, CaptureType>;
}
/**
 * Provides props for a progress bar based on the progress of an async event handler, and notifies ATs when the operation has started/finished.
 *
 * @remarks This hook is meant to be combined with other hooks, generally wrapping around the other hook.
 * You don't actually need an entire progress bar element as long as your `notify*` parameters are good.
 *
 * @compositeParams
 */
export declare const useProgressWithHandler: <EventType, CaptureType, IndicatorElement extends Element, LabelElement extends Element>({ labelParameters, progressIndicatorParameters, asyncHandlerParameters: { asyncHandler, ...asyncHandlerParameters }, progressWithHandlerParameters: { forciblyPending, notifyFailure, notifyPending, notifySuccess, ...void1 }, ...void2 }: UseProgressWithHandlerParameters<EventType, CaptureType, IndicatorElement, LabelElement>) => UseProgressWithHandlerReturnType<EventType, CaptureType, IndicatorElement, LabelElement>;
//# sourceMappingURL=use-progress.d.ts.map