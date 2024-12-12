import { createContext } from "preact";
import { OmitStrong, VNode, assertEmptyObject, identity, useContext, useEnsureStability } from "preact-prop-helpers";
import { Get12, Get16, Get2, Get3, Get4, Prefices } from "../props.js";
import { UseGridlistCellContext, UseGridlistCellInfo, UseGridlistCellParameters, UseGridlistCellReturnType, UseGridlistParameters, UseGridlistReturnType, UseGridlistRowContext, UseGridlistRowInfo, UseGridlistRowOuterParameters, UseGridlistRowOuterReturnType, UseGridlistRowParameters, UseGridlistRowReturnType, UseGridlistRowsContext, UseGridlistRowsInfo, useGridlist, useGridlistCell, useGridlistRow, useGridlistRowOuter } from "../use-gridlist.js";
import { GenericComponentProps, useComponent, useComponentC, useDefault } from "./util.js";

const GridlistRowContext = createContext<UseGridlistRowContext<any, any>>(null!);
const GridlistCellContext = createContext<UseGridlistCellContext<any, any>>(null!);
const GridlistProcessedChildrenContext = createContext<UseGridlistRowsContext<any, any>>(null!);

export type GridlistProps<TableElement extends Element, RowElement extends Element, LabelElement extends Element> = GenericComponentProps<
    UseGridlistReturnType<TableElement, RowElement, LabelElement>,
    Get16<UseGridlistParameters<TableElement, RowElement>, "labelParameters", "singleSelectionParameters", "multiSelectionParameters", "gridNavigationParameters", "linearNavigationParameters", "typeaheadNavigationParameters", "rovingTabIndexParameters", "refElementParameters", "paginatedChildrenParameters", "rearrangeableChildrenParameters", "linearNavigationParameters", "paginatedChildrenParameters", "staggeredChildrenParameters", "managedChildrenParameters", "singleSelectionDeclarativeParameters", "gridNavigationCompleteParameters">,
    "children"
>;

type GridlistRowOuterProps<RowElement extends Element, RsM extends UseGridlistRowsInfo<RowElement>> = GenericComponentProps<
    UseGridlistRowOuterReturnType<RowElement, RsM>,
    Get3<UseGridlistRowOuterParameters<RowElement, RsM>, "info", "refElementParameters", "rearrangeableChildParameters">,
    "index"
>;

type GridlistRowInnerProps<RowElement extends Element, CellElement extends Element, RM extends UseGridlistRowInfo<RowElement>, CM extends UseGridlistCellInfo<CellElement>> = GenericComponentProps<
    UseGridlistRowReturnType<RowElement, CellElement, RM, CM>,
    Get12<UseGridlistRowParameters<RowElement, CellElement, RM, CM>, "info", "refElementParameters", "rovingTabIndexParameters", "refElementParameters", "multiSelectionChildParameters", "multiSelectionChildDeclarativeParameters", "linearNavigationParameters", "hasCurrentFocusParameters", "typeaheadNavigationParameters", "textContentParameters", "singleSelectionChildParameters", "rovingTabIndexParameters">,
    "index"
>;
type GridlistCellProps<CellElement extends Element, CM extends UseGridlistCellInfo<CellElement>> = GenericComponentProps<
    UseGridlistCellReturnType<CellElement, CM>,
    Get4<UseGridlistCellParameters<CellElement, CM>, "info", "pressParameters", "gridNavigationCellParameters", "textContentParameters">,
    "index"
>;

export type GridlistRowProps<RowElement extends Element, CellElement extends Element, RsM extends UseGridlistRowsInfo<RowElement> = UseGridlistRowsInfo<RowElement>, RM extends UseGridlistRowInfo<RowElement> = UseGridlistRowInfo<RowElement>, CM extends UseGridlistCellInfo<CellElement> = UseGridlistCellInfo<CellElement>> = 
OmitStrong<GridlistRowOuterProps<RowElement, RsM>, "render"> & 
OmitStrong<GridlistRowInnerProps<RowElement, CellElement, RM, CM>, "render"> & {
    render: ((info: ({ hide: true } & UseGridlistRowOuterReturnType<RowElement, RsM>) | ({ hide: false } & UseGridlistRowReturnType<RowElement, CellElement, RM, CM>)) => VNode);
};

