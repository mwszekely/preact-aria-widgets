import { h } from "preact";
import { CompleteListNavigationContext, UseCompleteListNavigationChildInfo, UseCompleteListNavigationChildParameters, UseCompleteListNavigationChildReturnType, UseCompleteListNavigationParameters, UseCompleteListNavigationReturnType, UsePressReturnType, UseSingleSelectionParameters } from "preact-prop-helpers";
import { EventDetail, OmitStrong } from "./props.js";
import { UseLabelSyntheticParameters } from "./use-label.js";
export type ListboxSingleSelectEvent<E extends EventTarget> = {
    [EventDetail]: {
        selectedIndex: number;
    };
} & Pick<h.JSX.TargetedEvent<E>, "target" | "currentTarget">;
export interface UseListboxContext<ListElement extends Element, ListItemElement extends Element, M extends ListboxInfo<ListItemElement>> extends CompleteListNavigationContext<ListElement, ListItemElement, M> {
    listboxContext: {
        selectionLimit: "single" | "multi" | "none";
    };
}
export interface UseListboxParameters<ListElement extends Element, ListItemElement extends Element, _LabelElement extends Element, M extends ListboxInfo<ListItemElement>> extends OmitStrong<UseCompleteListNavigationParameters<ListElement, ListItemElement, M>, "linearNavigationParameters" | "singleSelectionParameters"> {
    linearNavigationParameters: OmitStrong<UseCompleteListNavigationParameters<ListElement, ListItemElement, M>["linearNavigationParameters"], "arrowKeyDirection">;
    labelParameters: OmitStrong<UseLabelSyntheticParameters["labelParameters"], "onLabelClick">;
    singleSelectionParameters: Pick<UseCompleteListNavigationParameters<ListElement, ListItemElement, M>["singleSelectionParameters"], "ariaPropName" | "selectionMode">;
    listboxParameters: {
        orientation: "horizontal" | "vertical";
        /**
         * When `"single"`, the selected item is controlled
         * via `selectedIndex`. When `"multi"`, the selected
         * items are controlled by their individual `selected` props.
         */
        selectionLimit: "single" | "multi" | "none";
        /**
         * Only used when `groupingType` is `"without-groups"` or `"group"`
         */
        selectedIndex: number | null;
        onSelectedIndexChange: UseSingleSelectionParameters<ListElement, ListItemElement, M>["singleSelectionParameters"]["onSelectedIndexChange"];
        /**
         * * `"without-groups"`: This is a listbox with no groups
         * * `"with-groups"`: This is a listbox that is grouped into 2 or more labelled sections. In this case, **all navigation and selection is disabled** (meaning you can pass whatever you'd like to them, it's all ignored) and delegated to the child `group`s.
         * * `"group"`: This is a group, contained within a listbox with `type=="with-groups"`
         *
         * There is currently no support for a mix of grouped and ungrouped options.
         */
        groupingType: "with-groups" | "without-groups" | "group";
    };
}
export interface UseListboxReturnType<ListElement extends Element, ListItemElement extends Element, LabelElement extends Element, M extends ListboxInfo<ListItemElement>> extends OmitStrong<UseCompleteListNavigationReturnType<ListElement, ListItemElement, M>, "singleSelectionReturn" | "props"> {
    propsListbox: h.JSX.HTMLAttributes<ListElement>;
    propsListboxLabel: h.JSX.HTMLAttributes<LabelElement>;
    context: UseListboxContext<ListElement, ListItemElement, M>;
}
export interface UseListboxItemReturnType<ListItemElement extends Element, M extends ListboxInfo<ListItemElement>> extends UseCompleteListNavigationChildReturnType<ListItemElement, M>, UsePressReturnType<ListItemElement> {
}
export interface UseListboxItemParameters<ListItemElement extends Element, M extends ListboxInfo<ListItemElement>> extends UseCompleteListNavigationChildParameters<ListItemElement, M> {
    listboxParameters: {
        /**
         * When the `selectionLimit` is `"single"`, this must be `null`.
         */
        selected: boolean | null;
    };
    context: UseListboxContext<any, ListItemElement, M>;
}
export interface ListboxInfo<ListItemElement extends Element> extends UseCompleteListNavigationChildInfo<ListItemElement> {
}
export declare function useListbox<ListElement extends Element, ListItemElement extends Element, LabelElement extends Element, M extends ListboxInfo<ListItemElement>>({ labelParameters, listboxParameters: { selectionLimit, groupingType, selectedIndex, onSelectedIndexChange, orientation }, linearNavigationParameters, singleSelectionParameters: { ariaPropName, selectionMode }, ...restParams }: UseListboxParameters<ListElement, ListItemElement, LabelElement, M>): UseListboxReturnType<ListElement, ListItemElement, LabelElement, M>;
export declare function useListboxItem<ListItemElement extends Element, M extends ListboxInfo<ListItemElement>>({ context: { listboxContext: { selectionLimit }, ...context }, listboxParameters: { selected }, pressParameters, ...restParams }: UseListboxItemParameters<ListItemElement, M>): UseListboxItemReturnType<ListItemElement, M>;
//# sourceMappingURL=use-listbox.d.ts.map