import { h, VNode } from "preact";
import { UseAriaDrawerReturnTypeInfo, useDrawer, UseDrawerParameters } from "../use-drawer";

type Get<T, K extends keyof T> = T[K];

export interface DrawerProps<DrawerElement extends HTMLElement, TitleElement extends HTMLElement, BodyElement extends HTMLElement, BackdropElement extends HTMLElement> extends 
Get<UseDrawerParameters, "softDismiss">, 
Get<UseDrawerParameters, "modal"> {
    render?(drawerInfo: UseAriaDrawerReturnTypeInfo, drawerProps: h.JSX.HTMLAttributes<DrawerElement>, titleProps: h.JSX.HTMLAttributes<TitleElement>, bodyProps: h.JSX.HTMLAttributes<BodyElement>, backdropProps: h.JSX.HTMLAttributes<BackdropElement>): VNode<any>;
}

function defaultRender(drawerInfo: UseAriaDrawerReturnTypeInfo, drawerProps: h.JSX.HTMLAttributes<any>, titleProps: h.JSX.HTMLAttributes<any>, bodyProps: h.JSX.HTMLAttributes<any>, backdropProps: h.JSX.HTMLAttributes<any>): VNode<any> {
    const title = <div {...titleProps} />;
    const body = <div {...bodyProps} />;
    const drawer = <div {...drawerProps} />;
    const backdrop = <div {...backdropProps} />;
    drawerProps.children = <>{title}{body}</>;
    return (
        <>
            {drawer}
            {backdrop}
        </>
    );
}

export function Drawer<DrawerElement extends HTMLElement, TitleElement extends HTMLElement, BodyElement extends HTMLElement, BackdropElement extends HTMLElement>({ render, onClose, open, bodyIsOnlySemantic }: DrawerProps<DrawerElement, TitleElement, BodyElement, BackdropElement>) {
    const {
        useDrawerBackdrop,
        useDrawerBody,
        useDrawerProps,
        useDrawerTitle,
        ...drawerInfo
    } = useDrawer<DrawerElement, TitleElement, BodyElement, BackdropElement>({ modal: { bodyIsOnlySemantic }, softDismiss: { onClose, open } });

    const { useDrawerTitleProps } = useDrawerTitle();
    const { useDrawerBodyProps } = useDrawerBody();
    const { useDrawerBackdropProps } = useDrawerBackdrop();

    return (render ?? defaultRender)(drawerInfo, useDrawerProps({}), useDrawerTitleProps({}), useDrawerBodyProps({}), useDrawerBackdropProps({}));

}
