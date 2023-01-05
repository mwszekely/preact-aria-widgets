
import { useState } from "preact-prop-helpers";
import { defaultRenderPortal, Dialog } from "../../component/dialog";


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

    //const r = useCallback((...args: any[]) => { console.log(...args); }, []);


    return (
        <>
            <Blurb />
            <Code />
            <div>
                <Dialog<HTMLDivElement, HTMLButtonElement, HTMLDivElement, HTMLDivElement>
                    open={open}
                    onClose={() => setOpen(false)}
                    closeOnBackdrop={true}
                    closeOnEscape={true}
                    focusOpener={e => { e.focus() }}
                    parentDepth={0}
                    focusPopup={(e, f) => {  f()?.focus() }}
                    ariaLabel={null}
                    render={info => {
                        return (
                            <>
                                <button {...info.propsSource} onClick={() => setOpen(o => !o)}>Open dialog</button>
                                {defaultRenderPortal({
                                    portalId: "portal",
                                    children: <div {...info.propsFocusContainer} hidden={!open}>
                                        <div {...info.propsDialog}>
                                            <div {...info.propsTitle}>Dialog title</div>
                                            <div>Dialog body</div>
                                            <button onClick={() => setOpen(false)}>Close dialog</button>
                                        </div>
                                    </div>
                                })}
                            </>
                        )
                    }}
                />
            </div>
        </>
    )
}
