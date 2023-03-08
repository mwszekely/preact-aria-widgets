import { ComponentChildren, h } from "preact";
import { ManagedChildInfo, UseManagedChildParameters, UseManagedChildrenContext, UseManagedChildrenParameters, UseManagedChildrenReturnType } from "preact-prop-helpers";
import { StateUpdater } from "preact/hooks";
export interface UseToastsParameters extends UseManagedChildrenParameters<ToastInfo> {
    toastsParameters: {
        visibleCount: number;
    };
}
export interface UseToastParameters<M extends ToastInfo> extends UseManagedChildParameters<M> {
    toastParameters: {
        politeness?: "polite" | "assertive";
        timeout: number | null;
        children: ComponentChildren;
    };
    context: ToastsContext<M>;
}
export interface ToastInfo extends ManagedChildInfo<number> {
    setNumberAheadOfMe: StateUpdater<number>;
    focus(): void;
    show(): void;
}
export interface UseToastReturnType<ToastType extends Element> {
    toastReturn: {
        numberOfToastsAheadOfUs: number;
        dismiss: () => void;
        dismissed: boolean;
        showing: boolean;
        resetDismissTimer: () => void;
    };
    props: h.JSX.HTMLAttributes<ToastType>;
}
export interface UseToastsReturnType<ContainerType extends Element, M extends ToastInfo> extends UseManagedChildrenReturnType<ToastInfo> {
    context: ToastsContext<M>;
    props: h.JSX.HTMLAttributes<ContainerType>;
}
export interface ToastsContext<M extends ToastInfo> extends UseManagedChildrenContext<M> {
    toastContext: {
        onAnyToastDismissed: (_index: number) => void;
        getMaxVisibleCount: () => number;
        onAnyToastMounted: (toastIndex: number) => void;
    };
}
export declare function useToasts<ContainerType extends Element>({ managedChildrenParameters: { onChildrenMountChange: ocmu, onAfterChildLayoutEffect }, toastsParameters: { visibleCount } }: UseToastsParameters): UseToastsReturnType<ContainerType, ToastInfo>;
export declare function useToast<E extends Element>({ toastParameters: { politeness, timeout, children }, managedChildParameters: { index, ..._managedChildParameters }, context }: UseToastParameters<ToastInfo>): UseToastReturnType<E>;
//# sourceMappingURL=use-toasts.d.ts.map