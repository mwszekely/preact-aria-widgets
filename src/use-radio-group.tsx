import { h } from "preact";
import { CompleteListNavigationContext, useCompleteListNavigation, useCompleteListNavigationChild, UseCompleteListNavigationChildInfo, UseCompleteListNavigationChildParameters, UseCompleteListNavigationChildReturnType, UseCompleteListNavigationParameters, UseCompleteListNavigationReturnType, UseListNavigationSingleSelectionSortableChildInfo, useMergedProps, useRefElement, useSingleSelectionDeclarative, useStableCallback, useStableGetter, useState } from "preact-prop-helpers";
import { useEffect, useLayoutEffect, useRef } from "preact/hooks";
import { debugLog, EnhancedEvent, OmitStrong, Prefices } from "./props";
import { FocusableLabelElement, LabelPosition, useCheckboxLike, UseCheckboxLikeParameters, UseCheckboxLikeReturnType, useLabelSynthetic, UseLabelSyntheticParameters } from "./use-label";

//type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type RadioChangeEvent<E extends EventTarget, V extends number | string> = EnhancedEvent<E, Event, { selectedValue: V | undefined }>;

export interface UseRadioGroupParameters<V extends string | number, GroupElement extends Element, _GroupLabelElement extends Element, TabbableChildElement extends Element> extends OmitStrong<UseCompleteListNavigationParameters<GroupElement, TabbableChildElement, RadioSubInfo<TabbableChildElement, V>>, "paginatedChildrenParameters" | "singleSelectionParameters"> {
    radioGroupParameters: {
        name: string;

        selectedValue: V | null;
        onSelectedValueChange(value: V | null, event: Event | undefined): void;
        //tagGroup: ElementToTag<GroupElement>;
        //tagGroupLabel: ElementToTag<GroupLabelElement>;
    }
    labelParameters: OmitStrong<UseLabelSyntheticParameters["labelParameters"], "onLabelClick">;
    //singleSelectionParameters: Pick<UseCompleteListNavigationParameters<GroupElement, TabbableChildElement, RadioSubInfo<TabbableChildElement, V>>["singleSelectionParameters"], "onSelectedIndexChange">;
}



export interface UseRadioParameters<LP extends LabelPosition, V extends string | number, InputElement extends Element, LabelElement extends Element, M extends RadioSubInfo<FocusableLabelElement<LP, InputElement, LabelElement>, V>> extends OmitStrong<UseCompleteListNavigationChildParameters<FocusableLabelElement<LP, InputElement, LabelElement>, M, "getValue2">, "singleSelectionChildParameters"> {
    radioParameters: {
        value: V;
    }
    context: RadioContext<V, any, FocusableLabelElement<LP, InputElement, LabelElement>, M>;
    checkboxLikeParameters: OmitStrong<UseCheckboxLikeParameters<LP, InputElement, LabelElement>["checkboxLikeParameters"], "checked" | "onInput" | "role">;
    labelParameters: OmitStrong<UseCheckboxLikeParameters<LP, InputElement, LabelElement>["labelParameters"], never>;
    singleSelectionChildParameters: OmitStrong<UseCompleteListNavigationChildParameters<FocusableLabelElement<LP, InputElement, LabelElement>, M, never>["singleSelectionChildParameters"], "ariaPropName" | "selectionMode">
}

export interface RadioContext<V extends number | string, ParentElement extends Element, ChildElement extends Element, M extends RadioSubInfo<ChildElement, V>> extends CompleteListNavigationContext<ParentElement, ChildElement, M> {
    radioContext: {
        // onSelectedIndexChange: (e: Event, newIndex: number) => void;
        name: string;
        byName: Map<V, number>;
    }
}

