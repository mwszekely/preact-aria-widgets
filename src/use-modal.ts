
import { h } from "preact";
import { useActiveElement, UseActiveElementParameters, useFocusTrap, useMergedProps, usePassiveState, useRandomId, useRefElement, useStableCallback, useStableGetter } from "preact-prop-helpers";
import { useCallback, useEffect } from "preact/hooks";

interface SDP {
    /**
     * Must be a function that returns all elements that count as "within" this component.
     * 
     * Usually just a single element, but e.g. a Menu + MenuButton could have two.
     */
    getElements: () => Element | (Element | null)[] | null;

    /**
     * Called when the component is dismissed
     */
    onClose(reason: "backdrop" | "escape" | "lost-focus"): void;

    open: boolean;
}

interface MP {
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

export type SoftDismissOmits = keyof SDP;
export type ModalOmits = keyof MP;

export interface UseSoftDismissParameters<Omits extends SoftDismissOmits> {
    softDismiss: Omit<SDP, Omits>;
    activeElement: UseActiveElementParameters;
}

export interface UseModalParameters<MO extends ModalOmits, SDO extends SoftDismissOmits> extends UseSoftDismissParameters<SDO | "getElements"> {
    modal: Omit<MP, MO>;
}

export interface UseSoftDismissReturnTypeInfo {
    softDismiss: {
        onBackdropClick: (e: h.JSX.TargetedEvent<any>) => void;
    };
}

export interface UseSoftDismissReturnTypeWithHooks<T extends Node> extends UseSoftDismissReturnTypeInfo {
    /** This basically can be any element -- it's only used to get the owning window/document. */
    softDismissProps: h.JSX.HTMLAttributes<T>;
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
export function useSoftDismiss<T extends Node>({ softDismiss: { onClose, getElements, open }, activeElement: { onLastActiveElementChange, ...activeElement } }: UseSoftDismissParameters<never>): UseSoftDismissReturnTypeWithHooks<T> {

    const stableOnClose = useStableCallback(onClose);
    const stableGetElements = useStableCallback(getElements);
    const getOpen = useStableGetter(open);

    const { getDocument } = activeElement

    const onBackdropClick = useCallback(function onBackdropClick(e: h.JSX.TargetedEvent<any>) {
        if (!getOpen())
            return;

        const document = getDocument();

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
                if (element && element.contains(e.target)) {
                    foundInsideClick = true;
                    break;
                }
            }

            if (!foundInsideClick) {
                onClose("backdrop");
            }
        }
    }, [])

