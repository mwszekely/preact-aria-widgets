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
    usePress,
    useRefElement,
    useStableCallback
} from "preact-prop-helpers";
import { DisabledType, ElementToTag, EnhancedEventHandler, OmitStrong, TargetedEnhancedEvent, monitored } from "./props.js";

export interface ButtonPressEventDetail {
    pressed: boolean | undefined;
}
export type TargetedButtonPressEvent<E extends EventTarget> = TargetedEnhancedEvent<PressEventReason<E>, ButtonPressEventDetail>;
export type ButtonPressEventHandler<E extends EventTarget> = EnhancedEventHandler<TargetedButtonPressEvent<E>, ButtonPressEventDetail>;

export interface UseButtonParametersSelf<E extends Node> {
    /** Is `HTMLElement` this a `div`, a `button`, etc. */
    tagButton: ElementToTag<E>;

    /** 
     * Called when the button is clicked/pressed/tapped/etc
     * 
     * @remarks `pressed` only be non-null when you passed a non-null value for `pressed` as a prop.
     * 
     * If you need this to be async, see `useProgressWithHandler`, and use its `syncHandler` here.
     */
    onPressSync: Nullable<(event: TargetedEnhancedEvent<PressEventReason<E>, ButtonPressEventDetail>) => void>;

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
    role: Nullable<JSX.AriaRole>;
}

export interface UseButtonParameters<ButtonElement extends Element> extends
    UseRefElementParameters<ButtonElement>,
    TargetedOmit<UsePressParameters<ButtonElement>, "pressParameters", "excludeEnter" | "excludePointer" | "onPressSync"> {
    buttonParameters: UseButtonParametersSelf<ButtonElement>;
}

export interface UseButtonReturnType<ButtonElement extends Element> extends
    UsePressReturnType<ButtonElement>,
    OmitStrong<UseRefElementReturnType<ButtonElement>, "propsStable"> {
    props: ElementProps<ButtonElement>;
}



/**
 * Implements a [Button](https://www.w3.org/WAI/ARIA/apg/patterns/button/) pattern.
 * 
 * @remarks The press handler is sync by default. See `useProgressWithHandler` to turn an async function into a sync function with a progress bar.
 * 
 * @compositeParams
 */
export const useButton = /* @__PURE__ */ monitored(function useButton<ButtonElement extends Element>({
    buttonParameters: { tagButton, disabled, pressed, role, onPressSync, ...void1 },
    pressParameters: { focusSelf, allowRepeatPresses, longPressThreshold, onPressingChange, excludeSpace, ...void3 },
    refElementParameters,
    ...void2
}: UseButtonParameters<ButtonElement>): UseButtonReturnType<ButtonElement> {
    //if (tagButton != "button")
    //    debugger;

    const { refElementReturn, propsStable: propsRef, ...void5 } = useRefElement<ButtonElement>({ refElementParameters });
    const { pressReturn, props: propsPress, ...void4 } = usePress<ButtonElement>({
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
        props: useMergedProps<ButtonElement>(propsPress, propsRef, (tagButton == 'button' ? buttonProps : divProps) as ElementProps<ButtonElement>),
        refElementReturn,
    }
})


