import { createContext, h, Ref, VNode } from "preact";
import { forwardRef } from "preact/compat";
import { useContext } from "preact/hooks";
import { useAriaTable, UseAriaTableBody, UseAriaTableBodyParameters, UseAriaTableBodyReturnTypeInfo, UseAriaTableCell, UseAriaTableCellParameters, UseAriaTableCellReturnTypeInfo, UseAriaTableParameters, UseAriaTableReturnTypeInfo, UseAriaTableRow, UseAriaTableRowParameters, UseAriaTableRowReturnTypeInfo } from "../use-table";

type Get<T, K extends keyof T> = T[K];
type Get2<T, K extends keyof T, K2 extends keyof T[K]> = T[K][K2];

export interface TableProps<TableElement extends Element, RowElement extends Element, CellElement extends Element> extends
    Get<UseAriaTableParameters, "linearNavigation">,
    Get<UseAriaTableParameters, "listNavigation">,
    Get<UseAriaTableParameters, "managedChildren">,
    Get<UseAriaTableParameters, "rovingTabIndex">,
    Get<UseAriaTableParameters, "typeaheadNavigation"> {
    //tagTable: ElementToTag<TableElement>;
    //propsTable(): h.JSX.HTMLAttributes<TableElement>;
    render?(info: UseAriaTableReturnTypeInfo<RowElement, CellElement>, tableProps: h.JSX.HTMLAttributes<TableElement>): VNode;
}

export interface TableBodyProps<SectionElement extends Element, RowElement extends Element, CellElement extends Element> extends UseAriaTableBodyParameters {
    render?(info: UseAriaTableBodyReturnTypeInfo<RowElement, CellElement>, tableBodyProps: h.JSX.HTMLAttributes<SectionElement>): VNode;
}
export interface TableHeadProps<SectionElement extends Element> {
    render?(tableHeadProps: h.JSX.HTMLAttributes<SectionElement>): VNode;
}
export interface TableFootProps<SectionElement extends Element> {
    render?(tableFootProps: h.JSX.HTMLAttributes<SectionElement>): VNode;
}

export interface TableRowProps<RowElement extends Element, CellElement extends Element> extends
    Get2<UseAriaTableRowParameters<CellElement>, "asChildRowOfSection", "listNavigation">,
    Get2<UseAriaTableRowParameters<CellElement>, "asChildRowOfSection", "managedChild">,
    Get2<UseAriaTableRowParameters<CellElement>, "asChildRowOfSection", "rovingTabIndex">,
    Get2<UseAriaTableRowParameters<CellElement>, "asParentRowOfCells", "linearNavigation">,
    Get2<UseAriaTableRowParameters<CellElement>, "asParentRowOfCells", "listNavigation">,
    Get2<UseAriaTableRowParameters<CellElement>, "asParentRowOfCells", "managedChildren">,
    Get2<UseAriaTableRowParameters<CellElement>, "asParentRowOfCells", "rovingTabIndex">,
    Get2<UseAriaTableRowParameters<CellElement>, "asParentRowOfCells", "typeaheadNavigation"> {
    render?(info: UseAriaTableRowReturnTypeInfo<RowElement, CellElement>, tableRowProps: h.JSX.HTMLAttributes<RowElement>): VNode;
}

export interface TableCellProps<CellElement extends Element> extends
    Get<UseAriaTableCellParameters, "listNavigation">,
    Get<UseAriaTableCellParameters, "managedChild">,
    Get<UseAriaTableCellParameters, "rovingTabIndex">,
    Get<UseAriaTableCellParameters, "listNavigation">,
    Get<UseAriaTableCellParameters, "rovingTabIndex">,
    Omit<Get<UseAriaTableCellParameters, "subInfo">, "location"> {
    render?(info: UseAriaTableCellReturnTypeInfo<CellElement>, tableRowProps: h.JSX.HTMLAttributes<CellElement>): VNode;
}

const LocationContext = createContext<"head" | "body" | "foot">(null!);

const TableBodyContext = createContext<UseAriaTableBody<any, any, any>>(null!);
const TableRowContext = createContext<UseAriaTableRow<any, any>>(null!);
const TableCellContext = createContext<UseAriaTableCell<any>>(null!);

function defaultRenderTable(info: UseAriaTableReturnTypeInfo<any, any>, tableProps: h.JSX.HTMLAttributes<any>) {
    return <table {...tableProps} />
}

function defaultRenderTableBody(info: UseAriaTableBodyReturnTypeInfo<any, any>, bodyProps: h.JSX.HTMLAttributes<any>) {
    return <tbody {...bodyProps} />
}

function defaultRenderTableHead(headProps: h.JSX.HTMLAttributes<any>) {
    return <thead {...headProps} />
}

function defaultRenderTableFoot(footProps: h.JSX.HTMLAttributes<any>) {
    return <tfoot {...footProps} />
}

function defaultRenderTableRow(info: UseAriaTableRowReturnTypeInfo<any, any>, rowProps: h.JSX.HTMLAttributes<any>) {
    return <tr {...rowProps} />
}

function defaultRenderTableCell(info: UseAriaTableCellReturnTypeInfo<any>, cellProps: h.JSX.HTMLAttributes<any>) {
    return <td {...cellProps} />
}

