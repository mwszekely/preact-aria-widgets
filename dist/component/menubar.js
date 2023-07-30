import { jsx as _jsx, Fragment as _Fragment } from "preact/jsx-runtime";
import { createContext } from "preact";
import { assertEmptyObject, focus, memo } from "preact-prop-helpers";
import { useCallback, useImperativeHandle } from "preact/hooks";
import { useContextWithWarning } from "../props.js";
import { useMenubar, useMenubarChild } from "../use-menubar.js";
import { useDefault } from "./util.js";
export const MenubarItemContext = createContext(null);
export const Menubar = memo(function Menubar({ render, collator, disableHomeEndKeys, navigatePastEnd, navigatePastStart, pageNavigationSize, orientation, staggered, noTypeahead, untabbable, onTabbableIndexChange, compare, getIndex, disabled, selectedIndex, onSelectedIndexChange, typeaheadTimeout, role, ariaLabel, ariaPropName, selectionMode, onNavigateLinear, onNavigateTypeahead, imperativeHandle, onElementChange, onMount, onUnmount, ...void1 }) {
    ariaPropName ||= "aria-selected";
    selectionMode ||= "activation";
    untabbable ||= false;
    assertEmptyObject(void1);
    const info = useMenubar({
        linearNavigationParameters: {
            onNavigateLinear,
            disableHomeEndKeys: useDefault("disableHomeEndKeys", disableHomeEndKeys),
            navigatePastEnd: navigatePastEnd ?? "wrap",
            navigatePastStart: navigatePastStart ?? "wrap",
            pageNavigationSize: useDefault("pageNavigationSize", pageNavigationSize)
        },
        toolbarParameters: {
            orientation,
            selectedIndex,
            onSelectedIndexChange,
            role: role ?? "menubar",
            disabled: disabled || false
        },
        rovingTabIndexParameters: {
            onTabbableIndexChange, untabbable
        },
        typeaheadNavigationParameters: {
            onNavigateTypeahead,
            collator: useDefault("collator", collator),
            noTypeahead: useDefault("noTypeahead", noTypeahead),
            typeaheadTimeout: useDefault("typeaheadTimeout", typeaheadTimeout)
        },
        rearrangeableChildrenParameters: {
            getIndex: useDefault("getIndex", getIndex)
        },
        staggeredChildrenParameters: {
            staggered: staggered || false
        },
        sortableChildrenParameters: {
            compare,
        },
        labelParameters: {
            ariaLabel
        },
        singleSelectionParameters: {
            ariaPropName,
            selectionMode
        },
        refElementParameters: { onElementChange, onMount, onUnmount }
    });
    useImperativeHandle(imperativeHandle, () => info);
    return (_jsx(MenubarItemContext.Provider, { value: info.context, children: render(info) }));
});
export function MenubarItem({ index, render, focusSelf, untabbable, getText, unselectable, onPress, getSortValue, onPressingChange, role, imperativeHandle, onCurrentFocusedChanged, onCurrentFocusedInnerChanged, onElementChange, onMount, onUnmount, info: uinfo }) {
    const context = (useContextWithWarning(MenubarItemContext, "menubar"));
    const defaultFocusSelf = useCallback((e) => focus(e), []);
    const info = useMenubarChild({
        info: { index, untabbable: untabbable || false, unselectable: unselectable || false, focusSelf: focusSelf ?? defaultFocusSelf, getSortValue, ...uinfo },
        context,
        textContentParameters: { getText: useDefault("getText", getText) },
        menuItemParameters: { onPress: onPress ?? null, role: role ?? "menuitem" },
        pressParameters: { onPressingChange },
        hasCurrentFocusParameters: { onCurrentFocusedChanged, onCurrentFocusedInnerChanged },
        refElementParameters: { onElementChange, onMount, onUnmount }
    });
    useImperativeHandle(imperativeHandle, () => info);
    return (_jsx(_Fragment, { children: render(info) }));
}
;
//# sourceMappingURL=menubar.js.map