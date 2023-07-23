import { ElementProps, JSX, PressEventReason, TargetedOmit, UsePressParameters, UsePressReturnType, UseRefElementParameters, UseRefElementReturnType, focus, monitorCallCount, useMergedProps, usePress, useRefElement } from "preact-prop-helpers";
import { useCallback } from "preact/hooks";
import { DisabledType, ElementToTag, EnhancedEventHandler, OmitStrong, TargetedEnhancedEvent, enhanceEvent } from "./props.js";

export interface ButtonPressEventDetail {
    pressed: boolean | null;
}
export type TargetedButtonPressEvent<E extends EventTarget> = TargetedEnhancedEvent<PressEventReason<E>, ButtonPressEventDetail>;
export type ButtonPressEventHandler<E extends EventTarget> = EnhancedEventHandler<PressEventReason<E>, ButtonPressEventDetail>;

export interface UseButtonParametersSelf<E extends Node> {
    tagButton: ElementToTag<E>;
    disabled: DisabledType;
    /** 
     * Important: A button can also be marked as pressed by changing its label -- e.g. `muted` to `unmuted`.
     * If this is the case, `pressed` **must** be null!
     */
    pressed: boolean | null | undefined;
    onPress: undefined | null | ButtonPressEventHandler<E>;
    role: JSX.AriaRole;
}

export interface UseButtonParameters<E extends Node> extends
    UseRefElementParameters<E>,
    TargetedOmit<UsePressParameters<E>, "pressParameters", "onPressSync" | "focusSelf"> {
    buttonParameters: UseButtonParametersSelf<E>;
}

export interface UseButtonReturnType<E extends Element> extends UsePressReturnType<E>, OmitStrong<UseRefElementReturnType<E>, "propsStable"> {
    props: ElementProps<E>;
}



/**
 * Implements a [Button](https://www.w3.org/WAI/ARIA/apg/patterns/button/) pattern.
 * 
 * @compositeParams
 */
export function useButton<E extends Element>({ buttonParameters: { tagButton, disabled, onPress, pressed, role }, pressParameters, refElementParameters }: UseButtonParameters<E>): UseButtonReturnType<E> {
    monitorCallCount(useButton);

    const { refElementReturn, propsStable: propsRef } = useRefElement<E>({ refElementParameters });
    const focusSelf = useCallback((e: any) => focus(e), [])
    const { pressReturn, props: propsPress } = usePress<E>({
        refElementReturn,
        pressParameters: {
            onPressSync: (e) => (disabled ? null : onPress)?.(enhanceEvent(e, { pressed: pressed == null ? null : !pressed })),
            focusSelf,
            ...pressParameters  // Intentionally at the end so Typescript will error if we forget something
        },
    });

    const baseProps = { "aria-pressed": (pressed === true ? "true" : pressed === false ? "false" : undefined) };
    const buttonProps = { ...baseProps, disabled: (disabled && disabled != "soft") ? true : false, "aria-disabled": (disabled === 'soft' ? 'true' : undefined), role: role == "button" ? undefined : role };
    const divProps = { ...baseProps, tabIndex: (disabled === "hard" ? -1 : 0), role, "aria-disabled": disabled ? "true" : undefined };

    return {
        pressReturn,
        props: useMergedProps<E>(propsPress, propsRef, (tagButton == 'button' ? buttonProps : divProps) as ElementProps<E>),
        refElementReturn,
    }
}


