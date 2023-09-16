import { createContext, createElement } from "preact";
import { ElementProps, UseCompleteGridNavigationRowsInfo, UseProcessedChildContext, UseProcessedChildrenContext, assertEmptyObject, focus, memo, useCompleteGridNavigationRows, useStableCallback } from "preact-prop-helpers";
import { UseCompleteGridNavigationRowsParameters, UseCompleteGridNavigationRowsReturnType } from "preact-prop-helpers/react";
import { useContext, useImperativeHandle } from "preact/hooks";
import { ElementToTag, Get12, Get4, Get9, OmitStrong, useContextWithWarning } from "../props.js";
import { GridlistCellInfo, GridlistRowInfo, UseGridlistCellParameters, UseGridlistCellReturnType, UseGridlistContext, UseGridlistParameters, UseGridlistReturnType, UseGridlistRowContext, UseGridlistRowParameters, UseGridlistRowReturnType, useGridlist, useGridlistCell, useGridlistRow } from "../use-gridlist.js";
import { GenericComponentProps, useComponent, useComponentC, useDefault } from "./util.js";

export type GridlistProps<GridlistElement extends Element, GridlistRowElement extends Element, GridlistCellElement extends Element, LabelElement extends Element, RM extends GridlistRowInfo<GridlistRowElement> = GridlistRowInfo<GridlistRowElement>, CM extends GridlistCellInfo<GridlistCellElement> = GridlistCellInfo<GridlistCellElement>> = GenericComponentProps<
    UseGridlistReturnType<GridlistElement, GridlistRowElement, GridlistCellElement, LabelElement, RM, CM>,
    Get12<UseGridlistParameters<GridlistElement, GridlistRowElement, LabelElement, RM>, "linearNavigationParameters", "rovingTabIndexParameters", "typeaheadNavigationParameters", "gridNavigationParameters", "paginatedChildrenParameters", "labelParameters", "listboxParameters", "singleSelectionParameters", "refElementParameters", "singleSelectionDeclarativeParameters", "singleSelectionParameters", "multiSelectionParameters">,
    "groupingType" | "ariaLabel" | "singleSelectedIndex"
>;

export type GridlistRowProps<GridlistRowElement extends Element, GridlistCellElement extends Element, RM extends GridlistRowInfo<GridlistRowElement> = GridlistRowInfo<GridlistRowElement>, CM extends GridlistCellInfo<GridlistCellElement> = GridlistCellInfo<GridlistCellElement>> = GenericComponentProps<
    UseGridlistRowReturnType<GridlistRowElement, GridlistCellElement, RM, CM>,
    Get9<UseGridlistRowParameters<GridlistRowElement, GridlistCellElement, RM, CM>, "textContentParameters", "linearNavigationParameters", "rovingTabIndexParameters", "typeaheadNavigationParameters", "gridlistRowParameters", "info", "hasCurrentFocusParameters", "singleSelectionChildParameters", "multiSelectionChildParameters">,
    "index"
> & { info?: OmitStrong<RM, keyof GridlistRowInfo<any>>; };

export type GridlistChildProps<CellElement extends Element, CM extends GridlistCellInfo<CellElement> = GridlistCellInfo<CellElement>> = GenericComponentProps<
    UseGridlistCellReturnType<CellElement, CM>,
    Get4<UseGridlistCellParameters<CellElement, CM>, "gridNavigationCellParameters", "textContentParameters", "pressParameters", "info">,
    never
> & { info?: OmitStrong<CM, keyof GridlistCellInfo<any>>; };


const GridlistContext = createContext<UseGridlistContext<any, any>>(null!);
const GridlistRowContext = createContext<UseGridlistRowContext<any, any>>(null!);

const GridlistRowsContext = createContext<UseProcessedChildrenContext>(null!);
const ProcessedChildContext = createContext<UseProcessedChildContext<any, any>>(null!);

export function defaultRenderGridlistRow<RowElement extends Element, CellElement extends Element, RM extends GridlistRowInfo<RowElement>, CM extends GridlistCellInfo<CellElement>>({ tagGridlistRow, makePropsGridlistRow }: { tagGridlistRow: ElementToTag<RowElement>, makePropsGridlistRow: (info: UseGridlistRowReturnType<RowElement, CellElement, RM, CM>) => ElementProps<RowElement> }) {
    return function (info: UseGridlistRowReturnType<RowElement, CellElement, RM, CM>) {
        return createElement(tagGridlistRow as never, (makePropsGridlistRow(info)));
    }
}

