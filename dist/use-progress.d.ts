import { ElementProps, UseAsyncHandlerParameters, UseAsyncHandlerReturnType } from "preact-prop-helpers";
import { ElementToTag, OmitStrong } from "./props.js";
import { UseLabelReturnType, UseLabelSyntheticParameters } from "./use-label.js";
export interface UseProgressParameters<IndicatorElement extends Element, _LabelElement extends Element> {
    labelParameters: OmitStrong<UseLabelSyntheticParameters["labelParameters"], "onLabelClick">;
    progressIndicatorParameters: {
        max: number;
        value: number | "indeterminate" | "disabled";
        valueText: string | null;
        tagIndicator: ElementToTag<IndicatorElement>;
    };
}
export interface UseProgressReturnType<ProgressElement extends Element, ProgressLabelElement extends Element> extends OmitStrong<UseLabelReturnType<ProgressElement, ProgressLabelElement>, "propsInput" | "propsLabel"> {
    propsIndicator: ElementProps<ProgressElement>;
    propsLabel: ElementProps<ProgressLabelElement>;
    propsRegion: ElementProps<any>;
}
export declare function useProgress<ProgressElement extends Element, LabelElement extends Element>({ labelParameters, progressIndicatorParameters: { max, value, valueText, tagIndicator } }: UseProgressParameters<ProgressElement, LabelElement>): UseProgressReturnType<ProgressElement, LabelElement>;
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
    asyncHandlerReturn: UseAsyncHandlerReturnType<EventType, CaptureType>;
}
export declare function useProgressWithHandler<EventType, CaptureType, IndicatorElement extends Element, LabelElement extends Element>({ labelParameters, progressIndicatorParameters, asyncHandlerParameters, progressWithHandlerParameters: { forciblyPending } }: UseProgressWithHandlerParameters<EventType, CaptureType, IndicatorElement, LabelElement>): UseProgressWithHandlerReturnType<EventType, CaptureType, IndicatorElement, LabelElement>;
//# sourceMappingURL=use-progress.d.ts.map