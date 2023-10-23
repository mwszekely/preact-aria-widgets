import { Get10, Get8, OmitStrong } from "../props.js";
import { UseMenubarContext, UseMenubarItemParameters, UseMenubarItemReturnType, UseMenubarParameters, UseMenubarReturnType, UseMenubarSubInfo } from "../use-menubar.js";
import { GenericComponentProps } from "./util.js";
export type MenubarProps<MenuParentElement extends Element, MenuItemElement extends Element, LabelElement extends Element, M extends UseMenubarSubInfo<MenuItemElement>> = GenericComponentProps<UseMenubarReturnType<MenuParentElement, MenuItemElement, LabelElement, M>, Get10<UseMenubarParameters<MenuParentElement, MenuItemElement, M>, "linearNavigationParameters", "rovingTabIndexParameters", "typeaheadNavigationParameters", "labelParameters", "toolbarParameters", "singleSelectionParameters", "refElementParameters", "singleSelectionParameters", "multiSelectionParameters", "singleSelectionDeclarativeParameters">, "orientation" | "ariaLabel" | "singleSelectionMode" | "multiSelectionMode">;
export type MenubarItemProps<MenuItemElement extends Element, M extends UseMenubarSubInfo<MenuItemElement>> = GenericComponentProps<UseMenubarItemReturnType<MenuItemElement, M>, Get8<UseMenubarItemParameters<MenuItemElement, UseMenubarSubInfo<MenuItemElement>>, "menuItemParameters", "textContentParameters", "pressParameters", "info", "refElementParameters", "hasCurrentFocusParameters", "singleSelectionChildParameters", "multiSelectionChildParameters">, "index"> & {
    info?: OmitStrong<M, keyof UseMenubarSubInfo<MenuItemElement>>;
};
export declare const MenubarItemContext: import("preact").Context<UseMenubarContext<any, any>>;
export declare const Menubar: <ContainerElement extends Element, ChildElement extends Element, LabelElement extends Element>({ render, collator, disableHomeEndKeys, navigatePastEnd, navigatePastStart, pageNavigationSize, orientation, noTypeahead, untabbable, onTabbableIndexChange, disabled, singleSelectedIndex, onSingleSelectedIndexChange, typeaheadTimeout, role, ariaLabel, multiSelectionAriaPropName, multiSelectionMode, onSelectionChange, singleSelectionAriaPropName, singleSelectionMode, onNavigateLinear, onNavigateTypeahead, imperativeHandle, onElementChange, onMount, onUnmount, ...void1 }: MenubarProps<ContainerElement, ChildElement, LabelElement, UseMenubarSubInfo<ChildElement>>) => import("preact").JSX.Element;
export declare const MenubarItem: <MenuItemElement extends Element>({ index, render, focusSelf, untabbable, getText, onPress, onPressingChange, role, imperativeHandle, onCurrentFocusedChanged, onCurrentFocusedInnerChanged, onElementChange, onMount, onUnmount, info: uinfo, initiallyMultiSelected, multiSelectionDisabled, onMultiSelectChange, singleSelectionDisabled, onTextContentChange, ...void1 }: MenubarItemProps<MenuItemElement, UseMenubarSubInfo<MenuItemElement>>) => import("preact").JSX.Element;
//# sourceMappingURL=menubar.d.ts.map