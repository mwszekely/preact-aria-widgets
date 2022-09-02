import { createElement, h, VNode } from "preact";
import { ElementToTag } from "props";
import { useAriaDialog, UseAriaDialogParameters } from "../use-dialog";

type Get<T, K extends keyof T> = T[K];

export interface DialogProps<DialogElement extends HTMLElement, TitleElement extends HTMLElement, BodyElement extends HTMLElement, BackdropElement extends HTMLElement> extends Get<UseAriaDialogParameters, "softDismiss">, Get<UseAriaDialogParameters, "modal">, Get<UseAriaDialogParameters, "dialog"> {
    tagDialog: ElementToTag<DialogElement>;
    tagTitle: ElementToTag<TitleElement>;
    tagBody: ElementToTag<BodyElement>;
    tagBackdrop: ElementToTag<BackdropElement>;

    propsDialog: () => h.JSX.HTMLAttributes<DialogElement>;
    propsTitle: () => h.JSX.HTMLAttributes<TitleElement>;
    propsBody: () => h.JSX.HTMLAttributes<BodyElement>;
    propsBackdrop: () => h.JSX.HTMLAttributes<BackdropElement>;

    //descriptive: boolean;

    render?(dialog: VNode<any>, title: VNode<any>, body: VNode<any>, backdrop: VNode<any>): VNode<any>;
}

function defaultRender(dialog: VNode<any>, title: VNode<any>, body: VNode<any>, backdrop: VNode<any>): VNode<any> {
    dialog.props.children = <>{title}{body}</>
    return (
        <>
            {dialog}
            {backdrop}
        </>
    );
}

export function Dialog<DialogElement extends HTMLElement, TitleElement extends HTMLElement, BodyElement extends HTMLElement, BackdropElement extends HTMLElement>({ onClose, open, render, tagBackdrop, tagBody, tagDialog, tagTitle, bodyIsOnlySemantic, propsBackdrop, propsBody, propsDialog, propsTitle, }: DialogProps<DialogElement, TitleElement, BodyElement, BackdropElement>) {
    const {
        useDialogBackdrop,
        useDialogBody,
        useDialogProps,
        useDialogTitle
    } = useAriaDialog<DialogElement, TitleElement, BodyElement, BackdropElement>({ dialog: { onClose }, modal: { bodyIsOnlySemantic, }, softDismiss: { open } });

    const { useDialogTitleProps } = useDialogTitle();
    const { useDialogBodyProps } = useDialogBody();
    const { useDialogBackdropProps } = useDialogBackdrop();

    const dialog = createElement(tagDialog, useDialogProps(propsDialog()) as any);
    const title = createElement(tagTitle, useDialogTitleProps(propsTitle()) as any);
    const body = createElement(tagBody, useDialogBodyProps(propsBody()) as any);
    const backdrop = createElement(tagBackdrop, useDialogBackdropProps(propsBackdrop()) as any);

    return (render ?? defaultRender)(dialog, title, body, backdrop);

}
