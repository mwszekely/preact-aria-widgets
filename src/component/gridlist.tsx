import { createContext, createElement, h, Ref, VNode } from "preact";
import { focus, useStableCallback } from "preact-prop-helpers";
import { useContext, useImperativeHandle } from "preact/hooks";
import { ElementToTag, OmitStrong } from "../props.js";
import { GridlistCellInfo, GridlistRowInfo, useGridlist, useGridlistCell, UseGridlistCellParameters, UseGridlistCellReturnType, UseGridlistContext, UseGridlistParameters, UseGridlistReturnType, useGridlistRow, UseGridlistRowContext, UseGridlistRowParameters, UseGridlistRowReturnType } from "../use-gridlist.js";
import { memoForwardRef, PartialExcept, useDefault } from "./util.js";

type Get<T, K extends keyof T> = T[K];
type Get2<T, K extends keyof T, K2 extends keyof T[K]> = T[K][K2];

interface GridlistPropsBase<GridlistElement extends Element, GridlistRowElement extends Element, GridlistCellElement extends Element, LabelElement extends Element, RM extends GridlistRowInfo<GridlistRowElement, GridlistCellElement>, CM extends GridlistCellInfo<GridlistCellElement>> extends
    Get<UseGridlistParameters<GridlistElement, GridlistRowElement, GridlistCellElement, LabelElement, RM, CM>, "linearNavigationParameters">,
    Get<UseGridlistParameters<GridlistElement, GridlistRowElement, GridlistCellElement, LabelElement, RM, CM>, "rovingTabIndexParameters">,
    Get<UseGridlistParameters<GridlistElement, GridlistRowElement, GridlistCellElement, LabelElement, RM, CM>, "typeaheadNavigationParameters">,
    Get<UseGridlistParameters<GridlistElement, GridlistRowElement, GridlistCellElement, LabelElement, RM, CM>, "gridNavigationParameters">,
    Get<UseGridlistParameters<GridlistElement, GridlistRowElement, GridlistCellElement, LabelElement, RM, CM>, "rearrangeableChildrenParameters">,
    Get<UseGridlistParameters<GridlistElement, GridlistRowElement, GridlistCellElement, LabelElement, RM, CM>, "sortableChildrenParameters">,
    Get<UseGridlistParameters<GridlistElement, GridlistRowElement, GridlistCellElement, LabelElement, RM, CM>, "paginatedChildrenParameters">,
    Get<UseGridlistParameters<GridlistElement, GridlistRowElement, GridlistCellElement, LabelElement, RM, CM>, "staggeredChildrenParameters">,
    Get<UseGridlistParameters<GridlistElement, GridlistRowElement, GridlistCellElement, LabelElement, RM, CM>, "labelParameters">,
    Get<UseGridlistParameters<GridlistElement, GridlistRowElement, GridlistCellElement, LabelElement, RM, CM>, "gridlistParameters">,
    Get<UseGridlistParameters<GridlistElement, GridlistRowElement, GridlistCellElement, LabelElement, RM, CM>, "singleSelectionParameters"> {
    ref?: Ref<UseGridlistReturnType<GridlistElement, GridlistRowElement, GridlistCellElement, LabelElement, RM, CM>>;
}

interface GridlistRowPropsBase<GridlistRowElement extends Element, GridlistCellElement extends Element, RM extends GridlistRowInfo<GridlistRowElement, GridlistCellElement>, CM extends GridlistCellInfo<GridlistCellElement>> extends
    Pick<RM, "index" | "unselectable">,
    Get<UseGridlistRowParameters<GridlistRowElement, GridlistCellElement, RM, CM>, "textContentParameters">,
    Get<UseGridlistRowParameters<GridlistRowElement, GridlistCellElement, RM, CM>, "sortableChildParameters">,
    Get<UseGridlistRowParameters<GridlistRowElement, GridlistCellElement, RM, CM>, "linearNavigationParameters">,
    Get<UseGridlistRowParameters<GridlistRowElement, GridlistCellElement, RM, CM>, "rovingTabIndexParameters">,
    Get<UseGridlistRowParameters<GridlistRowElement, GridlistCellElement, RM, CM>, "typeaheadNavigationParameters">,
    Get<UseGridlistRowParameters<GridlistRowElement, GridlistCellElement, RM, CM>, "gridlistRowParameters"> {
    info?: OmitStrong<RM, keyof GridlistRowInfo<GridlistRowElement, GridlistCellElement>>; // Get<UseGridlistRowParameters<GridlistRowElement, GridlistCellElement, RM, CM>, "completeGridNavigationRowParameters">
    ref?: Ref<UseGridlistRowReturnType<GridlistRowElement, GridlistCellElement, RM, CM>>;
}

