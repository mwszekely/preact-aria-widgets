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

export interface UseToastParameters extends UseManagedChildParameters<number, ToastInfo, Showing, "subInfo"> {
    //info: Omit<ToastInfoBase, "dismissed" | "getStatus" | "setStatus" | "focus" | "flags">;
    toast: {
        politeness?: "polite" | "assertive";
        timeout: number | null;
    }
}

export interface ToastInfo {
    //dismissed: boolean;
    setNumberAheadOfMe: StateUpdater<number>;
    focus(): void;
    show(): void;
    //setStatus: StateUpdater<"pending" | "active" | "dismissed">;
    //getStatus(): null | "pending" | "active" | "dismissed";
}

export type UseToast = (args: UseToastParameters) => UseToastReturnTypeInfo;

export interface UseToastReturnTypeInfo {
    toast: {
        numberOfToastsAheadOfUs: number;
        dismiss: () => void;
        dismissed: boolean;
        showing: boolean;
        resetDismissTimer: () => void;
    }
}

export interface UseToastsReturnTypeInfo extends UseManagedChildrenReturnTypeInfo<number, ToastInfo, Showing> {
    toasts: {};
}

export interface UseToastReturnTypeWithHooks extends UseToastReturnTypeInfo { }

export interface UseToastsReturnTypeWithHooks<ContainerType extends Element> extends UseToastsReturnTypeInfo {
    useToast: UseToast;
    useToastContainerProps(props: h.JSX.HTMLAttributes<ContainerType>): h.JSX.HTMLAttributes<ContainerType>;
}

export function useToasts<ContainerType extends Element>({ managedChildren: { onChildrenMountChange: ocmu, onAfterChildLayoutEffect }, toasts: { visibleCount } }: UseToastsParameters): UseToastsReturnTypeWithHooks<ContainerType> {
    debugLog("useToasts");

    // "Pointer" to whatever index toast is currently being shown.
    // E.g. it's 0 when the first toast is shown, then when dismissed, it becomes 1.
    // When the second toast is shown, it stays at 1 until dismissed, when it then becomes 2, etc.
    // Because toasts can potentially be dismissed out of order, this represents the "oldest" toast that still hasn't been dismissed,
    // even if "younger" ones have.
    //const [activeToastIndex, setActiveToastIndex, getActiveToastIndex] = useState(-1);
    /*const showingIndices = useRef<Set<number>>(null!);
    const dismissedIndices = useRef<Set<number>>(null!);
    showingIndices.current ??= new Set();
    dismissedIndices.current ??= new Set();*/

    // Normally, this does just look like [0, 1, 2, 3], etc
    // so it could be just an index to the current toast,
    // but if we dismiss toasts out of order, it's [0, 2, 3] or something.
    // So just keep track of it all in a big ol', there's only one of these on a page anyway,
    // and if you're pusing 10000 toasts at once an Array<number> isn't going to be your bottleneck.
    const currentIndexQueue = useRef<number[]>([]);

    const [politeness, setPoliteness] = useState<"polite" | "assertive">("polite");

    const getMaxVisibleCount = useStableGetter(visibleCount);

    const { getElement, useRefElementProps } = useRefElement<ContainerType>({});
    const { useManagedChild, ...childInfo } = useManagedChildren<number, ToastInfo, Showing>({ managedChildren: { onAfterChildLayoutEffect, onChildrenMountChange: ocmu } });

    const { managedChildren: { children: toastQueue } } = childInfo;

    // When a toast is shown or hidden, always make sure that we're showing all the toasts that we should be.
    const showHighestPriorityToast = useCallback(() => {
        for (let i = 0; i < getMaxVisibleCount(); ++i) {
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
        const removalIndex = currentIndexQueue.current.findIndex(i => i == _index);
        toastQueue.forEach(c => c.subInfo.setNumberAheadOfMe(f => f - 1));
        if (removalIndex != -1) {
            //for (let i = removalIndex; i < currentIndexQueue.current.length; ++i) {
            //    toastQueue.getAt(i)?.subInfo.setNumberAheadOfMe(p => (p - 1));
            //}
            currentIndexQueue.current.splice(removalIndex, 1);
        }
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

    const useToast: UseToast = useCallback(({ toast: { politeness, timeout }, managedChild: { index } }: UseToastParameters): UseToastReturnTypeWithHooks => {
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
                if (numberOfToastsAheadOfUs < getMaxVisibleCount()) {
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

        const __: void = useManagedChild({ managedChild: { index, flags: { /*showing: showingRef.current*/ }, subInfo: { focus, setNumberAheadOfMe: setNumberOfToastsAheadOfUs, show } } });

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

        console.log(`${index}: ${timeout}, ${numberOfToastsAheadOfUs}`);

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
