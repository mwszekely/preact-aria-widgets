import { Context, createContext } from "preact";
import { OmitStrong, assertEmptyObject, focus, memo, useStableCallback } from "preact-prop-helpers";
import { Get12, Get4, Get8, useContextWithWarning } from "../props.js";
import { TableCellInfo, TableRowInfo, UseTableCellParameters, UseTableCellReturnType, UseTableContext, UseTableParameters, UseTableReturnType, UseTableRowContext, UseTableRowParameters, UseTableRowReturnType, UseTableSectionContext, UseTableSectionParameters, UseTableSectionReturnType, useTable, useTableCell, useTableRow, useTableSection } from "../use-table.js";
import { GenericComponentProps, useComponent, useDefault } from "./util.js";

export type TableProps<TableElement extends Element, LabelElement extends Element> = GenericComponentProps<
    UseTableReturnType<TableElement, LabelElement>,
    Get4<UseTableParameters<TableElement, LabelElement>, "labelParameters", "tableParameters", "singleSelectionParameters", "multiSelectionParameters">,
    "tagTable"
>;

export type TableSectionProps<SectionElement extends Element, RowElement extends Element, RM extends TableRowInfo<RowElement> = TableRowInfo<RowElement>> = GenericComponentProps<
    UseTableSectionReturnType<SectionElement, RowElement, RM>,
    Get12<UseTableSectionParameters<SectionElement, RowElement, RM>, "gridNavigationParameters", "linearNavigationParameters", "rearrangeableChildrenParameters", "rovingTabIndexParameters", "singleSelectionParameters", "typeaheadNavigationParameters", "paginatedChildrenParameters", "staggeredChildrenParameters", "tableSectionParameters", "refElementParameters", "singleSelectionParameters", "multiSelectionParameters">,
    "tagTableSection" | "location"
>;

export type TableRowProps<RowElement extends Element, CellElement extends Element, RM extends TableRowInfo<RowElement>, CM extends TableCellInfo<CellElement>> = GenericComponentProps<
    UseTableRowReturnType<RowElement, CellElement, RM, CM>,
    Get8<UseTableRowParameters<RowElement, CellElement, TableRowInfo<RowElement>, CM>, "textContentParameters", "tableRowParameters", "linearNavigationParameters", "rovingTabIndexParameters", "info", "hasCurrentFocusParameters", "singleSelectionChildParameters", "multiSelectionChildParameters">,
    "index" | "tagTableRow"
> & { info?: OmitStrong<RM, keyof TableRowInfo<RowElement>> };

export type TableCellProps<CellElement extends Element, CM extends TableCellInfo<CellElement>> = GenericComponentProps<
    UseTableCellReturnType<CellElement, CM>,
    Get4<UseTableCellParameters<CellElement, TableCellInfo<CellElement>>, "tableCellParameters", "gridNavigationCellParameters", "textContentParameters", "info">,
    "index" | "tagTableCell" | "getSortValue"
> & { info?: OmitStrong<CM, keyof TableCellInfo<CellElement>> };


const TableContext = createContext<UseTableContext>(null!);
const TableSectionContext = createContext<UseTableSectionContext<any, TableRowInfo<any>>>(null!);
const TableRowContext = createContext<UseTableRowContext<any, TableCellInfo<any>>>(null!);

export const Table = memo(function Table<TableElement extends Element, LabelElement extends Element>({
    ariaLabel,
    singleSelectionMode,
    multiSelectionMode,
    tagTable,
    imperativeHandle,
    render,
    ...void1
}: TableProps<TableElement, LabelElement>) {
    assertEmptyObject(void1);
    return useComponent(
        imperativeHandle,
        render,
        TableContext,
        useTable<TableElement, LabelElement>({
            labelParameters: { ariaLabel },
            tableParameters: { tagTable, },
            singleSelectionParameters: { singleSelectionMode: singleSelectionMode || "disabled" },
            multiSelectionParameters: { multiSelectionMode: multiSelectionMode || "disabled" },
        }));
})

