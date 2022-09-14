import { h } from "preact";
import { useHasFocus, useListNavigation, UseListNavigationParameters, useMergedProps, useRandomId, useRefElement, useStableCallback, useStableGetter, useState, useTimeout } from "preact-prop-helpers";
import { UseListNavigationChildParameters, UseListNavigationChildReturnTypeInfo, UseListNavigationReturnTypeInfo } from "preact-prop-helpers/use-list-navigation";
import { useEnsureStability } from "preact-prop-helpers/use-passive-state";
import { useCallback, useEffect } from "preact/hooks";
import { usePressEventHandlers } from "./use-button";
import { useSoftDismiss, UseSoftDismissParameters, UseSoftDismissReturnTypeInfo } from "./use-modal";

interface MSP {
    /**
     * What role the surface fulfills.
     * 
     * General menus should use "menu". "dialog" can be used for generic pop-up things.
     */
    role: "dialog" | "menu" | "tree" | "grid" | "listbox";

    /**
     * When this menu surface is opened, at least one element in it must be focused.
     * 
     * This controls what is focused (e.g. the first menu item, the whole surface itself, etc.)
     */
    sendFocusToMenu(): void;
}

export type MenuSurfaceOmits = keyof MSP;

export interface UseAriaMenuSurfaceParameters<MSO extends MenuSurfaceOmits> extends UseSoftDismissParameters<"getElements"> {
    menuSurface: Omit<MSP, MSO>
}
export interface UseAriaMenuParameters<MSO extends MenuSurfaceOmits> extends UseAriaMenuSurfaceParameters<MSO | "role">, UseListNavigationParameters<never, never, never, never, never> {
    menu: {
        onOpen(): void;

        // Corresponds to what arrow key can open this menu
        openDirection: "down" | "up" | "left" | "right" | null;
    }
}
export interface UseAriaMenuButtonParameters extends UseListNavigationChildParameters<never, never, never, never, never, never> { }
export interface UseAriaMenuItemParameters extends Omit<UseListNavigationChildParameters<{}, never, never, never, never, never>, "subInfo"> { }

export interface UseAriaMenuSurfaceReturnTypeInfo<MenuParentElement extends Element, MenuButtonElement extends Element> extends UseSoftDismissReturnTypeInfo {
    getButtonFocused(): boolean;
    getButtonFocusedInner(): boolean;
    getButtonLastFocused(): boolean;
    getButtonLastFocusedInner(): boolean;
    getButtonElement: () => MenuButtonElement | null;
    getSurfaceFocused(): boolean;
    getSurfaceFocusedInner(): boolean;
    getSurfaceLastFocused(): boolean;
    getSurfaceLastFocusedInner(): boolean;
    getSurfaceElement: () => MenuParentElement | null;
    getActiveElement: () => Element | null;
    getLastActiveElement: () => Element;
    getWindowFocused: () => boolean;
}
export interface UseAriaMenuReturnTypeInfo<MenuParentElement extends Element, MenuItemElement extends Element, MenuButtonElement extends Element> extends UseAriaMenuSurfaceReturnTypeInfo<MenuParentElement, MenuButtonElement>, UseListNavigationReturnTypeInfo<MenuItemElement, {}, never> { }
export interface UseAriaMenuButtonReturnTypeInfo extends UseListNavigationChildReturnTypeInfo<never> { }
export interface UseAriaMenuItemReturnTypeInfo<MenuItemElement extends Element> extends UseListNavigationChildReturnTypeInfo<MenuItemElement> { }

