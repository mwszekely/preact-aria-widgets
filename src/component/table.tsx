import { JSX, OmitStrong, TagToElement, VNode, assertEmptyObject, createContext, focus, identity, memo, useEnsureStability, useStableCallback } from "preact-prop-helpers/preact";
import { Get, Get13, Get3, Get4, Get5, Get9, useContextWithWarning } from "../props.js";
import { TableCellInfo, TableRowInfo, TableSectionInfo, UseTableBodyParameters, UseTableBodyReturnType, UseTableCellContext, UseTableCellParameters, UseTableCellReturnType, UseTableHeadParameters, UseTableHeadReturnType, UseTableParameters, UseTableProcessedChildrenContext, UseTableReturnType, UseTableRowContext, UseTableRowOuterParameters, UseTableRowOuterReturnType, UseTableRowParameters, UseTableRowReturnType, useTable, useTableBody, useTableCell, useTableHead, useTableRow, useTableRowOuter } from "../use-table.js";
import { GenericComponentProps, useComponent, useDefault } from "./util.js";


const TableRowContext = createContext<UseTableRowContext<any, any>>(null!);
const TableCellContext = createContext<UseTableCellContext<any, any>>(null!);
const TableProcessedChildrenContext = createContext<UseTableProcessedChildrenContext<any, any>>(null!);

export type TableProps<TableElement extends keyof JSX.IntrinsicElements, RowElement extends keyof JSX.IntrinsicElements, LabelElement extends keyof JSX.IntrinsicElements> = GenericComponentProps<
    UseTableReturnType<TableElement, RowElement, LabelElement>,
    Get13<UseTableParameters<TableElement, RowElement>, "labelParameters", "tableParameters", "singleSelectionParameters", "multiSelectionParameters", "gridNavigationParameters", "linearNavigationParameters", "typeaheadNavigationParameters", "rovingTabIndexParameters", "refElementParameters", "paginatedChildrenParameters", "linearNavigationParameters", "gridNavigationCompleteParameters", "processedIndexManglerParameters">,
    "tagTable"
>;

export type TableHeadProps<TableSectionElement extends keyof JSX.IntrinsicElements> = GenericComponentProps<
    UseTableHeadReturnType<TableSectionElement>,
    Get<UseTableHeadParameters<TableSectionElement>, "tableHeadParameters">,
    "tagHead">;

export type TableBodyProps<TableSectionElement extends keyof JSX.IntrinsicElements, RowElement extends keyof JSX.IntrinsicElements, RM extends TableRowInfo<RowElement>, RsM extends TableSectionInfo<RowElement>> = GenericComponentProps<
    UseTableBodyReturnType<TableSectionElement, RowElement, RsM>,
    Get5<UseTableBodyParameters<TableSectionElement, RowElement, RM, RsM>, "tableSectionParameters", "staggeredChildrenParameters", "rearrangeableChildrenParameters", "paginatedChildrenParameters", "managedChildrenParameters">,
    "tagTableSection" | "children">;

type TableBodyRowOuterProps<RowElement extends keyof JSX.IntrinsicElements, RsM extends TableSectionInfo<RowElement>> = GenericComponentProps<
    UseTableRowOuterReturnType<RowElement, RsM>,
    Get3<UseTableRowOuterParameters<RowElement, RsM>, "refElementParameters", "info", "rearrangeableChildParameters">,
    "index"
>;

type TableBodyRowInnerProps<RowElement extends keyof JSX.IntrinsicElements, CellElement extends keyof JSX.IntrinsicElements, RM extends TableRowInfo<RowElement>, CM extends TableCellInfo<CellElement>> = GenericComponentProps<
    UseTableRowReturnType<RowElement, CellElement, RM, CM>,
    Get9<UseTableRowParameters<RowElement, CellElement, RM, CM>, "hasCurrentFocusParameters", "linearNavigationParameters", "multiSelectionChildParameters", "rovingTabIndexParameters", "singleSelectionChildParameters", "tableRowParameters", "textContentParameters", "info", "refElementParameters">,
    "index" | "tagTableRow"
>;

