import { Context, OmitStrong, assertEmptyObject, createContext } from "preact-prop-helpers";
import { Get2, useContextWithWarning } from "../props.js";
import { ToastInfo, ToastsContext, UseToastParameters, UseToastReturnType, UseToastsParameters, UseToastsReturnType, useToast, useToasts } from "../use-toasts.js";
import { GenericComponentProps, useComponent } from "./util.js";


export type ToastsProps<ContainerType extends Element, M extends ToastInfo = ToastInfo> = GenericComponentProps<
    UseToastsReturnType<ContainerType, M>,
    Get2<UseToastsParameters, "managedChildrenParameters", "toastsParameters">,
    "visibleCount"
>;
export type ToastProps<E extends Element, M extends ToastInfo = ToastInfo> = GenericComponentProps<
    UseToastReturnType<E, M>,
    Get2<UseToastParameters<M>, "toastParameters", "info">,
    "index"
> & { info?: OmitStrong<M, keyof ToastInfo>; };
const ToastContext = createContext<ToastsContext<ToastInfo>>(null!);

export function Toasts<ContainerType extends Element>({
    onAfterChildLayoutEffect,
    onChildrenMountChange,
    render,
    visibleCount,
    imperativeHandle,
    onChildrenCountChange,
    ...void1
}: ToastsProps<ContainerType, ToastInfo>) {
    assertEmptyObject(void1);
    return useComponent(
        imperativeHandle,
        render,
        ToastContext as Context<ToastsContext<any>>,
        useToasts<ContainerType>({
            managedChildrenParameters: {
                onAfterChildLayoutEffect,
                onChildrenMountChange,
                onChildrenCountChange
            },
            toastsParameters: {
                visibleCount
            }
        })
    );
}

export function Toast<E extends Element>({ render, index, timeout, politeness, children, info, imperativeHandle }: ToastProps<E, ToastInfo>) {

    return useComponent(
        imperativeHandle, 
        render, 
        null, 
        useToast<E>({
        toastParameters: { 
            timeout, 
            politeness, 
            children 
        },
        info: { 
            index, 
            ...info 
        },
        context: useContextWithWarning(ToastContext, "toasts provider")
    }));
}
