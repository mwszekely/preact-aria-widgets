import { createContext, h, VNode } from "preact";
import { memo } from "preact/compat";
import { useContext } from "preact/hooks";
import { UseToast, UseToastParameters, UseToastReturnTypeInfo, useToasts, UseToastsParameters, UseToastsReturnTypeInfo } from "../use-toasts";

type Get<T, K extends keyof T> = T[K];

export interface ToastsProps<ContainerType extends HTMLElement, C> extends Get<UseToastsParameters, "managedChildren">, Get<UseToastsParameters, "toasts"> {
    //tagContainer: ElementToTag<ContainerElement>;
    //children: VNode[];
    render(args: UseToastsReturnTypeInfo<C>, props: h.JSX.HTMLAttributes<ContainerType>): VNode;
}

export interface ToastProps<C, K extends string> extends Get<UseToastParameters<C, K, C>, "managedChild">, Get<UseToastParameters<C, K, C>, "toast"> {
    subInfo: Get<UseToastParameters<C, K, C>, "subInfo">;
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

export const Toasts = memo(function Toasts<ContainerType extends HTMLElement, C = undefined, K extends string = never>({ onAfterChildLayoutEffect, onChildrenMountChange, render, visibleCount }: ToastsProps<ContainerType, C>) {
    const { useToast, useToastContainerProps, ...info } = useToasts<ContainerType, C, K>({ managedChildren: { onAfterChildLayoutEffect, onChildrenMountChange }, toasts: { visibleCount } });

    return (
        <ToastContext.Provider value={useToast}>
            {render(info, useToastContainerProps({}))}
        </ToastContext.Provider>)
})

export const Toast = memo(function Toast<C = undefined, K extends string = never>({ render, index, timeout, flags, politeness, subInfo }: ToastProps<C, K>) {
    const { ...toastInfo } = (useContext(ToastContext) as UseToast<C, K>)({
        managedChild: { index, flags },
        toast: { timeout, politeness },
        subInfo
    });


    return render(toastInfo);
})
