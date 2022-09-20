import { ComponentChildren, createElement, h, VNode } from "preact";
import { createPortal } from "preact/compat"
import { useRef } from "preact/hooks"
import { UseActiveElementParameters } from "preact-prop-helpers";
import { ElementToTag, PropModifier } from "props";
import { useAriaDialog, UseAriaDialogParameters, UseDialogReturnTypeInfo } from "../use-dialog";

type Get<T, K extends keyof T> = T[K];

export interface DialogProps<DialogElement extends HTMLElement, TitleElement extends HTMLElement, BodyElement extends HTMLElement, BackdropElement extends HTMLElement> extends
    Get<UseAriaDialogParameters, "softDismiss">,
    Get<UseAriaDialogParameters, "modal">,
    UseActiveElementParameters,
    Get<UseAriaDialogParameters, "dialog"> {

    render(dialogInfo: UseDialogReturnTypeInfo, modifyDialogProps: PropModifier<DialogElement>, modifyTitleProps: PropModifier<TitleElement>, modifyBodyProps: PropModifier<BodyElement>, modifyBackdropProps: PropModifier<BackdropElement>): VNode<any>;
}

export function defaultRenderPortal({ portalId, children }: { portalId: string, children: VNode }) {
    const portalRef = useRef<HTMLElement>(null!);
    portalRef.current ??= document.getElementById(portalId)!;
    if (portalRef.current)
        return createPortal(children, portalRef.current);
    else
        return children;
}

export function defaultRenderModal<DialogElement extends HTMLElement, TitleElement extends HTMLElement, BodyElement extends HTMLElement, BackdropElement extends HTMLElement, InfoType>({ portalId, tagBackdrop, tagBody, tagDialog, tagTitle, makePropsBackdrop, makePropsBody, makePropsDialog, makePropsTitle }: { portalId: string, tagDialog: ElementToTag<DialogElement>; tagTitle: ElementToTag<TitleElement>; tagBody: ElementToTag<BodyElement>; tagBackdrop: ElementToTag<BackdropElement>, makePropsDialog: (info: InfoType) => h.JSX.HTMLAttributes<DialogElement>, makePropsBody: (info: InfoType) => h.JSX.HTMLAttributes<BodyElement>, makePropsTitle: (info: InfoType) => h.JSX.HTMLAttributes<TitleElement>, makePropsBackdrop: (info: InfoType) => h.JSX.HTMLAttributes<BackdropElement> }) {
    return function (dialogInfo: InfoType, modifyDialogProps: PropModifier<DialogElement>, modifyTitleProps: PropModifier<TitleElement>, modifyBodyProps: PropModifier<BodyElement>, modifyBackdropProps: PropModifier<BackdropElement>): VNode<any> {
        const title = createElement(tagTitle as never, modifyTitleProps(makePropsTitle(dialogInfo)));
        const body = createElement(tagBody as never, modifyBodyProps(makePropsBody(dialogInfo)));
        const { children, ...dialogProps } = modifyDialogProps(makePropsDialog(dialogInfo));
        const dialog = createElement(tagDialog as never, { ...dialogProps, children: <>{title}{body}</> });
        const backdrop = createElement(tagBackdrop as never, modifyBackdropProps(makePropsBackdrop(dialogInfo)));
        return defaultRenderPortal({
            portalId,
            children: <>
                {dialog}
                {backdrop}
            </>
        });
    }
}



export function defaultRenderDialog<DialogElement extends HTMLElement, TitleElement extends HTMLElement, BodyElement extends HTMLElement, BackdropElement extends HTMLElement, InfoType>({ portalId, tagBackdrop, tagBody, tagDialog, tagTitle, makePropsBackdrop, makePropsBody, makePropsDialog, makePropsTitle }: { portalId: string, tagDialog: ElementToTag<DialogElement>; tagTitle: ElementToTag<TitleElement>; tagBody: ElementToTag<BodyElement>; tagBackdrop: ElementToTag<BackdropElement>, makePropsDialog: (info: UseDialogReturnTypeInfo) => h.JSX.HTMLAttributes<DialogElement>, makePropsBody: (info: UseDialogReturnTypeInfo) => h.JSX.HTMLAttributes<BodyElement>, makePropsTitle: (info: UseDialogReturnTypeInfo) => h.JSX.HTMLAttributes<TitleElement>, makePropsBackdrop: (info: UseDialogReturnTypeInfo) => h.JSX.HTMLAttributes<BackdropElement> }) {
    return defaultRenderModal<DialogElement, TitleElement, BodyElement, BackdropElement, UseDialogReturnTypeInfo>({ portalId, tagBackdrop, tagBody, tagDialog, tagTitle, makePropsBackdrop, makePropsBody, makePropsDialog, makePropsTitle });
}

export function Dialog<DialogElement extends HTMLElement, TitleElement extends HTMLElement, BodyElement extends HTMLElement, BackdropElement extends HTMLElement>({
    onClose,
    open,
    bodyIsOnlySemantic,
    getDocument,
    getWindow,
    onActiveElementChange,
    onLastActiveElementChange,
    onWindowFocusedChange,
    render
}: DialogProps<DialogElement, TitleElement, BodyElement, BackdropElement>) {
    const {
        useDialogBackdrop,
        useDialogBody,
        useDialogProps,
        useDialogTitle,
        ...r
    } = useAriaDialog<DialogElement, TitleElement, BodyElement, BackdropElement>({ dialog: { onClose }, modal: { bodyIsOnlySemantic, }, softDismiss: { open }, activeElement: { getDocument, getWindow, onActiveElementChange, onLastActiveElementChange, onWindowFocusedChange } });

    const { useDialogTitleProps } = useDialogTitle();
    const { useDialogBodyProps } = useDialogBody();
    const { useDialogBackdropProps } = useDialogBackdrop();

    return render(r, useDialogProps, useDialogTitleProps, useDialogBodyProps, useDialogBackdropProps);

}
