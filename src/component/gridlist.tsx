import { Ref, TargetedOmit, UseCompleteGridNavigationRowReturnType, UseCompleteGridNavigationRowsInfo, UseCompleteGridNavigationRowsParameters, UseCompleteGridNavigationRowsReturnType, UsePaginatedChildParameters, UseProcessedChildContext, UseProcessedChildInfo, UseProcessedChildReturnType, UseProcessedChildrenContext, UseRefElementParameters, UseRefElementReturnType, UseStaggeredChildParameters, VNode, assertEmptyObject, createContext, focus, memo, useCompleteGridNavigationRows, useContext, useEffect, useImperativeHandle, useMergedProps, useProcessedChild, useRefElement, useStableCallback } from "preact-prop-helpers";
import { Get, Get12, Get3, Get4, Get8, OmitStrong, useContextWithWarning } from "../props.js";
import { GridlistCellInfo, GridlistRowInfo, UseGridlistCellParameters, UseGridlistCellReturnType, UseGridlistContext, UseGridlistParameters, UseGridlistReturnType, UseGridlistRowContext, UseGridlistRowParameters, UseGridlistRowReturnType, useGridlist, useGridlistCell, useGridlistRow } from "../use-gridlist.js";
import { GenericComponentProps, useComponent, useComponentC, useDefault } from "./util.js";

export type GridlistProps<GridlistElement extends Element, GridlistRowElement extends Element, LabelElement extends Element, RM extends GridlistRowInfo<GridlistRowElement> = GridlistRowInfo<GridlistRowElement>> = GenericComponentProps<
    UseGridlistReturnType<GridlistElement, GridlistRowElement, LabelElement, RM>,
    Get12<UseGridlistParameters<GridlistElement, GridlistRowElement, LabelElement, RM>, "linearNavigationParameters", "rovingTabIndexParameters", "typeaheadNavigationParameters", "gridNavigationParameters", "paginatedChildrenParameters", "labelParameters", "listboxParameters", "singleSelectionParameters", "refElementParameters", "singleSelectionDeclarativeParameters", "singleSelectionParameters", "multiSelectionParameters">,
    "groupingType" | "ariaLabel" | "singleSelectedIndex"
>;

interface GridlistRowInnerPropsBase<GridlistRowElement extends Element, GridlistCellElement extends Element, RM extends GridlistRowInfo<GridlistRowElement> = GridlistRowInfo<GridlistRowElement>, CM extends GridlistCellInfo<GridlistCellElement> = GridlistCellInfo<GridlistCellElement>> extends
    Get8<UseGridlistRowParameters<GridlistRowElement, GridlistCellElement, RM, CM>, "gridlistRowParameters", "textContentParameters", "hasCurrentFocusParameters", "singleSelectionChildParameters", "multiSelectionChildParameters", "linearNavigationParameters", "typeaheadNavigationParameters", "rovingTabIndexParameters">,
    //OmitStrong<NonNullable<Get<UseGridlistRowParameters<GridlistRowElement, GridlistCellElement, RM, CM>, "gridlistRowParameters">>, never>,
    Pick<RM, "index"> {
}


type InnerOuterDifference<ListItemElement extends Element> = OmitStrong<Get3<UseProcessedChildReturnType<ListItemElement, UseProcessedChildInfo<ListItemElement>>, "managedChildReturn", "paginatedChildReturn", "staggeredChildReturn">, "getChildren">;

interface GridlistRowInnerProps<GridlistRowElement extends Element, GridlistCellElement extends Element, RM extends GridlistRowInfo<GridlistRowElement> = GridlistRowInfo<GridlistRowElement>, CM extends GridlistCellInfo<GridlistCellElement> = GridlistCellInfo<GridlistCellElement>> extends
    GenericComponentProps<
        (
            TargetedOmit<UseProcessedChildReturnType<GridlistRowElement, UseProcessedChildInfo<GridlistRowElement>>, "staggeredChildReturn", "childUseEffect"> &
            TargetedOmit<UseProcessedChildReturnType<GridlistRowElement, UseProcessedChildInfo<GridlistRowElement>>, "paginatedChildReturn", never> &
            OmitStrong<UseProcessedChildReturnType<GridlistRowElement, UseProcessedChildInfo<GridlistRowElement>>, "staggeredChildReturn" | "managedChildReturn" | "refElementParameters" | "paginatedChildReturn"> &
            Partial<UseGridlistRowReturnType<GridlistRowElement, GridlistCellElement, RM, CM>>
        ),
        GridlistRowInnerPropsBase<GridlistRowElement, GridlistCellElement, RM, CM>,
        "index">,
    InnerOuterDifference<GridlistRowElement> {
    props: UseProcessedChildReturnType<GridlistRowElement, UseProcessedChildInfo<GridlistRowElement>>["props"];
}

type UseProcessedGridlistRowReturnType<GridlistRowElement extends Element> = OmitStrong<UseProcessedChildReturnType<GridlistRowElement, any>, "refElementParameters"> & Pick<UseRefElementReturnType<GridlistRowElement>, "refElementReturn">;

