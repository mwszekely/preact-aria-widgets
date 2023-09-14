import { assertEmptyObject, DismissListenerTypes, ElementProps, focus, monitored, returnNull, TargetedPick, useDismiss, UseDismissParameters, UseEscapeDismissParameters, useGlobalHandler, useHasCurrentFocus, useMergedProps, usePassiveState, UsePressReturnType, useRandomId, useRefElement, useStableCallback, useState } from "preact-prop-helpers";
import { useCallback, useEffect, useRef } from "preact/hooks";
import { Prefices } from "./props.js";

export type TooltipStatus = "hover" | "focus" | null;

export interface UseTooltipParametersSelf {

    /**
     * Called when the tooltip's content should be shown or hidden
     * or when the manner in which it's shown should be changed.
     * 
     * This can change from `"hover"` to `"mouse"`, but never the other way around.
     * 
     * `"null"` means the tooltip should be hidden
     * 
     * @param status C
     */
    onStatus(status: TooltipStatus): void;

    /**
     * This is whether `aria-describedby` or `aria-labelledby` is used.
     * 
     * Certain situations require one or the other, so you need to specify for each circumstance. 
     */
    tooltipSemanticType: "label" | "description";

    /**
     * How long should the tooltip wait to show itself if it was shown via hover?
     * 
     * Default is 0.
     */
    hoverDelay: number | null;

    usesLongPress: boolean;
}

export interface UseTooltipParameters<TriggerType extends Element, PopupType extends Element> extends
    TargetedPick<UseEscapeDismissParameters<PopupType, true>, "escapeDismissParameters", "getDocument" | "parentDepth">,
    TargetedPick<UsePressReturnType<TriggerType>, "pressReturn", "longPress">,
    Pick<UseDismissParameters<any>, "activeElementParameters"> {
    tooltipParameters: UseTooltipParametersSelf;
}

export type TooltipState = `${"hovering" | "focused"}-${"popup" | "trigger"}` | null;

// Intentionally (?) unused
let hasHover2 = matchMedia("(any-hover: hover)");

