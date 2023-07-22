import { Ref, VNode } from "preact";
import { Get4 } from "../props.js";
import { UseDialogParameters, UseDialogReturnType } from "../use-dialog.js";
import { PartialExcept } from "./util.js";
interface DialogPropsBase<FocusContainerElement extends Element, SourceElement extends Element, DialogElement extends Element, TitleElement extends Element> extends Get4<UseDialogParameters<DialogElement, TitleElement>, "dismissParameters", "escapeDismissParameters", "labelParameters", "focusTrapParameters"> {
    ref?: Ref<UseDialogReturnType<FocusContainerElement, SourceElement, DialogElement, TitleElement>>;
}
export interface DialogProps<FocusContainerElement extends Element, SourceElement extends Element, DialogElement extends Element, TitleElement extends Element> extends PartialExcept<DialogPropsBase<FocusContainerElement, SourceElement, DialogElement, TitleElement>, "ariaLabel" | "onClose" | "open" | "focusPopup"> {
    render(dialogInfo: UseDialogReturnType<FocusContainerElement, SourceElement, DialogElement, TitleElement>): VNode<any>;
}
export declare function defaultRenderPortal({ portalId, children }: {
    portalId: string;
    children: VNode;
}): VNode;
export declare const Dialog: <FocusContainerElement extends Element, SourceElement extends Element, DialogElement extends Element, TitleElement extends Element>({ onClose, open, closeOnBackdrop, closeOnEscape, focusOpener, getWindow, parentDepth, focusPopup, ariaLabel, render }: DialogProps<FocusContainerElement, SourceElement, DialogElement, TitleElement>, ref?: Ref<any>) => import("preact").JSX.Element;
export {};
//# sourceMappingURL=dialog.d.ts.map