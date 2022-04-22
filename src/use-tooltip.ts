import { h } from "preact";
import { MergedProps, useGlobalHandler, useHasFocus, UseHasFocusPropsReturnType, useMergedProps, usePassiveState, useRandomId, UseRandomIdPropsReturnType, useRefElement, UseReferencedIdPropsReturnType, useStableCallback, useState, useTimeout } from "preact-prop-helpers";
import { useCallback, useEffect } from "preact/hooks";

export type UseTooltipTrigger = <TriggerType extends Element>() => { useTooltipTriggerProps: <P extends h.JSX.HTMLAttributes<TriggerType>>({ ...props }: P) => UseReferencedIdPropsReturnType<MergedProps<TriggerType, { onPointerEnter: (e: MouseEvent) => void; onPointerLeave: (e: MouseEvent) => void; }, h.JSX.HTMLAttributes<TriggerType>>, "aria-describedby">; }
export type UseTooltip = <TooltipType extends Element>() => { useTooltipProps: <P extends h.JSX.HTMLAttributes<TooltipType>>({ ...props }: P) => UseRandomIdPropsReturnType<UseHasFocusPropsReturnType<TooltipType, MergedProps<TooltipType, { onPointerEnter: (e: MouseEvent) => void; onPointerLeave: (e: MouseEvent) => void; }, P>>>; }

function returnFalse() { return false; }

export function useAriaTooltip({ mouseoverDelay, mouseoutDelay, focusDelay }: { mouseoverDelay?: number, mouseoutDelay?: number, focusDelay?: number }) {

    mouseoverDelay ??= 400;
    mouseoutDelay ??= 40;
    focusDelay ??= 1;

    // The escape key should close tooltips, but do nothing else.
    // (i.e. closing a tooltip in a dialog MUST NOT close the dialog too)
    // TODO: Tooltips are, effectively, always the topmost component,
    // so we can just have them listen to and swallow all "Escape"
    // key presses before anyone else. For a more general popup,
    // or a tooltip in a tooltip (!!) a different solution would be needed.
    useGlobalHandler(document, "keydown", (e: KeyboardEvent) => {
        if (getOpen() && e.key === "Escape" && !e.defaultPrevented) {
            e.preventDefault();
            e.stopImmediatePropagation();
            setOpen(false);
            setTriggerHoverDelayCorrected(false);
            setTooltipHoverDelayCorrected(false);
            setTriggerFocusedDelayCorrected(false);
            setTooltipFocusedDelayCorrected(false);
        }
    }, { capture: true });

    const [open, setOpen, getOpen] = useState(false);

    const { useRandomIdProps: useTooltipIdProps, useReferencedIdProps: useTooltipIdReferencingProps } = useRandomId({ prefix: "aria-tooltip-" });

    const [getTriggerFocused, setTriggerFocused] = usePassiveState(useStableCallback((focused: boolean) => {
        const delay = focused ? focusDelay : 1;
        if (delay != null && isFinite(delay)) {
            let handle = setTimeout(() => setTriggerFocusedDelayCorrected(focused), focused ? focusDelay : 1);
            return () => clearTimeout(handle);
        }
    }), returnFalse);
    const [getTooltipFocused, setTooltipFocused] = usePassiveState(useStableCallback((focused: boolean) => {
        const delay = focused ? focusDelay : 1;
        if (delay != null && isFinite(delay)) {
            let handle = setTimeout(() => setTooltipFocusedDelayCorrected(focused), delay);
            return () => clearTimeout(handle);
        }
    }), returnFalse);
    const [getTriggerHover, setTriggerHover] = usePassiveState(useStableCallback((hovering: boolean) => {
        const delay = hovering ? mouseoverDelay : mouseoutDelay;
        if (delay != null && isFinite(delay)) {
            let handle = setTimeout(() => setTriggerHoverDelayCorrected(hovering), delay);
            return () => clearTimeout(handle);
        }
    }), returnFalse);
    const [getTooltipHover, setTooltipHover] = usePassiveState(useStableCallback((hovering: boolean) => {
        const delay = hovering ? mouseoverDelay : mouseoutDelay;
        if (delay != null && isFinite(delay)) {
            let handle = setTimeout(() => setTooltipHoverDelayCorrected(hovering), delay);
            return () => clearTimeout(handle);
        }
    }), returnFalse);
    const [triggerFocusedDelayCorrected, setTriggerFocusedDelayCorrected] = useState(false);
    const [triggerHoverDelayCorrected, setTriggerHoverDelayCorrected] = useState(false);
    const [tooltipFocusedDelayCorrected, setTooltipFocusedDelayCorrected] = useState(false);
    const [tooltipHoverDelayCorrected, setTooltipHoverDelayCorrected] = useState(false);

    useEffect(() => {
        setOpen(triggerFocusedDelayCorrected || triggerHoverDelayCorrected || tooltipFocusedDelayCorrected || tooltipHoverDelayCorrected);
    }, [triggerFocusedDelayCorrected || triggerHoverDelayCorrected || tooltipFocusedDelayCorrected || tooltipHoverDelayCorrected])

    const useTooltipTrigger: UseTooltipTrigger = useCallback(function useTooltipTrigger<TriggerType extends Element>() {

        useGlobalHandler(document, "pointermove", e => {
            let target = (e.target as HTMLElement);
            setTriggerHover(target == getElement() as Node || !!getElement()?.contains(target));
        }, { capture: true });

        function onTouchEnd(e: TouchEvent) {
            (e.target as any).focus();
        }

        const { useHasFocusProps, getElement } = useHasFocus<TriggerType>({ onFocusedInnerChanged: setTriggerFocused })


        function useTooltipTriggerProps<P extends h.JSX.HTMLAttributes<TriggerType>>({ ...props }: P) {
            // Note: Though it's important to make sure that focusing activates a tooltip,
            // it's perfectly reasonable that a child element will be the one that's focused,
            // not this one, so we don't set tabIndex=0
            props.tabIndex ??= -1;
            return useTooltipIdReferencingProps("aria-describedby")(
                useHasFocusProps(
                    useMergedProps<TriggerType>()({ onTouchEnd }, (props as any) as unknown as h.JSX.HTMLAttributes<TriggerType>)
                )
            );
        }

        return { useTooltipTriggerProps };

    }, [useTooltipIdReferencingProps]);

    const useTooltip = useCallback(function useTooltip<TooltipType extends Element>() {
        const { useHasFocusProps, getElement } = useHasFocus<TooltipType>({ onFocusedInnerChanged: setTooltipFocused })

        useGlobalHandler(document, "pointermove", e => {
            let target = (e.target as HTMLElement);
            setTooltipHover(target == getElement() as Node || !!getElement()?.contains(target));
        }, { capture: true });

        function useTooltipProps<P extends h.JSX.HTMLAttributes<TooltipType>>({ ...props }: P) {
            return useTooltipIdProps(useHasFocusProps(useMergedProps<TooltipType>()({ }, props)));
        }

        return { useTooltipProps };
    }, [useTooltipIdProps]);

    return {
        useTooltip,
        useTooltipTrigger,
        isOpen: open,
        getIsOpen: getOpen
    }
}
