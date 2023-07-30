import { VNode } from "preact";
import { Get, Get10, Get4, OmitStrong } from "../props.js";
import { ListboxInfo, UseListboxItemParameters, UseListboxItemReturnType, UseListboxParameters, UseListboxReturnType } from "../use-listbox.js";
import { GenericComponentProps, PartialExcept } from "./util.js";
interface ListboxPropsBase<ListElement extends Element, ListItemElement extends Element, LabelElement extends Element, M extends ListboxInfo<ListItemElement> = ListboxInfo<ListItemElement>> extends Get10<UseListboxParameters<ListElement, ListItemElement, LabelElement, M>, "labelParameters", "linearNavigationParameters", "rearrangeableChildrenParameters", "rovingTabIndexParameters", "sortableChildrenParameters", "staggeredChildrenParameters", "paginatedChildrenParameters", "typeaheadNavigationParameters", "singleSelectionParameters", "refElementParameters">, OmitStrong<Get<UseListboxParameters<ListElement, ListItemElement, LabelElement, M>, "listboxParameters">, "groupingType"> {
}
interface ListboxItemPropsBase<ListItemElement extends Element, M extends ListboxInfo<ListItemElement> = ListboxInfo<ListItemElement>> extends Get4<UseListboxItemParameters<ListItemElement, ListboxInfo<ListItemElement>>, "listboxParameters", "textContentParameters", "refElementParameters", "hasCurrentFocusParameters">, Pick<M, "index" | "untabbable" | "unselectable" | "getSortValue" | "focusSelf">, OmitStrong<NonNullable<Get<UseListboxItemParameters<ListItemElement, ListboxInfo<ListItemElement>>, "pressParameters">>, never> {
}
export interface ListboxProps<ListElement extends Element, ListItemElement extends Element, LabelElement extends Element, M extends ListboxInfo<ListItemElement>> extends GenericComponentProps<UseListboxReturnType<ListElement, ListItemElement, LabelElement, M>, ListboxPropsBase<ListElement, ListItemElement, LabelElement, M>, "ariaLabel" | "selectionLimit" | "selectedIndex"> {
}
export interface ListboxItemProps<ListItemElement extends Element, M extends ListboxInfo<ListItemElement>> extends PartialExcept<ListboxItemPropsBase<ListItemElement, M>, "index" | "getSortValue"> {
    render(info: UseListboxItemReturnType<ListItemElement, ListboxInfo<ListItemElement>>): VNode;
}
export declare const GroupedListbox: <LabelElement extends Element>({ ariaLabel, selectionLimit, orientation, render, onElementChange, onMount, onUnmount }: Pick<ListboxProps<any, any, LabelElement, any>, "orientation" | "ariaLabel" | "selectionLimit" | "onElementChange" | "onMount" | "onUnmount" | "render">) => import("preact").JSX.Element;
export declare const Listbox: <ListElement extends Element, ListItemElement extends Element, LabelElement extends Element>({ ariaLabel, collator, compare, disableHomeEndKeys, getIndex, selectedIndex, navigatePastEnd, navigatePastStart, noTypeahead, onSelectedIndexChange, onTabbableIndexChange, staggered, pageNavigationSize, paginationMax, paginationMin, selectionLimit, untabbable, typeaheadTimeout, orientation, ariaPropName, selectionMode, onNavigateLinear, onNavigateTypeahead, onElementChange, onMount, onUnmount, render }: ListboxProps<ListElement, ListItemElement, LabelElement, ListboxInfo<ListItemElement>>) => import("preact").JSX.Element;
export declare const ListboxItem: <ListboxItemElement extends Element>({ unselectable, getText, untabbable, index, render, selected, getSortValue, allowRepeatPresses, excludeEnter, excludePointer, longPressThreshold, onPressingChange, onMultiSelect, onElementChange, onMount, onUnmount, onCurrentFocusedChanged, onCurrentFocusedInnerChanged, focusSelf, ...subInfo }: ListboxItemProps<ListboxItemElement, ListboxInfo<ListboxItemElement>>) => VNode<{}>;
export {};
//# sourceMappingURL=listbox.d.ts.map