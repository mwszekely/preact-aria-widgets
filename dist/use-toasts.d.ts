import { ComponentChildren } from "preact";
import { ElementProps, ManagedChildInfo, UseManagedChildParameters, UseManagedChildrenContext, UseManagedChildrenParameters, UseManagedChildrenReturnType } from "preact-prop-helpers";
import { StateUpdater } from "preact/hooks";
import { OmitStrong } from "./props.js";
export interface UseToastsParametersSelf {
    visibleCount: number;
}
export interface UseToastsParameters extends UseManagedChildrenParameters<ToastInfo> {
    toastsParameters: UseToastsParametersSelf;
}
export interface UseToastParametersSelf {
    politeness?: "polite" | "assertive";
    timeout: number | null;
    children: ComponentChildren;
}
export interface UseToastParameters<M extends ToastInfo> extends UseManagedChildParameters<M, "index"> {
    toastParameters: UseToastParametersSelf;
    context: ToastsContext<M>;
    info: OmitStrong<M, "setNumberAheadOfMe" | "focus" | "show">;
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
export interface UseToastReturnType<ToastType extends Element> {
    toastReturn: UseToastReturnTypeSelf;
    props: ElementProps<ToastType>;
}
export interface UseToastsReturnType<ContainerType extends Element, M extends ToastInfo> extends UseManagedChildrenReturnType<ToastInfo> {
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
export declare function useToasts<ContainerType extends Element>({ managedChildrenParameters: { onChildrenMountChange: ocmu, onAfterChildLayoutEffect }, toastsParameters: { visibleCount } }: UseToastsParameters): UseToastsReturnType<ContainerType, ToastInfo>;
/**
 * @compositeParams
 */
export declare function useToast<E extends Element>({ toastParameters: { politeness, timeout, children }, info: { index, ...info }, context }: UseToastParameters<ToastInfo>): UseToastReturnType<E>;
//# sourceMappingURL=use-toasts.d.ts.map