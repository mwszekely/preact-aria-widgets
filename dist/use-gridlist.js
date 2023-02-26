import { useCompleteGridNavigation, useCompleteGridNavigationCell, useCompleteGridNavigationRow, useMergedProps, usePress, useSingleSelectionDeclarative, useStableCallback, useStableObject } from "preact-prop-helpers";
import { Prefices } from "./props.js";
import { useLabelSynthetic } from "./use-label.js";
export function useGridlist({ labelParameters, gridlistParameters: { selectionLimit, groupingType, selectedIndex, onSelectedIndexChange }, ...restParams }) {
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
    const { context, props, rovingTabIndexReturn, singleSelectionReturn, ...restRet } = useCompleteGridNavigation({
        singleSelectionParameters: { initiallySelectedIndex: selectedIndex, onSelectedIndexChange },
        ...restParams
    });
    const _v = useSingleSelectionDeclarative({ singleSelectionReturn, singleSelectionDeclarativeParameters: { selectedIndex } });
    let propsGridlist = useMergedProps(props, propsLabelList, { "aria-multiselectable": (selectionLimit == "multi" ? "true" : undefined) });
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
export function useGridlistRow({ rowAsChildOfGridParameters: { gridlistRowParameters: { selected }, ...rowAsChildOfGridParameters }, rowAsParentOfCellsParameters: { linearNavigationParameters, ...rowAsParentOfCellsParameters } }) {
    const { gridlistRowContext: { selectionLimit } } = rowAsChildOfGridParameters.context;
    const { rowAsChildOfGridReturn, rowAsParentOfCellsReturn, context: cx2, hasCurrentFocusReturn, props } = useCompleteGridNavigationRow({
        rowAsChildOfGridParameters,
        rowAsParentOfCellsParameters: {
            linearNavigationParameters: { disableHomeEndKeys: true, ...linearNavigationParameters },
            ...rowAsParentOfCellsParameters
        }
    });
    // `selected` should only be true/false for multi-selection
    if (selectionLimit != "multi")
        console.assert(selected == null);
    props.role = "option";
    return {
        rowAsChildOfGridReturn,
        rowAsParentOfCellsReturn,
        context: cx2,
        hasCurrentFocusReturn,
        props
    };
}
export function useGridlistCell({ pressParameters, ...p }) {
    const { props, ...info } = useCompleteGridNavigationCell(p);
    const { pressReturn } = usePress({
        pressParameters: { ...pressParameters, focusSelf: p.completeGridNavigationCellParameters.focusSelf },
        refElementReturn: info.refElementReturn
    });
    return {
        ...info,
        props: useMergedProps(props, pressReturn.propsUnstable),
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