export function defaultRenderGridlistChild<CellElement extends Element, CM extends GridlistCellInfo<CellElement>>({ tagGridlistChild, makePropsGridlistChild }: { tagGridlistChild: ElementToTag<CellElement>, makePropsGridlistChild: (info: UseGridlistCellReturnType<CellElement, CM>) => ElementProps<CellElement> }) {
    return function (info: UseGridlistCellReturnType<CellElement, CM>) {
        return createElement(tagGridlistChild as never, (makePropsGridlistChild(info)));
    }
}

export const Gridlist = memo(function Gridlist<GridlistElement extends Element, RowElement extends Element, CellElement extends Element, LabelElement extends Element>({
    collator,
    disableHomeEndKeys,
    noTypeahead,
    onTabbableIndexChange,
    groupingType,
    typeaheadTimeout,
    singleSelectedIndex,
    navigatePastEnd,
    navigatePastStart,
    onSingleSelectedIndexChange,
    pageNavigationSize,
    untabbable,
    paginationMax,
    paginationMin,
    onTabbableColumnChange,
    ariaLabel,
    onNavigateLinear,
    onNavigateTypeahead,
    imperativeHandle,
    onElementChange,
    onMount,
    onUnmount,
    render,
    multiSelectionAriaPropName,
    multiSelectionMode,
    onSelectionChange,
    singleSelectionAriaPropName,
    singleSelectionMode,
    ...void1
}: GridlistProps<GridlistElement, RowElement, CellElement, LabelElement, GridlistRowInfo<RowElement>, GridlistCellInfo<CellElement>>) {
    assertEmptyObject(void1);
    type RM = GridlistRowInfo<RowElement>;
    type CM = GridlistCellInfo<CellElement>;

    return useComponentC(
        imperativeHandle,
        render,
        GridlistContext,
        useGridlist<GridlistElement, RowElement, CellElement, LabelElement>({
            linearNavigationParameters: {
                onNavigateLinear,
                disableHomeEndKeys: useDefault("disableHomeEndKeys", disableHomeEndKeys),
                navigatePastEnd: (navigatePastEnd ?? "wrap"),
                navigatePastStart: (navigatePastStart ?? "wrap"),
                pageNavigationSize: useDefault("pageNavigationSize", pageNavigationSize),
            },
            rovingTabIndexParameters: {
                onTabbableIndexChange,
                untabbable: untabbable || false
            },
            typeaheadNavigationParameters: {
                onNavigateTypeahead,
                collator: useDefault("collator", collator),
                noTypeahead: useDefault("noTypeahead", noTypeahead),
                typeaheadTimeout: useDefault("typeaheadTimeout", typeaheadTimeout),
            },
            listboxParameters: {
                groupingType
            },
            gridNavigationParameters: {
                onTabbableColumnChange,
            },
            labelParameters: {
                ariaLabel
            },
            paginatedChildrenParameters: {
                paginationMax,
                paginationMin
            },
            singleSelectionParameters: { singleSelectionAriaPropName, singleSelectionMode: singleSelectionMode || "disabled" },
            multiSelectionParameters: { multiSelectionAriaPropName, multiSelectionMode: multiSelectionMode || "disabled", onSelectionChange },
            singleSelectionDeclarativeParameters: { onSingleSelectedIndexChange, singleSelectedIndex },
            refElementParameters: { onElementChange, onMount, onUnmount }
        }));
});


export type GridlistRowsProps<GridlistRowElement extends Element> = GenericComponentProps<
    UseCompleteGridNavigationRowsReturnType<GridlistRowElement, UseCompleteGridNavigationRowsInfo<GridlistRowElement>>,
    Get4<UseCompleteGridNavigationRowsParameters<GridlistRowElement, UseCompleteGridNavigationRowsInfo<GridlistRowElement>>, "managedChildrenParameters", "paginatedChildrenParameters", "rearrangeableChildrenParameters", "staggeredChildrenParameters">,
    "children"
>;

