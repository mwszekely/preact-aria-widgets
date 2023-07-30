import { Ref } from "preact";
import { memo } from "preact-prop-helpers";
import { useContext, useImperativeHandle } from "preact/hooks";
import { Get11 } from "../props.js";
import { UseDrawerParameters, UseDrawerReturnType, useDrawer } from "../use-drawer.js";
import { GenericComponentProps, ParentDepthContext, useDefault } from "./util.js";

export type DrawerProps<FocusContainerElement extends Element, SourceElement extends Element, DrawerElement extends Element, TitleElement extends Element> = GenericComponentProps<
    UseDrawerReturnType<FocusContainerElement, SourceElement, DrawerElement, TitleElement>,
    Get11<UseDrawerParameters<DrawerElement, TitleElement>, "dismissParameters", "escapeDismissParameters", "labelParameters", "focusTrapParameters", "activeElementParameters","dismissParameters","backdropDismissParameters","escapeDismissParameters","lostFocusDismissParameters","modalParameters","refElementParameters">,
    "ariaLabel" | "onDismiss" | "active" | "focusPopup"
>;

export const Drawer = memo(function Drawer<FocusContainerElement extends Element, SourceElement extends Element, DrawerElement extends Element, TitleElement extends Element>({

    active,
    onDismiss,
    dismissBackdropActive,
    dismissEscapeActive,
    dismissLostFocusActive,
    onElementChange,
    onMount,
    onUnmount,
    focusOpener,
    focusPopup,
    getDocument,
    imperativeHandle,
    onActiveElementChange,
    onLastActiveElementChange,
    onWindowFocusedChange,
    parentDepth,
    render,
    trapActive,
    ariaLabel,
}: DrawerProps<FocusContainerElement, SourceElement, DrawerElement, TitleElement>, ref: Ref<any>) {
    const defaultParentDepth = useContext(ParentDepthContext);
    let myDepth = (parentDepth ?? defaultParentDepth) + 1;

    const info = useDrawer<FocusContainerElement, SourceElement, DrawerElement, TitleElement>({
        dismissParameters: {
            onDismiss,
        },
        backdropDismissParameters: { dismissBackdropActive: dismissBackdropActive || false },
        lostFocusDismissParameters: { dismissLostFocusActive: dismissLostFocusActive || false },
        modalParameters: { active },
        refElementParameters: { onElementChange, onMount, onUnmount },
        escapeDismissParameters: {
            parentDepth: parentDepth ?? defaultParentDepth,
            dismissEscapeActive: dismissEscapeActive || false
        },
        activeElementParameters: {
            getDocument: useDefault("getDocument", getDocument),
            onActiveElementChange,
            onLastActiveElementChange,
            onWindowFocusedChange
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
