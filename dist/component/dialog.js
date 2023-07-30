import { jsx as _jsx } from "preact/jsx-runtime";
import { memo } from "preact-prop-helpers";
import { useContext, useImperativeHandle } from "preact/hooks";
import { useDialog } from "../use-dialog.js";
import { ParentDepthContext, useDefault } from "./util.js";
export const Dialog = memo(function Dialog({ active, onDismiss, dismissBackdropActive, dismissEscapeActive, focusOpener, getDocument, imperativeHandle, parentDepth, onActiveElementChange, onLastActiveElementChange, onWindowFocusedChange, focusPopup, ariaLabel, onElementChange, onMount, onUnmount, render }) {
    const defaultParentDepth = useContext(ParentDepthContext);
    let myDepth = (parentDepth ?? defaultParentDepth) + 1;
    const info = useDialog({
        dismissParameters: {
            onDismiss,
        },
        backdropDismissParameters: { dismissBackdropActive: dismissBackdropActive || false },
        //lostFocusDismissParameters: { dismissLostFocusActive: dismissLostFocusActive || false },
        modalParameters: { active },
        refElementParameters: { onElementChange, onMount, onUnmount },
        escapeDismissParameters: {
            dismissEscapeActive: dismissEscapeActive || false,
            parentDepth: parentDepth ?? defaultParentDepth
        },
        activeElementParameters: {
            getDocument: useDefault("getDocument", getDocument),
            onActiveElementChange,
            onLastActiveElementChange,
            onWindowFocusedChange
        },
        focusTrapParameters: {
            focusOpener: useDefault("focusOpener", focusOpener),
            focusPopup
        },
        labelParameters: { ariaLabel }
    });
    useImperativeHandle(imperativeHandle, () => info);
    return (_jsx(ParentDepthContext.Provider, { value: myDepth, children: render(info) }));
});
//# sourceMappingURL=dialog.js.map