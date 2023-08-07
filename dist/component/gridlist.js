import { createContext, createElement } from "preact";
import { assertEmptyObject, focus, memo, returnZero, useStableCallback } from "preact-prop-helpers";
import { useImperativeHandle } from "preact/hooks";
import { useContextWithWarning } from "../props.js";
import { useGridlist, useGridlistCell, useGridlistRow } from "../use-gridlist.js";
import { useComponent, useDefault } from "./util.js";
const GridlistContext = createContext(null);
const GridlistRowContext = createContext(null);
export function defaultRenderGridlistRow({ tagGridlistRow, makePropsGridlistRow }) {
    return function (info) {
        return createElement(tagGridlistRow, (makePropsGridlistRow(info)));
    };
}
export function defaultRenderGridlistChild({ tagGridlistChild, makePropsGridlistChild }) {
    return function (info) {
        return createElement(tagGridlistChild, (makePropsGridlistChild(info)));
    };
}
export const Gridlist = (function Gridlist({ collator, disableHomeEndKeys, noTypeahead, onTabbableIndexChange, groupingType, typeaheadTimeout, singleSelectedIndex, navigatePastEnd, navigatePastStart, onSingleSelectedIndexChange, pageNavigationSize, untabbable, paginationMax, paginationMin, staggered, compare, getIndex, onTabbableColumnChange, ariaLabel, onNavigateLinear, onNavigateTypeahead, imperativeHandle, onElementChange, onMount, onUnmount, render, multiSelectionAriaPropName, multiSelectionMode, onSelectionChange, singleSelectionAriaPropName, singleSelectionMode, ...void1 }) {
    assertEmptyObject(void1);
    return useComponent(imperativeHandle, render, GridlistContext, useGridlist({
        linearNavigationParameters: {
            onNavigateLinear,
            disableHomeEndKeys: useDefault("disableHomeEndKeys", disableHomeEndKeys),
            navigatePastEnd: (navigatePastEnd ?? "wrap"),
            navigatePastStart: (navigatePastStart ?? "wrap"),
            pageNavigationSize: useDefault("pageNavigationSize", pageNavigationSize),
        },
        rovingTabIndexParameters: {
            onTabbableIndexChange,
            untabbable: untabbable || false
        },
        staggeredChildrenParameters: { staggered: staggered || false },
        typeaheadNavigationParameters: {
            onNavigateTypeahead,
            collator: useDefault("collator", collator),
            noTypeahead: useDefault("noTypeahead", noTypeahead),
            typeaheadTimeout: useDefault("typeaheadTimeout", typeaheadTimeout),
        },
        listboxParameters: {
            groupingType
        },
        gridNavigationParameters: {
            onTabbableColumnChange,
        },
        labelParameters: {
            ariaLabel
        },
        rearrangeableChildrenParameters: {
            getIndex: useDefault("getIndex", getIndex)
        },
        sortableChildrenParameters: {
            compare,
        },
        paginatedChildrenParameters: {
            paginationMax,
            paginationMin
        },
        singleSelectionParameters: { singleSelectionAriaPropName, singleSelectionMode: singleSelectionMode || "disabled" },
        multiSelectionParameters: { multiSelectionAriaPropName, multiSelectionMode: multiSelectionMode || "disabled", onSelectionChange },
        singleSelectionDeclarativeParameters: { onSingleSelectedIndexChange, singleSelectedIndex },
        refElementParameters: { onElementChange, onMount, onUnmount }
    }));
});
export const GridlistRow = memo(function GridlistRowU({ index, collator, untabbable, navigatePastEnd, navigatePastStart, noTypeahead, onTabbableIndexChange, selected, typeaheadTimeout, getText, render, initiallyTabbedIndex, onNavigateTypeahead, imperativeHandle, onCurrentFocusedChanged, onCurrentFocusedInnerChanged, info: uinfo, initiallyMultiSelected, multiSelectionDisabled, onMultiSelectChange, singleSelectionDisabled, ...void1 }) {
    const context = useContextWithWarning(GridlistContext, "gridlist");
    console.assert(context != null, `This GridlistRow is not contained within a Gridlist`);
    assertEmptyObject(void1);
    return useComponent(imperativeHandle, render, GridlistRowContext, useGridlistRow({
        info: {
            index,
            untabbable: untabbable || false,
            ...uinfo
        },
        context,
        gridlistRowParameters: { selected },
        textContentParameters: { getText: useDefault("getText", getText) },
        linearNavigationParameters: {
            navigatePastEnd: navigatePastEnd ?? "wrap",
            navigatePastStart: navigatePastStart ?? "wrap"
        },
        hasCurrentFocusParameters: {
            onCurrentFocusedChanged,
            onCurrentFocusedInnerChanged,
        },
        rovingTabIndexParameters: {
            onTabbableIndexChange,
            initiallyTabbedIndex,
            untabbable: untabbable || false,
        },
        typeaheadNavigationParameters: {
            onNavigateTypeahead,
            collator: useDefault("collator", collator),
            noTypeahead: useDefault("noTypeahead", noTypeahead),
            typeaheadTimeout: useDefault("typeaheadTimeout", typeaheadTimeout)
        },
        gridNavigationSelectionSortableRowParameters: { getSortableColumnIndex: returnZero },
        singleSelectionChildParameters: { singleSelectionDisabled: singleSelectionDisabled || false },
        multiSelectionChildParameters: { multiSelectionDisabled: multiSelectionDisabled || false, initiallyMultiSelected: initiallyMultiSelected || false, onMultiSelectChange }
    }));
});
export const GridlistChild = memo(function GridlistChild({ index, colSpan, focusSelf, untabbable, getText, onPressSync, longPressThreshold, onPressingChange, render, getSortValue, imperativeHandle, info: subInfo }) {
    const context = useContextWithWarning(GridlistRowContext, "gridlist row");
    console.assert(context != null, `This GridlistChild is not contained within a GridlistRow that is contained within a Gridlist`);
    const defaultFocusSelf = useStableCallback((e) => { focus(e); }, []);
    const info = useGridlistCell({
        info: {
            index: index,
            untabbable: untabbable || false,
            focusSelf: (focusSelf ?? defaultFocusSelf),
            getSortValue: getSortValue,
        },
        context,
        gridNavigationCellParameters: { colSpan: colSpan ?? 1 },
        textContentParameters: { getText: useDefault("getText", getText) },
        pressParameters: { onPressSync, longPressThreshold, onPressingChange }
    });
    useImperativeHandle(imperativeHandle, () => info);
    return render(info);
});
//# sourceMappingURL=gridlist.js.map