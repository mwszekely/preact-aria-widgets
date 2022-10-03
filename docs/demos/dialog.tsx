
import { useState } from "preact-prop-helpers";
import { useCallback } from "preact/hooks";
import { defaultRenderDialog, Dialog } from "../../component/dialog";
import { Button, defaultRenderButton } from "../../index";



function getDocument() { return window.document; }

export function Blurb() {
    return (
        <>
            <p><a href="https://www.w3.org/WAI/ARIA/apg/patterns/dialogmodal/">In accordance with the ARIA guidelines for Modal Dialog patterns,</a> this widget supports the following:</p>
            <ul>
                <li>Dialogs block all other elements on the page from receiving focus/interaction and being perceivable to screen readers.</li>
                <li>Dialogs can be dismissed by pressing Escape or clicking the element designated as the backdrop, both of which can be cancelled/ignored if you need</li>
                <li>When opened, the dialog will focus its title or body content as appropriate, however read below under Things Not Handled for caveats.</li>
                <li>When closed for any reason, the element that was responsible for opening the dialog will be focused.</li>
            </ul>
            <p><strong>Things <em>not</em> handled:</strong></p>
            <ul>
                <li>By default, when opened, a dialog will focus its body content or title content depending on <code>bodyIsOnlySemantic</code>, which indicates that the dialog's body contains no interactive elements. This may not be suitable for all situations.</li>
                <li>It is <em>hightly</em> recommended to override <code>focusSelf</code> for all dialogs you create, and have it focus whatever element makes the most sense for your particular dialog.
                    <ul>
                        <li>Dialogs that act like a form should focus the first interactive element</li>
                        <li>Dialogs that perform destructive actions should focus the "Cancel" button</li>
                        <li>In some cases, it's best to focus the first paragraph of the body.</li>
                    </ul>
                    In all cases, consider that the first focused element will both be how keyboard users interact with the dialog, but also the first thing a screen reader will read aloud.
                </li>
            </ul>
        </>
    )
}

export function Code() {
    return (<code>{``}</code>)
}

export function Demo() {
    const [open, setOpen] = useState(false);

    const r = useCallback((...args: any[]) => { console.log(...args); }, []);


    return (
        <>
            <Blurb />
            <Code />
            <div>
                <Button tagButton="button" getDocument={getDocument} onPress={() => setOpen(true)} render={defaultRenderButton("button", () => ({ children: "Open dialog " + (open ? "(open)" : "(closed)") }))} />
                <Dialog
                    getDocument={getDocument}
                    onClose={() => setOpen(false)}
                    open={open}
                    bodyIsOnlySemantic={true}
                    render={defaultRenderDialog({
                        portalId: "portal",
                        makePropsBackdrop: () => ({ "data-type": "backdrop" } as {}),
                        makePropsFocusContainer: () => ({ "data-type": "focus" } as {}),
                        makePropsBody: () => ({ children: "Dialog body" , "data-type": "body"} as {}),
                        makePropsDialog: () => ({ style: { display: !open ? "none" : undefined }, "data-type": "dialog" } as {}),
                        makePropsTitle: () => ({ children: "Dialog title", "data-type": "title" } as {}),
                        tagBackdrop: "div",
                        tagBody: "div",
                        tagDialog: "div",
                        tagTitle: "div",
                        tagFocusContainer: "div"
                    })}
                />
            </div>
        </>
    )
}
