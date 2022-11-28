import { createContext, createElement, h, Ref, VNode } from "preact";
import { useCallback, useContext, useImperativeHandle } from "preact/hooks";
import { ElementToTag, PropModifier } from "../props";
import { useTable, UseTableCellParameters, UseTableRowParameters, UseTableSectionContext, useTableCell, useTableRow, useTableSection, UseTableSectionParameters, UseTableParameters, TableRowInfo, UseTableRowReturnType, UseTableCellReturnType, UseTableSectionReturnType, UseTableReturnType, TableCellInfo, UseTableRowContext } from "../use-table";
import { memoForwardRef, PartialExcept } from "./util";

type Get<T, K extends keyof T> = T[K];
type Get2<T, K extends keyof T, K2 extends keyof T[K]> = T[K][K2];

interface TablePropsBase<TableElement extends Element, LabelElement extends Element> extends
    Get<UseTableParameters<TableElement, LabelElement>, "labelParameters">,
    Get<UseTableParameters<TableElement, LabelElement>, "tableParameters"> {
    ref?: Ref<UseTableReturnType<TableElement, LabelElement>>;
}

interface TableSectionPropsBase<SectionElement extends Element, RowElement extends Element, RM extends TableRowInfo<RowElement>> extends
    Get<UseTableSectionParameters<SectionElement, RowElement, RM>, "gridNavigationParameters">,
    Get<UseTableSectionParameters<SectionElement, RowElement, RM>, "linearNavigationParameters">,
    Get<UseTableSectionParameters<SectionElement, RowElement, RM>, "rearrangeableChildrenParameters">,
    Get<UseTableSectionParameters<SectionElement, RowElement, RM>, "rovingTabIndexParameters">,
    Get<UseTableSectionParameters<SectionElement, RowElement, RM>, "singleSelectionParameters">,
    Get<UseTableSectionParameters<SectionElement, RowElement, RM>, "sortableChildrenParameters">,
    Get<UseTableSectionParameters<SectionElement, RowElement, RM>, "tableSectionParameters">,
    Get<UseTableSectionParameters<SectionElement, RowElement, RM>, "typeaheadNavigationParameters"> {
    ref?: Ref<UseTableSectionReturnType<SectionElement, RowElement, RM>>;
}

interface TableRowPropsBase<RowElement extends Element, CellElement extends Element, RM extends TableRowInfo<RowElement>, CM extends TableCellInfo<CellElement>> extends
    Omit<Get<UseTableRowParameters<RowElement, CellElement, RM, CM>, "tableRowParameters">, "location">,
    Get2<UseTableRowParameters<RowElement, CellElement, RM, CM>, "asChildRowParameters", "singleSelectionChildParameters">,
    Get2<UseTableRowParameters<RowElement, CellElement, RM, CM>, "asChildRowParameters", "managedChildParameters">,
    Get2<UseTableRowParameters<RowElement, CellElement, RM, CM>, "asChildRowParameters", "sortableChildParameters">,
    Get2<UseTableRowParameters<RowElement, CellElement, RM, CM>, "asChildRowParameters", "rovingTabIndexChildParameters">,
    Get2<UseTableRowParameters<RowElement, CellElement, RM, CM>, "asChildRowParameters", "typeaheadNavigationChildParameters">,
    Get2<UseTableRowParameters<RowElement, CellElement, RM, CM>, "asParentRowParameters", "linearNavigationParameters">,
    Get2<UseTableRowParameters<RowElement, CellElement, RM, CM>, "asParentRowParameters", "rovingTabIndexParameters">,
    Get2<UseTableRowParameters<RowElement, CellElement, RM, CM>, "asParentRowParameters", "typeaheadNavigationParameters"> {
    ref?: Ref<UseTableRowReturnType<RowElement, CellElement, RM, CM>>;
}

