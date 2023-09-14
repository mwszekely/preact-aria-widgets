
import { assertEmptyObject, ElementProps, findFirstFocusable, monitored, TargetedOmit, useMergedProps, useModal, UseModalParameters, UseModalReturnType, useStableCallback } from "preact-prop-helpers";
import { OmitStrong, Prefices } from "./props.js";
import { useLabelSynthetic, UseLabelSyntheticParameters } from "./use-label.js";

export interface UseDialogParameters<_DialogElement extends Element, _TitleElement extends Element> extends
    OmitStrong<UseModalParameters<"escape" | "backdrop">, "focusTrapParameters" | "dismissParameters" | "backdropDismissParameters" | "escapeDismissParameters" | "lostFocusDismissParameters">,
    TargetedOmit<UseModalParameters<"escape" | "backdrop">, "focusTrapParameters", "trapActive" | "onlyMoveFocus">,
    TargetedOmit<UseModalParameters<"escape" | "backdrop">, "dismissParameters", "dismissActive">,
    TargetedOmit<UseModalParameters<"escape" | "backdrop">, "backdropDismissParameters", "onDismissBackdrop">,
    TargetedOmit<UseModalParameters<"escape" | "backdrop">, "escapeDismissParameters", "onDismissEscape">,
    //TargetedOmit<UseModalParameters<"escape" | "backdrop">, "lostFocusDismissParameters", "onDismissLostFocus">,
    TargetedOmit<UseLabelSyntheticParameters, "labelParameters", "onLabelClick"> {
}

export interface UseDialogReturnType<FocusContainerElement extends Element, SourceElement extends Element, PopupElement extends Element, TitleElement extends Element> extends OmitStrong<UseModalReturnType<FocusContainerElement, SourceElement, PopupElement>, "propsStableSource" | "propsStablePopup"> {
    propsDialog: ElementProps<PopupElement>;
    propsSource: ElementProps<SourceElement>;
    propsTitle: ElementProps<TitleElement>;
}

/**
 * Implements a [Dialog](https://www.w3.org/WAI/ARIA/apg/patterns/dialog/) pattern.
 * 
 * @compositeParams
 */
export const useDialog = monitored(function useDialog<FocusContainerElement extends Element, SourceElement extends Element, DialogElement extends Element, TitleElement extends Element>({
    dismissParameters,
    escapeDismissParameters,
    focusTrapParameters,
    activeElementParameters,
    backdropDismissParameters,
    modalParameters,
    refElementParameters,
    labelParameters,
    ...void1
}: UseDialogParameters<DialogElement, TitleElement>): UseDialogReturnType<FocusContainerElement, SourceElement, DialogElement, TitleElement> {

    const {
        propsFocusContainer,
        propsStablePopup,
        propsStableSource,
        refElementPopupReturn,
        refElementSourceReturn,
        ...void2
    } = useModal<"escape" | "backdrop", FocusContainerElement, SourceElement, DialogElement>({
        dismissParameters: { dismissActive: true, ...dismissParameters },
        backdropDismissParameters: { onDismissBackdrop: null, ...backdropDismissParameters },
        lostFocusDismissParameters: { onDismissLostFocus: null, dismissLostFocusActive: false },
        escapeDismissParameters: { onDismissEscape: null, ...escapeDismissParameters },
        modalParameters,
        refElementParameters,
        activeElementParameters,
        focusTrapParameters: { trapActive: true, onlyMoveFocus: false, ...focusTrapParameters }
    });

    const {
        propsInput,
        propsLabel,
        pressReturn,
        randomIdInputReturn,
        randomIdLabelReturn,
        ...void3
    } = useLabelSynthetic<DialogElement, TitleElement>({
        labelParameters: {
            ...labelParameters,
            onLabelClick: useStableCallback(() => {
                const e = refElementPopupReturn.getElement();
                focusTrapParameters.focusPopup(e, () => (findFirstFocusable(e!) as HTMLElement | null));
            })
        },
        randomIdInputParameters: { prefix: Prefices.dialog },
        randomIdLabelParameters: { prefix: Prefices.dialogTitle }
    });

    assertEmptyObject(void1);
    assertEmptyObject(void2);
    assertEmptyObject(void3);

    return {
        propsFocusContainer,
        propsDialog: useMergedProps<DialogElement>(propsStablePopup, propsInput),
        propsSource: { ...propsStableSource },
        propsTitle: propsLabel,
        refElementPopupReturn,
        refElementSourceReturn
    }
})
