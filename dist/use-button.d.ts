import { h } from "preact";
import { UsePressParameters, UsePressReturnType, UseRefElementParameters, UseRefElementReturnType } from "preact-prop-helpers";
import { DisabledType, ElementToTag, EnhancedEvent, OmitStrong } from "./props.js";
export type ButtonPressEvent<E extends EventTarget> = EnhancedEvent<E, Event | Event, {
    pressed: boolean | null;
}>;
export interface UseButtonParameters<E extends Node> extends UseRefElementParameters<E> {
    buttonParameters: {
        tagButton: ElementToTag<E>;
        disabled: DisabledType;
        pressed: boolean | null | undefined;
        onPress: null | ((event: ButtonPressEvent<E>) => void);
        role: h.JSX.AriaRole;
    };
    pressParameters: OmitStrong<UsePressParameters<E>["pressParameters"], "onPressSync" | "focusSelf">;
}
export interface UseButtonReturnType<E extends Element> extends UsePressReturnType<E>, UseRefElementReturnType<E> {
    props: h.JSX.HTMLAttributes<E>;
}
export declare function useButton<E extends Element>({ buttonParameters: { tagButton, disabled, onPress, pressed, role }, pressParameters, refElementParameters }: UseButtonParameters<E>): UseButtonReturnType<E>;
//# sourceMappingURL=use-button.d.ts.map