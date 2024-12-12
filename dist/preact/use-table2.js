import { assertEmptyObject, monitored, returnNull, useCallback, useCompleteGridNavigation, useCompleteGridNavigationCell, useCompleteGridNavigationRow, useCompleteGridNavigationRows, useEffect, useMemoObject, useMergedProps, usePassiveState, useStableCallback, useState } from "preact-prop-helpers";
import { Prefices } from "./props.js";
import { useLabelSynthetic } from "./use-label.js";
export function useTable({ gridNavigationParameters, linearNavigationParameters, multiSelectionParameters, paginatedChildrenParameters, refElementParameters, rovingTabIndexParameters, singleSelectionParameters, typeaheadNavigationParameters, labelParameters, tableParameters: { tagTable } }) {
    // This is the function that, when called, sorts the body's children.
    // It's here to coordinate among multiple table sections (i.e. the head sorts the body, but they're siblings to each other, so we need to take care that)
    // TODO: This...should probably be useManagedChildren
    const [getSortBody, setSortBody] = usePassiveState(null, returnNull);
    const [_sortDirection, setSortDirection, getSortDirection] = useState("ascending");
    const [_sortColumn, setSortColumn, getSortColumn] = useState(null);
    const sortByColumn = useCallback((column) => {
        let nextSortDirection = getSortDirection();
        let nextSortIndex = getSortColumn();
        if (column == nextSortIndex) {
            setSortDirection(nextSortDirection = (nextSortDirection == "ascending" ? "descending" : "ascending"));
        }
        else {
            setSortColumn(nextSortIndex = column);
        }
        const sortBody = getSortBody();
        console.assert(!!sortBody);
        if (!sortBody) {
            /* eslint-disable no-debugger */
            debugger;
            console.error("An attempt was made to sort a table with a head but no body");
        }
        else {
            sortBody();
        }
        return { column: nextSortIndex, direction: nextSortDirection };
    }, []);
    const { propsInput: propsLabelTable, propsLabel: propsLabelLabel } = useLabelSynthetic({
        labelParameters: { ...labelParameters, onLabelClick: null },
        randomIdInputParameters: { prefix: Prefices.table },
        randomIdLabelParameters: { prefix: Prefices.tableLabel }
    });
    const { props, contextChildren, contextProcessing, ...completeGridNavigationReturn } = useCompleteGridNavigation({
        gridNavigationParameters,
        linearNavigationParameters,
        multiSelectionParameters,
        paginatedChildrenParameters,
        refElementParameters,
        rovingTabIndexParameters: { ...rovingTabIndexParameters, focusSelfParent: focus },
        singleSelectionParameters,
        typeaheadNavigationParameters
    });
    const tableContext = useMemoObject({
        setSortBodyFunction: setSortBody,
        getCurrentSortColumn: getSortColumn,
        getCurrentSortDirection: getSortDirection,
        sortByColumn
    });
    return {
        propsTable: useMergedProps(props, propsLabelTable, { role: tagTable == "table" ? undefined : "grid", "aria-multiselectable": (multiSelectionParameters.multiSelectionMode != "disabled" ? "true" : undefined) }),
        propsLabel: propsLabelLabel,
        tableReturn: { sortByColumn },
        contextChildren: useMemoObject({
            tableContext,
            ...contextChildren
        }),
        contextProcessing: useMemoObject({
            tableContext,
            ...contextProcessing
        }),
        ...completeGridNavigationReturn
    };
}
const naturalSectionTypes = new Set(["thead", "tbody", "tfoot"]);
export function useTableHead({ tableHeadParameters: { tagHead: tagTableSection } }) {
    const props = {};
    if (!naturalSectionTypes.has(tagTableSection)) {
        props.role = "rowgroup";
    }
    return {
        props,
        tableHeadReturn: {},
        contextLocation: useMemoObject({ location: "head" })
    };
}
export function useTableBody({ context: processedChildrenContext, managedChildrenParameters, paginatedChildrenParameters, rearrangeableChildrenParameters, staggeredChildrenParameters, tableSectionParameters: { tagTableSection } }) {
    const props = {};
    const { context: contextRows, paginatedChildrenReturn, rearrangeableChildrenReturn, staggeredChildrenReturn } = useCompleteGridNavigationRows({
        context: processedChildrenContext,
        managedChildrenParameters,
        paginatedChildrenParameters,
        rearrangeableChildrenParameters,
        staggeredChildrenParameters
    });
    if (!naturalSectionTypes.has(tagTableSection)) {
        props.role = "rowgroup";
    }
    useEffect(() => {
        processedChildrenContext.tableContext.setSortBodyFunction(() => {
            return () => { rearrangeableChildrenReturn.sort(processedChildrenContext.tableContext.getCurrentSortDirection()); };
        });
    });
    return {
        context: contextRows,
        rearrangeableChildrenReturn,
        paginatedChildrenReturn,
        staggeredChildrenReturn,
        propsTableSection: props,
        contextLocation: useMemoObject({ location: "body" })
    };
}
/**
 * @compositeParams
 */
export const useTableRow = /* @__PURE__ */ monitored(function useTableRow({ info, textContentParameters, context: cx1, tableRowParameters: { selected }, linearNavigationParameters, rovingTabIndexParameters, hasCurrentFocusParameters, singleSelectionChildParameters, multiSelectionChildParameters, ...void1 }) {
    assertEmptyObject(void1);
    const { context: cx2, managedChildrenReturn, props: { ...props }, ...restRet
    // props
     } = useCompleteGridNavigationRow({
        textContentParameters,
        hasCurrentFocusParameters,
        context: { ...cx1 },
        info,
        linearNavigationParameters,
        rovingTabIndexParameters,
        singleSelectionChildParameters,
        multiSelectionChildParameters,
        // gridNavigationSelectionSortableRowParameters: { getSortableColumnIndex: cx1.tableContext.getCurrentSortColumn },
        typeaheadNavigationParameters: { noTypeahead: true, collator: null, typeaheadTimeout: Infinity, onNavigateTypeahead: null }
    });
    props.role = "row";
    // TODO: Unneeded?
    if (selected) {
        switch (cx1.singleSelectionContext.singleSelectionAriaPropName) {
            case "aria-checked":
            case "aria-pressed":
            case "aria-selected":
                props[cx1.singleSelectionContext.singleSelectionAriaPropName ?? "aria-selected"] = "true";
                break;
            default: {
                console.assert(false, cx1.singleSelectionContext.singleSelectionAriaPropName + " is not valid for multi-select -- prefer checked, selected, or pressed");
            }
        }
    }
    return {
        context: useMemoObject({
            ...cx2,
            tableContext: cx1.tableContext
        }),
        props,
        managedChildrenReturn,
        ...restRet
    };
});
/**
 * @compositeParams
 */
export const useTableCell = /* @__PURE__ */ monitored(function useTableCell({ tableCellParameters: { tagTableCell }, info, context, gridNavigationCellParameters, textContentParameters, ...p }) {
    assertEmptyObject(p);
    const { props, ...ret } = useCompleteGridNavigationCell({
        info,
        context,
        gridNavigationCellParameters,
        textContentParameters,
    });
    return {
        propsFocus: props,
        propsCell: { role: (tagTableCell != "th" && tagTableCell != "td") ? "gridcell" : undefined },
        ...ret,
        tableCellReturn: {
            sortByThisColumn: useStableCallback(() => {
                return context.tableContext.sortByColumn(info.index);
            }, [])
        }
    };
});
//# sourceMappingURL=use-table2.js.map