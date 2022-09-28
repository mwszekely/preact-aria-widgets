
import { useState } from "preact-prop-helpers";
import { memo } from "preact/compat";
import { defaultRenderTab, defaultRenderTabPanel, defaultRenderTabs, Tabs, Tooltip, defaultRenderTooltip } from "../../";
import { EventDetail } from "../../index";


function getDocument() { return window.document; }

export function Blurb() {
    return (
        <>
            <p><a href="https://www.w3.org/WAI/ARIA/apg/patterns/tooltip/">Tooltips have yet to be well defined in many areas</a>, but this implementation aims to support common use cases:</p>
            <ul>
                <li>Hovering or focusing the trigger element shows the tooltip</li>
                <li>The tooltip stays shown when it itself is hovered/focused as well, so that the text inside can be selected</li>
                <li>Moving the mouse between the trigger and the tooltip has some tolerance associated with immediately hiding the tooltip.</li>
                <li>This can have a custom delay associated with it</li>
                <li></li>
            </ul>
            <p><strong>Things <em>not</em> handled:</strong></p>
            <ul>
                <li>You must ensure that either the tooltip contains a focusable element (a button, link, <code>&lt;div tabIndex="-1" /&gt;</code>, etc.)</li>
            </ul>
        </>
    )
}

export function Code() {
    return (<code>{``}</code>)
}

export function Demo() {


    return (
        <>
            <Blurb />
            <Code />
            <div>
                The following text triggers a tooltip: <Tooltip getDocument={getDocument} render={defaultRenderTooltip({

                    portalId: "portal",

                    makeTooltipProps: ({ isOpen }) => ({ children: "This text describes the triggering text in more detail.", style: { opacity: +isOpen } }),
                    makeTriggerProps: () => ({ children: "Tooltip-triggering text that is hoverable and focusable:", tabIndex: 0 }),
                    tagTooltip: "div",
                    tagTrigger: "span"
                })} />
            </div>
        </>
    )
}


