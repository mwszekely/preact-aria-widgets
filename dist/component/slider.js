import { createContext } from "preact";
import { useContextWithWarning } from "../props.js";
import { useSlider, useSliderThumb } from "../use-slider.js";
import { useComponent } from "./util.js";
const SliderThumbContext = createContext(null);
export function Slider({ max, min, onAfterChildLayoutEffect, onChildrenMountChange, render, imperativeHandle, onChildrenCountChange }) {
    return useComponent(imperativeHandle, render, SliderThumbContext, useSlider({
        managedChildrenParameters: { onAfterChildLayoutEffect, onChildrenMountChange, onChildrenCountChange },
        sliderParameters: { max, min }
    }));
}
export function SliderThumb({ label, tag, value, max, min, index, render, valueText, imperativeHandle, onValueChange, info }) {
    return useComponent(imperativeHandle, render, null, useSliderThumb({
        context: (useContextWithWarning(SliderThumbContext, "slider")),
        info: { index, ...info },
        sliderThumbParameters: { label, tag, value, max, min, valueText, onValueChange },
    }));
}
;
//# sourceMappingURL=slider.js.map