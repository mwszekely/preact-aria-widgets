import { h } from "preact";
import {
    CompleteGridNavigationContext,
    CompleteGridNavigationRowContext,
    GridSingleSelectSortableChildCellInfo,
    GridSingleSelectSortableChildRowInfo,
    useCompleteGridNavigation,
    useCompleteGridNavigationCell,
    UseCompleteGridNavigationCellParameters,
    UseCompleteGridNavigationCellReturnType,
    UseCompleteGridNavigationParameters,
    UseCompleteGridNavigationReturnType,
    useCompleteGridNavigationRow,
    UseCompleteGridNavigationRowParameters,
    UseCompleteGridNavigationRowReturnType,
    useMergedProps,
    useSingleSelectionDeclarative,
    useStableCallback,
    useStableObject
} from "preact-prop-helpers";
import { Prefices } from "./props";
import { useLabelSynthetic, UseLabelSyntheticParameters } from "./use-label";
import { UseListboxParameters } from "./use-listbox";

//type ListboxSingleSelectEvent<E extends EventTarget> = { [EventDetail]: { selectedIndex: number } } & Pick<h.JSX.TargetedEvent<E>, "target" | "currentTarget">;

export interface UseGridlistContext<GridlistElement extends Element, GridlistRowElement extends Element, GridlistCellElement extends Element, RM extends GridlistRowInfo<GridlistRowElement, GridlistCellElement>, CM extends GridlistCellInfo<GridlistCellElement>> extends CompleteGridNavigationContext<GridlistElement, GridlistRowElement, GridlistCellElement, RM, CM> {
    gridlistRowContext: { selectionLimit: "single" | "multi" }
}

export interface UseGridlistRowContext<ParentElement extends Element, ChildElement extends Element, M extends GridlistCellInfo<ChildElement>> extends CompleteGridNavigationRowContext<ParentElement, ChildElement, M> {

}

export interface UseGridlistParameters<GridlistElement extends Element, GridlistRowElement extends Element, GridlistCellElement extends Element, LabelElement extends Element, RM extends GridlistRowInfo<GridlistRowElement, GridlistCellElement>> extends Omit<UseCompleteGridNavigationParameters<GridlistElement, GridlistRowElement, GridlistCellElement, RM>, "singleSelectionParameters"> {
    labelParameters: Omit<UseLabelSyntheticParameters["labelParameters"], "onLabelClick">;
    gridlistParameters: UseListboxParameters<GridlistElement, GridlistRowElement, LabelElement, RM>["listboxParameters"];
}
export interface UseGridlistReturnType<GridlistElement extends Element, GridlistRowElement extends Element, GridlistCellElement extends Element, LabelElement extends Element, RM extends GridlistRowInfo<GridlistRowElement, GridlistCellElement>, CM extends GridlistCellInfo<GridlistCellElement>> extends Omit<UseCompleteGridNavigationReturnType<GridlistElement, GridlistRowElement, GridlistCellElement, RM, CM>, "props"> {
    propsGridlist: h.JSX.HTMLAttributes<GridlistElement>;
    propsGridlistLabel: h.JSX.HTMLAttributes<LabelElement>;
    context: UseGridlistContext<GridlistElement, GridlistRowElement, GridlistCellElement, RM, CM>;
}
export interface UseGridlistRowReturnType<GridlistRowElement extends Element, GridlistCellElement extends Element, RM extends GridlistRowInfo<GridlistRowElement, GridlistCellElement>, CM extends GridlistCellInfo<GridlistCellElement>> extends UseCompleteGridNavigationRowReturnType<GridlistRowElement, GridlistCellElement, RM, CM> { }
export interface UseGridlistRowParameters<GridlistRowElement extends Element, GridlistCellElement extends Element, RM extends GridlistRowInfo<GridlistRowElement, GridlistCellElement>, CM extends GridlistCellInfo<GridlistCellElement>> {// extends UseCompleteGridNavigationRowParameters<GridlistRowElement, GridlistCellElement, RM, CM> {

