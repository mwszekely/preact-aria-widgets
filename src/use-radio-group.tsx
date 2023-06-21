import { h } from "preact";
import { assertEmptyObject, CompleteListNavigationContext, ElementProps, EventDetail, focus, monitorCallCount, useCompleteListNavigation, useCompleteListNavigationChild, UseCompleteListNavigationChildInfo, UseCompleteListNavigationChildParameters, UseCompleteListNavigationChildReturnType, UseCompleteListNavigationParameters, UseCompleteListNavigationReturnType, useMergedProps, useRefElement, useSingleSelectionDeclarative, useStableCallback, useStableGetter, useState } from "preact-prop-helpers";
import { useLayoutEffect, useMemo, useRef } from "preact/hooks";
import { EnhancedEventHandler, enhanceEvent, OmitStrong, Prefices, TargetedEnhancedEvent } from "./props.js";
import { useCheckboxLike, UseCheckboxLikeParameters, UseCheckboxLikeReturnType } from "./use-checkbox-like.js";
import { FocusableLabelElement, LabelPosition, useLabelSynthetic, UseLabelSyntheticParameters } from "./use-label.js";

export interface RadioChangeEventDetail<V extends number | string> { selectedValue: V | undefined };

export type TargetedRadioChangeEvent<V extends number | string> = TargetedEnhancedEvent<Event, RadioChangeEventDetail<V>>;
export type RadioChangeEventHandler<V extends number | string> = EnhancedEventHandler<Event, RadioChangeEventDetail<V>>;

export interface UseRadioGroupParameters<V extends string | number, GroupElement extends Element, _GroupLabelElement extends Element, TabbableChildElement extends Element> extends OmitStrong<UseCompleteListNavigationParameters<GroupElement, TabbableChildElement, RadioSubInfo<TabbableChildElement, V>>, "rovingTabIndexParameters" | "paginatedChildrenParameters" | "singleSelectionParameters"> {
    rovingTabIndexParameters: OmitStrong<UseCompleteListNavigationParameters<GroupElement, TabbableChildElement, any>["rovingTabIndexParameters"], "focusSelfParent">
    radioGroupParameters: {
        name: string;

        selectedValue: V | null;
        onSelectedValueChange: undefined | null | RadioChangeEventHandler<V>;
    }
    labelParameters: OmitStrong<UseLabelSyntheticParameters["labelParameters"], "onLabelClick">;
}



export interface UseRadioParameters<LP extends LabelPosition, V extends string | number, InputElement extends Element, LabelElement extends Element, M extends RadioSubInfo<FocusableLabelElement<LP, InputElement, LabelElement>, V>> extends OmitStrong<UseCompleteListNavigationChildParameters<FocusableLabelElement<LP, InputElement, LabelElement>, M>, never> {
    radioParameters: {
        value: V;
    }
    context: RadioContext<V, any, FocusableLabelElement<LP, InputElement, LabelElement>, M>;
    checkboxLikeParameters: OmitStrong<UseCheckboxLikeParameters<LP, InputElement, LabelElement>["checkboxLikeParameters"], "checked" | "onInput" | "role">;
    labelParameters: OmitStrong<UseCheckboxLikeParameters<LP, InputElement, LabelElement>["labelParameters"], never>;
    //singleSelectionChildParameters: OmitStrong<UseCompleteListNavigationChildParameters<FocusableLabelElement<LP, InputElement, LabelElement>, M>["singleSelectionChildParameters"], "ariaPropName" | "selectionMode">
}

export interface RadioContext<V extends number | string, ParentElement extends Element, ChildElement extends Element, M extends RadioSubInfo<ChildElement, V>> extends CompleteListNavigationContext<ParentElement, ChildElement, M> {
    radioContext: {
        name: string;
        nameToIndex: Map<V, number>;
        indexToName: Map<number, V>;
    }
}

