import { Ref, VNode } from "preact";
import { useContext, useImperativeHandle } from "preact/hooks";
import { UseDrawerParameters, UseDrawerReturnType, useDrawer } from "../use-drawer.js";
import { ParentDepthContext, PartialExcept, memoForwardRef, useDefault } from "./util.js";

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

    return (
        <ParentDepthContext.Provider value={myDepth}>
            {render(info)}
        </ParentDepthContext.Provider>
    )

});
