import { jsx as _jsx } from "preact/jsx-runtime";
import { createContext } from "preact";
import { assertEmptyObject, identity, useContext, useEnsureStability } from "preact-prop-helpers";
import { Prefices } from "../props.js";
import { useGridlist, useGridlistCell, useGridlistRow, useGridlistRowOuter } from "../use-gridlist.js";
import { useComponent, useComponentC, useDefault } from "./util.js";
const GridlistRowContext = createContext(null);
const GridlistCellContext = createContext(null);
const GridlistProcessedChildrenContext = createContext(null);
export function Gridlist({ render, ariaLabel, collator, disableHomeEndKeys, focusSelfParent, imperativeHandle, initiallyTabbableColumn, multiSelectionAriaPropName, multiSelectionMode, navigatePastEnd, navigatePastStart, noTypeahead, onElementChange, onLabelClick, onMount, onNavigateLinear, onNavigateTypeahead, onSelectionChange, onTabbableColumnChange, onTabbableIndexChange, onUnmount, pageNavigationSize, paginationMax, paginationMin, singleSelectionAriaPropName, singleSelectionMode, typeaheadTimeout, untabbable, children, staggered, onAfterChildLayoutEffect, onChildrenCountChange, onChildrenMountChange, onSingleSelectedIndexChange, singleSelectedIndex, getSortColumn, getSortValueAt, ...void1 }) {
    getSortValueAt ??= identity;
    useEnsureStability("Gridlist", getSortValueAt);
    assertEmptyObject(void1);
    return useComponentC(imperativeHandle, render, GridlistRowContext, GridlistProcessedChildrenContext, useGridlist({
        gridNavigationParameters: {
            initiallyTabbableColumn: initiallyTabbableColumn || 0,
            onTabbableColumnChange
        },
        labelParameters: {
            ariaLabel,
            onLabelClick: onLabelClick || null
        },
        linearNavigationParameters: {
            disableHomeEndKeys: useDefault("disableHomeEndKeys", disableHomeEndKeys),
            navigatePastEnd: navigatePastEnd || "wrap",
            navigatePastStart: navigatePastStart || "wrap",
            onNavigateLinear,
            pageNavigationSize
        },
        managedChildrenParameters: {
            onAfterChildLayoutEffect,
            onChildrenCountChange,
            onChildrenMountChange
        },
        multiSelectionParameters: {
            multiSelectionAriaPropName,
            multiSelectionMode: useDefault("multiSelectionMode", multiSelectionMode),
            onSelectionChange,
        },
        paginatedChildrenParameters: {
            paginationMax,
            paginationMin
        },
        randomIdInputParameters: {
            prefix: Prefices.gridlist
        },
        randomIdLabelParameters: {
            prefix: Prefices.gridlistLabel
        },
        rearrangeableChildrenParameters: {
            children,
        },
        processedIndexManglerParameters: {
            compare: null,
            getIndex: useDefault("getIndex", null)
        },
        refElementParameters: {
            onElementChange,
            onMount,
            onUnmount
        },
        rovingTabIndexParameters: {
            focusSelfParent: useDefault("focusSelf", focusSelfParent),
            onTabbableIndexChange,
            untabbable: untabbable || false
        },
        singleSelectionDeclarativeParameters: {
            onSingleSelectedIndexChange,
            singleSelectedIndex
        },
        singleSelectionParameters: {
            singleSelectionAriaPropName,
            singleSelectionMode: useDefault("singleSelectionMode", singleSelectionMode)
        },
        staggeredChildrenParameters: {
            staggered: staggered || false
        },
        typeaheadNavigationParameters: {
            collator,
            noTypeahead: noTypeahead || false,
            onNavigateTypeahead,
            typeaheadTimeout: useDefault("typeaheadTimeout", typeaheadTimeout)
        },
        gridNavigationCompleteParameters: {
            getSortColumn,
            getSortValueAt,
        }
    }));
}
export function GridlistRow(props) {
    const { index, render, collator, getText, initiallyTabbedIndex, multiSelected, multiSelectionDisabled, navigatePastEnd, navigatePastStart, noTypeahead, onCurrentFocusedChanged, onCurrentFocusedInnerChanged, onMultiSelectedChange, onNavigateTypeahead, onTabbableIndexChange, onTextContentChange, singleSelectionDisabled, typeaheadTimeout, untabbable, imperativeHandle, onElementChange, onMount, onUnmount } = props;
    return (_jsx(GridlistRowOuter, { index: index, imperativeHandle: imperativeHandle, onElementChange: onElementChange, onMount: onMount, onUnmount: onUnmount, render: info => {
            if (info.hide) {
                return render(info);
            }
            else {
                return (_jsx(GridlistRowInner, { index: index, render: render, collator: collator, getText: getText, imperativeHandle: imperativeHandle, initiallyTabbedIndex: initiallyTabbedIndex, multiSelected: multiSelected, multiSelectionDisabled: multiSelectionDisabled, navigatePastEnd: navigatePastEnd, navigatePastStart: navigatePastStart, noTypeahead: noTypeahead, onCurrentFocusedChanged: onCurrentFocusedChanged, onCurrentFocusedInnerChanged: onCurrentFocusedInnerChanged, onElementChange: onElementChange, onMount: onMount, onMultiSelectedChange: onMultiSelectedChange, onNavigateTypeahead: onNavigateTypeahead, onTabbableIndexChange: onTabbableIndexChange, onTextContentChange: onTextContentChange, onUnmount: onUnmount, singleSelectionDisabled: singleSelectionDisabled, typeaheadTimeout: typeaheadTimeout, untabbable: untabbable }));
            }
        } }));
}
function GridlistRowOuter({ index, render, imperativeHandle, onElementChange, onMount, onUnmount, cssProperty, duration }) {
    return useComponent(imperativeHandle, render, null, useGridlistRowOuter({
        context: useContext(GridlistProcessedChildrenContext),
        info: { index },
        refElementParameters: {
            onElementChange,
            onMount,
            onUnmount
        },
        rearrangeableChildParameters: {
            cssProperty,
            duration
        }
    }));
}
function GridlistRowInner({ index, render, collator, getText, imperativeHandle, initiallyTabbedIndex, multiSelectionDisabled, navigatePastEnd, navigatePastStart, noTypeahead, onCurrentFocusedChanged, onCurrentFocusedInnerChanged, onElementChange, onMount, onNavigateTypeahead, onTabbableIndexChange, onTextContentChange, onUnmount, singleSelectionDisabled, typeaheadTimeout, untabbable, multiSelected, onMultiSelectedChange, }) {
    untabbable ||= false;
    return useComponent(imperativeHandle, render, GridlistCellContext, useGridlistRow({
        context: useContext(GridlistRowContext),
        info: { index, untabbable },
        refElementParameters: {
            onElementChange,
            onMount,
            onUnmount
        },
        hasCurrentFocusParameters: {
            onCurrentFocusedChanged,
            onCurrentFocusedInnerChanged
        },
        linearNavigationParameters: {
            navigatePastEnd: navigatePastEnd || "wrap",
            navigatePastStart: navigatePastStart || "wrap"
        },
        multiSelectionChildDeclarativeParameters: {
            multiSelected: multiSelected ?? null,
            onMultiSelectedChange
        },
        multiSelectionChildParameters: {
            multiSelectionDisabled: multiSelectionDisabled || false
        },
        rovingTabIndexParameters: {
            initiallyTabbedIndex,
            onTabbableIndexChange,
            untabbable: untabbable
        },
        singleSelectionChildParameters: {
            singleSelectionDisabled: singleSelectionDisabled || false
        },
        textContentParameters: {
            getText: useDefault("getText", getText),
            onTextContentChange
        },
        typeaheadNavigationParameters: {
            collator,
            noTypeahead: noTypeahead || false,
            onNavigateTypeahead,
            typeaheadTimeout: useDefault("typeaheadTimeout", typeaheadTimeout)
        }
    }));
}
export function GridlistCell({ index, render, getText, imperativeHandle, onTextContentChange, untabbable, allowRepeatPresses, colSpan, excludeEnter, excludePointer, excludeSpace, focusSelf, longPressThreshold, onPressSync, onPressingChange }) {
    untabbable ||= false;
    return useComponent(imperativeHandle, render, null, useGridlistCell({
        context: useContext(GridlistCellContext),
        info: { index, untabbable, focusSelf: useDefault("focusSelf", focusSelf) },
        gridNavigationCellParameters: { colSpan },
        pressParameters: { allowRepeatPresses, excludeEnter, excludePointer, excludeSpace, longPressThreshold, onPressingChange, onPressSync },
        textContentParameters: { getText: useDefault("getText", getText), onTextContentChange }
    }));
}
//# sourceMappingURL=gridlist.js.map