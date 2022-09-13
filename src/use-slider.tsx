import { h } from "preact";
import { useManagedChildren, useMergedProps } from "preact-prop-helpers";
import { ManagedChildrenOmits, UseManagedChildParameters, UseManagedChildrenParameters } from "preact-prop-helpers/use-child-manager";
import { StateUpdater, useCallback, useState } from "preact/hooks";
import { EventDetail, TagSensitiveProps } from "./props";




export type RangeChangeEvent<E extends EventTarget> = { [EventDetail]: { value: number } } & Pick<h.JSX.TargetedEvent<E>, "target" | "currentTarget">;

export interface AriaSliderThumbInfo {
    setMin: StateUpdater<number>;
    setMax: StateUpdater<number>;
}

export interface UseAriaSliderThumbArguments<E extends Element> extends UseManagedChildParameters<number, AriaSliderThumbInfo, never, "subInfo"> {
    sliderThumb: TagSensitiveProps<E> & {
        value: number;
        valueText?: string;
        onValueChange?: (e: RangeChangeEvent<E>) => void;
        min?: number;
        max?: number;
    }
}

export interface UseAriaSliderThumbProps<E extends HTMLElement> extends h.JSX.HTMLAttributes<E> {

}

export interface UseAriaSliderParameters<McOmits extends ManagedChildrenOmits> extends UseManagedChildrenParameters<number, McOmits> {
    min: number;
    max: number;
}

export interface UseAriaSliderThumbReturnType<E extends HTMLElement> {
    useAriaSliderThumbProps: (props: h.JSX.HTMLAttributes<E>) => h.JSX.HTMLAttributes<E>;
    min: number;
    max: number;
}

export type UseAriaSliderThumb = <E extends HTMLElement>(props: UseAriaSliderThumbArguments<E>) => UseAriaSliderThumbReturnType<E>;

export function useAriaSlider({ max: maxParent, min: minParent, managedChildren }: UseAriaSliderParameters<never>) {
    const { useManagedChild } = useManagedChildren<number, AriaSliderThumbInfo, never>({ managedChildren });

    const useAriaSliderThumb = useCallback(function useAriaSliderThumb<E extends HTMLElement>({ managedChild, sliderThumb }: UseAriaSliderThumbArguments<E>): UseAriaSliderThumbReturnType<E> {
        const [minParentCopy, setMinParentCopy] = useState(minParent);
        const [maxParentCopy, setMaxParentCopy] = useState(maxParent);
        const __: void = useManagedChild({ managedChild: {...managedChild, subInfo: { setMax: setMaxParentCopy, setMin: setMinParentCopy }} });

        const { tag, value, max: maxOverride, min: minOverride, onValueChange, valueText } = sliderThumb;

        const min = (minOverride ?? minParentCopy);
        const max = (maxOverride ?? maxParentCopy);

        return {
            useAriaSliderThumbProps,
            min,
            max
        }

        function useAriaSliderThumbProps<P extends UseAriaSliderThumbProps<E>>(props: P) {
            let newProps: h.JSX.HTMLAttributes<E> = (
                tag == "input" ?
                    { min, max, value, type: "range" } :
                    { "aria-valuemax": `${max}`, "aria-valuemin": `${min}` }
            );
            newProps = { ...newProps, "aria-valuetext": valueText, style: { "--range-value": `${value}`, "--range-value-text": `${valueText}` } };
            if (tag == "input") {
                newProps.onInput = e => {
                    onValueChange?.({ currentTarget: e.currentTarget, target: e.target, [EventDetail]: { value: (e.currentTarget as HTMLElement as HTMLInputElement).valueAsNumber } })
                }
            }
            else {
                throw new Error("Unimplemented");
            }
            return useMergedProps<E>(newProps, props);
        }
    }, []);

    return { useAriaSliderThumb };
}

