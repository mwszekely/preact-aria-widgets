import { jsx as _jsx } from "preact/jsx-runtime";
import { assertEmptyObject, createContext, focus, memo, useContext, useEffect, useEnsureStability, useMergedProps, useProcessedChild, useRefElement, useStableCallback } from "preact-prop-helpers";
import { noop, useContextWithWarning } from "../props.js";
import { useTable, useTableBody, useTableCell, useTableHead, useTableRow } from "../use-table2.js";
import { useComponent, useComponentC, useDefault } from "./util.js";
const TableLocationContext = createContext(null);
const TableCellContext = createContext(null);
const TableProcessedChildrenContext = createContext(null);
//const TableRowsContext = createContext<UseTableRowContext<any, any>>(null!);
const TableRowContext = createContext(null);
//const TableRowContext = createContext<UseTableRowContext<any, TableCellInfo<any>>>(null!);
const ProcessedChildContext = createContext(null);
export const Table = /* @__PURE__ */ memo((function Table({ ariaLabel, singleSelectionMode, multiSelectionMode, tagTable, imperativeHandle, render, initiallySingleSelectedIndex, multiSelectionAriaPropName, onSelectionChange, onSingleSelectedIndexChange, singleSelectionAriaPropName, collator, disableHomeEndKeys, initiallyTabbableColumn, navigatePastEnd, navigatePastStart, noTypeahead, onElementChange, onMount, onNavigateLinear, onNavigateTypeahead, onTabbableColumnChange, onTabbableIndexChange, onUnmount, pageNavigationSize, paginationMax, paginationMin, typeaheadTimeout, untabbable, ...void1 }) {
    assertEmptyObject(void1);
    const r = useTable({
        labelParameters: { ariaLabel },
        tableParameters: { tagTable, },
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
    });
    return useComponentC(imperativeHandle, render, TableRowContext, TableProcessedChildrenContext, r);
}));
export const TableHead = /* @__PURE__ */ memo((function TableHead({ render, imperativeHandle, tagHead, ...void1 }) {
    assertEmptyObject(void1);
    const renderInfo = useTableHead({
        tableHeadParameters: {
            tagHead
        }
    });
    return (_jsx(TableLocationContext.Provider, { value: renderInfo.contextLocation, children: useComponent(imperativeHandle, render, null, renderInfo) }));
}));
export const TableBody = /* @__PURE__ */ memo((function TableBody({ paginationMax, paginationMin, render, imperativeHandle, tagTableSection, adjust, children, compare, getIndex, onAfterChildLayoutEffect, onChildrenCountChange, onChildrenMountChange, onRearranged, staggered, ...void1 }) {
    assertEmptyObject(void1);
    const renderInfo = useTableBody({
        context: useContextWithWarning(TableProcessedChildrenContext, "TableProcessedChildrenContext"),
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
        },
        tableSectionParameters: {
            tagTableSection
        }
    });
    return (_jsx(TableLocationContext.Provider, { value: renderInfo.contextLocation, children: useComponent(imperativeHandle, render, ProcessedChildContext, renderInfo) }));
}));
export const TableRow = /* @__PURE__ */ memo((function TableRow({ index, render, imperativeHandle, onElementChange: oec1, onMount, onUnmount, getText, untabbable, onCurrentFocusedChanged, onCurrentFocusedInnerChanged, multiSelectionDisabled, singleSelectionDisabled, initiallyMultiSelected, initiallyTabbedIndex, navigatePastEnd, navigatePastStart, onMultiSelectChange, onTabbableIndexChange, selected, tagTableRow, onTextContentChange, ...void1 }) {
    assertEmptyObject(void1);
    const { location } = useContext(TableLocationContext);
    useEnsureStability("TableRow", location);
    if (location === "body") {
        const { propsStable, refElementReturn } = useRefElement({
            refElementParameters: {
                onElementChange: useStableCallback((...a) => { oec1?.(...a); oec2?.(...a); }),
                onMount,
                onUnmount
            }
        });
        const { props, refElementParameters: { onElementChange: oec2 }, ...i2 } = useProcessedChild({
            context: useContextWithWarning(ProcessedChildContext, "ListboxChildren"),
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
        return (_jsx(TableRowInner, { index: index, render: render, initiallyMultiSelected: initiallyMultiSelected, initiallyTabbedIndex: initiallyTabbedIndex, navigatePastEnd: navigatePastEnd, navigatePastStart: navigatePastStart, onMultiSelectChange: onMultiSelectChange, onTabbableIndexChange: onTabbableIndexChange, selected: selected, tagTableRow: tagTableRow, getText: getText, imperativeHandle: imperativeHandle, multiSelectionDisabled: multiSelectionDisabled, onCurrentFocusedChanged: onCurrentFocusedChanged, onCurrentFocusedInnerChanged: onCurrentFocusedInnerChanged, singleSelectionDisabled: singleSelectionDisabled, untabbable: untabbable, hideBecausePaginated: hideBecausePaginated, hideBecauseStaggered: hideBecauseStaggered, parentIsPaginated: parentIsPaginated, parentIsStaggered: parentIsStaggered, childUseEffect: childUseEffect, onTextContentChange: onTextContentChange, props: props2, ...void1 }));
    }
    else {
        return (_jsx(TableRowInner, { index: index, render: render, initiallyMultiSelected: initiallyMultiSelected, initiallyTabbedIndex: initiallyTabbedIndex, navigatePastEnd: navigatePastEnd, navigatePastStart: navigatePastStart, onMultiSelectChange: onMultiSelectChange, onTabbableIndexChange: onTabbableIndexChange, selected: selected, tagTableRow: tagTableRow, getText: getText, imperativeHandle: imperativeHandle, multiSelectionDisabled: multiSelectionDisabled, onCurrentFocusedChanged: onCurrentFocusedChanged, onCurrentFocusedInnerChanged: onCurrentFocusedInnerChanged, singleSelectionDisabled: singleSelectionDisabled, untabbable: untabbable, hideBecausePaginated: false, hideBecauseStaggered: false, parentIsPaginated: false, parentIsStaggered: false, childUseEffect: noop, onTextContentChange: onTextContentChange, props: {}, ...void1 }));
    }
}));
const TableRowInner = /* @__PURE__ */ memo((function TableRowInner({ index, getText, tagTableRow, onTabbableIndexChange, navigatePastEnd, navigatePastStart, selected, initiallyTabbedIndex, untabbable, imperativeHandle, onCurrentFocusedChanged, onCurrentFocusedInnerChanged, render, initiallyMultiSelected, multiSelectionDisabled, onMultiSelectChange, singleSelectionDisabled, childUseEffect, hideBecausePaginated, hideBecauseStaggered, parentIsPaginated, parentIsStaggered, onTextContentChange, props: props1, ...void1 }) {
    assertEmptyObject(void1);
    const { props: props2, context, hasCurrentFocusReturn, linearNavigationReturn, managedChildReturn, managedChildrenReturn, multiSelectionChildReturn, pressParameters, refElementReturn, rovingTabIndexChildReturn, rovingTabIndexReturn, singleSelectionChildReturn, textContentReturn, typeaheadNavigationReturn, } = useTableRow({
        info: {
            index,
            untabbable: untabbable || false
        },
        context: useContextWithWarning(TableRowContext, "table section"),
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
    return useComponent(imperativeHandle, render, TableCellContext, {
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
export const TableCell = /* @__PURE__ */ memo((function TableCell({ index, getText, focusSelf, untabbable, tagTableCell, render, colSpan, imperativeHandle, getSortValue, onTextContentChange, info: uinfo, ...void1 }) {
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
        context: useContextWithWarning(TableCellContext, "table row"),
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
//# sourceMappingURL=table2.js.map