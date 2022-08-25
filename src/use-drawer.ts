import { useCallback } from "preact/hooks";
import { useModal, UseModalReturnType } from "./use-modal";

export interface UseAriaDrawerReturnType<DrawerElement extends HTMLElement, TitleElement extends HTMLElement, BodyElement extends HTMLElement, BackdropElement extends HTMLElement> {
    useDrawerProps: UseModalReturnType<DrawerElement, TitleElement, BodyElement, BackdropElement>["useModalProps"];
    useDrawerTitle: () => { useDrawerTitleProps: ReturnType<UseModalReturnType<DrawerElement, TitleElement, BodyElement, BackdropElement>["useModalTitle"]>["useModalTitleProps"] };
    useDrawerBody: (a: { descriptive: boolean }) => { useDrawerBodyProps: ReturnType<UseModalReturnType<DrawerElement, TitleElement, BodyElement, BackdropElement>["useModalBody"]>["useModalBodyProps"] };
    useDrawerBackdrop: () => { useDrawerBackdropProps: ReturnType<UseModalReturnType<DrawerElement, TitleElement, BodyElement, BackdropElement>["useModalBackdrop"]>["useModalBackdropProps"] };
}


export interface UseDrawerParameters {
    open: boolean;
    onClose(reason: "backdrop" | "escape" | "lost-focus" | undefined): void;
}

export function useDrawer<DrawerElement extends HTMLElement, TitleElement extends HTMLElement, BodyElement extends HTMLElement, BackdropElement extends HTMLElement>({ open, onClose }: UseDrawerParameters): UseAriaDrawerReturnType<DrawerElement, TitleElement, BodyElement, BackdropElement> {

    // TODO: Drawers are not always modal.

    const { useModalBackdrop, useModalBody, useModalProps, useModalTitle } = useModal<DrawerElement, TitleElement, BodyElement, BackdropElement>({ open, onClose });

    const useDrawerBackdrop = useCallback(() => {
        const { useModalBackdropProps } = useModalBackdrop();
        return { useDrawerBackdropProps: useModalBackdropProps };
    }, [useModalBackdrop]);

    const useDrawerBody = useCallback(({ descriptive }: { descriptive: boolean }) => {
        const { useModalBodyProps } = useModalBody({ descriptive });
        return { useDrawerBodyProps: useModalBodyProps };
    }, [useModalBackdrop]);
    const useDrawerProps = useModalProps;

    const useDrawerTitle = useCallback(() => {
        const { useModalTitleProps } = useModalTitle();
        return { useDrawerTitleProps: useModalTitleProps };
    }, [useModalTitle]);

    return {
        useDrawerProps,
        useDrawerTitle,
        useDrawerBody,
        useDrawerBackdrop
    }
}