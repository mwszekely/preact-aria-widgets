import { createElement, h, VNode } from "preact";
import { memo } from "preact/compat";
import { ElementToTag, PropModifier } from "props";
import { useButton, UseButtonParameters } from "../use-button";

type Get<T, K extends keyof T> = T[K];

export interface ButtonProps<E extends Node> extends
    Get<UseButtonParameters<E>, "button">,
    Get<UseButtonParameters<E>, "hasFocus"> {
    render(button: PropModifier<E>): VNode<any>;
}

export function defaultRenderButton<E extends Element>({ tagButton, makePropsButton }: {tagButton: ElementToTag<E>, makePropsButton: (info: {}) => h.JSX.HTMLAttributes<E>}) {
    return function (modifyButtonProps: PropModifier<any>) {
        return createElement(tagButton as any, modifyButtonProps(makePropsButton({})));
    }
}

export const Button = memo(function Button<E extends Element>({ tagButton, onPress, pressed, render, disabled, getDocument, getWindow, onActiveElementChange, onElementChange, onFocusedChanged, onFocusedInnerChanged, onLastActiveElementChange, onLastFocusedChanged, onLastFocusedInnerChanged, onMount, onUnmount, onWindowFocusedChange }: ButtonProps<E>) {
    const { useButtonProps } = useButton<E>({ button: { tagButton, onPress, pressed, disabled }, hasFocus: { getDocument, getWindow, onActiveElementChange, onElementChange, onFocusedChanged, onFocusedInnerChanged, onLastActiveElementChange, onLastFocusedChanged, onLastFocusedInnerChanged, onMount, onUnmount, onWindowFocusedChange } });
    return render(useButtonProps);
})