import { JSX, assertEmptyObject, memo, useContext } from "preact-prop-helpers/preact";
import { Get4 } from "../props.js";
import { UseTooltipParameters, UseTooltipReturnType, useTooltip } from "../use-tooltip.js";
import { GenericComponentProps, ParentDepthContext, useComponent, useDefault } from "./util.js";

export type TooltipProps<TriggerType extends keyof JSX.IntrinsicElements, PopupType extends keyof JSX.IntrinsicElements> = GenericComponentProps<
    UseTooltipReturnType<TriggerType, PopupType>,
    Get4<UseTooltipParameters<TriggerType, PopupType>, "escapeDismissParameters", "tooltipParameters", "activeElementParameters", "pressReturn">,
    "tooltipSemanticType" | "onStatus"
>;

export const Tooltip = /* @__PURE__ */ memo(function TooltipU<TriggerType extends keyof JSX.IntrinsicElements, PopupType extends keyof JSX.IntrinsicElements>({
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

