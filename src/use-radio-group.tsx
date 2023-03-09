import { h } from "preact";
import { CompleteListNavigationContext, useCompleteListNavigation, useCompleteListNavigationChild, UseCompleteListNavigationChildInfo, UseCompleteListNavigationChildParameters, UseCompleteListNavigationChildReturnType, UseCompleteListNavigationParameters, UseCompleteListNavigationReturnType, useMergedProps, useRefElement, useSingleSelectionDeclarative, useStableCallback, useStableGetter, useState } from "preact-prop-helpers";
import { useEffect, useLayoutEffect, useMemo, useRef } from "preact/hooks";
import { debugLog, OmitStrong, Prefices } from "./props.js";
import { useCheckboxLike, UseCheckboxLikeParameters, UseCheckboxLikeReturnType } from "./use-checkbox-like.js";
import { FocusableLabelElement, LabelPosition, useLabelSynthetic, UseLabelSyntheticParameters } from "./use-label.js";

//export type RadioChangeEvent<E extends EventTarget, V extends number | string> = EnhancedEvent<E, Event, { selectedValue: V | undefined }>;

export interface UseRadioGroupParameters<V extends string | number, GroupElement extends Element, _GroupLabelElement extends Element, TabbableChildElement extends Element> extends OmitStrong<UseCompleteListNavigationParameters<GroupElement, TabbableChildElement, RadioSubInfo<TabbableChildElement, V>>, "paginatedChildrenParameters" | "singleSelectionParameters"> {
    radioGroupParameters: {
        name: string;

        selectedValue: V | null;
        onSelectedValueChange(value: V | null, event: Event | undefined): void;
    }
    labelParameters: OmitStrong<UseLabelSyntheticParameters["labelParameters"], "onLabelClick">;
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
        name: string;
        byName: Map<V, number>;
    }
}

export interface UseRadioGroupReturnType<V extends string | number, GroupElement extends Element, GroupLabelElement extends Element, TabbableChildElement extends Element> extends OmitStrong<UseCompleteListNavigationReturnType<GroupElement, TabbableChildElement, RadioSubInfo<TabbableChildElement, V>>, "propsStable"> {
    radioGroupReturn: {
        selectedIndex: number | null;
    }
    propsRadioGroup: h.JSX.HTMLAttributes<GroupElement>;
    propsRadioGroupLabel: h.JSX.HTMLAttributes<GroupLabelElement>;

    // override
    context: RadioContext<V, GroupElement, TabbableChildElement, RadioSubInfo<TabbableChildElement, V>>;
}

export interface RadioSubInfo<TabbableChildElement extends Element, V extends string | number> extends UseCompleteListNavigationChildInfo<TabbableChildElement> {
    getValue2(): V;
}

export function useRadioGroup<V extends string | number, G extends Element, GL extends Element, TCE extends Element>({
    labelParameters,
    radioGroupParameters: { name, onSelectedValueChange, selectedValue },
    ...restParams
}: UseRadioGroupParameters<V, G, GL, TCE>): UseRadioGroupReturnType<V, G, GL, TCE> {

    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
    const byName = useRef(new Map<V, number>());

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

    useEffect(() => {
        if (selectedValue != null)
            singleSelectionReturn.changeSelectedIndex(byName.current.get(selectedValue) ?? null);
        else
            singleSelectionReturn.changeSelectedIndex(null);
    }, [selectedValue])

    const {
        context,
        propsStable: propsGroup2,
        singleSelectionReturn,
        managedChildrenReturn,
        rovingTabIndexReturn,
        ...restRet
    } = useCompleteListNavigation<G, TCE, RadioSubInfo<TCE, V>>({
        singleSelectionParameters: { initiallySelectedIndex: selectedIndex, onSelectedIndexChange: setSelectedIndex },
        paginatedChildrenParameters: { paginationMin: null, paginationMax: null },
        ...restParams
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

    return {
        propsRadioGroup,
        propsRadioGroupLabel: propsLabel,
        rovingTabIndexReturn,
        context: useMemo(() => ({
            ...context,
            radioContext: { name, byName: byName.current }
        }), [name]),
        managedChildrenReturn,
        radioGroupReturn: { selectedIndex },
        singleSelectionReturn,
        ...restRet,
    }
}

export interface UseRadioReturnType<LP extends LabelPosition, V extends string | number, I extends Element, IL extends Element, M extends RadioSubInfo<FocusableLabelElement<LP, I, IL>, V>> extends OmitStrong<UseCompleteListNavigationChildReturnType<FocusableLabelElement<LP, I, IL>, M>, "pressParameters" | "props">, UseCheckboxLikeReturnType<I, IL> {
    propsInput: h.JSX.HTMLAttributes<I>;
    propsLabel: h.JSX.HTMLAttributes<IL>;
}



export function useRadio<LP extends LabelPosition, InputElement extends Element, LabelElement extends Element, V extends string | number>({
    radioParameters: { value },
    checkboxLikeParameters: { disabled },
    completeListNavigationChildParameters,
    labelParameters,
    managedChildParameters,
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
        singleSelectionChildReturn,
        pressParameters,
        ...listNavRet
    } = useCompleteListNavigationChild<TabbableChildElement, RadioSubInfo<TabbableChildElement, V>, never>({
        completeListNavigationChildParameters: { getValue2: getValue, ...completeListNavigationChildParameters },
        managedChildParameters,
        context,
        rovingTabIndexChildParameters,
        sortableChildParameters,
        textContentParameters,
        singleSelectionChildParameters: { selectionMode: "focus", ariaPropName: tagInput == "input" && labelPosition != "wrapping" ? null : "aria-selected", ...singleSelectionChildParameters }
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
        pressParameters,
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

    if (tagInput == "input") {
        propsInput.name = name;
        propsInput.checked = (checked ?? false);
        propsInput.type = "radio";
    }
    else {
        propsInput["aria-checked"] = (checked ?? false).toString();
    }

    const propsIfInputHandlesFocus = useMergedProps<InputElement>(listNavigationSingleSelectionChildProps as h.JSX.HTMLAttributes<any>, propsInput);
    const propsInput2: h.JSX.HTMLAttributes<InputElement> = useMergedProps(propsRefInput, labelPosition != "wrapping" ? propsIfInputHandlesFocus : propsInput);

    const propsIfLabelHandlesFocus = useMergedProps<LabelElement>(listNavigationSingleSelectionChildProps as h.JSX.HTMLAttributes<any>, propsLabel);
    const propsLabel2: h.JSX.HTMLAttributes<LabelElement> = useMergedProps(propsRefLabel, labelPosition == "wrapping" ? propsIfLabelHandlesFocus as any : propsLabel as any);

    return {
        propsInput: propsInput2,
        propsLabel: propsLabel2,
        singleSelectionChildReturn,
        ...checkboxLikeRet,
        ...listNavRet
    }

}