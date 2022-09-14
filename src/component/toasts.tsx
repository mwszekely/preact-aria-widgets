import { createContext, h, VNode } from "preact";
import { useContext } from "preact/hooks";
import { UseToast, UseToastParameters, UseToastReturnTypeInfo, useToasts, UseToastsParameters, UseToastsReturnTypeInfo } from "../use-toasts";

type Get<T, K extends keyof T> = T[K];

export interface ToastsProps<ContainerType extends HTMLElement> extends Get<UseToastsParameters, "managedChildren"> {
    //tagContainer: ElementToTag<ContainerElement>;
    //children: VNode[];
    render(args: UseToastsReturnTypeInfo, props: h.JSX.HTMLAttributes<ContainerType>): VNode;
}

export interface ToastProps extends Get<UseToastParameters, "managedChild">, Get<UseToastParameters, "toast"> {
    render(args: UseToastReturnTypeInfo): VNode;
}

const ToastContext = createContext<UseToast>(null!);

export function Toasts<ContainerType extends HTMLElement>({ onAfterChildLayoutEffect, onChildrenMountChange, render }: ToastsProps<ContainerType>) {
    const { useToast, useToastContainerProps, ...info } = useToasts<ContainerType>({ managedChildren: { onAfterChildLayoutEffect, onChildrenMountChange } });

    return (
        <ToastContext.Provider value={useToast}>
            {render(info, useToastContainerProps({}))}
        </ToastContext.Provider>)
}

export function Toast({ render, index, subInfo, timeout, flags, politeness }: ToastProps) {
    const { ...toastInfo } = useContext(ToastContext)({
        managedChild: { index, subInfo, flags },
        toast: { timeout, politeness }
    });


    return render(toastInfo);
}
