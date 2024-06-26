import { assertEmptyObject, memo } from "preact-prop-helpers";
import { useButton } from "../use-button.js";
import { useComponent, useDefault } from "./util.js";
export const Button = /* @__PURE__ */ memo((function Button({ tagButton, pressed, render, disabled, onElementChange, onMount, onUnmount, allowRepeatPresses, longPressThreshold, excludeSpace, onPressingChange, onPressSync, focusSelf, role, imperativeHandle, ...void1 }) {
    assertEmptyObject(void1);
    return useComponent(imperativeHandle, render, null, useButton({
        buttonParameters: { onPressSync, role: role, tagButton, pressed, disabled },
        pressParameters: { longPressThreshold, allowRepeatPresses, excludeSpace, onPressingChange, focusSelf: useDefault("focusSelf", focusSelf) },
        refElementParameters: { onElementChange, onMount, onUnmount },
    }));
}));
//# sourceMappingURL=button.js.map