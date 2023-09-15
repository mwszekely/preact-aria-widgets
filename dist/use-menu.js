import { useMemoObject, useMergedProps, useStableCallback } from "preact-prop-helpers";
import { monitored } from "./props.js";
import { useMenuSurface } from "./use-menu-surface.js";
import { useMenubar, useMenubarChild } from "./use-menubar.js";
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
export const useMenu = monitored(function useMenu({ dismissParameters, escapeDismissParameters, menuParameters: { openDirection, onOpen }, menuSurfaceParameters, activeElementParameters, toolbarParameters, modalParameters, ...restParams }) {
    const { context, propsLabel: propsButtonAsMenuLabel, propsMenubar, randomIdInputReturn, rovingTabIndexReturn, ...restRet } = useMenubar({
        toolbarParameters: { role: "menu", ...toolbarParameters },
        labelParameters: { ariaLabel: null },
        ...restParams
    });
    const onKeyDown = useStableCallback((e) => {
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
    const { propsTarget, propsTrigger, refElementSourceReturn, ...restRet2 } = useMenuSurface({
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
            focusPopup: () => { rovingTabIndexReturn.focusSelf(); }
        }
    });
    return {
        ...restRet,
        ...restRet2,
        context: useMemoObject({
            ...context,
            menu: useMemoObject({
                closeFromMenuItemClicked: useStableCallback((e) => {
                    dismissParameters.onDismiss(e, "item-clicked"); // TODO
                })
            })
        }),
        refElementSourceReturn,
        rovingTabIndexReturn,
        randomIdInputReturn,
        propsTarget: useMergedProps(propsTarget, propsMenubar),
        propsTrigger: useMergedProps({ onKeyDown }, propsTrigger, propsButtonAsMenuLabel),
    };
});
/**
 * @compositeParams
 */
export const useMenuItem = monitored(function useMenuItem(p) {
    const ret = useMenubarChild(p);
    return {
        ...ret,
        menuItemReturn: { closeMenu: p.context.menu.closeFromMenuItemClicked }
    };
});
//# sourceMappingURL=use-menu.js.map