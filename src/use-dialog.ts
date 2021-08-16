
import { useAriaModal } from "./use-modal";

export function useAriaDialog<DialogElement extends HTMLElement>({ open, onClose }: { open: boolean, onClose: (reason: "escape" | "backdrop") => void }) {
    // TODO: Differences between dialog and modal go here, presumably
    const { useModalBackdrop, useModalBody, useModalProps, useModalTitle } = useAriaModal<DialogElement>({ open, onClose });

    return {
        useDialogProps: useModalProps,
        useDialogTitle: useModalTitle,
        useDialogBody: useModalBody,
        useDialogBackdrop: useModalBackdrop
    }
}
