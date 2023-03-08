import { Ref, VNode } from "preact";
import { useContext, useImperativeHandle } from "preact/compat";
import { useTooltip, UseTooltipParameters, UseTooltipReturnType } from "../use-tooltip.js";
import { memoForwardRef, ParentDepthContext, PartialExcept, useDefault } from "./util.js";

type Get<T, K extends keyof T> = T[K];

interface TooltipPropsBase<TriggerType extends Element, PopupType extends Element> extends Get<UseTooltipParameters<TriggerType, PopupType>, "escapeDismissParameters">, Get<UseTooltipParameters<TriggerType, PopupType>, "tooltipParameters"> {
    render(info: UseTooltipReturnType<TriggerType, PopupType>): VNode;
    ref?: Ref<UseTooltipReturnType<TriggerType, PopupType>>;
}

export type TooltipProps<TriggerType extends Element, PopupType extends Element> = PartialExcept<TooltipPropsBase<TriggerType, PopupType>, "render" | "tooltipSemanticType" | "onStatus">

export const Tooltip = memoForwardRef(function TooltipU<TriggerType extends Element, PopupType extends Element>({ onStatus, getWindow, parentDepth, hoverDelay, render, tooltipSemanticType }: TooltipProps<TriggerType, PopupType>, ref?: Ref<any>) {

    const defaultParentDepth = useContext(ParentDepthContext);
    let myDepth = (parentDepth ?? defaultParentDepth) + 1;

    const info = useTooltip<TriggerType, PopupType>({
        escapeDismissParameters: {
            getWindow: useDefault("getWindow", getWindow),
            parentDepth: parentDepth ?? defaultParentDepth
        },
        tooltipParameters: {
            onStatus,
            tooltipSemanticType,
            hoverDelay: hoverDelay ?? null
        }
    });

    useImperativeHandle(ref!, () => info);

    return (
        <ParentDepthContext.Provider value={myDepth}>
            {render(info)}
        </ParentDepthContext.Provider>
    );
})

