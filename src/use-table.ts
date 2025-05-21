import { CompleteGridNavigationCellContext, CompleteGridNavigationRowContext, ElementProps, JSX, Nullable, OmitStrong, PassiveStateUpdater, TargetedOmit, UseCompleteGridNavigationCellInfo, UseCompleteGridNavigationCellParameters, UseCompleteGridNavigationCellReturnType, UseCompleteGridNavigationParameters, UseCompleteGridNavigationReturnType, UseCompleteGridNavigationRowInfo, UseCompleteGridNavigationRowInfoKeysParameters, UseCompleteGridNavigationRowParameters, UseCompleteGridNavigationRowReturnType, UseCompleteGridNavigationRowsContext, UseCompleteGridNavigationRowsInfo, UseCompleteGridNavigationRowsParameters, UseCompleteGridNavigationRowsReturnType, UseProcessedChildParameters, UseProcessedChildReturnType, UseRefElementParameters, UseRefElementReturnType, assertEmptyObject, returnNull, useCallback, useCompleteGridNavigation, useCompleteGridNavigationCell, useCompleteGridNavigationRow, useCompleteGridNavigationRows, useEffect, useMemoObject, useMergedProps, useMonitoring, usePassiveState, useProcessedChild, useRefElement, useStableCallback, useState } from "preact-prop-helpers";
import { ElementToTag, Prefices } from "./props.js";
import { UseLabelReturnType, UseLabelSyntheticParameters, useLabelSynthetic } from "./use-label.js";
//import { UseTableCellParameters, UseTableCellReturnType, UseTableRowParameters, UseTableRowReturnType } from "./use-table.js";

export type SortDirection = "ascending" | "descending";
interface SortInfo { column: number, direction: SortDirection }

export interface TableSectionInfo<TableRowElement extends Element> extends UseCompleteGridNavigationRowsInfo<TableRowElement> { };
export interface TableRowInfo<TableRowElement extends Element> extends UseCompleteGridNavigationRowInfo<TableRowElement> { }
export interface TableCellInfo<TableCellElement extends Element> extends UseCompleteGridNavigationCellInfo<TableCellElement> { }

// useTable
export interface UseTableParametersSelf<TableElement extends Element> {
    tagTable: ElementToTag<TableElement>;
    initiallySortedColumn: Nullable<number>;
}

export interface UseTableParameters<TableElement extends Element, RowElement extends Element, RM extends TableRowInfo<RowElement> = TableRowInfo<RowElement>> extends
    OmitStrong<UseCompleteGridNavigationParameters<TableElement, RowElement, RM>, "rovingTabIndexParameters" | "gridNavigationCompleteParameters">,
    TargetedOmit<UseCompleteGridNavigationParameters<TableElement, RowElement, RM>, "rovingTabIndexParameters", "focusSelfParent">,
    TargetedOmit<UseCompleteGridNavigationParameters<TableElement, RowElement, RM>, "gridNavigationCompleteParameters", "getSortColumn">,
    TargetedOmit<UseLabelSyntheticParameters, "labelParameters", "onLabelClick"> {
    tableParameters: UseTableParametersSelf<TableElement>;
}

export interface UseTableReturnTypeSelf {
    sortByColumn: (column: number) => SortInfo;
}

export interface UseTableReturnType<TableElement extends Element, RowElement extends Element, LabelElement extends Element, RM extends TableRowInfo<RowElement> = TableRowInfo<RowElement>> extends
    OmitStrong<UseCompleteGridNavigationReturnType<TableElement, RowElement, RM>, "props">,
    Pick<UseLabelReturnType<TableElement, LabelElement>, "propsLabel"> {
    tableReturn: UseTableReturnTypeSelf;
    propsTable: ElementProps<TableElement>;
    context: UseTableRowContext<RowElement, RM>;
}

export interface UseTableContextSelf {
    setRefreshRowsFunction: PassiveStateUpdater<() => void, never>;
    sortByColumn: UseTableReturnTypeSelf["sortByColumn"];
    getCurrentSortColumn(): number | undefined;
    getCurrentSortDirection(): SortDirection;
}

export interface UseTableProcessedChildrenContextSelf {
    location: "head" | "body" | "foot";
}


// useTableSection
export interface UseTableSectionParametersSelf<TableSectionElement extends Element> {
    tagTableSection: ElementToTag<TableSectionElement>;
}

export interface UseTableRowContext<RowElement extends Element, RM extends TableRowInfo<RowElement>> extends CompleteGridNavigationRowContext<RowElement, RM> {
    tableContext: UseTableContextSelf;
}

