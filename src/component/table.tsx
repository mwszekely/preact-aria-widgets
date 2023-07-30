import { Context, createContext, Ref } from "preact";
import { focus, memo, OmitStrong, useStableCallback } from "preact-prop-helpers";
import { Get10, Get2, Get4, Get6, useContextWithWarning } from "../props.js";
import { TableCellInfo, TableRowInfo, useTable, useTableCell, UseTableCellParameters, UseTableCellReturnType, UseTableContext, UseTableParameters, UseTableReturnType, useTableRow, UseTableRowContext, UseTableRowParameters, UseTableRowReturnType, useTableSection, UseTableSectionContext, UseTableSectionParameters, UseTableSectionReturnType } from "../use-table.js";
import { GenericComponentProps, useComponent, useDefault } from "./util.js";

export type TableProps<TableElement extends Element, LabelElement extends Element> = GenericComponentProps<
    UseTableReturnType<TableElement, LabelElement>,
    Get2<UseTableParameters<TableElement, LabelElement>, "labelParameters", "tableParameters">,
    "selectionLimit" | "tagTable"
>;

export type TableSectionProps<SectionElement extends Element, RowElement extends Element, RM extends TableRowInfo<RowElement> = TableRowInfo<RowElement>> = GenericComponentProps<
    UseTableSectionReturnType<SectionElement, RowElement, RM>,
    Get10<UseTableSectionParameters<SectionElement, RowElement, RM>, "gridNavigationParameters", "linearNavigationParameters", "rearrangeableChildrenParameters", "rovingTabIndexParameters", "singleSelectionParameters", "typeaheadNavigationParameters", "paginatedChildrenParameters", "staggeredChildrenParameters", "tableSectionParameters", "refElementParameters">,
    "tagTableSection" | "location"
>;

export type TableRowProps<RowElement extends Element, CellElement extends Element, RM extends TableRowInfo<RowElement>, CM extends TableCellInfo<CellElement>> = GenericComponentProps<
    UseTableRowReturnType<RowElement, CellElement, RM, CM>,
    Get6<UseTableRowParameters<RowElement, CellElement, TableRowInfo<RowElement>, CM>, "textContentParameters", "tableRowParameters", "linearNavigationParameters", "rovingTabIndexParameters", "info", "hasCurrentFocusParameters">,
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
    selectionLimit,
    tagTable,
    imperativeHandle,
    render
}: TableProps<TableElement, LabelElement>) {
    return useComponent(
        imperativeHandle,
        render,
        TableContext,
        useTable<TableElement, LabelElement>({
            labelParameters: { ariaLabel },
            tableParameters: { selectionLimit, tagTable, }
        }));
})

export const TableSection = memo(function TableSection<SectionElement extends Element, RowElement extends Element, CellElement extends Element>({
    disableHomeEndKeys,
    getIndex,
    initiallySelectedIndex,
    untabbable,
    navigatePastEnd,
    navigatePastStart,
    onSelectedIndexChange,
    onTabbableColumnChange,
    onTabbableIndexChange,
    pageNavigationSize,
    paginationMax,
    paginationMin,
    staggered,
    render,
    location,
    ariaPropName,
    selectionMode,
    onNavigateLinear,
    collator,
    noTypeahead,
    onNavigateTypeahead,
    typeaheadTimeout,
    tagTableSection,
    onElementChange,
    onMount,
    onUnmount
}: TableSectionProps<SectionElement, RowElement, TableRowInfo<RowElement>>) {
    untabbable = (untabbable ?? false);
    ariaPropName ??= "aria-selected";
    selectionMode ??= "activation";

    const info = useTableSection<SectionElement, RowElement, CellElement>({
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
            untabbable
        },
        singleSelectionParameters: {
            initiallySelectedIndex,
            onSelectedIndexChange,
            ariaPropName,
            selectionMode
        },
        context: useContextWithWarning(TableContext, "table"),
        tableSectionParameters: {
            tagTableSection, 
            location
        },
        refElementParameters: { onElementChange, onMount, onUnmount }
    })

    return (
        <TableSectionContext.Provider value={info.context}>
            {render(info)}
        </TableSectionContext.Provider>
    )
});

export const TableRow = memo(function TableRow<RowElement extends Element, CellElement extends Element>({
    index,
    getText,
    tagTableRow,
    onTabbableIndexChange,
    navigatePastEnd,
    navigatePastStart,
    selected,
    unselectable,
    initiallyTabbedIndex,
    untabbable,
    info,
    imperativeHandle,
    onCurrentFocusedChanged,
    onCurrentFocusedInnerChanged,
    render
}: TableRowProps<RowElement, CellElement, TableRowInfo<RowElement>, TableCellInfo<CellElement>>, ref?: Ref<any>) {

    return useComponent(
        imperativeHandle,
        render,
        TableRowContext as Context<UseTableRowContext<CellElement, any>>,
        useTableRow({
            info: {
                index,
                unselectable: unselectable || false,
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
    info
}: TableCellProps<CellElement, TableCellInfo<CellElement>>) {
    const defaultFocusSelf = useStableCallback((e: CellElement) => { focus(e as Element as HTMLElement) }, []);

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

