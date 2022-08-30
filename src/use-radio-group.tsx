import { h } from "preact";
import { UseListNavigationChildParameters, UseListNavigationParameters, useListNavigationSingleSelection, useMergedProps, useRefElement, useStableCallback, useState } from "preact-prop-helpers";
import { useCallback, useEffect, useLayoutEffect, useRef } from "preact/hooks";
import { ElementToTag, enhanceEvent, EventDetail, TagSensitiveProps } from "./props";
import { useCheckboxLike, useLabel } from "./use-label";

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type RadioChangeEvent<EventType extends Event> = EventType & { [EventDetail]: { selectedValue: string } };

export interface UseAriaRadioGroupParameters<V extends string | number, GroupElement extends Element, GroupLabelElement extends Element, InputElement extends Element, LabelElement extends Element> extends UseListNavigationParameters {
    radioGroup: {
        name: string;

        selectedValue: V;
        onInput(event: RadioChangeEvent<h.JSX.TargetedEvent<InputElement>>): void;
        onInput(event: RadioChangeEvent<h.JSX.TargetedEvent<LabelElement>>): void;
        tagGroup: ElementToTag<GroupElement>;
        tagGroupLabel: ElementToTag<GroupLabelElement>;
    }
}

/*export interface UseAriaRadioInfoBase extends ListNavigationChildInfoBase<"tabbable" | "selected"> {
    setChecked(checked: boolean): void;
    getChecked(): boolean | null;
}*/




export interface UseAriaRadioParameters<V extends string | number, I extends Element, IL extends Element> extends UseListNavigationChildParameters<{}, never> {
    radio: {
        labelPosition: "wrapping" | "separate";
        value: V;
        disabled: boolean;
        tagInput: ElementToTag<I>;
        tagLabel: ElementToTag<IL>;
    }
    /*Omit<UseCheckboxLikeParameters<I, IL>, "onInput" | "role" | "checked"> & {
        info: Omit<Info, "setChecked" | "getChecked" | "blurSelf" | "getElement" | "focusSelf">;
        
    }*/
}

export function useAriaRadioGroup<V extends string | number, G extends HTMLElement | SVGElement, GL extends Element, I extends HTMLElement | SVGElement, IL extends HTMLElement>({
    linearNavigation,
    listNavigation,
    managedChildren,
    radioGroup: { name, onInput, selectedValue, tagGroup, tagGroupLabel },
    rovingTabIndex,
    typeaheadNavigation
}: UseAriaRadioGroupParameters<V, G, GL, I, IL>) {
    const { getElement: _getRadioGroupParentElement, useRefElementProps } = useRefElement<G>({});

    //const getSelectedIndex = useCallback((selectedValue: V) => { return byName.current.get(selectedValue) ?? 0 }, [])

    const [selectedIndex, setSelectedIndex] = useState<number | null>(0);
    const byName = useRef(new Map<V, any>());
    const stableOnInput = useStableCallback(onInput);

    //const [anyRadiosFocused, setAnyRadiosFocused, getAnyRadiosFocused] = useState(false);

    const { useLabelInput: useGroupLabelInput, useLabelLabel: useGroupLabelLabel } = useLabel<G, GL>({ labelPrefix: "aria-radio-group-label-", tagInput: tagGroup as never, tagLabel: tagGroupLabel as never, inputPrefix: "aria-radio-group-" })
    const { useLabelInputProps: useGroupLabelInputProps } = useGroupLabelInput();
    const { useLabelLabelProps: useGroupLabelLabelProps } = useGroupLabelLabel();

    const {
        useListNavigationSingleSelectionChild,
        useListNavigationSingleSelectionProps,
        children: children,
        linearNavigation: ln_ret,
        listNavigation: ls_ret,
        rovingTabIndex: rti_ret,
        typeaheadNavigation: tn_ret
    } = useListNavigationSingleSelection<G, I, {}, never>({
        linearNavigation,
        listNavigation,
        managedChildren,
        rovingTabIndex,
        singleSelection: { selectedIndex },
        typeaheadNavigation
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
        const selectedIndex = byName.current.get(selectedValue);
        setSelectedIndex(selectedIndex ?? null);
    }, [byName, selectedValue]);



    const useRadio = useCallback<UseRadio<V, I, IL>>(function useAriaRadio({
        ls,
        managedChild,
        rti,
        radio: { disabled, labelPosition, tagInput, tagLabel, value }
    }) {
        const index = managedChild.index;
        const [checked, setChecked, getChecked] = useState<boolean | null>(null);

        const onInput = useCallback((e: h.JSX.TargetedEvent<I> | h.JSX.TargetedEvent<IL>) => {
            stableOnInput(enhanceEvent(e as any, { selectedValue: value }));
        }, [stableOnInput, value, index]);

        const { useCheckboxLikeInputElement, useCheckboxLikeLabelElement } = useCheckboxLike<I, IL>({ checked: (checked ?? false), disabled, labelPosition, onInput, role: "radio", tagInput: tagInput as never, tagLabel: tagLabel as never });


        useLayoutEffect(() => {
            byName.current.set(value, index);
            return () => { byName.current.delete(value); }
        }, [byName, value, index]);

        const { tabbable, useListNavigationChildProps } = useListNavigationSingleSelectionChild({
            ls,
            rti,
            managedChild
        });

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

                const propsIfInputHandlesFocus = useListNavigationChildProps(props);

                const { useCheckboxLikeInputElementProps } = useCheckboxLikeInputElement();
                return (useMergedProps<I>((useCheckboxLikeInputElementProps({})), labelPosition == "separate" ? propsIfInputHandlesFocus : props));
            };

            return {
                useRadioInputProps
            }
        };

        const useRadioLabel: UseRadioLabel<IL> = useCallback(() => {
            const tag = tagLabel;
            const useRadioLabelProps = (props: h.JSX.HTMLAttributes<IL>): h.JSX.HTMLAttributes<IL> => {
                const { useCheckboxLikeLabelElementProps } = useCheckboxLikeLabelElement();
                const propsIfLabelHandlesFocus = useListNavigationChildProps(props as any);
                return useCheckboxLikeLabelElementProps(useMergedProps<IL>({} as any, labelPosition == "wrapping" ? propsIfLabelHandlesFocus as any : props as any))
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

    }, [byName, useListNavigationSingleSelectionChild]);

    return {
        useRadio,
        useRadioGroupProps,
        useRadioGroupLabelProps,
        children,
        linearNavigation: ln_ret,
        listNavigation: ls_ret,
        rovingTabIndex: rti_ret,
        typeaheadNavigation: tn_ret
    }
}

export interface UseRadioReturnType<I extends Element, L extends Element> {
    useRadioInput: UseRadioInput<I>;
    useRadioLabel: UseRadioLabel<L>;
    checked: boolean;
    tabbable: boolean;
}

type UseRadioInput<I extends Element> = ({ tag }: TagSensitiveProps<I>) => { useRadioInputProps: (props: h.JSX.HTMLAttributes<I>) => h.JSX.HTMLAttributes<I>; }
type UseRadioLabel<L extends Element> = ({ tag }: TagSensitiveProps<L>) => { useRadioLabelProps: (props: h.JSX.HTMLAttributes<L>) => h.JSX.HTMLAttributes<L>; }

export type UseRadio<V extends string | number, I extends Element, L extends Element> = (a: UseAriaRadioParameters<V, I, L>) => UseRadioReturnType<I, L>
