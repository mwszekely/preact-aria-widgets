import { h } from "preact";
import { ManagedChildInfo, ManagedChildren, useGridNavigation, UseGridNavigationParameters, UseGridNavigationRowSubInfo, UseHasFocusParameters, UseListNavigationSubInfo, UseRovingTabIndexSubInfo, UseSingleSelectionChildParameters, UseSingleSelectionParameters, UseSingleSelectionReturnTypeInfo, useSortableChildren, UseSortableChildrenParameters, useStableCallback } from "preact-prop-helpers";
import { UseGridNavigationCellParameters, UseGridNavigationCellReturnTypeInfo, UseGridNavigationCellSubInfo, UseGridNavigationReturnTypeInfo, UseGridNavigationRowParameters, UseGridNavigationRowReturnTypeInfo, useSingleSelection } from "preact-prop-helpers";
import { UseSortableChildrenReturnTypeInfo } from "preact-prop-helpers";
import { useCallback, useRef } from "preact/hooks";
import { debugLog, overwriteWithWarning } from "./props";

export interface UseGridlistParameters<RowElement extends Element, CellElement extends Element, CR, CC, KR extends string> extends
    Omit<UseGridNavigationParameters<"indexMangler" | "indexDemangler", never, never, never, never>, "gridNavigation">,
    UseSingleSelectionParameters<RowElement, UseRovingTabIndexSubInfo<RowElement, UseListNavigationSubInfo<UseGridlistRowSubInfo<CellElement, CR, CC>>>, KR | "tabbable", "children" | "setTabbableIndex" | "selectedIndex"> {
    gridlist: { selectedIndex: number | "multi" | null }
}

export interface UseGridlistSectionParameters { compareRows: (lhsIndex: number, rhsIndex: number) => number }
export interface UseGridlistRowParameters<RowElement extends Element, CellElement extends Element, CR, CC, KR extends string, SubbestInfoR> extends
    UseGridNavigationRowParameters<RowElement, UseGridlistRowSubInfo<CellElement, CR, CC>, KR | "selected", never, never, never, never, never, never, never, never, SubbestInfoR>,
    Omit<UseSingleSelectionChildParameters<RowElement, CR, KR | "tabbable", "focusSelf">, "managedChild"> {
    gridlistRow: Pick<UseGridlistRowSubInfo<CellElement, CR, CC>, "locationIndex"> & { selected: boolean; };
}
export interface UseGridlistChildParameters<CellElement extends Element, CC, KC extends string, SubbestInfoC> extends UseGridNavigationCellParameters<CellElement, UseGridlistChildSubInfo<CC>, KC, never, never, never, SubbestInfoC> {
    hasFocus: UseHasFocusParameters<CellElement>;
    gridlistChild: { locationIndex: number }
}

