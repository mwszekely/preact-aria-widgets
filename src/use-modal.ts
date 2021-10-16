
import { h } from "preact";
import { useFocusTrap, useGlobalHandler, useMergedProps, useRandomId, useRefElement, useStableCallback, useState } from "preact-prop-helpers";
import { useCallback, useEffect } from "preact/hooks";

/**
 * Adds event handlers for a modal-like soft-dismiss interaction.
 * 
 * That is, any clicks or taps outside of the given component, 
 * or any time the Escape key is pressed within the component,
 * (with various browser oddities regarding clicks on blank or inert areas handled)
 * the component will request to close itself.
 * 
 * Of course, if you don't do anything in the `onClose` function,
 * it won't be a soft dismiss anymore.
 * 
 * @param param0 
 * @returns 
 */
export function useSoftDismiss({ onClose, elements }: { elements: Element | Element[] | null, onClose(reason: "backdrop" | "escape"): void }) {

    function onBackdropClick(e: h.JSX.TargetedEvent<any>) {
        // Basically, "was this event fired on the root-most element, or at least an element not contained by the modal?"
        // Either could be how the browser handles these sorts of "interacting with nothing" events.
        if (e.target == document.documentElement) {
            onClose("backdrop");
        }

        if (elements && e.target instanceof Element) {
            if (!Array.isArray(elements))
                elements = [elements];

            let foundInsideClick = false;

            for (let element of elements) {
                if (element.contains(e.target)) {
                    foundInsideClick = true;
                    break;
                }
            }

            if (!foundInsideClick)
                onClose("backdrop");
        }
    }

    // Since everything else is inert, we listen for captured clicks on the window
    // (we don't use onClick since that doesn't fire when clicked on empty/inert areas)
    // Note: We need a *separate* touch event on mobile Safari, because
    // it doesn't let click events bubble or be captured from traditionally non-interactive elements,
    // but touch events work as expected.
    useGlobalHandler(window, "mousedown", !open ? null : onBackdropClick, { capture: true });
    useGlobalHandler(window, "touchstart", !open ? null : onBackdropClick, { capture: true });
    useGlobalHandler(document, "keydown", (e: KeyboardEvent) => { if (e.key === "Escape") { onClose("escape"); } });
}

/**
 * A generic modal hook, used by modal dialogs, but can also
 * be used by anything that's modal with a backdrop.
 * @param param0 
 * @returns 
 */
export function useModal<ModalElement extends HTMLElement>({ open, onClose }: { open: boolean, onClose: (reason: "escape" | "backdrop") => void }) {

    const stableOnClose = useStableCallback(onClose);

    const [modalDescribedByBody, setModalDescribedByBody] = useState(false);
    useHideScroll(open);

    const { id: modalId, useRandomIdProps: useModalIdProps, useReferencedIdProps: useModalReferencingIdProps } = useRandomId({ prefix: "aria-modal-" });
    const { id: bodyId, useRandomIdProps: useBodyIdProps, useReferencedIdProps: useBodyReferencingIdProps } = useRandomId({ prefix: "aria-modal-body-" });
    const { id: titleId, useRandomIdProps: useTitleIdProps, useReferencedIdProps: useTitleReferencingIdProps } = useRandomId({ prefix: "aria-modal-title-" });

    const { useRefElementProps: useModalRefElement, element: modalElement } = useRefElement<ModalElement>()
    useSoftDismiss({ onClose: stableOnClose, elements: modalElement });

    const useModalBackdrop = useCallback(function useModalBackdrop<BackdropElement extends HTMLElement>() {

        function useModalBackdropProps<P extends h.JSX.HTMLAttributes<BackdropElement>>(props: P) {
            return useMergedProps<BackdropElement>()({ onPointerUp: () => stableOnClose("backdrop") }, props);
        }

        return { useModalBackdropProps }
    }, [])

    const useModalProps = function <P extends h.JSX.HTMLAttributes<ModalElement>>({ "aria-modal": ariaModal, role, ...p0 }: P) {
        const { useFocusTrapProps } = useFocusTrap<ModalElement>({ trapActive: open });
        const p1 = useTitleReferencingIdProps("aria-labelledby")(p0);
        const p2 = useModalIdProps(p1);
        const pFinal = useBodyReferencingIdProps("aria-describedby")(p2);
        return useFocusTrapProps(useMergedProps<ModalElement>()(useModalRefElement({ role: "dialog" }), modalDescribedByBody ? pFinal : p2));
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

