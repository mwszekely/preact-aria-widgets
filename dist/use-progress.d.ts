import { ElementProps, TargetedOmit, TargetedPick, UseAsyncHandlerParameters, UseAsyncHandlerReturnType } from "preact-prop-helpers";
import { ElementToTag, OmitStrong } from "./props.js";
import { UseLabelReturnType, UseLabelSyntheticParameters } from "./use-label.js";
export interface UseProgressParametersSelf<IndicatorElement extends Element> {
    max: number;
    value: number | "indeterminate" | "disabled";
    valueText: string | null;
    tagIndicator: ElementToTag<IndicatorElement>;
}
export interface UseProgressParameters<IndicatorElement extends Element, _LabelElement extends Element> extends TargetedOmit<UseLabelSyntheticParameters, "labelParameters", "onLabelClick"> {
    progressIndicatorParameters: UseProgressParametersSelf<IndicatorElement>;
}
export interface UseProgressReturnType<ProgressElement extends Element, ProgressLabelElement extends Element> extends OmitStrong<UseLabelReturnType<ProgressElement, ProgressLabelElement>, "propsInput" | "propsLabel"> {
    propsIndicator: ElementProps<ProgressElement>;
    propsLabel: ElementProps<ProgressLabelElement>;
    propsRegion: ElementProps<any>;
}
/**
 * Provides the attributes and roles for a progress bar.
 *
 * @compositeParams
 */
export declare function useProgress<ProgressElement extends Element, LabelElement extends Element>({ labelParameters, progressIndicatorParameters: { max, value, valueText, tagIndicator, ...void1 }, ...void2 }: UseProgressParameters<ProgressElement, LabelElement>): UseProgressReturnType<ProgressElement, LabelElement>;
export interface UseProgressWithHandlerParametersSelf {
    forciblyPending: boolean | null;
}
export interface UseProgressWithHandlerParameters<EventType, CaptureType, IndicatorElement extends Element, LabelElement extends Element> extends TargetedPick<UseProgressParameters<IndicatorElement, LabelElement>, "progressIndicatorParameters", "tagIndicator">, Pick<UseProgressParameters<IndicatorElement, LabelElement>, "labelParameters"> {
    progressWithHandlerParameters: UseProgressWithHandlerParametersSelf;
    asyncHandlerParameters: UseAsyncHandlerParameters<EventType, CaptureType>;
}
export interface UseProgressWithHandlerReturnType<EventType, CaptureType, IndicatorElement extends Element, LabelElement extends Element> {
    propsIndicator: UseProgressReturnType<IndicatorElement, LabelElement>["propsIndicator"];
    propsLabel: UseProgressReturnType<IndicatorElement, LabelElement>["propsLabel"];
    propsRegion: UseProgressReturnType<IndicatorElement, LabelElement>["propsRegion"];
    asyncHandlerReturn: UseAsyncHandlerReturnType<EventType, CaptureType>;
}
/**
 * Provides props for a progress bar based on the progress of an async event handler.
 *
 * @compositeParams
 */
export declare function useProgressWithHandler<EventType, CaptureType, IndicatorElement extends Element, LabelElement extends Element>({ labelParameters, progressIndicatorParameters, asyncHandlerParameters, progressWithHandlerParameters: { forciblyPending } }: UseProgressWithHandlerParameters<EventType, CaptureType, IndicatorElement, LabelElement>): UseProgressWithHandlerReturnType<EventType, CaptureType, IndicatorElement, LabelElement>;
//# sourceMappingURL=use-progress.d.ts.map