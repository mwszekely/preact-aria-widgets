import { jsx as _jsx } from "preact/jsx-runtime";
import { createContext } from "preact";
import { focus, useStableCallback } from "preact-prop-helpers";
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
const TableSectionUntabbableContext = createContext(false);
const TableSectionAriaPropNameContext = createContext("aria-selected");
const TableSectionSelectionModeContext = createContext("activation");
const TablRowUntabbableContext = createContext(false);
//const TablRowAriaPropNameContext = createContext<UseTableSectionParameters<any, any, any, any>["singleSelectionParameters"]["ariaPropName"]>("aria-selected");
//const TablRowSelectionModeContext = createContext<UseTableSectionParameters<any, any, any, any>["singleSelectionParameters"]["selectionMode"]>("activation");
export const TableSection = memoForwardRef(function TableSection({ disableHomeEndKeys, getIndex, initiallySelectedIndex, untabbable, navigatePastEnd, navigatePastStart, onSelectedIndexChange, onTabbableColumnChange, onTabbableIndexChange, pageNavigationSize, paginationMax, paginationMin, staggered, render, location, ariaPropName, selectionMode, tagTableSection }) {
    untabbable = (untabbable ?? false);
    ariaPropName ??= "aria-selected";
    selectionMode ??= "activation";
    const info = useTableSection({
        gridNavigationParameters: { onTabbableColumnChange: onTabbableColumnChange ?? null },
        staggeredChildrenParameters: { staggered: staggered || false },
        linearNavigationParameters: {
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
        context: useContext(TableContext),
        tableSectionParameters: { tagTableSection, location },
    });
    return (_jsx(TableSectionAriaPropNameContext.Provider, { value: ariaPropName, children: _jsx(TableSectionSelectionModeContext.Provider, { value: selectionMode, children: _jsx(TableSectionUntabbableContext.Provider, { value: untabbable, children: _jsx(TableSectionContext.Provider, { value: info.context, children: render(info) }) }) }) }));
});
export const TableRow = memoForwardRef(function TableRowU({ index, getText, tagTableRow, disableHomeEndKeys, onTabbableIndexChange, navigatePastEnd, navigatePastStart, selected, hidden, disabled, initiallyTabbedIndex, untabbable, render }, ref) {
    let gridIsUntabbable = useContext(TableSectionUntabbableContext);
    untabbable ||= (false || gridIsUntabbable);
    const cx1 = useContext(TableSectionContext);
    console.assert(cx1 != null, `This TableRow is not contained within a TableSection`);
    const info = useTableRow({
        info: { index, disabled: disabled || false, hidden: hidden || false },
        context: cx1,
        textContentParameters: {
            getText: useDefault("getText", getText)
        },
        tableRowParameters: {
            selected: selected ?? null,
            tagTableRow
        },
        linearNavigationParameters: {
            disableHomeEndKeys: useDefault("disableHomeEndKeys", disableHomeEndKeys),
            navigatePastEnd: navigatePastEnd ?? "wrap",
            navigatePastStart: navigatePastStart ?? "wrap"
        },
        rovingTabIndexParametersG2R: { untabbable: useContext(TableSectionUntabbableContext) },
        rovingTabIndexParametersR2C: { onTabbableIndexChange: onTabbableIndexChange ?? null, initiallyTabbedIndex: initiallyTabbedIndex ?? null, untabbable },
        singleSelectionParameters: { ariaPropName: useContext(TableSectionAriaPropNameContext), selectionMode: useContext(TableSectionSelectionModeContext) }
    });
    useImperativeHandle(ref, () => info);
    return (_jsx(TablRowUntabbableContext.Provider, { value: untabbable, children: _jsx(TableRowContext.Provider, { value: info.context, children: render(info) }) }));
});
export const TableCell = memoForwardRef(function TableCell({ index, getText, focusSelf, hidden, tagTableCell, render, colSpan, getSortValue, }, ref) {
    const context = useContext(TableRowContext);
    console.assert(context != null, `This TableCell is not contained within a TableRow`);
    const defaultFocusSelf = useStableCallback((e) => { focus(e); }, []);
    const info = useTableCell({
        info: { index, getSortValue, focusSelf: focusSelf ?? defaultFocusSelf, hidden: hidden || false },
        context,
        gridNavigationCellParameters: { colSpan: colSpan ?? 1 },
        tableCellParameters: { tagTableCell },
        textContentParameters: { getText: useDefault("getText", getText) },
        rovingTabIndexParameters: { untabbable: useContext(TablRowUntabbableContext) }
    });
    useImperativeHandle(ref, () => info);
    return render(info);
});
//# sourceMappingURL=table.js.map