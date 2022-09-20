import { h } from "preact";
import { useCallback } from "preact/hooks";
import { debugLog } from "./props";
import { useModal, UseModalParameters, UseSoftDismissReturnTypeInfo } from "./use-modal";

export interface UseAriaDrawerReturnTypeInfo extends UseSoftDismissReturnTypeInfo {

}

export interface UseAriaDrawerReturnTypeWithHooks<FocusContainerElement extends Element, ModalElement extends Element, TitleElement extends Element, BodyElement extends Element, BackdropElement extends Element> extends UseAriaDrawerReturnTypeInfo {
    useDrawerProps: (props: h.JSX.HTMLAttributes<ModalElement>) => h.JSX.HTMLAttributes<ModalElement>;
    useDrawerTitle: UseDrawerTitle<TitleElement>;
    useDrawerBody: UseDrawerBody<BodyElement>
    useDrawerBackdrop: UseDrawerBackdrop<BackdropElement>;
    useDrawerFocusContainerProps(props: h.JSX.HTMLAttributes<FocusContainerElement>): h.JSX.HTMLAttributes<FocusContainerElement>;
}

export type UseDrawerTitle<TitleElement extends Element> = () => { useDrawerTitleProps: (props: h.JSX.HTMLAttributes<TitleElement>) => h.JSX.HTMLAttributes<TitleElement>; };
export type UseDrawerBody<BodyElement extends Element> = () => { useDrawerBodyProps: (props: h.JSX.HTMLAttributes<BodyElement>) => h.JSX.HTMLAttributes<BodyElement>; };
export type UseDrawerBackdrop<BackdropElement extends Element> = () => { useDrawerBackdropProps: (props: h.JSX.HTMLAttributes<BackdropElement>) => h.JSX.HTMLAttributes<BackdropElement>; };


export interface UseDrawerParameters extends UseModalParameters<never, never> {
}

export function useDrawer<FocusContainerElement extends HTMLElement, DrawerElement extends HTMLElement, TitleElement extends HTMLElement, BodyElement extends HTMLElement, BackdropElement extends HTMLElement>({ softDismiss: { open, onClose }, activeElement, modal: { bodyIsOnlySemantic, focusSelf } }: UseDrawerParameters): UseAriaDrawerReturnTypeWithHooks<FocusContainerElement, DrawerElement, TitleElement, BodyElement, BackdropElement> {

    debugLog("useAriaDrawer");

    // TODO: Drawers are not always modal.

    const {
        useModalBackdrop,
        useModalBody,
        useModalProps,
        useModalTitle,
        useModalFocusContainerProps,
        softDismiss: { onBackdropClick }
    } = useModal<FocusContainerElement, DrawerElement, TitleElement, BodyElement, BackdropElement>({ modal: { bodyIsOnlySemantic: (bodyIsOnlySemantic ?? false), focusSelf }, softDismiss: { onClose, open }, activeElement });

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
        useDrawerFocusContainerProps: useModalFocusContainerProps,
        softDismiss: { onBackdropClick }
    }
}