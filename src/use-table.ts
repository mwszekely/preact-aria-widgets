import { FunctionComponent, h, VNode } from "preact";
import { useChildManager, useForceUpdate, useGridNavigation, UseGridNavigationCellInfo, UseGridNavigationCellParameters, UseGridNavigationRowInfo, UseGridNavigationRowParameters, useHasFocus, useStableCallback, useStableGetter, useState } from "preact-prop-helpers";
import { useMergedProps } from "preact-prop-helpers/use-merged-props";
import { generateRandomId } from "preact-prop-helpers/use-random-id";
import { useCallback, useEffect, useRef } from "preact/hooks";
import { TagSensitiveProps } from "props";
import { useButtonLikeEventHandlers } from "./use-button";

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
    setRowIndexAsSorted(index: number): void;

    getRowIndexAsSorted(): number;
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
export interface UseTableSectionParameters { location: "head" | "body" | "foot" }

export type UseTableRowParameters = Omit<UseGridNavigationRowParameters<TableRowInfo>, "index" | "text" | "getManagedCells" | "getRowIndexAsSorted" | "setRowIndexAsSorted" | "navIndex"> & { rowIndex: number };;
export type UseTableCellParameters = Omit<UseGridNavigationCellParameters<TableBodyCellInfo>, "index" | "text" | "displayValue" | "navIndex"> & { columnIndex: number };
export type UseTableHeadCellParameters<TH extends Element> = TagSensitiveProps<TH> & Omit<UseGridNavigationCellParameters<TableBodyCellInfo>, "index" | "value" | "text" | "displayValue" | "navIndex"> & { columnIndex: number; unsortable?: boolean }


export type UseTableSection<H extends Element, R extends Element, C extends Element> = (parameters: UseTableSectionParameters) => {
    useTableRow: UseTableRow<R, C>;
    useTableSectionProps: <P extends Omit<h.JSX.HTMLAttributes<H>, "children"> & { children: VNode<any>[] }>(props: P) => h.JSX.HTMLAttributes<H>;
};


export type UseTableCell<BC extends Element> = ({ columnIndex, value }: UseTableCellParameters) => {
    useTableCellProps: <P extends h.JSX.HTMLAttributes<BC>>({ role, ...props }: P) => h.JSX.HTMLAttributes<BC>
    useTableCellDelegateProps: <P extends h.JSX.HTMLAttributes<any>>(props: P) => h.JSX.HTMLAttributes<any>
}

export type UseTableHeadCellProps<HC extends Element> = <P extends h.JSX.HTMLAttributes<HC>>(props: P) => h.JSX.HTMLAttributes<HC>;



export type UseTableHeadCell<HC extends Element> = ({ columnIndex, unsortable, tag }: UseTableHeadCellParameters<HC>) => {
    useTableHeadCellProps: UseTableHeadCellProps<HC>;
    useTableHeadCellDelegateProps: <P extends h.JSX.HTMLAttributes<any>>(props: P) => h.JSX.HTMLAttributes<any>;
    sortDirection: "ascending" | "descending" | null;
}

export type UseTableRow<R extends Element, C extends Element> = (parameters: UseTableRowParameters) => {
    useTableCell: UseTableCell<C>;
    useTableRowProps: <P extends h.JSX.HTMLAttributes<R>>(props: P) => h.JSX.HTMLAttributes<R>
    useTableHeadCell: UseTableHeadCell<C>;
    rowIndexAsSorted: number;
    rowIndexAsUnsorted: number;
}

export type SortableTypes = number | string | Date | null | undefined | boolean;

const LocationPriority = { "head": 0, "body": 1, "foot": 2 };

