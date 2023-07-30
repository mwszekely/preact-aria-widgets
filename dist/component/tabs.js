import { jsx as _jsx } from "preact/jsx-runtime";
import { createContext } from "preact";
import { assertEmptyObject, focus, memo } from "preact-prop-helpers";
import { useCallback, useImperativeHandle } from "preact/hooks";
import { useContextWithWarning } from "../props.js";
import { useTab, useTabPanel, useTabs } from "../use-tabs.js";
import { useComponent, useDefault } from "./util.js";
const TabsContext = createContext(null);
const TabPanelsContext = createContext(null);
const UntabbableContext = createContext(false);
const SelectionModeContext = createContext("focus");
export const Tabs = memo(function Tabs({ ariaLabel, collator, compare, disableHomeEndKeys, getIndex, initiallySelectedIndex, navigatePastEnd, navigatePastStart, noTypeahead, onSelectedIndexChange, onTabbableIndexChange, orientation, staggered, pageNavigationSize, localStorageKey, selectionMode, untabbable, typeaheadTimeout, role, onNavigateLinear, onNavigateTypeahead, imperativeHandle, onElementChange, onMount, onUnmount, render, ...void1 }) {
    untabbable ??= false;
    selectionMode ??= "focus";
    assertEmptyObject(void1);
    const info = useTabs({
        labelParameters: { ariaLabel },
        staggeredChildrenParameters: { staggered: staggered || false },
        linearNavigationParameters: {
            onNavigateLinear,
            disableHomeEndKeys: useDefault("disableHomeEndKeys", disableHomeEndKeys),
            navigatePastEnd: navigatePastEnd ?? "wrap",
            navigatePastStart: navigatePastStart ?? "wrap",
            pageNavigationSize: useDefault("pageNavigationSize", pageNavigationSize)
        },
        rearrangeableChildrenParameters: { getIndex: useDefault("getIndex", getIndex) },
        rovingTabIndexParameters: {
            onTabbableIndexChange,
            untabbable
        },
        singleSelectionParameters: { initiallySelectedIndex, onSelectedIndexChange, selectionMode },
        sortableChildrenParameters: { compare },
        tabsParameters: {
            orientation,
            role,
            localStorageKey
        },
        typeaheadNavigationParameters: {
            onNavigateTypeahead,
            collator: useDefault("collator", collator),
            noTypeahead: useDefault("noTypeahead", noTypeahead),
            typeaheadTimeout: useDefault("typeaheadTimeout", typeaheadTimeout)
        },
        refElementParameters: { onElementChange, onMount, onUnmount }
    });
    const { contextPanels, contextTabs } = info;
    useImperativeHandle(imperativeHandle, () => info);
    return (_jsx(UntabbableContext.Provider, { value: untabbable, children: _jsx(SelectionModeContext.Provider, { value: selectionMode, children: _jsx(TabsContext.Provider, { value: contextTabs, children: _jsx(TabPanelsContext.Provider, { value: contextPanels, children: render(info) }) }) }) }));
});
export function Tab({ unselectable, focusSelf, untabbable, index, getText, render, longPressThreshold, onPressingChange, getSortValue, imperativeHandle, onElementChange, onMount, onUnmount, onCurrentFocusedChanged, onCurrentFocusedInnerChanged, info: uinfo }) {
    const context = useContextWithWarning(TabsContext, "tabs");
    console.assert(context != null, `This Tab is not contained within a Tabs component`);
    const focusSelfDefault = useCallback((e) => { focus(e); }, []);
    return useComponent(imperativeHandle, render, null, useTab({
        info: {
            index,
            unselectable: unselectable || false,
            untabbable: untabbable || false,
            focusSelf: focusSelf ?? focusSelfDefault,
            getSortValue,
            ...uinfo
        },
        context,
        hasCurrentFocusParameters: { onCurrentFocusedChanged, onCurrentFocusedInnerChanged },
        refElementParameters: { onElementChange, onMount, onUnmount },
        pressParameters: { focusSelf: focusSelfDefault, longPressThreshold, onPressingChange },
        textContentParameters: { getText: useDefault("getText", getText) }
    }));
}
export function TabPanel({ index, render, info: uinfo }) {
    const context = useContextWithWarning(TabPanelsContext, "tabs");
    const info = useTabPanel({
        context,
        info: { index, ...uinfo }
    });
    return render(info);
}
//# sourceMappingURL=tabs.js.map