import { h } from "preact";
import { MergedProps, useActiveElement, useChildFlag, useHasFocus, useListNavigation, UseListNavigationChildInfo, UseListNavigationChildParameters, useMergedProps, useRefElement, useStableCallback, useState } from "preact-prop-helpers";
import { useCallback, useEffect, useLayoutEffect, useRef } from "preact/hooks";
import { enhanceEvent, EventDetail, TagSensitiveProps } from "./props";
import { useCheckboxLike, UseCheckboxLikeParameters } from "./use-label";

export type RadioChangeEvent<EventType extends Event> = EventType & { [EventDetail]: { selectedValue: string } };

export interface UseAriaRadioGroupParameters<V extends string> {
    name: string;

    selectedValue: V;
    onInput(event: RadioChangeEvent<h.JSX.TargetedEvent<Element>>): void;
    onInput(event: RadioChangeEvent<h.JSX.TargetedEvent<Element>>): void;
}

export interface UseAriaRadioInfo extends UseListNavigationChildInfo {
    setChecked(checked: boolean): void;
}




export type UseAriaRadioParameters<V extends string, I extends Element, L extends Element, Info extends UseAriaRadioInfo> = Omit<UseListNavigationChildParameters<Info>, "setChecked"> &
    Omit<UseCheckboxLikeParameters<I, L>, "onInput" | "role"> & {
        labelPosition: "wrapping" | "separate";
        value: V;
        disabled: boolean;
    }

export function useAriaRadioGroup<V extends string, G extends Element, I extends Element, L extends Element, Info extends UseAriaRadioInfo>({ name, selectedValue, onInput }: UseAriaRadioGroupParameters<V>) {
    const { element, useRefElementProps } = useRefElement<G>()
    const [selectedIndex, setSelectedIndex, getSelectedIndex] = useState<number | null>(null);
    const byName = useRef(new Map<string, any>());
    const stableOnInput = useStableCallback(onInput);

    const { useHasFocusProps, lastFocusedInner } = useHasFocus<G>();
    const { managedChildren, useListNavigationChild, setTabbableIndex, tabbableIndex, focusCurrent, currentTypeahead, invalidTypeahead } = useListNavigation<I, Info>({ focusOnChange: lastFocusedInner });

    const useRadioGroupProps = useCallback(<P extends h.JSX.HTMLAttributes<G>>({ ...props }: P) => {
        props.role = "radiogroup";
        return useRefElementProps(useHasFocusProps(props));
    }, [useHasFocusProps, useRefElementProps]);

    useChildFlag(selectedIndex, managedChildren.length, (i, checked) => managedChildren[i]?.setChecked(checked));

    const { lastActiveElement } = useActiveElement();
    let anyRadiosFocused = (!!element?.contains(lastActiveElement));
    useEffect(() => {
        if (!anyRadiosFocused && selectedIndex != null)
            setTabbableIndex(selectedIndex);
    }, [anyRadiosFocused, selectedIndex, setTabbableIndex]);


    useEffect(() => {
        let oldIndex = getSelectedIndex();
        let newIndex = byName.current.get(selectedValue);

        setSelectedIndex(newIndex);
    }, [selectedValue]);



    const useRadio: UseRadio<V, I, L, Info> = useCallback(function useAriaRadio({ value, index, text, disabled, labelPosition, ...rest }: UseAriaRadioParameters<V, I, L, Info>) {

        const onInput = useCallback((e: h.JSX.TargetedEvent<I> | h.JSX.TargetedEvent<L>) => {
            stableOnInput(enhanceEvent(e as any, { selectedValue: value }));
        }, [stableOnInput, value, index]);

        const { getInputElement, getLabelElement, useCheckboxLikeInputElement, useCheckboxLikeLabelElement } = useCheckboxLike<I, L>({ disabled, labelPosition, onInput, role: "radio" });

        //const {} = useCheckboxLikeInputElement({  })

        const byName2 = byName.current;
        const [checked, setChecked] = useState(false);


        useLayoutEffect(() => {
            console.assert(!byName2.has(value));
            byName2.set(value, index);
            return () => { byName2.delete(value); }
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
        getIndex: useCallback((value: string) => { return byName.current.get(value); }, [byName]),
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

export type UseRadio<V extends string, I extends Element, L extends Element, Info extends UseAriaRadioInfo> = ({ value, index, text, disabled, labelPosition }: UseAriaRadioParameters<V, I, L, Info>) => UseRadioReturnType<I, L>
