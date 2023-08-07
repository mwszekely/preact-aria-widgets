import { assertEmptyObject, ElementProps, EventType, findFirstFocusable, focus, monitorCallCount, TargetedOmit, useMergedProps, useModal, UseModalParameters, UseModalReturnType, useRefElement, useStableCallback, useStableGetter, useState, useTimeout } from "preact-prop-helpers";
import { OmitStrong } from "./props.js";

export interface UseMenuSurfaceParametersSelf {
    /**
     * What role the surface fulfills.
     * 
     * General menus should use "menu". "dialog" can be used for generic pop-up things.
     */
    role: "dialog" | "menu" | "tree" | "grid" | "listbox";

    surfaceId: string;
}

export interface UseMenuSurfaceParameters<_S extends Element, _B extends Element> extends
    OmitStrong<UseModalParameters<"escape" | "lost-focus" | "backdrop">, "focusTrapParameters" | "refElementParameters" | "backdropDismissParameters" | "lostFocusDismissParameters" | "escapeDismissParameters" | "dismissParameters">,
    TargetedOmit<UseModalParameters<"escape" | "lost-focus" | "backdrop">, "dismissParameters", "dismissActive">,
    TargetedOmit<UseModalParameters<"escape" | "lost-focus" | "backdrop">, "escapeDismissParameters", "onDismissEscape" | "dismissEscapeActive">,
    TargetedOmit<UseModalParameters<"escape" | "lost-focus" | "backdrop">, "focusTrapParameters", "trapActive" | "focusOpener" | "onlyMoveFocus"> {
    menuSurfaceParameters: UseMenuSurfaceParametersSelf;
}


export interface UseMenuSurfaceReturnType<MenuSurfaceElement extends Element, MenuTargetElement extends Element, MenuTriggerElement extends Element> {
    propsSurface: ElementProps<MenuSurfaceElement>;
    propsTarget: ElementProps<MenuTargetElement>;
    propsTrigger: ElementProps<MenuTriggerElement>;
    propsSentinel: ElementProps<any>;
    refElementPopupReturn: UseModalReturnType<null, MenuTriggerElement, MenuSurfaceElement>["refElementPopupReturn"];
    refElementSourceReturn: UseModalReturnType<null, MenuTriggerElement, MenuSurfaceElement>["refElementSourceReturn"];
}


/**
 * A menu surface is what handles user interaction with an interactive but transient surface (like a menu or a popup, but not something potentially modal like a dialog).
 * 
 * @remarks The keyboard (etc.) interactions are shared among a lot of widgets, and the opening button has some ARIA properties that need setting.
 * 
 * Related to **menus**, which are a **menubar** contained within a **menu surface**.
 * 
 * @compositeParams
 */
