import { h } from "preact";
import {
    Compare,
    CompleteGridNavigationContext,
    CompleteGridNavigationRowContext, GridSingleSelectSortableChildCellInfo, GridSingleSelectSortableChildRowInfo, PassiveStateUpdater, returnNull, useCompleteGridNavigation,
    useCompleteGridNavigationCell, UseCompleteGridNavigationCellInfo, UseCompleteGridNavigationCellParameters, UseCompleteGridNavigationCellReturnType, UseCompleteGridNavigationParameters,
    UseCompleteGridNavigationReturnType, useCompleteGridNavigationRow, UseCompleteGridNavigationRowInfo, UseCompleteGridNavigationRowParameters, UseCompleteGridNavigationRowReturnType, useMergedProps, usePassiveState, useStableCallback
} from "preact-prop-helpers";
import { useCallback, useEffect, useRef } from "preact/hooks";
import { ElementToTag, OmitStrong, Prefices } from "./props";
import { useLabelSynthetic, UseLabelSyntheticParameters } from "./use-label";
import { UseListboxParameters } from "./use-listbox";

//export type ListboxSingleSelectEvent<E extends EventTarget> = { [EventDetail]: { selectedIndex: number } } & Pick<h.JSX.TargetedEvent<E>, "target" | "currentTarget">;

export interface UseTableContext {
    tableContext: {
        setSortBodyFunction: PassiveStateUpdater<() => void, never>;
        sortByColumn(column: number): SortInfo;
        getCurrentSortColumn(): SortInfo;
    }
}

export interface UseTableSectionContext<TableSectionElement extends Element, TableRowElement extends Element, TableCellElement extends Element, RM extends TableRowInfo<TableRowElement, TableCellElement>, CM extends TableCellInfo<TableCellElement>> extends CompleteGridNavigationContext<TableSectionElement, TableRowElement, TableCellElement, RM, CM>, UseTableContext {

    //tableSectionContext: { sort: (column: number) => SortInfo; }
}

export interface UseTableSectionParameters<TableSectionElement extends Element, TableRowElement extends Element, TableCellElement extends Element, RM extends TableRowInfo<TableRowElement, TableCellElement>> extends OmitStrong<UseCompleteGridNavigationParameters<TableSectionElement, TableRowElement, TableCellElement, RM>, "typeaheadNavigationParameters" | "sortableChildrenParameters"> {
    tableSectionParameters: {
        location: "head" | "body" | "foot";
        tagTableSection: ElementToTag<TableSectionElement>;
    }
    context: UseTableContext;
}
export interface UseTableSectionReturnType<TableSectionElement extends Element, TableRowElement extends Element, TableCellElement extends Element, RM extends TableRowInfo<TableRowElement, TableCellElement>, CM extends TableCellInfo<TableCellElement>> extends OmitStrong<UseCompleteGridNavigationReturnType<TableSectionElement, TableRowElement, TableCellElement, RM, CM>, "props"> {
    propsTableSection: h.JSX.HTMLAttributes<TableSectionElement>;
    context: UseTableSectionContext<TableSectionElement, TableRowElement, TableCellElement, RM, CM>;
}
export interface UseTableRowReturnType<TableRowElement extends Element, TableCellElement extends Element, RM extends TableRowInfo<TableRowElement, TableCellElement>, CM extends TableCellInfo<TableCellElement>> extends UseCompleteGridNavigationRowReturnType<TableRowElement, TableCellElement, RM, CM> {

    context: UseTableRowContext<any, TableCellElement, CM>;

}
export interface UseTableRowParameters<TableRowElement extends Element, TableCellElement extends Element, RM extends TableRowInfo<TableRowElement, TableCellElement>, CM extends TableCellInfo<TableCellElement>> {
    rowAsChildOfGridParameters: OmitStrong<UseCompleteGridNavigationRowParameters<TableRowElement, TableCellElement, RM, CM>["rowAsChildOfGridParameters"], "sortableChildParameters" | "context"> & {
        context: UseTableSectionContext<any, TableRowElement, TableCellElement, RM, CM>;
    };
    rowAsParentOfCellsParameters: OmitStrong<UseCompleteGridNavigationRowParameters<TableRowElement, TableCellElement, RM, CM>["rowAsParentOfCellsParameters"], "typeaheadNavigationParameters">;
    tableRowParameters: {
        /**
         * When the `selectionLimit` is `"single"`, this must be `null`.
         */
        selected: boolean | null;
        tagTableRow: ElementToTag<TableRowElement>;
    }
}

