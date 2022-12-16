import { Ref, VNode } from "preact";
import { createPortal } from "preact/compat";
import { useContext, useImperativeHandle, useRef } from "preact/hooks";
import { useDialog, UseDialogParameters, UseDialogReturnType } from "../use-dialog";
import { memoForwardRef, ParentDepthContext, PartialExcept, useDefault } from "./util";

type Get<T, K extends keyof T> = T[K];

interface DialogPropsBase<FocusContainerElement extends Element, SourceElement extends Element, DialogElement extends Element, TitleElement extends Element> extends
    Get<UseDialogParameters<DialogElement, TitleElement>, "dismissParameters">,
    Get<UseDialogParameters<DialogElement, TitleElement>, "escapeDismissParameters">,
    Get<UseDialogParameters<DialogElement, TitleElement>, "labelParameters">,
    Get<UseDialogParameters<DialogElement, TitleElement>, "focusTrapParameters"> {
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
/*
export function defaultRenderModal<FocusContainerElement extends HTMLElement, DialogElement extends HTMLElement, TitleElement extends HTMLElement, BodyElement extends HTMLElement, BackdropElement extends HTMLElement, InfoType>({ portalId, tagFocusContainer, tagBackdrop, tagBody, tagDialog, tagTitle, makePropsFocusContainer, makePropsBackdrop, makePropsBody, makePropsDialog, makePropsTitle }: { portalId: string, tagFocusContainer: ElementToTag<FocusContainerElement>, tagDialog: ElementToTag<DialogElement>; tagTitle: ElementToTag<TitleElement>; tagBody: ElementToTag<BodyElement>; tagBackdrop: ElementToTag<BackdropElement>, makePropsFocusContainer: (info: InfoType) => h.JSX.HTMLAttributes<FocusContainerElement>, makePropsDialog: (info: InfoType) => h.JSX.HTMLAttributes<DialogElement>, makePropsBody: (info: InfoType) => h.JSX.HTMLAttributes<BodyElement>, makePropsTitle: (info: InfoType) => h.JSX.HTMLAttributes<TitleElement>, makePropsBackdrop: (info: InfoType) => h.JSX.HTMLAttributes<BackdropElement> }) {
    return function (dialogInfo: InfoType): VNode<any> {

        const { children: titleChildren, ...titleProps } = (makePropsTitle(dialogInfo));
        const { children: bodyChildren, ...bodyProps } = (makePropsBody(dialogInfo));
        const { children: dialogChildren, ...dialogProps } = (makePropsDialog(dialogInfo));
        const { children: backdropChildren, ...backdropProps } = (makePropsBackdrop(dialogInfo));
        const { children: focusContainerChildren, ...focusContainerProps } = (makePropsFocusContainer(dialogInfo));

        const title = createElement(tagTitle as never, titleProps, titleChildren);
        const body = createElement(tagBody as never, bodyProps, bodyChildren);
        const dialog = createElement(tagDialog as never, dialogProps, dialogChildren, title, body);

        const backdrop = createElement(tagBackdrop as never, backdropProps, backdropChildren);
        const focusContainer = createElement(tagFocusContainer as never, focusContainerProps, <div>{focusContainerChildren}{dialog}{backdrop}</div>);

        return defaultRenderPortal({
            portalId,
            children: focusContainer
        });
    }
}*/


/*
export function defaultRenderDialog<FocusContainerElement extends HTMLElement, DialogElement extends HTMLElement, TitleElement extends HTMLElement, BodyElement extends HTMLElement, BackdropElement extends HTMLElement>({ portalId, tagFocusContainer, tagBackdrop, tagBody, tagDialog, tagTitle, makePropsFocusContainer, makePropsBackdrop, makePropsBody, makePropsDialog, makePropsTitle }: { portalId: string, tagFocusContainer: ElementToTag<FocusContainerElement>, tagDialog: ElementToTag<DialogElement>; tagTitle: ElementToTag<TitleElement>; tagBody: ElementToTag<BodyElement>; tagBackdrop: ElementToTag<BackdropElement>, makePropsFocusContainer: (info: UseDialogReturnType<FocusContainerElement, DialogElement>) => h.JSX.HTMLAttributes<FocusContainerElement>, makePropsDialog: (info: UseDialogReturnType<FocusContainerElement, DialogElement>) => h.JSX.HTMLAttributes<DialogElement>, makePropsBody: (info: UseDialogReturnType<FocusContainerElement, DialogElement>) => h.JSX.HTMLAttributes<BodyElement>, makePropsTitle: (info: UseDialogReturnType<FocusContainerElement, DialogElement>) => h.JSX.HTMLAttributes<TitleElement>, makePropsBackdrop: (info: UseDialogReturnType<FocusContainerElement, DialogElement>) => h.JSX.HTMLAttributes<BackdropElement> }) {
    return defaultRenderModal<FocusContainerElement, DialogElement, TitleElement, BodyElement, BackdropElement, UseDialogReturnType<FocusContainerElement, DialogElement>>({ portalId, tagFocusContainer, tagBackdrop, tagBody, tagDialog, tagTitle, makePropsFocusContainer, makePropsBackdrop, makePropsBody, makePropsDialog, makePropsTitle });
}*/

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
/*
export function DialogDemo() {
    const [open, setOpen] = useState(false);

    return (
        <Dialog<HTMLDivElement, HTMLButtonElement, HTMLDivElement, HTMLDivElement>
            open={open}
            onClose={() => setOpen(false)}
            closeOnBackdrop={true}
            closeOnEscape={true}
            focusOpener={e => e.focus()}
            parentDepth={0}
            focusPopup={(e, f) => { f()?.focus() }}
            ariaLabel={null}
            render={info => {
                return (
                    <>
                        <button {...info.propsSource}>Open dialog</button>
                        {defaultRenderPortal({
                            portalId: "portal",
                            children: <div {...info.propsFocusContainer}>
                                <div {...info.propsDialog}>
                                    <div {...info.propsTitle}>Dialog title</div>
                                    <div>Dialog body</div>
                                    <button onClick={() => setOpen(false)}>Close dialog</button>
                                </div>
                            </div>
                        })}
                    </>
                )
            }}
        />
    )
}
*/
