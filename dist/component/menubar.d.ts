import { Ref, VNode } from "preact";
import { Get, OmitStrong } from "../props.js";
import { UseMenubarContext, UseMenubarItemParameters, UseMenubarItemReturnType, UseMenubarParameters, UseMenubarReturnType, UseMenubarSubInfo } from "../use-menubar.js";
import { PartialExcept } from "./util.js";
interface MenubarPropsBase<MenuParentElement extends Element, MenuItemElement extends Element, LabelElement extends Element, M extends UseMenubarSubInfo<MenuItemElement>> extends Get<UseMenubarParameters<MenuParentElement, MenuItemElement, M>, "linearNavigationParameters">, Get<UseMenubarParameters<MenuParentElement, MenuItemElement, M>, "rovingTabIndexParameters">, Get<UseMenubarParameters<MenuParentElement, MenuItemElement, M>, "typeaheadNavigationParameters">, Get<UseMenubarParameters<MenuParentElement, MenuItemElement, M>, "singleSelectionDeclarativeParameters">, Get<UseMenubarParameters<MenuParentElement, MenuItemElement, M>, "rearrangeableChildrenParameters">, Get<UseMenubarParameters<MenuParentElement, MenuItemElement, M>, "sortableChildrenParameters">, Get<UseMenubarParameters<MenuParentElement, MenuItemElement, M>, "staggeredChildrenParameters">, Get<UseMenubarParameters<MenuParentElement, MenuItemElement, M>, "labelParameters">, Get<UseMenubarParameters<MenuParentElement, MenuItemElement, M>, "toolbarParameters"> {
    ref?: Ref<UseMenubarReturnType<MenuParentElement, MenuItemElement, LabelElement, M>>;
}
interface MenubarItemPropsBase<MenuItemElement extends Element> extends Get<UseMenubarItemParameters<MenuItemElement, UseMenubarSubInfo<MenuItemElement>>, "menuItemParameters">, Get<UseMenubarItemParameters<MenuItemElement, UseMenubarSubInfo<MenuItemElement>>, "rovingTabIndexChildParameters">, Get<UseMenubarItemParameters<MenuItemElement, UseMenubarSubInfo<MenuItemElement>>, "sortableChildParameters">, Get<UseMenubarItemParameters<MenuItemElement, UseMenubarSubInfo<MenuItemElement>>, "managedChildParameters">, Get<UseMenubarItemParameters<MenuItemElement, UseMenubarSubInfo<MenuItemElement>>, "singleSelectionChildParameters">, Get<UseMenubarItemParameters<MenuItemElement, UseMenubarSubInfo<MenuItemElement>>, "textContentParameters"> {
    focusSelf?: UseMenubarItemParameters<MenuItemElement, UseMenubarSubInfo<MenuItemElement>>["completeListNavigationChildParameters"]["focusSelf"];
    subInfo?: OmitStrong<UseMenubarItemParameters<MenuItemElement, UseMenubarSubInfo<MenuItemElement>>["completeListNavigationChildParameters"], "focusSelf">;
    ref?: Ref<UseMenubarItemReturnType<MenuItemElement, UseMenubarSubInfo<MenuItemElement>>>;
}
export interface MenubarProps<MenuParentElement extends Element, MenuItemElement extends Element, LabelElement extends Element, M extends UseMenubarSubInfo<MenuItemElement>> extends PartialExcept<MenubarPropsBase<MenuParentElement, MenuItemElement, LabelElement, M>, "orientation" | "ariaLabel"> {
    render(info: UseMenubarReturnType<MenuParentElement, MenuItemElement, LabelElement, M>): VNode<any>;
}
export interface MenubarItemProps<MenuItemElement extends Element, M extends UseMenubarSubInfo<MenuItemElement>> extends PartialExcept<MenubarItemPropsBase<MenuItemElement>, "ariaPropName" | "index" | "selectionMode" | "getSortValue"> {
    render(info: UseMenubarItemReturnType<MenuItemElement, M>): VNode<any>;
}
export declare const MenubarItemContext: import("preact").Context<UseMenubarContext<any, any, any>>;
export declare const Menubar: <ContainerElement extends Element, ChildElement extends Element, LabelElement extends Element, M extends UseMenubarSubInfo<ChildElement> = UseMenubarSubInfo<ChildElement>>({ render, collator, disableArrowKeys, disableHomeEndKeys, navigatePastEnd, navigatePastStart, pageNavigationSize, orientation, staggered, noTypeahead, onTabbableIndexChange, compare, getIndex, untabbable, selectedIndex, onSelectedIndexChange, typeaheadTimeout, role, ariaLabel }: MenubarProps<ContainerElement, ChildElement, LabelElement, M>, ref?: Ref<any>) => import("preact").JSX.Element;
export declare const MenubarItem: <MenuItemElement extends Element, M extends UseMenubarSubInfo<MenuItemElement>>({ index, render, ariaPropName, focusSelf, selectionMode, hidden, getText, disabled, onPress, getSortValue, role, subInfo }: MenubarItemProps<MenuItemElement, M>, ref?: Ref<any>) => import("preact").JSX.Element;
export {};
//# sourceMappingURL=menubar.d.ts.map