export interface UseAriaMenuSurfaceReturnTypeWithHooks<MenuParentElement extends Element, MenuButtonElement extends Element> extends UseAriaMenuSurfaceReturnTypeInfo<MenuParentElement, MenuButtonElement> {
    useMenuSurfaceSentinel: <E extends Element>() => { useMenuSentinelProps: (p: h.JSX.HTMLAttributes<E>) => h.JSX.HTMLAttributes<E>; };
    useMenuSurfaceProps: (props: h.JSX.HTMLAttributes<MenuParentElement>) => h.JSX.HTMLAttributes<MenuParentElement>;
    useMenuSurfaceButtonProps: (props: h.JSX.HTMLAttributes<MenuButtonElement>) => h.JSX.HTMLAttributes<any>;

}
export interface UseAriaMenuReturnTypeWithHooks<MenuParentElement extends Element, MenuItemElement extends Element, MenuButtonElement extends Element> extends UseAriaMenuReturnTypeInfo<MenuParentElement, MenuItemElement, MenuButtonElement> {
    useMenuSentinel: <E extends Element>() => { useMenuSentinelProps: (p: h.JSX.HTMLAttributes<E>) => h.JSX.HTMLAttributes<E>; };
    useMenuProps: (props: h.JSX.HTMLAttributes<MenuParentElement>) => h.JSX.HTMLAttributes<MenuParentElement>;
    useMenuButtonProps: (props: h.JSX.HTMLAttributes<MenuButtonElement>) => h.JSX.HTMLAttributes<MenuButtonElement>;
    useMenuItem: UseMenuItem<MenuItemElement>;
}
export interface UseAriaMenuButtonReturnTypeWithHooks extends UseAriaMenuButtonReturnTypeInfo { }
export interface UseAriaMenuItemReturnTypeWithHooks<MenuItemElement extends Element> extends UseAriaMenuItemReturnTypeInfo<MenuItemElement> { }

//export interface UseAriaMenuItemReturnTypeInfo<MenuItemElement extends Element> extends UseListNavigationChildReturnTypeInfo<MenuItemElement> {}

export interface UseAriaMenuItemReturnTypeWithHooks<MenuItemElement extends Element> extends UseAriaMenuItemReturnTypeInfo<MenuItemElement> {
    useMenuItemProps: UseMenuItemProps<MenuItemElement>;
}

export type UseMenuItemProps<MenuItemElement extends Element> = (props: h.JSX.HTMLAttributes<MenuItemElement>) => h.JSX.HTMLAttributes<MenuItemElement>;

export type UseMenuItem<MenuItemElement extends Element> = (args: UseAriaMenuItemParameters) => UseAriaMenuItemReturnTypeWithHooks<MenuItemElement>;

//export interface UseMenuChildInfoBase<K extends string> extends ListNavigationChildInfoBase<K> {}

//export type UseMenuChildParameters<I extends UseMenuChildInfo> = I;

/**
 * A menu is a popup control that contains a list of menu items, and that's it.
 * It has very well-defined logic for managing those items as the menu's state changes.
 * 
 * A MenuBase is just the "popup" part without the "list of menu items" part. It can
 * (really, must) have interactive controls, but these controls are allowed to be more
 * free-form. This means that, like a dialog, you must tell this hook
 * where within the popup to send focus when opened (for a menu it's just the first
 * menu item, but with custom content you'll need to provide this).
 * 
 */
