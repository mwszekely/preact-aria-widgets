import { jsx as _jsx } from "preact/jsx-runtime";
import { createContext } from "preact";
import { focus, memo, useStableCallback } from "preact-prop-helpers";
import { useContextWithWarning } from "../props.js";
import { useTable, useTableCell, useTableRow, useTableSection } from "../use-table.js";
import { useComponent, useDefault } from "./util.js";
const TableContext = createContext(null);
const TableSectionContext = createContext(null);
const TableRowContext = createContext(null);
export const Table = memo(function Table({ ariaLabel, selectionLimit, tagTable, imperativeHandle, render }) {
    return useComponent(imperativeHandle, render, TableContext, useTable({
        labelParameters: { ariaLabel },
        tableParameters: { selectionLimit, tagTable, }
    }));
});
export const TableSection = memo(function TableSection({ disableHomeEndKeys, getIndex, initiallySelectedIndex, untabbable, navigatePastEnd, navigatePastStart, onSelectedIndexChange, onTabbableColumnChange, onTabbableIndexChange, pageNavigationSize, paginationMax, paginationMin, staggered, render, location, ariaPropName, selectionMode, onNavigateLinear, collator, noTypeahead, onNavigateTypeahead, typeaheadTimeout, tagTableSection, onElementChange, onMount, onUnmount }) {
    untabbable = (untabbable ?? false);
    ariaPropName ??= "aria-selected";
    selectionMode ??= "activation";
    const info = useTableSection({
        gridNavigationParameters: {
            onTabbableColumnChange: onTabbableColumnChange
        },
        staggeredChildrenParameters: {
            staggered: staggered || false
        },
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
            paginationMax,
            paginationMin,
        },
        rearrangeableChildrenParameters: {
            getIndex: useDefault("getIndex", getIndex)
        },
        rovingTabIndexParameters: {
            onTabbableIndexChange,
            untabbable
        },
        singleSelectionParameters: {
            initiallySelectedIndex,
            onSelectedIndexChange,
            ariaPropName,
            selectionMode
        },
        context: useContextWithWarning(TableContext, "table"),
        tableSectionParameters: {
            tagTableSection,
            location
        },
        refElementParameters: { onElementChange, onMount, onUnmount }
    });
    return (_jsx(TableSectionContext.Provider, { value: info.context, children: render(info) }));
});
export const TableRow = memo(function TableRow({ index, getText, tagTableRow, onTabbableIndexChange, navigatePastEnd, navigatePastStart, selected, unselectable, initiallyTabbedIndex, untabbable, info, imperativeHandle, onCurrentFocusedChanged, onCurrentFocusedInnerChanged, render }, ref) {
    return useComponent(imperativeHandle, render, TableRowContext, useTableRow({
        info: {
            index,
            unselectable: unselectable || false,
            untabbable: untabbable || false,
            ...info
        },
        context: useContextWithWarning(TableSectionContext, "table section"),
        textContentParameters: {
            getText: useDefault("getText", getText)
        },
        tableRowParameters: {
            selected,
            tagTableRow
        },
        hasCurrentFocusParameters: {
            onCurrentFocusedChanged,
            onCurrentFocusedInnerChanged,
        },
        linearNavigationParameters: {
            navigatePastEnd: navigatePastEnd || "wrap",
            navigatePastStart: navigatePastStart || "wrap"
        },
        rovingTabIndexParameters: {
            onTabbableIndexChange: onTabbableIndexChange || null,
            initiallyTabbedIndex: initiallyTabbedIndex ?? null,
            untabbable: untabbable || false
        },
    }));
});
export const TableCell = memo(function TableCell({ index, getText, focusSelf, untabbable, tagTableCell, render, colSpan, imperativeHandle, getSortValue, info }) {
    const defaultFocusSelf = useStableCallback((e) => { focus(e); }, []);
    return useComponent(imperativeHandle, render, null, useTableCell({
        info: {
            index,
            focusSelf: focusSelf ?? defaultFocusSelf,
            untabbable: untabbable || false,
            getSortValue
        },
        context: useContextWithWarning(TableRowContext, "table row"),
        gridNavigationCellParameters: {
            colSpan: colSpan ?? 1
        },
        tableCellParameters: {
            tagTableCell
        },
        textContentParameters: {
            getText: useDefault("getText", getText)
        }
    }));
});
//# sourceMappingURL=table.js.map