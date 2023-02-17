import { h } from "preact";
import {
    CompleteGridNavigationContext,
    CompleteGridNavigationRowContext,
    useCompleteGridNavigation,
    useCompleteGridNavigationCell,
    UseCompleteGridNavigationCellInfo,
    UseCompleteGridNavigationCellParameters,
    UseCompleteGridNavigationCellReturnType,
    UseCompleteGridNavigationParameters,
    UseCompleteGridNavigationReturnType,
    useCompleteGridNavigationRow,
    UseCompleteGridNavigationRowInfo,
    UseCompleteGridNavigationRowParameters,
    UseCompleteGridNavigationRowReturnType,
    useMergedProps,
    usePress,
    UsePressParameters,
    UsePressReturnType,
    useSingleSelectionDeclarative,
    useStableCallback,
    useStableObject
} from "preact-prop-helpers";
import { OmitStrong, Prefices } from "./props";
import { useLabelSynthetic, UseLabelSyntheticParameters } from "./use-label";
import { UseListboxParameters } from "./use-listbox";

export interface UseGridlistContext<GridlistElement extends Element, GridlistRowElement extends Element, GridlistCellElement extends Element, RM extends GridlistRowInfo<GridlistRowElement, GridlistCellElement>, CM extends GridlistCellInfo<GridlistCellElement>> extends CompleteGridNavigationContext<GridlistElement, GridlistRowElement, GridlistCellElement, RM, CM> {
    gridlistRowContext: { selectionLimit: "single" | "multi" | "none" }
}

export interface UseGridlistRowContext<ParentElement extends Element, ChildElement extends Element, M extends GridlistCellInfo<ChildElement>> extends CompleteGridNavigationRowContext<ParentElement, ChildElement, M> {

}

export interface UseGridlistParameters<GridlistElement extends Element, GridlistRowElement extends Element, GridlistCellElement extends Element, LabelElement extends Element, RM extends GridlistRowInfo<GridlistRowElement, GridlistCellElement>> extends OmitStrong<UseCompleteGridNavigationParameters<GridlistElement, GridlistRowElement, GridlistCellElement, RM>, "singleSelectionParameters"> {
    labelParameters: OmitStrong<UseLabelSyntheticParameters["labelParameters"], "onLabelClick">;
    gridlistParameters: UseListboxParameters<GridlistElement, GridlistRowElement, LabelElement, RM>["listboxParameters"];
}
export interface UseGridlistReturnType<GridlistElement extends Element, GridlistRowElement extends Element, GridlistCellElement extends Element, LabelElement extends Element, RM extends GridlistRowInfo<GridlistRowElement, GridlistCellElement>, CM extends GridlistCellInfo<GridlistCellElement>> extends OmitStrong<UseCompleteGridNavigationReturnType<GridlistElement, GridlistRowElement, GridlistCellElement, RM, CM>, "props"> {
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
    rowAsParentOfCellsParameters: OmitStrong<UseCompleteGridNavigationRowParameters<GridlistRowElement, GridlistCellElement, RM, CM>["rowAsParentOfCellsParameters"], "linearNavigationParameters"> & {
        linearNavigationParameters: OmitStrong<UseCompleteGridNavigationRowParameters<GridlistRowElement, GridlistCellElement, RM, CM>["rowAsParentOfCellsParameters"]["linearNavigationParameters"], "disableHomeEndKeys">
    }
}


export interface UseGridlistCellReturnType<GridlistCellElement extends Element, CM extends GridlistCellInfo<GridlistCellElement>> extends UseCompleteGridNavigationCellReturnType<GridlistCellElement, CM>, Pick<UsePressReturnType<GridlistCellElement>, "pressReturn"> { }
export interface UseGridlistCellParameters<GridlistCellElement extends Element, CM extends GridlistCellInfo<GridlistCellElement>> extends UseCompleteGridNavigationCellParameters<GridlistCellElement, CM> {
    pressParameters: Pick<UsePressParameters<GridlistCellElement>["pressParameters"], "onPressSync">;
}

export interface GridlistRowInfo<GridlistRowElement extends Element, GridlistCellElement extends Element> extends UseCompleteGridNavigationRowInfo<GridlistRowElement, GridlistCellElement> { }
export interface GridlistCellInfo<GridlistCellElement extends Element> extends UseCompleteGridNavigationCellInfo<GridlistCellElement> { }

export function useGridlist<GridlistElement extends Element, GridlistRowElement extends Element, GridlistCellElement extends Element, LabelElement extends Element, RM extends GridlistRowInfo<GridlistRowElement, GridlistCellElement>, CM extends GridlistCellInfo<GridlistCellElement>>({
    labelParameters,
    gridlistParameters: { selectionLimit, groupingType, selectedIndex, onSelectedIndexChange },
    ...restParams
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
        context,
        props,
        rovingTabIndexReturn,
        singleSelectionReturn,
        ...restRet
    } = useCompleteGridNavigation<GridlistElement, GridlistRowElement, GridlistCellElement, RM, CM>({
        singleSelectionParameters: { initiallySelectedIndex: selectedIndex, onSelectedIndexChange },
        ...restParams
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
        context: fullContext,
        rovingTabIndexReturn,
        singleSelectionReturn,
        propsGridlist,
        propsGridlistLabel: propsLabelLabel,
        ...restRet
    }
}

export function useGridlistRow<GridlistRowElement extends Element, GridlistCellElement extends Element, RM extends GridlistRowInfo<GridlistRowElement, GridlistCellElement>, CM extends GridlistCellInfo<GridlistCellElement>>({
    rowAsChildOfGridParameters: {
        gridlistRowParameters: { selected },
        ...rowAsChildOfGridParameters
    },
    rowAsParentOfCellsParameters: {
        linearNavigationParameters,
        ...rowAsParentOfCellsParameters
    }
}: UseGridlistRowParameters<GridlistRowElement, GridlistCellElement, RM, CM>): UseGridlistRowReturnType<GridlistRowElement, GridlistCellElement, RM, CM> {
    const { gridlistRowContext: { selectionLimit } } = rowAsChildOfGridParameters.context;
    const {
        rowAsChildOfGridReturn,
        rowAsParentOfCellsReturn,
        context: cx2,
        hasCurrentFocusReturn,
        props
    } = useCompleteGridNavigationRow<GridlistRowElement, GridlistCellElement, RM, CM>({
        rowAsChildOfGridParameters,
        rowAsParentOfCellsParameters: {
            linearNavigationParameters: { disableHomeEndKeys: true, ...linearNavigationParameters },
            ...rowAsParentOfCellsParameters
        }
    });

    // `selected` should only be true/false for multi-selection
    if (selectionLimit != "multi")
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

export function useGridlistCell<GridlistCellElement extends Element, CM extends GridlistCellInfo<GridlistCellElement>>({ pressParameters, ...p }: UseGridlistCellParameters<GridlistCellElement, CM>): UseGridlistCellReturnType<GridlistCellElement, CM> {

    const { props, ...info } = useCompleteGridNavigationCell<GridlistCellElement, CM>(p);

    const {
        pressReturn
    } = usePress({
        pressParameters: { ...pressParameters, focusSelf: p.completeGridNavigationCellParameters.focusSelf },
        refElementReturn: info.refElementReturn
    })

    return {
        ...info,
        props: useMergedProps(props, pressReturn.propsUnstable),
        pressReturn
    }

}

/*interface UseGridlistSectionParameters {
    gridlistSectionParameters: {
        compareRows: (lhsIndex: number, rhsIndex: number) => number;
    }
    gridlistSectionContext: {

    }
}*/
