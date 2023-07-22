import { Ref, VNode } from "preact";
import { Get4 } from "../props.js";
import { UseDrawerParameters, UseDrawerReturnType } from "../use-drawer.js";
import { PartialExcept } from "./util.js";
interface DrawerPropsBase<FocusContainerElement extends Element, SourceElement extends Element, DrawerElement extends Element, TitleElement extends Element> extends Get4<UseDrawerParameters<DrawerElement, TitleElement>, "dismissParameters", "escapeDismissParameters", "labelParameters", "focusTrapParameters"> {
    ref?: Ref<UseDrawerReturnType<FocusContainerElement, SourceElement, DrawerElement, TitleElement>>;
    render(drawerInfo: UseDrawerReturnType<FocusContainerElement, SourceElement, DrawerElement, TitleElement>): VNode<any>;
}
export interface DrawerProps<FocusContainerElement extends Element, SourceElement extends Element, DialogElement extends Element, TitleElement extends Element> extends PartialExcept<DrawerPropsBase<FocusContainerElement, SourceElement, DialogElement, TitleElement>, "ariaLabel" | "onClose" | "open" | "focusPopup"> {
    render(dialogInfo: UseDrawerReturnType<FocusContainerElement, SourceElement, DialogElement, TitleElement>): VNode<any>;
}
export declare const Drawer: <FocusContainerElement extends Element, SourceElement extends Element, DrawerElement extends Element, TitleElement extends Element>({ closeOnBackdrop, closeOnEscape, closeOnLostFocus, focusOpener, focusPopup, getWindow, onClose, open, parentDepth, render, trapActive, ariaLabel, }: DrawerProps<FocusContainerElement, SourceElement, DrawerElement, TitleElement>, ref: Ref<any>) => import("preact").JSX.Element;
export {};
//# sourceMappingURL=drawer.d.ts.map