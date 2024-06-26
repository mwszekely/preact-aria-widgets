import { OmitStrong, Ref, TargetedOmit, UseCompleteGridNavigationRowReturnType, UseCompleteGridNavigationRowsInfo, UseCompleteGridNavigationRowsParameters, UseCompleteGridNavigationRowsReturnType, UsePaginatedChildParameters, UseProcessedChildContext, UseProcessedChildInfo, UseProcessedChildReturnType, UseProcessedChildrenContext, UseRefElementParameters, UseRefElementReturnType, UseStaggeredChildParameters, VNode, assertEmptyObject, createContext, focus, memo, useCompleteGridNavigationRows, useContext, useEffect, useMergedProps, useProcessedChild, useRefElement, useStableCallback } from "preact-prop-helpers";
import { Get, Get10, Get3, Get4, Get7, useContextWithWarning } from "../props.js";
import { TableCellInfo, TableRowInfo, UseTableCellParameters, UseTableCellReturnType, UseTableContext, UseTableParameters, UseTableReturnType, UseTableRowContext, UseTableRowParameters, UseTableRowReturnType, UseTableSectionContext, UseTableSectionParameters, UseTableSectionReturnType, useTable, useTableCell, useTableRow, useTableSection } from "../use-table.js";
import { GenericComponentProps, useComponent, useComponentC, useDefault } from "./util.js";

export type TableProps<TableElement extends Element, LabelElement extends Element> = GenericComponentProps<
    UseTableReturnType<TableElement, LabelElement>,
    Get4<UseTableParameters<TableElement>, "labelParameters", "tableParameters", "singleSelectionParameters", "multiSelectionParameters">,
    "tagTable"
>;

export type TableSectionProps<SectionElement extends Element, RowElement extends Element, RM extends TableRowInfo<RowElement> = TableRowInfo<RowElement>> = GenericComponentProps<
    UseTableSectionReturnType<SectionElement, RowElement, RM>,
    Get10<UseTableSectionParameters<SectionElement, RowElement, RM>, "gridNavigationParameters", "linearNavigationParameters", "rovingTabIndexParameters", "singleSelectionParameters", "typeaheadNavigationParameters", "paginatedChildrenParameters", "tableSectionParameters", "refElementParameters", "singleSelectionParameters", "multiSelectionParameters">,
    "tagTableSection" | "location"
>;

/*
export type TableRowProps<RowElement extends Element, CellElement extends Element, RM extends TableRowInfo<RowElement>, CM extends TableCellInfo<CellElement>> = GenericComponentProps<
    UseTableRowReturnType<RowElement, CellElement, RM, CM>,
    Get8<UseTableRowParameters<RowElement, CellElement, TableRowInfo<RowElement>, CM>, "textContentParameters", "tableRowParameters", "linearNavigationParameters", "rovingTabIndexParameters", "info", "hasCurrentFocusParameters", "singleSelectionChildParameters", "multiSelectionChildParameters">,
    "index" | "tagTableRow"
> & { info?: OmitStrong<RM, keyof TableRowInfo<RowElement>> };*/

interface TableRowInnerPropsBase<TableRowElement extends Element, TableCellElement extends Element, RM extends TableRowInfo<TableRowElement> = TableRowInfo<TableRowElement>, CM extends TableCellInfo<TableCellElement> = TableCellInfo<TableCellElement>> extends
    Get7<UseTableRowParameters<TableRowElement, TableCellElement, RM, CM>, "tableRowParameters", "textContentParameters", "hasCurrentFocusParameters", "singleSelectionChildParameters", "multiSelectionChildParameters", "linearNavigationParameters", "rovingTabIndexParameters">,
    //OmitStrong<NonNullable<Get<UseTableRowParameters<TableRowElement, TableCellElement, RM, CM>, "TableRowParameters">>, never>,
    Pick<RM, "index"> {
}


type InnerOuterDifference<ListItemElement extends Element> = OmitStrong<Get3<UseProcessedChildReturnType<ListItemElement, UseProcessedChildInfo<ListItemElement>>, "managedChildReturn", "paginatedChildReturn", "staggeredChildReturn">, "getChildren">;

