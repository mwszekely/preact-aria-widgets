import { h } from "preact";
import { useMergedProps, usePress } from "preact-prop-helpers";
import { debugLog, EnhancedEvent, enhanceEvent, TagSensitiveProps } from "./props";


export type ButtonPressEvent<E extends EventTarget> = EnhancedEvent<E, Event | Event, { pressed: boolean | null }>;

export interface UseButtonParameters<E extends EventTarget> extends TagSensitiveProps<E> {
    disabled?: boolean | "soft" | "hard";
    pressed?: boolean | null | undefined;
    onPress?(event: ButtonPressEvent<E>): void;
}

export interface UseButtonReturnType<E extends EventTarget> {
    /** *Unstable* */
    useButtonProps: (props: h.JSX.HTMLAttributes<E>) => h.JSX.HTMLAttributes<E>;
}



export function useButton<E extends EventTarget>({ tag, pressed, onPress, disabled }: UseButtonParameters<E>): UseButtonReturnType<E> {
    debugLog("useButton");

    function useButtonProps({ "aria-pressed": ariaPressed, tabIndex, role, ...p }: h.JSX.HTMLAttributes<E>): h.JSX.HTMLAttributes<E> {

        const usePressProps = usePress<E>((e) => (disabled ? null : onPress)?.(enhanceEvent(e, { pressed: pressed == null ? null : !pressed })), undefined);
        const props = usePressProps(p);

        const baseProps = { role, tabIndex, "aria-pressed": ariaPressed ?? (pressed === true ? "true" : pressed === false ? "false" : undefined) };
        const buttonProps = { ...baseProps, disabled: (disabled && disabled != "soft") ? true : false, "aria-disabled": (disabled === 'soft' ? 'true' : undefined) };
        const divProps = { ...baseProps, tabIndex: tabIndex ?? (disabled === "hard" ? -1 : 0), role: role ?? "button", "aria-disabled": disabled ? "true" : undefined };
        switch (tag) {
            case "button":
                return useMergedProps<E>(buttonProps, props);

            default:
                return useMergedProps<E>(divProps, props);
        }
    }

    return {
        useButtonProps
    }
}


