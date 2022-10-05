import { h } from "preact";
import { ManagedChildInfo, ManagedChildren, useGridNavigation, UseGridNavigationParameters, UseHasFocusParameters, UseListNavigationReturnTypeInfo, UseListNavigationSubInfo, UseRovingTabIndexSubInfo, useSortableChildren } from "preact-prop-helpers";
import { UseGridNavigationCellParameters, UseGridNavigationCellReturnTypeInfo, UseGridNavigationRowParameters, UseGridNavigationRowReturnTypeInfo } from "preact-prop-helpers/use-grid-navigation";
import { UseSortableChildrenReturnTypeInfo } from "preact-prop-helpers/use-sortable-children";
import { useCallback, useRef } from "preact/hooks";
import { debugLog, overwriteWithWarning } from "./props";

export interface UseGridlistParameters extends Omit<UseGridNavigationParameters<"indexMangler" | "indexDemangler", never, never, never, never>, "gridNavigation"> { }
export interface UseGridlistSectionParameters { compareRows: (lhsIndex: number, rhsIndex: number) => number }
export interface UseGridlistRowParameters<CellElement extends Element, CR, CC, KR extends string, SubbestInfoR> extends UseGridNavigationRowParameters<UseGridlistRowSubInfo<CellElement, CR, CC>, KR, never, never, never, never, never, never, never, never, SubbestInfoR> {
    gridlistRow: Pick<UseGridlistRowSubInfo<CellElement, CR, CC>, "locationIndex">;
}
export interface UseGridlistChildParameters<CellElement extends Element, CC, KC extends string, SubbestInfoC> extends UseGridNavigationCellParameters<CellElement, UseGridlistChildSubInfo<CC>, KC, never, never, never, SubbestInfoC> {
    hasFocus: UseHasFocusParameters<CellElement>;
}

export interface UseGridlistRowSubInfo<CellElement extends Element, CR, CC> {
    locationIndex: number;
    getCells(): ManagedChildren<number, UseRovingTabIndexSubInfo<CellElement, UseListNavigationSubInfo<UseGridlistChildSubInfo<CC>>>, "tabbable">;
    //value: TableValueType;
    subInfo: CR;
}

export interface UseGridlistChildSubInfo<CC> {
    locationIndex: number;
    subInfo: CC;
}




export interface UseGridlistChildReturnTypeInfo<CellElement extends Element> extends UseGridNavigationCellReturnTypeInfo<CellElement> { }
export interface UseGridlistRowReturnTypeInfo<RowElement extends Element, CellElement extends Element, CC> extends UseGridNavigationRowReturnTypeInfo<RowElement, CellElement, UseGridlistChildSubInfo<CC>, never> { }
export interface UseGridlistSectionReturnTypeInfo<RowElement extends Element, CellElement extends Element, CR, CC, KR extends string> extends UseSortableChildrenReturnTypeInfo<UseRovingTabIndexSubInfo<RowElement, UseListNavigationSubInfo<UseGridlistRowSubInfo<CellElement, CR, CC>>>, KR> { }
export interface UseGridlistReturnTypeInfo<RowElement extends Element, CellElement extends Element, CR, CC> extends UseListNavigationReturnTypeInfo<RowElement, UseGridlistRowSubInfo<CellElement, CR, CC>, never> { }


