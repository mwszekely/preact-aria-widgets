import {
    Compare,
    CompleteGridNavigationCellContext,
    CompleteGridNavigationRowContext,
    ElementProps,
    JSX,
    Nullable,
    PassiveStateUpdater,
    SingleSelectionContextSelf,
    TargetedOmit,
    TargetedPick,
    UseCompleteGridNavigationCellInfo, UseCompleteGridNavigationCellInfoKeysParameters, UseCompleteGridNavigationCellParameters, UseCompleteGridNavigationCellReturnType, UseCompleteGridNavigationParameters,
    UseCompleteGridNavigationReturnType,
    UseCompleteGridNavigationRowInfo, UseCompleteGridNavigationRowParameters, UseCompleteGridNavigationRowReturnType,
    UseCompleteListNavigationParameters,
    UseGenericChildParameters,
    UseMultiSelectionContextSelf,
    assertEmptyObject,
    focus,
    monitored,
    returnNull,
    useCompleteGridNavigation,
    useCompleteGridNavigationCell,
    useCompleteGridNavigationRow,
    useMemoObject,
    useMergedProps, usePassiveState, useStableCallback, useState
} from "preact-prop-helpers";
import { useCallback, useEffect } from "preact/hooks";
import { ElementToTag, OmitStrong, Prefices } from "./props.js";
import { UseLabelSyntheticParameters, useLabelSynthetic } from "./use-label.js";

export interface UseTableContextSelf extends Pick<SingleSelectionContextSelf, "singleSelectionMode">, Pick<UseMultiSelectionContextSelf, "multiSelectionMode"> {
    setSortBodyFunction: PassiveStateUpdater<() => void, never>;
    sortByColumn(column: number): SortInfo;
    getCurrentSortColumn(): number | null;
    getCurrentSortDirection(): SortDirection;
}


export interface UseTableContext {
    tableContext: UseTableContextSelf;
}

export interface UseTableSectionContext<TableRowElement extends Element, RM extends TableRowInfo<TableRowElement>> extends CompleteGridNavigationRowContext<TableRowElement, RM>, UseTableContext { }

export interface UseTableSectionParametersSelf<TableSectionElement extends Element> {
    location: "head" | "body" | "foot";
    tagTableSection: ElementToTag<TableSectionElement>;
}

export interface UseTableSectionParameters<TableSectionElement extends Element, TableRowElement extends Element, RM extends TableRowInfo<TableRowElement>> extends
    OmitStrong<UseCompleteGridNavigationParameters<TableSectionElement, TableRowElement, RM>, "rovingTabIndexParameters" | "sortableChildrenParameters" | "singleSelectionParameters" | "multiSelectionParameters">,
    TargetedOmit<UseCompleteGridNavigationParameters<TableSectionElement, TableRowElement, RM>, "singleSelectionParameters", "singleSelectionMode">,
    TargetedOmit<UseCompleteGridNavigationParameters<TableSectionElement, TableRowElement, RM>, "multiSelectionParameters", "multiSelectionMode">,
    TargetedOmit<UseCompleteGridNavigationParameters<TableSectionElement, TableRowElement, RM>, "rovingTabIndexParameters", "focusSelfParent"> {
    tableSectionParameters: UseTableSectionParametersSelf<TableSectionElement>;
    context: UseTableContext;
}
export interface UseTableSectionReturnType<TableSectionElement extends Element, TableRowElement extends Element, RM extends TableRowInfo<TableRowElement>> extends
    OmitStrong<UseCompleteGridNavigationReturnType<TableSectionElement, TableRowElement, RM>, "props"> {
    propsTableSection: ElementProps<TableSectionElement>;
    context: UseTableSectionContext<TableRowElement, RM>;
}
export interface UseTableRowReturnType<TableRowElement extends Element, TableCellElement extends Element, RM extends TableRowInfo<TableRowElement>, CM extends TableCellInfo<TableCellElement>> extends OmitStrong<UseCompleteGridNavigationRowReturnType<TableRowElement, TableCellElement, RM, CM>, "context"> {
    context: UseTableRowContext<TableCellElement, CM>;
}
export interface UseTableRowParametersSelf<TableRowElement extends Element> {
    /**
     * When the `selectionLimit` is `"single"`, this must be `null`.
     */
    selected: Nullable<boolean>;
    tagTableRow: ElementToTag<TableRowElement>;
}
export interface UseTableRowParameters<TableRowElement extends Element, TableCellElement extends Element, RM extends TableRowInfo<TableRowElement>, CM extends TableCellInfo<TableCellElement>> extends
    OmitStrong<UseCompleteGridNavigationRowParameters<TableRowElement, TableCellElement, RM, CM>, "gridNavigationSelectionSortableRowParameters" | "rovingTabIndexParameters" | "typeaheadNavigationParameters" | "context" | "info">,
    TargetedOmit<UseCompleteGridNavigationRowParameters<TableRowElement, TableCellElement, RM, CM>, "rovingTabIndexParameters", never> {
    context: UseTableSectionContext<TableRowElement, RM>;
    tableRowParameters: UseTableRowParametersSelf<TableRowElement>;
    info: OmitStrong<UseCompleteGridNavigationRowParameters<TableRowElement, TableCellElement, RM, CM>["info"], never>;
}

