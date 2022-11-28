import { h } from "preact";
import { CompleteListNavigationContext, useCompleteListNavigation, useCompleteListNavigationChild, UseCompleteListNavigationChildParameters, UseCompleteListNavigationChildReturnType, UseCompleteListNavigationParameters, UseCompleteListNavigationReturnType, UseListNavigationSingleSelectionSortableChildInfo, useMergedProps, useRefElement, useStableCallback, useStableGetter, useState } from "preact-prop-helpers";
import { useCallback, useEffect, useLayoutEffect, useRef } from "preact/hooks";
import { debugLog, ElementToTag, EnhancedEvent, enhanceEvent } from "./props";
import { LabelPosition, useCheckboxLike, UseCheckboxLikeParameters, UseCheckboxLikeReturnType, useLabel, useLabelSynthetic, UseLabelSyntheticParameters } from "./use-label";

//type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type RadioChangeEvent<E extends EventTarget, V extends number | string> = EnhancedEvent<E, Event, { selectedValue: V | undefined }>;

export interface UseRadioGroupParameters<V extends string | number, GroupElement extends Element, GroupLabelElement extends Element, TabbableChildElement extends Element> extends Omit<UseCompleteListNavigationParameters<GroupElement, TabbableChildElement, RadioSubInfo<TabbableChildElement, V>>, "props" | "singleSelectionParameters"> {
    radioGroupParameters: {
        name: string;

        initiallySelectedValue: V | null;
        onSelectedValueChange(value: V | null /*event: RadioChangeEvent<TabbableChildElement, V>*/): void;
        //tagGroup: ElementToTag<GroupElement>;
        //tagGroupLabel: ElementToTag<GroupLabelElement>;
    }
    labelParameters: UseLabelSyntheticParameters["labelParameters"];
    //singleSelectionParameters: Pick<UseCompleteListNavigationParameters<GroupElement, TabbableChildElement, RadioSubInfo<TabbableChildElement, V>>["singleSelectionParameters"], "onSelectedIndexChange">;
}



export interface UseRadioParameters<LP extends LabelPosition, V extends string | number, TabbableChildElement extends Element, InputElement extends Element, LabelElement extends Element, M extends RadioSubInfo<TabbableChildElement, V>> extends Omit<UseCompleteListNavigationChildParameters<TabbableChildElement, M, "getValue2">, "singleSelectionChildParameters"> {
    radioParameters: {
        value: V;
    }
    context: RadioContext<V, any, TabbableChildElement, M>;
    checkboxLikeParameters: Omit<UseCheckboxLikeParameters<LP, InputElement, LabelElement>["checkboxLikeParameters"], "checked" | "onInput" | "role">;
    labelParameters: UseCheckboxLikeParameters<LP, InputElement, LabelElement>["labelParameters"];
    singleSelectionChildParameters: Omit<UseCompleteListNavigationChildParameters<TabbableChildElement, M, never>["singleSelectionChildParameters"], "ariaPropName">
}

export interface RadioContext<V extends number | string, ParentElement extends Element, ChildElement extends Element, M extends RadioSubInfo<ChildElement, V>> extends CompleteListNavigationContext<ParentElement, ChildElement, M> {
    radioContext: {
        // onSelectedIndexChange: (e: Event, newIndex: number) => void;
        name: string;
        byName: Map<V, number>;
    }
}

export interface UseRadioGroupReturnType<V extends string | number, GroupElement extends Element, GroupLabelElement extends Element, TabbableChildElement extends Element> extends Omit<UseCompleteListNavigationReturnType<GroupElement, TabbableChildElement, RadioSubInfo<TabbableChildElement, V>>, "props"> {
    radioGroupReturn: {
        selectedIndex: number | null;
        //selectedValue: V | null;
        setSelectedValue(value: V | null): void;
        setSelectedIndex(index: number | null): void;
    }
    propsRadioGroup: h.JSX.HTMLAttributes<GroupElement>;
    propsRadioGroupLabel: h.JSX.HTMLAttributes<GroupLabelElement>;

    // override
    context: RadioContext<V, GroupElement, TabbableChildElement, RadioSubInfo<TabbableChildElement, V>>;
}
/*
export interface UseRadioGroupReturnTypeWithHooks<V extends string | number, G extends Element, GL extends Element, I extends Element, IL extends HTMLElement, C, K extends string> extends UseRadioGroupReturnTypeInfo<V, I, C, K> {
    useRadioGroupLabelProps: (props: h.JSX.HTMLAttributes<GL>) => h.JSX.HTMLAttributes<GL>;
    useRadioGroupProps: (props: h.JSX.HTMLAttributes<G>) => h.JSX.HTMLAttributes<G>;
    useRadio: UseRadio<V, I, IL, C, K>;
}*/

export interface RadioSubInfo<TabbableChildElement extends Element, V extends string | number> extends UseListNavigationSingleSelectionSortableChildInfo<TabbableChildElement> {
    getValue2(): V;
}

