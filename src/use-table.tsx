import { h } from "preact";
import { ManagedChildren, returnNull, useGridNavigation, UseGridNavigationParameters, UseHasFocusParameters, UseListNavigationReturnTypeInfo, UseListNavigationSubInfo, usePassiveState, UseRovingTabIndexSubInfo, useSortableChildren, useStableCallback, useState } from "preact-prop-helpers";
import { UseGridNavigationCellParameters, UseGridNavigationCellReturnTypeInfo, UseGridNavigationRowParameters, UseGridNavigationRowReturnTypeInfo } from "preact-prop-helpers/use-grid-navigation";
import { PassiveStateUpdater } from "preact-prop-helpers/use-passive-state";
import { GetIndex, UseSortableChildrenReturnTypeInfo } from "preact-prop-helpers/use-sortable-children";
import { useCallback, useEffect, useLayoutEffect, useRef } from "preact/hooks";
import { debugLog, ElementToTag, overwriteWithWarning } from "./props";

export type TableValueType = string | number | null | boolean | Date;

export interface UseTableParameters extends Omit<UseGridNavigationParameters<"indexMangler" | "indexDemangler", never, never, never, never>, "gridNavigation"> { }
export interface UseTableBodyParameters { }
export interface UseTableRowParameters<RowElement extends Element, CellElement extends Element, CR, CC, KR extends string, SubbestInfoR> extends UseGridNavigationRowParameters<UseTableRowSubInfo<CellElement, CR, CC>, KR, never, never, never, never, never, never, never, never, SubbestInfoR> {
    tableRow: Pick<UseTableRowSubInfo<CellElement, CR, CC>, "location"> & { tagTableRow: ElementToTag<RowElement> };
}
export interface UseTableCellParameters<CellElement extends Element, CC, KC extends string, SubbestInfoC> extends UseGridNavigationCellParameters<CellElement, UseTableCellSubInfo<CC>, KC, never, never, never, SubbestInfoC> {
    tableCell: { tagTableCell: ElementToTag<CellElement>; headerType: "row" | "column" | null };
    hasFocus: UseHasFocusParameters<CellElement>;
}

export interface UseTableRowSubInfo<CellElement extends Element, CR, CC> {
    location: "head" | "body" | "foot";
    getCells(): ManagedChildren<number, UseRovingTabIndexSubInfo<CellElement, UseListNavigationSubInfo<UseTableCellSubInfo<CC>>>, "tabbable">;
    subInfo: CR;
}

export interface UseTableCellSubInfo<CC> {
    location: "head" | "body" | "foot";
    value: TableValueType;
    setMySortDirection(direction: TableSortDirection | null): void;
    subInfo: CC;
}




export interface UseTableCellReturnTypeInfo<CellElement extends Element> extends UseGridNavigationCellReturnTypeInfo<CellElement> { tableHeaderCell: { sort(): void, sortDirection: TableSortDirection | null; } }
export interface UseTableRowReturnTypeInfo<RowElement extends Element, CellElement extends Element, CC, KC extends string> extends UseGridNavigationRowReturnTypeInfo<RowElement, CellElement, UseTableCellSubInfo<CC>, KC> { }
export interface UseTableBodyReturnTypeInfo<RowElement extends Element, CellElement extends Element, CR, CC, KR extends string> extends UseSortableChildrenReturnTypeInfo<CRFull<RowElement, CellElement, CR, CC>, KR> { }
export interface UseTableReturnTypeInfo<RowElement extends Element, CellElement extends Element, CR, CC> extends UseListNavigationReturnTypeInfo<RowElement, UseTableRowSubInfo<CellElement, CR, CC>, never> { }


