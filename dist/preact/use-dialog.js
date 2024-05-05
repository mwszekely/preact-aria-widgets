import { assertEmptyObject, findFirstFocusable, useMergedProps, useModal, useStableCallback } from "preact-prop-helpers/preact";
import { monitored, Prefices } from "./props.js";
import { useLabelSynthetic } from "./use-label.js";
/**
 * Implements a [Dialog](https://www.w3.org/WAI/ARIA/apg/patterns/dialog/) pattern.
 *
 * @compositeParams
 */
export const useDialog = monitored(function useDialog({ dismissParameters, escapeDismissParameters, focusTrapParameters, activeElementParameters, backdropDismissParameters, modalParameters, refElementParameters, labelParameters, ...void1 }) {
    const { propsFocusContainer, propsStablePopup, propsStableSource, refElementPopupReturn, refElementSourceReturn, ...void2 } = useModal({
        dismissParameters: { dismissActive: true, ...dismissParameters },
        backdropDismissParameters: { onDismissBackdrop: null, ...backdropDismissParameters },
        lostFocusDismissParameters: { onDismissLostFocus: null, dismissLostFocusActive: false },
        escapeDismissParameters: { onDismissEscape: null, ...escapeDismissParameters },
        modalParameters,
        refElementParameters,
        activeElementParameters,
        focusTrapParameters: { trapActive: true, onlyMoveFocus: false, ...focusTrapParameters }
    });
    const { propsInput, propsLabel, pressReturn, randomIdInputReturn: _randomIdInputReturn, randomIdLabelReturn: _randomIdLabelReturn, ...void3 } = useLabelSynthetic({
        labelParameters: {
            ...labelParameters,
            onLabelClick: useStableCallback(() => {
                const e = refElementPopupReturn.getElement();
                focusTrapParameters.focusPopup(e, () => findFirstFocusable(e));
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
        propsDialog: useMergedProps(propsStablePopup, propsInput),
        propsSource: { ...propsStableSource },
        propsTitle: propsLabel,
        pressReturn,
        refElementPopupReturn,
        refElementSourceReturn
    };
});
//# sourceMappingURL=use-dialog.js.map