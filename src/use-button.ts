import { h } from "preact";
import { useMergedProps, usePress, UsePressParameters, UsePressReturnType, useRefElement, UseRefElementParameters, UseRefElementReturnType } from "preact-prop-helpers";
import { useCallback } from "preact/hooks";
import { debugLog, DisabledType, ElementToTag, EnhancedEvent, enhanceEvent, OmitStrong } from "./props";


export type ButtonPressEvent<E extends EventTarget> = EnhancedEvent<E, Event | Event, { pressed: boolean | null }>;

export interface UseButtonParameters<E extends Node> extends UseRefElementParameters<E> {
    buttonParameters: {
        tagButton: ElementToTag<E>;
        disabled: DisabledType;
        pressed: boolean | null | undefined;
        onPress: null | ((event: ButtonPressEvent<E>) => void);
        role: string;
    }
    pressParameters: OmitStrong<UsePressParameters<E>["pressParameters"], "onPressSync" | "focusSelf">
}

export interface UseButtonReturnType<E extends Element> extends UsePressReturnType<E>, UseRefElementReturnType<E> {
    props: h.JSX.HTMLAttributes<E>;
}



export function useButton<E extends Element>({ buttonParameters: { tagButton, disabled, onPress, pressed, role }, pressParameters, refElementParameters }: UseButtonParameters<E>): UseButtonReturnType<E> {
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

    const { pressReturn: { propsStable: pressProps } } = pressReturn;
    const { refElementReturn: { propsStable: refProps } } = refElementReturn;

    const baseProps = { "aria-pressed": (pressed === true ? "true" : pressed === false ? "false" : undefined) };
    const buttonProps = { ...baseProps, disabled: (disabled && disabled != "soft") ? true : false, "aria-disabled": (disabled === 'soft' ? 'true' : undefined), role: role == "button" ? undefined : role };
    const divProps = { ...baseProps, tabIndex: (disabled === "hard" ? -1 : 0), role, "aria-disabled": disabled ? "true" : undefined };


    return {
        ...refElementReturn,
        ...pressReturn,
        props: useMergedProps<E>(pressProps, refProps, (tagButton == 'button' ? buttonProps : divProps)),
    }
}


