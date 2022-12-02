import { defaultRenderPortal, Dialog, DialogProps } from "../dialog";
import { cloneElement, ComponentChildren, h, Ref, VNode } from "preact";
import { generateRandomId, useForceUpdate, useMergedProps } from "preact-prop-helpers";
import { useCallback, useRef, useState } from "preact/hooks";
import { PartialExcept } from "component/util";
import { getDefaultClass, StandardProps } from "./util";
/*
class DialogReshowError extends Error {

}

function useSimpleDialog() {
    const [id] = useState(() => generateRandomId());
    const [open, setOpen] = useState(false);
    const promiseRef = useRef<{ promise: Promise<void>, resolve: () => void, reject: (ex: any) => void } | null>(null);
    const setDialogOpen = useCallback(() => { setOpen(true); }, []);
    const setDialogClose = useCallback(() => { setOpen(false); }, []);
    const showDialog = useCallback(async () => {
        if (promiseRef.current) {
            promiseRef.current.reject(new DialogReshowError());
            promiseRef.current = null;
        }
        let resolve!: () => void;
        let reject!: (ex: any) => void;
        let promise = new Promise<void>((res, rej) => { resolve = res; reject = rej; });
        promiseRef.current = {
            promise,
            reject,
            resolve
        }

        await promiseRef.current.promise;

    }, []);

}

interface SimpleDialogProvider {

}

interface SimpleDialogInfo {
    id: string;
    children: ComponentChildren;
}

export function SimpleDialogsProvider({ portalId }: { portalId: string }) {
    const forceUpdate = useForceUpdate();
    const dialogs = useRef<Map<string, SimpleDialogInfo>>(new Map());

    const pushDialog = useCallback((info: SimpleDialogInfo) => {
        const { children, id } = info;

        forceUpdate();
        dialogs.current.set(id, info)
    }, [])

    return (
        defaultRenderPortal({
            portalId,
            children:
                <>
                </>
        })
    )
}

function useCloseSimpleDialog() {

}*/
/*
export interface Dialog2Props extends Pick<DialogProps<HTMLDivElement, any, HTMLDivElement, HTMLDivElement>, "closeOnBackdrop" | "closeOnEscape" | "focusPopup" | "open" | "onClose" | "ariaLabel">, Pick<h.JSX.HTMLAttributes<HTMLDivElement>, StandardProps> {
    portalId: string;
    opener: VNode | null;
}

export function Dialog2({ portalId, opener, ariaLabel, focusPopup, onClose, open, closeOnBackdrop, closeOnEscape, children, ...props }: Dialog2Props, ref: Ref<HTMLDivElement>) {
    return (
        <Dialog<HTMLDivElement, any, HTMLDivElement, HTMLDivElement>
            ariaLabel={ariaLabel}
            focusPopup={focusPopup}
            closeOnBackdrop={closeOnBackdrop}
            closeOnEscape={closeOnEscape}
            onClose={onClose}
            open={open}
            render={info => {
                return (
                    <>
                        {cloneElement(opener ?? <></>, useMergedProps(opener?.props ?? {}, info.propsSource))}
                        {defaultRenderPortal({
                            portalId,
                            children: (
                                <div {...useMergedProps(info.propsFocusContainer, { className: getDefaultClass("dialog", "focus-container") })}>
                                    <div {...useMergedProps(info.propsDialog, { ref, className: getDefaultClass("dialog", "dialog") }, props)}>
                                        <div {...useMergedProps(info.propsTitle, { className: getDefaultClass("dialog", "dialog-title") })}></div>
                                        <div className={getDefaultClass("dialog", "dialog-body")}>{children}</div>
                                    </div>
                                </div>)
                        })}
                    </>
                )
            }}
        />
    )
}
*/
