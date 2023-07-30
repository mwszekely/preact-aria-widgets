import { Get10, Get6, OmitStrong } from "../props.js";
import { UseMenubarContext, UseMenubarItemParameters, UseMenubarItemReturnType, UseMenubarParameters, UseMenubarReturnType, UseMenubarSubInfo } from "../use-menubar.js";
import { GenericComponentProps } from "./util.js";
export type MenubarProps<MenuParentElement extends Element, MenuItemElement extends Element, LabelElement extends Element, M extends UseMenubarSubInfo<MenuItemElement>> = GenericComponentProps<UseMenubarReturnType<MenuParentElement, MenuItemElement, LabelElement, M>, Get10<UseMenubarParameters<MenuParentElement, MenuItemElement, M>, "linearNavigationParameters", "rovingTabIndexParameters", "typeaheadNavigationParameters", "rearrangeableChildrenParameters", "sortableChildrenParameters", "staggeredChildrenParameters", "labelParameters", "toolbarParameters", "singleSelectionParameters", "refElementParameters">, "orientation" | "ariaLabel">;
export type MenubarItemProps<MenuItemElement extends Element, M extends UseMenubarSubInfo<MenuItemElement>> = GenericComponentProps<UseMenubarItemReturnType<MenuItemElement, M>, Get6<UseMenubarItemParameters<MenuItemElement, UseMenubarSubInfo<MenuItemElement>>, "menuItemParameters", "textContentParameters", "pressParameters", "info", "refElementParameters", "hasCurrentFocusParameters">, "index" | "getSortValue"> & {
    info?: OmitStrong<M, keyof UseMenubarSubInfo<MenuItemElement>>;
};
export declare const MenubarItemContext: import("preact").Context<UseMenubarContext<any, any, any>>;
export declare const Menubar: <ContainerElement extends Element, ChildElement extends Element, LabelElement extends Element>({ render, collator, disableHomeEndKeys, navigatePastEnd, navigatePastStart, pageNavigationSize, orientation, staggered, noTypeahead, untabbable, onTabbableIndexChange, compare, getIndex, disabled, selectedIndex, onSelectedIndexChange, typeaheadTimeout, role, ariaLabel, ariaPropName, selectionMode, onNavigateLinear, onNavigateTypeahead, imperativeHandle, onElementChange, onMount, onUnmount, ...void1 }: MenubarProps<ContainerElement, ChildElement, LabelElement, UseMenubarSubInfo<ChildElement>>) => import("preact").JSX.Element;
export declare function MenubarItem<MenuItemElement extends Element>({ index, render, focusSelf, untabbable, getText, unselectable, onPress, getSortValue, onPressingChange, role, imperativeHandle, onCurrentFocusedChanged, onCurrentFocusedInnerChanged, onElementChange, onMount, onUnmount, info: uinfo }: MenubarItemProps<MenuItemElement, UseMenubarSubInfo<MenuItemElement>>): import("preact").JSX.Element;
//# sourceMappingURL=menubar.d.ts.map