export function useMenuSurface<MenuSurfaceElement extends Element, MenuTargetElement extends Element, MenuTriggerElement extends Element>({
    dismissParameters,
    focusTrapParameters,
    activeElementParameters,
    menuSurfaceParameters: { role, surfaceId, ...void1 },
    modalParameters,
    escapeDismissParameters,
    ...void2
}: UseMenuSurfaceParameters<MenuSurfaceElement, MenuTriggerElement>): UseMenuSurfaceReturnType<MenuSurfaceElement, MenuTargetElement, MenuTriggerElement> {
    monitorCallCount(useMenuSurface);

    const { refElementReturn: { getElement: getButtonElement }, propsStable: propsRefTrigger, ...void4 } = useRefElement<MenuTriggerElement>({ refElementParameters: { onElementChange: undefined } });
    const { refElementReturn: { getElement: getMenuElement, ...void5 }, propsStable: propsRefSurface, ...void6 } = useRefElement<MenuSurfaceElement>({ refElementParameters: { onElementChange: undefined } });

    const {
        propsFocusContainer,
        propsStablePopup: propsPopup,
        propsStableSource: ps2,
        refElementPopupReturn,
        refElementSourceReturn
    } = useModal<"escape" | "lost-focus" | "backdrop", MenuSurfaceElement, MenuTriggerElement, MenuSurfaceElement>({
        dismissParameters: { dismissActive: true, ...dismissParameters },
        backdropDismissParameters: { dismissBackdropActive: true, onDismissBackdrop: null },
        lostFocusDismissParameters: { dismissLostFocusActive: true, onDismissLostFocus: null },
        escapeDismissParameters: { dismissEscapeActive: true, onDismissEscape: null, ...escapeDismissParameters },
        modalParameters,
        refElementParameters: {},
        activeElementParameters,
        focusTrapParameters: {
            onlyMoveFocus: true,
            trapActive: true,
            focusOpener: useStableCallback(() => {
                const buttonElement = getButtonElement() as HTMLElement | null;
                focus(buttonElement);
            }),
            ...focusTrapParameters
        }
    });

    assertEmptyObject(void1);
    assertEmptyObject(void2);
    assertEmptyObject(void4);
    assertEmptyObject(void5);
    assertEmptyObject(void6);

    const propsSurface: ElementProps<MenuSurfaceElement> = useMergedProps(propsRefSurface, propsPopup, propsFocusContainer);

    const propsTarget: ElementProps<MenuTargetElement> = useMergedProps({
        role,
        id: surfaceId
    });

    const propsTrigger: ElementProps<MenuTriggerElement> = useMergedProps({
        "aria-expanded": (modalParameters.active),
        "aria-haspopup": role,
    }, propsRefTrigger, ps2, { "aria-controls": surfaceId });

    const propsSentinel: ElementProps<any> = useFocusSentinel({
        focusSentinel: {
            sendFocusToMenu: useStableCallback(() => { return focusTrapParameters.focusPopup(getMenuElement(), () => (findFirstFocusable(getMenuElement()!) as HTMLElement | null)) }),
            onClose: useStableCallback((e) => { dismissParameters.onDismiss(e, "lost-focus") }),
            open: modalParameters.active
        }
    });

    return {
        propsSentinel,
        propsSurface,
        propsTarget,
        propsTrigger,
        refElementPopupReturn,
        refElementSourceReturn
    }
}

export interface UseFocusSentinelParameters {
    focusSentinel: { sendFocusToMenu: () => void; open: boolean; onClose(e: EventType<any, any>): void; };
}


/**
 * A focus sentinel is a hidden but focusable element that comes at the start or end 
 * of the out-of-place-focusable component that, when activated or focused over, closes the component
 * (if focused within 100ms of the open prop changing, instead of
 * closing, focusing the sentinel immediately asks it to focus itself).
 * This exists for things like menus which can have focus but also need a way to return
 * to whatever out-of-place parent they came from when naturally tabbed out of (as opposed
 * to dialogs which loop back around when tabbed out of). While mouse users can click out of a menu
 * and keyboard users can escape to close a menu, screen readers and other input methods 
 * that don't use those two would become stuck.
 * 
 * @compositeParams
 */
export function useFocusSentinel<E extends Element>({ focusSentinel: { open, onClose, sendFocusToMenu } }: UseFocusSentinelParameters): ElementProps<E> {
    monitorCallCount(useFocusSentinel);
    const getSendFocusWithinMenu = useStableGetter(sendFocusToMenu);
    const stableOnClose = useStableCallback(onClose);

    const [sentinelIsActive, setSentinelIsActive] = useState(false);
    useTimeout({ callback: () => { setSentinelIsActive(open); }, timeout: 100, triggerIndex: `${open}-${sentinelIsActive}` });


    const onFocus = sentinelIsActive ? ((e: EventType<any, any>) => stableOnClose(e)) : (() => getSendFocusWithinMenu()?.());
    const onClick = (e: EventType<any, any>) => stableOnClose(e);

    return {
        tabIndex: sentinelIsActive ? 0 : -1,
        onFocus,
        onClick
    };
}
