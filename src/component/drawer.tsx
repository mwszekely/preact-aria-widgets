import { h, Ref, VNode } from "preact";
import { UseActiveElementParameters } from "preact-prop-helpers";
import { memo, useImperativeHandle } from "preact/compat";
import { ElementToTag, PropModifier } from "props";
import { UseDrawerReturnTypeInfo, useDrawer, UseDrawerParameters } from "../use-drawer";
import { defaultRenderModal } from "./dialog";
import { memoForwardRef } from "./util";

type Get<T, K extends keyof T> = T[K];

export interface DrawerProps<FocusContainerElement extends HTMLElement, DrawerElement extends HTMLElement, TitleElement extends HTMLElement, BodyElement extends HTMLElement, BackdropElement extends HTMLElement> extends
    Get<UseDrawerParameters, "softDismiss">,
    UseActiveElementParameters,
    Get<UseDrawerParameters, "modal"> {
    ref?: Ref<UseDrawerReturnTypeInfo>;
    render(drawerInfo: UseDrawerReturnTypeInfo, modifyFocusContainerProps: PropModifier<FocusContainerElement>, modifyDrawerProps: PropModifier<DrawerElement>, modifyTitleProps: PropModifier<TitleElement>, modifyBodyProps: PropModifier<BodyElement>, modifyBackdropProps: PropModifier<BackdropElement>): VNode<any>;
}

export function defaultRenderDrawer<FocusContainerElement extends HTMLElement, DialogElement extends HTMLElement, TitleElement extends HTMLElement, BodyElement extends HTMLElement, BackdropElement extends HTMLElement>({ portalId, tagFocusContainer, tagBackdrop, tagBody, tagDialog, tagTitle, makePropsFocusContainer, makePropsBackdrop, makePropsBody, makePropsDialog, makePropsTitle }: { portalId: string, tagFocusContainer: ElementToTag<FocusContainerElement>, tagDialog: ElementToTag<DialogElement>; tagTitle: ElementToTag<TitleElement>; tagBody: ElementToTag<BodyElement>; tagBackdrop: ElementToTag<BackdropElement>, makePropsFocusContainer: (info: UseDrawerReturnTypeInfo) => h.JSX.HTMLAttributes<FocusContainerElement>, makePropsDialog: (info: UseDrawerReturnTypeInfo) => h.JSX.HTMLAttributes<DialogElement>, makePropsBody: (info: UseDrawerReturnTypeInfo) => h.JSX.HTMLAttributes<BodyElement>, makePropsTitle: (info: UseDrawerReturnTypeInfo) => h.JSX.HTMLAttributes<TitleElement>, makePropsBackdrop: (info: UseDrawerReturnTypeInfo) => h.JSX.HTMLAttributes<BackdropElement> }) {
    return defaultRenderModal<FocusContainerElement, DialogElement, TitleElement, BodyElement, BackdropElement, UseDrawerReturnTypeInfo>({ portalId, makePropsFocusContainer, makePropsBackdrop, makePropsBody, makePropsDialog, makePropsTitle, tagFocusContainer, tagBackdrop, tagBody, tagDialog, tagTitle });
}

export const Drawer = memoForwardRef(function Drawer<FocusContainerElement extends HTMLElement, DrawerElement extends HTMLElement, TitleElement extends HTMLElement, BodyElement extends HTMLElement, BackdropElement extends HTMLElement>({ render, onClose, open, bodyIsOnlySemantic, focusSelf, getDocument, getWindow, onActiveElementChange, onLastActiveElementChange, onWindowFocusedChange }: DrawerProps<FocusContainerElement, DrawerElement, TitleElement, BodyElement, BackdropElement>, ref: Ref<any>) {
    const {
        useDrawerBackdrop,
        useDrawerBody,
        useDrawerProps,
        useDrawerTitle,
        useDrawerFocusContainerProps,
        ...drawerInfo
    } = useDrawer<FocusContainerElement, DrawerElement, TitleElement, BodyElement, BackdropElement>({ modal: { bodyIsOnlySemantic, focusSelf }, softDismiss: { onClose, open }, activeElement: { getDocument, getWindow, onActiveElementChange, onLastActiveElementChange, onWindowFocusedChange } });
    useImperativeHandle(ref!, () => drawerInfo);
    const { useDrawerTitleProps } = useDrawerTitle();
    const { useDrawerBodyProps } = useDrawerBody();
    const { useDrawerBackdropProps } = useDrawerBackdrop();

    return render(drawerInfo, useDrawerFocusContainerProps, useDrawerProps, useDrawerTitleProps, useDrawerBodyProps, useDrawerBackdropProps);

})
