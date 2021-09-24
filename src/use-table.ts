import { FunctionComponent, h, VNode } from "preact";
import { useChildManager, useForceUpdate, useGridNavigation, UseGridNavigationCellInfo, UseGridNavigationCellParameters, UseGridNavigationRowInfo, UseGridNavigationRowParameters, useHasFocus, useStableCallback, useState } from "preact-prop-helpers";
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
export interface UseTableHeadParameters { }
export interface UseTableBodyParameters { }
export interface UseTableFootParameters { }

export type UseTableRowParameters = Omit<UseGridNavigationRowParameters<TableRowInfo>, "index" | "text" | "getManagedCells" | "getRowIndexAsSorted" | "setRowIndexAsSorted" | "navIndex"> & { rowIndex: number };;
export type UseTableCellParameters = Omit<UseGridNavigationCellParameters<TableBodyCellInfo>, "index" | "text" | "displayValue" | "navIndex"> & { columnIndex: number };
export type UseTableHeadCellParameters<TH extends Element> = TagSensitiveProps<TH> & Omit<UseGridNavigationCellParameters<TableBodyCellInfo>, "index" | "value" | "text" | "displayValue" | "navIndex"> & { columnIndex: number; unsortable?: boolean }


export type UseTableHead<H extends Element> = (parameters: UseTableHeadParameters) => { useTableHeadProps: <P extends Omit<h.JSX.HTMLAttributes<H>, "children"> & { children: VNode<any>[] }>(props: P) => h.JSX.HTMLAttributes<H>; };
export type UseTableBody<B extends Element> = (parameters: UseTableBodyParameters) => { useTableBodyProps: <P extends Omit<h.JSX.HTMLAttributes<B>, "children"> & { children: VNode<any>[] }>(props: P) => h.JSX.HTMLAttributes<B>; };
export type UseTableFoot<F extends Element> = (parameters: UseTableFootParameters) => { useTableFootProps: <P extends Omit<h.JSX.HTMLAttributes<F>, "children"> & { children: VNode<any>[] }>(props: P) => h.JSX.HTMLAttributes<F>; };

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

export type UseTableRow<R extends Element, HC extends Element, BC extends Element> = (parameters: UseTableRowParameters) => {
    useTableCell: UseTableCell<BC>;
    useTableRowProps: <P extends h.JSX.HTMLAttributes<R>>(props: P) => h.JSX.HTMLAttributes<R>
    useTableHeadCell: UseTableHeadCell<HC>;
    rowIndexAsSorted: number;
    rowIndexAsUnsorted: number;
}

export type SortableTypes = number | string | Date | null | undefined | boolean;

const LocationPriority = { "head": 0, "body": 1, "foot": 2 };

