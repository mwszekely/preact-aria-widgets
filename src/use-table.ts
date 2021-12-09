import { FunctionComponent, h, VNode } from "preact";
import { useChildManager, useSortableChildren, useForceUpdate, useGridNavigation, UseGridNavigationCellInfo, UseGridNavigationCellParameters, UseGridNavigationRowInfo, UseGridNavigationRowParameters, useHasFocus, usePassiveState, useStableCallback, useStableGetter, useState } from "preact-prop-helpers";
import { useMergedProps } from "preact-prop-helpers";
import { generateRandomId } from "preact-prop-helpers";
import { useCallback, useEffect, useLayoutEffect, useRef } from "preact/hooks";
import type { TagSensitiveProps } from "./props";
import { usePressEventHandlers } from "./use-button";

export interface TableRowInfo extends UseGridNavigationRowInfo {
    getManagedCells: () => TableBodyCellInfo[];

    location: "head" | "body" | "foot";

    /**
     * To handle sorting, each row component keeps track of what row it represents data-wise
     * ("rowIndexAsUnsorted") and what row it's currently displaying in ("rowIndexAsSorted").
     * The "as unsorted" row index never changes for a component, while the "as sorted" row index does.
     * 
     * When a table is unsorted, those two always match.  If a 2-row table is sorted in 
     * reverse order, then the topmost row will have rowIndexAsUnsorted be 1, and its
     * rowIndexAsSorted will be 0.  In terms of components, that row's component changed
     * its "as sorted" row index.  In terms of the DOM, that TR element's "as sorted"
     * won't change, but it will be rendering a component with a different "as unsorted".
     * 
     * Just make sure you're keeping in mind the distinction between
     * * The `TableRow` component, which moves around to different DOM nodes and whose "as unsorted" remains constant but whose "as sorted" jumps around
     * * The TR element in the DOM, which stays still but has different components "attached" to it. These components
     * will all come bearing the same "as sorted" row index matching this TR, but a different "as unsorted".
     * 
     * @param index 
     */
    setRowIndexAsSorted(index: number | null): void;

    getRowIndexAsSorted(): number | null;
}

export interface TableBodyCellInfo<T extends number | string | Date | null | undefined | boolean = number | string | Date | null | undefined | boolean> extends UseGridNavigationCellInfo {

    /**
     * This is the value that, originally passed to the cell,
     * represents what value this cell would show if we weren't sorted.
     */
    value: T;
}

export interface TableHeadRowInfo extends UseGridNavigationRowInfo { }
export interface TableHeadCellInfo extends UseGridNavigationCellInfo { }

export interface UseTableParameters { }
interface UseTableSectionParameters { location: "head" | "body" | "foot" }

export type UseTableRowParameters = Omit<UseGridNavigationRowParameters<TableRowInfo>, "text" | "getManagedCells" | "getRowIndexAsSorted" | "setRowIndexAsSorted" | "navIndex">;
export type UseTableCellParameters = Omit<UseGridNavigationCellParameters<TableBodyCellInfo>, "text" | "displayValue" | "navIndex">;
export type UseTableHeadCellParameters<TH extends Element> = TagSensitiveProps<TH> & Omit<UseGridNavigationCellParameters<TableBodyCellInfo>, "value" | "text" | "displayValue" | "navIndex"> & { unsortable?: boolean }




export type UseTableCell<BC extends Element> = ({ index, value }: UseTableCellParameters) => {
    useTableCellProps: <P extends h.JSX.HTMLAttributes<BC>>({ role, ...props }: P) => h.JSX.HTMLAttributes<BC>
    useTableCellDelegateProps: <P extends h.JSX.HTMLAttributes<any>>(props: P) => h.JSX.HTMLAttributes<any>
}

export type UseTableHeadCellProps<HC extends Element> = <P extends h.JSX.HTMLAttributes<HC>>(props: P) => h.JSX.HTMLAttributes<HC>;



export type UseTableHeadCell<HC extends Element> = ({ index, unsortable, tag }: UseTableHeadCellParameters<HC>) => {
    useTableHeadCellProps: UseTableHeadCellProps<HC>;
    useTableHeadCellDelegateProps: <P extends h.JSX.HTMLAttributes<any>>(props: P) => h.JSX.HTMLAttributes<any>;
    sortDirection: "ascending" | "descending" | null;
}

