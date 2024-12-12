import { assertEmptyObject, returnNull, useCallback, useCompleteGridNavigation, useCompleteGridNavigationCell, useCompleteGridNavigationRow, useCompleteGridNavigationRows, useEffect, useMemoObject, useMergedProps, useMonitoring, usePassiveState, useProcessedChild, useRefElement, useStableCallback, useState } from "preact-prop-helpers";
import { Prefices } from "./props.js";
import { useLabelSynthetic } from "./use-label.js";
;
/**
 * @compositeParams
 */
export function useTable({ gridNavigationParameters, linearNavigationParameters, multiSelectionParameters, paginatedChildrenParameters, refElementParameters, rovingTabIndexParameters, singleSelectionParameters, typeaheadNavigationParameters, labelParameters, tableParameters: { tagTable, initiallySortedColumn }, gridNavigationCompleteParameters: { getSortValueAt }, processedIndexManglerParameters }) {
    return useMonitoring(function useTable() {
        ;
        // This is the function that, when called, sorts the body's children.
        // It's here to coordinate among multiple table sections (i.e. the head sorts the body, but they're siblings to each other, so we need to take care that)
        // TODO: This...should probably be useManagedChildren
        const [getRefreshRows, setRefreshRows] = usePassiveState(null, returnNull);
        const [_sortDirection, setSortDirection, getSortDirection] = useState("ascending");
        const [_sortColumn, setSortColumn, getSortColumn] = useState(initiallySortedColumn ?? undefined);
        const sortByColumn = useCallback((column) => {
            debugger;
            let nextSortDirection = getSortDirection();
            let nextSortIndex = getSortColumn();
            if (column == nextSortIndex) {
                setSortDirection(nextSortDirection = (nextSortDirection == "ascending" ? "descending" : "ascending"));
            }
            else {
                setSortColumn(nextSortIndex = column);
            }
            const sortBody = getRefreshRows();
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
        const { props, context, ...completeGridNavigationReturn } = useCompleteGridNavigation({
            gridNavigationParameters,
            linearNavigationParameters,
            multiSelectionParameters,
            paginatedChildrenParameters,
            refElementParameters,
            rovingTabIndexParameters: { ...rovingTabIndexParameters, focusSelfParent: focus },
            singleSelectionParameters,
            typeaheadNavigationParameters,
            gridNavigationCompleteParameters: { getSortColumn, getSortValueAt },
            processedIndexManglerParameters
        });
        const tableContext = useMemoObject({
            setRefreshRowsFunction: setRefreshRows,
            getCurrentSortColumn: getSortColumn,
            getCurrentSortDirection: getSortDirection,
            sortByColumn
        });
        return {
            propsTable: useMergedProps(props, propsLabelTable, { role: tagTable == "table" ? undefined : "grid", "aria-multiselectable": (multiSelectionParameters.multiSelectionMode != "disabled" ? "true" : undefined) }),
            propsLabel: propsLabelLabel,
            tableReturn: { sortByColumn },
            context: useMemoObject({
                tableContext,
                ...context
            }),
            ...completeGridNavigationReturn
        };
    });
}
const naturalSectionTypes = new Set(["thead", "tbody", "tfoot"]);
/**
 * @compositeParams
 */
export function useTableHead({ tableHeadParameters: { tagHead: tagTableSection } }) {
    const props = {};
    if (!naturalSectionTypes.has(tagTableSection)) {
        props.role = "rowgroup";
    }
    return {
        props,
        tableHeadReturn: {},
    };
}
/**
 * @compositeParams
 */
export function useTableBody({ context: processedChildrenContext, managedChildrenParameters, paginatedChildrenParameters, rearrangeableChildrenParameters, staggeredChildrenParameters, tableSectionParameters: { tagTableSection } }) {
    return useMonitoring(function useTableBody() {
        const props = {};
        const { context: contextRows, paginatedChildrenReturn, rearrangeableChildrenReturn, staggeredChildrenReturn, } = useCompleteGridNavigationRows({
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
            processedChildrenContext.tableContext.setRefreshRowsFunction(() => {
                return () => { rearrangeableChildrenReturn.refresh(); };
            });
        });
        return {
            context: useMemoObject({
                ...contextRows,
                tableProcessedChildren: useMemoObject({ location: "body" })
            }),
            rearrangeableChildrenReturn,
            paginatedChildrenReturn,
            staggeredChildrenReturn,
            propsTableSection: props
        };
    });
}
/**
 * @compositeParams
 */
export function useTableRowOuter({ context, info: { ...info }, refElementParameters: { onElementChange: oec1, onMount, onUnmount }, rearrangeableChildParameters, ...void1 }) {
    return useMonitoring(function useTableRowOuter() {
        assertEmptyObject(void1);
        const {} = context;
        const { propsStable, refElementReturn } = useRefElement({
            refElementParameters: {
                onElementChange: useStableCallback((...a) => { oec1?.(...a); oec2?.(...a); }),
                onMount,
                onUnmount
            }
        });
        const { props, ...processedChildReturn } = useProcessedChild({
            context,
            info: { getElement: refElementReturn.getElement, ...info },
            rearrangeableChildParameters,
        });
        const { managedChildReturn: { getChildren }, paginatedChildReturn: { hideBecausePaginated, parentIsPaginated }, staggeredChildReturn: { hideBecauseStaggered, parentIsStaggered, childUseEffect }, refElementParameters: { onElementChange: oec2 } } = processedChildReturn;
        return {
            ...processedChildReturn,
            refElementReturn,
            props: useMergedProps(props, propsStable),
            hide: hideBecausePaginated || hideBecauseStaggered
        };
    });
}
/**
 * @compositeParams
 */
export function useTableRow({ info, textContentParameters, context: cx1, tableRowParameters: { selected }, linearNavigationParameters, rovingTabIndexParameters, hasCurrentFocusParameters, singleSelectionChildParameters, multiSelectionChildParameters, refElementParameters, ...void1 }) {
    return useMonitoring(function useTableRow() {
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
            refElementParameters,
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
}
/**
 * @compositeParams
 */
export function useTableCell({ tableCellParameters: { tagTableCell }, info, context, gridNavigationCellParameters, textContentParameters, ...p }) {
    return useMonitoring(function useTableCell() {
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
}
//# sourceMappingURL=use-table.js.map