import { ComponentChildren, createElement, h, Ref, VNode } from "preact";
import { forwardRef } from "preact/compat";
import { useAriaButton, UseAriaButtonParameters } from "../use-button";

export interface AriaButtonProps<E extends EventTarget> extends UseAriaButtonParameters<E> {
    //propsButton: () => h.JSX.HTMLAttributes<E>;
    render?(button: h.JSX.HTMLAttributes<E>): VNode<any>;

    // Technically this is covered by `render`, but it's here for convenience.
    children?: ComponentChildren;
}

function defaultRender(tag: string) { return function (buttonProps: h.JSX.HTMLAttributes<any>) { return createElement(tag as any, buttonProps); } }

export function AriaButtonU<E extends Element>({ tag, onPress, pressed, children, render, disabled, ...unknownProps }: AriaButtonProps<E>, ref: Ref<E>) {
    const { useAriaButtonProps } = useAriaButton<E>({ tag, onPress, pressed, disabled });
    //const button = createElement(tag, useAriaButtonProps(propsButton()) as any);
    return (render ?? defaultRender(tag))(useAriaButtonProps({ ref, children, ...unknownProps }));
}

export const AriaButton = forwardRef(AriaButtonU) as typeof AriaButtonU;