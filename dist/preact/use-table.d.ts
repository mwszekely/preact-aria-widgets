import { CompleteGridNavigationCellContext, CompleteGridNavigationRowContext, ElementProps, Nullable, OmitStrong, PassiveStateUpdater, TargetedOmit, UseCompleteGridNavigationCellInfo, UseCompleteGridNavigationCellParameters, UseCompleteGridNavigationCellReturnType, UseCompleteGridNavigationParameters, UseCompleteGridNavigationReturnType, UseCompleteGridNavigationRowInfo, UseCompleteGridNavigationRowInfoKeysParameters, UseCompleteGridNavigationRowParameters, UseCompleteGridNavigationRowReturnType, UseCompleteGridNavigationRowsContext, UseCompleteGridNavigationRowsInfo, UseCompleteGridNavigationRowsParameters, UseCompleteGridNavigationRowsReturnType, UseProcessedChildParameters, UseProcessedChildReturnType, UseRefElementParameters, UseRefElementReturnType } from "preact-prop-helpers";
import { ElementToTag } from "./props.js";
import { UseLabelReturnType, UseLabelSyntheticParameters } from "./use-label.js";
export type SortDirection = "ascending" | "descending";
interface SortInfo {
    column: number;
    direction: SortDirection;
}
export interface TableSectionInfo<TableRowElement extends Element> extends UseCompleteGridNavigationRowsInfo<TableRowElement> {
}
export interface TableRowInfo<TableRowElement extends Element> extends UseCompleteGridNavigationRowInfo<TableRowElement> {
}
export interface TableCellInfo<TableCellElement extends Element> extends UseCompleteGridNavigationCellInfo<TableCellElement> {
}
export interface UseTableParametersSelf<TableElement extends Element> {
    tagTable: ElementToTag<TableElement>;
    initiallySortedColumn: Nullable<number>;
}
export interface UseTableParameters<TableElement extends Element, RowElement extends Element, RM extends TableRowInfo<RowElement> = TableRowInfo<RowElement>> extends OmitStrong<UseCompleteGridNavigationParameters<TableElement, RowElement, RM>, "rovingTabIndexParameters" | "gridNavigationCompleteParameters">, TargetedOmit<UseCompleteGridNavigationParameters<TableElement, RowElement, RM>, "rovingTabIndexParameters", "focusSelfParent">, TargetedOmit<UseCompleteGridNavigationParameters<TableElement, RowElement, RM>, "gridNavigationCompleteParameters", "getSortColumn">, TargetedOmit<UseLabelSyntheticParameters, "labelParameters", "onLabelClick"> {
    tableParameters: UseTableParametersSelf<TableElement>;
}
export interface UseTableReturnTypeSelf {
    sortByColumn: (column: number) => SortInfo;
}
export interface UseTableReturnType<TableElement extends Element, RowElement extends Element, LabelElement extends Element, RM extends TableRowInfo<RowElement> = TableRowInfo<RowElement>> extends OmitStrong<UseCompleteGridNavigationReturnType<TableElement, RowElement, RM>, "props">, Pick<UseLabelReturnType<TableElement, LabelElement>, "propsLabel"> {
    tableReturn: UseTableReturnTypeSelf;
    propsTable: ElementProps<TableElement>;
    context: UseTableRowContext<RowElement, RM>;
}
export interface UseTableContextSelf {
    setRefreshRowsFunction: PassiveStateUpdater<() => void, never>;
    sortByColumn: UseTableReturnTypeSelf["sortByColumn"];
    getCurrentSortColumn(): number | undefined;
    getCurrentSortDirection(): SortDirection;
}
export interface UseTableProcessedChildrenContextSelf {
    location: "head" | "body" | "foot";
}
export interface UseTableSectionParametersSelf<TableSectionElement extends Element> {
    tagTableSection: ElementToTag<TableSectionElement>;
}
export interface UseTableRowContext<RowElement extends Element, RM extends TableRowInfo<RowElement>> extends CompleteGridNavigationRowContext<RowElement, RM> {
    tableContext: UseTableContextSelf;
}
export interface UseTableProcessedChildrenContext<RowElement extends Element, RsM extends TableSectionInfo<RowElement>> extends UseCompleteGridNavigationRowsContext<RowElement, RsM> {
    tableProcessedChildren: UseTableProcessedChildrenContextSelf;
}
export interface UseTableBodyParameters<TableSectionElement extends Element, RowElement extends Element, RM extends UseCompleteGridNavigationRowInfo<RowElement>, RsM extends TableSectionInfo<RowElement>> extends OmitStrong<UseCompleteGridNavigationRowsParameters<RowElement, RM, RsM>, "rearrangeableChildrenParameters">, TargetedOmit<UseCompleteGridNavigationRowsParameters<RowElement, RM, RsM>, "rearrangeableChildrenParameters", never> {
    tableSectionParameters: UseTableSectionParametersSelf<TableSectionElement>;
    context: UseTableRowContext<RowElement, RM>;
}
export interface UseTableBodyReturnType<TableSectionElement extends Element, RowElement extends Element, RsM extends TableSectionInfo<RowElement>> extends UseCompleteGridNavigationRowsReturnType<RowElement, RsM> {
    context: UseTableProcessedChildrenContext<RowElement, RsM>;
    propsTableSection: ElementProps<TableSectionElement>;
}
type UseTableRowInfoKeysParameters<RM extends TableRowInfo<any>> = UseCompleteGridNavigationRowInfoKeysParameters<RM>;
export interface UseTableCellContext<CellElement extends Element, CM extends TableCellInfo<CellElement>> extends CompleteGridNavigationCellContext<CellElement, CM> {
    tableContext: UseTableContextSelf;
}
export interface UseTableRowParametersSelf<TableRowElement extends Element> {
    selected: Nullable<boolean>;
    tagTableRow: ElementToTag<TableRowElement>;
}
export interface UseTableRowParameters<RowElement extends Element, CellElement extends Element, RM extends TableRowInfo<RowElement>, CM extends TableCellInfo<CellElement>> extends OmitStrong<UseCompleteGridNavigationRowParameters<RowElement, CellElement, RM, CM>, "typeaheadNavigationParameters" | "info"> {
    context: UseTableRowContext<RowElement, RM>;
    tableRowParameters: UseTableRowParametersSelf<RowElement>;
    info: Pick<RM, UseTableRowInfoKeysParameters<RM>>;
}
export interface UseTableRowReturnType<RowElement extends Element, CellElement extends Element, RM extends TableRowInfo<RowElement>, CM extends TableCellInfo<CellElement>> extends UseCompleteGridNavigationRowReturnType<RowElement, CellElement, RM, CM> {
    context: UseTableCellContext<CellElement, CM>;
}
export interface UseTableCellParametersSelf<TableCellElement extends Element, CM extends TableCellInfo<TableCellElement>> {
    tagTableCell: ElementToTag<TableCellElement>;
}
export interface UseTableCellReturnTypeSelf {
    sortByThisColumn(): SortInfo;
}
export interface UseTableCellParameters<CellElement extends Element, CM extends TableCellInfo<CellElement>> extends UseCompleteGridNavigationCellParameters<CellElement, CM> {
    tableCellParameters: UseTableCellParametersSelf<CellElement, CM>;
    context: UseTableCellContext<CellElement, CM>;
}
export interface UseTableCellReturnType<CellElement extends Element, CM extends TableCellInfo<CellElement>> extends OmitStrong<UseCompleteGridNavigationCellReturnType<CellElement, CM>, "props"> {
    propsCell: ElementProps<CellElement>;
    propsFocus: ElementProps<any>;
    tableCellReturn: UseTableCellReturnTypeSelf;
}
/**
 * @compositeParams
 */
