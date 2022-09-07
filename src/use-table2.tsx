import { h } from "preact";
import { ManagedChildren, returnNull, useGridNavigation, UseGridNavigationParameters, useLayoutEffect, UseListNavigationReturnTypeInfo, UseListNavigationSubInfo, usePassiveState, UseRovingTabIndexSubInfo, useSortableChildren, useStableCallback } from "preact-prop-helpers";
import { UseGridNavigationCellParameters, UseGridNavigationCellReturnTypeInfo, UseGridNavigationRowParameters, UseGridNavigationRowReturnTypeInfo } from "preact-prop-helpers/use-grid-navigation";
import { Compare, GetIndex, GetValue, UseSortableChildrenReturnTypeInfo } from "preact-prop-helpers/use-sortable-children";
import { useCallback, useRef } from "preact/hooks";

export type TableValueType = string | number | null | boolean | Date;

export interface UseAriaTableParameters extends UseGridNavigationParameters<never, never, never, never, never> { }
export interface UseAriaTableBodyParameters { }
export interface UseAriaTableRowParameters<CellElement extends Element> extends UseGridNavigationRowParameters<UseAriaTableRowSubInfo<CellElement>, never, never, "subInfo", "subInfo", "subInfo", "subInfo", "subInfo", "subInfo", "subInfo", never> {
    tableRow: Pick<UseAriaTableRowSubInfo<CellElement>, "location">;
}
export interface UseAriaTableCellParameters extends UseGridNavigationCellParameters<UseAriaTableCellSubInfo, never, "subInfo", "subInfo", "subInfo", UseAriaTableCellSubInfo> { }

export interface UseAriaTableRowSubInfo<CellElement extends Element> {
    location: "head" | "body" | "foot";
    getCells(): ManagedChildren<number, UseRovingTabIndexSubInfo<CellElement, UseListNavigationSubInfo<UseAriaTableCellSubInfo>>, "tabbable">;
}

export interface UseAriaTableCellSubInfo {
    location: "head" | "body" | "foot";
    value: TableValueType;
}




export interface UseAriaTableCellReturnTypeInfo<CellElement extends Element> extends UseGridNavigationCellReturnTypeInfo<CellElement> { tableHeaderCell: { sort(): void } }
export interface UseAriaTableRowReturnTypeInfo<RowElement extends Element, CellElement extends Element> extends UseGridNavigationRowReturnTypeInfo<RowElement, CellElement, UseAriaTableCellSubInfo, never> { }
export interface UseAriaTableBodyReturnTypeInfo<RowElement extends Element, CellElement extends Element> extends UseSortableChildrenReturnTypeInfo<UseRovingTabIndexSubInfo<RowElement, UseListNavigationSubInfo<UseAriaTableRowSubInfo<CellElement>>>, never, []> { }
export interface UseAriaTableReturnTypeInfo<RowElement extends Element, CellElement extends Element> extends UseListNavigationReturnTypeInfo<RowElement, UseAriaTableRowSubInfo<CellElement>, never> { }


export interface UseAriaTableCellReturnTypeWithHooks<CellElement extends Element> extends UseAriaTableCellReturnTypeInfo<CellElement> { useTableCellProps: (props: h.JSX.HTMLAttributes<CellElement>) => h.JSX.HTMLAttributes<CellElement>; }
export interface UseAriaTableRowReturnTypeWithHooks<RowElement extends Element, CellElement extends Element> extends UseAriaTableRowReturnTypeInfo<RowElement, CellElement> { useTableCell: UseAriaTableCell<CellElement>; useTableRowProps: (props: h.JSX.HTMLAttributes<RowElement>) => h.JSX.HTMLAttributes<RowElement>; }
export interface UseAriaTableBodyReturnTypeWithHooks<BodySectionElement extends Element, RowElement extends Element, CellElement extends Element> extends UseAriaTableBodyReturnTypeInfo<RowElement, CellElement> { useTableBodyProps: (props: h.JSX.HTMLAttributes<BodySectionElement>) => h.JSX.HTMLAttributes<BodySectionElement> }
export interface UseAriaTableReturnTypeWithHooks<TableElement extends Element, BodySectionElement extends Element, RowElement extends Element, CellElement extends Element> extends UseAriaTableReturnTypeInfo<RowElement, CellElement> {
    useTableRow: UseAriaTableRow<RowElement, CellElement>;
    useTableBody: UseAriaTableBody<BodySectionElement, RowElement, CellElement>;
    useTableProps: (props: h.JSX.HTMLAttributes<TableElement>) => h.JSX.HTMLAttributes<TableElement>;
}

