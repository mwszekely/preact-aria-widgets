import { noop as noop$1, shuffle, identity, debounce } from 'lodash-es';
import { useRef, useCallback, useLayoutEffect, useInsertionEffect, useMemo, useEffect, createElement, Fragment, useState as useState$1, useId, memo, forwardRef, useImperativeHandle, cloneElement, createContext } from 'react';
import { createPortal } from 'react-dom';
import { isTabbable, isFocusable } from 'tabbable';
import 'blocking-elements';
import 'wicg-inert';
import 'clsx';

/** These are all the event mappings that are shared between Preact/React */
const EventMapping$1 = {
    abort: "onAbort",
    animationend: "onAnimationEnd",
    animationstart: "onAnimationStart",
    animationiteration: "onAnimationIteration",
    beforeinput: "onBeforeInput",
    blur: "onBlur",
    canplay: "onCanPlay",
    canplaythrough: "onCanPlayThrough",
    change: "onChange",
    click: "onClick",
    compositionend: "onCompositionEnd",
    compositionstart: "onCompositionStart",
    compositionupdate: "onCompositionUpdate",
    contextmenu: "onContextMenu",
    cut: "onCut",
    drag: "onDrag",
    dragend: "onDragEnd",
    dragenter: "onDragEnter",
    dragleave: "onDragLeave",
    dragover: "onDragOver",
    dragstart: "onDragStart",
    drop: "onDrop",
    durationchange: "onDurationChange",
    emptied: "onEmptied",
    ended: "onEnded",
    error: "onError",
    focus: "onFocus",
    gotpointercapture: "onGotPointerCapture",
    input: "onInput",
    invalid: "onInvalid",
    keydown: "onKeyDown",
    keypress: "onKeyPress",
    keyup: "onKeyUp",
    load: "onLoad",
    loadeddata: "onLoadedData",
    loadedmetadata: "onLoadedMetadata",
    loadstart: "onLoadStart",
    lostpointercapture: "onLostPointerCapture",
    mousedown: "onMouseDown",
    mouseenter: "onMouseEnter",
    mouseleave: "onMouseLeave",
    mousemove: "onMouseMove",
    mouseout: "onMouseOut",
    mouseover: "onMouseOver",
    mouseup: "onMouseUp",
    paste: "onPaste",
    pause: "onPause",
    play: "onPlay",
    playing: "onPlaying",
    pointercancel: "onPointerCancel",
    pointerdown: "onPointerDown",
    pointerenter: "onPointerEnter",
    pointerleave: "onPointerLeave",
    pointermove: "onPointerMove",
    pointerout: "onPointerOut",
    pointerover: "onPointerOver",
    pointerup: "onPointerUp",
    progress: "onProgress",
    reset: "onReset",
    scroll: "onScroll",
    seeked: "onSeeked",
    seeking: "onSeeking",
    select: "onSelect",
    stalled: "onStalled",
    submit: "onSubmit",
    suspend: "onSuspend",
    timeupdate: "onTimeUpdate",
    touchcancel: "onTouchCancel",
    touchend: "onTouchEnd",
    touchmove: "onTouchMove",
    touchstart: "onTouchStart",
    transitionend: "onTransitionEnd",
    volumechange: "onVolumeChange",
    waiting: "onWaiting",
    wheel: "onWheel",
    fullscreenchange: null,
    animationcancel: null,
    auxclick: null,
    cancel: null,
    close: null,
    copy: null,
    cuechange: null,
    fullscreenerror: null,
    ratechange: null,
    resize: null,
    securitypolicyviolation: null,
    selectionchange: null,
    selectstart: null,
    slotchange: null,
    transitioncancel: null,
    transitionrun: null,
    transitionstart: null,
    webkitanimationend: null,
    webkitanimationiteration: null,
    webkitanimationstart: null,
    webkittransitionend: null,
};

function debounceRendering(f) {
    // TODO?
    return queueMicrotask(f);
    //(options.debounceRendering ?? queueMicrotask)(f);
}
const onfocusin = "onFocus";
const onfocusout = "onBlur";
const EventMapping = {
    dblclick: "onDoubleClick",
    focusin: "onFocus",
    focusout: "onBlur",
    formdata: null,
    toggle: null,
    ...EventMapping$1,
};

let cached = null;
function getBuildModeUnmemoized() {
    try {
        if (process.env.NODE_ENV === "development")
            return "development";
        return "production";
    }
    catch (_e) {
        // As long as we're returning "production" due to it being unspecified, 
        // try to make sure anyone else who tries does too for consistency.
        // TODO: Good/bad idea?
        try {
            globalThis["process"] ??= {};
            globalThis["process"]["env"] ??= {};
            globalThis["process"]["env"]["NODE_ENV"] ??= "production";
        }
        finally {
            return "production";
        }
    }
}
function getBuildMode() {
    return cached ||= (getBuildModeUnmemoized());
}

// TODO: This shouldn't be in every build, I don't think it's in core-js? I think?
// And it's extremely small anyway and basically does nothing.
window.requestIdleCallback ??= (callback) => {
    return setTimeout(() => { callback({ didTimeout: false, timeRemaining: () => { return 0; }, }); }, 5);
};
function callCountU(hook) {
    return;
}
const monitorCallCount = (getBuildMode() == "development") ? callCountU : noop$1;

/**
 * Debug hook. Given a value or set of values, emits a console error if any of them change from one render to the next.
 *
 * @remarks Eventually, when useEvent lands, we hopefully won't need this.
 */
function useEnsureStability(parentHookName, ...values) {
    if (getBuildMode() == 'production')
        return;
    const helperToEnsureStability = useRef([]);
    const shownError = useRef([]);
    useHelper(values.length, -1);
    values.forEach(useHelper);
    return;
    function useHelper(value, i) {
        const index = i + 1;
        // Make sure that the provided functions are perfectly stable across renders
        if (helperToEnsureStability.current[index] === undefined)
            helperToEnsureStability.current[index] = value;
        if (helperToEnsureStability.current[index] != value) {
            if (!shownError.current[index]) {
                /* eslint-disable no-debugger */
                debugger;
                console.error(`The hook ${parentHookName} requires some or all of its arguments remain stable across each render; please check the ${i}-indexed argument (${i >= 0 ? JSON.stringify(values[i]) : "the number of supposedly stable elements"}).`);
                shownError.current[index] = true;
            }
        }
    }
}
/**
 * Similar to `useState`, but for values that aren't "render-important" &ndash; updates don't cause a re-render and so the value shouldn't be used during render (though it certainly can, at least by re-rendering again).
 *
 * @remarks To compensate for this, you should pass a `useEffect`-esque callback that is run whenever the value changes.  Just like `useEffect`, this callback can return a cleanup function that's run before the value changes.  If you would like to re-render when the value changes (or, say, when the value meets some criteria), this is where you'll want to put in a call to a `setState` function.
 *
 * To summarize, it's like a `useState`-`useEffect` mashup:
 *
 * 1. It's like `useState`, except this version of `setState` doesn't re-render the whole component
 * 2. It's like `useState`, except you can run a function when the value changes that optionally returns a cleanup function
 * 3. It's like `useEffect`, except you trigger the effect function "remotely" instead of it running after rendering
 * 4. It's like `useEffect`, except the single "dependency" is based on your calls to `setState`
 *
 * Note that while calling `setState` doesn't cause any re-renders, you can do that within your `onChange` function, called whenever the value changes via that `setState`.
 *
 * {@include } {@link OnPassiveStateChange}
 *
 * @param onChange - The "effect" function to run when the value changes. Effectively the same as `useEffect`'s "effect" function.  MUST BE STABLE, either because it has no dependencies, or because it's from useStableCallback, but this will mean you cannot use getState or setState during render.
 * @param getInitialValue - If provided, the effect will be invoked once with this value on mount. MUST BE STABLE, either because it has no dependencies, or because it's from useStableCallback, but this will mean you cannot use getState or setState during render.
 * @param customDebounceRendering - By default, changes to passive state are delayed by one tick so that we only check for changes in a similar way to Preact. You can override this to, for example, always run immediately instead.
 * @returns
 */
function usePassiveState(onChange, getInitialValue, customDebounceRendering) {
    monitorCallCount(usePassiveState);
    //let [id, ,getId] = useState(() => generateRandomId());
    const valueRef = useRef(Unset$2);
    const reasonRef = useRef(Unset$2);
    const warningRef = useRef(false);
    const dependencyToCompareAgainst = useRef(Unset$2);
    const cleanupCallbackRef = useRef(undefined);
    // Make sure that the provided functions are perfectly stable across renders
    useEnsureStability("usePassiveState", onChange, getInitialValue, customDebounceRendering);
    // Shared between "dependency changed" and "component unmounted".
    const onShouldCleanUp = useCallback(() => {
        const cleanupCallback = cleanupCallbackRef.current;
        if (cleanupCallback)
            cleanupCallback();
    }, []);
    // There are a couple places where we'd like to use our initial
    // value in place of having no value at all yet.
    // This is the shared code for that, used on mount and whenever
    // getValue is called.
    const tryEnsureValue = useCallback(() => {
        if (valueRef.current === Unset$2 && getInitialValue != undefined) {
            try {
                const initialValue = getInitialValue();
                valueRef.current = initialValue;
                cleanupCallbackRef.current = (onChange?.(initialValue, undefined, undefined) ?? undefined);
            }
            catch (ex) {
                // Exceptions are intentional to allow bailout (without exposing the Unset symbol)
            }
        }
    }, [ /* getInitialValue and onChange intentionally omitted */]);
    const getValue = useCallback(() => {
        if (warningRef.current)
            console.warn("During onChange, prefer using the (value, prevValue) arguments instead of getValue -- it's ambiguous as to if you're asking for the old or new value at this point in time for this component.");
        // The first time we call getValue, if we haven't been given a value yet,
        // (and we were given an initial value to use)
        // return the initial value instead of nothing.
        if (valueRef.current === Unset$2)
            tryEnsureValue();
        return (valueRef.current === Unset$2 ? undefined : valueRef.current);
    }, []);
    useLayoutEffect(() => {
        // Make sure we've run our effect at least once on mount.
        // (If we have an initial value, of course)
        tryEnsureValue();
    }, []);
    // The actual code the user calls to (possibly) run a new effect.
    const setValue = useCallback((arg, reason) => {
        // Regardless of anything else, figure out what our next value is about to be.
        const nextValue = (arg instanceof Function ? arg(valueRef.current === Unset$2 ? undefined : valueRef.current) : arg);
        //let id = getId();
        //console.log((nextValue !== valueRef.current? "" : "NOT ") + "Scheduling effect ", id, " with value ", nextValue);
        if ( /*dependencyToCompareAgainst.current === Unset &&*/nextValue !== valueRef.current) {
            // This is the first request to change this value.
            // Evaluate the request immediately, then queue up the onChange function
            // Save our current value so that we can compare against it later
            // (if we flip back to this state, then we won't send the onChange function)
            dependencyToCompareAgainst.current = valueRef.current;
            // It's important to update this here (as well as below) in case customDebounceRendering invokes this immediately
            valueRef.current = nextValue;
            reasonRef.current = reason;
            // Schedule the actual check and invocation of onChange later to let effects settle
            (customDebounceRendering ?? debounceRendering)(() => {
                const nextReason = reasonRef.current;
                const nextDep = valueRef.current;
                const prevDep = dependencyToCompareAgainst.current;
                //let id = getId();
                //console.log(((dependencyToCompareAgainst.current != valueRef.current)? "" : "NOT ") + "Running effect ", id, " with value ", nextDep);
                if (dependencyToCompareAgainst.current != valueRef.current) {
                    // TODO: This needs to happen here in order to make recursive onChanges work
                    // but it feels better to have it happen after onChange...
                    valueRef.current = dependencyToCompareAgainst.current = Unset$2;
                    warningRef.current = true;
                    try {
                        // Call any registered cleanup function
                        onShouldCleanUp();
                        valueRef.current = nextDep; // Needs to happen before onChange in case onChange is recursive (e.g. focusing causing a focus causing a focus)
                        cleanupCallbackRef.current = (onChange?.(nextDep, prevDep === Unset$2 ? undefined : prevDep, nextReason) ?? undefined);
                    }
                    finally {
                        // Allow the user to normally call getValue again
                        warningRef.current = false;
                    }
                }
                // We've finished with everything, so mark us as being on a clean slate again.
                dependencyToCompareAgainst.current = Unset$2;
            });
        }
        // Update the value immediately.
        // This will be checked against prevDep to see if we should actually call onChange
        //valueRef.current = nextValue;
    }, []);
    return [getValue, setValue];
}
const Unset$2 = Symbol();
// Easy constants for getInitialValue
function returnTrue() { return true; }
function returnFalse() { return false; }
function returnNull() { return null; }
function returnZero() { return 0; }
/**
 * An alternative to use for `customDebounceRendering` that causes `usePassiveState` to run changes without waiting a tick.
 */
function runImmediately(f) { f(); }

const Unset$1 = Symbol("unset");
/**
 * Given an input value, returns a constant getter function that can be used
 * inside of `useEffect` and friends without including it in the dependency array.
 *
 * @remarks This uses `options.diffed` in order to run before everything, even
 * ref assignment. This means this getter is safe to use anywhere ***except the render phase***.
 */
function useStableGetter(value) {
    monitorCallCount(useStableGetter);
    const ref = useRef(Unset$1);
    useInsertionEffect((() => { ref.current = value; }), [value]);
    return useCallback(() => {
        if (ref.current === Unset$1) {
            throw new Error('Value retrieved from useStableGetter() cannot be called during render.');
        }
        return ref.current;
    }, []);
}
function useMemoObject(t) {
    return useMemo(() => { return t; }, Object.values(t));
}

/**
 * We keep track of which callbacks are stable with a WeakMap instead of, say, a symbol because
 * `useCallback` will return a function that's stable across *all* renders, meaning
 * we can't use our funny "`if` only works here because it doesn't break the rules of hooks" trick then.
 */
const map = new WeakMap();
function isStableGetter(obj) {
    return (map.get(obj) ?? false);
}
function setIsStableGetter(obj) {
    map.set(obj, true);
    return obj;
}
/**
 * Alternate useCallback() which always returns the same (wrapped) function reference
 * so that it can be excluded from the dependency arrays of `useEffect` and friends.
 *
 * @remarks In general, just pass the function you want to be stable (but you can't use it during render,
 * so be careful!).  Alternatively, if you need a stable callback that **can** be used
 * during render, pass an empty dependency array and it'll act like `useCallback` with an
 * empty dependency array, but with the associated stable typing. In this case, you ***must*** ensure that it
 * truly has no dependencies/only stable dependencies!!
 */
function useStableCallback(fn, noDeps) {
    monitorCallCount(useStableCallback);
    useEnsureStability("useStableCallback", noDeps == null, noDeps?.length, isStableGetter(fn));
    if (isStableGetter(fn))
        return fn;
    if (noDeps == null) {
        const currentCallbackGetter = useStableGetter(fn);
        return setIsStableGetter(useCallback(((...args) => {
            return currentCallbackGetter()(...args);
        }), []));
    }
    else {
        console.assert(noDeps.length === 0);
        return setIsStableGetter(useCallback(fn, []));
    }
}

/**
 * Allows attaching an event handler to any *non-Preact* element, and removing it when the component using the hook unmounts. The callback does not need to be stable across renders.
 *
 * @remarks `"mode"` controls if there's one handler that calls all your functions (default), or one handler added per function (`"single"`).
 *
 * The default, `"grouped"`, is faster when you have, say, a button component, used hundreds of times on a page, that each installs a global event handler.
 *
 * @param target - A *non-Preact* node to attach the event to.
 * *
 */
function useGlobalHandler(target, type, handler, options, mode) {
    monitorCallCount(useGlobalHandler);
    mode ||= "grouped";
    useEnsureStability("useGlobalHandler", mode);
    if (mode === "grouped") {
        // Note to self: The typing doesn't improve even if this is split up into a sub-function.
        // No matter what, it seems impossible to get the handler's event object typed perfectly.
        // It seems like it's guaranteed to always be a union of all available types.
        // Again, no matter what combination of sub- or sub-sub-functions used.
        useGlobalHandlerGrouped(target, type, handler, options);
    }
    else {
        useGlobalHandlerSingle(target, type, handler, options);
    }
}
let mapThing = new Map();
function doMapThing(op, target, type, handler, options) {
    if (handler) {
        const optionsKey = JSON.stringify(options);
        const byType = mapThing.get(target) || new Map();
        const byOptions = (byType.get(type) || new Map());
        const info = byOptions.get(optionsKey) || { listener: null, listeners: new Set() };
        op(info, handler);
        byOptions.set(optionsKey, info);
        byType.set(type, byOptions);
        mapThing.set(target, byType);
    }
}
function addToMapThing(target, type, handler, options) {
    doMapThing((info, h) => {
        info.listeners.add(h);
        if (info.listener == null)
            target.addEventListener(type, info.listener = e => info.listeners.forEach(fn => fn(e)), options);
    }, target, type, handler, options);
}
function removeFromMapThing(target, type, handler, options) {
    doMapThing((info, h) => {
        info.listeners.delete(h);
        if (info.listener == null)
            target.removeEventListener(type, info.listener = e => info.listeners.forEach(fn => fn(e)), options);
    }, target, type, handler, options);
}
/**
 * This is way faster for large numbers of event handlers.
 *
 * For example, if every button listens for a global click, or something,
 * it would be nice if it was efficient at least.
 */
function useGlobalHandlerGrouped(target, type, handler, options) {
    let stableHandler = useStableCallback(handler ?? (() => { }));
    if (handler == null)
        stableHandler = null;
    useEffect(() => {
        if (stableHandler) {
            addToMapThing(target, type, stableHandler, options);
            return () => removeFromMapThing(target, type, stableHandler, options);
        }
    }, [target, type, stableHandler]);
}
function useGlobalHandlerSingle(target, type, handler, options) {
    let stableHandler = useStableCallback(handler ?? (() => { }));
    if (handler == null)
        stableHandler = null;
    useEffect(() => {
        if (stableHandler) {
            target.addEventListener(type, stableHandler, options);
            return () => target.removeEventListener(type, stableHandler, options);
        }
    }, [target, type, stableHandler]);
}

/**
 * Quick and easy way to add extra information to an event that was fired.
 *
 * For example, "this was a click event, but it has information about what list item was pressed too."
 *
 * Get that extra information from the [EventDetail] symbol.
 */
const EventDetail = Symbol("event-detail");
function enhanceEvent(e, detail) {
    const event = (e ?? {});
    event[EventDetail] = detail;
    return event;
}

/**
 * Handles events for a backdrop on a modal dialog -- the kind where the user expects the modal to close when they click/tap outside of it.
 *
 * @compositeParams
 */
function useBackdropDismiss({ backdropDismissParameters: { active: open, onDismiss: onCloseUnstable, ...void1 }, refElementPopupReturn: { getElement, ...void3 }, ...void2 }) {
    monitorCallCount(useBackdropDismiss);
    const getOpen = useStableGetter(open);
    const onClose = useStableCallback(onCloseUnstable);
    const onBackdropClick = useCallback(function onBackdropClick(e) {
        if (!getOpen())
            return;
        // Basically, "was this event fired on an element not contained by the modal?"
        // There are multiple ways browser react to "interacting with nothing", and this takes care of everything.
        let element = getElement();
        let foundInsideClick = false;
        if (e.target && element && element.contains(e.target)) {
            foundInsideClick = true;
        }
        if (!foundInsideClick) {
            onClose(enhanceEvent(e, { reason: "backdrop" }));
        }
    }, []);
    useGlobalHandler(window, "mousedown", open ? onBackdropClick : null, { capture: true });
    useGlobalHandler(window, "touchstart", open ? onBackdropClick : null, { capture: true });
}

const MagicWindowKey = ("__preact-prop-helpers-escape-key-dismiss__");
function getElementDepth(element) {
    let depth = 0;
    let parent = element.parentElement;
    while (parent) {
        depth += 1;
        parent = parent.parentElement;
    }
    return depth;
}
/**
 * Invokes a callback when the `Escape` key is pressed on the topmost component (a max of one invocation per `Escape` press)
 *
 * @remarks One press of the `Escape` key is guaranteed to only call `onDismiss` for *only one* component, and it is called on the component deepest in the DOM tree.
 *
 * TODO: Instead of being deepest in the DOM tree (which is usually fine), it should probably be related to what order something was made `active`.
 *
 * @compositeParams
 */
function useEscapeDismiss({ escapeDismissParameters: { onDismiss: onClose, active: open, getWindow: unstableGetWindow, parentDepth, ...void1 }, refElementPopupReturn: { getElement, ...void2 } }) {
    monitorCallCount(useEscapeDismiss);
    const stableOnClose = useStableCallback(onClose);
    const getWindow = useStableCallback(unstableGetWindow);
    const getDepth = useStableGetter(parentDepth + 1);
    // When this component opens, add an event listener that finds the deepest open soft dismiss element to actually dismiss.
    // Only opened components will add event handlers, and will remove them once closed.
    // The reason this is so complicated is because:
    // 1. We must only close one soft dismiss component at a time.  If there's a tooltip in a popup, the tooltip must be dismissed.
    // 2. `keydown` events don't just work on arbitrary elements, for our purposes they must be from the `window`. So we can't rely on normal capturing or bubbling behavior on the element itself.
    // 3. Event handlers added to the `window` via `addEventHandler` are called in the order of registration, which is completely at odds with #1.
    //
    // So all soft dismiss components listen for a keydown of Escape, 
    // then the first one to do so will wait for a microtask, 
    // then find the deepest element in the document tree to dismiss of all of those components currently open.
    useEffect(() => {
        const window = getWindow();
        window[MagicWindowKey] ??= { microtaskQueued: false, elementQueue: new Map() };
        const info = window[MagicWindowKey];
        if (open) {
            window.addEventListener("keydown", handler, { capture: true });
            return () => {
                const element = getElement();
                if (element && info.elementQueue)
                    info.elementQueue.delete(element);
                window.removeEventListener("keydown", handler, { capture: true });
            };
        }
        function handler(e) {
            if (e.key == "Escape") {
                // We don't know which of the currently active soft dismisses will actually do something,
                // but ONE of them definitely will,
                // so we stop propagation to child nodes, but not to everyone on the window (stopImmediatePropagation).
                e.preventDefault();
                e.stopPropagation();
                // This is what at least one of the elements will call
                const onClose2 = () => { stableOnClose(enhanceEvent(e, { reason: "escape" })); };
                const element = getElement();
                if (element) {
                    const treeDepth = getElementDepth(element);
                    const depth = getDepth();
                    info.elementQueue.set(element, { depth, onClose: onClose2, treeDepth });
                }
                if (!info.microtaskQueued) {
                    info.microtaskQueued = true;
                    setTimeout(() => {
                        const { elementQueue } = info;
                        info.microtaskQueued = false;
                        info.elementQueue = new Map();
                        let deepestDepth = -Infinity;
                        let deepestTreeDepth = -Infinity;
                        let deepestOnClose = null;
                        for (const [element, { depth, onClose, treeDepth }] of elementQueue) {
                            let tieBroken = false;
                            if (depth == deepestDepth) {
                                if (treeDepth > deepestTreeDepth) {
                                    tieBroken = true;
                                }
                            }
                            if (depth > deepestDepth || (depth == deepestDepth && tieBroken)) {
                                deepestDepth = depth;
                                deepestTreeDepth = treeDepth;
                                deepestOnClose = onClose;
                            }
                        }
                        deepestOnClose?.();
                    }, 0);
                }
            }
        }
    }, [open]);
}

/**
 * Invokes a callback when focus travels outside of the component's element.
 *
 * @remarks TODO: This is not intended for recursive structures, like dialogs that open dialogs, or menus that open menus, but does properly handle, e.g., the fact that a menu's menubutton having focus still counts as the menu having focus.
 *
 * @compositeParams
 */
function useLostFocusDismiss({ refElementPopupReturn: { getElement: getPopupElement, ...void3 }, refElementSourceReturn, lostFocusDismissParameters: { active: open, onDismiss: onClose, ...void4 }, ...void1 }) {
    monitorCallCount(useLostFocusDismiss);
    const { getElement: getSourceElement, ...void2 } = (refElementSourceReturn ?? {});
    const stableOnClose = useStableCallback(onClose);
    const getOpen = useStableGetter(open);
    const onLastActiveElementChange = useCallback((newElement, _prevElement, e) => {
        const open = getOpen();
        const sourceElement = getSourceElement?.();
        const popupElement = getPopupElement();
        if (!(sourceElement?.contains(newElement) || popupElement?.contains(newElement))) {
            if (open)
                stableOnClose(enhanceEvent(e, { reason: "lost-focus" }));
        }
    }, [getSourceElement]);
    return { activeElementParameters: { onLastActiveElementChange } };
}

/**
 * Combines two `children`.
 *
 * @remarks This is fairly trivial and not even technically a hook, as it doesn't use any other hooks, but is this way for consistency.
 *
 * TODO: This could accept a variable number of arguments to be consistent with useMergedProps, but I feel like it might be a performance hit.
 */
function useMergedChildren(lhs, rhs) {
    monitorCallCount(useMergedChildren);
    if (lhs == null && rhs == null) {
        return undefined;
    }
    else if (lhs == null) {
        return rhs;
    }
    else if (rhs == null) {
        return lhs;
    }
    else {
        return createElement(Fragment, {}, lhs, rhs);
    }
}

/**
 * Merged the `class` and `className` properties of two sets of props into a single string.
 *
 * @remarks Duplicate classes are removed (order doesn't matter anyway).
 */
function useMergedClasses(...classes) {
    monitorCallCount(useMergedClasses);
    // Note: For the sake of forward compatibility, this function is labelled as
    // a hook, but as it uses no other hooks it technically isn't one.
    let classesSet = new Set();
    for (let c of classes) {
        if (typeof c == "string" && c.trim())
            classesSet.add(c);
    }
    if (classesSet.size) {
        return Array.from(classesSet).join(" ");
    }
    else {
        return undefined;
    }
}

function processRef(instance, ref) {
    if (typeof ref === "function") {
        ref(instance);
    }
    else if (ref != null) {
        ref.current = instance;
    }
    else {
        /* eslint-disable no-debugger */
        debugger;
        console.assert(false, "Unknown ref type found that was neither a RefCallback nor a RefObject");
    }
}
/**
 * Combines two refs into one. This allows a component to both use its own ref *and* forward a ref that was given to it.
 *
 * @remarks Or just use {@link useMergedProps}
 */
function useMergedRefs(rhs, lhs) {
    monitorCallCount(useMergedRefs);
    // This *must* be stable in order to prevent repeated reset `null` calls after every render.
    const combined = useStableCallback(function combined(current) {
        processRef(current, lhs);
        processRef(current, rhs);
    });
    if (lhs == null && rhs == null) {
        return undefined;
    }
    else if (lhs == null) {
        return rhs;
    }
    else if (rhs == null) {
        return lhs;
    }
    else {
        return combined;
    }
}

function styleStringToObject(style) {
    // TODO: This sucks D:
    return Object.fromEntries(style.split(";").map(statement => statement.split(":")));
}
/**
 * Merges two style objects, returning the result.
 *
 * @param style - The user-given style prop for this component
 * @param obj - The CSS properties you want added to the user-given style
 * @returns A CSS object containing the properties of both objects.
 */
function useMergedStyles(lhs, rhs) {
    monitorCallCount(useMergedStyles);
    // Easy case, when there are no styles to merge return nothing.
    if (!lhs && !rhs)
        return undefined;
    if (typeof lhs != typeof rhs) {
        // Easy cases, when one is null and the other isn't.
        if (lhs && !rhs)
            return lhs;
        if (!lhs && rhs)
            return rhs;
        // They're both non-null but different types.
        // Convert the string type to an object bag type and run it again.
        if (lhs && rhs) {
            // (useMergedStyles isn't a true hook -- this isn't a violation)
            if (typeof lhs == "string")
                return useMergedStyles(styleStringToObject(lhs), rhs);
            if (typeof rhs == "string")
                return useMergedStyles(lhs, styleStringToObject(rhs));
        }
        // Logic???
        return undefined;
    }
    // They're both strings, just concatenate them.
    if (typeof lhs == "string") {
        return `${lhs};${rhs ?? ""}`;
    }
    // They're both objects, just merge them.
    return {
        ...(lhs ?? {}),
        ...(rhs ?? {})
    };
}

let log = console.warn;
/**
 * Given two sets of props, merges them and returns the result.
 *
 * @remarks The hook is aware of and can intelligently merge `className`, `class`, `style`, `ref`, `children`, and all event handlers.
 *
 * If two sets of props both specify the same attribute, e.g. both specify two different `id`s, then an error will be printed to the console (customize this with {@link enableLoggingPropConflicts}), as this conflict needs to be arbitrated on by you.
 *
 * {@include } {@link enableLoggingPropConflicts}
 *
 * @see {@link useMergedRefs}
 * @see {@link useMergedStyles}
 * @see {@link useMergedClasses}
 * @see {@link useMergedChildren}
 *
 * @param allProps - A variadic number of props to merge into one
 *
 * @returns A single object with all the provided props merged into one.
 */
function useMergedProps(...allProps) {
    monitorCallCount(useMergedProps);
    useEnsureStability("useMergedProps", allProps.length);
    let ret = {};
    for (let nextProps of allProps) {
        ret = useMergedProps2(ret, nextProps);
    }
    return ret;
}
const knowns = new Set(["children", "ref", "className", "class", "style"]);
function mergeUnknown(key, lhsValue, rhsValue) {
    if (typeof lhsValue === "function" || typeof rhsValue === "function") {
        // They're both functions that can be merged (or one's a function and the other's null).
        // Not an *easy* case, but a well-defined one.
        const merged = mergeFunctions(lhsValue, rhsValue);
        return merged;
    }
    else {
        // Uh...they're not both functions so we're here because one of them's null, right?
        if (lhsValue == null && rhsValue == null) {
            if (rhsValue === null && lhsValue === undefined)
                return rhsValue;
            else
                return lhsValue;
        }
        if (lhsValue == null)
            return rhsValue;
        else if (rhsValue == null)
            return lhsValue;
        else if (rhsValue == lhsValue) {
            // I mean, they're the same value at least
            // so we don't need to do anything.
            // Not really ideal though.
            return rhsValue;
        }
        else {
            // Ugh.
            // No good strategies here, just log it if requested
            log?.(`The prop "${key}" cannot simultaneously be the values ${lhsValue} and ${rhsValue}. One must be chosen outside of useMergedProps.`);
            return rhsValue;
        }
    }
}
/**
 * Helper function.
 *
 * This is one of the most commonly called functions in this and consumer libraries,
 * so it trades a bit of readability for speed (i.e. we don't decompose objects and just do regular property access, iterate with `for...in`, instead of `Object.entries`, etc.)
 */
function useMergedProps2(lhsAll, rhsAll) {
    const ret = {
        ref: useMergedRefs(lhsAll.ref, rhsAll.ref),
        style: useMergedStyles(lhsAll.style, rhsAll.style),
        className: useMergedClasses(lhsAll["class"], lhsAll.className, rhsAll["class"], rhsAll.className),
        children: useMergedChildren(lhsAll.children, rhsAll.children),
    };
    if (ret.ref === undefined)
        delete ret.ref;
    if (ret.style === undefined)
        delete ret.style;
    if (ret.className === undefined)
        delete ret.className;
    if (ret["class"] === undefined)
        delete ret["class"];
    if (ret.children === undefined)
        delete ret.children;
    for (const lhsKeyU in lhsAll) {
        const lhsKey = lhsKeyU;
        if (knowns.has(lhsKey))
            continue;
        ret[lhsKey] = lhsAll[lhsKey];
    }
    for (const rhsKeyU in rhsAll) {
        const rhsKey = rhsKeyU;
        if (knowns.has(rhsKey))
            continue;
        ret[rhsKey] = mergeUnknown(rhsKey, ret[rhsKey], rhsAll[rhsKey]);
    }
    return ret;
}
function mergeFunctions(lhs, rhs) {
    if (!lhs)
        return rhs;
    if (!rhs)
        return lhs;
    return (...args) => {
        const lv = lhs(...args);
        const rv = rhs(...args);
        if (lv instanceof Promise || rv instanceof Promise)
            return Promise.all([lv, rv]);
    };
}

function generateStack() {
    if (getBuildMode() === 'development') {
        try {
            throw new Error();
        }
        catch (e) {
            return e.stack;
        }
    }
    return undefined;
}
/**
 * @returns A function that retrieves the stack at the time this hook was called (in development mode only).
 */
function useStack() {
    const stack = useMemo(generateStack, []);
    const getStack = useCallback(() => stack, []);
    return getStack;
}

/**
 * If you want a single place to put a debugger for tracking focus,
 * here:
 */
function focus(e) {
    if (getBuildMode() === 'development' && window.LOG_FOCUS_CHANGES === true) {
        console.log(`Focus changed to ${(e?.tagName || "").toLowerCase().padStart(6)}:`, e);
        console.log(generateStack());
    }
    e?.focus?.();
}
/**
 * When an element unmounts, default HTML behavior is to just send focus to the body, which is wildly unhelpful. It means you lose your place in the keyboard tab order.
 *
 * If you still have access to the element that's unmounting, or perhaps its parent from beforehand, this will find the next suitable element to send focus to instead of the body.
 *
 * **Important**: This function is linear on the number of DOM nodes in your document, so it's not particularly fast. Only call it once when you need its value, not every time tab focus changed or something.
 */
function findBackupFocus(unmountingElement) {
    if (unmountingElement == null)
        return (globalThis.document.body);
    let document = unmountingElement.ownerDocument;
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_ELEMENT);
    let node = walker.firstChild();
    let bestCandidateBefore = null;
    let bestCandidateAfter = null;
    let w = false;
    while (node) {
        let pos = node.compareDocumentPosition(unmountingElement);
        if (pos & Node.DOCUMENT_POSITION_DISCONNECTED) {
            if (!w)
                console.warn("Can't focus anything near a disconnected element");
            w = true;
        }
        if (pos & Node.DOCUMENT_POSITION_PRECEDING) {
            // The unmounting element is before this element we're tree-walking.
            // That means the next tabbable element we find is the candidate we really want.
            if (node instanceof Element) {
                if (isTabbable(node)) {
                    bestCandidateAfter = node;
                    break;
                }
            }
        }
        else if (pos & Node.DOCUMENT_POSITION_FOLLOWING) {
            // The unmounting element is after this element we're tree-walking.
            // That means the we're getting closer and closer.
            // If this element is tabbable, then it's even closer than any other tabbable element we've saved up to this point.
            if (node instanceof Element) {
                if (isTabbable(node)) {
                    bestCandidateBefore = node;
                }
            }
        }
        node = walker.nextNode();
    }
    return bestCandidateAfter ?? bestCandidateBefore ?? document.body;
}

/**
 * When used in tandem with `useRovingTabIndex`, allows control of
 * the tabbable index with the arrow keys, Page Up/Page Down, or Home/End.
 *
 * @remarks There is no child version of this hook. That being said, the props returned are stable and work equally well on the child as the parent. If you don't have a parent `HTMLElement`, you can still pass the returned props to each child individually.
 *
 * @see {@link useCompleteListNavigation}, which packages everything up together.
 *
 * @compositeParams
 */
function useLinearNavigation({ rovingTabIndexReturn, linearNavigationParameters, paginatedChildrenParameters: { paginationMax, paginationMin, ...void2 }, ...void1 }) {
    monitorCallCount(useLinearNavigation);
    let getPaginatedRange = useStableGetter(paginationMax == null || paginationMin == null ? null : paginationMax - paginationMin);
    const { getLowestIndex, getHighestIndex, indexDemangler, indexMangler, isValid, navigatePastEnd, navigatePastStart, onNavigateLinear } = linearNavigationParameters;
    const { getTabbableIndex, setTabbableIndex } = rovingTabIndexReturn;
    useEnsureStability("useLinearNavigation", onNavigateLinear, isValid, indexDemangler, indexMangler);
    const navigateAbsolute = useCallback((requestedIndexMangled, searchDirection, e, fromUserInteraction, mode) => {
        const highestChildIndex = getHighestIndex();
        const lowestChildIndex = getLowestIndex();
        (getTabbableIndex() ?? 0);
        const targetDemangled = indexDemangler(requestedIndexMangled);
        const { status, valueDemangled } = tryNavigateToIndex({ isValid, lowestChildIndex, highestChildIndex, indexDemangler, indexMangler, searchDirection, targetDemangled });
        if (status == "past-end") {
            if (navigatePastEnd == "wrap") {
                if (mode == "single")
                    navigateToFirst(e, fromUserInteraction);
                else {
                    /* eslint-disable no-constant-condition */
                    // Uncomment to allow page up/down to wrap after hitting the top/bottom once.
                    // It works fine, the problem isn't that -- the problem is it just feels wrong. 
                    // Page Up/Down don't feel like they should wrap, even if normally requested. 
                    // That's the arrow keys' domain.
                    navigateToLast(e, fromUserInteraction);
                }
                return "stop";
            }
            else if (navigatePastEnd == "passthrough") {
                return "passthrough";
            }
            else {
                navigatePastEnd();
                return "stop";
            }
        }
        else if (status == "past-start") {
            if (navigatePastStart == "wrap") {
                if (mode == "single") {
                    navigateToLast(e, fromUserInteraction);
                }
                else {
                    /* eslint-disable no-constant-condition */
                    // See above. It works fine but just feels wrong to wrap on Page Up/Down.
                    navigateToFirst(e, fromUserInteraction);
                }
                return "stop";
            }
            else if (navigatePastStart == "passthrough") {
                return "passthrough";
            }
            else {
                navigatePastStart();
                return "stop";
            }
        }
        else {
            setTabbableIndex(valueDemangled, e, fromUserInteraction);
            onNavigateLinear?.(valueDemangled, e);
            return "stop";
        }
    }, []);
    const navigateToFirst = useStableCallback((e, fromUserInteraction) => { return navigateAbsolute(getLowestIndex(), -1, e, fromUserInteraction, "single"); });
    const navigateToLast = useStableCallback((e, fromUserInteraction) => { return navigateAbsolute(getHighestIndex(), 1, e, fromUserInteraction, "single"); });
    const navigateRelative2 = useStableCallback((e, offset, fromUserInteraction, mode) => {
        getHighestIndex();
        const searchDirection = (Math.sign(offset) || 1);
        const original = (getTabbableIndex() ?? 0);
        /**
         * To get the target, we need to add (or subtract) 1 to our current value,
         * but it need to be relative to any sorting/rearranging that's happened.
         *
         * We mangle the index to get its "visual" position, add our offset,
         * and then demangle it to get the child that corresponds to the next child "visually".
         */
        const targetMangled = indexMangler(original) + offset;
        return navigateAbsolute(targetMangled, searchDirection, e, fromUserInteraction, mode);
    });
    const navigateToNext = useStableCallback((e, fromUserInteraction) => {
        return navigateRelative2(e, 1, fromUserInteraction, "single");
    });
    const navigateToPrev = useStableCallback((e, fromUserInteraction) => {
        return navigateRelative2(e, -1, fromUserInteraction, "single");
    });
    const getDisableHomeEndKeys = useStableGetter(linearNavigationParameters.disableHomeEndKeys);
    const getArrowKeyDirection = useStableGetter(linearNavigationParameters.arrowKeyDirection);
    const getPageNavigationSize = useStableGetter(linearNavigationParameters.pageNavigationSize);
    const stableProps = useRef({
        onKeyDown: (e) => {
            // Not handled by typeahead (i.e. assume this is a keyboard shortcut)
            if (e.ctrlKey || e.metaKey)
                return;
            //const info = getLogicalDirectionInfo();
            const arrowKeyDirection = getArrowKeyDirection();
            const disableHomeEndKeys = getDisableHomeEndKeys();
            const pageNavigationSize = getPageNavigationSize();
            const allowsVerticalNavigation = (arrowKeyDirection == "vertical" || arrowKeyDirection == "either");
            const allowsHorizontalNavigation = (arrowKeyDirection == "horizontal" || arrowKeyDirection == "either");
            let childRange = (getHighestIndex() - getLowestIndex());
            let paginatedRange = getPaginatedRange() ?? childRange;
            let truePageNavigationSize = pageNavigationSize;
            if (truePageNavigationSize != null && truePageNavigationSize < 1) {
                truePageNavigationSize = Math.round(truePageNavigationSize * Math.max(10, paginatedRange + 1));
            }
            let result = "passthrough";
            // Arrow keys only take effect for components oriented in that direction,
            // so we want to make sure we only listen for left/right or up/down when appropriate.
            let keyPressIsValidForOrientation = true;
            switch (e.key) {
                case "ArrowUp":
                case "ArrowDown":
                    keyPressIsValidForOrientation = (allowsVerticalNavigation);
                    break;
                case "ArrowLeft":
                case "ArrowRight":
                    keyPressIsValidForOrientation = (allowsHorizontalNavigation);
                    break;
            }
            if (keyPressIsValidForOrientation) {
                switch (e.key) {
                    case "ArrowUp":
                    case "ArrowLeft":
                        result = navigateToPrev(e, true);
                        break;
                    case "ArrowDown":
                    case "ArrowRight":
                        result = navigateToNext(e, true);
                        break;
                    case "PageUp":
                    case "PageDown":
                        if (truePageNavigationSize == null)
                            break;
                        else if (truePageNavigationSize > 0)
                            result = navigateRelative2(e, truePageNavigationSize * (e.key.endsWith('n') ? 1 : -1), true, "page");
                        break;
                    case "Home":
                    case "End":
                        if (!disableHomeEndKeys) {
                            if (e.key.endsWith('e'))
                                navigateToFirst(e, true);
                            else
                                navigateToLast(e, true);
                            result = 'stop';
                        }
                        break;
                }
            }
            if (result && result != 'passthrough') {
                e.preventDefault();
                e.stopPropagation();
            }
        }
    });
    return {
        linearNavigationReturn: {},
        propsStable: stableProps.current
    };
}
function tryNavigateToIndex({ isValid, highestChildIndex, lowestChildIndex, searchDirection, indexDemangler, indexMangler, targetDemangled }) {
    if (searchDirection === -1) {
        let bestUpResult = undefined;
        bestUpResult = tryNavigateUp({ isValid, indexDemangler, indexMangler, targetDemangled, lowestChildIndex });
        bestUpResult ??= tryNavigateDown({ isValid, indexDemangler, indexMangler, targetDemangled, highestChildIndex });
        return bestUpResult || { valueDemangled: targetDemangled, status: "normal" };
    }
    else {
        let bestDownResult = undefined;
        bestDownResult = tryNavigateDown({ isValid, indexDemangler, indexMangler, targetDemangled, highestChildIndex });
        bestDownResult ??= tryNavigateUp({ isValid, indexDemangler, indexMangler, targetDemangled, lowestChildIndex });
        return bestDownResult || { valueDemangled: targetDemangled, status: "normal" };
    }
}
function tryNavigateUp({ isValid, indexDemangler, indexMangler, lowestChildIndex: lower, targetDemangled }) {
    while (targetDemangled >= lower && !isValid(targetDemangled)) {
        targetDemangled = indexDemangler(indexMangler(targetDemangled) - 1);
    }
    if (!isValid(targetDemangled)) {
        return undefined;
    }
    if (targetDemangled < lower) {
        return { valueDemangled: indexDemangler(lower), status: "past-start" };
    }
    else {
        return { valueDemangled: targetDemangled, status: "normal" };
    }
}
function tryNavigateDown({ isValid, indexDemangler, indexMangler, targetDemangled, highestChildIndex: upper }) {
    while (targetDemangled <= upper && !isValid(targetDemangled)) {
        targetDemangled = indexDemangler(indexMangler(targetDemangled) + 1);
    }
    if (!isValid(targetDemangled)) {
        return undefined;
    }
    if (targetDemangled > upper) {
        return { valueDemangled: indexDemangler(upper), status: "past-end" };
    }
    else {
        return { valueDemangled: targetDemangled, status: "normal" };
    }
}

/**
 * Allows a parent component to access information about certain
 * child components once they have rendered.
 *
 * @remarks This hook is designed to be lightweight, in that the parent keeps no state
 * and runs no effects.  Each child *does* run an effect, but with no state
 * changes unless you explicitly request them.
 *
 * @hasChild {@link useManagedChild}
 *
 * @compositeParams
 */
function useManagedChildren(parentParameters) {
    monitorCallCount(useManagedChildren);
    const { managedChildrenParameters: { onAfterChildLayoutEffect, onChildrenMountChange, onChildrenCountChange }, ...rest } = parentParameters;
    useEnsureStability("useManagedChildren", onAfterChildLayoutEffect, onChildrenMountChange, onChildrenCountChange);
    //const [getMountCount, setMountCount] = usePassiveState(onChildrenCountChange, returnZero, runImmediately);
    const getHighestIndex = useCallback(() => { return managedChildrenArray.current.highestIndex; }, []);
    const getLowestIndex = useCallback(() => { return managedChildrenArray.current.lowestIndex; }, []);
    // All the information we have about our children is stored in this **stable** array.
    // Any mutations to this array **DO NOT** trigger any sort of a re-render.
    const managedChildrenArray = useRef({ arr: [], rec: {}, highestIndex: 0, lowestIndex: 0 });
    // For indirect access to each child
    // Compare getManagedChildInfo
    // TODO: The primary use for this is flaggable closest fits
    // which needs to search all children for that closest fit.
    // It would be nice if there was something better for that.
    const forEachChild = useCallback((f) => {
        for (const child of managedChildrenArray.current.arr) {
            if (child) {
                if (f(child) == 'break')
                    return;
            }
        }
        for (const field in managedChildrenArray.current.rec) {
            const child = managedChildrenArray.current.rec[field];
            if (child)
                if (f(child) == 'break')
                    return;
        }
    }, []);
    // Retrieves the information associated with the child with the given index.
    // `undefined` if not child there, or it's unmounted.
    const getManagedChildInfo = useCallback((index) => {
        if (typeof index == "number")
            return managedChildrenArray.current.arr[index];
        else
            return managedChildrenArray.current.rec[index];
    }, []);
    // tl;dr this is a way to have run useLayoutEffect once after all N children
    // have mounted and run *their* useLayoutEffect, but also *without* re-rendering
    // ourselves because of having a `childCount` state or anything similar.
    //
    // When the child count ref updates, we want the parent to also run an effect
    // to maybe do something with all these children that just mounted.
    // The easiest way would be useEffect(..., [childCount]) but
    // that would require us having a childCount state, then calling
    // setChildCount and re-rendering every time children mount
    // (only one re-render at a time unless children are staggered, but still)
    // 
    // As an alternate solution, any time a child uses ULE on mount, it queues a microtask
    // to emulate running ULE on the parent. Only the first child will actually queue
    // the microtask (by checking hasRemoteULE first) so that the "effect" only
    // runs once. When it's done, hasRemoteULE is reset so it can run again if
    // more children mount/unmount.
    const hasRemoteULEChildMounted = useRef(null);
    const remoteULEChildChangedCausers = useRef(new Set());
    const remoteULEChildChanged = useCallback((index) => {
        if (remoteULEChildChangedCausers.current.size == 0) {
            if (onAfterChildLayoutEffect != null) {
                debounceRendering(() => {
                    onAfterChildLayoutEffect?.(remoteULEChildChangedCausers.current);
                    remoteULEChildChangedCausers.current.clear();
                });
            }
        }
        remoteULEChildChangedCausers.current.add(index);
        return () => { };
    }, [ /* Must remain stable */]);
    const remoteULEChildMounted = useCallback((index, mounted) => {
        if (!hasRemoteULEChildMounted.current) {
            hasRemoteULEChildMounted.current = {
                mounts: new Set(),
                unmounts: new Set(),
            };
            debounceRendering(() => {
                if (onChildrenCountChange || onChildrenMountChange) {
                    onChildrenMountChange?.(hasRemoteULEChildMounted.current.mounts, hasRemoteULEChildMounted.current.unmounts);
                    onChildrenCountChange?.(getChildren().getHighestIndex() + 1);
                    hasRemoteULEChildMounted.current = null;
                }
            });
        }
        if (mounted) {
            if (typeof index == "number") {
                managedChildrenArray.current.highestIndex = Math.max(managedChildrenArray.current.highestIndex, index);
                managedChildrenArray.current.lowestIndex = Math.min(managedChildrenArray.current.lowestIndex, index);
            }
        }
        else {
            if (typeof index == "number") {
                delete managedChildrenArray.current.arr[index];
                let shave = 0;
                while (shave <= managedChildrenArray.current.arr.length && managedChildrenArray.current.arr[managedChildrenArray.current.arr.length - 1 - shave] == undefined) {
                    ++shave;
                }
                managedChildrenArray.current.arr.splice(managedChildrenArray.current.arr.length - shave, shave);
            }
            else
                delete managedChildrenArray.current.rec[index];
            if (typeof index == "number") {
                managedChildrenArray.current.highestIndex = managedChildrenArray.current.arr.length - 1;
                // TODO: length automatically adjusts to give us the highest index,
                // but there's no corresponding property to get the lowest index when it changes...
                // managedChildrenArray.current.lowestIndex = managedChildrenArray.current.arr.length - 1;
            }
        }
        hasRemoteULEChildMounted?.current?.[mounted ? "mounts" : "unmounts"]?.add?.(index);
    }, [ /* Must remain stable */]);
    const managedChildren = useMemoObject({
        ...{ _: managedChildrenArray.current },
        forEach: forEachChild,
        getAt: getManagedChildInfo,
        getHighestIndex: getHighestIndex,
        getLowestIndex: getLowestIndex,
        arraySlice: useCallback(() => {
            let ret = managedChildrenArray.current.arr.slice();
            const max = getHighestIndex();
            for (let i = 0; i <= max; ++i) {
                if (ret[i] == null)
                    ret[i] = { index: i };
            }
            return ret;
        }, [])
    });
    const getChildren = useCallback(() => managedChildren, []);
    return {
        context: useMemoObject({
            managedChildContext: useMemoObject({
                managedChildrenArray: managedChildrenArray.current,
                remoteULEChildMounted,
                remoteULEChildChanged,
                getChildren
            })
        }),
        managedChildrenReturn: { getChildren }
    };
}
/**
 * @compositeParams
 */
function useManagedChild({ context, info }) {
    monitorCallCount(useManagedChild);
    const { managedChildContext: { getChildren, managedChildrenArray, remoteULEChildMounted, remoteULEChildChanged } } = (context ?? { managedChildContext: {} });
    const index = info.index;
    // Any time our child props change, make that information available
    // the parent if they need it.
    // The parent can listen for all updates and only act on the ones it cares about,
    // and multiple children updating in the same tick will all be sent at once.
    useLayoutEffect(() => {
        if (managedChildrenArray == null || remoteULEChildChanged == null)
            return;
        // Insert this information in-place
        if (typeof index == "number") {
            managedChildrenArray.arr[index] = { ...info };
        }
        else {
            managedChildrenArray.rec[index] = { ...info };
        }
        return remoteULEChildChanged(index);
    }, [...Object.entries(info).flat(9)]); // 9 is infinity, right? Sure. Unrelated: TODO.
    // When we mount, notify the parent via queueMicrotask
    // (every child does this, so everything's coordinated to only queue a single microtask per tick)
    // Do the same on unmount.
    // Note: It's important that this comes AFTER remoteULEChildChanged
    // so that remoteULEChildMounted has access to all the info on mount.
    useLayoutEffect(() => {
        remoteULEChildMounted?.(index, true);
        return () => remoteULEChildMounted?.(index, false);
    }, [index]);
    return {
        managedChildReturn: { getChildren: getChildren }
    };
}
/**
 * An extension to useManagedChildren that handles the following common case:
 * 1. You have a bunch of children
 * 2. At any given time, only 1 of them is "selected", "activated", "focusable", whatever (or 0 of them, that's cool too, just 0 or 1 though).
 * 3. The parent has control over who is "selected" via a numerical index.
 *
 * This hook allows for much easier control over selection management.
 *
 * Note that because you may want to use multiple flags with the same children, this hook *does not* use `useManagedChildren`!
 * You need to pass it the existing children, and you must pass your invocation of `useManagedChildren` the returned `onChildrenMountChange` handler!
 *
 * Also because of that, the types of this function are rather odd.  It's better to start off using a hook that already uses a flag, such as `useRovingTabIndex`, as an example.
 *
 */
function useChildrenFlag({ getChildren, initialIndex, closestFit, onClosestFit, onIndexChange, getAt, setAt, isValid }) {
    useEnsureStability("useChildrenFlag", onIndexChange, getAt, setAt, isValid);
    // TODO (maybe?): Even if there is an initial index, it's not set until mount. Is that fine?
    const [getCurrentIndex, setCurrentIndex] = usePassiveState(onIndexChange);
    const [getRequestedIndex, setRequestedIndex] = usePassiveState(null);
    // Shared between onChildrenMountChange and changeIndex, not public
    // Only called when `closestFit` is false, naturally.
    const getClosestFit = useCallback((requestedIndex) => {
        const children = getChildren();
        let closestDistance = Infinity;
        let closestIndex = null;
        children.forEach(child => {
            if (child != null && isValid(child)) {
                console.assert(typeof child.index == "number", "closestFit can only be used when each child has a numeric index, and cannot be used when children use string indices instead.");
                const newDistance = Math.abs(child.index - requestedIndex);
                if (newDistance < closestDistance || (newDistance == closestDistance && child.index < requestedIndex)) {
                    closestDistance = newDistance;
                    closestIndex = child.index;
                }
            }
        });
        return closestIndex;
    }, [ /* Must remain stable! */]);
    if (closestFit) {
        console.assert(onClosestFit != null, "When closestFit is used, onClosestFit must be provided");
    }
    // Any time a child mounts/unmounts, we need to double-check to see if that affects 
    // the "currently selected" (or whatever) index.  The two cases we're looking for:
    // 1. The currently selected child unmounted
    // 2. A child mounted, and it mounts with the index we're looking for
    const reevaluateClosestFit = useStableCallback(() => {
        const children = getChildren();
        const requestedIndex = getRequestedIndex();
        const currentIndex = getCurrentIndex();
        const currentChild = currentIndex == null ? null : children.getAt(currentIndex);
        if (requestedIndex != null && closestFit && (requestedIndex != currentIndex || currentChild == null || !isValid(currentChild))) {
            console.assert(typeof requestedIndex == "number", "closestFit can only be used when each child has a numeric index, and cannot be used when children use string indices instead.");
            const closestFitIndex = getClosestFit(requestedIndex);
            setCurrentIndex(closestFitIndex, undefined);
            if (currentChild)
                setAt(currentChild, false, closestFitIndex, currentIndex);
            if (closestFitIndex != null) {
                const closestFitChild = children.getAt(closestFitIndex);
                console.assert(closestFitChild != null, "Internal logic???");
                setAt(closestFitChild, true, closestFitIndex, currentIndex);
                onClosestFit(closestFitIndex);
            }
            else {
                onClosestFit(null);
            }
        }
    });
    const changeIndex = useCallback((arg, reason) => {
        const children = getChildren();
        const requestedIndex = (arg instanceof Function ? arg(getRequestedIndex()) : arg);
        setRequestedIndex(requestedIndex, reason);
        const currentIndex = getCurrentIndex();
        if (currentIndex == requestedIndex)
            return requestedIndex;
        let newMatchingChild = (requestedIndex == null ? null : children.getAt(requestedIndex));
        const oldMatchingChild = (currentIndex == null ? null : children.getAt(currentIndex));
        if (requestedIndex == null) {
            // Easy case
            setCurrentIndex(null, reason);
            if (oldMatchingChild)
                setAt(oldMatchingChild, false, requestedIndex, currentIndex);
            return null;
        }
        else {
            const childIsValid = (newMatchingChild && isValid(newMatchingChild));
            if (childIsValid || !closestFit) {
                setCurrentIndex(requestedIndex, reason);
                if (oldMatchingChild)
                    setAt(oldMatchingChild, false, requestedIndex, currentIndex);
                if (newMatchingChild)
                    setAt(newMatchingChild, true, requestedIndex, currentIndex);
                return requestedIndex;
            }
            else {
                console.assert(typeof requestedIndex == "number", "closestFit can only be used when each child has a numeric index, and cannot be used when children use string indices instead.");
                const closestFitIndex = getClosestFit(requestedIndex);
                setCurrentIndex(closestFitIndex, reason);
                if (closestFitIndex != null) {
                    newMatchingChild = children.getAt(closestFitIndex);
                    console.assert(newMatchingChild != null, "Internal logic???");
                    if (oldMatchingChild)
                        setAt(oldMatchingChild, false, closestFitIndex, currentIndex);
                    setAt(newMatchingChild, true, closestFitIndex, currentIndex);
                    return closestFitIndex;
                }
                else {
                    if (oldMatchingChild)
                        setAt(oldMatchingChild, false, closestFitIndex, currentIndex);
                    return null;
                }
            }
        }
    }, []);
    // Run once, on mount
    useLayoutEffect(() => {
        changeIndex(initialIndex ?? null, undefined);
    }, []);
    return { changeIndex, reevaluateClosestFit, getCurrentIndex };
}

/**
 * Slightly enhanced version of `useState` that includes a getter that remains constant
 * (i.e. you can use it in `useEffect` and friends without it being a dependency).
 *
 * @remarks If `getBuildMode()` returns `"development"`, then any calls to `setState` will also
 * take the stack at the time the hook was called and save it to `window._setState_stack`.
 * Useful if you want to trace whose state is being updated.
 *
 * @param initialState - Same as the built-in `setState`'s
 */
function useState(initialState) {
    const getStack = useStack();
    monitorCallCount(useState);
    // We keep both, but override the `setState` functionality
    const [state, setStateP] = useState$1(initialState);
    const ref = useRef(state);
    // Hijack the normal setter function 
    // to also set our ref to the new value
    const setState = useCallback(value => {
        if (getBuildMode() === 'development') {
            window._setState_stack = getStack();
        }
        if (typeof value === "function") {
            const callback = value;
            setStateP(prevValue => {
                const nextValue = callback(prevValue);
                if (ref.current !== nextValue) {
                    // put a breakpoint here if you want
                    ref.current = nextValue;
                }
                ref.current = nextValue;
                return nextValue;
            });
        }
        else {
            if (ref.current !== value) {
                // put a breakpoint here if you want
                ref.current = value;
            }
            ref.current = value;
            setStateP(value);
        }
    }, []);
    const getState = useCallback(() => { return ref.current; }, []);
    return [state, setState, getState];
}

/**
 * Implements a roving tabindex system where only one "focusable"
 * component in a set is able to receive a tab focus.
 *
 * @remarks *Which* of those elements receives focus is determined by you,
 * but it's recommended to offload that logic then to another hook, like
 * `useLinearNavigation`, which lets you change the tabbable element with
 * the arrow keys, `useTypeaheadNavigation`, which lets you change the
 * tabbable index with typeahead, or `useListNavigation(Complete)` if you
 * just want everything bundled together.
 *
 *
 * @hasChild {@link useRovingTabIndexChild}
 *
 * @compositeParams
 *
 * @param args - {@link UseRovingTabIndexParameters}
 * @returns - {@link UseRovingTabIndexReturnType}
 */
function useRovingTabIndex({ managedChildrenReturn: { getChildren }, rovingTabIndexParameters: { focusSelfParent: focusSelfParentUnstable, untabbable, untabbableBehavior, initiallyTabbedIndex, onTabbableIndexChange }, refElementReturn: { getElement }, ...void1 }) {
    monitorCallCount(useRovingTabIndex);
    const focusSelfParent = useStableCallback(focusSelfParentUnstable);
    untabbableBehavior ||= "focus-parent";
    const lastFocused = useRef(null);
    const getInitiallyTabbedIndex = useStableGetter(initiallyTabbedIndex);
    const getUntabbable = useStableGetter(untabbable);
    // Override the actual setter to include some extra logic related to avoiding hidden children, 
    // what to do when we're untabbable, what to do when we're tabbable but given `null`, etc.
    const setTabbableIndex = useStableCallback((updater, reason, fromUserInteraction) => {
        const children = getChildren();
        // Notify the relevant children that they should become tabbable/untabbable,
        // but also handle focus management when we changed due to user interaction
        return changeTabbableIndex(function returnModifiedTabbableIndex(prevIndex) {
            let nextIndex = ((typeof updater === "function") ? updater(prevIndex ?? null) : updater);
            const untabbable = getUntabbable();
            let parentElement = getElement();
            console.assert(!!parentElement);
            // Whether or not we're currently tabbable, make sure that when we switch from untabbable to tabbable,
            // that we know which index to switch back to.
            if (nextIndex != null)
                setLastNonNullIndex(nextIndex);
            // If we're untabbable, then any attempt to set a new index simply fails and sets it to `null`.
            if (untabbable) {
                // Focus the parent, since it's what's in the tab order right now
                // TODO: Replace this and the other focus(getElement())
                // with a user-replaceable focusParent, like item.focusSelf?
                //
                // Also TODO: Should these take fromUserInteraction into consideration?
                // Do we always move focus when we become untabbable?
                if (!parentElement.contains(document.activeElement) && untabbableBehavior != 'leave-child-focused')
                    focusSelfParent(parentElement);
                return null;
            }
            // If the requested index is hidden, then there's no need to focus any elements or run any extra logic.
            if (nextIndex == null) {
                // Focus the parent (more to be polite)
                // TODO: Find the next/prev element and focus that instead,
                // doable with the `tabbable` library, but it doesn't have a next() function or anything,
                // so that needs to be manually done with a TreeWalker or something?
                if (!parentElement.contains(document.activeElement) && untabbableBehavior != 'leave-child-focused')
                    focusSelfParent(parentElement);
                return null;
            }
            // If we've made a change, and it was because the user clicked on it or something,
            // then focus that element too
            if (prevIndex != nextIndex) {
                const nextChild = children.getAt(nextIndex);
                if (nextChild != null && fromUserInteraction) {
                    const element = nextChild.getElement();
                    if (element) {
                        if (document.activeElement == document.body || document.activeElement == null || !element.contains(document.activeElement)) {
                            nextChild.focusSelf(element);
                        }
                    }
                }
            }
            // TODO: Redundant?
            if (nextIndex != null)
                setLastNonNullIndex(nextIndex);
            // Finally, return the value the user requested the index be set to.
            return nextIndex ?? 0;
        }, reason);
    }, []);
    // When we switch from tabbable to non/tabbable, we really want to remember the last tabbable child.
    // So every time we change the index for any reason, record that change as a back up here that can be restored.
    const [getLastNonNullIndex, setLastNonNullIndex] = usePassiveState(null, useCallback(() => (initiallyTabbedIndex ?? 0), []));
    // Any time we switch to being untabbable, set the current tabbable index accordingly.
    useEffect(() => {
        let shouldFocusParentAfterwards = (getElement()?.contains(document.activeElement));
        if (untabbable)
            changeTabbableIndex(null, undefined);
        else
            changeTabbableIndex(getLastNonNullIndex(), undefined);
        if (shouldFocusParentAfterwards)
            focusSelf();
    }, [untabbable]);
    // Boilerplate related to notifying individual children when they become tabbable/untabbable
    const getTabbableAt = useCallback((child) => { return child.getLocallyTabbable(); }, []);
    const setTabbableAt = useCallback((child, t) => { child.setLocallyTabbable(t); }, []);
    const isTabbableValid = useStableCallback((child) => { return !child.untabbable; });
    const { changeIndex: changeTabbableIndex, getCurrentIndex: getTabbableIndex, reevaluateClosestFit } = useChildrenFlag({
        initialIndex: initiallyTabbedIndex ?? (untabbable ? null : 0),
        onIndexChange: useStableCallback((n, p, r) => {
            // Ensure that changes to `untabbable` don't affect the user-provided onTabbableIndexChange
            if ((!(n == null && untabbable)) && n != getLastNonNullIndex())
                onTabbableIndexChange?.(n, p, r);
        }),
        getChildren,
        closestFit: true,
        getAt: getTabbableAt,
        isValid: isTabbableValid,
        setAt: setTabbableAt,
        onClosestFit: (index) => {
            // Whenever we change due to a closest-fit switch, make sure we don't lose focus to the body
            // TODO: This is slightly janky -- we want to only mess with the user's focus when this list (or whatever) is the current focus,
            // but by the time we know something like "all the children have unmounted",
            // we've lot the ability to know if any of them were focused, at least easily.
            // So we just check to see if focus was lost to the body and, if so, send it somewhere useful.
            // This is liable to break, probably with blockingElements or something.
            if (document.activeElement == null || document.activeElement == document.body) {
                let childElement = index == null ? null : getChildren().getAt(index)?.getElement();
                if (index == null || childElement == null)
                    findBackupFocus(getElement()).focus();
                else
                    getChildren().getAt(index)?.focusSelf(childElement);
            }
        }
    });
    const focusSelf = useCallback((reason) => {
        const children = getChildren();
        let index = getTabbableIndex();
        const untabbable = getUntabbable();
        if (!untabbable) {
            // If we change from untabbable to tabbable, it's possible `index` might still be null.
            index ??= getInitiallyTabbedIndex() ?? children.getLowestIndex();
        }
        if (untabbable) {
            if (document.activeElement != getElement() && untabbableBehavior != 'leave-child-focused') {
                focusSelfParent(getElement());
            }
        }
        else if (!untabbable && index != null) {
            const element = children.getAt(index)?.getElement();
            children.getAt(index)?.focusSelf?.(element);
        }
        else
            setTabbableIndex(null, reason, true);
    }, []);
    const rovingTabIndexContext = useMemoObject({
        setTabbableIndex,
        parentFocusSelf: focusSelf,
        getInitiallyTabbedIndex: useCallback(() => { return initiallyTabbedIndex ?? (untabbable ? null : 0); }, []),
        reevaluateClosestFit,
        untabbable,
        untabbableBehavior,
        giveParentFocusedElement: useCallback((e) => { lastFocused.current = e; }, [])
    });
    return {
        managedChildrenParameters: { onChildrenMountChange: reevaluateClosestFit, },
        rovingTabIndexReturn: { setTabbableIndex, getTabbableIndex, focusSelf },
        context: useMemoObject({ rovingTabIndexContext }),
        props: {
            // Note: Making this -1 instead of null is partially intentional --
            // it gives us time during useEffect to move focus back to the last focused element
            // (otherwise focus gets lost to the body, and useEffect thinks that it shouldn't
            // focus the child because focus wasn't within the list). 
            // It's also just consistent. 
            tabIndex: untabbable ? 0 : -1,
            // TODO: When a hidden child is clicked, some browsers focus the parent, just because it's got a role and a tabindex.
            // But this won't work to avoid that, because it messes with grid navigation
            /*onFocus: useStableCallback((e: FocusEvent) => {
                const parentElement = getElement();
                console.assert(!!parentElement);
                if (e.target == getElement()) {
                    debugger;
                    if (!untabbable) {
                        focusSelf(e);
                    }
                }
            })*/
        }
    };
}
/**
 * @compositeParams
 *
 * @see {@link useRovingTabIndex}
 * @param args - {@link UseRovingTabIndexChildParameters}
 * @returns - {@link UseRovingTabIndexChildReturnType}
 */
function useRovingTabIndexChild({ info: { index, untabbable: iAmUntabbable, ...void2 }, context: { rovingTabIndexContext: { giveParentFocusedElement, untabbable: parentIsUntabbable, untabbableBehavior, reevaluateClosestFit, setTabbableIndex, getInitiallyTabbedIndex, parentFocusSelf } }, refElementReturn: { getElement }, ...void3 }) {
    monitorCallCount(useRovingTabIndexChild);
    const [tabbable, setTabbable, getTabbable] = useState(getInitiallyTabbedIndex() === index);
    useEffect(() => {
        reevaluateClosestFit();
    }, [!!iAmUntabbable]);
    useEffect(() => {
        if (tabbable) {
            giveParentFocusedElement(getElement());
        }
    }, [tabbable]);
    return {
        hasCurrentFocusParameters: {
            onCurrentFocusedInnerChanged: useStableCallback((focused, _prevFocused, e) => {
                if (focused) {
                    if ((!parentIsUntabbable && !iAmUntabbable) || untabbableBehavior != "focus-parent")
                        setTabbableIndex(index, e, false);
                    else
                        parentFocusSelf();
                }
            })
        },
        rovingTabIndexChildReturn: {
            tabbable,
            getTabbable,
        },
        info: { setLocallyTabbable: setTabbable, getLocallyTabbable: getTabbable },
        props: {
            tabIndex: (tabbable ? 0 : -1),
            ...{ inert: iAmUntabbable } // This inert is to prevent the edge case of clicking a hidden item and it focusing itself
        },
    };
}

/**
 * Allows examining the rendered component's text content whenever it renders and reacting to changes.
 *
 * @compositeParams
 */
function useTextContent({ refElementReturn: { getElement }, textContentParameters: { getText, onTextContentChange } }) {
    monitorCallCount(useTextContent);
    const [getTextContent, setTextContent] = usePassiveState(onTextContentChange, returnNull, runImmediately);
    useEffect(() => {
        const element = getElement();
        if (element) {
            const textContent = getText(element);
            if (textContent) {
                setTextContent(textContent);
            }
        }
    });
    return { textContentReturn: { getTextContent } };
}

/**
 * Allows for the selection of a managed child by typing the given text associated with it.
 *
 * @see useListNavigation, which packages everything up together.
 *
 * @hasChild {@link useTypeaheadNavigationChild}
 *
 * @compositeParams
 */
function useTypeaheadNavigation({ typeaheadNavigationParameters: { collator, typeaheadTimeout, noTypeahead, isValid, onNavigateTypeahead, ...void3 }, rovingTabIndexReturn: { getTabbableIndex: getIndex, setTabbableIndex: setIndex, ...void1 }, ...void2 }) {
    //type EventType = Parameters<NonNullable<ElementProps<ParentOrChildElement>["onKeyDown"]>>[0];
    monitorCallCount(useTypeaheadNavigation);
    // For typeahead, keep track of what our current "search" string is (if we have one)
    // and also clear it every 1000 ms since the last time it changed.
    // Next, keep a mapping of typeahead values to indices for faster searching.
    // And, for the user's sake, let them know when their typeahead can't match anything anymore
    const [getCurrentTypeahead, setCurrentTypeahead] = usePassiveState(useStableCallback((currentTypeahead, prev, reason) => {
        const handle = setTimeout(() => { setCurrentTypeahead(null, undefined); setTypeaheadStatus("none"); }, typeaheadTimeout ?? 1000);
        updateBasedOnTypeaheadChange(currentTypeahead, reason);
        return () => clearTimeout(handle);
    }));
    //useTimeout({ timeout: typeaheadTimeout ?? 1000, callback: () => { setCurrentTypeahead(null); setInvalidTypeahead(null); }, triggerIndex: currentTypeahead });
    const sortedTypeaheadInfo = useRef([]);
    const [typeaheadStatus, setTypeaheadStatus] = useState("none");
    // Handle typeahead for input method editors as well
    // Essentially, when active, ignore further keys 
    // because we're waiting for a CompositionEnd event
    const [, setImeActive, getImeActive] = useState(false);
    // Because composition events fire *after* keydown events 
    // (but within the same task, which, TODO, could be browser-dependent),
    // we can use this to keep track of which event we're listening for on the first keydown.
    const [nextTypeaheadChar, setNextTypeaheadChar] = useState(null);
    useLayoutEffect(() => {
        if (nextTypeaheadChar !== null) {
            setCurrentTypeahead(typeahead => ((typeahead ?? "") + nextTypeaheadChar), undefined);
            setNextTypeaheadChar(null);
        }
    }, [nextTypeaheadChar]);
    const comparatorShared = useStableCallback((safeLhs, safeRhs) => {
        let compare;
        // For the purposes of typeahead, only compare a string of the same size as our currently typed string.
        // By normalizing them first, we ensure this byte-by-byte handling of raw character data works out okay.
        safeLhs = safeLhs.normalize("NFD");
        safeRhs = safeRhs.normalize("NFD");
        if (collator)
            compare = collator.compare(safeLhs, safeRhs);
        else
            compare = safeLhs.toLowerCase().localeCompare(safeRhs.toLowerCase() ?? "");
        return compare;
    });
    const insertingComparator = useStableCallback((lhs, rhs) => {
        if (typeof lhs === "string" && typeof rhs.text === "string") {
            return comparatorShared(lhs, rhs.text);
        }
        return lhs - rhs;
    });
    const typeaheadComparator = useStableCallback((lhs, rhs) => {
        if (typeof lhs === "string" && typeof rhs.text === "string") {
            // During typeahead, all strings longer than ours should be truncated
            // so that they're all considered equally by that point.
            return comparatorShared(lhs, rhs.text.substring(0, lhs.length));
        }
        return lhs - rhs;
    });
    const isDisabled = useStableGetter(noTypeahead);
    const propsStable = useRef({
        onKeyDown: useStableCallback((e) => {
            if (isDisabled())
                return;
            const imeActive = getImeActive();
            const key = e.key;
            // Not handled by typeahead (i.e. assume this is a keyboard shortcut)
            if (e.ctrlKey || e.metaKey)
                return;
            if (!imeActive && e.key === "Backspace") {
                // Remove the last character in a way that doesn't split UTF-16 surrogates.
                setCurrentTypeahead(t => t == null ? null : [...t].reverse().slice(1).reverse().join(""), e);
                e.preventDefault();
                e.stopPropagation();
                return;
            }
            // The key property represents the typed character OR the "named key attribute" of the key pressed.
            // There's no definite way to tell the difference, but for all intents and purposes
            // there are no one-character names, and there are no non-ASCII-alpha names.
            // Thus, any one-character or non-ASCII value for `key` is *almost certainly* a typed character.
            const isCharacterKey = (key.length === 1 || !/^[A-Za-z]/.test(key));
            if (isCharacterKey) {
                if (key == " " && (getCurrentTypeahead() ?? "").trim().length == 0) ;
                else {
                    e.preventDefault();
                    e.stopPropagation();
                    // Note: Won't be true for the first keydown
                    // but will be overwritten before useLayoutEffect is called
                    // to actually apply the change
                    if (!imeActive)
                        setNextTypeaheadChar(key);
                }
            }
        }),
        onCompositionStart: useStableCallback((e) => {
            setNextTypeaheadChar(e.data);
            setImeActive(false);
        }),
        onCompositionEnd: useStableCallback((_e) => { setImeActive(true); }),
    });
    const excludeSpace = useStableCallback(() => { return typeaheadStatus != "none"; });
    return {
        context: useMemoObject({
            typeaheadNavigationContext: useMemoObject({
                insertingComparator,
                sortedTypeaheadInfo: sortedTypeaheadInfo.current,
                excludeSpace
            }),
        }),
        typeaheadNavigationReturn: {
            getCurrentTypeahead,
            typeaheadStatus
        },
        propsStable: propsStable.current
    };
    function updateBasedOnTypeaheadChange(currentTypeahead, reason) {
        if (currentTypeahead && sortedTypeaheadInfo.current.length) {
            const sortedTypeaheadIndex = binarySearch(sortedTypeaheadInfo.current, currentTypeahead, typeaheadComparator);
            if (sortedTypeaheadIndex < 0) {
                // The user has typed an entry that doesn't exist in the list
                // (or more specifically "for which there is no entry that starts with that input")
                setTypeaheadStatus("invalid");
            }
            else {
                setTypeaheadStatus("valid");
                /*
                  We know roughly where, in the sorted array of strings, our next typeahead location is.
                  But roughly isn't good enough if there are multiple matches.
                  To convert our sorted index to the unsorted index we need, we have to find the first
                  element that matches us *and* (if any such exist) is *after* our current selection.
    
                  In other words, the only way typeahead moves backwards relative to our current
                  position is if the only other option is behind us.
    
                  It's not specified in WAI-ARIA what to do in that case.  I suppose wrap back to the start?
                  Though there's also a case for just going upwards to the nearest to prevent jumpiness.
                  But if you're already doing typeahead on an unsorted list, like, jumpiness can't be avoided.
                  I dunno. Going back to the start is the simplest though.
    
                  Basically what this does: Starting from where we found ourselves after our binary search,
                  scan backwards and forwards through all adjacent entries that also compare equally so that
                  we can find the one whose `unsortedIndex` is the lowest amongst all other equal strings
                  (and also the lowest `unsortedIndex` yadda yadda except that it comes after us).
    
                  TODO: The binary search starts this off with a solid O(log n), but one-character
                  searches are, thanks to pigeonhole principal, eventually guaranteed to become
                  O(n*log n). This is annoying but probably not easily solvable? There could be an
                  exception for one-character strings, but that's just kicking the can down
                  the road. Maybe one or two characters would be good enough though.
                */
                // These are used to keep track of the candidates' positions in both our sorted array and the unsorted DOM.
                let lowestUnsortedIndexAll = null;
                let lowestSortedIndexAll = sortedTypeaheadIndex;
                // These two are only set for elements that are ahead of us, but the principle's the same otherwise
                let lowestUnsortedIndexNext = null;
                let lowestSortedIndexNext = sortedTypeaheadIndex;
                const updateBestFit = (u) => {
                    if (!isValid(u))
                        return;
                    if (lowestUnsortedIndexAll == null || u < lowestUnsortedIndexAll) {
                        lowestUnsortedIndexAll = u;
                        lowestSortedIndexAll = i;
                    }
                    if ((lowestUnsortedIndexNext == null || u < lowestUnsortedIndexNext) && u > (getIndex() ?? -Infinity)) {
                        lowestUnsortedIndexNext = u;
                        lowestSortedIndexNext = i;
                    }
                };
                let i = sortedTypeaheadIndex;
                while (i >= 0 && typeaheadComparator(currentTypeahead, sortedTypeaheadInfo.current[i]) == 0) {
                    updateBestFit(sortedTypeaheadInfo.current[i].unsortedIndex);
                    --i;
                }
                i = sortedTypeaheadIndex;
                while (i < sortedTypeaheadInfo.current.length && typeaheadComparator(currentTypeahead, sortedTypeaheadInfo.current[i]) == 0) {
                    updateBestFit(sortedTypeaheadInfo.current[i].unsortedIndex);
                    ++i;
                }
                let toSet = null;
                if (lowestUnsortedIndexNext !== null)
                    toSet = sortedTypeaheadInfo.current[lowestSortedIndexNext].unsortedIndex;
                else if (lowestUnsortedIndexAll !== null)
                    toSet = sortedTypeaheadInfo.current[lowestSortedIndexAll].unsortedIndex;
                if (toSet != null) {
                    setIndex(toSet, reason, true);
                    onNavigateTypeahead?.(toSet, reason);
                }
            }
        }
    }
}
/**
 *
 * @compositeParams
 */
function useTypeaheadNavigationChild({ info: { index, ...void1 }, textContentParameters: { getText, ...void5 }, context: { typeaheadNavigationContext: { sortedTypeaheadInfo, insertingComparator, excludeSpace, ...void2 } }, refElementReturn: { getElement, ...void3 }, ...void4 }) {
    monitorCallCount(useTypeaheadNavigationChild);
    const { textContentReturn } = useTextContent({
        refElementReturn: { getElement },
        textContentParameters: {
            getText,
            onTextContentChange: useCallback((text) => {
                if (text) {
                    // Find where to insert this item.
                    // Because all index values should be unique, the returned sortedIndex
                    // should always refer to a new location (i.e. be negative)                
                    const sortedIndex = binarySearch(sortedTypeaheadInfo, text, insertingComparator);
                    console.assert(sortedIndex < 0 || insertingComparator(sortedTypeaheadInfo[sortedIndex].text, { unsortedIndex: index, text }) == 0);
                    if (sortedIndex < 0) {
                        sortedTypeaheadInfo.splice(-sortedIndex - 1, 0, { text, unsortedIndex: index });
                    }
                    else {
                        sortedTypeaheadInfo.splice(sortedIndex, 0, { text, unsortedIndex: index });
                    }
                    return () => {
                        // When unmounting, find where we were and remove ourselves.
                        // Again, we should always find ourselves because there should be no duplicate values if each index is unique.
                        const sortedIndex = binarySearch(sortedTypeaheadInfo, text, insertingComparator);
                        console.assert(sortedIndex < 0 || insertingComparator(sortedTypeaheadInfo[sortedIndex].text, { unsortedIndex: index, text }) == 0);
                        if (sortedIndex >= 0) {
                            sortedTypeaheadInfo.splice(sortedIndex, 1);
                        }
                    };
                }
            }, [])
        }
    });
    return {
        textContentReturn,
        pressParameters: { excludeSpace }
    };
}
/**
 * Your usual binary search implementation.
 *
 * It's used here to quickly find a good spot to start searching for our next typeahead candidate.
 * @param array - The array to search through
 * @param wanted - The value you'd like to find
 * @param comparator - Compares `wanted` with the current value in `array`
 * @returns A non-negative value if `wanted` was found, and a negative number if not.
 * The absolute value of this number, minus one, is where `wanted` *would* be found if it *was* in `array`
 */
function binarySearch(array, wanted, comparator) {
    let firstIndex = 0;
    let lastIndex = array.length - 1;
    while (firstIndex <= lastIndex) {
        const testIndex = (lastIndex + firstIndex) >> 1;
        const comparisonResult = comparator(wanted, array[testIndex]);
        if (comparisonResult > 0) {
            firstIndex = testIndex + 1;
        }
        else if (comparisonResult < 0) {
            lastIndex = testIndex - 1;
        }
        else {
            return testIndex;
        }
    }
    return -firstIndex - 1;
}

/**
 * Implements proper keyboard navigation for components like listboxes, button groups, menus, etc.
 *
 * @remarks In the document order, there will be only one "focused" or "tabbable" element, making it act more like one complete unit in comparison to everything around it.
 * Navigating forwards/backwards can be done with the arrow keys, Home/End keys, or any text for typeahead to focus the next item that matches.
 *
 * @compositeParams
 *
 * @hasChild {@link useListNavigationChild}
 */
function useListNavigation({ linearNavigationParameters, typeaheadNavigationParameters, rovingTabIndexParameters, managedChildrenReturn, refElementReturn, paginatedChildrenParameters, ...void1 }) {
    monitorCallCount(useListNavigation);
    const { context: { rovingTabIndexContext }, managedChildrenParameters, rovingTabIndexReturn, props: propsRTI, ...void2 } = useRovingTabIndex({ managedChildrenReturn, rovingTabIndexParameters, refElementReturn });
    const { context: { typeaheadNavigationContext }, propsStable: propsStableTN, typeaheadNavigationReturn, ...void3 } = useTypeaheadNavigation({ rovingTabIndexReturn, typeaheadNavigationParameters, });
    const { propsStable: propsStableLN, linearNavigationReturn, ...void4 } = useLinearNavigation({ rovingTabIndexReturn, linearNavigationParameters, paginatedChildrenParameters });
    // Merge the props while keeping them stable
    // (TODO: We run this merge logic every render but only need the first render's result because it's stable)
    const p = useMergedProps(propsStableTN, propsStableLN);
    const propsStable = useRef(p);
    return {
        managedChildrenParameters,
        rovingTabIndexReturn,
        typeaheadNavigationReturn,
        context: useMemoObject({
            rovingTabIndexContext,
            typeaheadNavigationContext
        }),
        linearNavigationReturn,
        propsStableParentOrChild: propsStable.current,
        propsParent: propsRTI
    };
}
/**
 * @compositeParams
 */
function useListNavigationChild({ info, context, refElementReturn, textContentParameters, ...void2 }) {
    monitorCallCount(useListNavigationChild);
    const { props, ...rticr } = useRovingTabIndexChild({ context, info, refElementReturn });
    const { ...tncr } = useTypeaheadNavigationChild({ refElementReturn, textContentParameters, context, info });
    return {
        props,
        ...tncr,
        ...rticr
    };
}

/**
 * Implements 2-dimensional grid-based keyboard navigation, similarly to {@link useListNavigation}.
 *
 * @remarks Due to the complexity of this hook, it is *highly* recommended to use {@link useCompleteGridNavigation} instead.
 * But if you do need to it's designed to work well with intellisense -- just keep plugging the holes until the errors stop and that's 95% of it right there.
 *
 * Some features and/or limitations of this hook:
 *
 * ```md-literal
 * * Like all other hooks (except sorting), the only DOM restriction is that the rows and cells are descendants of the grid as a whole **somewhere**.
 * * Rows are given priority over columns. Sorting/filtering happens by row, Page Up/Down, the Home/End keys, and typeahead affect the current row, etc.
 * * Cells can have a `colSpan` or be missing, and moving with the arrow keys will "remember" the correct column to be in as focus jumps around.
 * ```
 *
 * @compositeParams
 *
 * @hasChild {@link useGridNavigationRow}
 * @hasChild {@link useGridNavigationCell}
 */
function useGridNavigation({ gridNavigationParameters: { onTabbableColumnChange, ...void3 }, linearNavigationParameters, ...listNavigationParameters }) {
    monitorCallCount(useGridNavigation);
    const [getTabbableColumn, setTabbableColumn] = usePassiveState(onTabbableColumnChange, useStableCallback(() => {
        let t = (listNavigationParameters.rovingTabIndexParameters.initiallyTabbedIndex ?? 0);
        return { actual: t, ideal: t };
    }));
    const { linearNavigationReturn, rovingTabIndexReturn, typeaheadNavigationReturn, managedChildrenParameters, context: { rovingTabIndexContext, typeaheadNavigationContext }, propsParent, propsStableParentOrChild, ...void1 } = useListNavigation({
        linearNavigationParameters: { arrowKeyDirection: "vertical", ...linearNavigationParameters },
        ...listNavigationParameters
    });
    const gridNavigationRowContext = useMemoObject({
        //rowIsUntabbableBecauseOfGrid: !!untabbable,
        setTabbableRow: rovingTabIndexReturn.setTabbableIndex,
        getTabbableColumn,
        setTabbableColumn
    });
    return {
        propsParent,
        propsStableParentOrChild,
        managedChildrenParameters,
        context: useMemoObject({
            gridNavigationRowContext,
            rovingTabIndexContext,
            typeaheadNavigationContext
        }),
        linearNavigationReturn,
        rovingTabIndexReturn,
        typeaheadNavigationReturn
    };
}
/**
 * Child hook for {@link useGridNavigation}
 *
 * As a row, this hook is responsible for both being a **child** of list navigation, but also a **parent** of list navigation.
 * As such, this is one of the most complicated hooks here in terms of dependencies.
 *
 * @compositeParams
 */
function useGridNavigationRow({ 
// Stuff for the row as a child of the parent grid
info: managedChildParameters, textContentParameters, context: contextFromParent, 
// Stuff for the row as a parent of child cells
linearNavigationParameters, rovingTabIndexParameters: { untabbable: rowIsUntabbableAndSoAreCells, initiallyTabbedIndex, onTabbableIndexChange, ...void4 }, managedChildrenReturn, typeaheadNavigationParameters, 
// Both/neither
refElementReturn, ...void1 }) {
    monitorCallCount(useGridNavigationRow);
    const { getTabbableColumn, setTabbableColumn, setTabbableRow } = contextFromParent.gridNavigationRowContext;
    const getIndex = useStableCallback(() => { return managedChildParameters.index; });
    const whenThisRowIsFocused = useStableCallback((e) => {
        const { getChildren } = managedChildrenReturn;
        let { ideal, actual } = (getTabbableColumn());
        let index = (ideal ?? 0);
        let child = getChildren().getAt(index);
        let lowestIndex = getChildren().getLowestIndex();
        let highestIndex = getChildren().getHighestIndex();
        while ((!child || child.untabbable) && index > lowestIndex) {
            --index;
            child = getChildren().getAt(index);
        }
        while ((!child || child.untabbable) && index <= highestIndex) {
            ++index;
            child = getChildren().getAt(index);
        }
        if (child) {
            const e = child.getElement();
            child.focusSelf(e);
        }
        else {
            focus(e);
        }
    }, []);
    const focusSelf = whenThisRowIsFocused;
    const { props: propsLNC, info, ...ulncRet } = useListNavigationChild({ info: managedChildParameters, refElementReturn, textContentParameters, context: contextFromParent });
    const allChildCellsAreUntabbable = !ulncRet.rovingTabIndexChildReturn.tabbable;
    const { propsStableParentOrChild: propsLN, 
    // This is just tabIndex = 0 or -1, see the TODO below
    propsParent: propsLN2, context: contextULN, ...ulnRet } = useListNavigation({
        managedChildrenReturn,
        refElementReturn,
        typeaheadNavigationParameters,
        rovingTabIndexParameters: {
            untabbableBehavior: "leave-child-focused",
            focusSelfParent: whenThisRowIsFocused,
            untabbable: allChildCellsAreUntabbable || rowIsUntabbableAndSoAreCells,
            initiallyTabbedIndex,
            onTabbableIndexChange: useStableCallback((v, p, r) => {
                setTabbableColumn({ ideal: v, actual: v });
                onTabbableIndexChange?.(v, p, r);
            })
        },
        linearNavigationParameters: {
            onNavigateLinear: useStableCallback((next, event) => {
                setTabbableColumn(prev => ({ ideal: next, actual: prev?.actual ?? next }), event);
            }),
            disableHomeEndKeys: true,
            arrowKeyDirection: "horizontal",
            ...linearNavigationParameters
        },
        paginatedChildrenParameters: { paginationMin: null, paginationMax: null }
    });
    const { setTabbableIndex } = ulnRet.rovingTabIndexReturn;
    const gridNavigationCellContext = useMemoObject({
        //allChildCellsAreUntabbable,
        setTabbableRow,
        getRowIndex: getIndex,
        getTabbableColumn,
        setTabbableColumn,
        setTabbableCell: setTabbableIndex
    });
    // TODO: propsLN2 (awful name) is just the tabIndex=0 or -1 from rovingTabIndex, which flips around when `untabbable` flips.
    // We can ignore it here, because our tabIndex is entirely controlled by our own list navigation,
    // but it shouldn't just be ignored wholesale like this.
    const props = useMergedProps(propsLN, /*propsLN2,*/ propsLNC, {
        // Ensure that if the browser focuses the row for whatever reason, we transfer the focus to a child cell.
        onFocus: useStableCallback(e => whenThisRowIsFocused(e.currentTarget))
    });
    props.tabIndex = -1;
    const contextToChildren = useMemoObject({
        gridNavigationCellContext,
        ...contextULN
    });
    return {
        context: contextToChildren,
        props,
        info: { focusSelf, ...info },
        ...ulncRet,
        ...ulnRet,
    };
}
/**
 * Child hook for {@link useGridNavigationRow} (and {@link useGridNavigation}).
 *
 * @compositeParams
 */
function useGridNavigationCell({ context: { gridNavigationCellContext: { getRowIndex, setTabbableRow, getTabbableColumn: _getCurrentColumn, setTabbableColumn, setTabbableCell, 
//allChildCellsAreUntabbable,
...void4 }, rovingTabIndexContext, typeaheadNavigationContext, ...void5 }, info, refElementReturn, textContentParameters, gridNavigationCellParameters: { colSpan, ...void6 }, ...void1 }) {
    monitorCallCount(useGridNavigationCell);
    colSpan ??= 1;
    const { index } = info;
    const { hasCurrentFocusParameters: { onCurrentFocusedInnerChanged: ocfic1, ...void3 }, rovingTabIndexChildReturn, textContentReturn, pressParameters, props, info: infoLs, ...void2 } = useListNavigationChild({
        info,
        context: { rovingTabIndexContext, typeaheadNavigationContext },
        textContentParameters,
        refElementReturn,
    });
    return {
        info: infoLs,
        props: useMergedProps(props, { onClick: () => setTabbableColumn(prev => ({ ideal: index, actual: (prev?.actual ?? index) })) }),
        rovingTabIndexChildReturn,
        textContentReturn,
        pressParameters,
        hasCurrentFocusParameters: {
            onCurrentFocusedInnerChanged: useStableCallback((focused, prev, e) => {
                ocfic1?.(focused, prev, e);
                if (focused) {
                    setTabbableRow(getRowIndex(), e, false);
                    setTabbableColumn(prev => { debugger; return { actual: index, ideal: prev?.ideal ?? index }; }, e);
                    setTabbableCell((prev) => {
                        if (prev != null && (prev < index || prev > index + (colSpan))) {
                            return prev;
                        }
                        return index;
                    }, e, false);
                }
            })
        },
    };
}

/**
 * Allows a single child among all children to be the "selected" child (which can be different from the "focused" child).
 *
 * @remarks If you need multi-select instead of single-select and you're using this hook (e.g. as part of {@link useCompleteListNavigation}), you can disable the single-selection behavior either by setting the selected index to `null` or.
 *
 * @hasChild {@link useSingleSelectionChild}
 *
 * @compositeParams
 */
function useSingleSelection({ managedChildrenReturn: { getChildren, ...void1 }, rovingTabIndexReturn: { setTabbableIndex, ...void2 }, singleSelectionParameters: { onSelectedIndexChange: onSelectedIndexChange_U, initiallySelectedIndex, ariaPropName, selectionMode, ...void3 }, ...void4 }) {
    monitorCallCount(useSingleSelection);
    const onSelectedIndexChange = useStableCallback(onSelectedIndexChange_U ?? noop$1);
    const getSelectedAt = useCallback((m) => { return m.getSelected(); }, []);
    const setSelectedAt = useCallback((m, t, newSelectedIndex, prevSelectedIndex) => {
        if (m.untabbable) {
            console.assert(false);
        }
        const directionComparison = (newSelectedIndex == m.index ? prevSelectedIndex : newSelectedIndex);
        const direction = (directionComparison == null ? null : (m.index - directionComparison));
        if (newSelectedIndex == null)
            console.assert(t == false);
        if (t)
            console.assert(newSelectedIndex === m.index);
        m.setLocalSelected(t, direction);
    }, []);
    const isSelectedValid = useCallback((m) => { return !m.unselectable; }, []);
    const { changeIndex: changeSelectedIndex, getCurrentIndex: getSelectedIndex } = useChildrenFlag({
        getChildren,
        onIndexChange: null,
        initialIndex: initiallySelectedIndex,
        getAt: getSelectedAt,
        setAt: setSelectedAt,
        isValid: isSelectedValid,
        closestFit: false,
        onClosestFit: null
    });
    return {
        singleSelectionReturn: useMemoObject({
            getSelectedIndex,
            changeSelectedIndex
        }),
        context: useMemoObject({
            singleSelectionContext: useMemoObject({
                getSelectedIndex,
                onSelectedIndexChange: onSelectedIndexChange,
                ariaPropName,
                selectionMode
            }),
        }),
        childrenHaveFocusParameters: {
            onCompositeFocusChange: useStableCallback((anyFocused, prev, reason) => {
                if (!anyFocused) {
                    const selectedIndex = getSelectedIndex();
                    if (selectedIndex != null)
                        setTabbableIndex(selectedIndex, reason, false);
                }
            })
        }
    };
}
/**
 *
 *
 * @compositeParams
 */
function useSingleSelectionChild({ context: { singleSelectionContext: { getSelectedIndex, onSelectedIndexChange, ariaPropName, selectionMode, ...void1 }, ...void2 }, info: { index, unselectable, ...void3 }, ...void4 }) {
    monitorCallCount(useSingleSelectionChild);
    useEnsureStability("useSingleSelectionChild", getSelectedIndex, onSelectedIndexChange);
    useStableGetter(unselectable);
    const [localSelected, setLocalSelected, getLocalSelected] = useState(getSelectedIndex() == index);
    const [direction, setDirection, getDirection] = useState(getSelectedIndex() == null ? null : (getSelectedIndex() - index));
    const onCurrentFocusedInnerChanged = useStableCallback((focused, _prev, e) => {
        if (selectionMode == 'focus' && focused) {
            onSelectedIndexChange?.(enhanceEvent(e, { selectedIndex: index }));
        }
    });
    const propParts = ariaPropName?.split("-") ?? [];
    const onPressSync = useStableCallback((e) => { onSelectedIndexChange?.(enhanceEvent(e, { selectedIndex: index })); });
    return {
        info: {
            setLocalSelected: useStableCallback((selected, direction) => {
                setLocalSelected(selected);
                setDirection(direction);
            }),
            getSelected: getLocalSelected,
            selected: localSelected,
        },
        singleSelectionChildReturn: {
            selected: localSelected,
            getSelected: getLocalSelected,
            selectedOffset: direction,
            getSelectedOffset: getDirection,
        },
        props: ariaPropName == null || selectionMode == "disabled" ? {} : {
            [`${propParts[0]}-${propParts[1]}`]: (localSelected ? (propParts[1] == "current" ? `${propParts[2]}` : `true`) : "false")
        },
        hasCurrentFocusParameters: { onCurrentFocusedInnerChanged },
        pressParameters: { onPressSync: onSelectedIndexChange ? onPressSync : null }
    };
}
/**
 * Let's face it, declarative is nicer to use than imperative, so this is a shortcut.
 */
function useSingleSelectionDeclarative({ singleSelectionReturn: { changeSelectedIndex }, singleSelectionDeclarativeParameters: { selectedIndex, onSelectedIndexChange } }) {
    useEffect(() => {
        changeSelectedIndex(selectedIndex);
    }, [selectedIndex]);
    return { singleSelectionParameters: { onSelectedIndexChange } };
}

function useGridNavigationSingleSelection({ gridNavigationParameters, linearNavigationParameters, rovingTabIndexParameters, managedChildrenReturn, typeaheadNavigationParameters, singleSelectionParameters, refElementReturn, paginatedChildrenParameters, ...void2 }) {
    monitorCallCount(useGridNavigationSingleSelection);
    const { context: { gridNavigationRowContext, rovingTabIndexContext, typeaheadNavigationContext }, linearNavigationReturn, managedChildrenParameters, propsParent, propsStableParentOrChild, rovingTabIndexReturn, typeaheadNavigationReturn, } = useGridNavigation({
        gridNavigationParameters,
        linearNavigationParameters,
        managedChildrenReturn,
        rovingTabIndexParameters,
        typeaheadNavigationParameters,
        paginatedChildrenParameters,
        refElementReturn
    });
    const { childrenHaveFocusParameters, context: { singleSelectionContext }, singleSelectionReturn, } = useSingleSelection({
        managedChildrenReturn,
        rovingTabIndexReturn,
        singleSelectionParameters
    });
    return {
        context: useMemoObject({
            gridNavigationRowContext,
            rovingTabIndexContext,
            singleSelectionContext,
            typeaheadNavigationContext
        }),
        childrenHaveFocusParameters,
        linearNavigationReturn,
        managedChildrenParameters,
        propsParent,
        propsStableParentOrChild,
        rovingTabIndexReturn,
        singleSelectionReturn,
        typeaheadNavigationReturn
    };
}
function useGridNavigationSingleSelectionRow({ info: mcp1, linearNavigationParameters, managedChildrenReturn, refElementReturn, rovingTabIndexParameters, textContentParameters, typeaheadNavigationParameters, context: { gridNavigationRowContext, rovingTabIndexContext, singleSelectionContext, typeaheadNavigationContext }, ...void1 }) {
    monitorCallCount(useGridNavigationSingleSelectionRow);
    const { hasCurrentFocusParameters: { onCurrentFocusedInnerChanged: ocfic1, ...void6 }, info: mcp2, props: propsSS, singleSelectionChildReturn, pressParameters: { onPressSync, ...void4 }, ...void2 } = useSingleSelectionChild({ info: mcp1, context: { singleSelectionContext } });
    const { hasCurrentFocusParameters: { onCurrentFocusedInnerChanged: ocfic2, ...void7 }, info: mcp3, props: propsGN, linearNavigationReturn, managedChildrenParameters, pressParameters: { excludeSpace, ...void5 }, rovingTabIndexChildReturn, rovingTabIndexReturn, textContentReturn, typeaheadNavigationReturn, context, ...void3 } = useGridNavigationRow({ context: { gridNavigationRowContext, rovingTabIndexContext, typeaheadNavigationContext }, linearNavigationParameters, info: mcp1, managedChildrenReturn, refElementReturn, rovingTabIndexParameters, textContentParameters, typeaheadNavigationParameters });
    return {
        context: { ...context, singleSelectionContext },
        linearNavigationReturn,
        info: { ...mcp2, ...mcp3 },
        managedChildrenParameters,
        pressParameters: { onPressSync, excludeSpace },
        hasCurrentFocusParameters: { onCurrentFocusedInnerChanged: useStableCallback((hasFocus, hadFocus) => { ocfic1?.(hasFocus, hadFocus); ocfic2?.(hasFocus, hadFocus); }) },
        props: useMergedProps(propsGN, propsSS),
        rovingTabIndexChildReturn,
        rovingTabIndexReturn,
        singleSelectionChildReturn,
        textContentReturn,
        typeaheadNavigationReturn
    };
}
// EZ
function useGridNavigationSingleSelectionCell(p) {
    monitorCallCount(useGridNavigationSingleSelectionCell);
    return useGridNavigationCell(p);
}

/**
 * Hook that allows for the **direct descendant** children of this component to be re-ordered and sorted.
 *
 * @remarks *This is **separate** from "managed" children, which can be any level of child needed! Sortable/rearrangeable children must be **direct descendants** of the parent that uses this hook!*
 *
 * It's recommended to use this in conjunction with `useListNavigation`; it takes the same `indexMangler` and `indexDemangler`
 * functions that this hook returns. `useListNavigation` does not directly use this hook because, as mentioned,
 * this hook imposes serious restrictions on child structure, while `useListNavigation` allows anything.
 *
 * Besides the prop-modifying hook that's returned, the `sort` function that's returned will
 * sort all children according to their value from the `getValue` argument you pass in.
 *
 * If you want to perform some re-ordering operation that's *not* a sort, you can manually
 * re-map each child's position using `mangleMap` and `demangleMap`, which convert between
 * sorted and unsorted index positions.
 *
 * Again, unlike some other hooks, **these children must be direct descendants**. This is because
 * the prop-modifying hook inspects the given children, then re-creates them with new `key`s.
 * Because keys are given special treatment and a child has no way of modifying its own key
 * there's no other time or place this can happen other than exactly within the parent component's render function.
 *
 * @compositeParams
 */
function useRearrangeableChildren({ rearrangeableChildrenParameters: { getIndex, onRearranged }, managedChildrenReturn: { getChildren } }) {
    monitorCallCount(useRearrangeableChildren);
    useEnsureStability("useRearrangeableChildren", getIndex);
    // These are used to keep track of a mapping between unsorted index <---> sorted index.
    // These are needed for navigation with the arrow keys.
    const mangleMap = useRef(new Map());
    const demangleMap = useRef(new Map());
    const indexMangler = useCallback((n) => (mangleMap.current.get(n) ?? n), []);
    const indexDemangler = useCallback((n) => (demangleMap.current.get(n) ?? n), []);
    const onRearrangedGetter = useStableGetter(onRearranged);
    //const { setTabbableIndex } = rovingTabIndexReturn;
    const shuffle$1 = useCallback(() => {
        const managedRows = getChildren();
        const originalRows = managedRows.arraySlice();
        const shuffledRows = shuffle(originalRows);
        return rearrange(originalRows, shuffledRows);
    }, [ /* Must remain stable */]);
    const reverse = useCallback(() => {
        const managedRows = getChildren();
        const originalRows = managedRows.arraySlice();
        const reversedRows = managedRows.arraySlice().reverse();
        return rearrange(originalRows, reversedRows);
    }, [ /* Must remain stable */]);
    // The sort function needs to be able to update whoever has all the sortable children.
    // Because that might not be the consumer of *this* hook directly (e.g. a table uses
    // this hook, but it's tbody that actually needs updating), we need to remotely
    // get and set a forceUpdate function.
    //const [getForceUpdate, setForceUpdate] = usePassiveState<null | (() => void)>(null, returnNull);
    const [getForceUpdate, setForceUpdate] = usePassiveState(null, returnNull);
    const rearrange = useCallback((originalRows, sortedRows) => {
        mangleMap.current.clear();
        demangleMap.current.clear();
        // Update our sorted <--> unsorted indices map 
        // and rerender the whole table, basically
        for (let indexAsSorted = 0; indexAsSorted < sortedRows.length; ++indexAsSorted) {
            if (sortedRows[indexAsSorted]) {
                const indexAsUnsorted = sortedRows[indexAsSorted].index;
                mangleMap.current.set(indexAsUnsorted, indexAsSorted);
                demangleMap.current.set(indexAsSorted, indexAsUnsorted);
            }
        }
        onRearrangedGetter()?.();
        getForceUpdate()?.();
    }, []);
    const useRearrangedChildren = useCallback(function useRearrangedChildren(children) {
        monitorCallCount(useRearrangedChildren);
        console.assert(Array.isArray(children));
        return children
            .slice()
            .map(child => ({ child, mangledIndex: indexMangler(getIndex(child)), demangledIndex: getIndex(child) }))
            .sort((lhs, rhs) => { return lhs.mangledIndex - rhs.mangledIndex; })
            .map(({ child, mangledIndex, demangledIndex }) => {
            return createElement(child.type, { ...child.props, key: demangledIndex, "data-mangled-index": mangledIndex, "data-demangled-index": demangledIndex });
        });
    }, []);
    const toJsonArray = useCallback((transform) => {
        const managedRows = getChildren();
        return managedRows.arraySlice().map(child => {
            if (transform)
                return (transform(child));
            else
                return child.getSortValue();
        });
    }, []);
    return {
        rearrangeableChildrenReturn: {
            indexMangler,
            indexDemangler,
            //mangleMap,
            //demangleMap,
            rearrange,
            shuffle: shuffle$1,
            reverse,
            useRearrangedChildren,
            toJsonArray
        }
    };
}
/**
 * Hook that allows for the **direct descendant** children of this component to be re-ordered and sorted.
 *
 * @remarks *This is **separate** from "managed" children, which can be any level of child needed! Sortable/rearrangeable children must be **direct descendants** of the parent that uses this hook!*
 *
 * It's recommended to use this in conjunction with `useListNavigation`; it takes the same `indexMangler` and `indexDemangler`
 * functions that this hook returns. `useListNavigation` does not directly use this hook because, as mentioned,
 * this hook imposes serious restrictions on child structure, while `useListNavigation` allows anything.
 *
 * Besides the prop-modifying hook that's returned, the `sort` function that's returned will
 * sort all children according to their value from the `getValue` argument you pass in.
 *
 * If you want to perform some re-ordering operation that's *not* a sort, you can manually
 * re-map each child's position using `mangleMap` and `demangleMap`, which convert between
 * sorted and unsorted index positions.
 *
 * Again, unlike some other hooks, **these children must be direct descendants**. This is because
 * the prop-modifying hook inspects the given children, then re-creates them with new `key`s.
 * Because keys are given special treatment and a child has no way of modifying its own key
 * there's no other time or place this can happen other than exactly within the parent component's render function.
 *
 * @compositeParams
 */
function useSortableChildren({ rearrangeableChildrenParameters, sortableChildrenParameters: { compare: userCompare }, managedChildrenReturn: { getChildren } }) {
    monitorCallCount(useSortableChildren);
    const getCompare = useStableGetter(userCompare ?? defaultCompare);
    const { rearrangeableChildrenReturn } = useRearrangeableChildren({ rearrangeableChildrenParameters, managedChildrenReturn: { getChildren } });
    const { rearrange } = rearrangeableChildrenReturn;
    // The actual sort function.
    const sort = useCallback((direction) => {
        const managedRows = getChildren();
        const compare = getCompare();
        const originalRows = managedRows.arraySlice();
        const sortedRows = compare ? originalRows.sort((lhsRow, rhsRow) => {
            const lhsValue = lhsRow;
            const rhsValue = rhsRow;
            const result = compare(lhsValue, rhsValue);
            if (direction[0] == "d")
                return -result;
            return result;
        }) : managedRows.arraySlice();
        return rearrange(originalRows, sortedRows);
    }, [ /* Must remain stable */]);
    return {
        sortableChildrenReturn: { sort },
        rearrangeableChildrenReturn
    };
}
function defaultCompare(lhs, rhs) {
    return compare1(lhs?.getSortValue(), rhs?.getSortValue());
    function compare1(lhs, rhs) {
        if (lhs == null || rhs == null) {
            if (lhs == null)
                return -1;
            if (rhs == null)
                return 1;
        }
        return lhs - rhs;
    }
}

function useGridNavigationSingleSelectionSortable({ rearrangeableChildrenParameters, sortableChildrenParameters, linearNavigationParameters, managedChildrenReturn, ...gridNavigationSingleSelectionParameters }) {
    monitorCallCount(useGridNavigationSingleSelectionSortable);
    const { ...scr } = useSortableChildren({ rearrangeableChildrenParameters, sortableChildrenParameters, managedChildrenReturn });
    const { rearrangeableChildrenReturn: { indexDemangler, indexMangler } } = scr;
    const gnr = useGridNavigationSingleSelection({
        linearNavigationParameters: { indexDemangler, indexMangler, ...linearNavigationParameters },
        managedChildrenReturn,
        ...gridNavigationSingleSelectionParameters
    });
    return { ...gnr, ...scr, };
}

function useListNavigationSingleSelection({ linearNavigationParameters, rovingTabIndexParameters, typeaheadNavigationParameters, singleSelectionParameters, managedChildrenReturn, refElementReturn, paginatedChildrenParameters, ...void3 }) {
    monitorCallCount(useListNavigationSingleSelection);
    const { context: contextLN, propsParent, propsStableParentOrChild, rovingTabIndexReturn, ...retLN } = useListNavigation({ linearNavigationParameters, rovingTabIndexParameters, paginatedChildrenParameters, typeaheadNavigationParameters, managedChildrenReturn, refElementReturn });
    const { context: contextSS, ...retSS } = useSingleSelection({ rovingTabIndexReturn, managedChildrenReturn, singleSelectionParameters });
    return {
        rovingTabIndexReturn,
        ...retSS,
        ...retLN,
        context: useMemoObject({
            ...contextLN,
            ...contextSS
        }),
        propsParent,
        propsStableParentOrChild
    };
}
function useListNavigationSingleSelectionChild({ info, context, refElementReturn, textContentParameters, ...void1 }) {
    monitorCallCount(useListNavigationSingleSelectionChild);
    const { hasCurrentFocusParameters: { onCurrentFocusedInnerChanged: ocfic2, ...void3 }, info: infoSS, singleSelectionChildReturn, props: propsSS, pressParameters: { onPressSync }, ...void9 } = useSingleSelectionChild({
        info,
        context,
    });
    const { hasCurrentFocusParameters: { onCurrentFocusedInnerChanged: ocfic1, ...void6 }, pressParameters: { excludeSpace }, rovingTabIndexChildReturn, textContentReturn, props: propsLN, info: infoLN, ...void8 } = useListNavigationChild({
        info,
        context,
        refElementReturn,
        textContentParameters,
    });
    return {
        hasCurrentFocusParameters: {
            onCurrentFocusedInnerChanged: useStableCallback((focused, previouslyFocused, e) => {
                ocfic1?.(focused, previouslyFocused, e);
                ocfic2?.(focused, previouslyFocused, e);
            })
        },
        pressParameters: { onPressSync, excludeSpace },
        info: { ...infoSS, ...infoLN },
        rovingTabIndexChildReturn,
        singleSelectionChildReturn,
        textContentReturn,
        propsChild: propsSS,
        propsTabbable: propsLN
    };
}

function useListNavigationSingleSelectionSortable({ linearNavigationParameters, rovingTabIndexParameters, typeaheadNavigationParameters, singleSelectionParameters, managedChildrenReturn, rearrangeableChildrenParameters, sortableChildrenParameters, refElementReturn, paginatedChildrenParameters, ...void3 }) {
    monitorCallCount(useListNavigationSingleSelectionSortable);
    const { rearrangeableChildrenReturn, sortableChildrenReturn, ...void1 } = useSortableChildren({ rearrangeableChildrenParameters, sortableChildrenParameters, managedChildrenReturn });
    const { indexDemangler, indexMangler } = rearrangeableChildrenReturn;
    const { propsParent, propsStableParentOrChild, context, ...restLN } = useListNavigationSingleSelection({ linearNavigationParameters: { ...linearNavigationParameters, indexDemangler, indexMangler }, rovingTabIndexParameters, typeaheadNavigationParameters, singleSelectionParameters, managedChildrenReturn, refElementReturn, paginatedChildrenParameters });
    return {
        context,
        propsParent,
        propsStableParentOrChild,
        rearrangeableChildrenReturn,
        sortableChildrenReturn,
        ...restLN
    };
}

/**
 * Access `HTMLElement` rendered by this hook/these props, either as soon as it's available (as a callback), or whenever you need it (as a getter function).
 *
 * @remarks
 *
 * This hook, like many others, works with either `useState` or {@link usePassiveState}. Why use one over the other?
 *
 * ```md-literal
 * * `useState` is familiar and easy to use, but calling `setState` causes a re-render, which you might not need/want
 * * `usePassiveState` is faster and more scalable, but its state can't be accessed during render and it's more complex.
 * ```
 *
 * Suppose we want to call the `HTMLElement`'s `doSomethingFunny` method as soon as the element has been created:
 *
 * @example
 * Easiest way to use (but setElement causes an extra re-render when it's called...)
 * ```typescript
 * const [element, setElement] = useState<HTMLButtonElement | null>(null);
 * const { propsStable } = useRefElement({ onElementChange: setElement });
 * useEffect(() => {
 *     element.doSomethingFunny();
 * }, [element])
 * ```
 *
 * @example
 * Fastest (but slightly more verbose)
 * ```typescript
 * // The code in useEffect is moved into this callback, but runs at the same time
 * const onElementChange = useCallback(element => element.doSomethingFunny(), []);
 * const [getElement, setElement] = usePassiveState<HTMLButtonElement | null>(onElementChange, returnNull);
 * const { propsStable } = useRefElement({ onElementChange: setElement });
 * ```
 *
 * @compositeParams
 */
function useRefElement(args) {
    monitorCallCount(useRefElement);
    const nonElementWarn = useRef(false);
    if (nonElementWarn.current) {
        nonElementWarn.current = false;
        // There are two of these to catch the problem in the two most useful areas --
        // when it initially happens, and also in the component stack.
        console.assert(false, `useRefElement was used on a component that didn't forward its ref onto a DOM element, so it's attached to that component's VNode instead.`);
    }
    const { onElementChange, onMount, onUnmount } = (args.refElementParameters || {});
    useEnsureStability("useRefElement", onElementChange, onMount, onUnmount);
    // Called (indirectly) by the ref that the element receives.
    const handler = useCallback((e, prevValue) => {
        if (!(e == null || e instanceof Element)) {
            console.assert(e == null || e instanceof Element, `useRefElement was used on a component that didn't forward its ref onto a DOM element, so it's attached to that component's VNode instead.`);
            nonElementWarn.current = true;
        }
        const cleanup = onElementChange?.(e, prevValue);
        if (prevValue)
            onUnmount?.(prevValue);
        if (e)
            onMount?.(e);
        return cleanup;
    }, []);
    // Let us store the actual (reference to) the element we capture
    const [getElement, setElement] = usePassiveState(handler, returnNull, runImmediately);
    const propsStable = useRef({ ref: setElement });
    // Return both the element and the hook that modifies 
    // the props and allows us to actually find the element
    return {
        propsStable: propsStable.current,
        refElementReturn: {
            getElement,
        }
    };
}

/**
 * Functions to handle the specialization of a `Map` whose values are always a `Set`.
 */
const MapOfSets = {
    add: (map, key, value) => {
        let set = map.get(key) ?? new Set();
        set.add(value);
        map.set(key, set);
        return map;
    },
    /**
     * Removes this `value` from the `Set` associated with `key`. Does not remove the `Set` itself, even if it becomes empty.
     */
    delete: (map, key, value) => {
        let set = map.get(key) ?? new Set();
        let ret = set.delete(value);
        map.set(key, set);
        return ret;
    },
    has: (map, key, value) => {
        return map.get(key)?.has(value) ?? false;
    }
};

const activeElementUpdaters = new Map();
const lastActiveElementUpdaters = new Map();
const windowFocusedUpdaters = new Map();
const windowsFocusedUpdaters = new Map();
// The focusin and focusout events often fire synchronously in the middle of running code.
// E.G. calling element.focus() can cause a focusin event handler to immediately interrupt that code.
// For the purpose of improving stability, we debounce all focus events to the next microtask.
function forEachUpdater(window, map, value, reason) {
    const updaters = map.get(window);
    if (updaters) {
        for (const updater of updaters) {
            const { lastSent, send } = updater;
            if (value !== lastSent) {
                send(value, reason);
                updater.lastSent = value;
            }
        }
    }
}
function focusout(e) {
    const window = e.target.ownerDocument.defaultView;
    if (e.relatedTarget == null) {
        forEachUpdater(window, activeElementUpdaters, null, e);
    }
}
function focusin(e) {
    const window = e.target.ownerDocument.defaultView;
    const currentlyFocusedElement = e.target;
    forEachUpdater(window, activeElementUpdaters, currentlyFocusedElement, e);
    forEachUpdater(window, lastActiveElementUpdaters, currentlyFocusedElement, e);
}
function windowFocus(e) {
    const window = (e.target instanceof Window ? e.target : e.currentTarget instanceof Window ? e.currentTarget : e.target.ownerDocument.defaultView);
    windowsFocusedUpdaters.set(window, true);
    forEachUpdater(window, windowFocusedUpdaters, true, e);
}
function windowBlur(e) {
    const window = (e.target instanceof Window ? e.target : e.currentTarget instanceof Window ? e.currentTarget : e.target.ownerDocument.defaultView);
    windowsFocusedUpdaters.set(window, false);
    forEachUpdater(window, windowFocusedUpdaters, false, e);
}
/**
 * Allows you to inspect which element in the `document` currently has focus, which was most recently focused if none are currently, and whether or not the window has focus
 *
 * @remarks The document's body receiving focus, like it does when you click on an empty area, is counted as no element having focus for all intents and purposes
 *
 * This is a passive hook, so by default it returns getter functions that report this information but the component will not re-render by default when the active element changes.
 *
 * If you need the component to re-render when the active element changes, use the `on*Change` arguments to set some state on your end.
 *
 * @compositeParams
 */
function useActiveElement({ activeElementParameters: { onActiveElementChange, onLastActiveElementChange, onWindowFocusedChange, getDocument, getWindow } }) {
    monitorCallCount(useActiveElement);
    useEnsureStability("useActiveElement", onActiveElementChange, onLastActiveElementChange, onWindowFocusedChange, getDocument, getWindow);
    useEffect(() => {
        const document = getDocument();
        const window = (getWindow?.(document) ?? document?.defaultView);
        if ((activeElementUpdaters.get(window)?.size ?? 0) === 0) {
            document?.addEventListener("focusin", focusin, { passive: true });
            document?.addEventListener("focusout", focusout, { passive: true });
            window?.addEventListener("focus", windowFocus, { passive: true });
            window?.addEventListener("blur", windowBlur, { passive: true });
        }
        const laeu = { send: setActiveElement, lastSent: undefined };
        const llaeu = { send: setLastActiveElement, lastSent: undefined };
        const lwfu = { send: setWindowFocused, lastSent: undefined };
        MapOfSets.add(activeElementUpdaters, window, laeu);
        MapOfSets.add(lastActiveElementUpdaters, window, llaeu);
        MapOfSets.add(windowFocusedUpdaters, window, lwfu);
        return () => {
            MapOfSets.delete(activeElementUpdaters, window, laeu);
            MapOfSets.delete(lastActiveElementUpdaters, window, llaeu);
            MapOfSets.delete(windowFocusedUpdaters, window, lwfu);
            if (activeElementUpdaters.size === 0) {
                document?.removeEventListener("focusin", focusin);
                document?.removeEventListener("focusout", focusout);
                window?.removeEventListener("focus", windowFocus);
                window?.removeEventListener("blur", windowBlur);
            }
        };
    }, []);
    const [getActiveElement, setActiveElement] = usePassiveState(onActiveElementChange, returnNull, runImmediately);
    const [getLastActiveElement, setLastActiveElement] = usePassiveState(onLastActiveElementChange, returnNull, runImmediately);
    const [getWindowFocused, setWindowFocused] = usePassiveState(onWindowFocusedChange, returnTrue, runImmediately);
    return { activeElementReturn: { getActiveElement, getLastActiveElement, getWindowFocused } };
}

/**
 * Combines all the methods a user can implicitly dismiss a popup component. See {@link useModal} for a hook that's ready-to-use for dialogs and menus.
 *
 * @compositeParams
 */
function useDismiss({ dismissParameters: { open: globalOpen, onClose: globalOnClose, closeOnBackdrop, closeOnEscape, closeOnLostFocus }, escapeDismissParameters: { getWindow, parentDepth } }) {
    monitorCallCount(useDismiss);
    const { refElementReturn: refElementSourceReturn, propsStable: propsStableSource } = useRefElement({ refElementParameters: {} });
    const { refElementReturn: refElementPopupReturn, propsStable: propsStablePopup } = useRefElement({ refElementParameters: {} });
    const onCloseBackdrop = useCallback(() => { return globalOnClose?.("backdrop"); }, [globalOnClose]);
    const onCloseEscape = useCallback(() => { return globalOnClose?.("escape"); }, [globalOnClose]);
    const onCloseFocus = useCallback(() => { return globalOnClose?.("lost-focus"); }, [globalOnClose]);
    useBackdropDismiss({ backdropDismissParameters: { onDismiss: onCloseBackdrop, active: (closeOnBackdrop && globalOpen) }, refElementPopupReturn });
    useEscapeDismiss({ escapeDismissParameters: { getWindow, onDismiss: onCloseEscape, active: (closeOnEscape && globalOpen), parentDepth }, refElementPopupReturn });
    const { activeElementParameters } = useLostFocusDismiss({ lostFocusDismissParameters: { onDismiss: onCloseFocus, active: (closeOnLostFocus && globalOpen) }, refElementPopupReturn, refElementSourceReturn });
    const getDocument = useCallback(() => {
        return getWindow().document;
    }, [getWindow]);
    useActiveElement({ activeElementParameters: { ...activeElementParameters, getWindow, getDocument } });
    return {
        refElementSourceReturn,
        refElementPopupReturn,
        propsStableSource,
        propsStablePopup
    };
}

function getDocument(element) { return (element?.ownerDocument ?? document ?? window.document ?? globalThis.document); }

function blockingElements() { return getDocument().$blockingElements; }
/**
 * Allows an element to trap focus by applying the "inert" attribute to all sibling, aunt, and uncle nodes.
 *
 * @remarks Automatically handles consecutive calls with a loosely applied stack operation
 * (specifically via `blockingElements`, with a small polyfill because I'm not sure how long
 * it'll take to find its way into the spec, if ever)
 *
 * @param target
 */
function useBlockingElement(enabled, getTarget) {
    monitorCallCount(useBlockingElement);
    const stableGetTarget = useStableCallback(getTarget);
    const getDocument = useStableCallback(() => (getTarget()?.ownerDocument ?? globalThis.document));
    useActiveElement({
        activeElementParameters: {
            getDocument,
            onLastActiveElementChange: useStableCallback((e) => {
                if (e) {
                    if (enabled)
                        setLastActiveWhenOpen(e);
                    else
                        setLastActiveWhenClosed(e);
                }
            })
        }
    });
    const [getTop, setTop] = usePassiveState(null, returnNull);
    const [getLastActiveWhenClosed, setLastActiveWhenClosed] = usePassiveState(null, returnNull);
    const [getLastActiveWhenOpen, setLastActiveWhenOpen] = usePassiveState(null, returnNull);
    /**
     * Push/pop the element from the blockingElements stack.
     */
    useLayoutEffect(() => {
        const target = stableGetTarget();
        if (enabled) {
            // Sometimes blockingElements will fail if, for example,
            // the target element isn't connected to document.body.
            // This is rare, but it's better to fail silently with weird tabbing behavior
            // than to crash the entire application.
            try {
                blockingElements().push(target);
                setTop(target);
                return () => {
                    blockingElements().remove(target);
                };
            }
            catch (ex) {
                // Well, semi-silently.
                console.error(ex);
            }
        }
    }, [enabled]);
    return { getTop, getLastActiveWhenClosed, getLastActiveWhenOpen };
}

/**
 * Allows you to move focus to an isolated area of the page and restore it when finished.
 *
 * @remarks By default, this implements a focus trap using the
 *
 * @compositeParams
 */
function useFocusTrap({ focusTrapParameters: { onlyMoveFocus, trapActive, focusPopup: focusSelfUnstable, focusOpener: focusOpenerUnstable }, refElementReturn }) {
    monitorCallCount(useFocusTrap);
    const focusSelf = useStableCallback(focusSelfUnstable);
    const focusOpener = useStableCallback(focusOpenerUnstable);
    useEffect(() => {
        if (trapActive) {
            let top = getTop();
            getLastActiveWhenOpen();
            {
                top ??= refElementReturn.getElement();
                console.assert(!!top);
                if (top)
                    focusSelf(top, () => findFirstFocusable(top));
            }
        }
        else {
            const lastActive = getLastActiveWhenClosed();
            let currentFocus = document.activeElement;
            // Restore focus to whatever caused this trap to trigger,
            // but only if it wasn't caused by explicitly focusing something else 
            // (generally if `onlyMoveFocus` is true)
            let top = refElementReturn.getElement();
            if (currentFocus == document.body || currentFocus == null || top == currentFocus || top?.contains(currentFocus)) {
                if (lastActive)
                    focusOpener(lastActive);
            }
        }
    }, [trapActive]);
    const { getElement } = refElementReturn;
    const { getTop, getLastActiveWhenClosed, getLastActiveWhenOpen } = useBlockingElement(trapActive && !onlyMoveFocus, getElement);
    return {
        props: { "aria-modal": trapActive ? "true" : undefined }
    };
}
/**
 * Returns the first focusable element contained within the given node, or null if none are found.
 */
function findFirstFocusable(element) {
    return findFirstCondition(element, node => node instanceof Element && isFocusable(node));
}
function findFirstCondition(element, filter) {
    if (element && filter(element))
        return element;
    console.assert(!!element);
    element ??= document.body;
    const treeWalker = document.createTreeWalker(element, NodeFilter.SHOW_ELEMENT, { acceptNode: (node) => (filter(node) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP) });
    const firstFocusable = treeWalker.firstChild();
    return firstFocusable;
}

/**
 * Allows children to stop themselves from rendering outside of a narrow range.
 *
 * @remarks Each child will still render itself, but it is aware of if it is within/outside of the pagination range, and simply return empty.
 *
 * @compositeParams
 *
 * @hasChild {@link usePaginatedChild}
 */
function usePaginatedChildren({ managedChildrenReturn: { getChildren }, linearNavigationParameters: { indexDemangler }, paginatedChildrenParameters: { paginationMax, paginationMin }, rovingTabIndexReturn: { getTabbableIndex, setTabbableIndex }, refElementReturn: { getElement } }) {
    monitorCallCount(usePaginatedChildren);
    const [childCount, setChildCount] = useState(null);
    const parentIsPaginated = (paginationMin != null || paginationMax != null);
    const lastPagination = useRef({ paginationMax: null, paginationMin: null });
    const refreshPagination = useCallback((paginationMin, paginationMax) => {
        const childMax = (getChildren().getHighestIndex() + 1);
        const childMin = (getChildren().getLowestIndex());
        for (let i = childMin; i <= childMax; ++i) {
            const visible = (i >= (paginationMin ?? -Infinity) && i < (paginationMax ?? Infinity));
            getChildren().getAt(indexDemangler(i))?.setPaginationVisible(visible);
            if (visible && (paginationMax != null || paginationMin != null))
                getChildren().getAt(indexDemangler(i))?.setChildCountIfPaginated(getChildren().getHighestIndex() + 1);
        }
    }, [ /* Must be empty */]);
    useEffect(() => {
        // At this point, the children have not yet updated themselves to match the pagination.
        // We need to tell them to update, but also handle where the focus is.
        // If a current list item is focused, then we need to move focus to a paginated one
        // but we can't do it until they all re-render...
        // TODO: Something better than setTimeout for this, please...
        let tabbableIndex = getTabbableIndex();
        if (tabbableIndex != null) {
            let shouldFocus = getElement()?.contains(document.activeElement) || false;
            setTimeout(() => {
                if (paginationMin != null && tabbableIndex < paginationMin) {
                    setTabbableIndex(paginationMin, undefined, shouldFocus); // TODO: This isn't a user interaction, but we need to ensure the old element doesn't remain focused, yeesh.
                }
                else if (paginationMax != null && tabbableIndex >= paginationMax) {
                    let next = paginationMax - 1;
                    if (next == -1)
                        next = null;
                    setTabbableIndex(next, undefined, shouldFocus); // TODO: This isn't a user interaction, but we need to ensure the old element doesn't remain focused, yeesh.
                }
            }, 1);
        }
        refreshPagination(paginationMin, paginationMax);
        lastPagination.current.paginationMax = paginationMax ?? null;
        lastPagination.current.paginationMin = paginationMin ?? null;
    }, [paginationMax, paginationMin]);
    const getDefaultPaginationVisible = useCallback((i) => { return (i >= (paginationMin ?? -Infinity) && i < (paginationMax ?? Infinity)); }, []);
    const paginatedChildContext = useMemo(() => ({
        parentIsPaginated,
        getDefaultPaginationVisible
    }), [parentIsPaginated]);
    return {
        context: useMemo(() => ({ paginatedChildContext }), [paginatedChildContext]),
        managedChildrenParameters: {
            onChildrenCountChange: useStableCallback((count) => {
                if (paginationMax != null || paginationMin != null) {
                    setChildCount(count);
                    const min = (paginationMin ?? 0);
                    const max = (paginationMax ?? count);
                    for (let i = min; i < max; ++i) {
                        getChildren().getAt(i)?.setChildCountIfPaginated(count);
                    }
                }
                else {
                    // TODO: Make this debug only.
                    setChildCount(null);
                }
            }),
        },
        paginatedChildrenReturn: { refreshPagination, childCount }
    };
}
/**
 * Child hook for {@link usePaginatedChildren}.
 *
 * @remarks When a child is paginated, it still renders itself (i.e. it calls this hook, so it's rendering),
 * so check `hideBecausePaginated` and, if it's true, avoid doing any heavy logic and render with `display: none`.
 *
 * @compositeParams
 */
function usePaginatedChild({ info: { index }, context: { paginatedChildContext: { parentIsPaginated, getDefaultPaginationVisible } } }) {
    monitorCallCount(usePaginatedChild);
    const [childCountIfPaginated, setChildCountIfPaginated] = useState(null);
    const [paginatedVisible, setPaginatedVisible] = useState(parentIsPaginated ? getDefaultPaginationVisible(index) : true);
    return {
        props: !parentIsPaginated ? {} : { "aria-setsize": childCountIfPaginated ?? undefined, "aria-posinset": (index + 1) },
        paginatedChildReturn: { /*paginatedVisible,*/ parentIsPaginated, hideBecausePaginated: parentIsPaginated ? !paginatedVisible : false },
        info: {
            setPaginationVisible: setPaginatedVisible,
            setChildCountIfPaginated
        }
    };
}

/**
 * Allows children to each wait until the previous has finished rendering before itself rendering. E.G. Child #3 waits until #2 renders. #2 waits until #1 renders, etc.
 *
 * @remarks Note that the child itself will still render, but you can delay rendering *its* children, or
 * delay other complicated or heavy logic, until the child is no longer staggered.
 *
 * @compositeParams
 *
 * @hasChild {@link useStaggeredChild}
 */
function useStaggeredChildren({ managedChildrenReturn: { getChildren }, staggeredChildrenParameters: { staggered } }) {
    monitorCallCount(useStaggeredChildren);
    // By default, when a child mounts, we tell the next child to mount and simply repeat.
    // If a child is missing, however, it will break that chain.
    // To guard against that, we also wait for 50ms, and if it hasn't loaded by then, we just continue as if it did.
    const [currentlyStaggering, setCurrentlyStaggering] = useState(staggered);
    const timeoutHandle = useRef(-1);
    const resetEmergencyTimeout = useCallback(() => {
        if (timeoutHandle.current != -1)
            clearTimeout(timeoutHandle.current);
        timeoutHandle.current = setTimeout(() => {
            // We've gone this long without hearing the next child mount itself...
            // We need to continue.
            timeoutHandle.current = -1;
            let target = getTargetStaggerIndex();
            if (target != null)
                setDisplayedStaggerIndex(c => Math.min(target, (c ?? 0) + 1));
        }, 50);
    }, [ /* Must be empty */]);
    // The target index is the index that we're "animating" to.
    // Each child simply sets this to the highest value ever seen.
    // TODO: When unmounting children, we should reset this, but that requires us to track total # of children
    const [getTargetStaggerIndex, setTargetStaggerIndex] = usePassiveState(useCallback((newIndex, _prevIndex) => {
        // Any time our target changes,
        // ensure our timeout is running, and start a new one if not
        // For any newly mounted children, make sure they're aware of if they should consider themselves staggered or not
        //for (let i = (prevIndex ?? 0); i < (newIndex ?? 0); ++i) {
        //    getChildren().getAt(i)?.setParentIsStaggered(s.current);
        //}
        if (timeoutHandle.current == -1) {
            resetEmergencyTimeout();
            // If there's no timeout running, then that also means we're not waiting for a child to mount.
            // So ask a child to mount and then wait for that child to mount.
            setDisplayedStaggerIndex(c => Math.min(newIndex ?? 0, (c ?? 0) + 1));
        }
    }, [ /* Must be empty */]), returnNull);
    const [getDisplayedStaggerIndex, setDisplayedStaggerIndex] = usePassiveState(useCallback((newIndex, prevIndex) => {
        if (newIndex == null || !s.current) {
            return;
        }
        setCurrentlyStaggering(newIndex < (getTargetStaggerIndex() ?? 0));
        // It's time to show the next child,
        // either because the current one finished mounting,
        // or because our emergency backup timeout fired.
        //
        // Either way, tell the next child to show itself.
        // Also make sure that anyone we skipped somehow show themselves as well.
        for (let i = (prevIndex ?? 0); i < newIndex; ++i) {
            getChildren().getAt(i)?.setStaggeredVisible(true);
        }
        // Set a new emergency timeout
        resetEmergencyTimeout();
    }, [ /* Must be empty */]), returnNull);
    const parentIsStaggered = (!!staggered);
    const childCallsThisToTellTheParentToMountTheNextOne = useCallback((index) => {
        setDisplayedStaggerIndex(s => Math.min((getTargetStaggerIndex() ?? 0), 1 + (Math.max(s ?? 0, index + 1))));
    }, []);
    const childCallsThisToTellTheParentTheHighestIndex = useCallback((mountedIndex) => {
        setTargetStaggerIndex(i => Math.max((i ?? 0), 1 + mountedIndex));
    }, []);
    // TODO: Modification during render (but it's really, really hard to avoid here,
    // but also probably fine because parents render before children? Does that include suspense?)
    const s = useRef(parentIsStaggered);
    s.current = parentIsStaggered;
    const getDefaultStaggeredVisible = useCallback((i) => {
        if (s.current) {
            const staggerIndex = getDisplayedStaggerIndex();
            if (staggerIndex == null)
                return false;
            return i < staggerIndex;
        }
        else {
            return true;
        }
    }, []);
    const staggeredChildContext = useMemo(() => ({
        parentIsStaggered,
        childCallsThisToTellTheParentToMountTheNextOne,
        childCallsThisToTellTheParentTheHighestIndex,
        getDefaultStaggeredVisible
    }), [parentIsStaggered]);
    return {
        staggeredChildrenReturn: { stillStaggering: currentlyStaggering },
        context: useMemo(() => ({
            staggeredChildContext
        }), [staggeredChildContext]),
    };
}
/**
 * Child hook for {@link useStaggeredChildren}.
 *
 * @remarks When a child is staggered, it still renders itself (i.e. it calls this hook, so it's rendering),
 * so check `hideBecauseStaggered` and, if it's true, avoid doing any heavy logic and render with `display: none`.
 *
 * @compositeParams
 */
function useStaggeredChild({ info: { index }, context: { staggeredChildContext: { parentIsStaggered, childCallsThisToTellTheParentTheHighestIndex, getDefaultStaggeredVisible, childCallsThisToTellTheParentToMountTheNextOne } } }) {
    monitorCallCount(useStaggeredChild);
    const [staggeredVisible, setStaggeredVisible] = useState(getDefaultStaggeredVisible(index));
    useLayoutEffect(() => {
        childCallsThisToTellTheParentTheHighestIndex(index);
    }, [index]);
    useEffect(() => {
        if ((parentIsStaggered && staggeredVisible))
            childCallsThisToTellTheParentToMountTheNextOne(index);
    }, [index, (parentIsStaggered && staggeredVisible)]);
    return {
        props: !parentIsStaggered ? {} : { "aria-busy": (!staggeredVisible).toString() },
        staggeredChildReturn: { parentIsStaggered, hideBecauseStaggered: parentIsStaggered ? !staggeredVisible : false },
        info: { setStaggeredVisible: setStaggeredVisible, }
    };
}

/**
 * Allows a composite component (such as a radio group or listbox) to listen
 * for an "overall focusin/out" event; this hook lets you know when focus has
 * moved in/out of this grouping of children EVEN IF there is no actual parent DOM element.
 *
 * @remarks I.E. you can use this without needing a parent `<div>` to listen for a `focusout` event.
 *
 * @compositeParams
 *
 * @hasChild {@link useChildrenHaveFocusChild}
 */
function useChildrenHaveFocus(args) {
    monitorCallCount(useChildrenHaveFocus);
    const { childrenHaveFocusParameters: { onCompositeFocusChange } } = args;
    const [getAnyFocused, setAnyFocused] = usePassiveState(onCompositeFocusChange, returnFalse, runImmediately);
    const [_getFocusCount, setFocusCount] = usePassiveState(useStableCallback((anyFocused, anyPreviouslyFocused, e) => {
        console.assert(anyFocused >= 0 && anyFocused <= 1);
        setAnyFocused(!!(anyFocused && !anyPreviouslyFocused), e);
    }));
    return {
        childrenHaveFocusReturn: { getAnyFocused },
        context: useMemoObject({ childrenHaveFocusChildContext: useMemoObject({ setFocusCount }) }),
    };
}
/**
 * @compositeParams
 */
function useChildrenHaveFocusChild({ context: { childrenHaveFocusChildContext: { setFocusCount } } }) {
    monitorCallCount(useChildrenHaveFocusChild);
    return {
        hasCurrentFocusParameters: {
            onCurrentFocusedInnerChanged: useStableCallback((focused, prev, e) => {
                if (focused) {
                    setFocusCount(p => (p ?? 0) + 1, e);
                }
                else if (!focused && prev) {
                    setFocusCount(p => (p ?? 0) - 1, e);
                }
            }),
        }
    };
}

/**
 * Allows monitoring whether the rendered element is or is not focused directly (i.e. would satisfy `:focus`).
 *
 * @see {@link useHasLastFocus}, in which even if the `body` is clicked it's not considered a loss in focus.
 *
 * @compositeParams
 */
function useHasCurrentFocus(args) {
    monitorCallCount(useHasCurrentFocus);
    const { hasCurrentFocusParameters: { onCurrentFocusedChanged, onCurrentFocusedInnerChanged }, refElementReturn: { getElement } } = args;
    useEnsureStability("useHasCurrentFocus", onCurrentFocusedChanged, onCurrentFocusedInnerChanged, getElement);
    const [getFocused, setFocused] = usePassiveState(onCurrentFocusedChanged, returnFalse, runImmediately);
    const [getFocusedInner, setFocusedInner] = usePassiveState(onCurrentFocusedInnerChanged, returnFalse, runImmediately);
    const onFocusIn = useCallback((e) => {
        setFocusedInner(true, e);
        setFocused(e.target == getElement(), e);
    }, []);
    const onFocusOut = useCallback((e) => {
        // Even if we're focusOut-ing to another inner element,
        // that'll be caught during onFocusIn,
        // so just set everything to false and let that revert things back to true if necessary.
        setFocusedInner(false, e);
        setFocused(false, e);
    }, []);
    useEffect(() => {
        return () => {
            setFocused(false);
            setFocusedInner(false);
        };
    }, []);
    const propsStable = useRef({
        [onfocusin]: onFocusIn,
        [onfocusout]: onFocusOut
    });
    useEffect(() => {
        return () => {
            setFocused(false);
            setFocusedInner(false);
        };
    }, []);
    return {
        hasCurrentFocusReturn: {
            propsStable: propsStable.current,
            getCurrentFocused: getFocused,
            getCurrentFocusedInner: getFocusedInner,
        }
    };
}

/**
 * Combines all the grid- (&amp; list-) related hooks into one giant hook that accomplishes everything.
 *
 * @compositeParams
 *
 * @hasChild {@link useCompleteGridNavigationRow}
 * @hasChild {@link useCompleteGridNavigationCell}
 */
function useCompleteGridNavigation({ gridNavigationParameters, linearNavigationParameters, rovingTabIndexParameters, singleSelectionParameters, typeaheadNavigationParameters, sortableChildrenParameters, rearrangeableChildrenParameters, paginatedChildrenParameters, staggeredChildrenParameters, ...void1 }) {
    monitorCallCount(useCompleteGridNavigation);
    const getChildren = useCallback(() => managedChildrenReturn.getChildren(), []);
    const getLowestChildIndex = useCallback(() => getChildren().getLowestIndex(), []);
    const getHighestChildIndex = useCallback(() => getChildren().getHighestIndex(), []);
    const isValid = useCallback((i) => {
        const child = getChildren().getAt(i);
        if (child == null)
            return false;
        if (child.untabbable)
            return false;
        return true;
    }, []);
    const { refElementReturn } = useRefElement({});
    const { childrenHaveFocusParameters, managedChildrenParameters, context: { gridNavigationRowContext, rovingTabIndexContext, singleSelectionContext, typeaheadNavigationContext }, rearrangeableChildrenReturn, propsParent, propsStableParentOrChild, rovingTabIndexReturn, ...gridNavigationSingleSelectionReturn } = useGridNavigationSingleSelectionSortable({
        gridNavigationParameters,
        linearNavigationParameters: { getLowestIndex: getLowestChildIndex, getHighestIndex: getHighestChildIndex, isValid, ...linearNavigationParameters },
        managedChildrenReturn: { getChildren },
        rovingTabIndexParameters: { initiallyTabbedIndex: singleSelectionParameters.initiallySelectedIndex, untabbableBehavior: "focus-parent", ...rovingTabIndexParameters },
        singleSelectionParameters,
        typeaheadNavigationParameters: { isValid, ...typeaheadNavigationParameters },
        paginatedChildrenParameters,
        refElementReturn,
        rearrangeableChildrenParameters: {
            onRearranged: useStableCallback(() => { refreshPagination(paginatedChildrenParameters.paginationMin, paginatedChildrenParameters.paginationMax); }),
            ...rearrangeableChildrenParameters
        },
        sortableChildrenParameters
    });
    const { indexDemangler } = rearrangeableChildrenReturn;
    const { context: { childrenHaveFocusChildContext }, childrenHaveFocusReturn } = useChildrenHaveFocus({ childrenHaveFocusParameters });
    const mcr = useManagedChildren({ managedChildrenParameters: { onChildrenCountChange: useStableCallback(c => onChildrenCountChange?.(c)), ...managedChildrenParameters } });
    const { context: { managedChildContext }, managedChildrenReturn } = mcr; // TODO: This is split into two lines for TypeScript reasons? Can this be fixed? E.G. like vvvvvvvvvvvvvvvvvvvvvvvvvvvvvv  why doesn't that work?
    const { paginatedChildrenReturn, paginatedChildrenReturn: { refreshPagination }, managedChildrenParameters: { onChildrenCountChange }, context: { paginatedChildContext } } = usePaginatedChildren({ refElementReturn, managedChildrenReturn, paginatedChildrenParameters, rovingTabIndexReturn, linearNavigationParameters: { indexDemangler } });
    const { context: { staggeredChildContext }, staggeredChildrenReturn } = useStaggeredChildren({ managedChildrenReturn, staggeredChildrenParameters });
    //const props = useMergedProps(linearNavigationReturn.propsStable, typeaheadNavigationReturn.propsStable);
    const context = useMemoObject({
        singleSelectionContext,
        managedChildContext,
        rovingTabIndexContext,
        typeaheadNavigationContext,
        childrenHaveFocusChildContext,
        paginatedChildContext,
        staggeredChildContext,
        gridNavigationRowContext
    });
    return {
        context,
        props: useMergedProps(propsParent, propsStableParentOrChild),
        managedChildrenReturn,
        rearrangeableChildrenReturn,
        staggeredChildrenReturn,
        rovingTabIndexReturn,
        childrenHaveFocusReturn,
        paginatedChildrenReturn,
        ...gridNavigationSingleSelectionReturn,
    };
}
/**
 * @compositeParams
 */
function useCompleteGridNavigationRow({ info, context: contextIncomingForRowAsChildOfTable, textContentParameters, linearNavigationParameters, rovingTabIndexParameters, typeaheadNavigationParameters, ...void1 }) {
    monitorCallCount(useCompleteGridNavigationRow);
    const { info: infoPaginatedChild, paginatedChildReturn, props: paginationProps } = usePaginatedChild({ info, context: contextIncomingForRowAsChildOfTable });
    const { info: infoStaggeredChild, // { setParentIsStaggered, setStaggeredVisible },
    staggeredChildReturn, props: staggeredProps } = useStaggeredChild({ info, context: contextIncomingForRowAsChildOfTable });
    info.untabbable ||= (paginatedChildReturn.hideBecausePaginated || staggeredChildReturn.hideBecauseStaggered);
    info.unselectable ||= info.untabbable;
    const getChildren = useCallback(() => managedChildrenReturn.getChildren(), []);
    const getHighestChildIndex = useCallback(() => getChildren().getHighestIndex(), []);
    const getLowestChildIndex = useCallback(() => getChildren().getLowestIndex(), []);
    const isValid = useCallback((i) => {
        const child = getChildren().getAt(i);
        if (child == null)
            return false;
        if (child.untabbable)
            return false;
        return true;
    }, []);
    const { refElementReturn, propsStable } = useRefElement({ refElementParameters: {} });
    const r = useGridNavigationSingleSelectionRow({
        rovingTabIndexParameters,
        typeaheadNavigationParameters: { isValid, ...typeaheadNavigationParameters },
        linearNavigationParameters: { isValid, getHighestIndex: getHighestChildIndex, getLowestIndex: getLowestChildIndex, pageNavigationSize: 0, indexDemangler: identity, indexMangler: identity, ...linearNavigationParameters },
        managedChildrenReturn: { getChildren },
        refElementReturn,
        context: contextIncomingForRowAsChildOfTable,
        info,
        textContentParameters
    });
    const { linearNavigationReturn, managedChildrenParameters, pressParameters, rovingTabIndexChildReturn, rovingTabIndexReturn, singleSelectionChildReturn, textContentReturn, typeaheadNavigationReturn, context: contextGNR, info: infoRowReturn, props: p3, hasCurrentFocusParameters: { onCurrentFocusedInnerChanged: ocfic1, ...void3 }, ...void2 } = r;
    const { context: contextMC, managedChildrenReturn } = useManagedChildren({ managedChildrenParameters });
    const completeInfo = {
        getElement: refElementReturn.getElement,
        ...info,
        ...infoRowReturn,
        ...infoPaginatedChild,
        ...infoStaggeredChild
    };
    const { managedChildReturn } = useManagedChild({ context: contextIncomingForRowAsChildOfTable, info: completeInfo });
    const context = useMemoObject({
        ...contextGNR,
        ...contextMC,
        //completeGridNavigationCellContext: { excludeSpace }
    });
    const { hasCurrentFocusParameters: { onCurrentFocusedInnerChanged: ocfic2, ...void4 } } = useChildrenHaveFocusChild({ context: contextIncomingForRowAsChildOfTable });
    //const { refElementReturn } = useRefElement<RowElement>({ refElementParameters: {} })
    const { hasCurrentFocusReturn } = useHasCurrentFocus({ refElementReturn, hasCurrentFocusParameters: { onCurrentFocusedChanged: useStableCallback((a, b) => { ocfic1?.(a, b); ocfic2?.(a, b); }) } });
    const props = useMergedProps(propsStable, p3, hasCurrentFocusReturn.propsStable, paginationProps, staggeredProps);
    return {
        pressParameters,
        hasCurrentFocusReturn,
        managedChildrenReturn,
        context,
        managedChildReturn,
        staggeredChildReturn,
        paginatedChildReturn,
        linearNavigationReturn,
        rovingTabIndexChildReturn,
        rovingTabIndexReturn,
        singleSelectionChildReturn,
        textContentReturn,
        typeaheadNavigationReturn,
        props,
    };
}
/**
 * @compositeParams
 */
function useCompleteGridNavigationCell({ gridNavigationCellParameters, context: { gridNavigationCellContext, managedChildContext, rovingTabIndexContext, typeaheadNavigationContext }, textContentParameters, info, ...void1 }) {
    monitorCallCount(useCompleteGridNavigationCell);
    const { refElementReturn, propsStable } = useRefElement({ refElementParameters: {} });
    const { hasCurrentFocusParameters, rovingTabIndexChildReturn, textContentReturn, pressParameters: { excludeSpace: es1 }, props: propsRti, info: info2, ...void2 } = useGridNavigationSingleSelectionCell({
        gridNavigationCellParameters,
        info,
        context: { gridNavigationCellContext, rovingTabIndexContext, typeaheadNavigationContext },
        refElementReturn,
        textContentParameters,
    });
    const { hasCurrentFocusReturn } = useHasCurrentFocus({ hasCurrentFocusParameters: { onCurrentFocusedChanged: null, ...hasCurrentFocusParameters }, refElementReturn });
    const baseInfo = {
        getElement: refElementReturn.getElement,
        getLocallyTabbable: rovingTabIndexChildReturn.getTabbable,
        setLocallyTabbable: info2.setLocallyTabbable,
        tabbable: rovingTabIndexChildReturn.tabbable,
        ...info
    };
    const { managedChildReturn } = useManagedChild({ context: { managedChildContext }, info: baseInfo });
    const props = useMergedProps(propsStable, propsRti, hasCurrentFocusReturn.propsStable);
    return {
        props,
        refElementReturn,
        rovingTabIndexChildReturn,
        pressParameters: { excludeSpace: useStableCallback(() => (es1?.() || false)) },
        hasCurrentFocusReturn,
        managedChildReturn,
        textContentReturn
    };
}
function useCompleteGridNavigationDeclarative({ gridNavigationParameters, linearNavigationParameters, paginatedChildrenParameters, rearrangeableChildrenParameters, rovingTabIndexParameters, singleSelectionDeclarativeParameters, sortableChildrenParameters, staggeredChildrenParameters, typeaheadNavigationParameters, singleSelectionParameters, }) {
    const ret = useCompleteGridNavigation({
        linearNavigationParameters,
        paginatedChildrenParameters,
        rearrangeableChildrenParameters,
        rovingTabIndexParameters,
        singleSelectionParameters: { initiallySelectedIndex: singleSelectionDeclarativeParameters.selectedIndex, onSelectedIndexChange: useStableCallback((...e) => onSelectedIndexChange?.(...e)), ...singleSelectionParameters },
        sortableChildrenParameters,
        staggeredChildrenParameters,
        typeaheadNavigationParameters,
        gridNavigationParameters,
    });
    const { singleSelectionParameters: { onSelectedIndexChange } } = useSingleSelectionDeclarative({ singleSelectionDeclarativeParameters, singleSelectionReturn: ret.singleSelectionReturn });
    const { singleSelectionReturn: { getSelectedIndex }, ...ret2 } = ret;
    return { ...ret2, singleSelectionReturn: { getSelectedIndex } };
}

/**
 * All the list-related hooks combined into one large hook that encapsulates everything.
 *
 * @remarks Unlike most others, this hook assume's it's the final one--the "outermost" hook in the component--so it uses `useManagedChildren` and wraps everything up nicely,
 * combining event handlers that are used in multiple sub-hooks, collecting all the necessary context-related data, and merging all known DOM props together.
 *
 * @hasChild {@link useCompleteListNavigationChild}
 *
 * @compositeParams
 */
function useCompleteListNavigation({ linearNavigationParameters, rearrangeableChildrenParameters, sortableChildrenParameters, typeaheadNavigationParameters, rovingTabIndexParameters, singleSelectionParameters, paginatedChildrenParameters, staggeredChildrenParameters, ...completeListNavigationParameters }) {
    monitorCallCount(useCompleteListNavigation);
    const { initiallySelectedIndex } = singleSelectionParameters;
    const getChildren = useCallback(() => managedChildrenReturn.getChildren(), []);
    const getLowestIndex = useCallback(() => getChildren().getLowestIndex(), []);
    const getHighestIndex = useCallback(() => getChildren().getHighestIndex(), []);
    const isValid = useCallback((i) => {
        const child = getChildren().getAt(i);
        if (!child)
            return false;
        if (child.untabbable)
            return false;
        return true;
    }, []);
    const { propsStable: propsRef, refElementReturn } = useRefElement({});
    const { childrenHaveFocusParameters, managedChildrenParameters: { onChildrenMountChange, ...mcp1 }, context: { rovingTabIndexContext, singleSelectionContext, typeaheadNavigationContext }, linearNavigationReturn, rovingTabIndexReturn, singleSelectionReturn, typeaheadNavigationReturn, rearrangeableChildrenReturn, sortableChildrenReturn, propsParent, propsStableParentOrChild } = useListNavigationSingleSelectionSortable({
        managedChildrenReturn: { getChildren },
        linearNavigationParameters: { getLowestIndex, getHighestIndex, isValid, ...linearNavigationParameters },
        typeaheadNavigationParameters: { isValid, ...typeaheadNavigationParameters },
        rovingTabIndexParameters: { initiallyTabbedIndex: initiallySelectedIndex, untabbableBehavior: "focus-parent", ...rovingTabIndexParameters },
        singleSelectionParameters,
        rearrangeableChildrenParameters: {
            onRearranged: useStableCallback(() => { refreshPagination(paginatedChildrenParameters.paginationMin, paginatedChildrenParameters.paginationMax); }),
            ...rearrangeableChildrenParameters
        },
        paginatedChildrenParameters,
        refElementReturn,
        sortableChildrenParameters,
        ...completeListNavigationParameters,
    });
    const { context: { childrenHaveFocusChildContext }, childrenHaveFocusReturn } = useChildrenHaveFocus({ childrenHaveFocusParameters });
    const { paginatedChildrenReturn, paginatedChildrenReturn: { refreshPagination }, managedChildrenParameters: mcp2, context: { paginatedChildContext } } = usePaginatedChildren({ refElementReturn, managedChildrenReturn: { getChildren: useStableCallback(() => managedChildrenReturn.getChildren()) }, rovingTabIndexReturn, paginatedChildrenParameters, linearNavigationParameters: { indexDemangler: rearrangeableChildrenReturn.indexDemangler } });
    const { context: { staggeredChildContext }, staggeredChildrenReturn } = useStaggeredChildren({ managedChildrenReturn: { getChildren: useStableCallback(() => managedChildrenReturn.getChildren()) }, staggeredChildrenParameters });
    const mcr = useManagedChildren({
        managedChildrenParameters: {
            onChildrenMountChange,
            ...mcp2,
            ...mcp1
        }
    });
    const { context: { managedChildContext }, managedChildrenReturn } = mcr;
    const context = useMemoObject(useMemoObject({
        childrenHaveFocusChildContext,
        managedChildContext,
        paginatedChildContext,
        rovingTabIndexContext,
        singleSelectionContext,
        staggeredChildContext,
        typeaheadNavigationContext
    }));
    return {
        context,
        props: useMergedProps(propsParent, propsRef, propsStableParentOrChild),
        managedChildrenReturn,
        rearrangeableChildrenReturn,
        staggeredChildrenReturn,
        paginatedChildrenReturn,
        sortableChildrenReturn,
        linearNavigationReturn,
        rovingTabIndexReturn,
        singleSelectionReturn,
        typeaheadNavigationReturn,
        childrenHaveFocusReturn
    };
}
/**
 *
 * @compositeParams
 */
function useCompleteListNavigationChild({ info: { index, focusSelf, unselectable, untabbable, getSortValue, ...info }, // The "...info" is empty if M is the same as UCLNCI<ChildElement>.
textContentParameters, context: { childrenHaveFocusChildContext, managedChildContext, rovingTabIndexContext, paginatedChildContext, staggeredChildContext, singleSelectionContext, typeaheadNavigationContext }, ...void1 }) {
    monitorCallCount(useCompleteListNavigationChild);
    //const { onPressSync, ...pressParameters1 } = (pressParameters ?? {});
    const { info: mcp3, paginatedChildReturn, paginatedChildReturn: { hideBecausePaginated }, props: paginationProps } = usePaginatedChild({ info: { index }, context: { paginatedChildContext } });
    const { info: mcp4, staggeredChildReturn, staggeredChildReturn: { hideBecauseStaggered }, props: staggeredProps } = useStaggeredChild({ info: { index }, context: { staggeredChildContext } });
    untabbable ||= (hideBecausePaginated || hideBecauseStaggered);
    unselectable ||= (hideBecausePaginated || hideBecauseStaggered);
    if (untabbable)
        unselectable = true;
    const { refElementReturn, propsStable } = useRefElement({ refElementParameters: {} });
    const { hasCurrentFocusParameters: { onCurrentFocusedInnerChanged: ocfic1 }, pressParameters: { excludeSpace, ...pressParameters2 }, textContentReturn, singleSelectionChildReturn, info: mcp5, rovingTabIndexChildReturn, propsChild, propsTabbable } = useListNavigationSingleSelectionChild({
        info: { index, unselectable, untabbable },
        context: { rovingTabIndexContext, singleSelectionContext, typeaheadNavigationContext },
        refElementReturn,
        textContentParameters
    });
    const onPress = useStableCallback((e) => {
        if (singleSelectionContext.selectionMode == "activation")
            singleSelectionContext.onSelectedIndexChange?.(enhanceEvent(e, { selectedIndex: index }));
    });
    const onPressSync = (rovingTabIndexContext.untabbable || unselectable || untabbable) ? null : onPress;
    //const { propsStable: pressRefProps, refElementReturn: pressRefElementReturn } = useRefElement<any>({ refElementParameters: {} })
    const mcp1 = {
        index,
        focusSelf,
        getElement: refElementReturn.getElement,
        getSortValue,
        unselectable,
        untabbable,
        ...mcp4,
        ...mcp3,
        ...mcp5,
    };
    const { managedChildReturn } = useManagedChild({ context: { managedChildContext }, info: { ...mcp1, ...info } });
    const { hasCurrentFocusParameters: { onCurrentFocusedInnerChanged: ocfic2 } } = useChildrenHaveFocusChild({ context: { childrenHaveFocusChildContext } });
    const onCurrentFocusedInnerChanged = useStableCallback((focused, prev, e) => {
        ocfic1?.(focused, prev, e);
        ocfic2?.(focused, prev, e);
    });
    const { hasCurrentFocusReturn } = useHasCurrentFocus({ hasCurrentFocusParameters: { onCurrentFocusedInnerChanged, onCurrentFocusedChanged: null }, refElementReturn });
    const props = useMergedProps(propsStable, hasCurrentFocusReturn.propsStable, propsChild, paginationProps, staggeredProps);
    return {
        propsChild: props,
        propsTabbable,
        pressParameters: {
            onPressSync,
            excludeSpace
        },
        textContentReturn,
        refElementReturn,
        singleSelectionChildReturn,
        hasCurrentFocusReturn,
        managedChildReturn,
        paginatedChildReturn,
        staggeredChildReturn,
        rovingTabIndexChildReturn,
        //propsPressStable: useMergedProps(pressProps, pressRefProps)
    };
}
function useCompleteListNavigationDeclarative({ linearNavigationParameters, paginatedChildrenParameters, rearrangeableChildrenParameters, rovingTabIndexParameters, singleSelectionDeclarativeParameters, sortableChildrenParameters, staggeredChildrenParameters, typeaheadNavigationParameters, singleSelectionParameters }) {
    const ret = useCompleteListNavigation({
        linearNavigationParameters,
        paginatedChildrenParameters,
        rearrangeableChildrenParameters,
        rovingTabIndexParameters,
        singleSelectionParameters: {
            initiallySelectedIndex: singleSelectionDeclarativeParameters.selectedIndex,
            // Needs to be a (stable) callback because of declaration order
            onSelectedIndexChange: useStableCallback((...e) => onSelectedIndexChange?.(...e)),
            ...singleSelectionParameters
        },
        sortableChildrenParameters,
        staggeredChildrenParameters,
        typeaheadNavigationParameters
    });
    const { singleSelectionParameters: { onSelectedIndexChange } } = useSingleSelectionDeclarative({ singleSelectionDeclarativeParameters, singleSelectionReturn: ret.singleSelectionReturn });
    const { singleSelectionReturn: { getSelectedIndex }, ...ret2 } = ret;
    return { ...ret2, singleSelectionReturn: { getSelectedIndex } };
}

/**
 * Combines dismissal hooks and focus trap hooks into one.
 * Use for dialogs, menus, etc.  Anything that can be dismissed and might trap focus, basically.
 *
 * @remarks Another in the "complete" series, alongside list/grid navigation and dismissal itself.
 *
 * @compositeParams
 */
function useModal({ dismissParameters, escapeDismissParameters, focusTrapParameters: { trapActive, ...focusTrapParameters } }) {
    monitorCallCount(useModal);
    const { open } = dismissParameters;
    const { refElementPopupReturn, refElementSourceReturn, propsStablePopup, propsStableSource } = useDismiss({ dismissParameters, escapeDismissParameters });
    const { propsStable, refElementReturn } = useRefElement({});
    const { props } = useFocusTrap({
        focusTrapParameters: { trapActive: open && trapActive, ...focusTrapParameters },
        refElementReturn
    });
    return {
        propsFocusContainer: useMergedProps(propsStable, props),
        refElementPopupReturn,
        refElementSourceReturn,
        propsStablePopup,
        propsStableSource
    };
}

/**
 * Runs a function the specified number of milliseconds after the component renders.
 *
 * @remarks This is particularly useful to function as "useEffect on a delay".
 *
 * @remarks
 * {@include } {@link UseTimeoutParameters}
 */
function useTimeout({ timeout, callback, triggerIndex }) {
    monitorCallCount(useTimeout);
    const stableCallback = useStableCallback(() => { startTimeRef.current = null; callback(); });
    const getTimeout = useStableGetter(timeout);
    // Set any time we start timeout.
    // Unset any time the timeout completes
    const startTimeRef = useRef(null);
    const timeoutIsNull = (timeout == null);
    // Any time the triggerIndex changes (including on mount)
    // restart the timeout.  The timeout does NOT reset
    // when the duration or callback changes, only triggerIndex.
    useEffect(() => {
        if (!timeoutIsNull) {
            const timeout = getTimeout();
            console.assert(timeoutIsNull == (timeout == null));
            if (timeout != null) {
                startTimeRef.current = +(new Date());
                const handle = setTimeout(stableCallback, timeout);
                return () => clearTimeout(handle);
            }
        }
    }, [triggerIndex, timeoutIsNull]);
    const getElapsedTime = useCallback(() => {
        return (+(new Date())) - (+(startTimeRef.current ?? new Date()));
    }, []);
    const getRemainingTime = useCallback(() => {
        const timeout = getTimeout();
        return timeout == null ? null : Math.max(0, timeout - getElapsedTime());
    }, []);
    return { getElapsedTime, getRemainingTime };
}

function supportsPointerEvents() {
    return ("onpointerup" in window);
}
/**
 * Adds the necessary event handlers to create a "press"-like event for
 * any element, whether it's a native &lt;button&gt; or regular &lt;div&gt;,
 * and allows for a "long press" that can be used to,
 * e.g., show a tooltip *instead* of activating a press.
 *
 * @remarks
 * Notably, the following cases are covered:
 * ```md-literal
 * * The target element is properly focused, even on iOS Safari (*especially* on iOS Safari)
 * * Double-clicks won't select text, it just presses the button twice.
 * * Text selection that happens to end/start with this element won't invoke a press.
 * * The `enter` key immediately invokes a press (by default just once until pressed again), while the `space` key invokes it when released, if focus hasn't moved away from the button.
 * * Haptic feedback (on, like, the one browser combination that supports it &mdash; this can be disabled app-wide with `setButtonVibrate`)
 * ```
 *
 * In addition, returns a "more accurate" CSS `active` and `hover`; more accurate
 * in that `hover` won't mess up mobile devices that see `hover` and mess up your click events,
 * and in that `active` accurately displays when a press would occur or not.
 *
 * {@include } {@link setPressVibrate}
 *
 * @compositeParams
 *
 */
function usePress(args) {
    monitorCallCount(usePress);
    const { refElementReturn: { getElement }, pressParameters: { focusSelf, onPressSync, allowRepeatPresses, longPressThreshold, excludeEnter: ee, excludePointer: ep, excludeSpace: es, onPressingChange: opc } } = args;
    const excludeEnter = useStableCallback(ee ?? returnFalse);
    const excludeSpace = useStableCallback(es ?? returnFalse);
    const excludePointer = useStableCallback(ep ?? returnFalse);
    const onPressingChange = useStableCallback(opc ?? noop$1);
    const [getIsPressing, setIsPressing] = usePassiveState(onPressingChange, returnFalse);
    const hasPressEvent = (onPressSync != null);
    /**
     * Explanations:
     *
     * It would be nice to just use pointer events for everything,
     * but 2019 iOS devices can't run those, amazingly enough, and
     * that's still pretty recent. So we need to have backup touch
     * events.
     *
     * Why not just use click? Because at the very, very least,
     * we also need to be able to handle space and enter key presses,
     * and that needs to work regardless of if it's a <button> or not.
     *
     * Also, we do still use click, because programmatic clicks can come
     * from anything from ATs to automation scripts, and we don't want
     * to break those. But since we are listening for pointer/touch events,
     * and we can't prevent the subsequent click event from happening,
     * and we **don't want to duplicate press events**, we need to
     * ignore click events that happen in the same tick as a handled press event.
     *
     * When we do a pointermove/touchmove, we check to see if we're still hovering over the element
     * for more accurate "active"/hover detection.
     *
     * "But you have a pointerleave event, why check for hovering during pointermove?"
     *
     * Because for some reason, pointerleave (etc.) aren't fired until *after* pointerup, no matter what.
     *
     */
    // All our checking for pointerdown and up doesn't mean anything if it's
    // a programmatic onClick event, which could come from any non-user source.
    // We want to handle those just like GUI clicks, but we don't want to double-up on press events.
    // So if we handle a press from pointerup, we ignore any subsequent click events, at least for a tick.
    const [getJustHandled, setJustHandled] = usePassiveState(useStableCallback((justHandled, _p, reason) => {
        if (justHandled) {
            const h = setTimeout(() => {
                setJustHandled(false, reason);
            }, 1);
            return clearTimeout(h);
        }
    }), returnFalse);
    const [longPress, setLongPress] = useState(null);
    const [waitingForSpaceUp, setWaitingForSpaceUp, getWaitingForSpaceUp] = useState(false);
    const [pointerDownStartedHere, setPointerDownStartedHere, getPointerDownStartedHere] = useState(false);
    const [hovering, setHovering, getHovering] = useState(false);
    const onTouchStart = useStableCallback((e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsPressing(true, e);
        setPointerDownStartedHere(true);
        setHovering(true);
        setLongPress(false);
        const element = getElement();
        if (element)
            focusSelf(element);
    });
    const onTouchMove = useCallback((e) => {
        e.preventDefault();
        e.stopPropagation();
        const element = getElement();
        const touch = e.touches[0];
        // Be as generous as possible with touch events by checking all four corners of the radius too
        const offsets = [
            [0, 0],
            [-touch.radiusX || 0, -touch.radiusY || 0],
            [+touch.radiusX || 0, -touch.radiusY || 0],
            [-touch.radiusX || 0, +touch.radiusY || 0],
            [+touch.radiusX || 0, +touch.radiusY || 0]
        ];
        let hoveringAtAnyPoint = false;
        for (const [x, y] of offsets) {
            const elementAtTouch = document.elementFromPoint((touch?.clientX ?? 0) + x, (touch?.clientY ?? 0) + y);
            hoveringAtAnyPoint ||= (element?.contains(elementAtTouch) ?? false);
        }
        setIsPressing(hoveringAtAnyPoint && getPointerDownStartedHere(), e);
        setHovering(hoveringAtAnyPoint);
    }, []);
    const onTouchEnd = useCallback((e) => {
        e.preventDefault();
        e.stopPropagation();
        const hovering = getHovering();
        const pointerDownStartedHere = getPointerDownStartedHere();
        setJustHandled(true);
        if (pointerDownStartedHere && hovering) {
            handlePress(e);
        }
        setWaitingForSpaceUp(false);
        setHovering(false);
        setPointerDownStartedHere(false);
        setIsPressing(false, e);
    }, []);
    const onPointerDown = useStableCallback((e) => {
        if (!excludePointer()) {
            if ((e.buttons & 1)) {
                e.preventDefault();
                e.stopPropagation();
                setIsPressing(true, e);
                setPointerDownStartedHere(true);
                setHovering(true);
                setLongPress(false);
                const element = getElement();
                if (element)
                    focusSelf(element);
            }
        }
    });
    const onPointerMove = useStableCallback((e) => {
        let listeningForPress = getPointerDownStartedHere();
        // If we're hovering over this element and not holding down the mouse button (or whatever other primary button)
        // then we're definitely not in a press anymore (if we could we'd just wait for onPointerUp, but it could happen outside this element)
        if (!(e.buttons & 1))
            setPointerDownStartedHere(listeningForPress = false);
        if (listeningForPress) {
            const element = getElement();
            // Note: elementFromPoint starts reasonably expensive on a decent computer when on the order of 500 or so elements,
            // so we only test for hovering while actively attempting to detect a press
            const elementAtPointer = document.elementFromPoint(e.clientX, e.clientY);
            const hovering = element == elementAtPointer || element?.contains(elementAtPointer) || false;
            setHovering(hovering);
            setIsPressing(hovering && getPointerDownStartedHere(), e);
        }
    });
    const onPointerUp = useCallback((e) => {
        const hovering = getHovering();
        const pointerDownStartedHere = getPointerDownStartedHere();
        if (!excludePointer()) {
            setJustHandled(true);
            if (pointerDownStartedHere && hovering) {
                handlePress(e);
                e.preventDefault();
                e.stopPropagation();
            }
        }
        setWaitingForSpaceUp(false);
        setHovering(false);
        setPointerDownStartedHere(false);
        setLongPress(false);
        setIsPressing(false, e);
    }, []);
    const onPointerEnter = useCallback((_e) => {
        setHovering(true);
    }, []);
    const onPointerLeave = useCallback((_e) => {
        setHovering(false);
        setLongPress(false);
    }, []);
    useTimeout({
        callback: () => {
            const element = getElement();
            setLongPress(pointerDownStartedHere && getHovering());
            if (element && pointerDownStartedHere && getHovering()) {
                focusSelf(element);
                if (longPressThreshold) {
                    setWaitingForSpaceUp(false);
                    setHovering(false);
                    setPointerDownStartedHere(false);
                }
            }
        },
        timeout: longPressThreshold ?? null,
        triggerIndex: longPress ? true : (pointerDownStartedHere && getHovering())
    });
    const handlePress = useStableCallback((e) => {
        setWaitingForSpaceUp(false);
        setHovering(false);
        setPointerDownStartedHere(false);
        setLongPress(null);
        if (onPressSync) {
            // Note: The element is focused here because of iOS Safari.
            //
            // It's always iOS Safari.
            //
            // iOS Safari (tested on 12) downright refuses to allow 
            // elements to be manually focused UNLESS it happens within
            // an event handler like this.  It also doesn't focus
            // buttons by default when clicked, tapped, etc.
            //
            // If it becomes problematic that button-likes explicitly become
            // focused when they are pressed, then an alternative solution for
            // the question of "how do menu buttons keep their menus open"
            // and other focus-related nonsense needs to be figured out.
            //
            // For iOS Safari.
            //
            const element = getElement();
            if (element)
                focusSelf(element);
            // Whatever the browser was going to do with this event,
            // forget it. We're turning it into a "press" event.
            e.preventDefault();
            // Also stop anyone else from listening to this event,
            // since we're explicitly handling it.
            // (Notably, this allows labels to wrap inputs, with them
            // both having press event handlers, without double-firing)
            e.stopPropagation();
            // Haptic feedback for this press event
            try {
                // The default implementation doesn't throw,
                // but we should guard against user implementations that could.
                pulse();
            }
            finally {
                // Actually call our handler.
                onPressSync(e);
            }
        }
    });
    const onKeyDown = useStableCallback((e) => {
        if (onPressSync) {
            if (e.key == " " && !excludeSpace()) {
                // We don't actually activate it on a space keydown
                // but we do preventDefault to stop the page from scrolling.
                setWaitingForSpaceUp(true);
                setIsPressing(true, e);
                e.preventDefault();
            }
            if (e.key == "Enter" && !excludeEnter() && (!e.repeat || (allowRepeatPresses ?? false))) {
                setIsPressing(true, e);
                handlePress(e);
                requestAnimationFrame(() => {
                    setIsPressing(false, e);
                });
            }
        }
    });
    const onKeyUp = useStableCallback((e) => {
        const waitingForSpaceUp = getWaitingForSpaceUp();
        if (waitingForSpaceUp && e.key == " " && !excludeSpace()) {
            handlePress(e);
            setIsPressing(false, e);
        }
    });
    const onClick = useStableCallback((e) => {
        const element = getElement();
        if (onPressSync) {
            e.preventDefault();
            if (e.detail > 1) {
                if ("stopImmediatePropagation" in e)
                    e.stopImmediatePropagation();
                e.stopPropagation();
            }
            else {
                // Listen for "programmatic" click events.
                if (
                // Ignore the click events that were *just* handled with pointerup
                getJustHandled() == false &&
                    // Ignore stray click events that were't fired SPECIFICALLY on this element
                    e.target == element &&
                    // Ignore click events that were fired on a radio that just became checked
                    // (Whenever the `checked` property is changed, all browsers fire a `click` event, no matter the reason for the change,
                    // but since everything's declarative and *we* were the reason for the change, 
                    // this will always be a duplicate event related to whatever we just did.)
                    element?.tagName == 'input' && element.type == 'radio' && element.checked) {
                    // Intentional, for now. Programmatic clicks shouldn't happen in most cases.
                    // TODO: Remove this when I'm confident stray clicks won't be handled.
                    /* eslint-disable no-debugger */
                    debugger;
                    console.log("onclick was fired and will be handled as it doesn't look like it came from a pointer event", e);
                    setIsPressing(true, e);
                    requestAnimationFrame(() => {
                        setIsPressing(false, e);
                        handlePress(e);
                    });
                    handlePress(e);
                }
            }
        }
    });
    const onFocusOut = useStableCallback((e) => {
        setWaitingForSpaceUp(false);
        setIsPressing(false, e);
    });
    const p = supportsPointerEvents();
    return {
        pressReturn: {
            pressing: ((pointerDownStartedHere && hovering) || waitingForSpaceUp || false),
            getIsPressing,
            longPress
        },
        props: {
            onKeyDown,
            onKeyUp,
            onTouchStart: !hasPressEvent ? undefined : (!p ? onTouchStart : undefined),
            onTouchCancel: !hasPressEvent ? undefined : (!p ? onTouchEnd : undefined),
            onTouchMove: !hasPressEvent ? undefined : (!p ? onTouchMove : undefined),
            onTouchEnd: !hasPressEvent ? undefined : (!p ? onTouchEnd : undefined),
            onPointerDown: !hasPressEvent ? undefined : (p ? onPointerDown : undefined),
            onPointerCancel: !hasPressEvent ? undefined : (p ? onPointerDown : undefined),
            onPointerMove: !pointerDownStartedHere || !hasPressEvent ? undefined : (p ? onPointerMove : undefined),
            onPointerUp: !hasPressEvent ? undefined : (p ? onPointerUp : undefined),
            onPointerEnter: !hasPressEvent ? undefined : (p ? onPointerEnter : undefined),
            onPointerLeave: !hasPressEvent ? undefined : (p ? onPointerLeave : undefined),
            [onfocusout]: onFocusOut,
            onClick
        },
    };
}
let pulse = (("vibrate" in navigator) && (navigator.vibrate instanceof Function)) ? (() => navigator.vibrate(10)) : (() => { });

/**
 * Besides just generating something for the `id` prop, also gives you the props to use on another element if you'd like (e.g. a label's `for`).
 *
 * @compositeParams
 */
function useRandomId({ randomIdParameters: { prefix, otherReferencerProp } }) {
    monitorCallCount(useRandomId);
    const id = (prefix + useId());
    useEnsureStability("useRandomId", prefix, id);
    const referencerElementProps = useRef(otherReferencerProp == null ? {} : { [otherReferencerProp]: id });
    const sourceElementProps = useRef({ id });
    useEnsureStability("useRandomIdReferencerElement", otherReferencerProp);
    return {
        propsReferencer: referencerElementProps.current,
        propsSource: sourceElementProps.current,
        randomIdReturn: {
            id: id
        }
    };
}

/**
 * While `useRandomId` allows the referencer to use the source's ID, sometimes you also want the reverse too (e.g. I `aria-label` you, you `aria-controls` me. That sort of thing).
 *
 * @compositeParams
 */
function useRandomDualIds({ randomIdInputParameters, randomIdLabelParameters, }) {
    monitorCallCount(useRandomDualIds);
    const { randomIdReturn: randomIdInputReturn, propsReferencer: propsLabelAsReferencer, propsSource: propsInputAsSource } = useRandomId({ randomIdParameters: randomIdInputParameters });
    const { randomIdReturn: randomIdLabelReturn, propsReferencer: propsInputAsReferencer, propsSource: propsLabelAsSource } = useRandomId({ randomIdParameters: randomIdLabelParameters });
    return {
        propsLabel: useMergedProps(propsLabelAsReferencer, propsLabelAsSource),
        propsInput: useMergedProps(propsInputAsReferencer, propsInputAsSource),
        randomIdInputReturn,
        randomIdLabelReturn
    };
}

function isPromise(p) {
    return p instanceof Promise;
}
const Unset = Symbol("Unset");
/**
 * lodash-ish function that's like debounce + (throttle w/ async handling) combined.
 *
 * Requires a lot of callbacks to meaningfully turn a red function into a blue one, but you *can* do it!
 * Note that part of this is emulating the fact that the sync handler cannot have a return value,
 * so you'll need to use `setResolve` and the other related functions to do that in whatever way works for your specific scenario.
 *
 * The comments are numbered in approximate execution order for your reading pleasure (1 is near the bottom).
 */
function asyncToSync({ asyncInput, onInvoke, onInvoked, onFinally: onFinallyAny, onReject, onResolve, onHasError, onHasResult, onError, onReturnValue, capture, onAsyncDebounce, onSyncDebounce, onPending, throttle, wait }) {
    let pending = false;
    let syncDebouncing = false;
    let asyncDebouncing = false;
    let currentCapture = Unset;
    const onFinally = () => {
        // 8. This is run at the end of every invocation of the async handler,
        // whether it completed or not, and whether it was async or not.
        onFinallyAny?.();
        onPending?.(pending = false);
        let nothingElseToDo = (!asyncDebouncing);
        onAsyncDebounce?.(asyncDebouncing = false);
        if (nothingElseToDo) ;
        else {
            // 9b. Another request to run the async handler came in while we were running this one.
            // Instead of stopping, we're just going to immediately run again using the arguments that were given to us most recently.
            // We also clear that flag, because we're handling it now. It'll be set again if the handler is called again while *this* one is running
            console.assert(currentCapture !== Unset);
            if (currentCapture != Unset) {
                onSyncDebounce?.(syncDebouncing = true);
                syncDebounced();
            }
        }
    };
    const sync = (...args) => {
        // 5. We're finally running the async version of the function, so notify the caller that the return value is pending.
        // And because the fact that we're here means the debounce/throttle period is over, we can clear that flag too.
        onPending?.(pending = true);
        console.assert(syncDebouncing == false);
        onHasError?.(null);
        onHasResult?.(null);
        let promiseOrReturn;
        let hadSyncError = false;
        try {
            // 6. Run the function we were given.
            // Because it may be sync, or it may throw before returning, we must still wrap it in a try/catch...
            // Also important is that we preserve the async-ness (or lack thereof) on the original input function.
            onInvoke?.();
            promiseOrReturn = asyncInput(...args);
            onHasError?.(false);
        }
        catch (ex) {
            hadSyncError = true;
            onError?.(ex);
            onInvoked?.("throw");
        }
        // 7. Either end immediately, or schedule to end when completed.
        if (isPromise(promiseOrReturn)) {
            onInvoked?.("async");
            promiseOrReturn
                .then(r => { onResolve?.(); onHasResult?.(true); onReturnValue?.(r); return r; })
                .catch(e => { onReject?.(); onHasError?.(true); onError?.(e); return e; })
                .finally(onFinally);
        }
        else {
            onInvoked?.("sync");
            if (!hadSyncError) {
                onResolve?.();
                onHasResult?.(true);
                onHasError?.(false);
            }
            else {
                onReject?.();
                onHasResult?.(false);
                onHasError?.(true);
            }
            onReturnValue?.(promiseOrReturn);
            onPending?.(pending = false);
            onFinally();
        }
    };
    // lodash uses "in" instead of checking for `undefined`...
    const lodashOptions = {
        leading: !wait,
        trailing: true
    };
    if (throttle) {
        if (wait == null || (wait < throttle))
            wait = throttle;
        lodashOptions.maxWait = throttle;
    }
    const syncDebounced = debounce(() => {
        // 3. Instead of calling the sync version of our function directly, we allow it to be throttled/debounced (above)
        // and now that we're done throttling/debouncing, notify anyone who cares of this fact (below).
        onSyncDebounce?.(syncDebouncing = false);
        if (!pending) {
            // 4a. If this is the first invocation, or if we're not still waiting for a previous invocation to finish its async call,
            // then we can just go ahead and run the debounced version of our function.
            console.assert(currentCapture != Unset);
            sync(...currentCapture);
        }
        else {
            // 4b. If we were called while still waiting for the (or a) previous invocation to finish,
            // then we'll need to delay this one. When that previous invocation finishes, it'll check
            // to see if it needs to run again, and it will use these new captured arguments from step 2.
            onAsyncDebounce?.(asyncDebouncing = true);
        }
    }, wait || undefined, lodashOptions);
    return {
        syncOutput: (...args) => {
            // 1. Someone just called the sync version of our async function.
            // 2. We capture the arguments in a way that won't become stale if/when the function is called with a (possibly seconds-long) delay (e.g. event.currentTarget.value on an <input> element).
            currentCapture = capture?.(...args) ?? [];
            onSyncDebounce?.(syncDebouncing = true);
            syncDebounced();
        },
        flushSyncDebounce: () => {
            syncDebounced.flush();
        },
        cancelSyncDebounce: () => {
            syncDebounced.cancel();
        }
    };
}

function identityCapture(...t) { return t; }
const AsyncFunction = ((async function () { }).constructor);
/**
 * Given an async function, returns a function that's suitable for non-async APIs,
 * along with other information about the current run's status.
 *
 * @see {@link useAsyncHandler} for a version that's specialized for DOM event handlers.
 *
 * @remarks When called multiple times in quick succession, (i.e. before the handler has finished),
 * this works like Lodash's `throttle` function with the `wait` option always
 * set to however long the handler takes to complete. A second call to the sync function will be
 * throttled until the first call has finished. The return value of the function is the result
 * of the previous invocation, or `undefined` on the first call.
 *
 * The handler is only ever delayed if one is currently running, so, e.g. for iOS touch events the
 * first call happens in the same event handler (which means things like calls to `element.focus()`
 * will work as intended, since that fails when the event is "split up")
 *
 * Finally, because the sync handler may be invoked on a delay, any property references on the arguments
 * provided might be stale by the time it's actually invoked (e.g. accessing `event.currentTarget.checked`
 * is not stable across time because it's a "live" value -- you almost always want the value that it
 * had at the original time the handler was called). The `capture` option allows you to save that kind of
 * dynamic data at the time it runs; the `AP` and `SP` type parameters likewise control
 * the parameters the async handler and sync handler expect respectively.
 *
 * {@include } {@link UseAsyncParameters}
 *
 * @param asyncHandler - The async function to make sync
 * @param options - @see {@link UseAsyncParameters}
 *
 */
function useAsync(asyncHandler, options) {
    monitorCallCount(useAsync);
    // Things related to current execution
    // Because we can both return and throw undefined, 
    // we need separate state to track their existence too.
    //
    // We keep, like, a *lot* of render-state, but it only ever triggers a re-render
    // when we start/stop an async action.
    const [pending, setPending, _getPending] = useState(false);
    const [result, setResult, _getResult] = useState(undefined);
    const [error, setError, _getError] = useState(undefined);
    const [hasError, setHasError, _getHasError] = useState(false);
    const [hasResult, setHasResult, _getHasResult] = useState(false);
    const [asyncDebouncing, setAsyncDebouncing] = useState(false);
    const [syncDebouncing, setSyncDebouncing] = useState(false);
    const [invocationResult, setInvocationResult] = useState(asyncHandler instanceof AsyncFunction ? "async" : null);
    // Keep track of this for the caller's sake -- we don't really care.
    const [runCount, setRunCount] = useState(0);
    const [settleCount, setSettleCount] = useState(0);
    const [resolveCount, setResolveCount] = useState(0);
    const [rejectCount, setRejectCount] = useState(0);
    const incrementCallCount = useCallback(() => { setRunCount(c => c + 1); }, []);
    const incrementResolveCount = useCallback(() => { setResolveCount(c => c + 1); }, []);
    const incrementRejectCount = useCallback(() => { setRejectCount(c => c + 1); }, []);
    const incrementFinallyCount = useCallback(() => { setSettleCount(c => c + 1); }, []);
    /* eslint-disable prefer-const */
    let { throttle, debounce, capture: captureUnstable } = (options ?? {});
    const captureStable = useStableCallback(captureUnstable ?? identityCapture);
    const asyncHandlerStable = useStableCallback(asyncHandler ?? identity);
    const { flushSyncDebounce, syncOutput, cancelSyncDebounce } = useMemo(() => {
        return asyncToSync({
            asyncInput: asyncHandlerStable,
            capture: captureStable,
            onAsyncDebounce: setAsyncDebouncing,
            onError: setError,
            onPending: setPending,
            onReturnValue: setResult,
            onSyncDebounce: setSyncDebouncing,
            onHasError: setHasError,
            onHasResult: setHasResult,
            onInvoked: setInvocationResult,
            onInvoke: incrementCallCount,
            onFinally: incrementFinallyCount,
            onReject: incrementRejectCount,
            onResolve: incrementResolveCount,
            throttle: options?.throttle,
            wait: options?.debounce
        });
    }, [throttle, debounce]);
    useEffect(() => {
        return () => cancelSyncDebounce();
    }, [cancelSyncDebounce]);
    return {
        syncHandler: syncOutput,
        pending,
        result,
        error,
        hasError: hasError || false,
        hasResult: hasResult || false,
        resolveCount,
        rejectCount,
        settleCount,
        debouncingAsync: asyncDebouncing,
        debouncingSync: syncDebouncing,
        invocationResult,
        callCount: runCount,
        flushDebouncedPromise: flushSyncDebounce
    };
}

/**
 * Given an asynchronous event handler, returns a synchronous one that works on the DOM,
 * along with some other information related to the current state.
 * Does not modify any props.
 *
 * @remarks Note that because the handler you provide may be called with a delay, and
 * because the `value` of, e.g., an `<input>` element will likely have changed by the
 * time the delay is over, a `capture` function is necessary in order to
 * save the relevant information from the DOM at call-time. Any other simple event data,
 * like `mouseX` or `shiftKey` can stay on the event itself and don't
 * need to be captured &ndash; it's never stale.
 *
 * The handler is automatically throttled to only run one at a time.
 * If the handler is called, and then before it finishes, is called again,
 * it will be put on hold until the current one finishes, at which point
 * the second one will run.  If the handler is called a third time before
 * the first has finished, it will *replace* the second, so only the most
 * recently called iteration of the handler will run.
 *
 *
 * You may optionally *also* specify debounce and throttle parameters that wait until the
 * synchronous handler has not been called for the specified number of
 * milliseconds, at which point we *actually* run the asynchronous handler
 * according to the logic in the previous paragraph. This is in
 * *addition* to throttling the handler, and does not replace that behavior.
 *
 *
 * @example
 * General use
 * ```tsx
 * const asyncHandler = async (value: number, e: Event) => {
 *     [...] // Ex. send to a server and setState when done
 * };
 * const {
 *     // A sync version of asyncHandler
 *     syncHandler,
 *     // True while the handler is running
 *     pending,
 *     // The error thrown, if any
 *     error,
 *     // Show this value while the operation's pending
 *     currentCapture,
 *     // And others, see `UseAsyncHandlerReturnType`
 *     ...rest
 * } = useAsyncHandler<HTMLInputElement>()({
 *     asyncHandler,
 *     // Pass in the capture function that saves event data
 *     // from being stale.
 *     capture: e => {
 *         // `capture` can have side-effects because
 *         // it's called exactly once per invocation
 *         e.preventDefault();
 *
 *         // Save this value so that it's never stale
 *         return e.currentTarget.valueAsNumber;
 *     }
 * });
 *
 * const onInput = pending? null : syncHandler;
 * ```
 *
 * {@include } {@link UseAsyncHandlerParameters}
 *
 * @see useAsync A more general version of this hook that can work with any type of handler, not just DOM event handlers.
 */
function useAsyncHandler({ asyncHandler, capture: originalCapture, ...restAsyncOptions }) {
    monitorCallCount(useAsyncHandler);
    // We need to differentiate between "nothing captured yet" and "`undefined` was captured"
    const [currentCapture, setCurrentCapture, getCurrentCapture] = useState(undefined);
    const [hasCapture, setHasCapture] = useState(false);
    // Wrap around the normal `useAsync` `capture` function to also
    // keep track of the last value the user actually input.
    // 
    // Without this there's no way to re-render the control with
    // it being both controlled and also having the "correct" value,
    // and at any rate also protects against sudden exceptions reverting
    // your change out from under you.
    const capture = useStableCallback((e) => {
        const captured = originalCapture(e);
        setCurrentCapture(captured);
        setHasCapture(true);
        return [captured, e];
    });
    return {
        getCurrentCapture,
        currentCapture,
        hasCapture,
        ...useAsync(asyncHandler, { capture, ...restAsyncOptions })
    };
}

let templateElement = null;
function htmlToElement(parent, html) {
    const document = parent.ownerDocument;
    templateElement ??= document.createElement("template");
    templateElement.innerHTML = html.trim(); // TODO: Trim ensures whitespace doesn't add anything, but with a better explanation of why
    return templateElement.content.firstChild;
}
/**
 * Easy access to an HTMLElement that can be controlled imperatively.
 *
 * The HTMLElement rendered is controlled by the `tag` prop (e.g. "span", "div").
 *
 * The `handle` prop should be e.g. `useRef<ImperativeHandle<HTMLDivElement>>(null)`
 */
memo(forwardRef(ImperativeElementU));
/**
 * Allows controlling an element's `class`, `style`, etc. with functions like `setStyle` in addition to being reactive to incoming props.
 *
 * @remarks If the component is re-rendered after the element is modified in some way, those changes are remembered and included in the returned `props` that are meant to be spread to the element in question.
 *
 * This is extremely useful for integrating with 3rd party libraries that expect to be able to directly manipulate the DOM because it keeps everything syncced together.
 *
 * @compositeParams
 */
function useImperativeProps({ refElementReturn: { getElement } }) {
    monitorCallCount(useImperativeProps);
    const currentImperativeProps = useRef({ className: new Set(), style: {}, children: null, html: null, others: {} });
    const hasClass = useCallback((cls) => { return currentImperativeProps.current.className.has(cls); }, []);
    const setClass = useCallback((cls, enabled) => {
        if (hasClass(cls) == !enabled) {
            getElement()?.classList[enabled ? "add" : "remove"](cls);
            currentImperativeProps.current.className[enabled ? "add" : "delete"](cls);
        }
    }, []);
    const setStyle = useCallback((prop, value) => {
        const element = getElement();
        if (element) {
            if (currentImperativeProps.current.style[prop] != value) {
                currentImperativeProps.current.style[prop] = value;
                if (prop.startsWith("--")) {
                    if (value != null)
                        element.style.setProperty(prop, `${value}`);
                    else
                        element.style.removeProperty(prop);
                }
                else {
                    element.style[prop] = value ?? "";
                }
            }
        }
    }, []);
    const setChildren = useCallback((children) => {
        let e = getElement();
        if (e && currentImperativeProps.current.children != children) {
            currentImperativeProps.current.children = children;
            currentImperativeProps.current.html = null;
            e.textContent = children;
        }
    }, []);
    const dangerouslySetInnerHTML = useCallback((children) => {
        let e = getElement();
        if (e && currentImperativeProps.current.html != children) {
            currentImperativeProps.current.children = null;
            currentImperativeProps.current.html = children;
            e.innerHTML = children;
        }
    }, []);
    const dangerouslyAppendHTML = useCallback((children) => {
        let e = getElement();
        if (e && children) {
            const newChild = htmlToElement(e, children);
            console.assert((newChild && newChild instanceof Node));
            if (newChild && newChild instanceof Node) {
                currentImperativeProps.current.children = null;
                currentImperativeProps.current.html ||= "";
                currentImperativeProps.current.html += children;
                e.appendChild(newChild);
                return newChild;
            }
        }
        return null;
    }, []);
    const getAttribute = useCallback((prop) => {
        return currentImperativeProps.current.others[prop];
    }, []);
    const setAttribute = useCallback((prop, value) => {
        if (value != null) {
            if (getAttribute(prop) != value) {
                currentImperativeProps.current.others[prop] = value;
                getElement()?.setAttribute(prop, value);
            }
        }
        else {
            if (getAttribute(prop) != undefined) {
                delete currentImperativeProps.current.others[prop];
                getElement()?.removeAttribute(prop);
            }
        }
    }, []);
    const setEventHandler = useCallback((type, handler, options) => {
        const element = getElement();
        const mappedKey = EventMapping[type];
        if (element) {
            if (handler) {
                element.addEventListener(type, handler, options);
                currentImperativeProps.current.others[mappedKey] = handler;
            }
            else if (currentImperativeProps.current.others[mappedKey]) {
                element.removeEventListener(type, currentImperativeProps.current.others[mappedKey], options);
                currentImperativeProps.current.others[mappedKey] = undefined;
            }
        }
    }, []);
    return {
        imperativePropsReturn: useRef({
            hasClass,
            setClass,
            setStyle,
            getAttribute,
            setAttribute,
            setEventHandler,
            setChildren,
            dangerouslySetInnerHTML,
            dangerouslyAppendHTML
        }).current,
        props: useMergedProps({ className: [...currentImperativeProps.current.className].join(" "), style: currentImperativeProps.current.style }, currentImperativeProps.current.html ? { dangerouslySetInnerHTML: { __html: currentImperativeProps.current.html } } : {}, { children: currentImperativeProps.current.children }, currentImperativeProps.current.others)
    };
}
function ImperativeElementU({ tag: Tag, handle, ...props }, ref) {
    const { propsStable, refElementReturn } = useRefElement({ refElementParameters: {} });
    const { props: imperativeProps, imperativePropsReturn: imperativeHandle } = useImperativeProps({ refElementReturn });
    useImperativeHandle(handle, () => imperativeHandle);
    return (createElement(Tag, useMergedProps(propsStable, imperativeProps, props, { ref })));
}

var n,l$1,u$1,t$1,r$1,o$2,f$1,e$1,c$1={},s=[],a$1=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function h(n,l){for(var u in l)n[u]=l[u];return n}function v$1(n){var l=n.parentNode;l&&l.removeChild(n);}function y$1(l,u,i){var t,r,o,f={};for(o in u)"key"==o?t=u[o]:"ref"==o?r=u[o]:f[o]=u[o];if(arguments.length>2&&(f.children=arguments.length>3?n.call(arguments,2):i),"function"==typeof l&&null!=l.defaultProps)for(o in l.defaultProps)void 0===f[o]&&(f[o]=l.defaultProps[o]);return p$1(l,f,t,r,null)}function p$1(n,i,t,r,o){var f={type:n,props:i,key:t,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==o?++u$1:o};return null==o&&null!=l$1.vnode&&l$1.vnode(f),f}function _$2(n){return n.children}function k$2(n,l){this.props=n,this.context=l;}function b$1(n,l){if(null==l)return n.__?b$1(n.__,n.__.__k.indexOf(n)+1):null;for(var u;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e)return u.__e;return "function"==typeof n.type?b$1(n):null}function g$2(n){var l,u;if(null!=(n=n.__)&&null!=n.__c){for(n.__e=n.__c.base=null,l=0;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e){n.__e=n.__c.base=u.__e;break}return g$2(n)}}function m$1(n){(!n.__d&&(n.__d=!0)&&t$1.push(n)&&!w$2.__r++||r$1!==l$1.debounceRendering)&&((r$1=l$1.debounceRendering)||o$2)(w$2);}function w$2(){var n,l,u,i,r,o,e,c;for(t$1.sort(f$1);n=t$1.shift();)n.__d&&(l=t$1.length,i=void 0,r=void 0,e=(o=(u=n).__v).__e,(c=u.__P)&&(i=[],(r=h({},o)).__v=o.__v+1,L$1(c,o,r,u.__n,void 0!==c.ownerSVGElement,null!=o.__h?[e]:null,i,null==e?b$1(o):e,o.__h),M(i,o),o.__e!=e&&g$2(o)),t$1.length>l&&t$1.sort(f$1));w$2.__r=0;}function x$1(n,l,u,i,t,r,o,f,e,a){var h,v,y,d,k,g,m,w=i&&i.__k||s,x=w.length;for(u.__k=[],h=0;h<l.length;h++)if(null!=(d=u.__k[h]=null==(d=l[h])||"boolean"==typeof d||"function"==typeof d?null:"string"==typeof d||"number"==typeof d||"bigint"==typeof d?p$1(null,d,null,null,d):Array.isArray(d)?p$1(_$2,{children:d},null,null,null):d.__b>0?p$1(d.type,d.props,d.key,d.ref?d.ref:null,d.__v):d)){if(d.__=u,d.__b=u.__b+1,null===(y=w[h])||y&&d.key==y.key&&d.type===y.type)w[h]=void 0;else for(v=0;v<x;v++){if((y=w[v])&&d.key==y.key&&d.type===y.type){w[v]=void 0;break}y=null;}L$1(n,d,y=y||c$1,t,r,o,f,e,a),k=d.__e,(v=d.ref)&&y.ref!=v&&(m||(m=[]),y.ref&&m.push(y.ref,null,d),m.push(v,d.__c||k,d)),null!=k?(null==g&&(g=k),"function"==typeof d.type&&d.__k===y.__k?d.__d=e=A$1(d,e,n):e=C$1(n,d,y,w,k,e),"function"==typeof u.type&&(u.__d=e)):e&&y.__e==e&&e.parentNode!=n&&(e=b$1(y));}for(u.__e=g,h=x;h--;)null!=w[h]&&("function"==typeof u.type&&null!=w[h].__e&&w[h].__e==u.__d&&(u.__d=$$1(i).nextSibling),S(w[h],w[h]));if(m)for(h=0;h<m.length;h++)O(m[h],m[++h],m[++h]);}function A$1(n,l,u){for(var i,t=n.__k,r=0;t&&r<t.length;r++)(i=t[r])&&(i.__=n,l="function"==typeof i.type?A$1(i,l,u):C$1(u,i,i,t,i.__e,l));return l}function P$1(n,l){return l=l||[],null==n||"boolean"==typeof n||(Array.isArray(n)?n.some(function(n){P$1(n,l);}):l.push(n)),l}function C$1(n,l,u,i,t,r){var o,f,e;if(void 0!==l.__d)o=l.__d,l.__d=void 0;else if(null==u||t!=r||null==t.parentNode)n:if(null==r||r.parentNode!==n)n.appendChild(t),o=null;else {for(f=r,e=0;(f=f.nextSibling)&&e<i.length;e+=1)if(f==t)break n;n.insertBefore(t,r),o=r;}return void 0!==o?o:t.nextSibling}function $$1(n){var l,u,i;if(null==n.type||"string"==typeof n.type)return n.__e;if(n.__k)for(l=n.__k.length-1;l>=0;l--)if((u=n.__k[l])&&(i=$$1(u)))return i;return null}function H$1(n,l,u,i,t){var r;for(r in u)"children"===r||"key"===r||r in l||T$2(n,r,null,u[r],i);for(r in l)t&&"function"!=typeof l[r]||"children"===r||"key"===r||"value"===r||"checked"===r||u[r]===l[r]||T$2(n,r,l[r],u[r],i);}function I$1(n,l,u){"-"===l[0]?n.setProperty(l,null==u?"":u):n[l]=null==u?"":"number"!=typeof u||a$1.test(l)?u:u+"px";}function T$2(n,l,u,i,t){var r;n:if("style"===l)if("string"==typeof u)n.style.cssText=u;else {if("string"==typeof i&&(n.style.cssText=i=""),i)for(l in i)u&&l in u||I$1(n.style,l,"");if(u)for(l in u)i&&u[l]===i[l]||I$1(n.style,l,u[l]);}else if("o"===l[0]&&"n"===l[1])r=l!==(l=l.replace(/Capture$/,"")),l=l.toLowerCase()in n?l.toLowerCase().slice(2):l.slice(2),n.l||(n.l={}),n.l[l+r]=u,u?i||n.addEventListener(l,r?z$2:j$2,r):n.removeEventListener(l,r?z$2:j$2,r);else if("dangerouslySetInnerHTML"!==l){if(t)l=l.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("width"!==l&&"height"!==l&&"href"!==l&&"list"!==l&&"form"!==l&&"tabIndex"!==l&&"download"!==l&&l in n)try{n[l]=null==u?"":u;break n}catch(n){}"function"==typeof u||(null==u||!1===u&&"-"!==l[4]?n.removeAttribute(l):n.setAttribute(l,u));}}function j$2(n){return this.l[n.type+!1](l$1.event?l$1.event(n):n)}function z$2(n){return this.l[n.type+!0](l$1.event?l$1.event(n):n)}function L$1(n,u,i,t,r,o,f,e,c){var s,a,v,y,p,d,b,g,m,w,A,P,C,$,H,I=u.type;if(void 0!==u.constructor)return null;null!=i.__h&&(c=i.__h,e=u.__e=i.__e,u.__h=null,o=[e]),(s=l$1.__b)&&s(u);try{n:if("function"==typeof I){if(g=u.props,m=(s=I.contextType)&&t[s.__c],w=s?m?m.props.value:s.__:t,i.__c?b=(a=u.__c=i.__c).__=a.__E:("prototype"in I&&I.prototype.render?u.__c=a=new I(g,w):(u.__c=a=new k$2(g,w),a.constructor=I,a.render=q$2),m&&m.sub(a),a.props=g,a.state||(a.state={}),a.context=w,a.__n=t,v=a.__d=!0,a.__h=[],a._sb=[]),null==a.__s&&(a.__s=a.state),null!=I.getDerivedStateFromProps&&(a.__s==a.state&&(a.__s=h({},a.__s)),h(a.__s,I.getDerivedStateFromProps(g,a.__s))),y=a.props,p=a.state,a.__v=u,v)null==I.getDerivedStateFromProps&&null!=a.componentWillMount&&a.componentWillMount(),null!=a.componentDidMount&&a.__h.push(a.componentDidMount);else {if(null==I.getDerivedStateFromProps&&g!==y&&null!=a.componentWillReceiveProps&&a.componentWillReceiveProps(g,w),!a.__e&&null!=a.shouldComponentUpdate&&!1===a.shouldComponentUpdate(g,a.__s,w)||u.__v===i.__v){for(u.__v!==i.__v&&(a.props=g,a.state=a.__s,a.__d=!1),a.__e=!1,u.__e=i.__e,u.__k=i.__k,u.__k.forEach(function(n){n&&(n.__=u);}),A=0;A<a._sb.length;A++)a.__h.push(a._sb[A]);a._sb=[],a.__h.length&&f.push(a);break n}null!=a.componentWillUpdate&&a.componentWillUpdate(g,a.__s,w),null!=a.componentDidUpdate&&a.__h.push(function(){a.componentDidUpdate(y,p,d);});}if(a.context=w,a.props=g,a.__P=n,P=l$1.__r,C=0,"prototype"in I&&I.prototype.render){for(a.state=a.__s,a.__d=!1,P&&P(u),s=a.render(a.props,a.state,a.context),$=0;$<a._sb.length;$++)a.__h.push(a._sb[$]);a._sb=[];}else do{a.__d=!1,P&&P(u),s=a.render(a.props,a.state,a.context),a.state=a.__s;}while(a.__d&&++C<25);a.state=a.__s,null!=a.getChildContext&&(t=h(h({},t),a.getChildContext())),v||null==a.getSnapshotBeforeUpdate||(d=a.getSnapshotBeforeUpdate(y,p)),H=null!=s&&s.type===_$2&&null==s.key?s.props.children:s,x$1(n,Array.isArray(H)?H:[H],u,i,t,r,o,f,e,c),a.base=u.__e,u.__h=null,a.__h.length&&f.push(a),b&&(a.__E=a.__=null),a.__e=!1;}else null==o&&u.__v===i.__v?(u.__k=i.__k,u.__e=i.__e):u.__e=N$1(i.__e,u,i,t,r,o,f,c);(s=l$1.diffed)&&s(u);}catch(n){u.__v=null,(c||null!=o)&&(u.__e=e,u.__h=!!c,o[o.indexOf(e)]=null),l$1.__e(n,u,i);}}function M(n,u){l$1.__c&&l$1.__c(u,n),n.some(function(u){try{n=u.__h,u.__h=[],n.some(function(n){n.call(u);});}catch(n){l$1.__e(n,u.__v);}});}function N$1(l,u,i,t,r,o,f,e){var s,a,h,y=i.props,p=u.props,d=u.type,_=0;if("svg"===d&&(r=!0),null!=o)for(;_<o.length;_++)if((s=o[_])&&"setAttribute"in s==!!d&&(d?s.localName===d:3===s.nodeType)){l=s,o[_]=null;break}if(null==l){if(null===d)return document.createTextNode(p);l=r?document.createElementNS("http://www.w3.org/2000/svg",d):document.createElement(d,p.is&&p),o=null,e=!1;}if(null===d)y===p||e&&l.data===p||(l.data=p);else {if(o=o&&n.call(l.childNodes),a=(y=i.props||c$1).dangerouslySetInnerHTML,h=p.dangerouslySetInnerHTML,!e){if(null!=o)for(y={},_=0;_<l.attributes.length;_++)y[l.attributes[_].name]=l.attributes[_].value;(h||a)&&(h&&(a&&h.__html==a.__html||h.__html===l.innerHTML)||(l.innerHTML=h&&h.__html||""));}if(H$1(l,p,y,r,e),h)u.__k=[];else if(_=u.props.children,x$1(l,Array.isArray(_)?_:[_],u,i,t,r&&"foreignObject"!==d,o,f,o?o[0]:i.__k&&b$1(i,0),e),null!=o)for(_=o.length;_--;)null!=o[_]&&v$1(o[_]);e||("value"in p&&void 0!==(_=p.value)&&(_!==l.value||"progress"===d&&!_||"option"===d&&_!==y.value)&&T$2(l,"value",_,y.value,!1),"checked"in p&&void 0!==(_=p.checked)&&_!==l.checked&&T$2(l,"checked",_,y.checked,!1));}return l}function O(n,u,i){try{"function"==typeof n?n(u):n.current=u;}catch(n){l$1.__e(n,i);}}function S(n,u,i){var t,r;if(l$1.unmount&&l$1.unmount(n),(t=n.ref)&&(t.current&&t.current!==n.__e||O(t,null,u)),null!=(t=n.__c)){if(t.componentWillUnmount)try{t.componentWillUnmount();}catch(n){l$1.__e(n,u);}t.base=t.__P=null,n.__c=void 0;}if(t=n.__k)for(r=0;r<t.length;r++)t[r]&&S(t[r],u,i||"function"!=typeof n.type);i||null==n.__e||v$1(n.__e),n.__=n.__e=n.__d=void 0;}function q$2(n,l,u){return this.constructor(n,u)}function B$1(u,i,t){var r,o,f;l$1.__&&l$1.__(u,i),o=(r="function"==typeof t)?null:t&&t.__k||i.__k,f=[],L$1(i,u=(!r&&t||i).__k=y$1(_$2,null,[u]),o||c$1,c$1,void 0!==i.ownerSVGElement,!r&&t?[t]:o?null:i.firstChild?n.call(i.childNodes):null,f,!r&&t?t:o?o.__e:i.firstChild,r),M(f,u);}function F$2(n,l){var u={__c:l="__cC"+e$1++,__:n,Consumer:function(n,l){return n.children(l)},Provider:function(n){var u,i;return this.getChildContext||(u=[],(i={})[l]=this,this.getChildContext=function(){return i},this.shouldComponentUpdate=function(n){this.props.value!==n.value&&u.some(function(n){n.__e=!0,m$1(n);});},this.sub=function(n){u.push(n);var l=n.componentWillUnmount;n.componentWillUnmount=function(){u.splice(u.indexOf(n),1),l&&l.call(n);};}),n.children}};return u.Provider.__=u.Consumer.contextType=u}n=s.slice,l$1={__e:function(n,l,u,i){for(var t,r,o;l=l.__;)if((t=l.__c)&&!t.__)try{if((r=t.constructor)&&null!=r.getDerivedStateFromError&&(t.setState(r.getDerivedStateFromError(n)),o=t.__d),null!=t.componentDidCatch&&(t.componentDidCatch(n,i||{}),o=t.__d),o)return t.__E=t}catch(l){n=l;}throw n}},u$1=0,k$2.prototype.setState=function(n,l){var u;u=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=h({},this.state),"function"==typeof n&&(n=n(h({},u),this.props)),n&&h(u,n),null!=n&&this.__v&&(l&&this._sb.push(l),m$1(this));},k$2.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),m$1(this));},k$2.prototype.render=_$2,t$1=[],o$2="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,f$1=function(n,l){return n.__v.__b-l.__v.__b},w$2.__r=0,e$1=0;

var _$1=0;function o$1(o,e,n,t,f,l){var s,u,a={};for(u in e)"ref"==u?s=e[u]:a[u]=e[u];var i={type:o,props:a,key:n,ref:s,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--_$1,__source:f,__self:l};if("function"==typeof o&&(s=o.defaultProps))for(u in s)void 0===a[u]&&(a[u]=s[u]);return l$1.vnode&&l$1.vnode(i),i}

const Table$1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_-";
function base64(value) {
    return Table$1[value];
}
function random6Bits() {
    return Math.floor(Math.random() * 0b1000000);
}
function random64Bits() {
    return [random6Bits(), random6Bits(), random6Bits(), random6Bits(), random6Bits(), random6Bits(), random6Bits(), random6Bits(), random6Bits(), random6Bits(), random6Bits()];
}
/**
 * Returns a randomly-generated ID with an optional prefix.
 * Note that if the prefix is *explicitly* set to "", then
 * IDs that are not valid under HTML4 may be generated. Oh no.
 *
 *
 * (This is here, in this particular file, to avoid circular dependencies
 * because useBeforeLayoutEffect also needs random IDs for its own reasons)
 */
function generateRandomId(prefix) {
    return `${prefix ?? "id-"}${random64Bits().map(n => base64(n)).join("")}`;
}

/**
 * Very basic hook for a root-level component to use to allow any children within the whole app to push children to a portal somewhere.
 *
 * @remarks Returns the portal (as `children`, and functions to add, remove, or update a child to the portaled area)
 *
 * TODO: Can't push a child until after the very first `useLayoutEffect`
 *
 * {@include } {@link UsePortalChildrenParameters}
 */
function usePortalChildren({ target }) {
    monitorCallCount(usePortalChildren);
    const [pushChild, setPushChild] = useState(null);
    const [updateChild, setUpdateChild] = useState(null);
    const [removeChild, setRemoveChild] = useState(null);
    const pushChildStable = useStableCallback((child) => {
        return pushChild?.(child) ?? -1;
    });
    const updateChildStable = useStableCallback((index, child) => {
        return updateChild?.(index, child);
    });
    const removeChildStable = useStableCallback((index) => {
        return removeChild?.(index);
    });
    const element = useMemo(() => { return target == null ? null : typeof target == "string" ? document.getElementById(target) : target; }, [target]);
    const children = !element ? null : createPortal(o$1(PortalChildren, { setPushChild: setPushChild, setUpdateChild: setUpdateChild, setRemoveChild: setRemoveChild }), element);
    return {
        children: children,
        pushChild: pushChildStable,
        updateChild: updateChildStable,
        removeChild: removeChildStable,
        portalElement: element
    };
}
/**
 * Implementation
 */
function PortalChildren({ setPushChild, setUpdateChild, setRemoveChild }) {
    const [children, setChildren, getChildren] = useState([]);
    const pushChild = useCallback((child) => {
        const randomKey = generateRandomId();
        let index = getChildren().length;
        setChildren(prev => ([...prev, cloneElement(child, { key: randomKey, index })]));
        return index;
    }, []);
    const updateChild = useCallback((index, child) => {
        const key = getChildren()[index]?.key;
        console.assert(!!key);
        if (key) {
            setChildren(prev => {
                let newChildren = prev.slice();
                newChildren.splice(index, 1, cloneElement(child, { key: key, index }));
                return newChildren;
            });
            return index;
        }
    }, []);
    const removeChild = useCallback((index) => {
        const key = getChildren()[index]?.key;
        console.assert(!!key);
        if (key) {
            setChildren(prev => {
                let newChildren = prev.slice();
                newChildren.splice(index, 1);
                return newChildren;
            });
            return index;
        }
    }, []);
    useLayoutEffect(() => { setPushChild(_ => pushChild); }, [pushChild]);
    useLayoutEffect(() => { setUpdateChild(_ => updateChild); }, [updateChild]);
    useLayoutEffect(() => { setRemoveChild(_ => removeChild); }, [removeChild]);
    return (createElement(Fragment, {}, children));
}

function getFromLocalStorage(key, converter = JSON.parse, storage = localStorage) {
    try {
        const item = storage.getItem(key);
        if (item == null)
            return null;
        return converter(item);
    }
    catch (e) {
        /* eslint-disable no-debugger */
        debugger;
        return null;
    }
}
function storeToLocalStorage(key, value, converter = JSON.stringify, storage = localStorage) {
    try {
        if (value == null)
            storage.removeItem(key);
        else
            storage.setItem(key, converter(value));
    }
    catch (e) {
        /* eslint-disable no-debugger */
        debugger;
    }
}
/**
 * @remarks Use module augmentation to get the correct types for this function.
 *
 * ```typescript
 * declare module 'preact-prop-helpers' {
 *     interface PersistentStates {
 *         numberState: number;
 *         stringState: string;
 *     }
 * }
 * ```
 * @param key -
 * @param initialValue -
 * @param fromString -
 * @param toString -
 * @returns
 */
function usePersistentState(key, initialValue, fromString = JSON.parse, toString = JSON.stringify, storage = localStorage) {
    monitorCallCount(usePersistentState);
    const [localCopy, setLocalCopy, getLocalCopy] = useState(() => ((key ? (getFromLocalStorage(key, fromString, storage)) : null) ?? initialValue));
    const getInitialValue = useStableGetter(initialValue);
    // Ensure that if our key changes, we also update `localCopy` to match.
    useLayoutEffect(() => {
        if (key) {
            const newCopy = getFromLocalStorage(key, fromString, storage);
            setLocalCopy(newCopy ?? getInitialValue());
        }
    }, [key, storage]);
    // Listen for changes to this storage in other browser tabs
    useGlobalHandler(window, "storage", useStableCallback((e) => {
        if (key && e.key === key && e.storageArea == storage) {
            const newValue = e.newValue;
            if (newValue != null)
                setLocalCopy(fromString(newValue));
            else
                setLocalCopy(initialValue);
        }
    }));
    const setValueWrapper = useStableCallback((valueOrSetter) => {
        const value = typeof valueOrSetter === "function" ? valueOrSetter(getLocalCopy()) : valueOrSetter;
        // Make sure this update is available immediately before the next render
        setLocalCopy(valueOrSetter);
        // Actually save the value to local storage.
        if (key) {
            storeToLocalStorage(key, value, toString, storage);
            if (typeof value == "object" && value instanceof Date) {
                console.assert(fromString != JSON.parse, "Dates (and other non-JSON types) must be given custom fromString and toString functions.");
            }
        }
    });
    const getValue = useStableCallback(() => {
        const trueValue = !key ? undefined : getFromLocalStorage(key, fromString, storage);
        return trueValue ?? localCopy;
    });
    return [localCopy, setValueWrapper, getValue];
}

createContext(null);

var t,r,u,i,o=0,f=[],c=[],e=l$1.__b,a=l$1.__r,v=l$1.diffed,l=l$1.__c,m=l$1.unmount;function d(t,u){l$1.__h&&l$1.__h(r,t,o||u),o=0;var i=r.__H||(r.__H={__:[],__h:[]});return t>=i.__.length&&i.__.push({__V:c}),i.__[t]}function p(u,i){var o=d(t++,3);!l$1.__s&&z$1(o.__H,i)&&(o.__=u,o.i=i,r.__H.__h.push(o));}function y(u,i){var o=d(t++,4);!l$1.__s&&z$1(o.__H,i)&&(o.__=u,o.i=i,r.__h.push(o));}function _(n){return o=5,F$1(function(){return {current:n}},[])}function A(n,t,r){o=6,y(function(){return "function"==typeof n?(n(t()),function(){return n(null)}):n?(n.current=t(),function(){return n.current=null}):void 0},null==r?r:r.concat(n));}function F$1(n,r){var u=d(t++,7);return z$1(u.__H,r)?(u.__V=n(),u.i=r,u.__h=n,u.__V):u.__}function T$1(n,t){return o=8,F$1(function(){return n},t)}function q$1(n){var u=r.context[n.__c],i=d(t++,9);return i.c=n,u?(null==i.__&&(i.__=!0,u.sub(r)),u.props.value):n.__}function b(){for(var t;t=f.shift();)if(t.__P&&t.__H)try{t.__H.__h.forEach(k$1),t.__H.__h.forEach(w$1),t.__H.__h=[];}catch(r){t.__H.__h=[],l$1.__e(r,t.__v);}}l$1.__b=function(n){r=null,e&&e(n);},l$1.__r=function(n){a&&a(n),t=0;var i=(r=n.__c).__H;i&&(u===r?(i.__h=[],r.__h=[],i.__.forEach(function(n){n.__N&&(n.__=n.__N),n.__V=c,n.__N=n.i=void 0;})):(i.__h.forEach(k$1),i.__h.forEach(w$1),i.__h=[])),u=r;},l$1.diffed=function(t){v&&v(t);var o=t.__c;o&&o.__H&&(o.__H.__h.length&&(1!==f.push(o)&&i===l$1.requestAnimationFrame||((i=l$1.requestAnimationFrame)||j$1)(b)),o.__H.__.forEach(function(n){n.i&&(n.__H=n.i),n.__V!==c&&(n.__=n.__V),n.i=void 0,n.__V=c;})),u=r=null;},l$1.__c=function(t,r){r.some(function(t){try{t.__h.forEach(k$1),t.__h=t.__h.filter(function(n){return !n.__||w$1(n)});}catch(u){r.some(function(n){n.__h&&(n.__h=[]);}),r=[],l$1.__e(u,t.__v);}}),l&&l(t,r);},l$1.unmount=function(t){m&&m(t);var r,u=t.__c;u&&u.__H&&(u.__H.__.forEach(function(n){try{k$1(n);}catch(n){r=n;}}),u.__H=void 0,r&&l$1.__e(r,u.__v));};var g$1="function"==typeof requestAnimationFrame;function j$1(n){var t,r=function(){clearTimeout(u),g$1&&cancelAnimationFrame(t),setTimeout(n);},u=setTimeout(r,100);g$1&&(t=requestAnimationFrame(r));}function k$1(n){var t=r,u=n.__c;"function"==typeof u&&(n.__c=void 0,u()),r=t;}function w$1(n){var t=r;n.__c=n.__(),r=t;}function z$1(n,t){return !n||n.length!==t.length||t.some(function(t,r){return t!==n[r]})}

function useContextWithWarning(context, parentContextName) {
    let ret = q$1(context);
    if (ret == null) {
        debugger;
        console.error(`This child is missing its parent ${parentContextName} context`);
    }
    return ret;
}
function setDebugLogging(logging) {
}
function noop() { return; }
// (These do not need to be unique)
const Prefices = {
    accordionSectionHeaderButton: "ashb-",
    accordionSectionBody: "asb-",
    checkboxLikeInput: "cbli-",
    checkboxLikeLabel: "cbll-",
    dialog: "mdl-",
    dialogTitle: "mdlt-",
    drawer: "mdw-",
    drawerTitle: "mdwt-",
    gridlist: "gl-",
    gridlistLabel: "gll-",
    listbox: "lb-",
    listboxLabel: "lbl-",
    menu: "menu-",
    progressIndicator: "pi-",
    progressLabel: "pl-",
    radioGroup: "rg-",
    radioGroupLabel: "rgl-",
    radio: "rb-",
    radioLabel: "rbl-",
    sliderThumb: "st-",
    table: "tb-",
    tableLabel: "tbl-",
    tablist: "tl-",
    tablistLabel: "tll-",
    tooltip: "tt-",
    toolbar: "tlb-",
    toolbarLabel: "tlbl-"
};

/**
 * Implements a [Button](https://www.w3.org/WAI/ARIA/apg/patterns/button/) pattern.
 *
 * @compositeParams
 */
function useButton({ buttonParameters: { tagButton, disabled, onPress, pressed, role }, pressParameters, refElementParameters }) {
    monitorCallCount(useButton);
    const { refElementReturn, propsStable: propsRef } = useRefElement({ refElementParameters });
    const focusSelf = T$1((e) => focus(e), []);
    const { pressReturn, props: propsPress } = usePress({
        refElementReturn,
        pressParameters: {
            onPressSync: (e) => (disabled ? null : onPress)?.(enhanceEvent(e, { pressed: pressed == null ? null : !pressed })),
            focusSelf,
            ...pressParameters // Intentionally at the end so Typescript will error if we forget something
        },
    });
    const baseProps = { "aria-pressed": (pressed === true ? "true" : pressed === false ? "false" : undefined) };
    const buttonProps = { ...baseProps, disabled: (disabled && disabled != "soft") ? true : false, "aria-disabled": (disabled === 'soft' ? 'true' : undefined), role: role == "button" ? undefined : role };
    const divProps = { ...baseProps, tabIndex: (disabled === "hard" ? -1 : 0), role, "aria-disabled": disabled ? "true" : undefined };
    return {
        pressReturn,
        props: useMergedProps(propsPress, propsRef, (tagButton == 'button' ? buttonProps : divProps)),
        refElementReturn,
    };
}

/**
 * Implements an [Accordion](https://www.w3.org/WAI/ARIA/apg/patterns/accordion/) pattern.
 *
 * @compositeParams
 *
 * @hasChild {@link useAccordionSection}
 */
function useAccordion({ accordionParameters: { initialIndex, localStorageKey, orientation, ...void2 }, typeaheadNavigationParameters, linearNavigationParameters: { disableHomeEndKeys, navigatePastEnd, navigatePastStart, pageNavigationSize, onNavigateLinear, ...void1 }, managedChildrenParameters: { onAfterChildLayoutEffect, onChildrenMountChange, onChildrenCountChange, ...void3 }, ...void4 }) {
    monitorCallCount(useAccordion);
    const [localStorageIndex, setLocalStorageIndex] = usePersistentState(localStorageKey ?? null, initialIndex ?? null);
    if (localStorageIndex != null)
        initialIndex = localStorageIndex;
    const { managedChildrenReturn, context: { managedChildContext } } = useManagedChildren({
        managedChildrenParameters: {
            onChildrenMountChange: useStableCallback((m, u) => { ocmc2(); onChildrenMountChange?.(m, u); }),
            onAfterChildLayoutEffect,
            onChildrenCountChange
        }
    });
    const { getChildren } = managedChildrenReturn;
    const isValidByChild = useCallback((c) => (c && !c.disabled && !c.untabbable), []);
    const isValidByIndex = useCallback((c) => {
        const child = getChildren().getAt(c);
        if (child) {
            return isValidByChild(child);
        }
        return false;
    }, []);
    const { propsStable, refElementReturn: { getElement } } = useRefElement({});
    // Keep track of the one expanded index (if there is only one expanded index)
    const { changeIndex: changeExpandedIndexLocalOnly, getCurrentIndex: getCurrentExpandedIndex } = useChildrenFlag({
        initialIndex,
        getChildren,
        getAt: useCallback((child) => { return child.getOpenFromParent() ?? false; }, []),
        setAt: useCallback((child, open) => { return child.setOpenFromParent(open); }, []),
        isValid: isValidByChild,
        onIndexChange: null,
        closestFit: false,
        onClosestFit: null
    });
    // Also keep track of which button is currently tabbable.
    // For some reason, Accordion buttons are both individually tabbable *and* arrow-key navigatable.
    const { changeIndex: changeTabbedIndex, getCurrentIndex: getTabbedIndex, reevaluateClosestFit: ocmc2 } = useChildrenFlag({
        initialIndex,
        getChildren,
        getAt: useCallback((child) => { return child.getMostRecentlyTabbed() ?? false; }, []),
        setAt: useCallback((child, tabbed) => { return child.setMostRecentlyTabbed(tabbed); }, []),
        isValid: isValidByChild,
        closestFit: true,
        onIndexChange: useCallback((i) => {
            if (i != null) {
                getChildren().getAt(i)?.focusSelf();
            }
        }, []),
        onClosestFit: useStableCallback((index) => {
            if (document.activeElement == null || document.activeElement == document.body) {
                if (index == null)
                    findBackupFocus(getElement()).focus();
                else
                    getChildren().getAt(index)?.focusSelf();
            }
        })
    });
    const changeExpandedIndex = useStableCallback((value) => {
        changeExpandedIndexLocalOnly(value);
        setLocalStorageIndex(value);
    });
    const rovingTabIndexReturn = useMemoObject({
        getTabbableIndex: getTabbedIndex,
        setTabbableIndex: changeTabbedIndex
    });
    const { context: { typeaheadNavigationContext }, typeaheadNavigationReturn, propsStable: propsTN } = useTypeaheadNavigation({
        rovingTabIndexReturn,
        typeaheadNavigationParameters
    });
    return {
        props: propsStable,
        context: useMemoObject({
            managedChildContext,
            typeaheadNavigationContext,
            accordionSectionParameters: useMemoObject({
                changeExpandedIndex,
                changeTabbedIndex,
                getExpandedIndex: getCurrentExpandedIndex,
                getTabbedIndex: getTabbedIndex,
                stableTypeaheadProps: propsTN,
            }),
            linearNavigationParameters: useMemoObject({
                disableHomeEndKeys,
                getHighestIndex: useCallback(() => getChildren().getHighestIndex(), []),
                getLowestIndex: useCallback(() => getChildren().getLowestIndex(), []),
                indexMangler: identity,
                indexDemangler: identity,
                arrowKeyDirection: orientation ?? "vertical",
                isValid: isValidByIndex,
                navigatePastEnd,
                navigatePastStart,
                pageNavigationSize,
                onNavigateLinear
            }),
            rovingTabIndexReturn
        }),
        managedChildrenReturn,
        accordionReturn: useMemoObject({ changeExpandedIndex })
    };
}
/**
 * @compositeParams
 */
function useAccordionSection({ buttonParameters, accordionSectionParameters: { open: openFromUser, bodyRole }, info: { index, untabbable, ...info }, textContentParameters, context: { accordionSectionParameters: { changeExpandedIndex, changeTabbedIndex: setCurrentFocusedIndex, getTabbedIndex: getCurrentFocusedIndex, stableTypeaheadProps }, linearNavigationParameters, rovingTabIndexReturn, managedChildContext, typeaheadNavigationContext }, refElementParameters, }) {
    monitorCallCount(useAccordionSection);
    const { disabled, onPress: userOnPress } = buttonParameters;
    const [openFromParent, setOpenFromParent, getOpenFromParent] = useState(null);
    const [mostRecentlyTabbed, setMostRecentlyTabbed, getMostRecentlyTabbed] = useState(null);
    const { randomIdReturn: _bodyIdReturn, propsSource: propsBodySource, propsReferencer: propsHeadReferencer } = useRandomId({ randomIdParameters: { prefix: Prefices.accordionSectionHeaderButton, otherReferencerProp: "aria-controls" } });
    const { randomIdReturn: _headIdReturn, propsSource: propsHeadSource, propsReferencer: propsBodyReferencer } = useRandomId({ randomIdParameters: { prefix: Prefices.accordionSectionBody, otherReferencerProp: "aria-labelledby" } });
    const open = ((openFromUser ?? openFromParent) ?? false);
    const { refElementReturn: { getElement: getHeaderElement }, propsStable: headerRefElementProps } = useRefElement({ refElementParameters: {} });
    const { refElementReturn: { getElement: _getBodyElement }, propsStable: bodyRefElementProps } = useRefElement({ refElementParameters: {} });
    const { hasCurrentFocusReturn } = useHasCurrentFocus({
        refElementReturn: { getElement: getHeaderElement }, hasCurrentFocusParameters: {
            onCurrentFocusedInnerChanged: useStableCallback(focused => {
                if (focused) {
                    setCurrentFocusedIndex(index);
                    setMostRecentlyTabbed(true);
                }
            })
        }
    });
    const focusSelf = useStableCallback(() => {
        focus(getHeaderElement());
    });
    useManagedChild({
        context: {
            managedChildContext
        },
        info: {
            index,
            disabled,
            focusSelf,
            getMostRecentlyTabbed,
            getOpenFromParent,
            untabbable,
            setMostRecentlyTabbed,
            setOpenFromParent,
            ...info
        }
    });
    const onPress = (e) => {
        setCurrentFocusedIndex(index);
        if (getOpenFromParent())
            changeExpandedIndex(null);
        else
            changeExpandedIndex(index);
        userOnPress?.(e);
    };
    const { propsStable: propsLN, ...linearReturnType } = useLinearNavigation({ linearNavigationParameters, rovingTabIndexReturn, paginatedChildrenParameters: { paginationMin: null, paginationMax: null } });
    const { pressParameters: { excludeSpace }, textContentReturn } = useTypeaheadNavigationChild({
        info: { index },
        refElementReturn: { getElement: useStableCallback(() => refElementReturn.getElement()) },
        textContentParameters,
        context: { typeaheadNavigationContext }
    });
    const buttonReturn = useButton({
        buttonParameters: { ...buttonParameters, pressed: null, onPress, role: "button", },
        pressParameters: { excludeSpace, allowRepeatPresses: false, excludeEnter: null, excludePointer: null, longPressThreshold: null, onPressingChange: null },
        refElementParameters
    });
    const { pressReturn, props: buttonProps, refElementReturn } = buttonReturn;
    //const { linearNavigationReturn: { propsStable } } = linearReturnType;
    const headerButtonProps = useMergedProps(buttonProps, hasCurrentFocusReturn.propsStable, headerRefElementProps, propsHeadReferencer, propsHeadSource, propsLN, stableTypeaheadProps, { "aria-expanded": (open ?? false), });
    const bodyProps = useMergedProps(bodyRefElementProps, propsBodyReferencer, propsBodySource, {
        role: bodyRole,
        tabIndex: -1
    });
    return {
        pressReturn,
        refElementReturn,
        textContentReturn,
        accordionSectionReturn: {
            mostRecentlyTabbed: !!mostRecentlyTabbed,
            expanded: open,
            focused: (getCurrentFocusedIndex() == index)
        },
        propsHeaderButton: headerButtonProps,
        propsHeader: {},
        propsBody: bodyProps,
        hasCurrentFocusReturn
    };
}

/**
 * Allows a parent checkbox to control a number of child checkboxes, in accordance with the [Checkbox](https://www.w3.org/WAI/ARIA/apg/patterns/checkbox/) pattern.
 *
 * @compositeParams
 *
 * @hasChild {@link useCheckboxGroupParent}
 * @hasChild {@link useCheckboxGroupChild}
 */
function useCheckboxGroup({ linearNavigationParameters, rovingTabIndexParameters, checkboxGroupParameters: { orientation }, ...listNavParameters }) {
    monitorCallCount(useCheckboxGroup);
    const { childrenHaveFocusReturn, context, linearNavigationReturn, managedChildrenReturn, props, rearrangeableChildrenReturn, rovingTabIndexReturn, singleSelectionReturn, staggeredChildrenReturn, paginatedChildrenReturn, sortableChildrenReturn, typeaheadNavigationReturn } = useCompleteListNavigation({
        linearNavigationParameters: { arrowKeyDirection: orientation, ...linearNavigationParameters },
        rovingTabIndexParameters: { focusSelfParent: focus, ...rovingTabIndexParameters },
        singleSelectionParameters: { initiallySelectedIndex: null, onSelectedIndexChange: null, ariaPropName: null, selectionMode: "disabled" },
        paginatedChildrenParameters: { paginationMax: null, paginationMin: null },
        ...listNavParameters
    });
    const { getChildren } = managedChildrenReturn;
    const children = getChildren();
    // Keep track of all child IDs, and any time any of them change, 
    // generate a new string with all of them concatenated together
    // (but only once per render);
    const allIds = _(new Set());
    const updateParentControlIds = useStableCallback((setter) => { setter?.(Array.from(allIds.current).join(" ")); });
    const [getSetter, setSetter] = usePassiveState(updateParentControlIds, returnNull);
    const [_getUpdateIndex, setUpdateIndex] = usePassiveState(useStableCallback(() => { updateParentControlIds(getSetter()); }), returnZero);
    // Lots of machenery to track what total percentage of all checkboxes are checked,
    // and notifying the parent checkbox of this information (while re-rendering as little as possible)
    const getSelfIsChecked = T$1((percentChecked) => { return percentChecked <= 0 ? false : percentChecked >= 1 ? true : "mixed"; }, []);
    const onAnyChildCheckedUpdate = useStableCallback((setter, percentChecked) => { setter?.(getSelfIsChecked(percentChecked)); });
    const [getTotalChildren, setTotalChildren] = usePassiveState(T$1((totalChildren) => { onAnyChildCheckedUpdate(getSetParentCheckboxChecked(), getPercentChecked(getTotalChecked(), totalChildren)); }, []), returnZero);
    const [getTotalChecked, setTotalChecked] = usePassiveState(T$1((totalChecked) => { onAnyChildCheckedUpdate(getSetParentCheckboxChecked(), getPercentChecked(totalChecked, getTotalChildren())); }, []), returnZero);
    const getPercentChecked = T$1((totalChecked, totalChildren) => {
        if (totalChildren > 0)
            return totalChecked / totalChildren;
        else
            return (totalChecked == 0 ? 0 : 1);
    }, []);
    const [getSetParentCheckboxChecked, setSetParentCheckboxChecked] = usePassiveState(useStableCallback((setter) => {
        onAnyChildCheckedUpdate(setter, getPercentChecked(getTotalChecked(), getTotalChildren()));
    }));
    const onCheckboxGroupParentInput = T$1(async (e) => {
        e.preventDefault();
        const selfIsChecked = getSelfIsChecked(getPercentChecked(getTotalChecked(), getTotalChildren()));
        const nextChecked = (selfIsChecked === false ? "mixed" : selfIsChecked === "mixed" ? true : false);
        let willChangeAny = false;
        const promises = [];
        children.forEach(child => {
            if (child.checkboxInfo.checkboxChildType == "child")
                willChangeAny ||= (child.checkboxInfo.getChecked() != child.checkboxInfo.getLastUserChecked());
        });
        children.forEach(child => {
            if (child.checkboxInfo.checkboxChildType == "child") {
                const prevChecked = child.checkboxInfo.getChecked();
                let checked;
                if (nextChecked == "mixed") {
                    if (willChangeAny)
                        checked = (child.checkboxInfo.getLastUserChecked());
                    else
                        checked = true;
                }
                else {
                    checked = nextChecked;
                }
                if (checked != prevChecked) {
                    const promise = child.checkboxInfo.setCheckedFromParentInput(checked, e);
                    if (promise) {
                        promises.push(promise);
                    }
                }
            }
        });
        await Promise.all(promises);
    }, []);
    return {
        linearNavigationReturn,
        context: useMemoObject({
            ...context,
            checkboxGroupChildrenContext: useMemoObject({
                setUpdateIndex,
                allIds: allIds.current,
                setTotalChecked,
                setTotalChildren
            }),
            checkboxGroupParentContext: useMemoObject({
                setSetter,
                setSetParentCheckboxChecked,
                getPercentChecked,
                getTotalChecked,
                getTotalChildren,
                onCheckboxGroupParentInput,
            })
        }),
        childrenHaveFocusReturn,
        props,
        staggeredChildrenReturn,
        paginatedChildrenReturn,
        rearrangeableChildrenReturn,
        singleSelectionReturn,
        sortableChildrenReturn,
        managedChildrenReturn,
        rovingTabIndexReturn,
        typeaheadNavigationReturn
    };
}
/**
 * Implements the logic for the parent checkbox (but not the checkbox itself).
 *
 * @compositeParams
 */
function useCheckboxGroupParent({ context, info, textContentParameters }) {
    const { checkboxGroupParentContext: { setSetter, setSetParentCheckboxChecked, getPercentChecked, getTotalChecked, getTotalChildren, onCheckboxGroupParentInput } } = context;
    const { hasCurrentFocusReturn, managedChildReturn, pressParameters, textContentReturn, refElementReturn, propsChild, propsTabbable, paginatedChildReturn, rovingTabIndexChildReturn, staggeredChildReturn, singleSelectionChildReturn, } = useCompleteListNavigationChild({
        context,
        info: info,
        textContentParameters
    });
    const [ariaControls, setControls] = useState("");
    y(() => {
        setSetter(() => setControls);
    }, [setControls]);
    monitorCallCount(useCheckboxGroupParent);
    const [checked, setChecked] = useState(false);
    p(() => {
        setSetParentCheckboxChecked(() => setChecked);
    }, []);
    const checkboxGroupParentReturn = { checked, onParentCheckedChange: onCheckboxGroupParentInput, getPercent: useStableCallback(() => { return getPercentChecked(getTotalChecked(), getTotalChildren()); }) };
    return {
        checkboxGroupParentReturn,
        hasCurrentFocusReturn,
        managedChildReturn,
        textContentReturn,
        staggeredChildReturn,
        refElementReturn,
        propsChild: useMergedProps({ "aria-controls": ariaControls }, propsChild),
        propsTabbable,
        rovingTabIndexChildReturn,
        paginatedChildReturn,
        singleSelectionChildReturn,
        pressParameters
    };
}
/**
 * Implements the "child" part of a checkbox group.
 *
 * @remarks Does not implement any actual "checkbox" functionality,
 * but it does tell you what to do *with* a checkbox.
 *
 * (That is to say, use `onChildCheckedChange` whenever
 * your checkbox or checkbox-like thing changes, and
 * properly implement `onChangeFromParent` to work
 * properly when the parent changes)
 *
 * @compositeParams
 */
function useCheckboxGroupChild({ checkboxGroupChildParameters, context, info, textContentParameters, }) {
    const { checkboxGroupChildrenContext: { allIds, setUpdateIndex, setTotalChildren, setTotalChecked, } } = context;
    monitorCallCount(useCheckboxGroupChild);
    const { checked, onChangeFromParent, ...void1 } = checkboxGroupChildParameters;
    const getChecked = useStableGetter(checked);
    const [getLastUserChecked, setLastUserChecked] = usePassiveState(null, returnFalse);
    const onChildCheckedChange = useStableCallback((checked) => {
        setLastUserChecked(checked);
    });
    const onControlIdChanged = T$1((next, prev) => {
        if (prev)
            allIds.delete(prev);
        if (next)
            allIds.add(next);
        if (!!next || !!prev) {
            setUpdateIndex(i => ((i ?? 0) + 1));
        }
    }, []);
    p(() => {
        setTotalChildren(c => ((c ?? 0) + 1));
        return () => setTotalChildren(c => ((c ?? 0) - 1));
    }, []);
    p(() => {
        if (checked) {
            setTotalChecked(c => ((c ?? 0) + 1));
            return () => setTotalChecked(c => ((c ?? 0) - 1));
        }
    }, [checked]);
    const { hasCurrentFocusReturn, managedChildReturn, refElementReturn, textContentReturn, propsChild, propsTabbable, singleSelectionChildReturn: _singleSelectionChildReturn, staggeredChildReturn, paginatedChildReturn, rovingTabIndexChildReturn, pressParameters, ...void2 } = useCompleteListNavigationChild({
        info: { checkboxInfo: { checkboxChildType: "child", getLastUserChecked, getChecked, setCheckedFromParentInput: onChangeFromParent }, ...info },
        context,
        textContentParameters,
    });
    return {
        checkboxGroupChildReturn: {
            onChildCheckedChange,
            onControlIdChanged
        },
        textContentReturn,
        hasCurrentFocusReturn,
        managedChildReturn,
        staggeredChildReturn,
        paginatedChildReturn,
        refElementReturn,
        propsChild,
        propsTabbable,
        pressParameters,
        rovingTabIndexChildReturn,
    };
}

/**
 * @compositeParams
 */
function useLabel({ randomIdInputParameters, randomIdLabelParameters, labelParameters: { tagInput, tagLabel, ariaLabel, labelPosition, onLabelClick } }) {
    const nativeHTMLBehavior = (tagInput == "input" && tagLabel == "label" && labelPosition != "wrapping");
    const synthetic = !nativeHTMLBehavior;
    const { propsInput, propsLabel, randomIdInputReturn, randomIdLabelReturn } = useRandomDualIds({
        randomIdInputParameters: { ...randomIdInputParameters, otherReferencerProp: !synthetic && labelPosition === "separate" ? "for" : null },
        randomIdLabelParameters: { ...randomIdLabelParameters, otherReferencerProp: synthetic ? "aria-labelledby" : null },
    });
    const { refElementReturn, propsStable: propsRef } = useRefElement({ refElementParameters: {} });
    if (labelPosition == 'none') {
        // When we set the aria-label, intentionally clobber element-based labels (for example, in case they don't exist).
        propsInput["aria-label"] = (ariaLabel);
        propsInput["aria-labelledby"] = undefined;
        propsLabel["for"] = undefined;
    }
    const { pressReturn, props: propsPress } = usePress({ pressParameters: { excludeEnter: returnTrue, excludeSpace: returnTrue, onPressSync: onLabelClick, focusSelf: noop, allowRepeatPresses: false, excludePointer: null, longPressThreshold: null, onPressingChange: null }, refElementReturn });
    return {
        pressReturn,
        propsInput,
        propsLabel: useMergedProps(propsLabel, propsRef, propsPress),
        randomIdInputReturn,
        randomIdLabelReturn,
    };
}
/**
 * Shortcut for `useLabel` that assumes we're just never working with native HTML `input` and `label` elements. So for labelling guaranteably non-native elements.
 *
 * @compositeParams
 */
function useLabelSynthetic({ labelParameters: { ariaLabel, onLabelClick }, ...rest }) {
    monitorCallCount(useLabelSynthetic);
    return useLabel({
        labelParameters: {
            ariaLabel,
            labelPosition: ariaLabel == null ? "separate" : "none",
            tagInput: "div",
            tagLabel: "div",
            onLabelClick
        },
        ...rest
    });
}

function preventDefault(e) {
    e.preventDefault();
}
/**
 * Handles any component where there's:
 * ```md-literal
 * 1. Some kind of an on/off binary/trinary input element that needs event handlers
 * 2. Some kind of label for that input element
 * ```md-literal
 *
 * See also `useLabel` for when there's a label for a non-checkbox-like component.
 *
 * @compositeParams
 */
function useCheckboxLike({ labelParameters, randomIdInputParameters, randomIdLabelParameters, checkboxLikeParameters: { checked, disabled, onInput: onInputSync, role, ...void1 }, refElementInputReturn, refElementLabelReturn, pressParameters: { excludeSpace, longPressThreshold, ...void2 }, ...void3 }) {
    monitorCallCount(useCheckboxLike);
    const { getElement: getInputElement } = refElementInputReturn;
    const { getElement: getLabelElement } = refElementLabelReturn;
    const { tagInput, tagLabel, labelPosition } = labelParameters;
    // onClick and onChange are a bit messy, so we need to
    // *always* make sure that the visible state is correct
    // after all the event dust settles.
    // See https://github.com/preactjs/preact/issues/2745,
    // and https://github.com/preactjs/preact/issues/1899#issuecomment-525690194
    p(() => {
        const element = getInputElement();
        if (element && tagInput == "input") {
            element.indeterminate = (checked === "mixed");
            element.checked = (checked === true);
        }
    }, [tagInput, (checked ?? false)]);
    const { randomIdInputReturn, randomIdLabelReturn, propsInput, propsLabel, pressReturn } = useLabel({
        labelParameters: {
            ...labelParameters,
            onLabelClick: useStableCallback((e) => {
                if (!disabled && tagInput != "input" && tagLabel != "label" && labelPosition != "separate") {
                    focusSelf();
                    onInputSync(e);
                }
            })
        },
        randomIdInputParameters,
        randomIdLabelParameters,
    });
    const focusSelf = useStableCallback(() => {
        let elementToFocus = null;
        if (labelPosition == "wrapping")
            elementToFocus = getLabelElement();
        else
            elementToFocus = getInputElement();
        focus(elementToFocus);
    });
    const onClickInputSync = (labelPosition == "wrapping" ? undefined : onInputSync);
    const onClickLabelSync = onInputSync;
    const { pressReturn: pressInputReturn, props: propsPressInput } = usePress({ pressParameters: { excludeSpace, allowRepeatPresses: false, excludeEnter: null, excludePointer: null, longPressThreshold, onPressingChange: null, focusSelf, onPressSync: (disabled) ? undefined : onClickInputSync }, refElementReturn: refElementInputReturn });
    const { pressReturn: pressLabelReturn, props: propsPressLabel } = usePress({ pressParameters: { excludeSpace, allowRepeatPresses: false, excludeEnter: null, excludePointer: null, longPressThreshold, onPressingChange: null, focusSelf, onPressSync: (disabled) ? undefined : onClickLabelSync }, refElementReturn: refElementLabelReturn });
    const propsUnstableInput = {};
    const propsUnstableLabel = {};
    // Make sure that label clicks can't affect the visual state of the checkbox
    propsUnstableInput.onClick = preventDefault;
    propsUnstableLabel.onClick = preventDefault;
    propsUnstableInput.onInput = preventDefault;
    propsUnstableInput.onChange = preventDefault;
    propsUnstableInput.type = role == "radio" ? "radio" : "checkbox";
    switch (labelPosition) {
        case "none":
        case "separate": {
            if (tagInput == "input") {
                // Even in the most default input behavior, we still need to handle
                // special abstraction over checked="mixed" and disabled="soft"
                propsUnstableInput.checked = (checked === true);
                if (disabled === true || disabled === 'hard')
                    propsUnstableInput.disabled = true;
                else if (disabled == "soft")
                    propsUnstableInput["aria-disabled"] = "true";
            }
            else {
                // div inputs need their various ARIA roles and properties
                propsUnstableInput.role = role;
                propsUnstableInput.tabIndex = 0;
                propsUnstableInput["aria-checked"] = (checked ?? false);
                propsUnstableInput["aria-disabled"] = (!!disabled);
            }
            break;
        }
        case "wrapping": {
            if (tagInput == "input") {
                // For form submission and styling
                propsUnstableInput.checked = (checked === true);
                propsUnstableInput.disabled = (disabled === true);
                // Because the wrapped label handles all interactions,
                // we need to make sure this element can't be interacted with
                // even if it's an input element.
                propsUnstableInput.inert = true;
                propsUnstableInput.tabIndex = -1;
                propsUnstableInput.role = "presentation";
                propsUnstableInput["aria-hidden"] = "true";
                propsUnstableInput.onFocus = _ => focus(getLabelElement?.());
            }
            // Wrapping labels are the actual inputs that are interacted with
            // And are very similar conceptually to div inputs when separated
            propsUnstableLabel.role = role;
            propsUnstableLabel.tabIndex = 0;
            propsUnstableLabel["aria-checked"] = (checked ?? false);
            propsUnstableLabel["aria-disabled"] = (!!disabled);
            break;
        }
    }
    return {
        randomIdInputReturn,
        randomIdLabelReturn,
        pressInputReturn,
        pressLabelReturn,
        checkboxLikeInputReturn: { propsUnstable: propsUnstableInput },
        checkboxLikeLabelReturn: { propsUnstable: propsUnstableLabel },
        propsInput: useMergedProps(propsInput, propsUnstableInput, propsPressInput),
        propsLabel: useMergedProps(propsLabel, propsUnstableLabel, propsPressLabel),
        checkboxLikeReturn: { focusSelf },
        pressReturn
    };
}

/**
 * Implements a [Checkbox](https://www.w3.org/WAI/ARIA/apg/patterns/checkbox/) pattern.
 *
 * @compositeParams
 */
function useCheckbox({ checkboxParameters: { onCheckedChange }, checkboxLikeParameters, labelParameters, pressParameters }) {
    monitorCallCount(useCheckbox);
    const { tagInput, labelPosition } = labelParameters;
    const { checked } = checkboxLikeParameters;
    const { refElementReturn: refElementInputReturn, propsStable: propsRefInput } = useRefElement({});
    const { refElementReturn: refElementLabelReturn, propsStable: propsRefLabel } = useRefElement({});
    const onInputEnhanced = useStableCallback((e) => onCheckedChange?.(enhanceEvent(e, { checked: !checked })));
    const { propsInput, propsLabel, ...ret } = useCheckboxLike({
        randomIdInputParameters: { prefix: Prefices.checkboxLikeInput },
        randomIdLabelParameters: { prefix: Prefices.checkboxLikeLabel },
        refElementInputReturn,
        refElementLabelReturn,
        checkboxLikeParameters: { role: "checkbox", onInput: onInputEnhanced, ...checkboxLikeParameters },
        pressParameters,
        labelParameters
    });
    return {
        checkboxReturn: { propsUnstable: { type: (tagInput == "input" && labelPosition != "wrapping" ? "checkbox" : undefined) } },
        propsInput: useMergedProps(propsInput, propsRefInput),
        propsLabel: useMergedProps(propsLabel, propsRefLabel),
        ...ret
    };
}

/**
 * Implements a [Dialog](https://www.w3.org/WAI/ARIA/apg/patterns/dialog/) pattern.
 *
 * @compositeParams
 */
function useDialog({ dismissParameters, escapeDismissParameters, focusTrapParameters, labelParameters }) {
    monitorCallCount(useDialog);
    const { propsFocusContainer, propsStablePopup, propsStableSource, refElementPopupReturn, refElementSourceReturn } = useModal({
        dismissParameters: { closeOnLostFocus: false, ...dismissParameters },
        escapeDismissParameters,
        focusTrapParameters: { trapActive: true, onlyMoveFocus: false, ...focusTrapParameters }
    });
    const { propsInput, propsLabel } = useLabelSynthetic({
        labelParameters: {
            ...labelParameters, onLabelClick: useStableCallback(() => {
                const e = refElementPopupReturn.getElement();
                focusTrapParameters.focusPopup(e, () => findFirstFocusable(e));
            })
        },
        randomIdInputParameters: { prefix: Prefices.dialog },
        randomIdLabelParameters: { prefix: Prefices.dialogTitle }
    });
    return {
        propsFocusContainer,
        propsDialog: useMergedProps(propsStablePopup, propsInput),
        propsSource: { ...propsStableSource },
        propsTitle: propsLabel,
        refElementPopupReturn,
        refElementSourceReturn
    };
}

/**
 * Implements a drawer, which is a specific kind of [Dialog](https://www.w3.org/WAI/ARIA/apg/patterns/dialog/).
 *
 * @compositeParams
 */
function useDrawer({ dismissParameters, escapeDismissParameters, focusTrapParameters, labelParameters }) {
    monitorCallCount(useDrawer);
    const { propsFocusContainer, propsStablePopup, propsStableSource, refElementPopupReturn, refElementSourceReturn } = useModal({
        dismissParameters,
        escapeDismissParameters,
        focusTrapParameters: { onlyMoveFocus: false, ...focusTrapParameters }
    });
    const { propsInput, propsLabel, } = useLabelSynthetic({
        labelParameters: {
            ...labelParameters, onLabelClick: useStableCallback(() => {
                const e = refElementPopupReturn.getElement();
                focusTrapParameters.focusPopup(e, () => findFirstFocusable(e));
            })
        },
        randomIdInputParameters: { prefix: Prefices.drawer },
        randomIdLabelParameters: { prefix: Prefices.drawerTitle }
    });
    return {
        propsFocusContainer,
        propsDrawer: useMergedProps(propsStablePopup, propsInput),
        propsTitle: propsLabel,
        propsSource: { ...propsStableSource },
        refElementPopupReturn,
        refElementSourceReturn
    };
}

/**
 * Implements a gridlist, which is a hybrid of a [Listbox](https://www.w3.org/WAI/ARIA/apg/patterns/listbox/) and a [Grid](https://www.w3.org/WAI/ARIA/apg/patterns/grid/).
 *
 * @remarks A Listbox is a very limited structure, essentially being just a list with no further interactive content allowed.
 *
 * If you need a list where each list item has a menu or a button or other non-text content, a Gridlist is probably what you want.
 *
 * @compositeParams
 *
 * @hasChild {@link useGridlistRow}
 * @hasChild {@link useGridlistCell}
 */
function useGridlist({ labelParameters, listboxParameters: { selectionLimit, groupingType, selectedIndex, onSelectedIndexChange }, rovingTabIndexParameters, ...restParams }) {
    monitorCallCount(useGridlist);
    const { propsInput: propsLabelList, propsLabel: propsLabelLabel, randomIdInputReturn: { id: _gridlistId }, randomIdLabelReturn: { id: _labelId } } = useLabelSynthetic({
        labelParameters: {
            ...labelParameters,
            onLabelClick: useStableCallback(() => {
                rovingTabIndexReturn.focusSelf();
            })
        },
        randomIdInputParameters: { prefix: Prefices.gridlist },
        randomIdLabelParameters: { prefix: Prefices.gridlistLabel }
    });
    const { context, props, rovingTabIndexReturn, singleSelectionReturn, ...restRet } = useCompleteGridNavigationDeclarative({
        singleSelectionDeclarativeParameters: { selectedIndex: selectedIndex, onSelectedIndexChange },
        rovingTabIndexParameters: { ...rovingTabIndexParameters, focusSelfParent: focus },
        ...restParams
    });
    let propsGridlist = useMergedProps(props, propsLabelList, { "aria-multiselectable": (selectionLimit == "multi" ? "true" : undefined) });
    let fullContext = useMemoObject({
        ...context,
        gridlistRowContext: useMemoObject({
            selectionLimit
        })
    });
    if (groupingType == "group")
        propsGridlist.role = "group";
    else if (groupingType == "with-groups") {
        // Intentionally clobbering all the list navigation stuff.
        propsGridlist = { role: "grid" };
        // ...actually, context too while we're at it.
        fullContext = null;
    }
    else {
        propsGridlist.role = "grid";
    }
    if (selectionLimit == "multi")
        console.assert(singleSelectionReturn.getSelectedIndex() == null);
    return {
        context: fullContext,
        rovingTabIndexReturn,
        propsGridlist,
        propsGridlistLabel: propsLabelLabel,
        ...restRet
    };
}
/**
 * @compositeParams
 *
 */
function useGridlistRow({ gridlistRowParameters: { selected }, linearNavigationParameters, context: cx1, info, rovingTabIndexParameters, textContentParameters, typeaheadNavigationParameters, ...void1 }) {
    monitorCallCount(useGridlistRow);
    const { gridlistRowContext: { selectionLimit } } = cx1;
    const { context: cx2, hasCurrentFocusReturn, linearNavigationReturn, managedChildReturn, managedChildrenReturn, paginatedChildReturn, props, rovingTabIndexChildReturn, rovingTabIndexReturn, singleSelectionChildReturn, staggeredChildReturn, textContentReturn, typeaheadNavigationReturn, pressParameters, ...void2 } = useCompleteGridNavigationRow({
        linearNavigationParameters,
        info,
        context: cx1,
        rovingTabIndexParameters,
        textContentParameters,
        typeaheadNavigationParameters,
    });
    // `selected` should only be true/false for multi-selection
    if (selectionLimit != "multi")
        console.assert(selected == null);
    props.role = "row";
    return {
        pressParameters,
        linearNavigationReturn,
        managedChildrenReturn,
        managedChildReturn,
        paginatedChildReturn,
        rovingTabIndexChildReturn,
        rovingTabIndexReturn,
        singleSelectionChildReturn,
        staggeredChildReturn,
        textContentReturn,
        typeaheadNavigationReturn,
        context: cx2,
        hasCurrentFocusReturn,
        props
    };
}
/**
 * @compositeParams
 *
 */
function useGridlistCell({ pressParameters: { onPressSync, longPressThreshold, onPressingChange, ...void1 }, ...p }) {
    monitorCallCount(useGridlistCell);
    const { props, ...info } = useCompleteGridNavigationCell(p);
    const { pressReturn, props: propsPress } = usePress({
        pressParameters: { onPressSync, focusSelf: p.info.focusSelf, allowRepeatPresses: false, excludeEnter: null, excludePointer: null, excludeSpace: info.pressParameters.excludeSpace, longPressThreshold, onPressingChange },
        refElementReturn: info.refElementReturn
    });
    return {
        ...info,
        propsPress,
        propsCell: { role: "gridcell" },
        propsTabbable: props,
        pressReturn
    };
}
/*interface UseGridlistSectionParameters {
    gridlistSectionParameters: {
        compareRows: (lhsIndex: number, rhsIndex: number) => number;
    }
    gridlistSectionContext: {

    }
}*/

/**
 * Implements a [Listbox](https://www.w3.org/WAI/ARIA/apg/patterns/listbox/) pattern.
 *
 * @remarks A listbox is a very limited widget and its items cannot contain interactive or non-text content.
 *
 * @see {@link useGridlist} for a more capable list widget.
 *
 * @compositeParams
 *
 * @hasChild {@link useListboxItem}
 */
function useListbox({ labelParameters, listboxParameters: { selectionLimit, groupingType, selectedIndex, onSelectedIndexChange, orientation }, linearNavigationParameters, singleSelectionParameters: { ariaPropName, selectionMode }, rovingTabIndexParameters, ...restParams }) {
    monitorCallCount(useListbox);
    useEnsureStability("useListbox", selectionLimit);
    const { propsInput: propsLabelList, propsLabel: propsLabelLabel, randomIdInputReturn: { id: _inputId }, randomIdLabelReturn: { id: _labelId } } = useLabelSynthetic({
        labelParameters: {
            ...labelParameters,
            onLabelClick: useStableCallback(() => {
                rovingTabIndexReturn.focusSelf();
            })
        },
        randomIdInputParameters: { prefix: Prefices.listbox },
        randomIdLabelParameters: { prefix: Prefices.listboxLabel }
    });
    let { context, props: { ...props }, rovingTabIndexReturn, singleSelectionReturn, ...restRet } = useCompleteListNavigationDeclarative({
        rovingTabIndexParameters: { ...rovingTabIndexParameters, focusSelfParent: focus },
        singleSelectionDeclarativeParameters: { selectedIndex, onSelectedIndexChange },
        singleSelectionParameters: { ariaPropName: ariaPropName || "aria-selected", selectionMode: selectionMode },
        linearNavigationParameters: { arrowKeyDirection: orientation, ...linearNavigationParameters },
        ...restParams
    });
    if (groupingType == "group")
        props.role = "group";
    else if (groupingType == "with-groups") {
        // Intentionally clobbering all the list navigation stuff.
        props = { role: "listbox" };
        // ...actually, context too while we're at it.
        context = null;
    }
    else {
        props.role = "listbox";
    }
    if (selectionLimit == "multi")
        console.assert(singleSelectionReturn.getSelectedIndex() == null);
    return {
        ...restRet,
        context: useMemoObject({
            ...context,
            listboxContext: useMemoObject({
                selectionLimit
            })
        }),
        rovingTabIndexReturn,
        propsListbox: useMergedProps(props, propsLabelList, { "aria-multiselectable": (selectionLimit == "multi" ? "true" : undefined) }),
        propsListboxLabel: propsLabelLabel
    };
}
/**
 * @compositeParams
 */
function useListboxItem({ context: { listboxContext: { selectionLimit }, ...context }, listboxParameters: { selected, onMultiSelect }, pressParameters: { focusSelf, allowRepeatPresses, excludeEnter, excludePointer, longPressThreshold, onPressingChange, ...void1 }, ...restParams }) {
    monitorCallCount(useListboxItem);
    const { propsChild, propsTabbable, refElementReturn, pressParameters: { onPressSync, excludeSpace, ...void2 }, ...restRet } = useCompleteListNavigationChild({
        context,
        ...restParams
    });
    if (selectionLimit == "single")
        console.assert(selected == null);
    propsChild.role = "option";
    propsChild["aria-disabled"] = restParams.info.unselectable ? "true" : undefined;
    const { pressReturn, props: propsPress } = usePress({
        refElementReturn, pressParameters: {
            focusSelf,
            onPressSync: useStableCallback((e) => {
                onPressSync?.(e);
                if (selectionLimit == "multi")
                    onMultiSelect?.(enhanceEvent(e, { selected: !selected }));
            }),
            excludeSpace,
            allowRepeatPresses,
            excludeEnter,
            excludePointer,
            longPressThreshold,
            onPressingChange
        }
    });
    return {
        pressReturn,
        refElementReturn,
        props: useMergedProps(propsChild, propsTabbable, propsPress),
        ...restRet
    };
}

/**
 * A menu surface is what handles user interaction with an interactive but transient surface (like a menu or a popup).
 *
 * @remarks The keyboard (etc.) interactions are shared among a lot of widgets, and the opening button has some ARIA properties that need setting.
 *
 * Related to menus, which are a menu contained within a menu surface. Not related to menubars -- menus contain menubars, but not all menubars are contained within a menu or its surface.
 *
 * @compositeParams
 */
function useMenuSurface({ dismissParameters, escapeDismissParameters, focusTrapParameters, menuSurfaceParameters: { role, surfaceId, ...void1 }, ...void2 }) {
    monitorCallCount(useMenuSurface);
    const { refElementReturn: { getElement: getButtonElement }, propsStable: propsRefTrigger, ...void4 } = useRefElement({ refElementParameters: { onElementChange: undefined } });
    const { refElementReturn: { getElement: getMenuElement, ...void5 }, propsStable: propsRefSurface, ...void6 } = useRefElement({ refElementParameters: { onElementChange: undefined } });
    const { propsFocusContainer, propsStablePopup: propsPopup, propsStableSource: ps2, refElementPopupReturn, refElementSourceReturn } = useModal({
        dismissParameters,
        escapeDismissParameters,
        focusTrapParameters: {
            onlyMoveFocus: true,
            trapActive: true,
            focusOpener: useStableCallback(() => {
                const buttonElement = getButtonElement();
                focus(buttonElement);
            }),
            ...focusTrapParameters
        }
    });
    const propsSurface = useMergedProps(propsRefSurface, propsPopup, propsFocusContainer);
    const propsTarget = useMergedProps({
        role,
        id: surfaceId
    });
    const propsTrigger = useMergedProps({
        "aria-expanded": (dismissParameters.open),
        "aria-haspopup": role,
    }, propsRefTrigger, ps2, { "aria-controls": surfaceId });
    const propsSentinel = useFocusSentinel({
        focusSentinel: {
            sendFocusToMenu: T$1(() => { return focusTrapParameters.focusPopup(getMenuElement(), () => findFirstFocusable(getMenuElement())); }, []),
            onClose: T$1(() => { dismissParameters.onClose("lost-focus"); }, [dismissParameters.onClose]),
            open: dismissParameters.open
        }
    });
    return {
        propsSentinel,
        propsSurface,
        propsTarget,
        propsTrigger,
        refElementPopupReturn,
        refElementSourceReturn
    };
}
/**
 * A focus sentinal is a hidden but focusable element that comes at the start or end
 * of the out-of-place-focusable component that, when activated or focused over, closes the component
 * (if focused within 100ms of the open prop changing, instead of
 * closing, focusing the sentinel immediately asks it to focus itself).
 * This exists for things like menus which can have focus but also need a way to return
 * to whatever out-of-place parent they came from when naturally tabbed out of (as opposed
 * to dialogs which loop back around when tabbed out of). While mouse users can click out of a menu
 * and keyboard users can escape to close a menu, screen readers and other input methods
 * that don't use those two would become stuck.
 *
 * @compositeParams
 */
function useFocusSentinel({ focusSentinel: { open, onClose, sendFocusToMenu } }) {
    monitorCallCount(useFocusSentinel);
    const getSendFocusWithinMenu = useStableGetter(sendFocusToMenu);
    const stableOnClose = useStableCallback(onClose);
    const [sentinelIsActive, setSentinelIsActive] = useState(false);
    useTimeout({ callback: () => { setSentinelIsActive(open); }, timeout: 100, triggerIndex: `${open}-${sentinelIsActive}` });
    const onFocus = sentinelIsActive ? (() => stableOnClose()) : (() => getSendFocusWithinMenu()?.());
    const onClick = () => stableOnClose();
    return {
        tabIndex: sentinelIsActive ? 0 : -1,
        onFocus,
        onClick
    };
}

/**
 * Implements a [Toolbar](https://www.w3.org/WAI/ARIA/apg/patterns/toolbar/) pattern.
 *
 * @remarks A toolbar is just a collection of widgets in an expected order with a label (visible or hidden) and with the usual keyboard navigation stuff.
 *
 * The main difference between a toolbar and a menubar is that a menubar contains purely static menuitems,
 * but a toolbar is the more general case, being able to contain anything at all.
 * A menubar is implemented as a special case of a toolbar, and a menu is implemented as a specialized menubar.
 *
 * Either way, be sure to specify the role and orientation this toolbar has (role=toolbar if you're using this as an actual toolbar).
 *
 * @compositeParams
 */
function useToolbar({ linearNavigationParameters, toolbarParameters: { orientation, role, selectedIndex, onSelectedIndexChange, disabled }, labelParameters, rovingTabIndexParameters, ...listNavParameters }) {
    monitorCallCount(useToolbar);
    const { context, props, ...listNavReturn } = useCompleteListNavigationDeclarative({
        ...listNavParameters,
        rovingTabIndexParameters: { ...rovingTabIndexParameters, untabbable: disabled, focusSelfParent: focus },
        singleSelectionDeclarativeParameters: { selectedIndex, onSelectedIndexChange: disabled ? null : onSelectedIndexChange },
        paginatedChildrenParameters: { paginationMax: null, paginationMin: null },
        linearNavigationParameters: { ...linearNavigationParameters, arrowKeyDirection: orientation },
    });
    const { propsInput: propsToolbar, propsLabel, randomIdInputReturn, randomIdLabelReturn } = useLabelSynthetic({
        labelParameters: { ...labelParameters, onLabelClick: listNavReturn.rovingTabIndexReturn.focusSelf },
        randomIdInputParameters: { prefix: Prefices.toolbar },
        randomIdLabelParameters: { prefix: Prefices.toolbarLabel }
    });
    // Note: We return tabIndex=-1 (when not disabled) because some browsers (at least Firefox) seem to add role=toolbar to the tab order?
    // Probably needs a bit more digging because this feels like a bit of a blunt fix.
    return {
        context: useMemoObject({ ...context, toolbarContext: useMemoObject({}) }),
        propsLabel,
        propsToolbar: useMergedProps({
            ...propsToolbar,
            role: role ?? undefined,
            tabIndex: disabled ? 0 : -1,
            "aria-disabled": disabled ? "true" : undefined
        }, props),
        randomIdInputReturn,
        randomIdLabelReturn,
        ...listNavReturn
    };
}
/**
 * @compositeParams
 */
function useToolbarChild({ info, toolbarChildParameters: { disabledProp }, ...args }) {
    monitorCallCount(useToolbarChild);
    const { propsChild, propsTabbable, ...listNavReturn } = useCompleteListNavigationChild({ info, ...args });
    return {
        propsChild: useMergedProps(propsChild, { [disabledProp]: info.unselectable ? true : undefined }),
        propsTabbable,
        ...listNavReturn
    };
}

/**
 * Implements a [Menubar](https://www.w3.org/WAI/ARIA/apg/patterns/menubar/) pattern.
 *
 * @remarks A menubar is identical to a toolbar, except that every item
 * in a menubar is a menuitem (or similar) and has some sort of
 * role and action when pressed besides just single selection (if applicable).
 *
 * (A toolbar child won't have a defined role, but every menubar child will)
 *
 * @compositeParams
 */
function useMenubar(args) {
    monitorCallCount(useMenubar);
    const { propsToolbar: propsMenubar, ...restReturn } = useToolbar(args);
    return {
        propsMenubar,
        ...restReturn
    };
}
/**
 * @compositeParams
 */
function useMenubarChild({ menuItemParameters: { onPress: opu, role }, pressParameters: { onPressingChange, ...void1 }, ...restParams }) {
    monitorCallCount(useMenubarChild);
    const focusSelf = T$1((e) => focus(e), []);
    const { propsChild, propsTabbable, pressParameters: { onPressSync, excludeSpace }, ...restRet } = useToolbarChild({
        ...restParams,
        toolbarChildParameters: { disabledProp: "aria-disabled" }
    });
    const { pressReturn, props: propsPress } = usePress({
        pressParameters: {
            focusSelf,
            excludeSpace,
            onPressSync: useStableCallback((e) => {
                onPressSync?.(e);
                opu?.(e);
            }),
            allowRepeatPresses: false,
            excludeEnter: returnFalse,
            excludePointer: returnFalse,
            longPressThreshold: null,
            onPressingChange
        }, refElementReturn: restRet.refElementReturn
    });
    propsChild.role = role;
    return {
        props: useMergedProps(propsChild, propsTabbable, propsPress),
        pressReturn,
        ...restRet
    };
}

/**
 * Implements the [Menu](https://www.w3.org/WAI/ARIA/apg/patterns/menubar/) and [Menu Button](https://www.w3.org/WAI/ARIA/apg/patterns/menu-button/) patterns.
 *
 * @remarks A menu is a specialization of a menubar (something that handles navigation among a set of menuitems)
 * and a menu surface (something that handles moving focus to/from an unrelated area of the page).
 *
 * Additionally, pressing the arrow key that corresponds to the direction that the menu opens
 * in will open it.
 *
 * @compositeParams
 */
function useMenu({ dismissParameters, escapeDismissParameters, menuParameters: { openDirection, onOpen }, menuSurfaceParameters, toolbarParameters, ...restParams }) {
    monitorCallCount(useMenu);
    const { context, propsLabel: propsButtonAsMenuLabel, propsMenubar, randomIdInputReturn, rovingTabIndexReturn, ...restRet } = useMenubar({
        toolbarParameters: { role: "menu", ...toolbarParameters },
        labelParameters: { ariaLabel: null },
        ...restParams
    });
    const onKeyDown = useStableCallback((e) => {
        const isOpen = dismissParameters.open;
        if (!isOpen) {
            switch (e.key) {
                case "ArrowUp": {
                    if (openDirection == 'up') {
                        onOpen();
                        e.preventDefault();
                        e.stopPropagation();
                    }
                    break;
                }
                case "ArrowDown": {
                    if (openDirection == 'down') {
                        onOpen();
                        e.preventDefault();
                        e.stopPropagation();
                    }
                    break;
                }
                case "ArrowLeft": {
                    if (openDirection == 'left') {
                        onOpen();
                        e.preventDefault();
                        e.stopPropagation();
                    }
                    break;
                }
                case "ArrowRight": {
                    if (openDirection == 'right') {
                        onOpen();
                        e.preventDefault();
                        e.stopPropagation();
                    }
                    break;
                }
            }
        }
    });
    const { propsTarget, propsTrigger, refElementSourceReturn, ...restRet2 } = useMenuSurface({
        menuSurfaceParameters: {
            ...menuSurfaceParameters,
            surfaceId: randomIdInputReturn.id,
            role: "menu",
        },
        dismissParameters,
        escapeDismissParameters,
        focusTrapParameters: {
            focusPopup: () => { rovingTabIndexReturn.focusSelf(); }
        }
    });
    return {
        ...restRet,
        ...restRet2,
        context: useMemoObject({
            ...context,
            menu: useMemoObject({
                closeFromMenuItemClicked: useStableCallback(() => {
                    dismissParameters.onClose("item-clicked");
                })
            })
        }),
        refElementSourceReturn,
        rovingTabIndexReturn,
        randomIdInputReturn,
        propsTarget: useMergedProps(propsTarget, propsMenubar),
        propsTrigger: useMergedProps({ onKeyDown }, propsTrigger, propsButtonAsMenuLabel),
    };
}
/**
 * @compositeParams
 */
function useMenuItem(p) {
    monitorCallCount(useMenuItem);
    const ret = useMenubarChild(p);
    return {
        ...ret,
        menuItemReturn: { closeMenu: p.context.menu.closeFromMenuItemClicked }
    };
}

const NotificationProviderContext = createContext(null);
/**
 * Allows children to send notifications to a screen reader or other assistive technology.
 *
 * Please note that because some devices only check for `aria-live` regions *once* on page load,
 * they cannot be created dynamically. You must pass the ID of the **already-existing** elements to use (or the elements themselves).
 *
 * One *must* have `aria-live=polite` and one *must* have `aria-live=assertive`, but there aren't really any other requirements.
 * They shouldn't be visible, I suppose.
 *
 * @compositeParams
 *
 * @hasChild {@link useNotify}
 */
function useNotificationProvider({ targetAssertive, targetPolite }) {
    monitorCallCount(useNotificationProvider);
    const { children: childrenPolite, pushChild: notifyPolite, portalElement: politeElement } = usePortalChildren({ target: targetPolite });
    const { children: childrenAssertive, pushChild: notifyAssertive, portalElement: assertiveElement } = usePortalChildren({ target: targetAssertive });
    console.assert(politeElement?.getAttribute("aria-live") == "polite");
    console.assert(assertiveElement?.getAttribute("aria-live") == "assertive");
    const notify = T$1((mode, child) => {
        return mode == "assertive" ? notifyAssertive(child) : notifyPolite(child);
    }, [notifyAssertive, notifyPolite]);
    return {
        notify,
        context: F$1(() => ({ notify }), [notify]),
        children: (o$1(_$2, { children: [childrenPolite, childrenAssertive] }))
    };
}
function useNotify() {
    monitorCallCount(useNotify);
    return useContextWithWarning(NotificationProviderContext, "notification provider").notify;
}

/**
 * Provides the attributes and roles for a progress bar.
 *
 * @compositeParams
 */
function useProgress({ labelParameters, progressIndicatorParameters: { max, value, valueText, tagIndicator, ...void1 }, ...void2 }) {
    monitorCallCount(useProgress);
    const { propsInput, propsLabel, randomIdInputReturn, randomIdLabelReturn, pressReturn, ...void3 } = useLabelSynthetic({
        labelParameters: { ...labelParameters, onLabelClick: null },
        randomIdInputParameters: { prefix: Prefices.progressIndicator },
        randomIdLabelParameters: { prefix: Prefices.progressLabel }
    });
    // This isn't an input in the usual sense -- it's not tabbable.
    // TODO: Make this an option in the hook itself
    propsInput.tabIndex = -1;
    const busy = value && value != "disabled"; //value == "disabled" || !value? false : true;// (!!value);
    const disabled = (value == "disabled");
    if (typeof value != "number") {
        value = null;
        max ??= 100;
    }
    const indicatorProps = tagIndicator === "progress" ?
        {
            max,
            value: (value ?? undefined),
            "aria-valuemin": 0,
            "aria-valuenow": value == null ? undefined : value,
        }
        :
            {
                "aria-valuemin": 0,
                "aria-valuemax": max == null ? undefined : max,
                "aria-valuetext": valueText == null ? undefined : `${valueText}`,
                "aria-valuenow": value == null ? undefined : value,
                role: "progressbar"
            };
    if (disabled) {
        indicatorProps["aria-hidden"] = true;
    }
    const labelProps = {
        "aria-hidden": (!busy ? "true" : undefined)
    };
    const regionProps = {
        "aria-busy": !!(busy),
        "aria-describedby": randomIdInputReturn.id
    };
    return {
        propsIndicator: useMergedProps(indicatorProps, propsInput),
        propsLabel: useMergedProps(labelProps, propsLabel),
        propsRegion: regionProps,
        randomIdInputReturn,
        randomIdLabelReturn,
        pressReturn,
    };
}
/**
 * Provides props for a progress bar based on the progress of an async event handler.
 *
 * @compositeParams
 */
function useProgressWithHandler({ labelParameters, progressIndicatorParameters, asyncHandlerParameters, progressWithHandlerParameters: { forciblyPending } }) {
    monitorCallCount(useProgressWithHandler);
    const asyncInfo = useAsyncHandler(asyncHandlerParameters);
    const { propsIndicator, propsLabel, propsRegion } = useProgress({
        labelParameters,
        progressIndicatorParameters: {
            max: 1,
            value: (forciblyPending || asyncInfo.pending) ? "indeterminate" : "disabled",
            valueText: null,
            ...progressIndicatorParameters
        },
    });
    return {
        propsIndicator,
        propsLabel,
        propsRegion,
        asyncHandlerReturn: asyncInfo
    };
}

/**
 * Implements a [Radio Group](https://www.w3.org/WAI/ARIA/apg/patterns/radio/) pattern.
 *
 * @compositeParams
 *
 * @hasChild {@link useRadio}
 */
function useRadioGroup({ labelParameters, radioGroupParameters: { name, onSelectedValueChange, selectedValue }, rovingTabIndexParameters, ...restParams }) {
    monitorCallCount(useRadioGroup);
    const [selectedIndex, setSelectedIndex] = useState(null);
    const nameToIndex = _(new Map());
    const indexToName = _(new Map());
    const { propsInput: propsGroup1, propsLabel } = useLabelSynthetic({
        labelParameters: {
            onLabelClick: useStableCallback(() => {
                rovingTabIndexReturn.focusSelf();
            }),
            ...labelParameters
        },
        randomIdLabelParameters: { prefix: Prefices.radioGroupLabel, },
        randomIdInputParameters: { prefix: Prefices.radioGroup }
    });
    y(() => {
        if (selectedValue != null)
            singleSelectionReturn.changeSelectedIndex(nameToIndex.current.get(selectedValue) ?? null);
        else
            singleSelectionReturn.changeSelectedIndex(null);
    }, [selectedValue]);
    const { context, props: propsGroup2, singleSelectionReturn, managedChildrenReturn, rovingTabIndexReturn, ...restRet } = useCompleteListNavigation({
        singleSelectionParameters: { initiallySelectedIndex: selectedIndex, onSelectedIndexChange: useStableCallback((e) => { setSelectedIndex(e[EventDetail].selectedIndex); onSelectedIndexChange?.(e); }), selectionMode: "focus", ariaPropName: null },
        paginatedChildrenParameters: { paginationMin: null, paginationMax: null },
        rovingTabIndexParameters: { ...rovingTabIndexParameters, focusSelfParent: focus },
        ...restParams
    });
    const { singleSelectionParameters: { onSelectedIndexChange } } = useSingleSelectionDeclarative({
        singleSelectionReturn: {
            changeSelectedIndex: useStableCallback((s, r) => {
                singleSelectionReturn.changeSelectedIndex(s, r);
                /*let next = typeof s == "function" ? s(selectedIndex) : s;
                if (next != null) {
                    const nextValue = indexToName.current.get(next); //managedChildrenReturn.getChildren().getAt(next)?.getValue2();
                    onSelectedValueChange(nextValue as V, r);
                }
                else {
                    onSelectedValueChange(null, r);
                }*/
            })
        },
        singleSelectionDeclarativeParameters: {
            selectedIndex,
            onSelectedIndexChange: useStableCallback((e) => {
                let i = e[EventDetail].selectedIndex;
                let value = i == undefined ? undefined : indexToName.current.get(i);
                onSelectedValueChange?.(enhanceEvent(e, { selectedValue: value }));
            })
        }
    });
    const propsRadioGroup = useMergedProps(propsGroup1, propsGroup2, { role: "radiogroup" });
    return {
        propsRadioGroup,
        propsRadioGroupLabel: propsLabel,
        rovingTabIndexReturn,
        context: F$1(() => ({
            ...context,
            radioContext: { name, indexToName: indexToName.current, nameToIndex: nameToIndex.current }
        }), [name]),
        managedChildrenReturn,
        radioGroupReturn: { selectedIndex },
        singleSelectionReturn,
        ...restRet,
    };
}
/**
 * @compositeParams
 */
function useRadio({ radioParameters: { value }, checkboxLikeParameters: { disabled }, labelParameters, info, context, textContentParameters, pressParameters: { longPressThreshold, ...void3 }, ...void1 }) {
    monitorCallCount(useRadio);
    const index = info.index;
    const onInput = useStableCallback((e) => {
        onPressSync?.(e);
    });
    const { name, indexToName, nameToIndex } = context.radioContext;
    const { tagInput, labelPosition } = labelParameters;
    useStableGetter(value);
    const { propsChild: listNavigationSingleSelectionChildProps, propsTabbable, singleSelectionChildReturn, pressParameters: { onPressSync, excludeSpace, ...void2 }, ...listNavRet } = useCompleteListNavigationChild({
        info,
        context,
        textContentParameters
    });
    const { selected: checked } = singleSelectionChildReturn;
    const { refElementReturn: refElementInputReturn, propsStable: propsRefInput } = useRefElement({ refElementParameters: {} });
    const { refElementReturn: refElementLabelReturn, propsStable: propsRefLabel } = useRefElement({ refElementParameters: {} });
    const { propsInput, propsLabel, ...checkboxLikeRet } = useCheckboxLike({
        checkboxLikeParameters: {
            checked: (checked ?? false),
            disabled,
            onInput: onInput,
            role: "radio"
        },
        pressParameters: { excludeSpace, longPressThreshold },
        labelParameters,
        randomIdInputParameters: { prefix: Prefices.radio },
        randomIdLabelParameters: { prefix: Prefices.radioLabel },
        refElementInputReturn,
        refElementLabelReturn
    });
    y(() => {
        nameToIndex.set(value, index);
        indexToName.set(index, value);
        return () => {
            nameToIndex.delete(value);
            indexToName.delete(index);
        };
    }, [value, index]);
    if (tagInput == "input") {
        propsInput.name = name;
        propsInput.checked = (checked ?? false);
        propsInput.type = "radio";
    }
    else {
        propsInput["aria-checked"] = (checked ?? false);
    }
    const propsIfInputHandlesFocus = useMergedProps(listNavigationSingleSelectionChildProps, propsTabbable, propsInput);
    const propsInput2 = useMergedProps(propsRefInput, labelPosition != "wrapping" ? propsIfInputHandlesFocus : propsInput);
    const propsIfLabelHandlesFocus = useMergedProps(listNavigationSingleSelectionChildProps, propsTabbable, propsLabel);
    const propsLabel2 = useMergedProps(propsRefLabel, labelPosition == "wrapping" ? propsIfLabelHandlesFocus : propsLabel);
    return {
        propsInput: propsInput2,
        propsLabel: propsLabel2,
        singleSelectionChildReturn,
        ...checkboxLikeRet,
        ...listNavRet
    };
}

/**
 * Implements a [Slider](https://www.w3.org/WAI/ARIA/apg/patterns/slider-multithumb/) pattern.
 *
 * @compositeParams
 *
 * @hasChild {@link useSliderThumb}
 */
function useSlider({ sliderParameters: { max, min }, managedChildrenParameters }) {
    monitorCallCount(useSlider);
    const { context, managedChildrenReturn } = useManagedChildren({ managedChildrenParameters });
    const baseIdRef = _(null);
    if (baseIdRef.current === null)
        baseIdRef.current = generateRandomId(Prefices.sliderThumb);
    return {
        context: F$1(() => ({
            ...context,
            sliderContext: {
                min,
                max,
                baseId: baseIdRef.current
            }
        }), [min, max]),
        managedChildrenReturn
    };
}
/**
 * @compositeParams
 */
function useSliderThumb({ info, context: { sliderContext: { max: maxParent, min: minParent }, ...context }, sliderThumbParameters }) {
    monitorCallCount(useSliderThumb);
    const { managedChildReturn } = useManagedChild({ info: info, context });
    const { tag, value, max: maxOverride, min: minOverride, onValueChange, valueText, label } = sliderThumbParameters;
    const min = (minOverride ?? minParent);
    const max = (maxOverride ?? maxParent);
    let newProps = (tag == "input" ?
        { min, max, value, type: "range" } :
        { "aria-valuemax": max, "aria-valuemin": min, "aria-valuenow": value });
    newProps = { ...newProps, "aria-label": label, "aria-valuetext": valueText, style: { "--range-value": `${value}`, "--range-value-text": `${valueText}` } };
    if (tag == "input") {
        newProps.onInput = e => {
            onValueChange?.(enhanceEvent(e, { value: e.currentTarget.valueAsNumber }));
        };
    }
    else {
        throw new Error("Unimplemented");
    }
    return {
        sliderThumbReturn: {
            min,
            max
        },
        managedChildReturn,
        propsSliderThumb: newProps
    };
}

/**
 * Creates a sortable data table in a [Grid](https://www.w3.org/WAI/ARIA/apg/patterns/grid/) pattern.
 *
 * @compositeParams
 *
 * @hasChild {@link useTableSection}
 * @hasChild {@link useTableRow}
 * @hasChild {@link useTableCell}
 */
function useTable({ labelParameters, tableParameters: { selectionLimit, tagTable }, }) {
    monitorCallCount(useTable);
    const [getSortBody, setSortBody] = usePassiveState(null, returnNull);
    const sortQueue = _([]);
    const [getSortColumn, setSortColumn] = usePassiveState(T$1((a) => { sortQueue.current.push(a.column); }, []), T$1(() => { return { column: 0, direction: "ascending" }; }, []));
    const updateSortDirection = T$1((column) => {
        const { column: currentColumn, direction: currentDirection } = getSortColumn();
        const next = { column, direction: column != currentColumn ? "ascending" : (currentDirection == "ascending" ? "descending" : "ascending") };
        setSortColumn(next);
        return next;
    }, []);
    const sortByColumn = T$1((column) => {
        const next = updateSortDirection(column);
        getSortBody()?.();
        return next;
    }, []);
    const { propsInput: propsLabelList, propsLabel: propsLabelLabel } = useLabelSynthetic({
        labelParameters: { ...labelParameters, onLabelClick: null },
        randomIdInputParameters: { prefix: Prefices.table },
        randomIdLabelParameters: { prefix: Prefices.tableLabel }
    });
    return {
        propsTable: useMergedProps({ role: tagTable == "table" ? undefined : "grid", "aria-multiselectable": (selectionLimit == "multi" ? "true" : undefined) }, propsLabelList),
        propsLabel: propsLabelLabel,
        context: useMemoObject({ tableContext: useMemoObject({ sortByColumn, setSortBodyFunction: setSortBody, getCurrentSortColumn: getSortColumn }) })
    };
}
function fuzzyCompare(lhs, rhs) {
    if (lhs === rhs)
        return 0;
    if (lhs == null || rhs == null) {
        if (lhs == null && rhs != null)
            return -1;
        if (lhs != null && rhs == null)
            return 1;
        if (lhs === null && rhs === undefined)
            return 1;
        if (lhs === undefined && rhs === null)
            return -1;
    }
    else {
        if (lhs == rhs)
            return 0;
        if (lhs < rhs)
            return -1;
        return 1;
    }
    return 0;
}
const naturalSectionTypes = new Set(["thead", "tbody", "tfoot"]);
/**
 * @compositeParams
 */
function useTableSection({ linearNavigationParameters, rovingTabIndexParameters, singleSelectionParameters, gridNavigationParameters, rearrangeableChildrenParameters, paginatedChildrenParameters, staggeredChildrenParameters, tableSectionParameters: { tagTableSection, location }, typeaheadNavigationParameters, context: { tableContext } }) {
    monitorCallCount(useTableSection);
    const { childrenHaveFocusReturn, context, linearNavigationReturn, managedChildrenReturn, props: { ...props }, rovingTabIndexReturn, singleSelectionReturn, typeaheadNavigationReturn, staggeredChildrenReturn, rearrangeableChildrenReturn, paginatedChildrenReturn, sortableChildrenReturn } = useCompleteGridNavigation({
        linearNavigationParameters,
        rovingTabIndexParameters: { ...rovingTabIndexParameters, focusSelfParent: focus },
        singleSelectionParameters,
        paginatedChildrenParameters,
        staggeredChildrenParameters,
        sortableChildrenParameters: {
            compare: T$1((lhs, rhs) => {
                return fuzzyCompare(lhs?.getSortValue?.(), rhs?.getSortValue?.());
            }, [])
        },
        typeaheadNavigationParameters,
        gridNavigationParameters,
        rearrangeableChildrenParameters,
    });
    if (!naturalSectionTypes.has(tagTableSection)) {
        props.role = "rowgroup";
    }
    p(() => {
        if (location == "body") {
            tableContext.setSortBodyFunction(() => {
                return () => { sortableChildrenReturn.sort(tableContext.getCurrentSortColumn().direction); };
            });
        }
    });
    return {
        childrenHaveFocusReturn,
        context: {
            ...context,
            tableContext
        },
        staggeredChildrenReturn,
        linearNavigationReturn,
        managedChildrenReturn,
        rovingTabIndexReturn,
        singleSelectionReturn,
        rearrangeableChildrenReturn,
        sortableChildrenReturn,
        typeaheadNavigationReturn,
        paginatedChildrenReturn,
        propsTableSection: props
    };
}
/**
 * @compositeParams
 */
function useTableRow({ info, textContentParameters, context: cx1, tableRowParameters: { selected }, linearNavigationParameters, rovingTabIndexParameters, ...void1 }) {
    monitorCallCount(useTableRow);
    const { context: cx2, managedChildrenReturn, props: { ...props }, ...restRet
    // props
     } = useCompleteGridNavigationRow({
        textContentParameters,
        context: { ...cx1 },
        info: {
            ...info,
            getSortValue: useStableCallback(() => {
                const currentColumn = cx1.tableContext.getCurrentSortColumn().column;
                const currentChild = managedChildrenReturn.getChildren().getAt(currentColumn ?? 0);
                const sortValue = currentChild?.getSortValue();
                return sortValue;
            })
        },
        linearNavigationParameters,
        rovingTabIndexParameters: { ...rovingTabIndexParameters },
        typeaheadNavigationParameters: { noTypeahead: true, collator: null, typeaheadTimeout: Infinity, onNavigateTypeahead: null }
    });
    props.role = "row";
    // TODO: Unneeded?
    if (selected) {
        switch (cx1.singleSelectionContext.ariaPropName) {
            case "aria-checked":
            case "aria-pressed":
            case "aria-selected":
                props[cx1.singleSelectionContext.ariaPropName ?? "aria-selected"] = "true";
            default: {
                console.assert(false, cx1.singleSelectionContext.ariaPropName + " is not valid for multi-select -- prefer checked, selected, or pressed");
            }
        }
    }
    return {
        context: useMemoObject({
            ...cx2,
            tableContext: cx1.tableContext
        }),
        props,
        managedChildrenReturn,
        ...restRet
    };
}
/**
 * @compositeParams
 */
function useTableCell({ tableCellParameters: { tagTableCell }, info, ...p }) {
    monitorCallCount(useTableCell);
    const { props, ...ret } = useCompleteGridNavigationCell({
        info,
        ...p
    });
    return {
        propsFocus: props,
        propsCell: { role: (tagTableCell != "th" && tagTableCell != "td") ? "gridcell" : undefined },
        ...ret,
        tableCellReturn: {
            sortByThisColumn: useStableCallback(() => {
                return p.context.tableContext.sortByColumn(info.index);
            }, [])
        }
    };
}

/**
 * Implements a [Tabs](https://www.w3.org/WAI/ARIA/apg/patterns/tabs/) pattern.
 *
 * @compositeParams
 *
 * @hasChild {@link useTab}
 * @hasChild {@link useTabPanel}
 */
function useTabs({ labelParameters, linearNavigationParameters, singleSelectionParameters: { initiallySelectedIndex, onSelectedIndexChange: ssi, selectionMode, ...singleSelectionParameters }, tabsParameters: { orientation, role, localStorageKey }, rovingTabIndexParameters, ...restParams }) {
    monitorCallCount(useTabs);
    const [localStorageIndex, setLocalStorageIndex] = usePersistentState(localStorageKey ?? null, 0);
    if (localStorageIndex != null)
        initiallySelectedIndex = localStorageIndex;
    const baseId = generateRandomId("aria-tabs-");
    const getTabId = T$1((index) => { return baseId + "-tab-" + index; }, []);
    const getPanelId = T$1((index) => { return baseId + "-panel-" + index; }, []);
    // Used for the panels, not the tabs in the tablist.
    // Those are in useTabList itself.
    const { context: managedChildContext, managedChildrenReturn: panelChildrenReturn } = useManagedChildren({
        managedChildrenParameters: {
            onChildrenMountChange: useStableCallback((_m, _u) => { reevaluateClosestFit(); })
        }
    });
    const { changeIndex: changeVisiblePanel, getCurrentIndex: getVisibleIndex, reevaluateClosestFit } = useChildrenFlag({
        getChildren: panelChildrenReturn.getChildren,
        closestFit: false,
        onClosestFit: null,
        initialIndex: null,
        getAt: useStableCallback((i) => { return i.getVisible() ?? false; /*getPanels().getAt(i)?.getVisible() ?? false)*/ }, []),
        setAt: useStableCallback((i, b, n, p) => { return i.setVisibleIndex(n, p); /*(getPanels().getAt(i)?.setVisible(b));*/ }, []),
        isValid: returnTrue,
        onIndexChange: null
    });
    y(() => {
        changeVisiblePanel(initiallySelectedIndex ?? null);
    }, []);
    const { propsInput, propsLabel, randomIdInputReturn: { id: _inputId }, randomIdLabelReturn: { id: _labelId }, } = useLabelSynthetic({
        labelParameters: { ...labelParameters, onLabelClick: useStableCallback(() => listNavRet1.rovingTabIndexReturn.focusSelf()) },
        randomIdInputParameters: { prefix: Prefices.tablist },
        randomIdLabelParameters: { prefix: Prefices.tablistLabel },
    });
    const { props: listNavigationSingleSelectionProps, context, ...listNavRet1 } = useCompleteListNavigation({
        linearNavigationParameters: { arrowKeyDirection: orientation, ...linearNavigationParameters },
        rovingTabIndexParameters: { ...rovingTabIndexParameters, focusSelfParent: focus },
        singleSelectionParameters: {
            onSelectedIndexChange: useStableCallback((e) => {
                ssi?.(e);
                changeVisiblePanel(e[EventDetail].selectedIndex);
                setLocalStorageIndex(e[EventDetail].selectedIndex);
                changeSelectedIndex(e[EventDetail].selectedIndex);
            }),
            ariaPropName: "aria-selected",
            selectionMode: selectionMode ?? "focus",
            initiallySelectedIndex: initiallySelectedIndex ?? null,
            ...singleSelectionParameters
        },
        paginatedChildrenParameters: { paginationMax: null, paginationMin: null },
        ...restParams
    });
    const { singleSelectionReturn: { changeSelectedIndex } } = listNavRet1;
    return {
        contextPanels: useMemoObject({
            ...managedChildContext,
            tabPanelContext: useMemoObject({
                getPanelId,
                getTabId,
                getVisibleIndex,
                setSelectedIndex: changeSelectedIndex
            })
        }),
        contextTabs: useMemoObject({
            ...context,
            tabsContext: useMemoObject({ getTabId, getPanelId, getVisibleIndex, setSelectedIndex: changeSelectedIndex })
        }),
        propsContainer: useMergedProps(listNavigationSingleSelectionProps, propsInput, {
            role: (role ?? "tablist"),
            "aria-orientation": orientation ?? "horizontal",
        }),
        propsLabel,
        ...listNavRet1
    };
}
/**
 * @compositeParams
 */
function useTab({ info: { focusSelf: focusSelfParent, ...info }, textContentParameters, pressParameters: { focusSelf: focusSelfChild, longPressThreshold, onPressingChange, ...void2 }, context }) {
    const { propsChild: listNavigationSingleSelectionChildProps, propsTabbable, pressParameters: { onPressSync, excludeSpace, ...void1 }, refElementReturn, ...listNavRet2 } = useCompleteListNavigationChild({
        context,
        info: { focusSelf: focusSelfParent, ...info },
        textContentParameters,
    });
    const { pressReturn, props: propsPressStable } = usePress({ pressParameters: { onPressSync, focusSelf: focusSelfChild, allowRepeatPresses: false, excludeEnter: returnFalse, excludePointer: returnFalse, excludeSpace: returnFalse, longPressThreshold, onPressingChange }, refElementReturn });
    const { singleSelectionChildReturn: { selected }, rovingTabIndexChildReturn: { tabbable } } = listNavRet2;
    const { getPanelId, getTabId } = context.tabsContext;
    const panelId = getPanelId(info.index);
    const tabId = getTabId(info.index);
    monitorCallCount(useTab);
    return {
        pressReturn,
        refElementReturn,
        props: useMergedProps(propsPressStable, listNavigationSingleSelectionChildProps, propsTabbable, {
            "data-tabbable": tabbable.toString(),
            "data-selected": selected.toString(),
            role: "tab",
            "aria-controls": panelId,
            id: tabId
        }),
        ...listNavRet2
    };
}
/**
 * @compositeParams
 */
function useTabPanel({ info, context }) {
    const { index } = info;
    monitorCallCount(useTabPanel);
    const { tabPanelContext: { getVisibleIndex: g, getPanelId, getTabId } } = context;
    //const [correspondingTabId, setCorrespondingTabId] = useState<string | null>(null);
    const [lastKnownVisibleIndex, setLastKnownVisibleIndex, getLastKnownVisibleIndex] = useState(g());
    const [isVisible, setIsVisible, getIsVisible] = useState(null);
    //const visibleRef = useRef<ChildFlagOperations>({ get: getIsVisible, set: setIsVisible, isValid: returnTrue });
    useManagedChild({
        context, info: {
            getVisible: useStableCallback(() => { return getLastKnownVisibleIndex() == index; }),
            setVisibleIndex: useStableCallback((newIndex, prevIndex) => {
                // Similar logic is in singleSelection, but we need to duplicate it here
                let changeIndex = (newIndex == index ? prevIndex : newIndex);
                if (changeIndex != null)
                    setLastKnownVisibleIndex(changeIndex);
                if (newIndex == index) {
                    setIsVisible(true);
                }
                else {
                    setIsVisible(false);
                }
            }),
            ...info
        }
    });
    const panelId = getPanelId(info.index);
    const tabId = getTabId(info.index);
    //const isVisible = (lastKnownVisibleIndex === index);
    return {
        props: useMergedProps({
            role: "tabpanel",
            "aria-labelledby": tabId,
            id: panelId,
            inert: !isVisible
        }),
        tabPanelReturn: {
            visibleOffset: lastKnownVisibleIndex == null ? null : (index - lastKnownVisibleIndex),
            visible: isVisible,
            getVisible: useStableCallback(() => { return getLastKnownVisibleIndex() === index; })
        }
    };
}

/**
 * Allows any descendent children to push a visible (and/or audible) message to the user's attention.
 *
 * @compositeParams
 *
 * @hasChild {@link useToast}
 */
function useToasts({ managedChildrenParameters: { onChildrenMountChange: ocmu, onAfterChildLayoutEffect }, toastsParameters: { visibleCount } }) {
    monitorCallCount(useToasts);
    // Normally, this does just look like [0, 1, 2, 3], etc
    // so it could be just an index to the current toast,
    // but if we dismiss toasts out of order, it's [0, 2, 3] or something.
    // So just keep track of it all in a big ol', there's only one of these on a page anyway,
    // and if you're pusing 10000 toasts at once an Array<number> isn't going to be your bottleneck.
    const currentIndexQueue = _([]);
    const getMaxVisibleCount = useStableGetter(visibleCount);
    const nextIndexToStartAt = _(0);
    const { refElementReturn: { getElement }, propsStable } = useRefElement({ refElementParameters: {} });
    const { context, managedChildrenReturn, ..._childInfo } = useManagedChildren({ managedChildrenParameters: { onAfterChildLayoutEffect, onChildrenMountChange: ocmu } });
    const { getChildren: getToastQueue } = managedChildrenReturn;
    const toastQueue = getToastQueue();
    // When a toast is shown or hidden, always make sure that we're showing all the toasts that we should be.
    const showHighestPriorityToast = T$1(() => {
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
    const onAnyToastMounted = T$1((toastIndex) => {
        currentIndexQueue.current.push(toastIndex);
        toastQueue.getAt(toastIndex)?.setNumberAheadOfMe(currentIndexQueue.current.length - 1);
        showHighestPriorityToast();
    }, []);
    // Any time a toast is dismissed, update our bottommostToastIndex to point to the next toast in the queue, if one exists.
    const onAnyToastDismissed = T$1((_index) => {
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
    useGlobalHandler(document, "pointermove", e => {
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
}
/**
 * @compositeParams
 */
function useToast({ toastParameters: { politeness, timeout, children }, info: { index, ...info }, context }) {
    const { getMaxVisibleCount, onAnyToastDismissed, onAnyToastMounted } = context.toastContext;
    monitorCallCount(useToast);
    const [numberOfToastsAheadOfUs, setNumberOfToastsAheadOfUs] = useState(Infinity);
    const getIndex = useStableGetter(index);
    const [dismissed2, setDismissed2, getDismissed2] = useState(false);
    const [showing2, setShowing2, getShowing2] = useState(false);
    const [triggerIndex, setTriggerIndex] = useState(1);
    const notify = useNotify();
    const dismiss = T$1(() => {
        if (!getDismissed2())
            onAnyToastDismissed(getIndex());
        setDismissed2(true);
        setShowing2(false);
    }, []);
    const show = useStableCallback(() => {
        notify("polite", o$1("p", { children: children }));
        setShowing2(true);
    });
    p(() => {
        if (!getDismissed2() && !getShowing2()) {
            if (numberOfToastsAheadOfUs >= 0 && numberOfToastsAheadOfUs < getMaxVisibleCount()) {
                show();
            }
        }
    }, [numberOfToastsAheadOfUs]);
    const focus2 = T$1(() => {
        const element = getElement();
        if (element) {
            const firstFocusable = findFirstFocusable(element);
            focus(firstFocusable);
        }
    }, []);
    useManagedChild({ info: { index, focus: focus2, setNumberAheadOfMe: setNumberOfToastsAheadOfUs, show }, context });
    const resetDismissTimer = T$1(() => {
        setTriggerIndex(i => ++i);
    }, []);
    p(() => {
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
        props: propsStable
    };
}

/**
 * Implements a [Tooltip](https://www.w3.org/WAI/ARIA/apg/patterns/tooltip/) pattern.
 *
 * @remarks Tooltips are remarkably under-specified, so some of this is speculative.
 *
 * @compositeParams
 */
function useTooltip({ tooltipParameters: { onStatus, tooltipSemanticType, hoverDelay }, escapeDismissParameters }) {
    monitorCallCount(useTooltip);
    useGlobalHandler(window, "mouseout", T$1((e) => {
        console.log(e);
        if (e.relatedTarget == null)
            onHoverChanged(false, "popup");
    }, []));
    /**
     * Whether the hover/focus-popup/trigger state we have results in us showing this tooltip.
     *
     * This is used purely to attach global event handlers that should only be there when the tooltip is open (e.g. `useDismiss`)
     */
    const [openLocal, setOpenLocal] = useState(false);
    const [getState, setState] = usePassiveState(useStableCallback((nextState, prevState) => {
        if (hoverTimeoutHandle.current) {
            clearTimeout(hoverTimeoutHandle.current);
            hoverTimeoutHandle.current = null;
        }
        switch (nextState) {
            case "focused-popup":
            case "focused-trigger":
                onStatus("focus");
                break;
            case "hovering-popup":
            case "hovering-trigger":
                onStatus("hover");
                break;
            default:
                onStatus(null);
                break;
        }
        setOpenLocal(!!nextState);
    }), returnNull);
    let { propsReferencer: propsTrigger, propsSource: propsPopup } = useRandomId({ randomIdParameters: { prefix: Prefices.tooltip, otherReferencerProp: (tooltipSemanticType == "description" ? "aria-describedby" : "aria-labelledby") } });
    const { refElementReturn: { getElement: getTriggerElement }, propsStable: triggerRefProps } = useRefElement({ refElementParameters: {} });
    const { refElementReturn: { getElement: getPopupElement }, propsStable: popupRefProps } = useRefElement({ refElementParameters: {} });
    const stateIsMouse = T$1(() => (getState()?.startsWith("h") || false), []);
    const stateIsFocus = T$1(() => (getState()?.startsWith("f") || false), []);
    let hoverTimeoutHandle = _(null);
    const onHoverChanged = useStableCallback((hovering, which) => {
        if (hoverTimeoutHandle.current)
            clearTimeout(hoverTimeoutHandle.current);
        if (hovering) {
            hoverTimeoutHandle.current = setTimeout(() => {
                setState(`hovering-${which}`);
                hoverTimeoutHandle.current = null;
            }, hoverDelay || 0);
        }
        else {
            setState(null);
        }
    });
    const onCurrentFocusedInnerChanged = T$1((focused, which) => {
        if (!stateIsMouse()) {
            if (focused) {
                setState(`focused-${which}`);
            }
            else {
                setState(null);
            }
        }
        else {
            setState(null);
        }
    }, [stateIsMouse]);
    const onTriggerCurrentFocusedInnerChanged = T$1((focused) => onCurrentFocusedInnerChanged(focused, "trigger"), [onCurrentFocusedInnerChanged]);
    const onPopupCurrentFocusedInnerChanged = T$1((focused) => onCurrentFocusedInnerChanged(focused, "popup"), [onCurrentFocusedInnerChanged]);
    const { hasCurrentFocusReturn: triggerFocusReturn } = useHasCurrentFocus({ hasCurrentFocusParameters: { onCurrentFocusedChanged: null, onCurrentFocusedInnerChanged: onTriggerCurrentFocusedInnerChanged }, refElementReturn: { getElement: getTriggerElement } });
    const { hasCurrentFocusReturn: popupFocusReturn } = useHasCurrentFocus({ hasCurrentFocusParameters: { onCurrentFocusedChanged: null, onCurrentFocusedInnerChanged: onPopupCurrentFocusedInnerChanged }, refElementReturn: { getElement: getPopupElement } });
    const { refElementPopupReturn, refElementSourceReturn, propsStablePopup, propsStableSource } = useDismiss({
        dismissParameters: {
            closeOnBackdrop: true,
            closeOnLostFocus: false,
            closeOnEscape: true,
            open: openLocal,
            onClose: useStableCallback((reason) => {
                setState(null);
            }),
        },
        escapeDismissParameters,
    });
    const otherPopupProps = {
        onPointerEnter: T$1(() => { onHoverChanged(true, "popup"); }, []),
        //onPointerLeave: useCallback(() => { onHoverChanged(false, "popup") }, [])
    };
    const otherTriggerProps = {
        onPointerEnter: T$1(() => { onHoverChanged(true, "trigger"); }, []),
        onClick: T$1((e) => { if (e.currentTarget && "focus" in e.currentTarget)
            focus(e.currentTarget); }, []),
        //onPointerLeave: useCallback(() => { onHoverChanged(false, "trigger") }, [])
    };
    useGlobalHandler(document, "pointermove", !openLocal ? null : (e => {
        const popupElement = getPopupElement();
        const triggerElement = getTriggerElement();
        const mouseElement = e.target;
        let overPopup = (popupElement?.contains(mouseElement));
        let overTrigger = (triggerElement?.contains(mouseElement));
        if (!overPopup && !overTrigger && stateIsMouse()) {
            onHoverChanged(false, "popup");
        }
    }), { capture: true, passive: true });
    return {
        propsPopup: useMergedProps(popupRefProps, propsPopup, popupFocusReturn.propsStable, { role: "tooltip" }, otherPopupProps, propsStablePopup),
        propsTrigger: useMergedProps(triggerRefProps, propsTrigger, triggerFocusReturn.propsStable, { onClick: useStableCallback(e => focus(e.currentTarget)) }, otherTriggerProps, propsStableSource),
        tooltipReturn: {
            getState,
            stateIsFocus,
            stateIsMouse
        }
    };
}

function g(n,t){for(var e in t)n[e]=t[e];return n}function C(n,t){for(var e in n)if("__source"!==e&&!(e in t))return !0;for(var r in t)if("__source"!==r&&n[r]!==t[r])return !0;return !1}function w(n){this.props=n;}function x(n,e){function r(n){var t=this.props.ref,r=t==n.ref;return !r&&t&&(t.call?t(null):t.current=null),e?!e(this.props,n)||!r:C(this.props,n)}function u(e){return this.shouldComponentUpdate=r,y$1(n,e)}return u.displayName="Memo("+(n.displayName||n.name)+")",u.prototype.isReactComponent=!0,u.__f=!0,u}(w.prototype=new k$2).isPureReactComponent=!0,w.prototype.shouldComponentUpdate=function(n,t){return C(this.props,n)||C(this.state,t)};var R=l$1.__b;l$1.__b=function(n){n.type&&n.type.__f&&n.ref&&(n.props.ref=n.ref,n.ref=null),R&&R(n);};var N="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.forward_ref")||3911;function k(n){function t(t){var e=g({},t);return delete e.ref,n(e,t.ref||null)}return t.$$typeof=N,t.render=t,t.prototype.isReactComponent=t.__f=!0,t.displayName="ForwardRef("+(n.displayName||n.name)+")",t}var T=l$1.__e;l$1.__e=function(n,t,e,r){if(n.then)for(var u,o=t;o=o.__;)if((u=o.__c)&&u.__c)return null==t.__e&&(t.__e=e.__e,t.__k=e.__k),u.__c(n,t);T(n,t,e,r);};var I=l$1.unmount;function L(n,t,e){return n&&(n.__c&&n.__c.__H&&(n.__c.__H.__.forEach(function(n){"function"==typeof n.__c&&n.__c();}),n.__c.__H=null),null!=(n=g({},n)).__c&&(n.__c.__P===e&&(n.__c.__P=t),n.__c=null),n.__k=n.__k&&n.__k.map(function(n){return L(n,t,e)})),n}function U(n,t,e){return n&&(n.__v=null,n.__k=n.__k&&n.__k.map(function(n){return U(n,t,e)}),n.__c&&n.__c.__P===t&&(n.__e&&e.insertBefore(n.__e,n.__d),n.__c.__e=!0,n.__c.__P=e)),n}function D(){this.__u=0,this.t=null,this.__b=null;}function F(n){var t=n.__.__c;return t&&t.__a&&t.__a(n)}function V(){this.u=null,this.o=null;}l$1.unmount=function(n){var t=n.__c;t&&t.__R&&t.__R(),t&&!0===n.__h&&(n.type=null),I&&I(n);},(D.prototype=new k$2).__c=function(n,t){var e=t.__c,r=this;null==r.t&&(r.t=[]),r.t.push(e);var u=F(r.__v),o=!1,i=function(){o||(o=!0,e.__R=null,u?u(l):l());};e.__R=i;var l=function(){if(!--r.__u){if(r.state.__a){var n=r.state.__a;r.__v.__k[0]=U(n,n.__c.__P,n.__c.__O);}var t;for(r.setState({__a:r.__b=null});t=r.t.pop();)t.forceUpdate();}},c=!0===t.__h;r.__u++||c||r.setState({__a:r.__b=r.__v.__k[0]}),n.then(i,i);},D.prototype.componentWillUnmount=function(){this.t=[];},D.prototype.render=function(n,e){if(this.__b){if(this.__v.__k){var r=document.createElement("div"),o=this.__v.__k[0].__c;this.__v.__k[0]=L(this.__b,r,o.__O=o.__P);}this.__b=null;}var i=e.__a&&y$1(_$2,null,n.fallback);return i&&(i.__h=null),[y$1(_$2,null,e.__a?null:n.children),i]};var W=function(n,t,e){if(++e[1]===e[0]&&n.o.delete(t),n.props.revealOrder&&("t"!==n.props.revealOrder[0]||!n.o.size))for(e=n.u;e;){for(;e.length>3;)e.pop()();if(e[1]<e[0])break;n.u=e=e[2];}};function P(n){return this.getChildContext=function(){return n.context},n.children}function j(n){var e=this,r=n.i;e.componentWillUnmount=function(){B$1(null,e.l),e.l=null,e.i=null;},e.i&&e.i!==r&&e.componentWillUnmount(),n.__v?(e.l||(e.i=r,e.l={nodeType:1,parentNode:r,childNodes:[],appendChild:function(n){this.childNodes.push(n),e.i.appendChild(n);},insertBefore:function(n,t){this.childNodes.push(n),e.i.appendChild(n);},removeChild:function(n){this.childNodes.splice(this.childNodes.indexOf(n)>>>1,1),e.i.removeChild(n);}}),B$1(y$1(P,{context:e.context},n.__v),e.l)):e.l&&e.componentWillUnmount();}function z(n,e){var r=y$1(j,{__v:n,i:e});return r.containerInfo=e,r}(V.prototype=new k$2).__a=function(n){var t=this,e=F(t.__v),r=t.o.get(n);return r[0]++,function(u){var o=function(){t.props.revealOrder?(r.push(u),W(t,n,r)):u();};e?e(o):o();}},V.prototype.render=function(n){this.u=null,this.o=new Map;var t=P$1(n.children);n.revealOrder&&"b"===n.revealOrder[0]&&t.reverse();for(var e=t.length;e--;)this.o.set(t[e],this.u=[1,0,this.u]);return n.children},V.prototype.componentDidUpdate=V.prototype.componentDidMount=function(){var n=this;this.o.forEach(function(t,e){W(n,e,t);});};var B="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,H=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,Z=/^on(Ani|Tra|Tou|BeforeInp|Compo)/,Y=/[A-Z0-9]/g,$="undefined"!=typeof document,q=function(n){return ("undefined"!=typeof Symbol&&"symbol"==typeof Symbol()?/fil|che|rad/:/fil|che|ra/).test(n)};k$2.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(t){Object.defineProperty(k$2.prototype,t,{configurable:!0,get:function(){return this["UNSAFE_"+t]},set:function(n){Object.defineProperty(this,t,{configurable:!0,writable:!0,value:n});}});});var K=l$1.event;function Q(){}function X(){return this.cancelBubble}function nn(){return this.defaultPrevented}l$1.event=function(n){return K&&(n=K(n)),n.persist=Q,n.isPropagationStopped=X,n.isDefaultPrevented=nn,n.nativeEvent=n};var en={enumerable:!1,configurable:!0,get:function(){return this.class}},rn=l$1.vnode;l$1.vnode=function(n){"string"==typeof n.type&&function(n){var t=n.props,e=n.type,u={};for(var o in t){var i=t[o];if(!("value"===o&&"defaultValue"in t&&null==i||$&&"children"===o&&"noscript"===e||"class"===o||"className"===o)){var l=o.toLowerCase();"defaultValue"===o&&"value"in t&&null==t.value?o="value":"download"===o&&!0===i?i="":"ondoubleclick"===l?o="ondblclick":"onchange"!==l||"input"!==e&&"textarea"!==e||q(t.type)?"onfocus"===l?o="onfocusin":"onblur"===l?o="onfocusout":Z.test(o)?o=l:-1===e.indexOf("-")&&H.test(o)?o=o.replace(Y,"-$&").toLowerCase():null===i&&(i=void 0):l=o="oninput","oninput"===l&&u[o=l]&&(o="oninputCapture"),u[o]=i;}}"select"==e&&u.multiple&&Array.isArray(u.value)&&(u.value=P$1(t.children).forEach(function(n){n.props.selected=-1!=u.value.indexOf(n.props.value);})),"select"==e&&null!=u.defaultValue&&(u.value=P$1(t.children).forEach(function(n){n.props.selected=u.multiple?-1!=u.defaultValue.indexOf(n.props.value):u.defaultValue==n.props.value;})),t.class&&!t.className?(u.class=t.class,Object.defineProperty(u,"className",en)):(t.className&&!t.class||t.class&&t.className)&&(u.class=u.className=t.className),n.props=u;}(n),n.$$typeof=B,rn&&rn(n);};var un=l$1.__r;l$1.__r=function(n){un&&un(n),n.__c;};var on=l$1.diffed;l$1.diffed=function(n){on&&on(n);var t=n.props,e=n.__e;null!=e&&"textarea"===n.type&&"value"in t&&t.value!==e.value&&(e.value=null==t.value?"":t.value);};

function memoForwardRef(fn) {
    return x(k(fn));
}
const ContextDefaults = {
    collator: F$2(null),
    pageNavigationSize: F$2(0.1),
    typeaheadTimeout: F$2(1000),
    noTypeahead: F$2(false),
    getIndex: F$2(v => v.props.index),
    disableArrowKeys: F$2(false),
    disableHomeEndKeys: F$2(false),
    getWindow: F$2(() => globalThis.window),
    focusOpener: F$2((e) => focus(e)),
    getText: F$2((e) => (e?.textContent ?? "")),
    selectionMode: F$2("activation"),
};
function useDefault(context, userValue) {
    const defaultValue = q$1(ContextDefaults[context]);
    return userValue ?? defaultValue;
}
const ParentDepthContext = F$2(0);

const AccordionSectionContext = F$2(null);
const Accordion = x(function Accordion({ disableHomeEndKeys, initialIndex, onAfterChildLayoutEffect, onChildrenMountChange, navigatePastEnd, navigatePastStart, pageNavigationSize, localStorageKey, collator, noTypeahead, typeaheadTimeout, onChildrenCountChange, isValid, render, imperativeHandle, orientation, onNavigateLinear, onNavigateTypeahead, ...rest }) {
    const info = useAccordion({
        accordionParameters: { orientation, initialIndex, localStorageKey: localStorageKey ?? null },
        typeaheadNavigationParameters: {
            onNavigateTypeahead,
            isValid: isValid || returnTrue,
            collator: useDefault("collator", collator),
            noTypeahead: useDefault("noTypeahead", noTypeahead),
            typeaheadTimeout: useDefault("typeaheadTimeout", typeaheadTimeout)
        },
        linearNavigationParameters: {
            onNavigateLinear,
            disableHomeEndKeys: useDefault("disableHomeEndKeys", disableHomeEndKeys),
            navigatePastEnd: navigatePastEnd ?? "wrap",
            navigatePastStart: navigatePastStart ?? "wrap",
            pageNavigationSize: useDefault("pageNavigationSize", pageNavigationSize)
        },
        managedChildrenParameters: { onAfterChildLayoutEffect, onChildrenMountChange },
    });
    A(imperativeHandle, () => info);
    return (o$1(AccordionSectionContext.Provider, { value: info.context, children: render(info) }));
});
const AccordionSection = x(function AccordionSection({ open, index, tagButton, disabled, bodyRole, onPress, untabbable, getText, imperativeHandle, render, ...rest }) {
    const context = useContextWithWarning(AccordionSectionContext, "accordion section");
    const info = useAccordionSection({
        buttonParameters: { disabled: disabled ?? false, tagButton, onPress: onPress ?? null },
        accordionSectionParameters: { open, bodyRole: bodyRole ?? "region" },
        info: { index, untabbable: untabbable || false },
        refElementParameters: {},
        context,
        textContentParameters: { getText: useDefault("getText", getText) },
    });
    A(imperativeHandle, () => info);
    return render(info);
});

const Button = memoForwardRef(function Button({ tagButton, onPress, pressed, render, disabled, onElementChange, onMount, onUnmount, allowRepeatPresses, longPressThreshold, excludeEnter, excludePointer, excludeSpace, onPressingChange }, ref) {
    const info = useButton({
        buttonParameters: {
            role: "button",
            tagButton: tagButton,
            onPress: onPress ?? null,
            pressed,
            disabled: disabled ?? false
        },
        pressParameters: { longPressThreshold, allowRepeatPresses, excludeEnter, excludePointer, excludeSpace, onPressingChange },
        refElementParameters: { onElementChange, onMount, onUnmount }
    });
    A(ref, () => info);
    return render(info);
});

const UseCheckboxGroupChildContext = F$2(null);
const CheckboxGroup = memoForwardRef(function CheckboxGroup({ render, collator, disableHomeEndKeys, noTypeahead, typeaheadTimeout, onTabbableIndexChange, compare, staggered, getIndex, untabbable, navigatePastEnd, navigatePastStart, pageNavigationSize, orientation, onNavigateLinear, onNavigateTypeahead, ..._rest }, ref) {
    untabbable ||= false;
    const info = useCheckboxGroup({
        linearNavigationParameters: {
            onNavigateLinear,
            disableHomeEndKeys: useDefault("disableHomeEndKeys", disableHomeEndKeys),
            navigatePastEnd: navigatePastEnd ?? "wrap",
            navigatePastStart: navigatePastStart ?? "wrap",
            pageNavigationSize: useDefault("pageNavigationSize", pageNavigationSize)
        },
        checkboxGroupParameters: { orientation: orientation ?? "vertical" },
        staggeredChildrenParameters: { staggered: staggered || false },
        rearrangeableChildrenParameters: { getIndex: useDefault("getIndex", getIndex) },
        rovingTabIndexParameters: { onTabbableIndexChange: onTabbableIndexChange ?? null, untabbable },
        sortableChildrenParameters: { compare: compare ?? null },
        typeaheadNavigationParameters: {
            onNavigateTypeahead,
            collator: useDefault("collator", collator),
            noTypeahead: useDefault("noTypeahead", noTypeahead),
            typeaheadTimeout: useDefault("typeaheadTimeout", typeaheadTimeout)
        }
    });
    A(ref, () => info);
    return (o$1(UseCheckboxGroupChildContext.Provider, { value: info.context, children: render(info) }));
});
const CheckboxGroupParent = memoForwardRef(function CheckboxGroupParent({ render, index, focusSelf, untabbable, getText, getSortValue, unselectable, ..._rest }, ref) {
    const context = useContextWithWarning(UseCheckboxGroupChildContext, "checkbox group");
    console.assert(context != null, `This CheckboxGroupParent is not contained within a CheckboxGroup`);
    const info = useCheckboxGroupParent({
        info: {
            index,
            unselectable: unselectable || false,
            untabbable: untabbable || false,
            focusSelf,
            getSortValue,
            checkboxInfo: { checkboxChildType: "parent" }
        },
        context,
        textContentParameters: { getText: useDefault("getText", getText) }
    });
    A(ref, () => info);
    return render(info);
});
const CheckboxGroupChild = memoForwardRef(function CheckboxGroupChild({ index, render, checked, onChangeFromParent, getSortValue, untabbable, getText, focusSelf, unselectable, ..._rest }, ref) {
    const context = useContextWithWarning(UseCheckboxGroupChildContext, "checkbox group");
    console.assert(context != null, `This CheckboxGroupChild is not contained within a CheckboxGroup`);
    const info = useCheckboxGroupChild({
        checkboxGroupChildParameters: { checked, onChangeFromParent },
        info: { index, untabbable: untabbable || false, unselectable: unselectable || false, focusSelf, getSortValue },
        textContentParameters: { getText: useDefault("getText", getText) },
        context,
    });
    A(ref, () => info);
    return render(info);
});

function defaultRenderCheckboxLike({ labelPosition, tagInput, tagLabel, makePropsInput, makePropsLabel }) {
    return function (info) {
        const inputProps = (makePropsInput(info));
        const { children, ...labelProps } = (makePropsLabel(info));
        if (labelPosition == "wrapping") {
            const input = y$1(tagInput, inputProps);
            const label = y$1(tagLabel, { ...labelProps, children: o$1(_$2, { children: [input, children] }) });
            return (o$1(_$2, { children: label }));
        }
        else if (labelPosition == "separate") {
            const input = y$1(tagInput, inputProps);
            const label = y$1(tagLabel, { children, ...labelProps });
            return (o$1(_$2, { children: [input, label] }));
        }
        else {
            console.assert(!!inputProps["aria-label"]);
            return y$1(tagInput, inputProps);
        }
    };
}
const Checkbox = memoForwardRef(function Checkbox({ checked, disabled, tagLabel, labelPosition, tagInput, ariaLabel, onCheckedChange, longPressThreshold, excludeSpace, render }, ref) {
    const checkbox = useCheckbox({
        checkboxLikeParameters: { checked: checked ?? false, disabled: disabled ?? false },
        checkboxParameters: { onCheckedChange },
        labelParameters: { ariaLabel: ariaLabel, labelPosition, tagInput, tagLabel },
        pressParameters: { excludeSpace, longPressThreshold }
    });
    A(ref, () => checkbox);
    return render(checkbox);
});

function defaultRenderPortal({ portalId, children }) {
    const portalRef = _(null);
    portalRef.current ??= document.getElementById(portalId);
    if (portalRef.current)
        return z(children, portalRef.current);
    else
        return children;
}
const Dialog = memoForwardRef(function Dialog({ onClose, open, closeOnBackdrop, closeOnEscape, focusOpener, getWindow, parentDepth, focusPopup, ariaLabel, render }, ref) {
    const defaultParentDepth = q$1(ParentDepthContext);
    let myDepth = (parentDepth ?? defaultParentDepth) + 1;
    const info = useDialog({
        dismissParameters: {
            closeOnBackdrop: closeOnBackdrop ?? true,
            closeOnEscape: closeOnEscape ?? true,
            onClose,
            open
        },
        escapeDismissParameters: {
            getWindow: useDefault("getWindow", getWindow),
            parentDepth: parentDepth ?? defaultParentDepth
        },
        focusTrapParameters: {
            focusOpener: useDefault("focusOpener", focusOpener),
            focusPopup
        },
        labelParameters: { ariaLabel }
    });
    A(ref, () => info);
    return (o$1(ParentDepthContext.Provider, { value: myDepth, children: render(info) }));
});

const Drawer = memoForwardRef(function Drawer({ closeOnBackdrop, closeOnEscape, closeOnLostFocus, focusOpener, focusPopup, getWindow, onClose, open, parentDepth, render, trapActive, ariaLabel, }, ref) {
    const defaultParentDepth = q$1(ParentDepthContext);
    let myDepth = (parentDepth ?? defaultParentDepth) + 1;
    const info = useDrawer({
        dismissParameters: {
            closeOnBackdrop: closeOnBackdrop ?? true,
            closeOnEscape: closeOnEscape ?? true,
            closeOnLostFocus: closeOnLostFocus ?? true,
            onClose,
            open
        },
        escapeDismissParameters: {
            getWindow: useDefault("getWindow", getWindow),
            parentDepth: parentDepth ?? defaultParentDepth
        },
        focusTrapParameters: {
            focusOpener: useDefault("focusOpener", focusOpener),
            focusPopup,
            trapActive: trapActive ?? false
        },
        labelParameters: { ariaLabel }
    });
    A(ref, () => info);
    return (o$1(ParentDepthContext.Provider, { value: myDepth, children: render(info) }));
});

const GridlistContext = F$2(null);
const GridlistRowContext = F$2(null);
function defaultRenderGridlistChild({ tagGridlistChild, makePropsGridlistChild }) {
    return function (info) {
        return y$1(tagGridlistChild, (makePropsGridlistChild(info)));
    };
}
const Gridlist = memoForwardRef(function GridlistU({ collator, disableHomeEndKeys, noTypeahead, onTabbableIndexChange, groupingType, typeaheadTimeout, selectedIndex, navigatePastEnd, navigatePastStart, onSelectedIndexChange, pageNavigationSize, selectionLimit, untabbable, paginationMax, paginationMin, staggered, compare, getIndex, onTabbableColumnChange, ariaLabel, orientation, ariaPropName, selectionMode, onNavigateLinear, onNavigateTypeahead, render }, ref) {
    untabbable ??= false;
    ariaPropName ??= "aria-selected";
    selectionMode ??= "activation";
    const info = useGridlist({
        linearNavigationParameters: {
            onNavigateLinear,
            disableHomeEndKeys: useDefault("disableHomeEndKeys", disableHomeEndKeys),
            navigatePastEnd: (navigatePastEnd ?? "wrap"),
            navigatePastStart: (navigatePastStart ?? "wrap"),
            pageNavigationSize: useDefault("pageNavigationSize", pageNavigationSize),
        },
        rovingTabIndexParameters: {
            onTabbableIndexChange: onTabbableIndexChange ?? null,
            untabbable
        },
        staggeredChildrenParameters: { staggered: staggered || false },
        typeaheadNavigationParameters: {
            onNavigateTypeahead,
            collator: useDefault("collator", collator),
            noTypeahead: useDefault("noTypeahead", noTypeahead),
            typeaheadTimeout: useDefault("typeaheadTimeout", typeaheadTimeout),
        },
        listboxParameters: {
            selectionLimit,
            groupingType,
            selectedIndex,
            onSelectedIndexChange: onSelectedIndexChange ?? null,
            orientation: orientation ?? "vertical"
        },
        gridNavigationParameters: {
            onTabbableColumnChange: onTabbableColumnChange ?? null
        },
        labelParameters: {
            ariaLabel
        },
        rearrangeableChildrenParameters: {
            getIndex: useDefault("getIndex", getIndex)
        },
        sortableChildrenParameters: {
            compare: compare ?? null
        },
        paginatedChildrenParameters: {
            paginationMax: paginationMax ?? null,
            paginationMin: paginationMin ?? null
        },
        singleSelectionParameters: { ariaPropName, selectionMode }
    });
    A(ref, () => info);
    return (o$1(GridlistContext.Provider, { value: info.context, children: render(info) }));
});
const GridlistRow = memoForwardRef(function GridlistRowU({ index, collator, unselectable, untabbable, navigatePastEnd, navigatePastStart, noTypeahead, onTabbableIndexChange, selected, typeaheadTimeout, getSortValue, getText, render, initiallyTabbedIndex, onNavigateTypeahead, info: uinfo }, ref) {
    const context = useContextWithWarning(GridlistContext, "gridlist");
    console.assert(context != null, `This GridlistRow is not contained within a Gridlist`);
    untabbable ||= false;
    const info = useGridlistRow({
        info: { index, untabbable, unselectable, getSortValue, ...uinfo },
        context,
        gridlistRowParameters: { selected: selected ?? null },
        textContentParameters: { getText: useDefault("getText", getText) },
        linearNavigationParameters: {
            navigatePastEnd: navigatePastEnd ?? "wrap",
            navigatePastStart: navigatePastStart ?? "wrap"
        },
        rovingTabIndexParameters: { onTabbableIndexChange: onTabbableIndexChange ?? null, initiallyTabbedIndex: initiallyTabbedIndex ?? null, untabbable },
        typeaheadNavigationParameters: {
            onNavigateTypeahead,
            collator: useDefault("collator", collator),
            noTypeahead: useDefault("noTypeahead", noTypeahead),
            typeaheadTimeout: useDefault("typeaheadTimeout", typeaheadTimeout)
        }
    });
    A(ref, () => info);
    return o$1(GridlistRowContext.Provider, { value: info.context, children: render(info) });
});
const GridlistChild = memoForwardRef(function GridlistChild({ index, colSpan, focusSelf, untabbable, getText, onPressSync, longPressThreshold, onPressingChange, render, info: subInfo }, ref) {
    const context = useContextWithWarning(GridlistRowContext, "gridlist row");
    console.assert(context != null, `This GridlistChild is not contained within a GridlistRow that is contained within a Gridlist`);
    const defaultFocusSelf = useStableCallback((e) => { focus(e); }, []);
    const info = useGridlistCell({
        info: { index, untabbable: untabbable || false, focusSelf: (focusSelf ?? defaultFocusSelf), ...subInfo },
        context,
        gridNavigationCellParameters: { colSpan: colSpan ?? 1 },
        textContentParameters: { getText: useDefault("getText", getText) },
        pressParameters: { onPressSync, longPressThreshold, onPressingChange }
    });
    A(ref, () => info);
    return render(info);
});

const HeadingLevelContext = F$2(0);
/**
 * Utility component that creates a heading `h1`, `h2`, `h3`, etc.
 *
 * Which one is chosen depends on a parent `Heading`, with the root-most `Heading`
 * starting at 1, or the value specified by `HeadingReset`.
 *
 * Specify the actual contents of the heading with the `heading` prop.
 *
 */
const Heading = x(function Heading({ children, heading, tag, ...props }) {
    const headingLevelBeforeUs = q$1(HeadingLevelContext);
    const newHeadingLevel = headingLevelBeforeUs + 1;
    if (tag == null) {
        if (newHeadingLevel <= 6) {
            tag = `h${newHeadingLevel}`;
        }
        else {
            tag = 'div';
        }
    }
    return (o$1(_$2, { children: o$1(HeadingReset, { newLevel: headingLevelBeforeUs + 1, children: [y$1(tag, props, heading), children] }) }));
});
/**
 * Set the value that the next `Heading` will use as its base.
 *
 * Minimum of 1.
 */
const HeadingReset = x(function HeadingReset({ newLevel, children }) {
    return (o$1(HeadingLevelContext.Provider, { value: newLevel - 1, children: children }));
});

const ListboxContext = F$2(null);
const ListboxGroupContext = F$2(null);
const GroupedListbox = x(function GroupedListbox({ ariaLabel, selectionLimit, orientation, render }) {
    const info = useListbox({
        labelParameters: { ariaLabel },
        linearNavigationParameters: {
            navigatePastEnd: "passthrough",
            navigatePastStart: "passthrough",
            disableHomeEndKeys: true,
            pageNavigationSize: 1,
            onNavigateLinear: null
        },
        staggeredChildrenParameters: { staggered: false },
        paginatedChildrenParameters: { paginationMax: null, paginationMin: null },
        listboxParameters: { selectionLimit, groupingType: "with-groups", selectedIndex: null, onSelectedIndexChange: null, orientation: orientation ?? "vertical" },
        rearrangeableChildrenParameters: { getIndex: useDefault("getIndex", undefined) },
        rovingTabIndexParameters: { onTabbableIndexChange: null, untabbable: false },
        sortableChildrenParameters: { compare: null },
        typeaheadNavigationParameters: {
            collator: null,
            noTypeahead: true,
            typeaheadTimeout: Infinity,
            onNavigateTypeahead: null
        },
        singleSelectionParameters: { ariaPropName: null, selectionMode: "disabled" }
    });
    info.context;
    return (o$1(ListboxGroupContext.Provider, { value: info, children: render(info) }));
});
const Listbox = memoForwardRef(function Listbox({ ariaLabel, collator, compare, disableHomeEndKeys, getIndex, selectedIndex, navigatePastEnd, navigatePastStart, noTypeahead, onSelectedIndexChange, onTabbableIndexChange, staggered, pageNavigationSize, paginationMax, paginationMin, selectionLimit, untabbable, typeaheadTimeout, orientation, ariaPropName, selectionMode, onNavigateLinear, onNavigateTypeahead, render }) {
    const listboxGroupInfo = q$1(ListboxGroupContext);
    ariaPropName ||= "aria-selected";
    selectionMode ||= "activation";
    untabbable ||= false;
    const info = useListbox({
        labelParameters: { ariaLabel },
        staggeredChildrenParameters: {
            staggered: staggered || false
        },
        linearNavigationParameters: {
            onNavigateLinear,
            navigatePastEnd: navigatePastEnd ?? "wrap",
            navigatePastStart: navigatePastStart ?? "wrap",
            disableHomeEndKeys: useDefault("disableHomeEndKeys", disableHomeEndKeys),
            pageNavigationSize: useDefault("pageNavigationSize", pageNavigationSize)
        },
        paginatedChildrenParameters: {
            paginationMax: paginationMax ?? null,
            paginationMin: paginationMin ?? null
        },
        listboxParameters: { selectionLimit, groupingType: listboxGroupInfo == null ? "without-groups" : "group", selectedIndex, onSelectedIndexChange: onSelectedIndexChange ?? null, orientation: orientation ?? "vertical" },
        rearrangeableChildrenParameters: { getIndex: useDefault("getIndex", getIndex) },
        rovingTabIndexParameters: { onTabbableIndexChange: onTabbableIndexChange ?? null, untabbable: untabbable ?? false },
        sortableChildrenParameters: { compare: compare ?? null },
        typeaheadNavigationParameters: {
            onNavigateTypeahead,
            collator: useDefault("collator", collator),
            noTypeahead: useDefault("noTypeahead", noTypeahead),
            typeaheadTimeout: useDefault("typeaheadTimeout", typeaheadTimeout)
        },
        singleSelectionParameters: { ariaPropName, selectionMode }
    });
    return (o$1(ListboxContext.Provider, { value: info.context, children: render(info) }));
});
const ListboxItem = memoForwardRef(function ListboxItem({ unselectable, focusSelf, getText, untabbable, index, render, selected, getSortValue, allowRepeatPresses, excludeEnter, excludePointer, longPressThreshold, onPressingChange, onMultiSelect, ...subInfo }) {
    const context = useContextWithWarning(ListboxContext, "listbox");
    console.assert(context != null, `This ListboxItem is not contained within a Listbox`);
    const focusSelfDefault = T$1((e) => { focus(e); }, []);
    focusSelf ??= focusSelfDefault;
    const info = useListboxItem({
        info: { index, untabbable: untabbable || false, unselectable: unselectable || false, focusSelf, getSortValue, ...subInfo },
        context,
        listboxParameters: { selected: selected ?? null, onMultiSelect: onMultiSelect || null },
        pressParameters: { focusSelf, allowRepeatPresses, excludeEnter, excludePointer, longPressThreshold, onPressingChange },
        textContentParameters: { getText: useDefault("getText", getText) },
    });
    return render(info);
});

const UntabbableContext$2 = F$2(false);
const AriaPropNameContext$1 = F$2("aria-selected");
const SelectionModeContext$2 = F$2("focus");
const MenuItemContext = F$2(null);
const Menu = memoForwardRef(function Menu({ collator, disableHomeEndKeys, noTypeahead, typeaheadTimeout, orientation, ariaPropName, selectionMode, untabbable, onClose, open, openDirection, onTabbableIndexChange, closeOnBackdrop, closeOnEscape, closeOnLostFocus, compare, getIndex, selectedIndex, navigatePastEnd, navigatePastStart, onSelectedIndexChange, pageNavigationSize, parentDepth, disabled, staggered, onOpen, onNavigateLinear, onNavigateTypeahead, getWindow, render }, ref) {
    const defaultParentDepth = q$1(ParentDepthContext);
    let myDepth = (parentDepth ?? defaultParentDepth) + 1;
    ariaPropName ||= "aria-selected";
    selectionMode ||= "activation";
    untabbable ||= false;
    const info = useMenu({
        linearNavigationParameters: {
            onNavigateLinear,
            disableHomeEndKeys: useDefault("disableHomeEndKeys", disableHomeEndKeys),
            pageNavigationSize: useDefault("pageNavigationSize", pageNavigationSize),
            navigatePastEnd: navigatePastEnd ?? "wrap",
            navigatePastStart: navigatePastStart ?? "wrap"
        },
        staggeredChildrenParameters: {
            staggered: staggered || false
        },
        dismissParameters: {
            closeOnBackdrop: closeOnBackdrop ?? true,
            closeOnEscape: closeOnEscape ?? true,
            closeOnLostFocus: closeOnLostFocus ?? true,
            onClose,
            open
        },
        escapeDismissParameters: {
            getWindow: useDefault("getWindow", getWindow),
            parentDepth: parentDepth ?? defaultParentDepth
        },
        rearrangeableChildrenParameters: { getIndex: useDefault("getIndex", getIndex) },
        sortableChildrenParameters: { compare: compare ?? null },
        menuParameters: { openDirection, onOpen },
        menuSurfaceParameters: {},
        rovingTabIndexParameters: {
            onTabbableIndexChange: onTabbableIndexChange ?? null,
            untabbable: untabbable
        },
        typeaheadNavigationParameters: {
            onNavigateTypeahead,
            collator: useDefault("collator", collator),
            noTypeahead: useDefault("noTypeahead", noTypeahead),
            typeaheadTimeout: useDefault("typeaheadTimeout", typeaheadTimeout)
        },
        toolbarParameters: { orientation, selectedIndex: selectedIndex ?? null, onSelectedIndexChange: onSelectedIndexChange ?? null, disabled: disabled || false },
        singleSelectionParameters: { ariaPropName: ariaPropName || "aria-selected", selectionMode: selectionMode || "activation" }
    });
    A(ref, () => info);
    return (o$1(AriaPropNameContext$1.Provider, { value: ariaPropName, children: o$1(SelectionModeContext$2.Provider, { value: selectionMode, children: o$1(UntabbableContext$2.Provider, { value: untabbable, children: o$1(ParentDepthContext.Provider, { value: myDepth, children: o$1(MenuItemContext.Provider, { value: info.context, children: render(info) }) }) }) }) }));
});
const MenuItem = memoForwardRef(function MenuItem({ index, untabbable, getSortValue, onPress, getText, role, focusSelf, unselectable, onPressingChange, render, info: uinfo }, ref) {
    const context = useContextWithWarning(MenuItemContext, "menu");
    const defaultFocusSelf = T$1((e) => focus(e), []);
    const info = useMenuItem({
        info: { index, untabbable, unselectable, focusSelf: focusSelf ?? defaultFocusSelf, getSortValue, ...uinfo },
        context,
        textContentParameters: { getText: useDefault("getText", getText) },
        menuItemParameters: { onPress: onPress ?? null, role: role ?? "menuitem" },
        pressParameters: { onPressingChange }
    });
    A(ref, () => info);
    return (o$1(_$2, { children: render(info) }));
});

const MenubarItemContext = F$2(null);
const Menubar = memoForwardRef(function MenubarU({ render, collator, disableHomeEndKeys, navigatePastEnd, navigatePastStart, pageNavigationSize, orientation, staggered, noTypeahead, untabbable, onTabbableIndexChange, compare, getIndex, disabled, selectedIndex, onSelectedIndexChange, typeaheadTimeout, role, ariaLabel, ariaPropName, selectionMode, onNavigateLinear, onNavigateTypeahead }, ref) {
    ariaPropName ||= "aria-selected";
    selectionMode ||= "activation";
    untabbable ||= false;
    const info = useMenubar({
        linearNavigationParameters: {
            onNavigateLinear,
            disableHomeEndKeys: useDefault("disableHomeEndKeys", disableHomeEndKeys),
            navigatePastEnd: navigatePastEnd ?? "wrap",
            navigatePastStart: navigatePastStart ?? "wrap",
            pageNavigationSize: useDefault("pageNavigationSize", pageNavigationSize)
        },
        toolbarParameters: { orientation, selectedIndex: selectedIndex ?? null, onSelectedIndexChange: onSelectedIndexChange ?? null, role: role ?? "menubar", disabled: disabled || false },
        rovingTabIndexParameters: { onTabbableIndexChange: onTabbableIndexChange ?? null, untabbable },
        typeaheadNavigationParameters: {
            onNavigateTypeahead,
            collator: useDefault("collator", collator),
            noTypeahead: useDefault("noTypeahead", noTypeahead),
            typeaheadTimeout: useDefault("typeaheadTimeout", typeaheadTimeout)
        },
        rearrangeableChildrenParameters: { getIndex: useDefault("getIndex", getIndex) },
        staggeredChildrenParameters: { staggered: staggered || false },
        sortableChildrenParameters: { compare: compare ?? null },
        labelParameters: { ariaLabel },
        singleSelectionParameters: { ariaPropName, selectionMode }
    });
    A(ref, () => info);
    return (o$1(MenubarItemContext.Provider, { value: info.context, children: render(info) }));
});
const MenubarItem = memoForwardRef(function MenuItemU({ index, render, focusSelf, untabbable, getText, unselectable, onPress, getSortValue, onPressingChange, role, info: uinfo }, ref) {
    const context = (useContextWithWarning(MenubarItemContext, "menubar"));
    const defaultFocusSelf = T$1((e) => focus(e), []);
    const info = useMenubarChild({
        info: { index, untabbable: untabbable || false, unselectable: unselectable || false, focusSelf: focusSelf ?? defaultFocusSelf, getSortValue, ...uinfo },
        context,
        textContentParameters: { getText: useDefault("getText", getText) },
        menuItemParameters: { onPress: onPress ?? null, role: role ?? "menuitem" },
        pressParameters: { onPressingChange }
    });
    A(ref, () => info);
    return (o$1(_$2, { children: render(info) }));
});

const Progress = memoForwardRef(function Progress({ tagIndicator, ariaLabel, max, render, value, valueText }, ref) {
    const info = useProgress({
        labelParameters: { ariaLabel },
        progressIndicatorParameters: {
            max: max ?? 100,
            value: value ?? "indeterminate",
            valueText: valueText ?? null,
            tagIndicator
        }
    });
    A(ref, () => info);
    return render(info);
});
const ProgressWithHandler = memoForwardRef(function ProgressWithHandler({ ariaLabel, forciblyPending, render, tagIndicator, asyncHandler, capture, debounce, throttle }, ref) {
    const info = useProgressWithHandler({
        asyncHandlerParameters: { asyncHandler, capture, debounce, throttle },
        labelParameters: { ariaLabel },
        progressIndicatorParameters: { tagIndicator },
        progressWithHandlerParameters: { forciblyPending: forciblyPending ?? false }
    });
    A(ref, () => info);
    return (render(info));
});

const RadioContext = F$2(null);
const RadioGroup = memoForwardRef(function RadioGroup({ render, name, onSelectedValueChange, collator, disableHomeEndKeys, arrowKeyDirection, noTypeahead, typeaheadTimeout, ariaLabel, compare, staggered, getIndex, navigatePastEnd, navigatePastStart, selectedValue, untabbable, onTabbableIndexChange, onNavigateLinear, onNavigateTypeahead, pageNavigationSize, ...rest }, ref) {
    untabbable ??= false;
    const info = useRadioGroup({
        linearNavigationParameters: {
            onNavigateLinear,
            arrowKeyDirection: arrowKeyDirection ?? "either",
            navigatePastEnd: navigatePastEnd ?? "wrap",
            navigatePastStart: navigatePastStart ?? "wrap",
            disableHomeEndKeys: useDefault("disableHomeEndKeys", disableHomeEndKeys),
            pageNavigationSize: useDefault("pageNavigationSize", pageNavigationSize)
        },
        staggeredChildrenParameters: { staggered: staggered || false },
        labelParameters: { ariaLabel },
        rearrangeableChildrenParameters: { getIndex: useDefault("getIndex", getIndex) },
        sortableChildrenParameters: { compare: compare ?? null },
        radioGroupParameters: { name, onSelectedValueChange, selectedValue },
        rovingTabIndexParameters: {
            onTabbableIndexChange: onTabbableIndexChange ?? null,
            untabbable
        },
        typeaheadNavigationParameters: {
            onNavigateTypeahead,
            collator: useDefault("collator", collator),
            noTypeahead: useDefault("noTypeahead", noTypeahead),
            typeaheadTimeout: useDefault("typeaheadTimeout", typeaheadTimeout)
        },
    });
    A(ref, () => info);
    return (o$1(RadioContext.Provider, { value: info.context, children: render(info) }));
});
const Radio = memoForwardRef(function Radio({ unselectable, disabled, index, render, value, ariaLabel, focusSelf, labelPosition, untabbable, tagInput, tagLabel, getText, longPressThreshold }, ref) {
    const defaultFocusSelf = () => info.checkboxLikeReturn.focusSelf();
    focusSelf ??= defaultFocusSelf;
    const context = useContextWithWarning(RadioContext, "radio group");
    console.assert(context != null, `This Radio is not contained within a RadioGroup`);
    const getValue = useStableGetter(value);
    const info = useRadio({
        radioParameters: { value },
        checkboxLikeParameters: { disabled: disabled ?? false },
        info: { index, focusSelf, untabbable: untabbable || false, unselectable: !!unselectable, getSortValue: getValue },
        context,
        labelParameters: { ariaLabel, labelPosition, tagInput, tagLabel },
        textContentParameters: { getText: useDefault("getText", getText) },
        pressParameters: { longPressThreshold }
    });
    A(ref, () => info);
    return render(info);
});

const SliderThumbContext = F$2(null);
const Slider = memoForwardRef(function Slider({ max, min, onAfterChildLayoutEffect, onChildrenMountChange, children }, ref) {
    const info = useSlider({
        managedChildrenParameters: { onAfterChildLayoutEffect, onChildrenMountChange },
        sliderParameters: { max, min }
    });
    A(ref, () => info);
    return (o$1(SliderThumbContext.Provider, { value: info.context, children: children }));
});
const SliderThumb = memoForwardRef(function SliderThumbU({ label, tag, value, max, min, onValueChange, index, render, valueText }, ref) {
    const context = useContextWithWarning(SliderThumbContext, "slider");
    console.assert(context != null, `This SliderThumb is not contained within a Slider`);
    const info = useSliderThumb({
        context,
        info: { index },
        sliderThumbParameters: { label, tag, value, max, min, onValueChange, valueText },
    });
    A(ref, () => info);
    return render(info);
});

const TableContext = F$2(null);
const TableSectionContext = F$2(null);
const TableRowContext = F$2(null);
const Table = memoForwardRef(function TableU({ ariaLabel, selectionLimit, tagTable, render }, ref) {
    const info = useTable({
        labelParameters: { ariaLabel },
        tableParameters: { selectionLimit, tagTable, }
    });
    A(ref, () => info);
    return o$1(TableContext.Provider, { value: info.context, children: render(info) });
});
const TableSection = memoForwardRef(function TableSection({ disableHomeEndKeys, getIndex, initiallySelectedIndex, untabbable, navigatePastEnd, navigatePastStart, onSelectedIndexChange, onTabbableColumnChange, onTabbableIndexChange, pageNavigationSize, paginationMax, paginationMin, staggered, render, location, ariaPropName, selectionMode, onNavigateLinear, collator, noTypeahead, onNavigateTypeahead, typeaheadTimeout, tagTableSection }) {
    untabbable = (untabbable ?? false);
    ariaPropName ??= "aria-selected";
    selectionMode ??= "activation";
    const info = useTableSection({
        gridNavigationParameters: { onTabbableColumnChange: onTabbableColumnChange ?? null },
        staggeredChildrenParameters: { staggered: staggered || false },
        typeaheadNavigationParameters: {
            onNavigateTypeahead,
            collator: useDefault("collator", collator),
            noTypeahead: useDefault("noTypeahead", noTypeahead),
            typeaheadTimeout: useDefault("typeaheadTimeout", typeaheadTimeout)
        },
        linearNavigationParameters: {
            onNavigateLinear,
            disableHomeEndKeys: useDefault("disableHomeEndKeys", disableHomeEndKeys),
            navigatePastEnd: navigatePastEnd ?? "wrap",
            navigatePastStart: navigatePastStart ?? "wrap",
            pageNavigationSize: useDefault("pageNavigationSize", pageNavigationSize)
        },
        paginatedChildrenParameters: {
            paginationMax: paginationMax ?? null,
            paginationMin: paginationMin ?? null
        },
        rearrangeableChildrenParameters: { getIndex: useDefault("getIndex", getIndex) },
        rovingTabIndexParameters: { onTabbableIndexChange: onTabbableIndexChange ?? null, untabbable },
        singleSelectionParameters: { initiallySelectedIndex: initiallySelectedIndex ?? null, onSelectedIndexChange: onSelectedIndexChange ?? null, ariaPropName, selectionMode },
        context: useContextWithWarning(TableContext, "table"),
        tableSectionParameters: { tagTableSection, location },
    });
    return (o$1(TableSectionContext.Provider, { value: info.context, children: render(info) }));
});
const TableRow = memoForwardRef(function TableRowU({ index, getText, tagTableRow, onTabbableIndexChange, navigatePastEnd, navigatePastStart, selected, unselectable, initiallyTabbedIndex, untabbable, render }, ref) {
    const cx1 = useContextWithWarning(TableSectionContext, "table section");
    console.assert(cx1 != null, `This TableRow is not contained within a TableSection`);
    untabbable ||= (cx1.rovingTabIndexContext.untabbable);
    const info = useTableRow({
        info: { index, unselectable: unselectable || false, untabbable: untabbable || false },
        context: cx1,
        textContentParameters: {
            getText: useDefault("getText", getText)
        },
        tableRowParameters: {
            selected: selected ?? null,
            tagTableRow
        },
        linearNavigationParameters: {
            navigatePastEnd: navigatePastEnd ?? "wrap",
            navigatePastStart: navigatePastStart ?? "wrap"
        },
        rovingTabIndexParameters: { onTabbableIndexChange: onTabbableIndexChange ?? null, initiallyTabbedIndex: initiallyTabbedIndex ?? null, untabbable },
    });
    A(ref, () => info);
    return (o$1(TableRowContext.Provider, { value: info.context, children: render(info) }));
});
const TableCell = memoForwardRef(function TableCell({ index, getText, focusSelf, untabbable, tagTableCell, render, colSpan, getSortValue, }, ref) {
    const context = useContextWithWarning(TableRowContext, "table row");
    console.assert(context != null, `This TableCell is not contained within a TableRow`);
    const defaultFocusSelf = useStableCallback((e) => { focus(e); }, []);
    const info = useTableCell({
        info: { index, focusSelf: focusSelf ?? defaultFocusSelf, untabbable: untabbable || false, getSortValue },
        context,
        gridNavigationCellParameters: { colSpan: colSpan ?? 1 },
        tableCellParameters: { tagTableCell },
        textContentParameters: { getText: useDefault("getText", getText) }
    });
    A(ref, () => info);
    return render(info);
});

const TabsContext = F$2(null);
const TabPanelsContext = F$2(null);
const UntabbableContext$1 = F$2(false);
const SelectionModeContext$1 = F$2("focus");
const Tabs = memoForwardRef(function Tabs({ ariaLabel, collator, compare, disableHomeEndKeys, getIndex, initiallySelectedIndex, navigatePastEnd, navigatePastStart, noTypeahead, onSelectedIndexChange, onTabbableIndexChange, orientation, staggered, pageNavigationSize, localStorageKey, selectionMode, untabbable, typeaheadTimeout, role, onNavigateLinear, onNavigateTypeahead, render }, ref) {
    untabbable ??= false;
    selectionMode ??= "focus";
    const info = useTabs({
        labelParameters: { ariaLabel },
        staggeredChildrenParameters: { staggered: staggered || false },
        linearNavigationParameters: {
            onNavigateLinear,
            disableHomeEndKeys: useDefault("disableHomeEndKeys", disableHomeEndKeys),
            navigatePastEnd: navigatePastEnd ?? "wrap",
            navigatePastStart: navigatePastStart ?? "wrap",
            pageNavigationSize: useDefault("pageNavigationSize", pageNavigationSize)
        },
        rearrangeableChildrenParameters: { getIndex: useDefault("getIndex", getIndex) },
        rovingTabIndexParameters: {
            onTabbableIndexChange: onTabbableIndexChange ?? null,
            untabbable
        },
        singleSelectionParameters: { initiallySelectedIndex: initiallySelectedIndex ?? 0, onSelectedIndexChange: onSelectedIndexChange ?? null, selectionMode },
        sortableChildrenParameters: { compare: compare ?? null },
        tabsParameters: { orientation, role, localStorageKey: localStorageKey ?? null },
        typeaheadNavigationParameters: {
            onNavigateTypeahead,
            collator: useDefault("collator", collator),
            noTypeahead: useDefault("noTypeahead", noTypeahead),
            typeaheadTimeout: useDefault("typeaheadTimeout", typeaheadTimeout)
        }
    });
    const { contextPanels, contextTabs } = info;
    A(ref, () => info);
    return (o$1(UntabbableContext$1.Provider, { value: untabbable, children: o$1(SelectionModeContext$1.Provider, { value: selectionMode, children: o$1(TabsContext.Provider, { value: contextTabs, children: o$1(TabPanelsContext.Provider, { value: contextPanels, children: render(info) }) }) }) }));
});
const Tab = memoForwardRef(function Tab({ unselectable, focusSelf, untabbable, index, getText, getSortValue, render, longPressThreshold, onPressingChange, info: uinfo }, ref) {
    const context = useContextWithWarning(TabsContext, "tabs");
    console.assert(context != null, `This Tab is not contained within a Tabs component`);
    const focusSelfDefault = T$1((e) => { focus(e); }, []);
    const info = useTab({
        info: { index, unselectable, untabbable, focusSelf: focusSelf ?? focusSelfDefault, getSortValue, ...uinfo },
        context,
        pressParameters: { focusSelf: focusSelfDefault, longPressThreshold, onPressingChange },
        textContentParameters: { getText: useDefault("getText", getText) }
    });
    A(ref, () => info);
    return render(info);
});
function TabPanel({ index, render, info: uinfo }) {
    const context = useContextWithWarning(TabPanelsContext, "tabs");
    const info = useTabPanel({
        context,
        info: { index, ...uinfo }
    });
    return render(info);
}

const ToastContext = F$2(null);
const Toasts = memoForwardRef(function Toasts({ onAfterChildLayoutEffect, onChildrenMountChange, render, visibleCount }, ref) {
    const info = useToasts({ managedChildrenParameters: { onAfterChildLayoutEffect, onChildrenMountChange }, toastsParameters: { visibleCount } });
    A(ref, () => info);
    return (o$1(ToastContext.Provider, { value: info.context, children: render(info) }));
});
const Toast = memoForwardRef(function Toast({ render, index, timeout, politeness, children }, ref) {
    const context = useContextWithWarning(ToastContext, "toasts provider");
    console.assert(context != null, `This Toast was not rendered within a Toasts provider`);
    const info = useToast({
        info: { index },
        toastParameters: { timeout, politeness, children },
        context
    });
    A(ref, () => info);
    return render(info);
});

// TODO: Are there performance/sanity implications for having one context per primitive?
const UntabbableContext = F$2(false);
const AriaPropNameContext = F$2("aria-selected");
const SelectionModeContext = F$2("focus");
const ToolbarContext = F$2(null);
const Toolbar = memoForwardRef(function ToolbarU({ render, role, collator, disableHomeEndKeys, disabled, compare, getIndex, navigatePastEnd, navigatePastStart, pageNavigationSize, selectedIndex, onSelectedIndexChange, orientation, noTypeahead, onTabbableIndexChange, typeaheadTimeout, staggered, ariaLabel, ariaPropName, selectionMode, untabbable, onNavigateLinear, onNavigateTypeahead }, ref) {
    ariaPropName ??= "aria-selected";
    selectionMode ??= "activation";
    untabbable ||= false;
    const listboxReturnType = useToolbar({
        rearrangeableChildrenParameters: { getIndex: useDefault("getIndex", getIndex) },
        sortableChildrenParameters: { compare: compare ?? null },
        linearNavigationParameters: {
            onNavigateLinear,
            disableHomeEndKeys: useDefault("disableHomeEndKeys", disableHomeEndKeys),
            navigatePastEnd: navigatePastEnd ?? "wrap",
            navigatePastStart: navigatePastStart ?? "wrap",
            pageNavigationSize: useDefault("pageNavigationSize", pageNavigationSize)
        },
        toolbarParameters: {
            orientation,
            disabled: disabled || false,
            role: role ?? "toolbar",
            selectedIndex: selectedIndex ?? null,
            onSelectedIndexChange: onSelectedIndexChange ?? null
        },
        staggeredChildrenParameters: { staggered: staggered || false },
        rovingTabIndexParameters: { onTabbableIndexChange: onTabbableIndexChange ?? null, untabbable },
        typeaheadNavigationParameters: {
            onNavigateTypeahead,
            collator: useDefault("collator", collator),
            noTypeahead: useDefault("noTypeahead", noTypeahead),
            typeaheadTimeout: useDefault("typeaheadTimeout", typeaheadTimeout)
        },
        labelParameters: { ariaLabel },
        singleSelectionParameters: { ariaPropName: ariaPropName, selectionMode }
    });
    A(ref, () => listboxReturnType);
    return (o$1(AriaPropNameContext.Provider, { value: ariaPropName, children: o$1(SelectionModeContext.Provider, { value: selectionMode, children: o$1(UntabbableContext.Provider, { value: untabbable, children: o$1(ToolbarContext.Provider, { value: listboxReturnType.context, children: render(listboxReturnType) }) }) }) }));
});
const ToolbarChild = memoForwardRef(function ToolbarChildU({ index, render, focusSelf, getSortValue, getText, unselectable, disabledProp, untabbable, info: uinfo }, ref) {
    const context = useContextWithWarning(ToolbarContext, "toolbar");
    console.assert(context != null, `This ToolbarChild is not contained within a Toolbar`);
    const focusSelfDefault = T$1((e) => { focus(e); }, []);
    focusSelf ??= focusSelfDefault;
    const info = useToolbarChild({
        context,
        toolbarChildParameters: { disabledProp },
        info: { index, focusSelf, unselectable, untabbable, getSortValue, ...uinfo },
        textContentParameters: { getText: useDefault("getText", getText) },
    });
    A(ref, () => info);
    return (o$1(_$2, { children: render(info) }));
});

const Tooltip = memoForwardRef(function TooltipU({ onStatus, getWindow, parentDepth, hoverDelay, render, tooltipSemanticType }, ref) {
    const defaultParentDepth = q$1(ParentDepthContext);
    let myDepth = (parentDepth ?? defaultParentDepth) + 1;
    const info = useTooltip({
        escapeDismissParameters: {
            getWindow: useDefault("getWindow", getWindow),
            parentDepth: parentDepth ?? defaultParentDepth
        },
        tooltipParameters: {
            onStatus,
            tooltipSemanticType,
            hoverDelay: hoverDelay ?? null
        }
    });
    A(ref, () => info);
    return (o$1(ParentDepthContext.Provider, { value: myDepth, children: render(info) }));
});

export { Accordion, AccordionSection, Button, Checkbox, CheckboxGroup, CheckboxGroupChild, CheckboxGroupParent, Dialog, Drawer, EventDetail, Gridlist, GridlistChild, GridlistRow, GroupedListbox, Heading, HeadingReset, Listbox, ListboxItem, Menu, MenuItem, Menubar, MenubarItem, NotificationProviderContext, ParentDepthContext, Progress, ProgressWithHandler, Radio, RadioGroup, Slider, SliderThumb, Tab, TabPanel, Table, TableCell, TableRow, TableSection, Tabs, Toast, Toasts, Toolbar, ToolbarChild, Tooltip, defaultRenderCheckboxLike, defaultRenderGridlistChild, defaultRenderPortal, setDebugLogging, useAccordion, useAccordionSection, useButton, useCheckbox, useCheckboxGroup, useCheckboxGroupChild, useCheckboxGroupParent, useCheckboxLike, useDefault, useDialog, useDrawer, useFocusSentinel, useGridlist, useGridlistCell, useGridlistRow, useLabel, useLabelSynthetic, useListbox, useListboxItem, useMenu, useMenuItem, useMenuSurface, useMenubar, useMenubarChild, useNotificationProvider, useNotify, useProgress, useProgressWithHandler, useRadio, useRadioGroup, useSlider, useSliderThumb, useTab, useTabPanel, useTable, useTableCell, useTableRow, useTableSection, useTabs, useToast, useToasts, useToolbar, useToolbarChild, useTooltip };
//# sourceMappingURL=index.react.js.map
