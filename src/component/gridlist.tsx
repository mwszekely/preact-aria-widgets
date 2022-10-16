import { createContext, createElement, h, VNode, Ref } from "preact";
import { UseHasFocusParameters } from "preact-prop-helpers";
import { memo } from "preact/compat";
import { useContext, useImperativeHandle } from "preact/hooks";
import { ElementToTag, PropModifier } from "props";
import { useGridlist, UseGridlistChild, UseGridlistChildParameters, UseGridlistChildReturnTypeInfo, UseGridlistParameters, UseGridlistReturnTypeInfo, UseGridlistRow, UseGridlistRowParameters, UseGridlistRowReturnTypeInfo, UseGridlistSection, UseGridlistSectionParameters, UseGridlistSectionReturnTypeInfo } from "../use-gridlist";
import { memoForwardRef } from "./util";

type Get<T, K extends keyof T> = T[K];
type Get2<T, K extends keyof T, K2 extends keyof T[K]> = T[K][K2];

export interface GridlistProps<GridlistElement extends Element, RowElement extends Element, CellElement extends Element, CR, CC, KR extends string> extends
    Get<UseGridlistParameters<RowElement, CellElement, CR, CC, KR>, "linearNavigation">,
    Get<UseGridlistParameters<RowElement, CellElement, CR, CC, KR>, "listNavigation">,
    Get<UseGridlistParameters<RowElement, CellElement, CR, CC, KR>, "managedChildren">,
    Get<UseGridlistParameters<RowElement, CellElement, CR, CC, KR>, "rovingTabIndex">,
    Get<UseGridlistParameters<RowElement, CellElement, CR, CC, KR>, "singleSelection">,
    Get<UseGridlistParameters<RowElement, CellElement, CR, CC, KR>, "typeaheadNavigation">,
    Get<UseGridlistParameters<RowElement, CellElement, CR, CC, KR>, "gridlist"> {
    ref?: Ref<UseGridlistReturnTypeInfo<RowElement, CellElement, CR, CC, KR>>;
    render(info: UseGridlistReturnTypeInfo<RowElement, CellElement, CR, CC, KR>, modifyGridlistProps: PropModifier<GridlistElement>): VNode;
}

export interface GridlistSectionProps<SectionElement extends Element, RowElement extends Element, CellElement extends Element, CR, CC, KR extends string> extends UseGridlistSectionParameters, UseGridlistSectionParameters {
    index: number;
    ref?: Ref<UseGridlistSectionReturnTypeInfo<RowElement, CellElement, CR, CC, KR>>;
    render(info: UseGridlistSectionReturnTypeInfo<RowElement, CellElement, CR, CC, KR>, modifyGridlistSectionProps: PropModifier<SectionElement>): VNode;
}
export interface GridlistHeadProps {
    render(): VNode;
}
export interface GridlistFootProps {
    render(): VNode;
}

export interface GridlistRowProps<RowElement extends Element, CellElement extends Element, CR, CC, KR extends string> extends
    Get2<UseGridlistRowParameters<RowElement, CellElement, CR, CC, KR, CR>, "asChildRowOfSection", "listNavigation">,
    Get2<UseGridlistRowParameters<RowElement, CellElement, CR, CC, KR, CR>, "asChildRowOfSection", "managedChild">,
    Get2<UseGridlistRowParameters<RowElement, CellElement, CR, CC, KR, CR>, "asChildRowOfSection", "rovingTabIndex">,
    Get2<UseGridlistRowParameters<RowElement, CellElement, CR, CC, KR, CR>, "asParentRowOfCells", "linearNavigation">,
    Get2<UseGridlistRowParameters<RowElement, CellElement, CR, CC, KR, CR>, "asParentRowOfCells", "listNavigation">,
    Get2<UseGridlistRowParameters<RowElement, CellElement, CR, CC, KR, CR>, "asParentRowOfCells", "managedChildren">,
    Get2<UseGridlistRowParameters<RowElement, CellElement, CR, CC, KR, CR>, "asParentRowOfCells", "rovingTabIndex">,
    Get2<UseGridlistRowParameters<RowElement, CellElement, CR, CC, KR, CR>, "asParentRowOfCells", "typeaheadNavigation">,
    Get<UseGridlistRowParameters<RowElement, CellElement, CR, CC, KR, CR>, "hasFocus">,
    Get<UseGridlistRowParameters<RowElement, CellElement, CR, CC, KR, CR>, "singleSelection">,
    Omit<Get<UseGridlistRowParameters<RowElement, CellElement, CR, CC, KR, CR>, "gridlistRow">, "locationIndex"> {
    subInfo: Get2<UseGridlistRowParameters<RowElement, CellElement, CR, CC, KR, CR>, "asChildRowOfSection", "subInfo">;
    ref?: Ref<UseGridlistRowReturnTypeInfo<RowElement, CellElement, CC>>;
    render(info: UseGridlistRowReturnTypeInfo<RowElement, CellElement, CC>, modifyGridlistRowProps: PropModifier<RowElement>): VNode;
}

