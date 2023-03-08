import { Ref, VNode } from "preact";
import { OmitStrong } from "../props.js";
import { TableCellInfo, TableRowInfo, UseTableCellParameters, UseTableCellReturnType, UseTableParameters, UseTableReturnType, UseTableRowParameters, UseTableRowReturnType, UseTableSectionParameters, UseTableSectionReturnType } from "../use-table.js";
import { PartialExcept } from "./util.js";
type Get<T, K extends keyof T> = T[K];
type Get2<T, K extends keyof T, K2 extends keyof T[K]> = T[K][K2];
interface TablePropsBase<TableElement extends Element, LabelElement extends Element> extends Get<UseTableParameters<TableElement, LabelElement>, "labelParameters">, Get<UseTableParameters<TableElement, LabelElement>, "tableParameters"> {
    ref?: Ref<UseTableReturnType<TableElement, LabelElement>>;
}
interface TableSectionPropsBase<SectionElement extends Element, RowElement extends Element, CellElement extends Element, RM extends TableRowInfo<RowElement, CellElement>, CM extends TableCellInfo<CellElement>> extends Get<UseTableSectionParameters<SectionElement, RowElement, CellElement, RM>, "gridNavigationParameters">, Get<UseTableSectionParameters<SectionElement, RowElement, CellElement, RM>, "linearNavigationParameters">, Get<UseTableSectionParameters<SectionElement, RowElement, CellElement, RM>, "rearrangeableChildrenParameters">, Get<UseTableSectionParameters<SectionElement, RowElement, CellElement, RM>, "rovingTabIndexParameters">, Get<UseTableSectionParameters<SectionElement, RowElement, CellElement, RM>, "singleSelectionParameters">, Get<UseTableSectionParameters<SectionElement, RowElement, CellElement, RM>, "paginatedChildrenParameters">, Get<UseTableSectionParameters<SectionElement, RowElement, CellElement, RM>, "staggeredChildrenParameters">, Get<UseTableSectionParameters<SectionElement, RowElement, CellElement, RM>, "tableSectionParameters"> {
    ref?: Ref<UseTableSectionReturnType<SectionElement, RowElement, CellElement, RM, CM>>;
}
interface TableRowPropsBase<RowElement extends Element, CellElement extends Element, RM extends TableRowInfo<RowElement, CellElement>, CM extends TableCellInfo<CellElement>> extends OmitStrong<Get<UseTableRowParameters<RowElement, CellElement, RM, CM>, "tableRowParameters">, never>, Get2<UseTableRowParameters<RowElement, CellElement, RM, CM>, "rowAsChildOfGridParameters", "singleSelectionChildParameters">, Get2<UseTableRowParameters<RowElement, CellElement, RM, CM>, "rowAsChildOfGridParameters", "managedChildParameters">, Get2<UseTableRowParameters<RowElement, CellElement, RM, CM>, "rowAsChildOfGridParameters", "rovingTabIndexChildParameters">, Get2<UseTableRowParameters<RowElement, CellElement, RM, CM>, "rowAsChildOfGridParameters", "textContentParameters">, Get2<UseTableRowParameters<RowElement, CellElement, RM, CM>, "rowAsParentOfCellsParameters", "linearNavigationParameters">, Get2<UseTableRowParameters<RowElement, CellElement, RM, CM>, "rowAsParentOfCellsParameters", "rovingTabIndexParameters"> {
    ref?: Ref<UseTableRowReturnType<RowElement, CellElement, RM, CM>>;
}
interface TableCellPropsBase<CellElement extends Element, CM extends TableCellInfo<CellElement>> extends Get<UseTableCellParameters<CellElement, CM>, "tableCellParameters">, Get<UseTableCellParameters<CellElement, CM>, "managedChildParameters">, Get<UseTableCellParameters<CellElement, CM>, "gridNavigationCellParameters">, Get<UseTableCellParameters<CellElement, CM>, "rovingTabIndexChildParameters">, Get<UseTableCellParameters<CellElement, CM>, "textContentParameters"> {
    focusSelf: CM["focusSelf"];
    getSortValue: CM["getSortValue"];
    ref?: Ref<UseTableCellReturnType<CellElement, CM>>;
}
export interface TableProps<TableElement extends Element, LabelElement extends Element> extends PartialExcept<TablePropsBase<TableElement, LabelElement>, "tagTable" | "selectionLimit" | "ariaLabel"> {
    render(info: UseTableReturnType<TableElement, LabelElement>): VNode;
}
export interface TableSectionProps<SectionElement extends Element, RowElement extends Element, CellElement extends Element, RM extends TableRowInfo<RowElement, CellElement>, CM extends TableCellInfo<CellElement>> extends PartialExcept<TableSectionPropsBase<SectionElement, RowElement, CellElement, RM, CM>, "tagTableSection" | "location"> {
    render(info: UseTableSectionReturnType<SectionElement, RowElement, CellElement, RM, CM>): VNode;
}
export interface TableRowProps<RowElement extends Element, CellElement extends Element, RM extends TableRowInfo<RowElement, CellElement>, CM extends TableCellInfo<CellElement>> extends PartialExcept<TableRowPropsBase<RowElement, CellElement, RM, CM>, "index" | "tagTableRow" | "ariaPropName"> {
    render(info: UseTableRowReturnType<RowElement, CellElement, RM, CM>): VNode;
}
export interface TableCellProps<CellElement extends Element, CM extends TableCellInfo<CellElement>> extends PartialExcept<TableCellPropsBase<CellElement, CM>, "tagTableCell" | "index" | "getSortValue" | "focusSelf"> {
    render(info: UseTableCellReturnType<CellElement, CM>): VNode;
}
export declare const Table: <TableElement extends Element, LabelElement extends Element>({ ariaLabel, selectionLimit, tagTable, render }: TableProps<TableElement, LabelElement>, ref?: Ref<any>) => import("preact").JSX.Element;
export declare const TableSection: <SectionElement extends Element, RowElement extends Element, CellElement extends Element>({ disableArrowKeys, disableHomeEndKeys, getIndex, initiallySelectedIndex, untabbable, navigatePastEnd, navigatePastStart, onSelectedIndexChange, onTabbableColumnChange, onTabbableIndexChange, pageNavigationSize, paginationMax, paginationMin, staggered, render, location, tagTableSection }: TableSectionProps<SectionElement, RowElement, CellElement, TableRowInfo<RowElement, CellElement>, TableCellInfo<CellElement>>) => import("preact").JSX.Element;
export declare const TableRow: <RowElement extends Element, Cellement extends Element>({ index, getText, tagTableRow, disableArrowKeys, disableHomeEndKeys, onTabbableIndexChange, ariaPropName, disabled, navigatePastEnd, navigatePastStart, selected, selectionMode, hidden, render }: TableRowProps<RowElement, Cellement, TableRowInfo<RowElement, Cellement>, TableCellInfo<Cellement>>, ref?: Ref<any>) => import("preact").JSX.Element;
export declare const TableCell: <CellElement extends Element>({ index, getText, focusSelf, hidden, tagTableCell, render, colSpan, getSortValue }: TableCellProps<CellElement, TableCellInfo<CellElement>>, ref?: Ref<any>) => VNode<{}>;
export {};
//# sourceMappingURL=table.d.ts.map