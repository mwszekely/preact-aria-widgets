import { returnNull, useDismiss, useGlobalHandler, useHasCurrentFocus, useMergedProps, usePassiveState, useRandomId, useRefElement, useStableCallback, useState } from "preact-prop-helpers";
import { useCallback, useRef } from "preact/hooks";
import { Prefices } from "./props.js";
export function useTooltip({ tooltipParameters: { onStatus, tooltipSemanticType, hoverDelay }, escapeDismissParameters }) {
    /**
     * Whether the hover/focus-popup/trigger state we have results in us showing this tooltip.
     *
     * This is used purely to attach global event handlers that should only be there when the tooltip is open (e.g. `useDismiss`)
     */
    const [openLocal, setOpenLocal] = useState(false);
    const [getState, setState] = usePassiveState(useStableCallback((nextState, prevState) => {
        if (hoverTimeoutHandle.current) {
            clearTimeout(hoverTimeoutHandle.current);
            hoverTimeoutHandle.current = null;
        }
        switch (nextState) {
            case "focused-popup":
            case "focused-trigger":
                onStatus("focus");
                break;
            case "hovering-popup":
            case "hovering-trigger":
                onStatus("hover");
                break;
            default:
                onStatus(null);
                break;
        }
        setOpenLocal(!!nextState);
    }), returnNull);
    let { propsReferencer: propsTrigger, propsSource: propsPopup } = useRandomId({ randomIdParameters: { prefix: Prefices.tooltip, otherReferencerProp: (tooltipSemanticType == "description" ? "aria-describedby" : "aria-labelledby") } });
    const { refElementReturn: { getElement: getTriggerElement }, propsStable: triggerRefProps } = useRefElement({ refElementParameters: {} });
    const { refElementReturn: { getElement: getPopupElement }, propsStable: popupRefProps } = useRefElement({ refElementParameters: {} });
    const stateIsMouse = useCallback(() => (getState()?.startsWith("h") || false), []);
    const stateIsFocus = useCallback(() => (getState()?.startsWith("f") || false), []);
    let hoverTimeoutHandle = useRef(null);
    const onHoverChanged = useStableCallback((hovering, which) => {
        if (hoverTimeoutHandle.current)
            clearTimeout(hoverTimeoutHandle.current);
        if (hovering) {
            hoverTimeoutHandle.current = setTimeout(() => {
                setState(`hovering-${which}`);
                hoverTimeoutHandle.current = null;
            }, hoverDelay || 0);
        }
        else {
            setState(null);
        }
    });
    const onCurrentFocusedInnerChanged = useCallback((focused, which) => {
        if (!stateIsMouse()) {
            if (focused) {
                setState(`focused-${which}`);
            }
            else {
                setState(null);
            }
        }
        else {
            setState(null);
        }
    }, [stateIsMouse]);
    const onTriggerCurrentFocusedInnerChanged = useCallback((focused) => onCurrentFocusedInnerChanged(focused, "trigger"), [onCurrentFocusedInnerChanged]);
    const onPopupCurrentFocusedInnerChanged = useCallback((focused) => onCurrentFocusedInnerChanged(focused, "popup"), [onCurrentFocusedInnerChanged]);
    const { hasCurrentFocusReturn: triggerFocusReturn } = useHasCurrentFocus({ hasCurrentFocusParameters: { onCurrentFocusedChanged: null, onCurrentFocusedInnerChanged: onTriggerCurrentFocusedInnerChanged }, refElementReturn: { getElement: getTriggerElement } });
    const { hasCurrentFocusReturn: popupFocusReturn } = useHasCurrentFocus({ hasCurrentFocusParameters: { onCurrentFocusedChanged: null, onCurrentFocusedInnerChanged: onPopupCurrentFocusedInnerChanged }, refElementReturn: { getElement: getPopupElement } });
    const { refElementPopupReturn, refElementSourceReturn, propsStablePopup, propsStableSource } = useDismiss({
        dismissParameters: {
            closeOnBackdrop: true,
            closeOnLostFocus: false,
            closeOnEscape: true,
            open: openLocal,
            onClose: useStableCallback((reason) => {
                setState(null);
            }),
        },
        escapeDismissParameters,
    });
    const otherPopupProps = {
        onPointerEnter: useCallback(() => { onHoverChanged(true, "popup"); }, []),
        //onPointerLeave: useCallback(() => { onHoverChanged(false, "popup") }, [])
    };
    const otherTriggerProps = {
        onPointerEnter: useCallback(() => { onHoverChanged(true, "trigger"); }, []),
        onClick: useCallback((e) => { if (e.currentTarget && "focus" in e.currentTarget)
            e.currentTarget.focus(); }, []),
        //onPointerLeave: useCallback(() => { onHoverChanged(false, "trigger") }, [])
    };
    useGlobalHandler(document, "pointermove", !openLocal ? null : (e => {
        const popupElement = getPopupElement();
        const triggerElement = getTriggerElement();
        const mouseElement = e.target;
        let overPopup = (popupElement?.contains(mouseElement));
        let overTrigger = (triggerElement?.contains(mouseElement));
        if (!overPopup && !overTrigger && stateIsMouse()) {
            onHoverChanged(false, "popup");
        }
    }), { capture: true, passive: true });
    return {
        propsPopup: useMergedProps(popupRefProps, propsPopup, popupFocusReturn.propsStable, { role: "tooltip" }, otherPopupProps, propsStablePopup),
        propsTrigger: useMergedProps(triggerRefProps, propsTrigger, triggerFocusReturn.propsStable, { onClick: useStableCallback(e => e.currentTarget?.focus?.()) }, otherTriggerProps, propsStableSource),
        tooltipReturn: {
            getState,
            stateIsFocus,
            stateIsMouse
        }
    };
}
//# sourceMappingURL=use-tooltip.js.map