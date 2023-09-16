import {
    CompleteGridNavigationCellContext,
    CompleteGridNavigationRowContext,
    ElementProps,
    ExtendMerge,
    Nullable,
    TargetedOmit,
    TargetedPick,
    UseCompleteGridNavigationCellInfo,
    UseCompleteGridNavigationCellParameters,
    UseCompleteGridNavigationCellReturnType,
    UseCompleteGridNavigationDeclarativeParameters,
    UseCompleteGridNavigationReturnType,
    UseCompleteGridNavigationRowInfo,
    UseCompleteGridNavigationRowInfoKeysParameters,
    UseCompleteGridNavigationRowParameters,
    UseCompleteGridNavigationRowReturnType,
    UseGenericChildParameters,
    UsePressParameters,
    UsePressReturnType,
    assertEmptyObject,
    focus,
    useCompleteGridNavigationCell,
    useCompleteGridNavigationDeclarative,
    useCompleteGridNavigationRow,
    useMemoObject,
    useMergedProps,
    usePress,
    useStableCallback
} from "preact-prop-helpers";
import { OmitStrong, Prefices, monitored } from "./props.js";
import { UseLabelSyntheticParameters, useLabelSynthetic } from "./use-label.js";
import { UseListboxParameters, UseListboxParametersSelf } from "./use-listbox.js";

export interface UseGridlistContext<GridlistRowElement extends Element, RM extends GridlistRowInfo<GridlistRowElement>> extends CompleteGridNavigationRowContext<GridlistRowElement, RM> {
    //gridlistRowContext: { }
}

export interface UseGridlistRowContext<CellElement extends Element, M extends GridlistCellInfo<CellElement>> extends CompleteGridNavigationCellContext<CellElement, M> {

}

export interface UseGridlistParametersSelf extends UseListboxParametersSelf {

}

export interface UseGridlistParameters<GridlistElement extends Element, GridlistRowElement extends Element, LabelElement extends Element, RM extends GridlistRowInfo<GridlistRowElement>> extends
    OmitStrong<UseCompleteGridNavigationDeclarativeParameters<GridlistElement, GridlistRowElement, RM>, "rovingTabIndexParameters">,
    TargetedOmit<UseCompleteGridNavigationDeclarativeParameters<GridlistElement, GridlistRowElement, RM>, "rovingTabIndexParameters", "focusSelfParent">,
    TargetedOmit<UseLabelSyntheticParameters, "labelParameters", "onLabelClick">,
    TargetedOmit<UseListboxParameters<GridlistElement, GridlistRowElement, LabelElement, RM>, "listboxParameters", "orientation"> {

}
export interface UseGridlistReturnType<GridlistElement extends Element, GridlistRowElement extends Element, GridlistCellElement extends Element, LabelElement extends Element, RM extends GridlistRowInfo<GridlistRowElement>, CM extends GridlistCellInfo<GridlistCellElement>> extends OmitStrong<UseCompleteGridNavigationReturnType<GridlistElement, GridlistRowElement, RM>, "singleSelectionReturn" | "props"> {
    propsGridlist: ElementProps<GridlistElement>;
    propsGridlistLabel: ElementProps<LabelElement>;
    contextChildren: UseGridlistContext<GridlistRowElement, RM>;
}
export interface UseGridlistRowReturnType<GridlistRowElement extends Element, GridlistCellElement extends Element, RM extends GridlistRowInfo<GridlistRowElement>, CM extends GridlistCellInfo<GridlistCellElement>> extends OmitStrong<UseCompleteGridNavigationRowReturnType<GridlistRowElement, GridlistCellElement, RM, CM>, never> {

}

export interface UseGridlistRowParametersSelf {
    /**
     * **Multi-selection** only! When the `selectionLimit` is `"single"`, this must be `null`.
     */
    selected: Nullable<boolean>;
}

