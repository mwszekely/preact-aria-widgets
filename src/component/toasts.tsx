import { createContext, createElement, VNode } from "preact";
import { useContext } from "preact/hooks";
import { ElementToTag } from "props";
import { UseToast, UseToastParameters, useToasts, UseToastsParameters } from "use-toasts";


export interface ToastsProps<ContainerElement extends HTMLElement> extends UseToastsParameters {
    tagContainer: ElementToTag<ContainerElement>;
    children: VNode[];
}

export interface ToastProps<E extends HTMLElement> extends Omit<UseToastParameters, "info">, Pick<UseToastParameters["info"], "index"> {
    render(args: ReturnType<UseToast>): VNode;
}

const ToastContext = createContext<UseToast>(null!);

export function Toasts<ContainerType extends HTMLElement>({ tagContainer, children }: ToastsProps<ContainerType>) {
    const { useToast, useToastContainerProps } = useToasts<ContainerType>({});

    return (
        <ToastContext.Provider value={useToast}>
            {(createElement(tagContainer as any, useToastContainerProps({ children })))}
        </ToastContext.Provider>)
}

export function Toast<E extends HTMLElement>({ index, timeout, politeness, render }: ToastProps<E>) {
    const { dismiss, getStatus, resetDismissTimer, status } = useContext(ToastContext)({ info: { index }, timeout, politeness });


    return render({ dismiss, getStatus, resetDismissTimer, status });
}
