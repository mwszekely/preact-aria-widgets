import { createContext, createElement, h, Ref, VNode } from "preact";
import { UseHasFocusParameters } from "preact-prop-helpers";
import { forwardRef } from "preact/compat";
import { useContext } from "preact/hooks";
import { ElementToTag, PropModifier } from "props";
import { useTable, UseTableBody, UseTableBodyParameters, UseTableBodyReturnTypeInfo, UseTableCell, UseTableCellParameters, UseTableCellReturnTypeInfo, UseTableParameters, UseTableReturnTypeInfo, UseTableRow, UseTableRowParameters, UseTableRowReturnTypeInfo } from "../use-table";

type Get<T, K extends keyof T> = T[K];
type Get2<T, K extends keyof T, K2 extends keyof T[K]> = T[K][K2];

export interface TableProps<TableElement extends Element, RowElement extends Element, CellElement extends Element> extends
    Get<UseTableParameters, "linearNavigation">,
    Get<UseTableParameters, "listNavigation">,
    Get<UseTableParameters, "managedChildren">,
    Get<UseTableParameters, "rovingTabIndex">,
    Get<UseTableParameters, "typeaheadNavigation"> {
    //tagTable: ElementToTag<TableElement>;
    //propsTable(): h.JSX.HTMLAttributes<TableElement>;
    render(info: UseTableReturnTypeInfo<RowElement, CellElement>, modifyTableProps: PropModifier<TableElement>): VNode;
}

export interface TableBodyProps<SectionElement extends Element, RowElement extends Element, CellElement extends Element> extends UseTableBodyParameters {
    render(info: UseTableBodyReturnTypeInfo<RowElement, CellElement>, modifyTableBodyProps: PropModifier<SectionElement>): VNode;
}
export interface TableHeadProps {
    render(): VNode;
}
export interface TableFootProps {
    render(): VNode;
}

export interface TableRowProps<RowElement extends Element, CellElement extends Element> extends
    Get2<UseTableRowParameters<CellElement>, "asChildRowOfSection", "listNavigation">,
    Get2<UseTableRowParameters<CellElement>, "asChildRowOfSection", "managedChild">,
    Get2<UseTableRowParameters<CellElement>, "asChildRowOfSection", "rovingTabIndex">,
    Get2<UseTableRowParameters<CellElement>, "asParentRowOfCells", "linearNavigation">,
    Get2<UseTableRowParameters<CellElement>, "asParentRowOfCells", "listNavigation">,
    Get2<UseTableRowParameters<CellElement>, "asParentRowOfCells", "managedChildren">,
    Get2<UseTableRowParameters<CellElement>, "asParentRowOfCells", "rovingTabIndex">,
    Get2<UseTableRowParameters<CellElement>, "asParentRowOfCells", "typeaheadNavigation"> {
    render(info: UseTableRowReturnTypeInfo<RowElement, CellElement>, tableRowProps: h.JSX.HTMLAttributes<RowElement>): VNode;
}

export interface TableCellProps<CellElement extends Element> extends
    Get<UseTableCellParameters<CellElement>, "listNavigation">,
    Get<UseTableCellParameters<CellElement>, "managedChild">,
    Get<UseTableCellParameters<CellElement>, "rovingTabIndex">,
    Get<UseTableCellParameters<CellElement>, "listNavigation">,
    Get<UseTableCellParameters<CellElement>, "rovingTabIndex">,
    UseHasFocusParameters<CellElement>,
    Omit<Get<UseTableCellParameters<CellElement>, "subInfo">, "location"> {
    render(info: UseTableCellReturnTypeInfo<CellElement>, tableRowProps: h.JSX.HTMLAttributes<CellElement>): VNode;
}

const LocationContext = createContext<"head" | "body" | "foot">(null!);

const TableBodyContext = createContext<UseTableBody<any, any, any>>(null!);
const TableRowContext = createContext<UseTableRow<any, any>>(null!);
const TableCellContext = createContext<UseTableCell<any>>(null!);

export function defaultRenderTable<TableElement extends Element, RowElement extends Element, CellElement extends Element>({ tagTable, makePropsTable }: { tagTable: ElementToTag<TableElement>, makePropsTable: (info: UseTableReturnTypeInfo<RowElement, CellElement>) => h.JSX.HTMLAttributes<TableElement> }) {
    return function (info: UseTableReturnTypeInfo<RowElement, CellElement>, modifyPropsTable: PropModifier<TableElement>) {
        return createElement(tagTable as never, modifyPropsTable(makePropsTable(info)));
    }
}

export function defaultRenderTableBody<TableBodyElement extends Element, RowElement extends Element, CellElement extends Element>({ tagTableBody, makePropsTableBody }: { tagTableBody: ElementToTag<TableBodyElement>, makePropsTableBody: (info: UseTableBodyReturnTypeInfo<RowElement, CellElement>) => h.JSX.HTMLAttributes<TableBodyElement> }) {
    return function (info: UseTableBodyReturnTypeInfo<RowElement, CellElement>, modifyPropsTableBody: PropModifier<TableBodyElement>) {
        return createElement(tagTableBody as never, modifyPropsTableBody(makePropsTableBody(info)));
    }
}

