import { CompleteGridNavigationCellContext, CompleteGridNavigationRowContext, ElementProps, PassiveStateUpdater, TargetedOmit, UseCompleteGridNavigationCellInfo, UseCompleteGridNavigationCellParameters, UseCompleteGridNavigationCellReturnType, UseCompleteGridNavigationParameters, UseCompleteGridNavigationReturnType, UseCompleteGridNavigationRowInfo, UseCompleteGridNavigationRowParameters, UseCompleteGridNavigationRowReturnType, UseGridNavigationRowParameters } from "preact-prop-helpers";
import { ElementToTag, OmitStrong } from "./props.js";
import { UseLabelSyntheticParameters } from "./use-label.js";
import { UseListboxParameters } from "./use-listbox.js";
export interface UseTableContextSelf {
    setSortBodyFunction: PassiveStateUpdater<() => void, never>;
    sortByColumn(column: number): SortInfo;
    getCurrentSortColumn(): SortInfo;
}
export interface UseTableContext {
    tableContext: UseTableContextSelf;
}
export interface UseTableSectionContext<TableSectionElement extends Element, TableRowElement extends Element, TableCellElement extends Element, RM extends TableRowInfo<TableRowElement, TableCellElement>, CM extends TableCellInfo<TableCellElement>> extends CompleteGridNavigationRowContext<TableSectionElement, TableRowElement, TableCellElement, RM, CM>, UseTableContext {
}
export interface UseTableSectionParametersSelf<TableSectionElement extends Element> {
    location: "head" | "body" | "foot";
    tagTableSection: ElementToTag<TableSectionElement>;
}
export interface UseTableSectionParameters<TableSectionElement extends Element, TableRowElement extends Element, TableCellElement extends Element, RM extends TableRowInfo<TableRowElement, TableCellElement>> extends OmitStrong<UseCompleteGridNavigationParameters<TableSectionElement, TableRowElement, TableCellElement, RM>, "rovingTabIndexParameters" | "sortableChildrenParameters">, TargetedOmit<UseCompleteGridNavigationParameters<TableSectionElement, TableRowElement, TableCellElement, RM>, "rovingTabIndexParameters", "focusSelfParent"> {
    tableSectionParameters: UseTableSectionParametersSelf<TableSectionElement>;
    context: UseTableContext;
}
export interface UseTableSectionReturnType<TableSectionElement extends Element, TableRowElement extends Element, TableCellElement extends Element, RM extends TableRowInfo<TableRowElement, TableCellElement>, CM extends TableCellInfo<TableCellElement>> extends OmitStrong<UseCompleteGridNavigationReturnType<TableSectionElement, TableRowElement, TableCellElement, RM, CM>, "props"> {
    propsTableSection: ElementProps<TableSectionElement>;
    context: UseTableSectionContext<TableSectionElement, TableRowElement, TableCellElement, RM, CM>;
}
export interface UseTableRowReturnType<TableRowElement extends Element, TableCellElement extends Element, RM extends TableRowInfo<TableRowElement, TableCellElement>, CM extends TableCellInfo<TableCellElement>> extends OmitStrong<UseCompleteGridNavigationRowReturnType<TableRowElement, TableCellElement, RM, CM>, "context"> {
    context: UseTableRowContext<any, TableCellElement, CM>;
}
export interface UseTableRowParametersSelf<TableRowElement extends Element> {
    /**
     * When the `selectionLimit` is `"single"`, this must be `null`.
     */
    selected: boolean | null;
    tagTableRow: ElementToTag<TableRowElement>;
}
export interface UseTableRowParameters<TableRowElement extends Element, TableCellElement extends Element, RM extends TableRowInfo<TableRowElement, TableCellElement>, CM extends TableCellInfo<TableCellElement>> extends OmitStrong<UseCompleteGridNavigationRowParameters<TableRowElement, TableCellElement, RM, CM>, "rovingTabIndexParameters" | "typeaheadNavigationParameters" | "context" | "info">, TargetedOmit<UseGridNavigationRowParameters<TableRowElement, TableCellElement, RM, CM>, "rovingTabIndexParameters", never> {
    context: UseTableSectionContext<any, TableRowElement, TableCellElement, RM, CM>;
    tableRowParameters: UseTableRowParametersSelf<TableRowElement>;
    info: Omit<UseCompleteGridNavigationRowParameters<TableRowElement, TableCellElement, RM, CM>["info"], "getSortValue">;
}
export interface UseTableRowContext<TableRowElement extends Element, TableCellElement extends Element, M extends TableCellInfo<TableCellElement>> extends CompleteGridNavigationCellContext<TableRowElement, TableCellElement, M> {
    tableContext: UseTableContext["tableContext"];
}
export interface UseTableCellReturnTypeSelf {
    sortByThisColumn(): SortInfo;
}
export interface UseTableCellReturnType<TableCellElement extends Element, CM extends TableCellInfo<TableCellElement>> extends OmitStrong<UseCompleteGridNavigationCellReturnType<TableCellElement, CM>, "props"> {
    propsCell: ElementProps<TableCellElement>;
    propsFocus: ElementProps<any>;
    tableCellReturn: UseTableCellReturnTypeSelf;
}
export interface UseTableCellParametersSelf<TableCellElement extends Element> {
    tagTableCell: ElementToTag<TableCellElement>;
}
export interface UseTableCellParameters<TableCellElement extends Element, CM extends TableCellInfo<TableCellElement>> extends OmitStrong<UseCompleteGridNavigationCellParameters<TableCellElement, CM>, "info"> {
    tableCellParameters: UseTableCellParametersSelf<TableCellElement>;
    context: UseTableRowContext<any, TableCellElement, CM>;
    info: OmitStrong<UseCompleteGridNavigationCellParameters<TableCellElement, CM>["info"], never>;
}
export interface TableRowInfo<TableRowElement extends Element, TableCellElement extends Element> extends UseCompleteGridNavigationRowInfo<TableRowElement, TableCellElement> {
}
export interface TableCellInfo<TableCellElement extends Element> extends UseCompleteGridNavigationCellInfo<TableCellElement> {
    getSortValue(): unknown;
}
export interface UseTableParameters<TableElement extends Element, LabelElement extends Element> extends TargetedOmit<UseLabelSyntheticParameters, "labelParameters", "onLabelClick"> {
    tableParameters: UseTableParametersSelf<TableElement, LabelElement>;
}
export interface UseTableParametersSelf<TableElement extends Element, LabelElement extends Element> extends Pick<UseListboxParameters<TableElement, any, LabelElement, any>["listboxParameters"], "selectionLimit"> {
    tagTable: ElementToTag<TableElement>;
}
export interface UseTableReturnType<TableElement extends Element, LabelElement extends Element> {
    propsTable: ElementProps<TableElement>;
    propsLabel: ElementProps<LabelElement>;
    context: UseTableContext;
}
interface SortInfo {
    column: number;
    direction: "ascending" | "descending";
}
/**
 * Creates a sortable data table in a [Grid](https://www.w3.org/WAI/ARIA/apg/patterns/grid/) pattern.
 *
 * @compositeParams
 *
 * @hasChild {@link useTableSection}
 * @hasChild {@link useTableRow}
 * @hasChild {@link useTableCell}
 */
