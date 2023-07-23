import { useImperativeHandle } from "preact/hooks";
import { useButton } from "../use-button.js";
import { memoForwardRef } from "./util.js";
export const Button = memoForwardRef(function Button({ tagButton, onPress, pressed, render, disabled, onElementChange, onMount, onUnmount, allowRepeatPresses, longPressThreshold, excludeEnter, excludePointer, excludeSpace, onPressingChange }, ref) {
    const info = useButton({
        buttonParameters: {
            role: "button",
            tagButton: tagButton,
            onPress: onPress ?? null,
            pressed,
            disabled: disabled ?? false
        },
        pressParameters: { longPressThreshold, allowRepeatPresses, excludeEnter, excludePointer, excludeSpace, onPressingChange },
        refElementParameters: { onElementChange, onMount, onUnmount }
    });
    useImperativeHandle(ref, () => info);
    return render(info);
});
//# sourceMappingURL=button.js.map