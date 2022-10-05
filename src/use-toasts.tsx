import { h } from "preact";
import { findFirstFocusable, useGlobalHandler, useManagedChildren, useMergedProps, useRefElement, useStableGetter, useState, useTimeout } from "preact-prop-helpers";
import { UseManagedChildParameters, UseManagedChildrenParameters, UseManagedChildrenReturnTypeInfo } from "preact-prop-helpers/use-child-manager";
import { StateUpdater, useCallback, useEffect, useLayoutEffect, useRef } from "preact/hooks";
import { debugLog } from "./props";



/* eslint-disable @typescript-eslint/no-empty-interface */
export interface UseToastsParameters extends UseManagedChildrenParameters<number, never> {
    toasts: {
        visibleCount: number;   // The maximum number of toasts that are shown at one time (used for automatic management of when to show toasts, i.e. don't show this toast if 2 are already on-screen -- 1 is a good default)
    }
}

type Showing = never; //"showing";

export interface UseToastParameters<C, K extends string, SubbestInfo> extends UseManagedChildParameters<number, ToastInfo<C>, Showing | K, never, SubbestInfo> {
    //info: Omit<ToastInfoBase, "dismissed" | "getStatus" | "setStatus" | "focus" | "flags">;
    toast: {
        politeness?: "polite" | "assertive";
        timeout: number | null;
    }
}

export interface ToastInfo<C> {
    //dismissed: boolean;
    setNumberAheadOfMe: StateUpdater<number>;
    focus(): void;
    show(): void;
    subInfo: C;
    //setStatus: StateUpdater<"pending" | "active" | "dismissed">;
    //getStatus(): null | "pending" | "active" | "dismissed";
}

export type UseToast<C, K extends string> = (args: UseToastParameters<C, K, C>) => UseToastReturnTypeInfo;

export interface UseToastReturnTypeInfo {
    toast: {
        numberOfToastsAheadOfUs: number;
        dismiss: () => void;
        dismissed: boolean;
        showing: boolean;
        resetDismissTimer: () => void;
    }
}

export interface UseToastsReturnTypeInfo<C> extends UseManagedChildrenReturnTypeInfo<number, ToastInfo<C>, Showing> {
    toasts: {};
}

export interface UseToastReturnTypeWithHooks extends UseToastReturnTypeInfo { }

export interface UseToastsReturnTypeWithHooks<ContainerType extends Element, C, K extends string> extends UseToastsReturnTypeInfo<C> {
    useToast: UseToast<C, K>;
    useToastContainerProps(props: h.JSX.HTMLAttributes<ContainerType>): h.JSX.HTMLAttributes<ContainerType>;
}

