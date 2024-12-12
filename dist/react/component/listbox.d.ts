import { Ref, TargetedOmit, UseCompleteListNavigationChildInfo, UseCompleteListNavigationChildReturnType, UseCompleteListNavigationChildrenInfo, UseCompleteListNavigationChildrenParameters, UseCompleteListNavigationChildrenReturnType, UseProcessedChildInfo, UseProcessedChildParameters, UseProcessedChildReturnType, UseRearrangeableChildParameters, UseRefElementParameters, UseRefElementReturnType, VNode } from "preact-prop-helpers";
import { Get, Get11, Get3, Get4, Get7, OmitStrong } from "../props.js";
import { ListboxInfo, UseListboxItemParameters, UseListboxItemReturnType, UseListboxParameters, UseListboxReturnType } from "../use-listbox.js";
import { GenericComponentProps } from "./util.js";
interface ListboxPropsBase<ListElement extends Element, ListItemElement extends Element, LabelElement extends Element, M extends ListboxInfo<ListItemElement> = ListboxInfo<ListItemElement>> extends Get11<UseListboxParameters<ListElement, ListItemElement, LabelElement, M>, "labelParameters", "linearNavigationParameters", "rovingTabIndexParameters", "typeaheadNavigationParameters", "singleSelectionParameters", "refElementParameters", "singleSelectionParameters", "singleSelectionDeclarativeParameters", "multiSelectionParameters", "paginatedChildrenParameters", "processedIndexManglerParameters">, OmitStrong<Get<UseListboxParameters<ListElement, ListItemElement, LabelElement, M>, "listboxParameters">, "groupingType"> {
}
interface ListboxChildrenPropsBase<ListItemElement extends Element, M extends UseCompleteListNavigationChildInfo<ListItemElement>, SM extends UseCompleteListNavigationChildrenInfo<ListItemElement> = UseCompleteListNavigationChildrenInfo<ListItemElement>> extends Get4<UseCompleteListNavigationChildrenParameters<ListItemElement, M, SM>, "managedChildrenParameters", "paginatedChildrenParameters", "rearrangeableChildrenParameters", "staggeredChildrenParameters"> {
}
interface ListboxItemInnerPropsBase<ListItemElement extends Element, M extends ListboxInfo<ListItemElement> = ListboxInfo<ListItemElement>> extends Get7<UseListboxItemParameters<ListItemElement, ListboxInfo<ListItemElement>>, "listboxParameters", "textContentParameters", "refElementParameters", "hasCurrentFocusParameters", "singleSelectionChildParameters", "multiSelectionChildParameters", "multiSelectionChildDeclarativeParameters">, OmitStrong<NonNullable<Get<UseListboxItemParameters<ListItemElement, ListboxInfo<ListItemElement>>, "pressParameters">>, never>, Pick<M, "index" | "untabbable" | "focusSelf"> {
}
export interface ListboxProps<ListElement extends Element, ListItemElement extends Element, LabelElement extends Element, M extends ListboxInfo<ListItemElement>> extends GenericComponentProps<UseListboxReturnType<ListElement, ListItemElement, LabelElement, M>, ListboxPropsBase<ListElement, ListItemElement, LabelElement, M>, "ariaLabel"> {
}
export interface ListboxChildrenProps<ListItemElement extends Element, M extends UseCompleteListNavigationChildInfo<ListItemElement>, SM extends UseCompleteListNavigationChildrenInfo<ListItemElement>> extends GenericComponentProps<UseCompleteListNavigationChildrenReturnType<ListItemElement, SM>, ListboxChildrenPropsBase<ListItemElement, M>, "children"> {
}
type InnerOuterDifference<ListItemElement extends Element> = OmitStrong<Get3<UseProcessedChildReturnType<ListItemElement, UseProcessedChildInfo<ListItemElement>>, "managedChildReturn", "paginatedChildReturn", "staggeredChildReturn">, "getChildren">;
interface ListboxItemInnerProps<ListItemElement extends Element, M extends ListboxInfo<ListItemElement>> extends GenericComponentProps<(TargetedOmit<OmitStrong<UseProcessedChildReturnType<ListItemElement, UseProcessedChildInfo<ListItemElement>>, "managedChildReturn">, "staggeredChildReturn", "childUseEffect"> & TargetedOmit<OmitStrong<UseProcessedChildReturnType<ListItemElement, UseProcessedChildInfo<ListItemElement>>, "managedChildReturn">, "paginatedChildReturn", never> & Partial<UseListboxItemReturnType<ListItemElement, ListboxInfo<ListItemElement>>>), ListboxItemInnerPropsBase<ListItemElement, M>, "index">, InnerOuterDifference<ListItemElement> {
    props: UseProcessedChildReturnType<ListItemElement, UseProcessedChildInfo<ListItemElement>>["props"];
}
export declare const GroupedListbox: <LabelElement extends Element>({ ariaLabel, orientation, render, onElementChange, onMount, onUnmount, }: Pick<ListboxProps<any, any, LabelElement, any>, "orientation" | "ariaLabel" | "render" | "onElementChange" | "onMount" | "onUnmount">) => import("preact").h.JSX.Element;
export declare const Listbox: <ListElement extends Element, ListItemElement extends Element, LabelElement extends Element>({ ariaLabel, collator, disableHomeEndKeys, singleSelectedIndex, navigatePastEnd, navigatePastStart, noTypeahead, onSingleSelectedIndexChange, onTabbableIndexChange, pageNavigationSize, untabbable, typeaheadTimeout, orientation, onNavigateLinear, onNavigateTypeahead, onElementChange, onMount, onUnmount, render, imperativeHandle, singleSelectionAriaPropName, singleSelectionMode, multiSelectionAriaPropName, multiSelectionMode, onSelectionChange, paginationMax, paginationMin, getSortValueAt, compare, getIndex, ...void1 }: ListboxProps<ListElement, ListItemElement, LabelElement, ListboxInfo<ListItemElement>>) => import("preact").h.JSX.Element;
export declare const ListboxChildren: <ListItemElement extends Element, M extends UseCompleteListNavigationChildInfo<ListItemElement>, SM extends UseCompleteListNavigationChildrenInfo<ListItemElement>>({ children, render, imperativeHandle, onAfterChildLayoutEffect, onChildrenCountChange, onChildrenMountChange, paginationMax, paginationMin, staggered, }: ListboxChildrenProps<ListItemElement, M, SM>) => import("preact").h.JSX.Element;
type UseProcessedListboxItemReturnType<ListboxItemElement extends Element> = OmitStrong<UseProcessedChildReturnType<ListboxItemElement, any>, "refElementParameters"> & Pick<UseRefElementReturnType<ListboxItemElement>, "refElementReturn">;
export interface ListboxItemProps<ListboxItemElement extends Element> extends OmitStrong<ListboxItemInnerProps<ListboxItemElement, ListboxInfo<ListboxItemElement>>, keyof InnerOuterDifference<any> | "render" | "imperativeHandle" | "props">, OmitStrong<Get<UseProcessedChildParameters<ListboxItemElement, any>, "info">, "index" | "getElement">, Partial<Get<UseRefElementParameters<ListboxItemElement>, "refElementParameters">>, Partial<Get<UseRearrangeableChildParameters<ListboxItemElement>, "rearrangeableChildParameters">> {
    imperativeHandle?: Ref<{
        hidden: true;
    } & UseProcessedListboxItemReturnType<ListboxItemElement>> | Ref<{
        hidden?: false;
    } & UseProcessedListboxItemReturnType<ListboxItemElement> & UseCompleteListNavigationChildReturnType<ListboxItemElement, any>>;
    render: {
        (info: {
            hidden: true;
        } & UseProcessedListboxItemReturnType<ListboxItemElement>): VNode;
        (info: {
            hidden?: false;
        } & UseProcessedListboxItemReturnType<ListboxItemElement> & UseCompleteListNavigationChildReturnType<ListboxItemElement, ListboxInfo<ListboxItemElement>>): VNode;
    };
}
export declare const ListboxItem: <ListboxItemElement extends Element>({ index, render, imperativeHandle, onElementChange: oec1, onMount, onUnmount, getText, untabbable, allowRepeatPresses, excludeEnter, excludePointer, longPressThreshold, onPressingChange, onCurrentFocusedChanged, onCurrentFocusedInnerChanged, focusSelf, multiSelectionDisabled, singleSelectionDisabled, multiSelected, onMultiSelectedChange, onTextContentChange, cssProperty, duration, ...void1 }: ListboxItemProps<ListboxItemElement>) => import("preact").h.JSX.Element;
export {};
//# sourceMappingURL=listbox.d.ts.map