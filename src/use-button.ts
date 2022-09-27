import { h } from "preact";
import { UseHasFocusParameters, useMergedProps, usePress } from "preact-prop-helpers";
import { debugLog, ElementToTag, EnhancedEvent, enhanceEvent } from "./props";


export type ButtonPressEvent<E extends EventTarget> = EnhancedEvent<E, Event | Event, { pressed: boolean | null }>;

export interface UseButtonParameters<E extends Node> {
    button: {
        tagButton: ElementToTag<E>;
        disabled?: boolean | "soft" | "hard";
        pressed?: boolean | null | undefined;
        onPress?(event: ButtonPressEvent<E>): void;
    }
    hasFocus: UseHasFocusParameters<E>;
}

export interface UseButtonReturnType<E extends EventTarget> {
    /** *Unstable* */
    useButtonProps: (props: h.JSX.HTMLAttributes<E>) => h.JSX.HTMLAttributes<E>;
}



export function useButton<E extends Node>({ button: { tagButton, disabled, onPress, pressed }, hasFocus }: UseButtonParameters<E>): UseButtonReturnType<E> {
    debugLog("useButton");

    function useButtonProps({ "aria-pressed": ariaPressed, tabIndex, role, ...p }: h.JSX.HTMLAttributes<E>): h.JSX.HTMLAttributes<E> {

        const usePressProps = usePress<E>({
            onClickSync: (e) => (disabled ? null : onPress)?.(enhanceEvent(e, { pressed: pressed == null ? null : !pressed })),
            exclude: undefined,
            hasFocus
        });
        const props = usePressProps(p);

        const baseProps = { role, tabIndex, "aria-pressed": ariaPressed ?? (pressed === true ? "true" : pressed === false ? "false" : undefined) };
        const buttonProps = { ...baseProps, disabled: (disabled && disabled != "soft") ? true : false, "aria-disabled": (disabled === 'soft' ? 'true' : undefined) };
        const divProps = { ...baseProps, tabIndex: tabIndex ?? (disabled === "hard" ? -1 : 0), role: role ?? "button", "aria-disabled": disabled ? "true" : undefined };
        switch (tagButton) {
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


