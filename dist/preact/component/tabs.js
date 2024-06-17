import { jsx as _jsx } from "preact/jsx-runtime";
import { assertEmptyObject, createContext, focus, memo, useCallback, useImperativeHandle } from "preact-prop-helpers";
import { useContextWithWarning } from "../props.js";
import { useTab, useTabPanel, useTabs } from "../use-tabs.js";
import { useComponent, useDefault } from "./util.js";
const TabsContext = createContext(null);
const TabPanelsContext = createContext(null);
//const UntabbableContext = createContext(false);
//const SelectionModeContext = createContext<NonNullable<UseTabsParameters<any, any, any>["singleSelectionParameters"]["selectionMode"]>>("focus");
export const Tabs = memo((function Tabs({ ariaLabel, collator, disableHomeEndKeys, initiallySingleSelectedIndex, navigatePastEnd, navigatePastStart, noTypeahead, onSingleSelectedIndexChange, onTabbableIndexChange, orientation, pageNavigationSize, localStorageKey, singleSelectionMode, untabbable, typeaheadTimeout, role, onNavigateLinear, onNavigateTypeahead, imperativeHandle, onElementChange, onMount, onUnmount, render, ...void1 }) {
    untabbable ??= false;
    assertEmptyObject(void1);
    const info = useTabs({
        labelParameters: { ariaLabel },
        linearNavigationParameters: {
            onNavigateLinear,
            disableHomeEndKeys: useDefault("disableHomeEndKeys", disableHomeEndKeys),
            navigatePastEnd: navigatePastEnd ?? "wrap",
            navigatePastStart: navigatePastStart ?? "wrap",
            pageNavigationSize: useDefault("pageNavigationSize", pageNavigationSize)
        },
        rovingTabIndexParameters: {
            onTabbableIndexChange,
            untabbable
        },
        singleSelectionParameters: { initiallySingleSelectedIndex, onSingleSelectedIndexChange, singleSelectionMode: singleSelectionMode || "focus" },
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
    return (_jsx(TabsContext.Provider, { value: contextTabs, children: _jsx(TabPanelsContext.Provider, { value: contextPanels, children: render(info) }) }));
}));
export const Tab = memo((function Tab({ focusSelf, untabbable, index, getText, render, longPressThreshold, onPressingChange, imperativeHandle, onElementChange, onMount, onUnmount, onCurrentFocusedChanged, onCurrentFocusedInnerChanged, singleSelectionDisabled, onTextContentChange, info: uinfo, ...void1 }) {
    assertEmptyObject(void1);
    const context = useContextWithWarning(TabsContext, "tabs");
    console.assert(context != null, `This Tab is not contained within a Tabs component`);
    const focusSelfDefault = useCallback((e) => { focus(e); }, []);
    return useComponent(imperativeHandle, render, null, useTab({
        info: {
            index,
            untabbable: untabbable || false,
            focusSelf: focusSelf ?? focusSelfDefault,
            ...uinfo
        },
        context,
        hasCurrentFocusParameters: { onCurrentFocusedChanged, onCurrentFocusedInnerChanged },
        refElementParameters: { onElementChange, onMount, onUnmount },
        pressParameters: { focusSelf: focusSelfDefault, longPressThreshold, onPressingChange },
        textContentParameters: { getText: useDefault("getText", getText), onTextContentChange },
        singleSelectionChildParameters: { singleSelectionDisabled: singleSelectionDisabled || false, }
    }));
}));
export const TabPanel = memo((function TabPanel({ index, render, info: uinfo }) {
    const context = useContextWithWarning(TabPanelsContext, "tabs");
    const info = useTabPanel({
        context,
        info: { index, ...uinfo }
    });
    return render(info);
}));
//# sourceMappingURL=tabs.js.map