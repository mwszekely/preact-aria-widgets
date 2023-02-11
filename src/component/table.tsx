import { createContext, Ref, VNode } from "preact";
import { useStableCallback } from "preact-prop-helpers";
import { useContext, useImperativeHandle } from "preact/hooks";
import { OmitStrong } from "../props";
import { TableCellInfo, TableRowInfo, useTable, useTableCell, UseTableCellParameters, UseTableCellReturnType, UseTableContext, UseTableParameters, UseTableReturnType, useTableRow, UseTableRowContext, UseTableRowParameters, UseTableRowReturnType, useTableSection, UseTableSectionContext, UseTableSectionParameters, UseTableSectionReturnType } from "../use-table";
import { memoForwardRef, PartialExcept, useDefault } from "./util";

type Get<T, K extends keyof T> = T[K];
type Get2<T, K extends keyof T, K2 extends keyof T[K]> = T[K][K2];

interface TablePropsBase<TableElement extends Element, LabelElement extends Element> extends
    Get<UseTableParameters<TableElement, LabelElement>, "labelParameters">,
    Get<UseTableParameters<TableElement, LabelElement>, "tableParameters"> {
    ref?: Ref<UseTableReturnType<TableElement, LabelElement>>;
}

interface TableSectionPropsBase<SectionElement extends Element, RowElement extends Element, CellElement extends Element, RM extends TableRowInfo<RowElement, CellElement>, CM extends TableCellInfo<CellElement>> extends
    Get<UseTableSectionParameters<SectionElement, RowElement, CellElement, RM>, "gridNavigationParameters">,
    Get<UseTableSectionParameters<SectionElement, RowElement, CellElement, RM>, "linearNavigationParameters">,
    Get<UseTableSectionParameters<SectionElement, RowElement, CellElement, RM>, "rearrangeableChildrenParameters">,
    Get<UseTableSectionParameters<SectionElement, RowElement, CellElement, RM>, "rovingTabIndexParameters">,
    Get<UseTableSectionParameters<SectionElement, RowElement, CellElement, RM>, "singleSelectionParameters">,
    Get<UseTableSectionParameters<SectionElement, RowElement, CellElement, RM>, "paginatedChildrenParameters">,
    Get<UseTableSectionParameters<SectionElement, RowElement, CellElement, RM>, "staggeredChildrenParameters">,
    Get<UseTableSectionParameters<SectionElement, RowElement, CellElement, RM>, "tableSectionParameters"> {
    ref?: Ref<UseTableSectionReturnType<SectionElement, RowElement, CellElement, RM, CM>>;
}

interface TableRowPropsBase<RowElement extends Element, CellElement extends Element, RM extends TableRowInfo<RowElement, CellElement>, CM extends TableCellInfo<CellElement>> extends
    OmitStrong<Get<UseTableRowParameters<RowElement, CellElement, RM, CM>, "tableRowParameters">, never>,
    Get2<UseTableRowParameters<RowElement, CellElement, RM, CM>, "rowAsChildOfGridParameters", "singleSelectionChildParameters">,
    Get2<UseTableRowParameters<RowElement, CellElement, RM, CM>, "rowAsChildOfGridParameters", "managedChildParameters">,
    Get2<UseTableRowParameters<RowElement, CellElement, RM, CM>, "rowAsChildOfGridParameters", "rovingTabIndexChildParameters">,
    Get2<UseTableRowParameters<RowElement, CellElement, RM, CM>, "rowAsChildOfGridParameters", "textContentParameters">,
    Get2<UseTableRowParameters<RowElement, CellElement, RM, CM>, "rowAsParentOfCellsParameters", "linearNavigationParameters">,
    Get2<UseTableRowParameters<RowElement, CellElement, RM, CM>, "rowAsParentOfCellsParameters", "rovingTabIndexParameters"> {
    ref?: Ref<UseTableRowReturnType<RowElement, CellElement, RM, CM>>;
}