export interface UseTableCellReturnTypeWithHooks<CellElement extends Element> extends UseTableCellReturnTypeInfo<CellElement> { useTableCellProps: (props: h.JSX.HTMLAttributes<CellElement>) => h.JSX.HTMLAttributes<CellElement>; }
export interface UseTableRowReturnTypeWithHooks<RowElement extends Element, CellElement extends Element, CC, KC extends string> extends UseTableRowReturnTypeInfo<RowElement, CellElement, CC, KC> { useTableCell: UseTableCell<CellElement, CC, KC>; useTableRowProps: (props: h.JSX.HTMLAttributes<RowElement>) => h.JSX.HTMLAttributes<RowElement>; }
export interface UseTableBodyReturnTypeWithHooks<BodySectionElement extends Element, RowElement extends Element, CellElement extends Element, CR, CC, KR extends string> extends UseTableBodyReturnTypeInfo<RowElement, CellElement, CR, CC, KR> { useTableBodyProps: (props: h.JSX.HTMLAttributes<BodySectionElement>) => h.JSX.HTMLAttributes<BodySectionElement> }
export interface UseTableReturnTypeWithHooks<TableElement extends Element, BodySectionElement extends Element, RowElement extends Element, CellElement extends Element, CR, CC, KR extends string, KC extends string> extends UseTableReturnTypeInfo<RowElement, CellElement, CR, CC> {
    useTableRow: UseTableRow<RowElement, CellElement, CR, CC, KR, KC>;
    useTableBody: UseTableBody<BodySectionElement, RowElement, CellElement, CR, CC, KR>;
    useTableProps: (props: h.JSX.HTMLAttributes<TableElement>) => h.JSX.HTMLAttributes<TableElement>;
    useTableSectionProps: (tag: string, location: UseTableRowSubInfo<any,any,any>["location"], props: h.JSX.HTMLAttributes<any>) => h.JSX.HTMLAttributes<any>;
}

export type UseTableCell<CellElement extends Element, CC, KC extends string> = (p: UseTableCellParameters<CellElement, CC, KC, Omit<UseTableCellSubInfo<CC>, "setMySortDirection">>) => UseTableCellReturnTypeWithHooks<CellElement>;
export type UseTableRow<RowElement extends Element, CellElement extends Element, CR, CC, KR extends string, KC extends string> = (p: UseTableRowParameters<RowElement, CellElement, CR, CC, KR, CR>) => UseTableRowReturnTypeWithHooks<RowElement, CellElement, CC, KC>;
export type UseTableBody<BodySectionElement extends Element, RowElement extends Element, CellElement extends Element, CR, CC, KR extends string> = (p: UseTableBodyParameters) => UseTableBodyReturnTypeWithHooks<BodySectionElement, RowElement, CellElement, CR, CC, KR>;

export type TableSortDirection = "ascending" | "descending";

function identity(t: number) { return t; }


export function updateSortColumn<CC>({ getCurrentSortColumn, setCurrentSortColumn, cellIndex, cells }: { getCurrentSortColumn: () => (null | SortColumnInfo); setCurrentSortColumn: PassiveStateUpdater<null | SortColumnInfo>, cellIndex: number, cells: ManagedChildren<number, UseRovingTabIndexSubInfo<any, UseListNavigationSubInfo<UseTableCellSubInfo<CC>>>, "tabbable"> }) {
    const sortInfo = getCurrentSortColumn() ?? { index: -1, direction: 'ascending' };
    //const cellIndex = managedChild.index;
    if (sortInfo.index == cellIndex) {
        if (sortInfo.direction[0] == 'a') {
            sortInfo.direction = 'descending';
        }
        else {
            sortInfo.direction = 'ascending';
        }
    }
    else {
        sortInfo.direction = "ascending";
    }

    sortInfo.index = cellIndex;
    setCurrentSortColumn(sortInfo);

    cells.forEach(cell => {
        if (cell.index == cellIndex) {
            cell.subInfo.subInfo.subInfo.setMySortDirection(sortInfo.direction);
        }
        else {
            cell.subInfo.subInfo.subInfo.setMySortDirection(null);
        }
    })

    //bodySort.current!();
}

type CRFull<RowElement extends Element, CellElement extends Element, CR, CC> = UseRovingTabIndexSubInfo<RowElement, UseListNavigationSubInfo<UseTableRowSubInfo<CellElement, CR, CC>>>;

export interface SortColumnInfo {
    index: number,
    direction: TableSortDirection
}

export function useTable<
    TableElement extends Element,
    BodySectionElement extends Element,
    RowElement extends Element,
    CellElement extends Element,
    CR,
    CC,
    KR extends string,
    KC extends string
