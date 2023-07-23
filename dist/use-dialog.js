import { findFirstFocusable, monitorCallCount, useMergedProps, useModal, useStableCallback } from "preact-prop-helpers";
import { Prefices } from "./props.js";
import { useLabelSynthetic } from "./use-label.js";
/**
 * Implements a [Dialog](https://www.w3.org/WAI/ARIA/apg/patterns/dialog/) pattern.
 *
 * @compositeParams
 */
export function useDialog({ dismissParameters, escapeDismissParameters, focusTrapParameters, labelParameters }) {
    monitorCallCount(useDialog);
    const { propsFocusContainer, propsStablePopup, propsStableSource, refElementPopupReturn, refElementSourceReturn } = useModal({
        dismissParameters: { closeOnLostFocus: false, ...dismissParameters },
        escapeDismissParameters,
        focusTrapParameters: { trapActive: true, onlyMoveFocus: false, ...focusTrapParameters }
    });
    const { propsInput, propsLabel } = useLabelSynthetic({
        labelParameters: {
            ...labelParameters, onLabelClick: useStableCallback(() => {
                const e = refElementPopupReturn.getElement();
                focusTrapParameters.focusPopup(e, () => findFirstFocusable(e));
            })
        },
        randomIdInputParameters: { prefix: Prefices.dialog },
        randomIdLabelParameters: { prefix: Prefices.dialogTitle }
    });
    return {
        propsFocusContainer,
        propsDialog: useMergedProps(propsStablePopup, propsInput),
        propsSource: { ...propsStableSource },
        propsTitle: propsLabel,
        refElementPopupReturn,
        refElementSourceReturn
    };
}
//# sourceMappingURL=use-dialog.js.map