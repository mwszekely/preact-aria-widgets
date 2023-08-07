import { assertEmptyObject, focus, monitorCallCount, useCompleteGridNavigationCell, useCompleteGridNavigationDeclarative, useCompleteGridNavigationRow, useMemoObject, useMergedProps, usePress, useStableCallback } from "preact-prop-helpers";
import { Prefices } from "./props.js";
import { useLabelSynthetic } from "./use-label.js";
/**
 * Implements a gridlist, effectively a [Listbox](https://www.w3.org/WAI/ARIA/apg/patterns/listbox/) enhanced with the capabilities of a [Grid](https://www.w3.org/WAI/ARIA/apg/patterns/grid/).
 *
 * @remarks A Listbox is a very limited structure, essentially being just a list with no further interactive content allowed.
 *
 * If you need a list where each list item has a menu or a button or other non-text content, a Gridlist is probably what you want.
 *
 * @compositeParams
 *
 * @hasChild {@link useGridlistRow}
 * @hasChild {@link useGridlistCell}
 */
export function useGridlist({ labelParameters, listboxParameters: { groupingType, ...void1 }, rovingTabIndexParameters, singleSelectionParameters, gridNavigationParameters, linearNavigationParameters, multiSelectionParameters, paginatedChildrenParameters, rearrangeableChildrenParameters, refElementParameters, sortableChildrenParameters, staggeredChildrenParameters, typeaheadNavigationParameters, singleSelectionDeclarativeParameters, ...void2 }) {
    monitorCallCount(useGridlist);
    assertEmptyObject(void1);
    assertEmptyObject(void2);
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
        singleSelectionDeclarativeParameters,
        rovingTabIndexParameters: { ...rovingTabIndexParameters, focusSelfParent: focus },
        gridNavigationParameters,
        linearNavigationParameters,
        multiSelectionParameters,
        paginatedChildrenParameters,
        rearrangeableChildrenParameters,
        refElementParameters,
        singleSelectionParameters,
        sortableChildrenParameters,
        staggeredChildrenParameters,
        typeaheadNavigationParameters
    });
    let propsGridlist = useMergedProps(props, propsLabelList, { "aria-multiselectable": (context.multiSelectionContext.multiSelectionMode != "disabled" ? "true" : undefined) });
    let fullContext = useMemoObject({
        ...context,
        gridlistRowContext: useMemoObject({
        //selectionLimit
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
    return {
        context: fullContext,
        rovingTabIndexReturn,
        propsGridlist,
        propsGridlistLabel: propsLabelLabel,
        ...restRet
    };
}
/**
 * @compositeParams
 *
 */
export function useGridlistRow({ gridlistRowParameters: { selected }, linearNavigationParameters, context: cx1, info, rovingTabIndexParameters, textContentParameters, typeaheadNavigationParameters, hasCurrentFocusParameters, singleSelectionChildParameters, multiSelectionChildParameters, gridNavigationSelectionSortableRowParameters, ...void1 }) {
    monitorCallCount(useGridlistRow);
    const { gridlistRowContext: {} } = cx1;
    const { context: cx2, hasCurrentFocusReturn, linearNavigationReturn, managedChildReturn, managedChildrenReturn, paginatedChildReturn, props, rovingTabIndexChildReturn, rovingTabIndexReturn, singleSelectionChildReturn, staggeredChildReturn, textContentReturn, typeaheadNavigationReturn, pressParameters, multiSelectionChildReturn, ...void2 } = useCompleteGridNavigationRow({
        linearNavigationParameters,
        info,
        context: cx1,
        rovingTabIndexParameters,
        textContentParameters,
        typeaheadNavigationParameters,
        hasCurrentFocusParameters,
        singleSelectionChildParameters,
        multiSelectionChildParameters,
        gridNavigationSelectionSortableRowParameters,
    });
    // `selected` should only be true/false for multi-selection
    if (cx1.multiSelectionContext.multiSelectionMode == "disabled")
        console.assert(selected == null);
    props.role = "row";
    assertEmptyObject(void1);
    assertEmptyObject(void2);
    return {
        pressParameters,
        linearNavigationReturn,
        managedChildrenReturn,
        managedChildReturn,
        paginatedChildReturn,
        rovingTabIndexChildReturn,
        rovingTabIndexReturn,
        singleSelectionChildReturn,
        multiSelectionChildReturn,
        staggeredChildReturn,
        textContentReturn,
        typeaheadNavigationReturn,
        context: cx2,
        hasCurrentFocusReturn,
        props
    };
}
/**
 * @compositeParams
 *
 */
export function useGridlistCell({ pressParameters: { onPressSync, longPressThreshold, onPressingChange, ...void1 }, ...p }) {
    monitorCallCount(useGridlistCell);
    const { props, ...info } = useCompleteGridNavigationCell(p);
    assertEmptyObject(void1);
    const { pressReturn, props: propsPress } = usePress({
        pressParameters: { onPressSync, focusSelf: p.info.focusSelf, allowRepeatPresses: false, excludeEnter: null, excludePointer: null, excludeSpace: info.pressParameters.excludeSpace, longPressThreshold, onPressingChange },
        refElementReturn: info.refElementReturn
    });
    return {
        ...info,
        propsPress,
        propsCell: { role: "gridcell" },
        propsTabbable: props,
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