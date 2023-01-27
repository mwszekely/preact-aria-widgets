import { h } from "preact";
import { DismissListenerTypes, findFirstFocusable, findFirstTabbable, returnFalse, useDismiss, UseEscapeDismissParameters, useGlobalHandler, useHasCurrentFocus, UseHasCurrentFocusParameters, useMergedProps, usePassiveState, useRandomId, useRefElement, UseRefElementReturnType, useStableCallback, useState, useTimeout } from "preact-prop-helpers";
import { useCallback, useEffect, useRef } from "preact/hooks";
import { debugLog, Prefices } from "./props";

export interface UseTooltipTriggerParameters<TriggerType extends Element> {
    refElementReturn: Required<Pick<UseRefElementReturnType<TriggerType>["refElementReturn"], "getElement">>
}
export type UseTooltipTrigger<TriggerType extends Element> = (args: UseTooltipTriggerParameters<TriggerType>) => {
    hasCurrentFocusReturnType: Required<Pick<UseHasCurrentFocusParameters<TriggerType>["hasCurrentFocusParameters"], "onCurrentFocusedInnerChanged">>

    useTooltipTriggerProps: ({ ...props }: h.JSX.HTMLAttributes<TriggerType>) => h.JSX.HTMLAttributes<TriggerType>
};
export interface UseTooltipParameters<TooltipType extends Element> {
    tooltipParameters: {
        mouseoverDelay?: number;
        mouseoutToleranceDelay?: number;
        focusDelay?: number;
        /**
         * This is whether `aria-describedby` or `aria-labelledby` is used.
         * 
         * Certain situations require one or the other, so you need to specify for each circumstance. 
         */
        tooltipSemanticType: "label" | "description";
    },
    escapeDismissParameters: Pick<UseEscapeDismissParameters<TooltipType>["escapeDismissParameters"], "getWindow" | "parentDepth">
}
export type UseTooltip<TriggerType extends HTMLElement | SVGElement, TooltipType extends Element> = (args: UseTooltipParameters<TooltipType>) => UseTooltipReturnType<TriggerType, TooltipType>;
export interface UseTooltipReturnType<TriggerType extends Element, PopupType extends Element> {
    tooltipReturn: {
        isOpen: boolean;
        displayReason: null | "focus" | "hover-trigger" | "hover-tooltip";
        getDisplayReason(): null |"hover-trigger" | "hover-tooltip" | "focus";
        isShowing: boolean;
        getIsOpen: () => boolean;
    }
    propsPopup: h.JSX.HTMLAttributes<PopupType>;
    propsTrigger: h.JSX.HTMLAttributes<TriggerType>;
}



