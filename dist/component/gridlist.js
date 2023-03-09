import { jsx as _jsx } from "preact/jsx-runtime";
import { createContext, createElement } from "preact";
import { useStableCallback } from "preact-prop-helpers";
import { useContext, useImperativeHandle } from "preact/hooks";
import { useGridlist, useGridlistCell, useGridlistRow } from "../use-gridlist.js";
import { memoForwardRef, useDefault } from "./util.js";
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
export const Gridlist = memoForwardRef(function GridlistU({ collator, disableArrowKeys, disableHomeEndKeys, noTypeahead, onTabbableIndexChange, groupingType, typeaheadTimeout, selectedIndex, navigatePastEnd, navigatePastStart, onSelectedIndexChange, pageNavigationSize, selectionLimit, untabbable, paginationMax, paginationMin, staggered, compare, getIndex, onTabbableColumnChange, ariaLabel, render }, ref) {
    const info = useGridlist({
        linearNavigationParameters: {
            disableArrowKeys: useDefault("disableArrowKeys", disableArrowKeys),
            disableHomeEndKeys: useDefault("disableHomeEndKeys", disableHomeEndKeys),
            navigatePastEnd: (navigatePastEnd ?? "wrap"),
            navigatePastStart: (navigatePastStart ?? "wrap"),
            pageNavigationSize: useDefault("pageNavigationSize", pageNavigationSize),
        },
        rovingTabIndexParameters: {
            onTabbableIndexChange: onTabbableIndexChange ?? null,
            untabbable: untabbable ?? false
        },
        staggeredChildrenParameters: { staggered: staggered || false },
        typeaheadNavigationParameters: {
            collator: useDefault("collator", collator),
            noTypeahead: useDefault("noTypeahead", noTypeahead),
            typeaheadTimeout: useDefault("typeaheadTimeout", typeaheadTimeout),
        },
        gridlistParameters: {
            selectionLimit,
            groupingType,
            selectedIndex,
            onSelectedIndexChange: onSelectedIndexChange ?? null
        },
        gridNavigationParameters: {
            onTabbableColumnChange: onTabbableColumnChange ?? null
        },
        labelParameters: {
            ariaLabel
        },
        rearrangeableChildrenParameters: {
            getIndex: useDefault("getIndex", getIndex)
        },
        sortableChildrenParameters: {
            compare: compare ?? null
        },
        paginatedChildrenParameters: {
            paginationMax: paginationMax ?? null,
            paginationMin: paginationMin ?? null
        }
    });
    useImperativeHandle(ref, () => info);
    return (_jsx(GridlistContext.Provider, { value: info.context, children: render(info) }));
});
export const GridlistRow = memoForwardRef(function GridlistRowU({ index, collator, disableArrowKeys, ariaPropName, disabled, hidden, navigatePastEnd, navigatePastStart, noTypeahead, onTabbableIndexChange, selected, selectionMode, typeaheadTimeout, getSortValue, getText, render, subInfo }, ref) {
    const context = useContext(GridlistContext);
    console.assert(context != null, `This GridlistRow is not contained within a Gridlist`);
    const info = useGridlistRow({
        completeGridNavigationRowParameters: { ...subInfo },
        context,
        managedChildParameters: { index },
        gridlistRowParameters: { selected: selected ?? null },
        rovingTabIndexChildParameters: { hidden: hidden ?? false },
        sortableChildParameters: { getSortValue },
        singleSelectionChildParameters: { disabled: disabled ?? false, ariaPropName, selectionMode: useDefault("selectionMode", selectionMode) },
        textContentParameters: { getText: useDefault("getText", getText) },
        linearNavigationParameters: {
            disableArrowKeys: useDefault("disableArrowKeys", disableArrowKeys),
            navigatePastEnd: navigatePastEnd ?? "wrap",
            navigatePastStart: navigatePastStart ?? "wrap"
        },
        rovingTabIndexParameters: {
            onTabbableIndexChange: onTabbableIndexChange ?? null
        },
        typeaheadNavigationParameters: {
            collator: useDefault("collator", collator),
            noTypeahead: useDefault("noTypeahead", noTypeahead),
            typeaheadTimeout: useDefault("typeaheadTimeout", typeaheadTimeout)
        }
    });
    useImperativeHandle(ref, () => info);
    return _jsx(GridlistRowContext.Provider, { value: info.context, children: render(info) });
});
export const GridlistChild = memoForwardRef(function GridlistChild({ index, colSpan, focusSelf, hidden, getText, onPressSync, render, subInfo }, ref) {
    const context = useContext(GridlistRowContext);
    console.assert(context != null, `This GridlistChild is not contained within a GridlistRow that is contained within a Gridlist`);
    const defaultFocusSelf = useStableCallback((e) => { e.focus?.(); }, []);
    const info = useGridlistCell({
        completeGridNavigationCellParameters: { focusSelf: (focusSelf ?? defaultFocusSelf), ...subInfo },
        context,
        gridNavigationCellParameters: { colSpan: colSpan ?? 1 },
        textContentParameters: { getText: useDefault("getText", getText) },
        managedChildParameters: { index },
        pressParameters: { onPressSync },
        rovingTabIndexChildParameters: { hidden: hidden ?? false }
    });
    useImperativeHandle(ref, () => info);
    return render(info);
});
//# sourceMappingURL=gridlist.js.map