export interface GridlistChildProps<CellElement extends Element, CC, KC extends string> extends
    Get<UseGridlistChildParameters<CellElement, CC, KC, CC>, "listNavigation">,
    Get<UseGridlistChildParameters<CellElement, CC, KC, CC>, "managedChild">,
    Get<UseGridlistChildParameters<CellElement, CC, KC, CC>, "rovingTabIndex">,
    Get<UseGridlistChildParameters<CellElement, CC, KC, CC>, "listNavigation">,
    Get<UseGridlistChildParameters<CellElement, CC, KC, CC>, "rovingTabIndex">,
    UseHasFocusParameters<CellElement>
//Omit<Get<UseGridlistChildParameters<CellElement, CC, KC, CC>, "subInfo">, "location"> 
{
    ref?: Ref<UseGridlistChildReturnTypeInfo<CellElement>>;
    subInfo: Get<UseGridlistChildParameters<CellElement, CC, KC, CC>, "subInfo">,
    render(info: UseGridlistChildReturnTypeInfo<CellElement>, modifyGridlistChildProps: PropModifier<CellElement>): VNode;
}

const LocationIndexContext = createContext(0);

//const SetManglersContext = createContext<(m: (n: number) => number, d: (n: number) => number) => void>(null!);
const GridlistSectionContext = createContext<UseGridlistSection<any, any, any, any, any, any>>(null!);
const GridlistRowContext = createContext<UseGridlistRow<any, any, any, any, any, any>>(null!);
const GridlistChildContext = createContext<UseGridlistChild<any, any, any>>(null!);

export function defaultRenderGridlist<GridlistElement extends Element, RowElement extends Element, CellElement extends Element, CR, CC, KR extends string>({ tagGridlist, makePropsGridlist }: { tagGridlist: ElementToTag<GridlistElement>, makePropsGridlist: (info: UseGridlistReturnTypeInfo<RowElement, CellElement, CR, CC, KR>) => h.JSX.HTMLAttributes<GridlistElement> }) {
    return function (info: UseGridlistReturnTypeInfo<RowElement, CellElement, CR, CC, KR>, modifyPropsGridlist: PropModifier<GridlistElement>) {
        return createElement(tagGridlist as never, modifyPropsGridlist(makePropsGridlist(info)));
    }
}

export function defaultRenderGridlistSection<GridlistSectionElement extends Element, RowElement extends Element, CellElement extends Element, CR, CC, KR extends string>({ tagGridlistSection, makePropsGridlistSection }: { tagGridlistSection: ElementToTag<GridlistSectionElement>, makePropsGridlistSection: (info: UseGridlistSectionReturnTypeInfo<RowElement, CellElement, CR, CC, KR>) => h.JSX.HTMLAttributes<GridlistSectionElement> }) {
    return function (info: UseGridlistSectionReturnTypeInfo<RowElement, CellElement, CR, CC, KR>, modifyPropsGridlistSection: PropModifier<GridlistSectionElement>) {
        return createElement(tagGridlistSection as never, modifyPropsGridlistSection(makePropsGridlistSection(info)));
    }
}