export declare function useTable<TableElement extends Element, TableRowElement extends Element, LabelElement extends Element, RM extends TableRowInfo<TableRowElement>>({ gridNavigationParameters, linearNavigationParameters, multiSelectionParameters, paginatedChildrenParameters, refElementParameters, rovingTabIndexParameters, singleSelectionParameters, typeaheadNavigationParameters, labelParameters, tableParameters: { tagTable, initiallySortedColumn }, gridNavigationCompleteParameters: { getSortValueAt }, processedIndexManglerParameters }: UseTableParameters<TableElement, TableRowElement, RM>): UseTableReturnType<TableElement, TableRowElement, LabelElement, RM>;
export interface UseTableHeadParametersSelf<TableSectionElement extends Element> {
    tagHead: ElementToTag<TableSectionElement>;
}
export interface UseTableHeadReturnTypeSelf<TableSectionElement extends Element> {
}
export interface UseTableHeadParameters<TableSectionElement extends Element> {
    tableHeadParameters: UseTableHeadParametersSelf<TableSectionElement>;
}
export interface UseTableHeadReturnType<TableSectionElement extends Element> {
    props: ElementProps<TableSectionElement>;
    tableHeadReturn: UseTableHeadReturnTypeSelf<TableSectionElement>;
}
/**
 * @compositeParams
 */