type TableHeadRowProps<RowElement extends keyof JSX.IntrinsicElements, CellElement extends keyof JSX.IntrinsicElements, RM extends TableRowInfo<RowElement>, CM extends TableCellInfo<CellElement>> = GenericComponentProps<
    UseTableRowReturnType<RowElement, CellElement, RM, CM>,
    Get9<UseTableRowParameters<RowElement, CellElement, RM, CM>, "hasCurrentFocusParameters", "linearNavigationParameters", "multiSelectionChildParameters", "rovingTabIndexParameters", "singleSelectionChildParameters", "tableRowParameters", "textContentParameters", "info", "refElementParameters">,
    "index" | "tagTableRow"
>;

export type TableCellProps<CellElement extends keyof JSX.IntrinsicElements, CM extends TableCellInfo<CellElement>> = GenericComponentProps<
    UseTableCellReturnType<CellElement, CM>,
    Get4<UseTableCellParameters<CellElement, CM>, "textContentParameters", "tableCellParameters", "gridNavigationCellParameters", "info">,
    "index" | "tagTableCell">;

export const Table = /* @__PURE__ */ memo(function Table<TableElement extends keyof JSX.IntrinsicElements, RowElement extends keyof JSX.IntrinsicElements, LabelElement extends keyof JSX.IntrinsicElements>({
    ariaLabel,
    singleSelectionMode,
    multiSelectionMode,
    tagTable,
    imperativeHandle,
    render,
    initiallySingleSelectedIndex,
    multiSelectionAriaPropName,
    onSelectionChange,
    onSingleSelectedIndexChange,
    singleSelectionAriaPropName,
    collator,
    disableHomeEndKeys,
    initiallyTabbableColumn,
    navigatePastEnd,
    navigatePastStart,
    noTypeahead,
    onElementChange,
    onMount,
    onNavigateLinear,
    onNavigateTypeahead,
    onTabbableColumnChange,
    onTabbableIndexChange,
    onUnmount,
    pageNavigationSize,
    paginationMax,
    paginationMin,
    typeaheadTimeout,
    untabbable,
    getSortValueAt,
    initiallySortedColumn,
    getIndex,
    compare,

    ...void1
}: TableProps<TableElement, RowElement, LabelElement>) {
    type RM = TableRowInfo<RowElement>;
    assertEmptyObject(void1);

    getSortValueAt ??= identity;
    useEnsureStability("Table", getSortValueAt);

    return useComponent<UseTableReturnType<TableElement, RowElement, LabelElement>>(
        imperativeHandle,
        render,
        TableRowContext,
        useTable<TableElement, RowElement, LabelElement, RM>({
            labelParameters: { ariaLabel },
            tableParameters: { tagTable, initiallySortedColumn },
            gridNavigationParameters: { initiallyTabbableColumn: initiallyTabbableColumn || 0, onTabbableColumnChange, },
            linearNavigationParameters: { disableHomeEndKeys: disableHomeEndKeys || false, navigatePastEnd: navigatePastEnd || "wrap", navigatePastStart: navigatePastStart || "wrap", onNavigateLinear, pageNavigationSize },
            paginatedChildrenParameters: { paginationMax, paginationMin, },
            refElementParameters: { onElementChange, onMount, onUnmount },
            rovingTabIndexParameters: { onTabbableIndexChange, untabbable: untabbable || false },
            typeaheadNavigationParameters: {
                collator: useDefault("collator", collator),
                noTypeahead: useDefault("noTypeahead", noTypeahead),
                onNavigateTypeahead,
                typeaheadTimeout: useDefault("typeaheadTimeout", typeaheadTimeout)
            },
            singleSelectionParameters: { singleSelectionMode: singleSelectionMode || "disabled", initiallySingleSelectedIndex, onSingleSelectedIndexChange, singleSelectionAriaPropName },
            multiSelectionParameters: { multiSelectionMode: multiSelectionMode || "disabled", multiSelectionAriaPropName, onSelectionChange },
            gridNavigationCompleteParameters: { getSortValueAt },
            processedIndexManglerParameters: {
                compare,
                getIndex: useDefault("getIndex", getIndex)
            }
        }));
});



