import { h } from "preact";
import { UseListNavigationChildParameters, UseListNavigationParameters, useListNavigationSingleSelection, UseListNavigationSingleSelectionChildReturnTypeInfo, UseListNavigationSingleSelectionReturnTypeInfo, useMergedProps, useRefElement, useStableCallback, useState } from "preact-prop-helpers";
import { UseChildrenHaveFocusParameters, UseHasFocusParameters } from "preact-prop-helpers/use-has-focus";
import { useCallback, useEffect, useLayoutEffect, useRef } from "preact/hooks";
import { debugLog, ElementToTag, EnhancedEvent, enhanceEvent, EventDetail, TagSensitiveProps } from "./props";
import { useCheckboxLike, useLabel } from "./use-label";

//type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type RadioChangeEvent<E extends EventTarget, V extends number | string> = EnhancedEvent<E, Event, { selectedValue: V }>;

export interface UseAriaRadioGroupParameters<V extends string | number, GroupElement extends Element, GroupLabelElement extends Element, InputElement extends Element, LabelElement extends Element> extends UseListNavigationParameters<never, never, never, never, never> {
    radioGroup: {
        name: string;

        selectedValue: V | null;
        onInput(event: RadioChangeEvent<InputElement, V>): void;
        //onInput(event: RadioChangeEvent<h.JSX.TargetedEvent<LabelElement>, V>): void;
        tagGroup: ElementToTag<GroupElement>;
        tagGroupLabel: ElementToTag<GroupLabelElement>;
    }
    childrenHaveFocus: UseChildrenHaveFocusParameters["childrenHaveFocus"];
}

/*export interface UseAriaRadioInfoBase extends ListNavigationChildInfoBase<"tabbable" | "selected"> {
    setChecked(checked: boolean): void;
    getChecked(): boolean | null;
}*/




export interface UseAriaRadioParameters<V extends string | number, I extends Element, IL extends Element> extends Omit<UseListNavigationChildParameters<I, {}, never, never, never, never, never>, "subInfo"> {
    radio: {
        labelPosition: "wrapping" | "separate";
        value: V;
        disabled: boolean;
        tagInput: ElementToTag<I>;
        tagLabel: ElementToTag<IL>;
    }
    hasFocus: UseHasFocusParameters<I>;
    /*Omit<UseCheckboxLikeParameters<I, IL>, "onInput" | "role" | "checked"> & {
        info: Omit<Info, "setChecked" | "getChecked" | "blurSelf" | "getElement" | "focusSelf">;
        
    }*/
}

export interface UseAriaRadioGroupReturnTypeInfo<I extends Element> extends UseListNavigationSingleSelectionReturnTypeInfo<I, {}, never> {

}

export interface UseAriaRadioGroupReturnTypeWithHooks<V extends string | number, G extends Element, GL extends Element, I extends Element, IL extends HTMLElement> extends UseAriaRadioGroupReturnTypeInfo<I> {
    useRadioGroupLabelProps: (props: h.JSX.HTMLAttributes<GL>) => h.JSX.HTMLAttributes<GL>;
    useRadioGroupProps: (props: h.JSX.HTMLAttributes<G>) => h.JSX.HTMLAttributes<G>;
    useRadio: UseRadio<V, I, IL>;
}

