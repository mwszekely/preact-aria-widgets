import { findFirstFocusable, monitorCallCount, useMergedProps, useModal, useStableCallback } from "preact-prop-helpers";
import { Prefices } from "./props.js";
import { useLabelSynthetic } from "./use-label.js";
/**
 * Implements a drawer, which is a specific kind of [Dialog](https://www.w3.org/WAI/ARIA/apg/patterns/dialog/).
 *
 * @compositeParams
 */
export function useDrawer({ dismissParameters, escapeDismissParameters, focusTrapParameters, labelParameters }) {
    monitorCallCount(useDrawer);
    const { propsFocusContainer, propsStablePopup, propsStableSource, refElementPopupReturn, refElementSourceReturn } = useModal({
        dismissParameters,
        escapeDismissParameters,
        focusTrapParameters: { onlyMoveFocus: false, ...focusTrapParameters }
    });
    const { propsInput, propsLabel, } = useLabelSynthetic({
        labelParameters: {
            ...labelParameters, onLabelClick: useStableCallback(() => {
                const e = refElementPopupReturn.getElement();
                focusTrapParameters.focusPopup(e, () => findFirstFocusable(e));
            })
        },
        randomIdInputParameters: { prefix: Prefices.drawer },
        randomIdLabelParameters: { prefix: Prefices.drawerTitle }
    });
    return {
        propsFocusContainer,
        propsDrawer: useMergedProps(propsStablePopup, propsInput),
        propsTitle: propsLabel,
        propsSource: { ...propsStableSource },
        refElementPopupReturn,
        refElementSourceReturn
    };
}
//# sourceMappingURL=use-drawer.js.map