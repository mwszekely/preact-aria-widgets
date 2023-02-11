import { createContext, createElement, h, Ref, VNode } from "preact";
import { useStableCallback } from "preact-prop-helpers";
import { useContext, useImperativeHandle } from "preact/hooks";
import { ElementToTag } from "../props";
import { GridlistCellInfo, GridlistRowInfo, useGridlist, useGridlistCell, UseGridlistCellParameters, UseGridlistCellReturnType, UseGridlistContext, UseGridlistParameters, UseGridlistReturnType, useGridlistRow, UseGridlistRowContext, UseGridlistRowParameters, UseGridlistRowReturnType } from "../use-gridlist";
import { memoForwardRef, PartialExcept, useDefault } from "./util";

type Get<T, K extends keyof T> = T[K];
type Get2<T, K extends keyof T, K2 extends keyof T[K]> = T[K][K2];

interface GridlistPropsBase<GridlistElement extends Element, GridlistRowElement extends Element, GridlistCellElement extends Element, LabelElement extends Element, RM extends GridlistRowInfo<GridlistRowElement, GridlistCellElement>, CM extends GridlistCellInfo<GridlistCellElement>> extends
    Get<UseGridlistParameters<GridlistElement, GridlistRowElement, GridlistCellElement, LabelElement, RM>, "linearNavigationParameters">,
    Get<UseGridlistParameters<GridlistElement, GridlistRowElement, GridlistCellElement, LabelElement, RM>, "rovingTabIndexParameters">,
    Get<UseGridlistParameters<GridlistElement, GridlistRowElement, GridlistCellElement, LabelElement, RM>, "typeaheadNavigationParameters">,
    Get<UseGridlistParameters<GridlistElement, GridlistRowElement, GridlistCellElement, LabelElement, RM>, "gridNavigationParameters">,
    Get<UseGridlistParameters<GridlistElement, GridlistRowElement, GridlistCellElement, LabelElement, RM>, "rearrangeableChildrenParameters">,
    Get<UseGridlistParameters<GridlistElement, GridlistRowElement, GridlistCellElement, LabelElement, RM>, "sortableChildrenParameters">,
    Get<UseGridlistParameters<GridlistElement, GridlistRowElement, GridlistCellElement, LabelElement, RM>, "paginatedChildrenParameters">,
    Get<UseGridlistParameters<GridlistElement, GridlistRowElement, GridlistCellElement, LabelElement, RM>, "staggeredChildrenParameters">,
    Get<UseGridlistParameters<GridlistElement, GridlistRowElement, GridlistCellElement, LabelElement, RM>, "labelParameters">,
    Get<UseGridlistParameters<GridlistElement, GridlistRowElement, GridlistCellElement, LabelElement, RM>, "gridlistParameters"> {
    ref?: Ref<UseGridlistReturnType<GridlistElement, GridlistRowElement, GridlistCellElement, LabelElement, RM, CM>>;
}

interface GridlistRowPropsBase<GridlistRowElement extends Element, GridlistCellElement extends Element, RM extends GridlistRowInfo<GridlistRowElement, GridlistCellElement>, CM extends GridlistCellInfo<GridlistCellElement>> extends
    Get2<UseGridlistRowParameters<GridlistRowElement, GridlistCellElement, RM, CM>, "rowAsChildOfGridParameters", "managedChildParameters">,
    Get2<UseGridlistRowParameters<GridlistRowElement, GridlistCellElement, RM, CM>, "rowAsChildOfGridParameters", "singleSelectionChildParameters">,
    Get2<UseGridlistRowParameters<GridlistRowElement, GridlistCellElement, RM, CM>, "rowAsChildOfGridParameters", "textContentParameters">,
    Get2<UseGridlistRowParameters<GridlistRowElement, GridlistCellElement, RM, CM>, "rowAsChildOfGridParameters", "rovingTabIndexChildParameters">,
    Get2<UseGridlistRowParameters<GridlistRowElement, GridlistCellElement, RM, CM>, "rowAsChildOfGridParameters", "sortableChildParameters">,
    Get2<UseGridlistRowParameters<GridlistRowElement, GridlistCellElement, RM, CM>, "rowAsParentOfCellsParameters", "linearNavigationParameters">,
    Get2<UseGridlistRowParameters<GridlistRowElement, GridlistCellElement, RM, CM>, "rowAsParentOfCellsParameters", "rovingTabIndexParameters">,
    Get2<UseGridlistRowParameters<GridlistRowElement, GridlistCellElement, RM, CM>, "rowAsParentOfCellsParameters", "typeaheadNavigationParameters">,
    Get2<UseGridlistRowParameters<GridlistRowElement, GridlistCellElement, RM, CM>, "rowAsChildOfGridParameters", "gridlistRowParameters"> {
    ref?: Ref<UseGridlistRowReturnType<GridlistRowElement, GridlistCellElement, RM, CM>>;
}

