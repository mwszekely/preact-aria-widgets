import { h } from "preact";
import { assertEmptyObject, findFirstFocusable, useMergedProps, useModal, UseModalParameters, UseModalReturnType, useRefElement, useStableCallback, useStableGetter, useState, useTimeout } from "preact-prop-helpers";
import { useCallback } from "preact/hooks";
import { debugLog, OmitStrong } from "./props";

interface MSP {
    /**
     * What role the surface fulfills.
     * 
     * General menus should use "menu". "dialog" can be used for generic pop-up things.
     */
    role: "dialog" | "menu" | "tree" | "grid" | "listbox";

    surfaceId: string;

    /**
     * When this menu surface is opened, at least one element in it must be focused.
     * 
     * This controls what is focused (e.g. the first menu item, the whole surface itself, etc.)
     */
    //sendFocusToMenu(): void;
}

export type MenuSurfaceOmits = keyof MSP;

export interface UseMenuSurfaceParameters<_S extends Element, _B extends Element> extends OmitStrong<UseModalParameters<"escape" | "lost-focus" | "backdrop">, "focusTrapParameters"> {
    focusTrapParameters: OmitStrong<UseModalParameters<"escape" | "lost-focus" | "backdrop">["focusTrapParameters"], "trapActive" | "focusOpener" | "onlyMoveFocus">
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


/**
 * A menu surface is what handles user interaction with an interactive but transient surface (like a menu or a popup).
 * 
 * The keyboard (etc.) interactions are shared among a lot of widgets, and the opening button has some ARIA properties that need setting.
 * 
 * Related to menus, which are a menu contained within a menu surface. Not related to menubars -- menus contain menubars, but not all menubars are contained within a menu or its surface.
 * 
 */
export function useMenuSurface<MenuSurfaceElement extends Element, MenuTargetElement extends Element, MenuTriggerElement extends Element>({
    //menuSurface: { sendFocusToMenu, role }, 
    dismissParameters,
    escapeDismissParameters,
    focusTrapParameters,
    menuSurfaceParameters: { role, surfaceId }
}: UseMenuSurfaceParameters<MenuSurfaceElement, MenuTriggerElement>): UseMenuSurfaceReturnType<MenuSurfaceElement, MenuTargetElement, MenuTriggerElement> {
    debugLog("useMenuSurface");

    const { refElementReturn: { getElement: getButtonElement, propsStable: propsRefTrigger }, ...void4 } = useRefElement<MenuTriggerElement>({ refElementParameters: { onElementChange: undefined } });

    const { refElementReturn: { getElement: getMenuElement, propsStable: propsRefSurface, ...void5 }, ...void6 } = useRefElement<MenuSurfaceElement>({ refElementParameters: { onElementChange: undefined } });
    const {
        focusTrapReturn,
        propsFocusContainer,
        propsPopup,
        propsSource: ps2,
        refElementPopupReturn,
        refElementSourceReturn
    } = useModal<"escape" | "lost-focus" | "backdrop", MenuSurfaceElement, MenuTriggerElement, MenuSurfaceElement>({
        dismissParameters,
        escapeDismissParameters,
        focusTrapParameters: {
            ...focusTrapParameters,
            onlyMoveFocus: true,
            trapActive: true,
            focusOpener: useStableCallback(() => {
                const buttonElement = getButtonElement() as HTMLElement | null;
                buttonElement?.focus();
            })
        }
    });

    assertEmptyObject(void4);
    assertEmptyObject(void5);
    assertEmptyObject(void6);

    const propsSurface: h.JSX.HTMLAttributes<MenuSurfaceElement> = useMergedProps(propsRefSurface, propsPopup, propsFocusContainer);

    const propsTarget: h.JSX.HTMLAttributes<MenuTargetElement> = useMergedProps({
        role,
        id: surfaceId
    });

    const propsTrigger: h.JSX.HTMLAttributes<MenuTriggerElement> = useMergedProps({
        "aria-expanded": (dismissParameters.open).toString(),
        "aria-haspopup": role,
    }, propsRefTrigger, ps2, { "aria-controls": surfaceId });

    const propsSentinel: h.JSX.HTMLAttributes<any> = useFocusSentinel({
        focusSentinel: {
            sendFocusToMenu: useCallback(() => { return focusTrapParameters.focusPopup(getMenuElement(), () => (findFirstFocusable(getMenuElement()!) as HTMLElement | null)) }, []),
            onClose: useCallback(() => { dismissParameters.onClose("lost-focus") }, [dismissParameters.onClose]),
            open: dismissParameters.open
        }
    });

    return {
        focusTrapReturn,
        propsSentinel,
        propsSurface,
        propsTarget,
        propsTrigger,
        refElementPopupReturn,
        refElementSourceReturn
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


/**
 * A focus sentinal is a hidden but focusable element that comes at the start or end 
 * of the out-of-place-focusable component that, when activated or focused over, closes the component
 * (if focused within 100ms of the open prop changing, instead of
 * closing, focusing the sentinel immediately asks it to focus itself).
 * This exists for things like menus which can have focus but also need a way to return
 * to whatever out-of-place parent they came from when naturally tabbed out of (as opposed
 * to dialogs which loop back around when tabbed out of). While mouse users can click out of a menu
 * and keyboard users can escape to close a menu, screen readers and other input methods 
 * that don't use those two would become stuck.
 * 
 * @param param0 
 * @returns 
 */
export function useFocusSentinel<E extends Element>({ focusSentinel: { open, onClose, sendFocusToMenu } }: UseFocusSentinelParameters): h.JSX.HTMLAttributes<E> {
    debugLog("useFocusSentinel");
    const getSendFocusWithinMenu = useStableGetter(sendFocusToMenu);
    const stableOnClose = useStableCallback(onClose);

    const [sentinelIsActive, setSentinelIsActive] = useState(false);
    useTimeout({ callback: () => { setSentinelIsActive(open); }, timeout: 100, triggerIndex: `${open}-${sentinelIsActive}` });


    const onFocus = sentinelIsActive ? (() => stableOnClose()) : (() => getSendFocusWithinMenu()?.());
    const onClick = () => stableOnClose();

    return {
        tabIndex: sentinelIsActive ? 0 : -1,
        onFocus,
        onClick
    };
}
