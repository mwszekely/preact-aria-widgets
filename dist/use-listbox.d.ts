import { CompleteListNavigationContext, ElementProps, EventType, TargetedOmit, TargetedPick, UseCompleteListNavigationChildInfo, UseCompleteListNavigationChildParameters, UseCompleteListNavigationChildReturnType, UseCompleteListNavigationParameters, UseCompleteListNavigationReturnType, UsePressParameters, UsePressReturnType, UseSingleSelectionDeclarativeParameters } from "preact-prop-helpers";
import { EventDetail, OmitStrong } from "./props.js";
import { UseLabelSyntheticParameters } from "./use-label.js";
export type ListboxSingleSelectEvent<E extends EventTarget> = {
    [EventDetail]: {
        selectedIndex: number;
    };
} & Pick<EventType<E, Event>, "target" | "currentTarget">;
export type ListboxMultiSelectEvent<E extends EventTarget> = {
    [EventDetail]: {
        selected: boolean;
    };
} & Pick<EventType<E, Event>, "target" | "currentTarget">;
export interface UseListboxContext<ListElement extends Element, ListItemElement extends Element, M extends ListboxInfo<ListItemElement>> extends CompleteListNavigationContext<ListElement, ListItemElement, M> {
    listboxContext: {
        selectionLimit: "single" | "multi" | "none";
    };
}
export interface UseListboxParametersSelf<ListElement extends Element, ListItemElement extends Element, _LabelElement extends Element, M extends ListboxInfo<ListItemElement>> {
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
    onSelectedIndexChange: UseSingleSelectionDeclarativeParameters["singleSelectionDeclarativeParameters"]["onSelectedIndexChange"];
    /**
     * * `"without-groups"`: This is a listbox with no groups
     * * `"with-groups"`: This is a listbox that is grouped into 2 or more labelled sections. In this case, **all navigation and selection is disabled** (meaning you can pass whatever you'd like to them, it's all ignored) and delegated to the child `group`s.
     * * `"group"`: This is a group, contained within a listbox with `type=="with-groups"`
     *
     * There is currently no support for a mix of grouped and ungrouped options.
     */
    groupingType: "with-groups" | "without-groups" | "group";
}
export interface UseListboxParameters<ListElement extends Element, ListItemElement extends Element, _LabelElement extends Element, M extends ListboxInfo<ListItemElement>> extends OmitStrong<UseCompleteListNavigationParameters<ListElement, ListItemElement, M>, "rovingTabIndexParameters" | "linearNavigationParameters" | "singleSelectionParameters">, TargetedOmit<UseLabelSyntheticParameters, "labelParameters", "onLabelClick">, TargetedOmit<UseCompleteListNavigationParameters<ListElement, ListItemElement, M>, "rovingTabIndexParameters", "focusSelfParent">, TargetedOmit<UseCompleteListNavigationParameters<ListElement, ListItemElement, M>, "linearNavigationParameters", "arrowKeyDirection">, TargetedPick<UseCompleteListNavigationParameters<ListElement, ListItemElement, M>, "singleSelectionParameters", "ariaPropName" | "selectionMode"> {
    listboxParameters: UseListboxParametersSelf<ListElement, ListItemElement, _LabelElement, M>;
}
export interface UseListboxReturnType<ListElement extends Element, ListItemElement extends Element, LabelElement extends Element, M extends ListboxInfo<ListItemElement>> extends OmitStrong<UseCompleteListNavigationReturnType<ListElement, ListItemElement, M>, "singleSelectionReturn" | "props"> {
    propsListbox: ElementProps<ListElement>;
    propsListboxLabel: ElementProps<LabelElement>;
    context: UseListboxContext<ListElement, ListItemElement, M>;
}
export interface UseListboxItemReturnType<ListItemElement extends Element, M extends ListboxInfo<ListItemElement>> extends OmitStrong<UseCompleteListNavigationChildReturnType<ListItemElement, M>, "propsChild" | "propsTabbable" | "pressParameters">, UsePressReturnType<ListItemElement> {
}
export interface UseListboxItemParametersSelf<ListItemElement extends Element> {
    /**
     * When the `selectionLimit` is `"single"`, this must be `null`.
     */
    selected: boolean | null;
    onMultiSelect: null | ((e: ListboxMultiSelectEvent<ListItemElement>) => void);
}
export interface UseListboxItemParameters<ListItemElement extends Element, M extends ListboxInfo<ListItemElement>> extends UseCompleteListNavigationChildParameters<ListItemElement, M>, TargetedOmit<UsePressParameters<ListItemElement>, "pressParameters", "excludeSpace" | "onPressSync"> {
    listboxParameters: UseListboxItemParametersSelf<ListItemElement>;
    context: UseListboxContext<any, ListItemElement, M>;
}
export interface ListboxInfo<ListItemElement extends Element> extends UseCompleteListNavigationChildInfo<ListItemElement> {
}
/**
 * Implements a [Listbox](https://www.w3.org/WAI/ARIA/apg/patterns/listbox/) pattern.
 *
 * @remarks A listbox is a very limited widget and its items cannot contain interactive or non-text content.
 *
 * @see {@link useGridlist} for a more capable list widget.
 *
 * @compositeParams
 *
 * @hasChild {@link useListboxItem}
 */
export declare function useListbox<ListElement extends Element, ListItemElement extends Element, LabelElement extends Element, M extends ListboxInfo<ListItemElement> = ListboxInfo<ListItemElement>>({ labelParameters, listboxParameters: { selectionLimit, groupingType, selectedIndex, onSelectedIndexChange, orientation }, linearNavigationParameters, singleSelectionParameters: { ariaPropName, selectionMode }, rovingTabIndexParameters, ...restParams }: UseListboxParameters<ListElement, ListItemElement, LabelElement, M>): UseListboxReturnType<ListElement, ListItemElement, LabelElement, M>;
/**
 * @compositeParams
 */
export declare function useListboxItem<ListItemElement extends Element, M extends ListboxInfo<ListItemElement> = ListboxInfo<ListItemElement>>({ context: { listboxContext: { selectionLimit }, ...context }, listboxParameters: { selected, onMultiSelect }, pressParameters: { focusSelf, allowRepeatPresses, excludeEnter, excludePointer, longPressThreshold, onPressingChange, ...void1 }, ...restParams }: UseListboxItemParameters<ListItemElement, M>): UseListboxItemReturnType<ListItemElement, M>;
//# sourceMappingURL=use-listbox.d.ts.map