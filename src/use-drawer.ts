import { h } from "preact";
import { findFirstFocusable, useMergedProps, useModal, UseModalParameters, UseModalReturnType, useStableCallback } from "preact-prop-helpers";
import { Prefices } from "./props";
import { useLabelSynthetic, UseLabelSyntheticParameters } from "./use-label";
/*import { useModal, UseModalParameters, UseSoftDismissReturnTypeInfo } from "./use-modal";


export interface UseDrawerReturnTypeInfo extends UseSoftDismissReturnTypeInfo {

}

export interface UseDrawerReturnTypeWithHooks<FocusContainerElement extends Element, ModalElement extends Element, TitleElement extends Element, BodyElement extends Element, BackdropElement extends Element> extends UseDrawerReturnTypeInfo {
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

export function useDrawer<FocusContainerElement extends HTMLElement, DrawerElement extends HTMLElement, TitleElement extends HTMLElement, BodyElement extends HTMLElement, BackdropElement extends HTMLElement>({ softDismiss: { open, onClose }, activeElement, modal: { bodyIsOnlySemantic, focusSelf } }: UseDrawerParameters): UseDrawerReturnTypeWithHooks<FocusContainerElement, DrawerElement, TitleElement, BodyElement, BackdropElement> {

    debugLog("useDrawer");

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
}*/



export interface UseDrawerParameters<_DialogElement extends Element, _TitleElement extends Element> extends Omit<UseModalParameters<"escape" | "backdrop" | "lost-focus">, "focusTrapParameters"> {
    labelParameters: Omit<UseLabelSyntheticParameters["labelParameters"], "onLabelClick">;
    focusTrapParameters: Omit<UseModalParameters<"escape" | "backdrop" | "lost-focus">["focusTrapParameters"], "onlyMoveFocus">
}

export interface UseDrawerReturnType<FocusContainerElement extends Element, SourceElement extends Element, DrawerElement extends Element, TitleElement extends Element> extends Omit<UseModalReturnType<FocusContainerElement, SourceElement, DrawerElement>, "propsPopup"> {
    propsDrawer: h.JSX.HTMLAttributes<DrawerElement>;
    propsTitle: h.JSX.HTMLAttributes<TitleElement>;
}

export function useDrawer<FocusContainerElement extends Element, SourceElement extends Element, PopupElement extends Element, TitleElement extends Element>({ dismissParameters, escapeDismissParameters, focusTrapParameters, labelParameters }: UseDrawerParameters<PopupElement, TitleElement>): UseDrawerReturnType<FocusContainerElement, SourceElement, PopupElement, TitleElement> {
    const {
        focusTrapReturn,
        propsFocusContainer,
        propsPopup,
        propsSource,
        refElementPopupReturn,
        refElementSourceReturn
    } = useModal<"escape" | "backdrop" | "lost-focus", FocusContainerElement, SourceElement, PopupElement>({
        dismissParameters,
        escapeDismissParameters,
        focusTrapParameters: { onlyMoveFocus: false,  ...focusTrapParameters }
    });

    const {
        propsInput,
        propsLabel,
    } = useLabelSynthetic<PopupElement, TitleElement>({
        labelParameters: {
            ...labelParameters, onLabelClick: useStableCallback(() => {
                const e = refElementPopupReturn.getElement();
                focusTrapParameters.focusPopup(e, () => findFirstFocusable(e!));

            })
        },
        randomIdInputParameters: { prefix: Prefices.drawer },
        randomIdLabelParameters: { prefix: Prefices.drawerTitle }
    });

    return {
        focusTrapReturn,
        propsFocusContainer,
        propsDrawer: useMergedProps<PopupElement>(propsPopup, propsInput),
        propsTitle: propsLabel,
        propsSource,
        refElementPopupReturn,
        refElementSourceReturn
    }
}


