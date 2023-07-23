import {
    CompleteGridNavigationCellContext,
    CompleteGridNavigationRowContext,
    ElementProps,
    ExtendMerge,
    TargetedOmit,
    UseCompleteGridNavigationCellInfo,
    UseCompleteGridNavigationCellParameters,
    UseCompleteGridNavigationCellReturnType,
    UseCompleteGridNavigationDeclarativeParameters,
    UseCompleteGridNavigationParameters,
    UseCompleteGridNavigationReturnType,
    UseCompleteGridNavigationRowInfo,
    UseCompleteGridNavigationRowParameters,
    UseCompleteGridNavigationRowReturnType,
    UsePressParameters,
    UsePressReturnType,
    assertEmptyObject,
    focus,
    monitorCallCount, useCompleteGridNavigationCell,
    useCompleteGridNavigationDeclarative,
    useCompleteGridNavigationRow,
    useMemoObject,
    useMergedProps,
    usePress,
    useStableCallback
} from "preact-prop-helpers";
import { OmitStrong, Prefices } from "./props.js";
import { UseLabelSyntheticParameters, useLabelSynthetic } from "./use-label.js";
import { UseListboxParameters, UseListboxParametersSelf } from "./use-listbox.js";

export interface UseGridlistContext<GridlistElement extends Element, GridlistRowElement extends Element, GridlistCellElement extends Element, RM extends GridlistRowInfo<GridlistRowElement, GridlistCellElement>, CM extends GridlistCellInfo<GridlistCellElement>> extends CompleteGridNavigationRowContext<GridlistElement, GridlistRowElement, GridlistCellElement, RM, CM> {
    gridlistRowContext: { selectionLimit: "single" | "multi" | "none" }
}

export interface UseGridlistRowContext<ParentElement extends Element, ChildElement extends Element, M extends GridlistCellInfo<ChildElement>> extends CompleteGridNavigationCellContext<ParentElement, ChildElement, M> {

}

export interface UseGridlistParametersSelf<GridlistElement extends Element, GridlistRowElement extends Element, GridlistCellElement extends Element, LabelElement extends Element, RM extends GridlistRowInfo<GridlistRowElement, GridlistCellElement>, CM extends GridlistCellInfo<GridlistCellElement>> extends UseListboxParametersSelf<GridlistElement, GridlistRowElement, LabelElement, RM> {

}

export interface UseGridlistParameters<GridlistElement extends Element, GridlistRowElement extends Element, GridlistCellElement extends Element, LabelElement extends Element, RM extends GridlistRowInfo<GridlistRowElement, GridlistCellElement>, CM extends GridlistCellInfo<GridlistCellElement>> extends
    OmitStrong<UseCompleteGridNavigationDeclarativeParameters<GridlistElement, GridlistRowElement, GridlistCellElement, RM, CM>, "singleSelectionDeclarativeParameters" | "rovingTabIndexParameters">,
    TargetedOmit<UseCompleteGridNavigationParameters<GridlistElement, GridlistRowElement, GridlistCellElement, RM>, "rovingTabIndexParameters", "focusSelfParent">,
    TargetedOmit<UseLabelSyntheticParameters, "labelParameters", "onLabelClick">,
    Pick<UseListboxParameters<GridlistElement, GridlistRowElement, LabelElement, RM>, "listboxParameters"> {

}
export interface UseGridlistReturnType<GridlistElement extends Element, GridlistRowElement extends Element, GridlistCellElement extends Element, LabelElement extends Element, RM extends GridlistRowInfo<GridlistRowElement, GridlistCellElement>, CM extends GridlistCellInfo<GridlistCellElement>> extends OmitStrong<UseCompleteGridNavigationReturnType<GridlistElement, GridlistRowElement, GridlistCellElement, RM, CM>, "singleSelectionReturn" | "props"> {
    propsGridlist: ElementProps<GridlistElement>;
    propsGridlistLabel: ElementProps<LabelElement>;
    context: UseGridlistContext<GridlistElement, GridlistRowElement, GridlistCellElement, RM, CM>;
}
export interface UseGridlistRowReturnType<GridlistRowElement extends Element, GridlistCellElement extends Element, RM extends GridlistRowInfo<GridlistRowElement, GridlistCellElement>, CM extends GridlistCellInfo<GridlistCellElement>> extends OmitStrong<UseCompleteGridNavigationRowReturnType<GridlistRowElement, GridlistCellElement, RM, CM>, never> {

}

