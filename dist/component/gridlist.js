import { jsx as _jsx } from "preact/jsx-runtime";
import { createContext, createElement } from "preact";
import { focus, useStableCallback } from "preact-prop-helpers";
import { useContext, useImperativeHandle } from "preact/hooks";
import { useGridlist, useGridlistCell, useGridlistRow } from "../use-gridlist.js";
import { memoForwardRef, useDefault } from "./util.js";
const GridlistUntabbableContext = createContext(false);
const GridlistAriaPropNameContext = createContext("aria-selected");
const GridlistSelectionModeContext = createContext("activation");
const GridlistRowUntabbableContext = createContext(false);
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
export const Gridlist = memoForwardRef(function GridlistU({ collator, disableHomeEndKeys, noTypeahead, onTabbableIndexChange, groupingType, typeaheadTimeout, selectedIndex, navigatePastEnd, navigatePastStart, onSelectedIndexChange, pageNavigationSize, selectionLimit, untabbable, paginationMax, paginationMin, staggered, compare, getIndex, onTabbableColumnChange, ariaLabel, orientation, ariaPropName, selectionMode, render }, ref) {
    untabbable ??= false;
    ariaPropName ??= "aria-selected";
    selectionMode ??= "activation";
    const info = useGridlist({
        linearNavigationParameters: {
            disableHomeEndKeys: useDefault("disableHomeEndKeys", disableHomeEndKeys),
            navigatePastEnd: (navigatePastEnd ?? "wrap"),
            navigatePastStart: (navigatePastStart ?? "wrap"),
            pageNavigationSize: useDefault("pageNavigationSize", pageNavigationSize),
        },
        rovingTabIndexParameters: {
            onTabbableIndexChange: onTabbableIndexChange ?? null,
            untabbable,
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
            onSelectedIndexChange: onSelectedIndexChange ?? null,
            orientation: orientation ?? "vertical"
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
        },
        singleSelectionParameters: { ariaPropName, selectionMode }
    });
    useImperativeHandle(ref, () => info);
    return (_jsx(GridlistUntabbableContext.Provider, { value: untabbable, children: _jsx(GridlistAriaPropNameContext.Provider, { value: ariaPropName, children: _jsx(GridlistSelectionModeContext.Provider, { value: selectionMode, children: _jsx(GridlistContext.Provider, { value: info.context, children: render(info) }) }) }) }));
});
export const GridlistRow = memoForwardRef(function GridlistRowU({ index, collator, disabled, hidden, navigatePastEnd, navigatePastStart, noTypeahead, onTabbableIndexChange, selected, typeaheadTimeout, getSortValue, getText, render, initiallyTabbedIndex, untabbable, info: uinfo }, ref) {
    const context = useContext(GridlistContext);
    console.assert(context != null, `This GridlistRow is not contained within a Gridlist`);
    untabbable ||= false;
    const info = useGridlistRow({
        info: { index, hidden, disabled, ...uinfo },
        context,
        gridlistRowParameters: { selected: selected ?? null },
        sortableChildParameters: { getSortValue },
        textContentParameters: { getText: useDefault("getText", getText) },
        linearNavigationParameters: {
            navigatePastEnd: navigatePastEnd ?? "wrap",
            navigatePastStart: navigatePastStart ?? "wrap"
        },
        rovingTabIndexParametersG2R: { untabbable: useContext(GridlistUntabbableContext) },
        rovingTabIndexParametersR2C: { onTabbableIndexChange: onTabbableIndexChange ?? null, initiallyTabbedIndex: initiallyTabbedIndex ?? null, untabbable },
        singleSelectionParameters: { ariaPropName: useContext(GridlistAriaPropNameContext), selectionMode: useContext(GridlistSelectionModeContext) },
        typeaheadNavigationParameters: {
            collator: useDefault("collator", collator),
            noTypeahead: useDefault("noTypeahead", noTypeahead),
            typeaheadTimeout: useDefault("typeaheadTimeout", typeaheadTimeout)
        }
    });
    useImperativeHandle(ref, () => info);
    return _jsx(GridlistRowContext.Provider, { value: info.context, children: render(info) });
});
export const GridlistChild = memoForwardRef(function GridlistChild({ index, colSpan, focusSelf, hidden, getText, onPressSync, render, info: subInfo }, ref) {
    const context = useContext(GridlistRowContext);
    console.assert(context != null, `This GridlistChild is not contained within a GridlistRow that is contained within a Gridlist`);
    const defaultFocusSelf = useStableCallback((e) => { focus(e); }, []);
    const info = useGridlistCell({
        info: { index, hidden: hidden || false, focusSelf: (focusSelf ?? defaultFocusSelf), ...subInfo },
        context,
        gridNavigationCellParameters: { colSpan: colSpan ?? 1 },
        textContentParameters: { getText: useDefault("getText", getText) },
        pressParameters: { onPressSync },
        rovingTabIndexParameters: { untabbable: useContext(GridlistRowUntabbableContext) }
    });
    useImperativeHandle(ref, () => info);
    return render(info);
});
//# sourceMappingURL=gridlist.js.map