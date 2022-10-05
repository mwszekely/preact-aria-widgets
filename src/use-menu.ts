import { h } from "preact";
import { UseHasFocusParameters, useListNavigation, UseListNavigationParameters, useMergedProps, usePress, useRandomId, useRefElement, useStableCallback, useStableGetter, useState, useTimeout } from "preact-prop-helpers";
import { UseListNavigationChildParameters, UseListNavigationChildReturnTypeInfo, UseListNavigationReturnTypeInfo } from "preact-prop-helpers/use-list-navigation";
import { returnFalse, useEnsureStability, usePassiveState } from "preact-prop-helpers/use-passive-state";
import { useCallback, useEffect, useRef } from "preact/hooks";
import { debugLog, overwriteWithWarning } from "./props";
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

export interface UseMenuSurfaceParameters<_S extends Element, _B extends Element, MSO extends MenuSurfaceOmits> extends UseSoftDismissParameters<"getElements"> {
    menuSurface: Omit<MSP, MSO>;
    //hasFocusButton: UseHasFocusParameters<B>;
    //hasFocusSurface: UseHasFocusParameters<S>;
}
export interface UseMenuParameters<S extends Element, B extends Element, MSO extends MenuSurfaceOmits> extends UseMenuSurfaceParameters<S, B, MSO | "role" | "sendFocusToMenu">, UseListNavigationParameters<never, never, never, never, never> {
    menu: {
        onOpen(): void;

        // Corresponds to what arrow key can open this menu
        openDirection: "down" | "up" | "left" | "right" | null;
    }
    menuButtonHasFocus: UseHasFocusParameters<B>;
}
export interface UseMenuButtonParameters extends UseListNavigationChildParameters<never, never, never, never, never, never> { }
export interface UseMenuItemParameters extends Omit<UseListNavigationChildParameters<{}, never, never, never, never, never>, "subInfo"> { }

export interface UseMenuSurfaceReturnTypeInfo<_MenuParentElement extends Element, _MenuButtonElement extends Element> extends UseSoftDismissReturnTypeInfo {
    menuSurface: {
        /*getButtonFocused(): boolean;
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
        getWindowFocused: () => boolean;*/
    }
}
export interface UseMenuReturnTypeInfo<MenuSurfaceElement extends Element, _MenuParentElement extends Element, MenuItemElement extends Element, MenuButtonElement extends Element> extends UseMenuSurfaceReturnTypeInfo<MenuSurfaceElement, MenuButtonElement>, UseListNavigationReturnTypeInfo<MenuItemElement, {}, never> { }
export interface UseMenuButtonReturnTypeInfo extends UseListNavigationChildReturnTypeInfo<never> { }
export interface UseMenuItemReturnTypeInfo<MenuItemElement extends Element> extends UseListNavigationChildReturnTypeInfo<MenuItemElement> { }

export interface UseMenuSurfaceReturnTypeWithHooks<MenuSurfaceElement extends Element, MenuParentElement extends Element, MenuButtonElement extends Element> extends UseMenuSurfaceReturnTypeInfo<MenuSurfaceElement, MenuButtonElement> {
    useMenuSurfaceSentinel: <E extends Element>() => { useMenuSentinelProps: (p: h.JSX.HTMLAttributes<E>) => h.JSX.HTMLAttributes<E>; };
    useMenuSurfaceProps: (props: h.JSX.HTMLAttributes<MenuSurfaceElement>) => h.JSX.HTMLAttributes<MenuSurfaceElement>;
    useMenuSurfaceChildProps: (props: h.JSX.HTMLAttributes<MenuParentElement>) => h.JSX.HTMLAttributes<MenuParentElement>;  // NOT a menu item! This is the menu, dialog, popup, whatever actually gets the role, as opposed to the surface that listens to mouse and keyboard events
    useMenuSurfaceButtonProps: (props: h.JSX.HTMLAttributes<MenuButtonElement>) => h.JSX.HTMLAttributes<any>;

}
export interface UseMenuReturnTypeWithHooks<MenuSurfaceElement extends Element, MenuParentElement extends Element, MenuItemElement extends Element, MenuButtonElement extends Element> extends UseMenuReturnTypeInfo<MenuSurfaceElement, MenuParentElement, MenuItemElement, MenuButtonElement> {
    useMenuSentinel: <E extends Element>() => { useMenuSentinelProps: (p: h.JSX.HTMLAttributes<E>) => h.JSX.HTMLAttributes<E>; };
    useMenuProps: (props: h.JSX.HTMLAttributes<MenuParentElement>) => h.JSX.HTMLAttributes<MenuParentElement>;
    useMenuSurfaceProps: (props: h.JSX.HTMLAttributes<MenuSurfaceElement>) => h.JSX.HTMLAttributes<MenuSurfaceElement>;
    useMenuButtonProps: (props: h.JSX.HTMLAttributes<MenuButtonElement>) => h.JSX.HTMLAttributes<MenuButtonElement>;
    useMenuItem: UseMenuItem<MenuItemElement>;
}
export interface UseMenuButtonReturnTypeWithHooks extends UseMenuButtonReturnTypeInfo { }
export interface UseMenuItemReturnTypeWithHooks<MenuItemElement extends Element> extends UseMenuItemReturnTypeInfo<MenuItemElement> { }

