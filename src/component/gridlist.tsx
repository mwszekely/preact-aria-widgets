import { createContext, createElement, h, Ref, VNode } from "preact";
import { GridChildCellInfo } from "preact-prop-helpers";
import { useContext, useImperativeHandle } from "preact/hooks";
import { TableCellInfo } from "../use-table";
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
    Get<UseGridlistParameters<GridlistElement, GridlistRowElement, GridlistCellElement, LabelElement, RM>, "labelParameters">,
    Get<UseGridlistParameters<GridlistElement, GridlistRowElement, GridlistCellElement, LabelElement, RM>, "gridlistParameters"> {
    ref?: Ref<UseGridlistReturnType<GridlistElement, GridlistRowElement, GridlistCellElement, LabelElement, RM, CM>>;
}

interface GridlistRowPropsBase<GridlistRowElement extends Element, GridlistCellElement extends Element, RM extends GridlistRowInfo<GridlistRowElement, GridlistCellElement>, CM extends GridlistCellInfo<GridlistCellElement>> extends
    Get2<UseGridlistRowParameters<GridlistRowElement, GridlistCellElement, RM, CM>, "asChildRowParameters", "managedChildParameters">,
    Get2<UseGridlistRowParameters<GridlistRowElement, GridlistCellElement, RM, CM>, "asChildRowParameters", "singleSelectionChildParameters">,
    Get2<UseGridlistRowParameters<GridlistRowElement, GridlistCellElement, RM, CM>, "asChildRowParameters", "textContentParameters">,
    Get2<UseGridlistRowParameters<GridlistRowElement, GridlistCellElement, RM, CM>, "asChildRowParameters", "rovingTabIndexChildParameters">,
    Get2<UseGridlistRowParameters<GridlistRowElement, GridlistCellElement, RM, CM>, "asChildRowParameters", "sortableChildParameters">,
    Get2<UseGridlistRowParameters<GridlistRowElement, GridlistCellElement, RM, CM>, "asParentRowParameters", "linearNavigationParameters">,
    Get2<UseGridlistRowParameters<GridlistRowElement, GridlistCellElement, RM, CM>, "asParentRowParameters", "rovingTabIndexParameters">,
    Get2<UseGridlistRowParameters<GridlistRowElement, GridlistCellElement, RM, CM>, "asParentRowParameters", "typeaheadNavigationParameters">,
    Get2<UseGridlistRowParameters<GridlistRowElement, GridlistCellElement, RM, CM>, "asChildRowParameters", "gridlistRowParameters"> {
    //    subInfo: Get2<UseGridlistRowParameters<GridlistRowElement, GridlistCellElement, RM, CM>, "asChildRowParameters", "completeGridNavigationRowParameters">;
    ref?: Ref<UseGridlistRowReturnType<GridlistRowElement, GridlistCellElement, RM, CM>>;
}

interface GridlistChildPropsBase<CellElement extends Element, M extends GridlistCellInfo<CellElement>> extends
    Get<UseGridlistCellParameters<CellElement, M>, "gridNavigationCellParameters">,
    Get<UseGridlistCellParameters<CellElement, M>, "textContentParameters">,
    Get<UseGridlistCellParameters<CellElement, M>, "pressParameters">,
    Get<UseGridlistCellParameters<CellElement, M>, "rovingTabIndexChildParameters">,
    Get<UseGridlistCellParameters<CellElement, M>, "managedChildParameters"> {
    ref?: Ref<UseGridlistCellReturnType<CellElement, M>>;
    //    subInfo: Get<UseGridlistCellParameters<CellElement, M>, "completeGridNavigationCellParameters">;
}




export interface GridlistProps<GridlistElement extends Element, GridlistRowElement extends Element, GridlistCellElement extends Element, LabelElement extends Element, RM extends GridlistRowInfo<GridlistRowElement, GridlistCellElement>, CM extends GridlistCellInfo<GridlistCellElement>> extends PartialExcept<GridlistPropsBase<GridlistElement, GridlistRowElement, GridlistCellElement, LabelElement, RM, CM>, "selectionLimit" | "groupingType" | "ariaLabel" | "selectedIndex"> {
    //ref?: Ref<UseGridlistReturnType<GridlistElement, GridlistRowElement, LabelElement, M>>;
    render(info: UseGridlistReturnType<GridlistElement, GridlistRowElement, GridlistCellElement, LabelElement, RM, CM>): VNode;
}