export type UseAriaTableCell<CellElement extends Element> = (p: UseAriaTableCellParameters) => UseAriaTableCellReturnTypeWithHooks<CellElement>;
export type UseAriaTableRow<RowElement extends Element, CellElement extends Element> = (p: UseAriaTableRowParameters<CellElement>) => UseAriaTableRowReturnTypeWithHooks<RowElement, CellElement>;
export type UseAriaTableBody<BodySectionElement extends Element, RowElement extends Element, CellElement extends Element> = (p: UseAriaTableBodyParameters) => UseAriaTableBodyReturnTypeWithHooks<BodySectionElement, RowElement, CellElement>;

// (props: JSXInternal.HTMLAttributes<CellElement>) => JSXInternal.HTMLAttributes<CellElement>

export function useAriaTable<
    TableElement extends Element,
    BodySectionElement extends Element,
    RowElement extends Element,
    CellElement extends Element
>({ linearNavigation, listNavigation, managedChildren, rovingTabIndex, typeaheadNavigation }: UseAriaTableParameters): UseAriaTableReturnTypeWithHooks<TableElement, BodySectionElement, RowElement, CellElement> {

    const [getCurrentSortColumn, setCurrentSortColumn] = usePassiveState<{ index: number, direction: "ascending" | "descending" } | null>(null, returnNull);
    const bodySort = useRef<null | (() => void)>(null);

    const {
        useGridNavigationProps,
        useGridNavigationRow,
        ...gridNavRet1
    } = useGridNavigation<TableElement, RowElement, CellElement, UseAriaTableRowSubInfo<CellElement>, UseAriaTableCellSubInfo, never, never>({
        linearNavigation,
        listNavigation,
        managedChildren,
        rovingTabIndex,
        typeaheadNavigation
    });

    const { managedChildren: { children: rows } } = gridNavRet1;

    const useTableRow = useCallback<UseAriaTableRow<RowElement, CellElement>>(({ asChildRowOfSection, asParentRowOfCells, tableRow: { location } }: UseAriaTableRowParameters<CellElement>): UseAriaTableRowReturnTypeWithHooks<RowElement, CellElement> => {

        const getCells = useCallback(() => {
            return cells;
        }, [])

        const {
            useGridNavigationCell,
            useGridNavigationRowProps,
            ...gridNavRet2
        } = useGridNavigationRow({ asChildRowOfSection: { ...asChildRowOfSection, subInfo: { getCells, location } }, asParentRowOfCells });

        const { asParentOfCells: { managedChildren: { children: cells } } } = gridNavRet2;

        const useTableCell = useCallback<UseAriaTableCell<CellElement>>(({ listNavigation, managedChild, rovingTabIndex, subInfo }) => {
            const {
                useGridNavigationCellProps,
                ...gridNavRet3
            } = useGridNavigationCell({ listNavigation, managedChild, rovingTabIndex, subInfo });

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

    const useTableBody = useCallback<UseAriaTableBody<BodySectionElement, RowElement, CellElement>>(() => {
        type C = UseRovingTabIndexSubInfo<RowElement, UseListNavigationSubInfo<UseAriaTableRowSubInfo<CellElement>>>;
        type V = {location: "head" | "body" | "foot", value: TableValueType};
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
                return rhs.location == 'head'? -1 : 1;
            return 1;
        }

        const {
            useSortableProps,
            ...sortableRet
        } = useSortableChildren<BodySectionElement, UseRovingTabIndexSubInfo<RowElement, UseListNavigationSubInfo<UseAriaTableRowSubInfo<CellElement>>>, never, [], V>({
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
