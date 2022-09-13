import { h, VNode } from "preact";
import { useAriaDialog, UseAriaDialogParameters, UseDialogReturnTypeInfo } from "../use-dialog";

type Get<T, K extends keyof T> = T[K];

export interface DialogProps<DialogElement extends HTMLElement, TitleElement extends HTMLElement, BodyElement extends HTMLElement, BackdropElement extends HTMLElement> extends 
Get<UseAriaDialogParameters, "softDismiss">, 
Get<UseAriaDialogParameters, "modal">, 
Get<UseAriaDialogParameters, "dialog"> {
   
    render?(dialogInfo: UseDialogReturnTypeInfo, dialogProps: h.JSX.HTMLAttributes<DialogElement>, titleProps: h.JSX.HTMLAttributes<TitleElement>, bodyProps: h.JSX.HTMLAttributes<BodyElement>, backdropProps: h.JSX.HTMLAttributes<BackdropElement>): VNode<any>;
}

function defaultRender(dialogInfo: UseDialogReturnTypeInfo, dialogProps: h.JSX.HTMLAttributes<any>, titleProps: h.JSX.HTMLAttributes<any>, bodyProps: h.JSX.HTMLAttributes<any>, backdropProps: h.JSX.HTMLAttributes<any>): VNode<any> {
    const title = <div {...titleProps} />;
    const body = <div {...bodyProps} />;
    const dialog = <div {...dialogProps} />;
    const backdrop = <div {...backdropProps} />;
    dialogProps.children = <>{title}{body}</>
    return (
        <>
            {dialog}
            {backdrop}
        </>
    );
}

export function Dialog<DialogElement extends HTMLElement, TitleElement extends HTMLElement, BodyElement extends HTMLElement, BackdropElement extends HTMLElement>({
    onClose,
    open,
    bodyIsOnlySemantic,
    render
}: DialogProps<DialogElement, TitleElement, BodyElement, BackdropElement>) {
    const {
        useDialogBackdrop,
        useDialogBody,
        useDialogProps,
        useDialogTitle,
        ...r
    } = useAriaDialog<DialogElement, TitleElement, BodyElement, BackdropElement>({ dialog: { onClose }, modal: { bodyIsOnlySemantic, }, softDismiss: { open } });

    const { useDialogTitleProps } = useDialogTitle();
    const { useDialogBodyProps } = useDialogBody();
    const { useDialogBackdropProps } = useDialogBackdrop();

    /*const dialog = createElement(tagDialog, useDialogProps(propsDialog()) as any);
    const title = createElement(tagTitle, useDialogTitleProps(propsTitle()) as any);
    const body = createElement(tagBody, useDialogBodyProps(propsBody()) as any);
    const backdrop = createElement(tagBackdrop, useDialogBackdropProps(propsBackdrop()) as any);*/

    return (render ?? defaultRender)(r, useDialogProps({}), useDialogTitleProps({}), useDialogBodyProps({}), useDialogBackdropProps({}));

}
