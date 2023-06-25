import { monitorCallCount, useMemoObject, useMergedProps, useStableCallback } from "preact-prop-helpers";
import { useMenuSurface } from "./use-menu-surface.js";
import { useMenubar, useMenubarChild } from "./use-menubar.js";
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
export function useMenu({ dismissParameters, escapeDismissParameters, menuParameters: { openDirection, onOpen }, menuSurfaceParameters, toolbarParameters, ...restParams }) {
    monitorCallCount(useMenu);
    const { context, propsLabel: propsButtonAsMenuLabel, propsMenubar, randomIdInputReturn, rovingTabIndexReturn, ...restRet } = useMenubar({
        toolbarParameters: { role: "menu", ...toolbarParameters },
        labelParameters: { ariaLabel: null },
        ...restParams
    });
    const onKeyDown = useStableCallback((e) => {
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
    const { propsTarget, propsTrigger, refElementSourceReturn, ...restRet2 } = useMenuSurface({
        menuSurfaceParameters: {
            ...menuSurfaceParameters,
            surfaceId: randomIdInputReturn.id,
            role: "menu",
        },
        dismissParameters,
        escapeDismissParameters,
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
    };
}
export function useMenuItem(p) {
    monitorCallCount(useMenuItem);
    const ret = useMenubarChild(p);
    return {
        ...ret,
        menuItemReturn: { closeMenu: p.context.menu.closeFromMenuItemClicked }
    };
}
//# sourceMappingURL=use-menu.js.map