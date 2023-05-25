import { jsx as _jsx } from "preact/jsx-runtime";
import { createContext } from "preact";
import { useContext, useImperativeHandle } from "preact/hooks";
import { useSlider, useSliderThumb } from "../use-slider.js";
import { memoForwardRef } from "./util.js";
const SliderThumbContext = createContext(null);
export const Slider = memoForwardRef(function Slider({ max, min, onAfterChildLayoutEffect, onChildrenMountChange, children }, ref) {
    const info = useSlider({
        managedChildrenParameters: { onAfterChildLayoutEffect, onChildrenMountChange },
        sliderParameters: { max, min }
    });
    useImperativeHandle(ref, () => info);
    return (_jsx(SliderThumbContext.Provider, { value: info.context, children: children }));
});
export const SliderThumb = memoForwardRef(function SliderThumbU({ label, tag, value, max, min, onValueChange, index, render, valueText }, ref) {
    const context = useContext(SliderThumbContext);
    console.assert(context != null, `This SliderThumb is not contained within a Slider`);
    const info = useSliderThumb({
        context,
        info: { index },
        sliderThumbParameters: { label, tag, value, max, min, onValueChange, valueText },
    });
    useImperativeHandle(ref, () => info);
    return render(info);
});
//# sourceMappingURL=slider.js.map