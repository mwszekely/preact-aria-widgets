
import { h } from "preact";
import { useCallback } from "preact/hooks";
import { debugLog } from "./props";
import { UseModalParameters, useModal } from "preact-prop-helpers"

export interface UseDialogReturnTypeInfo extends UseSoftDismissReturnTypeInfo {

}

/*export interface UseDialogReturnTypeWithHooks<ModalElement extends Element, TitleElement extends Element, BodyElement extends Element, BackdropElement extends Element> extends UseDialogReturnTypeInfo {
    useDialogProps: (props: h.JSX.HTMLAttributes<ModalElement>) => h.JSX.HTMLAttributes<ModalElement>;
    useDialogTitle: UseDialogTitle<TitleElement>;
    useDialogBody: UseDialogBody<BodyElement>
    useDialogBackdrop: UseDialogBackdrop<BackdropElement>;
}*/

export type UseDialogTitle<TitleElement extends Element> = () => { useDialogTitleProps: (props: h.JSX.HTMLAttributes<TitleElement>) => h.JSX.HTMLAttributes<TitleElement>; };
export type UseDialogBody<BodyElement extends Element> = () => { useDialogBodyProps: (props: h.JSX.HTMLAttributes<BodyElement>) => h.JSX.HTMLAttributes<BodyElement>; };
export type UseDialogBackdrop<BackdropElement extends Element> = () => { useDialogBackdropProps: (props: h.JSX.HTMLAttributes<BackdropElement>) => h.JSX.HTMLAttributes<BackdropElement>; };


export interface UseDialogReturnType<FocusContainerElement extends HTMLElement, DialogElement extends HTMLElement, TitleElement extends HTMLElement, BodyElement extends HTMLElement, BackdropElement extends HTMLElement> extends UseModalReturnType {
    useDialogProps: UseModalReturnTypeWithHooks<FocusContainerElement, DialogElement, TitleElement, BodyElement, BackdropElement>["useModalProps"];
    useDialogTitle: UseDialogTitle<TitleElement>;
    useDialogBody: UseDialogBody<BodyElement>;
    useDialogBackdrop: UseDialogBackdrop<BackdropElement>;
    useDialogFocusContainerProps(props: h.JSX.HTMLAttributes<FocusContainerElement>): h.JSX.HTMLAttributes<FocusContainerElement>;
}

export interface UseDialogParameters extends UseModalParameters<never, "onClose"> {
    dialog: { onClose: (reason: "escape" | "backdrop") => void; }
}

export function useDialog<FocusContainerElement extends HTMLElement, DialogElement extends HTMLElement, TitleElement extends HTMLElement, BodyElement extends HTMLElement, BackdropElement extends HTMLElement>({ softDismiss: { open }, modal: { bodyIsOnlySemantic, focusSelf }, dialog: { onClose }, activeElement }: UseDialogParameters): UseDialogReturnType<FocusContainerElement, DialogElement, TitleElement, BodyElement, BackdropElement> {
    
    debugLog("useDialog");

    // TODO: Differences between dialog and modal go here, presumably.
    // Non-modal dialogs need to be able to be repositioned, etc.
    const { useModalBackdrop, useModalBody, useModalProps, useModalTitle, softDismiss: { onBackdropClick }, useModalFocusContainerProps } = useModal<FocusContainerElement, DialogElement, TitleElement, BodyElement, BackdropElement>({ modal: { bodyIsOnlySemantic, focusSelf }, softDismiss: { onClose, open }, activeElement });
    type R = UseDialogReturnType<FocusContainerElement, DialogElement, TitleElement, BodyElement, BackdropElement>;
    const useDialogBackdrop = useCallback<R["useDialogBackdrop"]>(() => {
        const { useModalBackdropProps } = useModalBackdrop();
        return { useDialogBackdropProps: useModalBackdropProps };
    }, [useModalBackdrop]);

    const useDialogBody = useCallback<R["useDialogBody"]>(() => {
        const { useModalBodyProps } = useModalBody();
        return { useDialogBodyProps: useModalBodyProps };
    }, [useModalBackdrop]);
    const useDialogProps = useModalProps;

    const useDialogTitle = useCallback<R["useDialogTitle"]>(() => {
        const { useModalTitleProps } = useModalTitle();
        return { useDialogTitleProps: useModalTitleProps };
    }, [useModalTitle]);

    return {
        useDialogProps,
        useDialogTitle,
        useDialogBody,
        useDialogBackdrop,
        useDialogFocusContainerProps: useModalFocusContainerProps,
        softDismiss: { onBackdropClick },
    }
}
