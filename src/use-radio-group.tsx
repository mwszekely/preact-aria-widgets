import { CompleteListNavigationContext, ElementProps, EventDetail, Nullable, TargetedOmit, UseCompleteListNavigationChildInfo, UseCompleteListNavigationChildInfoKeysParameters, UseCompleteListNavigationChildParameters, UseCompleteListNavigationChildReturnType, UseCompleteListNavigationDeclarativeReturnType, UseCompleteListNavigationParameters, UseGenericChildParameters, assertEmptyObject, focus, monitorCallCount, useCompleteListNavigationChild, useCompleteListNavigationDeclarative, useMergedProps, useRefElement, useStableCallback, useState } from "preact-prop-helpers";
import { useEffect, useLayoutEffect, useMemo, useRef } from "preact/hooks";
import { EnhancedEventHandler, OmitStrong, Prefices, TargetedEnhancedEvent, enhanceEvent } from "./props.js";
import { UseCheckboxLikeParameters, UseCheckboxLikeReturnType, useCheckboxLike } from "./use-checkbox-like.js";
import { FocusableLabelElement, LabelPosition, UseLabelSyntheticParameters, useLabelSynthetic } from "./use-label.js";

export interface RadioChangeEventDetail<V extends number | string> { selectedValue: V | undefined };

export type TargetedRadioChangeEvent<V extends number | string> = TargetedEnhancedEvent<Event, RadioChangeEventDetail<V>>;
export type RadioChangeEventHandler<V extends number | string> = EnhancedEventHandler<Event, RadioChangeEventDetail<V>>;

export interface UseRadioGroupParametersSelf<V extends string | number> {
    name: string;

    selectedValue: Nullable<V>;
    onSelectedValueChange: Nullable<RadioChangeEventHandler<V>>;
}

export interface UseRadioGroupParameters<V extends string | number, GroupElement extends Element, _GroupLabelElement extends Element, TabbableChildElement extends Element, M extends RadioSubInfo<TabbableChildElement, V> = RadioSubInfo<TabbableChildElement, V>> extends
    OmitStrong<UseCompleteListNavigationParameters<GroupElement, TabbableChildElement, M>, "rovingTabIndexParameters" | "paginatedChildrenParameters" | "singleSelectionParameters" | "multiSelectionParameters">,
    TargetedOmit<UseCompleteListNavigationParameters<GroupElement, TabbableChildElement, any>, "rovingTabIndexParameters", "focusSelfParent">,
    TargetedOmit<UseLabelSyntheticParameters, "labelParameters", "onLabelClick"> {
    radioGroupParameters: UseRadioGroupParametersSelf<V>;
}



export interface UseRadioParametersSelf<V extends string | number> {
    value: V;
}

export interface UseRadioParameters<LP extends LabelPosition, V extends string | number, InputElement extends Element, LabelElement extends Element, M extends RadioSubInfo<FocusableLabelElement<LP, InputElement, LabelElement>, V>> extends
    UseGenericChildParameters<RadioContext<V, FocusableLabelElement<LP, InputElement, LabelElement>, M>, Pick<M, Exclude<UseCompleteListNavigationChildInfoKeysParameters<M>, "focusSelf">>>,
    OmitStrong<UseCompleteListNavigationChildParameters<FocusableLabelElement<LP, InputElement, LabelElement>, M>, "info" | "context" | "multiSelectionChildParameters" | "singleSelectionChildParameters">,
    TargetedOmit<UseCompleteListNavigationChildParameters<FocusableLabelElement<LP, InputElement, LabelElement>, M>, "info", "focusSelf">,
    TargetedOmit<UseCheckboxLikeParameters<LP, InputElement, LabelElement, boolean>, "labelParameters", never>,
    TargetedOmit<UseCheckboxLikeParameters<LP, InputElement, LabelElement, boolean>, "pressParameters", "excludeSpace" | "onPressSync">,
    TargetedOmit<UseCheckboxLikeParameters<LP, InputElement, LabelElement, boolean>, "checkboxLikeParameters", "checked" | "role"> {
    radioParameters: UseRadioParametersSelf<V>;
}

