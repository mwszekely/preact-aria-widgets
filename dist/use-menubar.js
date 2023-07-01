import { focus, monitorCallCount, useMergedProps, usePress, useStableCallback } from "preact-prop-helpers";
import { useCallback } from "preact/hooks";
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
    monitorCallCount(useMenubar);
    const { propsToolbar: propsMenubar, ...restReturn } = useToolbar(args);
    return {
        propsMenubar,
        ...restReturn
    };
}
export function useMenubarChild({ menuItemParameters: { onPress: opu, role }, ...restParams }) {
    monitorCallCount(useMenubarChild);
    const focusSelf = useCallback((e) => focus(e), []);
    const { props, pressParameters: { onPressSync, excludeSpace }, ...restRet } = useToolbarChild({
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
            })
        }, refElementReturn: restRet.refElementReturn
    });
    props.role = role;
    return {
        props: useMergedProps(props, propsPress),
        pressReturn,
        ...restRet
    };
}
//# sourceMappingURL=use-menubar.js.map