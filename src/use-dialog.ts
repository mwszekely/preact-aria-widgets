
import { useCallback } from "preact/hooks";
import { useModal, UseModalReturnType } from "./use-modal";

export interface UseAriaDialogReturnType<DialogElement extends HTMLElement, TitleElement extends HTMLElement, BodyElement extends HTMLElement, BackdropElement extends HTMLElement> {
    useDialogProps: UseModalReturnType<DialogElement, TitleElement, BodyElement, BackdropElement>["useModalProps"];
    useDialogTitle: () => { useDialogTitleProps: ReturnType<UseModalReturnType<DialogElement, TitleElement, BodyElement, BackdropElement>["useModalTitle"]>["useModalTitleProps"] };
    useDialogBody: (a: { descriptive: boolean }) => { useDialogBodyProps: ReturnType<UseModalReturnType<DialogElement, TitleElement, BodyElement, BackdropElement>["useModalBody"]>["useModalBodyProps"] };
    useDialogBackdrop: () => { useDialogBackdropProps: ReturnType<UseModalReturnType<DialogElement, TitleElement, BodyElement, BackdropElement>["useModalBackdrop"]>["useModalBackdropProps"] };
}

export type UseAriaDialogParameters = { 
    open: boolean; 
    onClose: (reason: "escape" | "backdrop") => void; 
    descriptive: boolean; 
};

export function useAriaDialog<DialogElement extends HTMLElement, TitleElement extends HTMLElement, BodyElement extends HTMLElement, BackdropElement extends HTMLElement>({ open, onClose, descriptive }: UseAriaDialogParameters): UseAriaDialogReturnType<DialogElement, TitleElement, BodyElement, BackdropElement> {
    // TODO: Differences between dialog and modal go here, presumably.
    // Non-modal dialogs need to be able to be repositioned, etc.
    const { useModalBackdrop, useModalBody, useModalProps, useModalTitle } = useModal<DialogElement, TitleElement, BodyElement, BackdropElement>({ open, onClose, descriptive });
    type R = UseAriaDialogReturnType<DialogElement, TitleElement, BodyElement, BackdropElement>;
    const useDialogBackdrop = useCallback<R["useDialogBackdrop"]>(() => {
        const { useModalBackdropProps } = useModalBackdrop();
        return { useDialogBackdropProps: useModalBackdropProps };
    }, [useModalBackdrop]);

    const useDialogBody = useCallback<R["useDialogBody"]>(({ descriptive }: { descriptive: boolean }) => {
        const { useModalBodyProps } = useModalBody({ descriptive });
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
        useDialogBackdrop
    }
}
