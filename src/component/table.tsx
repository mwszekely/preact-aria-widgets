import { createContext, createElement, h, Ref, VNode } from "preact";
import { UseHasFocusParameters } from "preact-prop-helpers";
import { useContext, useImperativeHandle } from "preact/hooks";
import { ElementToTag, PropModifier } from "../props";
import { useTable, UseTableBody, UseTableBodyParameters, UseTableBodyReturnTypeInfo, UseTableCell, UseTableCellParameters, UseTableCellReturnTypeInfo, UseTableParameters, UseTableReturnTypeInfo, UseTableReturnTypeWithHooks, UseTableRow, UseTableRowParameters, UseTableRowReturnTypeInfo } from "../use-table";
import { memoForwardRef } from "./util";

type Get<T, K extends keyof T> = T[K];
type Get2<T, K extends keyof T, K2 extends keyof T[K]> = T[K][K2];

export interface TableProps<TableElement extends Element, RowElement extends Element, CellElement extends Element, CR, CC> extends
    Get<UseTableParameters, "linearNavigation">,
    Get<UseTableParameters, "listNavigation">,
    Get<UseTableParameters, "managedChildren">,
    Get<UseTableParameters, "rovingTabIndex">,
    Get<UseTableParameters, "typeaheadNavigation"> {
    ref?: Ref<UseTableReturnTypeInfo<RowElement, CellElement, CR, CC>>;
    render(info: UseTableReturnTypeInfo<RowElement, CellElement, CR, CC>, modifyTableProps: PropModifier<TableElement>): VNode;
}

export interface TableBodyProps<SectionElement extends Element, RowElement extends Element, CellElement extends Element, CR, CC, KR extends string> extends UseTableBodyParameters {
    ref?: Ref<UseTableBodyReturnTypeInfo<RowElement, CellElement, CR, CC, KR>>;
    render(info: UseTableBodyReturnTypeInfo<RowElement, CellElement, CR, CC, KR>, modifyTableBodyProps: PropModifier<SectionElement>): VNode;
}
export interface TableHeadProps<T extends Element> {
    render(modifyTableHeadProps: PropModifier<T>): VNode;
    tagTableHead: ElementToTag<T>;
}
export interface TableFootProps<T extends Element> {
    render(modifyTableFootProps: PropModifier<T>): VNode;
    tagTableFoot: ElementToTag<T>;
}

export interface TableRowProps<RowElement extends Element, CellElement extends Element, CR, CC, KR extends string, KC extends string> extends
    Omit<Get<UseTableRowParameters<RowElement, CellElement, CR, CC, KR, CC>, "tableRow">, "location">,
    Get2<UseTableRowParameters<RowElement, CellElement, CR, CC, KR, CC>, "asChildRowOfSection", "listNavigation">,
    Get2<UseTableRowParameters<RowElement, CellElement, CR, CC, KR, CC>, "asChildRowOfSection", "managedChild">,
    Get2<UseTableRowParameters<RowElement, CellElement, CR, CC, KR, CC>, "asChildRowOfSection", "rovingTabIndex">,
    Get2<UseTableRowParameters<RowElement, CellElement, CR, CC, KR, CC>, "asParentRowOfCells", "linearNavigation">,
    Get2<UseTableRowParameters<RowElement, CellElement, CR, CC, KR, CC>, "asParentRowOfCells", "listNavigation">,
    Get2<UseTableRowParameters<RowElement, CellElement, CR, CC, KR, CC>, "asParentRowOfCells", "managedChildren">,
    Get2<UseTableRowParameters<RowElement, CellElement, CR, CC, KR, CC>, "asParentRowOfCells", "rovingTabIndex">,
    Get2<UseTableRowParameters<RowElement, CellElement, CR, CC, KR, CC>, "asParentRowOfCells", "typeaheadNavigation"> {
    ref?: Ref<UseTableRowReturnTypeInfo<RowElement, CellElement, CC, KC>>;

    subInfo: Get2<UseTableRowParameters<RowElement, CellElement, CR, CC, KR, CC>, "asChildRowOfSection", "subInfo">;

    render(info: UseTableRowReturnTypeInfo<RowElement, CellElement, CR, KC>, modifyTableRowProps: PropModifier<RowElement>): VNode;
}

