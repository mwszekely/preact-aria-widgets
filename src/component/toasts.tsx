import { createContext, Ref, VNode } from "preact";
import { useContext, useImperativeHandle } from "preact/hooks";
import { ToastInfo, ToastsContext, useToast, UseToastParameters, UseToastReturnType, useToasts, UseToastsParameters, UseToastsReturnType } from "../use-toasts.js";
import { memoForwardRef } from "./util.js";

type Get<T, K extends keyof T> = T[K];

export interface ToastsProps<ContainerType extends Element> extends Get<UseToastsParameters, "managedChildrenParameters">, Get<UseToastsParameters, "toastsParameters"> {
    ref?: Ref<UseToastsReturnType<ContainerType, ToastInfo>>;
    render(info: UseToastsReturnType<ContainerType, ToastInfo>): VNode;
}

export interface ToastProps<E extends Element> extends Get<UseToastParameters<ToastInfo>, "info">, Get<UseToastParameters<ToastInfo>, "toastParameters"> {
    ref?: Ref<UseToastReturnType<E>>;
    render(args: UseToastReturnType<E>): VNode;
}


const ToastContext = createContext<ToastsContext<ToastInfo>>(null!);

export const Toasts = memoForwardRef(function Toasts<ContainerType extends Element>({ onAfterChildLayoutEffect, onChildrenMountChange, render, visibleCount }: ToastsProps<ContainerType>, ref?: Ref<any>) {
    const info = useToasts<ContainerType>({ managedChildrenParameters: { onAfterChildLayoutEffect, onChildrenMountChange }, toastsParameters: { visibleCount } });

    useImperativeHandle(ref!, () => info);

    return (
        <ToastContext.Provider value={info.context}>
            {render(info)}
        </ToastContext.Provider>
    );
})

export const Toast = memoForwardRef(function Toast<E extends Element>({ render, index, timeout, politeness, children }: ToastProps<E>, ref?: Ref<any>) {
    const context = (useContext(ToastContext) as ToastsContext<ToastInfo>)
    console.assert(context != null, `This Toast was not rendered within a Toasts provider`);
    const info = useToast<E>({
        info: { index },
        toastParameters: { timeout, politeness, children },
        context
    });

    useImperativeHandle(ref!, () => info);

    return render(info);
})
