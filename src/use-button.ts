import { ClassAttributes, h, Ref } from "preact";
import { useAsyncHandler, UseAsyncHandlerParameters, UseAsyncHandlerReturnType } from "preact-prop-helpers/use-async-handler";
import { MergedProps, useMergedProps } from "preact-prop-helpers/use-merged-props";
import { ElementFromTag, TagSensitiveProps } from "./props";

export interface UseAriaButtonParameters<E extends EventTarget> extends TagSensitiveProps<E>, Pick<UseAsyncHandlerParameters<E, "onClick", boolean | undefined>, "debounce"> {
    pressed?: boolean | null | undefined;
    onClick?(): void | Promise<void>;
    onClick?(pressed: boolean): void | Promise<void>;
}

export interface UseAriaButtonReturnType<E extends EventTarget> {
    useAriaButtonProps: UseAriaButtonProps<E>;
    asyncInfo: Omit<UseAsyncHandlerReturnType<E, "onClick", boolean | null | undefined>, "getSyncOnClick">;
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

// Handles keyDown for Enter, keyUp for Space, and click.
export function useButtonLikeEventHandlers<E extends EventTarget>(onClick: h.JSX.MouseEventHandler<E> | null | undefined, exclude?: "exclude" | { click?: "exclude" | undefined, space?: "exclude" | undefined, enter?: "exclude" | undefined }) {

    const onKeyUp: h.JSX.KeyboardEventHandler<E> = (e) => {
        if (e.key == " " && onClick && !excludes("space", exclude)) {
            e.preventDefault();
            onClick.bind(e.target as never)(e as h.JSX.TargetedEvent<E> as h.JSX.TargetedMouseEvent<E>);
        }
    }

    const onKeyDown: h.JSX.KeyboardEventHandler<E> = (e) => {
        if (e.key == " " && onClick && !excludes("space", exclude)) {
            // We don't actually activate it on a space keydown
            // but we do preventDefault to stop the page from scrolling.
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

    return <P extends h.JSX.HTMLAttributes<E>>(props: P) => useMergedProps<E>()({ onKeyDown, onKeyUp, onClick: onClick2 }, props);
}

export function useAriaButton<E extends EventTarget>({ tag, pressed, onClick: onClickAsync, debounce }: UseAriaButtonParameters<E>): UseAriaButtonReturnType<E> {

    const { getSyncOnClick, ...asyncInfo } = useAsyncHandler<E>()({ capture: () => pressed == undefined? pressed : !pressed, event: "onClick", debounce });

    const onClick = getSyncOnClick(asyncInfo.pending? null : onClickAsync)

    function useAriaButtonProps<P extends UseAriaButtonPropsParameters<E>>({ "aria-pressed": ariaPressed, tabIndex, role, ...p }: P): UseAriaButtonPropsReturnType<E, P> {




        const props = useButtonLikeEventHandlers<E>(onClick, {
            space: tag == "button" ? "exclude" : undefined,
            enter: tag == "button" ? "exclude" : undefined,
            click: undefined,
        })(p)


        const buttonProps = { role, tabIndex, "aria-pressed": ariaPressed ?? (pressed === true ? "true" : pressed === false ? "false" : undefined) };
        const divProps = { ...buttonProps, tabIndex: tabIndex ?? 0, role: role ?? "button" };
        const anchorProps = { ...divProps };


        switch (tag) {
            case "button":
                return useMergedProps<E>()(buttonProps, props);

            case "a":
                return useMergedProps<E>()(anchorProps, props);

            default:
                return useMergedProps<E>()(divProps, props);
        }
    }

    return {
        useAriaButtonProps,
        asyncInfo
    }
}


