import { jsx as _jsx } from "preact/jsx-runtime";
import { createContext } from "preact";
import { focus } from "preact-prop-helpers";
import { memo } from "preact/compat";
import { useCallback, useContext } from "preact/hooks";
import { useContextWithWarning } from "../props.js";
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
            pageNavigationSize: 1,
            onNavigateLinear: null
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
            typeaheadTimeout: Infinity,
            onNavigateTypeahead: null
        },
        singleSelectionParameters: { ariaPropName: null, selectionMode: "disabled" }
    });
    info.context;
    return (_jsx(ListboxGroupContext.Provider, { value: info, children: render(info) }));
});
export const Listbox = memoForwardRef(function Listbox({ ariaLabel, collator, compare, disableHomeEndKeys, getIndex, selectedIndex, navigatePastEnd, navigatePastStart, noTypeahead, onSelectedIndexChange, onTabbableIndexChange, staggered, pageNavigationSize, paginationMax, paginationMin, selectionLimit, untabbable, typeaheadTimeout, orientation, ariaPropName, selectionMode, onNavigateLinear, onNavigateTypeahead, render }) {
    const listboxGroupInfo = useContext(ListboxGroupContext);
    ariaPropName ||= "aria-selected";
    selectionMode ||= "activation";
    untabbable ||= false;
    const info = useListbox({
        labelParameters: { ariaLabel },
        staggeredChildrenParameters: {
            staggered: staggered || false
        },
        linearNavigationParameters: {
            onNavigateLinear,
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
            onNavigateTypeahead,
            collator: useDefault("collator", collator),
            noTypeahead: useDefault("noTypeahead", noTypeahead),
            typeaheadTimeout: useDefault("typeaheadTimeout", typeaheadTimeout)
        },
        singleSelectionParameters: { ariaPropName, selectionMode }
    });
    return (_jsx(ListboxContext.Provider, { value: info.context, children: render(info) }));
});
export const ListboxItem = memoForwardRef(function ListboxItem({ unselectable, focusSelf, getText, untabbable, index, render, selected, getSortValue, allowRepeatPresses, excludeEnter, excludePointer, longPressThreshold, onPressingChange, onMultiSelect, ...subInfo }) {
    const context = useContextWithWarning(ListboxContext, "listbox");
    console.assert(context != null, `This ListboxItem is not contained within a Listbox`);
    const focusSelfDefault = useCallback((e) => { focus(e); }, []);
    focusSelf ??= focusSelfDefault;
    const info = useListboxItem({
        info: { index, untabbable: untabbable || false, unselectable: unselectable || false, focusSelf, ...subInfo },
        context,
        listboxParameters: { selected: selected ?? null, onMultiSelect: onMultiSelect || null },
        pressParameters: { focusSelf, allowRepeatPresses, excludeEnter, excludePointer, longPressThreshold, onPressingChange },
        sortableChildParameters: { getSortValue: getSortValue },
        textContentParameters: { getText: useDefault("getText", getText) },
    });
    return render(info);
});
//# sourceMappingURL=listbox.js.map