export interface UseTableRowContext<TableCellElement extends Element, M extends TableCellInfo<TableCellElement>> extends CompleteGridNavigationCellContext<TableCellElement, M> {
    tableContext: UseTableContext["tableContext"];
}


export interface UseTableCellReturnTypeSelf {
    sortByThisColumn(): SortInfo;
}

export interface UseTableCellReturnType<TableCellElement extends Element, CM extends TableCellInfo<TableCellElement>> extends OmitStrong<UseCompleteGridNavigationCellReturnType<TableCellElement, CM>, "props"> {
    propsCell: ElementProps<TableCellElement>;
    propsFocus: ElementProps<any>;
    tableCellReturn: UseTableCellReturnTypeSelf;
}
export interface UseTableCellParametersSelf<TableCellElement extends Element> {
    tagTableCell: ElementToTag<TableCellElement>;
}

export interface UseTableCellParameters<TableCellElement extends Element, CM extends TableCellInfo<TableCellElement>> extends
    UseGenericChildParameters<UseTableRowContext<TableCellElement, CM>, Pick<CM, UseCompleteGridNavigationCellInfoKeysParameters<CM>>>,
    OmitStrong<UseCompleteGridNavigationCellParameters<TableCellElement, CM>, "info" | "context"> {
    tableCellParameters: UseTableCellParametersSelf<TableCellElement>;
}

export interface TableRowInfo<TableRowElement extends Element> extends UseCompleteGridNavigationRowInfo<TableRowElement> { }
export interface TableCellInfo<TableCellElement extends Element> extends UseCompleteGridNavigationCellInfo<TableCellElement> {
    getSortValue(): unknown;
}

export interface UseTableParameters<TableElement extends Element, LabelElement extends Element> extends
    TargetedPick<UseCompleteListNavigationParameters<any, any, any>, "singleSelectionParameters", "singleSelectionMode">,
    TargetedPick<UseCompleteListNavigationParameters<any, any, any>, "multiSelectionParameters", "multiSelectionMode">,
    TargetedOmit<UseLabelSyntheticParameters, "labelParameters", "onLabelClick"> {
    tableParameters: UseTableParametersSelf<TableElement, LabelElement>;
}

export interface UseTableParametersSelf<TableElement extends Element, LabelElement extends Element> {
    tagTable: ElementToTag<TableElement>;
}

