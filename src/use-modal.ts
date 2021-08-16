
import { h } from "preact"
import { useLayoutEffect, useState } from "preact/hooks";
import { useMergedProps } from "preact-prop-helpers/use-merged-props";
import { useRandomId } from "preact-prop-helpers/use-random-id";
import { useRefElement } from "preact-prop-helpers/use-ref-element";
import { useFocusTrap } from "preact-prop-helpers/use-focus-trap";
import { useGlobalHandler } from "preact-prop-helpers/use-event-handler";

/**
 * A generic modal hook, used by both dialogs and offcanvases
 * @param param0 
 * @returns 
 */
export function useAriaModal<ModalElement extends HTMLElement>({ open, onClose }: { open: boolean, onClose: (reason: "escape" | "backdrop") => void }) {


    const [modalDescribedByBody, setModalDescribedByBody] = useState(false);

    const { id: modalId, useRandomIdProps: useModalIdProps, useReferencedIdProps: useModalReferencingIdProps } = useRandomId({ prefix: "aria-modal-" });
    const { id: bodyId, useRandomIdProps: useBodyIdProps, useReferencedIdProps: useBodyReferencingIdProps } = useRandomId({ prefix: "aria-modal-body-" });
    const { id: titleId, useRandomIdProps: useTitleIdProps, useReferencedIdProps: useTitleReferencingIdProps } = useRandomId({ prefix: "aria-modal-title-" });

    // Since everything else is inert, we listen for captured clicks on the window
    // (we also use pointerdown instead of onClick since that doesn't fire on non-elements)
    useGlobalHandler(window, "pointerdown", (e) => {
        if (e.target == document.documentElement || !(modalId && e.target instanceof Element && document.getElementById(modalId)?.contains(e.target))) {
            onClose("backdrop");
        }
    }, { capture: true })

    const onKeyDown: h.JSX.EventHandler<h.JSX.TargetedKeyboardEvent<Element>> = (e) => {
        if (e.key === "Escape") {
            onClose("escape");
        }
    }


    const useModalBackdrop = function <BackdropElement extends HTMLElement>() {

        function useModalBackdropProps<P extends h.JSX.HTMLAttributes<BackdropElement>>(props: P) {
            return useMergedProps<BackdropElement>()({  }, props);
        }

        return { useModalBackdropProps }
    }

    const useModalProps = function <P extends h.JSX.HTMLAttributes<ModalElement>>({ "aria-modal": ariaModal, role, ...p0 }: P) {
        const { useFocusTrapProps } = useFocusTrap<ModalElement>({ trapActive: open });
        const p1 = useTitleReferencingIdProps("aria-labelledby")(p0);
        const p2 = useModalIdProps(p1);
        const pFinal = useBodyReferencingIdProps("aria-describedby")(p2);
        return useFocusTrapProps(useMergedProps<ModalElement>()({ role: "dialog", onKeyDown }, modalDescribedByBody ? pFinal : p2));
    }

    function useModalTitle<TitleElement extends Element>() {

        const useModalTitleProps = function <P extends h.JSX.HTMLAttributes<TitleElement>>(props: P) {
            return useTitleIdProps(props);
        }

        return { useModalTitleProps };
    }

    function useModalBody<BodyElement extends Element>({ descriptive }: { descriptive: boolean }) {
        setModalDescribedByBody(descriptive);

        const useModalBodyProps = function <P extends h.JSX.HTMLAttributes<BodyElement>>(props: P) {
            return useBodyIdProps(props);
        }

        return { useModalBodyProps };
    }



    return {
        useModalProps,
        useModalTitle,
        useModalBody,
        useModalBackdrop
    }
}