export function useAriaRadioGroup<V extends string | number, G extends Element, GL extends Element, I extends Element, IL extends HTMLElement>({
    linearNavigation,
    listNavigation,
    managedChildren,
    radioGroup: { name, onInput, selectedValue, tagGroup, tagGroupLabel },
    rovingTabIndex,
    typeaheadNavigation,
    childrenHaveFocus
}: UseAriaRadioGroupParameters<V, G, GL, I, IL>): UseAriaRadioGroupReturnTypeWithHooks<V, G, GL, I, IL> {
    debugLog("useAriaRadioGroup", selectedValue);
    const { getElement: _getRadioGroupParentElement, useRefElementProps } = useRefElement<G>({});

    //const getSelectedIndex = useCallback((selectedValue: V) => { return byName.current.get(selectedValue) ?? 0 }, [])

    const [selectedIndex, setSelectedIndex] = useState<number | null>(0);
    const byName = useRef(new Map<V, any>());
    const stableOnInput = useStableCallback(onInput);

    //const [anyRadiosFocused, setAnyRadiosFocused, getAnyRadiosFocused] = useState(false);

    const { useLabelInput: useGroupLabelInput, useLabelLabel: useGroupLabelLabel } = useLabel<G, GL>({ label: { prefixLabel: "aria-radio-group-label-", tagInput: tagGroup as never, tagLabel: tagGroupLabel as never, prefixInput: "aria-radio-group-" } })
    const { useLabelInputProps: useGroupLabelInputProps } = useGroupLabelInput();
    const { useLabelLabelProps: useGroupLabelLabelProps } = useGroupLabelLabel();

    const {
        useListNavigationSingleSelectionChild,
        useListNavigationSingleSelectionProps,
        ...listNavRet
    } = useListNavigationSingleSelection<G, I, {}, never>({
        linearNavigation,
        listNavigation,
        managedChildren,
        rovingTabIndex,
        singleSelection: { selectedIndex },
        typeaheadNavigation,
        childrenHaveFocus
    });

    // Track whether the currently focused element is a child of the radio group parent element.
    // When it's not, we reset the tabbable index back to the currently selected element.
    //const { useActiveElementProps } = useActiveElement<G>({ onActiveElementChange: useCallback((activeElement: Node | null) => setAnyRadiosFocused(!!(getRadioGroupParentElement()?.contains(activeElement))), []) });
    /*useEffect(() => {
        if (!anyRadiosFocused)
            navigateToIndex(selectedIndex ?? 0);
    }, [anyRadiosFocused, selectedIndex, navigateToIndex]);*/


    const useRadioGroupProps = useCallback(({ ...props }: h.JSX.HTMLAttributes<G>): h.JSX.HTMLAttributes<G> => {
        props.role = "radiogroup";
        return useGroupLabelInputProps(useListNavigationSingleSelectionProps(useRefElementProps(props)));
    }, [useRefElementProps])

    const useRadioGroupLabelProps = useCallback((props: h.JSX.HTMLAttributes<GL>): h.JSX.HTMLAttributes<GL> => { return useGroupLabelLabelProps(props); }, [useGroupLabelLabelProps]);

    //const correctedIndex = (selectedIndex == null || selectedIndex < 0 || selectedIndex >= managedChildren.length) ? null : selectedIndex;
    /*const { onChildrenMountChange } = useChildrenFlag({
        initialIndex: 0,
        children,
        key: "selected"
        //setChildFlag: (i, checked) => managedChildren[i]?.setChecked(checked),
        //getChildFlag: ((i) => managedChildren[i]?.getChecked() ?? false)
    });*/

    useEffect(() => {
        if (selectedValue == null) {
            setSelectedIndex(null)
        }
        else {
            const selectedIndex = byName.current.get(selectedValue);
            setSelectedIndex(selectedIndex ?? null);
        }
    }, [byName, selectedValue]);



    const useRadio = useCallback<UseRadio<V, I, IL>>(function useAriaRadio({
        listNavigation,
        managedChild,
        rovingTabIndex,
        hasFocus,
        radio: { disabled, labelPosition, tagInput, tagLabel, value }
    }) {
        const index = managedChild.index;
        debugLog("useAriaRadio", index);
        //const [checked, setChecked, getChecked] = useState<boolean | null>(null);

        const onInput = useCallback((e: h.JSX.TargetedEvent<I>) => {
            stableOnInput(enhanceEvent(e, { selectedValue: value }));
        }, [stableOnInput, value, index]);


        const { useListNavigationSingleSelectionChildProps, ...listNavRet } = useListNavigationSingleSelectionChild({
            listNavigation,
            rovingTabIndex,
            managedChild,
            hasFocus,
            subInfo: {}
        });

        const { singleSelection: { selected: checked } } = listNavRet;

        const { useCheckboxLikeInputElement, useCheckboxLikeLabelElement } = useCheckboxLike<I, IL>({
            checkboxLike: {
                checked: (checked ?? false),
                labelPosition,
                disabled,
                onInput,
                role: "radio"
            },
            label: {
                tagInput: tagInput as never,
                tagLabel: tagLabel as never
            }
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

                const propsIfInputHandlesFocus = useListNavigationSingleSelectionChildProps(props);

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
                const propsIfLabelHandlesFocus = useListNavigationSingleSelectionChildProps(props as any);
                return useCheckboxLikeLabelElementProps(useMergedProps<IL>({} as any, labelPosition == "wrapping" ? propsIfLabelHandlesFocus as any : props as any))
            };

            return {
                useRadioLabelProps
            }
        }, [useCheckboxLikeLabelElement]);

        return {
            useRadioInput,
            useRadioLabel,
            ...listNavRet
            //checked: checked ?? false,
            //tabbable: tabbable ?? false
        }

    }, [byName, useListNavigationSingleSelectionChild]);

    return {
        useRadio,
        useRadioGroupProps,
        useRadioGroupLabelProps,
        ...listNavRet
    }
}

export interface UseRadioReturnTypeInfo<I extends Element> extends UseListNavigationSingleSelectionChildReturnTypeInfo<I> { }

export interface UseRadioReturnTypeWithHooks<I extends Element, L extends Element> extends UseRadioReturnTypeInfo<I> {
    useRadioInput: UseRadioInput<I>;
    useRadioLabel: UseRadioLabel<L>;
}

type UseRadioInput<I extends Element> = ({ tag }: TagSensitiveProps<I>) => { useRadioInputProps: (props: h.JSX.HTMLAttributes<I>) => h.JSX.HTMLAttributes<I>; }
type UseRadioLabel<L extends Element> = ({ tag }: TagSensitiveProps<L>) => { useRadioLabelProps: (props: h.JSX.HTMLAttributes<L>) => h.JSX.HTMLAttributes<L>; }

export type UseRadio<V extends string | number, I extends Element, L extends Element> = (a: UseAriaRadioParameters<V, I, L>) => UseRadioReturnTypeWithHooks<I, L>
