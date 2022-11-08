
import { h } from "preact";
import { DismissListenerTypes, useHideScroll, useDismiss, UseDismissParameters, useActiveElement, UseActiveElementParameters, useFocusTrap, useMergedProps, usePassiveState, useRandomId, useRefElement, useStableCallback, useStableGetter, UseEscapeDismissParameters, UseLostFocusDismissParameters, UseBackdropDismissParameters } from "preact-prop-helpers";
import { useCallback, useEffect } from "preact/hooks";




export interface UseModalParameters<Listeners extends DismissListenerTypes> extends UseDismissParameters<Listeners> {
    modalParameters: {
        /**
         * When true, the body element provided contains purely semantic content
         * that can be read out by a screen reader in one long, uninterrupted stretch.
         * 
         * This should be false if the modal contains, for example, a list or other
         * interactive widgets, and true if it's mostly short-form text content.
         * 
         * The default is false to be on the safe side, but this should be true whenever reasonable.
         */
        bodyIsOnlySemantic?: boolean;

        /**
         * When any modal dialog opens, it must send focus to that dialog, ideally whichever element makes the most sense in context.
         * 
         * For example, if it's a confirmation dialog about deleting something, it's best to send focus to the "cancel" button.
         * 
         * In other cases, it makes more sense to focus the dialog's title, first interactive element, etc.
         * 
         * By default, we try to pick a sensible default -- if the dialog contains only descriptive content, then we focus the body. Otherwise we focus the title.
         * 
         * **PLEASE** consider overriding this to provide the best experience for your dialog.  You shouldn't have that many modal dialogs anyway -- take that bit of extra time if you can.
         */
        focusSelf?(): void;
    }
}



export interface UseModalReturnType<FocusContainerElement extends Element, ModalElement extends Element, TitleElement extends Element, BodyElement extends Element> {
    propsModal: h.JSX.HTMLAttributes<ModalElement>;
    propsTitle: h.JSX.HTMLAttributes<TitleElement>;
    propsBody: h.JSX.HTMLAttributes<BodyElement>
    propsFocusContainer: h.JSX.HTMLAttributes<FocusContainerElement>;
}

//export type UseModalTitle<TitleElement extends Element> = () => { useModalTitleProps: (props: h.JSX.HTMLAttributes<TitleElement>) => h.JSX.HTMLAttributes<TitleElement>; };
//export type UseModalBody<BodyElement extends Element> = () => { useModalBodyProps: (props: h.JSX.HTMLAttributes<BodyElement>) => h.JSX.HTMLAttributes<BodyElement>; };
//export type UseModalBackdrop<BackdropElement extends Element> = () => { useModalBackdropProps: (props: h.JSX.HTMLAttributes<BackdropElement>) => h.JSX.HTMLAttributes<BackdropElement>; };

/**
 * A generic modal hook, used by modal dialogs, but can also
 * be used by anything that's modal with a backdrop.
 * @param param0 
 * @returns 
 */
