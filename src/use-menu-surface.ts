import { h } from "preact";
import { UseHasFocusParameters, useListNavigation, UseListNavigationParameters, useMergedProps, usePress, useRandomId, useRefElement, useStableCallback, useStableGetter, useState, useTimeout } from "preact-prop-helpers";
import { UseListNavigationChildParameters, UseListNavigationChildReturnTypeInfo, UseListNavigationReturnTypeInfo } from "preact-prop-helpers";
import { returnFalse, useEnsureStability, usePassiveState } from "preact-prop-helpers";
import { useCallback, useEffect, useRef } from "preact/hooks";
import { debugLog, DisabledType, EnhancedEvent, enhanceEvent, overwriteWithWarning } from "./props";
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
}


export interface UseMenuSurfaceReturnTypeInfo<_MenuParentElement extends Element, _MenuButtonElement extends Element> extends UseSoftDismissReturnTypeInfo { }
export interface UseMenuButtonReturnTypeInfo extends UseListNavigationChildReturnTypeInfo<never> { }

export interface UseMenuSurfaceReturnTypeWithHooks<MenuSurfaceElement extends Element, MenuParentElement extends Element, MenuButtonElement extends Element> extends UseMenuSurfaceReturnTypeInfo<MenuSurfaceElement, MenuButtonElement> {
    useMenuSurfaceSentinel: <E extends Element>() => { useMenuSentinelProps: (p: h.JSX.HTMLAttributes<E>) => h.JSX.HTMLAttributes<E>; };
    useMenuSurfaceProps: (props: h.JSX.HTMLAttributes<MenuSurfaceElement>) => h.JSX.HTMLAttributes<MenuSurfaceElement>;
    useMenuSurfaceChildProps: (props: h.JSX.HTMLAttributes<MenuParentElement>) => h.JSX.HTMLAttributes<MenuParentElement>;  // NOT a menu item! This is the menu, dialog, popup, whatever actually gets the role, as opposed to the surface that listens to mouse and keyboard events
    useMenuSurfaceButtonProps: (props: h.JSX.HTMLAttributes<MenuButtonElement>) => h.JSX.HTMLAttributes<any>;

}

export interface UseMenuButtonReturnTypeWithHooks extends UseMenuButtonReturnTypeInfo { }


/**
 * A menu surface is what handles user interaction with an interactive but transient surface (like a menu or a popup).
 * 
 * This isn't strictly an ARIA thing, but the keyboard (etc.) interactions are shared among a lot of widgets.
 * 
 * Related to menus, which are a menu contained within a menu surface. Not related to menubars -- menus contain menubars, but not all menubars are contained within a menu or its surface.
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

    const { useRandomIdSourceElement, useRandomIdReferencerElement, ...void1 } = useRandomId<MenuParentElement>({ randomIdParameters: { prefix: "aria-menu-" } });
    const { randomIdSourceReturn, ...void2 } = useRandomIdSourceElement();
    const { randomIdReferencerReturn, ...void3 } = useRandomIdReferencerElement<MenuButtonElement>("aria-controls" as never);

    const { refElementReturn: { getElement: getButtonElement, propsStable: p1 }, ...void4 } = useRefElement<MenuButtonElement>({ refElementParameters: { onElementChange: setOpenerElement } });

    const { refElementReturn: { getElement: getMenuElement, propsStable: p2, ...void5 }, ...void6 } = useRefElement<MenuSurfaceElement>({ refElementParameters: { onElementChange: undefined } });
    const { softDismissProps, ...softDismissReturn } = useSoftDismiss<any>({
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

        return useMergedProps(softDismissProps, useMergedProps(useMenuBaseRefElementProps, useMergedProps<MenuSurfaceElement>({ onKeyDown }, (props))));
    };

    const useMenuSurfaceButtonProps = (props: h.JSX.HTMLAttributes<MenuButtonElement>): h.JSX.HTMLAttributes<MenuButtonElement> => {
        overwriteWithWarning("useMenuSurfaceButtonProps", props, "aria-expanded", open.toString());
        overwriteWithWarning("useMenuSurfaceButtonProps", props, "aria-haspopup", role);
        return useMergedProps(useButtonRefElementProps, useRandomIdReferencerElementProps(props));
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
        ...softDismissReturn
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