export interface UseRadioGroupReturnType<V extends string | number, GroupElement extends Element, GroupLabelElement extends Element, TabbableChildElement extends Element> extends OmitStrong<UseCompleteListNavigationReturnType<GroupElement, TabbableChildElement, RadioSubInfo<TabbableChildElement, V>>, "props"> {
    radioGroupReturn: {
        selectedIndex: number | null;
        //selectedValue: V | null;
        //setSelectedValue(value: V | null): void;
        //setSelectedIndex(index: number | null): void;
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

export interface RadioSubInfo<TabbableChildElement extends Element, V extends string | number> extends UseCompleteListNavigationChildInfo<TabbableChildElement> {
    getValue2(): V;
}

export function useRadioGroup<V extends string | number, G extends Element, GL extends Element, TCE extends Element>({
    linearNavigationParameters,
    rearrangeableChildrenParameters,
    rovingTabIndexParameters,
    sortableChildrenParameters,
    typeaheadNavigationParameters,
    staggeredChildrenParameters,
    labelParameters,
    radioGroupParameters: { name, onSelectedValueChange, selectedValue },
}: UseRadioGroupParameters<V, G, GL, TCE>): UseRadioGroupReturnType<V, G, GL, TCE> {

    //debugLog("useRadioGroup", selectedValue);
    //const { refElementReturn: { getElement: _getGroupElement, propsStable } } = useRefElement<G>({ refElementParameters: {} });

    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
    const byName = useRef(new Map<V, number>());
    /*const setSelectedValue = useCallback((value: V | null) => {
        if (value == null) {
            setSelectedIndex(null);
            return;
        }
        const newIndex = byName.current.get(value);
        setSelectedIndex(newIndex ?? null);
    }, [])*/

    const { propsInput: propsGroup1, propsLabel } = useLabelSynthetic<G, GL>({
        labelParameters: {
            onLabelClick: useStableCallback(() => {
                rovingTabIndexReturn.focusSelf();
            }),
            ...labelParameters
        },
        randomIdLabelParameters: { prefix: Prefices.radioGroupLabel, },
        randomIdInputParameters: { prefix: Prefices.radioGroup }
    })


    /*const onSelectedIndexChange = useStableCallback((newIndex: number | null) => {
        if (newIndex != null) {
            const child = managedChildrenReturn.getChildren().getAt(newIndex);
            if (child) {
                onSelectedValueChange(child.getValue2() ?? null)
                return;
            }
        }
        onSelectedValueChange(null);
        //onSelectedValueChange(enhanceEvent<TCE, Event, { selectedValue: V | undefined }>(e, { selectedValue: managedChildrenReturn.getChildren().getAt(newIndex)?.getValue() }));
    });*/

    useEffect(() => {
        if (selectedValue != null)
            singleSelectionReturn.changeSelectedIndex(byName.current.get(selectedValue) ?? null);
        else
            singleSelectionReturn.changeSelectedIndex(null);
    }, [selectedValue])

    const {
        childrenHaveFocusReturn,
        context,
        props: propsGroup2,
        linearNavigationReturn,
        managedChildrenReturn,
        rearrangeableChildrenReturn,
        rovingTabIndexReturn,
        singleSelectionReturn,
        paginatedChildrenReturn,
        sortableChildrenReturn,
        typeaheadNavigationReturn
    } = useCompleteListNavigation<G, TCE, RadioSubInfo<TCE, V>>({
        linearNavigationParameters,
        rearrangeableChildrenParameters,
        rovingTabIndexParameters,
        singleSelectionParameters: { initiallySelectedIndex: selectedIndex, onSelectedIndexChange: setSelectedIndex },
        sortableChildrenParameters,
        typeaheadNavigationParameters,
        staggeredChildrenParameters,
        paginatedChildrenParameters: { paginationMin: null, paginationMax: null }
    });

    const _v: void = useSingleSelectionDeclarative({
        singleSelectionReturn: {
            changeSelectedIndex: useStableCallback((s, r) => {
                let next = typeof s == "function" ? s(selectedIndex) : s;
                if (next != null) {
                    const nextValue = managedChildrenReturn.getChildren().getAt(next)?.getValue2();
                    onSelectedValueChange(nextValue as V, r);
                }
                else {
                    onSelectedValueChange(null, r);
                }
            })
        }, singleSelectionDeclarativeParameters: { selectedIndex }
    })


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
        radioGroupReturn: { selectedIndex },
        rearrangeableChildrenReturn,
        paginatedChildrenReturn,
        rovingTabIndexReturn,
        singleSelectionReturn,
        sortableChildrenReturn,
        typeaheadNavigationReturn
    }
}

export interface UseRadioReturnType<LP extends LabelPosition, V extends string | number, I extends Element, IL extends Element, M extends RadioSubInfo<FocusableLabelElement<LP, I, IL>, V>> extends OmitStrong<UseCompleteListNavigationChildReturnType<FocusableLabelElement<LP, I, IL>, M>, "props">, UseCheckboxLikeReturnType<I, IL> {
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




export function useRadio<LP extends LabelPosition, InputElement extends Element, LabelElement extends Element, V extends string | number>({
    radioParameters: { value },
    checkboxLikeParameters: { disabled },
    completeListNavigationChildParameters,
    labelParameters,
    managedChildParameters,
    pressParameters,
    singleSelectionChildParameters,
    context,
    textContentParameters,
    rovingTabIndexChildParameters,
    sortableChildParameters

}: UseRadioParameters<LP, V, InputElement, LabelElement, RadioSubInfo<FocusableLabelElement<LP, InputElement, LabelElement>, V>>): UseRadioReturnType<LP, V, InputElement, LabelElement, RadioSubInfo<FocusableLabelElement<LP, InputElement, LabelElement>, V>> {
    type TabbableChildElement = FocusableLabelElement<LP, InputElement, LabelElement>;
    const index = managedChildParameters.index;
    debugLog("useRadio", index);
    const onInput = useStableCallback((e: h.JSX.TargetedEvent<InputElement>) => {
        singleSelectionChildReturn.setThisOneSelected(e);
    });

    const { name, byName } = context.radioContext

    const { tagInput, labelPosition } = labelParameters;

    const getValue = useStableGetter(value);
    const {
        props: listNavigationSingleSelectionChildProps,
        hasCurrentFocusReturn,
        managedChildReturn,
        pressReturn,
        rovingTabIndexChildReturn,
        staggeredChildReturn,
        singleSelectionChildReturn,
        paginatedChildReturn
    } = useCompleteListNavigationChild<TabbableChildElement, RadioSubInfo<TabbableChildElement, V>, never>({
        completeListNavigationChildParameters: { getValue2: getValue, ...completeListNavigationChildParameters },
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
        singleSelectionChildParameters: { selectionMode: "focus", ariaPropName: tagInput == "input" && labelPosition != "wrapping" ? null : "aria-selected", ...singleSelectionChildParameters }
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
        randomIdInputParameters: { prefix: Prefices.radio },
        randomIdLabelParameters: { prefix: Prefices.radioLabel },
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
    const propsInput2: h.JSX.HTMLAttributes<InputElement> = labelPosition != "wrapping" ? propsIfInputHandlesFocus : propsInput;
    
    const propsIfLabelHandlesFocus = useMergedProps<LabelElement>(listNavigationSingleSelectionChildProps as h.JSX.HTMLAttributes<any>, propsLabel);
    const propsLabel2: h.JSX.HTMLAttributes<LabelElement> = labelPosition == "wrapping" ? propsIfLabelHandlesFocus as any : propsLabel as any

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
        staggeredChildReturn,
        rovingTabIndexChildReturn,
        pressReturn,
        singleSelectionChildReturn,
        checkboxLikeReturn,
        paginatedChildReturn
    }

}