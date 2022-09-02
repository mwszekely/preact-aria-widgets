import { useCallback } from "preact/hooks";
import { useModal, UseModalParameters, UseModalReturnType } from "./use-modal";

export interface UseAriaDrawerReturnType<DrawerElement extends Element, TitleElement extends Element, BodyElement extends Element, BackdropElement extends Element> {
    useDrawerProps: UseModalReturnType<DrawerElement, TitleElement, BodyElement, BackdropElement>["useModalProps"];
    useDrawerTitle: () => { useDrawerTitleProps: ReturnType<UseModalReturnType<DrawerElement, TitleElement, BodyElement, BackdropElement>["useModalTitle"]>["useModalTitleProps"] };
    useDrawerBody: (a: { descriptive: boolean }) => { useDrawerBodyProps: ReturnType<UseModalReturnType<DrawerElement, TitleElement, BodyElement, BackdropElement>["useModalBody"]>["useModalBodyProps"] };
    useDrawerBackdrop: () => { useDrawerBackdropProps: ReturnType<UseModalReturnType<DrawerElement, TitleElement, BodyElement, BackdropElement>["useModalBackdrop"]>["useModalBackdropProps"] };
    softDismiss: Omit<UseModalReturnType<DrawerElement, any, any, any>["softDismiss"], "onClose">;
}


export interface UseDrawerParameters {
    softDismiss: UseModalParameters["softDismiss"];
   // modal: Omit<UseModalParameters["modal"], "bodyIsOnlySemantic">;
    open: boolean;
    drawer: { onClose(reason: "backdrop" | "escape" | "lost-focus" | undefined): void; }
}

export function useDrawer<DrawerElement extends HTMLElement, TitleElement extends HTMLElement, BodyElement extends HTMLElement, BackdropElement extends HTMLElement>({ drawer: { onClose }, softDismiss: { open } }: UseDrawerParameters): UseAriaDrawerReturnType<DrawerElement, TitleElement, BodyElement, BackdropElement> {

    // TODO: Drawers are not always modal.

    const { useModalBackdrop, useModalBody, useModalProps, useModalTitle, softDismiss: { onBackdropClick } } = useModal<DrawerElement, TitleElement, BodyElement, BackdropElement>({ modal: { bodyIsOnlySemantic: false }, softDismiss: { onClose, open } });

    const useDrawerBackdrop = useCallback(() => {
        const { useModalBackdropProps } = useModalBackdrop();
        return { useDrawerBackdropProps: useModalBackdropProps };
    }, [useModalBackdrop]);

    const useDrawerBody = useCallback(() => {
        const { useModalBodyProps } = useModalBody();
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
        useDrawerBackdrop,
        softDismiss: { onBackdropClick }
    }
}