interface TableCellPropsBase<CellElement extends Element, CM extends TableCellInfo<CellElement>> extends
    Get<UseTableCellParameters<CellElement, CM>, "tableCellParameters">,
    Get<UseTableCellParameters<CellElement, CM>, "managedChildParameters">,
    Get<UseTableCellParameters<CellElement, CM>, "gridNavigationCellParameters">,
    Get<UseTableCellParameters<CellElement, CM>, "rovingTabIndexChildParameters">,
    Get<UseTableCellParameters<CellElement, CM>, "pressParameters">,
    Get<UseTableCellParameters<CellElement, CM>, "typeaheadNavigationChildParameters"> {
    ref?: Ref<UseTableCellReturnType<CellElement, CM>>;
}





export interface TableProps<TableElement extends Element, LabelElement extends Element> extends TablePropsBase<TableElement , LabelElement > {
    render(info: UseTableReturnType<TableElement, LabelElement>): VNode;
}

export interface TableSectionProps<SectionElement extends Element, RowElement extends Element, RM extends TableRowInfo<RowElement>> extends TableSectionPropsBase<SectionElement , RowElement , RM > {
    render(info: UseTableSectionReturnType<SectionElement, RowElement, RM>): VNode;
}

export interface TableRowProps<RowElement extends Element, CellElement extends Element, RM extends TableRowInfo<RowElement>, CM extends TableCellInfo<CellElement>> extends TableRowPropsBase<RowElement , CellElement , RM , CM> {
    render(info: UseTableRowReturnType<RowElement, CellElement, RM, CM>): VNode;
}

export interface TableCellProps<CellElement extends Element, CM extends TableCellInfo<CellElement>> extends PartialExcept<TableCellPropsBase<CellElement, CM>, "tagTableCell" | "text" | "index"> {
    render(info: UseTableCellReturnType<CellElement, CM>): VNode;
}

//const LocationContext = createContext<"head" | "body" | "foot">(null!);

const TableSectionContext = createContext<UseTableSectionContext<any, any, TableRowInfo<any>>>(null!);
const TableRowContext = createContext<UseTableRowContext<any, any, TableCellInfo<any>>>(null!);
//const TableRowContext = createContext<UseTableRow<any, any, any, any, any, any>>(null!);
//const TableCellContext = createContext<UseTableCell<any, any, any>>(null!);

function defaultRenderTable<TableElement extends Element, LabelElement extends Element>({ tagTable, makePropsTable }: { tagTable: ElementToTag<TableElement>, makePropsTable: (info: UseTableReturnType<TableElement, LabelElement>) => h.JSX.HTMLAttributes<TableElement> }) {
    return function (info: UseTableReturnType<TableElement, LabelElement>) {
        return createElement(tagTable as never, (makePropsTable(info)));
    }
}

function defaultRenderTableSection<TableBodyElement extends Element, RowElement extends Element, CellElement extends Element, M extends TableRowInfo<RowElement>>({ tagTableBody, makePropsTableBody }: { tagTableBody: ElementToTag<TableBodyElement>, makePropsTableBody: (info: UseTableSectionReturnType<TableBodyElement, RowElement, M>) => h.JSX.HTMLAttributes<TableBodyElement> }) {
    return function (info: UseTableSectionReturnType<TableBodyElement, RowElement, M>, modifyPropsTableBody: PropModifier<TableBodyElement>) {
        return createElement(tagTableBody as never, modifyPropsTableBody(makePropsTableBody(info)));
    }
}
/*
export function defaultRenderTableHead<TableHeadElement extends Element>({ tagTableHead, makePropsTableHead }: { tagTableHead: ElementToTag<TableHeadElement>, makePropsTableHead: () => h.JSX.HTMLAttributes<TableHeadElement> }) {
    return function (modifyPropsTableHead: PropModifier<TableHeadElement>) {
        return createElement(tagTableHead as never, modifyPropsTableHead(makePropsTableHead()));
    }
}

export function defaultRenderTableFoot<TableFootElement extends Element>({ tagTableFoot, makePropsTableFoot }: { tagTableFoot: ElementToTag<TableFootElement>, makePropsTableFoot: () => h.JSX.HTMLAttributes<TableFootElement> }) {
    return function (modifyPropsTableFoot: PropModifier<TableFootElement>) {
        return createElement(tagTableFoot as never, modifyPropsTableFoot(makePropsTableFoot()));
    }
}*/

