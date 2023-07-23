import { Ref, VNode } from "preact";
import { Get12 } from "../props.js";
import { UseMenuItemReturnType, UseMenuParameters, UseMenuReturnType } from "../use-menu.js";
import { UseMenubarSubInfo } from "../use-menubar.js";
import { MenubarItemProps } from "./menubar.js";
import { PartialExcept } from "./util.js";
interface MenuPropsBase<MenuSurfaceElement extends Element, MenuParentElement extends Element, MenuItemElement extends Element, MenuButtonElement extends Element, M extends UseMenubarSubInfo<MenuItemElement>> extends //Omit<UseMenuParameters<E, K, I>, "indexMangler" | "indexDemangler" | "onAfterChildLayoutEffect" | "onChildrenMountChange" | "onTabbableIndexChange" | "onTabbableRender" | "onTabbedInTo" | "onTabbedOutOf"> & {
Get12<UseMenuParameters<MenuSurfaceElement, MenuParentElement, MenuButtonElement, MenuItemElement, M>, "menuParameters", "menuSurfaceParameters", "linearNavigationParameters", "rovingTabIndexParameters", "typeaheadNavigationParameters", "dismissParameters", "staggeredChildrenParameters", "escapeDismissParameters", "rearrangeableChildrenParameters", "sortableChildrenParameters", "toolbarParameters", "singleSelectionParameters"> {
}
export interface MenuProps<MenuSurfaceElement extends Element, MenuParentElement extends Element, MenuItemElement extends Element, MenuButtonElement extends Element, M extends UseMenubarSubInfo<MenuItemElement>> extends PartialExcept<MenuPropsBase<MenuSurfaceElement, MenuParentElement, MenuItemElement, MenuButtonElement, M>, "open" | "onClose" | "onOpen" | "openDirection" | "orientation"> {
    render(menuInfo: UseMenuReturnType<MenuSurfaceElement, MenuParentElement, MenuItemElement, MenuButtonElement, M>): VNode;
}
export interface MenuItemProps<MenuItemElement extends Element, M extends UseMenubarSubInfo<MenuItemElement>> extends MenubarItemProps<MenuItemElement, M> {
    render(info: UseMenuItemReturnType<MenuItemElement, M>): VNode<any>;
}
export declare const Menu: <SurfaceElement extends Element, ParentElement extends Element, ChildElement extends Element, ButtonElement extends Element, M extends UseMenubarSubInfo<ChildElement> = UseMenubarSubInfo<ChildElement>>({ collator, disableHomeEndKeys, noTypeahead, typeaheadTimeout, orientation, ariaPropName, selectionMode, untabbable, onClose, open, openDirection, onTabbableIndexChange, closeOnBackdrop, closeOnEscape, closeOnLostFocus, compare, getIndex, selectedIndex, navigatePastEnd, navigatePastStart, onSelectedIndexChange, pageNavigationSize, parentDepth, disabled, staggered, onOpen, onNavigateLinear, onNavigateTypeahead, getWindow, render }: MenuProps<SurfaceElement, ParentElement, ChildElement, ButtonElement, M>, ref?: Ref<any>) => import("preact").JSX.Element;
export declare const MenuItem: <MenuItemElement extends Element, M extends UseMenubarSubInfo<MenuItemElement> = UseMenubarSubInfo<MenuItemElement>>({ index, untabbable, getSortValue, onPress, getText, role, focusSelf, unselectable, onPressingChange, render, info: uinfo }: MenuItemProps<MenuItemElement, M>, ref?: Ref<any>) => import("preact").JSX.Element;
export {};
//# sourceMappingURL=menu.d.ts.map