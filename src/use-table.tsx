import { h } from "preact";
import { ManagedChildren, returnNull, useGridNavigation, UseGridNavigationParameters, UseHasFocusParameters, UseListNavigationReturnTypeInfo, UseListNavigationSubInfo, usePassiveState, UseRovingTabIndexSubInfo, useSortableChildren, useStableCallback } from "preact-prop-helpers";
import { UseGridNavigationCellParameters, UseGridNavigationCellReturnTypeInfo, UseGridNavigationRowParameters, UseGridNavigationRowReturnTypeInfo } from "preact-prop-helpers/use-grid-navigation";
import { Compare, GetIndex, GetValue, UseSortableChildrenReturnTypeInfo } from "preact-prop-helpers/use-sortable-children";
import { useCallback, useLayoutEffect, useRef } from "preact/hooks";
import { debugLog } from "./props";

export type TableValueType = string | number | null | boolean | Date;

export interface UseTableParameters extends UseGridNavigationParameters<"indexMangler" | "indexDemangler", never, never, never, never> { }
export interface UseTableBodyParameters { }
export interface UseTableRowParameters<CellElement extends Element> extends Omit<UseGridNavigationRowParameters<UseTableRowSubInfo<CellElement>, never, never, never, never, never, never, "subInfo", "subInfo", "subInfo", {}>, "subInfo"> {
    tableRow: Pick<UseTableRowSubInfo<CellElement>, "location">;
}
export interface UseTableCellParameters<CellElement extends Element> extends UseGridNavigationCellParameters<CellElement, UseTableCellSubInfo, never, "subInfo", "subInfo", "subInfo", UseTableCellSubInfo> {
    hasFocus: UseHasFocusParameters<CellElement>;
}

export interface UseTableRowSubInfo<CellElement extends Element> {
    location: "head" | "body" | "foot";
    getCells(): ManagedChildren<number, UseRovingTabIndexSubInfo<CellElement, UseListNavigationSubInfo<UseTableCellSubInfo>>, "tabbable">;
}

export interface UseTableCellSubInfo {
    location: "head" | "body" | "foot";
    value: TableValueType;
}




export interface UseTableCellReturnTypeInfo<CellElement extends Element> extends UseGridNavigationCellReturnTypeInfo<CellElement> { tableHeaderCell: { sort(): void } }
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
}

export type UseTableCell<CellElement extends Element> = (p: UseTableCellParameters<CellElement>) => UseTableCellReturnTypeWithHooks<CellElement>;
export type UseTableRow<RowElement extends Element, CellElement extends Element> = (p: UseTableRowParameters<CellElement>) => UseTableRowReturnTypeWithHooks<RowElement, CellElement>;
export type UseTableBody<BodySectionElement extends Element, RowElement extends Element, CellElement extends Element> = (p: UseTableBodyParameters) => UseTableBodyReturnTypeWithHooks<BodySectionElement, RowElement, CellElement>;

export function useTable<
    TableElement extends Element,
    BodySectionElement extends Element,
    RowElement extends Element,
    CellElement extends Element
>({ linearNavigation, listNavigation, managedChildren, rovingTabIndex, typeaheadNavigation }: UseTableParameters): UseTableReturnTypeWithHooks<TableElement, BodySectionElement, RowElement, CellElement> {
    debugLog("useTable");

    const [getCurrentSortColumn, setCurrentSortColumn] = usePassiveState<{ index: number, direction: "ascending" | "descending" } | null>(null, returnNull);
    const bodySort = useRef<null | (() => void)>(null);

    const {
        useGridNavigationProps,
        useGridNavigationRow,
        ...gridNavRet1
    } = useGridNavigation<TableElement, RowElement, CellElement, UseTableRowSubInfo<CellElement>, UseTableCellSubInfo, never, never>({
        linearNavigation,
        listNavigation,
        managedChildren,
        rovingTabIndex,
        typeaheadNavigation
    });

    const { managedChildren: { children: rows } } = gridNavRet1;

    const useTableRow = useCallback<UseTableRow<RowElement, CellElement>>(({ asChildRowOfSection, asParentRowOfCells, tableRow: { location } }: UseTableRowParameters<CellElement>): UseTableRowReturnTypeWithHooks<RowElement, CellElement> => {
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

        const useTableCell = useCallback<UseTableCell<CellElement>>(({ listNavigation, managedChild, rovingTabIndex, subInfo, hasFocus }) => {
            debugLog("useTableCell", managedChild.index);
            const {
                useGridNavigationCellProps,
                ...gridNavRet3
            } = useGridNavigationCell({ listNavigation, managedChild, rovingTabIndex, subInfo, hasFocus });

            const sort = useStableCallback(() => {
                const sortInfo = getCurrentSortColumn() ?? { index: -1, direction: 'ascending' };
                const cellIndex = managedChild.index;
                if (sortInfo.index != cellIndex) {
                    if (sortInfo.direction[0] == 'a')
                        sortInfo.direction = 'descending';
                    else
                        sortInfo.direction = 'ascending';
                }

                sortInfo.index = managedChild.index;
                setCurrentSortColumn(sortInfo);

                bodySort.current!();
            });

            const useTableCellProps: typeof useGridNavigationCellProps = (props) => props;
            return {
                tableHeaderCell: { sort },
                useTableCellProps,
                ...gridNavRet3
            }

        }, []);

        const useTableRowProps: typeof useGridNavigationRowProps = (props) => props;

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

        const { sortableChildren: { sort } } = sortableRet;
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

    return {
        useTableProps,
        useTableBody,
        useTableRow,
        ...gridNavRet1
    }
}
