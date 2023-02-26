import { Ref, VNode } from "preact";
import { ToastInfo, UseToastParameters, UseToastReturnType, UseToastsParameters, UseToastsReturnType } from "../use-toasts.js";
type Get<T, K extends keyof T> = T[K];
export interface ToastsProps<ContainerType extends Element> extends Get<UseToastsParameters, "managedChildrenParameters">, Get<UseToastsParameters, "toastsParameters"> {
    ref?: Ref<UseToastsReturnType<ContainerType, ToastInfo>>;
    render(info: UseToastsReturnType<ContainerType, ToastInfo>): VNode;
}
export interface ToastProps<E extends Element> extends Get<UseToastParameters<ToastInfo>, "managedChildParameters">, Get<UseToastParameters<ToastInfo>, "toastParameters"> {
    ref?: Ref<UseToastReturnType<E>>;
    render(args: UseToastReturnType<E>): VNode;
}
export declare const Toasts: <ContainerType extends Element>({ onAfterChildLayoutEffect, onChildrenMountChange, render, visibleCount }: ToastsProps<ContainerType>, ref?: Ref<any>) => import("preact").JSX.Element;
export declare const Toast: <E extends Element>({ render, index, timeout, politeness, children }: ToastProps<E>, ref?: Ref<any>) => VNode<{}>;
export {};
//# sourceMappingURL=toasts.d.ts.map