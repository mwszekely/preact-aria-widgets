import { h } from "preact";
import { CompleteGridNavigationContext, CompleteGridNavigationRowContext, PassiveStateUpdater, UseCompleteGridNavigationCellInfo, UseCompleteGridNavigationCellParameters, UseCompleteGridNavigationCellReturnType, UseCompleteGridNavigationParameters, UseCompleteGridNavigationReturnType, UseCompleteGridNavigationRowInfo, UseCompleteGridNavigationRowParameters, UseCompleteGridNavigationRowReturnType, UseGridNavigationRowParameters } from "preact-prop-helpers";
import { ElementToTag, OmitStrong } from "./props.js";
import { UseLabelSyntheticParameters } from "./use-label.js";
import { UseListboxParameters } from "./use-listbox.js";
export interface UseTableContext {
    tableContext: {
        setSortBodyFunction: PassiveStateUpdater<() => void, never>;
        sortByColumn(column: number): SortInfo;
        getCurrentSortColumn(): SortInfo;
    };
}
export interface UseTableSectionContext<TableSectionElement extends Element, TableRowElement extends Element, TableCellElement extends Element, RM extends TableRowInfo<TableRowElement, TableCellElement>, CM extends TableCellInfo<TableCellElement>> extends CompleteGridNavigationContext<TableSectionElement, TableRowElement, TableCellElement, RM, CM>, UseTableContext {
}
export interface UseTableSectionParameters<TableSectionElement extends Element, TableRowElement extends Element, TableCellElement extends Element, RM extends TableRowInfo<TableRowElement, TableCellElement>> extends OmitStrong<UseCompleteGridNavigationParameters<TableSectionElement, TableRowElement, TableCellElement, RM>, "rovingTabIndexParameters" | "typeaheadNavigationParameters" | "sortableChildrenParameters"> {
    rovingTabIndexParameters: OmitStrong<UseCompleteGridNavigationParameters<TableSectionElement, TableRowElement, TableCellElement, RM>["rovingTabIndexParameters"], "focusSelfParent">;
    tableSectionParameters: {
        location: "head" | "body" | "foot";
        tagTableSection: ElementToTag<TableSectionElement>;
    };
    context: UseTableContext;
}
export interface UseTableSectionReturnType<TableSectionElement extends Element, TableRowElement extends Element, TableCellElement extends Element, RM extends TableRowInfo<TableRowElement, TableCellElement>, CM extends TableCellInfo<TableCellElement>> extends OmitStrong<UseCompleteGridNavigationReturnType<TableSectionElement, TableRowElement, TableCellElement, RM, CM>, "props"> {
    propsTableSection: h.JSX.HTMLAttributes<TableSectionElement>;
    context: UseTableSectionContext<TableSectionElement, TableRowElement, TableCellElement, RM, CM>;
}
export interface UseTableRowReturnType<TableRowElement extends Element, TableCellElement extends Element, RM extends TableRowInfo<TableRowElement, TableCellElement>, CM extends TableCellInfo<TableCellElement>> extends OmitStrong<UseCompleteGridNavigationRowReturnType<TableRowElement, TableCellElement, RM, CM>, "context"> {
    context: UseTableRowContext<any, TableCellElement, CM>;
}
export interface UseTableRowParameters<TableRowElement extends Element, TableCellElement extends Element, RM extends TableRowInfo<TableRowElement, TableCellElement>, CM extends TableCellInfo<TableCellElement>> extends OmitStrong<UseCompleteGridNavigationRowParameters<TableRowElement, TableCellElement, RM, CM>, "rovingTabIndexParameters" | "typeaheadNavigationParameters" | "sortableChildParameters" | "context"> {
    rovingTabIndexParameters: OmitStrong<UseGridNavigationRowParameters<TableRowElement, TableCellElement, RM, CM>["rovingTabIndexParameters"], "focusSelfParent">;
    context: UseTableSectionContext<any, TableRowElement, TableCellElement, RM, CM>;
    tableRowParameters: {
        /**
         * When the `selectionLimit` is `"single"`, this must be `null`.
         */
        selected: boolean | null;
        tagTableRow: ElementToTag<TableRowElement>;
    };
}
export interface UseTableRowContext<TableRowElement extends Element, TableCellElement extends Element, M extends TableCellInfo<TableCellElement>> extends CompleteGridNavigationRowContext<TableRowElement, TableCellElement, M> {
    tableContext: UseTableContext["tableContext"];
}
export interface UseTableCellReturnType<TableCellElement extends Element, CM extends TableCellInfo<TableCellElement>> extends OmitStrong<UseCompleteGridNavigationCellReturnType<TableCellElement, CM>, "props"> {
    propsCell: h.JSX.HTMLAttributes<TableCellElement>;
    propsFocus: h.JSX.HTMLAttributes<any>;
    tableCellReturn: {
        sortByThisColumn(): SortInfo;
    };
}
export interface UseTableCellParameters<TableCellElement extends Element, CM extends TableCellInfo<TableCellElement>> extends UseCompleteGridNavigationCellParameters<TableCellElement, CM> {
    tableCellParameters: {
        tagTableCell: ElementToTag<TableCellElement>;
    };
    context: UseTableRowContext<any, TableCellElement, CM>;
}
export interface TableRowInfo<TableRowElement extends Element, TableCellElement extends Element> extends UseCompleteGridNavigationRowInfo<TableRowElement, TableCellElement> {
}
export interface TableCellInfo<TableCellElement extends Element> extends UseCompleteGridNavigationCellInfo<TableCellElement> {
    getSortValue(): unknown;
}
export interface UseTableParameters<TableElement extends Element, LabelElement extends Element> {
    labelParameters: OmitStrong<UseLabelSyntheticParameters["labelParameters"], "onLabelClick">;
    tableParameters: Pick<UseListboxParameters<TableElement, any, LabelElement, any>["listboxParameters"], "selectionLimit"> & {
        tagTable: ElementToTag<TableElement>;
    };
}
export interface UseTableReturnType<TableElement extends Element, LabelElement extends Element> {
    propsTable: h.JSX.HTMLAttributes<TableElement>;
    propsLabel: h.JSX.HTMLAttributes<LabelElement>;
    context: UseTableContext;
}
interface SortInfo {
    column: number;
    direction: "ascending" | "descending";
}
export declare function useTable<TableElement extends Element, LabelElement extends Element>({ labelParameters, tableParameters: { selectionLimit, tagTable }, }: UseTableParameters<TableElement, LabelElement>): UseTableReturnType<TableElement, LabelElement>;
export declare function useTableSection<TableSectionElement extends Element, TableRowElement extends Element, TableCellElement extends Element, RM extends TableRowInfo<TableRowElement, TableCellElement>, CM extends TableCellInfo<TableCellElement>>({ linearNavigationParameters, rovingTabIndexParameters, singleSelectionParameters, gridNavigationParameters, rearrangeableChildrenParameters, paginatedChildrenParameters, staggeredChildrenParameters, tableSectionParameters: { tagTableSection, location }, context: { tableContext } }: UseTableSectionParameters<TableSectionElement, TableRowElement, TableCellElement, RM>): UseTableSectionReturnType<TableSectionElement, TableRowElement, TableCellElement, RM, CM>;
export declare function useTableRow<TableRowElement extends Element, TableCellElement extends Element, RM extends TableRowInfo<TableRowElement, TableCellElement>, CM extends TableCellInfo<TableCellElement>>({ info, textContentParameters, context: cx1, tableRowParameters: { selected }, linearNavigationParameters, rovingTabIndexParameters, ...void1 }: UseTableRowParameters<TableRowElement, TableCellElement, RM, CM>): UseTableRowReturnType<TableRowElement, TableCellElement, RM, CM>;
export declare function useTableCell<TableCellElement extends Element, CM extends TableCellInfo<TableCellElement>>({ tableCellParameters: { tagTableCell }, ...p }: UseTableCellParameters<TableCellElement, CM>): UseTableCellReturnType<TableCellElement, CM>;
export {};
//# sourceMappingURL=use-table.d.ts.map