function defaultRenderTableRow<RowElement extends Element, CellElement extends Element, RM extends TableRowInfo<RowElement>, CM extends TableCellInfo<CellElement>>({ tagTableRow, makePropsTableRow }: { tagTableRow: ElementToTag<RowElement>, makePropsTableRow: (info: UseTableRowReturnType<RowElement, CellElement, RM, CM>) => h.JSX.HTMLAttributes<RowElement> }) {
    return function (info: UseTableRowReturnType<RowElement, CellElement, RM, CM>, modifyPropsTableRow: PropModifier<RowElement>) {
        return createElement(tagTableRow as never, modifyPropsTableRow(makePropsTableRow(info)));
    }
}

function defaultRenderTableCell<CellElement extends Element, CM extends TableCellInfo<CellElement>>({ tagTableCell, makePropsTableCell }: { tagTableCell: ElementToTag<CellElement>, makePropsTableCell: (info: UseTableCellReturnType<CellElement, CM>) => h.JSX.HTMLAttributes<CellElement> }) {
    return function (info: UseTableCellReturnType<CellElement, CM>) {
        return createElement(tagTableCell as never, (makePropsTableCell(info)));
    }
}

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

    return (render(info))
})

export const TableSection = memoForwardRef(function TableSection<SectionElement extends Element, RowElement extends Element>({
    collator,
    compare,
    disableArrowKeys,
    disableHomeEndKeys,
    getIndex,
    initiallySelectedIndex,
    untabbable,
    navigatePastEnd,
    navigatePastStart,
    noTypeahead,
    onSelectedIndexChange,
    onTabbableColumnChange,
    onTabbableIndexChange,
    pageNavigationSize,
    render,
    tagTableSection,
    typeaheadTimeout
}: TableSectionProps<SectionElement, RowElement, TableRowInfo<RowElement>>) {
    const info = useTableSection<SectionElement, RowElement, TableRowInfo<RowElement>>({
        gridNavigationParameters: { onTabbableColumnChange },
        linearNavigationParameters: { disableArrowKeys, disableHomeEndKeys, navigatePastEnd, navigatePastStart, pageNavigationSize },
        rearrangeableChildrenParameters: { getIndex },
        rovingTabIndexParameters: { onTabbableIndexChange, untabbable },
        singleSelectionParameters: { initiallySelectedIndex, onSelectedIndexChange },
        sortableChildrenParameters: { compare },
        tableSectionParameters: { tagTableSection },
        typeaheadNavigationParameters: { collator, noTypeahead, typeaheadTimeout }
    })

    return (
        <TableSectionContext.Provider value={info.context}>
            {render(info)}
        </TableSectionContext.Provider>
    )
});
/*
export const TableBody = memoForwardRef(function TableBodyU<SectionElement extends Element, RowElement extends Element, Cellement extends Element, CR = undefined, CC = undefined, KR extends string = never>({ render }: TableBodyProps<SectionElement, RowElement, Cellement, CR, CC, KR>, ref?: Ref<any>) {
    const { useTableBodyProps, ...sectionInfo } = useContext(TableBodyContext)({});

    useImperativeHandle(ref!, () => sectionInfo);

    return <LocationContext.Provider value="body">{render(sectionInfo, useTableBodyProps)}</LocationContext.Provider>
})

export const TableHead = memoForwardRef(function TableHeadU<T extends Element>({ render, tagTableHead }: TableHeadProps<T>) {
    const useTableSectionPropsBase = useContext(TableSectionContext);
    const useTableSectionProps: PropModifier<T> = (props) => useTableSectionPropsBase(tagTableHead, "head", props);
    return <LocationContext.Provider value="head">{(render(useTableSectionProps))}</LocationContext.Provider>
})

export const TableFoot = memoForwardRef(function TableFootU<T extends Element>({ render, tagTableFoot }: TableFootProps<T>) {
    const useTableSectionPropsBase = useContext(TableSectionContext);
    const useTableSectionProps: PropModifier<T> = (props) => useTableSectionPropsBase(tagTableFoot, "foot", props);
    return <LocationContext.Provider value="foot">{(render(useTableSectionProps))}</LocationContext.Provider>
})*/