export function useTable<T extends Element, H extends Element, B extends Element, F extends Element, R extends Element, HC extends Element, BC extends Element>({ }: UseTableParameters) {

    // This is the index of the currently sorted column('s header cell that was clicked to sort it).
    // This is used by all the header cells to know when to reset their "sort mode" back to its initial state.
    const [sortedColumn, setSortedColumn] = useState<null | number>(null);
    const { useManagedChild: useManagedHeaderCellChild, managedChildren: managedHeaderCells } = useChildManager<{ index: string; setSortedColumn(column: number): void; }>();

    // When we sort the table, we need to manually update each table component
    // A little bit ugly, but it gets the job done.
    const { useManagedChild: useManagedTableSection, managedChildren: managedTableSections } = useChildManager<{ index: "head" | "body" | "foot", forceUpdate(): void }>();

    // Used for navigation to determine when focus should follow the selected cell
    const { focusedInner, useHasFocusProps } = useHasFocus<T>();

    // Whenever any given header cell requests a sort, it sets itself here, in the table,
    // as the "sortedColumn" column.  We then, as the parent table, let all the other
    // header rows know who is the "sortedColumn" column so that they can un-style themselves.
    useEffect(() => {
        if (sortedColumn != null) {
            Object.entries(managedHeaderCells).forEach(([index, cell]) => { cell.setSortedColumn(sortedColumn) });
        }
    }, [sortedColumn])

    // These are used to keep track of a mapping between unsorted index <---> sorted index.
    // These are needed for navigation with the arrow keys.
    const mangleMap = useRef(new Map<number, number>());
    const demangleMap = useRef(new Map<number, number>());
    const indexMangler = useCallback((n: number) => (mangleMap.current.get(n) ?? n), []);
    const indexDemangler = useCallback((n: number) => (demangleMap.current.get(n) ?? n), []);

    // Actually implement grid navigation
    const { cellIndex, rowIndex, rowCount, useGridNavigationRow, managedRows } = useGridNavigation<R, BC | HC, TableRowInfo, TableBodyCellInfo>({
        focusOnChange: focusedInner,
        indexMangler,
        indexDemangler
    });

    // The actual sort function.
    // Note that it DOES look at header and footer cells, but just tiptoes around them.
    const sort = useCallback((column: number, direction: "ascending" | "descending"): Promise<void> | void => {
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

        // Go through each DOM-based row in the table
        for (let literalIndex = 0; literalIndex < sortedRows.length; ++literalIndex) {
            // Get the row that should be shown instead of this one
            const overriddenIndex = sortedRows[literalIndex].index;

            // Let the DOM-based row know that it's showing a different row
            managedRows[literalIndex].setRowIndexAsSorted(overriddenIndex);
            mangleMap.current.set(literalIndex, overriddenIndex);
            demangleMap.current.set(overriddenIndex, literalIndex);
            //managedRows[literalIndex].overriddenRowIndex = overriddenIndex;
        }
        setSortedColumn(column);
        console.log(sortedRows.map(r => r.index).join(", "));

        managedTableSections["head"]?.forceUpdate();
        managedTableSections["body"]?.forceUpdate();
        managedTableSections["foot"]?.forceUpdate();

    }, [ /* Must remain stable */]);



    // This function is sort of like cloneElement for each children,
    // except the "key" prop is super duper extra special
    // and cloneElement won't work in the expected way to keep
    // element identity between sort operations.
    // So we create the element again with the same props but a new key
    // and it work just as well.
    const recreateChildWithSortedKey = useCallback(function ensortenChild(child: VNode<{ index: number }>) {
        //childIndex += (location === "body" ? headerRowCount : location === "foot" ? (bodyRowCount + headerRowCount) : 0);
        const { index: childIndex, ...props } = (child.props);
        const sortedIndex = managedRows[childIndex]?.getRowIndexAsSorted() ?? childIndex;
        const C = child.type as FunctionComponent<{ index: number }>;
        let ret = h(C, { key: sortedIndex, index: sortedIndex, ...props });
        return ret;
    }, [])


    // Tables need a role of "group" in order to be considered 
    // "interactive content" like a text box that passes through
    // keyboard inputs
    function useTableProps<P extends h.JSX.HTMLAttributes<T>>({ role, ...props }: P) { return useHasFocusProps(useMergedProps<T>()({ role: "group", "aria-roledescription": "table" }, props)); }


    /**
     * 
     * IMPORTANT NOTE ABOUT COMPONENTS USING THIS HOOK!!
     * 
     * The index prop that you pass to your custom TableRow component
     * *must* be named "index" and *must* be, e.g., 0 for the header
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
    const useTableRow: UseTableRow<R, HC, BC> = useCallback(({ rowIndex: rowIndexAsUnsorted, location }: UseTableRowParameters) => {
        // This is used by the sort function to update this row when everything's shuffled.
        const [rowIndexAsSorted, setRowIndexAsSorted, getRowIndexAsSorted] = useState(rowIndexAsUnsorted);
        const getManagedCells = useStableCallback(() => managedCells);

        const { useGridNavigationCell, useGridNavigationRowProps, cellCount, isTabbableRow, managedCells, tabbableCell } = useGridNavigationRow({ index: rowIndexAsUnsorted, getManagedCells, getRowIndexAsSorted, setRowIndexAsSorted, location });

        console.log(`${rowIndexAsUnsorted}: ${isTabbableRow}, ${tabbableCell}`);

        // Not public -- just the shared code between header cells and body cells
        const useTableCellShared = useCallback(<C extends Element>({ index: columnIndex, value }: { index: number, value: SortableTypes }) => {
            const { tabbable, useGridNavigationCellProps, } = useGridNavigationCell({ index: columnIndex, value, text: null });
            function useTableCellProps<P extends h.JSX.HTMLAttributes<C>>({ role, ...props }: P) {
                return (useMergedProps<any>()({ role: "gridcell", "aria-roledescription": "table cell" }, props));
            }

            function useTableCellDelegateProps<P extends h.JSX.HTMLAttributes<any>>({ role, ...props }: P) {
                return useGridNavigationCellProps(props);
            }

            return { useTableCellProps, useTableCellDelegateProps };

        }, [])

        const useTableHeadCell: UseTableHeadCell<HC> = useCallback(({ columnIndex, unsortable, tag }: UseTableHeadCellParameters<HC>) => {

            const { useTableCellDelegateProps, useTableCellProps } = useTableCellShared<HC>({ index: columnIndex, value: "" });

            // This is mostly all just in regards to
            // handling the "sort-on-click" interaction.
            const [sortDirection, setSortDirection, getSortDirection] = useState<null | "ascending" | "descending">(null);
            const [isTheSortedColumn, setIsTheSortedColumn] = useState(false);
            const random = useRef(generateRandomId());
            const { element, getElement, useManagedChildProps } = useManagedHeaderCellChild<HC>({ index: random.current, setSortedColumn: useCallback((c) => { setIsTheSortedColumn(c === columnIndex) }, [columnIndex]) })

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

            const useTableHeadCellProps: UseTableHeadCellProps<HC> = <P extends h.JSX.HTMLAttributes<HC>>(props: P) => {
                const m = useTableCellProps(useButtonLikeEventHandlers<HC>(tag, unsortable ? null : onSortClick, undefined)(
                    (useMergedProps<HC>()({
                        role: "columnheader",
                    }, props))));
                return useManagedChildProps(m as any);
            }

            return { useTableHeadCellProps, useTableHeadCellDelegateProps: useTableCellDelegateProps, sortDirection };

        }, [])

        const useTableCell: UseTableCell<BC> = useCallback(({ columnIndex, value }: UseTableCellParameters) => {
            const { useTableCellDelegateProps, useTableCellProps } = useTableCellShared<BC>({ index: columnIndex, value });

            return { useTableCellProps, useTableCellDelegateProps };
        }, [])

        function useTableRowProps<P extends h.JSX.HTMLAttributes<R>>({ role, ...props }: P) {
            return useGridNavigationRowProps(useMergedProps<R>()({ role: "row" }, props))
        }

        return { useTableCell, useTableRowProps, useTableHeadCell, rowIndexAsSorted, rowIndexAsUnsorted };
    }, [])




    const useTableHead: UseTableHead<H> = useCallback(function useTableHead({ }: UseTableHeadParameters) { const { element, useManagedChildProps } = useManagedTableSection<H>({ index: "head", forceUpdate: useForceUpdate() }); return { useTableHeadProps: useCallback(<P extends Omit<h.JSX.HTMLAttributes<H>, "children"> & { children: VNode<any>[] }>({ children, ...props }: P) => useManagedChildProps(useMergedProps<H>()({ role: "rowgroup", children: (children as VNode<any>[]).map((tableRow, i) => { return recreateChildWithSortedKey(tableRow); }) }, props)), [useManagedChildProps]) } }, []);
    const useTableBody: UseTableBody<B> = useCallback(function useTableBody({ }: UseTableBodyParameters) { const { element, useManagedChildProps } = useManagedTableSection<B>({ index: "body", forceUpdate: useForceUpdate() }); return { useTableBodyProps: useCallback(<P extends Omit<h.JSX.HTMLAttributes<B>, "children"> & { children: VNode<any>[] }>({ children, ...props }: P) => useManagedChildProps(useMergedProps<B>()({ role: "rowgroup", children: (children as VNode<any>[]).map((tableRow, i) => { return recreateChildWithSortedKey(tableRow); }) }, props)), [useManagedChildProps]) } }, []);
    const useTableFoot: UseTableFoot<F> = useCallback(function useTableFoot({ }: UseTableFootParameters) { const { element, useManagedChildProps } = useManagedTableSection<F>({ index: "foot", forceUpdate: useForceUpdate() }); return { useTableFootProps: useCallback(<P extends Omit<h.JSX.HTMLAttributes<F>, "children"> & { children: VNode<any>[] }>({ children, ...props }: P) => useManagedChildProps(useMergedProps<F>()({ role: "rowgroup", children: (children as VNode<any>[]).map((tableRow, i) => { return recreateChildWithSortedKey(tableRow); }) }, props)), [useManagedChildProps]) } }, []);

    return {
        useTableProps,
        useTableHead,
        useTableBody,
        useTableFoot,
        useTableRow,
        managedRows
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
