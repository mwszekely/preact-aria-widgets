import { createElement, h, VNode } from "preact";
import { PropModifier } from "props";
import { useAriaButton, UseAriaButtonParameters } from "../use-button";

export interface AriaButtonProps<E extends EventTarget> extends UseAriaButtonParameters<E> {
    render(button: PropModifier<E>): VNode<any>;
}

export function defaultRenderButton(tag: string, makeButtonProps: (info: {}) => h.JSX.HTMLAttributes<any>) {
    return function (modifyButtonProps: PropModifier<any>) {
        return createElement(tag as any, modifyButtonProps(makeButtonProps({})));
    }
}

export function AriaButton<E extends Element>({ tag, onPress, pressed, render, disabled }: AriaButtonProps<E>) {
    const { useAriaButtonProps } = useAriaButton<E>({ tag, onPress, pressed, disabled });
    return render(useAriaButtonProps);
}