export const TableRow = memoForwardRef(function TableRowU<RowElement extends Element, Cellement extends Element>({
    index,
    text,
    tagTableRow,
    collator,
    disableArrowKeys,
    disableHomeEndKeys,
    noTypeahead,
    onTabbableIndexChange,
    typeaheadTimeout,
    ariaPropName,
    disabled,
    untabbable,
    navigatePastEnd,
    navigatePastStart,
    selected,
    selectionMode,
    getSortValue,
    hidden,

    render
}: TableRowProps<RowElement, Cellement, TableRowInfo<RowElement>, TableCellInfo<Cellement>>, ref?: Ref<any>) {
    const cx1 = useContext(TableSectionContext);
    const info = useTableRow<RowElement, Cellement, TableRowInfo<RowElement>, TableCellInfo<Cellement>>({
        asChildRowParameters: {
            completeGridNavigationRowParameters: {},
            context: cx1,
            managedChildParameters: { index },
            rovingTabIndexChildParameters: { hidden: hidden ?? false },
            sortableChildParameters: { getSortValue },
            singleSelectionChildParameters: { ariaPropName, selectionMode, disabled },
            typeaheadNavigationChildParameters: { text }
        },
        asParentRowParameters: {
            linearNavigationParameters: { disableArrowKeys, disableHomeEndKeys, navigatePastEnd, navigatePastStart },
            rovingTabIndexParameters: { onTabbableIndexChange, untabbable },
            typeaheadNavigationParameters: { collator, noTypeahead, typeaheadTimeout }
        },
        tableRowParameters: { selected, tagTableRow }
    });

    useImperativeHandle(ref!, () => info);

    return <TableRowContext.Provider value={info.context}>{render(info)}</TableRowContext.Provider>
})

export const TableCell = memoForwardRef(function TableCell<CellElement extends Element>({
    index,
    text,
    focusSelf,
    hidden,
    tagTableCell,
    render,
    colSpan,
    exclude,
    onPressSync,
}: TableCellProps<CellElement, TableCellInfo<CellElement>>, ref?: Ref<any>) {
    const context = (useContext(TableRowContext) as UseTableRowContext<any, CellElement, TableCellInfo<CellElement>>);
    const focusSelfDefault = useCallback((e: any) => { e?.focus(); }, []);
    const info = useTableCell({
        completeGridNavigationCellParameters: {},
        context,
        gridNavigationCellParameters: { colSpan: colSpan ?? 1 },
        managedChildParameters: { index },
        rovingTabIndexChildParameters: { hidden: hidden ?? false },
        pressParameters: { exclude, focusSelf: focusSelf ?? focusSelfDefault, onPressSync },
        tableCellParameters: { tagTableCell },
        typeaheadNavigationChildParameters: { text },
        /* listNavigation: { text },
         managedChild: { index, flags },
         rovingTabIndex: { focusSelf, hidden, noModifyTabIndex },
         hasFocus: { getDocument, getWindow, onActiveElementChange, onElementChange, onFocusedChanged, onFocusedInnerChanged, onLastActiveElementChange, onLastFocusedChanged, onLastFocusedInnerChanged, onMount, onUnmount, onWindowFocusedChange },
         subInfo,
         tableCell: {
             value,
             headerType,
             tagTableCell,
             location: useContext(LocationContext)
         }*/
    });

    useImperativeHandle(ref!, () => info);

    return render(info);
})

