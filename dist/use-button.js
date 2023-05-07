import { monitorCallCount, useMergedProps, usePress, useRefElement } from "preact-prop-helpers";
import { useCallback } from "preact/hooks";
import { enhanceEvent } from "./props.js";
export function useButton({ buttonParameters: { tagButton, disabled, onPress, pressed, role }, pressParameters, refElementParameters }) {
    monitorCallCount(useButton);
    const { refElementReturn, propsStable: propsRef } = useRefElement({ refElementParameters });
    const focusSelf = useCallback((e) => e.focus?.(), []);
    const { pressReturn, props: propsPress } = usePress({
        refElementReturn,
        pressParameters: {
            onPressSync: (e) => (disabled ? null : onPress)?.(enhanceEvent(e, { pressed: pressed == null ? null : !pressed })),
            focusSelf,
            ...pressParameters
        },
    });
    const baseProps = { "aria-pressed": (pressed === true ? "true" : pressed === false ? "false" : undefined) };
    const buttonProps = { ...baseProps, disabled: (disabled && disabled != "soft") ? true : false, "aria-disabled": (disabled === 'soft' ? 'true' : undefined), role: role == "button" ? undefined : role };
    const divProps = { ...baseProps, tabIndex: (disabled === "hard" ? -1 : 0), role, "aria-disabled": disabled ? "true" : undefined };
    return {
        pressReturn,
        props: useMergedProps(propsPress, propsRef, (tagButton == 'button' ? buttonProps : divProps)),
        refElementReturn,
    };
}
//# sourceMappingURL=use-button.js.map