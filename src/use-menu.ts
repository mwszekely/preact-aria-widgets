import { h } from "preact";
import { UseHasFocusParameters, useListNavigation, UseListNavigationParameters, useMergedProps, usePress, useRandomId, useRefElement, useStableCallback, useStableGetter, useState, useTimeout } from "preact-prop-helpers";
import { UseListNavigationChildParameters, UseListNavigationChildReturnTypeInfo, UseListNavigationReturnTypeInfo } from "preact-prop-helpers";
import { returnFalse, useEnsureStability, usePassiveState } from "preact-prop-helpers";
import { useCallback, useEffect, useRef } from "preact/hooks";
import { MenuSurfaceOmits, useMenuSurface, UseMenuSurfaceParameters, UseMenuSurfaceReturnTypeInfo } from "./use-menu-surface";
import { debugLog, DisabledType, EnhancedEvent, enhanceEvent, overwriteWithWarning } from "./props";
import { useSoftDismiss, UseSoftDismissParameters, UseSoftDismissReturnTypeInfo } from "./use-modal";
import { useToolbar, UseToolbarChild, UseToolbarChildParameters, UseToolbarParameters, UseToolbarReturnTypeInfo } from "./use-toolbar";
import { MenuItemSubInfo, useMenubar, UseMenubarParameters, UseMenubarReturnTypeInfo, UseMenuItem } from "./use-menubar";



export interface UseMenuParameters<S extends Element, B extends Element, MSO extends MenuSurfaceOmits> extends UseMenuSurfaceParameters<S, B, MSO | "role" | "sendFocusToMenu">, UseMenubarParameters<"role"> {
    menu: {
        onOpen(): void;

        // Corresponds to what arrow key can open this menu
        openDirection: "down" | "up" | "left" | "right" | null;
    }
    menuButtonHasFocus: UseHasFocusParameters<B>;
}
export interface UseMenuItemParameters<MenuItemElement extends Element, C, K extends string> extends UseToolbarChildParameters<MenuItemElement, MenuItemSubInfo<C>, K, C> {
    hasFocus: UseHasFocusParameters<MenuItemElement>;
    menuItem: { disabled: DisabledType; onPress: (e: EnhancedEvent<MenuItemElement, h.JSX.TargetedEvent<MenuItemElement>, { index: number }>) => void; }
}

export interface UseMenuReturnTypeInfo<MenuSurfaceElement extends Element, _MenuParentElement extends Element, MenuItemElement extends Element, MenuButtonElement extends Element, C, K extends string> extends UseMenuSurfaceReturnTypeInfo<MenuSurfaceElement, MenuButtonElement>, UseMenubarReturnTypeInfo<MenuItemElement, MenuItemSubInfo<C>, K> { }
export interface UseMenuButtonReturnTypeInfo extends UseListNavigationChildReturnTypeInfo<never> { }
export interface UseMenuItemReturnTypeInfo<MenuItemElement extends Element> extends UseListNavigationChildReturnTypeInfo<MenuItemElement> { }


export interface UseMenuReturnTypeWithHooks<MenuSurfaceElement extends Element, MenuParentElement extends Element, MenuItemElement extends Element, MenuButtonElement extends Element, C, K extends string> extends UseMenuReturnTypeInfo<MenuSurfaceElement, MenuParentElement, MenuItemElement, MenuButtonElement, C, K> {
    useMenuSentinel: <E extends Element>() => { useMenuSentinelProps: (p: h.JSX.HTMLAttributes<E>) => h.JSX.HTMLAttributes<E>; };
    useMenuProps: (props: h.JSX.HTMLAttributes<MenuParentElement>) => h.JSX.HTMLAttributes<MenuParentElement>;
    useMenuSurfaceProps: (props: h.JSX.HTMLAttributes<MenuSurfaceElement>) => h.JSX.HTMLAttributes<MenuSurfaceElement>;
    useMenuButtonProps: (props: h.JSX.HTMLAttributes<MenuButtonElement>) => h.JSX.HTMLAttributes<MenuButtonElement>;
    useMenuItem: UseMenuItem<MenuItemElement, C, K>;
}


export function useMenu<MenuSurfaceElement extends Element, MenuParentElement extends Element, MenuItemElement extends Element, MenuButtonElement extends Element, C, K extends string>({ menuButtonHasFocus, linearNavigation, listNavigation, managedChildren, menuSurface, rovingTabIndex, softDismiss, typeaheadNavigation, menu, activeElement, toolbar }: UseMenuParameters<MenuSurfaceElement, MenuButtonElement, never>): UseMenuReturnTypeWithHooks<MenuSurfaceElement, MenuParentElement, MenuItemElement, MenuButtonElement, C, K> {

    debugLog("useMenu");
    const { onOpen } = menu;
    const { open, onClose } = softDismiss;

    const {
        useMenuItem: useListNavigationChild,
        useMenubarProps: useListNavigationProps,
        ...useListNavReturn
    } = useMenubar<MenuParentElement, MenuItemElement, MenuItemSubInfo<C>, K>({
        linearNavigation,
        listNavigation,
        managedChildren,
        rovingTabIndex,
        typeaheadNavigation,
        toolbar: { role: null, ...toolbar }
    });

    const { managedChildren: { children } } = useListNavReturn;


    const {
        useMenuSurfaceButtonProps,
        useMenuSurfaceProps,
        useMenuSurfaceSentinel,
        useMenuSurfaceChildProps,
        ...menuRest
    } = useMenuSurface<MenuSurfaceElement, MenuParentElement, MenuButtonElement>({
        menuSurface: {
            ...menuSurface,
            role: "menu",
            sendFocusToMenu: useCallback(() => children.getAt(0)?.subInfo.focusSelf(), [])
        },
        softDismiss,
        activeElement
    });

    const useMenuButtonProps = ((p: h.JSX.HTMLAttributes<MenuButtonElement>) => {
        const { props: pressProps } = usePress<MenuButtonElement>({
            onClickSync: () => {
                if (open)
                    onClose?.("escape");
                else
                    onOpen?.();
            },
            exclude: {},
            hasFocus: menuButtonHasFocus,
            focusSelf: useCallback(e => (e as Element as HTMLElement).focus?.(), [])
        });
        const props = useMenuSurfaceButtonProps(p);
        return useMergedProps(pressProps, props);
    });

    const useMenuItem = useCallback<UseMenuItem<MenuItemElement, C, K>>(({ listNavigation, managedChild, rovingTabIndex, subInfo, menuItem, hasFocus }) => {
        debugLog("useMenuItem", managedChild.index);

        const { disabled, onPress } = menuItem;

        const { useMenuItemProps: useListNavigationChildProps, ...listNavRet } = useListNavigationChild({ listNavigation, managedChild, rovingTabIndex, subInfo: { subInfo }, hasFocus, menuItem });

        function useMenuItemProps<P extends h.JSX.HTMLAttributes<MenuItemElement>>({ ...props }: P) {
            return useListNavigationChildProps(props);
        }

        return { useMenuItemProps, ...listNavRet };
    }, []);


    function useMenuProps(props: h.JSX.HTMLAttributes<MenuParentElement>) {
        return useListNavigationProps(useMenuSurfaceChildProps(props));
    }


    return {
        useMenuProps,
        useMenuSurfaceProps,

        useMenuButtonProps,

        useMenuItem,
        useMenuSentinel: useMenuSurfaceSentinel,
        //useMenuSubmenuItem,
        ...useListNavReturn,
        ...menuRest

        /*focusMenu,

        currentTypeahead,
        invalidTypeahead,

        managedChildren,*/


    }
}