export function defaultRenderGridlistHead<GridlistHeadElement extends Element>({ tagGridlistHead, makePropsGridlistHead }: { tagGridlistHead: ElementToTag<GridlistHeadElement>, makePropsGridlistHead: () => h.JSX.HTMLAttributes<GridlistHeadElement> }) {
    return function () {
        return createElement(tagGridlistHead as never, (makePropsGridlistHead()));
    }
}

export function defaultRenderGridlistFoot<GridlistFootElement extends Element>({ tagGridlistFoot, makePropsGridlistFoot }: { tagGridlistFoot: ElementToTag<GridlistFootElement>, makePropsGridlistFoot: () => h.JSX.HTMLAttributes<GridlistFootElement> }) {
    return function () {
        return createElement(tagGridlistFoot as never, (makePropsGridlistFoot()));
    }
}

export function defaultRenderGridlistRow<RowElement extends Element, CellElement extends Element, CC>({ tagGridlistRow, makePropsGridlistRow }: { tagGridlistRow: ElementToTag<RowElement>, makePropsGridlistRow: (info: UseGridlistRowReturnTypeInfo<RowElement, CellElement, CC>) => h.JSX.HTMLAttributes<RowElement> }) {
    return function (info: UseGridlistRowReturnTypeInfo<RowElement, CellElement, CC>, modifyPropsGridlistRow: PropModifier<RowElement>) {
        return createElement(tagGridlistRow as never, modifyPropsGridlistRow(makePropsGridlistRow(info)));
    }
}

export function defaultRenderGridlistChild<CellElement extends Element>({ tagGridlistChild, makePropsGridlistChild }: { tagGridlistChild: ElementToTag<CellElement>, makePropsGridlistChild: (info: UseGridlistChildReturnTypeInfo<CellElement>) => h.JSX.HTMLAttributes<CellElement> }) {
    return function (info: UseGridlistChildReturnTypeInfo<CellElement>, modifyPropsGridlistChild: PropModifier<CellElement>) {
        return createElement(tagGridlistChild as never, modifyPropsGridlistChild(makePropsGridlistChild(info)));
    }
}

export const Gridlist = memoForwardRef(function GridlistU<GridlistElement extends Element, SectionElement extends Element, RowElement extends Element, Cellement extends Element, CR = undefined, CC = undefined, KR extends string = never, KC extends string = never>({
    collator,
    disableArrowKeys,
    disableHomeEndKeys,
    initialIndex,
    noTypeahead,
    onAfterChildLayoutEffect,
    onChildrenMountChange,
    onTabbableIndexChange,
    onTabbableRender,
    typeaheadTimeout,
    selectedIndex,
    selectionMode,
    setSelectedIndex,
    render
}: GridlistProps<GridlistElement, RowElement, Cellement, CR, CC, KR>, ref?: Ref<any>) {
    const { useGridlistSection, useGridlistProps, useGridlistRow, ...gridlistInfo } = useGridlist<GridlistElement, SectionElement, RowElement, Cellement, CR, CC, KR, KC>({
        linearNavigation: { disableArrowKeys, disableHomeEndKeys },
        listNavigation: {},
        managedChildren: { onAfterChildLayoutEffect, onChildrenMountChange },
        rovingTabIndex: { initialIndex, onTabbableIndexChange, onTabbableRender },
        typeaheadNavigation: { collator, noTypeahead, typeaheadTimeout },
        childrenHaveFocus: {},
        singleSelection: { selectionMode, setSelectedIndex },
        gridlist: { selectedIndex }
    });

    useImperativeHandle(ref!, () => gridlistInfo);

    return (
        <GridlistSectionContext.Provider value={useGridlistSection}>
            <GridlistRowContext.Provider value={useGridlistRow}>
                {render(gridlistInfo, useGridlistProps)}
            </GridlistRowContext.Provider>
        </GridlistSectionContext.Provider>
    )
})

export const GridlistSection = memoForwardRef(function GridlistSectionU<SectionElement extends Element, RowElement extends Element, Cellement extends Element, CR = undefined, CC = undefined, KR extends string = never>({ render, compareRows, index }: GridlistSectionProps<SectionElement, RowElement, Cellement, CR, CC, KR>, ref?: Ref<any>) {
    const { useGridlistSectionProps, ...sectionInfo } = useContext(GridlistSectionContext)({ compareRows });
    useImperativeHandle(ref!, () => sectionInfo);
    return <LocationIndexContext.Provider value={index}>{render(sectionInfo, useGridlistSectionProps)}</LocationIndexContext.Provider>
})