export interface UseGridlistChildReturnTypeWithHooks<CellElement extends Element> extends UseGridlistChildReturnTypeInfo<CellElement> { useGridlistChildProps: (props: h.JSX.HTMLAttributes<CellElement>) => h.JSX.HTMLAttributes<CellElement>; }
export interface UseGridlistRowReturnTypeWithHooks<RowElement extends Element, CellElement extends Element, CC, KC extends string> extends UseGridlistRowReturnTypeInfo<RowElement, CellElement, CC> { useGridlistChild: UseGridlistChild<CellElement, CC, KC>; useGridlistRowProps: (props: h.JSX.HTMLAttributes<RowElement>) => h.JSX.HTMLAttributes<RowElement>; }
export interface UseGridlistSectionReturnTypeWithHooks<BodySectionElement extends Element, RowElement extends Element, CellElement extends Element, CR, CC, KR extends string> extends UseGridlistSectionReturnTypeInfo<RowElement, CellElement, CR, CC, KR> { useGridlistSectionProps: (props: h.JSX.HTMLAttributes<BodySectionElement>) => h.JSX.HTMLAttributes<BodySectionElement> }
export interface UseGridlistReturnTypeWithHooks<GridlistElement extends Element, BodySectionElement extends Element, RowElement extends Element, CellElement extends Element, CR, CC, KR extends string, KC extends string> extends UseGridlistReturnTypeInfo<RowElement, CellElement, CR, CC> {
    useGridlistRow: UseGridlistRow<RowElement, CellElement, CR, CC, KR, KC>;
    useGridlistSection: UseGridlistSection<BodySectionElement, RowElement, CellElement, CR, CC, KR>;
    useGridlistProps: (props: h.JSX.HTMLAttributes<GridlistElement>) => h.JSX.HTMLAttributes<GridlistElement>;
}

export type UseGridlistChild<CellElement extends Element, CC, KC extends string> = (p: UseGridlistChildParameters<CellElement, CC, KC, CC>) => UseGridlistChildReturnTypeWithHooks<CellElement>;
export type UseGridlistRow<RowElement extends Element, CellElement extends Element, CR, CC, KR extends string, KC extends string> = (p: UseGridlistRowParameters<CellElement, CR, CC, KR, CR>) => UseGridlistRowReturnTypeWithHooks<RowElement, CellElement, CC, KC>;
export type UseGridlistSection<BodySectionElement extends Element, RowElement extends Element, CellElement extends Element, CR, CC, KR extends string> = (p: UseGridlistSectionParameters) => UseGridlistSectionReturnTypeWithHooks<BodySectionElement, RowElement, CellElement, CR, CC, KR>;

function identity(t: number) { return t; }

export function useGridlist<
    GridlistElement extends Element,
    BodySectionElement extends Element,
    RowElement extends Element,
    CellElement extends Element,
    CR,
    CC,
    KR extends string,
    KC extends string
