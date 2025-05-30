import { assertEmptyObject, focus, useCompleteListNavigationChildDeclarative, useCompleteListNavigationDeclarative, useMergedProps, useMonitoring, usePress, useStableCallback } from "preact-prop-helpers";
import { EventDetail, Prefices } from "./props.js";
import { useLabelSynthetic } from "./use-label.js";
/**
 * Implements a [Listbox](https://www.w3.org/WAI/ARIA/apg/patterns/listbox/) pattern.
 *
 * @remarks A listbox is a very limited widget and its items cannot contain interactive or non-text content.
 *
 * @see {@link useGridlist} for a more capable list widget.
 *
 * @compositeParams
 *
 * @hasChild {@link useListboxItem}
 */
export function useListbox({ labelParameters, listboxParameters: { groupingType, orientation }, linearNavigationParameters, singleSelectionParameters: { singleSelectionAriaPropName, singleSelectionMode, ...void1 }, multiSelectionParameters: { multiSelectionAriaPropName, multiSelectionMode, onSelectionChange, ...void2 }, singleSelectionDeclarativeParameters: { onSingleSelectedIndexChange, singleSelectedIndex, ...void3 }, rovingTabIndexParameters, ...restParams }) {
    return useMonitoring(function useListbox() {
        assertEmptyObject(void1);
        assertEmptyObject(void2);
        assertEmptyObject(void3);
        const { propsInput: propsLabelList, propsLabel: propsLabelLabel, randomIdInputReturn: { id: _inputId }, randomIdLabelReturn: { id: _labelId } } = useLabelSynthetic({
            labelParameters: {
                ...labelParameters,
                onLabelClick: useStableCallback(() => {
                    rovingTabIndexReturn.focusSelf();
                })
            },
            randomIdInputParameters: { prefix: Prefices.listbox },
            randomIdLabelParameters: { prefix: Prefices.listboxLabel }
        });
        let { context, props: { ...props }, rovingTabIndexReturn, singleSelectionReturn: _singleSelectionReturn, ...restRet } = useCompleteListNavigationDeclarative({
            rovingTabIndexParameters: { ...rovingTabIndexParameters, focusSelfParent: focus },
            singleSelectionDeclarativeParameters: { onSingleSelectedIndexChange, singleSelectedIndex },
            singleSelectionParameters: { singleSelectionAriaPropName: singleSelectionAriaPropName || "aria-selected", singleSelectionMode },
            linearNavigationParameters: { arrowKeyDirection: orientation, ...linearNavigationParameters },
            multiSelectionParameters: { multiSelectionAriaPropName, multiSelectionMode, onSelectionChange },
            ...restParams
        });
        if (groupingType == "group")
            props.role = "group";
        else if (groupingType == "with-groups") {
            // Intentionally clobbering all the list navigation stuff.
            props = { role: "listbox" };
            // ...actually, context too while we're at it.
            context = null;
        }
        else {
            props.role = "listbox";
        }
        return {
            ...restRet,
            context,
            rovingTabIndexReturn,
            propsListbox: useMergedProps(props, propsLabelList, { "aria-multiselectable": (multiSelectionMode != "disabled" ? true : undefined) }),
            propsListboxLabel: propsLabelLabel
        };
    });
}
/*
export interface UseListboxChildrenParameters<TabbableChildElement extends Element, M extends UseProcessedChildInfo<TabbableChildElement>> extends    UseCompleteListNavigationChildrenParameters<TabbableChildElement, M> {
}

export const useListboxChildren = monitored(function useListboxChildren<E extends Element, M extends UseProcessedChildInfo<E>>({
    context,
    managedChildrenParameters,
    paginatedChildrenParameters,
    rearrangeableChildrenParameters,
    staggeredChildrenParameters
}: UseListboxChildrenParameters<E, M>) {
    return useCompleteListNavigationChildren<E, M>({
        context,
        managedChildrenParameters,
        paginatedChildrenParameters,
        rearrangeableChildrenParameters,
        staggeredChildrenParameters
    });
})*/
/**
 * @compositeParams
 */
export function useListboxItem({ context, listboxParameters, pressParameters: { allowRepeatPresses, excludeEnter, excludePointer, longPressThreshold, onPressingChange, ...void1 }, singleSelectionChildParameters: { singleSelectionDisabled }, ...restParams }) {
    return useMonitoring(function useListboxItem() {
        const { propsChild, propsTabbable, refElementReturn, pressParameters: { excludeSpace, ...void2 }, selectionChildReturn: { firePressSelectionEvent }, ...restRet } = useCompleteListNavigationChildDeclarative({
            context,
            singleSelectionChildParameters: { singleSelectionDisabled },
            ...restParams
        });
        assertEmptyObject(void1);
        assertEmptyObject(void2);
        assertEmptyObject(listboxParameters);
        propsChild.role = "option";
        propsChild["aria-disabled"] = singleSelectionDisabled ? "true" : undefined;
        const { pressReturn, props: propsPress } = usePress({
            refElementReturn,
            pressParameters: {
                onPressSync: firePressSelectionEvent,
                focusSelf: restParams.info.focusSelf,
                excludeSpace,
                allowRepeatPresses,
                excludeEnter,
                excludePointer,
                longPressThreshold,
                onPressingChange
            }
        });
        return {
            pressReturn,
            refElementReturn,
            props: useMergedProps(propsChild, propsTabbable, propsPress),
            ...restRet
        };
    });
}
//# sourceMappingURL=use-listbox.js.map