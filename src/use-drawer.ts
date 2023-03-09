import { h } from "preact";
import { findFirstFocusable, useMergedProps, useModal, UseModalParameters, UseModalReturnType, useStableCallback } from "preact-prop-helpers";
import { OmitStrong, Prefices } from "./props.js";
import { useLabelSynthetic, UseLabelSyntheticParameters } from "./use-label.js";

export interface UseDrawerParameters<_DialogElement extends Element, _TitleElement extends Element> extends OmitStrong<UseModalParameters<"escape" | "backdrop" | "lost-focus">, "focusTrapParameters"> {
    labelParameters: OmitStrong<UseLabelSyntheticParameters["labelParameters"], "onLabelClick">;
    focusTrapParameters: OmitStrong<UseModalParameters<"escape" | "backdrop" | "lost-focus">["focusTrapParameters"], "onlyMoveFocus">
}

export interface UseDrawerReturnType<FocusContainerElement extends Element, SourceElement extends Element, DrawerElement extends Element, TitleElement extends Element> extends OmitStrong<UseModalReturnType<FocusContainerElement, SourceElement, DrawerElement>, "propsStableSource" | "propsStablePopup"> {
    propsDrawer: h.JSX.HTMLAttributes<DrawerElement>;
    propsSource: h.JSX.HTMLAttributes<SourceElement>;
    propsTitle: h.JSX.HTMLAttributes<TitleElement>;
}

export function useDrawer<FocusContainerElement extends Element, SourceElement extends Element, PopupElement extends Element, TitleElement extends Element>({ dismissParameters, escapeDismissParameters, focusTrapParameters, labelParameters }: UseDrawerParameters<PopupElement, TitleElement>): UseDrawerReturnType<FocusContainerElement, SourceElement, PopupElement, TitleElement> {
    const {
        focusTrapReturn,
        propsFocusContainer,
        propsStablePopup,
        propsStableSource,
        refElementPopupReturn,
        refElementSourceReturn
    } = useModal<"escape" | "backdrop" | "lost-focus", FocusContainerElement, SourceElement, PopupElement>({
        dismissParameters,
        escapeDismissParameters,
        focusTrapParameters: { onlyMoveFocus: false, ...focusTrapParameters }
    });

    const {
        propsInput,
        propsLabel,
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

    return {
        focusTrapReturn,
        propsFocusContainer,
        propsDrawer: useMergedProps<PopupElement>(propsStablePopup, propsInput),
        propsTitle: propsLabel,
        propsSource: { ...propsStableSource },
        refElementPopupReturn,
        refElementSourceReturn
    }
}


