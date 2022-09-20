import { h, VNode } from "preact";
import { UseActiveElementParameters } from "preact-prop-helpers";
import { ElementToTag, PropModifier } from "props";
import { UseAriaDrawerReturnTypeInfo, useDrawer, UseDrawerParameters } from "../use-drawer";
import { defaultRenderDialog } from "./dialog";

type Get<T, K extends keyof T> = T[K];

export interface DrawerProps<DrawerElement extends HTMLElement, TitleElement extends HTMLElement, BodyElement extends HTMLElement, BackdropElement extends HTMLElement> extends 
Get<UseDrawerParameters, "softDismiss">, 
UseActiveElementParameters,
Get<UseDrawerParameters, "modal"> {
    render(drawerInfo: UseAriaDrawerReturnTypeInfo, modifyDrawerProps: PropModifier<DrawerElement>, modifyTitleProps: PropModifier<TitleElement>, modifyBodyProps: PropModifier<BodyElement>, modifyBackdropProps: PropModifier<BackdropElement>): VNode<any>;
}

export function defaultRenderDrawer<DialogElement extends HTMLElement, TitleElement extends HTMLElement, BodyElement extends HTMLElement, BackdropElement extends HTMLElement>({ portalId, tagBackdrop, tagBody, tagDialog, tagTitle, makePropsBackdrop, makePropsBody, makePropsDialog, makePropsTitle }: { portalId: string, tagDialog: ElementToTag<DialogElement>; tagTitle: ElementToTag<TitleElement>; tagBody: ElementToTag<BodyElement>; tagBackdrop: ElementToTag<BackdropElement>, makePropsDialog: (info: UseAriaDrawerReturnTypeInfo) => h.JSX.HTMLAttributes<DialogElement>, makePropsBody: (info: UseAriaDrawerReturnTypeInfo) => h.JSX.HTMLAttributes<BodyElement>, makePropsTitle: (info: UseAriaDrawerReturnTypeInfo) => h.JSX.HTMLAttributes<TitleElement>, makePropsBackdrop: (info: UseAriaDrawerReturnTypeInfo) => h.JSX.HTMLAttributes<BackdropElement> }) {
    return defaultRenderDialog<DialogElement, TitleElement, BodyElement, BackdropElement, UseAriaDrawerReturnTypeInfo>({ portalId, makePropsBackdrop, makePropsBody, makePropsDialog, makePropsTitle, tagBackdrop, tagBody, tagDialog, tagTitle });
}

export function Drawer<DrawerElement extends HTMLElement, TitleElement extends HTMLElement, BodyElement extends HTMLElement, BackdropElement extends HTMLElement>({ render, onClose, open, bodyIsOnlySemantic, getDocument, getWindow, onActiveElementChange, onLastActiveElementChange, onWindowFocusedChange }: DrawerProps<DrawerElement, TitleElement, BodyElement, BackdropElement>) {
    const {
        useDrawerBackdrop,
        useDrawerBody,
        useDrawerProps,
        useDrawerTitle,
        ...drawerInfo
    } = useDrawer<DrawerElement, TitleElement, BodyElement, BackdropElement>({ modal: { bodyIsOnlySemantic }, softDismiss: { onClose, open }, activeElement: { getDocument, getWindow, onActiveElementChange, onLastActiveElementChange, onWindowFocusedChange } });

    const { useDrawerTitleProps } = useDrawerTitle();
    const { useDrawerBodyProps } = useDrawerBody();
    const { useDrawerBackdropProps } = useDrawerBackdrop();

    return render(drawerInfo, useDrawerProps, useDrawerTitleProps, useDrawerBodyProps, useDrawerBackdropProps);

}
