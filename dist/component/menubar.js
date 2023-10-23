import { jsx as _jsx } from "preact/jsx-runtime";
import { createContext } from "preact";
import { assertEmptyObject, focus, memo } from "preact-prop-helpers";
import { useCallback, useImperativeHandle } from "preact/hooks";
import { useContextWithWarning } from "../props.js";
import { useMenubar, useMenubarChild } from "../use-menubar.js";
import { useComponent, useDefault } from "./util.js";
export const MenubarItemContext = createContext(null);
export const Menubar = memo((function Menubar({ render, collator, disableHomeEndKeys, navigatePastEnd, navigatePastStart, pageNavigationSize, orientation, noTypeahead, untabbable, onTabbableIndexChange, disabled, singleSelectedIndex, onSingleSelectedIndexChange, typeaheadTimeout, role, ariaLabel, multiSelectionAriaPropName, multiSelectionMode, onSelectionChange, singleSelectionAriaPropName, singleSelectionMode, onNavigateLinear, onNavigateTypeahead, imperativeHandle, onElementChange, onMount, onUnmount, ...void1 }) {
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
            role: role ?? "menubar",
            disabled: disabled || false
        },
        rovingTabIndexParameters: {
            onTabbableIndexChange,
            untabbable: untabbable || false
        },
        typeaheadNavigationParameters: {
            onNavigateTypeahead,
            collator: useDefault("collator", collator),
            noTypeahead: useDefault("noTypeahead", noTypeahead),
            typeaheadTimeout: useDefault("typeaheadTimeout", typeaheadTimeout)
        },
        labelParameters: {
            ariaLabel
        },
        singleSelectionParameters: {
            singleSelectionAriaPropName,
            singleSelectionMode: singleSelectionMode || "activation",
        },
        multiSelectionParameters: {
            multiSelectionAriaPropName,
            multiSelectionMode: multiSelectionMode || "activation",
            onSelectionChange
        },
        singleSelectionDeclarativeParameters: {
            singleSelectedIndex,
            onSingleSelectedIndexChange
        },
        refElementParameters: { onElementChange, onMount, onUnmount }
    });
    useImperativeHandle(imperativeHandle, () => info);
    return (_jsx(MenubarItemContext.Provider, { value: info.contextChildren, children: render(info) }));
}));
export const MenubarItem = memo((function MenubarItem({ index, render, focusSelf, untabbable, getText, onPress, onPressingChange, role, imperativeHandle, onCurrentFocusedChanged, onCurrentFocusedInnerChanged, onElementChange, onMount, onUnmount, info: uinfo, initiallyMultiSelected, multiSelectionDisabled, onMultiSelectChange, singleSelectionDisabled, onTextContentChange, ...void1 }) {
    const defaultFocusSelf = useCallback((e) => focus(e), []);
    assertEmptyObject(void1);
    return useComponent(imperativeHandle, render, null, useMenubarChild({
        info: { index, untabbable: untabbable || false, focusSelf: focusSelf ?? defaultFocusSelf, ...uinfo },
        context: useContextWithWarning(MenubarItemContext, "menubar"),
        textContentParameters: { getText: useDefault("getText", getText), onTextContentChange },
        menuItemParameters: { onPress: onPress ?? null, role: role ?? "menuitem" },
        pressParameters: { onPressingChange },
        hasCurrentFocusParameters: { onCurrentFocusedChanged, onCurrentFocusedInnerChanged },
        refElementParameters: { onElementChange, onMount, onUnmount },
        singleSelectionChildParameters: { singleSelectionDisabled: singleSelectionDisabled || false },
        multiSelectionChildParameters: { multiSelectionDisabled: multiSelectionDisabled || false, initiallyMultiSelected: initiallyMultiSelected || false, onMultiSelectChange }
    }));
}));
//# sourceMappingURL=menubar.js.map