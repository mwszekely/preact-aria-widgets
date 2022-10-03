import { h } from "preact";
import { ManagedChildren, returnNull, useGridNavigation, UseGridNavigationParameters, UseHasFocusParameters, UseListNavigationReturnTypeInfo, UseListNavigationSubInfo, usePassiveState, UseRovingTabIndexSubInfo, useSortableChildren, useStableCallback, useState } from "preact-prop-helpers";
import { UseGridNavigationCellParameters, UseGridNavigationCellReturnTypeInfo, UseGridNavigationRowParameters, UseGridNavigationRowReturnTypeInfo } from "preact-prop-helpers/use-grid-navigation";
import { Compare, GetIndex, GetValue, UseSortableChildrenReturnTypeInfo } from "preact-prop-helpers/use-sortable-children";
import { useCallback, useEffect, useLayoutEffect, useRef } from "preact/hooks";
import { debugLog, ElementToTag, warnOnOverwrite } from "./props";

export type TableValueType = string | number | null | boolean | Date;

export interface UseTableParameters extends Omit<UseGridNavigationParameters<"indexMangler" | "indexDemangler", never, never, never, never>, "gridNavigation"> { }
export interface UseTableBodyParameters { }
export interface UseTableRowParameters<RowElement extends Element, CellElement extends Element> extends Omit<UseGridNavigationRowParameters<UseTableRowSubInfo<CellElement>, never, never, never, never, never, never, "subInfo", "subInfo", "subInfo", {}>, "subInfo"> {
    tableRow: Pick<UseTableRowSubInfo<CellElement>, "location"> & { tagTableRow: ElementToTag<RowElement> };
}
export interface UseTableCellParameters<CellElement extends Element> extends UseGridNavigationCellParameters<CellElement, UseTableCellSubInfo, never, "subInfo", "subInfo", "subInfo", Omit<UseTableCellSubInfo, "setMySortDirection">> {
    tableCell: { tagTableCell: ElementToTag<CellElement>; headerType: "row" | "column" | null };
    hasFocus: UseHasFocusParameters<CellElement>;
}

export interface UseTableRowSubInfo<CellElement extends Element> {
    location: "head" | "body" | "foot";
    getCells(): ManagedChildren<number, UseRovingTabIndexSubInfo<CellElement, UseListNavigationSubInfo<UseTableCellSubInfo>>, "tabbable">;
}

export interface UseTableCellSubInfo {
    location: "head" | "body" | "foot";
    value: TableValueType;
    setMySortDirection(direction: TableSortDirection | null): void;
}




export interface UseTableCellReturnTypeInfo<CellElement extends Element> extends UseGridNavigationCellReturnTypeInfo<CellElement> { tableHeaderCell: { sort(): void, sortDirection: TableSortDirection | null; } }
export interface UseTableRowReturnTypeInfo<RowElement extends Element, CellElement extends Element> extends UseGridNavigationRowReturnTypeInfo<RowElement, CellElement, UseTableCellSubInfo, never> { }
export interface UseTableBodyReturnTypeInfo<RowElement extends Element, CellElement extends Element> extends UseSortableChildrenReturnTypeInfo<UseRovingTabIndexSubInfo<RowElement, UseListNavigationSubInfo<UseTableRowSubInfo<CellElement>>>, never, []> { }
export interface UseTableReturnTypeInfo<RowElement extends Element, CellElement extends Element> extends UseListNavigationReturnTypeInfo<RowElement, UseTableRowSubInfo<CellElement>, never> { }


