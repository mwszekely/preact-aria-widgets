import { useMergedProps, useStableCallback, useStableObject } from "preact-prop-helpers";
import { debugLog, OmitStrong } from "./props";
import { useMenuSurface, UseMenuSurfaceParameters, UseMenuSurfaceReturnType } from "./use-menu-surface";
import { useMenubar, useMenubarChild, UseMenubarContext, UseMenubarItemParameters, UseMenubarItemReturnType, UseMenubarParameters, UseMenubarReturnType, UseMenubarSubInfo } from "./use-menubar";
import { UseToolbarContext } from "./use-toolbar";

export interface UseMenuContext<ContainerElement extends Element, ChildElement extends Element, M extends UseMenubarSubInfo<ChildElement>> extends UseMenubarContext<ContainerElement, ChildElement, M> {
    menu: { closeFromMenuItemClicked(): void; }
}

export interface UseMenuParameters<MenuSurfaceElement extends Element, MenuParentElement extends Element, MenuButtonElement extends Element, MenuItemElement extends Element, M extends UseMenubarSubInfo<MenuItemElement>> extends OmitStrong<UseMenubarParameters<MenuParentElement, MenuItemElement, M>, "toolbarParameters" | "menubarParameters" | "labelParameters"> {
    dismissParameters: UseMenuSurfaceParameters<MenuSurfaceElement, MenuButtonElement>["dismissParameters"] & {
        onClose(reason: "escape" | "backdrop" | "lost-focus" | "item-clicked"): void;
    }
    escapeDismissParameters: UseMenuSurfaceParameters<MenuSurfaceElement, MenuButtonElement>["escapeDismissParameters"];
    menuSurfaceParameters: OmitStrong<UseMenuSurfaceParameters<MenuSurfaceElement, MenuButtonElement>["menuSurfaceParameters"], "role" | "surfaceId">;
    toolbarParameters: OmitStrong<UseMenubarParameters<MenuParentElement, MenuItemElement, M>["toolbarParameters"], never>
    menubarParameters: OmitStrong<UseMenubarParameters<MenuParentElement, MenuItemElement, M>["menubarParameters"], "role">

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
    //menuButtonHasFocus: UseHasFocusParameters<MenuButtonElement>;
}
export interface UseMenuItemParameters<MenuItemElement extends Element, M extends UseMenubarSubInfo<MenuItemElement>> extends UseMenubarItemParameters<MenuItemElement, M> {
    //hasFocus: UseHasFocusParameters<MenuItemElement>;
    //menuItem: { disabled: DisabledType; onPress: (e: EnhancedEvent<MenuItemElement, h.JSX.TargetedEvent<MenuItemElement>, { index: number }>) => void; }
}

export interface UseMenuReturnType<MenuSurfaceElement extends Element, MenuParentElement extends Element, MenuItemElement extends Element, MenuButtonElement extends Element, M extends UseMenubarSubInfo<MenuItemElement>> extends UseMenuSurfaceReturnType<MenuSurfaceElement, MenuParentElement, MenuButtonElement>, OmitStrong<UseMenubarReturnType<MenuParentElement, MenuItemElement, MenuButtonElement, M>, "propsMenubar" | "propsLabel"> {
    context: UseMenuContext<MenuParentElement, MenuItemElement, M>;
}

//export interface UseMenuButtonReturnTypeInfo extends { }
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

/*
export interface UseMenuReturnTypeWithHooks<MenuSurfaceElement extends Element, MenuParentElement extends Element, MenuItemElement extends Element, MenuButtonElement extends Element, C, K extends string> extends UseMenuReturnTypeInfo<MenuSurfaceElement, MenuParentElement, MenuItemElement, MenuButtonElement, C, K> {
    useMenuSentinel: <E extends Element>() => { useMenuSentinelProps: (p: h.JSX.HTMLAttributes<E>) => h.JSX.HTMLAttributes<E>; };
    useMenuProps: (props: h.JSX.HTMLAttributes<MenuParentElement>) => h.JSX.HTMLAttributes<MenuParentElement>;
    useMenuSurfaceProps: (props: h.JSX.HTMLAttributes<MenuSurfaceElement>) => h.JSX.HTMLAttributes<MenuSurfaceElement>;
    useMenuButtonProps: (props: h.JSX.HTMLAttributes<MenuButtonElement>) => h.JSX.HTMLAttributes<MenuButtonElement>;
    useMenuItem: UseMenuItem<MenuItemElement, C, K>;
}*/


