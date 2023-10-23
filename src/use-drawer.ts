import {
    assertEmptyObject,
    ElementProps,
    findFirstFocusable,
    TargetedOmit,
    useMergedProps,
    useModal,
    UseModalParameters,
    UseModalReturnType,
    useStableCallback
} from "preact-prop-helpers";
import { monitored, OmitStrong, Prefices } from "./props.js";
import { useLabelSynthetic, UseLabelSyntheticParameters } from "./use-label.js";

export interface UseDrawerParameters<_DialogElement extends Element, _TitleElement extends Element> extends
    OmitStrong<UseModalParameters<"escape" | "backdrop" | "lost-focus">, "focusTrapParameters" | "backdropDismissParameters" | "dismissParameters" | "escapeDismissParameters" | "lostFocusDismissParameters">,
    TargetedOmit<UseLabelSyntheticParameters, "labelParameters", "onLabelClick">,
    TargetedOmit<UseModalParameters<"escape" | "backdrop" | "lost-focus">, "focusTrapParameters", "onlyMoveFocus">,
    TargetedOmit<UseModalParameters<"escape" | "backdrop" | "lost-focus">, "dismissParameters", "dismissActive">,
    TargetedOmit<UseModalParameters<"escape" | "backdrop" | "lost-focus">, "backdropDismissParameters", "onDismissBackdrop">,
    TargetedOmit<UseModalParameters<"escape" | "backdrop" | "lost-focus">, "escapeDismissParameters", "onDismissEscape">,
    TargetedOmit<UseModalParameters<"escape" | "backdrop" | "lost-focus">, "lostFocusDismissParameters", "onDismissLostFocus"> {
}

export interface UseDrawerReturnType<FocusContainerElement extends Element, SourceElement extends Element, DrawerElement extends Element, TitleElement extends Element> extends OmitStrong<UseModalReturnType<FocusContainerElement, SourceElement, DrawerElement>, "propsStableSource" | "propsStablePopup"> {
    propsDrawer: ElementProps<DrawerElement>;
    propsSource: ElementProps<SourceElement>;
    propsTitle: ElementProps<TitleElement>;
}

/**
 * Implements a drawer, which is a specific kind of [Dialog](https://www.w3.org/WAI/ARIA/apg/patterns/dialog/).
 * 
 * @compositeParams
 */
export const useDrawer = monitored(function useDrawer<FocusContainerElement extends Element, SourceElement extends Element, PopupElement extends Element, TitleElement extends Element>({
    dismissParameters,
    escapeDismissParameters,
    focusTrapParameters,
    activeElementParameters,
    labelParameters,
    backdropDismissParameters,
    lostFocusDismissParameters,
    modalParameters,
    refElementParameters,
    ...void1
}: UseDrawerParameters<PopupElement, TitleElement>): UseDrawerReturnType<FocusContainerElement, SourceElement, PopupElement, TitleElement> {

    const {
        propsFocusContainer,
        propsStablePopup,
        propsStableSource,
        refElementPopupReturn,
        refElementSourceReturn,
        ...void2
    } = useModal<"escape" | "backdrop" | "lost-focus", FocusContainerElement, SourceElement, PopupElement>({
        dismissParameters: { dismissActive: true, ...dismissParameters },
        escapeDismissParameters: { onDismissEscape: null, ...escapeDismissParameters },
        backdropDismissParameters: { onDismissBackdrop: null, ...backdropDismissParameters },
        lostFocusDismissParameters: { onDismissLostFocus: null, ...lostFocusDismissParameters },
        activeElementParameters,
        modalParameters,
        refElementParameters,
        focusTrapParameters: { onlyMoveFocus: false, ...focusTrapParameters }
    });

    const {
        propsInput,
        propsLabel,
        pressReturn: _pressReturn,
        randomIdInputReturn: _randomIdInputReturn,
        randomIdLabelReturn: _randomIdLabelReturn,
        ...void3
    } = useLabelSynthetic<PopupElement, TitleElement>({
        labelParameters: {
            ...labelParameters, onLabelClick: useStableCallback(() => {
                const e = refElementPopupReturn.getElement();
                focusTrapParameters.focusPopup(e, () => (findFirstFocusable(e!) as HTMLElement | null));

            })
        },
        randomIdInputParameters: { prefix: Prefices.drawer },
        randomIdLabelParameters: { prefix: Prefices.drawerTitle }
    });

    assertEmptyObject(void1);
    assertEmptyObject(void2);
    assertEmptyObject(void3);

    return {
        propsFocusContainer,
        propsDrawer: useMergedProps<PopupElement>(propsStablePopup, propsInput),
        propsTitle: propsLabel,
        propsSource: { ...propsStableSource },
        refElementPopupReturn,
        refElementSourceReturn,
    }
})


