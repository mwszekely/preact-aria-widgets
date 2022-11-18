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
import { EventDetail } from "./props";
import { useLabel, UseLabelParameters } from "./use-label";

export type ListboxSingleSelectEvent<E extends EventTarget> = { [EventDetail]: { selectedIndex: number } } & Pick<h.JSX.TargetedEvent<E>, "target" | "currentTarget">;

export interface UseGridlistContext<GridlistElement extends Element, GridlistRowElement extends Element, M extends GridlistRowInfo<GridlistRowElement>> extends CompleteGridNavigationContext<GridlistElement, GridlistRowElement, M> {
    gridlistRowContext: { selectionLimit: "single" | "multi" }
}

export interface UseGridlistParameters<GridlistElement extends Element, GridlistRowElement extends Element, LabelElement extends Element, M extends GridlistRowInfo<GridlistRowElement>> extends UseCompleteGridNavigationParameters<GridlistElement, GridlistRowElement, M> {
    labelParameters: UseLabelParameters<GridlistElement, LabelElement>["labelParameters"];
    gridlistParameters: UseListboxParameters<GridlistElement, GridlistRowElement, LabelElement, M>["listboxParameters"];
}
export interface UseGridlistReturnType<GridlistElement extends Element, GridlistRowElement extends Element, LabelElement extends Element, M extends GridlistRowInfo<GridlistRowElement>> extends Omit<UseCompleteGridNavigationReturnType<GridlistElement, GridlistRowElement, M>, "props"> {
    propsGridlist: h.JSX.HTMLAttributes<GridlistElement>;
    propsGridlistLabel: h.JSX.HTMLAttributes<LabelElement>;
    context: UseGridlistContext<GridlistElement, GridlistRowElement, M>;
}
export interface UseGridlistRowReturnType<GridlistRowElement extends Element, GridlistCellElement extends Element, RM extends GridlistRowInfo<GridlistRowElement>, CM extends GridlistCellInfo<GridlistCellElement>> extends UseCompleteGridNavigationRowReturnType<GridlistRowElement, GridlistCellElement, RM, CM> { }
export interface UseGridlistRowParameters<GridlistRowElement extends Element, GridlistCellElement extends Element, RM extends GridlistRowInfo<GridlistRowElement>, CM extends GridlistCellInfo<GridlistCellElement>> extends UseCompleteGridNavigationRowParameters<GridlistRowElement, GridlistCellElement, RM, CM> {
    gridlistRowParameters: {
        /**
         * When the `selectionLimit` is `"single"`, this must be `null`.
         */
        selected: boolean | null;
    }
    gridlistRowContext: UseGridlistContext<any, GridlistRowElement, RM>["gridlistRowContext"];
}


export interface UseGridlistCellReturnType<GridlistCellElement extends Element, CM extends GridlistCellInfo<GridlistCellElement>> extends UseCompleteGridNavigationCellReturnType<GridlistCellElement, CM> { }
export interface UseGridlistCellParameters<GridlistCellElement extends Element, CM extends GridlistCellInfo<GridlistCellElement>> extends UseCompleteGridNavigationCellParameters<GridlistCellElement, CM> { }

export interface GridlistRowInfo<GridlistRowElement extends Element> extends GridSingleSelectSortableChildRowInfo<GridlistRowElement> { locationIndex: number; }
export interface GridlistCellInfo<GridlistCellElement extends Element> extends GridSingleSelectSortableChildCellInfo<GridlistCellElement> { }

export function useGridlist<GridlistElement extends Element, GridlistRowElement extends Element, LabelElement extends Element, M extends GridlistRowInfo<GridlistRowElement>>({
    linearNavigationParameters,
    rovingTabIndexParameters,
    singleSelectionParameters,
    typeaheadNavigationParameters,
    labelParameters,
    gridlistParameters: { selectionLimit },
    gridNavigationParameters,
    rearrangeableChildrenParameters,
    sortableChildrenParameters
}: UseGridlistParameters<GridlistElement, GridlistRowElement, LabelElement, M>): UseGridlistReturnType<GridlistElement, GridlistRowElement, LabelElement, M> {

    const {
        propsInput: propsLabelList,
        propsLabel: propsLabelLabel,
        randomIdInputReturn,
        randomIdLabelReturn
    } = useLabel<GridlistElement, LabelElement>({
        labelParameters,
        randomIdInputParameters: { prefix: "aria-listbox-input-" },
        randomIdLabelParameters: { prefix: "aria-listbox-label-" }
    });
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
    } = useCompleteGridNavigation<GridlistElement, GridlistRowElement, M>({
        linearNavigationParameters,
        rovingTabIndexParameters,
        singleSelectionParameters,
        sortableChildrenParameters,
        typeaheadNavigationParameters,
        gridNavigationParameters,
        rearrangeableChildrenParameters
    });


    if (selectionLimit == "multi")
        console.assert(singleSelectionReturn.getSelectedIndex() == null)

    return {
        childrenHaveFocusReturn,
        context: useStableObject({
            ...context,
            gridlistRowContext: useStableObject({
                selectionLimit
            })
        }),
        linearNavigationReturn,
        managedChildrenReturn,
        rovingTabIndexReturn,
        singleSelectionReturn,
        rearrangeableChildrenReturn,
        sortableChildrenReturn,
        typeaheadNavigationReturn,
        propsGridlist: useMergedProps(props, propsLabelList, { "aria-multiselectable": (selectionLimit == "multi" ? "true" : undefined) }),
        propsGridlistLabel: propsLabelLabel
    }
}

