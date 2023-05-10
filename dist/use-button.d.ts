import { h } from "preact";
import { UsePressParameters, UsePressReturnType, UseRefElementParameters, UseRefElementReturnType } from "preact-prop-helpers";
import { DisabledType, ElementToTag, TargetedEnhancedEvent, EnhancedEventHandler, OmitStrong } from "./props.js";
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
    };
    pressParameters: OmitStrong<UsePressParameters<E>["pressParameters"], "onPressSync" | "focusSelf">;
}
export interface UseButtonReturnType<E extends Element> extends UsePressReturnType<E>, OmitStrong<UseRefElementReturnType<E>, "propsStable"> {
    props: h.JSX.HTMLAttributes<E>;
}
export declare function useButton<E extends Element>({ buttonParameters: { tagButton, disabled, onPress, pressed, role }, pressParameters, refElementParameters }: UseButtonParameters<E>): UseButtonReturnType<E>;
//# sourceMappingURL=use-button.d.ts.map