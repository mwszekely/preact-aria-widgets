import { returnNull, useCompleteGridNavigation, useCompleteGridNavigationCell, useCompleteGridNavigationRow, useMergedProps, usePassiveState, useStableCallback, useStableObject } from "preact-prop-helpers";
import { useCallback, useEffect, useRef } from "preact/hooks";
import { Prefices } from "./props.js";
import { useLabelSynthetic } from "./use-label.js";
export function useTable({ labelParameters, tableParameters: { selectionLimit, tagTable }, }) {
    const [getSortBody, setSortBody] = usePassiveState(null, returnNull);
    const sortQueue = useRef([]);
    const [getSortColumn, setSortColumn] = usePassiveState(useCallback((a) => { sortQueue.current.push(a.column); }, []), useCallback(() => { return { column: 0, direction: "ascending" }; }, []));
    const updateSortDirection = useCallback((column) => {
        const { column: currentColumn, direction: currentDirection } = getSortColumn();
        const next = { column, direction: column != currentColumn ? "ascending" : (currentDirection == "ascending" ? "descending" : "ascending") };
        setSortColumn(next);
        return next;
    }, []);
    const sortByColumn = useCallback((column) => {
        const next = updateSortDirection(column);
        getSortBody()?.();
        return next;
    }, []);
    const { propsInput: propsLabelList, propsLabel: propsLabelLabel } = useLabelSynthetic({
        labelParameters: { ...labelParameters, onLabelClick: null },
        randomIdInputParameters: { prefix: Prefices.table },
        randomIdLabelParameters: { prefix: Prefices.tableLabel }
    });
    return {
        propsTable: useMergedProps({ role: tagTable == "table" ? undefined : "grid", "aria-multiselectable": (selectionLimit == "multi" ? "true" : undefined) }, propsLabelList),
        propsLabel: propsLabelLabel,
        context: ({ tableContext: ({ sortByColumn, setSortBodyFunction: setSortBody, getCurrentSortColumn: getSortColumn }) })
    };
}
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
export function useTableSection({ linearNavigationParameters, rovingTabIndexParameters, singleSelectionParameters, gridNavigationParameters, rearrangeableChildrenParameters, paginatedChildrenParameters, staggeredChildrenParameters, tableSectionParameters: { tagTableSection, location }, context: { tableContext } }) {
    const { childrenHaveFocusReturn, context, linearNavigationReturn, managedChildrenReturn, propsStable: { ...props }, rovingTabIndexReturn, singleSelectionReturn, typeaheadNavigationReturn, staggeredChildrenReturn, rearrangeableChildrenReturn, paginatedChildrenReturn, sortableChildrenReturn } = useCompleteGridNavigation({
        linearNavigationParameters,
        rovingTabIndexParameters,
        singleSelectionParameters,
        paginatedChildrenParameters,
        staggeredChildrenParameters,
        sortableChildrenParameters: {
            compare: useCallback((lhs, rhs) => {
                return fuzzyCompare(lhs?.getSortValue?.(), rhs?.getSortValue?.());
            }, [])
        },
        typeaheadNavigationParameters: { noTypeahead: true, collator: null, typeaheadTimeout: Infinity },
        gridNavigationParameters,
        rearrangeableChildrenParameters
    });
    if (!naturalSectionTypes.has(tagTableSection)) {
        props.role = "rowgroup";
    }
    useEffect(() => {
        if (location == "body") {
            tableContext.setSortBodyFunction(() => {
                const managedRows = managedChildrenReturn.getChildren();
                return () => sortableChildrenReturn.sort(managedRows, tableContext.getCurrentSortColumn().direction);
            });
        }
    });
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
        rearrangeableChildrenReturn,
        sortableChildrenReturn,
        typeaheadNavigationReturn,
        paginatedChildrenReturn,
        propsTableSection: props
    };
}
export function useTableRow({ managedChildParameters, singleSelectionChildParameters, completeGridNavigationRowParameters, rovingTabIndexChildParameters, textContentParameters, context: cx1, tableRowParameters: { selected }, linearNavigationParameters, rovingTabIndexParameters, }) {
    const { context: cx2, managedChildrenReturn, props: { ...props }, ...restRet
    // props
     } = useCompleteGridNavigationRow({
        textContentParameters,
        context: { ...cx1 },
        managedChildParameters,
        singleSelectionChildParameters,
        completeGridNavigationRowParameters,
        rovingTabIndexChildParameters,
        sortableChildParameters: {
            getSortValue: useStableCallback(() => {
                const currentColumn = cx1.tableContext.getCurrentSortColumn().column;
                const currentChild = managedChildrenReturn.getChildren().getAt(currentColumn ?? 0);
                const sortValue = currentChild?.getSortValue();
                return sortValue;
            })
        },
        linearNavigationParameters,
        rovingTabIndexParameters,
        typeaheadNavigationParameters: { noTypeahead: true, collator: null, typeaheadTimeout: Infinity }
    });
    props.role = "row";
    // TODO: Unneeded?
    //if (selected)
    //    props[singleSelectionChildParameters.ariaPropName ?? "aria-selected"] = "true";
    return {
        context: useStableObject({
            ...cx2,
            tableContext: cx1.tableContext
        }),
        props,
        managedChildrenReturn,
        ...restRet
    };
}
export function useTableCell({ tableCellParameters: { tagTableCell }, ...p }) {
    const { props, ...ret } = useCompleteGridNavigationCell(p);
    return {
        propsFocus: props,
        propsCell: { role: (tagTableCell != "th" && tagTableCell != "td") ? "gridcell" : undefined },
        ...ret,
        tableCellReturn: {
            sortByThisColumn: useStableCallback(() => {
                return p.context.tableContext.sortByColumn(p.managedChildParameters.index);
            }, [])
        }
    };
}
//# sourceMappingURL=use-table.js.map