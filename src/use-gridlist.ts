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

export interface UseGridlistContext<GridlistRowElement extends Element, RM extends GridlistRowInfo<GridlistRowElement>> extends CompleteGridNavigationRowContext<GridlistRowElement, RM> {
    gridlistRowContext: {
        /**
         * If this is a list that allows selection, this controls whether it's single-selection or multi-selection.
         * 
         * Single-selection requires that you pass in a `selectedIndex` and listen for changes.
         * 
         * Multi-selection requires each child pass its own `selected` boolean prop and listen for changes to itself.
         */
        selectionLimit: "single" | "multi" | "none";
    }
}

export interface UseGridlistRowContext<CellElement extends Element, M extends GridlistCellInfo<CellElement>> extends CompleteGridNavigationCellContext<CellElement, M> {

}

export interface UseGridlistParametersSelf<GridlistElement extends Element, GridlistRowElement extends Element, LabelElement extends Element, RM extends GridlistRowInfo<GridlistRowElement>> extends UseListboxParametersSelf<GridlistElement, GridlistRowElement, LabelElement, RM> {

}

export interface UseGridlistParameters<GridlistElement extends Element, GridlistRowElement extends Element, LabelElement extends Element, RM extends GridlistRowInfo<GridlistRowElement>> extends
    OmitStrong<UseCompleteGridNavigationDeclarativeParameters<GridlistElement, GridlistRowElement, RM>, "singleSelectionDeclarativeParameters" | "rovingTabIndexParameters">,
    TargetedOmit<UseCompleteGridNavigationParameters<GridlistElement, GridlistRowElement, RM>, "rovingTabIndexParameters", "focusSelfParent">,
    TargetedOmit<UseLabelSyntheticParameters, "labelParameters", "onLabelClick">,
    Pick<UseListboxParameters<GridlistElement, GridlistRowElement, LabelElement, RM>, "listboxParameters"> {

}
export interface UseGridlistReturnType<GridlistElement extends Element, GridlistRowElement extends Element, GridlistCellElement extends Element, LabelElement extends Element, RM extends GridlistRowInfo<GridlistRowElement>, CM extends GridlistCellInfo<GridlistCellElement>> extends OmitStrong<UseCompleteGridNavigationReturnType<GridlistElement, GridlistRowElement, RM>, "singleSelectionReturn" | "props"> {
    propsGridlist: ElementProps<GridlistElement>;
    propsGridlistLabel: ElementProps<LabelElement>;
    context: UseGridlistContext<GridlistRowElement, RM>;
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
    OmitStrong<UseCompleteGridNavigationRowParameters<GridlistRowElement, GridlistCellElement, RM, CM>, never> {

    context: UseGridlistContext<GridlistRowElement, RM>;
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
 * Implements a gridlist, which is a hybrid of a [Listbox](https://www.w3.org/WAI/ARIA/apg/patterns/listbox/) and a [Grid](https://www.w3.org/WAI/ARIA/apg/patterns/grid/).
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
export function useGridlist<GridlistElement extends Element, GridlistRowElement extends Element, GridlistCellElement extends Element, LabelElement extends Element>({
    labelParameters,

    listboxParameters: { selectionLimit, groupingType, selectedIndex, onSelectedIndexChange },
    rovingTabIndexParameters,
    ...restParams
}: UseGridlistParameters<GridlistElement, GridlistRowElement, LabelElement, GridlistRowInfo<GridlistRowElement>>): UseGridlistReturnType<GridlistElement, GridlistRowElement, GridlistCellElement, LabelElement, GridlistRowInfo<GridlistRowElement>, GridlistCellInfo<GridlistCellElement>> {
    type RM = GridlistRowInfo<GridlistRowElement>;
    type CM = GridlistCellInfo<GridlistCellElement>;
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

/**
 * @compositeParams
 * 
 */
export function useGridlistRow<GridlistRowElement extends Element, GridlistCellElement extends Element>({
    gridlistRowParameters: { selected },
    linearNavigationParameters,
    context: cx1,
    info,
    rovingTabIndexParameters,
    textContentParameters,
    typeaheadNavigationParameters,
    hasCurrentFocusParameters,
    gridNavigationSingleSelectionSortableRowParameters,
    ...void1
}: UseGridlistRowParameters<GridlistRowElement, GridlistCellElement, GridlistRowInfo<GridlistRowElement>, GridlistCellInfo<GridlistCellElement>>): UseGridlistRowReturnType<GridlistRowElement, GridlistCellElement, GridlistRowInfo<GridlistRowElement>, GridlistCellInfo<GridlistCellElement>> {
    monitorCallCount(useGridlistRow);
    type RM = GridlistRowInfo<GridlistRowElement>;
    type CM = GridlistCellInfo<GridlistCellElement>;
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
        hasCurrentFocusParameters,
        gridNavigationSingleSelectionSortableRowParameters,
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

/**
 * @compositeParams
 * 
 */
export function useGridlistCell<GridlistCellElement extends Element>({ pressParameters: { onPressSync, longPressThreshold, onPressingChange, ...void1 }, ...p }: UseGridlistCellParameters<GridlistCellElement, GridlistCellInfo<GridlistCellElement>>): UseGridlistCellReturnType<GridlistCellElement, GridlistCellInfo<GridlistCellElement>> {
    monitorCallCount(useGridlistCell);

    const { props, ...info } = useCompleteGridNavigationCell<GridlistCellElement, GridlistCellInfo<GridlistCellElement>>(p);

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
