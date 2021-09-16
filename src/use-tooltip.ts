import { h } from "preact";
import { MergedProps, useHasFocus, useMergedProps, useRandomId, UseRandomIdPropsReturnType, UseReferencedIdPropsReturnType, useState, useTimeout } from "preact-prop-helpers";
import { useCallback, useEffect } from "preact/hooks";

export type UseTooltipTrigger = <TriggerType extends Element>() => { useTooltipTriggerProps: <P extends h.JSX.HTMLAttributes<TriggerType>>({ ...props }: P) => UseReferencedIdPropsReturnType<MergedProps<TriggerType, { onPointerEnter: (e: MouseEvent) => void; onPointerLeave: (e: MouseEvent) => void; }, h.JSX.HTMLAttributes<TriggerType>>, "aria-describedby">; }
export type UseTooltip = <TooltipType extends Element>() => { useTooltipProps: <P extends h.JSX.HTMLAttributes<TooltipType>>({ ...props }: P) => UseRandomIdPropsReturnType<MergedProps<TooltipType, { onPointerEnter: (e: MouseEvent) => void; onPointerLeave: (e: MouseEvent) => void; }, P>>; }

export function useAriaTooltip({ mouseoverDelay }: { mouseoverDelay?: number }) {

    mouseoverDelay ??= 400;

    const [open, setOpen, getOpen] = useState(false);

    const [hasAnyMouseover, setHasAnyMouseover] = useState(false);
    //const [mouseoverIsValid, setMouseoverIsValid] = useState(false);

    const { useRandomIdProps: useTooltipIdProps, useReferencedIdProps: useTooltipIdReferencingProps } = useRandomId({ prefix: "aria-tooltip-" });

    const { focusedInner: triggerFocused, useHasFocusProps } = useHasFocus<Element>();
    const [triggerHasMouseover, setTriggerHasMouseover] = useState(false);
    const [tooltipHasMouseover, setTooltipHasMouseover] = useState(false);

    
    useTimeout({
        timeout: mouseoverDelay,
        triggerIndex: (+triggerHasMouseover + +tooltipHasMouseover),
        callback: () => {
            if (triggerHasMouseover || tooltipHasMouseover)
                setHasAnyMouseover(true);
        }
    });

    useTimeout({
        timeout: 50,
        triggerIndex: (+triggerHasMouseover + +tooltipHasMouseover),
        callback: () => {
            if (!triggerHasMouseover && !tooltipHasMouseover)
                setHasAnyMouseover(false)
        }
    });

    useEffect(() => {
        setOpen(hasAnyMouseover || triggerFocused);
    }, [hasAnyMouseover, triggerFocused])

    const useTooltipTrigger: UseTooltipTrigger = useCallback(function useTooltipTrigger<TriggerType extends Element>() {

        function onPointerEnter(e: MouseEvent) {
            setTriggerHasMouseover(true);
        }

        function onPointerLeave(e: MouseEvent) {
            setTriggerHasMouseover(false);
        }


        function useTooltipTriggerProps<P extends h.JSX.HTMLAttributes<TriggerType>>({ ...props }: P) {
            // Note: Though it's important to make sure that focusing activates a tooltip,
            // it's perfectly reasonable that a child element will be the one that's focused,
            // not this one, so we don't set tabIndex=0

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
