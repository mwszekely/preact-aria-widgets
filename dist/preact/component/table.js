import { jsx as _jsx } from "preact/jsx-runtime";
import { assertEmptyObject, createContext, focus, identity, memo, useEnsureStability, useStableCallback } from "preact-prop-helpers";
import { useContextWithWarning } from "../props.js";
import { useTable, useTableBody, useTableCell, useTableHead, useTableRow, useTableRowOuter } from "../use-table.js";
import { useComponent, useDefault } from "./util.js";
const TableRowContext = createContext(null);
const TableCellContext = createContext(null);
const TableProcessedChildrenContext = createContext(null);
export const Table = /* @__PURE__ */ memo(function Table({ ariaLabel, singleSelectionMode, multiSelectionMode, tagTable, imperativeHandle, render, initiallySingleSelectedIndex, multiSelectionAriaPropName, onSelectionChange, onSingleSelectedIndexChange, singleSelectionAriaPropName, collator, disableHomeEndKeys, initiallyTabbableColumn, navigatePastEnd, navigatePastStart, noTypeahead, onElementChange, onMount, onNavigateLinear, onNavigateTypeahead, onTabbableColumnChange, onTabbableIndexChange, onUnmount, pageNavigationSize, paginationMax, paginationMin, typeaheadTimeout, untabbable, getSortValueAt, initiallySortedColumn, ...void1 }) {
    assertEmptyObject(void1);
    getSortValueAt ??= identity;
    useEnsureStability("Table", getSortValueAt);
    return useComponent(imperativeHandle, render, TableRowContext, useTable({
        labelParameters: { ariaLabel },
        tableParameters: { tagTable, initiallySortedColumn },
        gridNavigationParameters: { initiallyTabbableColumn: initiallyTabbableColumn || 0, onTabbableColumnChange, },
        linearNavigationParameters: { disableHomeEndKeys: disableHomeEndKeys || false, navigatePastEnd: navigatePastEnd || "wrap", navigatePastStart: navigatePastStart || "wrap", onNavigateLinear, pageNavigationSize },
        paginatedChildrenParameters: { paginationMax, paginationMin, },
        refElementParameters: { onElementChange, onMount, onUnmount },
        rovingTabIndexParameters: { onTabbableIndexChange, untabbable: untabbable || false },
        typeaheadNavigationParameters: {
            collator: useDefault("collator", collator),
            noTypeahead: useDefault("noTypeahead", noTypeahead),
            onNavigateTypeahead,
            typeaheadTimeout: useDefault("typeaheadTimeout", typeaheadTimeout)
        },
        singleSelectionParameters: { singleSelectionMode: singleSelectionMode || "disabled", initiallySingleSelectedIndex, onSingleSelectedIndexChange, singleSelectionAriaPropName },
        multiSelectionParameters: { multiSelectionMode: multiSelectionMode || "disabled", multiSelectionAriaPropName, onSelectionChange },
        gridNavigationCompleteParameters: { getSortValueAt },
        processedIndexManglerParameters: {
            compare: null,
            getIndex: useDefault("getIndex", null)
        }
    }));
});
export const TableHead = /* @__PURE__ */ memo(function TableHead({ render, tagHead, imperativeHandle }) {
    return useComponent(imperativeHandle, render, null, useTableHead({
        tableHeadParameters: { tagHead }
    }));
});
export const TableBody = /* @__PURE__ */ memo(function TableBody({ render, tagTableSection, children, imperativeHandle, onAfterChildLayoutEffect, onChildrenCountChange, onChildrenMountChange, paginationMax, paginationMin, staggered, }) {
    return useComponent(imperativeHandle, render, TableProcessedChildrenContext, useTableBody({
        context: useContextWithWarning(TableRowContext, "TableRowContext"),
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
            children
        },
        staggeredChildrenParameters: {
            staggered: staggered || false
        },
        tableSectionParameters: {
            tagTableSection
        }
    }));
});
export const TableHeadRow = /* @__PURE__ */ memo(function TableHeadRow({ render, index, tagTableRow, getText, initiallyMultiSelected, initiallyTabbedIndex, multiSelectionDisabled, navigatePastEnd, navigatePastStart, onCurrentFocusedChanged, onCurrentFocusedInnerChanged, onElementChange, onMount, onMultiSelectChange, onTabbableIndexChange, onTextContentChange, onUnmount, selected, singleSelectionDisabled, untabbable, imperativeHandle }) {
    return useComponent(imperativeHandle, render, TableCellContext, useTableRow({
        context: useContextWithWarning(TableRowContext, "TableRowContext"),
        info: {
            index,
            untabbable: untabbable || false
        },
        hasCurrentFocusParameters: {
            onCurrentFocusedChanged,
            onCurrentFocusedInnerChanged,
        },
        linearNavigationParameters: {
            navigatePastEnd: navigatePastEnd || "wrap",
            navigatePastStart: navigatePastStart || "wrap"
        },
        multiSelectionChildParameters: {
            initiallyMultiSelected: initiallyMultiSelected ?? null,
            multiSelectionDisabled: multiSelectionDisabled || false,
            onMultiSelectChange
        },
        rovingTabIndexParameters: {
            initiallyTabbedIndex,
            onTabbableIndexChange,
            untabbable: untabbable || false
        },
        singleSelectionChildParameters: {
            singleSelectionDisabled: singleSelectionDisabled || false
        },
        tableRowParameters: {
            selected,
            tagTableRow
        },
        textContentParameters: {
            getText: useDefault("getText", getText),
            onTextContentChange
        },
        refElementParameters: {
            onElementChange: onElementChange ?? null,
            onMount: onMount ?? null,
            onUnmount: onUnmount ?? null
        }
    }));
});
export const TableBodyRow = /* @__PURE__ */ memo(function TableBodyRow({ index, render, imperativeHandle, onElementChange, onMount, onUnmount, tagTableRow, getText, initiallyMultiSelected, initiallyTabbedIndex, multiSelectionDisabled, navigatePastEnd, navigatePastStart, onCurrentFocusedChanged, onCurrentFocusedInnerChanged, onMultiSelectChange, onTabbableIndexChange, onTextContentChange, selected, singleSelectionDisabled, untabbable }) {
    // type RM = TableRowInfo<RowElement>;
    // type CM = TableCellInfo<CellElement>
    return (_jsx(TableBodyRowOuter, { index: index, imperativeHandle: imperativeHandle, onElementChange: onElementChange, onMount: onMount, onUnmount: onUnmount, render: (info) => {
            let inner = _jsx(TableBodyRowInner, { index: index, tagTableRow: tagTableRow, getText: getText, imperativeHandle: imperativeHandle, initiallyMultiSelected: initiallyMultiSelected, initiallyTabbedIndex: initiallyTabbedIndex, multiSelectionDisabled: multiSelectionDisabled, navigatePastEnd: navigatePastEnd, navigatePastStart: navigatePastStart, onCurrentFocusedChanged: onCurrentFocusedChanged, onCurrentFocusedInnerChanged: onCurrentFocusedInnerChanged, onElementChange: onElementChange, onMount: onMount, onMultiSelectChange: onMultiSelectChange, onTabbableIndexChange: onTabbableIndexChange, onTextContentChange: onTextContentChange, onUnmount: onUnmount, selected: selected, singleSelectionDisabled: singleSelectionDisabled, untabbable: untabbable, render: render });
            if (info.hide) {
                return render(info);
            }
            else {
                return inner;
            }
        } }));
});
const TableBodyRowOuter = /* @__PURE__ */ memo(function TableBodyRowOuter({ index, render, imperativeHandle, onElementChange, onMount, onUnmount, cssProperty, duration, ...void1 }) {
    assertEmptyObject(void1);
    return useComponent(imperativeHandle, render, null, useTableRowOuter({
        context: useContextWithWarning(TableProcessedChildrenContext, "TableProcessedChildrenContext"),
        info: { index },
        refElementParameters: { onElementChange, onMount, onUnmount },
        rearrangeableChildParameters: { cssProperty, duration }
    }));
});
const TableBodyRowInner = /* @__PURE__ */ memo(function TableBodyRowInner({ index, render, getText, imperativeHandle, initiallyMultiSelected, initiallyTabbedIndex, multiSelectionDisabled, navigatePastEnd, navigatePastStart, onCurrentFocusedChanged, onCurrentFocusedInnerChanged, onMultiSelectChange, onTabbableIndexChange, onTextContentChange, selected, singleSelectionDisabled, tagTableRow, untabbable, onElementChange, onMount, onUnmount, ...void1 }) {
    assertEmptyObject(void1);
    return useComponent(imperativeHandle, render, TableCellContext, useTableRow({
        context: useContextWithWarning(TableRowContext, "TableRowContext"),
        info: {
            index,
            untabbable: untabbable || false
        },
        hasCurrentFocusParameters: {
            onCurrentFocusedChanged,
            onCurrentFocusedInnerChanged,
        },
        linearNavigationParameters: {
            navigatePastEnd: navigatePastEnd || "wrap",
            navigatePastStart: navigatePastStart || "wrap"
        },
        multiSelectionChildParameters: {
            initiallyMultiSelected: initiallyMultiSelected ?? null,
            multiSelectionDisabled: multiSelectionDisabled || false,
            onMultiSelectChange
        },
        rovingTabIndexParameters: {
            initiallyTabbedIndex,
            onTabbableIndexChange,
            untabbable: untabbable || false
        },
        singleSelectionChildParameters: {
            singleSelectionDisabled: singleSelectionDisabled || false
        },
        tableRowParameters: {
            selected,
            tagTableRow
        },
        textContentParameters: {
            getText: useDefault("getText", getText),
            onTextContentChange
        },
        refElementParameters: {
            onElementChange: onElementChange ?? null,
            onMount: onMount ?? null,
            onUnmount: onUnmount ?? null
        }
    }));
});
export const TableCell = /* @__PURE__ */ memo(function TableCell({ index, render, colSpan, focusSelf, getText, imperativeHandle, onTextContentChange, tagTableCell, untabbable, ...void1 }) {
    assertEmptyObject(void1);
    const defaultFocusSelf = useStableCallback((e) => { focus(e); }, []);
    return useComponent(imperativeHandle, render, null, useTableCell({
        context: useContextWithWarning(TableCellContext, "TableCellContext"),
        gridNavigationCellParameters: { colSpan },
        info: {
            focusSelf: focusSelf ?? defaultFocusSelf,
            index,
            untabbable: untabbable || false
        },
        tableCellParameters: {
            tagTableCell
        },
        textContentParameters: {
            getText: useDefault("getText", getText),
            onTextContentChange
        }
    }));
});
//# sourceMappingURL=table.js.map