    rowAsChildOfGridParameters: UseCompleteGridNavigationRowParameters<GridlistRowElement, GridlistCellElement, RM, CM>["rowAsChildOfGridParameters"] & {
        context: UseGridlistContext<any, GridlistRowElement, GridlistCellElement, RM, CM>;
        gridlistRowParameters: {
            /**
             * When the `selectionLimit` is `"single"`, this must be `null`.
             */
            selected: boolean | null;
        }
    }
    rowAsParentOfCellsParameters: Omit<UseCompleteGridNavigationRowParameters<GridlistRowElement, GridlistCellElement, RM, CM>["rowAsParentOfCellsParameters"], "linearNavigationParameters"> & {
        linearNavigationParameters: Omit<UseCompleteGridNavigationRowParameters<GridlistRowElement, GridlistCellElement, RM, CM>["rowAsParentOfCellsParameters"]["linearNavigationParameters"], "indexMangler" | "indexDemangler" | "isValid">
        //typeaheadNavigationParameters: Omit<UseCompleteGridNavigationRowParameters<GridlistRowElement, GridlistCellElement, RM, CM>["rowAsParentOfCellsParameters"]["typeaheadNavigationParameters"], "isValid">
        //rovingTabIndexParameters: Omit<UseCompleteGridNavigationRowParameters<GridlistRowElement, GridlistCellElement, RM, CM>["rowAsParentOfCellsParameters"]["rovingTabIndexParameters"], "initiallyTabbedIndex">;
    }
    //context:  UseCompleteGridNavigationRowParameters<GridlistRowElement, GridlistCellElement, RM, CM>[""]
    //context: UseGridlistContext<any, GridlistRowElement, RM>;
    //gridlistRowContext: UseGridlistContext<any, GridlistRowElement, RM>["gridlistRowContext"];
}


export interface UseGridlistCellReturnType<GridlistCellElement extends Element, CM extends GridlistCellInfo<GridlistCellElement>> extends UseCompleteGridNavigationCellReturnType<GridlistCellElement, CM> { }
export interface UseGridlistCellParameters<GridlistCellElement extends Element, CM extends GridlistCellInfo<GridlistCellElement>> extends UseCompleteGridNavigationCellParameters<GridlistCellElement, CM> { }

export interface GridlistRowInfo<GridlistRowElement extends Element, GridlistCellElement extends Element> extends GridSingleSelectSortableChildRowInfo<GridlistRowElement, GridlistCellElement> { }
export interface GridlistCellInfo<GridlistCellElement extends Element> extends GridSingleSelectSortableChildCellInfo<GridlistCellElement> { }

