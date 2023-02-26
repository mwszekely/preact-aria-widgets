import { Fragment as _Fragment, jsxs as _jsxs, jsx as _jsx } from "preact/jsx-runtime";
import { createElement } from "preact";
import { returnFalse } from "preact-prop-helpers";
import { useImperativeHandle } from "preact/hooks";
import { useCheckbox } from "../use-checkbox.js";
import { memoForwardRef } from "./util.js";
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
export const Checkbox = memoForwardRef(function Checkbox({ checked, disabled, tagLabel, labelPosition, tagInput, ariaLabel, onCheckedChange, render }, ref) {
    const checkbox = useCheckbox({
        checkboxLikeParameters: { checked: checked ?? false, disabled: disabled ?? false },
        checkboxParameters: { onCheckedChange },
        labelParameters: { ariaLabel: ariaLabel, labelPosition, tagInput, tagLabel },
        pressParameters: { excludeSpace: returnFalse }
    });
    useImperativeHandle(ref, () => checkbox);
    return render(checkbox);
});
//# sourceMappingURL=checkbox.js.map