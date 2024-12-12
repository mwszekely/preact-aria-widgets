import { CompleteGridNavigationCellContext, CompleteGridNavigationRowContext, ElementProps, OmitStrong, TargetedOmit, UseCompleteGridNavigationCellInfo, UseCompleteGridNavigationCellParameters, UseCompleteGridNavigationCellReturnType, UseCompleteGridNavigationDeclarativeParameters, UseCompleteGridNavigationDeclarativeReturnType, UseCompleteGridNavigationRowDeclarativeParameters, UseCompleteGridNavigationRowInfo, UseCompleteGridNavigationRowOuterParameters, UseCompleteGridNavigationRowOuterReturnType, UseCompleteGridNavigationRowReturnType, UseCompleteGridNavigationRowsContext, UseCompleteGridNavigationRowsInfo, UseCompleteGridNavigationRowsParameters, UseCompleteGridNavigationRowsReturnType, UsePressParameters, UsePressReturnType } from "preact-prop-helpers";
import { UseLabelReturnType, UseLabelSyntheticParameters } from "./use-label.js";
export interface UseGridlistRowInfo<RowElement extends Element> extends UseCompleteGridNavigationRowInfo<RowElement> {
}
export interface UseGridlistRowsInfo<RowElement extends Element> extends UseCompleteGridNavigationRowsInfo<RowElement> {
}
export interface UseGridlistCellInfo<RowElement extends Element> extends UseCompleteGridNavigationCellInfo<RowElement> {
}
export interface UseGridlistRowContext<ChildElement extends Element, M extends UseGridlistRowInfo<ChildElement>> extends CompleteGridNavigationRowContext<ChildElement, M> {
}
export interface UseGridlistRowsContext<ChildElement extends Element, SM extends UseGridlistRowsInfo<ChildElement>> extends UseCompleteGridNavigationRowsContext<ChildElement, SM> {
}
export interface UseGridlistCellContext<ChildElement extends Element, M extends UseGridlistCellInfo<ChildElement>> extends CompleteGridNavigationCellContext<ChildElement, M> {
}
export interface UseGridlistParameters<ParentElement extends Element, RowElement extends Element, RsM extends UseGridlistRowsInfo<RowElement> = UseGridlistRowsInfo<RowElement>, RM extends UseGridlistRowInfo<RowElement> = UseGridlistRowInfo<RowElement>> extends UseCompleteGridNavigationDeclarativeParameters<ParentElement, RowElement, RM>, OmitStrong<UseCompleteGridNavigationRowsParameters<RowElement, RM, RsM>, "context">, UseLabelSyntheticParameters {
}
export interface UseGridlistReturnType<ParentElement extends Element, RowElement extends Element, LabelElement extends Element, RsM extends UseGridlistRowsInfo<RowElement> = UseGridlistRowsInfo<RowElement>, RM extends UseGridlistRowInfo<RowElement> = UseGridlistRowInfo<RowElement>> extends OmitStrong<UseCompleteGridNavigationDeclarativeReturnType<ParentElement, RowElement, RM>, "context" | "rearrangeableChildrenReturn">, OmitStrong<UseCompleteGridNavigationRowsReturnType<RowElement, RsM>, "context">, OmitStrong<UseLabelReturnType<ParentElement, LabelElement>, "propsInput"> {
    contextChildren: UseGridlistRowContext<RowElement, RM>;
    contextProcessing: UseGridlistRowsContext<RowElement, RsM>;
}
export interface UseGridlistRowOuterParameters<RowElement extends Element, RsM extends UseCompleteGridNavigationRowsInfo<RowElement>> extends UseCompleteGridNavigationRowOuterParameters<RowElement, RsM> {
}
export interface UseGridlistRowOuterReturnType<RowElement extends Element, RsM extends UseCompleteGridNavigationRowsInfo<RowElement>> extends UseCompleteGridNavigationRowOuterReturnType<RowElement, RsM> {
}
export interface UseGridlistRowParameters<RowElement extends Element, CellElement extends Element, RM extends UseGridlistRowInfo<RowElement>, CM extends UseGridlistCellInfo<CellElement>> extends UseCompleteGridNavigationRowDeclarativeParameters<RowElement, CellElement, RM, CM> {
}
export interface UseGridlistRowReturnType<RowElement extends Element, CellElement extends Element, RM extends UseGridlistRowInfo<RowElement>, CM extends UseGridlistCellInfo<CellElement>> extends UseCompleteGridNavigationRowReturnType<RowElement, CellElement, RM, CM> {
    context: UseGridlistCellContext<CellElement, CM>;
}
export interface UseGridlistCellParameters<CellElement extends Element, CM extends UseGridlistCellInfo<CellElement>> extends UseCompleteGridNavigationCellParameters<CellElement, CM>, TargetedOmit<UsePressParameters<CellElement>, "pressParameters", "focusSelf"> {
}
export interface UseGridlistCellReturnType<CellElement extends Element, CM extends UseGridlistCellInfo<CellElement>> extends OmitStrong<UseCompleteGridNavigationCellReturnType<CellElement, CM>, "props">, OmitStrong<UsePressReturnType<CellElement>, "props"> {
    propsTabbable: ElementProps<CellElement>;
    propsCell: ElementProps<any>;
    propsPress: ElementProps<any>;
}
/**
 * @compositeParams
 */
export declare function useGridlist<ParentElement extends Element, RowElement extends Element, LabelElement extends Element, RsM extends UseGridlistRowsInfo<RowElement>, RM extends UseGridlistRowInfo<RowElement>>({ gridNavigationParameters, linearNavigationParameters, managedChildrenParameters, multiSelectionParameters, paginatedChildrenParameters, rearrangeableChildrenParameters, refElementParameters, rovingTabIndexParameters, singleSelectionParameters, staggeredChildrenParameters, typeaheadNavigationParameters, singleSelectionDeclarativeParameters, labelParameters, randomIdInputParameters, randomIdLabelParameters, gridNavigationCompleteParameters, processedIndexManglerParameters, ...void1 }: UseGridlistParameters<ParentElement, RowElement, RsM, RM>): UseGridlistReturnType<ParentElement, RowElement, LabelElement, RsM, RM>;
/**
 * @compositeParams
 */
export declare function useGridlistRowOuter<RowElement extends Element, RsM extends UseCompleteGridNavigationRowsInfo<RowElement>>(p: UseGridlistRowOuterParameters<RowElement, RsM>): UseGridlistRowOuterReturnType<RowElement, RsM>;
/**
 * @compositeParams
 */
export declare function useGridlistRow<RowElement extends Element, CellElement extends Element, RM extends UseGridlistRowInfo<RowElement>, CM extends UseGridlistCellInfo<CellElement>>(p: UseGridlistRowParameters<RowElement, CellElement, RM, CM>): UseGridlistRowReturnType<RowElement, CellElement, RM, CM>;
/**
 * @compositeParams
 */
export declare function useGridlistCell<CellElement extends Element, CM extends UseGridlistCellInfo<CellElement>>({ pressParameters: { allowRepeatPresses, excludeEnter, excludePointer, excludeSpace, longPressThreshold, onPressSync, onPressingChange }, ...p }: UseGridlistCellParameters<CellElement, CM>): UseGridlistCellReturnType<CellElement, CM>;
//# sourceMappingURL=use-gridlist.d.ts.map