interface GridlistChildPropsBase<CellElement extends Element, M extends GridlistCellInfo<CellElement>> extends
    Get<UseGridlistCellParameters<CellElement, M>, "gridNavigationCellParameters">,
    Get<UseGridlistCellParameters<CellElement, M>, "textContentParameters">,
    Get<UseGridlistCellParameters<CellElement, M>, "rovingTabIndexChildParameters">,
    Get<UseGridlistCellParameters<CellElement, M>, "pressParameters">,
    Get<UseGridlistCellParameters<CellElement, M>, "managedChildParameters"> {
    focusSelf?: M["focusSelf"];
    ref?: Ref<UseGridlistCellReturnType<CellElement, M>>;
}




export interface GridlistProps<GridlistElement extends Element, GridlistRowElement extends Element, GridlistCellElement extends Element, LabelElement extends Element, RM extends GridlistRowInfo<GridlistRowElement, GridlistCellElement>, CM extends GridlistCellInfo<GridlistCellElement>> extends PartialExcept<GridlistPropsBase<GridlistElement, GridlistRowElement, GridlistCellElement, LabelElement, RM, CM>, "selectionLimit" | "groupingType" | "ariaLabel" | "selectedIndex"> {
    render(info: UseGridlistReturnType<GridlistElement, GridlistRowElement, GridlistCellElement, LabelElement, RM, CM>): VNode;
}

export interface GridlistRowProps<GridlistRowElement extends Element, GridlistCellElement extends Element, RM extends GridlistRowInfo<GridlistRowElement, GridlistCellElement>, CM extends GridlistCellInfo<GridlistCellElement>> extends PartialExcept<GridlistRowPropsBase<GridlistRowElement, GridlistCellElement, RM, CM>, "index" | "ariaPropName" | "getSortValue"> {
    render(info: UseGridlistRowReturnType<GridlistRowElement, GridlistCellElement, RM, CM>): VNode;
}

export interface GridlistChildProps<CellElement extends Element, M extends GridlistCellInfo<CellElement>> extends PartialExcept<GridlistChildPropsBase<CellElement, M>, "index" | "focusSelf"> {
    render(info: UseGridlistCellReturnType<CellElement, M>): VNode;
}

const GridlistContext = createContext<UseGridlistContext<any, any, any, any, any>>(null!);
const GridlistRowContext = createContext<UseGridlistRowContext<any, any, any>>(null!);


export function defaultRenderGridlistRow<RowElement extends Element, CellElement extends Element, RM extends GridlistRowInfo<RowElement, CellElement>, CM extends GridlistCellInfo<CellElement>>({ tagGridlistRow, makePropsGridlistRow }: { tagGridlistRow: ElementToTag<RowElement>, makePropsGridlistRow: (info: UseGridlistRowReturnType<RowElement, CellElement, RM, CM>) => h.JSX.HTMLAttributes<RowElement> }) {
    return function (info: UseGridlistRowReturnType<RowElement, CellElement, RM, CM>) {
        return createElement(tagGridlistRow as never, (makePropsGridlistRow(info)));
    }
}

export function defaultRenderGridlistChild<CellElement extends Element, CM extends GridlistCellInfo<CellElement>>({ tagGridlistChild, makePropsGridlistChild }: { tagGridlistChild: ElementToTag<CellElement>, makePropsGridlistChild: (info: UseGridlistCellReturnType<CellElement, CM>) => h.JSX.HTMLAttributes<CellElement> }) {
    return function (info: UseGridlistCellReturnType<CellElement, CM>) {
        return createElement(tagGridlistChild as never, (makePropsGridlistChild(info)));
    }
}

export const Gridlist = memoForwardRef(function GridlistU<GridlistElement extends Element, RowElement extends Element, Cellement extends Element, LabelElement extends Element>({
    collator,
    disableArrowKeys,
    disableHomeEndKeys,
    noTypeahead,
    onTabbableIndexChange,
    groupingType,
    typeaheadTimeout,
    selectedIndex,
    navigatePastEnd,
    navigatePastStart,
    onSelectedIndexChange,
    pageNavigationSize,
    selectionLimit,
    untabbable,
    paginationMax,
    paginationMin,
    staggered,
    compare,
    getIndex,
    onTabbableColumnChange,
    ariaLabel,
    render
}: GridlistProps<GridlistElement, RowElement, Cellement, LabelElement, GridlistRowInfo<RowElement, Cellement>, GridlistCellInfo<Cellement>>, ref?: Ref<any>) {
    const info = useGridlist<GridlistElement, RowElement, Cellement, LabelElement, GridlistRowInfo<RowElement, Cellement>, GridlistCellInfo<Cellement>>({
        linearNavigationParameters: {
            disableArrowKeys: useDefault("disableArrowKeys", disableArrowKeys),
            disableHomeEndKeys: useDefault("disableHomeEndKeys", disableHomeEndKeys),
            navigatePastEnd: (navigatePastEnd ?? "wrap"),
            navigatePastStart: (navigatePastStart ?? "wrap"),
            pageNavigationSize: useDefault("pageNavigationSize", pageNavigationSize),
        },
        rovingTabIndexParameters: {
            onTabbableIndexChange: onTabbableIndexChange ?? null,
            untabbable: untabbable ?? false
        },
        staggeredChildrenParameters: { staggered: staggered || false },
        typeaheadNavigationParameters: {
            collator: useDefault("collator", collator),
            noTypeahead: useDefault("noTypeahead", noTypeahead),
            typeaheadTimeout: useDefault("typeaheadTimeout", typeaheadTimeout),
        },
        gridlistParameters: {
            selectionLimit,
            groupingType,
            selectedIndex,
            onSelectedIndexChange: onSelectedIndexChange ?? null
        },
        gridNavigationParameters: {
            onTabbableColumnChange: onTabbableColumnChange ?? null
        },
        labelParameters: {
            ariaLabel
        },
        rearrangeableChildrenParameters: {
            getIndex: useDefault("getIndex", getIndex)
        },
        sortableChildrenParameters: {
            compare: compare ?? null
        },
        paginatedChildrenParameters: {
            paginationMax: paginationMax ?? null,
            paginationMin: paginationMin ?? null
        }
    });

    useImperativeHandle(ref!, () => info);

    return (
        <GridlistContext.Provider value={info.context}>
            {render(info)}
        </GridlistContext.Provider>
    )
});