export function useMenu<MenuSurfaceElement extends Element, MenuParentElement extends Element, MenuItemElement extends Element, MenuButtonElement extends Element>({
    dismissParameters,
    escapeDismissParameters,
    linearNavigationParameters,
    menuParameters: { openDirection, onOpen },
    menuSurfaceParameters,
    rearrangeableChildrenParameters,
    rovingTabIndexParameters,
    singleSelectionDeclarativeParameters,
    sortableChildrenParameters,
    toolbarParameters,
    typeaheadNavigationParameters,
    menubarParameters
}: UseMenuParameters<MenuSurfaceElement, MenuParentElement, MenuButtonElement, MenuItemElement, UseMenubarSubInfo<MenuItemElement>>): UseMenuReturnType<MenuSurfaceElement, MenuParentElement, MenuItemElement, MenuButtonElement, UseMenubarSubInfo<MenuItemElement>> {

    debugLog("useMenu");

    const {
        childrenHaveFocusReturn,
        context,
        linearNavigationReturn,
        managedChildrenReturn,
        propsLabel: propsButtonAsMenuLabel,
        propsMenubar,
        rearrangeableChildrenReturn,
        rovingTabIndexReturn,
        sortableChildrenReturn,
        toolbarReturn,
        typeaheadNavigationReturn,
        randomIdInputReturn,
        randomIdLabelReturn,
    } = useMenubar<MenuParentElement, MenuItemElement, MenuButtonElement>({
        linearNavigationParameters,
        rearrangeableChildrenParameters,
        rovingTabIndexParameters,
        singleSelectionDeclarativeParameters,
        sortableChildrenParameters,
        typeaheadNavigationParameters,
        toolbarParameters: { ...toolbarParameters },
        menubarParameters: { role: "menu", ...menubarParameters },
        labelParameters: { ariaLabel: null }
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
        focusTrapReturn,
        propsSentinel,
        propsSurface,
        propsTarget,
        propsTrigger,
        refElementPopupReturn,
        refElementSourceReturn
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
        childrenHaveFocusReturn,
        context: useStableObject({
            ...context,
            menu: useStableObject({
                closeFromMenuItemClicked: useStableCallback(() => {
                    dismissParameters.onClose("item-clicked");
                })
            })
        }),
        focusTrapReturn,
        linearNavigationReturn,
        managedChildrenReturn,
        propsSentinel,
        propsSurface,
        propsTarget: useMergedProps(propsTarget, propsMenubar),
        propsTrigger: useMergedProps({ onKeyDown }, propsTrigger, propsButtonAsMenuLabel),
        rearrangeableChildrenReturn,
        refElementPopupReturn,
        refElementSourceReturn,
        rovingTabIndexReturn,
        sortableChildrenReturn,
        toolbarReturn,
        typeaheadNavigationReturn,
        randomIdInputReturn,
        randomIdLabelReturn,

        /*focusMenu,

        currentTypeahead,
        invalidTypeahead,

        managedChildren,*/


    }
}

export interface UseMenuItemParameters<MenuItemElement extends Element, M extends UseMenubarSubInfo<MenuItemElement>> extends UseMenubarItemParameters<MenuItemElement, M> {
    context: UseMenuContext<any, MenuItemElement, M>;
}

export function useMenuItem<MenuItemElement extends Element>(p: UseMenuItemParameters<MenuItemElement, UseMenubarSubInfo<MenuItemElement>>): UseMenuItemReturnType<MenuItemElement, UseMenubarSubInfo<MenuItemElement>> {
    const ret = useMenubarChild<MenuItemElement>(p);

    return {
        ...ret,
        menuItemReturn: { closeMenu: p.context.menu.closeFromMenuItemClicked }
    }
}