export type UseTableRow<R extends Element, C extends Element> = (parameters: UseTableRowParameters) => {
    useTableCell: UseTableCell<C>;
    useTableRowProps: <P extends h.JSX.HTMLAttributes<R>>(props: P) => h.JSX.HTMLAttributes<R>
    useTableHeadCell: UseTableHeadCell<C>;
    rowIndexAsSorted: number | null;
    rowIndexAsUnsorted: number;
}

export type SortableTypes = number | string | Date | null | undefined | boolean;

const LocationPriority = { "head": 0, "body": 1, "foot": 2 };


export type UseTableHeadReturnType<S extends Element, R extends Element, C extends Element> = { useTableHeadRow: UseTableRow<R, C>; useTableHeadProps: <P extends h.JSX.HTMLAttributes<S>>(props: P) => h.JSX.HTMLAttributes<S>; };
export type UseTableBodyReturnType<S extends Element, R extends Element, C extends Element> = { useTableBodyRow: UseTableRow<R, C>; useTableBodyProps: <P extends h.JSX.HTMLAttributes<S>>(props: P) => h.JSX.HTMLAttributes<S>; };
export type UseTableFootReturnType<S extends Element, R extends Element, C extends Element> = { useTableFootRow: UseTableRow<R, C>; useTableFootProps: <P extends h.JSX.HTMLAttributes<S>>(props: P) => h.JSX.HTMLAttributes<S>; };
    type UseTableSectionReturnType<S extends Element, R extends Element, C extends Element> = { useTableSectionRow: UseTableRow<R, C>; useTableSectionProps: <P extends h.JSX.HTMLAttributes<S>>(props: P) => h.JSX.HTMLAttributes<S>; managedRows: TableRowInfo[]; }
export type UseTableHead<S extends Element, R extends Element, C extends Element> = () => UseTableHeadReturnType<S, R, C>;
export type UseTableBody<S extends Element, R extends Element, C extends Element> = () => UseTableBodyReturnType<S, R, C>;
export type UseTableFoot<S extends Element, R extends Element, C extends Element> = () => UseTableFootReturnType<S, R, C>;
    type UseTableSection<S extends Element, R extends Element, C extends Element> = (parameters: UseTableSectionParameters) => UseTableSectionReturnType<S, R, C>;

const identity = <T>(t: T) => t;

