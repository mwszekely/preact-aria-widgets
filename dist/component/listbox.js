import { jsx as _jsx } from "preact/jsx-runtime";
import { createContext } from "preact";
import { assertEmptyObject, focus } from "preact-prop-helpers";
import { memo } from "preact/compat";
import { useCallback, useContext } from "preact/hooks";
import { useContextWithWarning } from "../props.js";
import { useListbox, useListboxItem } from "../use-listbox.js";
import { useComponent, useDefault } from "./util.js";
const ListboxContext = createContext(null);
const ListboxGroupContext = createContext(null);
export const GroupedListbox = memo(function GroupedListbox({ ariaLabel, orientation, render, onElementChange, onMount, onUnmount }) {
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
        listboxParameters: { groupingType: "with-groups", orientation: orientation ?? "vertical" },
        rearrangeableChildrenParameters: { getIndex: useDefault("getIndex", undefined) },
        rovingTabIndexParameters: { onTabbableIndexChange: null, untabbable: false },
        sortableChildrenParameters: { compare: null },
        typeaheadNavigationParameters: {
            collator: null,
            noTypeahead: true,
            typeaheadTimeout: Infinity,
            onNavigateTypeahead: null
        },
        refElementParameters: { onElementChange, onMount, onUnmount },
        singleSelectionParameters: { singleSelectionMode: "disabled", singleSelectionAriaPropName: null },
        multiSelectionParameters: { multiSelectionMode: "disabled", multiSelectionAriaPropName: null, onSelectionChange: null },
        singleSelectionDeclarativeParameters: { onSingleSelectedIndexChange: null, singleSelectedIndex: null }
    });
    return (_jsx(ListboxGroupContext.Provider, { value: info, children: render(info) }));
});
export const Listbox = memo(function Listbox({ ariaLabel, collator, compare, disableHomeEndKeys, getIndex, singleSelectedIndex, navigatePastEnd, navigatePastStart, noTypeahead, onSingleSelectedIndexChange, onTabbableIndexChange, staggered, pageNavigationSize, paginationMax, paginationMin, untabbable, typeaheadTimeout, orientation, onNavigateLinear, onNavigateTypeahead, onElementChange, onMount, onUnmount, render, imperativeHandle, singleSelectionAriaPropName, singleSelectionMode, multiSelectionAriaPropName, multiSelectionMode, onSelectionChange, ...void1 }) {
    const listboxGroupInfo = useContext(ListboxGroupContext);
    assertEmptyObject(void1);
    return useComponent(imperativeHandle, render, ListboxContext, useListbox({
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
            paginationMax,
            paginationMin
        },
        listboxParameters: {
            groupingType: listboxGroupInfo == null ? "without-groups" : "group",
            orientation: orientation ?? "vertical"
        },
        rearrangeableChildrenParameters: { getIndex: useDefault("getIndex", getIndex) },
        rovingTabIndexParameters: {
            onTabbableIndexChange,
            untabbable: untabbable ?? false
        },
        sortableChildrenParameters: { compare },
        typeaheadNavigationParameters: {
            onNavigateTypeahead,
            collator: useDefault("collator", collator),
            noTypeahead: useDefault("noTypeahead", noTypeahead),
            typeaheadTimeout: useDefault("typeaheadTimeout", typeaheadTimeout)
        },
        refElementParameters: { onElementChange, onMount, onUnmount },
        singleSelectionParameters: { singleSelectionAriaPropName, singleSelectionMode: singleSelectionMode || "disabled" },
        singleSelectionDeclarativeParameters: { onSingleSelectedIndexChange, singleSelectedIndex },
        multiSelectionParameters: { multiSelectionAriaPropName, multiSelectionMode: multiSelectionMode || "disabled", onSelectionChange }
    }));
});
export const ListboxItem = memo(function ListboxItem({ getText, untabbable, index, render, getSortValue, allowRepeatPresses, excludeEnter, excludePointer, longPressThreshold, onPressingChange, onElementChange, onMount, onUnmount, onCurrentFocusedChanged, onCurrentFocusedInnerChanged, focusSelf, imperativeHandle, multiSelectionDisabled, singleSelectionDisabled, multiSelected, onMultiSelectedChange, ...void1 }) {
    const context = useContextWithWarning(ListboxContext, "listbox");
    console.assert(context != null, `This ListboxItem is not contained within a Listbox`);
    const focusSelfDefault = useCallback((e) => { focus(e); }, []);
    assertEmptyObject(void1);
    return useComponent(imperativeHandle, render, null, useListboxItem({
        info: {
            index,
            untabbable: untabbable || false,
            focusSelf: focusSelf ?? focusSelfDefault,
            getSortValue
        },
        context,
        listboxParameters: {},
        pressParameters: { allowRepeatPresses, excludeEnter, excludePointer, longPressThreshold, onPressingChange },
        textContentParameters: { getText: useDefault("getText", getText) },
        hasCurrentFocusParameters: { onCurrentFocusedChanged, onCurrentFocusedInnerChanged, },
        refElementParameters: { onElementChange, onMount, onUnmount },
        singleSelectionChildParameters: { singleSelectionDisabled: singleSelectionDisabled || false },
        multiSelectionChildParameters: { multiSelectionDisabled: multiSelectionDisabled || false },
        multiSelectionChildDeclarativeParameters: { onMultiSelectedChange, multiSelected: multiSelected || false },
    }));
});
//# sourceMappingURL=listbox.js.map