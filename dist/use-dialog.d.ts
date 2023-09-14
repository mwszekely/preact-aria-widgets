import { ElementProps, TargetedOmit, UseModalParameters, UseModalReturnType } from "preact-prop-helpers";
import { OmitStrong } from "./props.js";
import { UseLabelSyntheticParameters } from "./use-label.js";
export interface UseDialogParameters<_DialogElement extends Element, _TitleElement extends Element> extends OmitStrong<UseModalParameters<"escape" | "backdrop">, "focusTrapParameters" | "dismissParameters" | "backdropDismissParameters" | "escapeDismissParameters" | "lostFocusDismissParameters">, TargetedOmit<UseModalParameters<"escape" | "backdrop">, "focusTrapParameters", "trapActive" | "onlyMoveFocus">, TargetedOmit<UseModalParameters<"escape" | "backdrop">, "dismissParameters", "dismissActive">, TargetedOmit<UseModalParameters<"escape" | "backdrop">, "backdropDismissParameters", "onDismissBackdrop">, TargetedOmit<UseModalParameters<"escape" | "backdrop">, "escapeDismissParameters", "onDismissEscape">, TargetedOmit<UseLabelSyntheticParameters, "labelParameters", "onLabelClick"> {
}
export interface UseDialogReturnType<FocusContainerElement extends Element, SourceElement extends Element, PopupElement extends Element, TitleElement extends Element> extends OmitStrong<UseModalReturnType<FocusContainerElement, SourceElement, PopupElement>, "propsStableSource" | "propsStablePopup"> {
    propsDialog: ElementProps<PopupElement>;
    propsSource: ElementProps<SourceElement>;
    propsTitle: ElementProps<TitleElement>;
}
/**
 * Implements a [Dialog](https://www.w3.org/WAI/ARIA/apg/patterns/dialog/) pattern.
 *
 * @compositeParams
 */
export declare const useDialog: <FocusContainerElement extends Element, SourceElement extends Element, DialogElement extends Element, TitleElement extends Element>({ dismissParameters, escapeDismissParameters, focusTrapParameters, activeElementParameters, backdropDismissParameters, modalParameters, refElementParameters, labelParameters, ...void1 }: UseDialogParameters<DialogElement, TitleElement>) => UseDialogReturnType<FocusContainerElement, SourceElement, DialogElement, TitleElement>;
//# sourceMappingURL=use-dialog.d.ts.map