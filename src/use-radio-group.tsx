import { h } from "preact";
import { UseCompleteListNavigationParameters, UseCompleteListNavigationReturnType, useListNavigationSingleSelection, UseListNavigationSingleSelectionChildParameters, UseListNavigationSingleSelectionParameters, UseListNavigationSingleSelectionSortableChildInfo, useMergedProps, useRefElement, useStableCallback, useStableGetter, useState } from "preact-prop-helpers";
import { UseChildrenHaveFocusParameters, UseHasFocusParameters } from "preact-prop-helpers/use-has-focus";
import { useCallback, useEffect, useLayoutEffect, useRef } from "preact/hooks";
import { debugLog, ElementToTag, EnhancedEvent, enhanceEvent, TagSensitiveProps } from "./props";
import { useCheckboxLike, useLabel } from "./use-label";

//type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type RadioChangeEvent<E extends EventTarget, V extends number | string> = EnhancedEvent<E, Event, { selectedValue: V | undefined }>;

export interface UseRadioGroupParameters<V extends string | number, GroupElement extends Element, GroupLabelElement extends Element, InputElement extends Element> extends UseCompleteListNavigationParameters<GroupElement, InputElement, RadioSubInfo<InputElement, V>> {
    radioGroupParameters: {
        name: string;

        selectedValue: V | null;
        onSelectedValueChange(event: RadioChangeEvent<InputElement, V>): void;
        tagGroup: ElementToTag<GroupElement>;
        tagGroupLabel: ElementToTag<GroupLabelElement>;
    }
    childrenHaveFocus: UseChildrenHaveFocusParameters["childrenHaveFocus"];
}



export interface UseRadioParameters<TabbableChildElement extends Element, V extends string | number, I extends Element, IL extends Element> extends UseListNavigationSingleSelectionChildParameters<TabbableChildElement> {
    radioParameters: {
        labelPosition: "wrapping" | "separate";
        value: V;
        disabled: boolean;
        tagInput: ElementToTag<I>;
        tagLabel: ElementToTag<IL>;
    }
    //hasFocusInput: UseHasFocusParameters<I>;
    //hasFocusLabel: UseHasFocusParameters<IL>;
}

export interface UseRadioGroupReturnType<GroupElement extends Element, TabbableChildElement extends Element, V extends string | number> extends UseCompleteListNavigationReturnType<GroupElement, TabbableChildElement, RadioSubInfo<TabbableChildElement, V>> {
    radioGroupReturn: {
        selectedIndex: number | null;
        selectedValue: V | null;
    }
}
/*
export interface UseRadioGroupReturnTypeWithHooks<V extends string | number, G extends Element, GL extends Element, I extends Element, IL extends HTMLElement, C, K extends string> extends UseRadioGroupReturnTypeInfo<V, I, C, K> {
    useRadioGroupLabelProps: (props: h.JSX.HTMLAttributes<GL>) => h.JSX.HTMLAttributes<GL>;
    useRadioGroupProps: (props: h.JSX.HTMLAttributes<G>) => h.JSX.HTMLAttributes<G>;
    useRadio: UseRadio<V, I, IL, C, K>;
}*/

interface RadioSubInfo<TabbableChildElement extends Element, V extends string | number> extends UseListNavigationSingleSelectionSortableChildInfo<TabbableChildElement> {
    getValue(): V;
}