export function Gridlist<TableElement extends Element, RowElement extends Element, LabelElement extends Element>({
    render,
    ariaLabel,
    collator,
    disableHomeEndKeys,
    focusSelfParent,
    imperativeHandle,
    initiallyTabbableColumn,
    multiSelectionAriaPropName,
    multiSelectionMode,
    navigatePastEnd,
    navigatePastStart,
    noTypeahead,
    onElementChange,
    onLabelClick,
    onMount,
    onNavigateLinear,
    onNavigateTypeahead,
    onSelectionChange,
    onTabbableColumnChange,
    onTabbableIndexChange,
    onUnmount,
    pageNavigationSize,
    paginationMax,
    paginationMin,
    singleSelectionAriaPropName,
    singleSelectionMode,
    typeaheadTimeout,
    untabbable,
    children,
    staggered,
    onAfterChildLayoutEffect,
    onChildrenCountChange,
    onChildrenMountChange,
    onSingleSelectedIndexChange,
    singleSelectedIndex,
    getSortColumn,
    getSortValueAt,
    ...void1
}: GridlistProps<TableElement, RowElement, LabelElement>) {
    getSortValueAt ??= identity;
    useEnsureStability("Gridlist", getSortValueAt);
    assertEmptyObject(void1);
    return useComponentC(
        imperativeHandle,
        render,
        GridlistRowContext,
        GridlistProcessedChildrenContext,
        useGridlist({
            gridNavigationParameters: {
                initiallyTabbableColumn: initiallyTabbableColumn || 0,
                onTabbableColumnChange
            },
            labelParameters: {
                ariaLabel,
                onLabelClick: onLabelClick || null
            },
            linearNavigationParameters: {
                disableHomeEndKeys: useDefault("disableHomeEndKeys", disableHomeEndKeys),
                navigatePastEnd: navigatePastEnd || "wrap",
                navigatePastStart: navigatePastStart || "wrap",
                onNavigateLinear,
                pageNavigationSize
            },
            managedChildrenParameters: {
                onAfterChildLayoutEffect,
                onChildrenCountChange,
                onChildrenMountChange
            },
            multiSelectionParameters: {
                multiSelectionAriaPropName,
                multiSelectionMode: useDefault("multiSelectionMode", multiSelectionMode),
                onSelectionChange,
            },
            paginatedChildrenParameters: {
                paginationMax,
                paginationMin

            },
            randomIdInputParameters: {
                prefix: Prefices.gridlist
            },
            randomIdLabelParameters: {
                prefix: Prefices.gridlistLabel
            },
            rearrangeableChildrenParameters: {
                children,
            },
            processedIndexManglerParameters: {
                compare: null,
                getIndex: useDefault("getIndex", null)
            },
            refElementParameters: {
                onElementChange,
                onMount,
                onUnmount
            },
            rovingTabIndexParameters: {
                focusSelfParent: useDefault("focusSelf", focusSelfParent),
                onTabbableIndexChange,
                untabbable: untabbable || false
            },
            singleSelectionDeclarativeParameters: {
                onSingleSelectedIndexChange,
                singleSelectedIndex
            },
            singleSelectionParameters: {
                singleSelectionAriaPropName,
                singleSelectionMode: useDefault("singleSelectionMode", singleSelectionMode)
            },
            staggeredChildrenParameters: {
                staggered: staggered || false
            },
            typeaheadNavigationParameters: {
                collator,
                noTypeahead: noTypeahead || false,
                onNavigateTypeahead,
                typeaheadTimeout: useDefault("typeaheadTimeout", typeaheadTimeout)
            },
            gridNavigationCompleteParameters: {
                getSortColumn,
                getSortValueAt,
            }
        })
    )
}

export function GridlistRow<RowElement extends Element, CellElement extends Element>(props: GridlistRowProps<RowElement, CellElement>) {
    const { index, render, collator, getText, initiallyTabbedIndex, multiSelected, multiSelectionDisabled, navigatePastEnd, navigatePastStart, noTypeahead, onCurrentFocusedChanged, onCurrentFocusedInnerChanged, onMultiSelectedChange, onNavigateTypeahead, onTabbableIndexChange, onTextContentChange, singleSelectionDisabled, typeaheadTimeout, untabbable, imperativeHandle, onElementChange, onMount, onUnmount } = props;
    return (
        <GridlistRowOuter
            index={index}
            imperativeHandle={imperativeHandle}
            onElementChange={onElementChange}
            onMount={onMount}
            onUnmount={onUnmount}
            render={info => {
                if (info.hide) {
                    return render(info as never);
                }
                else {
                    return (
                        <GridlistRowInner
                        index={index}
                        render={render as never}
                        collator={collator}
                        getText={getText}
                        imperativeHandle={imperativeHandle}
                        initiallyTabbedIndex={initiallyTabbedIndex}
                        multiSelected={multiSelected}
                        multiSelectionDisabled={multiSelectionDisabled}
                        navigatePastEnd={navigatePastEnd}
                        navigatePastStart={navigatePastStart}
                        noTypeahead={noTypeahead}
                        onCurrentFocusedChanged={onCurrentFocusedChanged}
                        onCurrentFocusedInnerChanged={onCurrentFocusedInnerChanged}
                        onElementChange={onElementChange}
                        onMount={onMount}
                        onMultiSelectedChange={onMultiSelectedChange}
                        onNavigateTypeahead={onNavigateTypeahead}
                        onTabbableIndexChange={onTabbableIndexChange}
                        onTextContentChange={onTextContentChange}
                        onUnmount={onUnmount}
                        singleSelectionDisabled={singleSelectionDisabled}
                        typeaheadTimeout={typeaheadTimeout}
                        untabbable={untabbable}
                        />
                    )
                }
            }}
        />
    )
}