export interface UseTableCellReturnTypeWithHooks<CellElement extends Element> extends UseTableCellReturnTypeInfo<CellElement> { useTableCellProps: (props: h.JSX.HTMLAttributes<CellElement>) => h.JSX.HTMLAttributes<CellElement>; }
export interface UseTableRowReturnTypeWithHooks<RowElement extends Element, CellElement extends Element> extends UseTableRowReturnTypeInfo<RowElement, CellElement> { useTableCell: UseTableCell<CellElement>; useTableRowProps: (props: h.JSX.HTMLAttributes<RowElement>) => h.JSX.HTMLAttributes<RowElement>; }
export interface UseTableBodyReturnTypeWithHooks<BodySectionElement extends Element, RowElement extends Element, CellElement extends Element> extends UseTableBodyReturnTypeInfo<RowElement, CellElement> { useTableBodyProps: (props: h.JSX.HTMLAttributes<BodySectionElement>) => h.JSX.HTMLAttributes<BodySectionElement> }
export interface UseTableReturnTypeWithHooks<TableElement extends Element, BodySectionElement extends Element, RowElement extends Element, CellElement extends Element> extends UseTableReturnTypeInfo<RowElement, CellElement> {
    useTableRow: UseTableRow<RowElement, CellElement>;
    useTableBody: UseTableBody<BodySectionElement, RowElement, CellElement>;
    useTableProps: (props: h.JSX.HTMLAttributes<TableElement>) => h.JSX.HTMLAttributes<TableElement>;
    useTableSectionProps: (tag: string, location: UseTableRowSubInfo<any>["location"], props: h.JSX.HTMLAttributes<any>) => h.JSX.HTMLAttributes<any>;
}

export type UseTableCell<CellElement extends Element> = (p: UseTableCellParameters<CellElement>) => UseTableCellReturnTypeWithHooks<CellElement>;
export type UseTableRow<RowElement extends Element, CellElement extends Element> = (p: UseTableRowParameters<RowElement, CellElement>) => UseTableRowReturnTypeWithHooks<RowElement, CellElement>;
export type UseTableBody<BodySectionElement extends Element, RowElement extends Element, CellElement extends Element> = (p: UseTableBodyParameters) => UseTableBodyReturnTypeWithHooks<BodySectionElement, RowElement, CellElement>;

export type TableSortDirection = "ascending" | "descending";

function identity(t: number) { return t; }

export function useTable<
    TableElement extends Element,
    BodySectionElement extends Element,
    RowElement extends Element,
    CellElement extends Element
