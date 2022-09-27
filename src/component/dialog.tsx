import { createElement, h, VNode } from "preact";
import { UseActiveElementParameters } from "preact-prop-helpers";
import { createPortal } from "preact/compat";
import { useRef } from "preact/hooks";
import { ElementToTag, PropModifier } from "props";
import { useDialog, UseDialogParameters, UseDialogReturnTypeInfo } from "../use-dialog";

type Get<T, K extends keyof T> = T[K];

export interface DialogProps<FocusContainerElement extends HTMLElement, DialogElement extends HTMLElement, TitleElement extends HTMLElement, BodyElement extends HTMLElement, BackdropElement extends HTMLElement> extends
    Get<UseDialogParameters, "softDismiss">,
    Get<UseDialogParameters, "modal">,
    UseActiveElementParameters,
    Get<UseDialogParameters, "dialog"> {

    render(dialogInfo: UseDialogReturnTypeInfo, modifyFocusContainerProps: PropModifier<FocusContainerElement>, modifyDialogProps: PropModifier<DialogElement>, modifyTitleProps: PropModifier<TitleElement>, modifyBodyProps: PropModifier<BodyElement>, modifyBackdropProps: PropModifier<BackdropElement>): VNode<any>;
}

export function defaultRenderPortal({ portalId, children }: { portalId: string, children: VNode }) {
    const portalRef = useRef<HTMLElement>(null!);
    portalRef.current ??= document.getElementById(portalId)!;
    if (portalRef.current)
        return createPortal(children, portalRef.current);
    else
        return children;
}

export function defaultRenderModal<FocusContainerElement extends HTMLElement, DialogElement extends HTMLElement, TitleElement extends HTMLElement, BodyElement extends HTMLElement, BackdropElement extends HTMLElement, InfoType>({ portalId, tagFocusContainer, tagBackdrop, tagBody, tagDialog, tagTitle, makePropsFocusContainer, makePropsBackdrop, makePropsBody, makePropsDialog, makePropsTitle }: { portalId: string, tagFocusContainer: ElementToTag<FocusContainerElement>, tagDialog: ElementToTag<DialogElement>; tagTitle: ElementToTag<TitleElement>; tagBody: ElementToTag<BodyElement>; tagBackdrop: ElementToTag<BackdropElement>, makePropsFocusContainer: (info: InfoType) => h.JSX.HTMLAttributes<FocusContainerElement>, makePropsDialog: (info: InfoType) => h.JSX.HTMLAttributes<DialogElement>, makePropsBody: (info: InfoType) => h.JSX.HTMLAttributes<BodyElement>, makePropsTitle: (info: InfoType) => h.JSX.HTMLAttributes<TitleElement>, makePropsBackdrop: (info: InfoType) => h.JSX.HTMLAttributes<BackdropElement> }) {
    return function (dialogInfo: InfoType, modifyFocusContainerProps: PropModifier<FocusContainerElement>, modifyDialogProps: PropModifier<DialogElement>, modifyTitleProps: PropModifier<TitleElement>, modifyBodyProps: PropModifier<BodyElement>, modifyBackdropProps: PropModifier<BackdropElement>): VNode<any> {

        const { children: titleChildren, ...titleProps } = modifyTitleProps(makePropsTitle(dialogInfo));
        const { children: bodyChildren, ...bodyProps } = modifyBodyProps(makePropsBody(dialogInfo));
        const { children: dialogChildren, ...dialogProps } = modifyDialogProps(makePropsDialog(dialogInfo));
        const { children: backdropChildren, ...backdropProps } = modifyBackdropProps(makePropsBackdrop(dialogInfo));
        const { children: focusContainerChildren, ...focusContainerProps } = modifyFocusContainerProps(makePropsFocusContainer(dialogInfo));

        const title = createElement(tagTitle as never, titleProps, titleChildren);
        const body = createElement(tagBody as never, bodyProps, bodyChildren);
        const dialog = createElement(tagDialog as never, { ...dialogProps, children: <>{dialogChildren}{title}{body}</> });
        const backdrop = createElement(tagBackdrop as never, backdropProps, backdropChildren);
        const focusContainer = createElement(tagFocusContainer as never, focusContainerProps, <>{focusContainerChildren}{dialog}{backdrop}</>)
        return defaultRenderPortal({
            portalId,
            children: focusContainer
        });
    }
}



export function defaultRenderDialog<FocusContainerElement extends HTMLElement, DialogElement extends HTMLElement, TitleElement extends HTMLElement, BodyElement extends HTMLElement, BackdropElement extends HTMLElement>({ portalId, tagFocusContainer, tagBackdrop, tagBody, tagDialog, tagTitle, makePropsFocusContainer, makePropsBackdrop, makePropsBody, makePropsDialog, makePropsTitle }: { portalId: string, tagFocusContainer: ElementToTag<FocusContainerElement>, tagDialog: ElementToTag<DialogElement>; tagTitle: ElementToTag<TitleElement>; tagBody: ElementToTag<BodyElement>; tagBackdrop: ElementToTag<BackdropElement>, makePropsFocusContainer: (info: UseDialogReturnTypeInfo) => h.JSX.HTMLAttributes<FocusContainerElement>, makePropsDialog: (info: UseDialogReturnTypeInfo) => h.JSX.HTMLAttributes<DialogElement>, makePropsBody: (info: UseDialogReturnTypeInfo) => h.JSX.HTMLAttributes<BodyElement>, makePropsTitle: (info: UseDialogReturnTypeInfo) => h.JSX.HTMLAttributes<TitleElement>, makePropsBackdrop: (info: UseDialogReturnTypeInfo) => h.JSX.HTMLAttributes<BackdropElement> }) {
    return defaultRenderModal<FocusContainerElement, DialogElement, TitleElement, BodyElement, BackdropElement, UseDialogReturnTypeInfo>({ portalId, tagFocusContainer, tagBackdrop, tagBody, tagDialog, tagTitle, makePropsFocusContainer, makePropsBackdrop, makePropsBody, makePropsDialog, makePropsTitle });
}

export function Dialog<FocusContainerElement extends HTMLElement, DialogElement extends HTMLElement, TitleElement extends HTMLElement, BodyElement extends HTMLElement, BackdropElement extends HTMLElement>({
    onClose,
    open,
    bodyIsOnlySemantic,
    getDocument,
    getWindow,
    onActiveElementChange,
    onLastActiveElementChange,
    onWindowFocusedChange,
    focusSelf,
    render
}: DialogProps<FocusContainerElement, DialogElement, TitleElement, BodyElement, BackdropElement>) {
    const {
        useDialogBackdrop,
        useDialogBody,
        useDialogProps,
        useDialogTitle,
        useDialogFocusContainerProps,
        ...r
    } = useDialog<FocusContainerElement, DialogElement, TitleElement, BodyElement, BackdropElement>({ dialog: { onClose }, modal: { bodyIsOnlySemantic, focusSelf }, softDismiss: { open }, activeElement: { getDocument, getWindow, onActiveElementChange, onLastActiveElementChange, onWindowFocusedChange } });

    const { useDialogTitleProps } = useDialogTitle();
    const { useDialogBodyProps } = useDialogBody();
    const { useDialogBackdropProps } = useDialogBackdrop();

    return render(r, useDialogFocusContainerProps, useDialogProps, useDialogTitleProps, useDialogBodyProps, useDialogBackdropProps);

}
