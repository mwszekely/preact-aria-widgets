import { h } from "preact";
import { returnFalse, useEnsureStability, useMergedProps, useModal, UseModalParameters, UseModalReturnType, usePassiveState, useRandomId, useRefElement, useStableCallback, useStableGetter, useState, useTimeout } from "preact-prop-helpers";
import { useCallback, useEffect, useRef } from "preact/hooks";
import { debugLog, overwriteWithWarning } from "./props";

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
    //sendFocusToMenu(): void;
}

export type MenuSurfaceOmits = keyof MSP;

export interface UseMenuSurfaceParameters<_S extends Element, _B extends Element> extends Omit<UseModalParameters<"escape" | "lost-focus" | "backdrop">, "focusTrapParameters"> {
    focusTrapParameters: Omit<UseModalParameters<"escape" | "lost-focus" | "backdrop">["focusTrapParameters"], "trapActive" | "focusOpener">
    menuSurfaceParameters: MSP;
}


export interface UseMenuSurfaceReturnType<MenuSurfaceElement extends Element, MenuTargetElement extends Element, MenuTriggerElement extends Element> {
    propsSurface: h.JSX.HTMLAttributes<MenuSurfaceElement>;
    propsTarget: h.JSX.HTMLAttributes<MenuTargetElement>;
    propsTrigger: h.JSX.HTMLAttributes<MenuTriggerElement>;
    propsSentinel: h.JSX.HTMLAttributes<any>;
    focusTrapReturn: UseModalReturnType<null, MenuTriggerElement, MenuSurfaceElement>["focusTrapReturn"];
    refElementPopupReturn: UseModalReturnType<null, MenuTriggerElement, MenuSurfaceElement>["refElementPopupReturn"];
    refElementSourceReturn: UseModalReturnType<null, MenuTriggerElement, MenuSurfaceElement>["refElementSourceReturn"];
}
//export interface UseMenuButtonReturnTypeInfo extends UseListNavigationChildReturnTypeInfo<never> { }
/*
export interface UseMenuSurfaceReturnTypeWithHooks<MenuSurfaceElement extends Element, MenuParentElement extends Element, MenuButtonElement extends Element> extends UseMenuSurfaceReturnTypeInfo<MenuSurfaceElement, MenuButtonElement> {
    useMenuSurfaceSentinel: <E extends Element>() => { useMenuSentinelProps: (p: h.JSX.HTMLAttributes<E>) => h.JSX.HTMLAttributes<E>; };
    useMenuSurfaceProps: (props: h.JSX.HTMLAttributes<MenuSurfaceElement>) => h.JSX.HTMLAttributes<MenuSurfaceElement>;
    useMenuSurfaceChildProps: (props: h.JSX.HTMLAttributes<MenuParentElement>) => h.JSX.HTMLAttributes<MenuParentElement>;  // NOT a menu item! This is the menu, dialog, popup, whatever actually gets the role, as opposed to the surface that listens to mouse and keyboard events
    useMenuSurfaceButtonProps: (props: h.JSX.HTMLAttributes<MenuButtonElement>) => h.JSX.HTMLAttributes<any>;

}*/

//export interface UseMenuButtonReturnTypeWithHooks extends UseMenuButtonReturnTypeInfo { }


/**
 * A menu surface is what handles user interaction with an interactive but transient surface (like a menu or a popup).
 * 
 * This isn't strictly an ARIA thing, but the keyboard (etc.) interactions are shared among a lot of widgets.
 * 
 * Related to menus, which are a menu contained within a menu surface. Not related to menubars -- menus contain menubars, but not all menubars are contained within a menu or its surface.
 * 
 */
