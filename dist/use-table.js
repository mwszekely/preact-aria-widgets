import { assertEmptyObject, focus, monitored, returnNull, useCompleteGridNavigation, useCompleteGridNavigationCell, useCompleteGridNavigationRow, useMemoObject, useMergedProps, usePassiveState, useStableCallback, useState } from "preact-prop-helpers";
import { useCallback, useEffect } from "preact/hooks";
import { Prefices } from "./props.js";
import { useLabelSynthetic } from "./use-label.js";
/**
 * Creates a sortable data table in a [Grid](https://www.w3.org/WAI/ARIA/apg/patterns/grid/) pattern.
 *
 * @remarks Note that in many cases this is overkill. If you don't need sorting and navigation between cells of interactive content, then you can just use a regular &lt;table&gt;
 *
 * @compositeParams
 *
 * @hasChild {@link useTableSection}
 * @hasChild {@link useTableRow}
 * @hasChild {@link useTableCell}
 */
export const useTable = monitored(function useTable({ labelParameters, tableParameters: { tagTable }, singleSelectionParameters: { singleSelectionMode, ...void1 }, multiSelectionParameters: { multiSelectionMode, ...void2 }, ...void3 }) {
    assertEmptyObject(void1);
    assertEmptyObject(void2);
    assertEmptyObject(void3);
    // This is the function that, when called, sorts the body's children.
    // It's here to coordinate among multiple table sections (i.e. the head sorts the body, but they're siblings to each other, so we need to take care that)
    // TODO: This...should probably be useManagedChildren
    const [getSortBody, setSortBody] = usePassiveState(null, returnNull);
    const [sortDirection, setSortDirection, getSortDirection] = useState("ascending");
    const [sortColumn, setSortColumn, getSortColumn] = useState(null);
    /*const updateSortDirection = useCallback((column: number) => {
        const { column: currentColumn, direction: currentDirection } = getSortColumn();
        const next = { column, direction: column != currentColumn ? "ascending" : (currentDirection == "ascending" ? "descending" : "ascending") } as const;
        setSortColumn(next);
        return next;
    }, []);
    const sortByColumn = useCallback((column: number) => {
        const next = updateSortDirection(column);
        getSortBody()?.();
        return next;
    }, [])*/
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
            debugger;
            console.error("An attempt was made to sort a table with a head but no body");
        }
        else {
            sortBody();
        }
        return { column: nextSortIndex, direction: nextSortDirection };
    }, []);
    const { propsInput: propsLabelList, propsLabel: propsLabelLabel } = useLabelSynthetic({
        labelParameters: { ...labelParameters, onLabelClick: null },
        randomIdInputParameters: { prefix: Prefices.table },
        randomIdLabelParameters: { prefix: Prefices.tableLabel }
    });
    return {
        propsTable: useMergedProps({ role: tagTable == "table" ? undefined : "grid", "aria-multiselectable": (multiSelectionMode != "disabled" ? "true" : undefined) }, propsLabelList),
        propsLabel: propsLabelLabel,
        context: useMemoObject({
            tableContext: useMemoObject({
                sortByColumn,
                setSortBodyFunction: setSortBody,
                getCurrentSortColumn: getSortColumn,
                getCurrentSortDirection: getSortDirection,
                singleSelectionMode,
                multiSelectionMode
            })
        })
    };
});
function fuzzyCompare(lhs, rhs) {
    if (lhs === rhs)
        return 0;
    if (lhs == null || rhs == null) {
        if (lhs == null && rhs != null)
            return -1;
        if (lhs != null && rhs == null)
            return 1;
        if (lhs === null && rhs === undefined)
            return 1;
        if (lhs === undefined && rhs === null)
            return -1;
    }
    else {
        if (lhs == rhs)
            return 0;
        if (lhs < rhs)
            return -1;
        return 1;
    }
    return 0;
}
const naturalSectionTypes = new Set(["thead", "tbody", "tfoot"]);
/**
 * @compositeParams
 */
export const useTableSection = monitored(function useTableSection({ linearNavigationParameters, rovingTabIndexParameters, singleSelectionParameters, multiSelectionParameters, gridNavigationParameters, rearrangeableChildrenParameters, paginatedChildrenParameters, staggeredChildrenParameters, tableSectionParameters: { tagTableSection, location }, typeaheadNavigationParameters, context: { tableContext, ...void3 }, refElementParameters, ...void1 }) {
    const { childrenHaveFocusReturn, context, linearNavigationReturn, managedChildrenReturn, props: { ...props }, rovingTabIndexReturn, singleSelectionReturn, multiSelectionReturn, typeaheadNavigationReturn, staggeredChildrenReturn, rearrangeableChildrenReturn, paginatedChildrenReturn, sortableChildrenReturn, ...void2 } = useCompleteGridNavigation({
        linearNavigationParameters,
        rovingTabIndexParameters: { ...rovingTabIndexParameters, focusSelfParent: focus },
        singleSelectionParameters: { ...singleSelectionParameters, singleSelectionMode: tableContext.singleSelectionMode },
        multiSelectionParameters: { ...multiSelectionParameters, multiSelectionMode: tableContext.multiSelectionMode },
        paginatedChildrenParameters,
        staggeredChildrenParameters,
        sortableChildrenParameters: {
            compare: useCallback((lhs, rhs) => {
                return fuzzyCompare(lhs?.getSortValue?.(), rhs?.getSortValue?.());
            }, [])
        },
        typeaheadNavigationParameters,
        gridNavigationParameters,
        rearrangeableChildrenParameters,
        refElementParameters,
    });
    if (!naturalSectionTypes.has(tagTableSection)) {
        props.role = "rowgroup";
    }
    useEffect(() => {
        if (location == "body") {
            tableContext.setSortBodyFunction(() => {
                return () => { sortableChildrenReturn.sort(tableContext.getCurrentSortDirection()); };
            });
        }
    });
    assertEmptyObject(void1);
    assertEmptyObject(void2);
    assertEmptyObject(void3);
    return {
        childrenHaveFocusReturn,
        context: {
            ...context,
            tableContext
        },
        staggeredChildrenReturn,
        linearNavigationReturn,
        managedChildrenReturn,
        rovingTabIndexReturn,
        singleSelectionReturn,
        multiSelectionReturn,
        rearrangeableChildrenReturn,
        sortableChildrenReturn,
        typeaheadNavigationReturn,
        paginatedChildrenReturn,
        propsTableSection: props
    };
});
/**
 * @compositeParams
 */
export const useTableRow = monitored(function useTableRow({ info, textContentParameters, context: cx1, tableRowParameters: { selected }, linearNavigationParameters, rovingTabIndexParameters, hasCurrentFocusParameters, singleSelectionChildParameters, multiSelectionChildParameters, ...void1 }) {
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
        gridNavigationSelectionSortableRowParameters: { getSortableColumnIndex: cx1.tableContext.getCurrentSortColumn },
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
export const useTableCell = monitored(function useTableCell({ tableCellParameters: { tagTableCell }, info, ...p }) {
    const { props, ...ret } = useCompleteGridNavigationCell({
        info,
        ...p
    });
    return {
        propsFocus: props,
        propsCell: { role: (tagTableCell != "th" && tagTableCell != "td") ? "gridcell" : undefined },
        ...ret,
        tableCellReturn: {
            sortByThisColumn: useStableCallback(() => {
                return p.context.tableContext.sortByColumn(info.index);
            }, [])
        }
    };
});
//# sourceMappingURL=use-table.js.map