export function useMenuSurface<MenuParentElement extends Element, MenuButtonElement extends Element>({ softDismiss, menuSurface: { sendFocusToMenu, role } }: UseAriaMenuSurfaceParameters<never>): UseAriaMenuSurfaceReturnTypeWithHooks<MenuParentElement, MenuButtonElement> {
    //const sendFocusWithinMenu = useStableCallback(sendFocusToMenu);
    //const [focusTrapActive, setFocusTrapActive] = useState<null | boolean>(null);
    const { open, onClose } = softDismiss;
    useEnsureStability("useMenuSurface", onClose, role, sendFocusToMenu);
    const getIsOpen = useStableGetter(open);
    //const stableOnClose = useStableCallback(softDismiss.onClose);

    //const onClose = (args as Partial<UseAriaMenuParameters<MenuParentElement, MenuButtonElement, K, I>>).onClose;
    //const onOpen = (args as Partial<UseAriaMenuParameters<MenuParentElement, MenuButtonElement, K, I>>).onOpen;
    //const menubar = (args as Partial<UseMenuParameters2<E, K, I>>).menubar;
    //const open = (args as UseAriaMenuParameters<MenuParentElement, MenuButtonElement, K, I>).open;
    //const stableOnClose = useStableCallback(onClose ?? (() => { }));
    //const getOpen = useStableGetter(open);



    const [, setOpenerElement, getOpenerElement] = useState<MenuButtonElement | null>(null);

    const { useHasFocusProps: useMenuBaseHasFocusProps, ...surfaceHasFocus } = useHasFocus<MenuParentElement>({});
    const { useHasFocusProps: useButtonHasFocusProps, ...buttonHasFocus } = useHasFocus<MenuButtonElement>({ onMountChange: setOpenerElement });

    const { getLastFocusedInner: getMenuBaseLastFocusedInner } = surfaceHasFocus;

    const { useRandomIdSourceElement, useRandomIdReferencerElement } = useRandomId<MenuParentElement>({ randomId: { prefix: "aria-menu-" }, managedChildren: {} });
    const { useRandomIdSourceElementProps } = useRandomIdSourceElement();
    const { useRandomIdReferencerElementProps } = useRandomIdReferencerElement<MenuButtonElement>("aria-controls" as never);

    const { getElement: getButtonElement, useRefElementProps: useButtonRefElementProps } = useRefElement<any>({ onElementChange: setOpenerElement });

    const { getElement: getMenuElement, useRefElementProps: useMenuBaseRefElementProps } = useRefElement<any>({});
    const { useSoftDismissProps, ...softDismissReturn } = useSoftDismiss<any>({
        softDismiss: {
            ...softDismiss,
            getElements: () => ([getButtonElement(), getMenuElement()]),
            //open: !!open
        }
    });

    /*useEffect(() => {
        setFocusTrapActive(open === true);
    }, [open]);*/



    const useMenuSurfaceProps = (props: h.JSX.HTMLAttributes<MenuParentElement>): h.JSX.HTMLAttributes<MenuParentElement> => {
        function onKeyDown(e: KeyboardEvent) {
            const open = getIsOpen();
            if (e.key == "Escape" && open) {
                onClose("escape");
                e.stopPropagation();
                e.stopImmediatePropagation();
                e.preventDefault();
            }
        }

        props.role = role;

        return useSoftDismissProps(useMenuBaseHasFocusProps(useMenuBaseRefElementProps(useRandomIdSourceElementProps(useMergedProps<MenuParentElement>({ onKeyDown }, (props))))));
    };

    const useMenuSurfaceButtonProps = (props: h.JSX.HTMLAttributes<MenuButtonElement>): h.JSX.HTMLAttributes<MenuButtonElement> => {
        props["aria-haspopup"] = role;
        props["aria-expanded"] = open ? "true" : undefined;
        return useButtonRefElementProps(useButtonHasFocusProps(useRandomIdReferencerElementProps(props)));
    };


    useEffect(() => {

        if (open === true) {
            sendFocusToMenu?.();
        }
        else if (open === false) {
            if (getMenuBaseLastFocusedInner()) {
                const opener = (getOpenerElement() as HTMLElement | null);
                if (opener && "focus" in opener)
                    opener.focus({ preventScroll: true });
            }
        }
        else {
            // null, so we've only just mounted and shouldn't focus ourselves.
        }
    }, [open]);

    return {
        useMenuSurfaceSentinel: useCallback(<E extends Element>() => {
            const {
                useSentinelProps: useMenuSentinelProps,
                ...rest
            } = useFocusSentinel<E>({
                focusSentinel: {
                    open: open === true,
                    onClose: () => onClose("escape"),
                    sendFocusToMenu
                }
            });
            return { useMenuSentinelProps, ...rest };
        }, [open, onClose]),
        useMenuSurfaceProps,
        useMenuSurfaceButtonProps,
        getActiveElement: buttonHasFocus.getActiveElement,
        getLastActiveElement: buttonHasFocus.getLastActiveElement,
        getButtonElement: buttonHasFocus.getElement,
        getButtonFocused: buttonHasFocus.getFocused,
        getButtonFocusedInner: buttonHasFocus.getFocusedInner,
        getButtonLastFocused: buttonHasFocus.getLastFocused,
        getButtonLastFocusedInner: buttonHasFocus.getLastFocusedInner,
        getSurfaceElement: surfaceHasFocus.getElement,
        getSurfaceFocused: surfaceHasFocus.getFocused,
        getSurfaceFocusedInner: surfaceHasFocus.getFocusedInner,
        getSurfaceLastFocused: surfaceHasFocus.getLastFocused,
        getSurfaceLastFocusedInner: surfaceHasFocus.getLastFocusedInner,
        getWindowFocused: buttonHasFocus.getWindowFocused,
        ...softDismissReturn

        //getMenuBaseLastFocusedInner,
        //getMenuBaseButtonLastFocusedInner,
        //open,
        //onOpen,
        //onClose
    }
}

