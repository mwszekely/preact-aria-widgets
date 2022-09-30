import { createContext, createElement, h, Ref, VNode } from "preact";
import { UseHasFocusParameters } from "preact-prop-helpers";
import { memo } from "preact/compat";
import { useContext } from "preact/hooks";
import { ElementToTag, PropModifier } from "props";
import { useGridlist, UseGridlistSection, UseGridlistSectionParameters, UseGridlistSectionReturnTypeInfo, UseGridlistChild, UseGridlistChildParameters, UseGridlistChildReturnTypeInfo, UseGridlistParameters, UseGridlistReturnTypeInfo, UseGridlistRow, UseGridlistRowParameters, UseGridlistRowReturnTypeInfo } from "../use-gridlist";

type Get<T, K extends keyof T> = T[K];
type Get2<T, K extends keyof T, K2 extends keyof T[K]> = T[K][K2];

export interface GridlistProps<GridlistElement extends Element, RowElement extends Element, CellElement extends Element> extends
    Get<UseGridlistParameters, "linearNavigation">,
    Get<UseGridlistParameters, "listNavigation">,
    Get<UseGridlistParameters, "managedChildren">,
    Get<UseGridlistParameters, "rovingTabIndex">,
    Get<UseGridlistParameters, "typeaheadNavigation"> {
    //tagGridlist: ElementToTag<GridlistElement>;
    //propsGridlist(): h.JSX.HTMLAttributes<GridlistElement>;
    render(info: UseGridlistReturnTypeInfo<RowElement, CellElement>, modifyGridlistProps: PropModifier<GridlistElement>): VNode;
}

export interface GridlistSectionProps<SectionElement extends Element, RowElement extends Element, CellElement extends Element> extends UseGridlistSectionParameters, UseGridlistSectionParameters {
    index: number;
    render(info: UseGridlistSectionReturnTypeInfo<RowElement, CellElement>, modifyGridlistSectionProps: PropModifier<SectionElement>): VNode;
}
export interface GridlistHeadProps {
    render(): VNode;
}
export interface GridlistFootProps {
    render(): VNode;
}

export interface GridlistRowProps<RowElement extends Element, CellElement extends Element> extends
    Get2<UseGridlistRowParameters<CellElement>, "asChildRowOfSection", "listNavigation">,
    Get2<UseGridlistRowParameters<CellElement>, "asChildRowOfSection", "managedChild">,
    Get2<UseGridlistRowParameters<CellElement>, "asChildRowOfSection", "rovingTabIndex">,
    Get2<UseGridlistRowParameters<CellElement>, "asParentRowOfCells", "linearNavigation">,
    Get2<UseGridlistRowParameters<CellElement>, "asParentRowOfCells", "listNavigation">,
    Get2<UseGridlistRowParameters<CellElement>, "asParentRowOfCells", "managedChildren">,
    Get2<UseGridlistRowParameters<CellElement>, "asParentRowOfCells", "rovingTabIndex">,
    Get2<UseGridlistRowParameters<CellElement>, "asParentRowOfCells", "typeaheadNavigation"> {
    render(info: UseGridlistRowReturnTypeInfo<RowElement, CellElement>, tableRowProps: h.JSX.HTMLAttributes<RowElement>): VNode;
}

export interface GridlistChildProps<CellElement extends Element> extends
    Get<UseGridlistChildParameters<CellElement>, "listNavigation">,
    Get<UseGridlistChildParameters<CellElement>, "managedChild">,
    Get<UseGridlistChildParameters<CellElement>, "rovingTabIndex">,
    Get<UseGridlistChildParameters<CellElement>, "listNavigation">,
    Get<UseGridlistChildParameters<CellElement>, "rovingTabIndex">,
    UseHasFocusParameters<CellElement>,
    Omit<Get<UseGridlistChildParameters<CellElement>, "subInfo">, "location"> {
    render(info: UseGridlistChildReturnTypeInfo<CellElement>, tableRowProps: h.JSX.HTMLAttributes<CellElement>): VNode;
}

const LocationIndexContext = createContext(0);

const GridlistSectionContext = createContext<UseGridlistSection<any, any, any>>(null!);
const GridlistRowContext = createContext<UseGridlistRow<any, any>>(null!);
const GridlistChildContext = createContext<UseGridlistChild<any>>(null!);

export function defaultRenderGridlist<GridlistElement extends Element, RowElement extends Element, CellElement extends Element>({ tagGridlist, makePropsGridlist }: { tagGridlist: ElementToTag<GridlistElement>, makePropsGridlist: (info: UseGridlistReturnTypeInfo<RowElement, CellElement>) => h.JSX.HTMLAttributes<GridlistElement> }) {
    return function (info: UseGridlistReturnTypeInfo<RowElement, CellElement>, modifyPropsGridlist: PropModifier<GridlistElement>) {
        return createElement(tagGridlist as never, modifyPropsGridlist(makePropsGridlist(info)));
    }
}

