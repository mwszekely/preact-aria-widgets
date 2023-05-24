import { h } from "preact";
import {
    Compare,
    CompleteGridNavigationContext,
    CompleteGridNavigationRowContext, monitorCallCount, PassiveStateUpdater, returnNull, useCompleteGridNavigation,
    useCompleteGridNavigationCell, UseCompleteGridNavigationCellInfo, UseCompleteGridNavigationCellParameters, UseCompleteGridNavigationCellReturnType, UseCompleteGridNavigationParameters,
    UseCompleteGridNavigationReturnType, useCompleteGridNavigationRow, UseCompleteGridNavigationRowInfo, UseCompleteGridNavigationRowParameters, UseCompleteGridNavigationRowReturnType, useMergedProps, usePassiveState, useStableCallback, useMemoObject
} from "preact-prop-helpers";
import { useCallback, useEffect, useRef } from "preact/hooks";
import { ElementToTag, OmitStrong, Prefices } from "./props.js";
import { useLabelSynthetic, UseLabelSyntheticParameters } from "./use-label.js";
import { UseListboxParameters } from "./use-listbox.js";

export interface UseTableContext {
    tableContext: {
        setSortBodyFunction: PassiveStateUpdater<() => void, never>;
        sortByColumn(column: number): SortInfo;
        getCurrentSortColumn(): SortInfo;
    }
}

export interface UseTableSectionContext<TableSectionElement extends Element, TableRowElement extends Element, TableCellElement extends Element, RM extends TableRowInfo<TableRowElement, TableCellElement>, CM extends TableCellInfo<TableCellElement>> extends CompleteGridNavigationContext<TableSectionElement, TableRowElement, TableCellElement, RM, CM>, UseTableContext { }

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
export interface UseTableRowReturnType<TableRowElement extends Element, TableCellElement extends Element, RM extends TableRowInfo<TableRowElement, TableCellElement>, CM extends TableCellInfo<TableCellElement>> extends OmitStrong<UseCompleteGridNavigationRowReturnType<TableRowElement, TableCellElement, RM, CM>, "context"> {
    context: UseTableRowContext<any, TableCellElement, CM>;
}
export interface UseTableRowParameters<TableRowElement extends Element, TableCellElement extends Element, RM extends TableRowInfo<TableRowElement, TableCellElement>, CM extends TableCellInfo<TableCellElement>> extends OmitStrong<UseCompleteGridNavigationRowParameters<TableRowElement, TableCellElement, RM, CM>, "typeaheadNavigationParameters" | "sortableChildParameters" | "context"> {

    context: UseTableSectionContext<any, TableRowElement, TableCellElement, RM, CM>;
    tableRowParameters: {
        /**
         * When the `selectionLimit` is `"single"`, this must be `null`.
         */
        selected: boolean | null;
        tagTableRow: ElementToTag<TableRowElement>;
    };
}

export interface UseTableRowContext<TableRowElement extends Element, TableCellElement extends Element, M extends TableCellInfo<TableCellElement>> extends CompleteGridNavigationRowContext<TableRowElement, TableCellElement, M> {
    tableContext: UseTableContext["tableContext"];
}


export interface UseTableCellReturnType<TableCellElement extends Element, CM extends TableCellInfo<TableCellElement>> extends OmitStrong<UseCompleteGridNavigationCellReturnType<TableCellElement, CM>, "props"> {
    propsCell: h.JSX.HTMLAttributes<TableCellElement>;
    propsFocus: h.JSX.HTMLAttributes<any>;
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

interface SortInfo { column: number, direction: "ascending" | "descending" }

export function useTable<TableElement extends Element, LabelElement extends Element>({
    labelParameters,
    tableParameters: { selectionLimit, tagTable },
}: UseTableParameters<TableElement, LabelElement>): UseTableReturnType<TableElement, LabelElement> {
    monitorCallCount(useTable);

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
        context: useMemoObject({ tableContext: useMemoObject({ sortByColumn, setSortBodyFunction: setSortBody, getCurrentSortColumn: getSortColumn }) })
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
    monitorCallCount(useTableSection);

    const {
        childrenHaveFocusReturn,
        context,
        linearNavigationReturn,
        managedChildrenReturn,
        props: { ...props },
        rovingTabIndexReturn,
        singleSelectionReturn,
        typeaheadNavigationReturn,
        staggeredChildrenReturn,
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
                return () => sortableChildrenReturn.sort(tableContext.getCurrentSortColumn().direction);
            })
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
    }
}

export function useTableRow<TableRowElement extends Element, TableCellElement extends Element, RM extends TableRowInfo<TableRowElement, TableCellElement>, CM extends TableCellInfo<TableCellElement>>({
    info,
    textContentParameters,
    context: cx1,
    tableRowParameters: { selected },
    linearNavigationParameters,
    rovingTabIndexParameters,
    singleSelectionParameters,

}: UseTableRowParameters<TableRowElement, TableCellElement, RM, CM>): UseTableRowReturnType<TableRowElement, TableCellElement, RM, CM> {
    monitorCallCount(useTableRow);

    const {
        context: cx2,
        managedChildrenReturn,
        props: { ...props },
        ...restRet

        // props
    } = useCompleteGridNavigationRow<TableRowElement, TableCellElement, RM, CM>({
        textContentParameters,
        context: { ...cx1 },
        singleSelectionParameters,
        info,
        sortableChildParameters: {
            getSortValue: useStableCallback((): unknown => {
                const currentColumn = cx1.tableContext.getCurrentSortColumn().column;
                const currentChild = managedChildrenReturn.getChildren().getAt(currentColumn ?? 0)
                const sortValue = currentChild?.getSortValue();

                return sortValue;
            })
        },
        linearNavigationParameters,
        rovingTabIndexParameters,
        typeaheadNavigationParameters: { noTypeahead: true, collator: null, typeaheadTimeout: Infinity }
    }
    );

    props.role = "row";
    // TODO: Unneeded?
    if (selected) {
        switch (singleSelectionParameters.ariaPropName) {
            case "aria-checked":
            case "aria-pressed":
            case "aria-selected":
                props[singleSelectionParameters.ariaPropName ?? "aria-selected"] = "true";
            default: {
                console.assert(false, singleSelectionParameters.ariaPropName + " is not valid for multi-select -- prefer checked, selected, or pressed");
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


    }
}

export function useTableCell<TableCellElement extends Element, CM extends TableCellInfo<TableCellElement>>({ tableCellParameters: { tagTableCell }, ...p }: UseTableCellParameters<TableCellElement, CM>): UseTableCellReturnType<TableCellElement, CM> {
    monitorCallCount(useTableCell);

    const { props, ...ret } = useCompleteGridNavigationCell<TableCellElement, CM>(p);
    return {
        propsFocus: props,
        propsCell: { role: (tagTableCell != "th" && tagTableCell != "td") ? "gridcell" : undefined },
        ...ret,
        tableCellReturn: {
            sortByThisColumn: useStableCallback(() => {
                return p.context.tableContext.sortByColumn(p.info.index);
            }, [])
        }
    };
}