export function useRadioGroup<V extends string | number, G extends Element, GL extends Element, I extends Element, IL extends HTMLElement, UC, K extends string>({
    linearNavigationParameters,
    rearrangeableChildrenParameters,
    rovingTabIndexParameters,
    sortableChildrenParameters,
    typeaheadNavigationParameters,
    radioGroupParameters: { name, onSelectedValueChange, selectedValue, tagGroup, tagGroupLabel },
    singleSelectionParameters: { selectionMode }
}: UseRadioGroupParameters<V, G, GL, I>): UseRadioGroupReturnType<G, I, V> {

    debugLog("useRadioGroup", selectedValue);
    const { getElement: _getRadioGroupParentElement, useProps: useRefElementProps } = useRefElement<G>({});

    const [selectedIndex, setSelectedIndex] = useState<number | null>(0);
    const byName = useRef(new Map<V, any>());

    const { useLabelInput: useGroupLabelInput, useLabelLabel: useGroupLabelLabel } = useLabel<G, GL>({ label: { prefixLabel: "aria-radio-group-label-", tagInput: tagGroup as never, tagLabel: tagGroupLabel as never, prefixInput: "aria-radio-group-" } })
    const { useLabelInputProps: useGroupLabelInputProps } = useGroupLabelInput();
    const { useLabelLabelProps: useGroupLabelLabelProps } = useGroupLabelLabel();

    const onSelectedIndexChange = useStableCallback((e: Event, newIndex: number) => {
        onSelectedValueChange(enhanceEvent<I, Event, { selectedValue: V | undefined }>(e, { selectedValue: listNavRet.managedChildren.children.getAt(newIndex)?.subInfo.subInfo.subInfo.getValue() }));
    });

    const {
        useListNavigationSingleSelectionChild,
        props: listNavigationSingleSelectionProps,
        ...listNavRet
    } = useListNavigationSingleSelection<G, I, RadioSubInfo<V, UC>, K>({
        linearNavigation,
        listNavigation,
        managedChildren,
        rovingTabIndex,
        singleSelection: { selectedIndex, setSelectedIndex, selectionMode },
        typeaheadNavigation,
        childrenHaveFocus
    });
    const useRadioGroupProps = useCallback(({ ...props }: h.JSX.HTMLAttributes<G>): h.JSX.HTMLAttributes<G> => {
        props.role = "radiogroup";
        return (useMergedProps<G>(useGroupLabelInputProps(listNavigationSingleSelectionProps), useRefElementProps(props)));
    }, [useRefElementProps])

    const useRadioGroupLabelProps = useCallback((props: h.JSX.HTMLAttributes<GL>): h.JSX.HTMLAttributes<GL> => { return useGroupLabelLabelProps(props); }, [useGroupLabelLabelProps]);

    useEffect(() => {
        if (selectedValue == null) {
            setSelectedIndex(null)
        }
        else {
            const selectedIndex = byName.current.get(selectedValue);
            setSelectedIndex(selectedIndex ?? null);
        }
    }, [byName, selectedValue]);



    const useRadio = useCallback<UseRadio<V, I, IL, UC, K>>(function useRadio({
        listNavigation,
        managedChild,
        rovingTabIndex,
        radio: { disabled, labelPosition, tagInput, tagLabel, value },
        hasFocus,
        singleSelection,
        subInfo
    }) {
        const index = managedChild.index;
        debugLog("useRadio", index);
        const onInput = useStableCallback((e: h.JSX.TargetedEvent<I>) => {
            e.preventDefault();
            onSelectedIndexChange(e, index);
        });

        const getValue = useStableGetter(value);
        const { props: listNavigationSingleSelectionChildProps, ...listNavRet } = useListNavigationSingleSelectionChild({
            listNavigation,
            rovingTabIndex,
            managedChild: {
                index: managedChild.index,
                flags: managedChild.flags
            },
            hasFocus,
            subInfo: { getValue, subInfo },
            singleSelection: { ariaPropName: tagInput == "input" && labelPosition == "separate"? null : "aria-selected", ...singleSelection }
        });

        const { singleSelection: { selected: checked } } = listNavRet;

        const { useCheckboxLikeInputElement, useCheckboxLikeLabelElement, ...checkboxRet } = useCheckboxLike<I, IL>({
            checkboxLike: {
                checked: (checked ?? false),
                labelPosition,
                disabled,
                onCheckedChange: onInput,
                role: "radio"
            },
            label: {
                tagInput: tagInput as never,
                tagLabel: tagLabel as never
            },
            hasFocusInput: hasFocus,
            hasFocusLabel: hasFocus as any
        });


        useLayoutEffect(() => {
            byName.current.set(value, index);
            return () => { byName.current.delete(value); }
        }, [byName, value, index]);

        const useRadioInput: UseRadioInput<I> = () => {
            const tag = tagInput;
            const useRadioInputProps = (props: h.JSX.HTMLAttributes<I>): h.JSX.HTMLAttributes<I> => {
                if (tag == "input") {
                    props.name = name;
                    props.checked = (checked ?? false);
                    props.type = "radio";
                }
                else {
                    props["aria-checked"] = (checked ?? false).toString();
                }

                const propsIfInputHandlesFocus = useMergedProps(listNavigationSingleSelectionChildProps, props);

                const { useCheckboxLikeInputElementProps } = useCheckboxLikeInputElement();
                return (useMergedProps<I>((useCheckboxLikeInputElementProps({})), labelPosition == "separate" ? propsIfInputHandlesFocus : props));
            };

            return {
                useRadioInputProps
            }
        };

        const useRadioLabel: UseRadioLabel<IL> = useCallback(() => {
            //const tag = tagLabel;
            const useRadioLabelProps = (props: h.JSX.HTMLAttributes<IL>): h.JSX.HTMLAttributes<IL> => {
                const { useCheckboxLikeLabelElementProps } = useCheckboxLikeLabelElement();
                const propsIfLabelHandlesFocus = useMergedProps(listNavigationSingleSelectionChildProps, props as any);
                return useCheckboxLikeLabelElementProps(useMergedProps<IL>({} as any, labelPosition == "wrapping" ? propsIfLabelHandlesFocus as any : props as any))
            };

            return {
                useRadioLabelProps
            }
        }, [useCheckboxLikeLabelElement]);

        return {
            useRadioInput,
            useRadioLabel,
            ...listNavRet,
            ...checkboxRet
        }

    }, [byName, useListNavigationSingleSelectionChild]);

    return {
        useRadio,
        useRadioGroupProps,
        useRadioGroupLabelProps,
        radioGroup: {
            selectedIndex,
            selectedValue
        },
        ...listNavRet
    }
}

export interface UseRadioReturnTypeInfo<I extends Element, IL extends Element> extends UseListNavigationSingleSelectionChildReturnTypeInfo<I>, UseCheckboxLikeReturnTypeInfo<I, IL> { }

export interface UseRadioReturnTypeWithHooks<I extends Element, L extends Element> extends UseRadioReturnTypeInfo<I, L> {
    useRadioInput: UseRadioInput<I>;
    useRadioLabel: UseRadioLabel<L>;
}

type UseRadioInput<I extends Element> = ({ tag }: TagSensitiveProps<I>) => { useRadioInputProps: (props: h.JSX.HTMLAttributes<I>) => h.JSX.HTMLAttributes<I>; }
type UseRadioLabel<L extends Element> = ({ tag }: TagSensitiveProps<L>) => { useRadioLabelProps: (props: h.JSX.HTMLAttributes<L>) => h.JSX.HTMLAttributes<L>; }

export type UseRadio<V extends string | number, I extends Element, L extends Element, C, K extends string> = (a: UseRadioParameters<V, I, L, C, K>) => UseRadioReturnTypeWithHooks<I, L>
