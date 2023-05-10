import { h } from "preact";
import { monitorCallCount, useMergedProps, usePress, UsePressParameters, UsePressReturnType, useRefElement, UseRefElementParameters, UseRefElementReturnType } from "preact-prop-helpers";
import { useCallback } from "preact/hooks";
import { DisabledType, ElementToTag, TargetedEnhancedEvent, EnhancedEventHandler, enhanceEvent, OmitStrong } from "./props.js";

export interface ButtonPressEventDetail { 
    pressed: boolean | null;
}
export type TargetedButtonPressEvent<E extends EventTarget> = TargetedEnhancedEvent<E, Event, ButtonPressEventDetail>;
export type ButtonPressEventHandler<E extends EventTarget> = EnhancedEventHandler<E, Event, ButtonPressEventDetail>;


export interface UseButtonParameters<E extends Node> extends UseRefElementParameters<E> {
    buttonParameters: {
        tagButton: ElementToTag<E>;
        disabled: DisabledType;
        /** 
         * Important: A button can also be marked as pressed by changing its label -- e.g. `muted` to `unmuted`.
         * If this is the case, `pressed` **must** be null!
         */
        pressed: boolean | null | undefined;
        onPress: undefined | null | ButtonPressEventHandler<E>;
        role: h.JSX.AriaRole;
    }
    pressParameters: OmitStrong<UsePressParameters<E>["pressParameters"], "onPressSync" | "focusSelf">
}

export interface UseButtonReturnType<E extends Element> extends UsePressReturnType<E>, OmitStrong<UseRefElementReturnType<E>, "propsStable"> {
    props: h.JSX.HTMLAttributes<E>;
}



export function useButton<E extends Element>({ buttonParameters: { tagButton, disabled, onPress, pressed, role }, pressParameters, refElementParameters }: UseButtonParameters<E>): UseButtonReturnType<E> {
    monitorCallCount(useButton);

    const { refElementReturn, propsStable: propsRef } = useRefElement<E>({ refElementParameters });
    const focusSelf = useCallback((e: any) => (e as Element as HTMLElement).focus?.(), [])
    const { pressReturn, props: propsPress } = usePress<E>({
        refElementReturn,
        pressParameters: {
            onPressSync: (e) => (disabled ? null : onPress)?.(enhanceEvent(e, { pressed: pressed == null ? null : !pressed })),
            focusSelf,
            ...pressParameters
        },
    });

    const baseProps = { "aria-pressed": (pressed === true ? "true" : pressed === false ? "false" : undefined) };
    const buttonProps = { ...baseProps, disabled: (disabled && disabled != "soft") ? true : false, "aria-disabled": (disabled === 'soft' ? 'true' : undefined), role: role == "button" ? undefined : role };
    const divProps = { ...baseProps, tabIndex: (disabled === "hard" ? -1 : 0), role, "aria-disabled": disabled ? "true" : undefined };

    return {
        pressReturn,
        props: useMergedProps<E>(propsPress, propsRef, (tagButton == 'button' ? buttonProps : divProps)),
        refElementReturn,
    }
}