export function defaultRenderTableHead<TableHeadElement extends Element>({ tagTableHead, makePropsTableHead }: { tagTableHead: ElementToTag<TableHeadElement>, makePropsTableHead: () => h.JSX.HTMLAttributes<TableHeadElement> }) {
    return function () {
        return createElement(tagTableHead as never, (makePropsTableHead()));
    }
}

export function defaultRenderTableFoot<TableFootElement extends Element>({ tagTableFoot, makePropsTableFoot }: { tagTableFoot: ElementToTag<TableFootElement>, makePropsTableFoot: () => h.JSX.HTMLAttributes<TableFootElement> }) {
    return function () {
        return createElement(tagTableFoot as never, (makePropsTableFoot()));
    }
}

export function defaultRenderTableRow<RowElement extends Element, CellElement extends Element>({ tagTableRow, makePropsTableRow }: { tagTableRow: ElementToTag<RowElement>, makePropsTableRow: (info: UseTableRowReturnTypeInfo<RowElement, CellElement>) => h.JSX.HTMLAttributes<RowElement> }) {
    return function (info: UseTableRowReturnTypeInfo<RowElement, CellElement>, modifyPropsTableRow: PropModifier<RowElement>) {
        return createElement(tagTableRow as never, modifyPropsTableRow(makePropsTableRow(info)));
    }
}

export function defaultRenderTableCell<CellElement extends Element>({ tagTableCell, makePropsTableCell }: { tagTableCell: ElementToTag<CellElement>, makePropsTableCell: (info: UseTableCellReturnTypeInfo<CellElement>) => h.JSX.HTMLAttributes<CellElement> }) {
    return function (info: UseTableCellReturnTypeInfo<CellElement>, modifyPropsTableCell: PropModifier<CellElement>) {
        return createElement(tagTableCell as never, modifyPropsTableCell(makePropsTableCell(info)));
    }
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
    typeaheadTimeout,
    render
}: TableProps<TableElement, RowElement, Cellement>, ref: Ref<TableElement>) {
    const { useTableBody, useTableProps, useTableRow, ...tableInfo } = useTable<TableElement, SectionElement, RowElement, Cellement>({
        linearNavigation: { disableArrowKeys, disableHomeEndKeys },
        listNavigation: {},
        managedChildren: { onAfterChildLayoutEffect, onChildrenMountChange },
        rovingTabIndex: { initialIndex, onTabbableIndexChange, onTabbableRender },
        typeaheadNavigation: { collator, noTypeahead, typeaheadTimeout }
    });

    return (
        <TableBodyContext.Provider value={useTableBody}>
            <TableRowContext.Provider value={useTableRow}>
                {(render ?? defaultRenderTable)(tableInfo, useTableProps)}
            </TableRowContext.Provider>
        </TableBodyContext.Provider>
    )
}

function TableBodyU<SectionElement extends Element, RowElement extends Element, Cellement extends Element>({
    render
}: TableBodyProps<SectionElement, RowElement, Cellement>, ref: Ref<SectionElement>) {
    const { useTableBodyProps, ...sectionInfo } = useContext(TableBodyContext)({});
    return <LocationContext.Provider value="body">{render(sectionInfo, useTableBodyProps)}</LocationContext.Provider>
}

function TableHeadU<SectionElement extends Element>({ render }: TableHeadProps, ref: Ref<SectionElement>) {
    return <LocationContext.Provider value="head">{(render())}</LocationContext.Provider>
}

function TableFootU<SectionElement extends Element>({ render }: TableFootProps, ref: Ref<SectionElement>) {
    return <LocationContext.Provider value="foot">{(render())}</LocationContext.Provider>
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
            rovingTabIndex: { initialIndex, onTabbableIndexChange, onTabbableRender },
            typeaheadNavigation: { collator, noTypeahead, typeaheadTimeout }
        },
        tableRow: { location: useContext(LocationContext) }
    });
    return <TableCellContext.Provider value={useTableCell}>{(render ?? defaultRenderTableRow)(rowInfo, useTableRowProps({ ref }))}</TableCellContext.Provider>
}

function TableCellU<CellElement extends Element>({ index, text, blurSelf, flags, focusSelf, hidden, value, getDocument, getWindow, onActiveElementChange, onElementChange, onFocusedChanged, onFocusedInnerChanged, onLastActiveElementChange, onLastFocusedChanged, onLastFocusedInnerChanged, onMount, onUnmount, onWindowFocusedChange, render }: TableCellProps<CellElement>, ref: Ref<CellElement>) {
    const { useTableCellProps, ...cellInfo } = useContext(TableCellContext)({
        listNavigation: { text },
        managedChild: { index, flags },
        rovingTabIndex: { blurSelf, focusSelf, hidden },
        hasFocus: { getDocument, getWindow, onActiveElementChange, onElementChange, onFocusedChanged, onFocusedInnerChanged, onLastActiveElementChange, onLastFocusedChanged, onLastFocusedInnerChanged, onMount, onUnmount, onWindowFocusedChange },
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

