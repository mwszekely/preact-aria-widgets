import { Ref, VNode } from "preact";
import { TargetedOmit, UseCompleteGridNavigationRowReturnType, UseCompleteGridNavigationRowsInfo, UseCompleteGridNavigationRowsParameters, UseCompleteGridNavigationRowsReturnType, UsePaginatedChildParameters, UseProcessedChildInfo, UseProcessedChildReturnType, UseRefElementParameters, UseRefElementReturnType, UseStaggeredChildParameters } from "preact-prop-helpers";
import { Get, Get12, Get3, Get4, Get8, OmitStrong } from "../props.js";
import { GridlistCellInfo, GridlistRowInfo, UseGridlistCellParameters, UseGridlistCellReturnType, UseGridlistParameters, UseGridlistReturnType, UseGridlistRowParameters, UseGridlistRowReturnType } from "../use-gridlist.js";
import { GenericComponentProps } from "./util.js";
export type GridlistProps<GridlistElement extends Element, GridlistRowElement extends Element, LabelElement extends Element, RM extends GridlistRowInfo<GridlistRowElement> = GridlistRowInfo<GridlistRowElement>> = GenericComponentProps<UseGridlistReturnType<GridlistElement, GridlistRowElement, LabelElement, RM>, Get12<UseGridlistParameters<GridlistElement, GridlistRowElement, LabelElement, RM>, "linearNavigationParameters", "rovingTabIndexParameters", "typeaheadNavigationParameters", "gridNavigationParameters", "paginatedChildrenParameters", "labelParameters", "listboxParameters", "singleSelectionParameters", "refElementParameters", "singleSelectionDeclarativeParameters", "singleSelectionParameters", "multiSelectionParameters">, "groupingType" | "ariaLabel" | "singleSelectedIndex">;
interface GridlistRowInnerPropsBase<GridlistRowElement extends Element, GridlistCellElement extends Element, RM extends GridlistRowInfo<GridlistRowElement> = GridlistRowInfo<GridlistRowElement>, CM extends GridlistCellInfo<GridlistCellElement> = GridlistCellInfo<GridlistCellElement>> extends Get8<UseGridlistRowParameters<GridlistRowElement, GridlistCellElement, RM, CM>, "gridlistRowParameters", "textContentParameters", "hasCurrentFocusParameters", "singleSelectionChildParameters", "multiSelectionChildParameters", "linearNavigationParameters", "typeaheadNavigationParameters", "rovingTabIndexParameters">, Pick<RM, "index"> {
}
type InnerOuterDifference<ListItemElement extends Element> = OmitStrong<Get3<UseProcessedChildReturnType<ListItemElement, UseProcessedChildInfo<ListItemElement>>, "managedChildReturn", "paginatedChildReturn", "staggeredChildReturn">, "getChildren">;
interface GridlistRowInnerProps<GridlistRowElement extends Element, GridlistCellElement extends Element, RM extends GridlistRowInfo<GridlistRowElement> = GridlistRowInfo<GridlistRowElement>, CM extends GridlistCellInfo<GridlistCellElement> = GridlistCellInfo<GridlistCellElement>> extends GenericComponentProps<(TargetedOmit<UseProcessedChildReturnType<GridlistRowElement, UseProcessedChildInfo<GridlistRowElement>>, "staggeredChildReturn", "childUseEffect"> & TargetedOmit<UseProcessedChildReturnType<GridlistRowElement, UseProcessedChildInfo<GridlistRowElement>>, "paginatedChildReturn", never> & OmitStrong<UseProcessedChildReturnType<GridlistRowElement, UseProcessedChildInfo<GridlistRowElement>>, "staggeredChildReturn" | "managedChildReturn" | "refElementParameters" | "paginatedChildReturn"> & Partial<UseGridlistRowReturnType<GridlistRowElement, GridlistCellElement, RM, CM>>), GridlistRowInnerPropsBase<GridlistRowElement, GridlistCellElement, RM, CM>, "index">, InnerOuterDifference<GridlistRowElement> {
    props: UseProcessedChildReturnType<GridlistRowElement, UseProcessedChildInfo<GridlistRowElement>>["props"];
}
type UseProcessedGridlistRowReturnType<GridlistRowElement extends Element> = OmitStrong<UseProcessedChildReturnType<GridlistRowElement, any>, "refElementParameters"> & Pick<UseRefElementReturnType<GridlistRowElement>, "refElementReturn">;
export interface GridlistRowProps<GridlistRowElement extends Element, GridlistCellElement extends Element, RM extends GridlistRowInfo<GridlistRowElement> = GridlistRowInfo<GridlistRowElement>, CM extends GridlistCellInfo<GridlistCellElement> = GridlistCellInfo<GridlistCellElement>> extends OmitStrong<GridlistRowInnerProps<GridlistRowElement, GridlistCellElement, GridlistRowInfo<GridlistRowElement>>, keyof InnerOuterDifference<any> | "render" | "imperativeHandle" | "props">, Get<UseStaggeredChildParameters, "info">, Get<UsePaginatedChildParameters, "info">, Partial<Get<UseRefElementParameters<GridlistRowElement>, "refElementParameters">> {
    imperativeHandle?: Ref<{
        hidden: true;
    } & UseProcessedGridlistRowReturnType<GridlistRowElement>> | Ref<{
        hidden?: false;
    } & UseProcessedGridlistRowReturnType<GridlistRowElement> & UseCompleteGridNavigationRowReturnType<GridlistRowElement, GridlistCellElement, RM, CM>>;
    render: {
        (info: {
            hidden: true;
        } & UseProcessedGridlistRowReturnType<GridlistRowElement>): VNode;
        (info: {
            hidden?: false;
        } & UseProcessedGridlistRowReturnType<GridlistRowElement> & UseCompleteGridNavigationRowReturnType<GridlistRowElement, GridlistCellElement, RM, CM>): VNode;
    };
}
export type GridlistChildProps<CellElement extends Element, CM extends GridlistCellInfo<CellElement> = GridlistCellInfo<CellElement>> = GenericComponentProps<UseGridlistCellReturnType<CellElement, CM>, Get4<UseGridlistCellParameters<CellElement, CM>, "gridNavigationCellParameters", "textContentParameters", "pressParameters", "info">, never> & {
    info?: OmitStrong<CM, keyof GridlistCellInfo<any>>;
};
export declare const Gridlist: <GridlistElement extends Element, RowElement extends Element, CellElement extends Element, LabelElement extends Element>({ collator, disableHomeEndKeys, noTypeahead, onTabbableIndexChange, groupingType, typeaheadTimeout, singleSelectedIndex, navigatePastEnd, navigatePastStart, onSingleSelectedIndexChange, pageNavigationSize, untabbable, paginationMax, paginationMin, onTabbableColumnChange, ariaLabel, onNavigateLinear, onNavigateTypeahead, imperativeHandle, onElementChange, onMount, onUnmount, render, multiSelectionAriaPropName, multiSelectionMode, onSelectionChange, singleSelectionAriaPropName, singleSelectionMode, initiallyTabbableColumn, ...void1 }: GridlistProps<GridlistElement, RowElement, LabelElement, GridlistRowInfo<RowElement>>) => import("preact").JSX.Element;
export type GridlistRowsProps<GridlistRowElement extends Element> = GenericComponentProps<UseCompleteGridNavigationRowsReturnType<GridlistRowElement, UseCompleteGridNavigationRowsInfo<GridlistRowElement>>, Get4<UseCompleteGridNavigationRowsParameters<GridlistRowElement, UseCompleteGridNavigationRowsInfo<GridlistRowElement>>, "managedChildrenParameters", "paginatedChildrenParameters", "rearrangeableChildrenParameters", "staggeredChildrenParameters">, "children">;
export declare const GridlistRows: <RowElement extends Element>({ render, adjust, children, compare, getIndex, imperativeHandle, onAfterChildLayoutEffect, onChildrenCountChange, onChildrenMountChange, onRearranged, paginationMax, paginationMin, staggered }: GridlistRowsProps<RowElement>) => import("preact").JSX.Element;
export declare const GridlistRow: <RowElement extends Element, CellElement extends Element>({ index, render, imperativeHandle, onElementChange: oec1, onMount, onUnmount, getText, untabbable, onCurrentFocusedChanged, onCurrentFocusedInnerChanged, multiSelectionDisabled, singleSelectionDisabled, collator, initiallyMultiSelected, initiallyTabbedIndex, navigatePastEnd, navigatePastStart, noTypeahead, onMultiSelectChange, onNavigateTypeahead, onTabbableIndexChange, selected, typeaheadTimeout, onTextContentChange, ...void1 }: GridlistRowProps<RowElement, CellElement, GridlistRowInfo<RowElement>, GridlistCellInfo<CellElement>>) => import("preact").JSX.Element | VNode<{}>;
export declare const GridlistChild: <CellElement extends Element>({ index, colSpan, focusSelf, untabbable, getText, onPressSync, longPressThreshold, onPressingChange, render, imperativeHandle, onTextContentChange, info: subInfo }: GridlistChildProps<CellElement, GridlistCellInfo<CellElement>>) => import("preact").JSX.Element;
export {};
//# sourceMappingURL=gridlist.d.ts.map