    const { ..._unused } = useActiveElement({
        ...activeElement,

        onLastActiveElementChange: useCallback((newElement: Element, prev: Element | undefined) => {
            onLastActiveElementChange?.(newElement, prev);
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


    const { props: refElementProps } = useRefElement<T>({
        onElementChange: useCallback((e: T | null) => {
            if (e) {
                const document = e.ownerDocument;
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
            }
        }, [])
    });

    return {
        softDismissProps: refElementProps,// useCallback((props: h.JSX.HTMLAttributes<T>): h.JSX.HTMLAttributes<T> => { return useRefElementProps(props) }, []),
        softDismiss: {
            onBackdropClick,
        }
    }
}

export interface UseModalReturnTypeInfo extends UseSoftDismissReturnTypeInfo {

}

export interface UseModalReturnTypeWithHooks<FocusContainerElement extends Element, ModalElement extends Element, TitleElement extends Element, BodyElement extends Element, BackdropElement extends Element> extends UseModalReturnTypeInfo {
    useModalProps: (props: h.JSX.HTMLAttributes<ModalElement>) => h.JSX.HTMLAttributes<ModalElement>;
    useModalTitle: UseModalTitle<TitleElement>;
    useModalBody: UseModalBody<BodyElement>
    useModalBackdrop: UseModalBackdrop<BackdropElement>;
    useModalFocusContainerProps(props: h.JSX.HTMLAttributes<FocusContainerElement>): h.JSX.HTMLAttributes<FocusContainerElement>;
    //softDismiss: Omit<UseSoftDismissReturnType<ModalElement>["softDismiss"], "useSoftDismissProps">;
}

export type UseModalTitle<TitleElement extends Element> = () => { useModalTitleProps: (props: h.JSX.HTMLAttributes<TitleElement>) => h.JSX.HTMLAttributes<TitleElement>; };
export type UseModalBody<BodyElement extends Element> = () => { useModalBodyProps: (props: h.JSX.HTMLAttributes<BodyElement>) => h.JSX.HTMLAttributes<BodyElement>; };
export type UseModalBackdrop<BackdropElement extends Element> = () => { useModalBackdropProps: (props: h.JSX.HTMLAttributes<BackdropElement>) => h.JSX.HTMLAttributes<BackdropElement>; };

/**
 * A generic modal hook, used by modal dialogs, but can also
 * be used by anything that's modal with a backdrop.
 * @param param0 
 * @returns 
 */
export function useModal<FocusContainerElement extends HTMLElement, ModalElement extends HTMLElement, TitleElement extends HTMLElement, BodyElement extends HTMLElement, BackdropElement extends HTMLElement>({ modal: { bodyIsOnlySemantic: descriptive, focusSelf }, softDismiss: { onClose, open }, activeElement }: UseModalParameters<never, never>): UseModalReturnTypeWithHooks<FocusContainerElement, ModalElement, TitleElement, BodyElement, BackdropElement> {

    const { props: useTitleRefElementProps, getElement: getTitleElement } = useRefElement<TitleElement>({});
    const { props: useBodyRefElementProps, getElement: getBodyElement } = useRefElement<BodyElement>({});
    focusSelf ??= (() => {
        if (descriptive) {
            getBodyElement()?.focus({ preventScroll: true });
        }
        else {
            const titleElement = getTitleElement();
            if (titleElement)
                titleElement.focus({ preventScroll: true });

        }
        //const elementToFocus = getTitleElement() ?? getBodyElement()
    });
    const stableOnClose = useStableCallback(onClose);
    const stableFocusSelf = useStableCallback(focusSelf);

    //const [modalDescribedByBody, setModalDescribedByBody] = useState(false);
    useHideScroll(open);

    const { useRandomIdSourceElement: useModalIdAsSource, useRandomIdReferencerElement: useModalIdAsReferencerElement } = useRandomId<ModalElement>({ randomId: { prefix: "aria-modal-" }, managedChildren: { onAfterChildLayoutEffect: null, onChildrenMountChange: null } });
    const { useRandomIdSourceElement: useBodyIdAsSource, useRandomIdReferencerElement: useBodyIdReferencerElement } = useRandomId<BodyElement>({ randomId: { prefix: "aria-modal-body-" }, managedChildren: { onAfterChildLayoutEffect: null, onChildrenMountChange: null } });
    const { useRandomIdSourceElement: useTitleIdAsSource, useRandomIdReferencerElement: useTitleIdReferencerElement } = useRandomId<TitleElement>({ randomId: { prefix: "aria-modal-title-" }, managedChildren: { onAfterChildLayoutEffect: null, onChildrenMountChange: null } });


    const { props: useModalRefElement, getElement: getModalElement } = useRefElement<ModalElement>({})
    const { softDismiss: { onBackdropClick }, softDismissProps } = useSoftDismiss<ModalElement>({ softDismiss: { onClose: stableOnClose, getElements: getModalElement, open: !!open }, activeElement });

    const useModalBackdrop = useCallback<UseModalBackdrop<BackdropElement>>(function useModalBackdrop() {
        function useModalBackdropProps(props: h.JSX.HTMLAttributes<BackdropElement>): h.JSX.HTMLAttributes<BackdropElement> {
            return useMergedProps<BackdropElement>({ onPointerUp: onBackdropClick }, props);
        }

        return { useModalBackdropProps }
    }, [])

    const useModalFocusContainerProps = function (props: h.JSX.HTMLAttributes<FocusContainerElement>): h.JSX.HTMLAttributes<FocusContainerElement> {
        const { props: useFocusTrapProps } = useFocusTrap<FocusContainerElement>({ trapActive: open });
        return useMergedProps(useFocusTrapProps, props);
    }

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

