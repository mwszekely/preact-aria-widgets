import { ClassAttributes, h, Ref } from "preact";
import { useAsyncHandler, UseAsyncHandlerParameters, UseAsyncHandlerReturnType } from "preact-prop-helpers/use-async-handler";
import { MergedProps, useMergedProps } from "preact-prop-helpers/use-merged-props";
import { useState } from "preact-prop-helpers/use-state";
import { ElementFromTag, TagSensitiveProps } from "./props";

export interface UseAriaButtonParameters<E extends EventTarget> extends TagSensitiveProps<E>, Pick<UseAsyncHandlerParameters<E, h.JSX.TargetedEvent<E, Event>, boolean | undefined>, "debounce"> {
    pressed?: boolean | null | undefined;
    onClick?(): void | Promise<void>;
    onClick?(pressed: boolean): void | Promise<void>;
}

export interface UseAriaButtonReturnType<E extends EventTarget> {
    useAriaButtonProps: UseAriaButtonProps<E>;
    asyncInfo: Omit<UseAsyncHandlerReturnType<E, h.JSX.TargetedEvent<E, Event>, boolean | null | undefined>, "getSyncHandler">;
}

export type UseAriaButtonProps<E extends EventTarget> = <P extends UseAriaButtonPropsParameters<E>>(props: P) => UseAriaButtonPropsReturnType<E, P>;

export interface UseAriaButtonPropsParameters<E extends EventTarget> extends h.JSX.HTMLAttributes<E> { }
export type UseAriaButtonPropsReturnType<E extends EventTarget, P extends UseAriaButtonPropsParameters<E>> =
    MergedProps<E, { "aria-pressed": string | undefined; role: string; tabIndex: number; onKeyDown: h.JSX.KeyboardEventHandler<E>; onKeyUp: h.JSX.KeyboardEventHandler<E>; }, Omit<P, "aria-pressed" | "tabIndex" | "role">> |
    MergedProps<E, { "aria-pressed": string | undefined; }, Omit<P, "aria-pressed" | "tabIndex" | "role">>;

function excludes(target: "click" | "space" | "enter", exclude: undefined | "exclude" | { click?: "exclude" | undefined, space?: "exclude" | undefined, enter?: "exclude" | undefined }) {
    if (exclude == "exclude")
        return true;
    return !!exclude?.[target];
}

/**
 * Easy way to "polyfill" button-like interactions onto, e.g., a div.
 * 
 * Adds click, space on keyDown, and enter on keyUp.
 * 
 * In addition, when the CSS `:active` pseudo-class would apply to a normal button
 * (i.e. when holding the spacebar or during mousedown), { "data-pseudo-active": "true" }
 * is added to the props.  You can either let it pass through and style it through new CSS,
 * or inspect the returned props for it and add e.g. an `.active` class for existing CSS
 * 
 * @param onClick 
 * @param exclude Whether the polyfill should apply (can specify for specific interactions)
 */
export function useButtonLikeEventHandlers<E extends EventTarget>(onClick: h.JSX.MouseEventHandler<E> | null | undefined, exclude?: "exclude" | { click?: "exclude" | undefined, space?: "exclude" | undefined, enter?: "exclude" | undefined }) {

    const [active, setActive] = useState(false);

    const onKeyUp: h.JSX.KeyboardEventHandler<E> = (e) => {
        if (e.key == " " && onClick && !excludes("space", exclude)) {
            e.preventDefault();
            onClick.bind(e.target as never)(e as h.JSX.TargetedEvent<E> as h.JSX.TargetedMouseEvent<E>);
            setActive(false);
        }
    }

    const onMouseDown: h.JSX.MouseEventHandler<E> = (e) => {
        if (e.button === 0)
            setActive(true);
    }

    const onBlur: h.JSX.EventHandler<h.JSX.TargetedEvent<E>> = (e) => {
        setActive(false);
    }

    const onMouseUp = onBlur;

    const onMouseOut = onBlur;

    const onKeyDown: h.JSX.KeyboardEventHandler<E> = (e) => {
        if (e.key == " " && onClick && !excludes("space", exclude)) {
            // We don't actually activate it on a space keydown
            // but we do preventDefault to stop the page from scrolling.
            setActive(true);
            e.preventDefault();
        }

        if (e.key == "Enter" && onClick && !excludes("enter", exclude)) {
            e.preventDefault();
            onClick.bind(e.target as never)(e as h.JSX.TargetedEvent<E> as h.JSX.TargetedMouseEvent<E>);
        }
    }

    const onClick2: typeof onClick = e => {
        if (onClick && !excludes("click", exclude)) {
            onClick.bind(e.target as never)(e as h.JSX.TargetedEvent<E> as h.JSX.TargetedMouseEvent<E>);
        }
    }

    return <P extends h.JSX.HTMLAttributes<E>>(props: P) => useMergedProps<E>()({ onKeyDown, onKeyUp, onClick: onClick2, onBlur, onMouseDown, onMouseUp, onMouseOut, ...{ "data-pseudo-active": active ? "true" : undefined } as {} }, props);
}

export function useAriaButton<E extends EventTarget>({ tag, pressed, onClick: onClickAsync, debounce }: UseAriaButtonParameters<E>): UseAriaButtonReturnType<E> {

    const { getSyncHandler, ...asyncInfo } = useAsyncHandler<E>()({ capture: () => pressed == undefined ? pressed : !pressed, debounce });
    const onClick = getSyncHandler(asyncInfo.pending ? null : (onClickAsync ?? null));

    function useAriaButtonProps<P extends UseAriaButtonPropsParameters<E>>({ "aria-pressed": ariaPressed, "aria-disabled": ariaDisabled, tabIndex, role, ...p }: P): UseAriaButtonPropsReturnType<E, P> {

        const props = useButtonLikeEventHandlers<E>(onClick, {
            space: tag == "button" ? "exclude" : undefined,
            enter: tag == "button" ? "exclude" : undefined,
            click: undefined,
        })(p)


        const buttonProps = { role, tabIndex, "aria-disabled": (asyncInfo.pending || ariaDisabled), "aria-pressed": ariaPressed ?? (pressed === true ? "true" : pressed === false ? "false" : undefined) };
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
        useAriaButtonProps,
        asyncInfo
    }
}


