import { createElement, h, Ref, VNode } from "preact";
import { memo, useImperativeHandle } from "preact/compat";
import { ElementToTag, PropModifier } from "props";
import { useButton, UseButtonParameters } from "../use-button";
import { memoForwardRef } from "./util";

type Get<T, K extends keyof T> = T[K];

export interface ButtonProps<E extends Node> extends
    Get<UseButtonParameters<E>, "button">,
    Get<UseButtonParameters<E>, "hasFocus"> {
    render(button: PropModifier<E>): VNode<any>;
    ref?: Ref<{}>;
}

export function defaultRenderButton<E extends Element>({ tagButton, makePropsButton }: {tagButton: ElementToTag<E>, makePropsButton: (info: {}) => h.JSX.HTMLAttributes<E>}) {
    return function (modifyButtonProps: PropModifier<any>) {
        return createElement(tagButton as any, modifyButtonProps(makePropsButton({})));
    }
}

export const Button = memoForwardRef(function Button<E extends Element>({ tagButton, onPress, pressed, render, disabled, getDocument, getWindow, onActiveElementChange, onElementChange, onFocusedChanged, onFocusedInnerChanged, onLastActiveElementChange, onLastFocusedChanged, onLastFocusedInnerChanged, onMount, onUnmount, onWindowFocusedChange }: ButtonProps<E>, ref: Ref<any>) {
    const { useButtonProps, ...info } = useButton<E>({ button: { tagButton, onPress, pressed, disabled }, hasFocus: { getDocument, getWindow, onActiveElementChange, onElementChange, onFocusedChanged, onFocusedInnerChanged, onLastActiveElementChange, onLastFocusedChanged, onLastFocusedInnerChanged, onMount, onUnmount, onWindowFocusedChange } });
    useImperativeHandle(ref!, () => info);
    return render(useButtonProps);
})