// TODO: Sorting really needs to be extracted into its own hook
// so it can be used with, like, lists and junk too
// but just getting to this point in the first place was *exhausting*.
//
// Please be aware that table rows must be *direct descendants* of
export function useTable<T extends Element, S extends Element, R extends Element, C extends Element>({ }: UseTableParameters) {

    // Only used by the sorting function, nothing else
    const [bodyRows, setBodyRows, getBodyRows] = useState<TableRowInfo[] | null>(null);
    const { demangleMap, indexDemangler, indexMangler, mangleMap, sort: originalSort, useSortableProps } = useSortableChildren<TableRowInfo, [number], S>({
        getValue: useCallback((row: TableRowInfo, column: number) => {
            return row.getManagedCells()?.[column]?.value;
        }, []),
        getIndex: useCallback((row: TableRowInfo) => {
            return row.index;
        }, []),
    });

    // This is the index of the currently sorted column('s header cell that was clicked to sort it).
    // This is used by all the header cells to know when to reset their "sort mode" back to its initial state.
    const [sortedColumn, setSortedColumn, getSortedColumn] = useState<null | number>(null);
    const [sortedDirection, setSortedDirection, getSortedDirection] = useState<"ascending" | "descending" | null>(null);
    const { useManagedChild: useManagedHeaderCellChild, managedChildren: managedHeaderCells } = useChildManager<{ index: string; setSortedColumn(column: number): void; }>();

    // When we sort the table, we need to manually update each table component
    // A little bit ugly, but it gets the job done.
    const { useManagedChild: useManagedTableSection, managedChildren: managedTableSections } = useChildManager<{ index: "head" | "body" | "foot", forceUpdate(): void }>();


    // Used for navigation to determine when focus should follow the selected cell
    const { useHasFocusProps, getFocusedInner } = useHasFocus<T>({});



    // Wrap the "useSortable" sort function to also set some internal state
    // regarding which column is sorted and in what direction.
    const sort = useCallback((column: number, direction: "ascending" | "descending"): Promise<void> | void => {
        setSortedColumn(column);
        setSortedDirection(direction);
        originalSort(getBodyRows()!, direction, column);
    }, [ /* Must remain stable */]);


    const useTableSection: UseTableSection<S, R, C> = useCallback(({ location }: { location: "head" | "body" | "foot" }) => {

        const { useManagedChildProps } = useManagedTableSection<S>({ index: location, forceUpdate: useForceUpdate() });
        const useTableSectionProps = useCallback(<P extends h.JSX.HTMLAttributes<S>>(props: P) => {
            return useManagedChildProps(useMergedProps<S>()({ role: "rowgroup" }, props))
        }, [useManagedChildProps]);


        // Actually implement grid navigation
        const { cellIndex, rowIndex, rowCount, useGridNavigationRow, managedRows } = useGridNavigation<R, C, TableRowInfo, TableBodyCellInfo>({
            shouldFocusOnChange: getFocusedInner,
            indexMangler,
            indexDemangler
        });


        /**
         * 
         * IMPORTANT NOTE ABOUT COMPONENTS USING THIS HOOK!!
         * 
         * The rowIndex prop that you pass to your custom TableRow component
         * *must* be named "rowIndex" and *must* be, e.g., 0 for the header
         * row, 1 for the first body row, etc.
         * 
         * Your custom TableRow component must also be the *direct*
         * child of whatever implements your TableHead, TableBody, and 
         * TableFoot components.
         * 
         */
        const useTableRow: UseTableRow<R, C> = useCallback(({ index: rowIndexAsUnsorted, location, hidden }: UseTableRowParameters) => {
            // This is used by the sort function to update this row when everything's shuffled.
            const [rowIndexAsSorted, setRowIndexAsSorted, getRowIndexAsSorted] = useState<number | null>(null);
            const getManagedCells = useStableCallback(() => managedCells);

            const { useGridNavigationCell, useGridNavigationRowProps, cellCount, isTabbableRow, managedCells } = useGridNavigationRow({ index: rowIndexAsUnsorted, getManagedCells, hidden, ...{ rowIndexAsSorted: getRowIndexAsSorted() } as {}, getRowIndexAsSorted, setRowIndexAsSorted, location });

            // Not public -- just the shared code between header cells and body cells
            const useTableCellShared = useCallback(<C extends Element>({ index, value }: { index: number, value: SortableTypes }) => {
                const { useGridNavigationCellProps, } = useGridNavigationCell({ index, value });
                function useTableCellProps<P extends h.JSX.HTMLAttributes<C>>({ role, ...props }: P) {
                    return (useMergedProps<any>()({ role: "gridcell" }, props));
                }

                function useTableCellDelegateProps<P extends h.JSX.HTMLAttributes<any>>({ role, ...props }: P) {
                    return useGridNavigationCellProps(props);
                }

                return { useTableCellProps, useTableCellDelegateProps };

            }, [])

            const useTableHeadCell: UseTableHeadCell<C> = useCallback(({ index: columnIndex, unsortable, tag }: UseTableHeadCellParameters<C>) => {

                const { useTableCellDelegateProps, useTableCellProps } = useTableCellShared<C>({ index: columnIndex, value: "" });

                // This is mostly all just in regards to
                // handling the "sort-on-click" interaction.
                const [sortDirection, setSortDirection, getSortDirection] = useState<null | "ascending" | "descending">(null);
                const [isTheSortedColumn, setIsTheSortedColumn] = useState(false);
                const random = useRef(generateRandomId());
                const { getElement, useManagedChildProps } = useManagedHeaderCellChild<C>({ index: random.current, setSortedColumn: useCallback((c) => { setIsTheSortedColumn(c === columnIndex) }, [columnIndex]) })

                useEffect(() => {
                    if (!isTheSortedColumn)
                        setSortDirection(null);
                }, [isTheSortedColumn])


                const onSortClick = useCallback(() => {
                    let nextSortDirection = getSortDirection();
                    if (nextSortDirection === "ascending")
                        nextSortDirection = "descending";
                    else
                        nextSortDirection = "ascending";

                    setSortDirection(nextSortDirection);
                    sort(columnIndex, nextSortDirection);
                }, []);

                const useTableHeadCellProps: UseTableHeadCellProps<C> = <P extends h.JSX.HTMLAttributes<C>>(props: P) => {
                    const m = useTableCellProps(usePressEventHandlers<C>(unsortable ? null : onSortClick, undefined)(
                        (useMergedProps<C>()({
                            role: "columnheader",
                        }, props))));
                    return useManagedChildProps(m as any);
                }

                return { useTableHeadCellProps, useTableHeadCellDelegateProps: useTableCellDelegateProps, sortDirection };

            }, [])

            const useTableCell: UseTableCell<C> = useCallback(({ index, value }: UseTableCellParameters) => {
                const { useTableCellDelegateProps, useTableCellProps } = useTableCellShared<C>({ index, value });

                return { useTableCellProps, useTableCellDelegateProps };
            }, [])

            function useTableRowProps<P extends h.JSX.HTMLAttributes<R>>({ role, ...props }: P) {
                return useGridNavigationRowProps(useMergedProps<R>()({ role: "row" }, props))
            }

            return { useTableCell, useTableRowProps, useTableHeadCell, rowIndexAsSorted, rowIndexAsUnsorted };
        }, []);

        return { useTableSectionProps, useTableSectionRow: useTableRow, managedRows }
    }, []);



    const useTableHead: UseTableHead<S, R, C> = useCallback(() => {

        // Used to track if we tried to render any rows before they've been
        // given their "true" index to display (their sorted index).
        // This is true for all rows initially on mount, but especially true
        // when the table has been pre-sorted and then a new row is
        // added on top of that afterwards. 
        const [hasUnsortedRows, setHasUnsortedRows] = useState(false);
        useEffect(() => {
            if (hasUnsortedRows) {
                sort(getSortedColumn() ?? 0, getSortedDirection() ?? "ascending");
                setHasUnsortedRows(false);
            }
        }, [hasUnsortedRows]);

        const { useTableSectionRow: useTableHeadRow, useTableSectionProps } = useTableSection({ location: "head" });
        return { useTableHeadRow, useTableHeadProps: useTableSectionProps };
    }, [useTableSection]);


    const useTableBody: UseTableBody<S, R, C> = useCallback(() => {
        const { useTableSectionRow: useTableBodyRow, useTableSectionProps, managedRows } = useTableSection({ location: "body" });

        const useTableBodyProps = useCallback(<P extends h.JSX.HTMLAttributes<S>>({ children, ...props }: P) => {
            return useSortableProps(useTableSectionProps(useMergedProps<S>()({ role: "rowgroup", children: children as VNode[] }, props)) as any);
        }, [useTableSectionProps]);

        useEffect(() => {
            setBodyRows(prev => managedRows);
        }, [managedRows]);

        return { useTableBodyRow: useTableBodyRow, useTableBodyProps };
    }, []);


    const useTableFoot: UseTableFoot<S, R, C> = useCallback(() => {
        const { useTableSectionRow: useTableFootRow, useTableSectionProps } = useTableSection({ location: "head" });
        return { useTableFootRow, useTableFootProps: useTableSectionProps };
    }, [useTableSection]);



    // Whenever any given header cell requests a sort, it sets itself here, in the table,
    // as the "sortedColumn" column.  We then, as the parent table, let all the other
    // header rows know who is the "sortedColumn" column so that they can un-style themselves.
    useEffect(() => {
        if (sortedColumn != null) {
            Object.entries(managedHeaderCells).forEach(([index, cell]) => { cell.setSortedColumn(sortedColumn) });
        }
    }, [sortedColumn])



    // Tables need a role of "grid" in order to be considered 
    // "interactive content" like a text box that passes through
    // keyboard inputs.
    function useTableProps<P extends h.JSX.HTMLAttributes<T>>({ role, ...props }: P) { return useHasFocusProps(useMergedProps<T>()({ role: "grid" }, props)); }



    return {
        useTableProps,
        useTableHead,
        useTableBody,
        useTableFoot,
        managedTableSections
    }

}