//export interface UseMenuItemReturnTypeInfo<MenuItemElement extends Element> extends UseListNavigationChildReturnTypeInfo<MenuItemElement> {}

export interface UseMenuItemReturnTypeWithHooks<MenuItemElement extends Element> extends UseMenuItemReturnTypeInfo<MenuItemElement> {
    useMenuItemProps: UseMenuItemProps<MenuItemElement>;
}

export type UseMenuItemProps<MenuItemElement extends Element> = (props: h.JSX.HTMLAttributes<MenuItemElement>) => h.JSX.HTMLAttributes<MenuItemElement>;

export type UseMenuItem<MenuItemElement extends Element> = (args: UseMenuItemParameters) => UseMenuItemReturnTypeWithHooks<MenuItemElement>;

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
export function useMenuSurface<MenuSurfaceElement extends Element, MenuParentElement extends Element, MenuButtonElement extends Element>({ softDismiss, menuSurface: { sendFocusToMenu, role }, activeElement }: UseMenuSurfaceParameters<MenuSurfaceElement, MenuButtonElement, never>): UseMenuSurfaceReturnTypeWithHooks<MenuSurfaceElement, MenuParentElement, MenuButtonElement> {
    debugLog("useMenuSurface");
    //const sendFocusWithinMenu = useStableCallback(sendFocusToMenu);
    //const [focusTrapActive, setFocusTrapActive] = useState<null | boolean>(null);
    const { open, onClose: userOnClose } = softDismiss;
    const onClose = useStableCallback<typeof userOnClose>((reason) => {
        if (reason != "lost-focus") {
            const opener = (getOpenerElement() as HTMLElement | null);
            if (opener && "focus" in opener)
                opener.focus({ preventScroll: true });
        }
        return userOnClose(reason);
    })
    useEnsureStability("useMenuSurface", onClose, role, sendFocusToMenu);
    const getIsOpen = useStableGetter(open);
    const intersectionObserver = useRef<IntersectionObserver>(null!);
    const [getSurfaceFullyVisible, setSurfaceFullyVisible] = usePassiveState(null, returnFalse);
    intersectionObserver.current ??= new IntersectionObserver((entries, _observer) => {
        for (const entry of entries) {
            setSurfaceFullyVisible(entry.intersectionRatio >= 1);
        }
    }, { root: null, threshold: [0, 1] });

    const [, setOpenerElement, getOpenerElement] = useState<MenuButtonElement | null>(null);

    //const { useHasFocusProps: useMenuBaseHasFocusProps, ...surfaceHasFocus } = useHasFocus<MenuSurfaceElement>({ ...hasFocusSurface });
    //const { useHasFocusProps: useButtonHasFocusProps, ...buttonHasFocus } = useHasFocus<MenuButtonElement>({ ...hasFocusButton });

    //const { getLastFocusedInner: getMenuBaseLastFocusedInner } = surfaceHasFocus;

    const { useRandomIdSourceElement, useRandomIdReferencerElement } = useRandomId<MenuParentElement>({ randomId: { prefix: "aria-menu-" }, managedChildren: {} });
    const { useRandomIdSourceElementProps } = useRandomIdSourceElement();
    const { useRandomIdReferencerElementProps } = useRandomIdReferencerElement<MenuButtonElement>("aria-controls" as never);

    const { getElement: getButtonElement, useRefElementProps: useButtonRefElementProps } = useRefElement<MenuButtonElement>({ onElementChange: setOpenerElement });

    const { getElement: getMenuElement, useRefElementProps: useMenuBaseRefElementProps } = useRefElement<MenuSurfaceElement>({});
    const { useSoftDismissProps, ...softDismissReturn } = useSoftDismiss<any>({
        softDismiss: {
            ...softDismiss,
            getElements: () => ([getButtonElement(), getMenuElement()]),
        },
        activeElement
    });


    const useMenuSurfaceProps = (props: h.JSX.HTMLAttributes<MenuSurfaceElement>): h.JSX.HTMLAttributes<MenuSurfaceElement> => {
        function onKeyDown(e: KeyboardEvent) {
            const open = getIsOpen();
            if (e.key == "Escape" && open) {
                onClose("escape");
                e.stopPropagation();
                e.stopImmediatePropagation();
                e.preventDefault();
            }
        }

        return useSoftDismissProps((useMenuBaseRefElementProps((useMergedProps<MenuSurfaceElement>({ onKeyDown }, (props))))));
    };

    const useMenuSurfaceButtonProps = (props: h.JSX.HTMLAttributes<MenuButtonElement>): h.JSX.HTMLAttributes<MenuButtonElement> => {
        overwriteWithWarning("useMenuSurfaceButtonProps", props, "aria-expanded", open.toString());
        overwriteWithWarning("useMenuSurfaceButtonProps", props, "aria-haspopup", role);
        return useButtonRefElementProps((useRandomIdReferencerElementProps(props)));
    };


    useEffect(() => {

        if (open === true) {
            sendFocusToMenu?.();
            setTimeout(() => {
                if (!getSurfaceFullyVisible()) {
                    getMenuElement()?.scrollIntoView();
                }
            })
        }
    }, [open]);

    function useMenuSurfaceChildProps(props: h.JSX.HTMLAttributes<MenuParentElement>): h.JSX.HTMLAttributes<MenuParentElement> {
        props.role = role;
        return useRandomIdSourceElementProps(props);
    }

    return {
        useMenuSurfaceChildProps,
        useMenuSurfaceSentinel: useCallback(<E extends Element>() => {
            debugLog("useMenuSurfaceSentinel");
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
        menuSurface: {
            /*getActiveElement: buttonHasFocus.getActiveElement,
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
            getWindowFocused: buttonHasFocus.getWindowFocused,*/
        },
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
    debugLog("useFocusSentinel");
    const getSendFocusWithinMenu = useStableGetter(sendFocusToMenu);
    const stableOnClose = useStableCallback(onClose);

    const [firstSentinelIsActive, setFirstSentinelIsActive] = useState(false);
    useTimeout({ callback: () => { setFirstSentinelIsActive(open); }, timeout: 100, triggerIndex: `${open}-${firstSentinelIsActive}` });


    const onFocus = firstSentinelIsActive ? (() => stableOnClose()) : (() => getSendFocusWithinMenu()?.());
    const onClick = () => stableOnClose();

    return {
        useSentinelProps: function (p: h.JSX.HTMLAttributes<E>): h.JSX.HTMLAttributes<E> {
            overwriteWithWarning("useFocusSentinel", p, "tabIndex", 0)
            return useMergedProps<E>({ 
                onFocus, 
                onClick
            }, p);
        }
    }
}

export function useMenu<MenuSurfaceElement extends Element, MenuParentElement extends Element, MenuItemElement extends Element, MenuButtonElement extends Element>({ menuButtonHasFocus, linearNavigation, listNavigation, managedChildren, menuSurface, rovingTabIndex, softDismiss, typeaheadNavigation, menu, activeElement }: UseMenuParameters<MenuSurfaceElement, MenuButtonElement, never>): UseMenuReturnTypeWithHooks<MenuSurfaceElement, MenuParentElement, MenuItemElement, MenuButtonElement> {

    debugLog("useMenu");
    const { onOpen } = menu;
    const { open, onClose } = softDismiss;

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

    const { managedChildren: { children } } = useListNavReturn;


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
        useMenuSurfaceChildProps,
        ...menuRest
    } = useMenuSurface<MenuSurfaceElement, MenuParentElement, MenuButtonElement>({
        menuSurface: {
            ...menuSurface,
            role: "menu",
            sendFocusToMenu: useCallback(() => children.getAt(0)?.subInfo.focusSelf(), [])
        },
        softDismiss,
        //hasFocusButton,
        //hasFocusSurface,
        activeElement
        //sendFocusWithinMenu: focusMenu ?? (() => { })
    });

    const useMenuButtonProps = ((p: h.JSX.HTMLAttributes<MenuButtonElement>) => {
        const usePressProps = usePress<MenuButtonElement>({
            onClickSync: () => {
                if (open)
                    onClose?.("escape");
                else
                    onOpen?.();
            },
            exclude: {},
            hasFocus: menuButtonHasFocus
        });
        const props = useMenuSurfaceButtonProps(p);
        return usePressProps(props);
    });

    const useMenuItem = useCallback<UseMenuItem<MenuItemElement>>(({ listNavigation, managedChild, rovingTabIndex }) => {
        debugLog("useMenuItem", managedChild.index);

        type E = MenuItemElement;

        const { useListNavigationChildProps, ...listNavRet } = useListNavigationChild({ listNavigation, managedChild, rovingTabIndex, subInfo: {} });

        function useMenuItemProps<P extends h.JSX.HTMLAttributes<E>>({ ...props }: P) {
            props.role = "menuitem";
            return useMergedProps<E>({}, useListNavigationChildProps(props));
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