interface TableRowInnerProps<TableRowElement extends Element, TableCellElement extends Element, RM extends TableRowInfo<TableRowElement> = TableRowInfo<TableRowElement>, CM extends TableCellInfo<TableCellElement> = TableCellInfo<TableCellElement>> extends
    GenericComponentProps<
        (
            TargetedOmit<UseProcessedChildReturnType<TableRowElement, UseProcessedChildInfo<TableRowElement>>, "staggeredChildReturn", "childUseEffect"> &
            OmitStrong<UseProcessedChildReturnType<TableRowElement, UseProcessedChildInfo<TableRowElement>>, "staggeredChildReturn" | "managedChildReturn" | "refElementParameters"> &
            Partial<UseTableRowReturnType<TableRowElement, TableCellElement, RM, CM>>
        ),
        TableRowInnerPropsBase<TableRowElement, TableCellElement, RM, CM>,
        "index">,
    InnerOuterDifference<TableRowElement> {
    props: UseProcessedChildReturnType<TableRowElement, UseProcessedChildInfo<TableRowElement>>["props"];
}

type UseProcessedTableRowReturnType<TableRowElement extends Element> = OmitStrong<UseProcessedChildReturnType<TableRowElement, any>, "refElementParameters"> & Pick<UseRefElementReturnType<TableRowElement>, "refElementReturn">;

export interface TableRowProps<TableRowElement extends Element, TableCellElement extends Element, RM extends TableRowInfo<TableRowElement> = TableRowInfo<TableRowElement>, CM extends TableCellInfo<TableCellElement> = TableCellInfo<TableCellElement>> extends
    // Parameters used by the inner implementation
    OmitStrong<TableRowInnerProps<TableRowElement, TableCellElement, TableRowInfo<TableRowElement>>, keyof InnerOuterDifference<any> | "render" | "imperativeHandle" | "props">,

    // Parameters used by the outer wrapper
    Get<UseStaggeredChildParameters, "info">,
    Get<UsePaginatedChildParameters, "info">,
    Partial<Get<UseRefElementParameters<TableRowElement>, "refElementParameters">> {

    // Overloaded depending on if we bail out early or not
    imperativeHandle?:
    Ref<{ hidden: true } & UseProcessedTableRowReturnType<TableRowElement>> |
    Ref<{ hidden?: false } & UseProcessedTableRowReturnType<TableRowElement> & UseCompleteGridNavigationRowReturnType<TableRowElement, TableCellElement, RM, CM>>;

    // Overloaded depending on if we bail out early or not
    render: {
        // Called with these parameters if we bail out early due to pagination/staggering
        (info: { hidden: true } & UseProcessedTableRowReturnType<TableRowElement>): VNode;
        // Called with these parameters if we rendered fully (i.e. this child is not currently hidden due to pagination/staggering)
        (info: { hidden?: false } & UseProcessedTableRowReturnType<TableRowElement> & UseCompleteGridNavigationRowReturnType<TableRowElement, TableCellElement, RM, CM>): VNode;
    }

}

export type TableCellProps<CellElement extends Element, CM extends TableCellInfo<CellElement>> = GenericComponentProps<
    UseTableCellReturnType<CellElement, CM>,
    Get4<UseTableCellParameters<CellElement, TableCellInfo<CellElement>>, "tableCellParameters", "gridNavigationCellParameters", "textContentParameters", "info">,
    "index" | "tagTableCell" | "getSortValue"
> & { info?: OmitStrong<CM, keyof TableCellInfo<CellElement>> };


const TableContext = createContext<UseTableContext>(null!);
const TableSectionContext = createContext<UseTableSectionContext<any, TableRowInfo<any>>>(null!);
const TableRowsContext = createContext<UseProcessedChildrenContext>(null!);
const ProcessedRowContext = createContext<UseProcessedChildContext<any, any>>(null!);
const TableRowContext = createContext<UseTableRowContext<any, TableCellInfo<any>>>(null!);

export const Table = /* @__PURE__ */ memo((function Table<TableElement extends Element, LabelElement extends Element>({
    ariaLabel,
    singleSelectionMode,
    multiSelectionMode,
    tagTable,
    imperativeHandle,
    render,
    ...void1
}: TableProps<TableElement, LabelElement>) {
    assertEmptyObject(void1);
    return useComponent(
        imperativeHandle,
        render,
        TableContext,
        useTable<TableElement, LabelElement>({
            labelParameters: { ariaLabel },
            tableParameters: { tagTable, },
            singleSelectionParameters: { singleSelectionMode: singleSelectionMode || "disabled" },
            multiSelectionParameters: { multiSelectionMode: multiSelectionMode || "disabled" },
        }));
}))

