
import { h } from "preact"
import { useLayoutEffect, useState } from "preact/hooks";
import { useMergedProps } from "preact-prop-helpers/use-merged-props";
import { useRandomId } from "preact-prop-helpers/use-random-id";
import { useRefElement } from "preact-prop-helpers/use-ref-element";
import { useFocusTrap } from "preact-prop-helpers/use-focus-trap";

export function useAriaDialog<DialogElement extends HTMLElement>({ open, onClose }: { open: boolean, onClose: (reason: "escape") => void }) {


    const [dialogDescribedByBody, setDialogDescribedByBody] = useState(false);

    const { id: dialogId, useRandomIdProps: useDialogIdProps, useReferencedIdProps: useDialogReferencingIdProps } = useRandomId({ prefix: "aria-dialog-" });
    const { id: bodyId, useRandomIdProps: useBodyIdProps, useReferencedIdProps: useBodyReferencingIdProps } = useRandomId({ prefix: "aria-dialog-body-" });
    const { id: titleId, useRandomIdProps: useTitleIdProps, useReferencedIdProps: useTitleReferencingIdProps } = useRandomId({ prefix: "aria-dialog-title-" });

    const onKeyDown: h.JSX.EventHandler<h.JSX.TargetedKeyboardEvent<Element>> = (e) => {
        if (e.key === "Escape") {
            onClose("escape");
        }
    }


    const useDialogBackdrop = function <BackdropElement extends HTMLElement>() {

        const onClick: h.JSX.EventHandler<h.JSX.TargetedEvent<BackdropElement>> = e => onClose("escape");
        function useDialogBackdropProps<P extends h.JSX.HTMLAttributes<BackdropElement>>(props: P) {
            return useMergedProps<BackdropElement>()({ onClick, onKeyDown }, props);
        }

        return { useDialogBackdropProps }
    }

    const useDialogProps = function <P extends h.JSX.HTMLAttributes<DialogElement>>({ "aria-modal": ariaModal, role, ...p0 }: P) {
        const { useFocusTrapProps } = useFocusTrap<DialogElement>({ trapActive: open });
        const p1 = useTitleReferencingIdProps("aria-labelledby")(p0);
        const p2 = useDialogIdProps(p1);
        const pFinal = useBodyReferencingIdProps("aria-describedby")(p2);
        return useFocusTrapProps(useMergedProps<DialogElement>()({ role: "dialog", "aria-modal": "true" }, dialogDescribedByBody ? pFinal : p2));
    }

    function useDialogTitle<TitleElement extends Element>() {

        const useDialogTitleProps = function <P extends h.JSX.HTMLAttributes<TitleElement>>(props: P) {
            return useTitleIdProps(props);
        }

        return { useDialogTitleProps };
    }

    function useDialogBody<BodyElement extends Element>({ descriptive }: { descriptive: boolean }) {
        setDialogDescribedByBody(descriptive);

        const useDialogBodyProps = function <P extends h.JSX.HTMLAttributes<BodyElement>>(props: P) {
            return useBodyIdProps(props);
        }

        return { useDialogBodyProps };
    }



    return {
        useDialogProps,
        useDialogTitle,
        useDialogBody,
        useDialogBackdrop
    }
}
