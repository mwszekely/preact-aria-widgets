import { Ref, VNode } from "preact";
import { useImperativeHandle } from "preact/hooks";
import { Get3 } from "../props.js";
import { UseButtonParameters, UseButtonReturnType, useButton } from "../use-button.js";
import { PartialExcept, memoForwardRef } from "./util.js";


interface ButtonPropsBase<E extends Element> extends
    Get3<UseButtonParameters<E>, "buttonParameters", "pressParameters", "refElementParameters"> {
    ref?: Ref<UseButtonReturnType<E>>;
}

export interface ButtonProps<E extends Element> extends PartialExcept<ButtonPropsBase<E>, "tagButton"> {
    render(info: UseButtonReturnType<E>): VNode<any>;
}

export const Button = memoForwardRef(function Button<E extends Element>({ 
    tagButton, 
    onPress, 
    pressed, 
    render, 
    disabled, 
    onElementChange, 
    onMount, 
    onUnmount, 
    allowRepeatPresses, 
    longPressThreshold 
}: ButtonProps<E>, ref: Ref<any>) {
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
