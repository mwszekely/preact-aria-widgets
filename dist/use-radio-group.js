import { useCompleteListNavigation, useCompleteListNavigationChild, useMergedProps, useRefElement, useSingleSelectionDeclarative, useStableCallback, useStableGetter, useState } from "preact-prop-helpers";
import { useEffect, useLayoutEffect, useMemo, useRef } from "preact/hooks";
import { debugLog, Prefices } from "./props.js";
import { useCheckboxLike } from "./use-checkbox-like.js";
import { useLabelSynthetic } from "./use-label.js";
export function useRadioGroup({ labelParameters, radioGroupParameters: { name, onSelectedValueChange, selectedValue }, ...restParams }) {
    const [selectedIndex, setSelectedIndex] = useState(null);
    const byName = useRef(new Map());
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
    useEffect(() => {
        if (selectedValue != null)
            singleSelectionReturn.changeSelectedIndex(byName.current.get(selectedValue) ?? null);
        else
            singleSelectionReturn.changeSelectedIndex(null);
    }, [selectedValue]);
    const { context, propsStable: propsGroup2, singleSelectionReturn, managedChildrenReturn, rovingTabIndexReturn, ...restRet } = useCompleteListNavigation({
        singleSelectionParameters: { initiallySelectedIndex: selectedIndex, onSelectedIndexChange: setSelectedIndex },
        paginatedChildrenParameters: { paginationMin: null, paginationMax: null },
        ...restParams
    });
    const _v = useSingleSelectionDeclarative({
        singleSelectionReturn: {
            changeSelectedIndex: useStableCallback((s, r) => {
                let next = typeof s == "function" ? s(selectedIndex) : s;
                if (next != null) {
                    const nextValue = managedChildrenReturn.getChildren().getAt(next)?.getValue2();
                    onSelectedValueChange(nextValue, r);
                }
                else {
                    onSelectedValueChange(null, r);
                }
            })
        }, singleSelectionDeclarativeParameters: { selectedIndex }
    });
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
    };
}
export function useRadio({ radioParameters: { value }, checkboxLikeParameters: { disabled }, completeListNavigationChildParameters, labelParameters, managedChildParameters, singleSelectionChildParameters, context, textContentParameters, rovingTabIndexChildParameters, sortableChildParameters }) {
    const index = managedChildParameters.index;
    debugLog("useRadio", index);
    const onInput = useStableCallback((e) => {
        singleSelectionChildReturn.setThisOneSelected(e);
    });
    const { name, byName } = context.radioContext;
    const { tagInput, labelPosition } = labelParameters;
    const getValue = useStableGetter(value);
    const { props: listNavigationSingleSelectionChildProps, singleSelectionChildReturn, pressParameters, ...listNavRet } = useCompleteListNavigationChild({
        completeListNavigationChildParameters: { getValue2: getValue, ...completeListNavigationChildParameters },
        managedChildParameters,
        context,
        rovingTabIndexChildParameters,
        sortableChildParameters,
        textContentParameters,
        singleSelectionChildParameters: { selectionMode: "focus", ariaPropName: tagInput == "input" && labelPosition != "wrapping" ? null : "aria-selected", ...singleSelectionChildParameters }
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
        pressParameters,
        labelParameters,
        randomIdInputParameters: { prefix: Prefices.radio },
        randomIdLabelParameters: { prefix: Prefices.radioLabel },
        refElementInputReturn,
        refElementLabelReturn
    });
    useLayoutEffect(() => {
        byName.set(value, index);
        return () => { byName.delete(value); };
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