import { assertEmptyObject, findFirstFocusable, useMergedProps, useModal, useStableCallback } from "preact-prop-helpers";
import { monitored, Prefices } from "./props.js";
import { useLabelSynthetic } from "./use-label.js";
/**
 * Implements a drawer, which is a specific kind of [Dialog](https://www.w3.org/WAI/ARIA/apg/patterns/dialog/).
 *
 * @compositeParams
 */
export const useDrawer = monitored(function useDrawer({ dismissParameters, escapeDismissParameters, focusTrapParameters, activeElementParameters, labelParameters, backdropDismissParameters, lostFocusDismissParameters, modalParameters, refElementParameters, ...void1 }) {
    const { propsFocusContainer, propsStablePopup, propsStableSource, refElementPopupReturn, refElementSourceReturn, ...void2 } = useModal({
        dismissParameters: { dismissActive: true, ...dismissParameters },
        escapeDismissParameters: { onDismissEscape: null, ...escapeDismissParameters },
        backdropDismissParameters: { onDismissBackdrop: null, ...backdropDismissParameters },
        lostFocusDismissParameters: { onDismissLostFocus: null, ...lostFocusDismissParameters },
        activeElementParameters,
        modalParameters,
        refElementParameters,
        focusTrapParameters: { onlyMoveFocus: false, ...focusTrapParameters }
    });
    const { propsInput, propsLabel, pressReturn, randomIdInputReturn, randomIdLabelReturn, ...void3 } = useLabelSynthetic({
        labelParameters: {
            ...labelParameters, onLabelClick: useStableCallback(() => {
                const e = refElementPopupReturn.getElement();
                focusTrapParameters.focusPopup(e, () => findFirstFocusable(e));
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
        propsDrawer: useMergedProps(propsStablePopup, propsInput),
        propsTitle: propsLabel,
        propsSource: { ...propsStableSource },
        refElementPopupReturn,
        refElementSourceReturn
    };
});
//# sourceMappingURL=use-drawer.js.map