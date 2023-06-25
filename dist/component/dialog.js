import { jsx as _jsx } from "preact/jsx-runtime";
import { createPortal } from "preact/compat";
import { useContext, useImperativeHandle, useRef } from "preact/hooks";
import { useDialog } from "../use-dialog.js";
import { ParentDepthContext, memoForwardRef, useDefault } from "./util.js";
export function defaultRenderPortal({ portalId, children }) {
    const portalRef = useRef(null);
    portalRef.current ??= document.getElementById(portalId);
    if (portalRef.current)
        return createPortal(children, portalRef.current);
    else
        return children;
}
export const Dialog = memoForwardRef(function Dialog({ onClose, open, closeOnBackdrop, closeOnEscape, focusOpener, getWindow, parentDepth, focusPopup, ariaLabel, render }, ref) {
    const defaultParentDepth = useContext(ParentDepthContext);
    let myDepth = (parentDepth ?? defaultParentDepth) + 1;
    const info = useDialog({
        dismissParameters: {
            closeOnBackdrop: closeOnBackdrop ?? true,
            closeOnEscape: closeOnEscape ?? true,
            onClose,
            open
        },
        escapeDismissParameters: {
            getWindow: useDefault("getWindow", getWindow),
            parentDepth: parentDepth ?? defaultParentDepth
        },
        focusTrapParameters: {
            focusOpener: useDefault("focusOpener", focusOpener),
            focusPopup
        },
        labelParameters: { ariaLabel }
    });
    useImperativeHandle(ref, () => info);
    return (_jsx(ParentDepthContext.Provider, { value: myDepth, children: render(info) }));
});
//# sourceMappingURL=dialog.js.map