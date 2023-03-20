import { jsx as _jsx } from "preact/jsx-runtime";
import { createContext } from "preact";
import { useCallback, useContext, useImperativeHandle } from "preact/hooks";
import { useTab, useTabPanel, useTabs } from "../use-tabs.js";
import { memoForwardRef, useDefault } from "./util.js";
const TabsContext = createContext(null);
const TabPanelsContext = createContext(null);
export const Tabs = memoForwardRef(function Tabs({ ariaLabel, collator, compare, disableHomeEndKeys, getIndex, initiallySelectedIndex, navigatePastEnd, navigatePastStart, noTypeahead, onSelectedIndexChange, onTabbableIndexChange, orientation, staggered, pageNavigationSize, localStorageKey, 
//groupingType,
untabbable, typeaheadTimeout, role, render }, ref) {
    const info = useTabs({
        labelParameters: { ariaLabel },
        staggeredChildrenParameters: { staggered: staggered || false },
        linearNavigationParameters: {
            disableHomeEndKeys: useDefault("disableHomeEndKeys", disableHomeEndKeys),
            navigatePastEnd: navigatePastEnd ?? "wrap",
            navigatePastStart: navigatePastStart ?? "wrap",
            pageNavigationSize: useDefault("pageNavigationSize", pageNavigationSize)
        },
        rearrangeableChildrenParameters: { getIndex: useDefault("getIndex", getIndex) },
        rovingTabIndexParameters: {
            onTabbableIndexChange: onTabbableIndexChange ?? null,
            untabbable: untabbable ?? false
        },
        singleSelectionParameters: { initiallySelectedIndex: initiallySelectedIndex ?? 0, onSelectedIndexChange: onSelectedIndexChange ?? null },
        sortableChildrenParameters: { compare: compare ?? null },
        tabsParameters: { orientation, role, localStorageKey: localStorageKey ?? null },
        typeaheadNavigationParameters: {
            collator: useDefault("collator", collator),
            noTypeahead: useDefault("noTypeahead", noTypeahead),
            typeaheadTimeout: useDefault("typeaheadTimeout", typeaheadTimeout)
        }
    });
    const { contextPanels, contextTabs } = info;
    useImperativeHandle(ref, () => info);
    return (_jsx(TabsContext.Provider, { value: contextTabs, children: _jsx(TabPanelsContext.Provider, { value: contextPanels, children: render(info) }) }));
});
export const Tab = memoForwardRef(function Tab({ disabled, focusSelf, hidden, index, getText, getSortValue, render, selectionMode, info: uinfo }, ref) {
    const context = useContext(TabsContext);
    console.assert(context != null, `This Tab is not contained within a Tabs component`);
    const focusSelfDefault = useCallback((e) => { e?.focus(); }, []);
    const info = useTab({
        info: { index, focusSelf: focusSelf ?? focusSelfDefault, ...uinfo },
        context,
        rovingTabIndexChildParameters: { hidden: hidden ?? false },
        sortableChildParameters: { getSortValue },
        singleSelectionChildParameters: { disabled: disabled ?? false, selectionMode: selectionMode ?? "focus" },
        textContentParameters: { getText: useDefault("getText", getText) }
    });
    useImperativeHandle(ref, () => info);
    return render(info);
});
export function TabPanel({ index, render, info: uinfo }) {
    const context = useContext(TabPanelsContext);
    const info = useTabPanel({
        context,
        info: { index, ...uinfo }
    });
    return render(info);
}
//# sourceMappingURL=tabs.js.map