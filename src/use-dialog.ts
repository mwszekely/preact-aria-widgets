
import { useCallback } from "preact/hooks";
import { useModal, UseModalParameters, UseModalReturnType } from "./use-modal";

export interface UseAriaDialogReturnType<DialogElement extends HTMLElement, TitleElement extends HTMLElement, BodyElement extends HTMLElement, BackdropElement extends HTMLElement> {
    useDialogProps: UseModalReturnType<DialogElement, TitleElement, BodyElement, BackdropElement>["useModalProps"];
    useDialogTitle: () => { useDialogTitleProps: ReturnType<UseModalReturnType<DialogElement, TitleElement, BodyElement, BackdropElement>["useModalTitle"]>["useModalTitleProps"] };
    useDialogBody: () => { useDialogBodyProps: ReturnType<UseModalReturnType<DialogElement, TitleElement, BodyElement, BackdropElement>["useModalBody"]>["useModalBodyProps"] };
    useDialogBackdrop: () => { useDialogBackdropProps: ReturnType<UseModalReturnType<DialogElement, TitleElement, BodyElement, BackdropElement>["useModalBackdrop"]>["useModalBackdropProps"] };
    softDismiss: Omit<UseModalReturnType<DialogElement, any, any, any>["softDismiss"], "onClose">;
}

export interface UseAriaDialogParameters {
    softDismiss: Omit<UseModalParameters["softDismiss"], "onClose">;
    modal: UseModalParameters["modal"];
    dialog: { onClose: (reason: "escape" | "backdrop") => void; }
}

export function useAriaDialog<DialogElement extends HTMLElement, TitleElement extends HTMLElement, BodyElement extends HTMLElement, BackdropElement extends HTMLElement>({ softDismiss: { open }, modal: { bodyIsOnlySemantic }, dialog: { onClose } }: UseAriaDialogParameters): UseAriaDialogReturnType<DialogElement, TitleElement, BodyElement, BackdropElement> {
    // TODO: Differences between dialog and modal go here, presumably.
    // Non-modal dialogs need to be able to be repositioned, etc.
    const { useModalBackdrop, useModalBody, useModalProps, useModalTitle, softDismiss: { onBackdropClick } } = useModal<DialogElement, TitleElement, BodyElement, BackdropElement>({ modal: { bodyIsOnlySemantic }, softDismiss: { onClose, open } });
    type R = UseAriaDialogReturnType<DialogElement, TitleElement, BodyElement, BackdropElement>;
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
        softDismiss: { onBackdropClick },
    }
}
