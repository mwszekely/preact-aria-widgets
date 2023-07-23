import { TargetedOmit } from "preact-prop-helpers";
import { OmitStrong } from "./props.js";
import { UseMenuSurfaceParameters, UseMenuSurfaceReturnType } from "./use-menu-surface.js";
import { UseMenubarContext, UseMenubarItemParameters, UseMenubarItemReturnType, UseMenubarParameters, UseMenubarReturnType, UseMenubarSubInfo } from "./use-menubar.js";
export interface UseMenuContext<ContainerElement extends Element, ChildElement extends Element, M extends UseMenubarSubInfo<ChildElement>> extends UseMenubarContext<ContainerElement, ChildElement, M> {
    menu: {
        closeFromMenuItemClicked(): void;
    };
}
export interface UseMenuParametersSelf {
    /** This is called whenever the corresponding arrow key is pressed on the triggering button. */
    onOpen(): void;
    /**
     * This is the **physical** direction that is pressed
     * using the **arrow keys** on your keyboard.
     *
     * It has no effect on display, list navigation direction, etc.
     * It solely controls the arrow key that's listened for.
     */
    openDirection: "down" | "up" | "left" | "right" | null;
}
export interface UseMenuParameters<MenuSurfaceElement extends Element, MenuParentElement extends Element, MenuButtonElement extends Element, MenuItemElement extends Element, M extends UseMenubarSubInfo<MenuItemElement>> extends OmitStrong<UseMenubarParameters<MenuParentElement, MenuItemElement, M>, "toolbarParameters" | "labelParameters">, TargetedOmit<UseMenuSurfaceParameters<MenuSurfaceElement, MenuButtonElement>, "menuSurfaceParameters", "role" | "surfaceId">, TargetedOmit<UseMenubarParameters<MenuParentElement, MenuItemElement, M>, "toolbarParameters", "role">, TargetedOmit<UseMenubarParameters<MenuParentElement, MenuItemElement, M>, "toolbarParameters", "role"> {
    dismissParameters: UseMenuSurfaceParameters<MenuSurfaceElement, MenuButtonElement>["dismissParameters"] & {
        onClose(reason: "escape" | "backdrop" | "lost-focus" | "item-clicked"): void;
    };
    escapeDismissParameters: UseMenuSurfaceParameters<MenuSurfaceElement, MenuButtonElement>["escapeDismissParameters"];
    menuParameters: UseMenuParametersSelf;
}
export interface UseMenuItemParameters<MenuItemElement extends Element, M extends UseMenubarSubInfo<MenuItemElement>> extends UseMenubarItemParameters<MenuItemElement, M> {
}
export interface UseMenuReturnType<MenuSurfaceElement extends Element, MenuParentElement extends Element, MenuItemElement extends Element, MenuButtonElement extends Element, M extends UseMenubarSubInfo<MenuItemElement>> extends UseMenuSurfaceReturnType<MenuSurfaceElement, MenuParentElement, MenuButtonElement>, OmitStrong<UseMenubarReturnType<MenuParentElement, MenuItemElement, MenuButtonElement, M>, "propsMenubar" | "propsLabel"> {
    context: UseMenuContext<MenuParentElement, MenuItemElement, M>;
}
export interface MenuItemReturnTypeSelf {
    /**
     * When a menu item is clicked, it's often expected that the menu closes itself immediately after.
     *
     * Use this function to do so.
     */
    closeMenu(): void;
}
export interface UseMenuItemReturnType<MenuItemElement extends Element, M extends UseMenubarSubInfo<MenuItemElement>> extends UseMenubarItemReturnType<MenuItemElement, M> {
    menuItemReturn: MenuItemReturnTypeSelf;
}
/**
 * Implements the [Menu](https://www.w3.org/WAI/ARIA/apg/patterns/menubar/) and [Menu Button](https://www.w3.org/WAI/ARIA/apg/patterns/menu-button/) patterns.
 *
 * @remarks A menu is a specialization of a menubar (something that handles navigation among a set of menuitems)
 * and a menu surface (something that handles moving focus to/from an unrelated area of the page).
 *
 * Additionally, pressing the arrow key that corresponds to the direction that the menu opens
 * in will open it.
 *
 * @compositeParams
 */
export declare function useMenu<MenuSurfaceElement extends Element, MenuParentElement extends Element, MenuItemElement extends Element, MenuButtonElement extends Element, M extends UseMenubarSubInfo<MenuItemElement>>({ dismissParameters, escapeDismissParameters, menuParameters: { openDirection, onOpen }, menuSurfaceParameters, toolbarParameters, ...restParams }: UseMenuParameters<MenuSurfaceElement, MenuParentElement, MenuButtonElement, MenuItemElement, M>): UseMenuReturnType<MenuSurfaceElement, MenuParentElement, MenuItemElement, MenuButtonElement, M>;
export interface UseMenuItemParameters<MenuItemElement extends Element, M extends UseMenubarSubInfo<MenuItemElement>> extends UseMenubarItemParameters<MenuItemElement, M> {
    context: UseMenuContext<any, MenuItemElement, M>;
}
/**
 * @compositeParams
 */
export declare function useMenuItem<MenuItemElement extends Element, M extends UseMenubarSubInfo<MenuItemElement>>(p: UseMenuItemParameters<MenuItemElement, M>): UseMenuItemReturnType<MenuItemElement, M>;
//# sourceMappingURL=use-menu.d.ts.map