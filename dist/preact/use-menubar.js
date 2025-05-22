import { assertEmptyObject, focus, returnFalse, useCallback, useMergedProps, useMonitoring, usePress, useStableCallback } from "preact-prop-helpers";
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
export function useMenubar(args) {
    return useMonitoring(function useMenubar() {
        const { propsToolbar: propsMenubar, ...restReturn } = useToolbar(args);
        return {
            propsMenubar,
            ...restReturn
        };
    });
}
/**
 * @compositeParams
 */
export function useMenubarChild({ menuItemParameters: { onPress: opu, role }, pressParameters: { onPressingChange, ...void1 }, ...restParams }) {
    return useMonitoring(function useMenubarChild() {
        const focusSelf = useCallback((e) => focus(e), []);
        assertEmptyObject(void1);
        const { propsChild, propsTabbable, pressParameters: { excludeSpace }, selectionChildReturn: { firePressSelectionEvent }, ...restRet } = useToolbarChild({
            ...restParams,
            toolbarChildParameters: { disabledProp: "aria-disabled" }
        });
        const { pressReturn, props: propsPress } = usePress({
            pressParameters: {
                focusSelf,
                excludeSpace,
                onPressSync: useStableCallback((e) => {
                    firePressSelectionEvent(e);
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
}
//# sourceMappingURL=use-menubar.js.map