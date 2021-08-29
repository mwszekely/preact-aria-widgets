import { h } from "preact";
import { useCallback, useEffect } from "preact/hooks";
import { useHasFocus } from "preact-prop-helpers/use-has-focus";
import { MergedProps, useMergedProps } from "preact-prop-helpers/use-merged-props";
import { useRandomId, UseRandomIdPropsReturnType, UseReferencedIdPropsReturnType } from "preact-prop-helpers/use-random-id";
import { useState } from "preact-prop-helpers/use-state";
import { useGenericLabel } from "./use-label";
import { useTimeout } from "preact-prop-helpers";

export type UseTooltipTrigger = <TriggerType extends Element>() => { useTooltipTriggerProps: <P extends h.JSX.HTMLAttributes<TriggerType>>({ ...props }: P) => UseReferencedIdPropsReturnType<MergedProps<TriggerType, { onPointerEnter: (e: MouseEvent) => void; onPointerLeave: (e: MouseEvent) => void; }, h.JSX.HTMLAttributes<TriggerType>>, "aria-describedby">; }
export type UseTooltip = <TooltipType extends Element>() => { useTooltipProps: <P extends h.JSX.HTMLAttributes<TooltipType>>({ ...props }: P) => UseRandomIdPropsReturnType<MergedProps<TooltipType, { onPointerEnter: (e: MouseEvent) => void; onPointerLeave: (e: MouseEvent) => void; }, P>>; }

export function useAriaTooltip({ mouseoverDelay }: { mouseoverDelay?: number }) {

    mouseoverDelay ??= 400;

    const [open, setOpen, getOpen] = useState(false);

    const [mouseoverIsValid, setMouseoverIsValid] = useState(false);

    const { useRandomIdProps: useTooltipIdProps, useReferencedIdProps: useTooltipIdReferencingProps } = useRandomId({ prefix: "aria-tooltip-" });

    const { focusedInner: triggerFocused, useHasFocusProps } = useHasFocus<Element>();
    const [triggerHasMouseover, setTriggerHasMouseover] = useState(false);
    const [tooltipHasMouseover, setTooltipHasMouseover] = useState(false);

    // Cover edge cases to let the cursor hover the tooltip even between mouse events.
    let shouldClose = !(mouseoverIsValid || triggerFocused);
    useTimeout({ timeout: 150, triggerIndex: shouldClose.toString(), callback: () => { if (shouldClose) setOpen(false); }})

    // Use a timeout to open with a delay if requested
    useTimeout({
        callback: () => {
            setMouseoverIsValid(tooltipHasMouseover || triggerHasMouseover);
        },
        // Force the delay to zero any time the tooltip is already focused
        timeout: triggerFocused ? 0 : (mouseoverDelay ?? 0),
        triggerIndex: `${tooltipHasMouseover || triggerHasMouseover}`
    })

    // ...but always close immediately upon request.
    useEffect(() => {
        if (!triggerHasMouseover && !tooltipHasMouseover)
            setMouseoverIsValid(false);
    }, [triggerHasMouseover, tooltipHasMouseover])

    const useTooltipTrigger: UseTooltipTrigger = useCallback(function useTooltipTrigger<TriggerType extends Element>() {

        function onPointerEnter(e: MouseEvent) {
            setTriggerHasMouseover(true);
        }

        function onPointerLeave(e: MouseEvent) {
            setTriggerHasMouseover(false);
        }


        function useTooltipTriggerProps<P extends h.JSX.HTMLAttributes<TriggerType>>({ ...props }: P) {
            props.tabIndex ??= 0;
            return useTooltipIdReferencingProps("aria-describedby")(useMergedProps<TriggerType>()({ onPointerEnter, onPointerLeave }, useHasFocusProps(props as any) as unknown as h.JSX.HTMLAttributes<TriggerType>));
        }

        return { useTooltipTriggerProps };

    }, [useTooltipIdReferencingProps]);

    const useTooltip: UseTooltip = useCallback(function useTooltip<TooltipType extends Element>() {

        function onPointerEnter(e: MouseEvent) {
            setTooltipHasMouseover(true);
        }

        function onPointerLeave(e: MouseEvent) {
            setTooltipHasMouseover(false);
        }

        function useTooltipProps<P extends h.JSX.HTMLAttributes<TooltipType>>({ ...props }: P) {
            props.role = "tooltip";
            return useTooltipIdProps(useMergedProps<TooltipType>()({ onPointerEnter, onPointerLeave }, props));
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
