import { returnNull, useCompleteGridNavigation, useCompleteGridNavigationCell, useCompleteGridNavigationRow, useMergedProps, usePassiveState, useStableCallback } from "preact-prop-helpers";
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
    //const { tagInput: tagTable } = labelParameters
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
    const { childrenHaveFocusReturn, context, linearNavigationReturn, managedChildrenReturn, props, rovingTabIndexReturn, singleSelectionReturn, typeaheadNavigationReturn, staggeredChildrenReturn, rearrangeableChildrenReturn, paginatedChildrenReturn, sortableChildrenReturn } = useCompleteGridNavigation({
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
    /*const sort = useCallback((column: number) => {
        const ret = tableContext.updateSortDirection(column)
        sortableChildrenReturn.sort(managedChildrenReturn.getChildren(), ret.direction);
        return ret;
    }, [])*/
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
export function useTableRow({ rowAsChildOfGridParameters: { managedChildParameters, singleSelectionChildParameters, completeGridNavigationRowParameters, rovingTabIndexChildParameters, textContentParameters, context: cx1 }, rowAsParentOfCellsParameters: { linearNavigationParameters, rovingTabIndexParameters }, tableRowParameters: { selected } }) {
    const { context: cx2, hasCurrentFocusReturn, rowAsChildOfGridReturn, rowAsParentOfCellsReturn, props } = useCompleteGridNavigationRow({
        rowAsChildOfGridParameters: {
            textContentParameters,
            context: { ...cx1 },
            managedChildParameters,
            singleSelectionChildParameters,
            completeGridNavigationRowParameters,
            rovingTabIndexChildParameters,
            sortableChildParameters: {
                getSortValue: useStableCallback(() => {
                    const currentColumn = cx1.tableContext.getCurrentSortColumn().column;
                    const currentChild = rowAsParentOfCellsReturn.managedChildrenReturn.getChildren().getAt(currentColumn ?? 0);
                    const sortValue = currentChild?.getSortValue();
                    return sortValue;
                })
            }
        },
        rowAsParentOfCellsParameters: {
            linearNavigationParameters,
            rovingTabIndexParameters,
            typeaheadNavigationParameters: { noTypeahead: true, collator: null, typeaheadTimeout: Infinity }
        }
    });
    props.role = "row";
    // TODO: Unneeded?
    //if (selected)
    //    props[singleSelectionChildParameters.ariaPropName ?? "aria-selected"] = "true";
    return {
        rowAsChildOfGridReturn,
        rowAsParentOfCellsReturn,
        context: {
            ...cx2,
            tableContext: cx1.tableContext
        },
        hasCurrentFocusReturn,
        props
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
/*
export interface UseTableSectionSectionParameters {
    gridlistSectionParameters: {
        compareRows: (lhsIndex: number, rhsIndex: number) => number;
    }
    gridlistSectionContext: {

    }
}*/
/*
export const useTableSectionSection = <BodySectionElement extends Element, RowElement extends Element>({ compareRows }: UseTableSectionSectionParameters) => {
    //debugLog("useTableSectionSection");
    //type CRFull = UseRovingTabIndexSubInfo<RowElement, UseListNavigationSubInfo<UseTableRowSubInfo<CellElement, CR, CC>>>;
    const getIndex = useCallback<GetIndex<any>>((i) => i.props.index, []);


    const {
        linearNavigationParameters,
        rearrangeableChildrenReturn,
        sortableChildrenReturn
    } = useSortableChildren<BodySectionElement, TableRowInfo<RowElement>>({
        rearrangeableChildrenParameters: {
            getIndex,
            getHighestChildIndex,
            getValid
        },
        sortableChildrenParameters: {
            compare: (lhs, rhs) => {
                if (lhs.locationIndex === rhs.locationIndex)
                    return compareRows(lhs.index, rhs.index);
                return lhs.locationIndex - rhs.locationIndex;
            }
        }
    });

    const useTableSectionSectionProps = (props: h.JSX.HTMLAttributes<BodySectionElement>) => {
        console.assert(props.children != null);
        overwriteWithWarning("useTableSectionSection", props, "role", "rowgroup");
        return useSortableProps(props as h.JSX.HTMLAttributes<BodySectionElement> & { children: any });
    }

    return {
        useTableSectionSectionProps,
        ...sortableRet
    }
}*/
//# sourceMappingURL=use-table.js.map