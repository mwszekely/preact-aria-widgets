import { EventDetail, assertEmptyObject, focus, monitorCallCount, useCompleteListNavigationChild, useCompleteListNavigationDeclarative, useMergedProps, useRefElement, useStableCallback, useStableGetter, useState } from "preact-prop-helpers";
import { useEffect, useLayoutEffect, useMemo, useRef } from "preact/hooks";
import { Prefices, enhanceEvent } from "./props.js";
import { useCheckboxLike } from "./use-checkbox-like.js";
import { useLabelSynthetic } from "./use-label.js";
;
/**
 * Implements a [Radio Group](https://www.w3.org/WAI/ARIA/apg/patterns/radio/) pattern.
 *
 * @compositeParams
 *
 * @hasChild {@link useRadio}
 */
export function useRadioGroup({ labelParameters, radioGroupParameters: { name, selectedValue, onSelectedValueChange, ...void2 }, rovingTabIndexParameters, linearNavigationParameters, rearrangeableChildrenParameters, sortableChildrenParameters, staggeredChildrenParameters, typeaheadNavigationParameters, refElementParameters, ...void1 }) {
    monitorCallCount(useRadioGroup);
    // TODO: The way this is structured causes 1 extra re-render on the parent
    // when the selectedValue changes to selectedIndex.
    const [selectedIndex, setSelectedIndex] = useState(null);
    const nameToIndex = useRef(new Map());
    const indexToName = useRef(new Map());
    useEffect(() => {
        setSelectedIndex(nameToIndex.current.get(selectedValue) ?? null);
    }, [selectedValue]);
    /*const {
        asyncHandlerReturn,
        propsProgressIndicator,
        propsProgressRegion,
        propsProgressLabel: propsProgressLabel
    } = useProgressWithHandler<TargetedRadioChangeEvent<V>, V | null, ProgressIndicatorType, ProgressLabelType>({
        asyncHandlerParameters: {
            ...asyncHandlerParameters,
            capture: useCallback((e: TargetedRadioChangeEvent<V>) => { return getEventDetail<RadioChangeEventDetail<V>>(e).selectedValue as V; }, [])
        },
        labelParameters,
        progressIndicatorParameters,
        progressWithHandlerParameters
    });*/
    const { propsInput: propsGroup1, propsLabel } = useLabelSynthetic({
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
    const { context, props: propsGroup2, singleSelectionReturn, managedChildrenReturn, rovingTabIndexReturn, linearNavigationReturn, paginatedChildrenReturn, rearrangeableChildrenReturn, sortableChildrenReturn, staggeredChildrenReturn, typeaheadNavigationReturn, childrenHaveFocusReturn, ...void3 } = useCompleteListNavigationDeclarative({
        singleSelectionDeclarativeParameters: {
            selectedIndex,
            onSelectedIndexChange: useStableCallback((e) => {
                setSelectedIndex(e[EventDetail].selectedIndex);
                onSelectedValueChange?.(enhanceEvent(e, { selectedValue: indexToName.current.get(e[EventDetail].selectedIndex) }));
            }),
        },
        singleSelectionParameters: { selectionMode: "focus", ariaPropName: null },
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
    };
}
/**
 * @compositeParams
 */
export function useRadio({ radioParameters: { value, ...void5 }, checkboxLikeParameters: { disabled, ...void4 }, labelParameters, info, context, textContentParameters, pressParameters: { longPressThreshold, ...void3 }, hasCurrentFocusParameters, refElementParameters, ...void1 }) {
    monitorCallCount(useRadio);
    const index = info.index;
    /*const onInput = useStableCallback((e: EventType<InputElement, Event>) => {
        onPressSync?.(e as PressEventReason<any>);
    });*/
    const { name, indexToName, nameToIndex } = context.radioContext;
    const { tagInput, labelPosition } = labelParameters;
    const getValue = useStableGetter(value);
    const { propsChild: listNavigationSingleSelectionChildProps, propsTabbable, singleSelectionChildReturn, pressParameters: { onPressSync, excludeSpace, ...void2 }, ...listNavRet } = useCompleteListNavigationChild({
        info: {
            focusSelf: useStableCallback((e) => { return checkboxLikeRet.checkboxLikeReturn.focusSelf(); }),
            ...info
        },
        context,
        textContentParameters,
        hasCurrentFocusParameters,
        refElementParameters
    });
    assertEmptyObject(void1);
    assertEmptyObject(void2);
    assertEmptyObject(void3);
    assertEmptyObject(void4);
    assertEmptyObject(void5);
    const { selected: checked } = singleSelectionChildReturn;
    const { refElementReturn: refElementInputReturn, propsStable: propsRefInput } = useRefElement({ refElementParameters: {} });
    const { refElementReturn: refElementLabelReturn, propsStable: propsRefLabel } = useRefElement({ refElementParameters: {} });
    const { propsInput, propsLabel, ...checkboxLikeRet } = useCheckboxLike({
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
        };
    }, [value, index]);
    if (tagInput == "input") {
        propsInput.name = name;
        propsInput.checked = (checked ?? false);
        propsInput.type = "radio";
    }
    else {
        propsInput["aria-checked"] = (checked ?? false);
    }
    const propsIfInputHandlesFocus = useMergedProps(listNavigationSingleSelectionChildProps, propsTabbable, propsInput);
    const propsInput2 = useMergedProps(propsRefInput, labelPosition != "wrapping" ? propsIfInputHandlesFocus : propsInput);
    const propsIfLabelHandlesFocus = useMergedProps(listNavigationSingleSelectionChildProps, propsTabbable, propsLabel);
    const propsLabel2 = useMergedProps(propsRefLabel, labelPosition == "wrapping" ? propsIfLabelHandlesFocus : propsLabel);
    return {
        propsInput: propsInput2,
        propsLabel: propsLabel2,
        singleSelectionChildReturn,
        ...checkboxLikeRet,
        ...listNavRet
    };
}
//# sourceMappingURL=use-radio-group.js.map