interface GridlistChildPropsBase<CellElement extends Element, M extends GridlistCellInfo<CellElement>> extends
    Get<UseGridlistCellParameters<CellElement, M>, "gridNavigationCellParameters">,
    Get<UseGridlistCellParameters<CellElement, M>, "textContentParameters">,
    Get<UseGridlistCellParameters<CellElement, M>, "pressParameters">,
    Pick<M, "index" | "untabbable"> {
    focusSelf?: M["focusSelf"];
    info?: OmitStrong<M, "focusSelf">;
    ref?: Ref<UseGridlistCellReturnType<CellElement, M>>;
}




export interface GridlistProps<GridlistElement extends Element, GridlistRowElement extends Element, GridlistCellElement extends Element, LabelElement extends Element, RM extends GridlistRowInfo<GridlistRowElement, GridlistCellElement>, CM extends GridlistCellInfo<GridlistCellElement>> extends PartialExcept<GridlistPropsBase<GridlistElement, GridlistRowElement, GridlistCellElement, LabelElement, RM, CM>, "selectionLimit" | "groupingType" | "ariaLabel" | "selectedIndex"> {
    render(info: UseGridlistReturnType<GridlistElement, GridlistRowElement, GridlistCellElement, LabelElement, RM, CM>): VNode;
}

export interface GridlistRowProps<GridlistRowElement extends Element, GridlistCellElement extends Element, RM extends GridlistRowInfo<GridlistRowElement, GridlistCellElement>, CM extends GridlistCellInfo<GridlistCellElement>> extends PartialExcept<GridlistRowPropsBase<GridlistRowElement, GridlistCellElement, RM, CM>, "index" | "getSortValue"> {
    render(info: UseGridlistRowReturnType<GridlistRowElement, GridlistCellElement, RM, CM>): VNode;
}

export interface GridlistChildProps<CellElement extends Element, M extends GridlistCellInfo<CellElement>> extends PartialExcept<GridlistChildPropsBase<CellElement, M>, "index" | "focusSelf"> {
    render(info: UseGridlistCellReturnType<CellElement, M>): VNode;
}

//const GridlistUntabbableContext = createContext(false);
//const GridlistAriaPropNameContext = createContext<UseGridlistParameters<any, any, any, any, any, any>["singleSelectionParameters"]["ariaPropName"]>("aria-selected");
//const GridlistSelectionModeContext = createContext<UseGridlistParameters<any, any, any, any, any, any>["singleSelectionParameters"]["selectionMode"]>("activation");
//const GridlistRowUntabbableContext = createContext(false);
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

export const Gridlist = memoForwardRef(function GridlistU<GridlistElement extends Element, RowElement extends Element, Cellement extends Element, LabelElement extends Element, RM extends GridlistRowInfo<RowElement, Cellement> = GridlistRowInfo<RowElement, Cellement>, CM extends GridlistCellInfo<Cellement> = GridlistCellInfo<Cellement>>({
    collator,
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
    orientation,
    ariaPropName,
    selectionMode,
    render
}: GridlistProps<GridlistElement, RowElement, Cellement, LabelElement, RM, CM>, ref?: Ref<any>) {
    untabbable ??= false;
    ariaPropName ??= "aria-selected";
    selectionMode ??= "activation";

    const info = useGridlist<GridlistElement, RowElement, Cellement, LabelElement, RM, CM>({
        linearNavigationParameters: {
            disableHomeEndKeys: useDefault("disableHomeEndKeys", disableHomeEndKeys),
            navigatePastEnd: (navigatePastEnd ?? "wrap"),
            navigatePastStart: (navigatePastStart ?? "wrap"),
            pageNavigationSize: useDefault("pageNavigationSize", pageNavigationSize),
        },
        rovingTabIndexParameters: {
            onTabbableIndexChange: onTabbableIndexChange ?? null,
            untabbable,
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
            onSelectedIndexChange: onSelectedIndexChange ?? null,
            orientation: orientation ?? "vertical"
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
        },
        singleSelectionParameters: { ariaPropName, selectionMode }
    });

    useImperativeHandle(ref!, () => info);

    return (
        <GridlistContext.Provider value={info.context}>
            {render(info)}
        </GridlistContext.Provider>
    )
});

