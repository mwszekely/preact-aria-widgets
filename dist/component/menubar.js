import { jsx as _jsx, Fragment as _Fragment } from "preact/jsx-runtime";
import { createContext } from "preact";
import { focus } from "preact-prop-helpers";
import { useCallback, useImperativeHandle } from "preact/hooks";
import { useContextWithWarning } from "../props.js";
import { useMenubar, useMenubarChild } from "../use-menubar.js";
import { memoForwardRef, useDefault } from "./util.js";
export const MenubarItemContext = createContext(null);
export const Menubar = memoForwardRef(function MenubarU({ render, collator, disableHomeEndKeys, navigatePastEnd, navigatePastStart, pageNavigationSize, orientation, staggered, noTypeahead, untabbable, onTabbableIndexChange, compare, getIndex, disabled, selectedIndex, onSelectedIndexChange, typeaheadTimeout, role, ariaLabel, ariaPropName, selectionMode, onNavigateLinear, onNavigateTypeahead }, ref) {
    ariaPropName ||= "aria-selected";
    selectionMode ||= "activation";
    untabbable ||= false;
    const info = useMenubar({
        linearNavigationParameters: {
            onNavigateLinear,
            disableHomeEndKeys: useDefault("disableHomeEndKeys", disableHomeEndKeys),
            navigatePastEnd: navigatePastEnd ?? "wrap",
            navigatePastStart: navigatePastStart ?? "wrap",
            pageNavigationSize: useDefault("pageNavigationSize", pageNavigationSize)
        },
        toolbarParameters: { orientation, selectedIndex: selectedIndex ?? null, onSelectedIndexChange: onSelectedIndexChange ?? null, role: role ?? "menubar", disabled: disabled || false },
        rovingTabIndexParameters: { onTabbableIndexChange: onTabbableIndexChange ?? null, untabbable },
        typeaheadNavigationParameters: {
            onNavigateTypeahead,
            collator: useDefault("collator", collator),
            noTypeahead: useDefault("noTypeahead", noTypeahead),
            typeaheadTimeout: useDefault("typeaheadTimeout", typeaheadTimeout)
        },
        rearrangeableChildrenParameters: { getIndex: useDefault("getIndex", getIndex) },
        staggeredChildrenParameters: { staggered: staggered || false },
        sortableChildrenParameters: { compare: compare ?? null },
        labelParameters: { ariaLabel },
        singleSelectionParameters: { ariaPropName, selectionMode }
    });
    useImperativeHandle(ref, () => info);
    return (_jsx(MenubarItemContext.Provider, { value: info.context, children: render(info) }));
});
export const MenubarItem = memoForwardRef(function MenuItemU({ index, render, focusSelf, untabbable, getText, unselectable, onPress, getSortValue, role, info: uinfo }, ref) {
    const context = (useContextWithWarning(MenubarItemContext, "menubar"));
    const defaultFocusSelf = useCallback((e) => focus(e), []);
    const info = useMenubarChild({
        info: { index, untabbable: untabbable || false, unselectable: unselectable || false, focusSelf: focusSelf ?? defaultFocusSelf, ...uinfo },
        context,
        sortableChildParameters: { getSortValue },
        textContentParameters: { getText: useDefault("getText", getText) },
        menuItemParameters: { onPress: onPress ?? null, role: role ?? "menuitem" }
    });
    useImperativeHandle(ref, () => info);
    return (_jsx(_Fragment, { children: render(info) }));
});
//# sourceMappingURL=menubar.js.map