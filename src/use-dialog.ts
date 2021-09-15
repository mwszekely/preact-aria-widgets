
import { useCallback } from "preact/hooks";
import { useAriaModal } from "./use-modal";

export function useAriaDialog<DialogElement extends HTMLElement>({ open, onClose }: { open: boolean, onClose: (reason: "escape" | "backdrop") => void }) {
    // TODO: Differences between dialog and modal go here, presumably.
    // Non-modal dialogs need to be able to be repositioned, etc.
    const { useModalBackdrop, useModalBody, useModalProps, useModalTitle } = useAriaModal<DialogElement>({ open, onClose });

    const useDialogBackdrop = useCallback(<E extends HTMLElement>() => {
        const { useModalBackdropProps } = useModalBackdrop<E>();
        return { useDialogBackdropProps: useModalBackdropProps };
    }, [useModalBackdrop]);

    const useDialogBody = useCallback(<E extends Element>({ descriptive }: { descriptive: boolean }) => {
        const { useModalBodyProps } = useModalBody<E>({ descriptive });
        return { useDialogBodyProps: useModalBodyProps };
    }, [useModalBackdrop]);
    const useDialogProps = useModalProps;

    const useDialogTitle = useCallback(<E extends Element>() => {
        const { useModalTitleProps } = useModalTitle<E>();
        return { useDialogTitleProps: useModalTitleProps };
    }, [useModalTitle]);

    return {
        useDialogProps,
        useDialogTitle,
        useDialogBody,
        useDialogBackdrop
    }
}
