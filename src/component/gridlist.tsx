import { VNode, createContext, createElement } from "preact";
import { ElementProps, TargetedOmit, UseCompleteGridNavigationRowsInfo, UseCompleteGridNavigationRowsParameters, UseCompleteGridNavigationRowsReturnType, UseProcessedChildContext, UseProcessedChildInfo, UseProcessedChildReturnType, UseProcessedChildrenContext, UseRefElementParameters, assertEmptyObject, focus, memo, useCompleteGridNavigationRows, useMergedProps, useProcessedChild, useRefElement, useStableCallback } from "preact-prop-helpers";
import { useContext, useEffect, useImperativeHandle } from "preact/hooks";
import { ElementToTag, Get, Get12, Get3, Get4, Get8, OmitStrong, useContextWithWarning } from "../props.js";
import { GridlistCellInfo, GridlistRowInfo, UseGridlistCellParameters, UseGridlistCellReturnType, UseGridlistContext, UseGridlistParameters, UseGridlistReturnType, UseGridlistRowContext, UseGridlistRowParameters, UseGridlistRowReturnType, useGridlist, useGridlistCell, useGridlistRow } from "../use-gridlist.js";
import { GenericComponentProps, useComponent, useComponentC, useDefault } from "./util.js";

export type GridlistProps<GridlistElement extends Element, GridlistRowElement extends Element, GridlistCellElement extends Element, LabelElement extends Element, RM extends GridlistRowInfo<GridlistRowElement> = GridlistRowInfo<GridlistRowElement>, CM extends GridlistCellInfo<GridlistCellElement> = GridlistCellInfo<GridlistCellElement>> = GenericComponentProps<
    UseGridlistReturnType<GridlistElement, GridlistRowElement, GridlistCellElement, LabelElement, RM, CM>,
    Get12<UseGridlistParameters<GridlistElement, GridlistRowElement, LabelElement, RM>, "linearNavigationParameters", "rovingTabIndexParameters", "typeaheadNavigationParameters", "gridNavigationParameters", "paginatedChildrenParameters", "labelParameters", "listboxParameters", "singleSelectionParameters", "refElementParameters", "singleSelectionDeclarativeParameters", "singleSelectionParameters", "multiSelectionParameters">,
    "groupingType" | "ariaLabel" | "singleSelectedIndex"
>;



interface GridlistRowOuterPropsBase<ListItemElement extends Element, M extends UseProcessedChildInfo<ListItemElement> = UseProcessedChildInfo<ListItemElement>> extends
    Get<UseRefElementParameters<ListItemElement>, "refElementParameters">,
    Pick<M, "index"> {
}

interface GridlistRowInnerPropsBase<GridlistRowElement extends Element, GridlistCellElement extends Element, RM extends GridlistRowInfo<GridlistRowElement> = GridlistRowInfo<GridlistRowElement>, CM extends GridlistCellInfo<GridlistCellElement> = GridlistCellInfo<GridlistCellElement>> extends
    Get8<UseGridlistRowParameters<GridlistRowElement, GridlistCellElement, RM, CM>, "gridlistRowParameters", "textContentParameters", "hasCurrentFocusParameters", "singleSelectionChildParameters", "multiSelectionChildParameters", "linearNavigationParameters", "typeaheadNavigationParameters", "rovingTabIndexParameters">,
    //OmitStrong<NonNullable<Get<UseGridlistRowParameters<GridlistRowElement, GridlistCellElement, RM, CM>, "gridlistRowParameters">>, never>,
    Pick<RM, "index" | "focusSelf"> {
}


type InnerOuterDifference<ListItemElement extends Element> = Get3<UseProcessedChildReturnType<ListItemElement, UseProcessedChildInfo<ListItemElement>>, "managedChildReturn", "paginatedChildReturn", "staggeredChildReturn">;

interface GridlistRowOuterProps<GridlistRowElement extends Element> extends
    GenericComponentProps<
        UseProcessedChildReturnType<GridlistRowElement, UseProcessedChildInfo<GridlistRowElement>> | null,
        GridlistRowOuterPropsBase<GridlistRowElement>,
        "index"> {
}
interface GridlistRowInnerProps<GridlistRowElement extends Element, GridlistCellElement extends Element, RM extends GridlistRowInfo<GridlistRowElement> = GridlistRowInfo<GridlistRowElement>, CM extends GridlistCellInfo<GridlistCellElement> = GridlistCellInfo<GridlistCellElement>> extends
    GenericComponentProps<
        (
            TargetedOmit<UseProcessedChildReturnType<GridlistRowElement, UseProcessedChildInfo<GridlistRowElement>>, "staggeredChildReturn", "childUseEffect"> & 
            OmitStrong<UseProcessedChildReturnType<GridlistRowElement, UseProcessedChildInfo<GridlistRowElement>>, "staggeredChildReturn" | "managedChildReturn" | "refElementParameters"> & 
            Partial<UseGridlistRowReturnType<GridlistRowElement, GridlistCellElement, RM, CM>>
        ),
        GridlistRowInnerPropsBase<GridlistRowElement, GridlistCellElement, RM, CM>,
        "index">,
    InnerOuterDifference<GridlistRowElement> {
    props: UseProcessedChildReturnType<GridlistRowElement, UseProcessedChildInfo<GridlistRowElement>>["props"];
}

