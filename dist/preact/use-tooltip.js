import { assertEmptyObject, focus, returnNull, useCallback, useDismiss, useEffect, useGlobalHandler, useHasCurrentFocus, useMergedProps, usePassiveState, useRandomId, useRef, useRefElement, useStableCallback, useState } from "preact-prop-helpers/preact";
import { monitored, Prefices } from "./props.js";
// Intentionally (?) unused
let _hasHover2 = typeof window == "undefined" ? null : matchMedia("(any-hover: hover)");
// Track if the current input has hover capabilities
// (This is responsive to whatever the "primary" device is)
let mediaQuery = typeof window == "undefined" ? null : matchMedia("(hover: hover)");
let pageCurrentlyUsingHover = mediaQuery?.matches || false;
let allCallbacks = new Set();
if (mediaQuery)
    mediaQuery.onchange = ev => { pageCurrentlyUsingHover = ev.matches; allCallbacks.forEach(fn => fn(ev.matches)); };
//setTimeout(() => alert(`Hover: ${pageCurrentlyUsingHover.toString()}`), 1000);
/*
//let delayedAlert2 = debounce(delayedAlert3, 4000);
let messages = new Set<string>();
const delayedAlert2 = debounce(function delayedAlert3() {
    alert([...messages].join("\n"));
    messages.clear();
}, 2500);

function delayedAlert(message: string) {
    messages.add(message);
    delayedAlert2();
}*/
/**
 * Implements a [Tooltip](https://www.w3.org/WAI/ARIA/apg/patterns/tooltip/) pattern.
 *
 * @remarks Tooltips are remarkably under-specified, so some of this is speculative.
 *
 * @compositeParams
 */
