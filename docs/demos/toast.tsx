
import { VNode } from "preact";
import { useState } from "preact-prop-helpers";
import { useCallback } from "preact/compat";
import { useRef } from "preact/hooks";
import { Toast, Toasts } from "../../";
/*
export function Blurb() {
    return (
        <>
            <p><a href="https://www.w3.org/WAI/ARIA/apg/patterns/alert/">Toasts (aka snackbars) are implemented using the Alert pattern.</a></p>
            <ul>
                <li>Pushing a toasts causes its contents to be shown visibly (and audibly with a screen reader)</li>
                <li>Only new toasts are announced</li>
                <li>Toasts are shown as soon as they are pushed, but you can control the maximum number shown at once with</li>
                <li>Toasts can be dismissed in any order</li>
                <li>Toasts can be set to auto-dismiss.</li>
            </ul>
            <p><strong>Things <em>not</em> handled:</strong></p>
            <ul>
                <li>Auto-dismiss behavior is very situational. An auto-dismissed toast should only refer to information that can be viewed elsewhere; "X files deleted" can be double-checked in the Recycle Bin, "X has logged in" which you can along with everyone else in a tab somewhere, etc. This obviously cannot be checked programmatically.</li>
                <li>TODO: Focus management related to toasts that have interactive content</li>
                <li>TODO: Toasts are still announced even when the current browser tab is hidden instead of saving them for when the user returns</li>
                <li>TODO: Toasts still auto-dismiss when they have focus/are being interacted with</li>
            </ul>
        </>
    )
}

export function Code() {
    return (<code>{``}</code>)
}

export function Demo() {

    const currentIndex = useRef(0);
    const [toasts, setToasts] = useState<VNode[]>([]);

    const pushToast = useCallback(() => {
        const index = currentIndex.current;
        currentIndex.current += 1;

        setToasts(t => [...t, <Toast subInfo={undefined} index={index} key={index} render={({ toast: { dismiss, showing, dismissed, numberOfToastsAheadOfUs } }) => (
            <div style={showing ? {} : { opacity: 0.5 }}>This the toast with an index of {index}. (#{numberOfToastsAheadOfUs} in the queue to be shown). <button disabled={dismissed} onClick={dismiss}>Click to dismiss</button></div>
        )} timeout={null} />]);
    }, []);

    return (
        <>
            <Blurb />
            <Code />
            <button onClick={pushToast}>Push a toast</button>
            <div>
                <Toasts<HTMLDivElement> visibleCount={3} render={(info, props) => { return <div {...props}>{toasts}</div> }} />
            </div>
        </>
    )
}*/