export interface UseGridlistRowSubInfo<CellElement extends Element, CR, CC> {
    locationIndex: number;
    getCells(): ManagedChildren<number, UseRovingTabIndexSubInfo<CellElement, UseListNavigationSubInfo<UseGridNavigationCellSubInfo<UseGridlistChildSubInfo<CC>>>>, "tabbable">;
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
export interface UseGridlistReturnTypeInfo<RowElement extends Element, CellElement extends Element, CR, CC, KR extends string> extends
    UseGridNavigationReturnTypeInfo<RowElement, UseGridlistRowSubInfo<CellElement, CR, CC>, never>,
    //UseSortableChildrenReturnTypeInfo<UseRovingTabIndexSubInfo<RowElement, UseListNavigationSubInfo<UseGridNavigationRowSubInfo<UseGridlistRowSubInfo<CellElement, CR, CC>>>>, "tabbable" | KR>,
    UseSingleSelectionReturnTypeInfo<RowElement, UseRovingTabIndexSubInfo<RowElement, UseListNavigationSubInfo<UseGridNavigationRowSubInfo<UseGridlistRowSubInfo<CellElement, CR, CC>>>>, "tabbable" | KR> { }


export interface UseGridlistChildReturnTypeWithHooks<CellElement extends Element> extends UseGridlistChildReturnTypeInfo<CellElement> { useGridlistChildProps: (props: h.JSX.HTMLAttributes<CellElement>) => h.JSX.HTMLAttributes<CellElement>; }
export interface UseGridlistRowReturnTypeWithHooks<RowElement extends Element, CellElement extends Element, CC, KC extends string> extends UseGridlistRowReturnTypeInfo<RowElement, CellElement, CC> { useGridlistChild: UseGridlistChild<CellElement, CC, KC>; useGridlistRowProps: (props: h.JSX.HTMLAttributes<RowElement>) => h.JSX.HTMLAttributes<RowElement>; }
export interface UseGridlistSectionReturnTypeWithHooks<BodySectionElement extends Element, RowElement extends Element, CellElement extends Element, CR, CC, KR extends string> extends UseGridlistSectionReturnTypeInfo<RowElement, CellElement, CR, CC, KR> { useGridlistSectionProps: (props: h.JSX.HTMLAttributes<BodySectionElement>) => h.JSX.HTMLAttributes<BodySectionElement> }
export interface UseGridlistReturnTypeWithHooks<GridlistElement extends Element, BodySectionElement extends Element, RowElement extends Element, CellElement extends Element, CR, CC, KR extends string, KC extends string> extends UseGridlistReturnTypeInfo<RowElement, CellElement, CR, CC, KR> {
    useGridlistRow: UseGridlistRow<RowElement, CellElement, CR, CC, KR, KC>;
    useGridlistSection: UseGridlistSection<BodySectionElement, RowElement, CellElement, CR, CC, KR>;
    useGridlistProps: (props: h.JSX.HTMLAttributes<GridlistElement>) => h.JSX.HTMLAttributes<GridlistElement>;
}

export type UseGridlistChild<CellElement extends Element, CC, KC extends string> = (p: UseGridlistChildParameters<CellElement, CC, KC, CC>) => UseGridlistChildReturnTypeWithHooks<CellElement>;
export type UseGridlistRow<RowElement extends Element, CellElement extends Element, CR, CC, KR extends string, KC extends string> = (p: UseGridlistRowParameters<RowElement, CellElement, CR, CC, KR, CR>) => UseGridlistRowReturnTypeWithHooks<RowElement, CellElement, CC, KC>;
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
>({ linearNavigation, listNavigation, managedChildren, rovingTabIndex, typeaheadNavigation, childrenHaveFocus, singleSelection, gridlist }: UseGridlistParameters<RowElement, CellElement, CR, CC, KR>): UseGridlistReturnTypeWithHooks<GridlistElement, BodySectionElement, RowElement, CellElement, CR, CC, KR, KC> {
    debugLog("useGridlist");

    // TODO: Comparing the location should happen out here, not in each section so that grid navigation works right...
    const manglers = useRef({ rowIndexMangler: identity, rowIndexDemangler: identity });

    const {
        useGridNavigationProps,
        useGridNavigationRow,
        ...gridNavRet1
    } = useGridNavigation<GridlistElement, RowElement, CellElement, UseGridlistRowSubInfo<CellElement, CR, CC>, UseGridlistChildSubInfo<CC>, KR | "selected", KC>({
        linearNavigation,
        listNavigation,
        managedChildren,
        rovingTabIndex,
        typeaheadNavigation,
        gridNavigation: { rowIndexDemangler: useCallback((n: number) => manglers.current.rowIndexDemangler(n), []), rowIndexMangler: useCallback((n: number) => manglers.current.rowIndexMangler(n), []) },
    });
    gridNavRet1.managedChildren.children;


    type FullC = UseRovingTabIndexSubInfo<RowElement, UseListNavigationSubInfo<UseGridNavigationRowSubInfo<UseGridlistRowSubInfo<CellElement, CR, CC>>>>;
    const { useSingleSelectionChild, ...singleSelectInfo } = useSingleSelection<GridlistElement, RowElement, FullC, "tabbable" | KR>({
        childrenHaveFocus,
        singleSelection: {
            children: gridNavRet1.managedChildren.children,
            selectedIndex: typeof (gridlist.selectedIndex) == "number" ? (gridlist.selectedIndex) : null,
            selectionMode: singleSelection.selectionMode,
            setSelectedIndex: singleSelection.setSelectedIndex,
            setTabbableIndex: gridNavRet1.rovingTabIndex.setTabbableIndex
        }
    });

    const useGridlistRow = useCallback<UseGridlistRow<RowElement, CellElement, CR, CC, KR, KC>>(({ asChildRowOfSection, asParentRowOfCells, gridlistRow: { locationIndex, selected }, hasFocus, singleSelection }): UseGridlistRowReturnTypeWithHooks<RowElement, CellElement, CC, KC> => {
        debugLog("useGridlistRow", asChildRowOfSection.managedChild.index);

        const getCells = useCallback(() => {
            return cells;
        }, [])

        const { flags: ssflags, useSingleSelectionChildProps, ...singleSelectInfo } = useSingleSelectionChild({
            hasFocus: hasFocus,
            managedChild: asChildRowOfSection.managedChild,
            singleSelection: {
                ...singleSelection, 
                focusSelf: useStableCallback(() => {debugger;gridNavRet2.asParentOfCells.rovingTabIndex.focusSelf()}),
            }
        });

        const {
            useGridNavigationCell,
            useGridNavigationRowProps,
            ...gridNavRet2
        } = useGridNavigationRow({
            asChildRowOfSection: {
                subInfo: { getCells, locationIndex, subInfo: asChildRowOfSection.subInfo },
                listNavigation: asChildRowOfSection.listNavigation,
                managedChild: { index: asChildRowOfSection.managedChild.index, flags: { ...asChildRowOfSection.managedChild.flags, ...ssflags } as any },
                rovingTabIndex: asChildRowOfSection.rovingTabIndex
            },
            asParentRowOfCells
        });


        const { asParentOfCells: { managedChildren: { children: cells } } } = gridNavRet2;

        const useGridlistChild = useCallback<UseGridlistChild<CellElement, CC, KC>>(({ listNavigation, managedChild, rovingTabIndex, subInfo, hasFocus, gridlistChild: { locationIndex } }) => {
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
            const ret = useGridNavigationRowProps(useSingleSelectionChildProps(props));
            ret[singleSelection.ariaPropName as keyof h.JSX.HTMLAttributes<any>] = (selected || singleSelectInfo.singleSelection.selected || false).toString();
            return ret;
        };

        const ret: UseGridlistRowReturnTypeWithHooks<RowElement, CellElement, CC, KC> = {
            useGridlistChild,
            useGridlistRowProps,
            ...gridNavRet2,
        }

        return ret;
    }, []);

    const useGridlistSection = useCallback<UseGridlistSection<BodySectionElement, RowElement, CellElement, CR, CC, KR>>(({ compareRows }) => {
        debugLog("useGridlistSection");
        type CRFull = UseRovingTabIndexSubInfo<RowElement, UseListNavigationSubInfo<UseGridlistRowSubInfo<CellElement, CR, CC>>>;
        const getIndex = useCallback((i: ManagedChildInfo<number, any, KR>) => i.index, []);


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
        overwriteWithWarning("useGridlist", props, "aria-multiselectable", (gridlist.selectedIndex === "multi").toString())
        return useGridNavigationProps(props);
    };

    return {
        useGridlistProps,
        useGridlistSection,
        useGridlistRow,
        gridNavigation: gridNavRet1.gridNavigation,
        linearNavigation: gridNavRet1.linearNavigation,
        listNavigation: gridNavRet1.listNavigation,
        managedChildren: gridNavRet1.managedChildren,
        rovingTabIndex: gridNavRet1.rovingTabIndex,
        singleSelection: singleSelectInfo.singleSelection,
        typeaheadNavigation: gridNavRet1.typeaheadNavigation
    }
}


