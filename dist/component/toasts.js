import { createContext } from "preact";
import { assertEmptyObject } from "preact-prop-helpers";
import { useContextWithWarning } from "../props.js";
import { useToast, useToasts } from "../use-toasts.js";
import { useComponent } from "./util.js";
const ToastContext = createContext(null);
export function Toasts({ onAfterChildLayoutEffect, onChildrenMountChange, render, visibleCount, imperativeHandle, onChildrenCountChange, ...void1 }) {
    assertEmptyObject(void1);
    return useComponent(imperativeHandle, render, ToastContext, useToasts({
        managedChildrenParameters: {
            onAfterChildLayoutEffect,
            onChildrenMountChange,
            onChildrenCountChange
        },
        toastsParameters: {
            visibleCount
        }
    }));
}
export function Toast({ render, index, timeout, politeness, children, info, imperativeHandle }) {
    return useComponent(imperativeHandle, render, null, useToast({
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
//# sourceMappingURL=toasts.js.map