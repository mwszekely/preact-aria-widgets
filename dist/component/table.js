import { createContext } from "preact";
import { assertEmptyObject, focus, memo, useStableCallback } from "preact-prop-helpers";
import { useContextWithWarning } from "../props.js";
import { useTable, useTableCell, useTableRow, useTableSection } from "../use-table.js";
import { useComponent, useDefault } from "./util.js";
const TableContext = createContext(null);
const TableSectionContext = createContext(null);
const TableRowContext = createContext(null);
export const Table = memo(function Table({ ariaLabel, singleSelectionMode, multiSelectionMode, tagTable, imperativeHandle, render, ...void1 }) {
    assertEmptyObject(void1);
    return useComponent(imperativeHandle, render, TableContext, useTable({
        labelParameters: { ariaLabel },
        tableParameters: { tagTable, },
        singleSelectionParameters: { singleSelectionMode: singleSelectionMode || "disabled" },
        multiSelectionParameters: { multiSelectionMode: multiSelectionMode || "disabled" },
    }));
});
export const TableSection = memo(function TableSection({ disableHomeEndKeys, getIndex, initiallySingleSelectedIndex, untabbable, navigatePastEnd, navigatePastStart, onSingleSelectedIndexChange, onTabbableColumnChange, onTabbableIndexChange, pageNavigationSize, paginationMax, paginationMin, staggered, render, location, imperativeHandle, multiSelectionAriaPropName, onSelectionChange, singleSelectionAriaPropName, onNavigateLinear, collator, noTypeahead, onNavigateTypeahead, typeaheadTimeout, tagTableSection, onElementChange, onMount, onUnmount, ...void1 }) {
    assertEmptyObject(void1);
    return useComponent(imperativeHandle, render, TableSectionContext, useTableSection({
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
            untabbable: untabbable || false,
        },
        singleSelectionParameters: {
            initiallySingleSelectedIndex,
            onSingleSelectedIndexChange,
            singleSelectionAriaPropName
        },
        multiSelectionParameters: {
            multiSelectionAriaPropName,
            onSelectionChange,
        },
        context: useContextWithWarning(TableContext, "table"),
        tableSectionParameters: {
            tagTableSection,
            location
        },
        refElementParameters: { onElementChange, onMount, onUnmount }
    }));
});
export const TableRow = memo(function TableRow({ index, getText, tagTableRow, onTabbableIndexChange, navigatePastEnd, navigatePastStart, selected, initiallyTabbedIndex, untabbable, info, imperativeHandle, onCurrentFocusedChanged, onCurrentFocusedInnerChanged, render, initiallyMultiSelected, multiSelectionDisabled, onMultiSelectChange, singleSelectionDisabled, ...void1 }) {
    assertEmptyObject(void1);
    return useComponent(imperativeHandle, render, TableRowContext, useTableRow({
        info: {
            index,
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
        singleSelectionChildParameters: { singleSelectionDisabled: singleSelectionDisabled || false },
        multiSelectionChildParameters: { multiSelectionDisabled: multiSelectionDisabled || false, initiallyMultiSelected: initiallyMultiSelected || false, onMultiSelectChange }
    }));
});
export const TableCell = memo(function TableCell({ index, getText, focusSelf, untabbable, tagTableCell, render, colSpan, imperativeHandle, getSortValue, info, ...void1 }) {
    const defaultFocusSelf = useStableCallback((e) => { focus(e); }, []);
    assertEmptyObject(void1);
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