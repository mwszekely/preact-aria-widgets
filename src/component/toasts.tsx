import { createContext, h, Ref, VNode } from "preact";
import { useContext, useImperativeHandle } from "preact/hooks";
import { UseToast, UseToastParameters, UseToastReturnTypeInfo, useToasts, UseToastsParameters } from "../use-toasts";
import { memoForwardRef } from "./util";

type Get<T, K extends keyof T> = T[K];

export interface ToastsProps<ContainerType extends HTMLElement, C> extends Get<UseToastsParameters, "managedChildren">, Get<UseToastsParameters, "toasts"> {
    //tagContainer: ElementToTag<ContainerElement>;
    //children: VNode[];
    ref?: Ref<UseToastsReturnTypeInfo<C>>;
    render(args: UseToastsReturnTypeInfo<C>, props: h.JSX.HTMLAttributes<ContainerType>): VNode;
}

export interface ToastProps<C, K extends string> extends Get<UseToastParameters<C, K, C>, "managedChild">, Get<UseToastParameters<C, K, C>, "toast"> {
    subInfo: Get<UseToastParameters<C, K, C>, "subInfo">;
    ref?: Ref<UseToastReturnTypeInfo>;
    render(args: UseToastReturnTypeInfo): VNode;
}

/*export function defaultRenderToasts({}: {}) {
    return function (args: UseToastsReturnTypeInfo, props: h.JSX.HTMLAttributes<ContainerType>) {
        return (
        <div>

        </div>
        )
    }
}*/

const ToastContext = createContext<UseToast<any, any>>(null!);

export const Toasts = memoForwardRef(function Toasts<ContainerType extends HTMLElement, C = undefined, K extends string = never>({ onAfterChildLayoutEffect, onChildrenMountChange, render, visibleCount }: ToastsProps<ContainerType, C>, ref?: Ref<any>) {
    const { useToast, useToastContainerProps, ...info } = useToasts<ContainerType, C, K>({ managedChildren: { onAfterChildLayoutEffect, onChildrenMountChange }, toasts: { visibleCount } });

    useImperativeHandle(ref!, () => info);

    return (
        <ToastContext.Provider value={useToast}>
            {render(info, useToastContainerProps({}))}
        </ToastContext.Provider>)
})

export const Toast = memoForwardRef(function Toast<C = undefined, K extends string = never>({ render, index, timeout, flags, politeness, subInfo }: ToastProps<C, K>, ref?: Ref<any>) {
    const { ...toastInfo } = (useContext(ToastContext) as UseToast<C, K>)({
        managedChild: { index, flags },
        toast: { timeout, politeness },
        subInfo
    });

    useImperativeHandle(ref!, () => toastInfo);

    return render(toastInfo);
})