export const GridlistRow = memoForwardRef(function GridlistRowU<RowElement extends Element, Cellement extends Element, RM extends GridlistRowInfo<RowElement, Cellement> = GridlistRowInfo<RowElement, Cellement>, CM extends GridlistCellInfo<Cellement> = GridlistCellInfo<Cellement>>({
    index,
    collator,
    unselectable,
    untabbable,
    navigatePastEnd,
    navigatePastStart,
    noTypeahead,
    onTabbableIndexChange,
    selected,
    typeaheadTimeout,
    getSortValue,
    getText,
    render,
    initiallyTabbedIndex,
    info: uinfo
}: GridlistRowProps<RowElement, Cellement, RM, CM>, ref?: Ref<any>) {
    const context = (useContext(GridlistContext) as UseGridlistContext<any, RowElement, Cellement, RM, CM>);
    console.assert(context != null, `This GridlistRow is not contained within a Gridlist`);
    untabbable ||= false;

    const info = useGridlistRow<RowElement, Cellement, RM, CM>({
        info: { index, untabbable, unselectable, ...uinfo } as RM,
        context,
        gridlistRowParameters: { selected: selected ?? null },
        sortableChildParameters: { getSortValue },
        textContentParameters: { getText: useDefault("getText", getText) },
        linearNavigationParameters: {
            navigatePastEnd: navigatePastEnd ?? "wrap",
            navigatePastStart: navigatePastStart ?? "wrap"
        },
        rovingTabIndexParameters: { onTabbableIndexChange: onTabbableIndexChange ?? null, initiallyTabbedIndex: initiallyTabbedIndex ?? null, untabbable },
        typeaheadNavigationParameters: {
            collator: useDefault("collator", collator),
            noTypeahead: useDefault("noTypeahead", noTypeahead),
            typeaheadTimeout: useDefault("typeaheadTimeout", typeaheadTimeout)
        }
    });

    useImperativeHandle(ref!, () => info);

    return <GridlistRowContext.Provider value={info.context}>{render(info)}</GridlistRowContext.Provider>
})

export const GridlistChild = memoForwardRef(function GridlistChild<CellElement extends Element, CM extends GridlistCellInfo<CellElement> = GridlistCellInfo<CellElement>>({
    index,
    colSpan,
    focusSelf,
    untabbable,
    getText,
    onPressSync,
    render,
    info: subInfo
}: GridlistChildProps<CellElement, CM>, ref?: Ref<any>) {
    const context = (useContext(GridlistRowContext) as UseGridlistRowContext<any, CellElement, CM>);
    console.assert(context != null, `This GridlistChild is not contained within a GridlistRow that is contained within a Gridlist`);
    const defaultFocusSelf = useStableCallback((e: CellElement) => { focus(e as Element as HTMLElement); }, []);
    const info = useGridlistCell<CellElement, CM>({
        info: { index, untabbable: untabbable || false, focusSelf: (focusSelf ?? defaultFocusSelf), ...subInfo } as CM,
        context,
        gridNavigationCellParameters: { colSpan: colSpan ?? 1 },
        textContentParameters: { getText: useDefault("getText", getText) },
        pressParameters: { onPressSync }
    });

    useImperativeHandle(ref!, () => info);

    return render(info);
});
