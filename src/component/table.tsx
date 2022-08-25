import { createContext, createElement, h, VNode } from "preact";
import { useContext } from "preact/hooks";
import { ElementToTag } from "../props";
import { TableCellInfoBase, TableRowInfoBase, useTable, UseTableBody, UseTableCell, UseTableCellParameters, UseTableFoot, UseTableHead, UseTableHeadCell, UseTableHeadCellParameters, UseTableRow, UseTableRowParameters } from "../use-table";

export interface TableProps<TableElement extends HTMLElement> {
    tagTable: ElementToTag<TableElement>;
    propsTable(): h.JSX.HTMLAttributes<TableElement>;
}

const LocationContext = createContext<"head" | "body" | "foot">(null!);
const TableHeadContext = createContext<UseTableHead<any, any, any, any, any, any, any, any>>(null!);
const TableBodyContext = createContext<UseTableBody<any, any, any, any, any, any, any, any>>(null!);
const TableFootContext = createContext<UseTableFoot<any, any, any, any, any, any, any, any>>(null!);

const TableRowContext = createContext<UseTableRow<any, any, any, any, any, any, any>>(null!);
const TableCellContext = createContext<UseTableCell<any, any, any, any> | UseTableHeadCell<any, any, any, any>>(null!);

export function Table<TableElement extends HTMLElement, SectionElement extends HTMLElement, RowElement extends HTMLElement, Cellement extends HTMLElement>({ tagTable, propsTable }: TableProps<TableElement>) {
    const { managedTableSections, useTableBody, useTableFoot, useTableHead, useTableProps } = useTable<TableElement, SectionElement, RowElement, Cellement>({});

    return (
        <TableHeadContext.Provider value={useTableHead}>
            <TableBodyContext.Provider value={useTableBody}>
                <TableFootContext.Provider value={useTableFoot}>
                    {createElement(tagTable as any, useTableProps(propsTable()))}
                </TableFootContext.Provider>
            </TableBodyContext.Provider>
        </TableHeadContext.Provider>
    )
}

export interface TableHeadProps<E extends HTMLElement> { tagHead: ElementToTag<E>; propsHead(): h.JSX.HTMLAttributes<E> }
export interface TableBodyProps<E extends HTMLElement> { tagBody: ElementToTag<E>; propsBody(): h.JSX.HTMLAttributes<E> }
export interface TableFootProps<E extends HTMLElement> { tagFoot: ElementToTag<E>; propsFoot(): h.JSX.HTMLAttributes<E> }
export interface TableRowProps<E extends HTMLElement> extends Pick<TableRowInfoBase<any, any>, "index">, Omit<UseTableRowParameters<any, any, any>, "initialIndex" | "indexDemangler" | "indexMangler" | "info" | "onAfterChildLayoutEffect" | "onChildrenMountChange" | "onTabbableIndexChange" | "onTabbableRender" | "onTabbedInTo" | "onTabbedOutOf"> { tagRow: ElementToTag<E>; propsRow(): h.JSX.HTMLAttributes<E> }
export interface TableCellProps<E extends HTMLElement> extends Pick<TableCellInfoBase<any, any>, "index" | "value">, Omit<UseTableCellParameters<any, any, any>, "initialIndex" | "indexDemangler" | "indexMangler" | "info" | "onAfterChildLayoutEffect" | "onChildrenMountChange" | "onTabbableIndexChange" | "onTabbableRender" | "onTabbedInTo" | "onTabbedOutOf"> { tagCell: ElementToTag<E>; propsCell(): h.JSX.HTMLAttributes<E>; render(cell: VNode): VNode }
export interface TableHeadCellProps<E extends HTMLElement> extends Pick<TableCellInfoBase<any, any>, "index" | "value">, Omit<UseTableHeadCellParameters<any, any, any>, "initialIndex" | "indexDemangler" | "indexMangler" | "info" | "onAfterChildLayoutEffect" | "onChildrenMountChange" | "onTabbableIndexChange" | "onTabbableRender" | "onTabbedInTo" | "onTabbedOutOf"> { tagCell: ElementToTag<E>; propsCell(): h.JSX.HTMLAttributes<E> }

export function TableHead<E extends HTMLElement>({ tagHead, propsHead }: TableHeadProps<E>) { const { managedRows, useTableHeadProps, useTableHeadRow } = useContext(TableHeadContext)(); return <LocationContext.Provider value={"head"}><TableRowContext.Provider value={useTableHeadRow}>{createElement(tagHead, useTableHeadProps(propsHead()))}</TableRowContext.Provider></LocationContext.Provider>; }
export function TableBody<E extends HTMLElement>({ tagBody, propsBody }: TableBodyProps<E>) { const { managedRows, useTableBodyProps, useTableBodyRow } = useContext(TableBodyContext)(); return <LocationContext.Provider value={"body"}><TableRowContext.Provider value={useTableBodyRow}>{createElement(tagBody, useTableBodyProps(propsBody()))}</TableRowContext.Provider></LocationContext.Provider>; }
export function TableFoot<E extends HTMLElement>({ tagFoot, propsFoot }: TableFootProps<E>) { const { managedRows, useTableFootProps, useTableFootRow } = useContext(TableFootContext)(); return <LocationContext.Provider value={"foot"}><TableRowContext.Provider value={useTableFootRow}>{createElement(tagFoot, useTableFootProps(propsFoot()))}</TableRowContext.Provider></LocationContext.Provider>; }

export function TableRow<E extends HTMLElement>({ index, propsRow, tagRow, collator, disableArrowKeys, disableHomeEndKeys, typeaheadTimeout }: TableRowProps<E>) {
    const location = useContext(LocationContext);
    const { managedCells, rowIndexAsSorted, rowIndexAsUnsorted, useTableCell, useTableHeadCell, useTableRowProps } = useContext(TableRowContext)({ info: { index, location }, initialIndex: 0, collator, disableArrowKeys, disableHomeEndKeys, typeaheadTimeout });

    return (
        <TableCellContext.Provider value={location == "head" ? useTableHeadCell : useTableCell}>{createElement(tagRow, useTableRowProps(propsRow()))}</TableCellContext.Provider>
    )
}

export function TableHeadCell<E extends HTMLElement>({ index, propsCell, tagCell, value, unsortable }: TableHeadCellProps<E>) {
    const { sortDirection, useTableHeadCellDelegateProps, useTableHeadCellProps } = (useContext(TableCellContext) as UseTableHeadCell<any, any, any, any>)({ info: { index, value }, unsortable });
    const location = useContext(LocationContext);
    return createElement(tagCell as any, useTableHeadCellDelegateProps(useTableHeadCellProps(propsCell())));
}


export function TableCell<E extends HTMLElement>({ index, value, propsCell, tagCell }: TableCellProps<E>) {
    const tableCellContext = useContext(TableCellContext);
    const location = useContext(LocationContext);
    const { useTableCellDelegateProps, useTableCellProps } = (tableCellContext as UseTableCell<any, any, any, any>)({ info: { index, value } });
    return createElement(tagCell as any, useTableCellDelegateProps(useTableCellProps(propsCell())));

}
