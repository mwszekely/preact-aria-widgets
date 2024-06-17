import { Get11 } from "../props.js";
import { UseDrawerParameters, UseDrawerReturnType } from "../use-drawer.js";
import { GenericComponentProps } from "./util.js";
export type DrawerProps<FocusContainerElement extends Element, SourceElement extends Element, DrawerElement extends Element, TitleElement extends Element> = GenericComponentProps<UseDrawerReturnType<FocusContainerElement, SourceElement, DrawerElement, TitleElement>, Get11<UseDrawerParameters<DrawerElement, TitleElement>, "dismissParameters", "escapeDismissParameters", "labelParameters", "focusTrapParameters", "activeElementParameters", "dismissParameters", "backdropDismissParameters", "escapeDismissParameters", "lostFocusDismissParameters", "modalParameters", "refElementParameters">, "ariaLabel" | "onDismiss" | "active" | "focusPopup">;
export declare const Drawer: <FocusContainerElement extends Element, SourceElement extends Element, DrawerElement extends Element, TitleElement extends Element>({ active, onDismiss, dismissBackdropActive, dismissEscapeActive, dismissLostFocusActive, onElementChange, onMount, onUnmount, focusOpener, focusPopup, getDocument, imperativeHandle, onActiveElementChange, onLastActiveElementChange, onWindowFocusedChange, parentDepth, render, trapActive, ariaLabel, ...void1 }: DrawerProps<FocusContainerElement, SourceElement, DrawerElement, TitleElement>) => import("preact-prop-helpers").JSX.Element;
//# sourceMappingURL=drawer.d.ts.map