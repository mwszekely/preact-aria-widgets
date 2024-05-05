import { assertEmptyObject, memo } from "preact-prop-helpers/preact";
import { Get3 } from "../props.js";
import { UseButtonParameters, UseButtonReturnType, useButton } from "../use-button.js";
import { GenericComponentProps, useComponent, useDefault } from "./util.js";

export type ButtonProps<ButtonElement extends Element> = GenericComponentProps<
    UseButtonReturnType<ButtonElement>,
    Get3<UseButtonParameters<ButtonElement>, "buttonParameters", "pressParameters", "refElementParameters">,
    "tagButton"
>;

export const Button = memo((function Button<ButtonElement extends Element>({
    tagButton,
    pressed,
    render,
    disabled,
    onElementChange,
    onMount,
    onUnmount,
    allowRepeatPresses,
    longPressThreshold,
    excludeSpace,
    onPressingChange,
    onPressSync,
    focusSelf,
    role,
    imperativeHandle,
    ...void1
}: ButtonProps<ButtonElement>) {
    assertEmptyObject(void1);

    return useComponent(
        imperativeHandle,
        render,
        null,
        useButton<ButtonElement>({
            buttonParameters: { onPressSync, role: role, tagButton, pressed, disabled },
            pressParameters: { longPressThreshold, allowRepeatPresses, excludeSpace, onPressingChange, focusSelf: useDefault("focusSelf", focusSelf) },
            refElementParameters: { onElementChange, onMount, onUnmount },
        })
    );
}))