export function useGridlistRow<GridlistRowElement extends Element, GridlistCellElement extends Element, RM extends GridlistRowInfo<GridlistRowElement>, CM extends GridlistCellInfo<GridlistCellElement>>({
    asChildRowParameters: {
        managedChildContext,
        managedChildParameters,
        rovingTabIndexChildContext,
        singleSelectionChildParameters,
        singleSelectionContext,
        typeaheadNavigationChildContext,
        typeaheadNavigationChildParameters,
        completeGridNavigationRowParameters,
        gridNavigationRowContext
    },
    asParentRowParameters: {
        linearNavigationParameters,
        rovingTabIndexParameters,
        typeaheadNavigationParameters
    },
    gridlistRowParameters: { selected },
    gridlistRowContext: { selectionLimit }
}: UseGridlistRowParameters<GridlistRowElement, GridlistCellElement, RM, CM>): UseGridlistRowReturnType<GridlistRowElement, GridlistCellElement, RM, CM> {
    const {
        asChildRowReturn,
        asParentRowReturn,
        context,
        managedChildReturn,
        props
    } = useCompleteGridNavigationRow<GridlistRowElement, GridlistCellElement, RM, CM>({
        asChildRowParameters: {
            managedChildContext,
            managedChildParameters,
            rovingTabIndexChildContext,
            singleSelectionChildParameters,
            singleSelectionContext,
            typeaheadNavigationChildContext,
            typeaheadNavigationChildParameters,
            completeGridNavigationRowParameters,
            gridNavigationRowContext
        },
        asParentRowParameters: {
            linearNavigationParameters,
            rovingTabIndexParameters,
            typeaheadNavigationParameters
        }
    });

    if (selectionLimit == "single")
        console.assert(selected == null);

    props.role = "option";

    return {
        asChildRowReturn,
        asParentRowReturn,
        context,
        managedChildReturn,
        props
    }
}

export function useGridlistCell<GridlistCellElement extends Element, CM extends GridlistCellInfo<GridlistCellElement>>(p: UseGridlistCellParameters<GridlistCellElement, CM>): UseGridlistCellReturnType<GridlistCellElement, CM> {
    return useCompleteGridNavigationCell<GridlistCellElement, CM>(p);
}

export interface UseGridlistSectionParameters {
    gridlistSectionParameters: {
        compareRows: (lhsIndex: number, rhsIndex: number) => number;
    }
    gridlistSectionContext: {

    }
}
/*
export const useGridlistSection = <BodySectionElement extends Element, RowElement extends Element>({ compareRows }: UseGridlistSectionParameters) => {
    //debugLog("useGridlistSection");
    //type CRFull = UseRovingTabIndexSubInfo<RowElement, UseListNavigationSubInfo<UseGridlistRowSubInfo<CellElement, CR, CC>>>;
    const getIndex = useCallback<GetIndex<any>>((i) => i.props.index, []);


    const {
        linearNavigationParameters,
        rearrangeableChildrenReturn,
        sortableChildrenReturn
    } = useSortableChildren<BodySectionElement, GridlistRowInfo<RowElement>>({
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

    const useGridlistSectionProps = (props: h.JSX.HTMLAttributes<BodySectionElement>) => {
        console.assert(props.children != null);
        overwriteWithWarning("useGridlistSection", props, "role", "rowgroup");
        return useSortableProps(props as h.JSX.HTMLAttributes<BodySectionElement> & { children: any });
    }

    return {
        useGridlistSectionProps,
        ...sortableRet
    }
}*/
