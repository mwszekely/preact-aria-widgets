import { Ref, VNode } from "preact";
import { OmitStrong } from "../props.js";
import { ListboxInfo, UseListboxItemParameters, UseListboxItemReturnType, UseListboxParameters, UseListboxReturnType } from "../use-listbox.js";
import { PartialExcept } from "./util.js";
type Get<T, K extends keyof T> = T[K];
interface ListboxPropsBase<ListElement extends Element, ListItemElement extends Element, LabelElement extends Element, M extends ListboxInfo<ListItemElement>> extends Get<UseListboxParameters<ListElement, ListItemElement, LabelElement, M>, "labelParameters">, Get<UseListboxParameters<ListElement, ListItemElement, LabelElement, M>, "linearNavigationParameters">, OmitStrong<Get<UseListboxParameters<ListElement, ListItemElement, LabelElement, M>, "listboxParameters">, "groupingType">, Get<UseListboxParameters<ListElement, ListItemElement, LabelElement, M>, "rearrangeableChildrenParameters">, Get<UseListboxParameters<ListElement, ListItemElement, LabelElement, M>, "rovingTabIndexParameters">, Get<UseListboxParameters<ListElement, ListItemElement, LabelElement, M>, "sortableChildrenParameters">, Get<UseListboxParameters<ListElement, ListItemElement, LabelElement, M>, "staggeredChildrenParameters">, Get<UseListboxParameters<ListElement, ListItemElement, LabelElement, M>, "paginatedChildrenParameters">, Get<UseListboxParameters<ListElement, ListItemElement, LabelElement, M>, "typeaheadNavigationParameters">, Get<UseListboxParameters<ListElement, ListItemElement, LabelElement, M>, "singleSelectionParameters"> {
    ref?: Ref<UseListboxReturnType<ListElement, ListItemElement, LabelElement, M>>;
}
interface ListboxItemPropsBase<ListItemElement extends Element, M extends ListboxInfo<ListItemElement>> extends Get<UseListboxItemParameters<ListItemElement, ListboxInfo<ListItemElement>>, "listboxParameters">, Pick<M, "index" | "untabbable" | "unselectable">, Get<UseListboxItemParameters<ListItemElement, ListboxInfo<ListItemElement>>, "sortableChildParameters">, OmitStrong<NonNullable<Get<UseListboxItemParameters<ListItemElement, ListboxInfo<ListItemElement>>, "pressParameters">>, "focusSelf">, Get<UseListboxItemParameters<ListItemElement, ListboxInfo<ListItemElement>>, "textContentParameters"> {
    focusSelf?: UseListboxItemParameters<ListItemElement, ListboxInfo<ListItemElement>>["info"]["focusSelf"];
    subInfo?: OmitStrong<UseListboxItemParameters<ListItemElement, ListboxInfo<ListItemElement>>["info"], "focusSelf">;
    ref?: Ref<UseListboxItemReturnType<ListItemElement, M>>;
}
export interface ListboxProps<ListElement extends Element, ListItemElement extends Element, LabelElement extends Element, M extends ListboxInfo<ListItemElement>> extends PartialExcept<ListboxPropsBase<ListElement, ListItemElement, LabelElement, M>, "ariaLabel" | "selectionLimit" | "selectedIndex"> {
    render(info: UseListboxReturnType<ListElement, ListItemElement, LabelElement, M>): VNode;
}
export interface ListboxItemProps<ListItemElement extends Element, M extends ListboxInfo<ListItemElement>> extends PartialExcept<ListboxItemPropsBase<ListItemElement, M>, "index" | "getSortValue"> {
    render(info: UseListboxItemReturnType<ListItemElement, ListboxInfo<ListItemElement>>): VNode;
}
export declare const GroupedListbox: <LabelElement extends Element>({ ariaLabel, selectionLimit, orientation, render }: Pick<ListboxProps<any, any, LabelElement, any>, "orientation" | "ariaLabel" | "selectionLimit" | "render">) => import("preact").JSX.Element;
export declare const Listbox: <ListElement extends Element, ListItemElement extends Element, LabelElement extends Element, M extends ListboxInfo<ListItemElement> = ListboxInfo<ListItemElement>>({ ariaLabel, collator, compare, disableHomeEndKeys, getIndex, selectedIndex, navigatePastEnd, navigatePastStart, noTypeahead, onSelectedIndexChange, onTabbableIndexChange, staggered, pageNavigationSize, paginationMax, paginationMin, selectionLimit, untabbable, typeaheadTimeout, orientation, ariaPropName, selectionMode, render }: ListboxProps<ListElement, ListItemElement, LabelElement, M>) => import("preact").JSX.Element;
export declare const ListboxItem: <ListboxItemElement extends Element, M extends ListboxInfo<ListboxItemElement> = ListboxInfo<ListboxItemElement>>({ unselectable, focusSelf, getText, untabbable, index, render, selected, getSortValue, allowRepeatPresses, excludeEnter, excludePointer, longPressThreshold, onPressingChange, onMultiSelect, ...subInfo }: ListboxItemProps<ListboxItemElement, M>) => VNode<{}>;
export {};
//# sourceMappingURL=listbox.d.ts.map