export const TableHead = /* @__PURE__ */ memo(function TableHead<TableSectionElement extends keyof JSX.IntrinsicElements>({
    render,
    tagHead,
    imperativeHandle
}: TableHeadProps<TableSectionElement>) {

    return useComponent<UseTableHeadReturnType<TableSectionElement>>(
        imperativeHandle,
        render,
        null,
        useTableHead<TableSectionElement>({
            tableHeadParameters: { tagHead }
        }));
});


export const TableBody = /* @__PURE__ */ memo(function TableBody<TableSectionElement extends keyof JSX.IntrinsicElements, RowElement extends keyof JSX.IntrinsicElements>({
    render,
    tagTableSection,
    children,
    imperativeHandle,
    onAfterChildLayoutEffect,
    onChildrenCountChange,
    onChildrenMountChange,
    paginationMax,
    paginationMin,
    staggered,
    animate,
    disableIntersectionObserver,
}: TableBodyProps<TableSectionElement, RowElement, TableRowInfo<RowElement>, TableSectionInfo<RowElement>>) {
    type RM = TableRowInfo<RowElement>;
    type RsM = TableSectionInfo<RowElement>;
    return useComponent<UseTableBodyReturnType<TableSectionElement, RowElement, RsM>>(
        imperativeHandle,
        render,
        TableProcessedChildrenContext,
        useTableBody<TableSectionElement, RowElement, RM, RsM>({
            context: useContextWithWarning(TableRowContext, "TableRowContext"),
            managedChildrenParameters: {
                onAfterChildLayoutEffect,
                onChildrenCountChange,
                onChildrenMountChange

            },
            paginatedChildrenParameters: {
                paginationMax,
                paginationMin
            },
            rearrangeableChildrenParameters: {
                children,
                animate: animate || false
            },
            staggeredChildrenParameters: {
                staggered: staggered || false,
                disableIntersectionObserver: disableIntersectionObserver || false
            },
            tableSectionParameters: {
                tagTableSection
            }
        })
    );
});
export const TableHeadRow = /* @__PURE__ */ memo(function TableHeadRow<RowElement extends keyof JSX.IntrinsicElements, CellElement extends keyof JSX.IntrinsicElements>({
    render,
    index,
    tagTableRow,
    getText,
    initiallyMultiSelected,
    initiallyTabbedIndex,
    multiSelectionDisabled,
    navigatePastEnd,
    navigatePastStart,
    onCurrentFocusedChanged,
    onCurrentFocusedInnerChanged,
    onElementChange,
    onMount,
    onMultiSelectChange,
    onTabbableIndexChange,
    onTextContentChange,
    onUnmount,
    selected,
    singleSelectionDisabled,
    untabbable,
    imperativeHandle
}: TableHeadRowProps<RowElement, CellElement, TableRowInfo<RowElement>, TableCellInfo<CellElement>>) {
    type RM = TableRowInfo<RowElement>;
    type CM = TableCellInfo<CellElement>;

    return useComponent<UseTableRowReturnType<RowElement, CellElement, RM, CM>>(
        imperativeHandle,
        render,
        TableCellContext,
        useTableRow<RowElement, CellElement, RM, CM>({
            context: useContextWithWarning(TableRowContext, "TableRowContext"),
            info: {
                index,
                untabbable: untabbable || false
            },
            hasCurrentFocusParameters: {
                onCurrentFocusedChanged,
                onCurrentFocusedInnerChanged,
            },
            linearNavigationParameters: {
                navigatePastEnd: navigatePastEnd || "wrap",
                navigatePastStart: navigatePastStart || "wrap"
            },
            multiSelectionChildParameters: {
                initiallyMultiSelected: initiallyMultiSelected ?? null,
                multiSelectionDisabled: multiSelectionDisabled || false,
                onMultiSelectChange
            },
            rovingTabIndexParameters: {
                initiallyTabbedIndex,
                onTabbableIndexChange,
                untabbable: untabbable || false
            },
            singleSelectionChildParameters: {
                singleSelectionDisabled: singleSelectionDisabled || false
            },
            tableRowParameters: {
                selected,
                tagTableRow
            },
            textContentParameters: {
                getText: useDefault("getText", getText),
                onTextContentChange
            },
            refElementParameters: {
                onElementChange: onElementChange ?? null,
                onMount: onMount ?? null,
                onUnmount: onUnmount ?? null
            }
        })
    )
});


