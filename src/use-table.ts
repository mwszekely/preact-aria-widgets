import { h } from "preact";
import {
    Compare,
    CompleteGridNavigationCellContext,
    CompleteGridNavigationRowContext,
    ElementProps,
    PassiveStateUpdater,
    TargetedOmit,
    UseCompleteGridNavigationCellInfo, UseCompleteGridNavigationCellParameters, UseCompleteGridNavigationCellReturnType, UseCompleteGridNavigationParameters,
    UseCompleteGridNavigationReturnType,
    UseCompleteGridNavigationRowInfo, UseCompleteGridNavigationRowParameters, UseCompleteGridNavigationRowReturnType,
    UseGridNavigationRowParameters,
    assertEmptyObject,
    focus,
    monitorCallCount,
    returnNull,
    useCompleteGridNavigation,
    useCompleteGridNavigationCell,
    useCompleteGridNavigationRow,
    useMemoObject,
    useMergedProps, usePassiveState, useStableCallback
} from "preact-prop-helpers";
import { useCallback, useEffect, useRef } from "preact/hooks";
import { ElementToTag, OmitStrong, Prefices } from "./props.js";
import { UseLabelSyntheticParameters, useLabelSynthetic } from "./use-label.js";
import { UseListboxParameters } from "./use-listbox.js";

export interface UseTableContextSelf {
    setSortBodyFunction: PassiveStateUpdater<() => void, never>;
    sortByColumn(column: number): SortInfo;
    getCurrentSortColumn(): SortInfo;
}


export interface UseTableContext {
    tableContext: UseTableContextSelf;
}

export interface UseTableSectionContext<TableSectionElement extends Element, TableRowElement extends Element, TableCellElement extends Element, RM extends TableRowInfo<TableRowElement, TableCellElement>, CM extends TableCellInfo<TableCellElement>> extends CompleteGridNavigationRowContext<TableSectionElement, TableRowElement, TableCellElement, RM, CM>, UseTableContext { }

export interface UseTableSectionParametersSelf<TableSectionElement extends Element> {
    location: "head" | "body" | "foot";
    tagTableSection: ElementToTag<TableSectionElement>;
}

export interface UseTableSectionParameters<TableSectionElement extends Element, TableRowElement extends Element, TableCellElement extends Element, RM extends TableRowInfo<TableRowElement, TableCellElement>> extends
    OmitStrong<UseCompleteGridNavigationParameters<TableSectionElement, TableRowElement, TableCellElement, RM>, "rovingTabIndexParameters" | "sortableChildrenParameters">,
    TargetedOmit<UseCompleteGridNavigationParameters<TableSectionElement, TableRowElement, TableCellElement, RM>, "rovingTabIndexParameters", "focusSelfParent"> {
    tableSectionParameters: UseTableSectionParametersSelf<TableSectionElement>;
    context: UseTableContext;
}
export interface UseTableSectionReturnType<TableSectionElement extends Element, TableRowElement extends Element, TableCellElement extends Element, RM extends TableRowInfo<TableRowElement, TableCellElement>, CM extends TableCellInfo<TableCellElement>> extends OmitStrong<UseCompleteGridNavigationReturnType<TableSectionElement, TableRowElement, TableCellElement, RM, CM>, "props"> {
    propsTableSection: ElementProps<TableSectionElement>;
    context: UseTableSectionContext<TableSectionElement, TableRowElement, TableCellElement, RM, CM>;
}
export interface UseTableRowReturnType<TableRowElement extends Element, TableCellElement extends Element, RM extends TableRowInfo<TableRowElement, TableCellElement>, CM extends TableCellInfo<TableCellElement>> extends OmitStrong<UseCompleteGridNavigationRowReturnType<TableRowElement, TableCellElement, RM, CM>, "context"> {
    context: UseTableRowContext<any, TableCellElement, CM>;
}
export interface UseTableRowParametersSelf<TableRowElement extends Element> {
    /**
     * When the `selectionLimit` is `"single"`, this must be `null`.
     */
    selected: boolean | null;
    tagTableRow: ElementToTag<TableRowElement>;
}
export interface UseTableRowParameters<TableRowElement extends Element, TableCellElement extends Element, RM extends TableRowInfo<TableRowElement, TableCellElement>, CM extends TableCellInfo<TableCellElement>> extends
    OmitStrong<UseCompleteGridNavigationRowParameters<TableRowElement, TableCellElement, RM, CM>, "rovingTabIndexParameters" | "typeaheadNavigationParameters" | "context" | "info">,
    TargetedOmit<UseGridNavigationRowParameters<TableRowElement, TableCellElement, RM, CM>, "rovingTabIndexParameters", never> {
    context: UseTableSectionContext<any, TableRowElement, TableCellElement, RM, CM>;
    tableRowParameters: UseTableRowParametersSelf<TableRowElement>;
    info: Omit<UseCompleteGridNavigationRowParameters<TableRowElement, TableCellElement, RM, CM>["info"], "getSortValue">;
}

