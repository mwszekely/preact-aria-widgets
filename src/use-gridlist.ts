import { CompleteGridNavigationCellContext, CompleteGridNavigationRowContext, ElementProps, JSX, OmitStrong, TargetedOmit, UseCompleteGridNavigationCellInfo, UseCompleteGridNavigationCellParameters, UseCompleteGridNavigationCellReturnType, UseCompleteGridNavigationDeclarativeParameters, UseCompleteGridNavigationDeclarativeReturnType, UseCompleteGridNavigationRowDeclarativeParameters, UseCompleteGridNavigationRowInfo, UseCompleteGridNavigationRowOuterParameters, UseCompleteGridNavigationRowOuterReturnType, UseCompleteGridNavigationRowReturnType, UseCompleteGridNavigationRowsContext, UseCompleteGridNavigationRowsInfo, UseCompleteGridNavigationRowsParameters, UseCompleteGridNavigationRowsReturnType, UsePressParameters, UsePressReturnType, assertEmptyObject, useCompleteGridNavigationCell, useCompleteGridNavigationDeclarative, useCompleteGridNavigationRowDeclarative, useCompleteGridNavigationRowOuter, useCompleteGridNavigationRows, useMergedProps, useMonitoring, usePress, useStableCallback } from "preact-prop-helpers/preact";
import { UseLabelReturnType, UseLabelSyntheticParameters, useLabelSynthetic } from "./use-label.js";



export interface UseGridlistRowInfo<RowElement extends keyof JSX.IntrinsicElements> extends UseCompleteGridNavigationRowInfo<RowElement> { }
export interface UseGridlistRowsInfo<RowElement extends keyof JSX.IntrinsicElements> extends UseCompleteGridNavigationRowsInfo<RowElement> { }
export interface UseGridlistCellInfo<RowElement extends keyof JSX.IntrinsicElements> extends UseCompleteGridNavigationCellInfo<RowElement> { }

export interface UseGridlistRowContext<ChildElement extends keyof JSX.IntrinsicElements, M extends UseGridlistRowInfo<ChildElement>> extends CompleteGridNavigationRowContext<ChildElement, M> { }
export interface UseGridlistRowsContext<ChildElement extends keyof JSX.IntrinsicElements, SM extends UseGridlistRowsInfo<ChildElement>> extends UseCompleteGridNavigationRowsContext<ChildElement, SM> { }
export interface UseGridlistCellContext<ChildElement extends keyof JSX.IntrinsicElements, M extends UseGridlistCellInfo<ChildElement>> extends CompleteGridNavigationCellContext<ChildElement, M> { }





export interface UseGridlistParameters<ParentElement extends keyof JSX.IntrinsicElements, RowElement extends keyof JSX.IntrinsicElements, RsM extends UseGridlistRowsInfo<RowElement> = UseGridlistRowsInfo<RowElement>, RM extends UseGridlistRowInfo<RowElement> = UseGridlistRowInfo<RowElement>> extends UseCompleteGridNavigationDeclarativeParameters<ParentElement, RowElement, RM>, OmitStrong<UseCompleteGridNavigationRowsParameters<RowElement, RM, RsM>, "context">, UseLabelSyntheticParameters { }
export interface UseGridlistReturnType<ParentElement extends keyof JSX.IntrinsicElements, RowElement extends keyof JSX.IntrinsicElements, LabelElement extends keyof JSX.IntrinsicElements, RsM extends UseGridlistRowsInfo<RowElement> = UseGridlistRowsInfo<RowElement>, RM extends UseGridlistRowInfo<RowElement> = UseGridlistRowInfo<RowElement>> extends
    OmitStrong<UseCompleteGridNavigationDeclarativeReturnType<ParentElement, RowElement, RM>, "context" | "rearrangeableChildrenReturn">,
    OmitStrong<UseCompleteGridNavigationRowsReturnType<RowElement, RsM>, "context">,
    OmitStrong<UseLabelReturnType<ParentElement, LabelElement>, "propsInput"> {
    contextChildren: UseGridlistRowContext<RowElement, RM>;
    contextProcessing: UseGridlistRowsContext<RowElement, RsM>;
}





export interface UseGridlistRowOuterParameters<RowElement extends keyof JSX.IntrinsicElements, RsM extends UseCompleteGridNavigationRowsInfo<RowElement>> extends UseCompleteGridNavigationRowOuterParameters<RowElement, RsM> { }
export interface UseGridlistRowOuterReturnType<RowElement extends keyof JSX.IntrinsicElements, RsM extends UseCompleteGridNavigationRowsInfo<RowElement>> extends UseCompleteGridNavigationRowOuterReturnType<RowElement, RsM> { }


export interface UseGridlistRowParameters<RowElement extends keyof JSX.IntrinsicElements, CellElement extends keyof JSX.IntrinsicElements, RM extends UseGridlistRowInfo<RowElement>, CM extends UseGridlistCellInfo<CellElement>> extends UseCompleteGridNavigationRowDeclarativeParameters<RowElement, CellElement, RM, CM> { }
export interface UseGridlistRowReturnType<RowElement extends keyof JSX.IntrinsicElements, CellElement extends keyof JSX.IntrinsicElements, RM extends UseGridlistRowInfo<RowElement>, CM extends UseGridlistCellInfo<CellElement>> extends UseCompleteGridNavigationRowReturnType<RowElement, CellElement, RM, CM> {
    context: UseGridlistCellContext<CellElement, CM>;
}