>({ linearNavigation, listNavigation, managedChildren, rovingTabIndex, typeaheadNavigation }: UseGridlistParameters): UseGridlistReturnTypeWithHooks<GridlistElement, BodySectionElement, RowElement, CellElement, CR, CC, KR, KC> {
    debugLog("useGridlist");

    //const [getCurrentSortColumn, setCurrentSortColumn] = usePassiveState<{ index: number, direction: "ascending" | "descending" } | null>(null, returnNull);
    //const bodySort = useRef<null | (() => void)>(null);

    // TODO: Comparing the location should happen out here, not in each section so that grid navigation works right...
    const manglers = useRef({ rowIndexMangler: identity, rowIndexDemangler: identity });

    const {
        useGridNavigationProps,
        useGridNavigationRow,
        ...gridNavRet1
    } = useGridNavigation<GridlistElement, RowElement, CellElement, UseGridlistRowSubInfo<CellElement, CR, CC>, UseGridlistChildSubInfo<CC>, KR, KC>({
        linearNavigation,
        listNavigation,
        managedChildren,
        rovingTabIndex,
        typeaheadNavigation,
        gridNavigation: { rowIndexDemangler: useCallback((n: number) => manglers.current.rowIndexDemangler(n), []), rowIndexMangler: useCallback((n: number) => manglers.current.rowIndexMangler(n), []) },
    });
    gridNavRet1.managedChildren.children

    //const { managedChildren: { children: rows } } = gridNavRet1;

    const useGridlistRow = useCallback<UseGridlistRow<RowElement, CellElement, CR, CC, KR, KC>>(({ asChildRowOfSection, asParentRowOfCells, gridlistRow: { locationIndex } }): UseGridlistRowReturnTypeWithHooks<RowElement, CellElement, CC, KC> => {
        debugLog("useGridlistRow", asChildRowOfSection.managedChild.index);

        const getCells = useCallback(() => {
            return cells;
        }, [])

        const {
            useGridNavigationCell,
            useGridNavigationRowProps,
            ...gridNavRet2
        } = useGridNavigationRow({ asChildRowOfSection: { ...asChildRowOfSection, subInfo: { getCells, locationIndex, subInfo: asChildRowOfSection.subInfo } }, asParentRowOfCells });

        const { asParentOfCells: { managedChildren: { children: cells } } } = gridNavRet2;

        const useGridlistChild = useCallback<UseGridlistChild<CellElement, CC, KC>>(({ listNavigation, managedChild, rovingTabIndex, subInfo, hasFocus }) => {
            debugLog("useGridlistChild", managedChild.index);
            const {
                useGridNavigationCellProps,
                ...gridNavRet3
            } = useGridNavigationCell({ listNavigation, managedChild, rovingTabIndex, subInfo: { locationIndex, subInfo }, hasFocus });

            const useGridlistChildProps: typeof useGridNavigationCellProps = (props) => {
                overwriteWithWarning("useGridlistChild", props, "role", "cell");
                return useGridNavigationCellProps(props);
            }
            return {
                useGridlistChildProps,
                ...gridNavRet3
            }

        }, []);

        const useGridlistRowProps: typeof useGridNavigationRowProps = (props) => {
            overwriteWithWarning("useGridlistRow", props, "role", "row");
            return useGridNavigationRowProps(props);
        };

        return {
            useGridlistChild,
            useGridlistRowProps,
            ...gridNavRet2
        }
    }, []);

    const useGridlistSection = useCallback<UseGridlistSection<BodySectionElement, RowElement, CellElement, CR, CC, KR>>(({ compareRows }) => {
        debugLog("useGridlistSection");
        type CRFull = UseRovingTabIndexSubInfo<RowElement, UseListNavigationSubInfo<UseGridlistRowSubInfo<CellElement, CR, CC>>>;
        //type C = UseRovingTabIndexSubInfo<RowElement, UseListNavigationSubInfo<UseGridlistRowSubInfo<CellElement, CR, CC>>>;
        const getIndex = useCallback((i: ManagedChildInfo<number, any, KR>) => i.index, []);
        /*const getValue = useCallback<GetValue<C, never, [], V>>((i) => {
            const cells = i.subInfo.subInfo.subInfo.getCells();
            const cell = cells.getAt(getCurrentSortColumn()?.index ?? 0);
            return ({
                locationIndex: cell?.subInfo.subInfo.subInfo.locationIndex ?? 0,
                index: cell?.index ?? 0
            });
        }, []);*/

        const {
            useSortableProps,
            ...sortableRet
        } = useSortableChildren<BodySectionElement, CRFull, KR>({
            rearrangeableChildren: {
                getIndex
            },
            sortableChildren: {
                compare: (lhs, rhs) => {
                    if (lhs.subInfo.subInfo.subInfo.locationIndex === rhs.subInfo.subInfo.subInfo.locationIndex)
                        return compareRows(lhs.index, rhs.index);
                    return lhs.subInfo.subInfo.subInfo.locationIndex - rhs.subInfo.subInfo.subInfo.locationIndex;
                }
            }
        });

        //const { sortableChildren: { sort } } = sortableRet;
        /*useLayoutEffect(() => {
            bodySort.current = () => {
                sort(rows, getCurrentSortColumn()?.direction ?? 'ascending');
            };
        }, [sort])*/

        const useGridlistSectionProps = (props: h.JSX.HTMLAttributes<BodySectionElement>) => {
            console.assert(props.children != null);
            overwriteWithWarning("useGridlistSection", props, "role", "rowgroup");
            return useSortableProps(props as h.JSX.HTMLAttributes<BodySectionElement> & { children: any });
        }

        return {
            useGridlistSectionProps,
            ...sortableRet
        }
    }, []);

    const useGridlistProps: typeof useGridNavigationProps = (props) => {
        overwriteWithWarning("useGridlist", props, "role", "grid");
        return useGridNavigationProps(props);
    };

    return {
        useGridlistProps,
        useGridlistSection,
        useGridlistRow,
        ...gridNavRet1
    }
}
