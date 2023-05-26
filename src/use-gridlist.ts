import { h } from "preact";
import {
    assertEmptyObject,
    CompleteGridNavigationContext,
    CompleteGridNavigationRowContext,
    monitorCallCount, useCompleteGridNavigationCell,
    UseCompleteGridNavigationCellInfo,
    UseCompleteGridNavigationCellParameters,
    UseCompleteGridNavigationCellReturnType,
    useCompleteGridNavigationDeclarative, UseCompleteGridNavigationDeclarativeParameters, UseCompleteGridNavigationReturnType,
    useCompleteGridNavigationRow,
    UseCompleteGridNavigationRowInfo,
    UseCompleteGridNavigationRowParameters,
    UseCompleteGridNavigationRowReturnType,
    useMergedProps,
    usePress,
    UsePressParameters,
    UsePressReturnType, useStableCallback,
    useMemoObject
} from "preact-prop-helpers";
import { OmitStrong, Prefices } from "./props.js";
import { useLabelSynthetic, UseLabelSyntheticParameters } from "./use-label.js";
import { UseListboxParameters } from "./use-listbox.js";

export interface UseGridlistContext<GridlistElement extends Element, GridlistRowElement extends Element, GridlistCellElement extends Element, RM extends GridlistRowInfo<GridlistRowElement, GridlistCellElement>, CM extends GridlistCellInfo<GridlistCellElement>> extends CompleteGridNavigationContext<GridlistElement, GridlistRowElement, GridlistCellElement, RM, CM> {
    gridlistRowContext: { selectionLimit: "single" | "multi" | "none" }
}

export interface UseGridlistRowContext<ParentElement extends Element, ChildElement extends Element, M extends GridlistCellInfo<ChildElement>> extends CompleteGridNavigationRowContext<ParentElement, ChildElement, M> {

}

export interface UseGridlistParameters<GridlistElement extends Element, GridlistRowElement extends Element, GridlistCellElement extends Element, LabelElement extends Element, RM extends GridlistRowInfo<GridlistRowElement, GridlistCellElement>, CM extends GridlistCellInfo<GridlistCellElement>> extends OmitStrong<UseCompleteGridNavigationDeclarativeParameters<GridlistElement, GridlistRowElement, GridlistCellElement, RM, CM>, "singleSelectionDeclarativeParameters"> {
    labelParameters: OmitStrong<UseLabelSyntheticParameters["labelParameters"], "onLabelClick">;
    gridlistParameters: UseListboxParameters<GridlistElement, GridlistRowElement, LabelElement, RM>["listboxParameters"];
}
export interface UseGridlistReturnType<GridlistElement extends Element, GridlistRowElement extends Element, GridlistCellElement extends Element, LabelElement extends Element, RM extends GridlistRowInfo<GridlistRowElement, GridlistCellElement>, CM extends GridlistCellInfo<GridlistCellElement>> extends OmitStrong<UseCompleteGridNavigationReturnType<GridlistElement, GridlistRowElement, GridlistCellElement, RM, CM>, "singleSelectionReturn" | "props"> {
    propsGridlist: h.JSX.HTMLAttributes<GridlistElement>;
    propsGridlistLabel: h.JSX.HTMLAttributes<LabelElement>;
    context: UseGridlistContext<GridlistElement, GridlistRowElement, GridlistCellElement, RM, CM>;
}
export interface UseGridlistRowReturnType<GridlistRowElement extends Element, GridlistCellElement extends Element, RM extends GridlistRowInfo<GridlistRowElement, GridlistCellElement>, CM extends GridlistCellInfo<GridlistCellElement>> extends OmitStrong<UseCompleteGridNavigationRowReturnType<GridlistRowElement, GridlistCellElement, RM, CM>, never> {
    /*rowAsChildOfGridReturn: UseCompleteGridNavigationRowReturnType<GridlistRowElement, GridlistCellElement, RM, CM>["rowAsChildOfGridReturn"];
    rowAsParentOfCellsReturn: OmitStrong<UseCompleteGridNavigationRowReturnType<GridlistRowElement, GridlistCellElement, RM, CM>["rowAsParentOfCellsReturn"], "propsStable"> & {
        props: h.JSX.HTMLAttributes<GridlistRowElement>;
    };*/
}
export interface UseGridlistRowParameters<GridlistRowElement extends Element, GridlistCellElement extends Element, RM extends GridlistRowInfo<GridlistRowElement, GridlistCellElement>, CM extends GridlistCellInfo<GridlistCellElement>> extends OmitStrong<UseCompleteGridNavigationRowParameters<GridlistRowElement, GridlistCellElement, RM, CM>, "linearNavigationParameters"> {// extends UseCompleteGridNavigationRowParameters<GridlistRowElement, GridlistCellElement, RM, CM> {
    context: UseGridlistContext<any, GridlistRowElement, GridlistCellElement, RM, CM>;
    gridlistRowParameters: {
        /**
         * When the `selectionLimit` is `"single"`, this must be `null`.
         */
        selected: boolean | null;
    }

