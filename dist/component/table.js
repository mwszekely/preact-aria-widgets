import { jsx as _jsx } from "preact/jsx-runtime";
import { createContext } from "preact";
import { focus, useStableCallback } from "preact-prop-helpers";
import { useImperativeHandle } from "preact/hooks";
import { useContextWithWarning } from "../props.js";
import { useTable, useTableCell, useTableRow, useTableSection } from "../use-table.js";
import { memoForwardRef, useDefault } from "./util.js";
const TableContext = createContext(null);
const TableSectionContext = createContext(null);
const TableRowContext = createContext(null);
export const Table = memoForwardRef(function TableU({ ariaLabel, selectionLimit, tagTable, render }, ref) {
    const info = useTable({
        labelParameters: { ariaLabel },
        tableParameters: { selectionLimit, tagTable, }
    });
    useImperativeHandle(ref, () => info);
    return _jsx(TableContext.Provider, { value: info.context, children: render(info) });
});
export const TableSection = memoForwardRef(function TableSection({ disableHomeEndKeys, getIndex, initiallySelectedIndex, untabbable, navigatePastEnd, navigatePastStart, onSelectedIndexChange, onTabbableColumnChange, onTabbableIndexChange, pageNavigationSize, paginationMax, paginationMin, staggered, render, location, ariaPropName, selectionMode, onNavigateLinear, collator, noTypeahead, onNavigateTypeahead, typeaheadTimeout, tagTableSection }) {
    untabbable = (untabbable ?? false);
    ariaPropName ??= "aria-selected";
    selectionMode ??= "activation";
    const info = useTableSection({
        gridNavigationParameters: { onTabbableColumnChange: onTabbableColumnChange ?? null },
        staggeredChildrenParameters: { staggered: staggered || false },
        typeaheadNavigationParameters: {
            onNavigateTypeahead,
            collator: useDefault("collator", collator),
            noTypeahead: useDefault("noTypeahead", noTypeahead),
            typeaheadTimeout: useDefault("typeaheadTimeout", typeaheadTimeout)
        },
        linearNavigationParameters: {
            onNavigateLinear,
            disableHomeEndKeys: useDefault("disableHomeEndKeys", disableHomeEndKeys),
            navigatePastEnd: navigatePastEnd ?? "wrap",
            navigatePastStart: navigatePastStart ?? "wrap",
            pageNavigationSize: useDefault("pageNavigationSize", pageNavigationSize)
        },
        paginatedChildrenParameters: {
            paginationMax: paginationMax ?? null,
            paginationMin: paginationMin ?? null
        },
        rearrangeableChildrenParameters: { getIndex: useDefault("getIndex", getIndex) },
        rovingTabIndexParameters: { onTabbableIndexChange: onTabbableIndexChange ?? null, untabbable },
        singleSelectionParameters: { initiallySelectedIndex: initiallySelectedIndex ?? null, onSelectedIndexChange: onSelectedIndexChange ?? null, ariaPropName, selectionMode },
        context: useContextWithWarning(TableContext, "table"),
        tableSectionParameters: { tagTableSection, location },
    });
    return (_jsx(TableSectionContext.Provider, { value: info.context, children: render(info) }));
});
export const TableRow = memoForwardRef(function TableRowU({ index, getText, tagTableRow, onTabbableIndexChange, navigatePastEnd, navigatePastStart, selected, unselectable, initiallyTabbedIndex, untabbable, render }, ref) {
    const cx1 = useContextWithWarning(TableSectionContext, "table section");
    console.assert(cx1 != null, `This TableRow is not contained within a TableSection`);
    untabbable ||= (false || cx1.rovingTabIndexContext.untabbable);
    const info = useTableRow({
        info: { index, unselectable: unselectable || false, untabbable: untabbable || false },
        context: cx1,
        textContentParameters: {
            getText: useDefault("getText", getText)
        },
        tableRowParameters: {
            selected: selected ?? null,
            tagTableRow
        },
        linearNavigationParameters: {
            navigatePastEnd: navigatePastEnd ?? "wrap",
            navigatePastStart: navigatePastStart ?? "wrap"
        },
        rovingTabIndexParameters: { onTabbableIndexChange: onTabbableIndexChange ?? null, initiallyTabbedIndex: initiallyTabbedIndex ?? null, untabbable },
    });
    useImperativeHandle(ref, () => info);
    return (_jsx(TableRowContext.Provider, { value: info.context, children: render(info) }));
});
export const TableCell = memoForwardRef(function TableCell({ index, getText, focusSelf, untabbable, tagTableCell, render, colSpan, getSortValue, }, ref) {
    const context = useContextWithWarning(TableRowContext, "table row");
    console.assert(context != null, `This TableCell is not contained within a TableRow`);
    const defaultFocusSelf = useStableCallback((e) => { focus(e); }, []);
    const info = useTableCell({
        info: { index, focusSelf: focusSelf ?? defaultFocusSelf, untabbable: untabbable || false, getSortValue },
        context,
        gridNavigationCellParameters: { colSpan: colSpan ?? 1 },
        tableCellParameters: { tagTableCell },
        textContentParameters: { getText: useDefault("getText", getText) }
    });
    useImperativeHandle(ref, () => info);
    return render(info);
});
//# sourceMappingURL=table.js.map