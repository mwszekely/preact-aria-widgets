import { assertEmptyObject, enhanceEvent, focus, monitorCallCount, useCompleteListNavigationChild, useCompleteListNavigationDeclarative, useEnsureStability, useMemoObject, useMergedProps, usePress, useStableCallback } from "preact-prop-helpers";
import { EventDetail, Prefices } from "./props.js";
import { useLabelSynthetic } from "./use-label.js";
export function useListbox({ labelParameters, listboxParameters: { selectionLimit, groupingType, selectedIndex, onSelectedIndexChange, orientation }, linearNavigationParameters, singleSelectionParameters: { ariaPropName, selectionMode }, rovingTabIndexParameters, ...restParams }) {
    monitorCallCount(useListbox);
    useEnsureStability("useListbox", selectionLimit);
    const { propsInput: propsLabelList, propsLabel: propsLabelLabel, randomIdInputReturn: { id: _inputId }, randomIdLabelReturn: { id: _labelId } } = useLabelSynthetic({
        labelParameters: {
            ...labelParameters,
            onLabelClick: useStableCallback(() => {
                rovingTabIndexReturn.focusSelf();
            })
        },
        randomIdInputParameters: { prefix: Prefices.listbox },
        randomIdLabelParameters: { prefix: Prefices.listboxLabel }
    });
    let { context, props: { ...props }, rovingTabIndexReturn, singleSelectionReturn, ...restRet } = useCompleteListNavigationDeclarative({
        rovingTabIndexParameters: { ...rovingTabIndexParameters, focusSelfParent: focus },
        singleSelectionDeclarativeParameters: { selectedIndex, onSelectedIndexChange },
        singleSelectionParameters: { ariaPropName: ariaPropName || "aria-selected", selectionMode: selectionMode },
        linearNavigationParameters: { arrowKeyDirection: orientation, ...linearNavigationParameters },
        ...restParams
    });
    if (groupingType == "group")
        props.role = "group";
    else if (groupingType == "with-groups") {
        // Intentionally clobbering all the list navigation stuff.
        props = { role: "listbox" };
        // ...actually, context too while we're at it.
        context = null;
    }
    else {
        props.role = "listbox";
    }
    if (selectionLimit == "multi")
        console.assert(singleSelectionReturn.getSelectedIndex() == null);
    return {
        ...restRet,
        context: useMemoObject({
            ...context,
            listboxContext: useMemoObject({
                selectionLimit
            })
        }),
        rovingTabIndexReturn,
        propsListbox: useMergedProps(props, propsLabelList, { "aria-multiselectable": (selectionLimit == "multi" ? "true" : undefined) }),
        propsListboxLabel: propsLabelLabel
    };
}
export function useListboxItem({ context: { listboxContext: { selectionLimit }, ...context }, listboxParameters: { selected, onMultiSelect }, pressParameters: { focusSelf, allowRepeatPresses, excludeEnter, excludePointer, longPressThreshold, onPressingChange, ...void1 }, ...restParams }) {
    monitorCallCount(useListboxItem);
    const { propsChild, propsTabbable, refElementReturn, pressParameters: { onPressSync, excludeSpace, ...void2 }, ...restRet } = useCompleteListNavigationChild({
        context,
        ...restParams
    });
    assertEmptyObject(void1);
    assertEmptyObject(void2);
    if (selectionLimit == "single")
        console.assert(selected == null);
    propsChild.role = "option";
    propsChild["aria-disabled"] = restParams.info.unselectable ? "true" : undefined;
    const { pressReturn, props: propsPress } = usePress({
        refElementReturn, pressParameters: {
            focusSelf,
            onPressSync: useStableCallback((e) => {
                onPressSync?.(e);
                if (selectionLimit == "multi")
                    onMultiSelect?.(enhanceEvent(e, { selected: !selected }));
            }),
            excludeSpace,
            allowRepeatPresses,
            excludeEnter,
            excludePointer,
            longPressThreshold,
            onPressingChange
        }
    });
    return {
        pressReturn,
        refElementReturn,
        props: useMergedProps(propsChild, propsTabbable, propsPress),
        ...restRet
    };
}
//# sourceMappingURL=use-listbox.js.map