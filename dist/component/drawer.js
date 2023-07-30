import { jsx as _jsx } from "preact/jsx-runtime";
import { memo } from "preact-prop-helpers";
import { useContext, useImperativeHandle } from "preact/hooks";
import { useDrawer } from "../use-drawer.js";
import { ParentDepthContext, useDefault } from "./util.js";
export const Drawer = memo(function Drawer({ active, onDismiss, dismissBackdropActive, dismissEscapeActive, dismissLostFocusActive, onElementChange, onMount, onUnmount, focusOpener, focusPopup, getDocument, imperativeHandle, onActiveElementChange, onLastActiveElementChange, onWindowFocusedChange, parentDepth, render, trapActive, ariaLabel, }, ref) {
    const defaultParentDepth = useContext(ParentDepthContext);
    let myDepth = (parentDepth ?? defaultParentDepth) + 1;
    const info = useDrawer({
        dismissParameters: {
            onDismiss,
        },
        backdropDismissParameters: { dismissBackdropActive: dismissBackdropActive || false },
        lostFocusDismissParameters: { dismissLostFocusActive: dismissLostFocusActive || false },
        modalParameters: { active },
        refElementParameters: { onElementChange, onMount, onUnmount },
        escapeDismissParameters: {
            parentDepth: parentDepth ?? defaultParentDepth,
            dismissEscapeActive: dismissEscapeActive || false
        },
        activeElementParameters: {
            getDocument: useDefault("getDocument", getDocument),
            onActiveElementChange,
            onLastActiveElementChange,
            onWindowFocusedChange
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