export interface UseTableProcessedChildrenContext<RowElement extends Element, RsM extends TableSectionInfo<RowElement>> extends UseCompleteGridNavigationRowsContext<RowElement, RsM> {
    tableProcessedChildren: UseTableProcessedChildrenContextSelf;
}

export interface UseTableBodyParameters<TableSectionElement extends Element, RowElement extends Element, RM extends UseCompleteGridNavigationRowInfo<RowElement>, RsM extends TableSectionInfo<RowElement>> extends
    OmitStrong<UseCompleteGridNavigationRowsParameters<RowElement, RM, RsM>, "rearrangeableChildrenParameters">,
    TargetedOmit<UseCompleteGridNavigationRowsParameters<RowElement, RM, RsM>, "rearrangeableChildrenParameters", never> {
    tableSectionParameters: UseTableSectionParametersSelf<TableSectionElement>;
    context: UseTableRowContext<RowElement, RM>;
}

export interface UseTableBodyReturnType<TableSectionElement extends Element, RowElement extends Element, RsM extends TableSectionInfo<RowElement>> extends UseCompleteGridNavigationRowsReturnType<RowElement, RsM> {
    context: UseTableProcessedChildrenContext<RowElement, RsM>;
    propsTableSection: ElementProps<TableSectionElement>;
}


type UseTableRowInfoKeysParameters<RM extends TableRowInfo<any>> = UseCompleteGridNavigationRowInfoKeysParameters<RM>;

export interface UseTableCellContext<CellElement extends Element, CM extends TableCellInfo<CellElement>> extends CompleteGridNavigationCellContext<CellElement, CM> {
    tableContext: UseTableContextSelf;
}

export interface UseTableRowParametersSelf<TableRowElement extends Element> {
    selected: Nullable<boolean>;
    tagTableRow: ElementToTag<TableRowElement>;
}
export interface UseTableRowParameters<RowElement extends Element, CellElement extends Element, RM extends TableRowInfo<RowElement>, CM extends TableCellInfo<CellElement>> extends
    OmitStrong<UseCompleteGridNavigationRowParameters<RowElement, CellElement, RM, CM>, "typeaheadNavigationParameters" | "info"> {
    context: UseTableRowContext<RowElement, RM>;
    tableRowParameters: UseTableRowParametersSelf<RowElement>;
    info: Pick<RM, UseTableRowInfoKeysParameters<RM>>
}

export interface UseTableRowReturnType<RowElement extends Element, CellElement extends Element, RM extends TableRowInfo<RowElement>, CM extends TableCellInfo<CellElement>> extends
    UseCompleteGridNavigationRowReturnType<RowElement, CellElement, RM, CM> {
    context: UseTableCellContext<CellElement, CM>;
}



export interface UseTableCellParametersSelf<TableCellElement extends Element, CM extends TableCellInfo<TableCellElement>> {
    tagTableCell: ElementToTag<TableCellElement>;
}
export interface UseTableCellReturnTypeSelf {
    sortByThisColumn(): SortInfo;
}


export interface UseTableCellParameters<CellElement extends Element, CM extends TableCellInfo<CellElement>> extends UseCompleteGridNavigationCellParameters<CellElement, CM> {
    tableCellParameters: UseTableCellParametersSelf<CellElement, CM>;
    context: UseTableCellContext<CellElement, CM>;
}

export interface UseTableCellReturnType<CellElement extends Element, CM extends TableCellInfo<CellElement>> extends
    OmitStrong<UseCompleteGridNavigationCellReturnType<CellElement, CM>, "props"> {
    propsCell: ElementProps<CellElement>;
    propsFocus: ElementProps<any>;
    tableCellReturn: UseTableCellReturnTypeSelf;
}




/**
 * @compositeParams
 */
