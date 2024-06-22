import {
    ElementProps,
    JSX,
    ManagedChildInfo,
    Nullable,
    UseGenericChildParameters,
    UseManagedChildReturnType,
    UseManagedChildrenContext,
    UseManagedChildrenParameters,
    UseManagedChildrenReturnType,
    assertEmptyObject,
    generateRandomId,
    useManagedChild,
    useManagedChildren,
    useMemo, useRef
} from "preact-prop-helpers";
import { EventDetail, Prefices, TagSensitiveProps, enhanceEvent, monitored } from "./props.js";




export type RangeChangeEvent<E extends EventTarget> = { [EventDetail]: { value: number } } & Pick<JSX.TargetedEvent<E>, "target" | "currentTarget">;

export interface SliderThumbInfo extends ManagedChildInfo<number> {
}

export interface UseSliderThumbParametersSelf<E extends Element> extends TagSensitiveProps<E> {
    value: number;
    valueText: Nullable<string>;
    onValueChange: Nullable<(e: RangeChangeEvent<E>) => void>;
    min: Nullable<number>;
    max: Nullable<number>;

    /**
     * There's no, like, "slider container" for multi-thumb sliders defined,
     * so each individual slider needs its own label.
     * TODO: This is like a tab/tabpanel linking thing where each label is outside
     * of the container. For now, it's easier to just 
     * assume a string-based label instead of an element-based one.
     * 
     */
    label: string;
}

export interface UseSliderThumbParameters<ThumbElement extends Element, M extends SliderThumbInfo = SliderThumbInfo> extends
    UseGenericChildParameters<SliderContext<M>, Pick<M, "index">>
//OmitStrong<UseProgressWithHandlerParameters<RangeChangeEvent<ThumbElement>, number>, "asyncHandlerParameters">,
//TargetedOmit<UseProgressWithHandlerParameters<RangeChangeEvent<ThumbElement>, number>, "asyncHandlerParameters", "capture
{
    sliderThumbParameters: UseSliderThumbParametersSelf<ThumbElement>;
}

//export interface UseSliderThumbProps<E extends Element> extends ElementProps<E> {}

export interface UseSliderParametersSelf {
    min: number;
    max: number;
}

export interface UseSliderParameters<M extends SliderThumbInfo> extends UseManagedChildrenParameters<M> {
    sliderParameters: UseSliderParametersSelf;
}

export interface UseSliderThumbReturnTypeSelf {
    min: number;
    max: number;
}

export interface UseSliderThumbReturnType<E extends Element, M extends SliderThumbInfo = SliderThumbInfo> extends
    UseManagedChildReturnType<M> {
    sliderThumbReturn: UseSliderThumbReturnTypeSelf;
    propsSliderThumb: ElementProps<E>;
}


//export type UseSliderThumb<ThumbElement extends Element, M extends SliderThumbInfo> = (props: UseSliderThumbParameters<ThumbElement, M>) => UseSliderThumbReturnType<ThumbElement, M>;

export interface UseSliderReturnType<M extends SliderThumbInfo> extends UseManagedChildrenReturnType<M> {
    context: SliderContext<M>;
}

export interface SliderContextSelf {
    min: number;
    max: number;
    baseId: string;
}

export interface SliderContext<M extends SliderThumbInfo> extends UseManagedChildrenContext<M> {
    sliderContext: SliderContextSelf;
}


/**
 * Implements a [Slider](https://www.w3.org/WAI/ARIA/apg/patterns/slider-multithumb/) pattern.
 * 
 * @compositeParams
 * 
 * @hasChild {@link useSliderThumb}
 */
export const useSlider = /* @__PURE__ */ monitored(function useSlider<M extends SliderThumbInfo>({ sliderParameters: { max, min }, managedChildrenParameters }: UseSliderParameters<M>): UseSliderReturnType<M> {
    const { context, managedChildrenReturn } = useManagedChildren<M>({ managedChildrenParameters });

    const baseIdRef = useRef<string>(null! as "");
    if (baseIdRef.current === null)
        baseIdRef.current = generateRandomId(Prefices.sliderThumb);

    return {
        context: useMemo(() => ({
            ...context,
            sliderContext: {
                min,
                max,
                baseId: baseIdRef.current
            }
        }), [min, max]),
        managedChildrenReturn
    };
})


/**
 * @compositeParams
 */
export const useSliderThumb = /* @__PURE__ */ monitored(function useSliderThumb<ThumbElement extends Element>({
    sliderThumbParameters: { tag, value, max: maxOverride, min: minOverride, valueText, label, onValueChange, ...void2 },
    info,
    context: { sliderContext: { max: maxParent, min: minParent }, ...context },
    ...void1
}: UseSliderThumbParameters<ThumbElement>): UseSliderThumbReturnType<ThumbElement> {
    const { managedChildReturn } = useManagedChild<SliderThumbInfo>({ info, context });
    const { getChildren: _getThumbs } = managedChildReturn;

    const min = (minOverride ?? minParent);
    const max = (maxOverride ?? maxParent);

    let newProps: ElementProps<ThumbElement> = (
        tag == "input" ?
            { min, max, value, type: "range" } :
            { "aria-valuemax": max, "aria-valuemin": min, "aria-valuenow": value }
    );
    newProps = { ...newProps, "aria-label": label, "aria-valuetext": valueText ?? undefined, style: { "--range-value": `${value}`, "--range-value-text": `${valueText}` } };
    if (tag == "input") {
        newProps.onInput = e => {
            onValueChange?.(enhanceEvent(e, { value: (e.currentTarget as Element as HTMLInputElement).valueAsNumber }));
        }
    }
    else {
        throw new Error("Unimplemented");
    }

    assertEmptyObject(void1);
    assertEmptyObject(void2);

    return {
        sliderThumbReturn: {
            min,
            max
        },
        managedChildReturn,
        propsSliderThumb: newProps
    }
})
