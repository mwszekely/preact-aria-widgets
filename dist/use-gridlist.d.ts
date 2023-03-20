import { h } from "preact";
import { CompleteGridNavigationContext, CompleteGridNavigationRowContext, UseCompleteGridNavigationCellInfo, UseCompleteGridNavigationCellParameters, UseCompleteGridNavigationCellReturnType, UseCompleteGridNavigationParameters, UseCompleteGridNavigationReturnType, UseCompleteGridNavigationRowInfo, UseCompleteGridNavigationRowParameters, UseCompleteGridNavigationRowReturnType, UsePressParameters, UsePressReturnType } from "preact-prop-helpers";
import { OmitStrong } from "./props.js";
import { UseLabelSyntheticParameters } from "./use-label.js";
import { UseListboxParameters } from "./use-listbox.js";
export interface UseGridlistContext<GridlistElement extends Element, GridlistRowElement extends Element, GridlistCellElement extends Element, RM extends GridlistRowInfo<GridlistRowElement, GridlistCellElement>, CM extends GridlistCellInfo<GridlistCellElement>> extends CompleteGridNavigationContext<GridlistElement, GridlistRowElement, GridlistCellElement, RM, CM> {
    gridlistRowContext: {
        selectionLimit: "single" | "multi" | "none";
    };
}
export interface UseGridlistRowContext<ParentElement extends Element, ChildElement extends Element, M extends GridlistCellInfo<ChildElement>> extends CompleteGridNavigationRowContext<ParentElement, ChildElement, M> {
}
export interface UseGridlistParameters<GridlistElement extends Element, GridlistRowElement extends Element, GridlistCellElement extends Element, LabelElement extends Element, RM extends GridlistRowInfo<GridlistRowElement, GridlistCellElement>> extends OmitStrong<UseCompleteGridNavigationParameters<GridlistElement, GridlistRowElement, GridlistCellElement, RM>, "singleSelectionParameters"> {
    labelParameters: OmitStrong<UseLabelSyntheticParameters["labelParameters"], "onLabelClick">;
    gridlistParameters: UseListboxParameters<GridlistElement, GridlistRowElement, LabelElement, RM>["listboxParameters"];
}
export interface UseGridlistReturnType<GridlistElement extends Element, GridlistRowElement extends Element, GridlistCellElement extends Element, LabelElement extends Element, RM extends GridlistRowInfo<GridlistRowElement, GridlistCellElement>, CM extends GridlistCellInfo<GridlistCellElement>> extends OmitStrong<UseCompleteGridNavigationReturnType<GridlistElement, GridlistRowElement, GridlistCellElement, RM, CM>, "singleSelectionReturn" | "propsStable"> {
    propsGridlist: h.JSX.HTMLAttributes<GridlistElement>;
    propsGridlistLabel: h.JSX.HTMLAttributes<LabelElement>;
    context: UseGridlistContext<GridlistElement, GridlistRowElement, GridlistCellElement, RM, CM>;
}
export interface UseGridlistRowReturnType<GridlistRowElement extends Element, GridlistCellElement extends Element, RM extends GridlistRowInfo<GridlistRowElement, GridlistCellElement>, CM extends GridlistCellInfo<GridlistCellElement>> extends OmitStrong<UseCompleteGridNavigationRowReturnType<GridlistRowElement, GridlistCellElement, RM, CM>, never> {
}
export interface UseGridlistRowParameters<GridlistRowElement extends Element, GridlistCellElement extends Element, RM extends GridlistRowInfo<GridlistRowElement, GridlistCellElement>, CM extends GridlistCellInfo<GridlistCellElement>> extends OmitStrong<UseCompleteGridNavigationRowParameters<GridlistRowElement, GridlistCellElement, RM, CM>, "linearNavigationParameters"> {
    context: UseGridlistContext<any, GridlistRowElement, GridlistCellElement, RM, CM>;
    gridlistRowParameters: {
        /**
         * When the `selectionLimit` is `"single"`, this must be `null`.
         */
        selected: boolean | null;
    };
    linearNavigationParameters: OmitStrong<UseCompleteGridNavigationRowParameters<GridlistRowElement, GridlistCellElement, RM, CM>["linearNavigationParameters"], "disableHomeEndKeys">;
}
export interface UseGridlistCellReturnType<GridlistCellElement extends Element, CM extends GridlistCellInfo<GridlistCellElement>> extends UseCompleteGridNavigationCellReturnType<GridlistCellElement, CM>, Pick<UsePressReturnType<GridlistCellElement>, "pressReturn"> {
}
export interface UseGridlistCellParameters<GridlistCellElement extends Element, CM extends GridlistCellInfo<GridlistCellElement>> extends UseCompleteGridNavigationCellParameters<GridlistCellElement, CM> {
    pressParameters: Pick<UsePressParameters<GridlistCellElement>["pressParameters"], "onPressSync">;
}
export interface GridlistRowInfo<GridlistRowElement extends Element, GridlistCellElement extends Element> extends UseCompleteGridNavigationRowInfo<GridlistRowElement, GridlistCellElement> {
}
export interface GridlistCellInfo<GridlistCellElement extends Element> extends UseCompleteGridNavigationCellInfo<GridlistCellElement> {
}
export declare function useGridlist<GridlistElement extends Element, GridlistRowElement extends Element, GridlistCellElement extends Element, LabelElement extends Element, RM extends GridlistRowInfo<GridlistRowElement, GridlistCellElement>, CM extends GridlistCellInfo<GridlistCellElement>>({ labelParameters, gridlistParameters: { selectionLimit, groupingType, selectedIndex, onSelectedIndexChange }, ...restParams }: UseGridlistParameters<GridlistElement, GridlistRowElement, GridlistCellElement, LabelElement, RM>): UseGridlistReturnType<GridlistElement, GridlistRowElement, GridlistCellElement, LabelElement, RM, CM>;
export declare function useGridlistRow<GridlistRowElement extends Element, GridlistCellElement extends Element, RM extends GridlistRowInfo<GridlistRowElement, GridlistCellElement>, CM extends GridlistCellInfo<GridlistCellElement>>({ gridlistRowParameters: { selected }, linearNavigationParameters, context: cx1, info, rovingTabIndexChildParameters, rovingTabIndexParameters, singleSelectionChildParameters, sortableChildParameters, textContentParameters, typeaheadNavigationParameters }: UseGridlistRowParameters<GridlistRowElement, GridlistCellElement, RM, CM>): UseGridlistRowReturnType<GridlistRowElement, GridlistCellElement, RM, CM>;
export declare function useGridlistCell<GridlistCellElement extends Element, CM extends GridlistCellInfo<GridlistCellElement>>({ pressParameters, ...p }: UseGridlistCellParameters<GridlistCellElement, CM>): UseGridlistCellReturnType<GridlistCellElement, CM>;
//# sourceMappingURL=use-gridlist.d.ts.map