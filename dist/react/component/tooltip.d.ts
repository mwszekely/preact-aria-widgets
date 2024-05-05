import { Get4 } from "../props.js";
import { UseTooltipParameters, UseTooltipReturnType } from "../use-tooltip.js";
import { GenericComponentProps } from "./util.js";
export type TooltipProps<TriggerType extends Element, PopupType extends Element> = GenericComponentProps<UseTooltipReturnType<TriggerType, PopupType>, Get4<UseTooltipParameters<TriggerType, PopupType>, "escapeDismissParameters", "tooltipParameters", "activeElementParameters", "pressReturn">, "tooltipSemanticType" | "onStatus">;
export declare const Tooltip: <TriggerType extends Element, PopupType extends Element>({ onStatus, getDocument, parentDepth, hoverDelay, render, imperativeHandle, onActiveElementChange, onLastActiveElementChange, onWindowFocusedChange, tooltipSemanticType, usesLongPress, longPress, ...void1 }: TooltipProps<TriggerType, PopupType>) => import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=tooltip.d.ts.map