export function useRadioGroup<V extends string | number, G extends Element, GL extends Element, I extends Element, IL extends Element, TCE extends Element>({
    linearNavigationParameters,
    rearrangeableChildrenParameters,
    rovingTabIndexParameters,
    sortableChildrenParameters,
    typeaheadNavigationParameters,
    labelParameters,
    radioGroupParameters: { name, onSelectedValueChange, initiallySelectedValue },
}: UseRadioGroupParameters<V, G, GL, TCE>): UseRadioGroupReturnType<V, G, GL, TCE> {

    //debugLog("useRadioGroup", selectedValue);
    //const { refElementReturn: { getElement: _getGroupElement, propsStable } } = useRefElement<G>({ refElementParameters: {} });

    const [selectedIndex, setSelectedIndex] = useState<number | null>(0);
    const byName = useRef(new Map<V, number>());
    const setSelectedValue = useCallback((value: V | null) => {
        if (value == null) {
            setSelectedIndex(null);
            return;
        }
        const newIndex = byName.current.get(value);
        setSelectedIndex(newIndex ?? null);
    }, [])

    const { propsInput: propsGroup1, propsLabel, randomIdInputReturn, randomIdLabelReturn } = useLabelSynthetic<G, GL>({
        labelParameters,
        randomIdLabelParameters: { prefix: "aria-radio-group-label-", },
        randomIdInputParameters: { prefix: "aria-radio-group-" }
    })


    const onSelectedIndexChange = useStableCallback((newIndex: number | null) => {
        if (newIndex != null) {
            const child = managedChildrenReturn.getChildren().getAt(newIndex);
            if (child) {
                onSelectedValueChange(child.getValue2() ?? null)
                return;
            }
        }
        onSelectedValueChange(null);
        //onSelectedValueChange(enhanceEvent<TCE, Event, { selectedValue: V | undefined }>(e, { selectedValue: managedChildrenReturn.getChildren().getAt(newIndex)?.getValue() }));
    });

    const {
        childrenHaveFocusReturn,
        context,
        props: propsGroup2,
        linearNavigationReturn,
        managedChildrenReturn,
        rearrangeableChildrenReturn,
        rovingTabIndexReturn,
        singleSelectionReturn,
        sortableChildrenReturn,
        typeaheadNavigationReturn
    } = useCompleteListNavigation<G, TCE, RadioSubInfo<TCE, V>>({
        linearNavigationParameters,
        rearrangeableChildrenParameters,
        rovingTabIndexParameters,
        singleSelectionParameters: { initiallySelectedIndex: selectedIndex, onSelectedIndexChange },
        sortableChildrenParameters,
        typeaheadNavigationParameters
    });


    const propsRadioGroup = useMergedProps(propsGroup1, propsGroup2, { role: "radiogroup" });

    /*useEffect(() => {
        if (selectedValue == null) {
            setSelectedIndex(null)
        }
        else {
            const selectedIndex = byName.current.get(selectedValue);
            setSelectedIndex(selectedIndex ?? null);
        }
    }, [byName, selectedValue]);*/

    return {
        propsRadioGroup,
        propsRadioGroupLabel: propsLabel,

        childrenHaveFocusReturn,
        context: {
            ...context,
            radioContext: { name, byName: byName.current }
        },
        linearNavigationReturn,
        managedChildrenReturn,
        radioGroupReturn: { selectedIndex, setSelectedIndex, setSelectedValue },
        rearrangeableChildrenReturn,
        rovingTabIndexReturn,
        singleSelectionReturn,
        sortableChildrenReturn,
        typeaheadNavigationReturn
    }
}

export interface UseRadioReturnType<V extends string | number, I extends Element, IL extends Element, TCE extends Element, M extends RadioSubInfo<TCE, V>> extends Omit<UseCompleteListNavigationChildReturnType<TCE, M>, "props">, UseCheckboxLikeReturnType<I, IL> {
    propsInput: h.JSX.HTMLAttributes<I>;
    propsLabel: h.JSX.HTMLAttributes<IL>;
}

/*export interface UseRadioReturnTypeWithHooks<I extends Element, L extends Element> extends UseRadioReturnTypeInfo<I, L> {
    useRadioInput: UseRadioInput<I>;
    useRadioLabel: UseRadioLabel<L>;
}*/

//type UseRadioInput<I extends Element> = ({ tag }: TagSensitiveProps<I>) => { useRadioInputProps: (props: h.JSX.HTMLAttributes<I>) => h.JSX.HTMLAttributes<I>; }
//type UseRadioLabel<L extends Element> = ({ tag }: TagSensitiveProps<L>) => { useRadioLabelProps: (props: h.JSX.HTMLAttributes<L>) => h.JSX.HTMLAttributes<L>; }

//export type UseRadio<V extends string | number, I extends Element, L extends Element, C, K extends string> = (a: UseRadioParameters<V, I, L, C, K>) => UseRadioReturnTypeWithHooks<I, L>




