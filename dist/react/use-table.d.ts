import { CompleteGridNavigationCellContext, CompleteGridNavigationRowContext, ElementProps, Nullable, PassiveStateUpdater, SingleSelectionContextSelf, TargetedOmit, TargetedPick, UseCompleteGridNavigationCellInfo, UseCompleteGridNavigationCellInfoKeysParameters, UseCompleteGridNavigationCellParameters, UseCompleteGridNavigationCellReturnType, UseCompleteGridNavigationParameters, UseCompleteGridNavigationReturnType, UseCompleteGridNavigationRowInfo, UseCompleteGridNavigationRowParameters, UseCompleteGridNavigationRowReturnType, UseCompleteListNavigationParameters, UseGenericChildParameters, UseMultiSelectionContextSelf } from "preact-prop-helpers/preact";
import { ElementToTag, OmitStrong } from "./props.js";
import { UseLabelSyntheticParameters } from "./use-label.js";
export interface UseTableContextSelf extends Pick<SingleSelectionContextSelf, "singleSelectionMode">, Pick<UseMultiSelectionContextSelf, "multiSelectionMode"> {
    setSortBodyFunction: PassiveStateUpdater<() => void, never>;
    sortByColumn(column: number): SortInfo;
    getCurrentSortColumn(): number | null;
    getCurrentSortDirection(): SortDirection;
}
export interface UseTableContext {
    tableContext: UseTableContextSelf;
}
export interface UseTableSectionContext<TableRowElement extends Element, RM extends TableRowInfo<TableRowElement>> extends CompleteGridNavigationRowContext<TableRowElement, RM>, UseTableContext {
}
export interface UseTableSectionParametersSelf<TableSectionElement extends Element> {
    location: "head" | "body" | "foot";
    tagTableSection: ElementToTag<TableSectionElement>;
}
export interface UseTableSectionParameters<TableSectionElement extends Element, TableRowElement extends Element, RM extends TableRowInfo<TableRowElement>> extends OmitStrong<UseCompleteGridNavigationParameters<TableSectionElement, TableRowElement, RM>, "rovingTabIndexParameters" | "singleSelectionParameters" | "multiSelectionParameters">, TargetedOmit<UseCompleteGridNavigationParameters<TableSectionElement, TableRowElement, RM>, "singleSelectionParameters", "singleSelectionMode">, TargetedOmit<UseCompleteGridNavigationParameters<TableSectionElement, TableRowElement, RM>, "multiSelectionParameters", "multiSelectionMode">, TargetedOmit<UseCompleteGridNavigationParameters<TableSectionElement, TableRowElement, RM>, "rovingTabIndexParameters", "focusSelfParent"> {
    tableSectionParameters: UseTableSectionParametersSelf<TableSectionElement>;
    contextChildren: UseTableContext;
}
export interface UseTableSectionReturnType<TableSectionElement extends Element, TableRowElement extends Element, RM extends TableRowInfo<TableRowElement>> extends OmitStrong<UseCompleteGridNavigationReturnType<TableSectionElement, TableRowElement, RM>, "props"> {
    propsTableSection: ElementProps<TableSectionElement>;
    contextChildren: UseTableSectionContext<TableRowElement, RM>;
}
export interface UseTableRowReturnType<TableRowElement extends Element, TableCellElement extends Element, RM extends TableRowInfo<TableRowElement>, CM extends TableCellInfo<TableCellElement>> extends OmitStrong<UseCompleteGridNavigationRowReturnType<TableRowElement, TableCellElement, RM, CM>, "context"> {
    context: UseTableRowContext<TableCellElement, CM>;
}
export interface UseTableRowParametersSelf<TableRowElement extends Element> {
    /**
     * When the `selectionLimit` is `"single"`, this must be `null`.
     */
    selected: Nullable<boolean>;
    tagTableRow: ElementToTag<TableRowElement>;
}
export interface UseTableRowParameters<TableRowElement extends Element, TableCellElement extends Element, RM extends TableRowInfo<TableRowElement>, CM extends TableCellInfo<TableCellElement>> extends OmitStrong<UseCompleteGridNavigationRowParameters<TableRowElement, TableCellElement, RM, CM>, "rovingTabIndexParameters" | "typeaheadNavigationParameters" | "info">, TargetedOmit<UseCompleteGridNavigationRowParameters<TableRowElement, TableCellElement, RM, CM>, "rovingTabIndexParameters", never> {
    context: UseTableSectionContext<TableRowElement, RM>;
    tableRowParameters: UseTableRowParametersSelf<TableRowElement>;
    info: OmitStrong<UseCompleteGridNavigationRowParameters<TableRowElement, TableCellElement, RM, CM>["info"], never>;
}
export interface UseTableRowContext<TableCellElement extends Element, M extends TableCellInfo<TableCellElement>> extends CompleteGridNavigationCellContext<TableCellElement, M> {
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
export interface UseTableCellParameters<TableCellElement extends Element, CM extends TableCellInfo<TableCellElement>> extends UseGenericChildParameters<UseTableRowContext<TableCellElement, CM>, Pick<CM, UseCompleteGridNavigationCellInfoKeysParameters<CM>>>, OmitStrong<UseCompleteGridNavigationCellParameters<TableCellElement, CM>, "info" | "context"> {
    tableCellParameters: UseTableCellParametersSelf<TableCellElement>;
}
export interface TableRowInfo<TableRowElement extends Element> extends UseCompleteGridNavigationRowInfo<TableRowElement> {
}
export interface TableCellInfo<TableCellElement extends Element> extends UseCompleteGridNavigationCellInfo<TableCellElement> {
    getSortValue(): unknown;
}
export interface UseTableParameters<TableElement extends Element> extends TargetedPick<UseCompleteListNavigationParameters<any, any, any>, "singleSelectionParameters", "singleSelectionMode">, TargetedPick<UseCompleteListNavigationParameters<any, any, any>, "multiSelectionParameters", "multiSelectionMode">, TargetedOmit<UseLabelSyntheticParameters, "labelParameters", "onLabelClick"> {
    tableParameters: UseTableParametersSelf<TableElement>;
}
export interface UseTableParametersSelf<TableElement extends Element> {
    tagTable: ElementToTag<TableElement>;
}
export interface UseTableReturnType<TableElement extends Element, LabelElement extends Element> {
    propsTable: ElementProps<TableElement>;
    propsLabel: ElementProps<LabelElement>;
    context: UseTableContext;
}
export type SortDirection = "ascending" | "descending";
interface SortInfo {
    column: number;
    direction: SortDirection;
}
/**
 * Creates a sortable data table in a [Grid](https://www.w3.org/WAI/ARIA/apg/patterns/grid/) pattern.
 *
 * @remarks Note that in many cases this is overkill. If you don't need sorting and navigation between cells of interactive content, then you can just use a regular &lt;table&gt;
 *
 * @compositeParams
 *
 * @hasChild {@link useTableSection}
 * @hasChild {@link useTableRow}
 * @hasChild {@link useTableCell}
 */
export declare const useTable: <TableElement extends Element, LabelElement extends Element>({ labelParameters, tableParameters: { tagTable }, singleSelectionParameters: { singleSelectionMode, ...void1 }, multiSelectionParameters: { multiSelectionMode, ...void2 }, ...void3 }: UseTableParameters<TableElement>) => UseTableReturnType<TableElement, LabelElement>;
/**
 * @compositeParams
 */
export declare const useTableSection: <TableSectionElement extends Element, TableRowElement extends Element>({ linearNavigationParameters, rovingTabIndexParameters, singleSelectionParameters, multiSelectionParameters, gridNavigationParameters, paginatedChildrenParameters, tableSectionParameters: { tagTableSection, location }, typeaheadNavigationParameters, contextChildren: { tableContext, ...void3 }, refElementParameters, ...void1 }: UseTableSectionParameters<TableSectionElement, TableRowElement, TableRowInfo<TableRowElement>>) => UseTableSectionReturnType<TableSectionElement, TableRowElement, TableRowInfo<TableRowElement>>;
/**
 * @compositeParams
 */
export declare const useTableRow: <TableRowElement extends Element, TableCellElement extends Element>({ info, textContentParameters, context: cx1, tableRowParameters: { selected }, linearNavigationParameters, rovingTabIndexParameters, hasCurrentFocusParameters, singleSelectionChildParameters, multiSelectionChildParameters, ...void1 }: UseTableRowParameters<TableRowElement, TableCellElement, TableRowInfo<TableRowElement>, TableCellInfo<TableCellElement>>) => UseTableRowReturnType<TableRowElement, TableCellElement, TableRowInfo<TableRowElement>, TableCellInfo<TableCellElement>>;
/**
 * @compositeParams
 */
export declare const useTableCell: <TableCellElement extends Element>({ tableCellParameters: { tagTableCell }, info, ...p }: UseTableCellParameters<TableCellElement, TableCellInfo<TableCellElement>>) => UseTableCellReturnType<TableCellElement, TableCellInfo<TableCellElement>>;
export {};
//# sourceMappingURL=use-table.d.ts.map