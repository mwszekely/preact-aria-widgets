import { Ref, VNode } from "preact";
import { createPortal } from "preact/compat";
import { useContext, useImperativeHandle, useRef } from "preact/hooks";
import { Get4 } from "../props.js";
import { UseDialogParameters, UseDialogReturnType, useDialog } from "../use-dialog.js";
import { ParentDepthContext, PartialExcept, memoForwardRef, useDefault } from "./util.js";

type Get<T, K extends keyof T> = T[K];

interface DialogPropsBase<FocusContainerElement extends Element, SourceElement extends Element, DialogElement extends Element, TitleElement extends Element> extends
    Get4<UseDialogParameters<DialogElement, TitleElement>, "dismissParameters","escapeDismissParameters","labelParameters","focusTrapParameters"> {
    ref?: Ref<UseDialogReturnType<FocusContainerElement, SourceElement, DialogElement, TitleElement>>;
}

export interface DialogProps<FocusContainerElement extends Element, SourceElement extends Element, DialogElement extends Element, TitleElement extends Element> extends PartialExcept<DialogPropsBase<FocusContainerElement, SourceElement, DialogElement, TitleElement>, "ariaLabel" | "onClose" | "open" | "focusPopup"> {

    render(dialogInfo: UseDialogReturnType<FocusContainerElement, SourceElement, DialogElement, TitleElement>): VNode<any>;
}

export function defaultRenderPortal({ portalId, children }: { portalId: string, children: VNode }): VNode {
    const portalRef = useRef<HTMLElement>(null!);
    portalRef.current ??= document.getElementById(portalId)!;
    if (portalRef.current)
        return createPortal(children, portalRef.current);
    else
        return children;
}

export const Dialog = memoForwardRef(function Dialog<FocusContainerElement extends Element, SourceElement extends Element, DialogElement extends Element, TitleElement extends Element>({
    onClose,
    open,
    closeOnBackdrop,
    closeOnEscape,
    focusOpener,
    getWindow,
    parentDepth,
    focusPopup,
    ariaLabel,
    render
}: DialogProps<FocusContainerElement, SourceElement, DialogElement, TitleElement>, ref?: Ref<any>) {
    const defaultParentDepth = useContext(ParentDepthContext);
    let myDepth = (parentDepth ?? defaultParentDepth) + 1;

    const info = useDialog<FocusContainerElement, SourceElement, DialogElement, TitleElement>({
        dismissParameters: {
            closeOnBackdrop: closeOnBackdrop ?? true,
            closeOnEscape: closeOnEscape ?? true,
            onClose,
            open
        },
        escapeDismissParameters: {
            getWindow: useDefault("getWindow", getWindow),
            parentDepth: parentDepth ?? defaultParentDepth
        },
        focusTrapParameters: {
            focusOpener: useDefault("focusOpener", focusOpener),
            focusPopup
        },
        labelParameters: { ariaLabel }
    });

    useImperativeHandle(ref!, () => info);

    return (
        <ParentDepthContext.Provider value={myDepth}>
            {render(info)}
        </ParentDepthContext.Provider>
    );

});
