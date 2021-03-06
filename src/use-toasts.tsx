import { h } from "preact";
import { findFirstFocusable, ManagedChildInfo, MergedProps, useChildFlag, useChildManager, useGlobalHandler, useMergedProps, useRandomId, useRefElement, UseRefElementPropsReturnType, useState, useTimeout } from "preact-prop-helpers";
import { StateUpdater, useCallback, useEffect, useLayoutEffect } from "preact/hooks";



/* eslint-disable @typescript-eslint/no-empty-interface */
export interface UseToastsParameters { }

export interface UseToastParameters extends Omit<ToastInfo, "dismissed" | "index" | "getStatus" | "setStatus" | "focus"> {
    politeness?: "polite" | "assertive";
    timeout: number | null;
}

export interface ToastInfo extends ManagedChildInfo<string> {
    dismissed: boolean;
    focus(): void;
    setStatus: StateUpdater<"pending" | "active" | "dismissed">;
    getStatus(): null | "pending" | "active" | "dismissed";
}

export type UseToast = <ToastType extends Element>(args: UseToastParameters) => { 
    dismiss: () => void; 
    status: "pending" | "active" | "dismissed"; 
    resetDismissTimer: () => void;
    useToastProps: <P extends h.JSX.HTMLAttributes<ToastType>>(props: P) => MergedProps<ToastType, UseRefElementPropsReturnType<ToastType, {}>, P>; 
};

export function useToasts<ContainerType extends Element>({ ..._ }: UseToastsParameters) {

    // "Pointer" to whatever index toast is currently being shown.
    // E.g. it's 0 when the first toast is shown, then when dismissed, it becomes 1.
    // When the second toast is shown, it stays at 1 until dismissed, when it then becomes 2, etc.
    // Because toasts can potentially be dismissed out of order, this represents the "oldest" toast that still hasn't been dismissed,
    // even if "younger" ones have.
    const [activeToastIndex, setActiveToastIndex, getActiveToastIndex] = useState(-1);

    const [politeness, setPoliteness] = useState<"polite" | "assertive">("polite");

    const { getElement, useRefElementProps } = useRefElement<ContainerType>({});
    const { mountedChildren: toastQueue, useManagedChild, getMountIndex } = useChildManager<ToastInfo>();

    // Any time a new toast mounts, update our bottommostToastIndex to point to it if necessary
    // ("necessary" just meaning if it's the first toast ever or all prior toasts have been dismissed)
    const onAnyToastMounted = useCallback((_index: number) => {
        let bottom = getActiveToastIndex();
        while (bottom < toastQueue.length && (bottom < 0 || toastQueue[bottom]?.dismissed)) {
            ++bottom;
        }
        setActiveToastIndex(bottom);
    }, [setActiveToastIndex]);

    // Any time a toast is dismissed, update our bottommostToastIndex to point to the next toast in the queue, if one exists.
    const onAnyToastDismissed = useCallback((index: number) => {
        let bottom = getActiveToastIndex();
        while (bottom < toastQueue.length && (bottom < 0 || bottom === index || toastQueue[bottom]?.dismissed)) {
            ++bottom;
        }
        setActiveToastIndex(bottom);

        if (getElement()?.contains(document.activeElement))
            toastQueue[bottom]?.focus();
    }, [setActiveToastIndex]);

    // Any time the index pointing to the currently-showing toast changes,
    // update the relevant children and let them know that they're now either active or dismissed.
    useChildFlag<number, any>({
        activatedIndex: activeToastIndex,
        managedChildren: toastQueue,
        setChildFlag: ((i, set) => {
            if (set)
                console.assert(i <= getActiveToastIndex());

            toastQueue[i]?.setStatus(prev => prev === "dismissed" ? "dismissed" : set ? "active" : (i < getActiveToastIndex() ? "dismissed" : "pending"));
        }),
        getChildFlag: i => toastQueue[i]?.getStatus() === "active"
    });

    const useToast: UseToast = useCallback(<ToastType extends Element>({ politeness, timeout }: UseToastParameters) => {
        const [status, setStatus, getStatus] = useState<"pending" | "active" | "dismissed">("pending");
        const dismissed = (status === "dismissed");
        const dismiss = useCallback(() => { setStatus("dismissed") }, []);

        const [mouseOver, setMouseOver] = useState(false);

        useGlobalHandler(document, "pointermove", e => {
            setMouseOver((e.target as HTMLElement).contains(getElement()));
        });

        const { randomId: toastId } = useRandomId({ prefix: "toast-" });
        useLayoutEffect(() => { setPoliteness(politeness ?? "polite"); }, [politeness]);


        const focus = useCallback(() => {
            const element = getElement();
            if (element) {
                const firstFocusable = findFirstFocusable(element);
                firstFocusable?.focus();
            }
        }, []);

        const { useManagedChildProps, getElement } = useManagedChild<ToastType>({ dismissed, index: toastId, setStatus, getStatus, focus });

        const isActive = (status === "active");
        const [triggerIndex, setTriggerIndex] = useState(1);

        const resetDismissTimer = useCallback(() => {
            setTriggerIndex(i => ++i);
        }, [])

        useEffect(() => {
            onAnyToastMounted(getMountIndex(toastId));
        }, []);

        useEffect(() => {
            if (dismissed)
                onAnyToastDismissed(getMountIndex(toastId))
        }, [dismissed]);

        useTimeout({
            timeout: timeout == null || mouseOver ? null : isFinite(timeout) ? timeout : timeout > 0 ? null : 0,
            callback: () => {
                if (isActive)
                    setStatus("dismissed");
            },
            triggerIndex: isActive? triggerIndex : false
        });


        return {
            status,
            getStatus,
            dismiss,
            resetDismissTimer,
            useToastProps: function <P extends h.JSX.HTMLAttributes<ToastType>>({ ...props }: P) {
                return useMergedProps<ToastType>()(useManagedChildProps({ }), props);
            }
        }
    }, []);

    function useToastContainerProps<P extends h.JSX.HTMLAttributes<ContainerType>>({ role, "aria-live": ariaLive, "aria-relevant": ariaRelevant, ...props }: P) {
        return useMergedProps<ContainerType>()(useRefElementProps({ class: "toasts-container", role: role || "status", "aria-live": politeness ?? ariaLive ?? "polite", "aria-relevant": ariaRelevant ?? "additions" }), props);
    }


    return { useToast, useToastContainerProps };
}
