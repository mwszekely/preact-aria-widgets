import { Ref, VNode } from "preact";
import { useImperativeHandle } from "preact/compat";
import { useTooltip, UseTooltipParameters, UseTooltipReturnType } from "../use-tooltip";
import { memoForwardRef } from "./util";

export interface TooltipProps<TriggerType extends Element, PopupType extends Element> extends UseTooltipParameters {
    render(info: UseTooltipReturnType<TriggerType, PopupType>): VNode;
    ref?: Ref<UseTooltipReturnType<TriggerType, PopupType>>;
}
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

export const Tooltip = memoForwardRef(function TooltipU<TriggerType extends Element, PopupType extends Element>({ focusDelay, mouseoutToleranceDelay, mouseoverDelay, render }: TooltipProps<TriggerType, PopupType>, ref?: Ref<any>) {
    const info = useTooltip<TriggerType, PopupType>({ focusDelay, mouseoutToleranceDelay, mouseoverDelay });
    useImperativeHandle(ref!, () => info);
    return render(info);
})

