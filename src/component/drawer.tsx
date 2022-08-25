import { createElement, h, VNode } from "preact";
import { ElementToTag } from "props";
import { UseAriaDrawerReturnType, UseDrawerParameters, useDrawer } from "../use-drawer";

export interface DrawerProps<DrawerElement extends HTMLElement, TitleElement extends HTMLElement, BodyElement extends HTMLElement, BackdropElement extends HTMLElement> extends UseDrawerParameters {
    tagDrawer: ElementToTag<DrawerElement>;
    tagTitle: ElementToTag<TitleElement>;
    tagBody: ElementToTag<BodyElement>;
    tagBackdrop: ElementToTag<BackdropElement>;

    propsDrawer: () => h.JSX.HTMLAttributes<DrawerElement>;
    propsTitle: () => h.JSX.HTMLAttributes<TitleElement>;
    propsBody: () => h.JSX.HTMLAttributes<BodyElement>;
    propsBackdrop: () => h.JSX.HTMLAttributes<BackdropElement>;

    descriptive: boolean;

    render?(drawer: VNode<any>, title: VNode<any>, body: VNode<any>, backdrop: VNode<any>): VNode<any>;
}

function defaultRender(drawer: VNode<any>, title: VNode<any>, body: VNode<any>, backdrop: VNode<any>): VNode<any> {
    drawer.props.children = <>{title}{body}</>
    return (
        <>
            {drawer}
            {backdrop}
        </>
    );
}

export function Drawer<DrawerElement extends HTMLElement, TitleElement extends HTMLElement, BodyElement extends HTMLElement, BackdropElement extends HTMLElement>({ onClose, open, descriptive, render, tagBackdrop, tagBody, tagDrawer, tagTitle, propsBackdrop, propsBody, propsDrawer, propsTitle, }: DrawerProps<DrawerElement, TitleElement, BodyElement, BackdropElement>) {
    const {
        useDrawerBackdrop,
        useDrawerBody,
        useDrawerProps,
        useDrawerTitle
    } = useDrawer<DrawerElement, TitleElement, BodyElement, BackdropElement>({ onClose, open });

    const { useDrawerTitleProps } = useDrawerTitle();
    const { useDrawerBodyProps } = useDrawerBody({ descriptive });
    const { useDrawerBackdropProps } = useDrawerBackdrop();

    const drawer = createElement(tagDrawer, useDrawerProps(propsDrawer()) as any);
    const title = createElement(tagTitle, useDrawerTitleProps(propsTitle()) as any);
    const body = createElement(tagBody, useDrawerBodyProps(propsBody()) as any);
    const backdrop = createElement(tagBackdrop, useDrawerBackdropProps(propsBackdrop()) as any);

    return (render ?? defaultRender)(drawer, title, body, backdrop);

}
