import { jsx as _jsx } from "preact/jsx-runtime";
import { createContext } from "preact";
import { assertEmptyObject, focus, memo, useCompleteGridNavigationRows, useContext, useEffect, useMergedProps, useProcessedChild, useRefElement, useStableCallback } from "preact-prop-helpers";
import { useContextWithWarning } from "../props.js";
import { useTable, useTableCell, useTableRow, useTableSection } from "../use-table.js";
import { useComponent, useComponentC, useDefault } from "./util.js";
const TableContext = createContext(null);
const TableSectionContext = createContext(null);
const TableRowsContext = createContext(null);
const ProcessedRowContext = createContext(null);
const TableRowContext = createContext(null);
export const Table = memo((function Table({ ariaLabel, singleSelectionMode, multiSelectionMode, tagTable, imperativeHandle, render, ...void1 }) {
    assertEmptyObject(void1);
    return useComponent(imperativeHandle, render, TableContext, useTable({
        labelParameters: { ariaLabel },
        tableParameters: { tagTable, },
        singleSelectionParameters: { singleSelectionMode: singleSelectionMode || "disabled" },
        multiSelectionParameters: { multiSelectionMode: multiSelectionMode || "disabled" },
    }));
}));
export const TableSection = memo((function TableSection({ disableHomeEndKeys, initiallySingleSelectedIndex, untabbable, navigatePastEnd, navigatePastStart, onSingleSelectedIndexChange, onTabbableColumnChange, onTabbableIndexChange, pageNavigationSize, paginationMax, paginationMin, render, location, imperativeHandle, multiSelectionAriaPropName, onSelectionChange, singleSelectionAriaPropName, onNavigateLinear, collator, noTypeahead, onNavigateTypeahead, typeaheadTimeout, tagTableSection, onElementChange, onMount, onUnmount, initiallyTabbableColumn, ...void1 }) {
    assertEmptyObject(void1);
    return useComponentC(imperativeHandle, render, TableSectionContext, TableRowsContext, useTableSection({
        gridNavigationParameters: {
            onTabbableColumnChange: onTabbableColumnChange,
            initiallyTabbableColumn: initiallyTabbableColumn || 0
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
        contextChildren: useContextWithWarning(TableContext, "table"),
        tableSectionParameters: {
            tagTableSection,
            location
        },
        refElementParameters: { onElementChange, onMount, onUnmount }
    }));
}));
export const TableRows = memo((function TableRows({ render, adjust, children, compare, getIndex, imperativeHandle, onAfterChildLayoutEffect, onChildrenCountChange, onChildrenMountChange, onRearranged, paginationMax, paginationMin, staggered }) {
    return useComponent(imperativeHandle, render, ProcessedRowContext, useCompleteGridNavigationRows({
        context: useContext(TableRowsContext),
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
            adjust,
            children,
            compare,
            getIndex: useDefault("getIndex", getIndex),
            onRearranged
        },
        staggeredChildrenParameters: {
            staggered: staggered || false
        }
    }));
}));
export const TableRow = memo((function TableRow({ index, render, imperativeHandle, onElementChange: oec1, onMount, onUnmount, getText, untabbable, onCurrentFocusedChanged, onCurrentFocusedInnerChanged, multiSelectionDisabled, singleSelectionDisabled, initiallyMultiSelected, initiallyTabbedIndex, navigatePastEnd, navigatePastStart, onMultiSelectChange, onTabbableIndexChange, selected, tagTableRow, onTextContentChange, ...void1 }) {
    assertEmptyObject(void1);
    const { propsStable, refElementReturn } = useRefElement({
        refElementParameters: {
            onElementChange: useStableCallback((...a) => { oec1?.(...a); oec2?.(...a); }),
            onMount,
            onUnmount
        }
    });
    const { props, refElementParameters: { onElementChange: oec2 }, ...i2 } = useProcessedChild({
        context: useContextWithWarning(ProcessedRowContext, "ListboxChildren"),
        info: { index }
    });
    const { managedChildReturn: { getChildren }, paginatedChildReturn: { hideBecausePaginated, parentIsPaginated }, staggeredChildReturn: { hideBecauseStaggered, parentIsStaggered, childUseEffect } } = i2;
    const props2 = useMergedProps(props, propsStable);
    const processedTableRowReturn = {
        hidden: true,
        ...i2,
        props: props2,
        refElementReturn,
        managedChildReturn: { getChildren }
    };
    const retIfHidden = render(processedTableRowReturn);
    if (hideBecausePaginated || hideBecauseStaggered) {
        return retIfHidden;
    }
    else {
        return (_jsx(TableRowInner, { index: index, render: render, initiallyMultiSelected: initiallyMultiSelected, initiallyTabbedIndex: initiallyTabbedIndex, navigatePastEnd: navigatePastEnd, navigatePastStart: navigatePastStart, onMultiSelectChange: onMultiSelectChange, onTabbableIndexChange: onTabbableIndexChange, selected: selected, tagTableRow: tagTableRow, getText: getText, imperativeHandle: imperativeHandle, multiSelectionDisabled: multiSelectionDisabled, onCurrentFocusedChanged: onCurrentFocusedChanged, onCurrentFocusedInnerChanged: onCurrentFocusedInnerChanged, singleSelectionDisabled: singleSelectionDisabled, untabbable: untabbable, hideBecausePaginated: hideBecausePaginated, hideBecauseStaggered: hideBecauseStaggered, parentIsPaginated: parentIsPaginated, parentIsStaggered: parentIsStaggered, childUseEffect: childUseEffect, onTextContentChange: onTextContentChange, props: props2, ...void1 }));
    }
}));
const TableRowInner = memo((function TableRowInner({ index, getText, tagTableRow, onTabbableIndexChange, navigatePastEnd, navigatePastStart, selected, initiallyTabbedIndex, untabbable, imperativeHandle, onCurrentFocusedChanged, onCurrentFocusedInnerChanged, render, initiallyMultiSelected, multiSelectionDisabled, onMultiSelectChange, singleSelectionDisabled, childUseEffect, hideBecausePaginated, hideBecauseStaggered, parentIsPaginated, parentIsStaggered, onTextContentChange, props: props1, ...void1 }) {
    assertEmptyObject(void1);
    const { props: props2, context, hasCurrentFocusReturn, linearNavigationReturn, managedChildReturn, managedChildrenReturn, multiSelectionChildReturn, pressParameters, refElementReturn, rovingTabIndexChildReturn, rovingTabIndexReturn, singleSelectionChildReturn, textContentReturn, typeaheadNavigationReturn, } = useTableRow({
        info: {
            index,
            untabbable: untabbable || false
        },
        context: useContextWithWarning(TableSectionContext, "table section"),
        textContentParameters: {
            getText: useDefault("getText", getText),
            onTextContentChange
        },
        tableRowParameters: {
            selected,
            tagTableRow: tagTableRow || "tr"
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
    });
    useEffect(childUseEffect, [childUseEffect]);
    return useComponent(imperativeHandle, render, TableRowContext, {
        context,
        hasCurrentFocusReturn,
        linearNavigationReturn,
        managedChildrenReturn,
        managedChildReturn,
        multiSelectionChildReturn,
        pressParameters,
        props: useMergedProps(props1, props2),
        rovingTabIndexChildReturn,
        rovingTabIndexReturn,
        singleSelectionChildReturn,
        textContentReturn,
        typeaheadNavigationReturn,
        refElementReturn,
        paginatedChildReturn: { hideBecausePaginated, parentIsPaginated },
        staggeredChildReturn: { hideBecauseStaggered, parentIsStaggered },
    });
}));
export const TableCell = memo((function TableCell({ index, getText, focusSelf, untabbable, tagTableCell, render, colSpan, imperativeHandle, getSortValue, onTextContentChange, info: uinfo, ...void1 }) {
    const defaultFocusSelf = useStableCallback((e) => { focus(e); }, []);
    assertEmptyObject(void1);
    return useComponent(imperativeHandle, render, null, useTableCell({
        info: {
            index,
            focusSelf: focusSelf ?? defaultFocusSelf,
            untabbable: untabbable || false,
            getSortValue,
            ...uinfo
        },
        context: useContextWithWarning(TableRowContext, "table row"),
        gridNavigationCellParameters: {
            colSpan: colSpan ?? 1
        },
        tableCellParameters: {
            tagTableCell
        },
        textContentParameters: {
            getText: useDefault("getText", getText),
            onTextContentChange,
        }
    }));
}));
//# sourceMappingURL=table.js.map