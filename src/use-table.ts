import { h } from "preact";
import {
    CompleteGridNavigationContext,
    GetIndex,
    GridSingleSelectSortableChildCellInfo, GridSingleSelectSortableChildRowInfo, ManagedChildInfo, useCompleteGridNavigation,
    useCompleteGridNavigationCell, UseCompleteGridNavigationCellParameters, UseCompleteGridNavigationCellReturnType, UseCompleteGridNavigationParameters,
    UseCompleteGridNavigationReturnType, useCompleteGridNavigationRow, UseCompleteGridNavigationRowParameters, UseCompleteGridNavigationRowReturnType, useMergedProps, useSortableChildren, useStableObject
} from "preact-prop-helpers";
import { useCallback } from "preact/hooks";
import { UseListboxParameters } from "./use-listbox";
import { ElementToTag, EventDetail } from "./props";
import { LabelPosition, useLabel, UseLabelParameters } from "./use-label";

//export type ListboxSingleSelectEvent<E extends EventTarget> = { [EventDetail]: { selectedIndex: number } } & Pick<h.JSX.TargetedEvent<E>, "target" | "currentTarget">;

export interface UseTableSectionContext<TableSectionElement extends Element, TableRowElement extends Element, M extends TableRowInfo<TableRowElement>> extends CompleteGridNavigationContext<TableSectionElement, TableRowElement, M> {
    //tableRowContext: { selectionLimit: "single" | "multi" }
}

export interface UseTableSectionParameters<TableSectionElement extends Element, TableRowElement extends Element, M extends TableRowInfo<TableRowElement>> extends UseCompleteGridNavigationParameters<TableSectionElement, TableRowElement, M> {
    tableSectionParameters: {
        tagTableSection: ElementToTag<TableSectionElement>;
    }
}
export interface UseTableSectionReturnType<TableSectionElement extends Element, TableRowElement extends Element, M extends TableRowInfo<TableRowElement>> extends Omit<UseCompleteGridNavigationReturnType<TableSectionElement, TableRowElement, M>, "props"> {
    propsTableSection: h.JSX.HTMLAttributes<TableSectionElement>;
    context: UseTableSectionContext<TableSectionElement, TableRowElement, M>;
}
export interface UseTableRowReturnType<TableRowElement extends Element, TableCellElement extends Element, RM extends TableRowInfo<TableRowElement>, CM extends TableCellInfo<TableCellElement>> extends UseCompleteGridNavigationRowReturnType<TableRowElement, TableCellElement, RM, CM> { }
export interface UseTableRowParameters<TableRowElement extends Element, TableCellElement extends Element, RM extends TableRowInfo<TableRowElement>, CM extends TableCellInfo<TableCellElement>> extends UseCompleteGridNavigationRowParameters<TableRowElement, TableCellElement, RM, CM> {
    tableRowParameters: {
        /**
         * When the `selectionLimit` is `"single"`, this must be `null`.
         */
        selected: boolean | null;
        tagTableRow: ElementToTag<TableRowElement>;
    }
}


export interface UseTableCellReturnType<TableCellElement extends Element, CM extends TableCellInfo<TableCellElement>> extends UseCompleteGridNavigationCellReturnType<TableCellElement, CM> { }
export interface UseTableCellParameters<TableCellElement extends Element, CM extends TableCellInfo<TableCellElement>> extends UseCompleteGridNavigationCellParameters<TableCellElement, CM> {
    tableCellParameters: {
        tagTableCell: ElementToTag<TableCellElement>;
    }
}

export interface TableRowInfo<TableRowElement extends Element> extends GridSingleSelectSortableChildRowInfo<TableRowElement> { locationIndex: number; }
export interface TableCellInfo<TableCellElement extends Element> extends GridSingleSelectSortableChildCellInfo<TableCellElement> { }

export interface TableParameters<TableElement extends Element, TableRowElement extends Element, LabelElement extends Element, RM extends TableRowInfo<TableRowElement>> {
    labelParameters: UseLabelParameters<LabelPosition, TableElement, LabelElement>["labelParameters"];
    tableParameters: {
        tagTable: ElementToTag<TableElement>;
    } & Omit<UseListboxParameters<TableElement, TableRowElement, LabelElement, RM>["listboxParameters"], "type">
}