export interface UseGridlistCellParameters<CellElement extends keyof JSX.IntrinsicElements, CM extends UseGridlistCellInfo<CellElement>> extends UseCompleteGridNavigationCellParameters<CellElement, CM>, TargetedOmit<UsePressParameters<CellElement>, "pressParameters", "focusSelf"> { }
export interface UseGridlistCellReturnType<CellElement extends keyof JSX.IntrinsicElements, CM extends UseGridlistCellInfo<CellElement>> extends OmitStrong<UseCompleteGridNavigationCellReturnType<CellElement, CM>, "props">, OmitStrong<UsePressReturnType<CellElement>, "props"> {
    propsTabbable: ElementProps<CellElement>;
    propsCell: ElementProps<any>;
    propsPress: ElementProps<any>;
}

/**
 * @compositeParams
 */
export function useGridlist<ParentElement extends keyof JSX.IntrinsicElements, RowElement extends keyof JSX.IntrinsicElements, LabelElement extends keyof JSX.IntrinsicElements, RsM extends UseGridlistRowsInfo<RowElement>, RM extends UseGridlistRowInfo<RowElement>>({
    gridNavigationParameters,
    linearNavigationParameters,
    managedChildrenParameters,
    multiSelectionParameters,
    paginatedChildrenParameters,
    rearrangeableChildrenParameters,
    refElementParameters,
    rovingTabIndexParameters,
    singleSelectionParameters,
    staggeredChildrenParameters,
    typeaheadNavigationParameters,
    singleSelectionDeclarativeParameters,
    labelParameters,
    randomIdInputParameters,
    randomIdLabelParameters,
    gridNavigationCompleteParameters,
    processedIndexManglerParameters,
    ...void1
}: UseGridlistParameters<ParentElement, RowElement, RsM, RM>): UseGridlistReturnType<ParentElement, RowElement, LabelElement, RsM, RM> {
    return useMonitoring(function useGridlist(): UseGridlistReturnType<ParentElement, RowElement, LabelElement, RsM, RM> {
        assertEmptyObject(void1);

        const { propsInput, propsLabel, ...labelSyntheticRet } = useLabelSynthetic<ParentElement, LabelElement>({
            labelParameters,
            randomIdInputParameters,
            randomIdLabelParameters
        })

        const { context: contextRows, props, ...completeGridNavigationRet } = useCompleteGridNavigationDeclarative<ParentElement, RowElement, RM>({
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
        const { context: contextProcessing, ...completeGridNavigationRowsRet } = useCompleteGridNavigationRows<RowElement, RM, RsM>({
            context: contextRows,
            managedChildrenParameters,
            paginatedChildrenParameters,
            rearrangeableChildrenParameters,
            staggeredChildrenParameters,
        });
        completeGridNavigationRet.rearrangeableChildrenReturn;
        completeGridNavigationRowsRet.rearrangeableChildrenReturn

        return {
            ...completeGridNavigationRet,
            ...completeGridNavigationRowsRet,
            ...labelSyntheticRet,
            props: useMergedProps(props, propsInput, { role: "grid", "aria-multiselectable": (contextRows.multiSelectionContext.multiSelectionMode != "disabled" ? "true" : undefined) }),
            propsLabel,
            contextChildren: contextRows,
            contextProcessing
        }
    });
}

/**
 * @compositeParams
 */
export function useGridlistRowOuter<RowElement extends keyof JSX.IntrinsicElements, RsM extends UseCompleteGridNavigationRowsInfo<RowElement>>(p: UseGridlistRowOuterParameters<RowElement, RsM>): UseGridlistRowOuterReturnType<RowElement, RsM> {
    return useMonitoring(function useGridlistRowOuter(): UseGridlistRowOuterReturnType<RowElement, RsM> {
        let r = useCompleteGridNavigationRowOuter(p);
        r.props.role = "row";
        return r;
    });
}

/**
 * @compositeParams
 */
export function useGridlistRow<RowElement extends keyof JSX.IntrinsicElements, CellElement extends keyof JSX.IntrinsicElements, RM extends UseGridlistRowInfo<RowElement>, CM extends UseGridlistCellInfo<CellElement>>(p: UseGridlistRowParameters<RowElement, CellElement, RM, CM>): UseGridlistRowReturnType<RowElement, CellElement, RM, CM> {
    return useMonitoring(function useGridlistRow(): UseGridlistRowReturnType<RowElement, CellElement, RM, CM> {
        // `selected` should only be true/false for multi-selection
        if (p.context.multiSelectionContext.multiSelectionMode == "disabled")
            console.assert(p.multiSelectionChildDeclarativeParameters.multiSelected == null, `useGridlistRow: multiSelectionMode is disabled, but selected is ${p.multiSelectionChildDeclarativeParameters.multiSelected?.toString()} (instead of null).`);

        let r = useCompleteGridNavigationRowDeclarative<RowElement, CellElement, RM, CM>(p);

        r.props.role = "row";

        return r;
    });
}

/**
 * @compositeParams
 */
export function useGridlistCell<CellElement extends keyof JSX.IntrinsicElements, CM extends UseGridlistCellInfo<CellElement>>({
    pressParameters: { allowRepeatPresses, excludeEnter, excludePointer, excludeSpace, longPressThreshold, onPressSync, onPressingChange },
    ...p
}: UseGridlistCellParameters<CellElement, CM>): UseGridlistCellReturnType<CellElement, CM> {
    return useMonitoring(function useGridlistCell(): UseGridlistCellReturnType<CellElement, CM> {
        let { props, ...r } = useCompleteGridNavigationCell<CellElement, CM>(p);


        const {
            pressReturn,
            props: propsPress
        } = usePress({
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
        })

        return {
            propsTabbable: props,
            propsCell: { role: "gridcell" },
            propsPress,
            pressReturn,
            ...r
        };
    });
}