export interface UseTableRowContext<TableRowElement extends Element, TableCellElement extends Element, M extends TableCellInfo<TableCellElement>> extends CompleteGridNavigationCellContext<TableRowElement, TableCellElement, M> {
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

export interface UseTableCellParameters<TableCellElement extends Element, CM extends TableCellInfo<TableCellElement>> extends OmitStrong<UseCompleteGridNavigationCellParameters<TableCellElement, CM>, "info"> {
    tableCellParameters: UseTableCellParametersSelf<TableCellElement>;
    context: UseTableRowContext<any, TableCellElement, CM>;
    info: OmitStrong<UseCompleteGridNavigationCellParameters<TableCellElement, CM>["info"], never>;
}

export interface TableRowInfo<TableRowElement extends Element, TableCellElement extends Element> extends UseCompleteGridNavigationRowInfo<TableRowElement, TableCellElement> { }
export interface TableCellInfo<TableCellElement extends Element> extends UseCompleteGridNavigationCellInfo<TableCellElement> {
    getSortValue(): unknown;
}

export interface UseTableParameters<TableElement extends Element, LabelElement extends Element> extends
    TargetedOmit<UseLabelSyntheticParameters, "labelParameters", "onLabelClick"> {
    tableParameters: UseTableParametersSelf<TableElement, LabelElement>;
}

export interface UseTableParametersSelf<TableElement extends Element, LabelElement extends Element> extends Pick<UseListboxParameters<TableElement, any, LabelElement, any>["listboxParameters"], "selectionLimit"> {
    tagTable: ElementToTag<TableElement>;
}

export interface UseTableReturnType<TableElement extends Element, LabelElement extends Element> {
    propsTable: ElementProps<TableElement>;
    propsLabel: ElementProps<LabelElement>;
    context: UseTableContext;
}

interface SortInfo { column: number, direction: "ascending" | "descending" }

/**
 * Creates a sortable data table in a [Grid](https://www.w3.org/WAI/ARIA/apg/patterns/grid/) pattern.
 * 
 * @compositeParams
 * 
 * @hasChild {@link useTableSection}
 * @hasChild {@link useTableRow}
 * @hasChild {@link useTableCell}
 */
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


/**
 * @compositeParams
 */
export function useTableSection<TableSectionElement extends Element, TableRowElement extends Element, TableCellElement extends Element, RM extends TableRowInfo<TableRowElement, TableCellElement>, CM extends TableCellInfo<TableCellElement>>({
    linearNavigationParameters,
    rovingTabIndexParameters,
    singleSelectionParameters,
    gridNavigationParameters,
    rearrangeableChildrenParameters,
    paginatedChildrenParameters,
    staggeredChildrenParameters,
    tableSectionParameters: { tagTableSection, location },
    typeaheadNavigationParameters,
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
        rovingTabIndexParameters: { ...rovingTabIndexParameters, focusSelfParent: focus },
        singleSelectionParameters,
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
    });

    if (!naturalSectionTypes.has(tagTableSection as any)) {
        props.role = "rowgroup";
    }



    useEffect(() => {
        if (location == "body") {
            tableContext.setSortBodyFunction(() => {
                return () => { sortableChildrenReturn.sort(tableContext.getCurrentSortColumn().direction); }
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

/**
 * @compositeParams
 */
export function useTableRow<TableRowElement extends Element, TableCellElement extends Element, RM extends TableRowInfo<TableRowElement, TableCellElement>, CM extends TableCellInfo<TableCellElement>>({
    info,
    textContentParameters,
    context: cx1,
    tableRowParameters: { selected },
    linearNavigationParameters,
    rovingTabIndexParameters,
    ...void1

}: UseTableRowParameters<TableRowElement, TableCellElement, RM, CM>): UseTableRowReturnType<TableRowElement, TableCellElement, RM, CM> {
    monitorCallCount(useTableRow);
    assertEmptyObject(void1);

    const {
        context: cx2,
        managedChildrenReturn,
        props: { ...props },
        ...restRet

        // props
    } = useCompleteGridNavigationRow<TableRowElement, TableCellElement, RM, CM>({
        textContentParameters,
        context: { ...cx1 },
        info: {
            ...info,
            getSortValue: useStableCallback((): unknown => {
                const currentColumn = cx1.tableContext.getCurrentSortColumn().column;
                const currentChild = managedChildrenReturn.getChildren().getAt(currentColumn ?? 0)
                const sortValue = currentChild?.getSortValue();

                return sortValue;
            })
        } as RM,
        linearNavigationParameters,
        rovingTabIndexParameters: { ...rovingTabIndexParameters },
        typeaheadNavigationParameters: { noTypeahead: true, collator: null, typeaheadTimeout: Infinity, onNavigateTypeahead: null }
    }
    );

    props.role = "row";
    // TODO: Unneeded?
    if (selected) {
        switch (cx1.singleSelectionContext.ariaPropName) {
            case "aria-checked":
            case "aria-pressed":
            case "aria-selected":
                props[cx1.singleSelectionContext.ariaPropName ?? "aria-selected"] = "true";
            default: {
                console.assert(false, cx1.singleSelectionContext.ariaPropName + " is not valid for multi-select -- prefer checked, selected, or pressed");
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

/**
 * @compositeParams
 */
export function useTableCell<TableCellElement extends Element, CM extends TableCellInfo<TableCellElement>>({ tableCellParameters: { tagTableCell }, info, ...p }: UseTableCellParameters<TableCellElement, CM>): UseTableCellReturnType<TableCellElement, CM> {
    monitorCallCount(useTableCell);

    const { props, ...ret } = useCompleteGridNavigationCell<TableCellElement, CM>({
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
}