export interface UseGridlistRowParameters<GridlistRowElement extends Element, GridlistCellElement extends Element, RM extends GridlistRowInfo<GridlistRowElement>, CM extends GridlistCellInfo<GridlistCellElement>> extends
    UseGenericChildParameters<UseGridlistContext<GridlistRowElement, RM>, Pick<RM, UseCompleteGridNavigationRowInfoKeysParameters<RM>>>,
    OmitStrong<UseCompleteGridNavigationRowParameters<GridlistRowElement, GridlistCellElement, RM, CM>, never> {
    gridlistRowParameters: UseGridlistRowParametersSelf;
}


export interface UseGridlistCellReturnType<GridlistCellElement extends Element, CM extends GridlistCellInfo<GridlistCellElement>> extends OmitStrong<ExtendMerge<UseCompleteGridNavigationCellReturnType<GridlistCellElement, CM>, Pick<UsePressReturnType<GridlistCellElement>, "pressReturn">>, "props"> {
    propsCell: ElementProps<GridlistCellElement>;
    propsTabbable: ElementProps<any>;
    propsPress: ElementProps<any>;
}
export interface UseGridlistCellParameters<GridlistCellElement extends Element, CM extends GridlistCellInfo<GridlistCellElement>> extends
    UseCompleteGridNavigationCellParameters<GridlistCellElement, CM>,
    TargetedPick<UsePressParameters<GridlistCellElement>, "pressParameters", "longPressThreshold" | "onPressingChange" | "onPressSync"> {

}

export interface GridlistRowInfo<GridlistRowElement extends Element> extends UseCompleteGridNavigationRowInfo<GridlistRowElement> { }
export interface GridlistCellInfo<GridlistCellElement extends Element> extends UseCompleteGridNavigationCellInfo<GridlistCellElement> { }

/**
 * Implements a gridlist, effectively a [Listbox](https://www.w3.org/WAI/ARIA/apg/patterns/listbox/) enhanced with the capabilities of a [Grid](https://www.w3.org/WAI/ARIA/apg/patterns/grid/).
 * 
 * @remarks A Listbox is a very limited structure, essentially being just a list with no further interactive content allowed.
 * 
 * If you need a list where each list item has a menu or a button or other non-text content, a Gridlist is probably what you want.
 * 
 * @compositeParams
 * 
 * @hasChild {@link useGridlistRow}
 * @hasChild {@link useGridlistCell}
 */
