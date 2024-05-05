import { assertEmptyObject, enhanceEvent, returnFalse, useMergedProps, usePress, useRefElement, useStableCallback } from "preact-prop-helpers/react";
import { monitored } from "./props.js";
/**
 * Implements a [Button](https://www.w3.org/WAI/ARIA/apg/patterns/button/) pattern.
 *
 * @remarks The press handler is sync by default. See `useProgressWithHandler` to turn an async function into a sync function with a progress bar.
 *
 * @compositeParams
 */
export const useButton = monitored(function useButton({ buttonParameters: { tagButton, disabled, pressed, role, onPressSync, ...void1 }, pressParameters: { focusSelf, allowRepeatPresses, longPressThreshold, onPressingChange, excludeSpace, ...void3 }, refElementParameters, ...void2 }) {
    //if (tagButton != "button")
    //    debugger;
    const { refElementReturn, propsStable: propsRef, ...void5 } = useRefElement({ refElementParameters });
    const { pressReturn, props: propsPress, ...void4 } = usePress({
        refElementReturn,
        pressParameters: {
            onPressSync: useStableCallback((e) => {
                if (!disabled) {
                    const p = (pressed == null ? undefined : !pressed);
                    onPressSync?.(enhanceEvent(e, { pressed: p }));
                }
            }),
            focusSelf,
            allowRepeatPresses,
            excludeEnter: returnFalse,
            excludePointer: returnFalse,
            excludeSpace,
            longPressThreshold,
            onPressingChange
        },
    });
    const baseProps = { "aria-pressed": (pressed === true ? "true" : pressed === false ? "false" : undefined) };
    const buttonProps = { ...baseProps, disabled: (disabled && disabled != "soft") ? true : false, "aria-disabled": (disabled === 'soft' ? 'true' : undefined), role: role == "button" ? undefined : role };
    const divProps = { ...baseProps, tabIndex: (disabled === "hard" ? -1 : 0), role: role || "button", "aria-disabled": disabled ? "true" : undefined };
    assertEmptyObject(void1);
    assertEmptyObject(void2);
    assertEmptyObject(void3);
    assertEmptyObject(void4);
    assertEmptyObject(void5);
    return {
        pressReturn,
        props: useMergedProps(propsPress, propsRef, (tagButton == 'button' ? buttonProps : divProps)),
        refElementReturn,
    };
});
//# sourceMappingURL=use-button.js.map