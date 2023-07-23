import { ElementProps, PressEventReason, TargetedPick, UsePressParameters, UsePressReturnType } from "preact-prop-helpers";
import { OmitStrong } from "./props.js";
import { UseToolbarChildParameters, UseToolbarChildReturnType, UseToolbarContext, UseToolbarParameters, UseToolbarReturnType, UseToolbarSubInfo } from "./use-toolbar.js";
export interface UseMenubarContext<ContainerElement extends Element, ChildElement extends Element, M extends UseMenubarSubInfo<ChildElement>> extends UseToolbarContext<ContainerElement, ChildElement, M> {
}
export interface UseMenubarSubInfo<ChildElement extends Element> extends UseToolbarSubInfo<ChildElement> {
}
export interface UseMenubarParameters<MenuParentElement extends Element, MenuItemElement extends Element, M extends UseMenubarSubInfo<MenuItemElement>> extends UseToolbarParameters<MenuParentElement, MenuItemElement, M> {
}
export interface UseMenubarItemParametersSelf<MenuItemElement extends Element> {
    role: "menuitem" | "menuitemcheckbox" | "menuitemradio";
    /**
     * Optional. Applies in addition to any single-selection behavior.
     */
    onPress: null | ((e: PressEventReason<MenuItemElement>) => void);
}
export interface UseMenubarItemParameters<MenuItemElement extends Element, M extends UseMenubarSubInfo<MenuItemElement>> extends OmitStrong<UseToolbarChildParameters<MenuItemElement, M>, "toolbarChildParameters">, TargetedPick<UsePressParameters<MenuItemElement>, "pressParameters", "onPressingChange"> {
    menuItemParameters: UseMenubarItemParametersSelf<MenuItemElement>;
}
export interface UseMenubarReturnType<MenuParentElement extends Element, MenuItemElement extends Element, LabelElement extends Element, M extends UseMenubarSubInfo<MenuItemElement>> extends OmitStrong<UseToolbarReturnType<MenuParentElement, MenuItemElement, LabelElement, M>, "propsToolbar"> {
    propsMenubar: ElementProps<MenuParentElement>;
    context: UseMenubarContext<MenuParentElement, MenuItemElement, M>;
}
export interface UseMenubarItemReturnType<MenuItemElement extends Element, M extends UseMenubarSubInfo<MenuItemElement>> extends OmitStrong<UseToolbarChildReturnType<MenuItemElement, M>, "propsChild" | "propsTabbable" | "pressParameters">, UsePressReturnType<MenuItemElement> {
}
/**
 * Implements a [Menubar](https://www.w3.org/WAI/ARIA/apg/patterns/menubar/) pattern.
 *
 * @remarks A menubar is identical to a toolbar, except that every item
 * in a menubar is a menuitem (or similar) and has some sort of
 * role and action when pressed besides just single selection (if applicable).
 *
 * (A toolbar child won't have a defined role, but every menubar child will)
 *
 * @compositeParams
 */
export declare function useMenubar<MenuParentElement extends Element, MenuItemElement extends Element, LabelElement extends Element, M extends UseMenubarSubInfo<MenuItemElement>>(args: UseMenubarParameters<MenuParentElement, MenuItemElement, M>): UseMenubarReturnType<MenuParentElement, MenuItemElement, LabelElement, M>;
/**
 * @compositeParams
 */
export declare function useMenubarChild<MenuItemElement extends Element, M extends UseMenubarSubInfo<MenuItemElement>>({ menuItemParameters: { onPress: opu, role }, pressParameters: { onPressingChange, ...void1 }, ...restParams }: UseMenubarItemParameters<MenuItemElement, M>): UseMenubarItemReturnType<MenuItemElement, M>;
//# sourceMappingURL=use-menubar.d.ts.map