import { Ref, VNode } from "preact";
import { useState } from "preact-prop-helpers";
import { useContext, useImperativeHandle } from "preact/hooks";
import { useDrawer, UseDrawerParameters, UseDrawerReturnType } from "../use-drawer";
import { defaultRenderPortal } from "./dialog";
import { memoForwardRef, ParentDepthContext, PartialExcept, useDefault } from "./util";

type Get<T, K extends keyof T> = T[K];

interface DrawerPropsBase<FocusContainerElement extends Element, SourceElement extends Element, DrawerElement extends Element, TitleElement extends Element> extends
    Get<UseDrawerParameters<DrawerElement, TitleElement>, "dismissParameters">,
    Get<UseDrawerParameters<DrawerElement, TitleElement>, "escapeDismissParameters">,
    Get<UseDrawerParameters<DrawerElement, TitleElement>, "labelParameters">,
    Get<UseDrawerParameters<DrawerElement, TitleElement>, "focusTrapParameters"> {
    ref?: Ref<UseDrawerReturnType<FocusContainerElement, SourceElement, DrawerElement, TitleElement>>;
    render(drawerInfo: UseDrawerReturnType<FocusContainerElement, SourceElement, DrawerElement, TitleElement>): VNode<any>;
}

export interface DrawerProps<FocusContainerElement extends Element, SourceElement extends Element, DialogElement extends Element, TitleElement extends Element> extends PartialExcept<DrawerPropsBase<FocusContainerElement, SourceElement, DialogElement, TitleElement>, "ariaLabel" | "onClose" | "open" | "focusPopup"> {

    render(dialogInfo: UseDrawerReturnType<FocusContainerElement, SourceElement, DialogElement, TitleElement>): VNode<any>;
}
/*
export function defaultRenderDrawer<FocusContainerElement extends HTMLElement, DrawerElement extends HTMLElement, TitleElement extends HTMLElement, BodyElement extends HTMLElement, BackdropElement extends HTMLElement>({ portalId, tagFocusContainer, tagBackdrop, tagBody, tagDialog, tagTitle, makePropsFocusContainer, makePropsBackdrop, makePropsBody, makePropsDialog, makePropsTitle }: { portalId: string, tagFocusContainer: ElementToTag<FocusContainerElement>, tagDialog: ElementToTag<DrawerElement>; tagTitle: ElementToTag<TitleElement>; tagBody: ElementToTag<BodyElement>; tagBackdrop: ElementToTag<BackdropElement>, makePropsFocusContainer: (info: UseDrawerReturnType<FocusContainerElement, DrawerElement>) => h.JSX.HTMLAttributes<FocusContainerElement>, makePropsDialog: (info: UseDrawerReturnType<FocusContainerElement, DrawerElement>) => h.JSX.HTMLAttributes<DrawerElement>, makePropsBody: (info: UseDrawerReturnType<FocusContainerElement, DrawerElement>) => h.JSX.HTMLAttributes<BodyElement>, makePropsTitle: (info: UseDrawerReturnType<FocusContainerElement, DrawerElement>) => h.JSX.HTMLAttributes<TitleElement>, makePropsBackdrop: (info: UseDrawerReturnType<FocusContainerElement, DrawerElement>) => h.JSX.HTMLAttributes<BackdropElement> }) {
    return defaultRenderModal<FocusContainerElement, DrawerElement, TitleElement, BodyElement, BackdropElement, UseDrawerReturnType<FocusContainerElement, DrawerElement>>({ portalId, makePropsFocusContainer, makePropsBackdrop, makePropsBody, makePropsDialog, makePropsTitle, tagFocusContainer, tagBackdrop, tagBody, tagDialog, tagTitle });
}*/

export const Drawer = memoForwardRef(function Drawer<FocusContainerElement extends Element, SourceElement extends Element, DrawerElement extends Element, TitleElement extends Element>({

    closeOnBackdrop,
    closeOnEscape,
    closeOnLostFocus,
    focusOpener,
    focusPopup,
    getWindow,
    onClose,
    open,
    parentDepth,
    render,
    trapActive,
    ariaLabel,
}: DrawerProps<FocusContainerElement, SourceElement, DrawerElement, TitleElement>, ref: Ref<any>) {
    const defaultParentDepth = useContext(ParentDepthContext);
    let myDepth = (parentDepth ?? defaultParentDepth) + 1;
    
    const info = useDrawer<FocusContainerElement, SourceElement, DrawerElement, TitleElement>({
        dismissParameters: {
            closeOnBackdrop: closeOnBackdrop ?? true,
            closeOnEscape: closeOnEscape ?? true,
            closeOnLostFocus: closeOnLostFocus ?? true,
            onClose,
            open
        },
        escapeDismissParameters: {
            getWindow: useDefault("getWindow", getWindow),
            parentDepth: parentDepth ?? defaultParentDepth
        },
        focusTrapParameters: {
            focusOpener: useDefault("focusOpener", focusOpener),
            focusPopup,
            trapActive: trapActive ?? false
        },
        labelParameters: { ariaLabel }
    });
    useImperativeHandle(ref!, () => info);

    return render(info);

})

export function DrawerDemo() {
    const [open, setOpen] = useState(false);

    return (
        <Drawer<HTMLDivElement, HTMLButtonElement, HTMLDivElement, HTMLDivElement>
            open={open}
            onClose={() => setOpen(false)}
            closeOnBackdrop={true}
            closeOnEscape={true}
            focusOpener={e => e.focus()}
            parentDepth={0}
            closeOnLostFocus={true}
            trapActive={true}
            focusPopup={(e, f) => f()?.focus()}
            ariaLabel={null}
            render={info => {
                return (
                    <>
                    <button {...info.propsSource}>Open drawer</button>
                        {defaultRenderPortal({
                            portalId: "portal",
                            children: <div {...info.propsFocusContainer}>
                                <div {...info.propsDrawer}>
                                    <div {...info.propsTitle}>Drawer title</div>
                                    <div>Drawer body</div>
                                    <button onClick={() => setOpen(false)}>Close drawer</button>
                                </div>
                            </div>
                        })}
                    </>
                )
            }}
        />
    )
}
