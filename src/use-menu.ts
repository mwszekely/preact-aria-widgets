import { useMergedProps, useStableCallback, useStableObject } from "preact-prop-helpers";
import { debugLog, OmitStrong } from "./props";
import { useMenuSurface, UseMenuSurfaceParameters, UseMenuSurfaceReturnType } from "./use-menu-surface";
import { useMenubar, useMenubarChild, UseMenubarContext, UseMenubarItemParameters, UseMenubarItemReturnType, UseMenubarParameters, UseMenubarReturnType, UseMenubarSubInfo } from "./use-menubar";

export interface UseMenuContext<ContainerElement extends Element, ChildElement extends Element, M extends UseMenubarSubInfo<ChildElement>> extends UseMenubarContext<ContainerElement, ChildElement, M> {
    menu: { closeFromMenuItemClicked(): void; }
}

export interface UseMenuParameters<MenuSurfaceElement extends Element, MenuParentElement extends Element, MenuButtonElement extends Element, MenuItemElement extends Element, M extends UseMenubarSubInfo<MenuItemElement>> extends OmitStrong<UseMenubarParameters<MenuParentElement, MenuItemElement, M>, "toolbarParameters" | "labelParameters"> {
    dismissParameters: UseMenuSurfaceParameters<MenuSurfaceElement, MenuButtonElement>["dismissParameters"] & {
        onClose(reason: "escape" | "backdrop" | "lost-focus" | "item-clicked"): void;
    }
    escapeDismissParameters: UseMenuSurfaceParameters<MenuSurfaceElement, MenuButtonElement>["escapeDismissParameters"];
    menuSurfaceParameters: OmitStrong<UseMenuSurfaceParameters<MenuSurfaceElement, MenuButtonElement>["menuSurfaceParameters"], "role" | "surfaceId">;
    toolbarParameters: OmitStrong<UseMenubarParameters<MenuParentElement, MenuItemElement, M>["toolbarParameters"], "role">;

    menuParameters: {
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
}
export interface UseMenuItemParameters<MenuItemElement extends Element, M extends UseMenubarSubInfo<MenuItemElement>> extends UseMenubarItemParameters<MenuItemElement, M> {

}

export interface UseMenuReturnType<MenuSurfaceElement extends Element, MenuParentElement extends Element, MenuItemElement extends Element, MenuButtonElement extends Element, M extends UseMenubarSubInfo<MenuItemElement>> extends UseMenuSurfaceReturnType<MenuSurfaceElement, MenuParentElement, MenuButtonElement>, OmitStrong<UseMenubarReturnType<MenuParentElement, MenuItemElement, MenuButtonElement, M>, "propsMenubar" | "propsLabel"> {
    context: UseMenuContext<MenuParentElement, MenuItemElement, M>;
}

export interface UseMenuItemReturnType<MenuItemElement extends Element, M extends UseMenubarSubInfo<MenuItemElement>> extends UseMenubarItemReturnType<MenuItemElement, M> {
    menuItemReturn: {
        /**
         * When a menu item is clicked, it's often expected that the menu closes itself immediately after.
         * 
         * Use this function to do so.
         */
        closeMenu(): void;
    }
}

/**
 * A menu is a specialization of a menubar (something that handles navigation among a set of menuitems) 
 * and a menu surface (something that handles moving focus to/from an unrelated area of the page).
 * 
 * Additionally, pressing the arrow key that corresponds to the direction that the menu opens
 * in will open it.
 * 
 * @param param0 
 * @returns 
 */
export function useMenu<MenuSurfaceElement extends Element, MenuParentElement extends Element, MenuItemElement extends Element, MenuButtonElement extends Element, M extends UseMenubarSubInfo<MenuItemElement>>({
    dismissParameters,
    escapeDismissParameters,
    menuParameters: { openDirection, onOpen },
    menuSurfaceParameters,
    toolbarParameters,
    ...restParams
}: UseMenuParameters<MenuSurfaceElement, MenuParentElement, MenuButtonElement, MenuItemElement, M>): UseMenuReturnType<MenuSurfaceElement, MenuParentElement, MenuItemElement, MenuButtonElement, M> {

    debugLog("useMenu");

    const {
        context,
        propsLabel: propsButtonAsMenuLabel,
        propsMenubar,
        randomIdInputReturn,
        rovingTabIndexReturn,
        ...restRet
    } = useMenubar<MenuParentElement, MenuItemElement, MenuButtonElement, M>({
        toolbarParameters: { role: "menu", ...toolbarParameters },
        labelParameters: { ariaLabel: null },
        ...restParams
    });

    const onKeyDown = useStableCallback((e: KeyboardEvent) => {
        const isOpen = dismissParameters.open;
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
        dismissParameters,
        escapeDismissParameters,
        focusTrapParameters: {
            focusPopup: () => { rovingTabIndexReturn.focusSelf() }
        }
    });


    return {
        ...restRet,
        ...restRet2,
        context: useStableObject({
            ...context,
            menu: useStableObject({
                closeFromMenuItemClicked: useStableCallback(() => {
                    dismissParameters.onClose("item-clicked");
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
    context: UseMenuContext<any, MenuItemElement, M>;
}

export function useMenuItem<MenuItemElement extends Element, M extends UseMenubarSubInfo<MenuItemElement>>(p: UseMenuItemParameters<MenuItemElement, M>): UseMenuItemReturnType<MenuItemElement, M> {
    const ret = useMenubarChild<MenuItemElement, M>(p);

    return {
        ...ret,
        menuItemReturn: { closeMenu: p.context.menu.closeFromMenuItemClicked }
    }
}