export interface TableCellProps<CellElement extends Element, CC, KC extends string> extends
    Get<UseTableCellParameters<CellElement, CC, KC, CC>, "tableCell">,
    Get<UseTableCellParameters<CellElement, CC, KC, CC>, "listNavigation">,
    Get<UseTableCellParameters<CellElement, CC, KC, CC>, "managedChild">,
    Get<UseTableCellParameters<CellElement, CC, KC, CC>, "rovingTabIndex">,
    Get<UseTableCellParameters<CellElement, CC, KC, CC>, "listNavigation">,
    Get<UseTableCellParameters<CellElement, CC, KC, CC>, "rovingTabIndex">,
    UseHasFocusParameters<CellElement> {
    ref?: Ref<UseTableCellReturnTypeInfo<CellElement>>;
    subInfo: Get<UseTableCellParameters<CellElement, CC, KC, CC>, "subInfo">;
    render(info: UseTableCellReturnTypeInfo<CellElement>, modifyTableRowProps: PropModifier<CellElement>): VNode;
}

const LocationContext = createContext<"head" | "body" | "foot">(null!);

const TableSectionContext = createContext<UseTableReturnTypeWithHooks<any, any, any, any, any, any, any, any>["useTableSectionProps"]>(null!);
const TableBodyContext = createContext<UseTableBody<any, any, any, any, any, any>>(null!);
const TableRowContext = createContext<UseTableRow<any, any, any, any, any, any>>(null!);
const TableCellContext = createContext<UseTableCell<any, any, any>>(null!);

export function defaultRenderTable<TableElement extends Element, RowElement extends Element, CellElement extends Element, CR, CC>({ tagTable, makePropsTable }: { tagTable: ElementToTag<TableElement>, makePropsTable: (info: UseTableReturnTypeInfo<RowElement, CellElement, CR, CC>) => h.JSX.HTMLAttributes<TableElement> }) {
    return function (info: UseTableReturnTypeInfo<RowElement, CellElement, CR, CC>, modifyPropsTable: PropModifier<TableElement>) {
        return createElement(tagTable as never, modifyPropsTable(makePropsTable(info)));
    }
}

export function defaultRenderTableBody<TableBodyElement extends Element, RowElement extends Element, CellElement extends Element, CR, CC, KR extends string>({ tagTableBody, makePropsTableBody }: { tagTableBody: ElementToTag<TableBodyElement>, makePropsTableBody: (info: UseTableBodyReturnTypeInfo<RowElement, CellElement, CR, CC, KR>) => h.JSX.HTMLAttributes<TableBodyElement> }) {
    return function (info: UseTableBodyReturnTypeInfo<RowElement, CellElement, CR, CC, KR>, modifyPropsTableBody: PropModifier<TableBodyElement>) {
        return createElement(tagTableBody as never, modifyPropsTableBody(makePropsTableBody(info)));
    }
}

export function defaultRenderTableHead<TableHeadElement extends Element>({ tagTableHead, makePropsTableHead }: { tagTableHead: ElementToTag<TableHeadElement>, makePropsTableHead: () => h.JSX.HTMLAttributes<TableHeadElement> }) {
    return function (modifyPropsTableHead: PropModifier<TableHeadElement>) {
        return createElement(tagTableHead as never, modifyPropsTableHead(makePropsTableHead()));
    }
}

export function defaultRenderTableFoot<TableFootElement extends Element>({ tagTableFoot, makePropsTableFoot }: { tagTableFoot: ElementToTag<TableFootElement>, makePropsTableFoot: () => h.JSX.HTMLAttributes<TableFootElement> }) {
    return function (modifyPropsTableFoot: PropModifier<TableFootElement>) {
        return createElement(tagTableFoot as never, modifyPropsTableFoot(makePropsTableFoot()));
    }
}

export function defaultRenderTableRow<RowElement extends Element, CellElement extends Element, CC, KC extends string>({ tagTableRow, makePropsTableRow }: { tagTableRow: ElementToTag<RowElement>, makePropsTableRow: (info: UseTableRowReturnTypeInfo<RowElement, CellElement, CC, KC>) => h.JSX.HTMLAttributes<RowElement> }) {
    return function (info: UseTableRowReturnTypeInfo<RowElement, CellElement, CC, KC>, modifyPropsTableRow: PropModifier<RowElement>) {
        return createElement(tagTableRow as never, modifyPropsTableRow(makePropsTableRow(info)));
    }
}

export function defaultRenderTableCell<CellElement extends Element>({ tagTableCell, makePropsTableCell }: { tagTableCell: ElementToTag<CellElement>, makePropsTableCell: (info: UseTableCellReturnTypeInfo<CellElement>) => h.JSX.HTMLAttributes<CellElement> }) {
    return function (info: UseTableCellReturnTypeInfo<CellElement>, modifyPropsTableCell: PropModifier<CellElement>) {
        return createElement(tagTableCell as never, modifyPropsTableCell(makePropsTableCell(info)));
    }
}