export function useTable<TableElement extends Element, TableRowElement extends Element, LabelElement extends Element, RM extends TableRowInfo<TableRowElement>>({
    gridNavigationParameters,
    linearNavigationParameters,
    multiSelectionParameters,
    paginatedChildrenParameters,
    refElementParameters,
    rovingTabIndexParameters,
    singleSelectionParameters,
    typeaheadNavigationParameters,
    labelParameters,
    tableParameters: { tagTable, initiallySortedColumn },
    gridNavigationCompleteParameters: { getSortValueAt },
    processedIndexManglerParameters
}: UseTableParameters<TableElement, TableRowElement, RM>): UseTableReturnType<TableElement, TableRowElement, LabelElement, RM> {
    return useMonitoring(function useTable(): UseTableReturnType<TableElement, TableRowElement, LabelElement, RM> {
        ;
        // This is the function that, when called, sorts the body's children.
        // It's here to coordinate among multiple table sections (i.e. the head sorts the body, but they're siblings to each other, so we need to take care that)
        // TODO: This...should probably be useManagedChildren
        const [getRefreshRows, setRefreshRows] = usePassiveState<() => void, never>(null, returnNull as (() => never));

        const [_sortDirection, setSortDirection, getSortDirection] = useState<SortDirection>("ascending");
        const [_sortColumn, setSortColumn, getSortColumn] = useState<number | undefined>(initiallySortedColumn ?? undefined);

        const sortByColumn = useCallback((column: number): SortInfo => {
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
        }, [])

        const {
            propsInput: propsLabelTable,
            propsLabel: propsLabelLabel
        } = useLabelSynthetic<TableElement, LabelElement>({
            labelParameters: { ...labelParameters, onLabelClick: null },
            randomIdInputParameters: { prefix: Prefices.table },
            randomIdLabelParameters: { prefix: Prefices.tableLabel }
        });


        const { props, context, ...completeGridNavigationReturn } = useCompleteGridNavigation<TableElement, TableRowElement, RM>({
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

        const tableContext = useMemoObject<UseTableContextSelf>({
            setRefreshRowsFunction: setRefreshRows,
            getCurrentSortColumn: getSortColumn,
            getCurrentSortDirection: getSortDirection,
            sortByColumn
        });


        return {
            propsTable: useMergedProps(props, propsLabelTable, { role: tagTable == "table" ? undefined : "grid", "aria-multiselectable": (multiSelectionParameters.multiSelectionMode != "disabled" ? "true" : undefined) }),
            propsLabel: propsLabelLabel,
            tableReturn: { sortByColumn },
            context: useMemoObject<UseTableRowContext<TableRowElement, RM>>({
                tableContext,
                ...context
            }),
            ...completeGridNavigationReturn
        }
    });
}


const naturalSectionTypes = new Set<keyof JSX.IntrinsicElements>(["thead", "tbody", "tfoot"]);

export interface UseTableHeadParametersSelf<TableSectionElement extends Element> {
    tagHead: ElementToTag<TableSectionElement>;
}
export interface UseTableHeadReturnTypeSelf<TableSectionElement extends Element> { }
export interface UseTableHeadParameters<TableSectionElement extends Element> {
    tableHeadParameters: UseTableHeadParametersSelf<TableSectionElement>;
}
export interface UseTableHeadReturnType<TableSectionElement extends Element> {
    props: ElementProps<TableSectionElement>;
    tableHeadReturn: UseTableHeadReturnTypeSelf<TableSectionElement>;
}

/**
 * @compositeParams
 */
export function useTableHead<TableSectionElement extends Element>({ tableHeadParameters: { tagHead: tagTableSection } }: UseTableHeadParameters<TableSectionElement>): UseTableHeadReturnType<TableSectionElement> {
    const props: ElementProps<TableSectionElement> = {};

    if (!naturalSectionTypes.has(tagTableSection as any)) {
        props.role = "rowgroup";
    }

    return {
        props,
        tableHeadReturn: {},
    }
}

/**
 * @compositeParams
 */
export function useTableBody<TableSectionElement extends Element, RowElement extends Element, RM extends TableRowInfo<RowElement>, RsM extends TableSectionInfo<RowElement>>({
    context: processedChildrenContext,
    managedChildrenParameters,
    paginatedChildrenParameters,
    rearrangeableChildrenParameters,
    staggeredChildrenParameters,
    tableSectionParameters: { tagTableSection }
}: UseTableBodyParameters<TableSectionElement, RowElement, RM, RsM>): UseTableBodyReturnType<TableSectionElement, RowElement, RsM> {
    return useMonitoring(function useTableBody(): UseTableBodyReturnType<TableSectionElement, RowElement, RsM> {
        const props: ElementProps<TableSectionElement> = {};

        const {
            context: contextRows,
            paginatedChildrenReturn,
            rearrangeableChildrenReturn,
            staggeredChildrenReturn,
        } = useCompleteGridNavigationRows<RowElement, RM, RsM>({
            context: processedChildrenContext,
            managedChildrenParameters,
            paginatedChildrenParameters,
            rearrangeableChildrenParameters,
            staggeredChildrenParameters
        });

        if (!naturalSectionTypes.has(tagTableSection as any)) {
            props.role = "rowgroup";
        }

        useEffect(() => {
            processedChildrenContext.tableContext.setRefreshRowsFunction(() => {
                return () => { rearrangeableChildrenReturn.refresh(); }
            })
        });

        return {
            context: useMemoObject<UseTableProcessedChildrenContext<RowElement, RsM>>({
                ...contextRows,
                tableProcessedChildren: useMemoObject({ location: "body" })
            }),
            rearrangeableChildrenReturn,
            paginatedChildrenReturn,
            staggeredChildrenReturn,
            propsTableSection: props
        }
    });
}



export interface UseTableRowOuterParameters<RowElement extends Element, RsM extends TableSectionInfo<RowElement>> extends
    OmitStrong<UseProcessedChildParameters<RowElement, RsM>, "info">,
    TargetedOmit<UseProcessedChildParameters<RowElement, RsM>, "info", "getElement">,
    UseRefElementParameters<RowElement> {

}

export interface UseTableRowOuterReturnType<RowElement extends Element, RsM extends TableSectionInfo<RowElement>> extends
    OmitStrong<UseProcessedChildReturnType<RowElement, RsM>, never>,
    OmitStrong<UseRefElementReturnType<RowElement>, "propsStable"> {
    hide: boolean;
}

/**
 * @compositeParams
 */
export function useTableRowOuter<RowElement extends Element, RsM extends TableSectionInfo<RowElement>>({
    context,
    info: { ...info },
    refElementParameters: { onElementChange: oec1, onMount, onUnmount },
    rearrangeableChildParameters,
    ...void1
}: UseTableRowOuterParameters<RowElement, RsM>): UseTableRowOuterReturnType<RowElement, RsM> {
    return useMonitoring(function useTableRowOuter(): UseTableRowOuterReturnType<RowElement, RsM> {
        assertEmptyObject(void1);
        const { } = context;

        const {
            propsStable,
            refElementReturn
        } = useRefElement<RowElement>({
            refElementParameters: {
                onElementChange: useStableCallback((...a) => { oec1?.(...a); oec2?.(...a); }),
                onMount,
                onUnmount
            }
        });

        const { props, ...processedChildReturn } = useProcessedChild<RowElement, RsM>({
            context,
            info: { getElement: refElementReturn.getElement, ...info },
            rearrangeableChildParameters,
        })


        const {
            managedChildReturn: { getChildren },
            paginatedChildReturn: { hideBecausePaginated, parentIsPaginated },
            staggeredChildReturn: { hideBecauseStaggered, parentIsStaggered, childUseEffect },
            refElementParameters: { onElementChange: oec2 }
        } = processedChildReturn;


        return {
            ...processedChildReturn,
            refElementReturn,
            props: useMergedProps(props, propsStable),
            hide: hideBecausePaginated || hideBecauseStaggered
        }
    });
}



/**
 * @compositeParams
 */
export function useTableRow<TableRowElement extends Element, TableCellElement extends Element, RM extends TableRowInfo<TableRowElement>, CM extends TableCellInfo<TableCellElement>>({
    info,
    textContentParameters,
    context: cx1,
    tableRowParameters: { selected },
    linearNavigationParameters,
    rovingTabIndexParameters,
    hasCurrentFocusParameters,
    singleSelectionChildParameters,
    multiSelectionChildParameters,
    refElementParameters,
    ...void1

}: UseTableRowParameters<TableRowElement, TableCellElement, RM, CM>): UseTableRowReturnType<TableRowElement, TableCellElement, TableRowInfo<TableRowElement>, TableCellInfo<TableCellElement>> {
    return useMonitoring(function useTableRow(): UseTableRowReturnType<TableRowElement, TableCellElement, TableRowInfo<TableRowElement>, TableCellInfo<TableCellElement>> {
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
            refElementParameters,
            // gridNavigationSelectionSortableRowParameters: { getSortableColumnIndex: cx1.tableContext.getCurrentSortColumn },
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


        }
    });
}






/**
 * @compositeParams
 */
export function useTableCell<TableCellElement extends Element>({
    tableCellParameters: { tagTableCell },
    info,
    context,
    gridNavigationCellParameters,
    textContentParameters,
    ...p
}: UseTableCellParameters<TableCellElement, TableCellInfo<TableCellElement>>): UseTableCellReturnType<TableCellElement, TableCellInfo<TableCellElement>> {
    return useMonitoring(function useTableCell(): UseTableCellReturnType<TableCellElement, TableCellInfo<TableCellElement>> {
        assertEmptyObject(p);

        const { props, ...ret } = useCompleteGridNavigationCell<TableCellElement, TableCellInfo<TableCellElement>>({
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
