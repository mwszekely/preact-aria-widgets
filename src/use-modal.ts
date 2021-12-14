
import { h } from "preact";
import { useActiveElement, useFocusTrap, useGlobalHandler, useMergedProps, usePassiveState, useRandomId, useRefElement, useStableCallback, useState } from "preact-prop-helpers";
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
export function useSoftDismiss({ onClose, getElements }: { getElements: () => Element | Element[] | null, onClose(reason: "backdrop" | "escape" | "lost-focus"): void }) {

    function onBackdropClick(e: h.JSX.TargetedEvent<any>) {
        // Basically, "was this event fired on the root-most element, or at least an element not contained by the modal?"
        // Either could be how the browser handles these sorts of "interacting with nothing" events.
        if (e.target == document.documentElement) {
            onClose("backdrop");
        }

        let elements = getElements();

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

    useActiveElement({
        onLastActiveElementChange: newElement => {
            let validFocusableElements = getElements();

            if (validFocusableElements) {
                if (!Array.isArray(validFocusableElements))
                    validFocusableElements = [validFocusableElements];

                for (let focusable of validFocusableElements) {
                    if (focusable?.contains(newElement))
                        return;
                }
            }

            onClose("lost-focus");
        }
    })

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

    const { useRefElementProps: useModalRefElement, getElement: getModalElement } = useRefElement<ModalElement>({})
    useSoftDismiss({ onClose: stableOnClose, getElements: getModalElement });

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
    const [getScrollbarWidth, setScrollbarWidth] = usePassiveState<number | null>(null);
    const [getScrollbarHeight, setScrollbarHeight] = usePassiveState<number | null>(null);

    useEffect(() => {
        if (hideScroll) {

            // When scrolling is resumed, we'll need to restore the original scroll positions
            // so we need to keep this information around
            const originalScrollTop = document.documentElement.scrollTop;
            const originalScrollLeft = document.documentElement.scrollLeft;

            // Measure the width of the page (minus the scrollbar)
            let widthWithScrollBar = document.documentElement.scrollWidth;
            let heightWithScrollBar = document.documentElement.scrollHeight;

            // Apply a class that hides the scrollbar.
            document.documentElement.classList.add("document-scroll-hidden");

            // In case multiple things are locking scroll, keep track of how many are doing that
            // (just add 1 on enable, subtract 1 on disable)
            document.documentElement.dataset["scrollHiders"] = (+(document.documentElement.dataset["scrollHiders"] || "0") + 1).toString();

            // Measure the new width without a scrollbar 
            // so we can take the difference as the scrollbar width.
            let widthWithoutScrollBar = document.documentElement.scrollWidth;
            let heightWithoutScrollBar = document.documentElement.scrollHeight;
            let scrollbarWidth = (widthWithoutScrollBar - widthWithScrollBar);
            let scrollbarHeight = (heightWithoutScrollBar - heightWithScrollBar);

            // Failsafe -- if this measuring trick does something unexpected, just ignore it
            if (scrollbarWidth > 80)
                scrollbarWidth = 0;
            if (scrollbarHeight > 80)
                scrollbarHeight = 0;

            // Make our measurements available as CSS properties for general use
            document.documentElement.style.setProperty("--root-scrollbar-width", `${scrollbarWidth}px`);
            document.documentElement.style.setProperty("--root-scrollbar-height", `${scrollbarHeight}px`);
            document.documentElement.style.setProperty("--root-scrollstop-top", `${originalScrollTop}px`);
            document.documentElement.style.setProperty("--root-scrollstop-left", `${originalScrollLeft}px`);

            setScrollbarWidth(scrollbarWidth);
            setScrollbarHeight(scrollbarHeight);

            return () => {
                // Undo all the things we just did
                document.documentElement.dataset["scrollHiders"] = (+(document.documentElement.dataset["scrollHiders"] || "0") - 1).toString();
                if (document.documentElement.dataset["scrollHiders"] == "0") {

                    // If we were the last scroll-locking thing to stop, then remove the class that stops scrolling.
                    document.documentElement.removeAttribute("data-scroll-hiders");
                    document.documentElement.classList.remove("document-scroll-hidden");

                    // Also, restore the original scroll position
                    // We do this by forcing the scroll behavior to not be smooth
                    // (it's instant if nothing is set to smooth, https://www.w3.org/TR/cssom-view/#scrolling),
                    // scrolling, then restoring the original scroll behavior 
                    // (which was probably already auto anyway, but just to be safe)
                    const originalScrollBehavior = document.documentElement.style.scrollBehavior;
                    document.documentElement.style.scrollBehavior = "auto";
                    document.documentElement.scrollTo({ top: originalScrollTop, left: originalScrollLeft, behavior: "auto" });
                    document.documentElement.style.scrollBehavior = originalScrollBehavior;
                }
            }

        }
    }, [hideScroll]);

    return { getScrollbarWidth, getScrollbarHeight };
}

