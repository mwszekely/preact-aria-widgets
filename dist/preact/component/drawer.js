import { jsx as _jsx } from "preact/jsx-runtime";
import { assertEmptyObject, memo, useContext } from "preact-prop-helpers";
import { useDrawer } from "../use-drawer.js";
import { ParentDepthContext, useComponent, useDefault } from "./util.js";
export const Drawer = /* @__PURE__ */ memo((function Drawer({ active, onDismiss, dismissBackdropActive, dismissEscapeActive, dismissLostFocusActive, onElementChange, onMount, onUnmount, focusOpener, focusPopup, getDocument, imperativeHandle, onActiveElementChange, onLastActiveElementChange, onWindowFocusedChange, parentDepth, render, trapActive, ariaLabel, ...void1 }) {
    const defaultParentDepth = useContext(ParentDepthContext);
    let myDepth = (parentDepth ?? defaultParentDepth) + 1;
    assertEmptyObject(void1);
    return (_jsx(ParentDepthContext.Provider, { value: myDepth, children: useComponent(imperativeHandle, render, null, useDrawer({
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
        })) }));
}));
//# sourceMappingURL=drawer.js.map