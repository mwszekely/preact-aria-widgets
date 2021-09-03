import { ClassAttributes, h, Ref } from "preact";
import { MergedProps, useMergedProps } from "preact-prop-helpers/use-merged-props";
import { useState } from "preact-prop-helpers/use-state";
import { ElementFromTag, EventDetail, TagSensitiveProps, enhanceEvent, ElementToTag } from "./props";

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
    onClick?(event: ButtonPressEvent<h.JSX.TargetedMouseEvent<E>> | ButtonPressEvent<h.JSX.TargetedKeyboardEvent<E> | ButtonPressEvent<h.JSX.TargetedEvent<E>>>): void;
}

export interface UseAriaButtonReturnType<E extends EventTarget> {
    useAriaButtonProps: UseAriaButtonProps<E>;
}

export type UseAriaButtonProps<E extends EventTarget> = <P extends UseAriaButtonPropsParameters<E>>(props: P) => UseAriaButtonPropsReturnType<E, P>;

export interface UseAriaButtonPropsParameters<E extends EventTarget> extends h.JSX.HTMLAttributes<E> { }
export type UseAriaButtonPropsReturnType<E extends EventTarget, P extends UseAriaButtonPropsParameters<E>> =
    MergedProps<E, { "aria-pressed": string | undefined; role: string; tabIndex: number; onKeyDown: h.JSX.KeyboardEventHandler<E>; onKeyUp: h.JSX.KeyboardEventHandler<E>; }, Omit<P, "aria-pressed" | "tabIndex" | "role">> |
    MergedProps<E, { "aria-pressed": string | undefined; }, Omit<P, "aria-pressed" | "tabIndex" | "role">>;


function excludes<E extends EventTarget>(tag: ElementToTag<E>, target: "click" | "space" | "enter", exclude: undefined | { click?: "exclude" | undefined, space?: "exclude" | undefined, enter?: "exclude" | undefined }) {
    if (exclude?.[target])
        return true;

    if (target === "space" || target === "enter")
        return tag == "button";

    return false;
}

/**
 * Easy way to "polyfill" button-like interactions onto, e.g., a div.
 * 
 * Adds click, space on keyDown, and enter on keyUp, as well as haptic
 * feedback via a momentary vibration pulse when there's an onClick handler provided
 * (this can be disabled app-wide with `setButtonVibrate`).
 * 
 * In addition, when the CSS `:active` pseudo-class would apply to a normal button
 * (i.e. when holding the spacebar or during mousedown), `{ "data-pseudo-active": "true" }`
 * is added to the props.  You can either let it pass through and style it through new CSS,
 * or inspect the returned props for it and add e.g. an `.active` class for existing CSS
 * 
 * @param onClick 
 * @param exclude Whether the polyfill should apply (can specify for specific interactions)
 */
export function useButtonLikeEventHandlers<E extends EventTarget>(tag: ElementToTag<E>, onClickSync: ((e: h.JSX.TargetedEvent<E>) => void) | null | undefined, exclude: undefined | { click?: "exclude" | undefined, space?: "exclude" | undefined, enter?: "exclude" | undefined }) {

    //type E = Ev extends h.JSX.TargetedEvent<infer E, any>? E : EventTarget;


    const [active, setActive] = useState(false);

    const onKeyUp = excludes(tag, "space", exclude)? undefined : (e: h.JSX.TargetedKeyboardEvent<E>) => {
        if (e.key == " " && onClickSync) {
            e.preventDefault();
            onClickSync(e);
            setActive(false);
        }
    }

    const onMouseDown = excludes(tag, "click", exclude)? undefined : (e: h.JSX.TargetedMouseEvent<E>) => {
        if (e.button === 0)
            setActive(true);
    }

    const onBlur: h.JSX.EventHandler<h.JSX.TargetedEvent<E>> = (e) => {
        setActive(false);
    }

    const onMouseUp = excludes(tag, "click", exclude)? undefined : onBlur;

    const onMouseOut = excludes(tag, "click", exclude)? undefined : onBlur;

    const onKeyDown = excludes(tag, "space", exclude) && excludes(tag, "enter", exclude)? undefined : (e: h.JSX.TargetedKeyboardEvent<E>) => {
        if (e.key == " " && onClickSync && !excludes(tag, "space", exclude)) {
            // We don't actually activate it on a space keydown
            // but we do preventDefault to stop the page from scrolling.
            setActive(true);
            e.preventDefault();
        }

        if (e.key == "Enter" && onClickSync && !excludes(tag, "enter", exclude)) {
            e.preventDefault();
            onClickSync(e);
        }
    }

    const onClick2 = excludes(tag, "click", exclude) ? undefined : ((e: h.JSX.TargetedMouseEvent<E>) => {
        if (onClickSync && !excludes(tag, "click", exclude)) {
            pulse();
            onClickSync(e);
        }
    })

    return <P extends h.JSX.HTMLAttributes<E>>(props: P) => useMergedProps<E>()({ onKeyDown, onKeyUp, onClick: onClick2, onBlur, onMouseDown, onMouseUp, onMouseOut, ...{ "data-pseudo-active": active ? "true" : undefined } as {} }, props);
}

export function useAriaButton<E extends EventTarget>({ tag, pressed, onClick }: UseAriaButtonParameters<E>): UseAriaButtonReturnType<E> {

    function useAriaButtonProps<P extends UseAriaButtonPropsParameters<E>>({ "aria-pressed": ariaPressed, tabIndex, role, ...p }: P): UseAriaButtonPropsReturnType<E, P> {

        const props = useButtonLikeEventHandlers<E>(tag, (e) => onClick?.(enhanceEvent(e, { pressed: pressed == null ? null : !pressed })), undefined)(p);

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


