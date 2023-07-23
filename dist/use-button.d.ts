import { h } from "preact";
import { ElementProps, PressEventReason, TargetedOmit, UsePressParameters, UsePressReturnType, UseRefElementParameters, UseRefElementReturnType } from "preact-prop-helpers";
import { DisabledType, ElementToTag, EnhancedEventHandler, OmitStrong, TargetedEnhancedEvent } from "./props.js";
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
    role: h.JSX.AriaRole;
}
export interface UseButtonParameters<E extends Node> extends UseRefElementParameters<E>, TargetedOmit<UsePressParameters<E>, "pressParameters", "onPressSync" | "focusSelf"> {
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
export declare function useButton<E extends Element>({ buttonParameters: { tagButton, disabled, onPress, pressed, role }, pressParameters, refElementParameters }: UseButtonParameters<E>): UseButtonReturnType<E>;
//# sourceMappingURL=use-button.d.ts.map