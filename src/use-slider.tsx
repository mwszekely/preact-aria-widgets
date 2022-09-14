import { h } from "preact";
import { useManagedChildren, useMergedProps } from "preact-prop-helpers";
import { UseManagedChildParameters, UseManagedChildrenParameters, UseManagedChildrenReturnTypeInfo } from "preact-prop-helpers/use-child-manager";
import { StateUpdater, useCallback, useState } from "preact/hooks";
import { EventDetail, TagSensitiveProps } from "./props";




export type RangeChangeEvent<E extends EventTarget> = { [EventDetail]: { value: number } } & Pick<h.JSX.TargetedEvent<E>, "target" | "currentTarget">;

export interface AriaSliderThumbInfo {
    setMin: StateUpdater<number>;
    setMax: StateUpdater<number>;
}

export interface UseAriaSliderThumbParameters<E extends Element> extends UseManagedChildParameters<number, AriaSliderThumbInfo, never, "subInfo"> {
    sliderThumb: TagSensitiveProps<E> & {
        value: number;
        valueText?: string;
        onValueChange?: (e: RangeChangeEvent<E>) => void;
        min?: number;
        max?: number;

        // There's no, like, "slider container" for multi-thumb sliders defined,
        // so each individual slider needs its own label.
        // TODO: This is like a tab/tabpanel linking thing where each label is outside
        // of the container. For now, it's easier to just 
        // assume a string-based label instead of an element-based one.
        label: string;
    }
}

export interface UseAriaSliderThumbProps<E extends Element> extends h.JSX.HTMLAttributes<E> {

}

export interface UseAriaSliderParameters extends UseManagedChildrenParameters<number, never> {
    slider: {
        min: number;
        max: number;
    }
}

export interface UseAriaSliderThumbReturnTypeInfo {
    sliderThumb: {
        min: number;
        max: number;
    }
}

export interface UseAriaSliderThumbReturnType<E extends Element> extends UseAriaSliderThumbReturnTypeInfo {
    useAriaSliderThumbProps: (props: h.JSX.HTMLAttributes<E>) => h.JSX.HTMLAttributes<E>;
}

export type UseAriaSliderThumb<ThumbElement extends Element> = (props: UseAriaSliderThumbParameters<ThumbElement>) => UseAriaSliderThumbReturnType<ThumbElement>;

export interface UseAriaSliderReturnTypeInfo extends UseManagedChildrenReturnTypeInfo<number, AriaSliderThumbInfo, never> {}
export interface UseAriaSliderReturnTypeWithHooks<ThumbElement extends Element> extends UseAriaSliderReturnTypeInfo {
    useAriaSliderThumb: UseAriaSliderThumb<ThumbElement>;
}


export function useAriaSlider<ThumbElement extends Element>({ slider: { max: maxParent, min: minParent }, managedChildren }: UseAriaSliderParameters): UseAriaSliderReturnTypeWithHooks<ThumbElement> {
    const { useManagedChild, ...childrenInfo } = useManagedChildren<number, AriaSliderThumbInfo, never>({ managedChildren });

    const useAriaSliderThumb = useCallback(function useAriaSliderThumb({ managedChild, sliderThumb }: UseAriaSliderThumbParameters<ThumbElement>): UseAriaSliderThumbReturnType<ThumbElement> {
        const [minParentCopy, setMinParentCopy] = useState(minParent);
        const [maxParentCopy, setMaxParentCopy] = useState(maxParent);
        const __: void = useManagedChild({ managedChild: { ...managedChild, subInfo: { setMax: setMaxParentCopy, setMin: setMinParentCopy } } });

        const { tag, value, max: maxOverride, min: minOverride, onValueChange, valueText, label } = sliderThumb;

        const min = (minOverride ?? minParentCopy);
        const max = (maxOverride ?? maxParentCopy);

        return {
            useAriaSliderThumbProps,
            sliderThumb: {
                min,
                max
            },
        }

        function useAriaSliderThumbProps<P extends UseAriaSliderThumbProps<ThumbElement>>(props: P) {
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

    return { useAriaSliderThumb, ...childrenInfo };
}

