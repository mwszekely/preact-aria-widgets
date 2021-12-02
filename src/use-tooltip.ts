import { h } from "preact";
import { MergedProps, useHasFocus, UseHasFocusPropsReturnType, useMergedProps, useRandomId, UseRandomIdPropsReturnType, useRefElement, UseReferencedIdPropsReturnType, useState, useTimeout } from "preact-prop-helpers";
import { useCallback, useEffect } from "preact/hooks";
import { usePressEventHandlers } from "./use-button";

export type UseTooltipTrigger = <TriggerType extends Element>() => { useTooltipTriggerProps: <P extends h.JSX.HTMLAttributes<TriggerType>>({ ...props }: P) => UseReferencedIdPropsReturnType<MergedProps<TriggerType, { onPointerEnter: (e: MouseEvent) => void; onPointerLeave: (e: MouseEvent) => void; }, h.JSX.HTMLAttributes<TriggerType>>, "aria-describedby">; }
export type UseTooltip = <TooltipType extends Element>() => { useTooltipProps: <P extends h.JSX.HTMLAttributes<TooltipType>>({ ...props }: P) => UseRandomIdPropsReturnType<UseHasFocusPropsReturnType<TooltipType, MergedProps<TooltipType, { onPointerEnter: (e: MouseEvent) => void; onPointerLeave: (e: MouseEvent) => void; }, P>>>; }

export function useAriaTooltip({ mouseoverDelay, mouseoutDelay }: { mouseoverDelay?: number, mouseoutDelay?: number }) {

    mouseoverDelay ??= 400;
    mouseoutDelay ??= 40;

    const [open, setOpen, getOpen] = useState(false);

    // Used to keep track of if we're hoving over the trigger when correcting for the given delays.
    const [hasDelayCorrectedMouseover, setHasDelayCorrectedMouseover] = useState(false);

    const { useRandomIdProps: useTooltipIdProps, useReferencedIdProps: useTooltipIdReferencingProps } = useRandomId({ prefix: "aria-tooltip-" });

    const [triggerFocusedInner, setTriggerFocusedInner, getTriggerFocusedInner] = useState(false);
    const [triggerHasMouseover, setTriggerHasMouseover] = useState(false);
    const [tooltipHasMouseover, setTooltipHasMouseover] = useState(false);
    const [tooltipHasFocus, setTooltipHasFocus] = useState(false);

    const triggerIndex = !!(+triggerHasMouseover + +tooltipHasMouseover + +tooltipHasFocus);
    const tooltipShouldBeShown = (triggerHasMouseover || tooltipHasMouseover || tooltipHasFocus);

    // Activate on the usual delay for mouseover
    useTimeout({
        timeout: mouseoverDelay,
        triggerIndex,
        callback: () => {
            setHasDelayCorrectedMouseover(tooltipShouldBeShown);
        }
    });

    // Forcibly deactivate almost immediately on mouseout
    useTimeout({
        timeout: mouseoutDelay,
        triggerIndex,
        callback: () => {
            if (!tooltipShouldBeShown)
                setHasDelayCorrectedMouseover(tooltipShouldBeShown);
        }
    });

    // If we have a (delay-corrected) mouseover or we're focused,
    // show the tooltip.
    useEffect(() => {
        setOpen(hasDelayCorrectedMouseover || triggerFocusedInner);
    }, [hasDelayCorrectedMouseover, triggerFocusedInner])

    const useTooltipTrigger: UseTooltipTrigger = useCallback(function useTooltipTrigger<TriggerType extends Element>() {

        function onPointerEnter(e: MouseEvent) {
            setTriggerHasMouseover(true);
        }

        function onPointerLeave(e: MouseEvent) {
            setTriggerHasMouseover(false);
        }

        const { useHasFocusProps } = useHasFocus<TriggerType>({ onFocusedInnerChanged: setTriggerFocusedInner })


        function useTooltipTriggerProps<P extends h.JSX.HTMLAttributes<TriggerType>>({ ...props }: P) {
            // Note: Though it's important to make sure that focusing activates a tooltip,
            // it's perfectly reasonable that a child element will be the one that's focused,
            // not this one, so we don't set tabIndex=0
            props.tabIndex ??= -1;
            return useTooltipIdReferencingProps("aria-describedby")(
                useHasFocusProps(
                    usePressEventHandlers<TriggerType>((e) => { (e as any).target.focus(); }, undefined)(
                        useMergedProps<TriggerType>()({ onPointerEnter, onPointerLeave }, (props as any) as unknown as h.JSX.HTMLAttributes<TriggerType>)
                    )
                )
            );
        }

        return { useTooltipTriggerProps };

    }, [useTooltipIdReferencingProps]);

    const useTooltip = useCallback(function useTooltip<TooltipType extends Element>() {

        function onPointerEnter(e: MouseEvent) {
            setTooltipHasMouseover(true);
        }

        function onPointerLeave(e: MouseEvent) {
            setTooltipHasMouseover(false);
        }

        function useTooltipProps<P extends h.JSX.HTMLAttributes<TooltipType>>({ ...props }: P) {
            const { useHasFocusProps } = useHasFocus<TooltipType>({ onFocusedInnerChanged: setTooltipHasFocus })
            return useTooltipIdProps(useHasFocusProps(useMergedProps<TooltipType>()({ onPointerEnter, onPointerLeave }, props)));
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