export type TableBodyRowProps<RowElement extends keyof JSX.IntrinsicElements, CellElement extends keyof JSX.IntrinsicElements, RsM extends TableSectionInfo<RowElement>, RM extends TableRowInfo<RowElement>, CM extends TableCellInfo<CellElement>> =
    OmitStrong<TableBodyRowOuterProps<RowElement, RsM> & TableBodyRowInnerProps<RowElement, CellElement, RM, CM>, "render"> & {
        render(info: ({ hide: true } & UseTableRowOuterReturnType<RowElement, RsM>) | ({ hide: false } & UseTableRowReturnType<RowElement, CellElement, RM, CM>)): VNode;
    }

export const TableBodyRow = /* @__PURE__ */ memo(function TableBodyRow<RowElement extends keyof JSX.IntrinsicElements, CellElement extends keyof JSX.IntrinsicElements>({
    index,
    render,
    imperativeHandle,
    onElementChange,
    onMount,
    onUnmount,
    tagTableRow,
    getText,
    initiallyMultiSelected,
    initiallyTabbedIndex,
    multiSelectionDisabled,
    navigatePastEnd,
    navigatePastStart,
    onCurrentFocusedChanged,
    onCurrentFocusedInnerChanged,
    onMultiSelectChange,
    onTabbableIndexChange,
    onTextContentChange,
    selected,
    singleSelectionDisabled,
    untabbable
}: TableBodyRowProps<RowElement, CellElement, TableSectionInfo<RowElement>, TableRowInfo<RowElement>, TableCellInfo<CellElement>>) {
    type RsM = TableSectionInfo<RowElement>;
    // type RM = TableRowInfo<RowElement>;
    // type CM = TableCellInfo<CellElement>

    return (
        <TableBodyRowOuter
            index={index}
            imperativeHandle={imperativeHandle}
            onElementChange={onElementChange}
            onMount={onMount}
            onUnmount={onUnmount}
            render={(info) => {
                let inner = <TableBodyRowInner
                    index={index}
                    tagTableRow={tagTableRow}
                    getText={getText}
                    imperativeHandle={imperativeHandle}
                    initiallyMultiSelected={initiallyMultiSelected}
                    initiallyTabbedIndex={initiallyTabbedIndex}
                    multiSelectionDisabled={multiSelectionDisabled}
                    navigatePastEnd={navigatePastEnd}
                    navigatePastStart={navigatePastStart}
                    onCurrentFocusedChanged={onCurrentFocusedChanged}
                    onCurrentFocusedInnerChanged={onCurrentFocusedInnerChanged}
                    onElementChange={onElementChange}
                    onMount={onMount}
                    onMultiSelectChange={onMultiSelectChange}
                    onTabbableIndexChange={onTabbableIndexChange}
                    onTextContentChange={onTextContentChange}
                    onUnmount={onUnmount}
                    selected={selected}
                    singleSelectionDisabled={singleSelectionDisabled}
                    untabbable={untabbable}
                    render={render as never}
                />;
                if (info.hide) {
                    return render(info as UseTableRowOuterReturnType<RowElement, RsM> & { hide: true });
                }
                else {
                    return inner;
                }
            }}
        />
    );
});

const TableBodyRowOuter = /* @__PURE__ */ memo(function TableBodyRowOuter<RowElement extends keyof JSX.IntrinsicElements>({
    index,
    render,
    imperativeHandle,
    onElementChange,
    onMount,
    onUnmount,
    cssProperty,
    duration,
    ...void1
}: TableBodyRowOuterProps<RowElement, TableSectionInfo<RowElement>>) {
    type RsM = TableSectionInfo<RowElement>;
    assertEmptyObject(void1);
    return useComponent<UseTableRowOuterReturnType<RowElement, RsM>>(
        imperativeHandle,
        render,
        null,
        useTableRowOuter({
            context: useContextWithWarning(TableProcessedChildrenContext, "TableProcessedChildrenContext"),
            info: { index },
            refElementParameters: { onElementChange, onMount, onUnmount },
            rearrangeableChildParameters: { cssProperty, duration }
        })
    )
});

