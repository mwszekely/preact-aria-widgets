
import { useMergedProps, usePress, useRefElement } from "preact-prop-helpers";
import { useState } from "preact/hooks";
import { Tooltip, TooltipStatus, useDefaultRenderPortal } from "../../dist/preact/index.js";

export function Blurb() {
    return (
        <>
            <p><a href="https://www.w3.org/WAI/ARIA/apg/patterns/tooltip/">Tooltips have yet to be well defined in many areas</a>, but this implementation aims to support common use cases:</p>
            <ul>
                <li>Hovering or focusing the trigger element shows the tooltip</li>
                <li>The tooltip stays shown when it itself is hovered/focused as well, so that the text inside can be selected</li>
                <li>Moving the mouse between the trigger and the tooltip has some tolerance associated with immediately hiding the tooltip.</li>
                <li>Hovering, focusing, and re-hovering can each have a custom delay associated with it</li>
                <li>When not using a pointer that can hover, tooltips can be activated with a long press (from `usePress`, used by buttons, checkboxes, list items, etc.)</li>
            </ul>
            <p><strong>Things <em>not</em> handled:</strong></p>
            <ul>
                <li>You must ensure that either the tooltip contains a focusable element (a button, link, <code>&lt;div tabIndex="-1" /&gt;</code>, etc.)</li>
                <li>Long presses on mobile devices are not yet handled (e.g. a long press on a button triggers a tooltip but does not activate the button)</li>
            </ul>
        </>
    )
}

export function Code() {
    return (<code>{``}</code>)
}

export function Demo() {

    const [tooltipStatusText, setTooltipStatusText] = useState<TooltipStatus>(null);
    const [tooltipStatusButton, setTooltipStatusButton] = useState<TooltipStatus>(null);
    const { propsStable, refElementReturn } = useRefElement<HTMLButtonElement>({ refElementParameters: {} })
    const { pressReturn, props } = usePress<HTMLButtonElement>({ pressParameters: { allowRepeatPresses: false, excludeEnter: null, excludePointer: null, excludeSpace: null, focusSelf: e => e.focus(), longPressThreshold: 1000, onPressingChange: null, onPressSync: () => alert("Button clicked") }, refElementReturn })

    return (
        <>
            <Blurb />
            <Code />
            <div>
                The following text triggers a tooltip:
                <Tooltip<HTMLSpanElement, HTMLDivElement>
                    tooltipSemanticType="description"
                    onStatus={setTooltipStatusText}
                    hoverDelay={500}
                    render={info => {
                        return <>
                            <span tabIndex={0} {...info.propsTrigger}>Tooltip-triggering text that is hoverable and focusable: </span>
                            {useDefaultRenderPortal({
                                portalId: "portal",
                                children: <div {...info.propsPopup} hidden={!tooltipStatusText}>This text describes the triggering text in more detail.</div>
                            })}</>
                    }} />
            </div>
            <div>
                Also, this is a button with a tooltip. It behaves slightly differently:
                <Tooltip<HTMLButtonElement, HTMLDivElement>
                    tooltipSemanticType="description"
                    onStatus={setTooltipStatusButton}
                    hoverDelay={500}
                    usesLongPress={true}
                    longPress={pressReturn.longPress}
                    render={info => {
                        return <>
                            <button {...useMergedProps(info.propsTrigger, propsStable, props)}>Button with a tooltip </button>
                            {useDefaultRenderPortal({
                                portalId: "portal",
                                children: <div {...info.propsPopup} hidden={!tooltipStatusButton}>Tooltip for the button</div>
                            })}</>
                    }} />
            </div>
        </>
    )
}


