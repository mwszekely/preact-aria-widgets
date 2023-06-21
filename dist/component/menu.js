import { jsx as _jsx, Fragment as _Fragment } from "preact/jsx-runtime";
import { createContext } from "preact";
import { focus } from "preact-prop-helpers";
import { useCallback, useContext, useImperativeHandle } from "preact/hooks";
import { useMenu, useMenuItem } from "../use-menu.js";
import { memoForwardRef, ParentDepthContext, useDefault } from "./util.js";
const UntabbableContext = createContext(false);
const AriaPropNameContext = createContext("aria-selected");
const SelectionModeContext = createContext("focus");
const MenuItemContext = createContext(null);
export const Menu = memoForwardRef(function Menu({ collator, disableHomeEndKeys, noTypeahead, typeaheadTimeout, orientation, ariaPropName, selectionMode, untabbable, onClose, open, openDirection, onTabbableIndexChange, closeOnBackdrop, closeOnEscape, closeOnLostFocus, compare, getIndex, selectedIndex, navigatePastEnd, navigatePastStart, onSelectedIndexChange, pageNavigationSize, parentDepth, disabled, staggered, onOpen, getWindow, render }, ref) {
    const defaultParentDepth = useContext(ParentDepthContext);
    let myDepth = (parentDepth ?? defaultParentDepth) + 1;
    ariaPropName ||= "aria-selected";
    selectionMode ||= "activation";
    untabbable ||= false;
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
            untabbable: untabbable
        },
        typeaheadNavigationParameters: {
            collator: useDefault("collator", collator),
            noTypeahead: useDefault("noTypeahead", noTypeahead),
            typeaheadTimeout: useDefault("typeaheadTimeout", typeaheadTimeout)
        },
        toolbarParameters: { orientation, selectedIndex: selectedIndex ?? null, onSelectedIndexChange: onSelectedIndexChange ?? null, disabled: disabled || false },
        singleSelectionParameters: { ariaPropName: ariaPropName || "aria-selected", selectionMode: selectionMode || "activation" }
    });
    useImperativeHandle(ref, () => info);
    return (_jsx(AriaPropNameContext.Provider, { value: ariaPropName, children: _jsx(SelectionModeContext.Provider, { value: selectionMode, children: _jsx(UntabbableContext.Provider, { value: untabbable, children: _jsx(ParentDepthContext.Provider, { value: myDepth, children: _jsx(MenuItemContext.Provider, { value: info.context, children: render(info) }) }) }) }) }));
});
export const MenuItem = memoForwardRef(function MenuItem({ index, untabbable, getSortValue, onPress, getText, role, focusSelf, unselectable, render, info: uinfo }, ref) {
    const context = useContext(MenuItemContext);
    console.assert(context != null, `This MenuItem is not contained within a Menubar/Menu`);
    const defaultFocusSelf = useCallback((e) => focus(e), []);
    const info = useMenuItem({
        info: { index, untabbable, unselectable, focusSelf: focusSelf ?? defaultFocusSelf, ...uinfo },
        context,
        sortableChildParameters: { getSortValue },
        textContentParameters: { getText: useDefault("getText", getText) },
        menuItemParameters: { onPress: onPress ?? null, role: role ?? "menuitem" }
    });
    useImperativeHandle(ref, () => info);
    return (_jsx(_Fragment, { children: render(info) }));
});
//# sourceMappingURL=menu.js.map