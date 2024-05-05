import { ElementProps, TargetedOmit, UseModalParameters, UseModalReturnType } from "preact-prop-helpers";
import { OmitStrong } from "./props.js";
import { UseLabelSyntheticParameters } from "./use-label.js";
export interface UseDrawerParameters<_DialogElement extends Element, _TitleElement extends Element> extends OmitStrong<UseModalParameters<"escape" | "backdrop" | "lost-focus">, "focusTrapParameters" | "backdropDismissParameters" | "dismissParameters" | "escapeDismissParameters" | "lostFocusDismissParameters">, TargetedOmit<UseLabelSyntheticParameters, "labelParameters", "onLabelClick">, TargetedOmit<UseModalParameters<"escape" | "backdrop" | "lost-focus">, "focusTrapParameters", "onlyMoveFocus">, TargetedOmit<UseModalParameters<"escape" | "backdrop" | "lost-focus">, "dismissParameters", "dismissActive">, TargetedOmit<UseModalParameters<"escape" | "backdrop" | "lost-focus">, "backdropDismissParameters", "onDismissBackdrop">, TargetedOmit<UseModalParameters<"escape" | "backdrop" | "lost-focus">, "escapeDismissParameters", "onDismissEscape">, TargetedOmit<UseModalParameters<"escape" | "backdrop" | "lost-focus">, "lostFocusDismissParameters", "onDismissLostFocus"> {
}
export interface UseDrawerReturnType<FocusContainerElement extends Element, SourceElement extends Element, DrawerElement extends Element, TitleElement extends Element> extends OmitStrong<UseModalReturnType<FocusContainerElement, SourceElement, DrawerElement>, "propsStableSource" | "propsStablePopup"> {
    propsDrawer: ElementProps<DrawerElement>;
    propsSource: ElementProps<SourceElement>;
    propsTitle: ElementProps<TitleElement>;
}
/**
 * Implements a drawer, which is a specific kind of [Dialog](https://www.w3.org/WAI/ARIA/apg/patterns/dialog/).
 *
 * @compositeParams
 */
export declare const useDrawer: <FocusContainerElement extends Element, SourceElement extends Element, PopupElement extends Element, TitleElement extends Element>({ dismissParameters, escapeDismissParameters, focusTrapParameters, activeElementParameters, labelParameters, backdropDismissParameters, lostFocusDismissParameters, modalParameters, refElementParameters, ...void1 }: UseDrawerParameters<PopupElement, TitleElement>) => UseDrawerReturnType<FocusContainerElement, SourceElement, PopupElement, TitleElement>;
//# sourceMappingURL=use-drawer.d.ts.map