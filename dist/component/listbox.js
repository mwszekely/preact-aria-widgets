import { jsx as _jsx } from "preact/jsx-runtime";
import { createContext } from "preact";
import { memo } from "preact/compat";
import { useCallback, useContext } from "preact/hooks";
import { useListbox, useListboxItem } from "../use-listbox.js";
import { memoForwardRef, useDefault } from "./util.js";
const ListboxContext = createContext(null);
const ListboxGroupContext = createContext(null);
export const GroupedListbox = memo(function GroupedListbox({ ariaLabel, selectionLimit, navigationDirection, render }) {
    const info = useListbox({
        labelParameters: { ariaLabel },
        linearNavigationParameters: {
            navigatePastEnd: "passthrough",
            navigatePastStart: "passthrough",
            navigationDirection,
            disableArrowKeys: false,
            disableHomeEndKeys: true,
            pageNavigationSize: 1
        },
        staggeredChildrenParameters: { staggered: false },
        paginatedChildrenParameters: { paginationMax: null, paginationMin: null },
        listboxParameters: { selectionLimit, groupingType: "with-groups", selectedIndex: null, onSelectedIndexChange: null },
        rearrangeableChildrenParameters: { getIndex: useDefault("getIndex", undefined) },
        rovingTabIndexParameters: { onTabbableIndexChange: null, untabbable: false },
        sortableChildrenParameters: { compare: null },
        typeaheadNavigationParameters: {
            collator: null,
            noTypeahead: true,
            typeaheadTimeout: Infinity
        }
    });
    info.context;
    return (_jsx(ListboxGroupContext.Provider, { value: info, children: render(info) }));
});
export const Listbox = memoForwardRef(function Listbox({ ariaLabel, collator, compare, disableArrowKeys, disableHomeEndKeys, getIndex, selectedIndex, navigatePastEnd, navigatePastStart, navigationDirection, noTypeahead, onSelectedIndexChange, onTabbableIndexChange, staggered, pageNavigationSize, paginationMax, paginationMin, selectionLimit, untabbable, typeaheadTimeout, render }) {
    const listboxGroupInfo = useContext(ListboxGroupContext);
    const info = useListbox({
        labelParameters: { ariaLabel },
        staggeredChildrenParameters: {
            staggered: staggered || false
        },
        linearNavigationParameters: {
            navigatePastEnd: navigatePastEnd ?? "wrap",
            navigatePastStart: navigatePastStart ?? "wrap",
            navigationDirection,
            disableArrowKeys: useDefault("disableArrowKeys", disableArrowKeys),
            disableHomeEndKeys: useDefault("disableHomeEndKeys", disableHomeEndKeys),
            pageNavigationSize: useDefault("pageNavigationSize", pageNavigationSize)
        },
        paginatedChildrenParameters: {
            paginationMax: paginationMax ?? null,
            paginationMin: paginationMin ?? null
        },
        listboxParameters: { selectionLimit, groupingType: listboxGroupInfo == null ? "without-groups" : "group", selectedIndex, onSelectedIndexChange: onSelectedIndexChange ?? null },
        rearrangeableChildrenParameters: { getIndex: useDefault("getIndex", getIndex) },
        rovingTabIndexParameters: { onTabbableIndexChange: onTabbableIndexChange ?? null, untabbable: untabbable ?? false },
        sortableChildrenParameters: { compare: compare ?? null },
        typeaheadNavigationParameters: {
            collator: useDefault("collator", collator),
            noTypeahead: useDefault("noTypeahead", noTypeahead),
            typeaheadTimeout: useDefault("typeaheadTimeout", typeaheadTimeout)
        }
    });
    return (_jsx(ListboxContext.Provider, { value: info.context, children: render(info) }));
});
export const ListboxItem = memoForwardRef(function ListboxItem({ ariaPropName, disabled, focusSelf, onPressSync, getText, hidden, index, render, selected, selectionMode, getSortValue, ...subInfo }) {
    const context = useContext(ListboxContext);
    console.assert(context != null, `This ListboxItem is not contained within a Listbox`);
    const focusSelfDefault = useCallback((e) => { e?.focus(); }, []);
    const info = useListboxItem({
        completeListNavigationChildParameters: { focusSelf: focusSelf ?? focusSelfDefault, ...subInfo },
        context,
        listboxParameters: { selected: selected ?? null, },
        pressParameters: { onPressSync },
        managedChildParameters: { index },
        rovingTabIndexChildParameters: { hidden: hidden ?? false },
        sortableChildParameters: { getSortValue: getSortValue },
        textContentParameters: { getText: useDefault("getText", getText) },
        singleSelectionChildParameters: {
            disabled: disabled ?? false,
            ariaPropName,
            selectionMode: useDefault("selectionMode", selectionMode)
        }
    });
    return render(info);
});
//# sourceMappingURL=listbox.js.map