export interface GridlistRowProps<GridlistRowElement extends Element, GridlistCellElement extends Element, RM extends GridlistRowInfo<GridlistRowElement> = GridlistRowInfo<GridlistRowElement>, CM extends GridlistCellInfo<GridlistCellElement> = GridlistCellInfo<GridlistCellElement>> extends
    // Parameters used by the inner implementation
    OmitStrong<GridlistRowInnerProps<GridlistRowElement, GridlistCellElement, GridlistRowInfo<GridlistRowElement>>, keyof InnerOuterDifference<any> | "render" | "imperativeHandle" | "props">,

    // Parameters used by the outer wrapper
    Get<UseStaggeredChildParameters, "info">,
    Get<UsePaginatedChildParameters, "info">,
    Partial<Get<UseRefElementParameters<GridlistRowElement>, "refElementParameters">> {

    // Overloaded depending on if we bail out early or not
    imperativeHandle?:
    Ref<{ hidden: true } & UseProcessedGridlistRowReturnType<GridlistRowElement>> |
    Ref<{ hidden?: false } & UseProcessedGridlistRowReturnType<GridlistRowElement> & UseCompleteGridNavigationRowReturnType<GridlistRowElement, GridlistCellElement, RM, CM>>;

    // Overloaded depending on if we bail out early or not
    render: {
        // Called with these parameters if we bail out early due to pagination/staggering
        (info: { hidden: true } & UseProcessedGridlistRowReturnType<GridlistRowElement>): VNode;
        // Called with these parameters if we rendered fully (i.e. this child is not currently hidden due to pagination/staggering)
        (info: { hidden?: false } & UseProcessedGridlistRowReturnType<GridlistRowElement> & UseCompleteGridNavigationRowReturnType<GridlistRowElement, GridlistCellElement, RM, CM>): VNode;
    }

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

export const Gridlist = /* @__PURE__ */ memo((function Gridlist<GridlistElement extends Element, RowElement extends Element, CellElement extends Element, LabelElement extends Element>({
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
    initiallyTabbableColumn,
    ...void1
}: GridlistProps<GridlistElement, RowElement, LabelElement, GridlistRowInfo<RowElement>>) {
    assertEmptyObject(void1);

    return useComponentC(
        imperativeHandle,
        render,
        GridlistContext,
        GridlistRowsContext,
        useGridlist<GridlistElement, RowElement, LabelElement>({
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
                initiallyTabbableColumn: initiallyTabbableColumn || 0
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
}));


export type GridlistRowsProps<GridlistRowElement extends Element> = GenericComponentProps<
    UseCompleteGridNavigationRowsReturnType<GridlistRowElement, UseCompleteGridNavigationRowsInfo<GridlistRowElement>>,
    Get4<UseCompleteGridNavigationRowsParameters<GridlistRowElement, UseCompleteGridNavigationRowsInfo<GridlistRowElement>>, "managedChildrenParameters", "paginatedChildrenParameters", "rearrangeableChildrenParameters", "staggeredChildrenParameters">,
    "children"
>;

export const GridlistRows = /* @__PURE__ */ memo((function GridlistRows<RowElement extends Element>({
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
}))


export const GridlistRow = /* @__PURE__ */ memo((function GridlistRow<RowElement extends Element, CellElement extends Element>({
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
    onTextContentChange,
    ...void1
}: GridlistRowProps<RowElement, CellElement>) {
    assertEmptyObject(void1);

    const {
        propsStable,
        refElementReturn
    } = useRefElement<RowElement>({
        refElementParameters: {
            onElementChange: useStableCallback((...a) => { oec1?.(...a); oec2?.(...a); }),
            onMount,
            onUnmount
        }
    });

    const { props, refElementParameters: { onElementChange: oec2 }, ...i2 } = useProcessedChild<RowElement, UseProcessedChildInfo<RowElement>>({
        context: useContextWithWarning(ProcessedChildContext, "ListboxChildren"),
        info: { index }
    })

    const {
        managedChildReturn: { getChildren },
        paginatedChildReturn: { hideBecausePaginated, parentIsPaginated },
        staggeredChildReturn: { hideBecauseStaggered, parentIsStaggered, childUseEffect }
    } = i2;

    const props2 = useMergedProps(props, propsStable);
    const processedGridlistRowReturn = {
        hidden: true,
        ...i2,
        props: props2,
        refElementReturn,
        managedChildReturn: { getChildren }
    } as const;
    const retIfHidden = render(processedGridlistRowReturn);
    if (hideBecausePaginated || hideBecauseStaggered) {
        return retIfHidden;
    }
    else {
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
                getText={getText}
                imperativeHandle={imperativeHandle as any}
                multiSelectionDisabled={multiSelectionDisabled}
                onCurrentFocusedChanged={onCurrentFocusedChanged}
                onCurrentFocusedInnerChanged={onCurrentFocusedInnerChanged}
                singleSelectionDisabled={singleSelectionDisabled}
                untabbable={untabbable}
                hideBecausePaginated={hideBecausePaginated}
                hideBecauseStaggered={hideBecauseStaggered}
                parentIsPaginated={parentIsPaginated}
                parentIsStaggered={parentIsStaggered}
                childUseEffect={childUseEffect}
                onTextContentChange={onTextContentChange}
                props={props2}
                {...void1}
            />
        );
    }
}))

const GridlistRowInner = /* @__PURE__ */ memo((function GridlistRowInner<RowElement extends Element, CellElement extends Element>({
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
    childUseEffect,
    hideBecausePaginated,
    hideBecauseStaggered,
    parentIsPaginated,
    parentIsStaggered,
    props: props1,
    onTextContentChange,
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
            untabbable: untabbable || false
            //...uinfo
        },
        context: useContextWithWarning(GridlistContext, "gridlist"),
        gridlistRowParameters: { selected },
        textContentParameters: { getText: useDefault("getText", getText), onTextContentChange },
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
}))


export const GridlistChild = /* @__PURE__ */ memo((function GridlistChild<CellElement extends Element>({
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
    onTextContentChange,
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
            ...subInfo
        },
        context,
        gridNavigationCellParameters: { colSpan: colSpan ?? 1 },
        textContentParameters: { getText: useDefault("getText", getText), onTextContentChange },
        pressParameters: { onPressSync, longPressThreshold, onPressingChange }
    });

    useImperativeHandle(imperativeHandle!, () => info);

    return render(info);
}));