export function useRadio<LP extends LabelPosition, InputElement extends Element, LabelElement extends Element, TabbableChildElement extends InputElement | LabelElement, V extends string | number>({
    radioParameters: { value },
    checkboxLikeParameters: { disabled },
    completeListNavigationChildParameters: { },
    labelParameters,
    managedChildParameters,
    pressParameters,
    singleSelectionChildParameters,
    context,
    textContentParameters,
    rovingTabIndexChildParameters,
    sortableChildParameters

}: UseRadioParameters<LP, V, TabbableChildElement, InputElement, LabelElement, RadioSubInfo<TabbableChildElement, V>>): UseRadioReturnType<V, InputElement, LabelElement, TabbableChildElement, RadioSubInfo<TabbableChildElement, V>> {
    const index = managedChildParameters.index;
    debugLog("useRadio", index);
    const onInput = useStableCallback((e: h.JSX.TargetedEvent<InputElement>) => {
        e.preventDefault();
        //onSelectedIndexChange(e, index);
    });

    const { name, byName } = context.radioContext

    const { tagInput, tagLabel, labelPosition } = labelParameters;

    const getValue = useStableGetter(value);
    const {
        props: listNavigationSingleSelectionChildProps,
        hasCurrentFocusReturn,
        managedChildReturn,
        pressReturn,
        rovingTabIndexChildReturn,
        singleSelectionChildReturn
    } = useCompleteListNavigationChild<TabbableChildElement, RadioSubInfo<TabbableChildElement, V>, never>({
        completeListNavigationChildParameters: { getValue2: getValue },
        managedChildParameters,
        pressParameters,
        context,
        rovingTabIndexChildParameters,
        sortableChildParameters,
        textContentParameters,
        /*rovingTabIndex,
        managedChild: {
            index: managedChild.index,
            flags: managedChild.flags
        },
        hasFocus,
        subInfo: { getValue, subInfo },*/
        singleSelectionChildParameters: { ariaPropName: tagInput == "input" && labelPosition == "separate" ? null : "aria-selected", ...singleSelectionChildParameters }
    });

    const { selected: checked } = singleSelectionChildReturn;

    const { refElementReturn: refElementInputReturn } = useRefElement<InputElement>({ refElementParameters: {} });
    const { refElementReturn: refElementLabelReturn } = useRefElement<LabelElement>({ refElementParameters: {} });

    const {
        checkboxLikeInputReturn,
        checkboxLikeLabelReturn,
        pressInputReturn,
        pressLabelReturn,
        propsInput,
        propsLabel,
        randomIdInputReturn,
        randomIdLabelReturn,
        checkboxLikeReturn
    } = useCheckboxLike<LabelPosition, InputElement, LabelElement>({
        checkboxLikeParameters: {
            checked: (checked ?? false),
            disabled,
            onInput: onInput,
            role: "radio"
        },
        labelParameters,
        randomIdInputParameters: { prefix: "aria-radio-input-" },
        randomIdLabelParameters: { prefix: "aria-radio-label-" },
        refElementInputReturn,
        refElementLabelReturn
    });


    useLayoutEffect(() => {
        byName.set(value, index);
        return () => { byName.delete(value); }
    }, [value, index]);

    //const useRadioInput = () => {
    if (tagInput == "input") {
        propsInput.name = name;
        propsInput.checked = (checked ?? false);
        propsInput.type = "radio";
    }
    else {
        propsInput["aria-checked"] = (checked ?? false).toString();
    }

    const propsIfInputHandlesFocus = useMergedProps<InputElement>(listNavigationSingleSelectionChildProps as h.JSX.HTMLAttributes<any>, propsInput);
    const propsInput2: h.JSX.HTMLAttributes<InputElement> = labelPosition == "separate" ? propsIfInputHandlesFocus : propsInput;

    // };

    //const useRadioLabel: UseRadioLabel<IL> = useCallback(() => {
    //const tag = tagLabel;
    //const useRadioLabelProps = (propsLabel: h.JSX.HTMLAttributes<IL>): h.JSX.HTMLAttributes<IL> => {
    //const { useCheckboxLikeLabelElementProps } = useCheckboxLikeLabelElement();
    const propsIfLabelHandlesFocus = useMergedProps<LabelElement>(listNavigationSingleSelectionChildProps as h.JSX.HTMLAttributes<any>, propsLabel);
    const propsLabel2: h.JSX.HTMLAttributes<LabelElement> = labelPosition == "wrapping" ? propsIfLabelHandlesFocus as any : propsLabel as any
    //};

    //return {
    //    useRadioLabelProps
    //}
    //}, [useCheckboxLikeLabelElement]);

    return {
        checkboxLikeInputReturn,
        checkboxLikeLabelReturn,
        managedChildReturn,
        pressInputReturn,
        pressLabelReturn,
        propsInput: propsInput2,
        propsLabel: propsLabel2,
        randomIdInputReturn,
        randomIdLabelReturn,
        hasCurrentFocusReturn,
        rovingTabIndexChildReturn,
        pressReturn,
        singleSelectionChildReturn,
        checkboxLikeReturn
    }

}