const TableBodyRowInner = /* @__PURE__ */ memo(function TableBodyRowInner<RowElement extends keyof JSX.IntrinsicElements, CellElement extends keyof JSX.IntrinsicElements>({
    index,
    render,
    getText,
    imperativeHandle,
    initiallyMultiSelected,
    initiallyTabbedIndex,
    multiSelectionDisabled,
    navigatePastEnd,
    navigatePastStart,
    onCurrentFocusedChanged,
    onCurrentFocusedInnerChanged,
    onMultiSelectChange,
    onTabbableIndexChange,
    onTextContentChange,
    selected,
    singleSelectionDisabled,
    tagTableRow,
    untabbable,
    onElementChange,
    onMount,
    onUnmount,
    ...void1
}: TableBodyRowInnerProps<RowElement, CellElement, TableRowInfo<RowElement>, TableCellInfo<CellElement>>) {
    type RM = TableRowInfo<RowElement>;
    type CM = TableCellInfo<CellElement>;

    assertEmptyObject(void1);

    return useComponent<UseTableRowReturnType<RowElement, CellElement, RM, CM>>(
        imperativeHandle,
        render,
        TableCellContext,
        useTableRow<RowElement, CellElement, RM, CM>({
            context: useContextWithWarning(TableRowContext, "TableRowContext"),
            info: {
                index,
                untabbable: untabbable || false
            },
            hasCurrentFocusParameters: {
                onCurrentFocusedChanged,
                onCurrentFocusedInnerChanged,
            },
            linearNavigationParameters: {
                navigatePastEnd: navigatePastEnd || "wrap",
                navigatePastStart: navigatePastStart || "wrap"
            },
            multiSelectionChildParameters: {
                initiallyMultiSelected: initiallyMultiSelected ?? null,
                multiSelectionDisabled: multiSelectionDisabled || false,
                onMultiSelectChange
            },
            rovingTabIndexParameters: {
                initiallyTabbedIndex,
                onTabbableIndexChange,
                untabbable: untabbable || false
            },
            singleSelectionChildParameters: {
                singleSelectionDisabled: singleSelectionDisabled || false
            },
            tableRowParameters: {
                selected,
                tagTableRow
            },
            textContentParameters: {
                getText: useDefault("getText", getText),
                onTextContentChange
            },
            refElementParameters: {
                onElementChange: onElementChange ?? null,
                onMount: onMount ?? null,
                onUnmount: onUnmount ?? null
            }
        }));
});



export const TableCell = /* @__PURE__ */ memo(function TableCell<CellElement extends keyof JSX.IntrinsicElements>({
    index,
    render,
    colSpan,
    focusSelf,
    getText,
    imperativeHandle,
    onTextContentChange,
    tagTableCell,
    untabbable,
    ...void1
}: TableCellProps<CellElement, TableCellInfo<CellElement>>) {
    type CM = TableCellInfo<CellElement>;
    assertEmptyObject(void1);
    const defaultFocusSelf = useStableCallback((e: TagToElement<CellElement>) => { focus(e as Element as HTMLElement) }, []);
    return useComponent<UseTableCellReturnType<CellElement, CM>>(
        imperativeHandle,
        render,
        null,
        useTableCell({
            context: useContextWithWarning(TableCellContext, "TableCellContext"),
            gridNavigationCellParameters: { colSpan },
            info: {
                focusSelf: focusSelf ?? defaultFocusSelf,
                index,
                untabbable: untabbable || false
            },
            tableCellParameters: {
                tagTableCell
            },
            textContentParameters: {
                getText: useDefault("getText", getText),
                onTextContentChange
            }
        })
    );
});
