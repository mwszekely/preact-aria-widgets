import { jsx as _jsx } from "preact/jsx-runtime";
import { useContext, useImperativeHandle } from "preact/hooks";
import { useDrawer } from "../use-drawer.js";
import { memoForwardRef, ParentDepthContext, useDefault } from "./util.js";
export const Drawer = memoForwardRef(function Drawer({ closeOnBackdrop, closeOnEscape, closeOnLostFocus, focusOpener, focusPopup, getWindow, onClose, open, parentDepth, render, trapActive, ariaLabel, }, ref) {
    const defaultParentDepth = useContext(ParentDepthContext);
    let myDepth = (parentDepth ?? defaultParentDepth) + 1;
    const info = useDrawer({
        dismissParameters: {
            closeOnBackdrop: closeOnBackdrop ?? true,
            closeOnEscape: closeOnEscape ?? true,
            closeOnLostFocus: closeOnLostFocus ?? true,
            onClose,
            open
        },
        escapeDismissParameters: {
            getWindow: useDefault("getWindow", getWindow),
            parentDepth: parentDepth ?? defaultParentDepth
        },
        focusTrapParameters: {
            focusOpener: useDefault("focusOpener", focusOpener),
            focusPopup,
            trapActive: trapActive ?? false
        },
        labelParameters: { ariaLabel }
    });
    useImperativeHandle(ref, () => info);
    return (_jsx(ParentDepthContext.Provider, { value: myDepth, children: render(info) }));
});
//# sourceMappingURL=drawer.js.map