export interface UseGridlistRowParametersSelf {
    /**
     * When the `selectionLimit` is `"single"`, this must be `null`.
     */
    selected: boolean | null;
}

export interface UseGridlistRowParameters<GridlistRowElement extends Element, GridlistCellElement extends Element, RM extends GridlistRowInfo<GridlistRowElement, GridlistCellElement>, CM extends GridlistCellInfo<GridlistCellElement>> extends
    OmitStrong<UseCompleteGridNavigationRowParameters<GridlistRowElement, GridlistCellElement, RM, CM>, never> {

    context: UseGridlistContext<any, GridlistRowElement, GridlistCellElement, RM, CM>;
    gridlistRowParameters: UseGridlistRowParametersSelf;
}


export interface UseGridlistCellReturnType<GridlistCellElement extends Element, CM extends GridlistCellInfo<GridlistCellElement>> extends OmitStrong<ExtendMerge<UseCompleteGridNavigationCellReturnType<GridlistCellElement, CM>, Pick<UsePressReturnType<GridlistCellElement>, "pressReturn">>, "props"> {
    propsCell: ElementProps<GridlistCellElement>;
    propsTabbable: ElementProps<any>;
    propsPress: ElementProps<any>;
}
export interface UseGridlistCellParameters<GridlistCellElement extends Element, CM extends GridlistCellInfo<GridlistCellElement>> extends UseCompleteGridNavigationCellParameters<GridlistCellElement, CM> {
    pressParameters: Pick<UsePressParameters<GridlistCellElement>["pressParameters"], "longPressThreshold" | "onPressingChange" | "onPressSync">;
}

export interface GridlistRowInfo<GridlistRowElement extends Element, GridlistCellElement extends Element> extends UseCompleteGridNavigationRowInfo<GridlistRowElement, GridlistCellElement> { }
export interface GridlistCellInfo<GridlistCellElement extends Element> extends UseCompleteGridNavigationCellInfo<GridlistCellElement> { }

export function useGridlist<GridlistElement extends Element, GridlistRowElement extends Element, GridlistCellElement extends Element, LabelElement extends Element, RM extends GridlistRowInfo<GridlistRowElement, GridlistCellElement>, CM extends GridlistCellInfo<GridlistCellElement>>({
    labelParameters,

    listboxParameters: { selectionLimit, groupingType, selectedIndex, onSelectedIndexChange },
    rovingTabIndexParameters,
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
        rovingTabIndexParameters: { ...rovingTabIndexParameters, focusSelfParent: focus },
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
    textContentParameters,
    typeaheadNavigationParameters,
    ...void1
}: UseGridlistRowParameters<GridlistRowElement, GridlistCellElement, RM, CM>): UseGridlistRowReturnType<GridlistRowElement, GridlistCellElement, RM, CM> {
    monitorCallCount(useGridlistRow);

    const { gridlistRowContext: { selectionLimit } } = cx1;
    const {
        context: cx2,
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
        typeaheadNavigationReturn,
        pressParameters,
        ...void2

    } = useCompleteGridNavigationRow<GridlistRowElement, GridlistCellElement, RM, CM>({
        linearNavigationParameters,
        info,
        context: cx1,
        rovingTabIndexParameters,
        textContentParameters,
        typeaheadNavigationParameters,
    });

    // `selected` should only be true/false for multi-selection
    if (selectionLimit != "multi")
        console.assert(selected == null);

    props.role = "row";

    assertEmptyObject(void1);
    assertEmptyObject(void2);

    return {
        pressParameters,
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

export function useGridlistCell<GridlistCellElement extends Element, CM extends GridlistCellInfo<GridlistCellElement>>({ pressParameters: { onPressSync, longPressThreshold, onPressingChange, ...void1 }, ...p }: UseGridlistCellParameters<GridlistCellElement, CM>): UseGridlistCellReturnType<GridlistCellElement, CM> {
    monitorCallCount(useGridlistCell);

    const { props, ...info } = useCompleteGridNavigationCell<GridlistCellElement, CM>(p);

    assertEmptyObject(void1);

    const {
        pressReturn,
        props: propsPress
    } = usePress({
        pressParameters: { onPressSync, focusSelf: p.info.focusSelf, allowRepeatPresses: false, excludeEnter: null, excludePointer: null, excludeSpace: info.pressParameters.excludeSpace, longPressThreshold, onPressingChange },
        refElementReturn: info.refElementReturn
    })

    return {
        ...info,
        propsPress,
        propsCell: { role: "gridcell" },
        propsTabbable: props,
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
