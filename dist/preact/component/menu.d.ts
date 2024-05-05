import { OmitStrong } from "preact-prop-helpers/preact";
import { Get15 } from "../props.js";
import { UseMenuItemReturnType, UseMenuParameters, UseMenuReturnType } from "../use-menu.js";
import { UseMenubarSubInfo } from "../use-menubar.js";
import { MenubarItemProps } from "./menubar.js";
import { GenericComponentProps } from "./util.js";
export type MenuProps<MenuSurfaceElement extends Element, MenuParentElement extends Element, MenuItemElement extends Element, MenuButtonElement extends Element, M extends UseMenubarSubInfo<MenuItemElement>> = GenericComponentProps<UseMenuReturnType<MenuSurfaceElement, MenuParentElement, MenuItemElement, MenuButtonElement, M>, Get15<UseMenuParameters<MenuSurfaceElement, MenuParentElement, MenuButtonElement, MenuItemElement, M>, "menuParameters", "menuSurfaceParameters", "linearNavigationParameters", "rovingTabIndexParameters", "typeaheadNavigationParameters", "dismissParameters", "escapeDismissParameters", "toolbarParameters", "singleSelectionParameters", "activeElementParameters", "refElementParameters", "dismissParameters", "modalParameters", "multiSelectionParameters", "singleSelectionDeclarativeParameters">, "active" | "onDismiss" | "openDirection" | "orientation" | "onOpen">;
export type MenuItemProps<MenuItemElement extends Element, M extends UseMenubarSubInfo<MenuItemElement>> = GenericComponentProps<UseMenuItemReturnType<MenuItemElement, M>, MenubarItemProps<MenuItemElement, M>, "index"> & {
    info?: OmitStrong<M, keyof UseMenubarSubInfo<MenuItemElement>>;
};
export declare const Menu: <SurfaceElement extends Element, ParentElement extends Element, ChildElement extends Element, ButtonElement extends Element>({ collator, disableHomeEndKeys, noTypeahead, typeaheadTimeout, orientation, singleSelectionAriaPropName, singleSelectionMode, untabbable, active, onDismiss, onElementChange, onMount, onUnmount, openDirection, onTabbableIndexChange, singleSelectedIndex, navigatePastEnd, navigatePastStart, onSingleSelectedIndexChange, multiSelectionAriaPropName, multiSelectionMode, onSelectionChange, pageNavigationSize, parentDepth, disabled, onOpen, onNavigateLinear, onNavigateTypeahead, getDocument, onActiveElementChange, onLastActiveElementChange, onWindowFocusedChange, render, imperativeHandle, ...void1 }: MenuProps<SurfaceElement, ParentElement, ChildElement, ButtonElement, UseMenubarSubInfo<ChildElement>>) => import("preact-prop-helpers").JSX.Element;
export declare const MenuItem: <MenuItemElement extends Element>({ index, untabbable, onPress, getText, role, focusSelf, onPressingChange, render, imperativeHandle, onCurrentFocusedChanged, onCurrentFocusedInnerChanged, onElementChange, onMount, onUnmount, info: uinfo, initiallyMultiSelected, multiSelectionDisabled, onMultiSelectChange, singleSelectionDisabled, onTextContentChange, ...void1 }: MenuItemProps<MenuItemElement, UseMenubarSubInfo<MenuItemElement>>) => import("preact-prop-helpers").JSX.Element;
//# sourceMappingURL=menu.d.ts.map