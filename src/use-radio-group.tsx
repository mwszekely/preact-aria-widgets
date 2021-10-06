import { h } from "preact";
import { MergedProps, useActiveElement, useChildFlag, useHasFocus, useListNavigation, UseListNavigationChildInfo, UseListNavigationChildParameters, useMergedProps, useRefElement, useStableCallback, useState } from "preact-prop-helpers";
import { useCallback, useEffect, useLayoutEffect, useRef } from "preact/hooks";
import { enhanceEvent, EventDetail, TagSensitiveProps } from "./props";
import { useCheckboxLike, UseCheckboxLikeParameters } from "./use-label";

export type RadioChangeEvent<EventType extends Event> = EventType & { [EventDetail]: { selectedValue: string } };

export interface UseAriaRadioGroupParameters<V extends string | number> {
    name: string;

    selectedValue: V;
    onInput(event: RadioChangeEvent<h.JSX.TargetedEvent<Element>>): void;
    onInput(event: RadioChangeEvent<h.JSX.TargetedEvent<Element>>): void;
}

export interface UseAriaRadioInfo extends UseListNavigationChildInfo {
    setChecked(checked: boolean): void;
}




export type UseAriaRadioParameters<V extends string | number, I extends Element, L extends Element, Info extends UseAriaRadioInfo> = Omit<UseListNavigationChildParameters<Info>, "setChecked"> &
    Omit<UseCheckboxLikeParameters<I, L>, "onInput" | "role" | "checked"> & {
        labelPosition: "wrapping" | "separate";
        value: V;
        disabled: boolean;
    }

export function useAriaRadioGroup<V extends string | number, G extends Element, I extends Element, L extends Element, Info extends UseAriaRadioInfo>({ name, selectedValue, onInput }: UseAriaRadioGroupParameters<V>) {
    const { element: radioGroupParentElement, useRefElementProps } = useRefElement<G>();

    // It's cleaner to keep this as a separate state
    // that's only updated with useEffect (since it's effectively
    // a map based on child index <--> value)
    const [selectedIndex, setSelectedIndex] = useState(0);
    const byName = useRef(new Map<V, any>());
    const stableOnInput = useStableCallback(onInput);
    
    const [anyRadiosFocused, setAnyRadiosFocused, getAnyRadiosFocused] = useState(false);

    const { managedChildren, useListNavigationChild, setTabbableIndex, tabbableIndex, focusCurrent, currentTypeahead, invalidTypeahead } = useListNavigation<I, Info>({ shouldFocusOnChange: getAnyRadiosFocused });

    // Track whether the currently focused element is a child of the radio group parent element.
    // When it's not, we reset the tabbable index back to the currently selected element.
    useActiveElement({ setActiveElement: activeElement => setAnyRadiosFocused(!!(radioGroupParentElement?.contains(activeElement))) });
    useEffect(() => {
        if (!anyRadiosFocused)
            setTabbableIndex(selectedIndex);
    }, [anyRadiosFocused, selectedIndex, setTabbableIndex]);


    const useRadioGroupProps = useCallback(<P extends h.JSX.HTMLAttributes<G>>({ ...props }: P) => {
        props.role = "radiogroup";
        return useRefElementProps(props);
    }, [useRefElementProps]);

    useChildFlag(selectedIndex, managedChildren.length, (i, checked) => managedChildren[i]?.setChecked(checked));

    useEffect(() => {
        let selectedIndex = byName.current.get(selectedValue);
        console.assert(selectedValue != "" && selectedIndex != null);
        setSelectedIndex(selectedIndex ?? 0);
    }, [selectedValue]);



    const useRadio: UseRadio<V, I, L, Info> = useCallback(function useAriaRadio({ value, index, text, disabled, labelPosition, ...rest }: UseAriaRadioParameters<V, I, L, Info>) {

        const [checked, setChecked] = useState(false);

        const onInput = useCallback((e: h.JSX.TargetedEvent<I> | h.JSX.TargetedEvent<L>) => {
            stableOnInput(enhanceEvent(e as any, { selectedValue: value }));
        }, [stableOnInput, value, index]);

        const { getInputElement, getLabelElement, useCheckboxLikeInputElement, useCheckboxLikeLabelElement } = useCheckboxLike<I, L>({ checked, disabled, labelPosition, onInput, role: "radio" });


        useLayoutEffect(() => {
            console.assert(!byName.current.has(value));
            byName.current.set(value, index);
            return () => { byName.current.delete(value); }
        }, [value, index]);

        const { tabbable, useListNavigationChildProps, useListNavigationSiblingProps } = useListNavigationChild({ index, setChecked, text, ...rest } as any as Info);

        const useRadioInput: UseRadioInput<I> = ({ tag }: TagSensitiveProps<I>) => {
            const useRadioInputProps = <P extends h.JSX.HTMLAttributes<I>>(props: P) => {
                if (tag == "input") {
                    props.name = name;
                    props.checked = checked;
                }
                else {
                    props["aria-checked"] = checked.toString();
                }

                const { useCheckboxLikeInputElementProps } = useCheckboxLikeInputElement({ tag });
                return (useMergedProps<I>()(useListNavigationChildProps((useCheckboxLikeInputElementProps({}))), props));
            };

            return {
                useRadioInputProps
            }
        };

        const useRadioLabel: UseRadioLabel<L> = useCallback(({ tag }: TagSensitiveProps<L>) => {
            const useRadioLabelProps = <P extends h.JSX.HTMLAttributes<L>>(props: P) => {
                const { useCheckboxLikeLabelElementProps } = useCheckboxLikeLabelElement({ tag });
                return useCheckboxLikeLabelElementProps(useMergedProps<L>()({} as any, props))
            };

            return {
                useRadioLabelProps
            }
        }, [useCheckboxLikeLabelElement]);

        return {
            useRadioInput,
            useRadioLabel,
        }

    }, [byName, useListNavigationChild]);

    return {
        useRadio,
        useRadioGroupProps, 
        managedChildren,
        selectedIndex,
        tabbableIndex, 
        focusRadio: focusCurrent, 
        currentTypeahead,
        invalidTypeahead
    }
}

export interface UseRadioReturnType<I extends Element, L extends Element> {
    useRadioInput: UseRadioInput<I>;
    useRadioLabel: UseRadioLabel<L>;
}

type UseRadioInput<I extends Element> = ({ tag }: TagSensitiveProps<I>) => { useRadioInputProps: <P extends h.JSX.HTMLAttributes<I>>(props: P) => MergedProps<I, h.JSX.HTMLAttributes<I>, h.JSX.HTMLAttributes<I>>; }
type UseRadioLabel<L extends Element> = ({ tag }: TagSensitiveProps<L>) => { useRadioLabelProps: <P extends h.JSX.HTMLAttributes<L>>(props: P) => MergedProps<L, h.JSX.HTMLAttributes<L>, h.JSX.HTMLAttributes<L>>; }

export type UseRadio<V extends string | number, I extends Element, L extends Element, Info extends UseAriaRadioInfo> = ({ value, index, text, disabled, labelPosition }: UseAriaRadioParameters<V, I, L, Info>) => UseRadioReturnType<I, L>
