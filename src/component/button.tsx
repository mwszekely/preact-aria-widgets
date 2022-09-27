import { createElement, h, VNode } from "preact";
import { memo } from "preact/compat";
import { PropModifier } from "props";
import { useButton, UseButtonParameters } from "../use-button";

export interface ButtonProps<E extends EventTarget> extends UseButtonParameters<E> {
    render(button: PropModifier<E>): VNode<any>;
}

export function defaultRenderButton(tag: string, makeButtonProps: (info: {}) => h.JSX.HTMLAttributes<any>) {
    return function (modifyButtonProps: PropModifier<any>) {
        return createElement(tag as any, modifyButtonProps(makeButtonProps({})));
    }
}

export const Button = memo(function Button<E extends Element>({ tag, onPress, pressed, render, disabled }: ButtonProps<E>) {
    const { useButtonProps } = useButton<E>({ tag, onPress, pressed, disabled });
    return render(useButtonProps);
})