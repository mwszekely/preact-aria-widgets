import { jsx as _jsx } from "preact/jsx-runtime";
import { assertEmptyObject, createContext, focus, memo, useCompleteGridNavigationRows, useContext, useEffect, useImperativeHandle, useMergedProps, useProcessedChild, useRefElement, useStableCallback } from "preact-prop-helpers";
import { useContextWithWarning } from "../props.js";
import { useGridlist, useGridlistCell, useGridlistRow } from "../use-gridlist.js";
import { useComponent, useComponentC, useDefault } from "./util.js";
const GridlistContext = createContext(null);
const GridlistRowContext = createContext(null);
const GridlistRowsContext = createContext(null);
const ProcessedChildContext = createContext(null);
export const Gridlist = memo((function Gridlist({ collator, disableHomeEndKeys, noTypeahead, onTabbableIndexChange, groupingType, typeaheadTimeout, singleSelectedIndex, navigatePastEnd, navigatePastStart, onSingleSelectedIndexChange, pageNavigationSize, untabbable, paginationMax, paginationMin, onTabbableColumnChange, ariaLabel, onNavigateLinear, onNavigateTypeahead, imperativeHandle, onElementChange, onMount, onUnmount, render, multiSelectionAriaPropName, multiSelectionMode, onSelectionChange, singleSelectionAriaPropName, singleSelectionMode, initiallyTabbableColumn, ...void1 }) {
    assertEmptyObject(void1);
    return useComponentC(imperativeHandle, render, GridlistContext, GridlistRowsContext, useGridlist({
        linearNavigationParameters: {
            onNavigateLinear,
            disableHomeEndKeys: useDefault("disableHomeEndKeys", disableHomeEndKeys),
            navigatePastEnd: (navigatePastEnd ?? "wrap"),
            navigatePastStart: (navigatePastStart ?? "wrap"),
            pageNavigationSize: useDefault("pageNavigationSize", pageNavigationSize),
        },
        rovingTabIndexParameters: {
            onTabbableIndexChange,
            untabbable: untabbable || false
        },
        typeaheadNavigationParameters: {
            onNavigateTypeahead,
            collator: useDefault("collator", collator),
            noTypeahead: useDefault("noTypeahead", noTypeahead),
            typeaheadTimeout: useDefault("typeaheadTimeout", typeaheadTimeout),
        },
        listboxParameters: {
            groupingType
        },
        gridNavigationParameters: {
            onTabbableColumnChange,
            initiallyTabbableColumn: initiallyTabbableColumn || 0
        },
        labelParameters: {
            ariaLabel
        },
        paginatedChildrenParameters: {
            paginationMax,
            paginationMin
        },
        singleSelectionParameters: { singleSelectionAriaPropName, singleSelectionMode: singleSelectionMode || "disabled" },
        multiSelectionParameters: { multiSelectionAriaPropName, multiSelectionMode: multiSelectionMode || "disabled", onSelectionChange },
        singleSelectionDeclarativeParameters: { onSingleSelectedIndexChange, singleSelectedIndex },
        refElementParameters: { onElementChange, onMount, onUnmount }
    }));
}));
export const GridlistRows = memo((function GridlistRows({ render, adjust, children, compare, getIndex, imperativeHandle, onAfterChildLayoutEffect, onChildrenCountChange, onChildrenMountChange, onRearranged, paginationMax, paginationMin, staggered }) {
    return useComponent(imperativeHandle, render, ProcessedChildContext, useCompleteGridNavigationRows({
        context: useContext(GridlistRowsContext),
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
export const GridlistRow = memo((function GridlistRow({ index, render, imperativeHandle, onElementChange: oec1, onMount, onUnmount, getText, untabbable, onCurrentFocusedChanged, onCurrentFocusedInnerChanged, multiSelectionDisabled, singleSelectionDisabled, collator, initiallyMultiSelected, initiallyTabbedIndex, navigatePastEnd, navigatePastStart, noTypeahead, onMultiSelectChange, onNavigateTypeahead, onTabbableIndexChange, selected, typeaheadTimeout, onTextContentChange, ...void1 }) {
    assertEmptyObject(void1);
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
    const processedGridlistRowReturn = {
        hidden: true,
        ...i2,
        props: props2,
        refElementReturn,
        managedChildReturn: { getChildren }
    };
    const retIfHidden = render(processedGridlistRowReturn);
    if (hideBecausePaginated || hideBecauseStaggered) {
        return retIfHidden;
    }
    else {
        return (_jsx(GridlistRowInner, { index: index, render: render, collator: collator, initiallyMultiSelected: initiallyMultiSelected, initiallyTabbedIndex: initiallyTabbedIndex, navigatePastEnd: navigatePastEnd, navigatePastStart: navigatePastStart, noTypeahead: noTypeahead, onMultiSelectChange: onMultiSelectChange, onNavigateTypeahead: onNavigateTypeahead, onTabbableIndexChange: onTabbableIndexChange, selected: selected, typeaheadTimeout: typeaheadTimeout, getText: getText, imperativeHandle: imperativeHandle, multiSelectionDisabled: multiSelectionDisabled, onCurrentFocusedChanged: onCurrentFocusedChanged, onCurrentFocusedInnerChanged: onCurrentFocusedInnerChanged, singleSelectionDisabled: singleSelectionDisabled, untabbable: untabbable, hideBecausePaginated: hideBecausePaginated, hideBecauseStaggered: hideBecauseStaggered, parentIsPaginated: parentIsPaginated, parentIsStaggered: parentIsStaggered, childUseEffect: childUseEffect, onTextContentChange: onTextContentChange, props: props2, ...void1 }));
    }
}));
const GridlistRowInner = memo((function GridlistRowInner({ index, collator, untabbable, navigatePastEnd, navigatePastStart, noTypeahead, onTabbableIndexChange, selected, typeaheadTimeout, getText, render, initiallyTabbedIndex, onNavigateTypeahead, imperativeHandle, onCurrentFocusedChanged, onCurrentFocusedInnerChanged, initiallyMultiSelected, multiSelectionDisabled, onMultiSelectChange, singleSelectionDisabled, childUseEffect, hideBecausePaginated, hideBecauseStaggered, parentIsPaginated, parentIsStaggered, props: props1, onTextContentChange, ...void1 }) {
    assertEmptyObject(void1);
    const { context, hasCurrentFocusReturn, linearNavigationReturn, managedChildReturn, managedChildrenReturn, multiSelectionChildReturn, pressParameters, props: props2, rovingTabIndexChildReturn, rovingTabIndexReturn, refElementReturn, singleSelectionChildReturn, textContentReturn, typeaheadNavigationReturn, } = useGridlistRow({
        info: {
            index,
            untabbable: untabbable || false
            //...uinfo
        },
        context: useContextWithWarning(GridlistContext, "gridlist"),
        gridlistRowParameters: { selected },
        textContentParameters: { getText: useDefault("getText", getText), onTextContentChange },
        linearNavigationParameters: {
            navigatePastEnd: navigatePastEnd ?? "wrap",
            navigatePastStart: navigatePastStart ?? "wrap"
        },
        hasCurrentFocusParameters: {
            onCurrentFocusedChanged,
            onCurrentFocusedInnerChanged,
        },
        rovingTabIndexParameters: {
            onTabbableIndexChange,
            initiallyTabbedIndex,
            untabbable: untabbable || false,
        },
        typeaheadNavigationParameters: {
            onNavigateTypeahead,
            collator: useDefault("collator", collator),
            noTypeahead: useDefault("noTypeahead", noTypeahead),
            typeaheadTimeout: useDefault("typeaheadTimeout", typeaheadTimeout)
        },
        singleSelectionChildParameters: { singleSelectionDisabled: singleSelectionDisabled || false },
        multiSelectionChildParameters: { multiSelectionDisabled: multiSelectionDisabled || false, initiallyMultiSelected: initiallyMultiSelected || false, onMultiSelectChange }
    });
    useEffect(childUseEffect, [childUseEffect]);
    return useComponent(imperativeHandle, render, GridlistRowContext, {
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
export const GridlistChild = memo((function GridlistChild({ index, colSpan, focusSelf, untabbable, getText, onPressSync, longPressThreshold, onPressingChange, render, imperativeHandle, onTextContentChange, info: subInfo }) {
    const context = useContextWithWarning(GridlistRowContext, "gridlist row");
    console.assert(context != null, `This GridlistChild is not contained within a GridlistRow that is contained within a Gridlist`);
    const defaultFocusSelf = useStableCallback((e) => { focus(e); }, []);
    const info = useGridlistCell({
        info: {
            index: index,
            untabbable: untabbable || false,
            focusSelf: (focusSelf ?? defaultFocusSelf),
            ...subInfo
        },
        context,
        gridNavigationCellParameters: { colSpan: colSpan ?? 1 },
        textContentParameters: { getText: useDefault("getText", getText), onTextContentChange },
        pressParameters: { onPressSync, longPressThreshold, onPressingChange }
    });
    useImperativeHandle(imperativeHandle, () => info);
    return render(info);
}));
//# sourceMappingURL=gridlist.js.map