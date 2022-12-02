import { h } from "preact";
import {
    CompleteGridNavigationContext,
    CompleteGridNavigationRowContext, GridSingleSelectSortableChildCellInfo, GridSingleSelectSortableChildRowInfo, useCompleteGridNavigation,
    useCompleteGridNavigationCell, UseCompleteGridNavigationCellParameters, UseCompleteGridNavigationCellReturnType, UseCompleteGridNavigationParameters,
    UseCompleteGridNavigationReturnType, useCompleteGridNavigationRow, UseCompleteGridNavigationRowParameters, UseCompleteGridNavigationRowReturnType, useMergedProps
} from "preact-prop-helpers";
import { ElementToTag } from "./props";
import { useLabelSynthetic, UseLabelSyntheticParameters } from "./use-label";
import { UseListboxParameters } from "./use-listbox";

//export type ListboxSingleSelectEvent<E extends EventTarget> = { [EventDetail]: { selectedIndex: number } } & Pick<h.JSX.TargetedEvent<E>, "target" | "currentTarget">;

//export interface UseTableSectionContext<TableSectionElement extends Element, TableRowElement extends Element, TableCellElement extends Element, RM extends TableRowInfo<TableRowElement>, CM extends TableCellInfo<TableCellElement>> extends CompleteGridNavigationContext<TableSectionElement, TableRowElement, TableCellElement, M> {}

export interface UseTableSectionParameters<TableSectionElement extends Element, TableRowElement extends Element, TableCellElement extends Element, RM extends TableRowInfo<TableRowElement, TableCellElement>> extends UseCompleteGridNavigationParameters<TableSectionElement, TableRowElement, TableCellElement, RM> {
    tableSectionParameters: {
        tagTableSection: ElementToTag<TableSectionElement>;
    }
}
export interface UseTableSectionReturnType<TableSectionElement extends Element, TableRowElement extends Element, TableCellElement extends Element, RM extends TableRowInfo<TableRowElement, TableCellElement>, CM extends TableCellInfo<TableCellElement>> extends Omit<UseCompleteGridNavigationReturnType<TableSectionElement, TableRowElement, TableCellElement, RM, CM>, "props"> {
    propsTableSection: h.JSX.HTMLAttributes<TableSectionElement>;
    context: UseTableSectionContext<TableSectionElement, TableRowElement, TableCellElement, RM, CM>;
}
export interface UseTableRowReturnType<TableRowElement extends Element, TableCellElement extends Element, RM extends TableRowInfo<TableRowElement, TableCellElement>, CM extends TableCellInfo<TableCellElement>> extends UseCompleteGridNavigationRowReturnType<TableRowElement, TableCellElement, RM, CM> {

    context: UseTableRowContext<any, TableCellElement, CM>;

 }
export interface UseTableRowParameters<TableRowElement extends Element, TableCellElement extends Element, RM extends TableRowInfo<TableRowElement, TableCellElement>, CM extends TableCellInfo<TableCellElement>> extends UseCompleteGridNavigationRowParameters<TableRowElement, TableCellElement, RM, CM> {
    tableRowParameters: {
        /**
         * When the `selectionLimit` is `"single"`, this must be `null`.
         */
        selected: boolean | null;
        tagTableRow: ElementToTag<TableRowElement>;
    }
}

//export interface UseTableRowContext<TableSectionElement extends Element, TableRowElement extends Element, M extends TableRowInfo<TableRowElement>> extends CompleteGridNavigationContext<TableSectionElement, TableRowElement, M> {}
export interface UseTableRowContext<TableRowElement extends Element, TableCellElement extends Element, M extends TableCellInfo<TableCellElement>> extends CompleteGridNavigationRowContext<TableRowElement, TableCellElement, M> {}


export interface UseTableCellReturnType<TableCellElement extends Element, CM extends TableCellInfo<TableCellElement>> extends UseCompleteGridNavigationCellReturnType<TableCellElement, CM> {
 }
export interface UseTableCellParameters<TableCellElement extends Element, CM extends TableCellInfo<TableCellElement>> extends UseCompleteGridNavigationCellParameters<TableCellElement, CM> {
    tableCellParameters: {
        tagTableCell: ElementToTag<TableCellElement>;
    }
    context: UseTableRowContext<any, TableCellElement, CM>;
}

export interface TableRowInfo<TableRowElement extends Element, TableCellElement extends Element> extends GridSingleSelectSortableChildRowInfo<TableRowElement, TableCellElement> {  }
export interface TableCellInfo<TableCellElement extends Element> extends GridSingleSelectSortableChildCellInfo<TableCellElement> { }

export interface UseTableParameters<TableElement extends Element, LabelElement extends Element> {
    labelParameters: UseLabelSyntheticParameters["labelParameters"];
    tableParameters: Pick<UseListboxParameters<TableElement, any, LabelElement, any>["listboxParameters"], "selectionLimit"> & {
       tagTable: ElementToTag<TableElement>;
    };
}

export interface UseTableReturnType<TableElement extends Element, LabelElement extends Element> { 
    propsTable: h.JSX.HTMLAttributes<TableElement>;
    propsLabel: h.JSX.HTMLAttributes<LabelElement>;
 } 

 export interface UseTableSectionContext<TableSectionElement extends Element, TableRowElement extends Element, TableCellElement extends Element, RM extends TableRowInfo<TableRowElement, TableCellElement>, CM extends TableCellInfo<TableCellElement>> extends CompleteGridNavigationContext<TableSectionElement, TableRowElement, TableCellElement, RM, CM> {}

export function useTable<TableElement extends Element, LabelElement extends Element>({
    labelParameters,
    tableParameters: { selectionLimit, tagTable },
}: UseTableParameters<TableElement, LabelElement>): UseTableReturnType<TableElement, LabelElement> {
    //const { tagInput: tagTable } = labelParameters
    const {
        propsInput: propsLabelList,
        propsLabel: propsLabelLabel
    } = useLabelSynthetic<TableElement, LabelElement>({
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
export function useTableSection<TableSectionElement extends Element, TableRowElement extends Element, TableCellElement extends Element, RM extends TableRowInfo<TableRowElement, TableCellElement>, CM extends TableCellInfo<TableCellElement>>({
    linearNavigationParameters,
    rovingTabIndexParameters,
    singleSelectionParameters,
    typeaheadNavigationParameters,
    gridNavigationParameters,
    rearrangeableChildrenParameters,
    sortableChildrenParameters,
    tableSectionParameters: { tagTableSection }
}: UseTableSectionParameters<TableSectionElement, TableRowElement, TableCellElement, RM>): UseTableSectionReturnType<TableSectionElement, TableRowElement, TableCellElement, RM, CM> {

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
    } = useCompleteGridNavigation<TableSectionElement, TableRowElement, TableCellElement, RM, CM>({
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

export function useTableRow<TableRowElement extends Element, TableCellElement extends Element, RM extends TableRowInfo<TableRowElement, TableCellElement>, CM extends TableCellInfo<TableCellElement>>({
    asChildRowParameters: {
        managedChildParameters,
        singleSelectionChildParameters,
        completeGridNavigationRowParameters,
        rovingTabIndexChildParameters,
        sortableChildParameters,
        textContentParameters,
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
            textContentParameters,
            context: cx1,
            managedChildParameters,
            singleSelectionChildParameters,
            completeGridNavigationRowParameters,
            rovingTabIndexChildParameters, 
            sortableChildParameters
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
