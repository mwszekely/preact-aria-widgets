import { h } from "preact";
import { findFirstFocusable, returnTrue, useChildrenFlag, useGlobalHandler, useManagedChildren, useMergedProps, useRefElement, useStableCallback, useState, useTimeout } from "preact-prop-helpers";
import { ChildFlagOperations, OnChildrenMountChange, UseManagedChildParameters, UseManagedChildrenParameters } from "preact-prop-helpers/use-child-manager";
import { useCallback, useEffect, useLayoutEffect, useRef } from "preact/hooks";



/* eslint-disable @typescript-eslint/no-empty-interface */
export interface UseToastsParameters extends UseManagedChildrenParameters<number, never> { }

export interface UseToastParameters extends UseManagedChildParameters<number, ToastInfo, "showing", never> {
    //info: Omit<ToastInfoBase, "dismissed" | "getStatus" | "setStatus" | "focus" | "flags">;
    politeness?: "polite" | "assertive";
    timeout: number | null;
}

export interface ToastInfo {
    //dismissed: boolean;
    focus(): void;
    //setStatus: StateUpdater<"pending" | "active" | "dismissed">;
    //getStatus(): null | "pending" | "active" | "dismissed";
}

export type UseToast = (args: UseToastParameters) => UseToastReturnType;

export interface UseToastReturnType {
    dismiss: () => void;
    showing: boolean;
    //status: "pending" | "active" | "dismissed";
    //getStatus(): "pending" | "active" | "dismissed";
    resetDismissTimer: () => void;
}

export function useToasts<ContainerType extends Element>({ managedChildren: { onChildrenMountChange: ocmu, onAfterChildLayoutEffect }  }: UseToastsParameters) {

    // "Pointer" to whatever index toast is currently being shown.
    // E.g. it's 0 when the first toast is shown, then when dismissed, it becomes 1.
    // When the second toast is shown, it stays at 1 until dismissed, when it then becomes 2, etc.
    // Because toasts can potentially be dismissed out of order, this represents the "oldest" toast that still hasn't been dismissed,
    // even if "younger" ones have.
    const [activeToastIndex, setActiveToastIndex, getActiveToastIndex] = useState(-1);

    const [politeness, setPoliteness] = useState<"polite" | "assertive">("polite");

    const { getElement, useRefElementProps } = useRefElement<ContainerType>({});
    const { useManagedChild, managedChildren: { children: toastQueue } } = useManagedChildren<number, ToastInfo, "showing">({ managedChildren: { onAfterChildLayoutEffect, onChildrenMountChange: useStableCallback<OnChildrenMountChange<number>>((m, u) => {reevaluateClosestFit(); ocmu?.(m, u)}) } });

    // Any time a new toast mounts, update our bottommostToastIndex to point to it if necessary
    // ("necessary" just meaning if it's the first toast ever or all prior toasts have been dismissed)
    const onAnyToastMounted = useCallback((_index: number) => {
        let bottom = getActiveToastIndex();
        while (bottom <= toastQueue.getHighestIndex() && (bottom < 0 || toastQueue.getAt(bottom)?.flags?.showing)) {
            ++bottom;
        }
        setActiveToastIndex(bottom);
    }, [setActiveToastIndex]);

    // Any time a toast is dismissed, update our bottommostToastIndex to point to the next toast in the queue, if one exists.
    const onAnyToastDismissed = useCallback((index: number) => {
        let bottom = getActiveToastIndex();
        while (bottom <= toastQueue.getHighestIndex() && (bottom < 0 || bottom === index || toastQueue.getAt(bottom)?.flags)) {
            ++bottom;
        }
        setActiveToastIndex(bottom);

        if (getElement()?.contains(document.activeElement))
            toastQueue.getAt(bottom)?.subInfo.focus();
    }, [setActiveToastIndex]);

    // Any time the index pointing to the currently-showing toast changes,
    // update the relevant children and let them know that they're now either active or dismissed.
    const { changeIndex, reevaluateClosestFit } = useChildrenFlag<ToastInfo, "showing">({
        initialIndex: activeToastIndex,
        children: toastQueue,
        key: "showing",
        closestFit: false,
        /* setChildFlag: ((i, set) => {
             if (set)
                 console.assert(i <= getActiveToastIndex());
 
             toastQueue[i]?.setStatus(prev => prev === "dismissed" ? "dismissed" : set ? "active" : (i < getActiveToastIndex() ? "dismissed" : "pending"));
         }),*/
        //getChildFlag: i => toastQueue[i]?.getStatus() === "active"
    });
    useEffect(() => {
        changeIndex(activeToastIndex);
    }, [activeToastIndex]);

    const useToast: UseToast = useCallback(({ politeness, timeout, managedChild: { index } }: UseToastParameters): UseToastReturnType => {
        //const [status, setStatus, getStatus] = useState<"pending" | "active" | "dismissed">("pending");
        //const dismissed = (status === "dismissed");
        const dismiss = useCallback(() => { setShowing(false); }, []);

        const [mouseOver, setMouseOver] = useState(false);

        useGlobalHandler(document, "pointermove", e => {
            setMouseOver((e.target as HTMLElement).contains(getElement()));
        });

        //const toastId = generateRandomId("toast-");
        useLayoutEffect(() => { setPoliteness(politeness ?? "polite"); }, [politeness]);


        const focus = useCallback(() => {
            const element = getElement();
            if (element) {
                const firstFocusable = findFirstFocusable(element);
                firstFocusable?.focus();
            }
        }, []);

        const [showing, setShowing, getShowing] = useState(false);
        const showingRef = useRef<ChildFlagOperations>({ get: getShowing, set: setShowing, isValid: returnTrue });

        const __: void = useManagedChild({ managedChild: { index, flags: { showing: showingRef.current }, subInfo: { focus } } });

        //const isActive = (status === "active");
        const [triggerIndex, setTriggerIndex] = useState(1);

        const resetDismissTimer = useCallback(() => {
            setTriggerIndex(i => ++i);
        }, [])

        useEffect(() => {
            onAnyToastMounted(index);
        }, []);

        useEffect(() => {
            if (showing)
                onAnyToastDismissed(index)
        }, [showing]);

        useTimeout({
            timeout: timeout == null || mouseOver ? null : isFinite(timeout) ? timeout : timeout > 0 ? null : 0,
            callback: () => {
                if (showing)
                    setShowing(false);
            },
            triggerIndex: showing ? triggerIndex : false
        });


        return {
            showing,
            dismiss,
            resetDismissTimer
        }
    }, []);

    function useToastContainerProps({ role, "aria-live": ariaLive, "aria-relevant": ariaRelevant, ...props }: h.JSX.HTMLAttributes<ContainerType>): h.JSX.HTMLAttributes<ContainerType> {
        return useMergedProps<ContainerType>(useRefElementProps({ class: "toasts-container", role: role || "status", "aria-live": politeness ?? ariaLive ?? "polite", "aria-relevant": ariaRelevant ?? "additions" } as h.JSX.HTMLAttributes<ContainerType>), props);
    }


    return { useToast, useToastContainerProps };
}
