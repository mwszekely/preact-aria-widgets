import { h } from "preact";
import { MergedProps, useEffect, useGlobalHandler, useMergedProps, useRefElement, useStableCallback, useState } from "preact-prop-helpers";
import { useRef } from "preact/hooks";
import { enhanceEvent, EventDetail, TagSensitiveProps } from "./props";

let pulse = ("vibrate" in navigator) ? (() => navigator.vibrate(10)) : (() => { });

/**
 * This function can be used to enable/disable button vibration pulses on an app-wide scale.
 * 
 * 
 * @param func The function to run when a button is tapped.
 * (Default is `() => navigator.vibrate(10)` in browsers that support it, a noop otherwise)
 */
export function setButtonVibrate(func: () => void) {
    pulse = func;
}

export type ButtonPressEvent<EventType extends Event> = EventType & { [EventDetail]: { pressed: boolean | null } };

export interface UseAriaButtonParameters<E extends EventTarget> extends TagSensitiveProps<E> {
    pressed?: boolean | null | undefined;
    onPress?(event: ButtonPressEvent<h.JSX.TargetedMouseEvent<E>> | ButtonPressEvent<h.JSX.TargetedKeyboardEvent<E> | ButtonPressEvent<h.JSX.TargetedEvent<E>>>): void;
}

export interface UseAriaButtonReturnType<E extends EventTarget> {
    useAriaButtonProps: UseAriaButtonProps<E>;
}

export type UseAriaButtonProps<E extends EventTarget> = <P extends UseAriaButtonPropsParameters<E>>(props: P) => UseAriaButtonPropsReturnType<E, P>;

export interface UseAriaButtonPropsParameters<E extends EventTarget> extends h.JSX.HTMLAttributes<E> { }
export type UseAriaButtonPropsReturnType<E extends EventTarget, P extends UseAriaButtonPropsParameters<E>> =
    MergedProps<E, { "aria-pressed": string | undefined; role: string; tabIndex: number; onKeyDown: h.JSX.KeyboardEventHandler<E>; onKeyUp: h.JSX.KeyboardEventHandler<E>; }, Omit<P, "aria-pressed" | "tabIndex" | "role">> |
    MergedProps<E, { "aria-pressed": string | undefined; }, Omit<P, "aria-pressed" | "tabIndex" | "role">>;


function excludes<E extends EventTarget>(target: "click" | "space" | "enter", exclude: undefined | { click?: "exclude" | undefined, space?: "exclude" | undefined, enter?: "exclude" | undefined }) {
    if (exclude?.[target])
        return true;

    return false;
}

/**
 * selection.containsNode doesn't account for selection.isCollapsed,
 * so here's a workaround for that.
 * 
 * @param element 
 * @returns 
 */
function nodeHasSelectedText(element: EventTarget | null) {
    if (element && element instanceof Node) {
        const selection = window.getSelection();
        if (selection?.containsNode(element, true) && !selection.isCollapsed) {
            return true;
        }
    }

    return false;
}

/**
 * Adds the necessary event handlers to create a "press"-like event for
 * buttons and anything else that's "click/tap/press/touch"-able.
 * 
 * Notably, the following cases are covered:
 * * The target element is properly focused, even on iOS Safari (*especially* on iOS Safari)
 * * Double-clicks won't select text. 
 * * Conversely, manually selecting text won't invoke a press.
 * * Keyboard events &mdash; `enter` immediately invokes the handler, while `space` invokes it on keyup.
 * * Haptic feedback (on, like, the one browser combination that supports it &mdash; this can be disabled app-wide with `setButtonVibrate`)
 * 
 * In addition, when the CSS `:active` pseudo-class would apply to a normal button
 * (i.e. when holding the spacebar or during mousedown), `{ "data-pseudo-active": "true" }`
 * is added to the props.  You can either let it pass through and style it through new CSS,
 * or inspect the returned props for it and add e.g. an `.active` class for existing CSS
 * 
 * @param onClickSync 
 * @param exclude Whether the polyfill shouldn't apply (can specify for specific interactions)
 */
