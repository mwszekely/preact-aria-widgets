import { h } from "preact";
import { MergedProps, useActiveElement, useChildFlag, useListNavigation, UseListNavigationChildInfo, UseListNavigationChildParameters, useMergedProps, useRefElement, useStableCallback, useState } from "preact-prop-helpers";
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
    getChecked(): boolean | null;
}




export type UseAriaRadioParameters<V extends string | number, I extends Element, L extends Element, Info extends UseAriaRadioInfo> = Omit<UseListNavigationChildParameters<Info>, "setChecked" | "getChecked"> &
    Omit<UseCheckboxLikeParameters<I, L>, "onInput" | "role" | "checked"> & {
        labelPosition: "wrapping" | "separate";
        value: V;
        disabled: boolean;
    }

export function useAriaRadioGroup<V extends string | number, G extends Element, I extends Element, L extends Element, Info extends UseAriaRadioInfo>({ name, selectedValue, onInput }: UseAriaRadioGroupParameters<V>) {
    const { getElement: getRadioGroupParentElement, useRefElementProps } = useRefElement<G>({});

    //const getSelectedIndex = useCallback((selectedValue: V) => { return byName.current.get(selectedValue) ?? 0 }, [])

    const [selectedIndex, setSelectedIndex] = useState<number | null>(0);
    const byName = useRef(new Map<V, any>());
    const stableOnInput = useStableCallback(onInput);

    const [anyRadiosFocused, setAnyRadiosFocused, getAnyRadiosFocused] = useState(false);

    const { managedChildren, useListNavigationChild, useListNavigationProps, navigateToIndex, tabbableIndex, focusCurrent, currentTypeahead, invalidTypeahead } = useListNavigation<I, Info>({ shouldFocusOnChange: getAnyRadiosFocused });

    // Track whether the currently focused element is a child of the radio group parent element.
    // When it's not, we reset the tabbable index back to the currently selected element.
    const { useActiveElementProps } = useActiveElement({ onActiveElementChange: useCallback((activeElement: Node | null) => setAnyRadiosFocused(!!(getRadioGroupParentElement()?.contains(activeElement))), []) });
    useEffect(() => {
        if (!anyRadiosFocused)
            navigateToIndex(selectedIndex ?? 0);
    }, [anyRadiosFocused, selectedIndex, navigateToIndex]);


    const useRadioGroupProps = useCallback(<P extends h.JSX.HTMLAttributes<G>>({ ...props }: P) => {
        props.role = "radiogroup";
        return useListNavigationProps(useRefElementProps(useActiveElementProps(props)));
    }, [useRefElementProps, useActiveElementProps]);

    const correctedIndex = (selectedIndex == null || selectedIndex < 0 || selectedIndex >= managedChildren.length) ? null : selectedIndex;
    useChildFlag({
        activatedIndex: correctedIndex,
        managedChildren,
        setChildFlag: (i, checked) => managedChildren[i]?.setChecked(checked),
        getChildFlag: ((i) => managedChildren[i]?.getChecked() ?? false)
    });

    useEffect(() => {
        const selectedIndex = byName.current.get(selectedValue);
        setSelectedIndex(selectedIndex ?? null);
    }, [byName, selectedValue]);



    const useRadio: UseRadio<V, I, L, Info> = useCallback(function useAriaRadio({ value, index, text, disabled, labelPosition, ...rest }: UseAriaRadioParameters<V, I, L, Info>) {

        const [checked, setChecked, getChecked] = useState<boolean | null>(null);

        const onInput = useCallback((e: h.JSX.TargetedEvent<I> | h.JSX.TargetedEvent<L>) => {
            stableOnInput(enhanceEvent(e as any, { selectedValue: value }));
        }, [stableOnInput, value, index]);

        const { useCheckboxLikeInputElement, useCheckboxLikeLabelElement } = useCheckboxLike<I, L>({ checked: (checked ?? false), disabled, labelPosition, onInput, role: "radio" });


        useLayoutEffect(() => {
            byName.current.set(value, index);
            return () => { byName.current.delete(value); }
        }, [byName, value, index]);

        const { tabbable, useListNavigationChildProps } = useListNavigationChild({ index, setChecked, getChecked, text, ...rest } as any as Info);

        const useRadioInput: UseRadioInput<I> = ({ tag }: TagSensitiveProps<I>) => {
            const useRadioInputProps = <P extends h.JSX.HTMLAttributes<I>>(props: P) => {
                if (tag == "input") {
                    props.name = name;
                    props.checked = (checked ?? false);
                    props.type = "radio";
                }
                else {
                    props["aria-checked"] = (checked ?? false).toString();
                }

                const propsIfInputHandlesFocus = useListNavigationChildProps(props);

                const { useCheckboxLikeInputElementProps } = useCheckboxLikeInputElement({ tag });
                return (useMergedProps<I>()((useCheckboxLikeInputElementProps({})), labelPosition == "separate"? propsIfInputHandlesFocus : props));
            };

            return {
                useRadioInputProps
            }
        };

        const useRadioLabel: UseRadioLabel<L> = useCallback(({ tag }: TagSensitiveProps<L>) => {
            const useRadioLabelProps = <P extends h.JSX.HTMLAttributes<L>>(props: P) => {
                const { useCheckboxLikeLabelElementProps } = useCheckboxLikeLabelElement({ tag });
                const propsIfLabelHandlesFocus = useListNavigationChildProps(props as any);
                return useCheckboxLikeLabelElementProps(useMergedProps<L>()({} as any, labelPosition == "wrapping"? propsIfLabelHandlesFocus as any : props as any))
            };

            return {
                useRadioLabelProps
            }
        }, [useCheckboxLikeLabelElement]);

        return {
            useRadioInput,
            useRadioLabel,
            checked: checked ?? false,
            tabbable: tabbable ?? false
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
        invalidTypeahead,
        anyRadiosFocused
    }
}

export interface UseRadioReturnType<I extends Element, L extends Element> {
    useRadioInput: UseRadioInput<I>;
    useRadioLabel: UseRadioLabel<L>;
    checked: boolean;
    tabbable: boolean;
}

type UseRadioInput<I extends Element> = ({ tag }: TagSensitiveProps<I>) => { useRadioInputProps: <P extends h.JSX.HTMLAttributes<I>>(props: P) => MergedProps<I, h.JSX.HTMLAttributes<I>, h.JSX.HTMLAttributes<I>>; }
type UseRadioLabel<L extends Element> = ({ tag }: TagSensitiveProps<L>) => { useRadioLabelProps: <P extends h.JSX.HTMLAttributes<L>>(props: P) => MergedProps<L, h.JSX.HTMLAttributes<L>, h.JSX.HTMLAttributes<L>>; }

export type UseRadio<V extends string | number, I extends Element, L extends Element, Info extends UseAriaRadioInfo> = ({ value, index, text, disabled, labelPosition }: UseAriaRadioParameters<V, I, L, Info>) => UseRadioReturnType<I, L>
