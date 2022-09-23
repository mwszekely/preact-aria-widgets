import { h } from "preact";
import { useMergedProps, usePress } from "preact-prop-helpers";
import { debugLog, EnhancedEvent, enhanceEvent, TagSensitiveProps } from "./props";


export type ButtonPressEvent<E extends EventTarget> = EnhancedEvent<E, Event | Event, { pressed: boolean | null }>;

export interface UseAriaButtonParameters<E extends EventTarget> extends TagSensitiveProps<E> {
    disabled?: boolean | "soft" | "hard";
    pressed?: boolean | null | undefined;
    onPress?(event: ButtonPressEvent<E>): void;
}

export interface UseAriaButtonReturnType<E extends EventTarget> {
    /** *Unstable* */
    useAriaButtonProps: (props: h.JSX.HTMLAttributes<E>) => h.JSX.HTMLAttributes<E>;
}



export function useAriaButton<E extends EventTarget>({ tag, pressed, onPress, disabled }: UseAriaButtonParameters<E>): UseAriaButtonReturnType<E> {
    debugLog("useAriaButton");

    function useAriaButtonProps({ "aria-pressed": ariaPressed, tabIndex, role, ...p }: h.JSX.HTMLAttributes<E>): h.JSX.HTMLAttributes<E> {

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
        useAriaButtonProps
    }
}


