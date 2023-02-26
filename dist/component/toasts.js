import { jsx as _jsx } from "preact/jsx-runtime";
import { createContext } from "preact";
import { useContext, useImperativeHandle } from "preact/hooks";
import { useToast, useToasts } from "../use-toasts.js";
import { memoForwardRef } from "./util.js";
const ToastContext = createContext(null);
export const Toasts = memoForwardRef(function Toasts({ onAfterChildLayoutEffect, onChildrenMountChange, render, visibleCount }, ref) {
    const info = useToasts({ managedChildrenParameters: { onAfterChildLayoutEffect, onChildrenMountChange }, toastsParameters: { visibleCount } });
    useImperativeHandle(ref, () => info);
    return (_jsx(ToastContext.Provider, { value: info.context, children: render(info) }));
});
export const Toast = memoForwardRef(function Toast({ render, index, timeout, politeness, children }, ref) {
    const context = useContext(ToastContext);
    console.assert(context != null, `This Toast was not rendered within a Toasts provider`);
    const info = useToast({
        managedChildParameters: { index },
        toastParameters: { timeout, politeness, children },
        context
    });
    useImperativeHandle(ref, () => info);
    return render(info);
});
//# sourceMappingURL=toasts.js.map