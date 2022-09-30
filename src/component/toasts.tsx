import { createContext, h, VNode } from "preact";
import { memo } from "preact/compat";
import { useContext } from "preact/hooks";
import { UseToast, UseToastParameters, UseToastReturnTypeInfo, useToasts, UseToastsParameters, UseToastsReturnTypeInfo } from "../use-toasts";

type Get<T, K extends keyof T> = T[K];

export interface ToastsProps<ContainerType extends HTMLElement> extends Get<UseToastsParameters, "managedChildren">, Get<UseToastsParameters, "toasts"> {
    //tagContainer: ElementToTag<ContainerElement>;
    //children: VNode[];
    render(args: UseToastsReturnTypeInfo, props: h.JSX.HTMLAttributes<ContainerType>): VNode;
}

export interface ToastProps extends Get<UseToastParameters, "managedChild">, Get<UseToastParameters, "toast"> {
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

const ToastContext = createContext<UseToast>(null!);

export const Toasts = memo(function Toasts<ContainerType extends HTMLElement>({ onAfterChildLayoutEffect, onChildrenMountChange, render, visibleCount }: ToastsProps<ContainerType>) {
    const { useToast, useToastContainerProps, ...info } = useToasts<ContainerType>({ managedChildren: { onAfterChildLayoutEffect, onChildrenMountChange }, toasts: { visibleCount } });

    return (
        <ToastContext.Provider value={useToast}>
            {render(info, useToastContainerProps({}))}
        </ToastContext.Provider>)
})

export const Toast = memo(function Toast({ render, index, timeout, flags, politeness }: ToastProps) {
    const { ...toastInfo } = useContext(ToastContext)({
        managedChild: { index, flags },
        toast: { timeout, politeness }
    });


    return render(toastInfo);
})
