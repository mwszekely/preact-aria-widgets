import { JSX, assertEmptyObject, memo, useContext } from "preact-prop-helpers/preact";
import { Get11 } from "../props.js";
import { UseDrawerParameters, UseDrawerReturnType, useDrawer } from "../use-drawer.js";
import { GenericComponentProps, ParentDepthContext, useComponent, useDefault } from "./util.js";

export type DrawerProps<FocusContainerElement extends keyof JSX.IntrinsicElements, SourceElement extends keyof JSX.IntrinsicElements, DrawerElement extends keyof JSX.IntrinsicElements, TitleElement extends keyof JSX.IntrinsicElements> = GenericComponentProps<
    UseDrawerReturnType<FocusContainerElement, SourceElement, DrawerElement, TitleElement>,
    Get11<UseDrawerParameters<DrawerElement, TitleElement>, "dismissParameters", "escapeDismissParameters", "labelParameters", "focusTrapParameters", "activeElementParameters", "dismissParameters", "backdropDismissParameters", "escapeDismissParameters", "lostFocusDismissParameters", "modalParameters", "refElementParameters">,
    "ariaLabel" | "onDismiss" | "active" | "focusPopup"
>;

export const Drawer = /* @__PURE__ */ memo((function Drawer<FocusContainerElement extends keyof JSX.IntrinsicElements, SourceElement extends keyof JSX.IntrinsicElements, DrawerElement extends keyof JSX.IntrinsicElements, TitleElement extends keyof JSX.IntrinsicElements>({

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
    ...void1
}: DrawerProps<FocusContainerElement, SourceElement, DrawerElement, TitleElement>) {
    const defaultParentDepth = useContext(ParentDepthContext);
    let myDepth = (parentDepth ?? defaultParentDepth) + 1;

    assertEmptyObject(void1);

    return (
        <ParentDepthContext.Provider value={myDepth}>
            {useComponent(
                imperativeHandle,
                render,
                null,
                useDrawer<FocusContainerElement, SourceElement, DrawerElement, TitleElement>({
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
                })
            )}
        </ParentDepthContext.Provider>
    )

}));