export interface GridlistRowProps<GridlistRowElement extends Element, GridlistCellElement extends Element, RM extends GridlistRowInfo<GridlistRowElement> = GridlistRowInfo<GridlistRowElement>, CM extends GridlistCellInfo<GridlistCellElement> = GridlistCellInfo<GridlistCellElement>> extends
    OmitStrong<GridlistRowOuterProps<GridlistRowElement>, "render" | "imperativeHandle" | "index">,
    OmitStrong<GridlistRowInnerProps<GridlistRowElement, GridlistCellElement, RM, CM>, keyof InnerOuterDifference<any> | "render" | "imperativeHandle" | "props"> {
    imperativeHandle?: UseGridlistRowReturnType<GridlistRowElement, GridlistCellElement, RM, CM> & UseProcessedChildReturnType<GridlistRowElement, any>;
    render: (info: Partial<UseGridlistRowReturnType<GridlistRowElement, GridlistCellElement, RM, CM>> & OmitStrong<UseProcessedChildReturnType<GridlistRowElement, any>, "refElementParameters">) => VNode;
}


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
        GridlistRowsContext,
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
            }
        }))
})


export const GridlistRow = memo(function GridlistRow<RowElement extends Element, CellElement extends Element>({
    index,
    render,
    imperativeHandle,
    onElementChange: oec1,
    onMount,
    onUnmount,
    getText,
    untabbable,
    onCurrentFocusedChanged,
    onCurrentFocusedInnerChanged,
    focusSelf,
    multiSelectionDisabled,
    singleSelectionDisabled,
    collator,
    initiallyMultiSelected,
    initiallyTabbedIndex,
    navigatePastEnd,
    navigatePastStart,
    noTypeahead,
    onMultiSelectChange,
    onNavigateTypeahead,
    onTabbableIndexChange,
    selected,
    typeaheadTimeout,
    ...void1
}: GridlistRowProps<RowElement, CellElement>) {
    assertEmptyObject(void1);

    const {
        propsStable,
        refElementReturn
    } = useRefElement<RowElement>({
        refElementParameters: {
            onElementChange: useStableCallback((...a) => { oec1?.(...a); oec2?.(...a);}),
            onMount,
            onUnmount
        }
    });

    const { props, refElementParameters: { onElementChange: oec2 }, ...i2 } = useProcessedChild<RowElement>({
        context: useContextWithWarning(ProcessedChildContext, "ListboxChildren"),
        info: { index }
    })

    const {
        managedChildReturn: { getChildren },
        paginatedChildReturn: { hideBecausePaginated, parentIsPaginated },
        staggeredChildReturn: { hideBecauseStaggered, parentIsStaggered, childUseEffect }
    } = i2;

    const props2 = useMergedProps(props, propsStable);

    if (hideBecausePaginated || hideBecauseStaggered) {
        return render({
            ...i2,
            props: props2,
            hasCurrentFocusReturn: undefined,
            multiSelectionChildReturn: undefined,
            //    pressReturn: undefined,
            refElementReturn,
            rovingTabIndexChildReturn: undefined,
            singleSelectionChildReturn: undefined,
            textContentReturn: undefined,
            managedChildReturn: { getChildren } as any
        });
    }

    return (
        <GridlistRowInner
            index={index}
            render={render}
            collator={collator}
            initiallyMultiSelected={initiallyMultiSelected}
            initiallyTabbedIndex={initiallyTabbedIndex}
            navigatePastEnd={navigatePastEnd}
            navigatePastStart={navigatePastStart}
            noTypeahead={noTypeahead}
            onMultiSelectChange={onMultiSelectChange}
            onNavigateTypeahead={onNavigateTypeahead}
            onTabbableIndexChange={onTabbableIndexChange}
            selected={selected}
            typeaheadTimeout={typeaheadTimeout}
            focusSelf={focusSelf}
            getText={getText}
            imperativeHandle={imperativeHandle as any}
            multiSelectionDisabled={multiSelectionDisabled}
            onCurrentFocusedChanged={onCurrentFocusedChanged}
            onCurrentFocusedInnerChanged={onCurrentFocusedInnerChanged}
            singleSelectionDisabled={singleSelectionDisabled}
            untabbable={untabbable}
            getChildren={getChildren}
            hideBecausePaginated={hideBecausePaginated}
            hideBecauseStaggered={hideBecauseStaggered}
            parentIsPaginated={parentIsPaginated}
            parentIsStaggered={parentIsStaggered}
            childUseEffect={childUseEffect}
            props={props2}
            {...void1}
        />
    );
})

