import { h } from "preact";
import { DismissListenerTypes, ElementProps, focus, monitorCallCount, returnNull, useDismiss, UseEscapeDismissParameters, useGlobalHandler, useHasCurrentFocus, useMergedProps, usePassiveState, useRandomId, useRefElement, useStableCallback, useState } from "preact-prop-helpers";
import { useCallback, useRef } from "preact/hooks";
import { Prefices } from "./props.js";

export type TooltipStatus = "hover" | "focus" | null;

export interface UseTooltipParameters<TriggerType extends Element, PopupType extends Element> {
    tooltipParameters: {

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
    }
    escapeDismissParameters: Pick<UseEscapeDismissParameters<PopupType>["escapeDismissParameters"], "getWindow" | "parentDepth">
}

export type TooltipState = `${"hovering" | "focused"}-${"popup" | "trigger"}` | null;

export function useTooltip<TriggerType extends Element, PopupType extends Element>({ tooltipParameters: { onStatus, tooltipSemanticType, hoverDelay }, escapeDismissParameters }: UseTooltipParameters<TriggerType, PopupType>): UseTooltipReturnType<TriggerType, PopupType> {
    monitorCallCount(useTooltip);
    
    /**
     * Whether the hover/focus-popup/trigger state we have results in us showing this tooltip.
     * 
     * This is used purely to attach global event handlers that should only be there when the tooltip is open (e.g. `useDismiss`)
     */
    const [openLocal, setOpenLocal] = useState(false);

    const [getState, setState] = usePassiveState<TooltipState, never>(useStableCallback((nextState, prevState) => {
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

    let {
        propsReferencer: propsTrigger,
        propsSource: propsPopup
    } = useRandomId<PopupType, TriggerType>({ randomIdParameters: { prefix: Prefices.tooltip, otherReferencerProp: (tooltipSemanticType == "description" ? "aria-describedby" : "aria-labelledby") } });

    const { refElementReturn: { getElement: getTriggerElement }, propsStable: triggerRefProps } = useRefElement<TriggerType>({ refElementParameters: {} });
    const { refElementReturn: { getElement: getPopupElement }, propsStable: popupRefProps } = useRefElement<PopupType>({ refElementParameters: {} });

    const stateIsMouse = useCallback(() => (getState()?.startsWith("h") || false), []);
    const stateIsFocus = useCallback(() => (getState()?.startsWith("f") || false), []);

    let hoverTimeoutHandle = useRef(null as number | null);
    const onHoverChanged = useStableCallback((hovering: boolean, which: "popup" | "trigger") => {
        if (hoverTimeoutHandle.current)
            clearTimeout(hoverTimeoutHandle.current);

        if (hovering) {
            hoverTimeoutHandle.current = setTimeout(() => {
                setState(`hovering-${which}`);
                hoverTimeoutHandle.current = null;
            }, hoverDelay || 0)
        }
        else {
            setState(null);
        }
    })

    const onCurrentFocusedInnerChanged = useCallback((focused: boolean, which: "popup" | "trigger") => {
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
        dismissParameters: {
            closeOnBackdrop: true,     // we handle this ourselves, but for mobile devices with a sorta virtualish cursor this helps. 
            closeOnLostFocus: false,    // and it interferes with our own focus logic (or, our onClose there does)
            closeOnEscape: true,
            open: openLocal,
            onClose: useStableCallback((reason) => {
                setState(null);
            }),
        },
        escapeDismissParameters,
    });



    const otherPopupProps = {
        onPointerEnter: useCallback(() => { onHoverChanged(true, "popup") }, []),
        //onPointerLeave: useCallback(() => { onHoverChanged(false, "popup") }, [])
    }
    const otherTriggerProps = {
        onPointerEnter: useCallback(() => { onHoverChanged(true, "trigger") }, []),
        onClick: useCallback((e: MouseEvent) => { if (e.currentTarget && "focus" in e.currentTarget) focus(e.currentTarget as HTMLElement); }, []),
        //onPointerLeave: useCallback(() => { onHoverChanged(false, "trigger") }, [])
    }

    useGlobalHandler(document, "pointermove", !openLocal ? null : (e => {
        const popupElement = getPopupElement();
        const triggerElement = getTriggerElement();
        const mouseElement = e.target as Node | null;
        let overPopup = (popupElement?.contains(mouseElement))
        let overTrigger = (triggerElement?.contains(mouseElement))
        if (!overPopup && !overTrigger && stateIsMouse()) {
            onHoverChanged(false, "popup");
        }
    }), { capture: true, passive: true })


    return {
        propsPopup: useMergedProps<PopupType>(popupRefProps, propsPopup, popupFocusReturn.propsStable, { role: "tooltip" }, otherPopupProps, propsStablePopup),
        propsTrigger: useMergedProps<TriggerType>(triggerRefProps, propsTrigger, triggerFocusReturn.propsStable, { onClick: useStableCallback(e => focus(e.currentTarget as Element as HTMLElement)) }, otherTriggerProps, propsStableSource),
        tooltipReturn: {
            getState,
            stateIsFocus,
            stateIsMouse
        }
    }
}

export interface UseTooltipReturnType<TriggerType extends Element, PopupType extends Element> {
    propsPopup: ElementProps<PopupType>;
    propsTrigger: ElementProps<TriggerType>;
    tooltipReturn: {
        getState(): TooltipState;
        stateIsFocus(): boolean;
        stateIsMouse(): boolean;
    }
}