export interface UseTableRowProps {
    /**
     * When passed by you, this is the row index that this table
     * row represents. In a table with one header row, the header
     * row gets a rowIndex of 0, the first body cell a rowIndex of
     * 1, etc.
     * 
     * When your component renders itself, *this prop will possibly
     * have been changed*!! When sorted, the component will be
     * re-created with a specific key and a new rowIndex that
     * corresponds to the sorted table's ordering.
     * 
     * If you're not sure what to use, use `rowIndex` for things
     * related to visuals and UI (like for answering the question
     * "where do I go when pressing the DOWN arrow key?"). Use
     * `unsortedRowIndex` for things like data, though keep in mind
     * that it's relative to the number of rows in the header!
     */
    rowIndex: number;

    /**
     * See rowIndex.
     * 
     * If your TableRow component absolutely *needs* to know
     * the original row it was rendering as before the shuffle,
     * use this instead of `rowIndex`. Otherwise, prefer that
     * in basically all cases
     */
    unsortedRowIndex: number;
}

// TODO: Sorting really needs to be extracted into its own hook
// so it can be used with, like, lists and junk too
// but just getting to this point in the first place was *exhausting*.
//
// Please be aware of the special conditions between
// thead, tbody, tfoot and their respective child rows
// (namely each row MUST be a DIRECT descendant of its
// corresponding table section, or at the very least,
// must have a child that takes a rowIndex prop that
// corresponds to its row amongst ALL children, even those
// in a different table section)
export function useTable<T extends Element, S extends Element, R extends Element, C extends Element>({ }: UseTableParameters) {

    // This is the index of the currently sorted column('s header cell that was clicked to sort it).
    // This is used by all the header cells to know when to reset their "sort mode" back to its initial state.
    const [sortedColumn, setSortedColumn] = useState<null | number>(null);
    const { useManagedChild: useManagedHeaderCellChild, managedChildren: managedHeaderCells } = useChildManager<{ index: string; setSortedColumn(column: number): void; }>();

    // When we sort the table, we need to manually update each table component
    // A little bit ugly, but it gets the job done.
    const { useManagedChild: useManagedTableSection, managedChildren: managedTableSections } = useChildManager<{ index: "head" | "body" | "foot", forceUpdate(): void }>();


    // Used for navigation to determine when focus should follow the selected cell
    const [focusedInner, setFocusedInner, getFocusedInner] = useState(false);
    const { useHasFocusProps } = useHasFocus<T>({ setFocusedInner });
    const stableGetFocusedInner = useStableGetter(focusedInner);

    // These are used to keep track of a mapping between unsorted index <---> sorted index.
    // These are needed for navigation with the arrow keys.
    const mangleMap = useRef(new Map<number, number>());
    const demangleMap = useRef(new Map<number, number>());
    const indexMangler = useCallback((n: number) => (mangleMap.current.get(n) ?? n), []);
    const indexDemangler = useCallback((n: number) => (demangleMap.current.get(n) ?? n), []);

    // Only used by the sorting function, nothing else
    const [bodyRowsGetter, setBodyRowsGetter, getBodyRowsGetter] = useState<() => TableRowInfo[]>(null!);


    // The actual sort function.
    // Note that it DOES look at header and footer cells, but just tiptoes around them.
    const sort = useCallback((column: number, direction: "ascending" | "descending"): Promise<void> | void => {
        const managedRows = getBodyRowsGetter()();
        let sortedRows = managedRows.slice().sort((lhsRow, rhsRow) => {
            if (lhsRow.location != rhsRow.location) {
                return (LocationPriority[lhsRow.location] ?? -1) - (LocationPriority[rhsRow.location] ?? -1);
            }
            else if (lhsRow.location === "head" || lhsRow.location === "foot") {
                // Rows in the header and footer are never sorted -- they always remain in their position.
                console.assert(rhsRow.location === "head" || rhsRow.location === "foot");
                return lhsRow.index - rhsRow.index;
            }
            else if (lhsRow.location === "body") {
                console.assert(rhsRow.location === "body");
                let result = compare(lhsRow.getManagedCells()?.[column]?.value, rhsRow.getManagedCells()?.[column]?.value);
                if (direction[0] == "d")
                    return -result;
                return result;
            }

            console.assert(false);
            return 0;
        });

        // Update our sorted <--> unsorted indices map 
        // and rerender the whole table, basically
        for (let literalIndex = 0; literalIndex < sortedRows.length; ++literalIndex) {
            const overriddenIndex = sortedRows[literalIndex].index;

            mangleMap.current.set(literalIndex, overriddenIndex);
            demangleMap.current.set(overriddenIndex, literalIndex);
        }
        setSortedColumn(column);

        managedTableSections["head"]?.forceUpdate();
        managedTableSections["body"]?.forceUpdate();
        managedTableSections["foot"]?.forceUpdate();

    }, [ /* Must remain stable */]);

    const useTableSection: UseTableSection<S, R, C> = useCallback(({ location }: { location: "head" | "body" | "foot" }) => {


        const { element, useManagedChildProps } = useManagedTableSection<S>({ index: location, forceUpdate: useForceUpdate() });
        const useTableSectionProps = useCallback(<P extends Omit<h.JSX.HTMLAttributes<S>, "children"> & { children: VNode<any>[] }>({ children, ...props }: P) => {
            return useManagedChildProps(useMergedProps<S>()({
                role: "rowgroup",
                children: location === "body" ? (children as VNode<any>[]).map((tableRow, i) => {
                    return recreateChildWithSortedKey(children, i);
                }) : children
            }, props))
        }, [useManagedChildProps]);





        // This function is sort of like cloneElement for each children,
        // except the "key" prop is super duper extra special
        // and cloneElement won't work in the expected way to keep
        // element identity between sort operations.
        // So we create the element again with the same props but a new key
        // and it work just as well.
        const recreateChildWithSortedKey = useCallback(function ensortenChild(originalChildren: VNode<UseTableRowProps>[], unsortedIndex: number) {
            const sortedIndex = indexMangler(unsortedIndex);

            let unsortedChild = originalChildren[unsortedIndex];
            let sortedChild = originalChildren[sortedIndex];

            return h(sortedChild.type as any, { ...sortedChild.props, key: sortedIndex });
        }, [])


        // Actually implement grid navigation
        const { cellIndex, rowIndex, rowCount, useGridNavigationRow, managedRows } = useGridNavigation<R, C, TableRowInfo, TableBodyCellInfo>({
            shouldFocusOnChange: stableGetFocusedInner,
            indexMangler,
            indexDemangler
        });

        useEffect(() => {
            if (location === "body")
                setBodyRowsGetter(prev => (() => managedRows));
        }, [location, managedRows])


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
         * The reason is the children elements are re-created using
         * their type and props but with specific keys that make
         * sorting work properly.
         */
        const useTableRow: UseTableRow<R, C> = useCallback(({ rowIndex: rowIndexAsUnsorted, location, hidden }: UseTableRowParameters) => {
            // This is used by the sort function to update this row when everything's shuffled.
            const [rowIndexAsSorted, setRowIndexAsSorted, getRowIndexAsSorted] = useState(rowIndexAsUnsorted);
            const getManagedCells = useStableCallback(() => managedCells);

            const { useGridNavigationCell, useGridNavigationRowProps, cellCount, isTabbableRow, managedCells } = useGridNavigationRow({ index: rowIndexAsUnsorted, getManagedCells, hidden, ...{ rowIndexAsSorted: getRowIndexAsSorted() } as {}, getRowIndexAsSorted, setRowIndexAsSorted, location });


            // Not public -- just the shared code between header cells and body cells
            const useTableCellShared = useCallback(<C extends Element>({ columnIndex, value }: { columnIndex: number, value: SortableTypes }) => {
                const { useGridNavigationCellProps, } = useGridNavigationCell({ index: columnIndex, value });
                function useTableCellProps<P extends h.JSX.HTMLAttributes<C>>({ role, ...props }: P) {
                    return (useMergedProps<any>()({ role: "gridcell" }, props));
                }

                function useTableCellDelegateProps<P extends h.JSX.HTMLAttributes<any>>({ role, ...props }: P) {
                    return useGridNavigationCellProps(props);
                }

                return { useTableCellProps, useTableCellDelegateProps };

            }, [])

            const useTableHeadCell: UseTableHeadCell<C> = useCallback(({ columnIndex, unsortable, tag }: UseTableHeadCellParameters<C>) => {

                const { useTableCellDelegateProps, useTableCellProps } = useTableCellShared<C>({ columnIndex, value: "" });

                // This is mostly all just in regards to
                // handling the "sort-on-click" interaction.
                const [sortDirection, setSortDirection, getSortDirection] = useState<null | "ascending" | "descending">(null);
                const [isTheSortedColumn, setIsTheSortedColumn] = useState(false);
                const random = useRef(generateRandomId());
                const { element, getElement, useManagedChildProps } = useManagedHeaderCellChild<C>({ index: random.current, setSortedColumn: useCallback((c) => { setIsTheSortedColumn(c === columnIndex) }, [columnIndex]) })

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
                    const m = useTableCellProps(useButtonLikeEventHandlers<C>(unsortable ? null : onSortClick, undefined)(
                        (useMergedProps<C>()({
                            role: "columnheader",
                        }, props))));
                    return useManagedChildProps(m as any);
                }

                return { useTableHeadCellProps, useTableHeadCellDelegateProps: useTableCellDelegateProps, sortDirection };

            }, [])

            const useTableCell: UseTableCell<C> = useCallback(({ columnIndex, value }: UseTableCellParameters) => {
                const { useTableCellDelegateProps, useTableCellProps } = useTableCellShared<C>({ columnIndex, value });

                return { useTableCellProps, useTableCellDelegateProps };
            }, [])

            function useTableRowProps<P extends h.JSX.HTMLAttributes<R>>({ role, ...props }: P) {
                return useGridNavigationRowProps(useMergedProps<R>()({ role: "row" }, props))
            }

            return { useTableCell, useTableRowProps, useTableHeadCell, rowIndexAsSorted, rowIndexAsUnsorted };
        }, []);

        return { useTableSectionProps, useTableRow }


    }, []);

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
        useTableSection,
        managedTableSections
    }

}


