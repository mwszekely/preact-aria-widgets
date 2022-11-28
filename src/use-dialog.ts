
import { h } from "preact";
import { useMergedProps, useModal, UseModalParameters, UseModalReturnType } from "preact-prop-helpers";
import { PureComponent } from "preact/compat";
import { LabelPosition, useLabel, useLabelSynthetic, UseLabelSyntheticParameters } from "use-label";

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

export interface UseDialogParameters<DialogElement extends Element, TitleElement extends Element> extends Omit<UseModalParameters<"escape" | "backdrop">, "focusTrapParameters" | "dismissParameters">, Pick<UseLabelSyntheticParameters, "labelParameters"> {
    focusTrapParameters: Omit<UseModalParameters<"escape" | "backdrop">["focusTrapParameters"], "trapActive">;
    dismissParameters: Omit<UseModalParameters<"escape" | "backdrop">["dismissParameters"], "closeOnLostFocus">;
}

export interface UseDialogReturnType<FocusContainerElement extends Element, SourceElement extends Element, PopupElement extends Element, TitleElement extends Element> extends Omit<UseModalReturnType<FocusContainerElement, SourceElement, PopupElement>, "propsPopup"> {
    propsDialog: h.JSX.HTMLAttributes<PopupElement>;
    propsTitle: h.JSX.HTMLAttributes<TitleElement>;
}

export function useDialog<FocusContainerElement extends Element,  SourceElement extends Element, DialogElement extends Element, TitleElement extends Element>({ dismissParameters, escapeDismissParameters, focusTrapParameters, labelParameters }: UseDialogParameters<DialogElement, TitleElement>): UseDialogReturnType<FocusContainerElement, SourceElement, DialogElement, TitleElement> {
    const {
        focusTrapReturn,
        propsFocusContainer,
        propsPopup,
        propsSource,
        refElementPopupReturn,
        refElementSourceReturn
    } = useModal<"escape" | "backdrop", FocusContainerElement, SourceElement, DialogElement>({
        dismissParameters: { closeOnLostFocus: false, ...dismissParameters },
        escapeDismissParameters,
        focusTrapParameters: { trapActive: true, ...focusTrapParameters }
    });

    const { 
        propsInput, 
        propsLabel, 
        randomIdInputReturn, 
        randomIdLabelReturn
     } = useLabelSynthetic<DialogElement, TitleElement>({ 
        labelParameters, 
        randomIdInputParameters: { prefix: "aria-dialog-" }, 
        randomIdLabelParameters: { prefix: "aria-dialog-title-" }
     });

    return {
        focusTrapReturn,
        propsFocusContainer,
        propsDialog: useMergedProps<DialogElement>(propsPopup, propsInput),
        propsSource,
        propsTitle: propsLabel,
        refElementPopupReturn,
        refElementSourceReturn
    }
}