export interface RadioContextSelf<V extends number | string> {
    name: string;
    nameToIndex: Map<V, number>;
    indexToName: Map<number, V>;
}

export interface RadioContext<V extends number | string, ChildElement extends Element, M extends RadioSubInfo<ChildElement, V>> extends CompleteListNavigationContext<ChildElement, M> {
    radioContext: RadioContextSelf<V>;
}



export interface UseRadioGroupReturnTypeSelf {
    selectedIndex: number | null;
}

export interface UseRadioGroupReturnType<V extends string | number, GroupElement extends Element, GroupLabelElement extends Element, TabbableChildElement extends Element, M extends RadioSubInfo<TabbableChildElement, V> = RadioSubInfo<TabbableChildElement, V>> extends
    OmitStrong<UseCompleteListNavigationDeclarativeReturnType<GroupElement, TabbableChildElement, M>, "context" | "props" | "multiSelectionReturn"> {
    radioGroupReturn: UseRadioGroupReturnTypeSelf;
    propsRadioGroup: ElementProps<GroupElement>;
    propsRadioGroupLabel: ElementProps<GroupLabelElement>;

    // override
    context: RadioContext<V, TabbableChildElement, M>;
}

export interface RadioSubInfo<TabbableChildElement extends Element, V extends string | number> extends UseCompleteListNavigationChildInfo<TabbableChildElement> {
    //getValue2(): V;
}

/**
 * Implements a [Radio Group](https://www.w3.org/WAI/ARIA/apg/patterns/radio/) pattern.
 * 
 * @remarks Which radio is the selected one is controlled by the `selectedValue` parameter on the parent.
 * 
 * @compositeParams
 * 
 * @hasChild {@link useRadio}
 */