export interface GridlistRowProps<GridlistRowElement extends Element, GridlistCellElement extends Element, RM extends GridlistRowInfo<GridlistRowElement, GridlistCellElement>, CM extends GridlistCellInfo<GridlistCellElement>> extends PartialExcept<GridlistRowPropsBase<GridlistRowElement, GridlistCellElement, RM, CM>, "index" | "ariaPropName"> {
    //subInfo: Get2<UseGridlistRowParameters<GridlistRowElement, GridlistCellElement, RM, CM>, "asChildRowParameters", "completeGridNavigationRowParameters">;
    //ref?: Ref<UseGridlistRowReturnType<GridlistRowElement, GridlistCellElement, RM, CM>>;
    render(info: UseGridlistRowReturnType<GridlistRowElement, GridlistCellElement, RM, CM>): VNode;
}

export interface GridlistChildProps<CellElement extends Element, M extends GridlistCellInfo<CellElement>> extends PartialExcept<GridlistChildPropsBase<CellElement, M>,  "index" | "focusSelf"> {
    //ref?: Ref<UseGridlistCellReturnType<CellElement, M>>;
    //subInfo: Get<UseGridlistCellParameters<CellElement, M>, "completeGridNavigationCellParameters">;
    render(info: UseGridlistCellReturnType<CellElement, M>): VNode;
}

//const LocationIndexContext = createContext(0);

//const SetManglersContext = createContext<(m: (n: number) => number, d: (n: number) => number) => void>(null!);
//const GridlistSectionContext = createContext<UseGridlistSection<any, any, any, any, any, any>>(null!);
const GridlistContext = createContext<UseGridlistContext<any, any, any, any, any>>(null!);
const GridlistRowContext = createContext<UseGridlistRowContext<any, any, any>>(null!);

/*
export function defaultRenderGridlist<GridlistElement extends Element, RowElement extends Element, CellElement extends Element, RM extends GridlistRowInfo<RowElement>>({ tagGridlist, makePropsGridlist }: { tagGridlist: ElementToTag<GridlistElement>, makePropsGridlist: (info: UseGridlistReturnType<GridlistElement, RowElement, CellElement, RM>) => h.JSX.HTMLAttributes<GridlistElement> }) {
    return function (info: UseGridlistReturnType<GridlistElement, RowElement, CellElement, RM>) {
        return createElement(tagGridlist as never, (makePropsGridlist(info)));
    }
}
export function defaultRenderGridlistSection<GridlistSectionElement extends Element, RowElement extends Element, CellElement extends Element, CR, CC, KR extends string>({ tagGridlistSection, makePropsGridlistSection }: { tagGridlistSection: ElementToTag<GridlistSectionElement>, makePropsGridlistSection: (info: UseGridlistSectionReturnType<RowElement, CellElement, CR, CC, KR>) => h.JSX.HTMLAttributes<GridlistSectionElement> }) {
    return function (info: UseGridlistSectionReturnType<RowElement, CellElement, CR, CC, KR>, modifyPropsGridlistSection: PropModifier<GridlistSectionElement>) {
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
}*/

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
    setSelectedIndex,
    pageNavigationSize,
    selectionLimit,
    untabbable,
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
        typeaheadNavigationParameters: {
            collator: useDefault("collator", collator),
            noTypeahead: useDefault("noTypeahead", noTypeahead),
            typeaheadTimeout: useDefault("typeaheadTimeout", typeaheadTimeout),
        },
        /*singleSelectionParameters: {
            initiallySelectedIndex: initiallySelectedIndex ?? null,
            setSelectedIndex: setSelectedIndex ?? null
        },*/
        gridlistParameters: {
            selectionLimit,
            groupingType,
            selectedIndex,
            setSelectedIndex: setSelectedIndex ?? noop
        },
        gridNavigationParameters: {
            onTabbableColumnChange: onTabbableColumnChange ?? noop
        },
        labelParameters: {
            ariaLabel
        },
        rearrangeableChildrenParameters: {
            getIndex: useDefault("getIndex", getIndex)
        },
        sortableChildrenParameters: {
            compare: compare ?? null
        }
    });

    useImperativeHandle(ref!, () => info);

    return (
        <GridlistContext.Provider value={info.context}>
            {render(info)}
        </GridlistContext.Provider>
    )
})

