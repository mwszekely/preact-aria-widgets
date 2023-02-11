
import { h } from "preact";
import { findFirstFocusable, useMergedProps, useModal, UseModalParameters, UseModalReturnType, useStableCallback } from "preact-prop-helpers";
import { OmitStrong, Prefices } from "./props";
import { useLabelSynthetic, UseLabelSyntheticParameters } from "./use-label";

export interface UseDialogParameters<_DialogElement extends Element, _TitleElement extends Element> extends OmitStrong<UseModalParameters<"escape" | "backdrop">, "focusTrapParameters" | "dismissParameters"> {
    focusTrapParameters: OmitStrong<UseModalParameters<"escape" | "backdrop">["focusTrapParameters"], "trapActive" | "onlyMoveFocus">;
    dismissParameters: OmitStrong<UseModalParameters<"escape" | "backdrop">["dismissParameters"], "closeOnLostFocus">;
    labelParameters: OmitStrong<UseLabelSyntheticParameters["labelParameters"], "onLabelClick">;
}

export interface UseDialogReturnType<FocusContainerElement extends Element, SourceElement extends Element, PopupElement extends Element, TitleElement extends Element> extends OmitStrong<UseModalReturnType<FocusContainerElement, SourceElement, PopupElement>, "propsPopup"> {
    propsDialog: h.JSX.HTMLAttributes<PopupElement>;
    propsTitle: h.JSX.HTMLAttributes<TitleElement>;
}

export function useDialog<FocusContainerElement extends Element, SourceElement extends Element, DialogElement extends Element, TitleElement extends Element>({ dismissParameters, escapeDismissParameters, focusTrapParameters, labelParameters }: UseDialogParameters<DialogElement, TitleElement>): UseDialogReturnType<FocusContainerElement, SourceElement, DialogElement, TitleElement> {
    const {
        focusTrapReturn,
        propsFocusContainer,
        propsPopup,
        propsSource,
        refElementPopupReturn,
        refElementSourceReturn
    } = useModal<"escape" | "backdrop", FocusContainerElement, SourceElement, DialogElement>({
        dismissParameters: { closeOnLostFocus: false, ...dismissParameters },
        escapeDismissParameters,
        focusTrapParameters: { trapActive: true, onlyMoveFocus: false, ...focusTrapParameters }
    });

    const {
        propsInput,
        propsLabel
    } = useLabelSynthetic<DialogElement, TitleElement>({
        labelParameters: {
            ...labelParameters, onLabelClick: useStableCallback(() => {
                const e = refElementPopupReturn.getElement();
                focusTrapParameters.focusPopup(e, () => (findFirstFocusable(e!) as HTMLElement | null));

            })
        },
        randomIdInputParameters: { prefix: Prefices.dialog },
        randomIdLabelParameters: { prefix: Prefices.dialogTitle }
    });

    return {
        focusTrapReturn,
        propsFocusContainer,
        propsDialog: useMergedProps<DialogElement>(propsPopup, propsInput),
        propsSource,
        propsTitle: propsLabel,
        refElementPopupReturn,
        refElementSourceReturn
    }
}