export function usePressEventHandlers<E extends EventTarget>(onClickSync: ((e: h.JSX.TargetedEvent<E>) => void) | null | undefined, exclude: undefined | { click?: "exclude" | undefined, space?: "exclude" | undefined, enter?: "exclude" | undefined }) {

    const { useRefElementProps, getElement } = useRefElement<E>({});

    // A button can be activated in multiple ways, so on the off chance
    // that multiple are triggered at once, we only *actually* register
    // a press once all of our "on" signals have turned back to "off".
    // We approximate this by just incrementing when active, and
    // decrementing when deactivated.
    //
    // As an emergency failsafe, when the element looses focus,
    // this is reset back to 0.
    const [active, setActive, getActive] = useState(0);

    // If we the current text selection changes to include this element
    // DURING e.g. a mousedown, then we don't want the mouseup to "count", as it were,
    // because its only purpose was selecting text, not clicking buttons.
    //
    // To catch this, any time the text selection includes us while in the middle
    // of a click, this flag is set, which cancels the activation of a press.
    // The flag is reset any time the selection is empty or the button is
    // no longer active.
    const [textSelectedDuringActivation, setTextSelectedDuringActivation] = useState(false);

    useGlobalHandler(document, "selectionchange", e => {
        setTextSelectedDuringActivation(active == 0 ? false : nodeHasSelectedText(getElement()));
    });

    useEffect(() => {
        if (active == 0)
            setTextSelectedDuringActivation(false);
    }, [active == 0]);

    const onActiveStart = useStableCallback<NonNullable<typeof onClickSync>>((e) => {
        setActive(a => ++a);
    });

    const onActiveStop = useStableCallback<NonNullable<typeof onClickSync>>((e) => {
        setActive(a => Math.max(0, --a));


        if (textSelectedDuringActivation) {
            e.preventDefault();
            return;
        }

        if (getActive() <= 0) {
            handlePress(e);
        }
    });

    const handlePress = useStableCallback<NonNullable<typeof onClickSync>>((e) => {
        if (onClickSync) {

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
            if (element && "focus" in (element as EventTarget as HTMLElement))
                (element as EventTarget as HTMLElement | null)?.focus();

            // Whatever the browser was going to do with this event,
            // forget it. We're turning it into a "press" event.
            e.preventDefault();

            // Also stop anyone else from listening to this event,
            // since we're explicitly handling it.
            // (Notably, this allows labels to wrap inputs, with them
            // both having press event handlers, without double-firing)
            e.stopPropagation();

            // Haptic feedback for this press event
            pulse();

            // Actually call our handler.
            onClickSync(e);
        }
    });

    const onMouseDown = excludes("click", exclude) ? undefined : (e: h.JSX.TargetedMouseEvent<E>) => {
        // Stop double clicks from selecting text in an component that's *supposed* to be acting like a button,
        // but also don't prevent the user from selecting that text manually if they really want to
        // (which user-select: none would do, but cancelling a double click on mouseDown doesn't)
        if (e.detail > 1)
            e.preventDefault();


        if (e.button === 0)
            onActiveStart(e);
    }
    const onMouseUp = excludes("click", exclude) ? undefined : (e: h.JSX.TargetedMouseEvent<E>) => {
        if (e.button === 0 && active > 0)
            onActiveStop(e);
    };

    const onBlur = (e: h.JSX.TargetedEvent<E>) => {
        setActive(0);
    }


    const onMouseLeave = excludes("click", exclude) ? undefined : onBlur;

    const onKeyDown = excludes("space", exclude) && excludes("enter", exclude) ? undefined : (e: h.JSX.TargetedKeyboardEvent<E>) => {
        if (e.key == " " && onClickSync && !excludes("space", exclude)) {
            // We don't actually activate it on a space keydown
            // but we do preventDefault to stop the page from scrolling.
            onActiveStart(e);
            e.preventDefault();
        }

        if (e.key == "Enter" && !excludes("enter", exclude)) {
            e.preventDefault();
            onActiveStart(e);
            onActiveStop(e);
        }
    }

    const onKeyUp = excludes("space", exclude) ? undefined : (e: h.JSX.TargetedKeyboardEvent<E>) => {
        if (e.key == " " && !excludes("space", exclude))
            onActiveStop(e);
    }

    const onClick = (e: h.JSX.TargetedMouseEvent<E>) => {
        e.preventDefault();
        if (e.detail > 1) {
            e.stopImmediatePropagation();
            e.stopPropagation();
        }
    }

    return <P extends h.JSX.HTMLAttributes<E>>(props: P) => useRefElementProps(useMergedProps<E>()({ onKeyDown, onKeyUp, onBlur, onMouseDown, onMouseUp, onMouseLeave, onClick, ...{ "data-pseudo-active": active && !textSelectedDuringActivation ? "true" : undefined } as {} }, props));
}

export function useAriaButton<E extends EventTarget>({ tag, pressed, onPress }: UseAriaButtonParameters<E>): UseAriaButtonReturnType<E> {

    function useAriaButtonProps<P extends UseAriaButtonPropsParameters<E>>({ "aria-pressed": ariaPressed, tabIndex, role, ...p }: P): UseAriaButtonPropsReturnType<E, P> {

        const props = usePressEventHandlers<E>((e) => onPress?.(enhanceEvent(e, { pressed: pressed == null ? null : !pressed })), undefined)(p);

        const buttonProps = { role, tabIndex, "aria-pressed": ariaPressed ?? (pressed === true ? "true" : pressed === false ? "false" : undefined) };
        const divProps = { ...buttonProps, tabIndex: tabIndex ?? 0, role: role ?? "button" };
        const anchorProps = { ...divProps };

        switch (tag) {
            case "button":
                return useMergedProps<E>()(buttonProps as any, props as any);

            case "a":
                return useMergedProps<E>()(anchorProps as any, props as any);

            default:
                return useMergedProps<E>()(divProps as any, props as any);
        }
    }

    return {
        useAriaButtonProps
    }
}


