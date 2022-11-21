import { h, Ref, VNode } from "preact";
import { UseActiveElementParameters } from "preact-prop-helpers";
import { useImperativeHandle } from "preact/compat";
import { ElementToTag, PropModifier } from "../props";
import { useDrawer, UseDrawerParameters, UseDrawerReturnType } from "../use-drawer";
import { defaultRenderModal } from "./dialog";
import { memoForwardRef } from "./util";

type Get<T, K extends keyof T> = T[K];

export interface DrawerProps<FocusContainerElement extends HTMLElement, DrawerElement extends HTMLElement, TitleElement extends HTMLElement, BodyElement extends HTMLElement, BackdropElement extends HTMLElement> extends
    Get<UseDrawerParameters, "dismissParameters">,
    Get<UseDrawerParameters, "escapeDismissParameters">,
    Get<UseDrawerParameters, "focusTrapParameters"> {
    imperativeHandle?: Ref<UseDrawerReturnType<FocusContainerElement, DrawerElement>>;
    render(drawerInfo: UseDrawerReturnType<FocusContainerElement, DrawerElement>): VNode<any>;
}

export function defaultRenderDrawer<FocusContainerElement extends HTMLElement, DrawerElement extends HTMLElement, TitleElement extends HTMLElement, BodyElement extends HTMLElement, BackdropElement extends HTMLElement>({ portalId, tagFocusContainer, tagBackdrop, tagBody, tagDialog, tagTitle, makePropsFocusContainer, makePropsBackdrop, makePropsBody, makePropsDialog, makePropsTitle }: { portalId: string, tagFocusContainer: ElementToTag<FocusContainerElement>, tagDialog: ElementToTag<DrawerElement>; tagTitle: ElementToTag<TitleElement>; tagBody: ElementToTag<BodyElement>; tagBackdrop: ElementToTag<BackdropElement>, makePropsFocusContainer: (info: UseDrawerReturnType<FocusContainerElement, DrawerElement>) => h.JSX.HTMLAttributes<FocusContainerElement>, makePropsDialog: (info: UseDrawerReturnType<FocusContainerElement, DrawerElement>) => h.JSX.HTMLAttributes<DrawerElement>, makePropsBody: (info: UseDrawerReturnType<FocusContainerElement, DrawerElement>) => h.JSX.HTMLAttributes<BodyElement>, makePropsTitle: (info: UseDrawerReturnType<FocusContainerElement, DrawerElement>) => h.JSX.HTMLAttributes<TitleElement>, makePropsBackdrop: (info: UseDrawerReturnType<FocusContainerElement, DrawerElement>) => h.JSX.HTMLAttributes<BackdropElement> }) {
    return defaultRenderModal<FocusContainerElement, DrawerElement, TitleElement, BodyElement, BackdropElement, UseDrawerReturnType<FocusContainerElement, DrawerElement>>({ portalId, makePropsFocusContainer, makePropsBackdrop, makePropsBody, makePropsDialog, makePropsTitle, tagFocusContainer, tagBackdrop, tagBody, tagDialog, tagTitle });
}

export const Drawer = memoForwardRef(function Drawer<FocusContainerElement extends HTMLElement, DrawerElement extends HTMLElement, TitleElement extends HTMLElement, BodyElement extends HTMLElement, BackdropElement extends HTMLElement>({

    closeOnBackdrop,
    closeOnEscape,
    closeOnLostFocus,
    focusOpener,
    focusSelf,
    getWindow,
    onClose,
    open,
    parentDepth,
    render,
    trapActive,
    imperativeHandle
}: DrawerProps<FocusContainerElement, DrawerElement, TitleElement, BodyElement, BackdropElement>, ref: Ref<any>) {
    const info = useDrawer<FocusContainerElement, DrawerElement>({
        dismissParameters: { closeOnBackdrop, closeOnEscape, closeOnLostFocus, onClose, open },
        escapeDismissParameters: { getWindow, parentDepth },
        focusTrapParameters: { focusOpener, focusSelf, trapActive }
    });
    useImperativeHandle(imperativeHandle!, () => info);

    return render(info);

})
