import { jsx as _jsx } from "preact/jsx-runtime";
import { createContext } from "preact";
import { useStableCallback } from "preact-prop-helpers";
import { useContext, useImperativeHandle } from "preact/hooks";
import { useTable, useTableCell, useTableRow, useTableSection } from "../use-table.js";
import { memoForwardRef, useDefault } from "./util.js";
const TableContext = createContext(null);
const TableSectionContext = createContext(null);
const TableRowContext = createContext(null);
export const Table = memoForwardRef(function TableU({ ariaLabel, selectionLimit, tagTable, render }, ref) {
    const info = useTable({
        labelParameters: { ariaLabel },
        tableParameters: { selectionLimit, tagTable }
    });
    useImperativeHandle(ref, () => info);
    return _jsx(TableContext.Provider, { value: info.context, children: render(info) });
});
export const TableSection = memoForwardRef(function TableSection({ disableArrowKeys, disableHomeEndKeys, getIndex, initiallySelectedIndex, untabbable, navigatePastEnd, navigatePastStart, onSelectedIndexChange, onTabbableColumnChange, onTabbableIndexChange, pageNavigationSize, paginationMax, paginationMin, staggered, render, location, tagTableSection }) {
    const info = useTableSection({
        gridNavigationParameters: { onTabbableColumnChange: onTabbableColumnChange ?? null },
        staggeredChildrenParameters: { staggered: staggered || false },
        linearNavigationParameters: {
            disableArrowKeys: useDefault("disableArrowKeys", disableArrowKeys),
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
        rovingTabIndexParameters: { onTabbableIndexChange: onTabbableIndexChange ?? null, untabbable: untabbable ?? false },
        singleSelectionParameters: { initiallySelectedIndex: initiallySelectedIndex ?? null, onSelectedIndexChange: onSelectedIndexChange ?? null },
        context: useContext(TableContext),
        tableSectionParameters: { tagTableSection, location },
    });
    return (_jsx(TableSectionContext.Provider, { value: info.context, children: render(info) }));
});
export const TableRow = memoForwardRef(function TableRowU({ index, getText, tagTableRow, disableArrowKeys, disableHomeEndKeys, onTabbableIndexChange, ariaPropName, disabled, navigatePastEnd, navigatePastStart, selected, selectionMode, hidden, render }, ref) {
    const cx1 = useContext(TableSectionContext);
    console.assert(cx1 != null, `This TableRow is not contained within a TableSection`);
    const info = useTableRow({
        completeGridNavigationRowParameters: {},
        context: cx1,
        managedChildParameters: { index },
        rovingTabIndexChildParameters: { hidden: hidden ?? false },
        singleSelectionChildParameters: {
            ariaPropName,
            selectionMode: useDefault("selectionMode", selectionMode),
            disabled: disabled ?? false
        },
        textContentParameters: {
            getText: useDefault("getText", getText)
        },
        tableRowParameters: {
            selected: selected ?? null,
            tagTableRow
        },
        linearNavigationParameters: {
            disableArrowKeys: useDefault("disableArrowKeys", disableArrowKeys),
            disableHomeEndKeys: useDefault("disableHomeEndKeys", disableHomeEndKeys),
            navigatePastEnd: navigatePastEnd ?? "wrap",
            navigatePastStart: navigatePastStart ?? "wrap"
        },
        rovingTabIndexParameters: { onTabbableIndexChange: onTabbableIndexChange ?? null },
    });
    useImperativeHandle(ref, () => info);
    return _jsx(TableRowContext.Provider, { value: info.context, children: render(info) });
});
export const TableCell = memoForwardRef(function TableCell({ index, getText, focusSelf, hidden, tagTableCell, render, colSpan, getSortValue }, ref) {
    const context = useContext(TableRowContext);
    console.assert(context != null, `This TableCell is not contained within a TableRow`);
    const defaultFocusSelf = useStableCallback((e) => { e.focus?.(); }, []);
    const info = useTableCell({
        completeGridNavigationCellParameters: { getSortValue, focusSelf: focusSelf ?? defaultFocusSelf },
        context,
        gridNavigationCellParameters: { colSpan: colSpan ?? 1 },
        managedChildParameters: { index },
        rovingTabIndexChildParameters: { hidden: hidden ?? false },
        tableCellParameters: { tagTableCell },
        textContentParameters: { getText: useDefault("getText", getText) }
    });
    useImperativeHandle(ref, () => info);
    return render(info);
});
//# sourceMappingURL=table.js.map