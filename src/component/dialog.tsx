import { memo } from "preact-prop-helpers";
import { useContext, useImperativeHandle } from "preact/hooks";
import { Get10 } from "../props.js";
import { UseDialogParameters, UseDialogReturnType, useDialog } from "../use-dialog.js";
import { GenericComponentProps, ParentDepthContext, useDefault } from "./util.js";

export type DialogProps<FocusContainerElement extends Element, SourceElement extends Element, DialogElement extends Element, TitleElement extends Element> = GenericComponentProps<
    UseDialogReturnType<FocusContainerElement, SourceElement, DialogElement, TitleElement>,
    Get10<UseDialogParameters<DialogElement, TitleElement>, "dismissParameters", "escapeDismissParameters", "labelParameters", "focusTrapParameters", "activeElementParameters", "backdropDismissParameters", "escapeDismissParameters", "dismissParameters", "modalParameters", "refElementParameters">,
    "ariaLabel" | "onDismiss" | "active" | "focusPopup"
>;

export const Dialog = memo(function Dialog<FocusContainerElement extends Element, SourceElement extends Element, DialogElement extends Element, TitleElement extends Element>({
    active,
    onDismiss,
    dismissBackdropActive,
    dismissEscapeActive,
    focusOpener,
    getDocument,
    imperativeHandle,
    parentDepth,
    onActiveElementChange,
    onLastActiveElementChange,
    onWindowFocusedChange,
    focusPopup,
    ariaLabel,
    onElementChange,
    onMount,
    onUnmount,
    render
}: DialogProps<FocusContainerElement, SourceElement, DialogElement, TitleElement>) {
    const defaultParentDepth = useContext(ParentDepthContext);
    let myDepth = (parentDepth ?? defaultParentDepth) + 1;

    const info = useDialog<FocusContainerElement, SourceElement, DialogElement, TitleElement>({
        dismissParameters: {
            onDismiss,
        },
        backdropDismissParameters: { dismissBackdropActive: dismissBackdropActive || false },
        //lostFocusDismissParameters: { dismissLostFocusActive: dismissLostFocusActive || false },
        modalParameters: { active },
        refElementParameters: { onElementChange, onMount, onUnmount },
        escapeDismissParameters: {
            dismissEscapeActive: dismissEscapeActive || false,
            parentDepth: parentDepth ?? defaultParentDepth
        },
        activeElementParameters: {
            getDocument: useDefault("getDocument", getDocument),
            onActiveElementChange,
            onLastActiveElementChange,
            onWindowFocusedChange
        },
        focusTrapParameters: {
            focusOpener: useDefault("focusOpener", focusOpener),
            focusPopup
        },
        labelParameters: { ariaLabel }
    });

    useImperativeHandle(imperativeHandle!, () => info);

    return (
        <ParentDepthContext.Provider value={myDepth}>
            {render(info)}
        </ParentDepthContext.Provider>
    );

});
