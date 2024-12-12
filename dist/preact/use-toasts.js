import { jsx as _jsx } from "preact/jsx-runtime";
import { findFirstFocusable, focus, getDocument, useCallback, useEffect, useGlobalHandler, useManagedChild, useManagedChildren, useMergedProps, useMonitoring, useRef, useRefElement, useStableCallback, useStableGetter, useState, useTimeout } from "preact-prop-helpers";
import { useNotify } from "./use-notify.js";
/**
 * Allows any descendent children to push a visible (and/or audible) message to the user's attention.
 *
 * @compositeParams
 *
 * @hasChild {@link useToast}
 */
export function useToasts({ managedChildrenParameters: { onChildrenMountChange: ocmu, onAfterChildLayoutEffect }, toastsParameters: { visibleCount } }) {
    return useMonitoring(function useToasts() {
        // Normally, this does just look like [0, 1, 2, 3], etc
        // so it could be just an index to the current toast,
        // but if we dismiss toasts out of order, it's [0, 2, 3] or something.
        // So just keep track of it all in a big ol', there's only one of these on a page anyway,
        // and if you're pusing 10000 toasts at once an Array<number> isn't going to be your bottleneck.
        const currentIndexQueue = useRef([]);
        const getMaxVisibleCount = useStableGetter(visibleCount);
        const nextIndexToStartAt = useRef(0);
        const { refElementReturn: { getElement }, propsStable } = useRefElement({ refElementParameters: {} });
        const { context, managedChildrenReturn, ..._childInfo } = useManagedChildren({ managedChildrenParameters: { onAfterChildLayoutEffect, onChildrenMountChange: ocmu } });
        const { getChildren: getToastQueue } = managedChildrenReturn;
        const toastQueue = getToastQueue();
        // When a toast is shown or hidden, always make sure that we're showing all the toasts that we should be.
        const showHighestPriorityToast = useCallback(() => {
            const max = Math.min(getMaxVisibleCount(), currentIndexQueue.current.length);
            let start = nextIndexToStartAt.current;
            for (let i = start; i < max; ++i) {
                const highestPriorityToast = toastQueue.getAt(currentIndexQueue.current[i]);
                console.assert(!!highestPriorityToast);
                highestPriorityToast?.show();
            }
            nextIndexToStartAt.current = max;
        }, []);
        // Any time a new toast mounts, update our bottommostToastIndex to point to it if necessary
        // ("necessary" just meaning if it's the first toast ever or all prior toasts have been dismissed)
        const onAnyToastMounted = useCallback((toastIndex) => {
            currentIndexQueue.current.push(toastIndex);
            toastQueue.getAt(toastIndex)?.setNumberAheadOfMe(currentIndexQueue.current.length - 1);
            showHighestPriorityToast();
        }, []);
        // Any time a toast is dismissed, update our bottommostToastIndex to point to the next toast in the queue, if one exists.
        const onAnyToastDismissed = useCallback((_index) => {
            // When we dismiss a toast, remove it from the "to-display" queue by actually splicing it out of the array.
            // Then notify each toast of its change in position within that queue to keep the two in sync.
            const removalIndex = currentIndexQueue.current.findIndex(i => i == _index);
            // For all toasts that have already been dismissed, shift them even further back by one to "make space" 
            // (they're removed from the queue but this is the negative index they would have if we kept negatives in the queue)
            // for the newly-dismissed toast.
            toastQueue.forEach(c => {
                c.setNumberAheadOfMe(prev => {
                    if (prev < 0)
                        return prev - 1;
                    else
                        return prev;
                });
            });
            // Let this toast know that it's now the most recently dismissed toast
            toastQueue.getAt(_index)?.setNumberAheadOfMe(-1);
            // Notify all toasts waiting behind this one in the queue that they've moved up one slot
            toastQueue.forEach(c => {
                c.setNumberAheadOfMe(prev => {
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
        useGlobalHandler(getDocument(), "pointermove", e => {
            const mouseOver = (e.target != null && e.target instanceof Node && (getElement()?.contains(e.target) || getElement() == e.target));
            setMouseOver(mouseOver);
        });
        const toastContext = {
            onAnyToastDismissed,
            getMaxVisibleCount,
            onAnyToastMounted
        };
        const props = useMergedProps(useMergedProps(propsStable, { class: "toasts-container" }));
        return {
            context: {
                ...context,
                toastContext
            },
            managedChildrenReturn,
            props
        };
    });
}
/**
 * @compositeParams
 */
export function useToast({ toastParameters: { politeness, timeout, children }, info: { index, ...info }, context }) {
    return useMonitoring(function useToast() {
        const { getMaxVisibleCount, onAnyToastDismissed, onAnyToastMounted } = context.toastContext;
        const [numberOfToastsAheadOfUs, setNumberOfToastsAheadOfUs] = useState(Infinity);
        const getIndex = useStableGetter(index);
        const [dismissed2, setDismissed2, getDismissed2] = useState(false);
        const [showing2, setShowing2, getShowing2] = useState(false);
        const [triggerIndex, setTriggerIndex] = useState(1);
        const notify = useNotify();
        const dismiss = useCallback(() => {
            if (!getDismissed2())
                onAnyToastDismissed(getIndex());
            setDismissed2(true);
            setShowing2(false);
        }, []);
        const show = useStableCallback(() => {
            notify(politeness ?? "polite", _jsx("p", { children: children }));
            setShowing2(true);
        });
        useEffect(() => {
            if (!getDismissed2() && !getShowing2()) {
                if (numberOfToastsAheadOfUs >= 0 && numberOfToastsAheadOfUs < getMaxVisibleCount()) {
                    show();
                }
            }
        }, [numberOfToastsAheadOfUs]);
        const focus2 = useCallback(() => {
            const element = getElement();
            if (element) {
                const firstFocusable = findFirstFocusable(element);
                focus(firstFocusable);
            }
        }, []);
        const { managedChildReturn } = useManagedChild({ info: { index, focus: focus2, setNumberAheadOfMe: setNumberOfToastsAheadOfUs, show, ...info }, context });
        const resetDismissTimer = useCallback(() => {
            setTriggerIndex(i => ++i);
        }, []);
        useEffect(() => {
            onAnyToastMounted(index);
        }, []);
        const dismissTimeoutKey = (timeout == null || numberOfToastsAheadOfUs != 0) ? null : isFinite(timeout) ? timeout : timeout > 0 ? null : 0;
        useTimeout({
            timeout: dismissTimeoutKey,
            callback: () => {
                if (showing2)
                    dismiss();
            },
            triggerIndex: showing2 ? triggerIndex : false
        });
        const { refElementReturn: { getElement }, propsStable } = useRefElement({ refElementParameters: {} });
        return {
            toastReturn: {
                dismissed: dismissed2,
                showing: showing2,
                numberOfToastsAheadOfUs,
                dismiss,
                resetDismissTimer
            },
            managedChildReturn,
            props: propsStable
        };
    });
}
//# sourceMappingURL=use-toasts.js.map