function noop() { }

/*
export const GridlistSection = memoForwardRef(function GridlistSectionU<SectionElement extends Element, RowElement extends Element, Cellement extends Element, CR = undefined, CC = undefined, KR extends string = never>({ render, compareRows, index }: GridlistSectionProps<SectionElement, RowElement, Cellement, CR, CC, KR>, ref?: Ref<any>) {
    const { useGridlistSectionProps, ...sectionInfo } = useContext(GridlistSectionContext)//({ compareRows });
    useImperativeHandle(ref!, () => sectionInfo);
    return <LocationIndexContext.Provider value={index}>{render(sectionInfo, useGridlistSectionProps)}</LocationIndexContext.Provider>
})*/

export const GridlistRow = memoForwardRef(function GridlistRowU<RowElement extends Element, Cellement extends Element>({
    index,
    collator,
    disableArrowKeys,
    disableHomeEndKeys,
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
    untabbable,
    getSortValue,
    getText,
    render
}: GridlistRowProps<RowElement, Cellement, GridlistRowInfo<RowElement, Cellement>, GridlistCellInfo<Cellement>>, ref?: Ref<any>) {
    const context = (useContext(GridlistContext) as UseGridlistContext<any, RowElement, Cellement, GridlistRowInfo<RowElement, Cellement>, GridlistCellInfo<Cellement>>);
    const info = useGridlistRow<RowElement, Cellement, GridlistRowInfo<RowElement, Cellement>, GridlistCellInfo<Cellement>>({
        asChildRowParameters: {
            completeGridNavigationRowParameters: {},
            context,
            managedChildParameters: { index },
            gridlistRowParameters: { selected: selected ?? null },
            rovingTabIndexChildParameters: { hidden: hidden ?? false },
            sortableChildParameters: { getSortValue },
            singleSelectionChildParameters: { disabled: disabled ?? false, ariaPropName, selectionMode: useDefault("selectionMode", selectionMode) },
            textContentParameters: { getText: useDefault("getText", getText) }
        },
        asParentRowParameters: {
            linearNavigationParameters: {
                disableArrowKeys: useDefault("disableArrowKeys", disableArrowKeys),
                disableHomeEndKeys: useDefault("disableHomeEndKeys", disableHomeEndKeys),

                navigatePastEnd: navigatePastEnd ?? "wrap",
                navigatePastStart: navigatePastStart ?? "wrap"
            },
            rovingTabIndexParameters: {
                onTabbableIndexChange: onTabbableIndexChange ?? null,
                untabbable: untabbable ?? false,
            },
            typeaheadNavigationParameters: {
                collator: useDefault("collator", collator),
                noTypeahead: useDefault("noTypeahead", noTypeahead),
                typeaheadTimeout: useDefault("typeaheadTimeout", typeaheadTimeout)
            }
        },
        // gridlistRowContext,
    });

    useImperativeHandle(ref!, () => info);

    return <GridlistRowContext.Provider value={info.context}>{render(info)}</GridlistRowContext.Provider>
})

export const GridlistChild = memoForwardRef(function GridlistChild<CellElement extends Element>({
    index,
    colSpan,
    exclude,
    focusSelf,
    hidden,
    onPressSync,
    getText,
    render,

}: GridlistChildProps<CellElement, TableCellInfo<CellElement>>, ref?: Ref<any>) {
    const context = (useContext(GridlistRowContext) as UseGridlistRowContext<any, CellElement, GridChildCellInfo<CellElement>>);
    const info = useGridlistCell<CellElement, GridChildCellInfo<CellElement>>({
        completeGridNavigationCellParameters: {},
        context,
        gridNavigationCellParameters: { colSpan: colSpan ?? 1 },
        pressParameters: { exclude, focusSelf, onPressSync },
        textContentParameters: { getText: useDefault("getText", getText) },
        managedChildParameters: { index },
        rovingTabIndexChildParameters: { hidden: hidden ?? false }
    });

    useImperativeHandle(ref!, () => info);

    return render(info);
});

