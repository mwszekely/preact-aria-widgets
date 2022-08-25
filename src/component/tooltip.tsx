import { forwardRef } from "preact/compat";
import { useAriaTooltip, UseTooltipParameters } from "use-tooltip";
import { h, Fragment, createContext, VNode, cloneElement, createElement } from "preact";
import { ElementToTag } from "props";


export interface TooltipProps<TT extends HTMLElement, TTT extends HTMLElement> extends UseTooltipParameters {
    children: VNode<any>;
    render?: (trigger: VNode<any>, tooltip: VNode<any>) => VNode;
    tagTooltip: ElementToTag<TT>;
    tagTrigger: ElementToTag<TTT>;
}

function defaultRender(trigger: VNode<any>, tooltip: VNode<any>): VNode {
    return (
        <>
            {trigger}
            {tooltip}
        </>
    )
}

function TooltipU<TT extends HTMLElement, TTT extends HTMLElement>({ focusDelay, mouseoutDelay, mouseoverDelay, children, render, tagTooltip, tagTrigger }: TooltipProps<TT, TTT>) {
    const { getIsOpen, isOpen, useTooltip, useTooltipTrigger } = useAriaTooltip({ focusDelay, mouseoutDelay, mouseoverDelay });
    const { useTooltipTriggerProps } = useTooltipTrigger();
    const { useTooltipProps } = useTooltip();
    return (
        <>
            {(render ?? defaultRender)(cloneElement(children, useTooltipTriggerProps({})), createElement(tagTooltip, useTooltipProps({}) as any))}
        </>
    )
}

export const Tooltip = forwardRef(TooltipU) as unknown as typeof TooltipU;
