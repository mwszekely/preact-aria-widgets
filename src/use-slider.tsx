import { h } from "preact";
import { useManagedChildren, useMergedProps } from "preact-prop-helpers";
import { UseManagedChildParameters, UseManagedChildrenParameters, UseManagedChildrenReturnTypeInfo } from "preact-prop-helpers/use-child-manager";
import { StateUpdater, useCallback, useState } from "preact/hooks";
import { debugLog, EventDetail, TagSensitiveProps } from "./props";




export type RangeChangeEvent<E extends EventTarget> = { [EventDetail]: { value: number } } & Pick<h.JSX.TargetedEvent<E>, "target" | "currentTarget">;

export interface SliderThumbInfo {
    setMin: StateUpdater<number>;
    setMax: StateUpdater<number>;
}

export interface UseSliderThumbParameters<E extends Element> extends UseManagedChildParameters<number, SliderThumbInfo, never, "subInfo"> {
    sliderThumb: TagSensitiveProps<E> & {
        value: number;
        valueText?: string;
        onValueChange?: (e: RangeChangeEvent<E>) => void;
        min?: number;
        max?: number;

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
}

export interface UseSliderThumbProps<E extends Element> extends h.JSX.HTMLAttributes<E> {

}

export interface UseSliderParameters extends UseManagedChildrenParameters<number, never> {
    slider: {
        min: number;
        max: number;
    }
}

export interface UseSliderThumbReturnTypeInfo {
    sliderThumb: {
        min: number;
        max: number;
    }
}

export interface UseSliderThumbReturnType<E extends Element> extends UseSliderThumbReturnTypeInfo {
    useSliderThumbProps: (props: h.JSX.HTMLAttributes<E>) => h.JSX.HTMLAttributes<E>;
}

export type UseSliderThumb<ThumbElement extends Element> = (props: UseSliderThumbParameters<ThumbElement>) => UseSliderThumbReturnType<ThumbElement>;

export interface UseSliderReturnTypeInfo extends UseManagedChildrenReturnTypeInfo<number, SliderThumbInfo, never> {}
export interface UseSliderReturnTypeWithHooks<ThumbElement extends Element> extends UseSliderReturnTypeInfo {
    useSliderThumb: UseSliderThumb<ThumbElement>;
}


export function useSlider<ThumbElement extends Element>({ slider: { max: maxParent, min: minParent }, managedChildren }: UseSliderParameters): UseSliderReturnTypeWithHooks<ThumbElement> {
    debugLog("useSlider");
    const { useManagedChild, ...childrenInfo } = useManagedChildren<number, SliderThumbInfo, never>({ managedChildren });

    const useSliderThumb = useCallback(function useSliderThumb({ managedChild, sliderThumb }: UseSliderThumbParameters<ThumbElement>): UseSliderThumbReturnType<ThumbElement> {
        debugLog("useSliderThumb", managedChild.index);
        const [minParentCopy, setMinParentCopy] = useState(minParent);
        const [maxParentCopy, setMaxParentCopy] = useState(maxParent);
        const __: void = useManagedChild({ managedChild: { ...managedChild, subInfo: { setMax: setMaxParentCopy, setMin: setMinParentCopy } } });

        const { tag, value, max: maxOverride, min: minOverride, onValueChange, valueText, label } = sliderThumb;

        const min = (minOverride ?? minParentCopy);
        const max = (maxOverride ?? maxParentCopy);

        return {
            useSliderThumbProps,
            sliderThumb: {
                min,
                max
            },
        }

        function useSliderThumbProps<P extends UseSliderThumbProps<ThumbElement>>(props: P) {
            let newProps: h.JSX.HTMLAttributes<ThumbElement> = (
                tag == "input" ?
                    { min, max, value, type: "range" } :
                    { "aria-valuemax": `${max}`, "aria-valuemin": `${min}`, "aria-valuenow": `${value}` }
            );
            newProps = { ...newProps, "aria-label": label, "aria-valuetext": valueText, style: { "--range-value": `${value}`, "--range-value-text": `${valueText}` } };
            if (tag == "input") {
                newProps.onInput = e => {
                    onValueChange?.({ currentTarget: e.currentTarget, target: e.target, [EventDetail]: { value: (e.currentTarget as Element as HTMLInputElement).valueAsNumber } })
                }
            }
            else {
                throw new Error("Unimplemented");
            }
            return useMergedProps<ThumbElement>(newProps, props);
        }
    }, []);

    return { useSliderThumb, ...childrenInfo };
}