export function useRadioGroup<V extends string | number, G extends Element, GL extends Element, TCE extends Element>({
    labelParameters,
    radioGroupParameters: { name, selectedValue, onSelectedValueChange, ...void2 },
    rovingTabIndexParameters,
    linearNavigationParameters,
    rearrangeableChildrenParameters,
    sortableChildrenParameters,
    staggeredChildrenParameters,
    typeaheadNavigationParameters,
    refElementParameters,
    ...void1
}: UseRadioGroupParameters<V, G, GL, TCE, RadioSubInfo<TCE, V>>): UseRadioGroupReturnType<V, G, GL, TCE, RadioSubInfo<TCE, V>> {
    monitorCallCount(useRadioGroup);
    type M = RadioSubInfo<TCE, V>;

    // TODO: The way this is structured causes 1 extra re-render on the parent
    // when the selectedValue changes to selectedIndex.
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
    const nameToIndex = useRef(new Map<V, number>());
    const indexToName = useRef(new Map<number, V>());

    useEffect(() => {
        setSelectedIndex(nameToIndex.current.get(selectedValue!) ?? null);
    }, [selectedValue]);

    const {
        propsInput: propsGroup1,
        propsLabel } = useLabelSynthetic<G, GL>({
            labelParameters: {
                onLabelClick: useStableCallback(() => {
                    rovingTabIndexReturn.focusSelf();
                }),
                ...labelParameters
            },
            randomIdLabelParameters: { prefix: Prefices.radioGroupLabel, },
            randomIdInputParameters: { prefix: Prefices.radioGroup }
        });

    /*useLayoutEffect(() => {
        if (selectedValue != null)
        asyncHandlerReturn.syncHandler(nameToIndex.current.get(selectedValue) ?? null);
        else
        asyncHandlerReturn.syncHandler(null);
    }, [selectedValue])*/

    const {
        context,
        props: propsGroup2,
        singleSelectionReturn,
        multiSelectionReturn,
        managedChildrenReturn,
        rovingTabIndexReturn,
        linearNavigationReturn,
        paginatedChildrenReturn,
        rearrangeableChildrenReturn,
        sortableChildrenReturn,
        staggeredChildrenReturn,
        typeaheadNavigationReturn,
        childrenHaveFocusReturn,
        ...void3
    } = useCompleteListNavigationDeclarative<G, TCE, M>({
        singleSelectionDeclarativeParameters: {
            singleSelectedIndex: selectedIndex,
            onSingleSelectedIndexChange: useStableCallback((e) => {
                setSelectedIndex(e[EventDetail].selectedIndex);
                onSelectedValueChange?.(enhanceEvent(e, { selectedValue: indexToName.current.get(e[EventDetail].selectedIndex) }));
            }),
        },
        singleSelectionParameters: { singleSelectionMode: "focus", singleSelectionAriaPropName: null },
        multiSelectionParameters: { multiSelectionMode: "disabled", multiSelectionAriaPropName: null, onSelectionChange: null },
        paginatedChildrenParameters: { paginationMin: null, paginationMax: null },
        rovingTabIndexParameters: { ...rovingTabIndexParameters, focusSelfParent: focus },
        linearNavigationParameters,
        rearrangeableChildrenParameters,
        sortableChildrenParameters,
        staggeredChildrenParameters,
        typeaheadNavigationParameters,
        refElementParameters
    });

    /*const { singleSelectionParameters: { onSelectedIndexChange } } = useSingleSelectionDeclarative<G, TCE, M>({
        singleSelectionReturn: {
            changeSelectedIndex: useStableCallback((s, r) => {
                singleSelectionReturn.changeSelectedIndex(s, r);
            })
        },
        singleSelectionDeclarativeParameters: {
            selectedIndex,
            onSelectedIndexChange: useStableCallback((e) => {
                let i = e[EventDetail].selectedIndex;
                let value = i == undefined ? undefined : indexToName.current.get(i);
                onSelectedValueChange?.(enhanceEvent(e, { selectedValue: value }));
            })
        }
    })*/


    const propsRadioGroup = useMergedProps(propsGroup1, propsGroup2, { role: "radiogroup" });

    assertEmptyObject(void1);
    assertEmptyObject(void2);
    assertEmptyObject(void3);

    return {
        propsRadioGroup,
        propsRadioGroupLabel: propsLabel,
        rovingTabIndexReturn,
        linearNavigationReturn,
        paginatedChildrenReturn,
        managedChildrenReturn,
        radioGroupReturn: { selectedIndex },
        singleSelectionReturn,
        rearrangeableChildrenReturn,
        sortableChildrenReturn,
        staggeredChildrenReturn,
        typeaheadNavigationReturn,
        childrenHaveFocusReturn,
        context: useMemo(() => ({
            ...context,
            radioContext: { name, indexToName: indexToName.current, nameToIndex: nameToIndex.current }
        }), [name]),
    }
}

export interface UseRadioReturnType<LP extends LabelPosition, V extends string | number, I extends Element, IL extends Element, M extends RadioSubInfo<FocusableLabelElement<LP, I, IL>, V>> extends OmitStrong<UseCompleteListNavigationChildReturnType<FocusableLabelElement<LP, I, IL>, M>, "propsChild" | "propsTabbable" | "pressParameters">, UseCheckboxLikeReturnType<I, IL> {
    propsInput: ElementProps<I>;
    propsLabel: ElementProps<IL>;
}



/**
 * Implements a single radio button, as part of a radio group.
 * 
 * @compositeParams
 */