export const useGridlist = monitored(function useGridlist<GridlistElement extends Element, GridlistRowElement extends Element, GridlistCellElement extends Element, LabelElement extends Element>({
    labelParameters,

    listboxParameters: { groupingType, ...void1 },
    rovingTabIndexParameters,
    singleSelectionParameters,
    gridNavigationParameters,
    linearNavigationParameters,
    multiSelectionParameters,
    paginatedChildrenParameters,
    refElementParameters,
    typeaheadNavigationParameters,
    singleSelectionDeclarativeParameters,
    ...void2
}: UseGridlistParameters<GridlistElement, GridlistRowElement, LabelElement, GridlistRowInfo<GridlistRowElement>>): UseGridlistReturnType<GridlistElement, GridlistRowElement, GridlistCellElement, LabelElement, GridlistRowInfo<GridlistRowElement>, GridlistCellInfo<GridlistCellElement>> {
    type RM = GridlistRowInfo<GridlistRowElement>;
    type CM = GridlistCellInfo<GridlistCellElement>;

    assertEmptyObject(void1);
    assertEmptyObject(void2);

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
        contextChildren,
        props,
        rovingTabIndexReturn,
        singleSelectionReturn,
        ...restRet
    } = useCompleteGridNavigationDeclarative<GridlistElement, GridlistRowElement, GridlistCellElement, RM, CM>({
        singleSelectionDeclarativeParameters,
        rovingTabIndexParameters: { ...rovingTabIndexParameters, focusSelfParent: focus },
        gridNavigationParameters,
        linearNavigationParameters,
        multiSelectionParameters,
        paginatedChildrenParameters,
        refElementParameters,
        singleSelectionParameters,
        typeaheadNavigationParameters
    });

    let propsGridlist = useMergedProps(props, propsLabelList, { "aria-multiselectable": (contextChildren.multiSelectionContext.multiSelectionMode != "disabled" ? "true" : undefined) });


    let fullContext = useMemoObject({
        ...contextChildren,
        gridlistRowContext: useMemoObject({
            //selectionLimit
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

    return {
        contextChildren: fullContext,
        rovingTabIndexReturn,
        propsGridlist,
        propsGridlistLabel: propsLabelLabel,
        ...restRet
    }
})

/**
 * @compositeParams
 * 
 */
export const useGridlistRow = monitored(function useGridlistRow<GridlistRowElement extends Element, GridlistCellElement extends Element>({
    gridlistRowParameters: { selected },
    linearNavigationParameters,
    context: cx1,
    info,
    rovingTabIndexParameters,
    textContentParameters,
    typeaheadNavigationParameters,
    hasCurrentFocusParameters,
    singleSelectionChildParameters,
    multiSelectionChildParameters,
    ...void1
}: UseGridlistRowParameters<GridlistRowElement, GridlistCellElement, GridlistRowInfo<GridlistRowElement>, GridlistCellInfo<GridlistCellElement>>): UseGridlistRowReturnType<GridlistRowElement, GridlistCellElement, GridlistRowInfo<GridlistRowElement>, GridlistCellInfo<GridlistCellElement>> {

    type RM = GridlistRowInfo<GridlistRowElement>;
    type CM = GridlistCellInfo<GridlistCellElement>;
    const {
        context: cx2,
        hasCurrentFocusReturn,
        linearNavigationReturn,
        managedChildReturn,
        managedChildrenReturn,
        props,
        rovingTabIndexChildReturn,
        rovingTabIndexReturn,
        singleSelectionChildReturn,
        textContentReturn,
        typeaheadNavigationReturn,
        pressParameters,
        multiSelectionChildReturn,
        ...void2
    } = useCompleteGridNavigationRow<GridlistRowElement, GridlistCellElement, RM, CM>({
        linearNavigationParameters,
        info,
        context: cx1,
        rovingTabIndexParameters,
        textContentParameters,
        typeaheadNavigationParameters,
        hasCurrentFocusParameters,

        singleSelectionChildParameters,
        multiSelectionChildParameters,
    });

    // `selected` should only be true/false for multi-selection
    if (cx1.multiSelectionContext.multiSelectionMode == "disabled")
        console.assert(selected == null);

    props.role = "row";

    assertEmptyObject(void1);
    assertEmptyObject(void2);

    return {
        pressParameters,
        linearNavigationReturn,
        managedChildrenReturn,
        managedChildReturn,
        rovingTabIndexChildReturn,
        rovingTabIndexReturn,
        singleSelectionChildReturn,
        multiSelectionChildReturn,
        textContentReturn,
        typeaheadNavigationReturn,
        context: cx2,
        hasCurrentFocusReturn,
        props

    }
})

/**
 * @compositeParams
 * 
 */
export const useGridlistCell = monitored(function useGridlistCell<GridlistCellElement extends Element>({ pressParameters: { onPressSync, longPressThreshold, onPressingChange, ...void1 }, ...p }: UseGridlistCellParameters<GridlistCellElement, GridlistCellInfo<GridlistCellElement>>): UseGridlistCellReturnType<GridlistCellElement, GridlistCellInfo<GridlistCellElement>> {
    const { props, refElementReturn, ...info } = useCompleteGridNavigationCell<GridlistCellElement, GridlistCellInfo<GridlistCellElement>>(p);

    assertEmptyObject(void1);

    const {
        pressReturn,
        props: propsPress
    } = usePress({
        pressParameters: { onPressSync, focusSelf: p.info.focusSelf, allowRepeatPresses: false, excludeEnter: null, excludePointer: null, excludeSpace: info.pressParameters.excludeSpace, longPressThreshold, onPressingChange },
        refElementReturn,
    })

    return {
        ...info,
        propsPress,
        propsCell: { role: "gridcell" },
        propsTabbable: props,
        refElementReturn,
        pressReturn
    }

})

/*interface UseGridlistSectionParameters {
    gridlistSectionParameters: {
        compareRows: (lhsIndex: number, rhsIndex: number) => number;
    }
    gridlistSectionContext: {

    }
}*/