export function useMenuSurface<MenuSurfaceElement extends Element, MenuTargetElement extends Element, MenuTriggerElement extends Element>({
    //menuSurface: { sendFocusToMenu, role }, 
    dismissParameters,
    escapeDismissParameters,
    focusTrapParameters,
    menuSurfaceParameters: { role }
}: UseMenuSurfaceParameters<MenuSurfaceElement, MenuTriggerElement>): UseMenuSurfaceReturnType<MenuSurfaceElement, MenuTargetElement, MenuTriggerElement> {
    debugLog("useMenuSurface");
    //const sendFocusWithinMenu = useStableCallback(sendFocusToMenu);
    //const [focusTrapActive, setFocusTrapActive] = useState<null | boolean>(null);
    //const { open, onClose: userOnClose } = softDismiss;
    /*const onClose = useStableCallback<typeof userOnClose>((reason) => {
        if (reason != "lost-focus") {
            const opener = (getOpenerElement() as HTMLElement | null);
            if (opener && "focus" in opener)
                opener.focus({ preventScroll: true });
        }
        return userOnClose(reason);
    })*/
    //useEnsureStability("useMenuSurface", onClose, role, sendFocusToMenu);
    /*

    TODO: This needs to actually do something

    const getIsOpen = useStableGetter(open);
    const intersectionObserver = useRef<IntersectionObserver>(null!);
    const [getSurfaceFullyVisible, setSurfaceFullyVisible] = usePassiveState(null, returnFalse);
    intersectionObserver.current ??= new IntersectionObserver((entries, _observer) => {
        for (const entry of entries) {
            setSurfaceFullyVisible(entry.intersectionRatio >= 1);
        }
    }, { root: null, threshold: [0, 1] });
    */

    //const [, setOpenerElement, getOpenerElement] = useState<MenuTriggerElement | null>(null);

    const { propsReferencer: propsIdTrigger, propsSource: propsIdTarget, randomIdReturn } = useRandomId<MenuTargetElement, MenuTriggerElement>({ randomIdParameters: { prefix: "aria-menu-", referencerProp: "aria-controls" } });

    const { refElementReturn: { getElement: getButtonElement, propsStable: propsRefTrigger }, ...void4 } = useRefElement<MenuTriggerElement>({ refElementParameters: { onElementChange: undefined } });

    const { refElementReturn: { getElement: getMenuElement, propsStable: propsRefSurface, ...void5 }, ...void6 } = useRefElement<MenuSurfaceElement>({ refElementParameters: { onElementChange: undefined } });
    const {
        focusTrapReturn,
        propsFocusContainer,
        propsPopup,
        propsSource: ps2,
        refElementPopupReturn,
        refElementSourceReturn
    } = useModal<"escape" | "lost-focus" | "backdrop", null, MenuTriggerElement, MenuSurfaceElement>({
        dismissParameters,
        escapeDismissParameters,
        focusTrapParameters: {
            ...focusTrapParameters,
            trapActive: false,
            focusOpener: useStableCallback(() => {
                const buttonElement = getButtonElement() as HTMLElement | null;
                buttonElement?.focus();
            })
        }
    });


    /*const useMenuSurfaceProps = (props: h.JSX.HTMLAttributes<MenuSurfaceElement>): h.JSX.HTMLAttributes<MenuSurfaceElement> => {
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
    };*/

    /* const useMenuSurfaceButtonProps = (props: h.JSX.HTMLAttributes<MenuTriggerElement>): h.JSX.HTMLAttributes<MenuTriggerElement> => {
         overwriteWithWarning("useMenuSurfaceButtonProps", props, "aria-expanded", open.toString());
         overwriteWithWarning("useMenuSurfaceButtonProps", props, "aria-haspopup", role);
         return useMergedProps(useButtonRefElementProps, useRandomIdReferencerElementProps(props));
     };*/

    const propsSurface: h.JSX.HTMLAttributes<MenuSurfaceElement> = (propsPopup)

    const propsTarget: h.JSX.HTMLAttributes<MenuTargetElement> = useMergedProps({
        role
    }, propsIdTarget);

    const propsTrigger: h.JSX.HTMLAttributes<MenuTriggerElement> = useMergedProps({
        "aria-expanded": (dismissParameters.open).toString(),
        "aria-haspopup": role,
    }, propsRefTrigger, ps2, propsIdTrigger);

    const propsSentinel: h.JSX.HTMLAttributes<any> = useFocusSentinel({
        focusSentinel: {
            sendFocusToMenu: useCallback(() => { return focusTrapParameters.focusSelf(getMenuElement()) }, []),
            onClose: useCallback(() => { dismissParameters.onClose("lost-focus") }, [dismissParameters.onClose]),
            open: dismissParameters.open
        }
    })


    /*useEffect(() => {

        if (open === true) {
            sendFocusToMenu?.();
            setTimeout(() => {
                if (!getSurfaceFullyVisible()) {
                    getMenuElement()?.scrollIntoView();
                }
            })
        }
    }, [open]);*/

    /*function useMenuSurfaceChildProps(props: h.JSX.HTMLAttributes<MenuParentElement>): h.JSX.HTMLAttributes<MenuParentElement> {
        props.role = role;
        return useRandomIdSourceElementProps(props);
    }*/

    return {
        focusTrapReturn,
        propsSentinel,
        propsSurface,
        propsTarget,
        propsTrigger,
        refElementPopupReturn,
        refElementSourceReturn
        /*useMenuSurfaceChildProps,
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
        ...softDismissReturn*/
    }
}

interface FSP extends MSP {
    open: boolean;
    onClose(): void;
}

export type FocusSentinelOmits = keyof FSP;

export interface UseFocusSentinelParameters {
    focusSentinel: { sendFocusToMenu: () => void; open: boolean; onClose(): void; };
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
export function useFocusSentinel<E extends Element>({ focusSentinel: { open, onClose, sendFocusToMenu } }: UseFocusSentinelParameters): h.JSX.HTMLAttributes<E> {
    debugLog("useFocusSentinel");
    const getSendFocusWithinMenu = useStableGetter(sendFocusToMenu);
    const stableOnClose = useStableCallback(onClose);

    const [firstSentinelIsActive, setFirstSentinelIsActive] = useState(false);
    useTimeout({ callback: () => { setFirstSentinelIsActive(open); }, timeout: 100, triggerIndex: `${open}-${firstSentinelIsActive}` });


    const onFocus = firstSentinelIsActive ? (() => stableOnClose()) : (() => getSendFocusWithinMenu()?.());
    const onClick = () => stableOnClose();

    return {
        tabIndex: firstSentinelIsActive ? 0 : -1,
        onFocus,
        onClick
    };
}
