import { createContext, h, Ref, VNode } from "preact";
import { useContext, useImperativeHandle } from "preact/hooks";
import { ToastInfo, ToastsContext, useToast, UseToastParameters, UseToastReturnType, useToasts, UseToastsParameters, UseToastsReturnType } from "../use-toasts";
import { memoForwardRef } from "./util";

type Get<T, K extends keyof T> = T[K];

export interface ToastsProps<ContainerType extends Element> extends Get<UseToastsParameters, "managedChildrenParameters">, Get<UseToastsParameters, "toastsParameters"> {
    //tagContainer: ElementToTag<ContainerElement>;
    //children: VNode[];
    ref?: Ref<UseToastsReturnType<ContainerType, ToastInfo>>;
    render(info: UseToastsReturnType<ContainerType, ToastInfo>): VNode;
}

export interface ToastProps<E extends Element> extends Get<UseToastParameters<ToastInfo>, "managedChildParameters">, Get<UseToastParameters<ToastInfo>, "toastParameters"> {
    //subInfo: Get<UseToastParameter, "subInfo">;
    ref?: Ref<UseToastReturnType<E>>;
    render(args: UseToastReturnType<E>): VNode;
}

/*export function defaultRenderToasts({}: {}) {
    return function (args: UseToastsReturnTypeInfo, props: h.JSX.HTMLAttributes<ContainerType>) {
        return (
        <div>

        </div>
        )
    }
}*/

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

export const Toast = memoForwardRef(function Toast<E extends Element>({ render, index, timeout, politeness }: ToastProps<E>, ref?: Ref<any>) {
    const context = (useContext(ToastContext) as ToastsContext<ToastInfo>)
    console.assert(context != null, `This Toast was not rendered within a Toasts provider`);
    const info = useToast<E>({
        managedChildParameters: { index },
        toastParameters: { timeout, politeness },
        context
    });

    useImperativeHandle(ref!, () => info);

    return render(info);
})
