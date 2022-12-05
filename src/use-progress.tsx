import { h } from "preact";
import { useMergedProps } from "preact-prop-helpers";
import { ElementToTag, Prefices } from "./props";
import { UseLabelReturnType, useLabelSynthetic, UseLabelSyntheticParameters } from "./use-label";


export interface UseProgressParameters<IndicatorElement extends Element, _LabelElement extends Element> {
    labelParameters: Omit<UseLabelSyntheticParameters["labelParameters"], "onLabelClick">;
    /*progressParameters: {
        tagProgress: ElementToTag<IndicatorElement>;
        tagLabel: ElementToTag<LabelElement>;
    }*/
    progressIndicatorParameters: {
        max: number;
        value: number | "indeterminate" | "disabled";
        valueText: string | null;
        tagIndicator: ElementToTag<IndicatorElement>;
    }
}

export interface UseProgressReturnType<ProgressElement extends Element, ProgressLabelElement extends Element> extends Omit<UseLabelReturnType<ProgressElement, ProgressLabelElement>, "propsInput" | "propsLabel"> {
    propsIndicator: h.JSX.HTMLAttributes<ProgressElement>;
    propsLabel: h.JSX.HTMLAttributes<ProgressLabelElement>;
    propsRegion: h.JSX.HTMLAttributes<any>;
}

/*export interface UseProgressReturnTypeInfoWithHooks<I extends Element, L extends Element, C, K extends string> extends UseProgressReturnTypeInfo<C, K> {
    useProgressIndicator: UseProgressIndicator<I, C, K>;
    useProgressLabel: UseProgressLabel<L, C, K>;
    useProgressRegion: UseProgressRegion<any, C, K>;
}*/

//type UseProgressIndicator<I extends Element> = (a: UseProgressIndicatorParameters) => { progress: { busy: boolean; }; useProgressIndicatorProps: (props: h.JSX.HTMLAttributes<I>) => h.JSX.HTMLAttributes<I> };
//type UseProgressRegion<R extends Element> = (a: UseProgressRegionParameters) => { progress: { busy: boolean; }; useProgressRegionProps: (props: h.JSX.HTMLAttributes<R>) => h.JSX.HTMLAttributes<R> };
//type UseProgressLabel<L extends Element> = (a: UseProgressLabelParameters) => { progress: { busy: boolean; }; useProgressLabelProps: (props: h.JSX.HTMLAttributes<L>) => h.JSX.HTMLAttributes<L> };

export function useProgress<ProgressElement extends Element, LabelElement extends Element>({
    labelParameters,
    progressIndicatorParameters: {
        max,
        value,
        valueText,
        tagIndicator
    }
}: UseProgressParameters<ProgressElement, LabelElement>): UseProgressReturnType<ProgressElement, LabelElement> {

    //const { tagInput } = labelParameters

    const {
        propsInput,
        propsLabel,
        randomIdInputReturn,
        randomIdLabelReturn
    } = useLabelSynthetic<ProgressElement, LabelElement>({
        labelParameters: { ...labelParameters, onLabelClick: null },
        randomIdInputParameters: { prefix: Prefices.progressIndicator },
        randomIdLabelParameters: { prefix: Prefices.progressLabel }
    })



    const busy = (!!value);
    const disabled = (value == "disabled");
    if (typeof value != "number") {
        value = null!;
        max ??= 100;
    }
    const indicatorProps: h.JSX.HTMLAttributes<ProgressElement> = tagIndicator === "progress" ?
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

    if (disabled) {
        indicatorProps["aria-hidden"] = "true";
    }

    const labelProps: h.JSX.HTMLAttributes<LabelElement> = {
        "aria-hidden": (!busy ? "true" : undefined)
    };

    const regionProps = {
        "aria-busy": (busy).toString(),
        "aria-describedby": randomIdInputReturn.id
    }


    return {
        propsIndicator: useMergedProps(indicatorProps, propsInput),
        propsLabel: useMergedProps(labelProps, propsLabel),
        propsRegion: regionProps,
        randomIdInputReturn,
        randomIdLabelReturn,

    }
}


