import { h } from "preact";
import { UseModalParameters, UseModalReturnType } from "preact-prop-helpers";
import { OmitStrong } from "./props.js";
import { UseLabelSyntheticParameters } from "./use-label.js";
export interface UseDialogParameters<_DialogElement extends Element, _TitleElement extends Element> extends OmitStrong<UseModalParameters<"escape" | "backdrop">, "focusTrapParameters" | "dismissParameters"> {
    focusTrapParameters: OmitStrong<UseModalParameters<"escape" | "backdrop">["focusTrapParameters"], "trapActive" | "onlyMoveFocus">;
    dismissParameters: OmitStrong<UseModalParameters<"escape" | "backdrop">["dismissParameters"], "closeOnLostFocus">;
    labelParameters: OmitStrong<UseLabelSyntheticParameters["labelParameters"], "onLabelClick">;
}
export interface UseDialogReturnType<FocusContainerElement extends Element, SourceElement extends Element, PopupElement extends Element, TitleElement extends Element> extends OmitStrong<UseModalReturnType<FocusContainerElement, SourceElement, PopupElement>, "propsPopup"> {
    propsDialog: h.JSX.HTMLAttributes<PopupElement>;
    propsTitle: h.JSX.HTMLAttributes<TitleElement>;
}
export declare function useDialog<FocusContainerElement extends Element, SourceElement extends Element, DialogElement extends Element, TitleElement extends Element>({ dismissParameters, escapeDismissParameters, focusTrapParameters, labelParameters }: UseDialogParameters<DialogElement, TitleElement>): UseDialogReturnType<FocusContainerElement, SourceElement, DialogElement, TitleElement>;
//# sourceMappingURL=use-dialog.d.ts.map