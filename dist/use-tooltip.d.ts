import { ElementProps, TargetedPick, UseDismissParameters, UseEscapeDismissParameters, UsePressReturnType } from "preact-prop-helpers";
export type TooltipStatus = "hover" | "focus" | null;
export interface UseTooltipParametersSelf {
    /**
     * Called when the tooltip's content should be shown or hidden
     * or when the manner in which it's shown should be changed.
     *
     * This can change from `"hover"` to `"mouse"`, but never the other way around.
     *
     * `"null"` means the tooltip should be hidden
     *
     * @param status C
     */
    onStatus(status: TooltipStatus): void;
    /**
     * This is whether `aria-describedby` or `aria-labelledby` is used.
     *
     * Certain situations require one or the other, so you need to specify for each circumstance.
     */
    tooltipSemanticType: "label" | "description";
    /**
     * How long should the tooltip wait to show itself if it was shown via hover?
     *
     * Default is 0.
     */
    hoverDelay: number | null;
    usesLongPress: boolean;
}
export interface UseTooltipParameters<TriggerType extends Element, PopupType extends Element> extends TargetedPick<UseEscapeDismissParameters<PopupType, true>, "escapeDismissParameters", "getDocument" | "parentDepth">, TargetedPick<UsePressReturnType<TriggerType>, "pressReturn", "longPress">, Pick<UseDismissParameters<any>, "activeElementParameters"> {
    tooltipParameters: UseTooltipParametersSelf;
}
export type TooltipState = `${"hovering" | "focused"}-${"popup" | "trigger"}` | null;
/**
 * Implements a [Tooltip](https://www.w3.org/WAI/ARIA/apg/patterns/tooltip/) pattern.
 *
 * @remarks Tooltips are remarkably under-specified, so some of this is speculative.
 *
 * @compositeParams
 */
export declare const useTooltip: <TriggerType extends Element, PopupType extends Element>({ tooltipParameters: { onStatus, tooltipSemanticType, hoverDelay, usesLongPress }, activeElementParameters, escapeDismissParameters, pressReturn: { longPress, ...void2 }, ...void1 }: UseTooltipParameters<TriggerType, PopupType>) => UseTooltipReturnType<TriggerType, PopupType>;
export interface UseTooltipReturnTypeSelf {
    getState(): TooltipState;
}
export interface UseTooltipReturnType<TriggerType extends Element, PopupType extends Element> {
    propsPopup: ElementProps<PopupType>;
    propsTrigger: ElementProps<TriggerType>;
    tooltipReturn: UseTooltipReturnTypeSelf;
}
//# sourceMappingURL=use-tooltip.d.ts.map