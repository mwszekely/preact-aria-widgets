import { assertEmptyObject, findFirstFocusable, focus, useMergedProps, useModal, useRefElement, useStableCallback, useStableGetter, useState, useTimeout } from "preact-prop-helpers/preact";
import { monitored } from "./props.js";
/**
 * A menu surface is what handles user interaction with an interactive but transient surface (like a menu or a popup, but not something potentially modal like a dialog).
 *
 * @remarks The keyboard (etc.) interactions are shared among a lot of widgets, and the opening button has some ARIA properties that need setting.
 *
 * Related to **menus**, which are a **menubar** contained within a **menu surface**.
 *
 * @compositeParams
 */
export const useMenuSurface = monitored(function useMenuSurface({ dismissParameters, focusTrapParameters, activeElementParameters, menuSurfaceParameters: { role, surfaceId, ...void1 }, modalParameters, escapeDismissParameters, ...void2 }) {
    const { refElementReturn: { getElement: getButtonElement }, propsStable: propsRefTrigger, ...void4 } = useRefElement({ refElementParameters: { onElementChange: undefined } });
    const { refElementReturn: { getElement: getMenuElement, ...void5 }, propsStable: propsRefSurface, ...void6 } = useRefElement({ refElementParameters: { onElementChange: undefined } });
    const { propsFocusContainer, propsStablePopup: propsPopup, propsStableSource: ps2, refElementPopupReturn, refElementSourceReturn } = useModal({
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
                const buttonElement = getButtonElement();
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
    const propsSurface = useMergedProps(propsRefSurface, propsPopup, propsFocusContainer);
    const propsTarget = useMergedProps({
        role,
        id: surfaceId
    });
    const propsTrigger = useMergedProps({
        "aria-expanded": (modalParameters.active),
        "aria-haspopup": role,
    }, propsRefTrigger, ps2, { "aria-controls": surfaceId });
    const propsSentinel = useFocusSentinel({
        focusSentinel: {
            sendFocusToMenu: useStableCallback(() => { return focusTrapParameters.focusPopup(getMenuElement(), () => findFirstFocusable(getMenuElement())); }),
            onClose: useStableCallback((e) => { dismissParameters.onDismiss(e, "lost-focus"); }),
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
    };
});
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
export const useFocusSentinel = monitored(function useFocusSentinel({ focusSentinel: { open, onClose, sendFocusToMenu } }) {
    const getSendFocusWithinMenu = useStableGetter(sendFocusToMenu);
    const stableOnClose = useStableCallback(onClose);
    const [sentinelIsActive, setSentinelIsActive] = useState(false);
    useTimeout({ callback: () => { setSentinelIsActive(open); }, timeout: 100, triggerIndex: `${open}-${sentinelIsActive}` });
    const onFocus = sentinelIsActive ? ((e) => stableOnClose(e)) : (() => getSendFocusWithinMenu()?.());
    const onClick = (e) => stableOnClose(e);
    return {
        tabIndex: sentinelIsActive ? 0 : -1,
        onFocus,
        onClick
    };
});
//# sourceMappingURL=use-menu-surface.js.map