function TableU<TableElement extends Element, SectionElement extends Element, RowElement extends Element, Cellement extends Element>({
    collator,
    disableArrowKeys,
    disableHomeEndKeys,
    initialIndex,
    noTypeahead,
    onAfterChildLayoutEffect,
    onChildrenMountChange,
    onTabbableIndexChange,
    onTabbableRender,
    onTabbedInTo,
    onTabbedOutOf,
    typeaheadTimeout,
    render
}: TableProps<TableElement, RowElement, Cellement>, ref: Ref<TableElement>) {
    const { useTableBody, useTableProps, useTableRow, ...tableInfo } = useAriaTable<TableElement, SectionElement, RowElement, Cellement>({
        linearNavigation: { disableArrowKeys, disableHomeEndKeys },
        listNavigation: {},
        managedChildren: { onAfterChildLayoutEffect, onChildrenMountChange },
        rovingTabIndex: { initialIndex, onTabbableIndexChange, onTabbableRender, onTabbedInTo, onTabbedOutOf },
        typeaheadNavigation: { collator, noTypeahead, typeaheadTimeout }
    });

    return (
        <TableBodyContext.Provider value={useTableBody}>
            <TableRowContext.Provider value={useTableRow}>
                {(render ?? defaultRenderTable)(tableInfo, useTableProps({ ref }))}
            </TableRowContext.Provider>
        </TableBodyContext.Provider>
    )
}

function TableBodyU<SectionElement extends Element, RowElement extends Element, Cellement extends Element>({
    render
}: TableBodyProps<SectionElement, RowElement, Cellement>, ref: Ref<SectionElement>) {
    const { useTableBodyProps, ...sectionInfo } = useContext(TableBodyContext)({});
    return <LocationContext.Provider value="body">{(render ?? defaultRenderTableBody)(sectionInfo, useTableBodyProps({ ref }))}</LocationContext.Provider>
}

function TableHeadU<SectionElement extends Element>({ render }: TableHeadProps<SectionElement>, ref: Ref<SectionElement>) {
    return <LocationContext.Provider value="head">{(render ?? defaultRenderTableHead)({ ref })}</LocationContext.Provider>
}

function TableFootU<SectionElement extends Element>({ render }: TableFootProps<SectionElement>, ref: Ref<SectionElement>) {
    return <LocationContext.Provider value="foot">{(render ?? defaultRenderTableFoot)({ ref })}</LocationContext.Provider>
}

function TableRowU<RowElement extends Element, Cellement extends Element>({
    index,
    text,
    blurSelf,
    collator,
    disableArrowKeys,
    disableHomeEndKeys,
    flags,
    focusSelf,
    hidden,
    indexDemangler,
    indexMangler,
    initialIndex,
    noTypeahead,
    onAfterChildLayoutEffect,
    onChildrenMountChange,
    onTabbableIndexChange,
    onTabbableRender,
    onTabbedInTo,
    onTabbedOutOf,
    typeaheadTimeout,
    render
}: TableRowProps<RowElement, Cellement>, ref: Ref<RowElement>) {
    const { useTableCell, useTableRowProps, ...rowInfo } = useContext(TableRowContext)({
        asChildRowOfSection: {
            listNavigation: { text },
            managedChild: { index, flags },
            rovingTabIndex: { blurSelf, focusSelf, hidden },
            subInfo: {}
        },
        asParentRowOfCells: {
            linearNavigation: { disableArrowKeys, disableHomeEndKeys },
            listNavigation: { indexDemangler, indexMangler },
            managedChildren: { onAfterChildLayoutEffect, onChildrenMountChange },
            rovingTabIndex: { initialIndex, onTabbableIndexChange, onTabbableRender, onTabbedInTo, onTabbedOutOf },
            typeaheadNavigation: { collator, noTypeahead, typeaheadTimeout }
        },
        tableRow: { location: useContext(LocationContext) }
    });
    return <TableCellContext.Provider value={useTableCell}>{(render ?? defaultRenderTableRow)(rowInfo, useTableRowProps({ ref }))}</TableCellContext.Provider>
}

function TableCellU<CellElement extends Element>({ index, text, blurSelf, flags, focusSelf, hidden, value, render }: TableCellProps<CellElement>, ref: Ref<CellElement>) {
    const { useTableCellProps, ...cellInfo } = useContext(TableCellContext)({
        listNavigation: { text },
        managedChild: { index, flags },
        rovingTabIndex: { blurSelf, focusSelf, hidden },
        subInfo: {
            location: useContext(LocationContext),
            value
        }
    });

    return (render ?? defaultRenderTableCell)(cellInfo, useTableCellProps({ ref }));
}

export const Table = forwardRef(TableU) as typeof TableU;
export const TableBody = forwardRef(TableBodyU) as typeof TableBodyU;
export const TableHead = forwardRef(TableHeadU) as typeof TableHeadU;
export const TableFoot = forwardRef(TableFootU) as typeof TableFootU;
export const TableRow = forwardRef(TableRowU) as typeof TableRowU;
export const TableCell = forwardRef(TableCellU) as typeof TableCellU;

