import { useMergedProps, useStableCallback } from "preact-prop-helpers";
import { debugLog } from "./props";
import { useMenuSurface, UseMenuSurfaceParameters, UseMenuSurfaceReturnType } from "./use-menu-surface";
import { useMenubar, useMenubarChild, UseMenubarItemParameters, UseMenubarItemReturnType, UseMenubarParameters, UseMenubarReturnType, UseMenubarSubInfo } from "./use-menubar";
import { UseToolbarContext } from "./use-toolbar";

export interface UseMenuContext<ContainerElement extends Element, ChildElement extends Element, M extends UseMenubarSubInfo<ChildElement>> extends UseToolbarContext<ContainerElement, ChildElement, M> {

}

export interface UseMenuParameters<MenuSurfaceElement extends Element, MenuParentElement extends Element, MenuButtonElement extends Element, MenuItemElement extends Element, M extends UseMenubarSubInfo<MenuItemElement>> extends Omit<UseMenubarParameters<MenuParentElement, MenuItemElement, M>, "toolbarParameters" | "menubarParameters"> {
    dismissParameters: UseMenuSurfaceParameters<MenuSurfaceElement, MenuButtonElement>["dismissParameters"];
    escapeDismissParameters: UseMenuSurfaceParameters<MenuSurfaceElement, MenuButtonElement>["escapeDismissParameters"];
    menuSurfaceParameters: Omit<UseMenuSurfaceParameters<MenuSurfaceElement, MenuButtonElement>["menuSurfaceParameters"], "role">;
    toolbarParameters: Omit<UseMenubarParameters<MenuParentElement, MenuItemElement, M>["toolbarParameters"], "role">
    menubarParameters: Omit<UseMenubarParameters<MenuParentElement, MenuItemElement, M>["menubarParameters"], "role">

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

export interface UseMenuReturnType<MenuSurfaceElement extends Element, MenuParentElement extends Element, MenuItemElement extends Element, MenuButtonElement extends Element, M extends UseMenubarSubInfo<MenuItemElement>> extends UseMenuSurfaceReturnType<MenuSurfaceElement, MenuParentElement, MenuButtonElement>, Omit<UseMenubarReturnType<MenuParentElement, MenuItemElement, MenuButtonElement, M>, "propsMenubar" | "propsLabel"> {

}

//export interface UseMenuButtonReturnTypeInfo extends { }
export interface UseMenuItemReturnType<MenuItemElement extends Element, M extends UseMenubarSubInfo<MenuItemElement>> extends UseMenubarItemReturnType<MenuItemElement, M> { }

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
    labelParameters,
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
        typeaheadNavigationReturn
    } = useMenubar<MenuParentElement, MenuItemElement, MenuButtonElement>({
        linearNavigationParameters,
        rearrangeableChildrenParameters,
        rovingTabIndexParameters,
        singleSelectionDeclarativeParameters,
        sortableChildrenParameters,
        typeaheadNavigationParameters,
        toolbarParameters: { ...toolbarParameters },
        menubarParameters: { role: "menu", ...menubarParameters },
        labelParameters
    });

    const onKeyDown = useStableCallback((e: KeyboardEvent) => {
        const isOpen = dismissParameters.open;
        if (!isOpen) {
            switch (e.key) {
                case "ArrowUp": {
                    if (openDirection == 'up') {
                        onOpen();
                        e.preventDefault();
                    }
                    break;
                }
                case "ArrowDown": {
                    if (openDirection == 'down') {
                        onOpen();
                        e.preventDefault();
                    }
                    break;
                }
                case "ArrowLeft": {
                    if (openDirection == 'left') {
                        onOpen();
                        e.preventDefault();
                    }
                    break;
                }
                case "ArrowRight": {
                    if (openDirection == 'right') {
                        onOpen();
                        e.preventDefault();
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
        context,
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

        /*focusMenu,

        currentTypeahead,
        invalidTypeahead,

        managedChildren,*/


    }
}

export interface UseMenuItemParameters<MenuItemElement extends Element, M extends UseMenubarSubInfo<MenuItemElement>> extends UseMenubarItemParameters<MenuItemElement, M> {

}

export function useMenuItem<MenuItemElement extends Element>(p: UseMenuItemParameters<MenuItemElement, UseMenubarSubInfo<MenuItemElement>>) {
    return useMenubarChild<MenuItemElement>(p);
}
