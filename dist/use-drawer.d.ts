import { ElementProps, TargetedOmit, UseModalParameters, UseModalReturnType } from "preact-prop-helpers";
import { OmitStrong } from "./props.js";
import { UseLabelSyntheticParameters } from "./use-label.js";
export interface UseDrawerParameters<_DialogElement extends Element, _TitleElement extends Element> extends OmitStrong<UseModalParameters<"escape" | "backdrop" | "lost-focus">, "focusTrapParameters">, TargetedOmit<UseLabelSyntheticParameters, "labelParameters", "onLabelClick">, TargetedOmit<UseModalParameters<"escape" | "backdrop" | "lost-focus">, "focusTrapParameters", "onlyMoveFocus"> {
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
export declare function useDrawer<FocusContainerElement extends Element, SourceElement extends Element, PopupElement extends Element, TitleElement extends Element>({ dismissParameters, escapeDismissParameters, focusTrapParameters, labelParameters }: UseDrawerParameters<PopupElement, TitleElement>): UseDrawerReturnType<FocusContainerElement, SourceElement, PopupElement, TitleElement>;
//# sourceMappingURL=use-drawer.d.ts.map