import { jsx as _jsx } from "preact/jsx-runtime";
import { createContext } from "preact";
import { memo } from "preact/compat";
import { useCallback, useContext } from "preact/hooks";
import { useListbox, useListboxItem } from "../use-listbox.js";
import { memoForwardRef, useDefault } from "./util.js";
const ListboxContext = createContext(null);
const ListboxGroupContext = createContext(null);
export const GroupedListbox = memo(function GroupedListbox({ ariaLabel, selectionLimit, orientation, render }) {
    const info = useListbox({
        labelParameters: { ariaLabel },
        linearNavigationParameters: {
            navigatePastEnd: "passthrough",
            navigatePastStart: "passthrough",
            disableHomeEndKeys: true,
            pageNavigationSize: 1
        },
        staggeredChildrenParameters: { staggered: false },
        paginatedChildrenParameters: { paginationMax: null, paginationMin: null },
        listboxParameters: { selectionLimit, groupingType: "with-groups", selectedIndex: null, onSelectedIndexChange: null, orientation: orientation ?? "vertical" },
        rearrangeableChildrenParameters: { getIndex: useDefault("getIndex", undefined) },
        rovingTabIndexParameters: { onTabbableIndexChange: null, untabbable: false },
        sortableChildrenParameters: { compare: null },
        typeaheadNavigationParameters: {
            collator: null,
            noTypeahead: true,
            typeaheadTimeout: Infinity
        },
        singleSelectionParameters: { ariaPropName: null, selectionMode: "disabled" }
    });
    info.context;
    return (_jsx(ListboxGroupContext.Provider, { value: info, children: render(info) }));
});
export const Listbox = memoForwardRef(function Listbox({ ariaLabel, collator, compare, disableHomeEndKeys, getIndex, selectedIndex, navigatePastEnd, navigatePastStart, noTypeahead, onSelectedIndexChange, onTabbableIndexChange, staggered, pageNavigationSize, paginationMax, paginationMin, selectionLimit, untabbable, typeaheadTimeout, orientation, ariaPropName, selectionMode, render }) {
    const listboxGroupInfo = useContext(ListboxGroupContext);
    const info = useListbox({
        labelParameters: { ariaLabel },
        staggeredChildrenParameters: {
            staggered: staggered || false
        },
        linearNavigationParameters: {
            navigatePastEnd: navigatePastEnd ?? "wrap",
            navigatePastStart: navigatePastStart ?? "wrap",
            disableHomeEndKeys: useDefault("disableHomeEndKeys", disableHomeEndKeys),
            pageNavigationSize: useDefault("pageNavigationSize", pageNavigationSize)
        },
        paginatedChildrenParameters: {
            paginationMax: paginationMax ?? null,
            paginationMin: paginationMin ?? null
        },
        listboxParameters: { selectionLimit, groupingType: listboxGroupInfo == null ? "without-groups" : "group", selectedIndex, onSelectedIndexChange: onSelectedIndexChange ?? null, orientation: orientation ?? "vertical" },
        rearrangeableChildrenParameters: { getIndex: useDefault("getIndex", getIndex) },
        rovingTabIndexParameters: { onTabbableIndexChange: onTabbableIndexChange ?? null, untabbable: untabbable ?? false },
        sortableChildrenParameters: { compare: compare ?? null },
        typeaheadNavigationParameters: {
            collator: useDefault("collator", collator),
            noTypeahead: useDefault("noTypeahead", noTypeahead),
            typeaheadTimeout: useDefault("typeaheadTimeout", typeaheadTimeout)
        },
        singleSelectionParameters: { ariaPropName: ariaPropName || "aria-selected", selectionMode: selectionMode || "activation" }
    });
    return (_jsx(ListboxContext.Provider, { value: info.context, children: render(info) }));
});
export const ListboxItem = memoForwardRef(function ListboxItem({ disabled, focusSelf, onPressSync, getText, hidden, index, render, selected, getSortValue, ...subInfo }) {
    const context = useContext(ListboxContext);
    console.assert(context != null, `This ListboxItem is not contained within a Listbox`);
    const focusSelfDefault = useCallback((e) => { e?.focus(); }, []);
    const info = useListboxItem({
        info: { index, hidden: hidden || false, disabled: disabled || false, focusSelf: focusSelf ?? focusSelfDefault, ...subInfo },
        context,
        listboxParameters: { selected: selected ?? null, },
        pressParameters: { onPressSync },
        sortableChildParameters: { getSortValue: getSortValue },
        textContentParameters: { getText: useDefault("getText", getText) },
    });
    return render(info);
});
//# sourceMappingURL=listbox.js.map