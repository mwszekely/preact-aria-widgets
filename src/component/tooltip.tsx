import { Ref } from "preact";
import { useContext } from "preact/compat";
import { Get3 } from "../props.js";
import { UseTooltipParameters, UseTooltipReturnType, useTooltip } from "../use-tooltip.js";
import { GenericComponentProps, ParentDepthContext, memoForwardRef, useComponent, useDefault } from "./util.js";

export type TooltipProps<TriggerType extends Element, PopupType extends Element> = GenericComponentProps<
    UseTooltipReturnType<TriggerType, PopupType>,
    Get3<UseTooltipParameters<TriggerType, PopupType>, "escapeDismissParameters", "tooltipParameters", "activeElementParameters">,
    "tooltipSemanticType" | "onStatus"
>;

export const Tooltip = memoForwardRef(function TooltipU<TriggerType extends Element, PopupType extends Element>({
    onStatus,
    getDocument,
    parentDepth,
    hoverDelay,
    render,
    imperativeHandle,
    onActiveElementChange,
    onLastActiveElementChange,
    onWindowFocusedChange,
    tooltipSemanticType
}: TooltipProps<TriggerType, PopupType>, ref?: Ref<any>) {

    const defaultParentDepth = useContext(ParentDepthContext);
    let myDepth = (parentDepth ?? defaultParentDepth) + 1;

    return (
        <ParentDepthContext.Provider value={myDepth}>
            {useComponent(
                imperativeHandle,
                render,
                null,
                useTooltip<TriggerType, PopupType>({
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
                        hoverDelay: hoverDelay ?? null
                    }
                }))}
        </ParentDepthContext.Provider>
    )
})

