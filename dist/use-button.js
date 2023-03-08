import { useMergedProps, usePress, useRefElement } from "preact-prop-helpers";
import { useCallback } from "preact/hooks";
import { debugLog, enhanceEvent } from "./props.js";
export function useButton({ buttonParameters: { tagButton, disabled, onPress, pressed, role }, pressParameters, refElementParameters }) {
    debugLog("useButton");
    const refElementReturn = useRefElement({ refElementParameters });
    const focusSelf = useCallback((e) => e.focus?.(), []);
    const pressReturn = usePress({
        ...refElementReturn,
        pressParameters: {
            onPressSync: (e) => (disabled ? null : onPress)?.(enhanceEvent(e, { pressed: pressed == null ? null : !pressed })),
            focusSelf,
            ...pressParameters
        },
    });
    const { pressReturn: { propsUnstable: pressProps } } = pressReturn;
    const { refElementReturn: { propsStable: refProps } } = refElementReturn;
    const baseProps = { "aria-pressed": (pressed === true ? "true" : pressed === false ? "false" : undefined) };
    const buttonProps = { ...baseProps, disabled: (disabled && disabled != "soft") ? true : false, "aria-disabled": (disabled === 'soft' ? 'true' : undefined), role: role == "button" ? undefined : role };
    const divProps = { ...baseProps, tabIndex: (disabled === "hard" ? -1 : 0), role, "aria-disabled": disabled ? "true" : undefined };
    return {
        ...refElementReturn,
        ...pressReturn,
        props: useMergedProps(pressProps, refProps, (tagButton == 'button' ? buttonProps : divProps)),
    };
}
//# sourceMappingURL=use-button.js.map