export function defaultRenderGridlistSection<GridlistSectionElement extends Element, RowElement extends Element, CellElement extends Element>({ tagGridlistSection, makePropsGridlistSection }: { tagGridlistSection: ElementToTag<GridlistSectionElement>, makePropsGridlistSection: (info: UseGridlistSectionReturnTypeInfo<RowElement, CellElement>) => h.JSX.HTMLAttributes<GridlistSectionElement> }) {
    return function (info: UseGridlistSectionReturnTypeInfo<RowElement, CellElement>, modifyPropsGridlistSection: PropModifier<GridlistSectionElement>) {
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

export function defaultRenderGridlistRow<RowElement extends Element, CellElement extends Element>({ tagGridlistRow, makePropsGridlistRow }: { tagGridlistRow: ElementToTag<RowElement>, makePropsGridlistRow: (info: UseGridlistRowReturnTypeInfo<RowElement, CellElement>) => h.JSX.HTMLAttributes<RowElement> }) {
    return function (info: UseGridlistRowReturnTypeInfo<RowElement, CellElement>, modifyPropsGridlistRow: PropModifier<RowElement>) {
        return createElement(tagGridlistRow as never, modifyPropsGridlistRow(makePropsGridlistRow(info)));
    }
}

export function defaultRenderGridlistChild<CellElement extends Element>({ tagGridlistChild, makePropsGridlistChild }: { tagGridlistChild: ElementToTag<CellElement>, makePropsGridlistChild: (info: UseGridlistChildReturnTypeInfo<CellElement>) => h.JSX.HTMLAttributes<CellElement> }) {
    return function (info: UseGridlistChildReturnTypeInfo<CellElement>, modifyPropsGridlistChild: PropModifier<CellElement>) {
        return createElement(tagGridlistChild as never, modifyPropsGridlistChild(makePropsGridlistChild(info)));
    }
}

export const Gridlist = memo(function GridlistU<GridlistElement extends Element, SectionElement extends Element, RowElement extends Element, Cellement extends Element>({
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
    render
}: GridlistProps<GridlistElement, RowElement, Cellement>) {
    const { useGridlistSection, useGridlistProps, useGridlistRow, ...tableInfo } = useGridlist<GridlistElement, SectionElement, RowElement, Cellement>({
        linearNavigation: { disableArrowKeys, disableHomeEndKeys },
        listNavigation: {},
        managedChildren: { onAfterChildLayoutEffect, onChildrenMountChange },
        rovingTabIndex: { initialIndex, onTabbableIndexChange, onTabbableRender },
        typeaheadNavigation: { collator, noTypeahead, typeaheadTimeout }
    });

    return (
        <GridlistSectionContext.Provider value={useGridlistSection}>
            <GridlistRowContext.Provider value={useGridlistRow}>
                {(render ?? defaultRenderGridlist)(tableInfo, useGridlistProps)}
            </GridlistRowContext.Provider>
        </GridlistSectionContext.Provider>
    )
})

export const GridlistSection = memo(function GridlistSectionU<SectionElement extends Element, RowElement extends Element, Cellement extends Element>({ render, compareRows, index }: GridlistSectionProps<SectionElement, RowElement, Cellement>) {
    const { useGridlistSectionProps, ...sectionInfo } = useContext(GridlistSectionContext)({ compareRows });
    return <LocationIndexContext.Provider value={index}>{render(sectionInfo, useGridlistSectionProps)}</LocationIndexContext.Provider>
})

export const GridlistRow = memo(function GridlistRowU<RowElement extends Element, Cellement extends Element>({
    index,
    text,
    collator,
    disableArrowKeys,
    disableHomeEndKeys,
    flags,
    focusSelf,
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
    render
}: GridlistRowProps<RowElement, Cellement>, ref: Ref<RowElement>) {
    const { useGridlistChild, useGridlistRowProps, ...rowInfo } = useContext(GridlistRowContext)({
        asChildRowOfSection: {
            listNavigation: { text },
            managedChild: { index, flags },
            rovingTabIndex: { focusSelf, hidden },
            subInfo: {}
        },
        asParentRowOfCells: {
            linearNavigation: { disableArrowKeys, disableHomeEndKeys },
            listNavigation: { indexDemangler, indexMangler },
            managedChildren: { onAfterChildLayoutEffect, onChildrenMountChange },
            rovingTabIndex: { initialIndex, onTabbableIndexChange, onTabbableRender },
            typeaheadNavigation: { collator, noTypeahead, typeaheadTimeout }
        },
        gridlistRow: { locationIndex: useContext(LocationIndexContext) }
    });
    return <GridlistChildContext.Provider value={useGridlistChild}>{(render ?? defaultRenderGridlistRow)(rowInfo, useGridlistRowProps({ ref }))}</GridlistChildContext.Provider>
})

export const GridlistChild = memo(function GridlistChild<CellElement extends Element>({ index, text, flags, focusSelf, hidden, getDocument, getWindow, onActiveElementChange, onElementChange, onFocusedChanged, onFocusedInnerChanged, onLastActiveElementChange, onLastFocusedChanged, onLastFocusedInnerChanged, onMount, onUnmount, onWindowFocusedChange, render }: GridlistChildProps<CellElement>, ref: Ref<CellElement>) {
    const { useGridlistChildProps, ...cellInfo } = useContext(GridlistChildContext)({
        listNavigation: { text },
        managedChild: { index, flags },
        rovingTabIndex: { focusSelf, hidden },
        hasFocus: { getDocument, getWindow, onActiveElementChange, onElementChange, onFocusedChanged, onFocusedInnerChanged, onLastActiveElementChange, onLastFocusedChanged, onLastFocusedInnerChanged, onMount, onUnmount, onWindowFocusedChange },
        subInfo: {
            locationIndex: useContext(LocationIndexContext)
        }
    });

    return (render ?? defaultRenderGridlistChild)(cellInfo, useGridlistChildProps({ ref }));
})

