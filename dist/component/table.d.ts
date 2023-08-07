import { OmitStrong } from "preact-prop-helpers";
import { Get12, Get4, Get8 } from "../props.js";
import { TableCellInfo, TableRowInfo, UseTableCellParameters, UseTableCellReturnType, UseTableParameters, UseTableReturnType, UseTableRowParameters, UseTableRowReturnType, UseTableSectionParameters, UseTableSectionReturnType } from "../use-table.js";
import { GenericComponentProps } from "./util.js";
export type TableProps<TableElement extends Element, LabelElement extends Element> = GenericComponentProps<UseTableReturnType<TableElement, LabelElement>, Get4<UseTableParameters<TableElement, LabelElement>, "labelParameters", "tableParameters", "singleSelectionParameters", "multiSelectionParameters">, "tagTable">;
export type TableSectionProps<SectionElement extends Element, RowElement extends Element, RM extends TableRowInfo<RowElement> = TableRowInfo<RowElement>> = GenericComponentProps<UseTableSectionReturnType<SectionElement, RowElement, RM>, Get12<UseTableSectionParameters<SectionElement, RowElement, RM>, "gridNavigationParameters", "linearNavigationParameters", "rearrangeableChildrenParameters", "rovingTabIndexParameters", "singleSelectionParameters", "typeaheadNavigationParameters", "paginatedChildrenParameters", "staggeredChildrenParameters", "tableSectionParameters", "refElementParameters", "singleSelectionParameters", "multiSelectionParameters">, "tagTableSection" | "location">;
export type TableRowProps<RowElement extends Element, CellElement extends Element, RM extends TableRowInfo<RowElement>, CM extends TableCellInfo<CellElement>> = GenericComponentProps<UseTableRowReturnType<RowElement, CellElement, RM, CM>, Get8<UseTableRowParameters<RowElement, CellElement, TableRowInfo<RowElement>, CM>, "textContentParameters", "tableRowParameters", "linearNavigationParameters", "rovingTabIndexParameters", "info", "hasCurrentFocusParameters", "singleSelectionChildParameters", "multiSelectionChildParameters">, "index" | "tagTableRow"> & {
    info?: OmitStrong<RM, keyof TableRowInfo<RowElement>>;
};
export type TableCellProps<CellElement extends Element, CM extends TableCellInfo<CellElement>> = GenericComponentProps<UseTableCellReturnType<CellElement, CM>, Get4<UseTableCellParameters<CellElement, TableCellInfo<CellElement>>, "tableCellParameters", "gridNavigationCellParameters", "textContentParameters", "info">, "index" | "tagTableCell" | "getSortValue"> & {
    info?: OmitStrong<CM, keyof TableCellInfo<CellElement>>;
};
export declare const Table: <TableElement extends Element, LabelElement extends Element>({ ariaLabel, singleSelectionMode, multiSelectionMode, tagTable, imperativeHandle, render, ...void1 }: TableProps<TableElement, LabelElement>) => import("preact").JSX.Element;
export declare const TableSection: <SectionElement extends Element, RowElement extends Element, CellElement extends Element>({ disableHomeEndKeys, getIndex, initiallySingleSelectedIndex, untabbable, navigatePastEnd, navigatePastStart, onSingleSelectedIndexChange, onTabbableColumnChange, onTabbableIndexChange, pageNavigationSize, paginationMax, paginationMin, staggered, render, location, imperativeHandle, multiSelectionAriaPropName, onSelectionChange, singleSelectionAriaPropName, onNavigateLinear, collator, noTypeahead, onNavigateTypeahead, typeaheadTimeout, tagTableSection, onElementChange, onMount, onUnmount, ...void1 }: TableSectionProps<SectionElement, RowElement, TableRowInfo<RowElement>>) => import("preact").JSX.Element;
export declare const TableRow: <RowElement extends Element, CellElement extends Element>({ index, getText, tagTableRow, onTabbableIndexChange, navigatePastEnd, navigatePastStart, selected, initiallyTabbedIndex, untabbable, info, imperativeHandle, onCurrentFocusedChanged, onCurrentFocusedInnerChanged, render, initiallyMultiSelected, multiSelectionDisabled, onMultiSelectChange, singleSelectionDisabled, ...void1 }: TableRowProps<RowElement, CellElement, TableRowInfo<RowElement>, TableCellInfo<CellElement>>) => import("preact").JSX.Element;
export declare const TableCell: <CellElement extends Element>({ index, getText, focusSelf, untabbable, tagTableCell, render, colSpan, imperativeHandle, getSortValue, info, ...void1 }: TableCellProps<CellElement, TableCellInfo<CellElement>>) => import("preact").JSX.Element;
//# sourceMappingURL=table.d.ts.map