import { h } from "preact";
import { useMergedProps, usePress, useRefElement, UseRefElementParameters, useStableCallback } from "preact-prop-helpers";
import { useCallback } from "preact/hooks";
import { debugLog, DisabledType, ElementToTag, EnhancedEvent, enhanceEvent } from "./props";


export type ButtonPressEvent<E extends EventTarget> = EnhancedEvent<E, Event | Event, { pressed: boolean | null }>;

export interface UseButtonParameters<E extends Node> extends UseRefElementParameters<E> {
    buttonParameters: {
        tagButton: ElementToTag<E>;
        disabled?: DisabledType;
        pressed?: boolean | null | undefined;
        onPress?(event: ButtonPressEvent<E>): void;
    }
}

export interface UseButtonReturnType<E extends EventTarget> {
    /** *Unstable* */
    useButtonProps: (props: h.JSX.HTMLAttributes<E>) => h.JSX.HTMLAttributes<E>;
}



export function useButton<E extends Element>({ buttonParameters: { tagButton, disabled, onPress, pressed }, refElementParameters }: UseButtonParameters<E>): UseButtonReturnType<E> {
    debugLog("useButton");

    const { refElementReturn } = useRefElement<E>({ refElementParameters });
    const focusSelf = useCallback((e: any) => (e as Element as HTMLElement).focus?.(), [])
    const { pressReturn } = usePress<E>({
        refElementReturn,
        pressParameters: {
            onClickSync: (e) => (disabled ? null : onPress)?.(enhanceEvent(e, { pressed: pressed == null ? null : !pressed })),
            exclude: undefined,
            focusSelf,
        },
    });

    const { propsStable, propsUnstable } = pressReturn;

    function useButtonProps({ "aria-pressed": ariaPressed, tabIndex, role, ...p }: h.JSX.HTMLAttributes<E>): h.JSX.HTMLAttributes<E> {

        const props = useMergedProps(propsStable, propsUnstable, p);

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


