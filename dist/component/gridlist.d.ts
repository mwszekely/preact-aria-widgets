import { createElement, Ref, VNode } from "preact";
import { ElementProps } from "preact-prop-helpers";
import { ElementToTag, OmitStrong } from "../props.js";
import { GridlistCellInfo, GridlistRowInfo, UseGridlistCellParameters, UseGridlistCellReturnType, UseGridlistParameters, UseGridlistReturnType, UseGridlistRowParameters, UseGridlistRowReturnType } from "../use-gridlist.js";
import { PartialExcept } from "./util.js";
type Get<T, K extends keyof T> = T[K];
interface GridlistPropsBase<GridlistElement extends Element, GridlistRowElement extends Element, GridlistCellElement extends Element, LabelElement extends Element, RM extends GridlistRowInfo<GridlistRowElement, GridlistCellElement>, CM extends GridlistCellInfo<GridlistCellElement>> extends Get<UseGridlistParameters<GridlistElement, GridlistRowElement, GridlistCellElement, LabelElement, RM, CM>, "linearNavigationParameters">, Get<UseGridlistParameters<GridlistElement, GridlistRowElement, GridlistCellElement, LabelElement, RM, CM>, "rovingTabIndexParameters">, Get<UseGridlistParameters<GridlistElement, GridlistRowElement, GridlistCellElement, LabelElement, RM, CM>, "typeaheadNavigationParameters">, Get<UseGridlistParameters<GridlistElement, GridlistRowElement, GridlistCellElement, LabelElement, RM, CM>, "gridNavigationParameters">, Get<UseGridlistParameters<GridlistElement, GridlistRowElement, GridlistCellElement, LabelElement, RM, CM>, "rearrangeableChildrenParameters">, Get<UseGridlistParameters<GridlistElement, GridlistRowElement, GridlistCellElement, LabelElement, RM, CM>, "sortableChildrenParameters">, Get<UseGridlistParameters<GridlistElement, GridlistRowElement, GridlistCellElement, LabelElement, RM, CM>, "paginatedChildrenParameters">, Get<UseGridlistParameters<GridlistElement, GridlistRowElement, GridlistCellElement, LabelElement, RM, CM>, "staggeredChildrenParameters">, Get<UseGridlistParameters<GridlistElement, GridlistRowElement, GridlistCellElement, LabelElement, RM, CM>, "labelParameters">, Get<UseGridlistParameters<GridlistElement, GridlistRowElement, GridlistCellElement, LabelElement, RM, CM>, "gridlistParameters">, Get<UseGridlistParameters<GridlistElement, GridlistRowElement, GridlistCellElement, LabelElement, RM, CM>, "singleSelectionParameters"> {
    ref?: Ref<UseGridlistReturnType<GridlistElement, GridlistRowElement, GridlistCellElement, LabelElement, RM, CM>>;
}
interface GridlistRowPropsBase<GridlistRowElement extends Element, GridlistCellElement extends Element, RM extends GridlistRowInfo<GridlistRowElement, GridlistCellElement>, CM extends GridlistCellInfo<GridlistCellElement>> extends Pick<RM, "index" | "unselectable">, Get<UseGridlistRowParameters<GridlistRowElement, GridlistCellElement, RM, CM>, "textContentParameters">, Get<UseGridlistRowParameters<GridlistRowElement, GridlistCellElement, RM, CM>, "sortableChildParameters">, Get<UseGridlistRowParameters<GridlistRowElement, GridlistCellElement, RM, CM>, "linearNavigationParameters">, Get<UseGridlistRowParameters<GridlistRowElement, GridlistCellElement, RM, CM>, "rovingTabIndexParameters">, Get<UseGridlistRowParameters<GridlistRowElement, GridlistCellElement, RM, CM>, "typeaheadNavigationParameters">, Get<UseGridlistRowParameters<GridlistRowElement, GridlistCellElement, RM, CM>, "gridlistRowParameters"> {
    info?: OmitStrong<RM, keyof GridlistRowInfo<GridlistRowElement, GridlistCellElement>>;
    ref?: Ref<UseGridlistRowReturnType<GridlistRowElement, GridlistCellElement, RM, CM>>;
}
interface GridlistChildPropsBase<CellElement extends Element, M extends GridlistCellInfo<CellElement>> extends Get<UseGridlistCellParameters<CellElement, M>, "gridNavigationCellParameters">, Get<UseGridlistCellParameters<CellElement, M>, "textContentParameters">, Get<UseGridlistCellParameters<CellElement, M>, "pressParameters">, Pick<M, "index" | "untabbable"> {
    focusSelf?: M["focusSelf"];
    info?: OmitStrong<M, "focusSelf">;
    ref?: Ref<UseGridlistCellReturnType<CellElement, M>>;
}
export interface GridlistProps<GridlistElement extends Element, GridlistRowElement extends Element, GridlistCellElement extends Element, LabelElement extends Element, RM extends GridlistRowInfo<GridlistRowElement, GridlistCellElement>, CM extends GridlistCellInfo<GridlistCellElement>> extends PartialExcept<GridlistPropsBase<GridlistElement, GridlistRowElement, GridlistCellElement, LabelElement, RM, CM>, "selectionLimit" | "groupingType" | "ariaLabel" | "selectedIndex"> {
    render(info: UseGridlistReturnType<GridlistElement, GridlistRowElement, GridlistCellElement, LabelElement, RM, CM>): VNode;
}
export interface GridlistRowProps<GridlistRowElement extends Element, GridlistCellElement extends Element, RM extends GridlistRowInfo<GridlistRowElement, GridlistCellElement>, CM extends GridlistCellInfo<GridlistCellElement>> extends PartialExcept<GridlistRowPropsBase<GridlistRowElement, GridlistCellElement, RM, CM>, "index" | "getSortValue"> {
    render(info: UseGridlistRowReturnType<GridlistRowElement, GridlistCellElement, RM, CM>): VNode;
}
export interface GridlistChildProps<CellElement extends Element, M extends GridlistCellInfo<CellElement>> extends PartialExcept<GridlistChildPropsBase<CellElement, M>, "index" | "focusSelf"> {
    render(info: UseGridlistCellReturnType<CellElement, M>): VNode;
}
export declare function defaultRenderGridlistRow<RowElement extends Element, CellElement extends Element, RM extends GridlistRowInfo<RowElement, CellElement>, CM extends GridlistCellInfo<CellElement>>({ tagGridlistRow, makePropsGridlistRow }: {
    tagGridlistRow: ElementToTag<RowElement>;
    makePropsGridlistRow: (info: UseGridlistRowReturnType<RowElement, CellElement, RM, CM>) => ElementProps<RowElement>;
}): (info: UseGridlistRowReturnType<RowElement, CellElement, RM, CM>) => VNode<any>;
export declare function defaultRenderGridlistChild<CellElement extends Element, CM extends GridlistCellInfo<CellElement>>({ tagGridlistChild, makePropsGridlistChild }: {
    tagGridlistChild: ElementToTag<CellElement>;
    makePropsGridlistChild: (info: UseGridlistCellReturnType<CellElement, CM>) => ElementProps<CellElement>;
}): (info: UseGridlistCellReturnType<CellElement, CM>) => VNode<any>;
export declare const Gridlist: <GridlistElement extends Element, RowElement extends Element, Cellement extends Element, LabelElement extends Element, RM extends GridlistRowInfo<RowElement, Cellement> = GridlistRowInfo<RowElement, Cellement>, CM extends GridlistCellInfo<Cellement> = GridlistCellInfo<Cellement>>({ collator, disableHomeEndKeys, noTypeahead, onTabbableIndexChange, groupingType, typeaheadTimeout, selectedIndex, navigatePastEnd, navigatePastStart, onSelectedIndexChange, pageNavigationSize, selectionLimit, untabbable, paginationMax, paginationMin, staggered, compare, getIndex, onTabbableColumnChange, ariaLabel, orientation, ariaPropName, selectionMode, onNavigateLinear, onNavigateTypeahead, render }: GridlistProps<GridlistElement, RowElement, Cellement, LabelElement, RM, CM>, ref?: Ref<any>) => createElement.JSX.Element;
export declare const GridlistRow: <RowElement extends Element, Cellement extends Element, RM extends GridlistRowInfo<RowElement, Cellement> = GridlistRowInfo<RowElement, Cellement>, CM extends GridlistCellInfo<Cellement> = GridlistCellInfo<Cellement>>({ index, collator, unselectable, untabbable, navigatePastEnd, navigatePastStart, noTypeahead, onTabbableIndexChange, selected, typeaheadTimeout, getSortValue, getText, render, initiallyTabbedIndex, onNavigateTypeahead, info: uinfo }: GridlistRowProps<RowElement, Cellement, RM, CM>, ref?: Ref<any>) => createElement.JSX.Element;
export declare const GridlistChild: <CellElement extends Element, CM extends GridlistCellInfo<CellElement> = GridlistCellInfo<CellElement>>({ index, colSpan, focusSelf, untabbable, getText, onPressSync, render, info: subInfo }: GridlistChildProps<CellElement, CM>, ref?: Ref<any>) => VNode<{}>;
export {};
//# sourceMappingURL=gridlist.d.ts.map