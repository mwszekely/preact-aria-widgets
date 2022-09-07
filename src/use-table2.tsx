import { ManagedChildInfo, returnNull, useGridNavigation, UseGridNavigationParameters, UseListNavigationSubInfo, usePassiveState, UseRovingTabIndexSubInfo, useSortableChildren } from "preact-prop-helpers";
import { UseGridNavigationCellParameters, UseGridNavigationRowParameters } from "preact-prop-helpers/use-grid-navigation";
import { Compare, GetIndex, GetValue } from "preact-prop-helpers/use-sortable-children";
import { useCallback } from "preact/hooks";

export type TableValueType = string | number | null | boolean | Date;

export interface UseAriaTableParameters extends UseGridNavigationParameters<never, never, never, never, never> {

}

export interface UseAriaTableBodyParameters {
    compare(lhs: TableValueType, rhs: TableValueType): number;
}

export interface UseAriaTableRowParameters extends UseGridNavigationRowParameters<never, never, never, never, never, never, never, never, never, never> {

}

export interface UseAriaTableCellParameters extends UseGridNavigationCellParameters<never, never, never, never, never> {

}

export interface UseAriaTableSubInfo {
    value: string | number | Date;
}

export function useAriaTable<
    TableElement extends Element,
    RowElement extends Element,
    CellElement extends Element
>({ linearNavigation, listNavigation, managedChildren, rovingTabIndex, typeaheadNavigation }: UseAriaTableParameters) {

    const [getCurrentSortColumn, setCurrentSortColumn] = usePassiveState<{ index: number, direction: "asc" | "desc" } | null>(null, returnNull);

    const {
        useGridNavigationProps,
        useGridNavigationRow,
        ...gridNavRet
    } = useGridNavigation<TableElement, RowElement, CellElement, UseAriaTableSubInfo, {}, never, never>({
        linearNavigation,
        listNavigation,
        managedChildren,
        rovingTabIndex,
        typeaheadNavigation
    });

    const useTableRow = useCallback(({ asChildRowOfSection, asParentRowOfCells }: UseAriaTableRowParameters) => {
        const {
            asChildRow,
            asParentOfCells,
            useGridNavigationCell,
            useGridNavigationRowProps
        } = useGridNavigationRow({ asChildRowOfSection, asParentRowOfCells });

        const useTableCell = useCallback(({ listNavigation, managedChild, rovingTabIndex, subInfo }: UseAriaTableCellParameters) => {
            const {
                useGridNavigationCellProps,
                ...gridNavCellRet
            } = useGridNavigationCell({ listNavigation, managedChild, rovingTabIndex, subInfo });

            const useTableCellProps: typeof useGridNavigationCellProps = (props) => props;
            return {
                useTableCellProps
            }

        }, []);

        const useTableRowProps: typeof useGridNavigationRowProps = (props) => props;

        return {
            useTableCell,
            useTableRowProps
        }
    }, []);

    const useTableBody = useCallback(({ compare }: UseAriaTableBodyParameters) => {
        type C = UseRovingTabIndexSubInfo<RowElement, UseListNavigationSubInfo<UseAriaTableSubInfo>>;
        const getIndex = useCallback<GetIndex<C, never>>((i) => i.index, []);
        //const compare = useCallback<Compare<V>>((lhs, rhs) => (lhs - rhs), []);
        const getValue = useCallback<GetValue<C, never, [], TableValueType>>((i) => i.subInfo.subInfo.subInfo.value, []);
        const {
            useSortableProps,
            ...sortableRet
        } = useSortableChildren<TableElement, UseRovingTabIndexSubInfo<RowElement, UseListNavigationSubInfo<UseAriaTableSubInfo>>, never, [], TableValueType>({
            rearrangeableChildren: {
                getIndex
            },
            sortableChildren: {
                compare,
                getValue
            }
        });
    }, []);
}