//export interface UseTableRowContext<TableSectionElement extends Element, TableRowElement extends Element, M extends TableRowInfo<TableRowElement>> extends CompleteGridNavigationContext<TableSectionElement, TableRowElement, M> {}
export interface UseTableRowContext<TableRowElement extends Element, TableCellElement extends Element, M extends TableCellInfo<TableCellElement>> extends CompleteGridNavigationRowContext<TableRowElement, TableCellElement, M> {
    tableContext: UseTableContext["tableContext"];
}


export interface UseTableCellReturnType<TableCellElement extends Element, CM extends TableCellInfo<TableCellElement>> extends UseCompleteGridNavigationCellReturnType<TableCellElement, CM> {
    tableCellReturn: {
        sortByThisColumn(): SortInfo;
    }
}
export interface UseTableCellParameters<TableCellElement extends Element, CM extends TableCellInfo<TableCellElement>> extends UseCompleteGridNavigationCellParameters<TableCellElement, CM> {
    tableCellParameters: {
        tagTableCell: ElementToTag<TableCellElement>;
    }
    context: UseTableRowContext<any, TableCellElement, CM>;
}

export interface TableRowInfo<TableRowElement extends Element, TableCellElement extends Element> extends UseCompleteGridNavigationRowInfo<TableRowElement, TableCellElement> { }
export interface TableCellInfo<TableCellElement extends Element> extends UseCompleteGridNavigationCellInfo<TableCellElement> {
    getSortValue(): unknown;
}

export interface UseTableParameters<TableElement extends Element, LabelElement extends Element> {
    labelParameters: OmitStrong<UseLabelSyntheticParameters["labelParameters"], "onLabelClick">;
    tableParameters: Pick<UseListboxParameters<TableElement, any, LabelElement, any>["listboxParameters"], "selectionLimit"> & {
        tagTable: ElementToTag<TableElement>;
    };
}

export interface UseTableReturnType<TableElement extends Element, LabelElement extends Element> {
    propsTable: h.JSX.HTMLAttributes<TableElement>;
    propsLabel: h.JSX.HTMLAttributes<LabelElement>;
    context: UseTableContext;
}

// export interface UseTableSectionContext<TableSectionElement extends Element, TableRowElement extends Element, M extends TableRowInfo<TableRowElement>> extends CompleteGridNavigationContext<TableSectionElement, TableRowElement, M> { }

interface SortInfo { column: number, direction: "ascending" | "descending" }