const GridlistRowInner = memo(function GridlistRowInner<RowElement extends Element, CellElement extends Element>({
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
    initiallyMultiSelected,
    multiSelectionDisabled,
    onMultiSelectChange,
    singleSelectionDisabled,
    focusSelf,
    childUseEffect,
    getChildren,
    hideBecausePaginated,
    hideBecauseStaggered,
    parentIsPaginated,
    parentIsStaggered,
    props: props1,
    ...void1
}: GridlistRowInnerProps<RowElement, CellElement, GridlistRowInfo<RowElement>, GridlistCellInfo<CellElement>>): VNode {
    assertEmptyObject(void1);
    const {
        context,
        hasCurrentFocusReturn,
        linearNavigationReturn,
        managedChildReturn,
        managedChildrenReturn,
        multiSelectionChildReturn,
        pressParameters,
        props: props2,
        rovingTabIndexChildReturn,
        rovingTabIndexReturn,
        refElementReturn,
        singleSelectionChildReturn,
        textContentReturn,
        typeaheadNavigationReturn,
    } = useGridlistRow<RowElement, CellElement>({
        info: {
            index,
            untabbable: untabbable || false,
            //...uinfo
        },
        context: useContextWithWarning(GridlistContext, "gridlist"),
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
    });

    useEffect(childUseEffect, [childUseEffect])

    return useComponent(
        imperativeHandle,
        render,
        GridlistRowContext,
        {
            context,
            hasCurrentFocusReturn,
            linearNavigationReturn,
            managedChildrenReturn,
            managedChildReturn,
            multiSelectionChildReturn,
            pressParameters,
            props: useMergedProps(props1, props2),
            rovingTabIndexChildReturn,
            rovingTabIndexReturn,
            singleSelectionChildReturn,
            textContentReturn,
            typeaheadNavigationReturn,
            refElementReturn,
            paginatedChildReturn: { hideBecausePaginated, parentIsPaginated },
            staggeredChildReturn: { hideBecauseStaggered, parentIsStaggered },
        });
})

// Separated into its own component because hooks can't be if'd.
/*const ListboxItemInner = memo(function ListboxItemInner<GridlistRowElement extends Element, GridlistCellElement extends Element>({
    getText,
    untabbable,
    index,
    render,
    info: uinfo,
    onCurrentFocusedChanged,
    onCurrentFocusedInnerChanged,
    focusSelf,
    imperativeHandle,
    multiSelectionDisabled,
    singleSelectionDisabled,
    getChildren,
    hideBecausePaginated,
    hideBecauseStaggered,
    parentIsPaginated,
    parentIsStaggered,
    props: props1,
    childUseEffect,
    initiallyMultiSelected,
    onMultiSelectChange,
    selected,
    navigatePastEnd,
    navigatePastStart,
    onTabbableIndexChange,
    initiallyTabbedIndex,
    onNavigateTypeahead,
    collator,
    noTypeahead,
    typeaheadTimeout,
    ...void1
}: GridlistRowInnerProps<GridlistRowElement, GridlistCellElement, GridlistRowInfo<GridlistRowElement>>) {
    const focusSelfDefault = useCallback((e: any) => { focus(e); }, []);
    assertEmptyObject(void1);

    useEffect(childUseEffect, [childUseEffect]);

    const {
        hasCurrentFocusReturn,
        managedChildReturn,
        multiSelectionChildReturn,
        pressReturn,
        props: props2,
        refElementReturn,
        context,
        linearNavigationReturn,
        managedChildrenReturn,
        pressParameters,
        rovingTabIndexReturn,
        typeaheadNavigationReturn,
        rovingTabIndexChildReturn,
        singleSelectionChildReturn,
        textContentReturn
    } = useGridlistRow<GridlistRowElement, GridlistCellElement>({
        info: {
            index,
            untabbable: untabbable || false,
            ...uinfo
        },
        context: useContextWithWarning(GridlistContext, "listbox"),
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
    })

    return useComponent(
        imperativeHandle,
        render,
        null,
        {
            hasCurrentFocusReturn,
            multiSelectionChildReturn,
            linearNavigationReturn,
            context,
            managedChildrenReturn,
            pressParameters,
            rovingTabIndexReturn,
            typeaheadNavigationReturn,
            props: useMergedProps(props1, props2),
            rovingTabIndexChildReturn,
            singleSelectionChildReturn,
            textContentReturn,
            managedChildReturn,
            //paginatedChildReturn: { hideBecausePaginated, parentIsPaginated },
            staggeredChildReturn: { hideBecauseStaggered, parentIsStaggered },
        });
})*/

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