export function useModal<Listeners extends DismissListenerTypes, FocusContainerElement extends Element, ModalElement extends Element, TitleElement extends Element, BodyElement extends Element>({
    modalParameters: { bodyIsOnlySemantic: descriptive, focusSelf },
    dismissParameters: { closeOnBackdrop, closeOnEscape, closeOnLostFocus, onClose, open },
    escapeDismissParameters: { getWindow, parentDepth }
}: UseModalParameters<Listeners>): UseModalReturnType<FocusContainerElement, ModalElement, TitleElement, BodyElement> {

    const getDocument = useCallback(() => { return getWindow().document; }, [getWindow])
    const { refElementReturn: { propsStable: useTitleRefElementProps, getElement: getTitleElement } } = useRefElement<TitleElement>({ refElementParameters: {} });
    const { refElementReturn: { propsStable: useBodyRefElementProps, getElement: getBodyElement } } = useRefElement<BodyElement>({ refElementParameters: {} });
    focusSelf ??= (() => {
        const bodyElement = getBodyElement() as HTMLElement | null;
        const titleElement = getTitleElement() as HTMLElement | null;
        if (descriptive && bodyElement && "focus" in (bodyElement as Element as HTMLElement)) {
            bodyElement.focus({ preventScroll: true });
        }
        else if (titleElement && "focus" in titleElement) {
            titleElement.focus({ preventScroll: true });
        }
    });
    const stableOnClose = useStableCallback(onClose);
    const stableFocusSelf = useStableCallback(focusSelf);

    useHideScroll(open);

    const { useRandomIdSourceElement: useModalIdAsSource, useRandomIdReferencerElement: useModalIdAsReferencerElement } = useRandomId<ModalElement>({ randomIdParameters: { prefix: "aria-modal-" } });
    const { useRandomIdSourceElement: useBodyIdAsSource, useRandomIdReferencerElement: useBodyIdReferencerElement } = useRandomId<BodyElement>({ randomIdParameters: { prefix: "aria-modal-body-" } });
    const { useRandomIdSourceElement: useTitleIdAsSource, useRandomIdReferencerElement: useTitleIdReferencerElement } = useRandomId<TitleElement>({ randomIdParameters: { prefix: "aria-modal-title-" } });


    const { refElementReturn: { propsStable: useModalRefElement, getElement: getModalElement } } = useRefElement<ModalElement>({ refElementParameters: {} });
    const _v: void = useDismiss<Listeners, any, FocusContainerElement>({
        dismissParameters: { closeOnBackdrop, closeOnEscape, closeOnLostFocus, onClose, open },
        escapeDismissParameters: { getWindow, parentDepth }
    });


    const {
        focusTrap: { propsUnstable: fcp2 },
        refElementReturn: { propsStable: fcp1 } } = useFocusTrap<FocusContainerElement>({
            focusTrapParameters: { trapActive: open },
            activeElementParameters: { getDocument },
            refElementParameters: {}
        });
        
    const propsFocusContainer: h.JSX.HTMLAttributes<FocusContainerElement> = useMergedProps(fcp1, fcp2);


    const useModalProps = function ({ "aria-modal": ariaModal, role, ...p0 }: h.JSX.HTMLAttributes<ModalElement>): h.JSX.HTMLAttributes<ModalElement> {
        const { useProps: useModalIdAsSourceProps } = useModalIdAsSource();
        const { useProps: useTitleIdReferencerElementProps } = useTitleIdReferencerElement<ModalElement>("aria-labelledby" as never);
        const { useProps: useBodyIdReferencerElementProps } = useBodyIdReferencerElement<ModalElement>("aria-describedby" as never);
        console.assert(!ariaModal);
        useEffect(() => {
            if (open)
                stableFocusSelf();
        }, [open])
        const p1 = useBodyIdReferencerElementProps(p0);
        const p2 = useModalIdAsSourceProps(p1);
        const pFinal = useTitleIdReferencerElementProps(p2);
        return useMergedProps(softDismissProps, useMergedProps(useMergedProps<ModalElement>(useModalRefElement, { role: role || "dialog" }), descriptive ? pFinal : p2));
    }

    const useModalTitle = useCallback<UseModalTitle<TitleElement>>(function useModalTitle() {

        const { useProps: useTitleIdAsSourceProps } = useTitleIdAsSource();
        const useModalTitleProps = function (props: h.JSX.HTMLAttributes<TitleElement>): h.JSX.HTMLAttributes<TitleElement> {
            props.tabIndex ??= -1;
            return useMergedProps(useTitleRefElementProps, useTitleIdAsSourceProps(props));
        }

        return { useModalTitleProps };
    }, [])

    const useModalBody = useCallback<UseModalBody<BodyElement>>(function useModalBody() {
        const { useProps: useBodyIdAsSourceProps } = useBodyIdAsSource();
        const { useProps: useModalIdAsReferencerElementProps } = useModalIdAsReferencerElement<BodyElement>("data-modal-id" as never);

        const useModalBodyProps = function (props: h.JSX.HTMLAttributes<BodyElement>): h.JSX.HTMLAttributes<BodyElement> {
            props.tabIndex ??= -1;
            return useMergedProps(useBodyRefElementProps, useBodyIdAsSourceProps(useModalIdAsReferencerElementProps(props)));
        }

        return { useModalBodyProps };
    }, [])



    return {
        useModalProps,
        useModalTitle,
        useModalBody,
        useModalBackdrop,
        useModalFocusContainerProps,
        softDismiss: { onBackdropClick }
    };
}

