import { createElement, h, Ref, VNode } from "preact";
import { useMergedProps } from "preact-prop-helpers";
import { useImperativeHandle } from "preact/hooks";
import { ElementToTag } from "../props";
import { useButton, UseButtonParameters, UseButtonReturnType } from "../use-button";
import { memoForwardRef, PartialExcept } from "./util";

type Get<T, K extends keyof T> = T[K];

interface ButtonPropsBase<E extends Element> extends
    Omit<Get<UseButtonParameters<E>, "buttonParameters">, "role">,
    Get<UseButtonParameters<E>, "pressParameters">,
    Get<UseButtonParameters<E>, "refElementParameters"> {
    ref?: Ref<UseButtonReturnType<E>>;
}

export interface ButtonProps<E extends Element> extends PartialExcept<ButtonPropsBase<E>, "tagButton"> {
    render(info: UseButtonReturnType<E>): VNode<any>;
}
/*
export function defaultRenderButton<E extends Element>({ tagButton, propsButton }: { tagButton: ElementToTag<E>, propsButton: (info: UseButtonReturnType<E>) => h.JSX.HTMLAttributes<E> }) {
    return function (info: UseButtonReturnType<E>) {
        return createElement(tagButton as any, propsButton(info));
    }
}*/

export const Button = memoForwardRef(function Button<E extends Element>({ tagButton, onPress, pressed, render, disabled, onElementChange, onMount, onUnmount, exclude }: ButtonProps<E>, ref: Ref<any>) {
    const info = useButton<E>({
        buttonParameters: {
            role: "button",
            tagButton: tagButton,
            onPress: onPress ?? null,
            pressed,
            disabled: disabled ?? false
        }, 
        pressParameters: { exclude }, 
        refElementParameters: { onElementChange, onMount, onUnmount }
    });
    useImperativeHandle(ref!, () => info);
    return render(info);
})

export function DemoButton() {
    return (
        <Button<HTMLButtonElement> disabled={false} exclude={undefined} pressed={null} tagButton="button" onPress={null} render={info => (<button {...info.props}>Button</button>)} />
    )
}
