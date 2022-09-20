
import { useState } from "preact-prop-helpers";
import { AriaButton, EventDetail, ListboxSingle, defaultRenderButton } from "../../index";
import { Dialog, defaultRenderDialog } from "../../component/dialog"



function getDocument() { return window.document; }

export function Blurb() {
    return (
        <>
            <p><a href="https://www.w3.org/WAI/ARIA/apg/patterns/listbox/">In accordance with the ARIA guidelines for Listbox patterns,</a> this widget supports the following:</p>
            <ul>
                <li>The children are treated as a composite component with list navigation; see <code>AiraSingleSelectList</code> for more information</li>
                <li>When opened, the menu will focus the first element within it. When closed (by pressing escape, pressing the button again, or tabbing out of the menu), the button that opened it will have focus restored to it.</li>
                <li>When the menu is closed because another element on the page was focused instead, focus will not be modified.</li>
            </ul>
            <p><strong>Things <em>not</em> handled:</strong></p>
            <ul>
                <li>TODO</li>
            </ul>
        </>
    )
}

export function Code() {
    return (<code>{``}</code>)
}

export function Demo() {
    const [count, setCount] = useState(5);
    const [open, setOpen] = useState(false);


    return (
        <>
            <Blurb />
            <Code />
            <div>
                <AriaButton tag="button" onPress={() => setOpen(true)} render={defaultRenderButton("button", () => ({ children: "Open dialog " + (open ? "(open)" : "(closed)") }))} />
                <Dialog
                    getDocument={getDocument}
                    onClose={() => setOpen(false)}
                    open={open}
                    bodyIsOnlySemantic={true}
                    render={defaultRenderDialog({
                        portalId: "portal",
                        makePropsBackdrop: () => ({}),
                        makePropsBody: () => ({ children: "Dialog body" }),
                        makePropsDialog: () => ({ style: { display: !open ? "none" : undefined } }),
                        makePropsTitle: () => ({ children: "Dialog title" }),
                        tagBackdrop: "div",
                        tagBody: "div",
                        tagDialog: "div",
                        tagTitle: "div"
                    })}
                />
            </div>
        </>
    )
}