export const TableSection = memo(function TableSection<SectionElement extends Element, RowElement extends Element, CellElement extends Element>({
    disableHomeEndKeys,
    getIndex,
    initiallySingleSelectedIndex,
    untabbable,
    navigatePastEnd,
    navigatePastStart,
    onSingleSelectedIndexChange,
    onTabbableColumnChange,
    onTabbableIndexChange,
    pageNavigationSize,
    paginationMax,
    paginationMin,
    staggered,
    render,
    location,
    imperativeHandle,
    multiSelectionAriaPropName,
    onSelectionChange,
    singleSelectionAriaPropName,
    onNavigateLinear,
    collator,
    noTypeahead,
    onNavigateTypeahead,
    typeaheadTimeout,
    tagTableSection,
    onElementChange,
    onMount,
    onUnmount,
    ...void1
}: TableSectionProps<SectionElement, RowElement, TableRowInfo<RowElement>>) {
    assertEmptyObject(void1);
    return useComponent(
        imperativeHandle,
        render,
        TableSectionContext,
        useTableSection<SectionElement, RowElement, CellElement>({
            gridNavigationParameters: {
                onTabbableColumnChange: onTabbableColumnChange
            },
            staggeredChildrenParameters: {
                staggered: staggered || false
            },
            typeaheadNavigationParameters: {
                onNavigateTypeahead,
                collator: useDefault("collator", collator),
                noTypeahead: useDefault("noTypeahead", noTypeahead),
                typeaheadTimeout: useDefault("typeaheadTimeout", typeaheadTimeout)
            },
            linearNavigationParameters: {
                onNavigateLinear,
                disableHomeEndKeys: useDefault("disableHomeEndKeys", disableHomeEndKeys),
                navigatePastEnd: navigatePastEnd ?? "wrap",
                navigatePastStart: navigatePastStart ?? "wrap",
                pageNavigationSize: useDefault("pageNavigationSize", pageNavigationSize)
            },
            paginatedChildrenParameters: {
                paginationMax,
                paginationMin,
            },
            rearrangeableChildrenParameters: {
                getIndex: useDefault("getIndex", getIndex)
            },
            rovingTabIndexParameters: {
                onTabbableIndexChange,
                untabbable: untabbable || false,
            },
            singleSelectionParameters: {
                initiallySingleSelectedIndex,
                onSingleSelectedIndexChange,
                singleSelectionAriaPropName
            },
            multiSelectionParameters: {
                multiSelectionAriaPropName,
                onSelectionChange,
            },
            context: useContextWithWarning(TableContext, "table"),
            tableSectionParameters: {
                tagTableSection,
                location
            },
            refElementParameters: { onElementChange, onMount, onUnmount }
        })
    );
});

export const TableRow = memo(function TableRow<RowElement extends Element, CellElement extends Element>({
    index,
    getText,
    tagTableRow,
    onTabbableIndexChange,
    navigatePastEnd,
    navigatePastStart,
    selected,
    initiallyTabbedIndex,
    untabbable,
    info,
    imperativeHandle,
    onCurrentFocusedChanged,
    onCurrentFocusedInnerChanged,
    render,
    initiallyMultiSelected,
    multiSelectionDisabled,
    onMultiSelectChange,
    singleSelectionDisabled,
    ...void1
}: TableRowProps<RowElement, CellElement, TableRowInfo<RowElement>, TableCellInfo<CellElement>>) {

    assertEmptyObject(void1);

    return useComponent(
        imperativeHandle,
        render,
        TableRowContext as Context<UseTableRowContext<CellElement, any>>,
        useTableRow({
            info: {
                index,
                untabbable: untabbable || false,
                ...info
            },
            context: useContextWithWarning(TableSectionContext, "table section") as UseTableSectionContext<RowElement, TableRowInfo<RowElement>>,
            textContentParameters: {
                getText: useDefault("getText", getText)
            },
            tableRowParameters: {
                selected,
                tagTableRow
            },
            hasCurrentFocusParameters: {
                onCurrentFocusedChanged,
                onCurrentFocusedInnerChanged,
            },
            linearNavigationParameters: {
                navigatePastEnd: navigatePastEnd || "wrap",
                navigatePastStart: navigatePastStart || "wrap"
            },
            rovingTabIndexParameters: {
                onTabbableIndexChange: onTabbableIndexChange || null,
                initiallyTabbedIndex: initiallyTabbedIndex ?? null,
                untabbable: untabbable || false
            },
            singleSelectionChildParameters: { singleSelectionDisabled: singleSelectionDisabled || false },
            multiSelectionChildParameters: { multiSelectionDisabled: multiSelectionDisabled || false, initiallyMultiSelected: initiallyMultiSelected || false, onMultiSelectChange }
        }));
})

export const TableCell = memo(function TableCell<CellElement extends Element>({
    index,
    getText,
    focusSelf,
    untabbable,
    tagTableCell,
    render,
    colSpan,
    imperativeHandle,
    getSortValue,
    info,
    ...void1
}: TableCellProps<CellElement, TableCellInfo<CellElement>>) {
    const defaultFocusSelf = useStableCallback((e: CellElement) => { focus(e as Element as HTMLElement) }, []);
    assertEmptyObject(void1);
    return useComponent(
        imperativeHandle,
        render,
        null,
        useTableCell<CellElement>({
            info: {
                index,
                focusSelf: focusSelf ?? defaultFocusSelf,
                untabbable: untabbable || false,
                getSortValue
            },
            context: useContextWithWarning(TableRowContext, "table row") as UseTableRowContext<CellElement, TableCellInfo<CellElement>>,
            gridNavigationCellParameters: {
                colSpan: colSpan ?? 1
            },
            tableCellParameters: {
                tagTableCell
            },
            textContentParameters: {
                getText: useDefault("getText", getText)
            }
        }))

})

