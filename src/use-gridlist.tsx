import { h } from "preact";
import { ManagedChildren, returnNull, useGridNavigation, UseGridNavigationParameters, UseHasFocusParameters, UseListNavigationReturnTypeInfo, UseListNavigationSubInfo, usePassiveState, UseRovingTabIndexSubInfo, useSortableChildren, useStableCallback } from "preact-prop-helpers";
import { UseGridNavigationCellParameters, UseGridNavigationCellReturnTypeInfo, UseGridNavigationRowParameters, UseGridNavigationRowReturnTypeInfo } from "preact-prop-helpers/use-grid-navigation";
import { Compare, GetIndex, GetValue, UseSortableChildrenReturnTypeInfo } from "preact-prop-helpers/use-sortable-children";
import { useCallback, useLayoutEffect, useRef } from "preact/hooks";
import { debugLog } from "./props";

export interface UseGridlistParameters extends UseGridNavigationParameters<"indexMangler" | "indexDemangler", never, never, never, never> { }
export interface UseGridlistSectionParameters { compareRows: (lhsIndex: number, rhsIndex: number) => number }
export interface UseGridlistRowParameters<CellElement extends Element> extends Omit<UseGridNavigationRowParameters<UseGridlistRowSubInfo<CellElement>, never, never, never, never, never, never, "subInfo", "subInfo", "subInfo", {}>, "subInfo"> {
    gridlistRow: Pick<UseGridlistRowSubInfo<CellElement>, "locationIndex">;
}
export interface UseGridlistChildParameters<CellElement extends Element> extends UseGridNavigationCellParameters<CellElement, UseGridlistChildSubInfo, never, "subInfo", "subInfo", "subInfo", UseGridlistChildSubInfo> {
    hasFocus: UseHasFocusParameters<CellElement>;
}

export interface UseGridlistRowSubInfo<CellElement extends Element> {
    locationIndex: number;
    getCells(): ManagedChildren<number, UseRovingTabIndexSubInfo<CellElement, UseListNavigationSubInfo<UseGridlistChildSubInfo>>, "tabbable">;
}

export interface UseGridlistChildSubInfo {
    locationIndex: number;
}




export interface UseGridlistChildReturnTypeInfo<CellElement extends Element> extends UseGridNavigationCellReturnTypeInfo<CellElement> { }
export interface UseGridlistRowReturnTypeInfo<RowElement extends Element, CellElement extends Element> extends UseGridNavigationRowReturnTypeInfo<RowElement, CellElement, UseGridlistChildSubInfo, never> { }
export interface UseGridlistSectionReturnTypeInfo<RowElement extends Element, CellElement extends Element> extends UseSortableChildrenReturnTypeInfo<UseRovingTabIndexSubInfo<RowElement, UseListNavigationSubInfo<UseGridlistRowSubInfo<CellElement>>>, never, []> { }
export interface UseGridlistReturnTypeInfo<RowElement extends Element, CellElement extends Element> extends UseListNavigationReturnTypeInfo<RowElement, UseGridlistRowSubInfo<CellElement>, never> { }


export interface UseGridlistChildReturnTypeWithHooks<CellElement extends Element> extends UseGridlistChildReturnTypeInfo<CellElement> { useGridlistChildProps: (props: h.JSX.HTMLAttributes<CellElement>) => h.JSX.HTMLAttributes<CellElement>; }
export interface UseGridlistRowReturnTypeWithHooks<RowElement extends Element, CellElement extends Element> extends UseGridlistRowReturnTypeInfo<RowElement, CellElement> { useGridlistChild: UseGridlistChild<CellElement>; useGridlistRowProps: (props: h.JSX.HTMLAttributes<RowElement>) => h.JSX.HTMLAttributes<RowElement>; }
export interface UseGridlistSectionReturnTypeWithHooks<BodySectionElement extends Element, RowElement extends Element, CellElement extends Element> extends UseGridlistSectionReturnTypeInfo<RowElement, CellElement> { useGridlistSectionProps: (props: h.JSX.HTMLAttributes<BodySectionElement>) => h.JSX.HTMLAttributes<BodySectionElement> }
export interface UseGridlistReturnTypeWithHooks<GridlistElement extends Element, BodySectionElement extends Element, RowElement extends Element, CellElement extends Element> extends UseGridlistReturnTypeInfo<RowElement, CellElement> {
    useGridlistRow: UseGridlistRow<RowElement, CellElement>;
    useGridlistSection: UseGridlistSection<BodySectionElement, RowElement, CellElement>;
    useGridlistProps: (props: h.JSX.HTMLAttributes<GridlistElement>) => h.JSX.HTMLAttributes<GridlistElement>;
}

