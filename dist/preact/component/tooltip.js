import { jsx as _jsx } from "preact/jsx-runtime";
import { assertEmptyObject, memo, useContext } from "preact-prop-helpers";
import { useTooltip } from "../use-tooltip.js";
import { ParentDepthContext, useComponent, useDefault } from "./util.js";
export const Tooltip = /* @__PURE__ */ memo(function TooltipU({ onStatus, getDocument, parentDepth, hoverDelay, render, imperativeHandle, onActiveElementChange, onLastActiveElementChange, onWindowFocusedChange, tooltipSemanticType, usesLongPress, longPress, ...void1 }) {
    const defaultParentDepth = useContext(ParentDepthContext);
    let myDepth = (parentDepth ?? defaultParentDepth) + 1;
    assertEmptyObject(void1);
    return (_jsx(ParentDepthContext.Provider, { value: myDepth, children: useComponent(imperativeHandle, render, null, useTooltip({
            escapeDismissParameters: {
                getDocument: useDefault("getDocument", getDocument),
                parentDepth: parentDepth ?? defaultParentDepth,
            },
            activeElementParameters: {
                getDocument: useDefault("getDocument", getDocument),
                onActiveElementChange,
                onLastActiveElementChange,
                onWindowFocusedChange
            },
            tooltipParameters: {
                onStatus,
                tooltipSemanticType,
                hoverDelay: hoverDelay ?? null,
                usesLongPress: usesLongPress || false
            },
            pressReturn: { longPress: longPress || false }
        })) }));
});
//# sourceMappingURL=tooltip.js.map