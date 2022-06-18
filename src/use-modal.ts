
import { h } from "preact";
import { useActiveElement, useFocusTrap, useMergedProps, usePassiveState, useRandomId, useRefElement, useStableCallback, useStableGetter, useState } from "preact-prop-helpers";
import { useCallback, useEffect } from "preact/hooks";

export interface UseSoftDismissParameters {

    /**
     * Must be a function that returns all elements that count as "within" this component.
     * 
     * Usually just a single element, but e.g. a Menu + MenuButton could have two.
     */
    getElements: () => Element | Element[] | null;

    /**
     * Called when the component is dismissed
     */
    onClose(reason: "backdrop" | "escape" | "lost-focus"): void;
}

export interface UseModalParameters extends Omit<UseSoftDismissParameters, "getElements"> {
    open: boolean;
}

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
export function useSoftDismiss<T extends Node>({ onClose, getElements }: UseSoftDismissParameters) {

    const stableOnClose = useStableCallback(onClose);
    const stableGetElements = useStableCallback(getElements);
    const getOpen = useStableGetter(open);

    const onBackdropClick = useCallback(function onBackdropClick(e: h.JSX.TargetedEvent<any>) {
        const document = getElement()?.ownerDocument;

        // Basically, "was this event fired on the root-most element, or at least an element not contained by the modal?"
        // Either could be how the browser handles these sorts of "interacting with nothing" events.
        if (e.target == document?.documentElement) {
            stableOnClose("backdrop");
        }

        let elements = stableGetElements();

        if (elements && e.target instanceof Element) {
            if (!Array.isArray(elements))
                elements = [elements];

            let foundInsideClick = false;

            for (const element of elements) {
                if (element.contains(e.target)) {
                    foundInsideClick = true;
                    break;
                }
            }

            if (!foundInsideClick)
                onClose("backdrop");
        }
    }, [])

    const { useActiveElementProps, getElement } = useActiveElement<T>({
        onLastActiveElementChange: useCallback((newElement: T | null) => {
            let validFocusableElements = stableGetElements();

            if (validFocusableElements) {
                if (!Array.isArray(validFocusableElements))
                    validFocusableElements = [validFocusableElements];

                for (const focusable of validFocusableElements) {
                    if (focusable?.contains(newElement))
                        return;
                }
            }

            onClose("lost-focus");
        }, [])
    });


    const { useRefElementProps } = useRefElement<T>({
        onElementChange: useCallback((e: T | null) => {
            const document = e?.ownerDocument;
            const window = document?.defaultView;

            // Since everything else is inert, we listen for captured clicks on the window
            // (we don't use onClick since that doesn't fire when clicked on empty/inert areas)
            // Note: We need a *separate* touch event on mobile Safari, because
            // it doesn't let click events bubble or be captured from traditionally non-interactive elements,
            // but touch events work as expected.
            const mouseDown = (e: MouseEvent) => { if (getOpen()) onBackdropClick(e); };
            const touchStart = (e: TouchEvent) => { if (getOpen()) onBackdropClick(e); };
            const keyDown = (e: KeyboardEvent) => { if (e.key === "Escape") { stableOnClose("escape"); } };

            window?.addEventListener("mousedown", mouseDown, { capture: true });
            window?.addEventListener("touchstart", touchStart, { capture: true });
            window?.addEventListener("keydown", keyDown);

            return () => {
                window?.removeEventListener("mousedown", mouseDown);
                window?.removeEventListener("touchstart", touchStart);
                window?.removeEventListener("keydown", keyDown);
            }
        }, [])
    });

    return { useSoftDismissProps: useCallback(<P extends h.JSX.HTMLAttributes<T>>(props: P) => useActiveElementProps(useRefElementProps(props)), [useActiveElementProps, useRefElementProps]) }
}

/**
 * A generic modal hook, used by modal dialogs, but can also
 * be used by anything that's modal with a backdrop.
 * @param param0 
 * @returns 
 */
export function useModal<ModalElement extends HTMLElement>({ open, onClose }: UseModalParameters) {

    const stableOnClose = useStableCallback(onClose);

    const [modalDescribedByBody, setModalDescribedByBody] = useState(false);
    useHideScroll(open);

    const { useRandomIdProps: useModalIdProps } = useRandomId({ prefix: "aria-modal-" });
    const { useRandomIdProps: useBodyIdProps, useReferencedIdProps: useBodyReferencingIdProps } = useRandomId({ prefix: "aria-modal-body-" });
    const { useRandomIdProps: useTitleIdProps, useReferencedIdProps: useTitleReferencingIdProps } = useRandomId({ prefix: "aria-modal-title-" });

    const { useRefElementProps: useModalRefElement, getElement: getModalElement } = useRefElement<ModalElement>({})
    const { useSoftDismissProps } = useSoftDismiss<ModalElement>({ onClose: stableOnClose, getElements: getModalElement });

    const useModalBackdrop = useCallback(function useModalBackdrop<BackdropElement extends HTMLElement>() {

        function useModalBackdropProps<P extends h.JSX.HTMLAttributes<BackdropElement>>(props: P) {
            return useMergedProps<BackdropElement>()({ onPointerUp: () => stableOnClose("backdrop") }, props);
        }

        return { useModalBackdropProps }
    }, [])

    const useModalProps = function <P extends h.JSX.HTMLAttributes<ModalElement>>({ "aria-modal": ariaModal, role, ...p0 }: P) {
        console.assert(!ariaModal);
        console.assert(!role);
        const { useFocusTrapProps } = useFocusTrap<ModalElement>({ trapActive: open });
        const p1 = useTitleReferencingIdProps("aria-labelledby")(p0);
        const p2 = useModalIdProps(p1);
        const pFinal = useBodyReferencingIdProps("aria-describedby")(p2);
        return useFocusTrapProps(useSoftDismissProps(useMergedProps<ModalElement>()(useModalRefElement({ role: "dialog" }), modalDescribedByBody ? pFinal : p2)));
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
            const widthWithScrollBar = document.documentElement.scrollWidth;
            const heightWithScrollBar = document.documentElement.scrollHeight;

            // Apply a class that hides the scrollbar.
            document.documentElement.classList.add("document-scroll-hidden");

            // In case multiple things are locking scroll, keep track of how many are doing that
            // (just add 1 on enable, subtract 1 on disable)
            document.documentElement.dataset["scrollHiders"] = (+(document.documentElement.dataset["scrollHiders"] || "0") + 1).toString();

            // Measure the new width without a scrollbar 
            // so we can take the difference as the scrollbar width.
            const widthWithoutScrollBar = document.documentElement.scrollWidth;
            const heightWithoutScrollBar = document.documentElement.scrollHeight;
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

