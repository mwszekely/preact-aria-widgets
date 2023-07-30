import { Fragment as _Fragment, jsxs as _jsxs, jsx as _jsx } from "preact/jsx-runtime";
import { createElement } from "preact";
import { assertEmptyObject, memo } from "preact-prop-helpers";
import { useCheckbox } from "../use-checkbox.js";
import { useComponent } from "./util.js";
export function defaultRenderCheckboxLike({ labelPosition, tagInput, tagLabel, makePropsInput, makePropsLabel }) {
    return function (info) {
        const inputProps = (makePropsInput(info));
        const { children, ...labelProps } = (makePropsLabel(info));
        if (labelPosition == "wrapping") {
            const input = createElement(tagInput, inputProps);
            const label = createElement(tagLabel, { ...labelProps, children: _jsxs(_Fragment, { children: [input, children] }) });
            return (_jsx(_Fragment, { children: label }));
        }
        else if (labelPosition == "separate") {
            const input = createElement(tagInput, inputProps);
            const label = createElement(tagLabel, { children, ...labelProps });
            return (_jsxs(_Fragment, { children: [input, label] }));
        }
        else {
            console.assert(!!inputProps["aria-label"]);
            return createElement(tagInput, inputProps);
        }
    };
}
export const Checkbox = memo(function Checkbox({ checked, disabled, tagLabel, labelPosition, tagInput, ariaLabel, longPressThreshold, excludeSpace, imperativeHandle, render, onCheckedChange, ...void1 }) {
    assertEmptyObject(void1);
    return useComponent(imperativeHandle, render, null, useCheckbox({
        checkboxLikeParameters: { checked, disabled: disabled ?? false },
        labelParameters: { ariaLabel: ariaLabel, labelPosition, tagInput, tagLabel },
        pressParameters: { excludeSpace, longPressThreshold },
        checkboxParameters: { onCheckedChange }
    }));
});
//# sourceMappingURL=checkbox.js.map