export function useToasts<ContainerType extends Element, C, K extends string>({ managedChildren: { onChildrenMountChange: ocmu, onAfterChildLayoutEffect }, toasts: { visibleCount } }: UseToastsParameters): UseToastsReturnTypeWithHooks<ContainerType, C, K> {
    debugLog("useToasts");

    // Normally, this does just look like [0, 1, 2, 3], etc
    // so it could be just an index to the current toast,
    // but if we dismiss toasts out of order, it's [0, 2, 3] or something.
    // So just keep track of it all in a big ol', there's only one of these on a page anyway,
    // and if you're pusing 10000 toasts at once an Array<number> isn't going to be your bottleneck.
    const currentIndexQueue = useRef<number[]>([]);

    const [politeness, setPoliteness] = useState<"polite" | "assertive">("polite");

    const getMaxVisibleCount = useStableGetter(visibleCount);

    const { getElement, useRefElementProps } = useRefElement<ContainerType>({});
    const { useManagedChild, ...childInfo } = useManagedChildren<number, ToastInfo<C>, K | Showing>({ managedChildren: { onAfterChildLayoutEffect, onChildrenMountChange: ocmu } });

    const { managedChildren: { children: toastQueue } } = childInfo;

    // When a toast is shown or hidden, always make sure that we're showing all the toasts that we should be.
    const showHighestPriorityToast = useCallback(() => {
        const max = Math.min(getMaxVisibleCount(), currentIndexQueue.current.length)
        for (let i = 0; i < max; ++i) {

            const highestPriorityToast = toastQueue.getAt(currentIndexQueue.current[i]);
            console.assert(!!highestPriorityToast);
            highestPriorityToast?.subInfo.show();
        }
    }, [])

    // Any time a new toast mounts, update our bottommostToastIndex to point to it if necessary
    // ("necessary" just meaning if it's the first toast ever or all prior toasts have been dismissed)
    const onAnyToastMounted = useCallback((toastIndex: number) => {
        currentIndexQueue.current.push(toastIndex);
        toastQueue.getAt(toastIndex)?.subInfo.setNumberAheadOfMe(currentIndexQueue.current.length - 1);
        showHighestPriorityToast();
    }, []);

    // Any time a toast is dismissed, update our bottommostToastIndex to point to the next toast in the queue, if one exists.
    const onAnyToastDismissed = useCallback((_index: number) => {

        // When we dismiss a toast, remove it from the "to-display" queue by actually splicing it out of the array.
        // Then notify each toast of its change in position within that queue to keep the two in sync.
        const removalIndex = currentIndexQueue.current.findIndex(i => i == _index);


        // For all toasts that have already been dismissed, shift them even further back by one to "make space" 
        // (they're removed from the queue but this is the negative index they would have if we kept negatives in the queue)
        // for the newly-dismissed toast.
        toastQueue.forEach(c => {
            c.subInfo.setNumberAheadOfMe(prev => {
                if (prev < 0)
                    return prev - 1;
                else
                    return prev;
            });
        });
        // Let this toast know that it's now the most recently dismissed toast
        toastQueue.getAt(_index)?.subInfo.setNumberAheadOfMe(-1);

        // Notify all toasts waiting behind this one in the queue that they've moved up one slot
        toastQueue.forEach(c => {
            c.subInfo.setNumberAheadOfMe(prev => {
                if (prev > removalIndex)
                    return prev - 1;
                else
                    return prev;
            });
        });

        // Actually modify the queue itself
        currentIndexQueue.current.splice(removalIndex, 1);

        // And after all that, make sure that we're showing any toasts that have been waiting in the queue
        showHighestPriorityToast();
    }, []);



    const [_mouseOver2, setMouseOver, _getMouseOver] = useState(false);

    useGlobalHandler(document, "pointermove", e => {
        const mouseOver = (e.target != null && e.target instanceof Node && (getElement()?.contains(e.target) || getElement() == e.target));
        setMouseOver(mouseOver);
    });

    // Any time the index pointing to the currently-showing toast changes,
    // update the relevant children and let them know that they're now either active or dismissed.
    /*const { changeIndex, reevaluateClosestFit } = useChildrenFlag<ToastInfo, "showing">({
        initialIndex: activeToastIndex,
        children: toastQueue,
        key: "showing",
        closestFit: false,
    });
    useEffect(() => {
        changeIndex(activeToastIndex);
    }, [activeToastIndex]);*/

    const useToast: UseToast<C, K> = useCallback(({ toast: { politeness, timeout }, managedChild: { index, flags }, subInfo }) => {
        debugLog("useToast", index);
        const [numberOfToastsAheadOfUs, setNumberOfToastsAheadOfUs] = useState(Infinity);
        const getIndex = useStableGetter(index);
        const [dismissed2, setDismissed2, getDismissed2] = useState(false);
        const [showing2, setShowing2, getShowing2] = useState(false);
        //const [dismissed, setDismissed] = useState(false);
        //const [status, setStatus, getStatus] = useState<"pending" | "active" | "dismissed">("pending");
        //const dismissed = (status === "dismissed");
        const dismiss = useCallback(() => {
            if (!getDismissed2())
                onAnyToastDismissed(getIndex());

            setDismissed2(true);
            setShowing2(false);
        }, []);

        const show = useCallback(() => {
            setShowing2(true);
        }, [])

        useEffect(() => {
            if (!getDismissed2() && !getShowing2()) {
                if (numberOfToastsAheadOfUs >= 0 && numberOfToastsAheadOfUs < getMaxVisibleCount()) {
                    show();
                }
            }
        }, [numberOfToastsAheadOfUs])

        //const toastId = generateRandomId("toast-");
        useLayoutEffect(() => { setPoliteness(politeness ?? "polite"); }, [politeness]);


        const focus = useCallback(() => {
            const element = getElement();
            if (element) {
                const firstFocusable = findFirstFocusable(element);
                firstFocusable?.focus();
            }
        }, []);

        /*const [showing, setShowing2, getShowing] = useState(false);
        const setShowing: StateUpdater<boolean> = ((u) => {
            setShowing2(prev => {
                const ret: boolean = (typeof u == 'function') ? u(prev) : u;

                if (ret === false) {
                    setDismissed(true);
                    onAnyToastDismissed(getIndex())
                }

                return ret;
            });
        })*/
        //const showingRef = useRef<ChildFlagOperations>({ get: getShowing, set: setShowing, isValid: returnTrue });

        const __: void = useManagedChild({ managedChild: { index, flags: { ...flags } }, subInfo: { focus, setNumberAheadOfMe: setNumberOfToastsAheadOfUs, show, subInfo } });

        //const isActive = (status === "active");
        const [triggerIndex, setTriggerIndex] = useState(1);

        const resetDismissTimer = useCallback(() => {
            setTriggerIndex(i => ++i);
        }, [])

        useEffect(() => {
            onAnyToastMounted(index);
        }, []);

        /*useEffect(() => {
            if (!showing)
                onAnyToastDismissed(index)
        }, [showing]);*/

        const dismissTimeoutKey = (timeout == null || numberOfToastsAheadOfUs != 0) ? null : isFinite(timeout) ? timeout : timeout > 0 ? null : 0;

        useTimeout({
            timeout: dismissTimeoutKey,
            callback: () => {
                if (showing2)
                    dismiss();
            },
            triggerIndex: showing2 ? triggerIndex : false
        });


        return {
            toast: {
                dismissed: dismissed2,
                showing: showing2,
                numberOfToastsAheadOfUs,
                dismiss,
                resetDismissTimer
            }
        }
    }, []);

    function useToastContainerProps({ role, "aria-live": ariaLive, "aria-relevant": ariaRelevant, ...props }: h.JSX.HTMLAttributes<ContainerType>): h.JSX.HTMLAttributes<ContainerType> {
        return useMergedProps<ContainerType>(useRefElementProps({ class: "toasts-container", role: role || "status", "aria-live": politeness ?? ariaLive ?? "polite", "aria-relevant": ariaRelevant ?? "additions" } as h.JSX.HTMLAttributes<ContainerType>), props);
    }


    return {
        useToast,
        useToastContainerProps,
        ...childInfo,
        toasts: {}
    };
}