export const GridlistRow = memoForwardRef(function GridlistRowU<RowElement extends Element, Cellement extends Element, CR = undefined, CC = undefined, KR extends string = never, KC extends string = never>({
    index,
    text,
    collator,
    disableArrowKeys,
    disableHomeEndKeys,
    flags,
    subInfo,
    hidden,
    indexDemangler,
    indexMangler,
    initialIndex,
    noTypeahead,
    onAfterChildLayoutEffect,
    onChildrenMountChange,
    onTabbableIndexChange,
    onTabbableRender,
    typeaheadTimeout,
    noModifyTabIndex,
    ariaPropName,
    getDocument,
    unselectable,
    selected,
    getWindow,
    onActiveElementChange,
    onElementChange,
    onFocusedChanged,
    onFocusedInnerChanged,
    onLastActiveElementChange,
    onLastFocusedChanged,
    onLastFocusedInnerChanged,
    onMount,
    onUnmount,
    onWindowFocusedChange,
    render
}: GridlistRowProps<RowElement, Cellement, CR, CC, KR>, ref?: Ref<any>) {
    const { useGridlistChild, useGridlistRowProps, ...rowInfo } = (useContext(GridlistRowContext) as UseGridlistRow<RowElement, Cellement, CR, CC, KR, KC>)({
        asChildRowOfSection: {
            listNavigation: { text },
            managedChild: { index, flags },
            rovingTabIndex: { hidden, noModifyTabIndex },
            subInfo
        },
        asParentRowOfCells: {
            linearNavigation: { disableArrowKeys, disableHomeEndKeys },
            listNavigation: { indexDemangler, indexMangler },
            managedChildren: { onAfterChildLayoutEffect, onChildrenMountChange },
            rovingTabIndex: { initialIndex, onTabbableIndexChange, onTabbableRender },
            typeaheadNavigation: { collator, noTypeahead, typeaheadTimeout }
        },
        gridlistRow: { locationIndex: useContext(LocationIndexContext), selected },
        hasFocus: { getDocument, getWindow, onActiveElementChange, onElementChange, onFocusedChanged, onFocusedInnerChanged, onLastActiveElementChange, onLastFocusedChanged, onLastFocusedInnerChanged, onMount, onUnmount, onWindowFocusedChange },
        singleSelection: { ariaPropName, unselectable }
    });

    useImperativeHandle(ref!, () => rowInfo);

    return <GridlistChildContext.Provider value={useGridlistChild}>{render(rowInfo, useGridlistRowProps)}</GridlistChildContext.Provider>
})

export const GridlistChild = memoForwardRef(function GridlistChild<CellElement extends Element, CC = undefined, KC extends string = never>({ index, text, flags, noModifyTabIndex, focusSelf, hidden, getDocument, getWindow, onActiveElementChange, onElementChange, onFocusedChanged, onFocusedInnerChanged, onLastActiveElementChange, onLastFocusedChanged, onLastFocusedInnerChanged, onMount, onUnmount, onWindowFocusedChange, render, subInfo }: GridlistChildProps<CellElement, CC, KC>, ref?: Ref<any>) {
    const { useGridlistChildProps, ...cellInfo } = (useContext(GridlistChildContext) as UseGridlistChild<CellElement, CC, KC>)({
        listNavigation: { text },
        managedChild: { index, flags },
        rovingTabIndex: { focusSelf, hidden, noModifyTabIndex },
        hasFocus: { getDocument, getWindow, onActiveElementChange, onElementChange, onFocusedChanged, onFocusedInnerChanged, onLastActiveElementChange, onLastFocusedChanged, onLastFocusedInnerChanged, onMount, onUnmount, onWindowFocusedChange },
        gridlistChild: { locationIndex: useContext(LocationIndexContext) },
        subInfo
    });

    useImperativeHandle(ref!, () => cellInfo);

    return render(cellInfo, useGridlistChildProps);
});

