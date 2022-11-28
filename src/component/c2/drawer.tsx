import { Drawer, DrawerProps } from "../drawer";
import { cloneElement, ComponentChildren, h, Ref, VNode } from "preact";
import { generateRandomId, useForceUpdate, useMergedProps } from "preact-prop-helpers";
import { useCallback, useRef, useState } from "preact/hooks";
import { PartialExcept } from "component/util";
import { getDefaultClass, StandardProps } from "./util";
import { defaultRenderPortal } from "component/dialog";
/*
class DrawerReshowError extends Error {

}

function useSimpleDrawer() {
    const [id] = useState(() => generateRandomId());
    const [open, setOpen] = useState(false);
    const promiseRef = useRef<{ promise: Promise<void>, resolve: () => void, reject: (ex: any) => void } | null>(null);
    const setDrawerOpen = useCallback(() => { setOpen(true); }, []);
    const setDrawerClose = useCallback(() => { setOpen(false); }, []);
    const showDrawer = useCallback(async () => {
        if (promiseRef.current) {
            promiseRef.current.reject(new DrawerReshowError());
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

interface SimpleDrawerProvider {

}

interface SimpleDrawerInfo {
    id: string;
    children: ComponentChildren;
}

export function SimpleDrawersProvider({ portalId }: { portalId: string }) {
    const forceUpdate = useForceUpdate();
    const dialogs = useRef<Map<string, SimpleDrawerInfo>>(new Map());

    const pushDrawer = useCallback((info: SimpleDrawerInfo) => {
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

function useCloseSimpleDrawer() {

}*/

export interface Drawer2Props extends Pick<DrawerProps<HTMLDivElement, any, HTMLDivElement, HTMLDivElement>, "closeOnLostFocus" | "closeOnBackdrop" | "closeOnEscape" | "focusPopup" | "open" | "onClose" | "ariaLabel">, Pick<h.JSX.HTMLAttributes<HTMLDivElement>, StandardProps> {
    portalId: string;
    opener: VNode | null;
}

export function Drawer2({ portalId, opener, ariaLabel, focusPopup, onClose, open, closeOnBackdrop, closeOnEscape, closeOnLostFocus, children, ...props }: Drawer2Props, ref: Ref<HTMLDivElement>) {
    return (
        <Drawer<HTMLDivElement, any, HTMLDivElement, HTMLDivElement>
            closeOnLostFocus={closeOnLostFocus}
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
                                    <div {...useMergedProps(info.propsDrawer, { ref, className: getDefaultClass("dialog", "dialog") }, props)}>
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

