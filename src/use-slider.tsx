import { h } from "preact";
import { ManagedChildInfo, MergedProps, useChildManager, useMergedProps, UseRefElementPropsReturnType } from "preact-prop-helpers";
import { StateUpdater, useCallback, useState } from "preact/hooks";
import { EventDetail, TagSensitiveProps } from "./props";




export type RangeChangeEvent<E extends EventTarget> = { [EventDetail]: { value: number } } & Pick<h.JSX.TargetedEvent<E>, "target" | "currentTarget">;

export interface AriaSliderThumbInfo extends ManagedChildInfo<number> {
    setMin: StateUpdater<number>;
    setMax: StateUpdater<number>;
}

export interface UseAriaSliderThumbArguments<E extends Element> extends Omit<AriaSliderThumbInfo, "setMin" | "setMax">, TagSensitiveProps<E> {
    value: number;
    valueText?: string;
    onValueChange?: (e: RangeChangeEvent<E>) => void;
    min?: number;
    max?: number;
}

export interface UseAriaSliderThumbProps<E extends HTMLElement> extends h.JSX.HTMLAttributes<E> {

}

export interface UseAriaSliderArguments {
    min: number;
    max: number;
}

export interface UseAriaSliderThumbReturnType<E extends HTMLElement> {
    getElement: () => E | null;
    useAriaSliderThumbProps: <P extends UseAriaSliderThumbProps<E>>(props: P) => UseRefElementPropsReturnType<E, MergedProps<E, h.JSX.HTMLAttributes<E>, P>>;
    min: number;
    max: number;
}

export type UseAriaSliderThumb = <E extends HTMLElement>(props: UseAriaSliderThumbArguments<E>) => UseAriaSliderThumbReturnType<E>;

export function useAriaSlider({ max: maxParent, min: minParent }: UseAriaSliderArguments) {
    const { useManagedChild } = useChildManager<AriaSliderThumbInfo>();

    const useAriaSliderThumb = useCallback(function useAriaSliderThumb<E extends HTMLElement>({ index, onValueChange, value, valueText, tag, min: minOverride, max: maxOverride, ..._ }: UseAriaSliderThumbArguments<E>): UseAriaSliderThumbReturnType<E> {
        const [minParentCopy, setMinParentCopy] = useState(minParent);
        const [maxParentCopy, setMaxParentCopy] = useState(maxParent);
        const { getElement, useManagedChildProps } = useManagedChild<E>({ index, setMin: setMinParentCopy, setMax: setMaxParentCopy });

        const min = (minOverride ?? minParentCopy);
        const max = (maxOverride ?? maxParentCopy);

        return {
            getElement,
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
            return useManagedChildProps(useMergedProps<E>()(newProps, props));
        }
    }, []);

    return { useAriaSliderThumb };
}

