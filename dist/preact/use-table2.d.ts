import { CompleteGridNavigationCellContext, CompleteGridNavigationRowContext, ElementProps, Nullable, OmitStrong, PassiveStateUpdater, TargetedOmit, UseCompleteGridNavigationCellInfo, UseCompleteGridNavigationCellParameters, UseCompleteGridNavigationCellReturnType, UseCompleteGridNavigationParameters, UseCompleteGridNavigationReturnType, UseCompleteGridNavigationRowInfo, UseCompleteGridNavigationRowParameters, UseCompleteGridNavigationRowReturnType, UseCompleteGridNavigationRowsInfo, UseCompleteGridNavigationRowsParameters, UseCompleteGridNavigationRowsReturnType, UseProcessedChildrenContext } from "preact-prop-helpers";
import { ElementToTag } from "./props.js";
import { UseLabelReturnType, UseLabelSyntheticParameters } from "./use-label.js";
export type SortDirection = "ascending" | "descending";
interface SortInfo {
    column: number;
    direction: SortDirection;
}
export interface UseTableLocationContext {
    location: "head" | "body" | "foot";
}
export interface TableRowInfo<TableRowElement extends Element> extends UseCompleteGridNavigationRowInfo<TableRowElement> {
}
export interface TableCellInfo<TableCellElement extends Element> extends UseCompleteGridNavigationCellInfo<TableCellElement> {
    getSortValue(): unknown;
}
export interface UseTableParametersSelf<TableElement extends Element> {
    tagTable: ElementToTag<TableElement>;
}
export interface UseTableParameters<TableElement extends Element, RowElement extends Element, RM extends TableRowInfo<RowElement> = TableRowInfo<RowElement>> extends OmitStrong<UseCompleteGridNavigationParameters<TableElement, RowElement, RM>, "rovingTabIndexParameters">, TargetedOmit<UseCompleteGridNavigationParameters<TableElement, RowElement, RM>, "rovingTabIndexParameters", "focusSelfParent">, TargetedOmit<UseLabelSyntheticParameters, "labelParameters", "onLabelClick"> {
    tableParameters: UseTableParametersSelf<TableElement>;
}
export interface UseTableReturnTypeSelf {
    sortByColumn: (column: number) => SortInfo;
}
export interface UseTableReturnType<TableElement extends Element, RowElement extends Element, LabelElement extends Element, RM extends TableRowInfo<RowElement> = TableRowInfo<RowElement>> extends OmitStrong<UseCompleteGridNavigationReturnType<TableElement, RowElement, RM>, "props">, Pick<UseLabelReturnType<TableElement, LabelElement>, "propsLabel"> {
    tableReturn: UseTableReturnTypeSelf;
    propsTable: ElementProps<TableElement>;
    contextChildren: UseTableRowContext<RowElement, RM>;
    contextProcessing: UseTableProcessedChildrenContext;
}
export interface UseTableContextSelf {
    setSortBodyFunction: PassiveStateUpdater<() => void, never>;
    sortByColumn: UseTableReturnTypeSelf["sortByColumn"];
    getCurrentSortColumn(): number | null;
    getCurrentSortDirection(): SortDirection;
}
export interface UseTableSectionParametersSelf<TableSectionElement extends Element> {
    tagTableSection: ElementToTag<TableSectionElement>;
}
export interface UseTableRowContext<RowElement extends Element, RM extends TableRowInfo<RowElement>> extends CompleteGridNavigationRowContext<RowElement, RM> {
    tableContext: UseTableContextSelf;
}
export interface UseTableProcessedChildrenContext extends UseProcessedChildrenContext {
    tableContext: UseTableContextSelf;
}
export interface UseTableBodyParameters<TableSectionElement extends Element, RowElement extends Element, RsM extends UseCompleteGridNavigationRowsInfo<RowElement>> extends UseCompleteGridNavigationRowsParameters<RowElement, RsM> {
    tableSectionParameters: UseTableSectionParametersSelf<TableSectionElement>;
    context: UseTableProcessedChildrenContext;
}
export interface UseTableBodyReturnType<TableSectionElement extends Element, RowElement extends Element, RsM extends UseCompleteGridNavigationRowsInfo<RowElement>> extends UseCompleteGridNavigationRowsReturnType<RowElement, RsM> {
    contextLocation: UseTableLocationContext;
    propsTableSection: ElementProps<TableSectionElement>;
}
export interface UseTableCellContext<CellElement extends Element, CM extends TableCellInfo<CellElement>> extends CompleteGridNavigationCellContext<CellElement, CM> {
    tableContext: UseTableContextSelf;
}
export interface UseTableRowParametersSelf<TableRowElement extends Element> {
    selected: Nullable<boolean>;
    tagTableRow: ElementToTag<TableRowElement>;
}
export interface UseTableRowParameters<RowElement extends Element, CellElement extends Element, RM extends TableRowInfo<RowElement>, CM extends TableCellInfo<CellElement>> extends OmitStrong<UseCompleteGridNavigationRowParameters<RowElement, CellElement, RM, CM>, "typeaheadNavigationParameters"> {
    context: UseTableRowContext<RowElement, RM>;
    tableRowParameters: UseTableRowParametersSelf<RowElement>;
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
export declare function useTable<TableElement extends Element, TableRowElement extends Element, LabelElement extends Element, RM extends TableRowInfo<TableRowElement>>({ gridNavigationParameters, linearNavigationParameters, multiSelectionParameters, paginatedChildrenParameters, refElementParameters, rovingTabIndexParameters, singleSelectionParameters, typeaheadNavigationParameters, labelParameters, tableParameters: { tagTable } }: UseTableParameters<TableElement, TableRowElement, RM>): UseTableReturnType<TableElement, TableRowElement, LabelElement, RM>;
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
    contextLocation: UseTableLocationContext;
}
export declare function useTableHead<TableSectionElement extends Element>({ tableHeadParameters: { tagHead: tagTableSection } }: UseTableHeadParameters<TableSectionElement>): UseTableHeadReturnType<TableSectionElement>;
export declare function useTableBody<TableSectionElement extends Element, RowElement extends Element, RsM extends UseCompleteGridNavigationRowsInfo<RowElement>>({ context: processedChildrenContext, managedChildrenParameters, paginatedChildrenParameters, rearrangeableChildrenParameters, staggeredChildrenParameters, tableSectionParameters: { tagTableSection } }: UseTableBodyParameters<TableSectionElement, RowElement, RsM>): UseTableBodyReturnType<TableSectionElement, RowElement, RsM>;
/**
 * @compositeParams
 */
export declare const useTableRow: <TableRowElement extends Element, TableCellElement extends Element, RM extends TableRowInfo<TableRowElement>, CM extends TableCellInfo<TableCellElement>>({ info, textContentParameters, context: cx1, tableRowParameters: { selected }, linearNavigationParameters, rovingTabIndexParameters, hasCurrentFocusParameters, singleSelectionChildParameters, multiSelectionChildParameters, ...void1 }: UseTableRowParameters<TableRowElement, TableCellElement, RM, CM>) => UseTableRowReturnType<TableRowElement, TableCellElement, TableRowInfo<TableRowElement>, TableCellInfo<TableCellElement>>;
/**
 * @compositeParams
 */
export declare const useTableCell: <TableCellElement extends Element>({ tableCellParameters: { tagTableCell }, info, context, gridNavigationCellParameters, textContentParameters, ...p }: UseTableCellParameters<TableCellElement, TableCellInfo<TableCellElement>>) => UseTableCellReturnType<TableCellElement, TableCellInfo<TableCellElement>>;
export {};
//# sourceMappingURL=use-table2.d.ts.map