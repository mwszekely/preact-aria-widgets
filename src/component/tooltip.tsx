import { createElement, h, VNode } from "preact";
import { UseActiveElementParameters } from "preact-prop-helpers";
import { memo } from "preact/compat";
import { ElementToTag, PropModifier } from "props";
import { useTooltip, UseTooltipParameters, UseTooltipReturnTypeInfo } from "../use-tooltip";
import { defaultRenderPortal } from "./dialog";

export interface TooltipProps<TriggerType extends Element, PopupType extends Element> extends UseTooltipParameters {
    getDocument: UseActiveElementParameters["getDocument"];
    getWindow?: UseActiveElementParameters["getWindow"];
    render(info: UseTooltipReturnTypeInfo, modifyTriggerProps: PropModifier<TriggerType>, modifyTooltipProps: PropModifier<PopupType>): VNode;
}

export function defaultRenderTooltip<TriggerType extends Element, PopupType extends Element>({ tagTooltip, tagTrigger, makeTooltipProps, makeTriggerProps, portalId }: { portalId: string, tagTrigger: ElementToTag<TriggerType>, tagTooltip: ElementToTag<PopupType>, makeTriggerProps: (info: UseTooltipReturnTypeInfo) => h.JSX.HTMLAttributes<TriggerType>, makeTooltipProps: (info: UseTooltipReturnTypeInfo) => h.JSX.HTMLAttributes<PopupType> }) {
    return function (info: UseTooltipReturnTypeInfo, modifyPropsTrigger: PropModifier<TriggerType>, modifyPropsTooltip: PropModifier<PopupType>) {
        return (
            <>
                {createElement(tagTrigger as never, modifyPropsTrigger(makeTriggerProps(info)))}
                {defaultRenderPortal({
                    portalId,
                    children: createElement(tagTooltip as never, modifyPropsTooltip(makeTooltipProps(info)))
                })}
            </>
        )
    }
}

export const Tooltip = memo(function TooltipU<TriggerType extends Element, PopupType extends Element>({ focusDelay, mouseoutToleranceDelay, mouseoverDelay, getDocument, getWindow, render }: TooltipProps<TriggerType, PopupType>) {
    const { useTooltipPopup, useTooltipTrigger, ...info } = useTooltip<TriggerType, PopupType>({ focusDelay, mouseoutToleranceDelay, mouseoverDelay });
    const { useTooltipTriggerProps } = useTooltipTrigger({ hasFocus: { getDocument, getWindow } });
    const { useTooltipPopupProps } = useTooltipPopup({ hasFocus: { getDocument, getWindow } });
    return render(info, useTooltipTriggerProps, useTooltipPopupProps);
})