>({ linearNavigation, listNavigation, managedChildren, rovingTabIndex, typeaheadNavigation }: UseTableParameters): UseTableReturnTypeWithHooks<TableElement, BodySectionElement, RowElement, CellElement> {
    debugLog("useTable");

    const [getCurrentSortColumn, setCurrentSortColumn] = usePassiveState<{ index: number, direction: TableSortDirection } | null>(null, returnNull);
    const bodySort = useRef<null | (() => void)>(null);
    const manglers = useRef({ rowIndexMangler: identity, rowIndexDemangler: identity });

    const {
        useGridNavigationProps,
        useGridNavigationRow,
        ...gridNavRet1
    } = useGridNavigation<TableElement, RowElement, CellElement, UseTableRowSubInfo<CellElement>, UseTableCellSubInfo, never, never>({
        linearNavigation,
        listNavigation: { ...listNavigation },
        gridNavigation: { rowIndexDemangler: useCallback((n: number) => manglers.current.rowIndexDemangler(n), []), rowIndexMangler: useCallback((n: number) => manglers.current.rowIndexMangler(n), []) },
        managedChildren,
        rovingTabIndex,
        typeaheadNavigation
    });

    const { managedChildren: { children: rows } } = gridNavRet1;

    const useTableRow = useCallback<UseTableRow<RowElement, CellElement>>(({ asChildRowOfSection, asParentRowOfCells, tableRow: { location, tagTableRow } }: UseTableRowParameters<RowElement, CellElement>): UseTableRowReturnTypeWithHooks<RowElement, CellElement> => {
        debugLog("useTableRow", asChildRowOfSection.managedChild.index);

        const getCells = useCallback(() => {
            return cells;
        }, [])

        const {
            useGridNavigationCell,
            useGridNavigationRowProps,
            ...gridNavRet2
        } = useGridNavigationRow({ asChildRowOfSection: { ...asChildRowOfSection, subInfo: { getCells, location } }, asParentRowOfCells });

        const { asParentOfCells: { managedChildren: { children: cells } } } = gridNavRet2;

        const useTableCell = useCallback<UseTableCell<CellElement>>(({ listNavigation, managedChild, rovingTabIndex, subInfo, hasFocus, tableCell: { tagTableCell, headerType } }) => {
            const [mySortDirection, setMySortDirection] = useState<TableSortDirection | null>(null);
            debugLog("useTableCell", managedChild.index);
            const {
                useGridNavigationCellProps,
                ...gridNavRet3
            } = useGridNavigationCell({ listNavigation, managedChild, rovingTabIndex, subInfo: { ...subInfo, setMySortDirection }, hasFocus });

            const sort = useStableCallback(() => {
                const sortInfo = getCurrentSortColumn() ?? { index: -1, direction: 'ascending' };
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
                })

                bodySort.current!();
            });

            const useTableCellProps: typeof useGridNavigationCellProps = (props) => {

                if (tagTableCell != "td" && tagTableCell != "th") {
                    if (headerType == "row")
                        props.role = warnOnOverwrite("useTableCell", "role", props.role, "rowheader");
                    else if (headerType == "column")
                        props.role = warnOnOverwrite("useTableCell", "role", props.role, "columnheader");
                    else
                        props.role = warnOnOverwrite("useTableCell", "role", props.role, "cell");
                }
                else {
                    if (headerType == "row")
                        props.scope = warnOnOverwrite("useTableCell", "scope", props.scope, "row");
                    else if (headerType == "column")
                        props.scope = warnOnOverwrite("useTableCell", "scope", props.scope, "col");
                }
                if (headerType != null) {
                    if (mySortDirection == "descending") {
                        props["aria-sort"] = warnOnOverwrite("useTableCell", "aria-sort", props["aria-sort"], "descending");
                    }
                    else if (mySortDirection == "ascending") {
                        props["aria-sort"] = warnOnOverwrite("useTableCell", "aria-sort", props["aria-sort"], "ascending");
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
                props.role = warnOnOverwrite("useTableRow", "role", props.role, "row");
            return useGridNavigationRowProps(props);
        };

        return {
            useTableCell,
            useTableRowProps,
            ...gridNavRet2
        }
    }, []);

    const useTableBody = useCallback<UseTableBody<BodySectionElement, RowElement, CellElement>>(() => {
        debugLog("useTableBody");
        type C = UseRovingTabIndexSubInfo<RowElement, UseListNavigationSubInfo<UseTableRowSubInfo<CellElement>>>;
        type V = { location: "head" | "body" | "foot", value: TableValueType };
        const getIndex = useCallback<GetIndex<C, never>>((i) => i.index, []);
        const getValue = useCallback<GetValue<C, never, [], V>>((i) => {
            const cells = i.subInfo.subInfo.subInfo.getCells();
            const cell = cells.getAt(getCurrentSortColumn()?.index ?? 0);
            return ({
                location: cell?.subInfo.subInfo.subInfo.location ?? "head",
                value: cell?.subInfo.subInfo.subInfo.value ?? -1
            });
            //return cells.getAt(getCurrentSortColumn()?.index ?? 0)?.subInfo.subInfo.subInfo.value ?? null;
        }, []);

        const compare: Compare<V> = (lhs, rhs) => {
            if (lhs.location === rhs.location)
                return +(lhs.value ?? -Infinity) - +(rhs.value ?? -Infinity);
            if (lhs.location == 'head')
                return -1;
            if (lhs.location == 'body')
                return rhs.location == 'head' ? -1 : 1;
            return 1;
        }

        const {
            useSortableProps,
            ...sortableRet
        } = useSortableChildren<BodySectionElement, UseRovingTabIndexSubInfo<RowElement, UseListNavigationSubInfo<UseTableRowSubInfo<CellElement>>>, never, [], V>({
            rearrangeableChildren: {
                getIndex
            },
            sortableChildren: {
                compare,
                getValue
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

    const useTableSectionProps = useCallback((tag: string, location: UseTableRowSubInfo<any>["location"], props: h.JSX.HTMLAttributes<any>) => {
        if (!(tag == "thead" || tag == "tbody" || tag == "tfoot")) {
            props.role = warnOnOverwrite("useTableSectionProps", "role", props.role, "rowgroup");
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
