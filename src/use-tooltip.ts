import { h } from "preact";
import { useCallback, useEffect } from "preact/hooks";
import { useHasFocus } from "preact-prop-helpers/use-has-focus";
import { MergedProps, useMergedProps } from "preact-prop-helpers/use-merged-props";
import { useRandomId, UseRandomIdPropsReturnType, UseReferencedIdPropsReturnType } from "preact-prop-helpers/use-random-id";
import { useState } from "preact-prop-helpers/use-state";
import { useGenericLabel } from "./use-label";
import { useTimeout } from "preact-prop-helpers";

export type UseTooltipTrigger = <TriggerType extends Element>() => { useTooltipSourceProps: <P extends h.JSX.HTMLAttributes<TriggerType>>({ ...props }: P) => UseReferencedIdPropsReturnType<MergedProps<TriggerType, { onMouseOver: (e: MouseEvent) => void; onMouseOut: (e: MouseEvent) => void; }, h.JSX.HTMLAttributes<TriggerType>>, "aria-describedby">; }
export type UseTooltip = <TooltipType extends Element>() => { useTooltipProps: <P extends h.JSX.HTMLAttributes<TooltipType>>({ ...props }: P) => UseRandomIdPropsReturnType<MergedProps<TooltipType, { onMouseOver: (e: MouseEvent) => void; onMouseOut: (e: MouseEvent) => void; }, P>>; }

export function useAriaTooltip({ mouseoverDelay }: { mouseoverDelay?: number }) {

    mouseoverDelay ??= 400;

    const [open, setOpen, getOpen] = useState(false);

    const [mouseoverIsValid, setMouseoverIsValid] = useState(false);

    const { useRandomIdProps: useTooltipIdProps, useReferencedIdProps: useTooltipIdReferencingProps } = useRandomId({ prefix: "aria-tooltip-" });

    const { focusedInner: triggerFocused, useHasFocusProps } = useHasFocus<Element>();
    const [triggerHasMouseover, setTriggerHasMouseover] = useState(false);
    const [tooltipHasMouseover, setTooltipHasMouseover] = useState(false);

    useEffect(() => { setOpen(mouseoverIsValid || triggerFocused); }, [mouseoverIsValid, triggerFocused])

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

        function onMouseOver(e: MouseEvent) {
            setTriggerHasMouseover(true);
        }

        function onMouseOut(e: MouseEvent) {
            setTriggerHasMouseover(false);
        }


        function useTooltipSourceProps<P extends h.JSX.HTMLAttributes<TriggerType>>({ ...props }: P) {
            props.tabIndex ??= 0;
            return useTooltipIdReferencingProps("aria-describedby")(useMergedProps<TriggerType>()({ onMouseOver, onMouseOut }, useHasFocusProps(props as any) as unknown as h.JSX.HTMLAttributes<TriggerType>));
        }

        return { useTooltipSourceProps };

    }, [useTooltipIdReferencingProps]);

    const useTooltip: UseTooltip = useCallback(function useTooltip<TooltipType extends Element>() {

        function onMouseOver(e: MouseEvent) {
            setTooltipHasMouseover(true);
        }

        function onMouseOut(e: MouseEvent) {
            setTooltipHasMouseover(false);
        }

        function useTooltipProps<P extends h.JSX.HTMLAttributes<TooltipType>>({ ...props }: P) {
            props.role = "tooltip";
            return useTooltipIdProps(useMergedProps<TooltipType>()({ onMouseOver, onMouseOut }, props));
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
