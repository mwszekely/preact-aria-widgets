import { Ref, VNode } from "preact";
import { UseTooltipParameters, UseTooltipReturnType } from "../use-tooltip.js";
import { PartialExcept } from "./util.js";
type Get<T, K extends keyof T> = T[K];
interface TooltipPropsBase<TriggerType extends Element, PopupType extends Element> extends Get<UseTooltipParameters<TriggerType, PopupType>, "escapeDismissParameters">, Get<UseTooltipParameters<TriggerType, PopupType>, "tooltipParameters"> {
    render(info: UseTooltipReturnType<TriggerType, PopupType>): VNode;
    ref?: Ref<UseTooltipReturnType<TriggerType, PopupType>>;
}
export type TooltipProps<TriggerType extends Element, PopupType extends Element> = PartialExcept<TooltipPropsBase<TriggerType, PopupType>, "render" | "tooltipSemanticType" | "onStatus">;
export declare const Tooltip: <TriggerType extends Element, PopupType extends Element>({ onStatus, getWindow, parentDepth, render, tooltipSemanticType }: TooltipProps<TriggerType, PopupType>, ref?: Ref<any>) => import("preact").JSX.Element;
export {};
//# sourceMappingURL=tooltip.d.ts.map