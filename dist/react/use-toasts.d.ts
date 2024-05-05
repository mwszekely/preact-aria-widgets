import { ComponentChildren } from "preact";
import { ElementProps, ManagedChildInfo, Nullable, UseGenericChildParameters, UseManagedChildParameters, UseManagedChildReturnType, UseManagedChildrenContext, UseManagedChildrenParameters, UseManagedChildrenReturnType } from "preact-prop-helpers/react";
import { StateUpdater } from "preact/hooks";
import { OmitStrong } from "./props.js";
export interface UseToastsParametersSelf {
    visibleCount: number;
}
export interface UseToastsParameters extends UseManagedChildrenParameters<ToastInfo> {
    toastsParameters: UseToastsParametersSelf;
}
export interface UseToastParametersSelf {
    politeness?: Nullable<"polite" | "assertive">;
    timeout: Nullable<number>;
    children: ComponentChildren;
}
export interface UseToastParameters<M extends ToastInfo> extends OmitStrong<UseManagedChildParameters<M>, "info" | "context">, UseGenericChildParameters<ToastsContext<M>, Pick<M, "index">> {
    toastParameters: UseToastParametersSelf;
}
export interface ToastInfo extends ManagedChildInfo<number> {
    setNumberAheadOfMe: StateUpdater<number>;
    focus(): void;
    show(): void;
}
export interface UseToastReturnTypeSelf {
    numberOfToastsAheadOfUs: number;
    dismiss: () => void;
    dismissed: boolean;
    showing: boolean;
    resetDismissTimer: () => void;
}
export interface UseToastReturnType<ToastType extends Element, M extends ToastInfo> extends UseManagedChildReturnType<M> {
    toastReturn: UseToastReturnTypeSelf;
    props: ElementProps<ToastType>;
}
export interface UseToastsReturnType<ContainerType extends Element, M extends ToastInfo> extends UseManagedChildrenReturnType<M> {
    context: ToastsContext<M>;
    props: ElementProps<ContainerType>;
}
export interface ToastsContextSelf {
    onAnyToastDismissed: (_index: number) => void;
    getMaxVisibleCount: () => number;
    onAnyToastMounted: (toastIndex: number) => void;
}
export interface ToastsContext<M extends ToastInfo> extends UseManagedChildrenContext<M> {
    toastContext: ToastsContextSelf;
}
/**
 * Allows any descendent children to push a visible (and/or audible) message to the user's attention.
 *
 * @compositeParams
 *
 * @hasChild {@link useToast}
 */
export declare const useToasts: <ContainerType extends Element>({ managedChildrenParameters: { onChildrenMountChange: ocmu, onAfterChildLayoutEffect }, toastsParameters: { visibleCount } }: UseToastsParameters) => UseToastsReturnType<ContainerType, ToastInfo>;
/**
 * @compositeParams
 */
export declare const useToast: <E extends Element>({ toastParameters: { politeness, timeout, children }, info: { index, ...info }, context }: UseToastParameters<ToastInfo>) => UseToastReturnType<E, ToastInfo>;
//# sourceMappingURL=use-toasts.d.ts.map