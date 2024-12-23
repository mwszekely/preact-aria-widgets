import { assertEmptyObject, findFirstFocusable, useMergedProps, useModal, useStableCallback } from "preact-prop-helpers";
import { Prefices, useMonitoring } from "./props.js";
import { useLabelSynthetic } from "./use-label.js";
/**
 * Implements a [Dialog](https://www.w3.org/WAI/ARIA/apg/patterns/dialog/) pattern.
 *
 * @compositeParams
 */
export function useDialog({ dismissParameters, escapeDismissParameters, focusTrapParameters, activeElementParameters, backdropDismissParameters, modalParameters, refElementParameters, labelParameters, ...void1 }) {
    return useMonitoring(function useDialog() {
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
}
//# sourceMappingURL=use-dialog.js.map