function compare(lhs: string | number | boolean | Date | null | undefined, rhs: string | number | boolean | Date | null | undefined) {
    return compare1(lhs, rhs);

    function compare3(lhs: string | number, rhs: string | number) {

        // Coerce strings to numbers if they seem to stay the same when serialized
        if (`${+lhs}` === lhs)
            lhs = +lhs;
        if (`${+rhs}` === rhs)
            rhs = +rhs;

        // At this point, if either argument is a string, turn the other one into one too
        if (typeof lhs === "string")
            rhs = `${rhs}`;
        if (typeof rhs === "string")
            lhs = `${lhs}`;

        console.assert(typeof lhs === typeof rhs);

        if (typeof lhs === "string")
            return lhs.localeCompare(rhs as string);
        if (typeof lhs === "number")
            return +lhs - +rhs;

        return 0;
    }
    function compare2(lhs: string | number | boolean | Date, rhs: string | number | boolean | Date) {
        if (typeof lhs === "boolean" || lhs instanceof Date)
            lhs = +lhs;
        if (typeof rhs === "boolean" || rhs instanceof Date)
            rhs = +rhs;
        return compare3(lhs, rhs);
    }
    function compare1(lhs: string | number | boolean | Date | null | undefined, rhs: string | number | boolean | Date | null | undefined) {
        if (lhs == null && rhs == null) {
            // They're both null
            return 0;
        }
        else if (lhs == null || rhs == null) {
            // One of the two is null -- easy case
            return lhs != null ? 1 : -1
        }
        return compare2(lhs, rhs);
    }
}
