import { EventDetail, assertEmptyObject, focus, useCompleteListNavigationChildDeclarative, useCompleteListNavigationDeclarative, useEffect, useLayoutEffect, useMemo, useMergedProps, useRef, useRefElement, useStableCallback, useState } from "preact-prop-helpers/preact";
import { Prefices, enhanceEvent, monitored } from "./props.js";
import { useCheckboxLike } from "./use-checkbox-like.js";
import { useLabelSynthetic } from "./use-label.js";
/**
 * Implements a [Radio Group](https://www.w3.org/WAI/ARIA/apg/patterns/radio/) pattern.
 *
 * @remarks Which radio is the selected one is controlled by the `selectedValue` parameter on the parent.
 *
 * @compositeParams
 *
 * @hasChild {@link useRadio}
 */
export const useRadioGroup = monitored(function useRadioGroup({ labelParameters, radioGroupParameters: { name, selectedValue, onSelectedValueChange, ...void2 }, rovingTabIndexParameters, linearNavigationParameters, typeaheadNavigationParameters, refElementParameters, singleSelectionParameters: { singleSelectionMode, ...void4 }, ...void1 }) {
    // TODO: The way this is structured causes 1 extra re-render on the parent
    // when the selectedValue changes to selectedIndex.
    const [selectedIndex, setSelectedIndex] = useState(null);
    const nameToIndex = useRef(new Map());
    const indexToName = useRef(new Map());
    useEffect(() => {
        setSelectedIndex(nameToIndex.current.get(selectedValue) ?? null);
    }, [selectedValue]);
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
    const { contextChildren, props: propsGroup2, singleSelectionReturn, multiSelectionReturn: _multiSelectionReturn, managedChildrenReturn, rovingTabIndexReturn, linearNavigationReturn, rearrangeableChildrenReturn, typeaheadNavigationReturn, childrenHaveFocusReturn, contextProcessing: _contextProcessing, refElementReturn, ...void3 } = useCompleteListNavigationDeclarative({
        singleSelectionDeclarativeParameters: {
            singleSelectedIndex: selectedIndex,
            onSingleSelectedIndexChange: useStableCallback((e) => {
                setSelectedIndex(e[EventDetail].selectedIndex);
                onSelectedValueChange?.(enhanceEvent(e, { selectedValue: indexToName.current.get(e[EventDetail].selectedIndex) }));
            }),
        },
        singleSelectionParameters: { singleSelectionMode, singleSelectionAriaPropName: null },
        multiSelectionParameters: { multiSelectionMode: "disabled", multiSelectionAriaPropName: null, onSelectionChange: null },
        paginatedChildrenParameters: { paginationMin: null, paginationMax: null },
        rovingTabIndexParameters: { ...rovingTabIndexParameters, focusSelfParent: focus },
        linearNavigationParameters,
        typeaheadNavigationParameters,
        refElementParameters
    });
    const propsRadioGroup = useMergedProps(propsGroup1, propsGroup2, { role: "radiogroup" });
    assertEmptyObject(void1);
    assertEmptyObject(void2);
    assertEmptyObject(void3);
    assertEmptyObject(void4);
    return {
        propsRadioGroup,
        propsRadioGroupLabel: propsLabel,
        rovingTabIndexReturn,
        linearNavigationReturn,
        refElementReturn,
        managedChildrenReturn,
        radioGroupReturn: { selectedIndex },
        singleSelectionReturn,
        rearrangeableChildrenReturn,
        typeaheadNavigationReturn,
        childrenHaveFocusReturn,
        context: useMemo(() => ({
            ...contextChildren,
            radioContext: { name, indexToName: indexToName.current, nameToIndex: nameToIndex.current }
        }), [name]),
    };
});
/**
 * Implements a single radio button, as part of a radio group.
 *
 * @compositeParams
 */
export const useRadio = monitored(function useRadio({ radioParameters: { value, ...void5 }, checkboxLikeParameters: { disabled, ...void4 }, labelParameters, info, context, textContentParameters, pressParameters: { longPressThreshold, ...void3 }, hasCurrentFocusParameters, refElementParameters, ...void1 }) {
    const index = info.index;
    const { name, indexToName, nameToIndex } = context.radioContext;
    const { tagInput, labelPosition } = labelParameters;
    const { pressParameters: { excludeSpace, onPressSync }, singleSelectionChildReturn, propsTabbable, propsChild: listNavigationSingleSelectionChildProps, ...listNavRet } = useCompleteListNavigationChildDeclarative({
        info: {
            focusSelf: useStableCallback((_e) => { return checkboxLikeRet.checkboxLikeReturn.focusSelf(); }),
            ...info
        },
        context,
        textContentParameters,
        hasCurrentFocusParameters,
        refElementParameters,
        singleSelectionChildParameters: { singleSelectionDisabled: !!disabled },
        multiSelectionChildParameters: { multiSelectionDisabled: true },
        multiSelectionChildDeclarativeParameters: { multiSelected: false, onMultiSelectedChange: null }
    });
    assertEmptyObject(void1);
    assertEmptyObject(void3);
    assertEmptyObject(void4);
    assertEmptyObject(void5);
    const { singleSelected: checked } = singleSelectionChildReturn;
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
    const ret = {
        propsInput: propsInput2,
        propsLabel: propsLabel2,
        singleSelectionChildReturn,
        ...checkboxLikeRet,
        ...listNavRet
    };
    return ret;
});
//# sourceMappingURL=use-radio-group.js.map