export type UseGridlistChild<CellElement extends Element> = (p: UseGridlistChildParameters<CellElement>) => UseGridlistChildReturnTypeWithHooks<CellElement>;
export type UseGridlistRow<RowElement extends Element, CellElement extends Element> = (p: UseGridlistRowParameters<CellElement>) => UseGridlistRowReturnTypeWithHooks<RowElement, CellElement>;
export type UseGridlistSection<BodySectionElement extends Element, RowElement extends Element, CellElement extends Element> = (p: UseGridlistSectionParameters) => UseGridlistSectionReturnTypeWithHooks<BodySectionElement, RowElement, CellElement>;

export function useGridlist<
    GridlistElement extends Element,
    BodySectionElement extends Element,
    RowElement extends Element,
    CellElement extends Element
>({ linearNavigation, listNavigation, managedChildren, rovingTabIndex, typeaheadNavigation }: UseGridlistParameters): UseGridlistReturnTypeWithHooks<GridlistElement, BodySectionElement, RowElement, CellElement> {
    debugLog("useGridlist");

    const [getCurrentSortColumn, setCurrentSortColumn] = usePassiveState<{ index: number, direction: "ascending" | "descending" } | null>(null, returnNull);
    const bodySort = useRef<null | (() => void)>(null);

    const {
        useGridNavigationProps,
        useGridNavigationRow,
        ...gridNavRet1
    } = useGridNavigation<GridlistElement, RowElement, CellElement, UseGridlistRowSubInfo<CellElement>, UseGridlistChildSubInfo, never, never>({
        linearNavigation,
        listNavigation,
        managedChildren,
        rovingTabIndex,
        typeaheadNavigation
    });

    const { managedChildren: { children: rows } } = gridNavRet1;

    const useGridlistRow = useCallback<UseGridlistRow<RowElement, CellElement>>(({ asChildRowOfSection, asParentRowOfCells, gridlistRow: { locationIndex } }: UseGridlistRowParameters<CellElement>): UseGridlistRowReturnTypeWithHooks<RowElement, CellElement> => {
        debugLog("useGridlistRow", asChildRowOfSection.managedChild.index);

        const getCells = useCallback(() => {
            return cells;
        }, [])

        const {
            useGridNavigationCell,
            useGridNavigationRowProps,
            ...gridNavRet2
        } = useGridNavigationRow({ asChildRowOfSection: { ...asChildRowOfSection, subInfo: { getCells, locationIndex } }, asParentRowOfCells });

        const { asParentOfCells: { managedChildren: { children: cells } } } = gridNavRet2;

        const useGridlistChild = useCallback<UseGridlistChild<CellElement>>(({ listNavigation, managedChild, rovingTabIndex, subInfo, hasFocus }) => {
            debugLog("useGridlistChild", managedChild.index);
            const {
                useGridNavigationCellProps,
                ...gridNavRet3
            } = useGridNavigationCell({ listNavigation, managedChild, rovingTabIndex, subInfo, hasFocus });

            const useGridlistChildProps: typeof useGridNavigationCellProps = (props) => props;
            return {
                useGridlistChildProps,
                ...gridNavRet3
            }

        }, []);

        const useGridlistRowProps: typeof useGridNavigationRowProps = (props) => props;

        return {
            useGridlistChild,
            useGridlistRowProps,
            ...gridNavRet2
        }
    }, []);

    const useGridlistSection = useCallback<UseGridlistSection<BodySectionElement, RowElement, CellElement>>(({ compareRows }) => {
        debugLog("useGridlistSection");
        type C = UseRovingTabIndexSubInfo<RowElement, UseListNavigationSubInfo<UseGridlistRowSubInfo<CellElement>>>;
        type V = { locationIndex: number, index: number };
        const getIndex = useCallback<GetIndex<C, never>>((i) => i.index, []);
        const getValue = useCallback<GetValue<C, never, [], V>>((i) => {
            const cells = i.subInfo.subInfo.subInfo.getCells();
            const cell = cells.getAt(getCurrentSortColumn()?.index ?? 0);
            return ({
                locationIndex: cell?.subInfo.subInfo.subInfo.locationIndex ?? 0,
                index: cell?.index ?? 0
            });
        }, []);

        const compare: Compare<V> = (lhs, rhs) => {
            if (lhs.locationIndex === rhs.locationIndex)
                return compareRows(lhs.index, rhs.index);
            return lhs.locationIndex - rhs.locationIndex;
        }

        const {
            useSortableProps,
            ...sortableRet
        } = useSortableChildren<BodySectionElement, UseRovingTabIndexSubInfo<RowElement, UseListNavigationSubInfo<UseGridlistRowSubInfo<CellElement>>>, never, [], V>({
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

        const useGridlistSectionProps = (props: h.JSX.HTMLAttributes<BodySectionElement>) => {
            console.assert(props.children != null);
            return useSortableProps(props as h.JSX.HTMLAttributes<BodySectionElement> & { children: any });
        }

        return {
            useGridlistSectionProps,
            ...sortableRet
        }
    }, []);

    const useGridlistProps: typeof useGridNavigationProps = useGridNavigationProps;

    return {
        useGridlistProps,
        useGridlistSection,
        useGridlistRow,
        ...gridNavRet1
    }
}
