import { h, VNode } from "preact";
import { generateRandomId, useForceUpdate, useGridNavigation, useHasFocus, useManagedChildren, useMergedProps, useRefElement, useSortableChildren, useStableCallback, useState } from "preact-prop-helpers";
import { ManagedChildren } from "preact-prop-helpers/use-child-manager";
import { UseGridNavigationCell, UseGridNavigationCellParameters, UseGridNavigationParameters, UseGridNavigationReturnType, UseGridNavigationRowParameters, UseGridNavigationRowReturnType } from "preact-prop-helpers/use-grid-navigation";
import { useCallback, useEffect, useRef } from "preact/hooks";
import type { TagSensitiveProps } from "./props";
import { usePressEventHandlers } from "./use-button";

export interface TRI {

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

type TableValueType = number | string | Date | null | undefined | boolean;

export interface TCI<T extends TableValueType> {

    /**
     * This is the value that, originally passed to the cell,
     * represents what value this cell would show if we weren't sorted.
     */
    value: T;
}

//export type TableRowInfoNeeded<K extends string, I extends UseGridNavigationRowInfoBase<K>> = Omit<UseGridNavigationRowInfoNeeded<K, I>, "getManagedCells" | "getRowIndexAsSorted" | "setRowIndexAsSorted">;
//export type TableCellInfoNeeded<K extends string, I extends UseGridNavigationCellInfoBase<K>> = Omit<UseGridNavigationCellInfoNeeded<K, I>, "getManagedCells" | "getRowIndexAsSorted" | "setRowIndexAsSorted">;

//export interface TableRowInfo extends UseGridNavigationRowInfoBase { }
//export interface TableCellInfo extends UseGridNavigationRowInfoBase { }

/* eslint-disable @typescript-eslint/no-empty-interface */
export interface UseTableParameters { }
interface UseTableSectionParameters {
    //asChildRow: UseGridNavigationRowParameters<{}, never>["asChildRow"];
    //asParentOfCells: UseGridNavigationRowParameters<{}, never>["asParentOfCells"];
    tableSection: { location: "head" | "body" | "foot"; }
}

export interface UseTableRowParameters<T extends TableValueType> {
    asChildRow: UseGridNavigationRowParameters<TRI, never>["asChildRow"];
    asParentOfCells: UseGridNavigationRowParameters<TCI<T>, never>["asParentOfCells"];
}

export interface UseTableCellParameters<T extends TableValueType> {
    tableCell: UseGridNavigationCellParameters<TCI<T>, never>;
}

export interface UseTableHeadCellParameters<T extends TableValueType> extends UseTableCellParameters<T> { 
    unsortable?: boolean 
};




export type UseTableCell<BC extends Element, T extends TableValueType> = (a: UseTableCellParameters<T>) => {
    useTableCellProps: <P extends h.JSX.HTMLAttributes<BC>>({ role, ...props }: P) => h.JSX.HTMLAttributes<BC>
    useTableCellDelegateProps: <P extends h.JSX.HTMLAttributes<any>>(props: P) => h.JSX.HTMLAttributes<any>
}

export type UseTableHeadCellProps<HC extends Element> = <P extends h.JSX.HTMLAttributes<HC>>(props: P) => h.JSX.HTMLAttributes<HC>;



export type UseTableHeadCell<HC extends Element, T extends TableValueType> = (p: UseTableHeadCellParameters<T>) => {
    useTableHeadCellProps: UseTableHeadCellProps<HC>;
    useTableHeadCellDelegateProps: <P extends h.JSX.HTMLAttributes<any>>(props: P) => h.JSX.HTMLAttributes<any>;
    sortDirection: "ascending" | "descending" | null;
}

export type UseTableRow<R extends Element, C extends Element, T extends TableValueType> = (parameters: UseTableRowParameters<T>) => {
    managedCells: UseGridNavigationRowReturnType<R, C, TCI<T>, never>;
    useTableCell: UseTableCell<C, T>;
    useTableRowProps: <P extends h.JSX.HTMLAttributes<R>>(props: P) => h.JSX.HTMLAttributes<R>
    useTableHeadCell: UseTableHeadCell<C, T>;
    rowIndexAsSorted: number | null;
    rowIndexAsUnsorted: number;
}

export type SortableTypes = number | string | Date | null | undefined | boolean;


export interface UseTableHeadReturnType<S extends Element, R extends Element, C extends Element, T extends TableValueType> extends UseGridNavigationRowParameters<TCI<T>, never> {  useTableHeadRow: UseTableRow<R, C, T>; useTableHeadProps: (props: h.JSX.HTMLAttributes<S>) => h.JSX.HTMLAttributes<S>; };
export interface UseTableBodyReturnType<S extends Element, R extends Element, C extends Element, T extends TableValueType> extends UseGridNavigationRowParameters<TCI<T>, never> {  useTableBodyRow: UseTableRow<R, C, T>; useTableBodyProps: (props: h.JSX.HTMLAttributes<S>) => h.JSX.HTMLAttributes<S>; };
export interface UseTableFootReturnType<S extends Element, R extends Element, C extends Element, T extends TableValueType> extends UseGridNavigationRowParameters<TCI<T>, never> {  useTableFootRow: UseTableRow<R, C, T>; useTableFootProps: (props: h.JSX.HTMLAttributes<S>) => h.JSX.HTMLAttributes<S>; };
interface UseTableSectionReturnType<S extends Element, R extends Element, C extends Element, T extends TableValueType = TableValueType> { useTableSectionRow: UseTableRow<R, C, T>; useTableSectionProps: (props: h.JSX.HTMLAttributes<S>) => h.JSX.HTMLAttributes<S>; managedRows: ManagedChildren<TableRowInfoBase<T, KR>>; }
export type UseTableHead<S extends Element, R extends Element, C extends Element, T extends TableValueType = TableValueType> = () => UseTableHeadReturnType<S, R, C, T>;
export type UseTableBody<S extends Element, R extends Element, C extends Element, T extends TableValueType = TableValueType> = () => UseTableBodyReturnType<S, R, C, T>;
export type UseTableFoot<S extends Element, R extends Element, C extends Element, T extends TableValueType = TableValueType> = () => UseTableFootReturnType<S, R, C, T>;
type UseTableSection<S extends Element, R extends Element, C extends Element, T extends TableValueType = TableValueType> = (parameters: Omit<UseTableSectionParameters, "indexMangler" | "indexDemangler">) => UseTableSectionReturnType<S, R, C, T>;

// TODO: Sorting really needs to be extracted into its own hook
// so it can be used with, like, lists and junk too
// but just getting to this point in the first place was *exhausting*.
//
// Please be aware that table rows must be *direct descendants* of
export function useTable<T extends HTMLElement, S extends HTMLElement, R extends HTMLElement, C extends HTMLElement>({ ..._ }: UseTableParameters) {

    // Only used by the sorting function, nothing else
    const [, setBodyRows, getBodyRows] = useState<ManagedChildren<number, TCI<TableValueType>, never> | null>(null);
    const { indexDemangler, indexMangler, sort: originalSort, useSortableProps } = useSortableChildren<TableRowInfoBase<TableValueType, string>, [number], S>({
        getValue: useCallback((row: TableRowInfoBase<TableValueType, string>, column: number) => {
            return row.getManagedCells()?.getAt(column)?.value;
        }, []),
        getIndex: useCallback((row: TableRowInfoBase<TableValueType, string>) => {
            return row.index;
        }, []),
    });

    // This is the index of the currently sorted column('s header cell that was clicked to sort it).
    // This is used by all the header cells to know when to reset their "sort mode" back to its initial state.
    const [sortedColumn, setSortedColumn, getSortedColumn] = useState<null | number>(null);
    const [, setSortedDirection, getSortedDirection] = useState<"ascending" | "descending" | null>(null);
    const { useManagedChild: useManagedHeaderCellChild, children: managedHeaderCells } = useManagedChildren<{ index: string; setSortedColumn(column: number): void; }>({ onAfterChildLayoutEffect: null, onChildrenMountChange: null });

    // When we sort the table, we need to manually update each table component
    // A little bit ugly, but it gets the job done.
    const { useManagedChild: useManagedTableSection, children: managedTableSections } = useManagedChildren<{ index: "head" | "body" | "foot", forceUpdate(): void }>({ onAfterChildLayoutEffect: null, onChildrenMountChange: null });


    // Used for navigation to determine when focus should follow the selected cell
    const { useHasFocusProps, getFocusedInner } = useHasFocus<T>({});



    // Wrap the "useSortable" sort function to also set some internal state
    // regarding which column is sorted and in what direction.
    const sort = useCallback((column: number, direction: "ascending" | "descending"): Promise<void> | void => {
        setSortedColumn(column);
        setSortedDirection(direction);
        originalSort(getBodyRows()!, direction, column);
    }, [ /* Must remain stable */]);


    const useTableSection = useCallback<UseTableSection<S, R, C, TableValueType, string, string, TableRowInfoBase<TableValueType, string>, TableCellInfoBase<TableValueType, string>>>(({ location, onAfterChildLayoutEffect, onChildrenMountChange, collator, disableArrowKeys, disableHomeEndKeys, initialColumn, initialRow, noTypeahead, onRowMountChange, onTabbableIndexChange, onTabbableRender, onTabbedInTo, onTabbedOutOf, typeaheadTimeout }) => {

        const _: void = useManagedTableSection({ info: { index: location, forceUpdate: useForceUpdate() } });

        const { useGridNavigationRow, useGridNavigationProps, rows: managedRows } = useGridNavigation<S, R, C, string, string, TableRowInfoBase<TableValueType, string>, TableCellInfoBase<TableValueType, string>>({
            indexMangler,
            indexDemangler,
            onAfterChildLayoutEffect,
            onChildrenMountChange,
            collator,
            disableArrowKeys,
            disableHomeEndKeys,
            initialColumn,
            initialRow,
            noTypeahead,
            onRowMountChange,
            onTabbableIndexChange,
            onTabbableRender,
            onTabbedInTo,
            onTabbedOutOf,
            typeaheadTimeout
        });

        const useTableSectionProps = useCallback<(props: h.JSX.HTMLAttributes<S>) => h.JSX.HTMLAttributes<S>>((props: h.JSX.HTMLAttributes<S>): h.JSX.HTMLAttributes<S> => {
            return useGridNavigationProps((useMergedProps<S>({ role: "rowgroup" }, props)))
        }, [useGridNavigationProps]);

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
        const useTableRow = useCallback<UseTableRow<R, C, TableValueType, string, string, TableRowInfoBase<TableValueType, string>, TableCellInfoBase<TableValueType, string>>>(({ info: { flags, index: rowIndexAsUnsorted, location, text, blurSelf, focusSelf, hidden, ...info }, collator, disableArrowKeys, disableHomeEndKeys, indexDemangler, indexMangler, onAfterChildLayoutEffect, onChildrenMountChange, onTabbableIndexChange, onTabbableRender, onTabbedInTo, onTabbedOutOf, typeaheadTimeout, }: UseTableRowParameters<TableValueType, string, TableRowInfoBase<TableValueType, string>>) => {
            // This is used by the sort function to update this row when everything's shuffled.
            const [rowIndexAsSorted, setRowIndexAsSorted, getRowIndexAsSorted] = useState<number | null>(null);
            const getManagedCells = useStableCallback(() => managedCells);

            const {
                useGridNavigationCell,
                useGridNavigationRowProps,
                cells: managedCells
            } = useGridNavigationRow({
                info: {
                    ...info,
                    index: rowIndexAsUnsorted,
                    getManagedCells,
                    hidden,
                    getRowIndexAsSorted,
                    setRowIndexAsSorted,
                    location,
                    text,
                    flags
                },
                initialIndex: 0,
                onAfterChildLayoutEffect,
                onChildrenMountChange,
                collator,
                disableArrowKeys,
                disableHomeEndKeys,
                indexDemangler,
                indexMangler,
                onTabbableIndexChange,
                onTabbableRender,
                onTabbedInTo,
                onTabbedOutOf,
                typeaheadTimeout
            });

            // Not public -- just the shared code between header cells and body cells
            const useTableCellShared = useCallback(<C extends Element>({ index, value, text, hidden, blurSelf, flags, focusSelf }: TableCellInfoNeeded<string, TableCellInfoBase<TableValueType, string>>) => {
                const { useGridNavigationCellProps, } = useGridNavigationCell({ info: { index, value, text, flags, hidden, blurSelf: blurSelf!, focusSelf: focusSelf! } });
                const { getElement: getCellElement, useRefElementProps: useCellRefElementProps } = useRefElement<C>({});

                function useTableCellProps<P extends h.JSX.HTMLAttributes<C>>({ role, ...props }: P) {
                    return useCellRefElementProps(useMergedProps<any>({ role: role || "gridcell" }, props));
                }

                function useTableCellDelegateProps<P extends h.JSX.HTMLAttributes<any>>(props: P) {
                    // Escape hatch for table cells with editable controls, like a text box:
                    // Any time we're in a table cell's control and we press ESC or F2,
                    // we eject focus back out to the actual table cell itself, which will
                    // allow navigation of the grid again.

                    function onKeyDown(e: h.JSX.TargetedKeyboardEvent<any>) {
                        if (e.key == "Escape" || e.key == "F2") {
                            const cell = getCellElement();
                            if (document.activeElement != cell) {
                                e.stopPropagation();
                                e.preventDefault();
                                if (cell && "focus" in cell) {

                                    // Make absolutely sure this cell is focusable
                                    // (tabIndex can't be null, apparently, so what else would it be other than -1?
                                    // How is "not tabbable" represented in the DOM?)
                                    if ((cell as Element as HTMLElement).tabIndex !== 0)
                                        (cell as Element as HTMLElement).tabIndex = -1;

                                    (cell as Element as HTMLElement).focus();
                                }
                            }
                        }
                    }
                    return useGridNavigationCellProps(useMergedProps<any>({ onKeyDown }, props));
                }

                return { useTableCellProps, useTableCellDelegateProps };

            }, [])

            const useTableHeadCell: UseTableHeadCell<C, TableValueType, string, TableCellInfoBase<TableValueType, string>> = useCallback<UseTableHeadCell<C, TableValueType, string, TableCellInfoBase<TableValueType, string>>>(({ info: { index: columnIndex, text, hidden, flags, value, blurSelf, focusSelf }, unsortable }) => {

                const { useTableCellDelegateProps, useTableCellProps } = useTableCellShared<C>({ index: columnIndex, value, text, hidden, flags, blurSelf, focusSelf });

                // This is mostly all just in regards to
                // handling the "sort-on-click" interaction.
                const [sortDirection, setSortDirection, getSortDirection] = useState<null | "ascending" | "descending">(null);
                const [isTheSortedColumn, setIsTheSortedColumn] = useState(false);
                const random = useRef(generateRandomId());
                const _: void = useManagedHeaderCellChild({ info: { index: random.current, setSortedColumn: useCallback((c) => { setIsTheSortedColumn(c === columnIndex) }, [columnIndex]) } })

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

                const useTableHeadCellProps: UseTableHeadCellProps<C> = (props: h.JSX.HTMLAttributes<C>): h.JSX.HTMLAttributes<C> => {
                    const m = useTableCellProps(
                        useMergedProps<C>(usePressEventHandlers<C>(unsortable ? null : onSortClick, undefined), (
                            (useMergedProps<C>({
                                role: "columnheader",
                            }, props)))));
                    return m;
                }

                return { useTableHeadCellProps, useTableHeadCellDelegateProps: useTableCellDelegateProps, sortDirection };

            }, [])

            const useTableCell: UseTableCell<C, TableValueType, string, TableCellInfoBase<TableValueType, string>> = useCallback<UseTableCell<C, TableValueType, string, TableCellInfoBase<TableValueType, string>>>(({ info: { index, value, text, hidden, flags, blurSelf, focusSelf } }) => {
                const { useTableCellDelegateProps, useTableCellProps } = useTableCellShared<C>({ index, value, text, hidden: hidden ?? false, flags, blurSelf, focusSelf });

                return { useTableCellProps, useTableCellDelegateProps };
            }, [])

            function useTableRowProps({ role, ...props }: h.JSX.HTMLAttributes<R>): h.JSX.HTMLAttributes<R> {
                return useGridNavigationRowProps(useMergedProps<R>({ role: role || "row" }, props))
            }

            return { managedCells, useTableCell, useTableRowProps, useTableHeadCell, rowIndexAsSorted, rowIndexAsUnsorted };
        }, []);

        return { useTableSectionProps, useTableSectionRow: useTableRow, managedRows }
    }, []);



    const useTableHead = useCallback<UseTableHead<S, R, C, TableValueType, string, string, TableRowInfoBase<TableValueType, string>, TableCellInfoBase<TableValueType, string>>>(() => {

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

        const { useTableSectionRow: useTableHeadRow, useTableSectionProps, managedRows } = useTableSection({ location: "head", onAfterChildLayoutEffect: null, onChildrenMountChange: null });
        return { useTableHeadRow, useTableHeadProps: useTableSectionProps, managedRows };
    }, [useTableSection]);


    const useTableBody = useCallback<UseTableBody<S, R, C, TableValueType, string, string, TableRowInfoBase<TableValueType, string>, TableCellInfoBase<TableValueType, string>>>(() => {
        const { useTableSectionRow: useTableBodyRow, useTableSectionProps, managedRows } = useTableSection({ location: "body", onAfterChildLayoutEffect: null, onChildrenMountChange: null });

        const useTableBodyProps = useCallback(<P extends h.JSX.HTMLAttributes<S>>({ children, ...props }: P) => {
            return useSortableProps(useTableSectionProps(useMergedProps<S>({ role: "rowgroup", children: children as VNode[] }, props)) as any);
        }, [useTableSectionProps]);

        useEffect(() => {
            setBodyRows(_prev => managedRows);
        }, [managedRows]);

        return { managedRows, useTableBodyRow: useTableBodyRow, useTableBodyProps };
    }, []);


    const useTableFoot = useCallback<UseTableFoot<S, R, C, TableValueType, string, string, TableRowInfoBase<TableValueType, string>, TableCellInfoBase<TableValueType, string>>>(() => {
        const { useTableSectionRow: useTableFootRow, useTableSectionProps, managedRows } = useTableSection({ location: "head", onAfterChildLayoutEffect: null, onChildrenMountChange: null });
        return { useTableFootRow, useTableFootProps: useTableSectionProps, managedRows };
    }, [useTableSection]);



    // Whenever any given header cell requests a sort, it sets itself here, in the table,
    // as the "sortedColumn" column.  We then, as the parent table, let all the other
    // header rows know who is the "sortedColumn" column so that they can un-style themselves.
    useEffect(() => {
        if (sortedColumn != null) {
            Object.entries(managedHeaderCells).forEach(([_index, cell]) => { cell.setSortedColumn(sortedColumn) });
        }
    }, [sortedColumn])



    // Tables need a role of "grid" in order to be considered 
    // "interactive content" like a text box that passes through
    // keyboard inputs.
    function useTableProps({ role, ...props }: h.JSX.HTMLAttributes<T>): h.JSX.HTMLAttributes<T> {
        return useHasFocusProps(useMergedProps<T>({ role: role || "grid" }, props));
    }



    return {
        useTableProps,
        useTableHead,
        useTableBody,
        useTableFoot,
        managedTableSections
    }

}


