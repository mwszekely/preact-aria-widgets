import { jsx as _jsx, Fragment as _Fragment } from "preact/jsx-runtime";
import { createContext } from "preact";
import { useCallback, useContext, useImperativeHandle } from "preact/hooks";
import { useMenubar, useMenubarChild } from "../use-menubar.js";
import { memoForwardRef, useDefault } from "./util.js";
export const MenubarItemContext = createContext(null);
export const Menubar = memoForwardRef(function MenubarU({ render, collator, disableHomeEndKeys, navigatePastEnd, navigatePastStart, pageNavigationSize, orientation, staggered, noTypeahead, onTabbableIndexChange, compare, getIndex, untabbable, selectedIndex, onSelectedIndexChange, typeaheadTimeout, role, ariaLabel }, ref) {
    const info = useMenubar({
        linearNavigationParameters: {
            disableHomeEndKeys: useDefault("disableHomeEndKeys", disableHomeEndKeys),
            navigatePastEnd: navigatePastEnd ?? "wrap",
            navigatePastStart: navigatePastStart ?? "wrap",
            pageNavigationSize: useDefault("pageNavigationSize", pageNavigationSize)
        },
        toolbarParameters: { orientation, selectedIndex: selectedIndex ?? null, onSelectedIndexChange: onSelectedIndexChange ?? null, role: role ?? "menubar" },
        rovingTabIndexParameters: { onTabbableIndexChange: onTabbableIndexChange ?? null, untabbable: untabbable ?? false },
        typeaheadNavigationParameters: {
            collator: useDefault("collator", collator),
            noTypeahead: useDefault("noTypeahead", noTypeahead),
            typeaheadTimeout: useDefault("typeaheadTimeout", typeaheadTimeout)
        },
        rearrangeableChildrenParameters: { getIndex: useDefault("getIndex", getIndex) },
        staggeredChildrenParameters: { staggered: staggered || false },
        sortableChildrenParameters: { compare: compare ?? null },
        labelParameters: { ariaLabel }
    });
    useImperativeHandle(ref, () => info);
    return (_jsx(MenubarItemContext.Provider, { value: info.context, children: render(info) }));
});
export const MenubarItem = memoForwardRef(function MenuItemU({ index, render, ariaPropName, focusSelf, selectionMode, hidden, getText, disabled, onPress, getSortValue, role, info: uinfo }, ref) {
    const context = (useContext(MenubarItemContext));
    console.assert(context != null, `This MenuItem is not contained within a Menubar/Menu`);
    const defaultFocusSelf = useCallback((e) => e?.focus?.(), []);
    const info = useMenubarChild({
        info: { index, focusSelf: focusSelf ?? defaultFocusSelf, ...uinfo },
        context,
        rovingTabIndexChildParameters: { hidden: hidden ?? false },
        sortableChildParameters: { getSortValue },
        textContentParameters: { getText: useDefault("getText", getText) },
        menuItemParameters: { onPress: onPress ?? null, role: role ?? "menuitem" },
        singleSelectionChildParameters: { ariaPropName, selectionMode, disabled: disabled ?? false }
    });
    useImperativeHandle(ref, () => info);
    return (_jsx(_Fragment, { children: render(info) }));
});
//# sourceMappingURL=menubar.js.map