function GridlistRowOuter<RowElement extends Element, RsM extends UseGridlistRowsInfo<RowElement>>({
    index,
    render,
    imperativeHandle,
    onElementChange,
    onMount,
    onUnmount,
    cssProperty,
    duration
}: GridlistRowOuterProps<RowElement, RsM>) {
    return useComponent(
        imperativeHandle,
        render,
        null,
        useGridlistRowOuter<RowElement, RsM>({
            context: useContext(GridlistProcessedChildrenContext),
            info: { index },
            refElementParameters: {
                onElementChange,
                onMount,
                onUnmount
            },
            rearrangeableChildParameters: {
                cssProperty,
                duration
            }
        })
    );
}

function GridlistRowInner<RowElement extends Element, CellElement extends Element>({
    index,
    render,
    collator,
    getText,
    imperativeHandle,
    initiallyTabbedIndex,
    multiSelectionDisabled,
    navigatePastEnd,
    navigatePastStart,
    noTypeahead,
    onCurrentFocusedChanged,
    onCurrentFocusedInnerChanged,
    onElementChange,
    onMount,
    onNavigateTypeahead,
    onTabbableIndexChange,
    onTextContentChange,
    onUnmount,
    singleSelectionDisabled,
    typeaheadTimeout,
    untabbable,
    multiSelected,
    onMultiSelectedChange,
}: GridlistRowInnerProps<RowElement, CellElement, UseGridlistRowInfo<RowElement>, UseGridlistCellInfo<CellElement>>) {
    type RM = UseGridlistRowInfo<RowElement>;
    type CM = UseGridlistCellInfo<CellElement>;
    untabbable ||= false;
    return useComponent(
        imperativeHandle,
        render,
        GridlistCellContext,
        useGridlistRow<RowElement, CellElement, RM, CM>({
            context: useContext(GridlistRowContext),
            info: { index, untabbable },
            refElementParameters: {
                onElementChange,
                onMount,
                onUnmount
            },
            hasCurrentFocusParameters: {
                onCurrentFocusedChanged,
                onCurrentFocusedInnerChanged
            },
            linearNavigationParameters: {
                navigatePastEnd: navigatePastEnd || "wrap",
                navigatePastStart: navigatePastStart || "wrap"
            },
            multiSelectionChildDeclarativeParameters: {
                multiSelected: multiSelected ?? null,
                onMultiSelectedChange
            },
            multiSelectionChildParameters: {
                multiSelectionDisabled: multiSelectionDisabled || false
            },
            rovingTabIndexParameters: {
                initiallyTabbedIndex,
                onTabbableIndexChange,
                untabbable: untabbable
            },
            singleSelectionChildParameters: {
                singleSelectionDisabled: singleSelectionDisabled || false
            },
            textContentParameters: {
                getText: useDefault("getText", getText),
                onTextContentChange
            },
            typeaheadNavigationParameters: {
                collator,
                noTypeahead: noTypeahead || false,
                onNavigateTypeahead,
                typeaheadTimeout: useDefault("typeaheadTimeout", typeaheadTimeout)
            }
        })
    );
}



export function GridlistCell<CellElement extends Element>({
    index,
    render,
    getText,
    imperativeHandle,
    onTextContentChange,
    untabbable,
    allowRepeatPresses,
    colSpan,
    excludeEnter,
    excludePointer,
    excludeSpace,
    focusSelf,
    longPressThreshold,
    onPressSync,
    onPressingChange
}: GridlistCellProps<CellElement, UseGridlistCellInfo<CellElement>>) {
    type CM = UseGridlistCellInfo<CellElement>;
    untabbable ||= false;
    return useComponent(
        imperativeHandle,
        render,
        null,
        useGridlistCell<CellElement, CM>({
            context: useContext(GridlistCellContext),
            info: { index, untabbable, focusSelf: useDefault("focusSelf", focusSelf) },
            gridNavigationCellParameters: { colSpan },
            pressParameters: { allowRepeatPresses, excludeEnter, excludePointer, excludeSpace, longPressThreshold, onPressingChange, onPressSync },
            textContentParameters: { getText: useDefault("getText", getText), onTextContentChange }
        })
    );
}