    //rovingTabIndexParameters: UseCompleteGridNavigationRowParameters<GridlistRowElement, GridlistCellElement, RM, CM>["rovingTabIndexParameters"];

    linearNavigationParameters: OmitStrong<UseCompleteGridNavigationRowParameters<GridlistRowElement, GridlistCellElement, RM, CM>["linearNavigationParameters"], "disableHomeEndKeys">
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
}: UseGridlistParameters<GridlistElement, GridlistRowElement, GridlistCellElement, LabelElement, RM, CM>): UseGridlistReturnType<GridlistElement, GridlistRowElement, GridlistCellElement, LabelElement, RM, CM> {

    monitorCallCount(useGridlist);

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
    } = useCompleteGridNavigationDeclarative<GridlistElement, GridlistRowElement, GridlistCellElement, RM, CM>({
        singleSelectionDeclarativeParameters: { selectedIndex: selectedIndex, onSelectedIndexChange },
        ...restParams
    });

    let propsGridlist = useMergedProps(props, propsLabelList, { "aria-multiselectable": (selectionLimit == "multi" ? "true" : undefined) });


    let fullContext = useMemoObject({
        ...context,
        gridlistRowContext: useMemoObject({
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
        propsGridlist,
        propsGridlistLabel: propsLabelLabel,
        ...restRet
    }
}

export function useGridlistRow<GridlistRowElement extends Element, GridlistCellElement extends Element, RM extends GridlistRowInfo<GridlistRowElement, GridlistCellElement>, CM extends GridlistCellInfo<GridlistCellElement>>({
    gridlistRowParameters: { selected },
    linearNavigationParameters,
    context: cx1,
    info,
    rovingTabIndexParameters,
    sortableChildParameters,
    textContentParameters,
    typeaheadNavigationParameters,
    singleSelectionParameters,
    ...void1
}: UseGridlistRowParameters<GridlistRowElement, GridlistCellElement, RM, CM>): UseGridlistRowReturnType<GridlistRowElement, GridlistCellElement, RM, CM> {
    monitorCallCount(useGridlistRow);
    assertEmptyObject(void1);

    const { gridlistRowContext: { selectionLimit } } = cx1;
    const {
        context: cx2,
        hasCurrentFocusParameters,
        hasCurrentFocusReturn,
        linearNavigationReturn,
        managedChildReturn,
        managedChildrenReturn,
        paginatedChildReturn,
        props,
        rovingTabIndexChildReturn,
        rovingTabIndexReturn,
        singleSelectionChildReturn,
        staggeredChildReturn,
        textContentReturn,
        typeaheadNavigationReturn

    } = useCompleteGridNavigationRow<GridlistRowElement, GridlistCellElement, RM, CM>({
        linearNavigationParameters: { disableHomeEndKeys: true, ...linearNavigationParameters },
        info,
        context: cx1,
        rovingTabIndexParameters,
        sortableChildParameters,
        textContentParameters,
        typeaheadNavigationParameters,
        singleSelectionParameters
    });

    // `selected` should only be true/false for multi-selection
    if (selectionLimit != "multi")
        console.assert(selected == null);

    props.role = "row";

    return {

        hasCurrentFocusParameters,
        linearNavigationReturn,
        managedChildrenReturn,
        managedChildReturn,
        paginatedChildReturn,
        rovingTabIndexChildReturn,
        rovingTabIndexReturn,
        singleSelectionChildReturn,
        staggeredChildReturn,
        textContentReturn,
        typeaheadNavigationReturn,
        context: cx2,
        hasCurrentFocusReturn,
        props

    }
}

export function useGridlistCell<GridlistCellElement extends Element, CM extends GridlistCellInfo<GridlistCellElement>>({ pressParameters, ...p }: UseGridlistCellParameters<GridlistCellElement, CM>): UseGridlistCellReturnType<GridlistCellElement, CM> {
    monitorCallCount(useGridlistCell);

    const { props, ...info } = useCompleteGridNavigationCell<GridlistCellElement, CM>(p);

    const {
        pressReturn,
        props: propsPress
    } = usePress({
        pressParameters: { ...pressParameters, focusSelf: p.info.focusSelf },
        refElementReturn: info.refElementReturn
    })

    return {
        ...info,
        props: useMergedProps(props, propsPress, { role: "gridcell" }),
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
