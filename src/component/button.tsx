import { Ref, VNode } from "preact";
import { useImperativeHandle } from "preact/hooks";
import { OmitStrong } from "../props.js";
import { useButton, UseButtonParameters, UseButtonReturnType } from "../use-button.js";
import { memoForwardRef, PartialExcept } from "./util.js";

type Get<T, K extends keyof T> = NonNullable<T[K]>;

interface ButtonPropsBase<E extends Element> extends
    OmitStrong<Get<UseButtonParameters<E>, "buttonParameters">, "role">,
    OmitStrong<Get<UseButtonParameters<E>, "pressParameters">, "excludeSpace" | "excludePointer" | "excludeEnter">,
    Get<UseButtonParameters<E>, "refElementParameters"> {
    ref?: Ref<UseButtonReturnType<E>>;
}

export interface ButtonProps<E extends Element> extends PartialExcept<ButtonPropsBase<E>, "tagButton"> {
    render(info: UseButtonReturnType<E>): VNode<any>;
}

export const Button = memoForwardRef(function Button<E extends Element>({ tagButton, onPress, pressed, render, disabled, onElementChange, onMount, onUnmount, allowRepeatPresses, longPressThreshold }: ButtonProps<E>, ref: Ref<any>) {
    const info = useButton<E>({
        buttonParameters: {
            role: "button",
            tagButton: tagButton,
            onPress: onPress ?? null,
            pressed,
            disabled: disabled ?? false
        },
        pressParameters: { longPressThreshold, allowRepeatPresses },
        refElementParameters: { onElementChange, onMount, onUnmount }
    });
    useImperativeHandle(ref!, () => info);
    return render(info);
})
