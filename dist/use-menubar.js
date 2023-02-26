import { useMergedProps, usePress, useStableCallback } from "preact-prop-helpers";
import { useCallback } from "preact/hooks";
import { debugLog } from "./props.js";
import { useToolbar, useToolbarChild } from "./use-toolbar.js";
/**
 * A menubar is identical to a toolbar, except that every item
 * in a menubar is a menuitem (or similar) and has some sort of
 * role and action when pressed besides just single selection (if applicable).
 *
 * (A toolbar child won't have a defined role, but every menubar child will)
 *
 * @param args
 * @returns
 */
export function useMenubar(args) {
    debugLog("useMenubar");
    const { propsToolbar: propsMenubar, ...restReturn } = useToolbar(args);
    return {
        propsMenubar,
        ...restReturn
    };
}
export function useMenubarChild({ menuItemParameters: { onPress: opu, role }, ...restParams }) {
    debugLog("useMenuItem", restParams.managedChildParameters.index);
    const focusSelf = useCallback((e) => e.focus?.(), []);
    const { pressParameters: { excludeSpace, onPressSync: ops }, props, ...restRet } = useToolbarChild({
        ...restParams
    });
    const { pressReturn } = usePress({
        pressParameters: {
            focusSelf,
            excludeSpace,
            onPressSync: useStableCallback((e) => {
                ops?.(e);
                opu?.(e);
            })
        }, refElementReturn: restRet.refElementReturn
    });
    props.role = role;
    return {
        pressReturn,
        props: useMergedProps(props, pressReturn.propsUnstable),
        ...restRet
    };
}
//# sourceMappingURL=use-menubar.js.map