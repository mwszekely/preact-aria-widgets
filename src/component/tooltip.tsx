import { Ref, VNode } from "preact";
import { useContext, useImperativeHandle } from "preact/compat";
import { useTooltip, UseTooltipParameters, UseTooltipReturnType } from "../use-tooltip";
import { memoForwardRef, ParentDepthContext, PartialExcept, useDefault } from "./util";


type Get<T, K extends keyof T> = T[K];

interface TooltipPropsBase<TriggerType extends Element, PopupType extends Element> extends Get<UseTooltipParameters<PopupType>, "escapeDismissParameters">, Get<UseTooltipParameters<PopupType>, "tooltipParameters"> {
    render(info: UseTooltipReturnType<TriggerType, PopupType>): VNode;
    ref?: Ref<UseTooltipReturnType<TriggerType, PopupType>>;
}

export type TooltipProps<TriggerType extends Element, PopupType extends Element> = PartialExcept<TooltipPropsBase<TriggerType, PopupType>, "render" | "tooltipSemanticType">
/*
export function defaultRenderTooltip<TriggerType extends Element, PopupType extends Element>({ tagTooltip, tagTrigger, makeTooltipProps, makeTriggerProps, portalId }: { portalId: string, tagTrigger: ElementToTag<TriggerType>, tagTooltip: ElementToTag<PopupType>, makeTriggerProps: (info: UseTooltipReturnType<TriggerType, PopupType>) => h.JSX.HTMLAttributes<TriggerType>, makeTooltipProps: (info: UseTooltipReturnType<TriggerType, PopupType>) => h.JSX.HTMLAttributes<PopupType> }) {
    return function (info: UseTooltipReturnType<TriggerType, PopupType>) {
        return (
            <>
                {createElement(tagTrigger as never, makeTriggerProps(info))}
                {defaultRenderPortal({
                    portalId,
                    children: createElement(tagTooltip as never, makeTooltipProps(info))
                })}
            </>
        )
    }
}*/

export const Tooltip = memoForwardRef(function TooltipU<TriggerType extends Element, PopupType extends Element>({ focusDelay, mouseoutToleranceDelay, mouseoverDelay, getWindow, parentDepth, render, tooltipSemanticType }: TooltipProps<TriggerType, PopupType>, ref?: Ref<any>) {

    const defaultParentDepth = useContext(ParentDepthContext);
    let myDepth = (parentDepth ?? defaultParentDepth) + 1;

    const info = useTooltip<TriggerType, PopupType>({
        escapeDismissParameters: {
            getWindow: useDefault("getWindow", getWindow),
            parentDepth: parentDepth ?? defaultParentDepth
        },
        tooltipParameters: {
            focusDelay,
            mouseoutToleranceDelay,
            mouseoverDelay,
            tooltipSemanticType
        }
    });

    useImperativeHandle(ref!, () => info);

    return (
        <ParentDepthContext.Provider value={myDepth}>
            {render(info)}
        </ParentDepthContext.Provider>
    );
})