export const GridlistRow = memoForwardRef(function GridlistRowU<RowElement extends Element, Cellement extends Element>({
    index,
    collator,
    disableArrowKeys,
    ariaPropName,
    disabled,
    hidden,
    navigatePastEnd,
    navigatePastStart,
    noTypeahead,
    onTabbableIndexChange,
    selected,
    selectionMode,
    typeaheadTimeout,
    getSortValue,
    getText,
    render
}: GridlistRowProps<RowElement, Cellement, GridlistRowInfo<RowElement, Cellement>, GridlistCellInfo<Cellement>>, ref?: Ref<any>) {
    const context = (useContext(GridlistContext) as UseGridlistContext<any, RowElement, Cellement, GridlistRowInfo<RowElement, Cellement>, GridlistCellInfo<Cellement>>);
    console.assert(context != null, `This GridlistRow is not contained within a Gridlist`);
    const info = useGridlistRow<RowElement, Cellement, GridlistRowInfo<RowElement, Cellement>, GridlistCellInfo<Cellement>>({
        rowAsChildOfGridParameters: {
            completeGridNavigationRowParameters: {},
            context,
            managedChildParameters: { index },
            gridlistRowParameters: { selected: selected ?? null },
            rovingTabIndexChildParameters: { hidden: hidden ?? false },
            sortableChildParameters: { getSortValue },
            singleSelectionChildParameters: { disabled: disabled ?? false, ariaPropName, selectionMode: useDefault("selectionMode", selectionMode) },
            textContentParameters: { getText: useDefault("getText", getText) }
        },
        rowAsParentOfCellsParameters: {
            linearNavigationParameters: {
                disableArrowKeys: useDefault("disableArrowKeys", disableArrowKeys),

                navigatePastEnd: navigatePastEnd ?? "wrap",
                navigatePastStart: navigatePastStart ?? "wrap"
            },
            rovingTabIndexParameters: {
                onTabbableIndexChange: onTabbableIndexChange ?? null
            },
            typeaheadNavigationParameters: {
                collator: useDefault("collator", collator),
                noTypeahead: useDefault("noTypeahead", noTypeahead),
                typeaheadTimeout: useDefault("typeaheadTimeout", typeaheadTimeout)
            }
        },
    });

    useImperativeHandle(ref!, () => info);

    return <GridlistRowContext.Provider value={info.context}>{render(info)}</GridlistRowContext.Provider>
})

export const GridlistChild = memoForwardRef(function GridlistChild<CellElement extends Element>({
    index,
    colSpan,
    focusSelf,
    hidden,
    getText,
    onPressSync,
    render,
}: GridlistChildProps<CellElement, GridlistCellInfo<CellElement>>, ref?: Ref<any>) {
    const context = (useContext(GridlistRowContext) as UseGridlistRowContext<any, CellElement, GridlistCellInfo<CellElement>>);
    console.assert(context != null, `This GridlistChild is not contained within a GridlistRow that is contained within a Gridlist`);
    const defaultFocusSelf = useStableCallback((e: CellElement) => { (e as Element as HTMLElement).focus?.() }, []);
    const info = useGridlistCell<CellElement, GridlistCellInfo<CellElement>>({
        completeGridNavigationCellParameters: { focusSelf: (focusSelf ?? defaultFocusSelf) },
        context,
        gridNavigationCellParameters: { colSpan: colSpan ?? 1 },
        textContentParameters: { getText: useDefault("getText", getText) },
        managedChildParameters: { index },
        pressParameters: { onPressSync },
        rovingTabIndexChildParameters: { hidden: hidden ?? false }
    });

    useImperativeHandle(ref!, () => info);

    return render(info);
});
