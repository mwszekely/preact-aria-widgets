import { jsx as _jsx } from "preact/jsx-runtime";
import { useContext, useImperativeHandle } from "preact/compat";
import { useTooltip } from "../use-tooltip.js";
import { memoForwardRef, ParentDepthContext, useDefault } from "./util.js";
export const Tooltip = memoForwardRef(function TooltipU({ onStatus, getWindow, parentDepth, render, tooltipSemanticType }, ref) {
    const defaultParentDepth = useContext(ParentDepthContext);
    let myDepth = (parentDepth ?? defaultParentDepth) + 1;
    const info = useTooltip({
        escapeDismissParameters: {
            getWindow: useDefault("getWindow", getWindow),
            parentDepth: parentDepth ?? defaultParentDepth
        },
        tooltipParameters: {
            onStatus,
            tooltipSemanticType
        }
    });
    useImperativeHandle(ref, () => info);
    return (_jsx(ParentDepthContext.Provider, { value: myDepth, children: render(info) }));
});
//# sourceMappingURL=tooltip.js.map