export const Table = memoForwardRef(function TableU<TableElement extends Element, SectionElement extends Element, RowElement extends Element, Cellement extends Element, CR = undefined, CC = undefined, KR extends string = never, KC extends string = never>({
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
}: TableProps<TableElement, RowElement, Cellement, CR, CC>, ref?: Ref<any>) {
    const { useTableBody, useTableProps, useTableRow, useTableSectionProps, ...tableInfo } = useTable<TableElement, SectionElement, RowElement, Cellement, CR, CC, KR, KC>({
        linearNavigation: { disableArrowKeys, disableHomeEndKeys },
        listNavigation: {},
        managedChildren: { onAfterChildLayoutEffect, onChildrenMountChange },
        rovingTabIndex: { initialIndex, onTabbableIndexChange, onTabbableRender },
        typeaheadNavigation: { collator, noTypeahead, typeaheadTimeout }
    });

    useImperativeHandle(ref!, () => tableInfo);

    return (
        <TableSectionContext.Provider value={useTableSectionProps}>
            <TableBodyContext.Provider value={useTableBody}>
                <TableRowContext.Provider value={useTableRow}>
                    {render(tableInfo, useTableProps)}
                </TableRowContext.Provider>
            </TableBodyContext.Provider>
        </TableSectionContext.Provider>
    )
})

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
})

export const TableRow = memoForwardRef(function TableRowU<RowElement extends Element, Cellement extends Element, CR = undefined, CC = undefined, KR extends string = never, KC extends string = never>({
    index,
    text,
    tagTableRow,
    collator,
    disableArrowKeys,
    disableHomeEndKeys,
    flags,
    hidden,
    noModifyTabIndex,
    indexDemangler,
    indexMangler,
    initialIndex,
    noTypeahead,
    onAfterChildLayoutEffect,
    onChildrenMountChange,
    onTabbableIndexChange,
    onTabbableRender,
    typeaheadTimeout,
    subInfo,
    render
}: TableRowProps<RowElement, Cellement, CR, CC, KR, KC>, ref?: Ref<any>) {
    const { useTableCell, useTableRowProps, ...rowInfo } = useContext(TableRowContext)({
        asChildRowOfSection: {
            listNavigation: { text },
            managedChild: { index, flags },
            rovingTabIndex: { hidden, noModifyTabIndex },
            subInfo
        },
        asParentRowOfCells: {
            linearNavigation: { disableArrowKeys, disableHomeEndKeys },
            listNavigation: { indexDemangler, indexMangler },
            managedChildren: { onAfterChildLayoutEffect, onChildrenMountChange },
            rovingTabIndex: { initialIndex, onTabbableIndexChange, onTabbableRender },
            typeaheadNavigation: { collator, noTypeahead, typeaheadTimeout }
        },
        tableRow: { location: useContext(LocationContext), tagTableRow }
    });

    useImperativeHandle(ref!, () => rowInfo);

    return <TableCellContext.Provider value={useTableCell}>{render(rowInfo, useTableRowProps)}</TableCellContext.Provider>
})

export const TableCell = memoForwardRef(function TableCell<CellElement extends Element, CC = undefined, KC extends string = never>({ noModifyTabIndex, index, text, flags, focusSelf, hidden, value, headerType, tagTableCell, getDocument, getWindow, onActiveElementChange, onElementChange, onFocusedChanged, onFocusedInnerChanged, onLastActiveElementChange, onLastFocusedChanged, onLastFocusedInnerChanged, onMount, onUnmount, onWindowFocusedChange, render, subInfo }: TableCellProps<CellElement, CC, KC>, ref?: Ref<any>) {
    const { useTableCellProps, ...cellInfo } = (useContext(TableCellContext) as UseTableCell<CellElement, CC, KC>)({
        listNavigation: { text },
        managedChild: { index, flags },
        rovingTabIndex: { focusSelf, hidden, noModifyTabIndex },
        hasFocus: { getDocument, getWindow, onActiveElementChange, onElementChange, onFocusedChanged, onFocusedInnerChanged, onLastActiveElementChange, onLastFocusedChanged, onLastFocusedInnerChanged, onMount, onUnmount, onWindowFocusedChange },
        subInfo,
        tableCell: {
            value,
            headerType,
            tagTableCell,
            location: useContext(LocationContext)
        }
    });

    useImperativeHandle(ref!, () => cellInfo);

    return render(cellInfo, useTableCellProps);
})

