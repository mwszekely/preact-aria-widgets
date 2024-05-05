import { assertEmptyObject, focus, returnFalse, useCallback, useMergedProps, usePress, useStableCallback } from "preact-prop-helpers/preact";
import { monitored } from "./props.js";
import { useToolbar, useToolbarChild } from "./use-toolbar.js";
/**
 * Implements a [Menubar](https://www.w3.org/WAI/ARIA/apg/patterns/menubar/) pattern.
 *
 * @remarks A menubar is identical to a toolbar, except that every item
 * in a menubar is a menuitem (or similar) and has some sort of
 * role and action when pressed besides just single selection (if applicable).
 *
 * (A toolbar child won't have a defined role, but every menubar child will)
 *
 * @compositeParams
 */
export const useMenubar = monitored(function useMenubar(args) {
    const { propsToolbar: propsMenubar, ...restReturn } = useToolbar(args);
    return {
        propsMenubar,
        ...restReturn
    };
});
/**
 * @compositeParams
 */
export const useMenubarChild = monitored(function useMenubarChild({ menuItemParameters: { onPress: opu, role }, pressParameters: { onPressingChange, ...void1 }, ...restParams }) {
    const focusSelf = useCallback((e) => focus(e), []);
    assertEmptyObject(void1);
    const { propsChild, propsTabbable, pressParameters: { onPressSync, excludeSpace }, ...restRet } = useToolbarChild({
        ...restParams,
        toolbarChildParameters: { disabledProp: "aria-disabled" }
    });
    const { pressReturn, props: propsPress } = usePress({
        pressParameters: {
            focusSelf,
            excludeSpace,
            onPressSync: useStableCallback((e) => {
                onPressSync?.(e);
                opu?.(e);
            }),
            allowRepeatPresses: false,
            excludeEnter: returnFalse,
            excludePointer: returnFalse,
            longPressThreshold: null,
            onPressingChange
        }, refElementReturn: restRet.refElementReturn
    });
    propsChild.role = role;
    return {
        props: useMergedProps(propsChild, propsTabbable, propsPress),
        pressReturn,
        ...restRet
    };
});
//# sourceMappingURL=use-menubar.js.map