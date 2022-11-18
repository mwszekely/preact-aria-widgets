
import { useModal, UseModalParameters, UseModalReturnType } from "preact-prop-helpers";

/*
export interface UseDialogReturnTypeInfo extends UseSoftDismissReturnTypeInfo {

}

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

export interface UseDialogParameters extends UseModalParameters<"backdrop" | "escape"> {
    //dialog: { onClose: (reason: "escape" | "backdrop") => void; }
}

export function useDialog<FocusContainerElement extends HTMLElement, DialogElement extends HTMLElement, TitleElement extends HTMLElement, BodyElement extends HTMLElement, BackdropElement extends HTMLElement>({
    dismissParameters,
    escapeDismissParameters,
    focusTrapParameters
}: UseDialogParameters): UseDialogReturnType<FocusContainerElement, DialogElement, TitleElement, BodyElement, BackdropElement> {

    debugLog("useDialog");

    // TODO: Differences between dialog and modal go here, presumably.
    // Non-modal dialogs need to be able to be repositioned, etc.
    const {
        focusTrapReturn,
        propsPopup,
        propsSource,
        refElementPopupReturn,
        refElementSourceReturn
    } = useModal<"backdrop" | "escape", FocusContainerElement, DialogElement>({
        dismissParameters,
        escapeDismissParameters,
        focusTrapParameters
    });
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
}*/

export interface UseDialogParameters extends Omit<UseModalParameters<"escape" | "backdrop">, "focusTrapParameters" | "dismissParameters"> {
    focusTrapParameters: Omit<UseModalParameters<"escape" | "backdrop">["focusTrapParameters"], "trapActive">;
    dismissParameters: Omit<UseModalParameters<"escape" | "backdrop">["dismissParameters"], "closeOnLostFocus">;
}

export interface UseDialogReturnType<FocusContainerElement extends Element, PopupElement extends Element> extends UseModalReturnType<FocusContainerElement, null, PopupElement> {

}

export function useDialog<FocusContainerElement extends Element, PopupElement extends Element>({ dismissParameters, escapeDismissParameters, focusTrapParameters }: UseDialogParameters): UseDialogReturnType<FocusContainerElement, PopupElement> {
    const {
        focusTrapReturn,
        propsFocusContainer,
        propsPopup,
        propsSource,
        refElementPopupReturn,
        refElementSourceReturn
    } = useModal<"escape" | "backdrop", FocusContainerElement, null, PopupElement>({
        dismissParameters: { closeOnLostFocus: false, ...dismissParameters },
        escapeDismissParameters,
        focusTrapParameters: { trapActive: true, ...focusTrapParameters }
    });

    return {
        focusTrapReturn,
        propsFocusContainer,
        propsPopup,
        propsSource,
        refElementPopupReturn,
        refElementSourceReturn
    }
}
