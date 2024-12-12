import { assertEmptyObject, useCompleteGridNavigationCell, useCompleteGridNavigationDeclarative, useCompleteGridNavigationRowDeclarative, useCompleteGridNavigationRowOuter, useCompleteGridNavigationRows, useMergedProps, useMonitoring, usePress, useStableCallback } from "preact-prop-helpers";
import { useLabelSynthetic } from "./use-label.js";
/**
 * @compositeParams
 */
export function useGridlist({ gridNavigationParameters, linearNavigationParameters, managedChildrenParameters, multiSelectionParameters, paginatedChildrenParameters, rearrangeableChildrenParameters, refElementParameters, rovingTabIndexParameters, singleSelectionParameters, staggeredChildrenParameters, typeaheadNavigationParameters, singleSelectionDeclarativeParameters, labelParameters, randomIdInputParameters, randomIdLabelParameters, gridNavigationCompleteParameters, processedIndexManglerParameters, ...void1 }) {
    return useMonitoring(function useGridlist() {
        assertEmptyObject(void1);
        const { propsInput, propsLabel, ...labelSyntheticRet } = useLabelSynthetic({
            labelParameters,
            randomIdInputParameters,
            randomIdLabelParameters
        });
        const { context: contextRows, props, ...completeGridNavigationRet } = useCompleteGridNavigationDeclarative({
            gridNavigationParameters,
            linearNavigationParameters,
            multiSelectionParameters,
            paginatedChildrenParameters,
            refElementParameters,
            rovingTabIndexParameters,
            singleSelectionParameters,
            typeaheadNavigationParameters,
            singleSelectionDeclarativeParameters,
            gridNavigationCompleteParameters,
            processedIndexManglerParameters
        });
        const { context: contextProcessing, ...completeGridNavigationRowsRet } = useCompleteGridNavigationRows({
            context: contextRows,
            managedChildrenParameters,
            paginatedChildrenParameters,
            rearrangeableChildrenParameters,
            staggeredChildrenParameters,
        });
        completeGridNavigationRet.rearrangeableChildrenReturn;
        completeGridNavigationRowsRet.rearrangeableChildrenReturn;
        return {
            ...completeGridNavigationRet,
            ...completeGridNavigationRowsRet,
            ...labelSyntheticRet,
            props: useMergedProps(props, propsInput, { role: "grid", "aria-multiselectable": (contextRows.multiSelectionContext.multiSelectionMode != "disabled" ? "true" : undefined) }),
            propsLabel,
            contextChildren: contextRows,
            contextProcessing
        };
    });
}
/**
 * @compositeParams
 */
export function useGridlistRowOuter(p) {
    return useMonitoring(function useGridlistRowOuter() {
        let r = useCompleteGridNavigationRowOuter(p);
        r.props.role = "row";
        return r;
    });
}
/**
 * @compositeParams
 */
export function useGridlistRow(p) {
    return useMonitoring(function useGridlistRow() {
        // `selected` should only be true/false for multi-selection
        if (p.context.multiSelectionContext.multiSelectionMode == "disabled")
            console.assert(p.multiSelectionChildDeclarativeParameters.multiSelected == null, `useGridlistRow: multiSelectionMode is disabled, but selected is ${p.multiSelectionChildDeclarativeParameters.multiSelected?.toString()} (instead of null).`);
        let r = useCompleteGridNavigationRowDeclarative(p);
        r.props.role = "row";
        return r;
    });
}
/**
 * @compositeParams
 */
export function useGridlistCell({ pressParameters: { allowRepeatPresses, excludeEnter, excludePointer, excludeSpace, longPressThreshold, onPressSync, onPressingChange }, ...p }) {
    return useMonitoring(function useGridlistCell() {
        let { props, ...r } = useCompleteGridNavigationCell(p);
        const { pressReturn, props: propsPress } = usePress({
            pressParameters: {
                onPressSync,
                focusSelf: p.info.focusSelf,
                allowRepeatPresses,
                excludeEnter,
                excludePointer,
                excludeSpace: useStableCallback(() => r.pressParameters.excludeSpace?.() || excludeSpace?.() || false),
                longPressThreshold,
                onPressingChange
            },
            refElementReturn: r.refElementReturn,
        });
        return {
            propsTabbable: props,
            propsCell: { role: "gridcell" },
            propsPress,
            pressReturn,
            ...r
        };
    });
}
//# sourceMappingURL=use-gridlist.js.map