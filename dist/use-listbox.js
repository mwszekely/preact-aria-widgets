import { monitorCallCount, useCompleteListNavigationChild, useCompleteListNavigationDeclarative, useEnsureStability, useMergedProps, usePress, useStableCallback, useStableObject } from "preact-prop-helpers";
import { EventDetail, Prefices } from "./props.js";
import { useLabelSynthetic } from "./use-label.js";
export function useListbox({ labelParameters, listboxParameters: { selectionLimit, groupingType, selectedIndex, onSelectedIndexChange, orientation }, linearNavigationParameters, singleSelectionParameters: { ariaPropName, selectionMode }, ...restParams }) {
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
    let { context, propsStable: { ...props }, rovingTabIndexReturn, singleSelectionReturn, ...restRet } = useCompleteListNavigationDeclarative({
        singleSelectionDeclarativeParameters: { selectedIndex, setSelectedIndex: onSelectedIndexChange },
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
        context: useStableObject({
            ...context,
            listboxContext: useStableObject({
                selectionLimit
            })
        }),
        rovingTabIndexReturn,
        propsListbox: useMergedProps(props, propsLabelList, { "aria-multiselectable": (selectionLimit == "multi" ? "true" : undefined) }),
        propsListboxLabel: propsLabelLabel
    };
}
export function useListboxItem({ context: { listboxContext: { selectionLimit }, ...context }, listboxParameters: { selected }, pressParameters: { onPressSync: opsu }, ...restParams }) {
    monitorCallCount(useListboxItem);
    const { pressParameters: { excludeSpace }, props, refElementReturn, ...restRet } = useCompleteListNavigationChild({
        context,
        ...restParams
    });
    const { pressReturn, props: propsPress } = usePress({
        refElementReturn,
        pressParameters: {
            onPressSync: useStableCallback((e) => {
                if (selectionLimit == "single")
                    restRet.singleSelectionChildReturn.setThisOneSelected?.(e);
                opsu?.(e);
            }),
            excludeSpace,
            focusSelf: e => e?.focus?.()
        }
    });
    if (selectionLimit == "single")
        console.assert(selected == null);
    props.role = "option";
    return {
        pressReturn,
        refElementReturn,
        props: useMergedProps(props, propsPress),
        ...restRet
    };
}
//# sourceMappingURL=use-listbox.js.map