interface TableCellPropsBase<CellElement extends Element, CM extends TableCellInfo<CellElement>> extends
    Get<UseTableCellParameters<CellElement, CM>, "tableCellParameters">,
    Get<UseTableCellParameters<CellElement, CM>, "managedChildParameters">,
    Get<UseTableCellParameters<CellElement, CM>, "gridNavigationCellParameters">,
    Get<UseTableCellParameters<CellElement, CM>, "rovingTabIndexChildParameters">,
    Get<UseTableCellParameters<CellElement, CM>, "textContentParameters"> {
    focusSelf: CM["focusSelf"];
    getSortValue: CM["getSortValue"];
    ref?: Ref<UseTableCellReturnType<CellElement, CM>>;
}





export interface TableProps<TableElement extends Element, LabelElement extends Element> extends PartialExcept<TablePropsBase<TableElement, LabelElement>, "tagTable" | "selectionLimit" | "ariaLabel"> {
    render(info: UseTableReturnType<TableElement, LabelElement>): VNode;
}

export interface TableSectionProps<SectionElement extends Element, RowElement extends Element, CellElement extends Element, RM extends TableRowInfo<RowElement, CellElement>, CM extends TableCellInfo<CellElement>> extends PartialExcept<TableSectionPropsBase<SectionElement, RowElement, CellElement, RM, CM>, "tagTableSection" | "location"> {
    render(info: UseTableSectionReturnType<SectionElement, RowElement, CellElement, RM, CM>): VNode;
}

export interface TableRowProps<RowElement extends Element, CellElement extends Element, RM extends TableRowInfo<RowElement, CellElement>, CM extends TableCellInfo<CellElement>> extends PartialExcept<TableRowPropsBase<RowElement, CellElement, RM, CM>, "index" | "tagTableRow" | "ariaPropName"> {
    render(info: UseTableRowReturnType<RowElement, CellElement, RM, CM>): VNode;
}

export interface TableCellProps<CellElement extends Element, CM extends TableCellInfo<CellElement>> extends PartialExcept<TableCellPropsBase<CellElement, CM>, "tagTableCell" | "index" | "getSortValue" | "focusSelf"> {
    render(info: UseTableCellReturnType<CellElement, CM>): VNode;
}


const TableContext = createContext<UseTableContext>(null!);
const TableSectionContext = createContext<UseTableSectionContext<any, any, any, TableRowInfo<any, any>, TableCellInfo<any>>>(null!);
const TableRowContext = createContext<UseTableRowContext<any, any, TableCellInfo<any>>>(null!);

export const Table = memoForwardRef(function TableU<TableElement extends Element, LabelElement extends Element>({
    ariaLabel,
    selectionLimit,
    tagTable,
    render
}: TableProps<TableElement, LabelElement>, ref?: Ref<any>) {
    const info = useTable<TableElement, LabelElement>({
        labelParameters: { ariaLabel },
        tableParameters: { selectionLimit, tagTable }
    });

    useImperativeHandle(ref!, () => info);

    return <TableContext.Provider value={info.context}>{render(info)}</TableContext.Provider>
})

export const TableSection = memoForwardRef(function TableSection<SectionElement extends Element, RowElement extends Element, CellElement extends Element>({
    disableArrowKeys,
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
    tagTableSection
}: TableSectionProps<SectionElement, RowElement, CellElement, TableRowInfo<RowElement, CellElement>, TableCellInfo<CellElement>>) {
    const info = useTableSection<SectionElement, RowElement, CellElement, TableRowInfo<RowElement, CellElement>, TableCellInfo<CellElement>>({
        gridNavigationParameters: { onTabbableColumnChange: onTabbableColumnChange ?? null },
        staggeredChildrenParameters: { staggered: staggered || false },
        linearNavigationParameters: {
            disableArrowKeys: useDefault("disableArrowKeys", disableArrowKeys),
            disableHomeEndKeys: useDefault("disableHomeEndKeys", disableHomeEndKeys),
            navigatePastEnd: navigatePastEnd ?? "wrap",
            navigatePastStart: navigatePastStart ?? "wrap",
            pageNavigationSize: useDefault("pageNavigationSize", pageNavigationSize)
        },
        paginatedChildrenParameters: {
            paginationMax: paginationMax ?? null,
            paginationMin: paginationMin ?? null
        },
        rearrangeableChildrenParameters: { getIndex: useDefault("getIndex", getIndex) },
        rovingTabIndexParameters: { onTabbableIndexChange: onTabbableIndexChange ?? null, untabbable: untabbable ?? false },
        singleSelectionParameters: { initiallySelectedIndex: initiallySelectedIndex ?? null, onSelectedIndexChange: onSelectedIndexChange ?? null },
        context: useContext(TableContext),
        tableSectionParameters: { tagTableSection, location },
    })

    return (
        <TableSectionContext.Provider value={info.context}>
            {render(info)}
        </TableSectionContext.Provider>
    )
});