export interface UseRadioGroupReturnType<V extends string | number, GroupElement extends Element, GroupLabelElement extends Element, TabbableChildElement extends Element> extends OmitStrong<UseCompleteListNavigationReturnType<GroupElement, TabbableChildElement, RadioSubInfo<TabbableChildElement, V>>, "props"> {
    radioGroupReturn: {
        selectedIndex: number | null;
    }
    propsRadioGroup: ElementProps<GroupElement>;
    propsRadioGroupLabel: ElementProps<GroupLabelElement>;

    // override
    context: RadioContext<V, GroupElement, TabbableChildElement, RadioSubInfo<TabbableChildElement, V>>;
}

export interface RadioSubInfo<TabbableChildElement extends Element, V extends string | number> extends UseCompleteListNavigationChildInfo<TabbableChildElement> {
    //getValue2(): V;
}

export function useRadioGroup<V extends string | number, G extends Element, GL extends Element, TCE extends Element>({
    labelParameters,
    radioGroupParameters: { name, onSelectedValueChange, selectedValue },
    rovingTabIndexParameters,
    ...restParams
}: UseRadioGroupParameters<V, G, GL, TCE>): UseRadioGroupReturnType<V, G, GL, TCE> {
    monitorCallCount(useRadioGroup);

    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
    const nameToIndex = useRef(new Map<V, number>());
    const indexToName = useRef(new Map<number, V>());

    const { propsInput: propsGroup1, propsLabel } = useLabelSynthetic<G, GL>({
        labelParameters: {
            onLabelClick: useStableCallback(() => {
                rovingTabIndexReturn.focusSelf();
            }),
            ...labelParameters
        },
        randomIdLabelParameters: { prefix: Prefices.radioGroupLabel, },
        randomIdInputParameters: { prefix: Prefices.radioGroup }
    });

    useLayoutEffect(() => {
        if (selectedValue != null)
            singleSelectionReturn.changeSelectedIndex(nameToIndex.current.get(selectedValue) ?? null);
        else
            singleSelectionReturn.changeSelectedIndex(null);
    }, [selectedValue])

    const {
        context,
        props: propsGroup2,
        singleSelectionReturn,
        managedChildrenReturn,
        rovingTabIndexReturn,
        ...restRet
    } = useCompleteListNavigation<G, TCE, RadioSubInfo<TCE, V>>({
        singleSelectionParameters: { initiallySelectedIndex: selectedIndex, onSelectedIndexChange: useStableCallback((e) => { setSelectedIndex(e[EventDetail].selectedIndex); onSelectedIndexChange?.(e); }), selectionMode: "focus", ariaPropName: null },
        paginatedChildrenParameters: { paginationMin: null, paginationMax: null },
        rovingTabIndexParameters: { ...rovingTabIndexParameters, focusSelfParent: focus },
        ...restParams
    });

    const { singleSelectionParameters: { onSelectedIndexChange } } = useSingleSelectionDeclarative({
        singleSelectionReturn: {
            changeSelectedIndex: useStableCallback((s, r) => {
                singleSelectionReturn.changeSelectedIndex(s, r);

                /*let next = typeof s == "function" ? s(selectedIndex) : s;
                if (next != null) {
                    const nextValue = indexToName.current.get(next); //managedChildrenReturn.getChildren().getAt(next)?.getValue2();
                    onSelectedValueChange(nextValue as V, r);
                }
                else {
                    onSelectedValueChange(null, r);
                }*/
            })
        },
        singleSelectionDeclarativeParameters: {
            selectedIndex, 
            onSelectedIndexChange: useStableCallback((e) => {
                let i = e[EventDetail].selectedIndex;
                let value = i == undefined? undefined : indexToName.current.get(i);
                onSelectedValueChange?.(enhanceEvent(e, { selectedValue: value }));
            })
        }
    })


    const propsRadioGroup = useMergedProps(propsGroup1, propsGroup2, { role: "radiogroup" });

    return {
        propsRadioGroup,
        propsRadioGroupLabel: propsLabel,
        rovingTabIndexReturn,
        context: useMemo(() => ({
            ...context,
            radioContext: { name, indexToName: indexToName.current, nameToIndex: nameToIndex.current }
        }), [name]),
        managedChildrenReturn,
        radioGroupReturn: { selectedIndex },
        singleSelectionReturn,
        ...restRet,
    }
}