export const TableSection = /* @__PURE__ */ memo((function TableSection<SectionElement extends Element, RowElement extends Element>({
    disableHomeEndKeys,
    initiallySingleSelectedIndex,
    untabbable,
    navigatePastEnd,
    navigatePastStart,
    onSingleSelectedIndexChange,
    onTabbableColumnChange,
    onTabbableIndexChange,
    pageNavigationSize,
    paginationMax,
    paginationMin,
    render,
    location,
    imperativeHandle,
    multiSelectionAriaPropName,
    onSelectionChange,
    singleSelectionAriaPropName,
    onNavigateLinear,
    collator,
    noTypeahead,
    onNavigateTypeahead,
    typeaheadTimeout,
    tagTableSection,
    onElementChange,
    onMount,
    onUnmount,
    initiallyTabbableColumn,
    ...void1
}: TableSectionProps<SectionElement, RowElement, TableRowInfo<RowElement>>) {
    assertEmptyObject(void1);
    return useComponentC(
        imperativeHandle,
        render,
        TableSectionContext,
        TableRowsContext,
        useTableSection<SectionElement, RowElement>({
            gridNavigationParameters: {
                onTabbableColumnChange: onTabbableColumnChange,
                initiallyTabbableColumn: initiallyTabbableColumn || 0
            },
            typeaheadNavigationParameters: {
                onNavigateTypeahead,
                collator: useDefault("collator", collator),
                noTypeahead: useDefault("noTypeahead", noTypeahead),
                typeaheadTimeout: useDefault("typeaheadTimeout", typeaheadTimeout)
            },
            linearNavigationParameters: {
                onNavigateLinear,
                disableHomeEndKeys: useDefault("disableHomeEndKeys", disableHomeEndKeys),
                navigatePastEnd: navigatePastEnd ?? "wrap",
                navigatePastStart: navigatePastStart ?? "wrap",
                pageNavigationSize: useDefault("pageNavigationSize", pageNavigationSize)
            },
            paginatedChildrenParameters: {
                paginationMax,
                paginationMin,
            },
            rovingTabIndexParameters: {
                onTabbableIndexChange,
                untabbable: untabbable || false,
            },
            singleSelectionParameters: {
                initiallySingleSelectedIndex,
                onSingleSelectedIndexChange,
                singleSelectionAriaPropName
            },
            multiSelectionParameters: {
                multiSelectionAriaPropName,
                onSelectionChange,
            },
            contextChildren: useContextWithWarning(TableContext, "table"),
            tableSectionParameters: {
                tagTableSection,
                location
            },
            refElementParameters: { onElementChange, onMount, onUnmount }
        })
    );
}));










export type TableRowsProps<TableRowElement extends Element> = GenericComponentProps<
    UseCompleteGridNavigationRowsReturnType<TableRowElement, UseCompleteGridNavigationRowsInfo<TableRowElement>>,
    Get4<UseCompleteGridNavigationRowsParameters<TableRowElement, UseCompleteGridNavigationRowsInfo<TableRowElement>>, "managedChildrenParameters", "paginatedChildrenParameters", "rearrangeableChildrenParameters", "staggeredChildrenParameters">,
    "children"
>;

