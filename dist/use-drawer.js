import { findFirstFocusable, useMergedProps, useModal, useStableCallback } from "preact-prop-helpers";
import { Prefices } from "./props.js";
import { useLabelSynthetic } from "./use-label.js";
export function useDrawer({ dismissParameters, escapeDismissParameters, focusTrapParameters, labelParameters }) {
    const { focusTrapReturn, propsFocusContainer, propsPopup, propsSource, refElementPopupReturn, refElementSourceReturn } = useModal({
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
        focusTrapReturn,
        propsFocusContainer,
        propsDrawer: useMergedProps(propsPopup, propsInput),
        propsTitle: propsLabel,
        propsSource,
        refElementPopupReturn,
        refElementSourceReturn
    };
}
//# sourceMappingURL=use-drawer.js.map