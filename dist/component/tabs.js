import { jsx as _jsx } from "preact/jsx-runtime";
import { createContext } from "preact";
import { focus } from "preact-prop-helpers";
import { useCallback, useImperativeHandle } from "preact/hooks";
import { useContextWithWarning } from "../props.js";
import { useTab, useTabPanel, useTabs } from "../use-tabs.js";
import { memoForwardRef, useDefault } from "./util.js";
const TabsContext = createContext(null);
const TabPanelsContext = createContext(null);
const UntabbableContext = createContext(false);
//const AriaPropNameContext = createContext<UseTabsParameters<any, any, any, any>["singleSelectionParameters"]["ariaPropName"]>("aria-selected")
const SelectionModeContext = createContext("focus");
export const Tabs = memoForwardRef(function Tabs({ ariaLabel, collator, compare, disableHomeEndKeys, getIndex, initiallySelectedIndex, navigatePastEnd, navigatePastStart, noTypeahead, onSelectedIndexChange, onTabbableIndexChange, orientation, staggered, pageNavigationSize, localStorageKey, selectionMode, 
//groupingType,
untabbable, typeaheadTimeout, role, onNavigateLinear, onNavigateTypeahead, render }, ref) {
    untabbable ??= false;
    selectionMode ??= "focus";
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
            onTabbableIndexChange: onTabbableIndexChange ?? null,
            untabbable
        },
        singleSelectionParameters: { initiallySelectedIndex: initiallySelectedIndex ?? 0, onSelectedIndexChange: onSelectedIndexChange ?? null, selectionMode },
        sortableChildrenParameters: { compare: compare ?? null },
        tabsParameters: { orientation, role, localStorageKey: localStorageKey ?? null },
        typeaheadNavigationParameters: {
            onNavigateTypeahead,
            collator: useDefault("collator", collator),
            noTypeahead: useDefault("noTypeahead", noTypeahead),
            typeaheadTimeout: useDefault("typeaheadTimeout", typeaheadTimeout)
        }
    });
    const { contextPanels, contextTabs } = info;
    useImperativeHandle(ref, () => info);
    return (_jsx(UntabbableContext.Provider, { value: untabbable, children: _jsx(SelectionModeContext.Provider, { value: selectionMode, children: _jsx(TabsContext.Provider, { value: contextTabs, children: _jsx(TabPanelsContext.Provider, { value: contextPanels, children: render(info) }) }) }) }));
});
export const Tab = memoForwardRef(function Tab({ unselectable, focusSelf, untabbable, index, getText, getSortValue, render, allowRepeatPresses, excludeEnter, excludePointer, longPressThreshold, onPressingChange, info: uinfo }, ref) {
    const context = useContextWithWarning(TabsContext, "tabs");
    console.assert(context != null, `This Tab is not contained within a Tabs component`);
    const focusSelfDefault = useCallback((e) => { focus(e); }, []);
    const info = useTab({
        info: { index, unselectable, untabbable, focusSelf: focusSelf ?? focusSelfDefault, ...uinfo },
        context,
        pressParameters: { focusSelf: focusSelfDefault, allowRepeatPresses, excludeEnter, excludePointer, longPressThreshold, onPressingChange },
        sortableChildParameters: { getSortValue },
        textContentParameters: { getText: useDefault("getText", getText) }
    });
    useImperativeHandle(ref, () => info);
    return render(info);
});
export function TabPanel({ index, render, info: uinfo }) {
    const context = useContextWithWarning(TabPanelsContext, "tabs");
    const info = useTabPanel({
        context,
        info: { index, ...uinfo }
    });
    return render(info);
}
//# sourceMappingURL=tabs.js.map