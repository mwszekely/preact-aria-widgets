
import { h } from "preact"
import { useCallback, useEffect, useLayoutEffect } from "preact/hooks";
import { useMergedProps } from "preact-prop-helpers/use-merged-props";
import { useRandomId } from "preact-prop-helpers/use-random-id";
import { useRefElement } from "preact-prop-helpers/use-ref-element";
import { useFocusTrap } from "preact-prop-helpers/use-focus-trap";
import { useGlobalHandler } from "preact-prop-helpers/use-event-handler";
import { useState } from "preact-prop-helpers/use-state";

/**
 * A generic modal hook, used by modal dialogs, but can also
 * be used by anything that's modal with a backdrop.
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


    const useModalBackdrop = useCallback(function useModalBackdrop<BackdropElement extends HTMLElement>() {

        function useModalBackdropProps<P extends h.JSX.HTMLAttributes<BackdropElement>>(props: P) {
            return useMergedProps<BackdropElement>()({  }, props);
        }

        return { useModalBackdropProps }
    }, [])

    const useModalProps = function <P extends h.JSX.HTMLAttributes<ModalElement>>({ "aria-modal": ariaModal, role, ...p0 }: P) {
        const { useFocusTrapProps } = useFocusTrap<ModalElement>({ trapActive: open });
        const p1 = useTitleReferencingIdProps("aria-labelledby")(p0);
        const p2 = useModalIdProps(p1);
        const pFinal = useBodyReferencingIdProps("aria-describedby")(p2);
        return useFocusTrapProps(useMergedProps<ModalElement>()({ role: "dialog", onKeyDown }, modalDescribedByBody ? pFinal : p2));
    }

    const useModalTitle = useCallback(function useModalTitle<TitleElement extends Element>() {

        const useModalTitleProps = function <P extends h.JSX.HTMLAttributes<TitleElement>>(props: P) {
            return useTitleIdProps(props);
        }

        return { useModalTitleProps };
    }, [])

    const useModalBody = useCallback(function useModalBody<BodyElement extends Element>({ descriptive }: { descriptive: boolean }) {
        setModalDescribedByBody(descriptive);

        const useModalBodyProps = function <P extends h.JSX.HTMLAttributes<BodyElement>>(props: P) {
            return useBodyIdProps(props);
        }

        return { useModalBodyProps };
    }, [])



    return {
        useModalProps,
        useModalTitle,
        useModalBody,
        useModalBackdrop
    }
}


/**
 * Allows for hiding the scroll bar of the root HTML element
 * without shifting the layout of the page more than adding a fow pixels
 * of padding to the root element if necessary.
 * @param hideScroll 
 */
 export function useHideScroll(hideScroll: boolean) {
    const [scrollbarWidth, setScrollbarWidth, getScrollbarWidth] = useState<number | null>(null);

    useEffect(() => {
        if (hideScroll) {
            let widthWithScrollBar = document.documentElement.scrollWidth;
            document.documentElement.classList.add("document-scroll-hidden");
            document.documentElement.dataset["scrollHiders"] = (+(document.documentElement.dataset["scrollHiders"] || "0") + 1).toString();
            let widthWithoutScrollBar = document.documentElement.scrollWidth;

            let scrollbarWidth = (widthWithoutScrollBar - widthWithScrollBar);

            // Failsafe -- if this measuring trick does something unexpected, just ignore it
            if (scrollbarWidth > 80)
                scrollbarWidth = 0;

            document.documentElement.style.setProperty("--scrollbar-width", `${scrollbarWidth}px`);

            setScrollbarWidth(scrollbarWidth);

            return () => {
                document.documentElement.dataset["scrollHiders"] = (+(document.documentElement.dataset["scrollHiders"] || "0") - 1).toString();
                if (document.documentElement.dataset["scrollHiders"] == "0") {
                    document.documentElement.removeAttribute("data-scroll-hiders");
                    document.documentElement.classList.remove("document-scroll-hidden");
                }
            }

        }
    }, [hideScroll]);

    return { scrollbarWidth, getScrollbarWidth };
}

