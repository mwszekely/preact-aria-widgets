import { EventType, TargetedOmit, monitorCallCount, useMemoObject, useMergedProps, useStableCallback } from "preact-prop-helpers";
import { OmitStrong } from "./props.js";
import { UseMenuSurfaceParameters, UseMenuSurfaceReturnType, useMenuSurface } from "./use-menu-surface.js";
import { UseMenubarContext, UseMenubarItemParameters, UseMenubarItemReturnType, UseMenubarParameters, UseMenubarReturnType, UseMenubarSubInfo, useMenubar, useMenubarChild } from "./use-menubar.js";

export interface UseMenuContext<ChildElement extends Element, M extends UseMenubarSubInfo<ChildElement>> extends UseMenubarContext<ChildElement, M> {
    menu: { closeFromMenuItemClicked(e: EventType<any, any>): void; }
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

export interface UseMenuParameters<MenuSurfaceElement extends Element, MenuParentElement extends Element, MenuButtonElement extends Element, MenuItemElement extends Element, M extends UseMenubarSubInfo<MenuItemElement>> extends
    OmitStrong<UseMenubarParameters<MenuParentElement, MenuItemElement, M>, "toolbarParameters" | "labelParameters">,
    TargetedOmit<UseMenuSurfaceParameters<MenuSurfaceElement, MenuButtonElement>, "menuSurfaceParameters", "role" | "surfaceId">,
    TargetedOmit<UseMenubarParameters<MenuParentElement, MenuItemElement, M>, "toolbarParameters", "role">,
    TargetedOmit<UseMenubarParameters<MenuParentElement, MenuItemElement, M>, "toolbarParameters", "role">,
    TargetedOmit<UseMenuSurfaceParameters<MenuParentElement, MenuButtonElement>, "escapeDismissParameters", never>,
    Pick<UseMenuSurfaceParameters<MenuSurfaceElement, MenuButtonElement>, "activeElementParameters" | "dismissParameters" | "modalParameters"> {

    menuParameters: UseMenuParametersSelf;
}
export interface UseMenuItemParameters<MenuItemElement extends Element, M extends UseMenubarSubInfo<MenuItemElement>> extends UseMenubarItemParameters<MenuItemElement, M> {

}

export interface UseMenuReturnType<MenuSurfaceElement extends Element, MenuParentElement extends Element, MenuItemElement extends Element, MenuButtonElement extends Element, M extends UseMenubarSubInfo<MenuItemElement>> extends UseMenuSurfaceReturnType<MenuSurfaceElement, MenuParentElement, MenuButtonElement>, OmitStrong<UseMenubarReturnType<MenuParentElement, MenuItemElement, MenuButtonElement, M>, "propsMenubar" | "propsLabel"> {
    context: UseMenuContext<MenuItemElement, M>;
}

export interface MenuItemReturnTypeSelf {
    /**
     * When a menu item is clicked, it's often expected that the menu closes itself immediately after.
     * 
     * Use this function to do so.
     */
    closeMenu(e: EventType<any, any>): void;
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
export function useMenu<MenuSurfaceElement extends Element, MenuParentElement extends Element, MenuItemElement extends Element, MenuButtonElement extends Element>({
    dismissParameters,
    escapeDismissParameters,
    menuParameters: { openDirection, onOpen },
    menuSurfaceParameters,
    activeElementParameters,
    toolbarParameters,
    modalParameters,

    ...restParams
}: UseMenuParameters<MenuSurfaceElement, MenuParentElement, MenuButtonElement, MenuItemElement, UseMenubarSubInfo<MenuItemElement>>): UseMenuReturnType<MenuSurfaceElement, MenuParentElement, MenuItemElement, MenuButtonElement, UseMenubarSubInfo<MenuItemElement>> {
    type M = UseMenubarSubInfo<MenuItemElement>;

    monitorCallCount(useMenu);

    const {
        context,
        propsLabel: propsButtonAsMenuLabel,
        propsMenubar,
        randomIdInputReturn,
        rovingTabIndexReturn,
        ...restRet
    } = useMenubar<MenuParentElement, MenuItemElement, MenuButtonElement>({
        toolbarParameters: { role: "menu", ...toolbarParameters },
        labelParameters: { ariaLabel: null },
        ...restParams
    });

    const onKeyDown = useStableCallback((e: KeyboardEvent) => {
        const isOpen = modalParameters.active;
        if (!isOpen) {
            switch (e.key) {
                case "ArrowUp": {
                    if (openDirection == 'up') {
                        onOpen();
                        e.preventDefault();
                        e.stopPropagation();
                    }
                    break;
                }
                case "ArrowDown": {
                    if (openDirection == 'down') {
                        onOpen();
                        e.preventDefault();
                        e.stopPropagation();
                    }
                    break;
                }
                case "ArrowLeft": {
                    if (openDirection == 'left') {
                        onOpen();
                        e.preventDefault();
                        e.stopPropagation();
                    }
                    break;
                }
                case "ArrowRight": {
                    if (openDirection == 'right') {
                        onOpen();
                        e.preventDefault();
                        e.stopPropagation();
                    }
                    break;
                }
            }
        }
    });


    const {
        propsTarget,
        propsTrigger,
        refElementSourceReturn,
        ...restRet2
    } = useMenuSurface<MenuSurfaceElement, MenuParentElement, MenuButtonElement>({
        menuSurfaceParameters: {
            ...menuSurfaceParameters,
            surfaceId: randomIdInputReturn.id,
            role: "menu",
        },
        escapeDismissParameters,
        modalParameters,
        dismissParameters,
        activeElementParameters,
        focusTrapParameters: {
            focusPopup: () => { rovingTabIndexReturn.focusSelf() }
        }
    });


    return {
        ...restRet,
        ...restRet2,
        context: useMemoObject<UseMenuContext<MenuItemElement, M>>({
            ...context,
            menu: useMemoObject<UseMenuContext<MenuItemElement, M>["menu"]>({
                closeFromMenuItemClicked: useStableCallback((e) => {
                    dismissParameters.onDismiss(e, "item-clicked" as never);    // TODO
                })
            })
        }),
        refElementSourceReturn,
        rovingTabIndexReturn,
        randomIdInputReturn,
        propsTarget: useMergedProps(propsTarget, propsMenubar),
        propsTrigger: useMergedProps({ onKeyDown }, propsTrigger, propsButtonAsMenuLabel),
    }
}

export interface UseMenuItemParameters<MenuItemElement extends Element, M extends UseMenubarSubInfo<MenuItemElement>> extends UseMenubarItemParameters<MenuItemElement, M> {
    context: UseMenuContext<MenuItemElement, M>;
}

/**
 * @compositeParams
 */
export function useMenuItem<MenuItemElement extends Element>(p: UseMenuItemParameters<MenuItemElement, UseMenubarSubInfo<MenuItemElement>>): UseMenuItemReturnType<MenuItemElement, UseMenubarSubInfo<MenuItemElement>> {
    monitorCallCount(useMenuItem);

    type M = UseMenubarSubInfo<MenuItemElement>;

    const ret = useMenubarChild<MenuItemElement>(p);

    return {
        ...ret,
        menuItemReturn: { closeMenu: p.context.menu.closeFromMenuItemClicked }
    }
}
