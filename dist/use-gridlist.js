import { assertEmptyObject, focus, monitorCallCount, useCompleteGridNavigationCell, useCompleteGridNavigationDeclarative, useCompleteGridNavigationRow, useMemoObject, useMergedProps, usePress, useStableCallback } from "preact-prop-helpers";
import { Prefices } from "./props.js";
import { useLabelSynthetic } from "./use-label.js";
export function useGridlist({ labelParameters, gridlistParameters: { selectionLimit, groupingType, selectedIndex, onSelectedIndexChange }, rovingTabIndexParameters, ...restParams }) {
    monitorCallCount(useGridlist);
    const { propsInput: propsLabelList, propsLabel: propsLabelLabel, randomIdInputReturn: { id: _gridlistId }, randomIdLabelReturn: { id: _labelId } } = useLabelSynthetic({
        labelParameters: {
            ...labelParameters,
            onLabelClick: useStableCallback(() => {
                rovingTabIndexReturn.focusSelf();
            })
        },
        randomIdInputParameters: { prefix: Prefices.gridlist },
        randomIdLabelParameters: { prefix: Prefices.gridlistLabel }
    });
    const { context, props, rovingTabIndexReturn, singleSelectionReturn, ...restRet } = useCompleteGridNavigationDeclarative({
        singleSelectionDeclarativeParameters: { selectedIndex: selectedIndex, onSelectedIndexChange },
        rovingTabIndexParameters: { ...rovingTabIndexParameters, focusSelfParent: focus },
        ...restParams
    });
    let propsGridlist = useMergedProps(props, propsLabelList, { "aria-multiselectable": (selectionLimit == "multi" ? "true" : undefined) });
    let fullContext = useMemoObject({
        ...context,
        gridlistRowContext: useMemoObject({
            selectionLimit
        })
    });
    if (groupingType == "group")
        propsGridlist.role = "group";
    else if (groupingType == "with-groups") {
        // Intentionally clobbering all the list navigation stuff.
        propsGridlist = { role: "grid" };
        // ...actually, context too while we're at it.
        fullContext = null;
    }
    else {
        propsGridlist.role = "grid";
    }
    if (selectionLimit == "multi")
        console.assert(singleSelectionReturn.getSelectedIndex() == null);
    return {
        context: fullContext,
        rovingTabIndexReturn,
        propsGridlist,
        propsGridlistLabel: propsLabelLabel,
        ...restRet
    };
}
export function useGridlistRow({ gridlistRowParameters: { selected }, linearNavigationParameters, context: cx1, info, rovingTabIndexParameters, sortableChildParameters, textContentParameters, typeaheadNavigationParameters, ...void1 }) {
    monitorCallCount(useGridlistRow);
    assertEmptyObject(void1);
    const { gridlistRowContext: { selectionLimit } } = cx1;
    const { context: cx2, hasCurrentFocusParameters, hasCurrentFocusReturn, linearNavigationReturn, managedChildReturn, managedChildrenReturn, paginatedChildReturn, props, rovingTabIndexChildReturn, rovingTabIndexReturn, singleSelectionChildReturn, staggeredChildReturn, textContentReturn, typeaheadNavigationReturn } = useCompleteGridNavigationRow({
        linearNavigationParameters: { disableHomeEndKeys: true, ...linearNavigationParameters },
        info,
        context: cx1,
        rovingTabIndexParameters: { ...rovingTabIndexParameters, focusSelfParent: focus },
        sortableChildParameters,
        textContentParameters,
        typeaheadNavigationParameters,
    });
    // `selected` should only be true/false for multi-selection
    if (selectionLimit != "multi")
        console.assert(selected == null);
    props.role = "row";
    return {
        hasCurrentFocusParameters,
        linearNavigationReturn,
        managedChildrenReturn,
        managedChildReturn,
        paginatedChildReturn,
        rovingTabIndexChildReturn,
        rovingTabIndexReturn,
        singleSelectionChildReturn,
        staggeredChildReturn,
        textContentReturn,
        typeaheadNavigationReturn,
        context: cx2,
        hasCurrentFocusReturn,
        props
    };
}
export function useGridlistCell({ pressParameters, ...p }) {
    monitorCallCount(useGridlistCell);
    const { props, ...info } = useCompleteGridNavigationCell(p);
    const { pressReturn, props: propsPress } = usePress({
        pressParameters: { ...pressParameters, focusSelf: p.info.focusSelf },
        refElementReturn: info.refElementReturn
    });
    return {
        ...info,
        props: useMergedProps(props, propsPress, { role: "gridcell" }),
        pressReturn
    };
}
/*interface UseGridlistSectionParameters {
    gridlistSectionParameters: {
        compareRows: (lhsIndex: number, rhsIndex: number) => number;
    }
    gridlistSectionContext: {

    }
}*/
//# sourceMappingURL=use-gridlist.js.map