export const useTooltip = monitored(function useTooltip({ tooltipParameters: { onStatus, tooltipSemanticType, hoverDelay, usesLongPress }, activeElementParameters, escapeDismissParameters, pressReturn: { longPress, ...void2 }, ...void1 }) {
    useGlobalHandler(window, "mouseout", useCallback((e) => {
        if (e.relatedTarget == null)
            onHoverChanged(false, "popup");
    }, []));
    const [usesHover, setUsesHover] = useState(pageCurrentlyUsingHover);
    useEffect(() => {
        if (mediaQuery) {
            let handler = (ev) => { setUsesHover(ev.matches); };
            mediaQuery.addEventListener("change", handler, { passive: true });
            return () => mediaQuery.removeEventListener("change", handler, {});
        }
    });
    /**
     * Whether the hover/focus-popup/trigger state we have results in us showing this tooltip.
     *
     * This is used purely to attach global event handlers that should only be there when the tooltip is open (e.g. `useDismiss`)
     */
    const [openLocal, setOpenLocal] = useState(false);
    const [getState, setState] = usePassiveState(useStableCallback((nextState, _prevState) => {
        //delayedAlert(`${prevState ?? "null"} to ${nextState}`);
        if (hoverTimeoutHandle.current) {
            clearTimeout(hoverTimeoutHandle.current);
            hoverTimeoutHandle.current = null;
        }
        if (nextState == null)
            inputState.current = null;
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
    let inputState = useRef(null);
    let hoverTimeoutHandle = useRef(null);
    const onHoverChanged = useStableCallback((hovering, which) => {
        if (hoverTimeoutHandle.current)
            clearTimeout(hoverTimeoutHandle.current);
        //delayedAlert(`onHoverChanged(${hovering.toString()}, ${which}) with inputState == ${inputState.current}`)
        // Ignore emulated cursor hover events when we're not even using a pointer
        // if ()
        //    return;
        if (hovering) {
            inputState.current = "hover";
            if (usesLongPress && !usesHover) {
                // "Pretend" like we're hovering so that we don't allow a focus to show the tooltip early while we're long-pressing it.
            }
            else {
                hoverTimeoutHandle.current = setTimeout(() => {
                    setState(`hovering-${which}`);
                    hoverTimeoutHandle.current = null;
                }, hoverDelay || 0);
            }
        }
        else {
            setState(null);
            inputState.current = null;
        }
    });
    const onCurrentFocusedInnerChanged = useCallback((focused, which) => {
        // delayedAlert(`onFocusedChanged(${focused.toString()}, ${which}) with inputState == ${inputState.current}`)
        if (inputState.current != "hover") {
            if (focused) {
                inputState.current = 'focus';
                setState(`focused-${which}`);
            }
            else {
                setState(null);
                inputState.current = null;
            }
        }
        else {
            setState(null);
            inputState.current = null;
        }
    }, []);
    const onTriggerCurrentFocusedInnerChanged = useCallback((focused) => onCurrentFocusedInnerChanged(focused, "trigger"), [onCurrentFocusedInnerChanged]);
    const onPopupCurrentFocusedInnerChanged = useCallback((focused) => onCurrentFocusedInnerChanged(focused, "popup"), [onCurrentFocusedInnerChanged]);
    const { hasCurrentFocusReturn: triggerFocusReturn } = useHasCurrentFocus({ hasCurrentFocusParameters: { onCurrentFocusedChanged: null, onCurrentFocusedInnerChanged: onTriggerCurrentFocusedInnerChanged }, refElementReturn: { getElement: getTriggerElement } });
    const { hasCurrentFocusReturn: popupFocusReturn } = useHasCurrentFocus({ hasCurrentFocusParameters: { onCurrentFocusedChanged: null, onCurrentFocusedInnerChanged: onPopupCurrentFocusedInnerChanged }, refElementReturn: { getElement: getPopupElement } });
    const { refElementPopupReturn, refElementSourceReturn, propsStablePopup, propsStableSource } = useDismiss({
        backdropDismissParameters: {
            dismissBackdropActive: true, // we handle this ourselves, but for mobile devices with a sorta virtualish cursor this helps. 
            onDismissBackdrop: null
        },
        lostFocusDismissParameters: {
            dismissLostFocusActive: false, // and it interferes with our own focus logic (or, our onClose there does)
            onDismissLostFocus: null,
        },
        dismissParameters: {
            dismissActive: openLocal,
            onDismiss: useStableCallback((_e, _reason) => {
                setState(null);
            }),
        },
        activeElementParameters,
        escapeDismissParameters: {
            dismissEscapeActive: true,
            onDismissEscape: null,
            ...escapeDismissParameters
        },
    });
    const otherPopupProps = {
        onPointerEnter: useCallback(() => { onHoverChanged(true, "popup"); }, []),
        //onPointerLeave: useCallback(() => { onHoverChanged(false, "popup") }, [])
    };
    const otherTriggerProps = {
        onPointerEnter: useCallback(() => { onHoverChanged(true, "trigger"); }, []),
        onPointerUp: useCallback(() => { onHoverChanged(false, "trigger"); }, []),
        onClick: useStableCallback((e) => {
            // When we click/tap the trigger,
            // if we can't hover it
            if (!usesHover) {
                // We can't hover the trigger we just tapped
                if (usesLongPress) {
                    // Don't need to do anything -- usePress is doing it for us
                }
                else {
                    // Presumably static text content or something else -- focus it so the tooltip will show
                    onCurrentFocusedInnerChanged(true, "trigger");
                    focus(e.currentTarget);
                }
            }
            else {
                // We're using a mouse or other hovering pointer (so not a stylus/touchscreen)
                onHoverChanged(true, "trigger");
            }
            /*onHoverChanged(true, "trigger");
            if (e.currentTarget && "focus" in e.currentTarget)
            focus(e.currentTarget as HTMLElement); */
        }),
        //onPointerLeave: useCallback(() => { onHoverChanged(false, "trigger") }, [])
    };
    useGlobalHandler(document, "pointermove", !openLocal ? null : (e => {
        const popupElement = getPopupElement();
        const triggerElement = getTriggerElement();
        const mouseElement = e.target;
        let overPopup = (popupElement?.contains(mouseElement));
        let overTrigger = (triggerElement?.contains(mouseElement));
        if (!overPopup && !overTrigger && inputState.current == 'hover') {
            onHoverChanged(false, "popup");
        }
    }), { capture: true, passive: true });
    assertEmptyObject(void1);
    assertEmptyObject(void2);
    useEffect(() => {
        // When a long press starts, if we use those and we're on a touch device,
        // then show the tooltip by focusing the trigger.
        if (usesLongPress && !usesHover) {
            if (longPress) {
                inputState.current = null;
                onCurrentFocusedInnerChanged(true, "trigger");
                focus(getTriggerElement());
            }
        }
    }, [longPress, usesHover, usesLongPress]);
    return {
        refElementPopupReturn,
        refElementSourceReturn,
        propsPopup: useMergedProps(popupRefProps, propsPopup, popupFocusReturn.propsStable, { role: "tooltip" }, otherPopupProps, propsStablePopup),
        propsTrigger: useMergedProps(triggerRefProps, propsTrigger, triggerFocusReturn.propsStable, { onClick: useStableCallback(e => focus(e.currentTarget)) }, otherTriggerProps, propsStableSource),
        tooltipReturn: {
            getState,
            //stateIsFocus,
            //stateIsMouse
        }
    };
});
//# sourceMappingURL=use-tooltip.js.map