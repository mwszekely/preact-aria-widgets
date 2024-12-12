import { CompleteGridNavigationCellContext, CompleteGridNavigationRowContext, ElementProps, ExtendMerge, Nullable, TargetedOmit, TargetedPick, UseCompleteGridNavigationCellInfo, UseCompleteGridNavigationCellParameters, UseCompleteGridNavigationCellReturnType, UseCompleteGridNavigationDeclarativeParameters, UseCompleteGridNavigationReturnType, UseCompleteGridNavigationRowInfo, UseCompleteGridNavigationRowInfoKeysParameters, UseCompleteGridNavigationRowParameters, UseCompleteGridNavigationRowReturnType, UseGenericChildParameters, UsePressParameters, UsePressReturnType } from "preact-prop-helpers";
import { OmitStrong } from "./props.js";
import { UseLabelSyntheticParameters } from "./use-label.js";
import { UseListboxParameters, UseListboxParametersSelf } from "./use-listbox.js";
export interface UseGridlistContext<GridlistRowElement extends Element, RM extends GridlistRowInfo<GridlistRowElement>> extends CompleteGridNavigationRowContext<GridlistRowElement, RM> {
}
export interface UseGridlistRowContext<CellElement extends Element, M extends GridlistCellInfo<CellElement>> extends CompleteGridNavigationCellContext<CellElement, M> {
}
export interface UseGridlistParametersSelf extends UseListboxParametersSelf {
}
export interface UseGridlistParameters<GridlistElement extends Element, GridlistRowElement extends Element, LabelElement extends Element, RM extends GridlistRowInfo<GridlistRowElement>> extends OmitStrong<UseCompleteGridNavigationDeclarativeParameters<GridlistElement, GridlistRowElement, RM>, "rovingTabIndexParameters">, TargetedOmit<UseCompleteGridNavigationDeclarativeParameters<GridlistElement, GridlistRowElement, RM>, "rovingTabIndexParameters", "focusSelfParent">, TargetedOmit<UseLabelSyntheticParameters, "labelParameters", "onLabelClick">, TargetedOmit<UseListboxParameters<GridlistElement, GridlistRowElement, LabelElement, RM>, "listboxParameters", "orientation"> {
}
export interface UseGridlistReturnType<GridlistElement extends Element, GridlistRowElement extends Element, LabelElement extends Element, RM extends GridlistRowInfo<GridlistRowElement>> extends OmitStrong<UseCompleteGridNavigationReturnType<GridlistElement, GridlistRowElement, RM>, "singleSelectionReturn" | "props"> {
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
export interface UseGridlistRowParameters<GridlistRowElement extends Element, GridlistCellElement extends Element, RM extends GridlistRowInfo<GridlistRowElement>, CM extends GridlistCellInfo<GridlistCellElement>> extends UseGenericChildParameters<UseGridlistContext<GridlistRowElement, RM>, Pick<RM, UseCompleteGridNavigationRowInfoKeysParameters<RM>>>, OmitStrong<UseCompleteGridNavigationRowParameters<GridlistRowElement, GridlistCellElement, RM, CM>, never> {
    gridlistRowParameters: UseGridlistRowParametersSelf;
}
export interface UseGridlistCellReturnType<GridlistCellElement extends Element, CM extends GridlistCellInfo<GridlistCellElement>> extends OmitStrong<ExtendMerge<UseCompleteGridNavigationCellReturnType<GridlistCellElement, CM>, Pick<UsePressReturnType<GridlistCellElement>, "pressReturn">>, "props"> {
    propsCell: ElementProps<GridlistCellElement>;
    propsTabbable: ElementProps<any>;
    propsPress: ElementProps<any>;
}
export interface UseGridlistCellParameters<GridlistCellElement extends Element, CM extends GridlistCellInfo<GridlistCellElement>> extends UseCompleteGridNavigationCellParameters<GridlistCellElement, CM>, TargetedPick<UsePressParameters<GridlistCellElement>, "pressParameters", "longPressThreshold" | "onPressingChange" | "onPressSync"> {
}
export interface GridlistRowInfo<GridlistRowElement extends Element> extends UseCompleteGridNavigationRowInfo<GridlistRowElement> {
}
export interface GridlistCellInfo<GridlistCellElement extends Element> extends UseCompleteGridNavigationCellInfo<GridlistCellElement> {
}
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
export declare const useGridlist: <GridlistElement extends Element, GridlistRowElement extends Element, LabelElement extends Element>({ labelParameters, listboxParameters: { groupingType, ...void1 }, rovingTabIndexParameters, singleSelectionParameters, gridNavigationParameters, linearNavigationParameters, multiSelectionParameters, paginatedChildrenParameters, refElementParameters, typeaheadNavigationParameters, singleSelectionDeclarativeParameters, gridNavigationCompleteParameters, processedIndexManglerParameters, ...void2 }: UseGridlistParameters<GridlistElement, GridlistRowElement, LabelElement, GridlistRowInfo<GridlistRowElement>>) => UseGridlistReturnType<GridlistElement, GridlistRowElement, LabelElement, GridlistRowInfo<GridlistRowElement>>;
/**
 * @compositeParams
 *
 */
export declare const useGridlistRow: <GridlistRowElement extends Element, GridlistCellElement extends Element>({ gridlistRowParameters: { selected }, linearNavigationParameters, context: cx1, info, rovingTabIndexParameters, textContentParameters, typeaheadNavigationParameters, hasCurrentFocusParameters, singleSelectionChildParameters, multiSelectionChildParameters, refElementParameters, ...void1 }: UseGridlistRowParameters<GridlistRowElement, GridlistCellElement, GridlistRowInfo<GridlistRowElement>, GridlistCellInfo<GridlistCellElement>>) => UseGridlistRowReturnType<GridlistRowElement, GridlistCellElement, GridlistRowInfo<GridlistRowElement>, GridlistCellInfo<GridlistCellElement>>;
/**
 * @compositeParams
 *
 */
export declare const useGridlistCell: <GridlistCellElement extends Element>({ pressParameters: { onPressSync, longPressThreshold, onPressingChange, ...void1 }, ...p }: UseGridlistCellParameters<GridlistCellElement, GridlistCellInfo<GridlistCellElement>>) => UseGridlistCellReturnType<GridlistCellElement, GridlistCellInfo<GridlistCellElement>>;
//# sourceMappingURL=use-gridlist-old.d.ts.map