export function useTooltip<TriggerType extends Element, PopupType extends Element>({ tooltipParameters: { mouseoverDelay, mouseoutToleranceDelay, focusDelay, tooltipSemanticType }, escapeDismissParameters }: UseTooltipParameters<PopupType>): UseTooltipReturnType<TriggerType, PopupType> {
    debugLog("useTooltip");

    mouseoverDelay ??= 400;
    mouseoutToleranceDelay ??= 500;
    focusDelay ??= 1;

    const [displayReason, setDisplayReason, getDisplayReason] = useState<null | "focus" | "hover-trigger" | "hover-tooltip">(null);

    // The escape key should close tooltips, but do nothing else.
    // (i.e. closing a tooltip in a dialog MUST NOT close the dialog too)
    // TODO: Tooltips are, effectively, always the topmost component,
    // so we can just have them listen to and swallow all "Escape"
    // key presses before anyone else. For a more general popup,
    // or a tooltip in a tooltip (!!) a different solution would be needed.
    /*useGlobalHandler(document, "keydown", (e: KeyboardEvent) => {
        if (getOpen() && e.key === "Escape" && !e.defaultPrevented) {
            e.preventDefault();
            e.stopImmediatePropagation();
            setOpen(false);
            setHoverState("hidden");
            setTriggerFocused(false);
            setTooltipFocused(false);
            setTriggerFocusedDelayCorrected(false);
            setTooltipFocusedDelayCorrected(false);
        }
    }, { capture: true });*/

    const [open, setOpen, getOpen] = useState(false);

    let {
        propsReferencer: propsTrigger,
        propsSource: propsPopup
    } = useRandomId<PopupType, TriggerType>({ randomIdParameters: { prefix: Prefices.tooltip, otherReferencerProp: (tooltipSemanticType == "description" ? "aria-describedby" : "aria-labelledby") } });

    const { refElementReturn: { getElement: getTriggerElement, propsStable: triggerRefProps } } = useRefElement<TriggerType>({ refElementParameters: {} });
    const { refElementReturn: { getElement: getPopupElement, propsStable: popupRefProps } } = useRefElement<PopupType>({ refElementParameters: {} });

    const [, setTriggerFocused] = usePassiveState(useStableCallback((focused: boolean) => {
        if (focused) {
            if (getTriggerHover())
                return;
        }
        setDisplayReason("focus");
        const delay = focused ? focusDelay : 1;
        if (delay != null && isFinite(delay)) {
            const handle = setTimeout(() => setTriggerFocusedDelayCorrected(focused), focused ? focusDelay : 1);
            return () => clearTimeout(handle);
        }
    }), returnFalse);
    const [, setTooltipFocused] = usePassiveState(useStableCallback((focused: boolean) => {
        const delay = focused ? focusDelay : 1;
        if (delay != null && isFinite(delay)) {
            const handle = setTimeout(() => setTooltipFocusedDelayCorrected(focused), delay);
            return () => clearTimeout(handle);
        }
    }), returnFalse);
    const onHoverChange = useStableCallback(function onHoverChange(triggerHovering: boolean, tooltipHovering: boolean) {
        let hovering = (triggerHovering || tooltipHovering);
        if (hovering) {
            if (tooltipHovering)
                setDisplayReason("hover-tooltip");
            else if (triggerHovering)
                setDisplayReason("hover-trigger");
            switch (hoverState) {
                case "hiding":
                    setHoverState("shown");
                    break;
                case "hidden":
                    setHoverState("showing2");
                    break;
            }
        }
        else {
            switch (hoverState) {
                case "shown": {
                    // The mouse has left the trigger, but delay truly hiding it for a moment
                    console.log("Hover: hiding (from shown)");
                    setHoverState("hiding");
                    break;
                    //const handle = setTimeout(() => { console.log("setHoverState(hidden)"); setHoverState("hidden");}, mouseoverDelay);
                    //return () => clearTimeout(handle);
                }
                case "showing2": {
                    // During a mouseover delay, when we mouseout,
                    // just reset the timer
                    console.log("Hover: hidden (from showing2)");
                    setHoverState("hidden");
                    break;
                }
            }
        }
    })

    const [getTriggerHover, setTriggerHover] = usePassiveState<boolean, never>(useStableCallback(hovering => { onHoverChange(hovering, getTooltipHover()); }), returnFalse);
    const [getTooltipHover, setTooltipHover] = usePassiveState<boolean, never>(useStableCallback(hovering => { onHoverChange(getTriggerHover(), hovering); }), returnFalse);
    const [triggerFocusedDelayCorrected, setTriggerFocusedDelayCorrected] = useState(false);
    const [hoverState, setHoverState] = useState<"hidden" | "showing2" | "shown" | "hiding">("hidden");


    useTimeout({
        triggerIndex: hoverState,
        timeout: (hoverState == "showing2") ? mouseoverDelay : null,
        callback: () => {
            if (hoverState == "showing2") {
                setHoverState("shown");
            }
        }
    })



    useTimeout({
        triggerIndex: hoverState,
        timeout: (hoverState == "hiding") ? mouseoutToleranceDelay : null,
        callback: () => {
            if (hoverState == "hiding") {
                setHoverState("hidden");
            }
        }
    })

    //const [triggerHoverDelayCorrected, setTriggerHoverDelayCorrected] = useState(false);
    const [tooltipFocusedDelayCorrected, setTooltipFocusedDelayCorrected] = useState(false);
    //const [tooltipHoverDelayCorrected, setTooltipHoverDelayCorrected] = useState(false);

    const hoverDelayCorrected = (hoverState == "shown");
    useEffect(() => {
        setOpen(triggerFocusedDelayCorrected || hoverDelayCorrected || tooltipFocusedDelayCorrected);
    }, [triggerFocusedDelayCorrected || hoverDelayCorrected || tooltipFocusedDelayCorrected]);



    debugLog("useTooltipTrigger");

    useGlobalHandler(document, "pointermove", e => {
        const popupElement = getPopupElement();
        const triggerElement = getTriggerElement();
        const mouseElement = e.target as Node | null;
        if (!(popupElement?.contains(mouseElement))) {
            setTooltipHover(false);
        }
        if (!(triggerElement?.contains(mouseElement))) {
            setTriggerHover(false);
        }
    }, { capture: true, passive: true })

    /*useGlobalHandler(document, "pointermove", e => {
        const target = (e.target as HTMLElement);
        setTriggerHover(target == getTriggerElement() as Node || !!getTriggerElement()?.contains(target));
    }, { capture: true });

    useGlobalHandler(document, "pointermove", e => {
        const target = (e.target as HTMLElement);
        setTooltipHover(target == getPopupElement() as Node || !!getPopupElement()?.contains(target));
    }, { capture: true });*/

    function onTouchEnd(e: TouchEvent) {
        (e.target as any).focus?.();
    }


    const { hasCurrentFocusReturn } = useHasCurrentFocus<TriggerType>({ hasCurrentFocusParameters: { onCurrentFocusedInnerChanged: setTriggerFocused, onCurrentFocusedChanged: null }, refElementReturn: { getElement: getTriggerElement } });

    const {
        refElementPopupReturn,
        refElementSourceReturn
    } = useDismiss<DismissListenerTypes, TriggerType, PopupType>({
        dismissParameters: {
            closeOnBackdrop: true,
            closeOnEscape: true,
            closeOnLostFocus: true,
            open,
            onClose: useStableCallback(() => {
                setHoverState("hidden");
                setTooltipFocused(false);
                setTriggerFocused(false);
            }),
        },
        escapeDismissParameters,
    });

    const debugHasFoundFocusable = useRef(false);
    useEffect(() => {
        if (debugHasFoundFocusable.current == true)
            return;

        if (open) {
            const element = getTriggerElement();
            if (element) {
                const firstTabbable = findFirstTabbable(element);
                if (firstTabbable) {
                    debugHasFoundFocusable.current = true;
                }
                else {
                    const firstFocusable = findFirstFocusable(element);
                    if (!firstFocusable)
                        console.error(`The following tooltip source is not focusable/does not contain a focusable element. If there isn't a button or other focusable element within this one, add tabIndex=0.`, element);
                }
            }
        }
    }, [open])

    debugLog("useTooltipTooltip");

    const { hasCurrentFocusReturn: { propsStable: propsFocusPopup } } = useHasCurrentFocus<PopupType>({
        hasCurrentFocusParameters: { onCurrentFocusedChanged: null, onCurrentFocusedInnerChanged: useStableCallback((focused) => { setTooltipFocused(focused); }) },
        refElementReturn: { getElement: getPopupElement }
    });

    const otherPopupProps = {
        onPointerEnter: useCallback(() => { setTooltipHover(true) }, []),
        onPointerLeave: useCallback(() => { setTooltipHover(false) }, [])
    }
    const otherTriggerProps = {
        onPointerEnter: useCallback(() => { setTriggerHover(true) }, []),
        onPointerLeave: useCallback(() => { setTriggerHover(false) }, [])
    }

    return {
        propsPopup: useMergedProps<PopupType>(popupRefProps, propsPopup, propsFocusPopup, { role: "tooltip" }, otherPopupProps, refElementPopupReturn.propsStable),
        propsTrigger: useMergedProps<TriggerType>(triggerRefProps, propsTrigger, hasCurrentFocusReturn.propsStable, { onTouchEnd }, otherTriggerProps, refElementSourceReturn.propsStable),
        tooltipReturn: {
            isOpen: open,
            isShowing: (tooltipFocusedDelayCorrected || (hoverState == "showing2" || hoverState == "shown")),
            displayReason,
            getDisplayReason,
            getIsOpen: getOpen
        }
    }
}

export interface UseTooltipPopupParameters<PopupType extends Element> {
    refElementReturn: Required<Pick<UseRefElementReturnType<PopupType>["refElementReturn"], "getElement">>
}