export const TableRow = memoForwardRef(function TableRowU<RowElement extends Element, Cellement extends Element>({
    index,
    getText,
    tagTableRow,
    disableArrowKeys,
    disableHomeEndKeys,
    onTabbableIndexChange,
    ariaPropName,
    disabled,
    navigatePastEnd,
    navigatePastStart,
    selected,
    selectionMode,
    hidden,

    render
}: TableRowProps<RowElement, Cellement, TableRowInfo<RowElement, Cellement>, TableCellInfo<Cellement>>, ref?: Ref<any>) {
    const cx1 = useContext(TableSectionContext);
    console.assert(cx1 != null, `This TableRow is not contained within a TableSection`);
    const info = useTableRow<RowElement, Cellement, TableRowInfo<RowElement, Cellement>, TableCellInfo<Cellement>>({
        rowAsChildOfGridParameters: {
            completeGridNavigationRowParameters: {},
            context: cx1,
            managedChildParameters: { index },
            rovingTabIndexChildParameters: { hidden: hidden ?? false },
            singleSelectionChildParameters: {
                ariaPropName,
                selectionMode: useDefault("selectionMode", selectionMode),
                disabled: disabled ?? false
            },
            textContentParameters: {
                getText: useDefault("getText", getText)
            }
        },
        rowAsParentOfCellsParameters: {
            linearNavigationParameters: {
                disableArrowKeys: useDefault("disableArrowKeys", disableArrowKeys),
                disableHomeEndKeys: useDefault("disableHomeEndKeys", disableHomeEndKeys),
                navigatePastEnd: navigatePastEnd ?? "wrap",
                navigatePastStart: navigatePastStart ?? "wrap"
            },
            rovingTabIndexParameters: { onTabbableIndexChange: onTabbableIndexChange ?? null }
        },
        tableRowParameters: {
            selected: selected ?? null,
            tagTableRow
        }
    });

    useImperativeHandle(ref!, () => info);

    return <TableRowContext.Provider value={info.context}>{render(info)}</TableRowContext.Provider>
})

export const TableCell = memoForwardRef(function TableCell<CellElement extends Element>({
    index,
    getText,
    focusSelf,
    hidden,
    tagTableCell,
    render,
    colSpan,
    getSortValue
}: TableCellProps<CellElement, TableCellInfo<CellElement>>, ref?: Ref<any>) {
    const context = (useContext(TableRowContext) as UseTableRowContext<any, CellElement, TableCellInfo<CellElement>>);
    console.assert(context != null, `This TableCell is not contained within a TableRow`);
    const defaultFocusSelf = useStableCallback((e: CellElement) => { (e as Element as HTMLElement).focus?.() }, []);
    const info = useTableCell<CellElement, TableCellInfo<CellElement>>({
        completeGridNavigationCellParameters: { getSortValue, focusSelf: focusSelf ?? defaultFocusSelf },
        context,
        gridNavigationCellParameters: { colSpan: colSpan ?? 1 },
        managedChildParameters: { index },
        rovingTabIndexChildParameters: { hidden: hidden ?? false },
        tableCellParameters: { tagTableCell },
        textContentParameters: { getText: useDefault("getText", getText) }
    });

    useImperativeHandle(ref!, () => info);

    return render(info);
})

