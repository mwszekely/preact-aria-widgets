import { createElement, h, Ref, VNode } from "preact";
import { useMergedProps } from "preact-prop-helpers";
import { useImperativeHandle } from "preact/compat";
import { ElementToTag, PropModifier } from "../props";
import { useButton, UseButtonParameters, UseButtonReturnType } from "../use-button";
import { memoForwardRef } from "./util";

type Get<T, K extends keyof T> = T[K];

export interface ButtonProps<E extends Element> extends
    Omit<Get<UseButtonParameters<E>, "buttonParameters">, "role">,
    Get<UseButtonParameters<E>, "pressParameters">,
    Get<UseButtonParameters<E>, "refElementParameters"> {
    render(info: UseButtonReturnType<E>): VNode<any>;
    ref?: Ref<{}>;
}

export function defaultRenderButton<E extends Element>({ tagButton, propsButton }: { tagButton: ElementToTag<E>, propsButton: h.JSX.HTMLAttributes<E> }) {
    return function ({ props }: UseButtonReturnType<E>) {
        return createElement(tagButton as any, useMergedProps(propsButton, props));
    }
}

export const Button = memoForwardRef(function Button<E extends Element>({ tagButton, onPress, pressed, render, disabled, onElementChange, onMount, onUnmount, exclude, onPseudoActiveStart, onPseudoActiveStop }: ButtonProps<E>, ref: Ref<any>) {
    const info = useButton<E>({ buttonParameters: { role: "button", tagButton, onPress, pressed, disabled }, pressParameters: { exclude, onPseudoActiveStart, onPseudoActiveStop }, refElementParameters: { onElementChange, onMount, onUnmount } });
    //useImperativeHandle(ref!, () => info);
    info.props = useMergedProps(info.props, { ref });
    return render(info);
})