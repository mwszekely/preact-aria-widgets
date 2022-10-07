import { h } from "preact";
import { useManagedChildren, useMergedProps } from "preact-prop-helpers";
import { UseManagedChildParameters, UseManagedChildrenParameters, UseManagedChildrenReturnTypeInfo } from "preact-prop-helpers/use-child-manager";
import { StateUpdater, useCallback, useState } from "preact/hooks";
import { debugLog, EventDetail, TagSensitiveProps } from "./props";




export type RangeChangeEvent<E extends EventTarget> = { [EventDetail]: { value: number } } & Pick<h.JSX.TargetedEvent<E>, "target" | "currentTarget">;

export interface SliderThumbInfo<C> {
    setMin: StateUpdater<number>;
    setMax: StateUpdater<number>;
    subInfo: C;
}

export interface UseSliderThumbParameters<E extends Element, C, K extends string> extends UseManagedChildParameters<number, SliderThumbInfo<C>, K, never, C> {
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

export type UseSliderThumb<ThumbElement extends Element, C, K extends string> = (props: UseSliderThumbParameters<ThumbElement, C, K>) => UseSliderThumbReturnType<ThumbElement>;

export interface UseSliderReturnTypeInfo<C, K extends string> extends UseManagedChildrenReturnTypeInfo<number, SliderThumbInfo<C>, K> {}
export interface UseSliderReturnTypeWithHooks<ThumbElement extends Element, C, K extends string> extends UseSliderReturnTypeInfo<C, K> {
    useSliderThumb: UseSliderThumb<ThumbElement, C, K>;
}


export function useSlider<ThumbElement extends Element, C, K extends string>({ slider: { max: maxParent, min: minParent }, managedChildren }: UseSliderParameters): UseSliderReturnTypeWithHooks<ThumbElement, C, K> {
    debugLog("useSlider");
    const { useManagedChild, ...childrenInfo } = useManagedChildren<number, SliderThumbInfo<C>, K>({ managedChildren });

    const useSliderThumb = useCallback(function useSliderThumb({ managedChild, sliderThumb, subInfo }: UseSliderThumbParameters<ThumbElement, C, K>): UseSliderThumbReturnType<ThumbElement> {
        debugLog("useSliderThumb", managedChild.index);
        const [minParentCopy, setMinParentCopy] = useState(minParent);
        const [maxParentCopy, setMaxParentCopy] = useState(maxParent);
        const __: void = useManagedChild({ managedChild: { ...managedChild }, subInfo: { setMax: setMaxParentCopy, setMin: setMinParentCopy, subInfo } });

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