export declare function useTableHead<TableSectionElement extends Element>({ tableHeadParameters: { tagHead: tagTableSection } }: UseTableHeadParameters<TableSectionElement>): UseTableHeadReturnType<TableSectionElement>;
/**
 * @compositeParams
 */
export declare function useTableBody<TableSectionElement extends Element, RowElement extends Element, RM extends TableRowInfo<RowElement>, RsM extends TableSectionInfo<RowElement>>({ context: processedChildrenContext, managedChildrenParameters, paginatedChildrenParameters, rearrangeableChildrenParameters, staggeredChildrenParameters, tableSectionParameters: { tagTableSection } }: UseTableBodyParameters<TableSectionElement, RowElement, RM, RsM>): UseTableBodyReturnType<TableSectionElement, RowElement, RsM>;
export interface UseTableRowOuterParameters<RowElement extends Element, RsM extends TableSectionInfo<RowElement>> extends OmitStrong<UseProcessedChildParameters<RowElement, RsM>, "info">, TargetedOmit<UseProcessedChildParameters<RowElement, RsM>, "info", "getElement">, UseRefElementParameters<RowElement> {
}
export interface UseTableRowOuterReturnType<RowElement extends Element, RsM extends TableSectionInfo<RowElement>> extends OmitStrong<UseProcessedChildReturnType<RowElement, RsM>, never>, OmitStrong<UseRefElementReturnType<RowElement>, "propsStable"> {
    hide: boolean;
}
/**
 * @compositeParams
 */
export declare function useTableRowOuter<RowElement extends Element, RsM extends TableSectionInfo<RowElement>>({ context, info: { ...info }, refElementParameters: { onElementChange: oec1, onMount, onUnmount }, rearrangeableChildParameters, ...void1 }: UseTableRowOuterParameters<RowElement, RsM>): UseTableRowOuterReturnType<RowElement, RsM>;
/**
 * @compositeParams
 */
export declare function useTableRow<TableRowElement extends Element, TableCellElement extends Element, RM extends TableRowInfo<TableRowElement>, CM extends TableCellInfo<TableCellElement>>({ info, textContentParameters, context: cx1, tableRowParameters: { selected }, linearNavigationParameters, rovingTabIndexParameters, hasCurrentFocusParameters, singleSelectionChildParameters, multiSelectionChildParameters, refElementParameters, ...void1 }: UseTableRowParameters<TableRowElement, TableCellElement, RM, CM>): UseTableRowReturnType<TableRowElement, TableCellElement, TableRowInfo<TableRowElement>, TableCellInfo<TableCellElement>>;
/**
 * @compositeParams
 */
export declare function useTableCell<TableCellElement extends Element>({ tableCellParameters: { tagTableCell }, info, context, gridNavigationCellParameters, textContentParameters, ...p }: UseTableCellParameters<TableCellElement, TableCellInfo<TableCellElement>>): UseTableCellReturnType<TableCellElement, TableCellInfo<TableCellElement>>;
export {};
//# sourceMappingURL=use-table.d.ts.map