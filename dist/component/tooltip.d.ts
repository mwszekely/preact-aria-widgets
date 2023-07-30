import { Ref } from "preact";
import { Get3 } from "../props.js";
import { UseTooltipParameters, UseTooltipReturnType } from "../use-tooltip.js";
import { GenericComponentProps } from "./util.js";
export type TooltipProps<TriggerType extends Element, PopupType extends Element> = GenericComponentProps<UseTooltipReturnType<TriggerType, PopupType>, Get3<UseTooltipParameters<TriggerType, PopupType>, "escapeDismissParameters", "tooltipParameters", "activeElementParameters">, "tooltipSemanticType" | "onStatus">;
export declare const Tooltip: <TriggerType extends Element, PopupType extends Element>({ onStatus, getDocument, parentDepth, hoverDelay, render, imperativeHandle, onActiveElementChange, onLastActiveElementChange, onWindowFocusedChange, tooltipSemanticType }: TooltipProps<TriggerType, PopupType>, ref?: Ref<any>) => import("preact").JSX.Element;
//# sourceMappingURL=tooltip.d.ts.map