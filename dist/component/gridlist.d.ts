import { VNode, createElement } from "preact";
import { ElementProps, TargetedOmit, UseCompleteGridNavigationRowsInfo, UseCompleteGridNavigationRowsParameters, UseCompleteGridNavigationRowsReturnType, UseProcessedChildInfo, UseProcessedChildReturnType, UseRefElementParameters } from "preact-prop-helpers";
import { ElementToTag, Get, Get12, Get3, Get4, Get8, OmitStrong } from "../props.js";
import { GridlistCellInfo, GridlistRowInfo, UseGridlistCellParameters, UseGridlistCellReturnType, UseGridlistParameters, UseGridlistReturnType, UseGridlistRowParameters, UseGridlistRowReturnType } from "../use-gridlist.js";
import { GenericComponentProps } from "./util.js";
export type GridlistProps<GridlistElement extends Element, GridlistRowElement extends Element, GridlistCellElement extends Element, LabelElement extends Element, RM extends GridlistRowInfo<GridlistRowElement> = GridlistRowInfo<GridlistRowElement>, CM extends GridlistCellInfo<GridlistCellElement> = GridlistCellInfo<GridlistCellElement>> = GenericComponentProps<UseGridlistReturnType<GridlistElement, GridlistRowElement, GridlistCellElement, LabelElement, RM, CM>, Get12<UseGridlistParameters<GridlistElement, GridlistRowElement, LabelElement, RM>, "linearNavigationParameters", "rovingTabIndexParameters", "typeaheadNavigationParameters", "gridNavigationParameters", "paginatedChildrenParameters", "labelParameters", "listboxParameters", "singleSelectionParameters", "refElementParameters", "singleSelectionDeclarativeParameters", "singleSelectionParameters", "multiSelectionParameters">, "groupingType" | "ariaLabel" | "singleSelectedIndex">;
interface GridlistRowOuterPropsBase<ListItemElement extends Element, M extends UseProcessedChildInfo<ListItemElement> = UseProcessedChildInfo<ListItemElement>> extends Get<UseRefElementParameters<ListItemElement>, "refElementParameters">, Pick<M, "index"> {
}
interface GridlistRowInnerPropsBase<GridlistRowElement extends Element, GridlistCellElement extends Element, RM extends GridlistRowInfo<GridlistRowElement> = GridlistRowInfo<GridlistRowElement>, CM extends GridlistCellInfo<GridlistCellElement> = GridlistCellInfo<GridlistCellElement>> extends Get8<UseGridlistRowParameters<GridlistRowElement, GridlistCellElement, RM, CM>, "gridlistRowParameters", "textContentParameters", "hasCurrentFocusParameters", "singleSelectionChildParameters", "multiSelectionChildParameters", "linearNavigationParameters", "typeaheadNavigationParameters", "rovingTabIndexParameters">, Pick<RM, "index" | "focusSelf"> {
}
type InnerOuterDifference<ListItemElement extends Element> = Get3<UseProcessedChildReturnType<ListItemElement, UseProcessedChildInfo<ListItemElement>>, "managedChildReturn", "paginatedChildReturn", "staggeredChildReturn">;
interface GridlistRowOuterProps<GridlistRowElement extends Element> extends GenericComponentProps<UseProcessedChildReturnType<GridlistRowElement, UseProcessedChildInfo<GridlistRowElement>> | null, GridlistRowOuterPropsBase<GridlistRowElement>, "index"> {
}
interface GridlistRowInnerProps<GridlistRowElement extends Element, GridlistCellElement extends Element, RM extends GridlistRowInfo<GridlistRowElement> = GridlistRowInfo<GridlistRowElement>, CM extends GridlistCellInfo<GridlistCellElement> = GridlistCellInfo<GridlistCellElement>> extends GenericComponentProps<(TargetedOmit<UseProcessedChildReturnType<GridlistRowElement, UseProcessedChildInfo<GridlistRowElement>>, "staggeredChildReturn", "childUseEffect"> & OmitStrong<UseProcessedChildReturnType<GridlistRowElement, UseProcessedChildInfo<GridlistRowElement>>, "staggeredChildReturn" | "managedChildReturn" | "refElementParameters"> & Partial<UseGridlistRowReturnType<GridlistRowElement, GridlistCellElement, RM, CM>>), GridlistRowInnerPropsBase<GridlistRowElement, GridlistCellElement, RM, CM>, "index">, InnerOuterDifference<GridlistRowElement> {
    props: UseProcessedChildReturnType<GridlistRowElement, UseProcessedChildInfo<GridlistRowElement>>["props"];
}
export interface GridlistRowProps<GridlistRowElement extends Element, GridlistCellElement extends Element, RM extends GridlistRowInfo<GridlistRowElement> = GridlistRowInfo<GridlistRowElement>, CM extends GridlistCellInfo<GridlistCellElement> = GridlistCellInfo<GridlistCellElement>> extends OmitStrong<GridlistRowOuterProps<GridlistRowElement>, "render" | "imperativeHandle" | "index">, OmitStrong<GridlistRowInnerProps<GridlistRowElement, GridlistCellElement, RM, CM>, keyof InnerOuterDifference<any> | "render" | "imperativeHandle" | "props"> {
    imperativeHandle?: UseGridlistRowReturnType<GridlistRowElement, GridlistCellElement, RM, CM> & UseProcessedChildReturnType<GridlistRowElement, any>;
    render: (info: Partial<UseGridlistRowReturnType<GridlistRowElement, GridlistCellElement, RM, CM>> & OmitStrong<UseProcessedChildReturnType<GridlistRowElement, any>, "refElementParameters">) => VNode;
}
export type GridlistChildProps<CellElement extends Element, CM extends GridlistCellInfo<CellElement> = GridlistCellInfo<CellElement>> = GenericComponentProps<UseGridlistCellReturnType<CellElement, CM>, Get4<UseGridlistCellParameters<CellElement, CM>, "gridNavigationCellParameters", "textContentParameters", "pressParameters", "info">, never> & {
    info?: OmitStrong<CM, keyof GridlistCellInfo<any>>;
};
export declare function defaultRenderGridlistRow<RowElement extends Element, CellElement extends Element, RM extends GridlistRowInfo<RowElement>, CM extends GridlistCellInfo<CellElement>>({ tagGridlistRow, makePropsGridlistRow }: {
    tagGridlistRow: ElementToTag<RowElement>;
    makePropsGridlistRow: (info: UseGridlistRowReturnType<RowElement, CellElement, RM, CM>) => ElementProps<RowElement>;
}): (info: UseGridlistRowReturnType<RowElement, CellElement, RM, CM>) => VNode<ElementProps<RowElement>>;
export declare function defaultRenderGridlistChild<CellElement extends Element, CM extends GridlistCellInfo<CellElement>>({ tagGridlistChild, makePropsGridlistChild }: {
    tagGridlistChild: ElementToTag<CellElement>;
    makePropsGridlistChild: (info: UseGridlistCellReturnType<CellElement, CM>) => ElementProps<CellElement>;
}): (info: UseGridlistCellReturnType<CellElement, CM>) => VNode<ElementProps<CellElement>>;
export declare const Gridlist: <GridlistElement extends Element, RowElement extends Element, CellElement extends Element, LabelElement extends Element>({ collator, disableHomeEndKeys, noTypeahead, onTabbableIndexChange, groupingType, typeaheadTimeout, singleSelectedIndex, navigatePastEnd, navigatePastStart, onSingleSelectedIndexChange, pageNavigationSize, untabbable, paginationMax, paginationMin, onTabbableColumnChange, ariaLabel, onNavigateLinear, onNavigateTypeahead, imperativeHandle, onElementChange, onMount, onUnmount, render, multiSelectionAriaPropName, multiSelectionMode, onSelectionChange, singleSelectionAriaPropName, singleSelectionMode, ...void1 }: GridlistProps<GridlistElement, RowElement, CellElement, LabelElement, GridlistRowInfo<RowElement>, GridlistCellInfo<CellElement>>) => createElement.JSX.Element;
export type GridlistRowsProps<GridlistRowElement extends Element> = GenericComponentProps<UseCompleteGridNavigationRowsReturnType<GridlistRowElement, UseCompleteGridNavigationRowsInfo<GridlistRowElement>>, Get4<UseCompleteGridNavigationRowsParameters<GridlistRowElement, UseCompleteGridNavigationRowsInfo<GridlistRowElement>>, "managedChildrenParameters", "paginatedChildrenParameters", "rearrangeableChildrenParameters", "staggeredChildrenParameters">, "children">;
export declare const GridlistRows: <RowElement extends Element>({ render, adjust, children, compare, getIndex, imperativeHandle, onAfterChildLayoutEffect, onChildrenCountChange, onChildrenMountChange, onRearranged, paginationMax, paginationMin, staggered }: GridlistRowsProps<RowElement>) => createElement.JSX.Element;
export declare const GridlistRow: <RowElement extends Element, CellElement extends Element>({ index, render, imperativeHandle, onElementChange: oec1, onMount, onUnmount, getText, untabbable, onCurrentFocusedChanged, onCurrentFocusedInnerChanged, focusSelf, multiSelectionDisabled, singleSelectionDisabled, collator, initiallyMultiSelected, initiallyTabbedIndex, navigatePastEnd, navigatePastStart, noTypeahead, onMultiSelectChange, onNavigateTypeahead, onTabbableIndexChange, selected, typeaheadTimeout, ...void1 }: GridlistRowProps<RowElement, CellElement, GridlistRowInfo<RowElement>, GridlistCellInfo<CellElement>>) => createElement.JSX.Element | VNode<{}>;
export declare const GridlistChild: <CellElement extends Element>({ index, colSpan, focusSelf, untabbable, getText, onPressSync, longPressThreshold, onPressingChange, render, imperativeHandle, info: subInfo }: GridlistChildProps<CellElement, GridlistCellInfo<CellElement>>) => createElement.JSX.Element;
export {};
//# sourceMappingURL=gridlist.d.ts.map