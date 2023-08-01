import { assertEmptyObject, memo } from "preact-prop-helpers";
import { useContext } from "preact/compat";
import { Get4 } from "../props.js";
import { UseTooltipParameters, UseTooltipReturnType, useTooltip } from "../use-tooltip.js";
import { GenericComponentProps, ParentDepthContext, useComponent, useDefault } from "./util.js";

export type TooltipProps<TriggerType extends Element, PopupType extends Element> = GenericComponentProps<
    UseTooltipReturnType<TriggerType, PopupType>,
    Get4<UseTooltipParameters<TriggerType, PopupType>, "escapeDismissParameters", "tooltipParameters", "activeElementParameters", "pressReturn">,
    "tooltipSemanticType" | "onStatus"
>;

export const Tooltip = memo(function TooltipU<TriggerType extends Element, PopupType extends Element>({
    onStatus,
    getDocument,
    parentDepth,
    hoverDelay,
    render,
    imperativeHandle,
    onActiveElementChange,
    onLastActiveElementChange,
    onWindowFocusedChange,
    tooltipSemanticType,
    usesLongPress,
    longPress,
    ...void1
}: TooltipProps<TriggerType, PopupType>) {

    const defaultParentDepth = useContext(ParentDepthContext);
    let myDepth = (parentDepth ?? defaultParentDepth) + 1;
    assertEmptyObject(void1);

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
                        hoverDelay: hoverDelay ?? null,
                        usesLongPress: usesLongPress || false
                    },
                    pressReturn: { longPress: longPress || false }
                }))}
        </ParentDepthContext.Provider>
    )
})

