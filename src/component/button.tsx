import { createElement, h, VNode } from "preact";
import { useAriaButton, UseAriaButtonParameters } from "use-button";

export interface AriaButtonProps<E extends EventTarget> extends UseAriaButtonParameters<E> {
    propsButton: () => h.JSX.HTMLAttributes<E>;
    render?(button: VNode<any>): VNode<any>;
}

function defaultRender(button: VNode<any>) { return button; }

export function AriaButton<E extends Element>({ tag, onPress, pressed, propsButton, render }: AriaButtonProps<E>) {
    const { useAriaButtonProps } = useAriaButton<E>({ tag, onPress, pressed });
    const button = createElement(tag, useAriaButtonProps(propsButton()) as any);
    return (render ?? defaultRender)(button);
}