export const TableRows = /* @__PURE__ */ memo((function TableRows<RowElement extends Element>({
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
}: TableRowsProps<RowElement>) {
    return useComponent(
        imperativeHandle,
        render,
        ProcessedRowContext,
        useCompleteGridNavigationRows<RowElement, UseCompleteGridNavigationRowsInfo<RowElement>>({
            context: useContext(TableRowsContext),
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





export const TableRow = /* @__PURE__ */ memo((function TableRow<RowElement extends Element, CellElement extends Element>({
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
    initiallyMultiSelected,
    initiallyTabbedIndex,
    navigatePastEnd,
    navigatePastStart,
    onMultiSelectChange,
    onTabbableIndexChange,
    selected,
    tagTableRow,
    onTextContentChange,
    ...void1
}: TableRowProps<RowElement, CellElement>) {
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
        context: useContextWithWarning(ProcessedRowContext, "ListboxChildren"),
        info: { index }
    })

    const {
        managedChildReturn: { getChildren },
        paginatedChildReturn: { hideBecausePaginated, parentIsPaginated },
        staggeredChildReturn: { hideBecauseStaggered, parentIsStaggered, childUseEffect }
    } = i2;

    const props2 = useMergedProps(props, propsStable);
    const processedTableRowReturn = {
        hidden: true,
        ...i2,
        props: props2,
        refElementReturn,
        managedChildReturn: { getChildren }
    } as const;
    const retIfHidden = render(processedTableRowReturn);
    if (hideBecausePaginated || hideBecauseStaggered) {
        return retIfHidden;
    }
    else {
        return (
            <TableRowInner
                index={index}
                render={render}
                initiallyMultiSelected={initiallyMultiSelected}
                initiallyTabbedIndex={initiallyTabbedIndex}
                navigatePastEnd={navigatePastEnd}
                navigatePastStart={navigatePastStart}
                onMultiSelectChange={onMultiSelectChange}
                onTabbableIndexChange={onTabbableIndexChange}
                selected={selected}
                tagTableRow={tagTableRow}
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



const TableRowInner = /* @__PURE__ */ memo((function TableRowInner<RowElement extends Element, CellElement extends Element>({
    index,
    getText,
    tagTableRow,
    onTabbableIndexChange,
    navigatePastEnd,
    navigatePastStart,
    selected,
    initiallyTabbedIndex,
    untabbable,
    imperativeHandle,
    onCurrentFocusedChanged,
    onCurrentFocusedInnerChanged,
    render,
    initiallyMultiSelected,
    multiSelectionDisabled,
    onMultiSelectChange,
    singleSelectionDisabled,
    childUseEffect,
    hideBecausePaginated,
    hideBecauseStaggered,
    parentIsPaginated,
    parentIsStaggered,
    onTextContentChange,
    props: props1,
    ...void1
}: TableRowInnerProps<RowElement, CellElement, TableRowInfo<RowElement>, TableCellInfo<CellElement>>) {

    assertEmptyObject(void1);


    const {
        props: props2,
        context,
        hasCurrentFocusReturn,
        linearNavigationReturn,
        managedChildReturn,
        managedChildrenReturn,
        multiSelectionChildReturn,
        pressParameters,
        refElementReturn,
        rovingTabIndexChildReturn,
        rovingTabIndexReturn,
        singleSelectionChildReturn,
        textContentReturn,
        typeaheadNavigationReturn,
    } =
        useTableRow<RowElement, CellElement>({
            info: {
                index,
                untabbable: untabbable || false
            },
            context: useContextWithWarning(TableSectionContext, "table section") as UseTableSectionContext<RowElement, TableRowInfo<RowElement>>,
            textContentParameters: {
                getText: useDefault("getText", getText),
                onTextContentChange
            },
            tableRowParameters: {
                selected,
                tagTableRow: tagTableRow || ("tr" as never)
            },
            hasCurrentFocusParameters: {
                onCurrentFocusedChanged,
                onCurrentFocusedInnerChanged,
            },
            linearNavigationParameters: {
                navigatePastEnd: navigatePastEnd || "wrap",
                navigatePastStart: navigatePastStart || "wrap"
            },
            rovingTabIndexParameters: {
                onTabbableIndexChange: onTabbableIndexChange || null,
                initiallyTabbedIndex: initiallyTabbedIndex ?? null,
                untabbable: untabbable || false
            },
            singleSelectionChildParameters: { singleSelectionDisabled: singleSelectionDisabled || false },
            multiSelectionChildParameters: { multiSelectionDisabled: multiSelectionDisabled || false, initiallyMultiSelected: initiallyMultiSelected || false, onMultiSelectChange }
        })

    useEffect(childUseEffect, [childUseEffect]);

    return useComponent(
        imperativeHandle,
        render,
        TableRowContext,
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

export const TableCell = /* @__PURE__ */ memo((function TableCell<CellElement extends Element>({
    index,
    getText,
    focusSelf,
    untabbable,
    tagTableCell,
    render,
    colSpan,
    imperativeHandle,
    getSortValue,
    onTextContentChange,
    info: uinfo,
    ...void1
}: TableCellProps<CellElement, TableCellInfo<CellElement>>) {
    const defaultFocusSelf = useStableCallback((e: CellElement) => { focus(e as Element as HTMLElement) }, []);
    assertEmptyObject(void1);
    return useComponent(
        imperativeHandle,
        render,
        null,
        useTableCell<CellElement>({
            info: {
                index,
                focusSelf: focusSelf ?? defaultFocusSelf,
                untabbable: untabbable || false,
                getSortValue,
                ...uinfo
            },
            context: useContextWithWarning(TableRowContext, "table row") as UseTableRowContext<CellElement, TableCellInfo<CellElement>>,
            gridNavigationCellParameters: {
                colSpan: colSpan ?? 1
            },
            tableCellParameters: {
                tagTableCell
            },
            textContentParameters: {
                getText: useDefault("getText", getText),
                onTextContentChange,
            }
        }))

}))

