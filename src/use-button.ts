import {
    ElementProps,
    JSX,
    Nullable,
    PressEventReason,
    TargetedOmit,
    UsePressParameters,
    UsePressReturnType,
    UseRefElementParameters,
    UseRefElementReturnType,
    assertEmptyObject,
    enhanceEvent,
    returnFalse,
    useMergedProps,
    useMonitoring,
    usePress,
    useRefElement,
    useStableCallback,
    AriaRole
} from "preact-prop-helpers/preact";
import { DisabledType, EnhancedEventHandler, OmitStrong, TargetedEnhancedEvent } from "./props.js";

export interface ButtonPressEventDetail {
    pressed: boolean | undefined;
}
export type TargetedButtonPressEvent<Tag extends keyof JSX.IntrinsicElements> = TargetedEnhancedEvent<PressEventReason<Tag>, ButtonPressEventDetail>;
export type ButtonPressEventHandler<Tag extends keyof JSX.IntrinsicElements> = EnhancedEventHandler<TargetedButtonPressEvent<Tag>, ButtonPressEventDetail>;

export interface UseButtonParametersSelf<Tag extends keyof JSX.IntrinsicElements> {
    /** Is `HTMLElement` this a `div`, a `button`, etc. */
    tagButton: Tag;

    /** 
     * Called when the button is clicked/pressed/tapped/etc
     * 
     * @remarks `pressed` only be non-null when you passed a non-null value for `pressed` as a prop.
     * 
     * If you need this to be async, see `useProgressWithHandler`, and use its `syncHandler` here.
     */
    onPressSync: Nullable<(event: TargetedEnhancedEvent<PressEventReason<Tag>, ButtonPressEventDetail>) => void>;

    /** 
     * Whether the button is disabled.
     * 
     * @remarks This both affects its attributes as well as whether or not the press handler is called.
     */
    disabled: Nullable<DisabledType>;

    /** 
     * Indicates that the button is pressed/toggled.
     * 
     * @remarks **Important**: This *should not* be used if this is a toggle button
     * that indicates its state through its label/children, like a mute/unmute
     * or play/pause button. In those cases, `pressed` **must** remain `null`,
     * and you should just change the label/children. It's not specified anywhere,
     * but is more or less standard practice.
     */
    pressed: boolean | null | undefined;

    /**
     * Generally just "button". Avoid using `null` unless the role is handled by something else.
     */
    role: Nullable<AriaRole>;
}

export interface UseButtonParameters<ButtonElementTag extends keyof JSX.IntrinsicElements> extends
    UseRefElementParameters<ButtonElementTag>,
    TargetedOmit<UsePressParameters<ButtonElementTag>, "pressParameters", "excludeEnter" | "excludePointer" | "onPressSync"> {
    buttonParameters: UseButtonParametersSelf<ButtonElementTag>;
}

export interface UseButtonReturnType<ButtonElementTag extends keyof JSX.IntrinsicElements> extends
    UsePressReturnType<ButtonElementTag>,
    OmitStrong<UseRefElementReturnType<ButtonElementTag>, "propsStable"> {
    props: ElementProps<ButtonElementTag>;
}



/**
 * Implements a [Button](https://www.w3.org/WAI/ARIA/apg/patterns/button/) pattern.
 * 
 * @remarks The press handler is sync by default. See `useProgressWithHandler` to turn an async function into a sync function with a progress bar.
 * 
 * @compositeParams
 */
export function useButton<ButtonElementTag extends keyof JSX.IntrinsicElements>({
    buttonParameters: { tagButton, disabled, pressed, role, onPressSync, ...void1 },
    pressParameters: { focusSelf, allowRepeatPresses, longPressThreshold, onPressingChange, excludeSpace, ...void3 },
    refElementParameters,
    ...void2
}: UseButtonParameters<ButtonElementTag>): UseButtonReturnType<ButtonElementTag> {
    
    return useMonitoring(function useButton() {
        const { refElementReturn, propsStable: propsRef, ...void5 } = useRefElement<ButtonElementTag>({ refElementParameters });
        const { pressReturn, props: propsPress, ...void4 } = usePress<ButtonElementTag>({
            refElementReturn,
            pressParameters: {
                onPressSync: useStableCallback((e) => {
                    if (!disabled) {
                        const p = (pressed == null ? undefined : !pressed);
                        onPressSync?.(enhanceEvent(e, { pressed: p }))
                    }
                }),
                focusSelf,
                allowRepeatPresses,
                excludeEnter: returnFalse,
                excludePointer: returnFalse,
                excludeSpace,
                longPressThreshold,
                onPressingChange
            },
        });

        const baseProps = { "aria-pressed": (pressed === true ? "true" : pressed === false ? "false" : undefined) };
        const buttonProps = { ...baseProps, disabled: (disabled && disabled != "soft") ? true : false, "aria-disabled": (disabled === 'soft' ? 'true' : undefined), role: role == "button" ? undefined : role };
        const divProps = { ...baseProps, tabIndex: (disabled === "hard" ? -1 : 0), role: role || "button", "aria-disabled": disabled ? "true" : undefined };

        assertEmptyObject(void1);
        assertEmptyObject(void2);
        assertEmptyObject(void3);
        assertEmptyObject(void4);
        assertEmptyObject(void5);

        return {
            pressReturn,
            props: useMergedProps(propsPress, propsRef, (tagButton == 'button' ? buttonProps : divProps) as ElementProps<ButtonElementTag>),
            refElementReturn,
        }
    });
}


