import { jsx as _jsx, Fragment as _Fragment } from "preact/jsx-runtime";
import { createContext } from "preact";
import { useCallback, useContext, useImperativeHandle } from "preact/hooks";
import { useMenu, useMenuItem } from "../use-menu.js";
import { memoForwardRef, ParentDepthContext, useDefault } from "./util.js";
const MenuItemContext = createContext(null);
export const Menu = memoForwardRef(function Menu({ collator, disableHomeEndKeys, noTypeahead, typeaheadTimeout, orientation, ariaPropName, selectionMode, onClose, open, openDirection, onTabbableIndexChange, closeOnBackdrop, closeOnEscape, closeOnLostFocus, compare, getIndex, selectedIndex, navigatePastEnd, navigatePastStart, onSelectedIndexChange, pageNavigationSize, parentDepth, untabbable, staggered, onOpen, getWindow, render }, ref) {
    const defaultParentDepth = useContext(ParentDepthContext);
    let myDepth = (parentDepth ?? defaultParentDepth) + 1;
    const info = useMenu({
        linearNavigationParameters: {
            disableHomeEndKeys: useDefault("disableHomeEndKeys", disableHomeEndKeys),
            pageNavigationSize: useDefault("pageNavigationSize", pageNavigationSize),
            navigatePastEnd: navigatePastEnd ?? "wrap",
            navigatePastStart: navigatePastStart ?? "wrap"
        },
        staggeredChildrenParameters: {
            staggered: staggered || false
        },
        dismissParameters: {
            closeOnBackdrop: closeOnBackdrop ?? true,
            closeOnEscape: closeOnEscape ?? true,
            closeOnLostFocus: closeOnLostFocus ?? true,
            onClose,
            open
        },
        escapeDismissParameters: {
            getWindow: useDefault("getWindow", getWindow),
            parentDepth: parentDepth ?? defaultParentDepth
        },
        rearrangeableChildrenParameters: { getIndex: useDefault("getIndex", getIndex) },
        sortableChildrenParameters: { compare: compare ?? null },
        menuParameters: { openDirection, onOpen },
        menuSurfaceParameters: {},
        rovingTabIndexParameters: {
            onTabbableIndexChange: onTabbableIndexChange ?? null,
            untabbable: untabbable ?? false
        },
        typeaheadNavigationParameters: {
            collator: useDefault("collator", collator),
            noTypeahead: useDefault("noTypeahead", noTypeahead),
            typeaheadTimeout: useDefault("typeaheadTimeout", typeaheadTimeout)
        },
        toolbarParameters: { orientation, selectedIndex: selectedIndex ?? null, onSelectedIndexChange: onSelectedIndexChange ?? null },
        singleSelectionParameters: { ariaPropName: ariaPropName || "aria-selected", selectionMode: selectionMode || "activation" }
    });
    useImperativeHandle(ref, () => info);
    return (_jsx(ParentDepthContext.Provider, { value: myDepth, children: _jsx(MenuItemContext.Provider, { value: info.context, children: render(info) }) }));
});
export const MenuItem = memoForwardRef(function MenuItem({ index, hidden, getSortValue, onPress, getText, role, focusSelf, disabled, render, info: uinfo }, ref) {
    const context = useContext(MenuItemContext);
    console.assert(context != null, `This MenuItem is not contained within a Menubar/Menu`);
    const defaultFocusSelf = useCallback((e) => e?.focus?.(), []);
    const info = useMenuItem({
        info: { index, hidden, disabled, focusSelf: focusSelf ?? defaultFocusSelf, ...uinfo },
        context,
        sortableChildParameters: { getSortValue },
        textContentParameters: { getText: useDefault("getText", getText) },
        menuItemParameters: { onPress: onPress ?? null, role: role ?? "menuitem" },
    });
    useImperativeHandle(ref, () => info);
    return (_jsx(_Fragment, { children: render(info) }));
});
//# sourceMappingURL=menu.js.map