export interface UseTableReturnType<TableElement extends Element, LabelElement extends Element> {
    propsTable: ElementProps<TableElement>;
    propsLabel: ElementProps<LabelElement>;
    context: UseTableContext;
}
export type SortDirection = "ascending" | "descending";
interface SortInfo { column: number, direction: SortDirection }

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
export const useTable = monitored(function useTable<TableElement extends Element, LabelElement extends Element>({
    labelParameters,
    tableParameters: { tagTable },
    singleSelectionParameters: { singleSelectionMode, ...void1 },
    multiSelectionParameters: { multiSelectionMode, ...void2 },
    ...void3
}: UseTableParameters<TableElement, LabelElement>): UseTableReturnType<TableElement, LabelElement> {

    assertEmptyObject(void1);
    assertEmptyObject(void2);
    assertEmptyObject(void3);

    // This is the function that, when called, sorts the body's children.
    // It's here to coordinate among multiple table sections (i.e. the head sorts the body, but they're siblings to each other, so we need to take care that)
    // TODO: This...should probably be useManagedChildren
    const [getSortBody, setSortBody] = usePassiveState<() => void, never>(null, returnNull as (() => never));

    const [sortDirection, setSortDirection, getSortDirection] = useState<SortDirection>("ascending");
    const [sortColumn, setSortColumn, getSortColumn] = useState<number | null>(null);

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

    const sortByColumn = useCallback((column: number): SortInfo => {
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
        propsTable: useMergedProps({ role: tagTable == "table" ? undefined : "grid", "aria-multiselectable": (multiSelectionMode != "disabled" ? "true" : undefined) }, propsLabelList),
        propsLabel: propsLabelLabel,
        context: useMemoObject<UseTableContext>({
            tableContext: useMemoObject<UseTableContextSelf>({
                sortByColumn,
                setSortBodyFunction: setSortBody,
                getCurrentSortColumn: getSortColumn,
                getCurrentSortDirection: getSortDirection,
                singleSelectionMode,
                multiSelectionMode
            })
        })
    }
})

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
const naturalSectionTypes = new Set<keyof JSX.IntrinsicElements>(["thead", "tbody", "tfoot"]);


/**
 * @compositeParams
 */
export const useTableSection = monitored(function useTableSection<TableSectionElement extends Element, TableRowElement extends Element, TableCellElement extends Element>({
    linearNavigationParameters,
    rovingTabIndexParameters,
    singleSelectionParameters,
    multiSelectionParameters,
    gridNavigationParameters,
    rearrangeableChildrenParameters,
    paginatedChildrenParameters,
    staggeredChildrenParameters,
    tableSectionParameters: { tagTableSection, location },
    typeaheadNavigationParameters,
    context: { tableContext, ...void3 },
    refElementParameters,
    ...void1
}: UseTableSectionParameters<TableSectionElement, TableRowElement, TableRowInfo<TableRowElement>>): UseTableSectionReturnType<TableSectionElement, TableRowElement, TableRowInfo<TableRowElement>> {
    type RM = TableRowInfo<TableRowElement>;

    const {
        childrenHaveFocusReturn,
        context,
        linearNavigationReturn,
        managedChildrenReturn,
        props: { ...props },
        rovingTabIndexReturn,
        singleSelectionReturn,
        multiSelectionReturn,
        typeaheadNavigationReturn,
        staggeredChildrenReturn,
        rearrangeableChildrenReturn,
        paginatedChildrenReturn,
        sortableChildrenReturn,
        ...void2
    } = useCompleteGridNavigation<TableSectionElement, TableRowElement, TableCellElement, RM>({
        linearNavigationParameters,
        rovingTabIndexParameters: { ...rovingTabIndexParameters, focusSelfParent: focus },
        singleSelectionParameters: { ...singleSelectionParameters, singleSelectionMode: tableContext.singleSelectionMode },
        multiSelectionParameters: { ...multiSelectionParameters, multiSelectionMode: tableContext.multiSelectionMode },
        paginatedChildrenParameters,
        staggeredChildrenParameters,
        sortableChildrenParameters: {
            compare: useCallback<Compare<RM>>((lhs, rhs) => {
                return fuzzyCompare(lhs?.getSortValue?.(), rhs?.getSortValue?.());
            }, [])
        },
        typeaheadNavigationParameters,
        gridNavigationParameters,
        rearrangeableChildrenParameters,
        refElementParameters,
    });

    if (!naturalSectionTypes.has(tagTableSection as any)) {
        props.role = "rowgroup";
    }



    useEffect(() => {
        if (location == "body") {
            tableContext.setSortBodyFunction(() => {
                return () => { sortableChildrenReturn.sort(tableContext.getCurrentSortDirection()); }
            })
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
    }
})

/**
 * @compositeParams
 */
export const useTableRow = monitored(function useTableRow<TableRowElement extends Element, TableCellElement extends Element>({
    info,
    textContentParameters,
    context: cx1,
    tableRowParameters: { selected },
    linearNavigationParameters,
    rovingTabIndexParameters,
    hasCurrentFocusParameters,
    singleSelectionChildParameters,
    multiSelectionChildParameters,

    ...void1

}: UseTableRowParameters<TableRowElement, TableCellElement, TableRowInfo<TableRowElement>, TableCellInfo<TableCellElement>>): UseTableRowReturnType<TableRowElement, TableCellElement, TableRowInfo<TableRowElement>, TableCellInfo<TableCellElement>> {
    type RM = TableRowInfo<TableRowElement>;
    type CM = TableCellInfo<TableCellElement>;
    assertEmptyObject(void1);

    const {
        context: cx2,
        managedChildrenReturn,
        props: { ...props },
        ...restRet

        // props
    } = useCompleteGridNavigationRow<TableRowElement, TableCellElement, RM, CM>({
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
    }
    );

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


    }
})

/**
 * @compositeParams
 */
export const useTableCell = monitored(function useTableCell<TableCellElement extends Element>({
    tableCellParameters: { tagTableCell },
    info,
    ...p
}: UseTableCellParameters<TableCellElement, TableCellInfo<TableCellElement>>): UseTableCellReturnType<TableCellElement, TableCellInfo<TableCellElement>> {

    const { props, ...ret } = useCompleteGridNavigationCell<TableCellElement, TableCellInfo<TableCellElement>>({
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
})