export function useGridlist<GridlistElement extends Element, GridlistRowElement extends Element, GridlistCellElement extends Element, LabelElement extends Element, RM extends GridlistRowInfo<GridlistRowElement, GridlistCellElement>, CM extends GridlistCellInfo<GridlistCellElement>>({
    linearNavigationParameters,
    rovingTabIndexParameters,
    typeaheadNavigationParameters,
    labelParameters,
    gridlistParameters: { selectionLimit, groupingType, selectedIndex, setSelectedIndex },
    gridNavigationParameters,
    rearrangeableChildrenParameters,
    sortableChildrenParameters
}: UseGridlistParameters<GridlistElement, GridlistRowElement, GridlistCellElement, LabelElement, RM>): UseGridlistReturnType<GridlistElement, GridlistRowElement, GridlistCellElement, LabelElement, RM, CM> {

    const {
        propsInput: propsLabelList,
        propsLabel: propsLabelLabel,
        randomIdInputReturn: { id: _gridlistId },
        randomIdLabelReturn: { id: _labelId }
    } = useLabelSynthetic<GridlistElement, LabelElement>({
        labelParameters: {
            ...labelParameters,
            onLabelClick: useStableCallback(() => {
                rovingTabIndexReturn.focusSelf();
            })
        },
        randomIdInputParameters: { prefix: Prefices.gridlist },
        randomIdLabelParameters: { prefix: Prefices.gridlistLabel }
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
    } = useCompleteGridNavigation<GridlistElement, GridlistRowElement, GridlistCellElement, RM, CM>({
        linearNavigationParameters,
        rovingTabIndexParameters,
        singleSelectionParameters: { initiallySelectedIndex: selectedIndex, setSelectedIndex },
        sortableChildrenParameters,
        typeaheadNavigationParameters,
        gridNavigationParameters,
        rearrangeableChildrenParameters
    });

    const _v: void = useSingleSelectionDeclarative({ singleSelectionReturn, singleSelectionDeclarativeParameters: { selectedIndex } });

    let propsGridlist = useMergedProps(props, propsLabelList, { "aria-multiselectable": (selectionLimit == "multi" ? "true" : undefined) });


    let fullContext = useStableObject({
        ...context,
        gridlistRowContext: useStableObject({
            selectionLimit
        })
    });
    if (groupingType == "group")
        propsGridlist.role = "group";
    else if (groupingType == "with-groups") {
        // Intentionally clobbering all the list navigation stuff.
        propsGridlist = { role: "grid" };
        // ...actually, context too while we're at it.
        fullContext = null!
    }
    else {
        propsGridlist.role = "grid";
    }

    if (selectionLimit == "multi")
        console.assert(singleSelectionReturn.getSelectedIndex() == null)

    return {
        childrenHaveFocusReturn,
        context: fullContext,
        linearNavigationReturn,
        managedChildrenReturn,
        rovingTabIndexReturn,
        singleSelectionReturn,
        rearrangeableChildrenReturn,
        sortableChildrenReturn,
        typeaheadNavigationReturn,
        propsGridlist,
        propsGridlistLabel: propsLabelLabel
    }
}

export function useGridlistRow<GridlistRowElement extends Element, GridlistCellElement extends Element, RM extends GridlistRowInfo<GridlistRowElement, GridlistCellElement>, CM extends GridlistCellInfo<GridlistCellElement>>({
    rowAsChildOfGridParameters: {
        managedChildParameters,
        singleSelectionChildParameters,
        completeGridNavigationRowParameters,
        textContentParameters,
        rovingTabIndexChildParameters,
        sortableChildParameters,
        context: cx1,
        gridlistRowParameters: { selected }
    },
    rowAsParentOfCellsParameters: {
        linearNavigationParameters,
        rovingTabIndexParameters,
        typeaheadNavigationParameters
    }
}: UseGridlistRowParameters<GridlistRowElement, GridlistCellElement, RM, CM>): UseGridlistRowReturnType<GridlistRowElement, GridlistCellElement, RM, CM> {
    const { gridlistRowContext: { selectionLimit } } = cx1;
    const {
        rowAsChildOfGridReturn,
        rowAsParentOfCellsReturn,
        context: cx2,
        hasCurrentFocusReturn,
        props
    } = useCompleteGridNavigationRow<GridlistRowElement, GridlistCellElement, RM, CM>({
        rowAsChildOfGridParameters: {
            managedChildParameters,
            textContentParameters,
            singleSelectionChildParameters,
            completeGridNavigationRowParameters,
            rovingTabIndexChildParameters,
            sortableChildParameters,
            context: cx1
        },
        rowAsParentOfCellsParameters: {
            linearNavigationParameters: { ...linearNavigationParameters },
            rovingTabIndexParameters,
            typeaheadNavigationParameters: { ...typeaheadNavigationParameters }
        }
    });

    if (selectionLimit == "single")
        console.assert(selected == null);

    props.role = "option";

    return {
        rowAsChildOfGridReturn,
        rowAsParentOfCellsReturn,
        context: cx2,
        hasCurrentFocusReturn,
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
