import { assertEmptyObject, generateRandomId, useManagedChild, useManagedChildren, useMemo, useMonitoring, useRef } from "preact-prop-helpers";
import { EventDetail, Prefices, enhanceEvent } from "./props.js";
/**
 * Implements a [Slider](https://www.w3.org/WAI/ARIA/apg/patterns/slider-multithumb/) pattern.
 *
 * @compositeParams
 *
 * @hasChild {@link useSliderThumb}
 */
export function useSlider({ sliderParameters: { max, min }, managedChildrenParameters }) {
    const { context, managedChildrenReturn } = useManagedChildren({ managedChildrenParameters });
    const baseIdRef = useRef(null);
    if (baseIdRef.current === null)
        baseIdRef.current = generateRandomId(Prefices.sliderThumb);
    return {
        context: useMemo(() => ({
            ...context,
            sliderContext: {
                min,
                max,
                baseId: baseIdRef.current
            }
        }), [min, max]),
        managedChildrenReturn
    };
}
/**
 * @compositeParams
 */
export function useSliderThumb({ sliderThumbParameters: { tag, value, max: maxOverride, min: minOverride, valueText, label, onValueChange, ...void2 }, info, context: { sliderContext: { max: maxParent, min: minParent }, ...context }, ...void1 }) {
    return useMonitoring(function useSliderThumb() {
        const { managedChildReturn } = useManagedChild({ info, context });
        const { getChildren: _getThumbs } = managedChildReturn;
        const min = (minOverride ?? minParent);
        const max = (maxOverride ?? maxParent);
        let newProps = (tag == "input" ?
            { min, max, value, type: "range" } :
            { "aria-valuemax": max, "aria-valuemin": min, "aria-valuenow": value });
        newProps = { ...newProps, "aria-label": label, "aria-valuetext": valueText ?? undefined, style: { "--range-value": `${value}`, "--range-value-text": `${valueText}` } };
        if (tag == "input") {
            newProps.onInput = e => {
                onValueChange?.(enhanceEvent(e, { value: e.currentTarget.valueAsNumber }));
            };
        }
        else {
            throw new Error("Unimplemented");
        }
        assertEmptyObject(void1);
        assertEmptyObject(void2);
        return {
            sliderThumbReturn: {
                min,
                max
            },
            managedChildReturn,
            propsSliderThumb: newProps
        };
    });
}
//# sourceMappingURL=use-slider.js.map