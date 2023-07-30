import { jsx as _jsx } from "preact/jsx-runtime";
import { createContext } from "preact";
import { focus } from "preact-prop-helpers";
import { useCallback, useContext } from "preact/hooks";
import { useContextWithWarning } from "../props.js";
import { useMenu, useMenuItem } from "../use-menu.js";
import { ParentDepthContext, useComponent, useDefault } from "./util.js";
const UntabbableContext = createContext(false);
const AriaPropNameContext = createContext("aria-selected");
const SelectionModeContext = createContext("focus");
const MenuItemContext = createContext(null);
export function Menu({ collator, disableHomeEndKeys, noTypeahead, typeaheadTimeout, orientation, ariaPropName, selectionMode, untabbable, active, onDismiss, onElementChange, onMount, onUnmount, openDirection, onTabbableIndexChange, compare, getIndex, selectedIndex, navigatePastEnd, navigatePastStart, onSelectedIndexChange, pageNavigationSize, parentDepth, disabled, staggered, onOpen, onNavigateLinear, onNavigateTypeahead, getDocument, onActiveElementChange, onLastActiveElementChange, onWindowFocusedChange, render, imperativeHandle }) {
    const defaultParentDepth = useContext(ParentDepthContext);
    let myDepth = (parentDepth ?? defaultParentDepth) + 1;
    ariaPropName ||= "aria-selected";
    selectionMode ||= "activation";
    untabbable ||= false;
    return (_jsx(AriaPropNameContext.Provider, { value: ariaPropName, children: _jsx(SelectionModeContext.Provider, { value: selectionMode, children: _jsx(UntabbableContext.Provider, { value: untabbable, children: _jsx(ParentDepthContext.Provider, { value: myDepth, children: useComponent(imperativeHandle, render, MenuItemContext, useMenu({
                        linearNavigationParameters: {
                            onNavigateLinear,
                            disableHomeEndKeys: useDefault("disableHomeEndKeys", disableHomeEndKeys),
                            pageNavigationSize: useDefault("pageNavigationSize", pageNavigationSize),
                            navigatePastEnd: navigatePastEnd ?? "wrap",
                            navigatePastStart: navigatePastStart ?? "wrap"
                        },
                        staggeredChildrenParameters: {
                            staggered: staggered || false
                        },
                        escapeDismissParameters: { parentDepth: parentDepth || 1, },
                        dismissParameters: { onDismiss },
                        modalParameters: { active },
                        refElementParameters: { onElementChange, onMount, onUnmount },
                        activeElementParameters: {
                            getDocument: useDefault("getDocument", getDocument),
                            onActiveElementChange,
                            onLastActiveElementChange,
                            onWindowFocusedChange
                        },
                        rearrangeableChildrenParameters: {
                            getIndex: useDefault("getIndex", getIndex)
                        },
                        sortableChildrenParameters: {
                            compare
                        },
                        menuParameters: {
                            openDirection,
                            onOpen
                        },
                        menuSurfaceParameters: {},
                        rovingTabIndexParameters: {
                            onTabbableIndexChange,
                            untabbable: untabbable
                        },
                        typeaheadNavigationParameters: {
                            onNavigateTypeahead,
                            collator: useDefault("collator", collator),
                            noTypeahead: useDefault("noTypeahead", noTypeahead),
                            typeaheadTimeout: useDefault("typeaheadTimeout", typeaheadTimeout)
                        },
                        toolbarParameters: {
                            orientation,
                            selectedIndex,
                            onSelectedIndexChange,
                            disabled: disabled || false
                        },
                        singleSelectionParameters: {
                            ariaPropName: ariaPropName || "aria-selected",
                            selectionMode: selectionMode || "activation"
                        }
                    })) }) }) }) }));
}
export function MenuItem({ index, untabbable, getSortValue, onPress, getText, role, focusSelf, unselectable, onPressingChange, render, imperativeHandle, onCurrentFocusedChanged, onCurrentFocusedInnerChanged, onElementChange, onMount, onUnmount, info: uinfo }) {
    const context = useContextWithWarning(MenuItemContext, "menu");
    const defaultFocusSelf = useCallback((e) => focus(e), []);
    return (useComponent(imperativeHandle, render, null, useMenuItem({
        info: {
            index,
            untabbable: untabbable || false,
            unselectable: unselectable || false,
            focusSelf: focusSelf ?? defaultFocusSelf,
            getSortValue,
        },
        context,
        textContentParameters: {
            getText: useDefault("getText", getText)
        },
        menuItemParameters: {
            onPress,
            role: role ?? "menuitem"
        },
        pressParameters: {
            onPressingChange
        },
        hasCurrentFocusParameters: { onCurrentFocusedChanged, onCurrentFocusedInnerChanged },
        refElementParameters: { onElementChange, onMount, onUnmount },
    })));
}
;
//# sourceMappingURL=menu.js.map