>({ linearNavigation, listNavigation, managedChildren, rovingTabIndex, typeaheadNavigation }: UseTableParameters): UseTableReturnTypeWithHooks<TableElement, BodySectionElement, RowElement, CellElement, CR, CC, KR, KC> {
    debugLog("useTable");

    const [getCurrentSortColumn, setCurrentSortColumn] = usePassiveState<SortColumnInfo | null>(null, returnNull);
    const bodySort = useRef<null | (() => void)>(null);
    const manglers = useRef({ rowIndexMangler: identity, rowIndexDemangler: identity });

    const {
        useGridNavigationProps,
        useGridNavigationRow,
        ...gridNavRet1
    } = useGridNavigation<TableElement, RowElement, CellElement, UseTableRowSubInfo<CellElement, CR, CC>, UseTableCellSubInfo<CC>, KR, KC>({
        linearNavigation,
        listNavigation: { ...listNavigation },
        gridNavigation: { rowIndexDemangler: useCallback((n: number) => manglers.current.rowIndexDemangler(n), []), rowIndexMangler: useCallback((n: number) => manglers.current.rowIndexMangler(n), []) },
        managedChildren,
        rovingTabIndex,
        typeaheadNavigation
    });

    const { managedChildren: { children: rows } } = gridNavRet1;

    const useTableRow = useCallback<UseTableRow<RowElement, CellElement, CR, CC, KR, KC>>(({ asChildRowOfSection: { subInfo, ...asChildRowOfSection }, asParentRowOfCells, tableRow: { location, tagTableRow } }): UseTableRowReturnTypeWithHooks<RowElement, CellElement, CC, KC> => {
        debugLog("useTableRow", asChildRowOfSection.managedChild.index);

        const getCells = useCallback(() => {
            return cells;
        }, [])

        const {
            useGridNavigationCell,
            useGridNavigationRowProps,
            ...gridNavRet2
        } = useGridNavigationRow({ asChildRowOfSection: { ...asChildRowOfSection, subInfo: { getCells, location, subInfo } }, asParentRowOfCells });

        const { asParentOfCells: { managedChildren: { children: cells } } } = gridNavRet2;

        const useTableCell = useCallback<UseTableCell<CellElement, CC, KC>>(({ listNavigation, managedChild, rovingTabIndex, subInfo, hasFocus, tableCell: { tagTableCell, headerType } }) => {
            const [mySortDirection, setMySortDirection] = useState<TableSortDirection | null>(null);
            debugLog("useTableCell", managedChild.index);
            const {
                useGridNavigationCellProps,
                ...gridNavRet3
            } = useGridNavigationCell({ listNavigation, managedChild, rovingTabIndex, subInfo: { ...subInfo, setMySortDirection }, hasFocus });

            const sort = useStableCallback(() => {
                /*const sortInfo = getCurrentSortColumn() ?? { index: -1, direction: 'ascending' };
                const cellIndex = managedChild.index;
                if (sortInfo.index == cellIndex) {
                    if (sortInfo.direction[0] == 'a') {
                        sortInfo.direction = 'descending';
                    }
                    else {
                        sortInfo.direction = 'ascending';
                    }
                }
                else {
                    sortInfo.direction = "ascending";
                }

                sortInfo.index = managedChild.index;
                setCurrentSortColumn(sortInfo);

                getCells().forEach(cell => {
                    if (cell.index == managedChild.index) {
                        cell.subInfo.subInfo.subInfo.setMySortDirection(sortInfo.direction);
                    }
                    else {
                        cell.subInfo.subInfo.subInfo.setMySortDirection(null);
                    }
                })*/
                updateSortColumn({ getCurrentSortColumn, setCurrentSortColumn, cellIndex: managedChild.index, cells: getCells() });

                bodySort.current!();
            });

            const useTableCellProps: typeof useGridNavigationCellProps = (props) => {

                if (tagTableCell != "td" && tagTableCell != "th") {
                    if (headerType == "row")
                        overwriteWithWarning("useTableCell", props, "role", "rowheader");
                    else if (headerType == "column")
                        overwriteWithWarning("useTableCell", props, "role", "columnheader");
                    else
                        overwriteWithWarning("useTableCell", props, "role", "cell");
                }
                else {
                    if (headerType == "row")
                        overwriteWithWarning("useTableCell", props, "scope", "row");
                    else if (headerType == "column")
                        overwriteWithWarning("useTableCell", props, "scope", "col");
                }
                if (headerType != null) {
                    if (mySortDirection == "descending") {
                        overwriteWithWarning("useTableCell", props, "aria-sort", "descending");
                    }
                    else if (mySortDirection == "ascending") {
                        overwriteWithWarning("useTableCell", props, "aria-sort", "ascending");
                    }
                }
                return useGridNavigationCellProps(props);
            }
            return {
                tableHeaderCell: { sort, sortDirection: mySortDirection },
                useTableCellProps,
                ...gridNavRet3
            }

        }, []);

        const useTableRowProps: typeof useGridNavigationRowProps = (props) => {
            if (tagTableRow != "tr")
                overwriteWithWarning("useTableRow", props, "role", "row");
            return useGridNavigationRowProps(props);
        };

        return {
            useTableCell,
            useTableRowProps,
            ...gridNavRet2
        }
    }, []);

    const useTableBody = useCallback<UseTableBody<BodySectionElement, RowElement, CellElement, CR, CC, KR>>((): UseTableBodyReturnTypeWithHooks<BodySectionElement, RowElement, CellElement, CR, CC, KR> => {
        debugLog("useTableBody");
        const getIndex = useCallback<GetIndex<CRFull<RowElement, CellElement, CR, CC>, KR>>((i) => i.index, []);

        const {
            useSortableProps,
            ...sortableRet
        } = useSortableChildren<BodySectionElement, CRFull<RowElement, CellElement, CR, CC>, KR>({
            rearrangeableChildren: {
                getIndex
            },
            sortableChildren: {
                compare: (lhs, rhs) => {
                    const lhsCells = lhs.subInfo.subInfo.subInfo.getCells();
                    const rhsCells = rhs.subInfo.subInfo.subInfo.getCells();
                    const lhsCell = lhsCells.getAt(getCurrentSortColumn()?.index ?? 0);
                    const rhsCell = rhsCells.getAt(getCurrentSortColumn()?.index ?? 0);

                    const lhsLocation = lhsCell?.subInfo.subInfo.subInfo.location;
                    const rhsLocation = rhsCell?.subInfo.subInfo.subInfo.location;

                    const lhsValue = lhsCell?.subInfo.subInfo.subInfo.value;
                    const rhsValue = rhsCell?.subInfo.subInfo.subInfo.value;

                    if (lhsLocation === rhsLocation)
                        return +(lhsValue ?? -Infinity) - +(rhsValue ?? -Infinity);
                    if (lhsLocation == 'head')
                        return -1;
                    if (lhsLocation == 'body')
                        return rhsLocation == 'head' ? -1 : 1;
                    return 1;
                }
            }
        });

        const { sortableChildren: { sort }, rearrangeableChildren: { indexDemangler, indexMangler } } = sortableRet;
        useEffect(() => {
            manglers.current.rowIndexDemangler = indexDemangler;
            manglers.current.rowIndexMangler = indexMangler;
        }, [indexDemangler, indexMangler]);

        useLayoutEffect(() => {
            bodySort.current = () => {
                sort(rows, getCurrentSortColumn()?.direction ?? 'ascending');
            };
        }, [sort])

        const useTableBodyProps = (props: h.JSX.HTMLAttributes<BodySectionElement>) => {
            console.assert(props.children != null);
            return useSortableProps(props as h.JSX.HTMLAttributes<BodySectionElement> & { children: any });
        }

        return {
            useTableBodyProps,
            ...sortableRet
        }
    }, []);

    const useTableProps: typeof useGridNavigationProps = useGridNavigationProps;

    const useTableSectionProps = useCallback((tag: string, location: UseTableRowSubInfo<any, any, any>["location"], props: h.JSX.HTMLAttributes<any>) => {
        if (!(tag == "thead" || tag == "tbody" || tag == "tfoot")) {
            overwriteWithWarning("useTableSectionProps", props, "role", "rowgroup");
        }
        return props;
    }, [])

    return {
        useTableProps,
        useTableBody,
        useTableRow,
        useTableSectionProps,
        ...gridNavRet1
    }
}