export const GridlistRows = memo(function GridlistRows<RowElement extends Element>({
    render,
    adjust,
    children,
    compare,
    getIndex,
    imperativeHandle,
    onAfterChildLayoutEffect,
    onChildrenCountChange,
    onChildrenMountChange,
    onRearranged,
    paginationMax,
    paginationMin,
    staggered
}: GridlistRowsProps<RowElement>) {
    return useComponent(
        imperativeHandle,
        render,
        ProcessedChildContext,
        useCompleteGridNavigationRows<RowElement, UseCompleteGridNavigationRowsInfo<RowElement>>({
            context: useContext(GridlistRowsContext),
            managedChildrenParameters: {
                onAfterChildLayoutEffect,
                onChildrenCountChange,
                onChildrenMountChange
            },
            paginatedChildrenParameters: {
                paginationMax,
                paginationMin
            },
            rearrangeableChildrenParameters: {
                adjust,
                children,
                compare,
                getIndex: useDefault("getIndex", getIndex),
                onRearranged
            },
            staggeredChildrenParameters: {
                staggered: staggered || false
            },
        }))
})

export const GridlistRow = memo(function GridlistRowU<RowElement extends Element, CellElement extends Element>({
    index,
    collator,
    untabbable,
    navigatePastEnd,
    navigatePastStart,
    noTypeahead,
    onTabbableIndexChange,
    selected,
    typeaheadTimeout,
    getText,
    render,
    initiallyTabbedIndex,
    onNavigateTypeahead,
    imperativeHandle,
    onCurrentFocusedChanged,
    onCurrentFocusedInnerChanged,
    info: uinfo,
    initiallyMultiSelected,
    multiSelectionDisabled,
    onMultiSelectChange,
    singleSelectionDisabled,
    ...void1
}: GridlistRowProps<RowElement, CellElement, GridlistRowInfo<RowElement>, GridlistCellInfo<CellElement>>) {
    const context = useContextWithWarning(GridlistContext, "gridlist");
    console.assert(context != null, `This GridlistRow is not contained within a Gridlist`);
    assertEmptyObject(void1);
    return useComponent(
        imperativeHandle,
        render,
        GridlistRowContext,
        useGridlistRow<RowElement, CellElement>({
            info: {
                index,
                untabbable: untabbable || false,
                ...uinfo
            },
            context,
            gridlistRowParameters: { selected },
            textContentParameters: { getText: useDefault("getText", getText) },
            linearNavigationParameters: {
                navigatePastEnd: navigatePastEnd ?? "wrap",
                navigatePastStart: navigatePastStart ?? "wrap"
            },
            hasCurrentFocusParameters: {
                onCurrentFocusedChanged,
                onCurrentFocusedInnerChanged,
            },
            rovingTabIndexParameters: {
                onTabbableIndexChange,
                initiallyTabbedIndex,
                untabbable: untabbable || false,
            },
            typeaheadNavigationParameters: {
                onNavigateTypeahead,
                collator: useDefault("collator", collator),
                noTypeahead: useDefault("noTypeahead", noTypeahead),
                typeaheadTimeout: useDefault("typeaheadTimeout", typeaheadTimeout)
            },
            singleSelectionChildParameters: { singleSelectionDisabled: singleSelectionDisabled || false },
            multiSelectionChildParameters: { multiSelectionDisabled: multiSelectionDisabled || false, initiallyMultiSelected: initiallyMultiSelected || false, onMultiSelectChange }
        }));
})

export const GridlistChild = memo(function GridlistChild<CellElement extends Element>({
    index,
    colSpan,
    focusSelf,
    untabbable,
    getText,
    onPressSync,
    longPressThreshold,
    onPressingChange,
    render,
    imperativeHandle,
    info: subInfo
}: GridlistChildProps<CellElement, GridlistCellInfo<CellElement>>) {
    const context = (useContextWithWarning(GridlistRowContext, "gridlist row") as UseGridlistRowContext<CellElement, GridlistCellInfo<CellElement>>);
    console.assert(context != null, `This GridlistChild is not contained within a GridlistRow that is contained within a Gridlist`);
    const defaultFocusSelf = useStableCallback((e: CellElement) => { focus(e as Element as HTMLElement); }, []);
    const info = useGridlistCell<CellElement>({
        info: {
            index: index!,
            untabbable: untabbable || false,
            focusSelf: (focusSelf ?? defaultFocusSelf),
        },
        context,
        gridNavigationCellParameters: { colSpan: colSpan ?? 1 },
        textContentParameters: { getText: useDefault("getText", getText) },
        pressParameters: { onPressSync, longPressThreshold, onPressingChange }
    });

    useImperativeHandle(imperativeHandle!, () => info);

    return render(info);
});