export declare function useTable<TableElement extends Element, LabelElement extends Element>({ labelParameters, tableParameters: { selectionLimit, tagTable }, }: UseTableParameters<TableElement, LabelElement>): UseTableReturnType<TableElement, LabelElement>;
/**
 * @compositeParams
 */
export declare function useTableSection<TableSectionElement extends Element, TableRowElement extends Element, TableCellElement extends Element, RM extends TableRowInfo<TableRowElement, TableCellElement>, CM extends TableCellInfo<TableCellElement>>({ linearNavigationParameters, rovingTabIndexParameters, singleSelectionParameters, gridNavigationParameters, rearrangeableChildrenParameters, paginatedChildrenParameters, staggeredChildrenParameters, tableSectionParameters: { tagTableSection, location }, typeaheadNavigationParameters, context: { tableContext } }: UseTableSectionParameters<TableSectionElement, TableRowElement, TableCellElement, RM>): UseTableSectionReturnType<TableSectionElement, TableRowElement, TableCellElement, RM, CM>;
/**
 * @compositeParams
 */
export declare function useTableRow<TableRowElement extends Element, TableCellElement extends Element, RM extends TableRowInfo<TableRowElement, TableCellElement>, CM extends TableCellInfo<TableCellElement>>({ info, textContentParameters, context: cx1, tableRowParameters: { selected }, linearNavigationParameters, rovingTabIndexParameters, ...void1 }: UseTableRowParameters<TableRowElement, TableCellElement, RM, CM>): UseTableRowReturnType<TableRowElement, TableCellElement, RM, CM>;
/**
 * @compositeParams
 */
export declare function useTableCell<TableCellElement extends Element, CM extends TableCellInfo<TableCellElement>>({ tableCellParameters: { tagTableCell }, info, ...p }: UseTableCellParameters<TableCellElement, CM>): UseTableCellReturnType<TableCellElement, CM>;
export {};
//# sourceMappingURL=use-table.d.ts.map