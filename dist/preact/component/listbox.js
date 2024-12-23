import { jsx as _jsx } from "preact/jsx-runtime";
import { assertEmptyObject, createContext, focus, identity, memo, useCallback, useCompleteListNavigationChildren, useContext, useEffect, useEnsureStability, useImperativeHandle, useMergedProps, useProcessedChild, useRefElement, useStableCallback } from "preact-prop-helpers";
import { useContextWithWarning } from "../props.js";
import { useListbox, useListboxItem } from "../use-listbox.js";
import { useComponent, useDefault } from "./util.js";
const ListboxContext = createContext(null);
const ListboxChildrenContext = createContext(null);
const ListboxChildContext = createContext(null);
const ListboxGroupContext = createContext(null);
export const GroupedListbox = /* @__PURE__ */ memo((function GroupedListbox({ ariaLabel, orientation, render, onElementChange, onMount, onUnmount, }) {
    const info = useListbox({
        labelParameters: { ariaLabel },
        linearNavigationParameters: {
            navigatePastEnd: "passthrough",
            navigatePastStart: "passthrough",
            disableHomeEndKeys: true,
            pageNavigationSize: 1,
            onNavigateLinear: null
        },
        paginatedChildrenParameters: { paginationMax: null, paginationMin: null },
        listboxParameters: { groupingType: "with-groups", orientation: orientation ?? "vertical" },
        rovingTabIndexParameters: { onTabbableIndexChange: null, untabbable: false },
        typeaheadNavigationParameters: {
            collator: null,
            noTypeahead: true,
            typeaheadTimeout: Infinity,
            onNavigateTypeahead: null
        },
        refElementParameters: { onElementChange, onMount, onUnmount },
        singleSelectionParameters: { singleSelectionMode: "disabled", singleSelectionAriaPropName: null },
        multiSelectionParameters: { multiSelectionMode: "disabled", multiSelectionAriaPropName: null, onSelectionChange: null },
        singleSelectionDeclarativeParameters: { onSingleSelectedIndexChange: null, singleSelectedIndex: null },
        processedIndexManglerParameters: {
            getSortValueAt: identity,
            compare: null,
            getIndex: useDefault("getIndex", null)
        }
    });
    return (_jsx(ListboxGroupContext.Provider, { value: info, children: render(info) }));
}));
export const Listbox = /* @__PURE__ */ memo((function Listbox({ ariaLabel, collator, disableHomeEndKeys, singleSelectedIndex, navigatePastEnd, navigatePastStart, noTypeahead, onSingleSelectedIndexChange, onTabbableIndexChange, pageNavigationSize, untabbable, typeaheadTimeout, orientation, onNavigateLinear, onNavigateTypeahead, onElementChange, onMount, onUnmount, render, imperativeHandle, singleSelectionAriaPropName, singleSelectionMode, multiSelectionAriaPropName, multiSelectionMode, onSelectionChange, paginationMax, paginationMin, getSortValueAt, compare, getIndex, ...void1 }) {
    const listboxGroupInfo = useContext(ListboxGroupContext);
    getSortValueAt ??= identity;
    useEnsureStability("Listbox", getSortValueAt);
    assertEmptyObject(void1);
    return useComponent(imperativeHandle, render, ListboxContext, useListbox({
        labelParameters: { ariaLabel },
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
        rovingTabIndexParameters: {
            onTabbableIndexChange,
            untabbable: untabbable ?? false
        },
        typeaheadNavigationParameters: {
            onNavigateTypeahead,
            collator: useDefault("collator", collator),
            noTypeahead: useDefault("noTypeahead", noTypeahead),
            typeaheadTimeout: useDefault("typeaheadTimeout", typeaheadTimeout)
        },
        refElementParameters: { onElementChange, onMount, onUnmount },
        singleSelectionParameters: { singleSelectionAriaPropName, singleSelectionMode: singleSelectionMode || "disabled" },
        singleSelectionDeclarativeParameters: { onSingleSelectedIndexChange, singleSelectedIndex },
        multiSelectionParameters: { multiSelectionAriaPropName, multiSelectionMode: multiSelectionMode || "disabled", onSelectionChange },
        processedIndexManglerParameters: { getSortValueAt, compare, getIndex: useDefault("getIndex", getIndex) }
    }));
}));
export const ListboxChildren = /* @__PURE__ */ memo((function ListboxChildren({ children, render, imperativeHandle, onAfterChildLayoutEffect, onChildrenCountChange, onChildrenMountChange, paginationMax, paginationMin, staggered, }) {
    const r = useCompleteListNavigationChildren({
        context: useContext(ListboxContext),
        managedChildrenParameters: {
            onAfterChildLayoutEffect,
            onChildrenCountChange,
            onChildrenMountChange
        },
        paginatedChildrenParameters: {
            paginationMax,
            paginationMin
        },
        rearrangeableChildrenParameters: {
            children,
        },
        staggeredChildrenParameters: {
            staggered: staggered || false
        }
    });
    return useComponent(imperativeHandle, render, ListboxChildContext, r);
}));
export const ListboxItem = /* @__PURE__ */ memo((function ListboxItemOuter({ index, render, imperativeHandle, onElementChange: oec1, onMount, onUnmount, getText, untabbable, allowRepeatPresses, excludeEnter, excludePointer, longPressThreshold, onPressingChange, onCurrentFocusedChanged, onCurrentFocusedInnerChanged, focusSelf, multiSelectionDisabled, singleSelectionDisabled, multiSelected, onMultiSelectedChange, onTextContentChange, cssProperty, duration, ...void1 }) {
    const context = useContextWithWarning(ListboxContext, "listbox");
    console.assert(context != null, `This ListboxItem is not contained within a Listbox`);
    assertEmptyObject(void1);
    const { propsStable, refElementReturn } = useRefElement({
        refElementParameters: {
            onElementChange: useStableCallback((...a) => { oec1?.(...a); oec2?.(...a); }),
            onMount,
            onUnmount
        }
    });
    const { props, refElementParameters: { onElementChange: oec2 }, ...i2 } = useProcessedChild({
        context: useContextWithWarning(ListboxChildContext, "ListboxChildren"),
        info: { index, getElement: refElementReturn.getElement },
        rearrangeableChildParameters: { cssProperty, duration }
    });
    const { managedChildReturn: { getChildren }, paginatedChildReturn: { hideBecausePaginated, parentIsPaginated }, staggeredChildReturn: { hideBecauseStaggered, parentIsStaggered, childUseEffect } } = i2;
    const props2 = useMergedProps(props, propsStable);
    // The odd ordering here is to avoid uncommon RoH violation
    const processedListboxItemReturn = {
        hidden: true,
        ...i2,
        props: props2,
        refElementReturn,
        managedChildReturn: { getChildren }
    };
    useImperativeHandle(imperativeHandle, () => processedListboxItemReturn);
    let retIfHidden = render(processedListboxItemReturn);
    if (hideBecausePaginated || hideBecauseStaggered) {
        return retIfHidden;
    }
    else {
        return (_jsx(ListboxItemInner, { index: index, render: render, allowRepeatPresses: allowRepeatPresses, excludeEnter: excludeEnter, excludePointer: excludePointer, focusSelf: focusSelf, getText: getText, imperativeHandle: imperativeHandle, longPressThreshold: longPressThreshold, multiSelected: multiSelected, multiSelectionDisabled: multiSelectionDisabled, onCurrentFocusedChanged: onCurrentFocusedChanged, onCurrentFocusedInnerChanged: onCurrentFocusedInnerChanged, onMount: onMount, onMultiSelectedChange: onMultiSelectedChange, onPressingChange: onPressingChange, onUnmount: onUnmount, singleSelectionDisabled: singleSelectionDisabled, untabbable: untabbable, hideBecausePaginated: hideBecausePaginated, hideBecauseStaggered: hideBecauseStaggered, parentIsPaginated: parentIsPaginated, parentIsStaggered: parentIsStaggered, childUseEffect: childUseEffect, onTextContentChange: onTextContentChange, props: props2, ...void1 }));
    }
}));
// Separated into its own component because hooks can't be if'd.
const ListboxItemInner = /* @__PURE__ */ memo((function ListboxItemInner({ getText, untabbable, index, render, allowRepeatPresses, excludeEnter, excludePointer, longPressThreshold, onPressingChange, onElementChange, onMount, onUnmount, onCurrentFocusedChanged, onCurrentFocusedInnerChanged, focusSelf, imperativeHandle, multiSelectionDisabled, singleSelectionDisabled, multiSelected, onMultiSelectedChange, hideBecausePaginated, hideBecauseStaggered, parentIsPaginated, parentIsStaggered, props: props1, childUseEffect, onTextContentChange, ...void1 }) {
    const context = useContextWithWarning(ListboxContext, "listbox");
    console.assert(context != null, `This ListboxItem is not contained within a Listbox`);
    const focusSelfDefault = useCallback((e) => { focus(e); }, []);
    assertEmptyObject(void1);
    useEffect(childUseEffect, [childUseEffect]);
    const { hasCurrentFocusReturn, managedChildReturn, multiSelectionChildReturn, pressReturn, props: props2, refElementReturn, rovingTabIndexChildReturn, singleSelectionChildReturn, textContentReturn } = useListboxItem({
        info: {
            index,
            untabbable: untabbable || false,
            focusSelf: focusSelf ?? focusSelfDefault,
        },
        context,
        listboxParameters: {},
        pressParameters: { allowRepeatPresses, excludeEnter, excludePointer, longPressThreshold, onPressingChange },
        textContentParameters: { getText: useDefault("getText", getText), onTextContentChange },
        hasCurrentFocusParameters: { onCurrentFocusedChanged, onCurrentFocusedInnerChanged, },
        refElementParameters: { onElementChange, onMount, onUnmount },
        singleSelectionChildParameters: { singleSelectionDisabled: singleSelectionDisabled || false },
        multiSelectionChildParameters: { multiSelectionDisabled: multiSelectionDisabled || false },
        multiSelectionChildDeclarativeParameters: { onMultiSelectedChange, multiSelected: multiSelected ?? null },
    });
    return useComponent(imperativeHandle, render, null, {
        hasCurrentFocusReturn,
        multiSelectionChildReturn,
        pressReturn,
        props: useMergedProps(props1, props2),
        refElementReturn,
        rovingTabIndexChildReturn,
        singleSelectionChildReturn,
        textContentReturn,
        managedChildReturn,
        staggeredChildReturn: { hideBecauseStaggered, parentIsStaggered },
        paginatedChildReturn: { hideBecausePaginated, parentIsPaginated }
    });
}));
//# sourceMappingURL=listbox.js.map