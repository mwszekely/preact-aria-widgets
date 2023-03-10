import { monitorCallCount, useCompleteGridNavigation, useCompleteGridNavigationCell, useCompleteGridNavigationRow, useMergedProps, usePress, useSingleSelectionDeclarative, useStableCallback, useStableObject } from "preact-prop-helpers";
import { Prefices } from "./props.js";
import { useLabelSynthetic } from "./use-label.js";
export function useGridlist({ labelParameters, gridlistParameters: { selectionLimit, groupingType, selectedIndex, onSelectedIndexChange }, ...restParams }) {
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
    const { context, propsStable, rovingTabIndexReturn, singleSelectionReturn, ...restRet } = useCompleteGridNavigation({
        singleSelectionParameters: { initiallySelectedIndex: selectedIndex, onSelectedIndexChange },
        ...restParams
    });
    const _v = useSingleSelectionDeclarative({ singleSelectionReturn, singleSelectionDeclarativeParameters: { selectedIndex } });
    let propsGridlist = useMergedProps(propsStable, propsLabelList, { "aria-multiselectable": (selectionLimit == "multi" ? "true" : undefined) });
    let fullContext = useStableObject({
        ...context,
        gridlistRowContext: useStableObject({
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
        singleSelectionReturn,
        propsGridlist,
        propsGridlistLabel: propsLabelLabel,
        ...restRet
    };
}
export function useGridlistRow({ gridlistRowParameters: { selected }, linearNavigationParameters, completeGridNavigationRowParameters, context: cx1, managedChildParameters, rovingTabIndexChildParameters, rovingTabIndexParameters, singleSelectionChildParameters, sortableChildParameters, textContentParameters, typeaheadNavigationParameters }) {
    monitorCallCount(useGridlistRow);
    const { gridlistRowContext: { selectionLimit } } = cx1;
    const { context: cx2, hasCurrentFocusParameters, hasCurrentFocusReturn, linearNavigationReturn, managedChildReturn, managedChildrenReturn, paginatedChildReturn, props, rovingTabIndexChildReturn, rovingTabIndexReturn, singleSelectionChildReturn, staggeredChildReturn, textContentReturn, typeaheadNavigationReturn } = useCompleteGridNavigationRow({
        linearNavigationParameters: { disableHomeEndKeys: true, ...linearNavigationParameters },
        completeGridNavigationRowParameters,
        context: cx1,
        managedChildParameters,
        rovingTabIndexChildParameters,
        rovingTabIndexParameters,
        singleSelectionChildParameters,
        sortableChildParameters,
        textContentParameters,
        typeaheadNavigationParameters
    });
    // `selected` should only be true/false for multi-selection
    if (selectionLimit != "multi")
        console.assert(selected == null);
    props.role = "option";
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
        pressParameters: { ...pressParameters, focusSelf: p.completeGridNavigationCellParameters.focusSelf },
        refElementReturn: info.refElementReturn
    });
    return {
        ...info,
        props: useMergedProps(props, propsPress),
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