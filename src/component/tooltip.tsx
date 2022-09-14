import { h, VNode } from "preact";
import { forwardRef } from "preact/compat";
import { useAriaTooltip, UseTooltipParameters, UseTooltipReturnTypeInfo } from "../use-tooltip";

export interface TooltipProps<TT extends Element, TTT extends Element> extends UseTooltipParameters {
    render?: (info: UseTooltipReturnTypeInfo, triggerProps: h.JSX.HTMLAttributes<TT>, tooltipProps: h.JSX.HTMLAttributes<TTT>) => VNode;
}

function defaultRender(info: UseTooltipReturnTypeInfo, triggerProps: h.JSX.HTMLAttributes<any>, tooltipProps: h.JSX.HTMLAttributes<any>) {
    return (
        <>
            <div {...triggerProps} />
            <div {...tooltipProps} />
        </>
    )
}

function TooltipU<TT extends Element, TTT extends Element>({ focusDelay, mouseoutDelay, mouseoverDelay, render }: TooltipProps<TT, TTT>) {
    const { useTooltip, useTooltipTrigger, ...info } = useAriaTooltip<TT, TTT>({ focusDelay, mouseoutDelay, mouseoverDelay });
    const { useTooltipTriggerProps } = useTooltipTrigger();
    const { useTooltipProps } = useTooltip();
    return (
        <>
            {(render ?? defaultRender)(info, useTooltipTriggerProps({}), useTooltipProps({}) as any)}
        </>
    )
}

export const Tooltip = forwardRef(TooltipU) as unknown as typeof TooltipU;