export function useRadio<LP extends LabelPosition, InputElement extends Element, LabelElement extends Element, V extends string | number>({
    radioParameters: { value, ...void5 },
    checkboxLikeParameters: { disabled, ...void4 },
    labelParameters,
    info,
    context,
    textContentParameters,
    pressParameters: { longPressThreshold, ...void3 },
    hasCurrentFocusParameters,
    refElementParameters,
    ...void1

}: UseRadioParameters<LP, V, InputElement, LabelElement, RadioSubInfo<FocusableLabelElement<LP, InputElement, LabelElement>, V>>): UseRadioReturnType<LP, V, InputElement, LabelElement, RadioSubInfo<FocusableLabelElement<LP, InputElement, LabelElement>, V>> {
    type M = RadioSubInfo<FocusableLabelElement<LP, InputElement, LabelElement>, V>;
    monitorCallCount(useRadio);
    type TabbableChildElement = FocusableLabelElement<LP, InputElement, LabelElement>;
    const index = info.index;
    /*const onInput = useStableCallback((e: EventType<InputElement, Event>) => {
        onPressSync?.(e as PressEventReason<any>);
    });*/

    const { name, indexToName, nameToIndex } = context.radioContext

    const { tagInput, labelPosition } = labelParameters;


    const {
        propsChild: listNavigationSingleSelectionChildProps,
        propsTabbable,
        singleSelectionChildReturn,
        pressParameters: { onPressSync, excludeSpace, ...void2 },
        ...listNavRet
    } = useCompleteListNavigationChild<TabbableChildElement, M>({
        info: {
            focusSelf: useStableCallback((e) => { return checkboxLikeRet.checkboxLikeReturn.focusSelf(); }),
            ...info
        },
        context,
        textContentParameters,
        hasCurrentFocusParameters,
        refElementParameters,
        singleSelectionChildParameters: { singleSelectionDisabled: !!disabled },
        multiSelectionChildParameters: { initiallyMultiSelected: false, multiSelectionDisabled: true, onMultiSelectChange: null }
    });

    assertEmptyObject(void1);
    assertEmptyObject(void2);
    assertEmptyObject(void3);
    assertEmptyObject(void4);
    assertEmptyObject(void5);


    const { singleSelected: checked } = singleSelectionChildReturn;

    const { refElementReturn: refElementInputReturn, propsStable: propsRefInput } = useRefElement<InputElement>({ refElementParameters: {} });
    const { refElementReturn: refElementLabelReturn, propsStable: propsRefLabel } = useRefElement<LabelElement>({ refElementParameters: {} });

    const {
        propsInput,
        propsLabel,
        ...checkboxLikeRet
    } = useCheckboxLike<LabelPosition, InputElement, LabelElement, boolean>({
        checkboxLikeParameters: {
            checked: (checked ?? false),
            disabled,
            role: "radio"
        },
        pressParameters: { excludeSpace, longPressThreshold, onPressSync },
        labelParameters,
        randomIdInputParameters: { prefix: Prefices.radio },
        randomIdLabelParameters: { prefix: Prefices.radioLabel },
        refElementInputReturn,
        refElementLabelReturn
    });
    useLayoutEffect(() => {
        nameToIndex.set(value, index);
        indexToName.set(index, value);
        return () => {
            nameToIndex.delete(value);
            indexToName.delete(index);
        }
    }, [value, index]);

    if (tagInput == "input") {
        propsInput.name = name;
        propsInput.checked = (checked ?? false);
        propsInput.type = "radio";
    }
    else {
        propsInput["aria-checked"] = (checked ?? false);
    }

    const propsIfInputHandlesFocus = useMergedProps<InputElement>(listNavigationSingleSelectionChildProps as ElementProps<any>, propsTabbable, propsInput);
    const propsInput2: ElementProps<InputElement> = useMergedProps(propsRefInput, labelPosition != "wrapping" ? propsIfInputHandlesFocus : propsInput);

    const propsIfLabelHandlesFocus = useMergedProps<LabelElement>(listNavigationSingleSelectionChildProps as ElementProps<any>, propsTabbable, propsLabel);
    const propsLabel2: ElementProps<LabelElement> = useMergedProps(propsRefLabel, labelPosition == "wrapping" ? propsIfLabelHandlesFocus as any : propsLabel as any);

    return {
        propsInput: propsInput2,
        propsLabel: propsLabel2,
        singleSelectionChildReturn,
        ...checkboxLikeRet,
        ...listNavRet
    }

}