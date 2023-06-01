import { assertEmptyObject, EventDetail, monitorCallCount, useCompleteListNavigation, useCompleteListNavigationChild, useMergedProps, useRefElement, useSingleSelectionDeclarative, useStableCallback, useStableGetter, useState } from "preact-prop-helpers";
import { useLayoutEffect, useMemo, useRef } from "preact/hooks";
import { enhanceEvent, Prefices } from "./props.js";
import { useCheckboxLike } from "./use-checkbox-like.js";
import { useLabelSynthetic } from "./use-label.js";
;
export function useRadioGroup({ labelParameters, radioGroupParameters: { name, onSelectedValueChange, selectedValue }, ...restParams }) {
    monitorCallCount(useRadioGroup);
    const [selectedIndex, setSelectedIndex] = useState(null);
    const nameToIndex = useRef(new Map());
    const indexToName = useRef(new Map());
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
    useLayoutEffect(() => {
        if (selectedValue != null)
            singleSelectionReturn.changeSelectedIndex(nameToIndex.current.get(selectedValue) ?? null);
        else
            singleSelectionReturn.changeSelectedIndex(null);
    }, [selectedValue]);
    const { context, props: propsGroup2, singleSelectionReturn, managedChildrenReturn, rovingTabIndexReturn, ...restRet } = useCompleteListNavigation({
        singleSelectionParameters: { initiallySelectedIndex: selectedIndex, onSelectedIndexChange: useStableCallback((e) => { setSelectedIndex(e[EventDetail].selectedIndex); onSelectedIndexChange?.(e); }), selectionMode: "focus", ariaPropName: null },
        paginatedChildrenParameters: { paginationMin: null, paginationMax: null },
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
                let value = i == undefined ? undefined : indexToName.current.get(i);
                onSelectedValueChange?.(enhanceEvent(e, { selectedValue: value }));
            })
        }
    });
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
    };
}
export function useRadio({ radioParameters: { value }, checkboxLikeParameters: { disabled }, labelParameters, info, context, textContentParameters, sortableChildParameters, pressParameters, ...void1 }) {
    monitorCallCount(useRadio);
    const index = info.index;
    const onInput = useStableCallback((e) => {
        singleSelectionChildReturn.setThisOneSelected(e);
    });
    assertEmptyObject(void1);
    const { name, indexToName, nameToIndex } = context.radioContext;
    const { tagInput, labelPosition } = labelParameters;
    const getValue = useStableGetter(value);
    const { props: listNavigationSingleSelectionChildProps, singleSelectionChildReturn, ...listNavRet } = useCompleteListNavigationChild({
        info,
        context,
        sortableChildParameters,
        textContentParameters,
        pressParameters
    });
    const { selected: checked } = singleSelectionChildReturn;
    const { refElementReturn: refElementInputReturn, propsStable: propsRefInput } = useRefElement({ refElementParameters: {} });
    const { refElementReturn: refElementLabelReturn, propsStable: propsRefLabel } = useRefElement({ refElementParameters: {} });
    const { propsInput, propsLabel, ...checkboxLikeRet } = useCheckboxLike({
        checkboxLikeParameters: {
            checked: (checked ?? false),
            disabled,
            onInput: onInput,
            role: "radio"
        },
        pressParameters: {},
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
        propsInput["aria-checked"] = (checked ?? false).toString();
    }
    const propsIfInputHandlesFocus = useMergedProps(listNavigationSingleSelectionChildProps, propsInput);
    const propsInput2 = useMergedProps(propsRefInput, labelPosition != "wrapping" ? propsIfInputHandlesFocus : propsInput);
    const propsIfLabelHandlesFocus = useMergedProps(listNavigationSingleSelectionChildProps, propsLabel);
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