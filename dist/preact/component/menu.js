import { jsx as _jsx } from "preact/jsx-runtime";
import { assertEmptyObject, createContext, focus, identity, memo, useCallback, useContext, useEnsureStability } from "preact-prop-helpers";
import { useContextWithWarning } from "../props.js";
import { useMenu, useMenuItem } from "../use-menu.js";
import { ParentDepthContext, useComponent, useDefault } from "./util.js";
const MenuItemContext = createContext(null);
export const Menu = /* @__PURE__ */ memo((function Menu({ collator, disableHomeEndKeys, noTypeahead, typeaheadTimeout, orientation, singleSelectionAriaPropName, singleSelectionMode, untabbable, active, onDismiss, onElementChange, onMount, onUnmount, openDirection, onTabbableIndexChange, singleSelectedIndex, navigatePastEnd, navigatePastStart, onSingleSelectedIndexChange, multiSelectionAriaPropName, multiSelectionMode, onSelectionChange, pageNavigationSize, parentDepth, disabled, onOpen, onNavigateLinear, onNavigateTypeahead, getDocument, onActiveElementChange, onLastActiveElementChange, onWindowFocusedChange, getSortValueAt, render, imperativeHandle, compare, getIndex, ...void1 }) {
    getSortValueAt ??= identity;
    useEnsureStability("Menu", getSortValueAt);
    const defaultParentDepth = useContext(ParentDepthContext);
    let myDepth = (parentDepth ?? defaultParentDepth) + 1;
    untabbable ||= false;
    assertEmptyObject(void1);
    return (_jsx(ParentDepthContext.Provider, { value: myDepth, children: useComponent(imperativeHandle, render, MenuItemContext, useMenu({
            linearNavigationParameters: {
                onNavigateLinear,
                disableHomeEndKeys: useDefault("disableHomeEndKeys", disableHomeEndKeys),
                pageNavigationSize: useDefault("pageNavigationSize", pageNavigationSize),
                navigatePastEnd: navigatePastEnd ?? "wrap",
                navigatePastStart: navigatePastStart ?? "wrap"
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
                disabled: disabled || false
            },
            singleSelectionParameters: {
                singleSelectionAriaPropName: singleSelectionAriaPropName || "aria-selected",
                singleSelectionMode: singleSelectionMode || "disabled",
            },
            multiSelectionParameters: {
                multiSelectionAriaPropName,
                multiSelectionMode: multiSelectionMode || "disabled",
                onSelectionChange
            },
            singleSelectionDeclarativeParameters: {
                singleSelectedIndex,
                onSingleSelectedIndexChange,
            },
            processedIndexManglerParameters: {
                getSortValueAt,
                compare,
                getIndex: useDefault("getIndex", getIndex)
            }
        })) }));
}));
export const MenuItem = /* @__PURE__ */ memo((function MenuItem({ index, untabbable, onPress, getText, role, focusSelf, onPressingChange, render, imperativeHandle, onCurrentFocusedChanged, onCurrentFocusedInnerChanged, onElementChange, onMount, onUnmount, info: uinfo, initiallyMultiSelected, multiSelectionDisabled, onMultiSelectChange, singleSelectionDisabled, onTextContentChange, ...void1 }) {
    const context = useContextWithWarning(MenuItemContext, "menu");
    const defaultFocusSelf = useCallback((e) => focus(e), []);
    assertEmptyObject(void1);
    return (useComponent(imperativeHandle, render, null, useMenuItem({
        info: {
            index,
            untabbable: untabbable || false,
            focusSelf: focusSelf ?? defaultFocusSelf,
            ...uinfo
        },
        context,
        textContentParameters: {
            getText: useDefault("getText", getText),
            onTextContentChange,
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
        singleSelectionChildParameters: { singleSelectionDisabled: singleSelectionDisabled || false },
        multiSelectionChildParameters: { multiSelectionDisabled: multiSelectionDisabled || false, initiallyMultiSelected: initiallyMultiSelected || false, onMultiSelectChange }
    })));
}));
//# sourceMappingURL=menu.js.map