export function useTable<TableElement extends Element, TableRowElement extends Element, LabelElement extends Element, RM extends TableRowInfo<TableRowElement>>({
    labelParameters,
    tableParameters: { tagTable, selectionLimit },
}: TableParameters<TableElement, TableRowElement, LabelElement, RM>) {

    const {
        propsInput: propsLabelList,
        propsLabel: propsLabelLabel,
        randomIdInputReturn,
        randomIdLabelReturn
    } = useLabel<LabelPosition, TableElement, LabelElement>({
        labelParameters,
        randomIdInputParameters: { prefix: "aria-listbox-input-" },
        randomIdLabelParameters: { prefix: "aria-listbox-label-" }
    });

    return {
        propsTable: useMergedProps({ role: tagTable == "table" ? undefined : "grid", "aria-multiselectable": (selectionLimit == "multi" ? "true" : undefined) }, propsLabelList),
        propsLabel: propsLabelLabel
    }
}
const naturalSectionTypes = new Set<keyof h.JSX.IntrinsicElements>(["thead", "tbody", "tfoot"]);
export function useTableSection<TableSectionElement extends Element, TableRowElement extends Element, LabelElement extends Element, M extends TableRowInfo<TableRowElement>>({
    linearNavigationParameters,
    rovingTabIndexParameters,
    singleSelectionParameters,
    typeaheadNavigationParameters,
    gridNavigationParameters,
    rearrangeableChildrenParameters,
    sortableChildrenParameters,
    tableSectionParameters: { tagTableSection }
}: UseTableSectionParameters<TableSectionElement, TableRowElement, M>): UseTableSectionReturnType<TableSectionElement, TableRowElement, M> {

    const {
        childrenHaveFocusReturn,
        context,
        linearNavigationReturn,
        managedChildrenReturn,
        props,
        rovingTabIndexReturn,
        singleSelectionReturn,
        typeaheadNavigationReturn,
        rearrangeableChildrenReturn,
        sortableChildrenReturn
    } = useCompleteGridNavigation<TableSectionElement, TableRowElement, M>({
        linearNavigationParameters,
        rovingTabIndexParameters,
        singleSelectionParameters,
        sortableChildrenParameters,
        typeaheadNavigationParameters,
        gridNavigationParameters,
        rearrangeableChildrenParameters
    });

    if (!naturalSectionTypes.has(tagTableSection as any)) {
        props.role = "rowgroup";
    }

    return {
        childrenHaveFocusReturn,
        context,
        linearNavigationReturn,
        managedChildrenReturn,
        rovingTabIndexReturn,
        singleSelectionReturn,
        rearrangeableChildrenReturn,
        sortableChildrenReturn,
        typeaheadNavigationReturn,
        propsTableSection: props
    }
}

export function useTableRow<TableRowElement extends Element, TableCellElement extends Element, RM extends TableRowInfo<TableRowElement>, CM extends TableCellInfo<TableCellElement>>({
    asChildRowParameters: {
        managedChildParameters,
        singleSelectionChildParameters,
        typeaheadNavigationChildParameters,
        completeGridNavigationRowParameters,
        context: cx1
    },
    asParentRowParameters: {
        linearNavigationParameters,
        rovingTabIndexParameters,
        typeaheadNavigationParameters
    },
    tableRowParameters: { selected }
}: UseTableRowParameters<TableRowElement, TableCellElement, RM, CM>): UseTableRowReturnType<TableRowElement, TableCellElement, RM, CM> {
    const {
        asChildRowReturn,
        asParentRowReturn,
        context: cx2,
        managedChildReturn,
        hasCurrentFocusReturn,
        props
    } = useCompleteGridNavigationRow<TableRowElement, TableCellElement, RM, CM>({
        asChildRowParameters: {
            context: cx1,
            managedChildParameters,
            singleSelectionChildParameters,
            typeaheadNavigationChildParameters,
            completeGridNavigationRowParameters,
        },
        asParentRowParameters: {
            linearNavigationParameters,
            rovingTabIndexParameters,
            typeaheadNavigationParameters
        }
    });

    props.role = "gridrow";
    if (selected)
        props[singleSelectionChildParameters.ariaPropName ?? "aria-selected"] = "true";

    return {
        asChildRowReturn,
        asParentRowReturn,
        context: cx2,
        hasCurrentFocusReturn,
        managedChildReturn,
        props
    }
}

export function useTableCell<TableCellElement extends Element, CM extends TableCellInfo<TableCellElement>>({ tableCellParameters: { tagTableCell }, ...p }: UseTableCellParameters<TableCellElement, CM>): UseTableCellReturnType<TableCellElement, CM> {
    const ret = useCompleteGridNavigationCell<TableCellElement, CM>(p);
    if (!(tagTableCell == "th" || tagTableCell == "td")) {
        ret.props.role = "gridcell"
    }
    return ret;
}
/*
export interface UseTableSectionSectionParameters {
    gridlistSectionParameters: {
        compareRows: (lhsIndex: number, rhsIndex: number) => number;
    }
    gridlistSectionContext: {

    }
}*/
/*
export const useTableSectionSection = <BodySectionElement extends Element, RowElement extends Element>({ compareRows }: UseTableSectionSectionParameters) => {
    //debugLog("useTableSectionSection");
    //type CRFull = UseRovingTabIndexSubInfo<RowElement, UseListNavigationSubInfo<UseTableRowSubInfo<CellElement, CR, CC>>>;
    const getIndex = useCallback<GetIndex<any>>((i) => i.props.index, []);


    const {
        linearNavigationParameters,
        rearrangeableChildrenReturn,
        sortableChildrenReturn
    } = useSortableChildren<BodySectionElement, TableRowInfo<RowElement>>({
        rearrangeableChildrenParameters: {
            getIndex,
            getHighestChildIndex,
            getValid
        },
        sortableChildrenParameters: {
            compare: (lhs, rhs) => {
                if (lhs.locationIndex === rhs.locationIndex)
                    return compareRows(lhs.index, rhs.index);
                return lhs.locationIndex - rhs.locationIndex;
            }
        }
    });

    const useTableSectionSectionProps = (props: h.JSX.HTMLAttributes<BodySectionElement>) => {
        console.assert(props.children != null);
        overwriteWithWarning("useTableSectionSection", props, "role", "rowgroup");
        return useSortableProps(props as h.JSX.HTMLAttributes<BodySectionElement> & { children: any });
    }

    return {
        useTableSectionSectionProps,
        ...sortableRet
    }
}*/