export interface UseRadioReturnType<LP extends LabelPosition, V extends string | number, I extends Element, IL extends Element, M extends RadioSubInfo<FocusableLabelElement<LP, I, IL>, V>> extends OmitStrong<UseCompleteListNavigationChildReturnType<FocusableLabelElement<LP, I, IL>, M>, "props">, UseCheckboxLikeReturnType<I, IL> {
    propsInput: ElementProps<I>;
    propsLabel: ElementProps<IL>;
}



export function useRadio<LP extends LabelPosition, InputElement extends Element, LabelElement extends Element, V extends string | number>({
    radioParameters: { value },
    checkboxLikeParameters: { disabled },
    labelParameters,
    info,
    context,
    textContentParameters,
    sortableChildParameters,
    pressParameters,
    ...void1

}: UseRadioParameters<LP, V, InputElement, LabelElement, RadioSubInfo<FocusableLabelElement<LP, InputElement, LabelElement>, V>>): UseRadioReturnType<LP, V, InputElement, LabelElement, RadioSubInfo<FocusableLabelElement<LP, InputElement, LabelElement>, V>> {
    monitorCallCount(useRadio);
    type TabbableChildElement = FocusableLabelElement<LP, InputElement, LabelElement>;
    const index = info.index;
    const onInput = useStableCallback((e: h.JSX.TargetedEvent<InputElement>) => {
        singleSelectionChildReturn.setThisOneSelected(e);
    });
    assertEmptyObject(void1);

    const { name, indexToName, nameToIndex } = context.radioContext

    const { tagInput, labelPosition } = labelParameters;

    const getValue = useStableGetter(value);
    const {
        props: listNavigationSingleSelectionChildProps,
        singleSelectionChildReturn,
        
        ...listNavRet
    } = useCompleteListNavigationChild<TabbableChildElement, RadioSubInfo<TabbableChildElement, V>>({
        info,
        context,
        sortableChildParameters,
        textContentParameters,
        pressParameters
    });


    const { selected: checked } = singleSelectionChildReturn;

    const { refElementReturn: refElementInputReturn, propsStable: propsRefInput } = useRefElement<InputElement>({ refElementParameters: {} });
    const { refElementReturn: refElementLabelReturn, propsStable: propsRefLabel } = useRefElement<LabelElement>({ refElementParameters: {} });

    const {
        propsInput,
        propsLabel,
        ...checkboxLikeRet
    } = useCheckboxLike<LabelPosition, InputElement, LabelElement>({
        checkboxLikeParameters: {
            checked: (checked ?? false),
            disabled,
            onInput: onInput,
            role: "radio"
        },
        pressParameters: {  },
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

    const propsIfInputHandlesFocus = useMergedProps<InputElement>(listNavigationSingleSelectionChildProps as ElementProps<any>, propsInput);
    const propsInput2: ElementProps<InputElement> = useMergedProps(propsRefInput, labelPosition != "wrapping" ? propsIfInputHandlesFocus : propsInput);

    const propsIfLabelHandlesFocus = useMergedProps<LabelElement>(listNavigationSingleSelectionChildProps as ElementProps<any>, propsLabel);
    const propsLabel2: ElementProps<LabelElement> = useMergedProps(propsRefLabel, labelPosition == "wrapping" ? propsIfLabelHandlesFocus as any : propsLabel as any);

    return {
        propsInput: propsInput2,
        propsLabel: propsLabel2,
        singleSelectionChildReturn,
        ...checkboxLikeRet,
        ...listNavRet
    }

}