export function useTable<TableElement extends Element, LabelElement extends Element>({
    labelParameters,
    tableParameters: { selectionLimit, tagTable },
}: UseTableParameters<TableElement, LabelElement>): UseTableReturnType<TableElement, LabelElement> {
    const [getSortBody, setSortBody] = usePassiveState<() => void, never>(null, returnNull as (() => never));
    const sortQueue = useRef<number[]>([]);
    const [getSortColumn, setSortColumn] = usePassiveState<SortInfo, Event>(useCallback((a: SortInfo) => { sortQueue.current.push(a.column); }, []), useCallback(() => { return { column: 0, direction: "ascending" } as const }, []))
    const updateSortDirection = useCallback((column: number) => {
        const { column: currentColumn, direction: currentDirection } = getSortColumn();
        const next = { column, direction: column != currentColumn ? "ascending" : (currentDirection == "ascending" ? "descending" : "ascending") } as const;
        setSortColumn(next);
        return next;
    }, []);
    const sortByColumn = useCallback((column: number) => {
        const next = updateSortDirection(column);
        getSortBody()?.();
        return next;
    }, [])
    //const { tagInput: tagTable } = labelParameters
    const {
        propsInput: propsLabelList,
        propsLabel: propsLabelLabel
    } = useLabelSynthetic<TableElement, LabelElement>({
        labelParameters: { ...labelParameters, onLabelClick: null },
        randomIdInputParameters: { prefix: Prefices.table },
        randomIdLabelParameters: { prefix: Prefices.tableLabel }
    });

    return {
        propsTable: useMergedProps({ role: tagTable == "table" ? undefined : "grid", "aria-multiselectable": (selectionLimit == "multi" ? "true" : undefined) }, propsLabelList),
        propsLabel: propsLabelLabel,
        context: ({ tableContext: ({ sortByColumn, setSortBodyFunction: setSortBody, getCurrentSortColumn: getSortColumn }) })
    }
}
function fuzzyCompare(lhs: any, rhs: any): number {
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
const naturalSectionTypes = new Set<keyof h.JSX.IntrinsicElements>(["thead", "tbody", "tfoot"]);
export function useTableSection<TableSectionElement extends Element, TableRowElement extends Element, TableCellElement extends Element, RM extends TableRowInfo<TableRowElement, TableCellElement>, CM extends TableCellInfo<TableCellElement>>({
    linearNavigationParameters,
    rovingTabIndexParameters,
    singleSelectionParameters,
    gridNavigationParameters,
    rearrangeableChildrenParameters,
    paginatedChildrenParameters,
    staggeredChildrenParameters,
    tableSectionParameters: { tagTableSection, location },
    context: { tableContext }
}: UseTableSectionParameters<TableSectionElement, TableRowElement, TableCellElement, RM>): UseTableSectionReturnType<TableSectionElement, TableRowElement, TableCellElement, RM, CM> {
    const {
        childrenHaveFocusReturn,
        context,
        linearNavigationReturn,
        managedChildrenReturn,
        props,
        rovingTabIndexReturn,
        singleSelectionReturn,
        typeaheadNavigationReturn,
        rearrangeableChildrenReturn,
        paginatedChildrenReturn,
        sortableChildrenReturn
    } = useCompleteGridNavigation<TableSectionElement, TableRowElement, TableCellElement, RM, CM>({
        linearNavigationParameters,
        rovingTabIndexParameters,
        singleSelectionParameters,
        paginatedChildrenParameters,
        staggeredChildrenParameters,
        sortableChildrenParameters: {
            compare: useCallback<Compare<RM>>((lhs, rhs) => {
                return fuzzyCompare(lhs?.getSortValue?.(), rhs?.getSortValue?.());
            }, [])
        },
        typeaheadNavigationParameters: { noTypeahead: true, collator: null, typeaheadTimeout: Infinity },
        gridNavigationParameters,
        rearrangeableChildrenParameters
    });

    if (!naturalSectionTypes.has(tagTableSection as any)) {
        props.role = "rowgroup";
    }



    useEffect(() => {
        if (location == "body") {
            tableContext.setSortBodyFunction(() => {
                const managedRows = managedChildrenReturn.getChildren();
                return () => sortableChildrenReturn.sort(managedRows, tableContext.getCurrentSortColumn().direction);
            })
        }
    })

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
        linearNavigationReturn,
        managedChildrenReturn,
        rovingTabIndexReturn,
        singleSelectionReturn,
        rearrangeableChildrenReturn,
        sortableChildrenReturn,
        typeaheadNavigationReturn,
        paginatedChildrenReturn,
        propsTableSection: props
    }
}

export function useTableRow<TableRowElement extends Element, TableCellElement extends Element, RM extends TableRowInfo<TableRowElement, TableCellElement>, CM extends TableCellInfo<TableCellElement>>({
    rowAsChildOfGridParameters: {
        managedChildParameters,
        singleSelectionChildParameters,
        completeGridNavigationRowParameters,
        rovingTabIndexChildParameters,
        textContentParameters,
        context: cx1
    },
    rowAsParentOfCellsParameters: {
        linearNavigationParameters,
        rovingTabIndexParameters
    },
    tableRowParameters: { selected }
}: UseTableRowParameters<TableRowElement, TableCellElement, RM, CM>): UseTableRowReturnType<TableRowElement, TableCellElement, RM, CM> {
    const {
        context: cx2,
        hasCurrentFocusReturn,
        rowAsChildOfGridReturn,
        rowAsParentOfCellsReturn,
        props
    } = useCompleteGridNavigationRow<TableRowElement, TableCellElement, RM, CM>({
        rowAsChildOfGridParameters: {
            textContentParameters,
            context: { ...cx1 },
            managedChildParameters,
            singleSelectionChildParameters,
            completeGridNavigationRowParameters,
            rovingTabIndexChildParameters,
            sortableChildParameters: {
                getSortValue: useStableCallback((): unknown => {
                    const currentColumn = cx1.tableContext.getCurrentSortColumn().column;
                    const currentChild = rowAsParentOfCellsReturn.managedChildrenReturn.getChildren().getAt(currentColumn ?? 0)
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

    props.role = "gridrow";
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
    }
}

export function useTableCell<TableCellElement extends Element, CM extends TableCellInfo<TableCellElement>>({ tableCellParameters: { tagTableCell }, ...p }: UseTableCellParameters<TableCellElement, CM>): UseTableCellReturnType<TableCellElement, CM> {
    const ret = useCompleteGridNavigationCell<TableCellElement, CM>(p);
    if (!(tagTableCell == "th" || tagTableCell == "td")) {
        ret.props.role = "gridcell"
    }
    return {
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