// Track if the current input has hover capabilities
// (This is responsive to whatever the "primary" device is)
let mediaQuery = matchMedia("(hover: hover)");
let pageCurrentlyUsingHover = mediaQuery.matches;
let allCallbacks = new Set<(primarilyUsesHover: boolean) => void>();
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
export const useTooltip = monitored(function useTooltip<TriggerType extends Element, PopupType extends Element>({
    tooltipParameters: {
        onStatus,
        tooltipSemanticType,
        hoverDelay,
        usesLongPress
    },
    activeElementParameters,
    escapeDismissParameters,
    pressReturn: { longPress, ...void2 },
    ...void1
}: UseTooltipParameters<TriggerType, PopupType>): UseTooltipReturnType<TriggerType, PopupType> {

    useGlobalHandler(window, "mouseout", useCallback((e: MouseEvent) => {
        if (e.relatedTarget == null)
            onHoverChanged(false, "popup");
    }, []));

    const [usesHover, setUsesHover] = useState(pageCurrentlyUsingHover);
    useEffect(() => {
        let handler: ((this: MediaQueryList, ev: MediaQueryListEvent) => void) = (ev) => { setUsesHover(ev.matches); };
        mediaQuery.addEventListener("change", handler, { passive: true });
        return () => mediaQuery.removeEventListener("change", handler, {})
    })

    /**
     * Whether the hover/focus-popup/trigger state we have results in us showing this tooltip.
     * 
     * This is used purely to attach global event handlers that should only be there when the tooltip is open (e.g. `useDismiss`)
     */
    const [openLocal, setOpenLocal] = useState(false);

    const [getState, setState] = usePassiveState<TooltipState, never>(useStableCallback((nextState, prevState) => {

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

    let {
        propsReferencer: propsTrigger,
        propsSource: propsPopup
    } = useRandomId<PopupType, TriggerType>({ randomIdParameters: { prefix: Prefices.tooltip, otherReferencerProp: (tooltipSemanticType == "description" ? "aria-describedby" : "aria-labelledby") } });

    const { refElementReturn: { getElement: getTriggerElement }, propsStable: triggerRefProps } = useRefElement<TriggerType>({ refElementParameters: {} });
    const { refElementReturn: { getElement: getPopupElement }, propsStable: popupRefProps } = useRefElement<PopupType>({ refElementParameters: {} });

    let inputState = useRef<"hover" | "focus" | null>(null);

    let hoverTimeoutHandle = useRef(null as number | null);
    const onHoverChanged = useStableCallback((hovering: boolean, which: "popup" | "trigger") => {
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
                }, hoverDelay || 0)
            }

        }
        else {
            setState(null);
            inputState.current = null;
        }
    })

    const onCurrentFocusedInnerChanged = useCallback((focused: boolean, which: "popup" | "trigger") => {

        // delayedAlert(`onFocusedChanged(${focused.toString()}, ${which}) with inputState == ${inputState.current}`)

        if (inputState.current != "hover") {
            if (focused) {
                inputState.current = 'focus';
                setState(`focused-${which}`);
            }
            else {
                setState(null);;
                inputState.current = null;
            }
        }
        else {
            setState(null);
            inputState.current = null;
        }
    }, []);

    const onTriggerCurrentFocusedInnerChanged = useCallback((focused: boolean) => onCurrentFocusedInnerChanged(focused, "trigger"), [onCurrentFocusedInnerChanged]);
    const onPopupCurrentFocusedInnerChanged = useCallback((focused: boolean) => onCurrentFocusedInnerChanged(focused, "popup"), [onCurrentFocusedInnerChanged]);
    const { hasCurrentFocusReturn: triggerFocusReturn } = useHasCurrentFocus<TriggerType>({ hasCurrentFocusParameters: { onCurrentFocusedChanged: null, onCurrentFocusedInnerChanged: onTriggerCurrentFocusedInnerChanged }, refElementReturn: { getElement: getTriggerElement } });
    const { hasCurrentFocusReturn: popupFocusReturn } = useHasCurrentFocus<PopupType>({ hasCurrentFocusParameters: { onCurrentFocusedChanged: null, onCurrentFocusedInnerChanged: onPopupCurrentFocusedInnerChanged }, refElementReturn: { getElement: getPopupElement } });

    const {
        refElementPopupReturn,
        refElementSourceReturn,
        propsStablePopup,
        propsStableSource
    } = useDismiss<DismissListenerTypes, TriggerType, PopupType>({
        backdropDismissParameters: {
            dismissBackdropActive: true,     // we handle this ourselves, but for mobile devices with a sorta virtualish cursor this helps. 
            onDismissBackdrop: null
        },
        lostFocusDismissParameters: {
            dismissLostFocusActive: false,    // and it interferes with our own focus logic (or, our onClose there does)
            onDismissLostFocus: null,
        },

        dismissParameters: {
            dismissActive: openLocal,
            onDismiss: useStableCallback((e, reason) => {
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
        onPointerEnter: useCallback(() => { onHoverChanged(true, "popup") }, []),
        //onPointerLeave: useCallback(() => { onHoverChanged(false, "popup") }, [])
    }
    const otherTriggerProps = {
        onPointerEnter: useCallback(() => { onHoverChanged(true, "trigger") }, []),
        onPointerUp: useCallback(() => { onHoverChanged(false, "trigger") }, []),
        onClick: useStableCallback((e: MouseEvent) => {
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
                    focus(e.currentTarget as HTMLElement);
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
    }

    useGlobalHandler(document, "pointermove", !openLocal ? null : (e => {
        const popupElement = getPopupElement();
        const triggerElement = getTriggerElement();
        const mouseElement = e.target as Node | null;
        let overPopup = (popupElement?.contains(mouseElement))
        let overTrigger = (triggerElement?.contains(mouseElement))
        if (!overPopup && !overTrigger && inputState.current == 'hover') {
            onHoverChanged(false, "popup");
        }
    }), { capture: true, passive: true })

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
    }, [longPress, usesHover, usesLongPress])

    return {
        propsPopup: useMergedProps<PopupType>(popupRefProps, propsPopup, popupFocusReturn.propsStable, { role: "tooltip" }, otherPopupProps, propsStablePopup),
        propsTrigger: useMergedProps<TriggerType>(triggerRefProps, propsTrigger, triggerFocusReturn.propsStable, { onClick: useStableCallback(e => focus(e.currentTarget as Element as HTMLElement)) }, otherTriggerProps, propsStableSource),
        tooltipReturn: {
            getState,
            //stateIsFocus,
            //stateIsMouse
        }
    }
})

export interface UseTooltipReturnTypeSelf {
    getState(): TooltipState;
    //stateIsFocus(): boolean;
    //stateIsMouse(): boolean;
}

export interface UseTooltipReturnType<TriggerType extends Element, PopupType extends Element> {
    propsPopup: ElementProps<PopupType>;
    propsTrigger: ElementProps<TriggerType>;
    tooltipReturn: UseTooltipReturnTypeSelf
}