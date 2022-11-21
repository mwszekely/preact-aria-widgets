import { createElement, h, Ref, VNode } from "preact";
import { UseActiveElementParameters } from "preact-prop-helpers";
import { createPortal } from "preact/compat";
import { useImperativeHandle, useRef } from "preact/hooks";
import { ElementToTag, PropModifier } from "../props";
import { useDialog, UseDialogParameters, UseDialogReturnType } from "../use-dialog";
import { memoForwardRef } from "./util";

type Get<T, K extends keyof T> = T[K];

export interface DialogProps<FocusContainerElement extends HTMLElement, DialogElement extends HTMLElement, TitleElement extends HTMLElement, BodyElement extends HTMLElement, BackdropElement extends HTMLElement> extends
    Get<UseDialogParameters, "dismissParameters">,
    Get<UseDialogParameters, "escapeDismissParameters">,
    Get<UseDialogParameters, "focusTrapParameters"> {
    imperativeHandle?: Ref<UseDialogReturnType<FocusContainerElement, DialogElement>>;
    render(dialogInfo: UseDialogReturnType<FocusContainerElement, DialogElement>): VNode<any>;
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
        const dialog = createElement(tagDialog as never, dialogProps, dialogChildren, title, body);

        const backdrop = createElement(tagBackdrop as never, backdropProps, backdropChildren);
        const focusContainer = createElement(tagFocusContainer as never, focusContainerProps, <div>{focusContainerChildren}{dialog}{backdrop}</div>);

        return defaultRenderPortal({
            portalId,
            children: focusContainer
        });
    }
}



export function defaultRenderDialog<FocusContainerElement extends HTMLElement, DialogElement extends HTMLElement, TitleElement extends HTMLElement, BodyElement extends HTMLElement, BackdropElement extends HTMLElement>({ portalId, tagFocusContainer, tagBackdrop, tagBody, tagDialog, tagTitle, makePropsFocusContainer, makePropsBackdrop, makePropsBody, makePropsDialog, makePropsTitle }: { portalId: string, tagFocusContainer: ElementToTag<FocusContainerElement>, tagDialog: ElementToTag<DialogElement>; tagTitle: ElementToTag<TitleElement>; tagBody: ElementToTag<BodyElement>; tagBackdrop: ElementToTag<BackdropElement>, makePropsFocusContainer: (info: UseDialogReturnType<FocusContainerElement, DialogElement>) => h.JSX.HTMLAttributes<FocusContainerElement>, makePropsDialog: (info: UseDialogReturnType<FocusContainerElement, DialogElement>) => h.JSX.HTMLAttributes<DialogElement>, makePropsBody: (info: UseDialogReturnType<FocusContainerElement, DialogElement>) => h.JSX.HTMLAttributes<BodyElement>, makePropsTitle: (info: UseDialogReturnType<FocusContainerElement, DialogElement>) => h.JSX.HTMLAttributes<TitleElement>, makePropsBackdrop: (info: UseDialogReturnType<FocusContainerElement, DialogElement>) => h.JSX.HTMLAttributes<BackdropElement> }) {
    return defaultRenderModal<FocusContainerElement, DialogElement, TitleElement, BodyElement, BackdropElement, UseDialogReturnType<FocusContainerElement, DialogElement>>({ portalId, tagFocusContainer, tagBackdrop, tagBody, tagDialog, tagTitle, makePropsFocusContainer, makePropsBackdrop, makePropsBody, makePropsDialog, makePropsTitle });
}

export const Dialog = memoForwardRef(function Dialog<FocusContainerElement extends HTMLElement, DialogElement extends HTMLElement, TitleElement extends HTMLElement, BodyElement extends HTMLElement, BackdropElement extends HTMLElement>({
    onClose,
    open,
    closeOnBackdrop,
    closeOnEscape,
    focusOpener,
    getWindow,
    parentDepth,
    imperativeHandle,
    focusSelf,
    render
}: DialogProps<FocusContainerElement, DialogElement, TitleElement, BodyElement, BackdropElement>, ref?: Ref<any>) {
    const info = useDialog<FocusContainerElement, DialogElement>({ 
        dismissParameters: { closeOnBackdrop, closeOnEscape, onClose, open },
        escapeDismissParameters: { getWindow, parentDepth },
        focusTrapParameters: { focusOpener, focusSelf }
    });

    useImperativeHandle(imperativeHandle!, () => info);

    return render(info);

});
