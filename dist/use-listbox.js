import { useCompleteListNavigation, useCompleteListNavigationChild, useEnsureStability, useMergedProps, usePress, useSingleSelectionDeclarative, useStableCallback, useStableObject } from "preact-prop-helpers";
import { EventDetail, Prefices } from "./props.js";
import { useLabelSynthetic } from "./use-label.js";
export function useListbox({ labelParameters, listboxParameters: { selectionLimit, groupingType, selectedIndex, onSelectedIndexChange }, ...restParams }) {
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
    let { context, props, rovingTabIndexReturn, singleSelectionReturn, ...restRet } = useCompleteListNavigation({
        singleSelectionParameters: { initiallySelectedIndex: selectedIndex, onSelectedIndexChange },
        ...restParams
    });
    const _v = useSingleSelectionDeclarative({
        singleSelectionDeclarativeParameters: { selectedIndex },
        singleSelectionReturn: { changeSelectedIndex: singleSelectionReturn.changeSelectedIndex }
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
        singleSelectionReturn,
        propsListbox: useMergedProps(props, propsLabelList, { "aria-multiselectable": (selectionLimit == "multi" ? "true" : undefined) }),
        propsListboxLabel: propsLabelLabel
    };
}
export function useListboxItem({ context: { listboxContext: { selectionLimit }, ...context }, listboxParameters: { selected }, pressParameters: { onPressSync: opsu }, ...restParams }) {
    const { pressParameters: { excludeSpace, onPressSync: opsss }, props, refElementReturn, ...restRet } = useCompleteListNavigationChild({
        context,
        ...restParams
    });
    const { pressReturn } = usePress({
        refElementReturn,
        pressParameters: {
            onPressSync: useStableCallback((e) => {
                if (selectionLimit == "single")
                    opsss?.(e);
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
        props: useMergedProps(props, pressReturn.propsUnstable),
        ...restRet
    };
}
//# sourceMappingURL=use-listbox.js.map