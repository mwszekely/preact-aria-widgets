import { useCallback } from "preact/hooks";
import { useModal } from "./use-modal";


export interface UseDrawerParameters {
    open: boolean;
    onClose(reason: "backdrop" | "escape" | "lost-focus" | undefined): void;
}

export function useDrawer<DrawerElement extends HTMLElement>({ open, onClose }: UseDrawerParameters) {

    // TODO: Drawers are not always modal.

    const { useModalBackdrop, useModalBody, useModalProps, useModalTitle } = useModal<DrawerElement>({ open, onClose });

    const useDrawerBackdrop = useCallback(<E extends HTMLElement>() => {
        const { useModalBackdropProps } = useModalBackdrop<E>();
        return { useDrawerBackdropProps: useModalBackdropProps };
    }, [useModalBackdrop]);

    const useDrawerBody = useCallback(<E extends Element>({ descriptive }: { descriptive: boolean }) => {
        const { useModalBodyProps } = useModalBody<E>({ descriptive });
        return { useDrawerBodyProps: useModalBodyProps };
    }, [useModalBackdrop]);
    const useDrawerProps = useModalProps;

    const useDrawerTitle = useCallback(<E extends Element>() => {
        const { useModalTitleProps } = useModalTitle<E>();
        return { useDrawerTitleProps: useModalTitleProps };
    }, [useModalTitle]);

    return {
        useDrawerProps,
        useDrawerTitle,
        useDrawerBody,
        useDrawerBackdrop
    }
}