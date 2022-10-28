import { h } from "preact";
import { assertEmptyObject, useMergedProps, usePress, UsePressParameters, UsePressReturnType, useRefElement, UseRefElementParameters, UseRefElementReturnType, useStableCallback } from "preact-prop-helpers";
import { useCallback } from "preact/hooks";
import { debugLog, DisabledType, ElementToTag, EnhancedEvent, enhanceEvent } from "./props";


export type ButtonPressEvent<E extends EventTarget> = EnhancedEvent<E, Event | Event, { pressed: boolean | null }>;

export interface UseButtonParameters<E extends Node> extends UseRefElementParameters<E> {
    pressParameters: UsePressParameters<E, "onPressSync" | "focusSelf">["pressParameters"];
    buttonParameters: {
        tagButton: ElementToTag<E>;
        disabled?: DisabledType;
        pressed?: boolean | null | undefined;
        onPress?(event: ButtonPressEvent<E>): void;
    }
}

export interface UseButtonReturnType<E extends Element> extends UsePressReturnType<E>, UseRefElementReturnType<E> {
    buttonReturn: { propsUnstable: h.JSX.HTMLAttributes<E>; }
    /** *Unstable* */
    //useButtonProps: (props: h.JSX.HTMLAttributes<E>) => h.JSX.HTMLAttributes<E>;
}



export function useButton<E extends Element>({ pressParameters, buttonParameters: { tagButton, disabled, onPress, pressed }, refElementParameters }: UseButtonParameters<E>): UseButtonReturnType<E> {
    debugLog("useButton");

    const refElementReturn = useRefElement<E>({ refElementParameters });
    const focusSelf = useCallback((e: any) => (e as Element as HTMLElement).focus?.(), [])
    const pressReturn = usePress<E>({
        ...refElementReturn,
        pressParameters: {
            onPressSync: (e) => (disabled ? null : onPress)?.(enhanceEvent(e, { pressed: pressed == null ? null : !pressed })),
            focusSelf,
            ...pressParameters
        },
    });

    const baseProps = { "aria-pressed": (pressed === true ? "true" : pressed === false ? "false" : undefined) };
    const buttonProps = { ...baseProps, type: "button", disabled: (disabled && disabled != "soft") ? true : false, "aria-disabled": (disabled === 'soft' ? 'true' : undefined) };
    const divProps = { ...baseProps, tabIndex: (disabled === "hard" ? -1 : 0), role: "button", "aria-disabled": disabled ? "true" : undefined };


    return {
        buttonReturn: { propsUnstable: tagButton == "button" ? buttonProps : divProps },
        ...refElementReturn,
        ...pressReturn
    }
}


