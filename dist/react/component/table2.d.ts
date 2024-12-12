import { OmitStrong, Ref, TargetedOmit, UseCompleteGridNavigationRowReturnType, UseCompleteGridNavigationRowsInfo, UsePaginatedChildParameters, UseProcessedChildInfo, UseProcessedChildReturnType, UseRefElementParameters, UseRefElementReturnType, UseStaggeredChildParameters, VNode } from "preact-prop-helpers";
import { Get, Get11, Get3, Get4, Get5, Get7 } from "../props.js";
import { TableCellInfo, TableRowInfo, UseTableBodyParameters, UseTableBodyReturnType, UseTableCellParameters, UseTableCellReturnType, UseTableHeadParameters, UseTableHeadReturnType, UseTableParameters, UseTableReturnType, UseTableRowParameters, UseTableRowReturnType } from "../use-table2.js";
import { GenericComponentProps } from "./util.js";
export type TableProps<TableElement extends Element, RowElement extends Element, LabelElement extends Element> = GenericComponentProps<UseTableReturnType<TableElement, RowElement, LabelElement>, Get11<UseTableParameters<TableElement, RowElement>, "labelParameters", "tableParameters", "singleSelectionParameters", "multiSelectionParameters", "gridNavigationParameters", "linearNavigationParameters", "typeaheadNavigationParameters", "rovingTabIndexParameters", "refElementParameters", "paginatedChildrenParameters", "linearNavigationParameters">, "tagTable">;
export type TableBodyProps<SectionElement extends Element, RowElement extends Element, RsM extends UseCompleteGridNavigationRowsInfo<RowElement> = UseCompleteGridNavigationRowsInfo<RowElement>> = GenericComponentProps<UseTableBodyReturnType<SectionElement, RowElement, RsM>, Get5<UseTableBodyParameters<SectionElement, RowElement, RsM>, "paginatedChildrenParameters", "tableSectionParameters", "staggeredChildrenParameters", "rearrangeableChildrenParameters", "managedChildrenParameters">, "tagTableSection" | "children">;
export type TableHeadProps<SectionElement extends Element> = GenericComponentProps<UseTableHeadReturnType<SectionElement>, Get<UseTableHeadParameters<SectionElement>, "tableHeadParameters">, "tagHead">;
interface TableRowInnerPropsBase<TableRowElement extends Element, TableCellElement extends Element, RM extends TableRowInfo<TableRowElement> = TableRowInfo<TableRowElement>, CM extends TableCellInfo<TableCellElement> = TableCellInfo<TableCellElement>> extends Get7<UseTableRowParameters<TableRowElement, TableCellElement, RM, CM>, "tableRowParameters", "textContentParameters", "hasCurrentFocusParameters", "singleSelectionChildParameters", "multiSelectionChildParameters", "linearNavigationParameters", "rovingTabIndexParameters">, Pick<RM, "index"> {
}
type InnerOuterDifference<ListItemElement extends Element> = OmitStrong<Get3<UseProcessedChildReturnType<ListItemElement, UseProcessedChildInfo<ListItemElement>>, "managedChildReturn", "paginatedChildReturn", "staggeredChildReturn">, "getChildren">;
interface TableRowInnerProps<TableRowElement extends Element, TableCellElement extends Element, RM extends TableRowInfo<TableRowElement> = TableRowInfo<TableRowElement>, CM extends TableCellInfo<TableCellElement> = TableCellInfo<TableCellElement>> extends GenericComponentProps<(TargetedOmit<UseProcessedChildReturnType<TableRowElement, UseProcessedChildInfo<TableRowElement>>, "staggeredChildReturn", "childUseEffect"> & OmitStrong<UseProcessedChildReturnType<TableRowElement, UseProcessedChildInfo<TableRowElement>>, "staggeredChildReturn" | "managedChildReturn" | "refElementParameters"> & Partial<UseTableRowReturnType<TableRowElement, TableCellElement, RM, CM>>), TableRowInnerPropsBase<TableRowElement, TableCellElement, RM, CM>, "index">, InnerOuterDifference<TableRowElement> {
    props: UseProcessedChildReturnType<TableRowElement, UseProcessedChildInfo<TableRowElement>>["props"];
}
type UseProcessedTableRowReturnType<TableRowElement extends Element> = OmitStrong<UseProcessedChildReturnType<TableRowElement, any>, "refElementParameters"> & Pick<UseRefElementReturnType<TableRowElement>, "refElementReturn">;
export interface TableRowProps<TableRowElement extends Element, TableCellElement extends Element, RM extends TableRowInfo<TableRowElement> = TableRowInfo<TableRowElement>, CM extends TableCellInfo<TableCellElement> = TableCellInfo<TableCellElement>> extends OmitStrong<TableRowInnerProps<TableRowElement, TableCellElement, TableRowInfo<TableRowElement>>, keyof InnerOuterDifference<any> | "render" | "imperativeHandle" | "props">, Get<UseStaggeredChildParameters, "info">, Get<UsePaginatedChildParameters, "info">, Partial<Get<UseRefElementParameters<TableRowElement>, "refElementParameters">> {
    imperativeHandle?: Ref<{
        hidden: true;
    } & UseProcessedTableRowReturnType<TableRowElement>> | Ref<{
        hidden?: false;
    } & UseProcessedTableRowReturnType<TableRowElement> & UseCompleteGridNavigationRowReturnType<TableRowElement, TableCellElement, RM, CM>>;
    render: {
        (info: {
            hidden: true;
        } & UseProcessedTableRowReturnType<TableRowElement>): VNode;
        (info: {
            hidden?: false;
        } & UseProcessedTableRowReturnType<TableRowElement> & UseTableRowReturnType<TableRowElement, TableCellElement, RM, CM>): VNode;
    };
}
export type TableCellProps<CellElement extends Element, CM extends TableCellInfo<CellElement>> = GenericComponentProps<UseTableCellReturnType<CellElement, CM>, Get4<UseTableCellParameters<CellElement, TableCellInfo<CellElement>>, "tableCellParameters", "gridNavigationCellParameters", "textContentParameters", "info">, "index" | "tagTableCell" | "getSortValue"> & {
    info?: OmitStrong<CM, keyof TableCellInfo<CellElement>>;
};
export declare const Table: <TableElement extends Element, RowElement extends Element, LabelElement extends Element>({ ariaLabel, singleSelectionMode, multiSelectionMode, tagTable, imperativeHandle, render, initiallySingleSelectedIndex, multiSelectionAriaPropName, onSelectionChange, onSingleSelectedIndexChange, singleSelectionAriaPropName, collator, disableHomeEndKeys, initiallyTabbableColumn, navigatePastEnd, navigatePastStart, noTypeahead, onElementChange, onMount, onNavigateLinear, onNavigateTypeahead, onTabbableColumnChange, onTabbableIndexChange, onUnmount, pageNavigationSize, paginationMax, paginationMin, typeaheadTimeout, untabbable, ...void1 }: TableProps<TableElement, RowElement, LabelElement>) => import("preact-prop-helpers").JSX.Element;
export declare const TableHead: <SectionElement extends Element>({ render, imperativeHandle, tagHead, ...void1 }: TableHeadProps<SectionElement>) => import("preact-prop-helpers").JSX.Element;
export declare const TableBody: <SectionElement extends Element, RowElement extends Element>({ paginationMax, paginationMin, render, imperativeHandle, tagTableSection, adjust, children, compare, getIndex, onAfterChildLayoutEffect, onChildrenCountChange, onChildrenMountChange, onRearranged, staggered, ...void1 }: TableBodyProps<SectionElement, RowElement, UseCompleteGridNavigationRowsInfo<RowElement>>) => import("preact-prop-helpers").JSX.Element;
export declare const TableRow: <RowElement extends Element, CellElement extends Element>({ index, render, imperativeHandle, onElementChange: oec1, onMount, onUnmount, getText, untabbable, onCurrentFocusedChanged, onCurrentFocusedInnerChanged, multiSelectionDisabled, singleSelectionDisabled, initiallyMultiSelected, initiallyTabbedIndex, navigatePastEnd, navigatePastStart, onMultiSelectChange, onTabbableIndexChange, selected, tagTableRow, onTextContentChange, ...void1 }: TableRowProps<RowElement, CellElement>) => import("preact-prop-helpers").JSX.Element;
export declare const TableCell: <CellElement extends Element>({ index, getText, focusSelf, untabbable, tagTableCell, render, colSpan, imperativeHandle, getSortValue, onTextContentChange, info: uinfo, ...void1 }: TableCellProps<CellElement, TableCellInfo<CellElement>>) => import("preact-prop-helpers").JSX.Element;
export {};
//# sourceMappingURL=table2.d.ts.map