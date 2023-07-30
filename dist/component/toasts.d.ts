import { OmitStrong } from "preact-prop-helpers";
import { Get2 } from "../props.js";
import { ToastInfo, UseToastParameters, UseToastReturnType, UseToastsParameters, UseToastsReturnType } from "../use-toasts.js";
import { GenericComponentProps } from "./util.js";
export type ToastsProps<ContainerType extends Element, M extends ToastInfo = ToastInfo> = GenericComponentProps<UseToastsReturnType<ContainerType, M>, Get2<UseToastsParameters, "managedChildrenParameters", "toastsParameters">, "visibleCount">;
export type ToastProps<E extends Element, M extends ToastInfo = ToastInfo> = GenericComponentProps<UseToastReturnType<E, M>, Get2<UseToastParameters<M>, "toastParameters", "info">, "index"> & {
    info?: OmitStrong<M, keyof ToastInfo>;
};
export declare function Toasts<ContainerType extends Element>({ onAfterChildLayoutEffect, onChildrenMountChange, render, visibleCount, imperativeHandle, onChildrenCountChange, ...void1 }: ToastsProps<ContainerType, ToastInfo>): import("preact").JSX.Element;
export declare function Toast<E extends Element>({ render, index, timeout, politeness, children, info, imperativeHandle }: ToastProps<E, ToastInfo>): import("preact").JSX.Element;
//# sourceMappingURL=toasts.d.ts.map