import { assertEmptyObject, findFirstFocusable, useMergedProps, useModal, useRefElement, useStableCallback, useStableGetter, useState, useTimeout } from "preact-prop-helpers";
import { useCallback } from "preact/hooks";
import { debugLog } from "./props.js";
/**
 * A menu surface is what handles user interaction with an interactive but transient surface (like a menu or a popup).
 *
 * The keyboard (etc.) interactions are shared among a lot of widgets, and the opening button has some ARIA properties that need setting.
 *
 * Related to menus, which are a menu contained within a menu surface. Not related to menubars -- menus contain menubars, but not all menubars are contained within a menu or its surface.
 *
 */
export function useMenuSurface({ 
//menuSurface: { sendFocusToMenu, role }, 
dismissParameters, escapeDismissParameters, focusTrapParameters, menuSurfaceParameters: { role, surfaceId } }) {
    debugLog("useMenuSurface");
    const { refElementReturn: { getElement: getButtonElement, propsStable: propsRefTrigger }, ...void4 } = useRefElement({ refElementParameters: { onElementChange: undefined } });
    const { refElementReturn: { getElement: getMenuElement, propsStable: propsRefSurface, ...void5 }, ...void6 } = useRefElement({ refElementParameters: { onElementChange: undefined } });
    const { focusTrapReturn, propsFocusContainer, propsPopup, propsSource: ps2, refElementPopupReturn, refElementSourceReturn } = useModal({
        dismissParameters,
        escapeDismissParameters,
        focusTrapParameters: {
            ...focusTrapParameters,
            onlyMoveFocus: true,
            trapActive: true,
            focusOpener: useStableCallback(() => {
                const buttonElement = getButtonElement();
                buttonElement?.focus();
            })
        }
    });
    assertEmptyObject(void4);
    assertEmptyObject(void5);
    assertEmptyObject(void6);
    const propsSurface = useMergedProps(propsRefSurface, propsPopup, propsFocusContainer);
    const propsTarget = useMergedProps({
        role,
        id: surfaceId
    });
    const propsTrigger = useMergedProps({
        "aria-expanded": (dismissParameters.open).toString(),
        "aria-haspopup": role,
    }, propsRefTrigger, ps2, { "aria-controls": surfaceId });
    const propsSentinel = useFocusSentinel({
        focusSentinel: {
            sendFocusToMenu: useCallback(() => { return focusTrapParameters.focusPopup(getMenuElement(), () => findFirstFocusable(getMenuElement())); }, []),
            onClose: useCallback(() => { dismissParameters.onClose("lost-focus"); }, [dismissParameters.onClose]),
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
    };
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
export function useFocusSentinel({ focusSentinel: { open, onClose, sendFocusToMenu } }) {
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
//# sourceMappingURL=use-menu-surface.js.map