interface FSP extends MSP {
    open: boolean;
    onClose(): void;
}

export type FocusSentinelOmits = keyof FSP;

export interface UseFocusSentinelParameters {
    focusSentinel: { sendFocusToMenu: MSP["sendFocusToMenu"]; open: boolean; onClose(): void; };
}


// A focus sentinal is a hidden but focusable element that comes at the start or end 
// of the out-of-place-focusable component that, when activated or focused over, closes the component
// (if focused within 100ms of the open prop changing, instead of
// closing, focusing the sentinel immediately asks it to focus itself).
// This exists for things like menus which can have focus but also need a way to return
// to whatever out-of-place parent they came from when naturally tabbed out of (as opposed
// to dialogs which loop back around when tabbed out of). While mouse users can click out of a menu
// and keyboard users can escape to close a menu, screen readers and other input methods 
// that don't use those two would become stuck.
export function useFocusSentinel<E extends Element>({ focusSentinel: { open, onClose, sendFocusToMenu } }: UseFocusSentinelParameters) {
    const getSendFocusWithinMenu = useStableGetter(sendFocusToMenu);
    const stableOnClose = useStableCallback(onClose);

    const [firstSentinelIsActive, setFirstSentinelIsActive] = useState(false);
    useTimeout({ callback: () => { setFirstSentinelIsActive(open); }, timeout: 100, triggerIndex: `${open}-${firstSentinelIsActive}` });


    const onFocus = firstSentinelIsActive ? (() => stableOnClose()) : (() => getSendFocusWithinMenu()?.());
    const onClick = () => stableOnClose();

    return {
        useSentinelProps: function (p: h.JSX.HTMLAttributes<E>): h.JSX.HTMLAttributes<E> {
            return useMergedProps<E>({ onFocus, onClick }, p);
        }
    }
}

export function useAriaMenu<MenuParentElement extends Element, MenuItemElement extends Element, MenuButtonElement extends Element>({ linearNavigation, listNavigation, managedChildren, menuSurface, rovingTabIndex, softDismiss, typeaheadNavigation, menu }: UseAriaMenuParameters<never>): UseAriaMenuReturnTypeWithHooks<MenuParentElement, MenuItemElement, MenuButtonElement> {

    const { onOpen } = menu;

    const {
        useListNavigationChild,
        useListNavigationProps,
        ...useListNavReturn
    } = useListNavigation<MenuParentElement, MenuItemElement, {}, string>({
        linearNavigation,
        listNavigation,
        managedChildren,
        rovingTabIndex,
        typeaheadNavigation
    });


    const {
        /*useMenuSentinel,
        useMenuBaseButtonProps,
        useMenuBaseProps,
        open,
        onOpen,
        onClose: _onClose,*/
        useMenuSurfaceButtonProps,
        useMenuSurfaceProps,
        useMenuSurfaceSentinel,
        ...menuRest
    } = useMenuSurface<MenuParentElement, MenuButtonElement>({
        menuSurface: { ...menuSurface, role: "menu" },
        softDismiss
        //sendFocusWithinMenu: focusMenu ?? (() => { })
    });

    const useMenuButtonProps = ((p: h.JSX.HTMLAttributes<MenuButtonElement>) => {
        const pressProps = usePressEventHandlers<MenuButtonElement>(() => onOpen?.(), {});
        const props = useMenuSurfaceButtonProps(p);
        return useMergedProps<MenuButtonElement>(pressProps, props);
    });

    const useMenuItem = useCallback<UseMenuItem<MenuItemElement>>(({ listNavigation, managedChild, rovingTabIndex }) => {
        type E = MenuItemElement;

        const { useListNavigationChildProps, ...listNavRet } = useListNavigationChild({ listNavigation, managedChild, rovingTabIndex, subInfo: {} });

        function useMenuItemProps<P extends h.JSX.HTMLAttributes<E>>({ ...props }: P) {
            props.role = "menuitem";
            return useMergedProps<E>({}, useListNavigationChildProps(props));
        }

        return { useMenuItemProps, ...listNavRet };
    }, []);


    function useMenuProps(props: h.JSX.HTMLAttributes<MenuParentElement>) {
        return useMenuSurfaceProps(useListNavigationProps(props));
    }


    return {
        useMenuProps,

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
