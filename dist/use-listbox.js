import { assertEmptyObject, focus, monitorCallCount, useCompleteListNavigationChildDeclarative, useCompleteListNavigationDeclarative, useMemoObject, useMergedProps, usePress, useStableCallback } from "preact-prop-helpers";
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
    monitorCallCount(useListbox);
    //useEnsureStability("useListbox", selectionLimit);
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
    let { context, props: { ...props }, rovingTabIndexReturn, singleSelectionReturn, ...restRet } = useCompleteListNavigationDeclarative({
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
    //if (selectionLimit == "multi")
    //    console.assert(singleSelectionReturn.getSingleSelectedIndex() == null)
    return {
        ...restRet,
        context: useMemoObject({
            ...context,
            listboxContext: useMemoObject({
            //selectionLimit
            })
        }),
        rovingTabIndexReturn,
        propsListbox: useMergedProps(props, propsLabelList, { "aria-multiselectable": (multiSelectionMode != "disabled" ? true : undefined) }),
        propsListboxLabel: propsLabelLabel
    };
}
/**
 * @compositeParams
 */
export function useListboxItem({ context: { listboxContext: {}, ...context }, listboxParameters: {}, pressParameters: { allowRepeatPresses, excludeEnter, excludePointer, longPressThreshold, onPressingChange, ...void1 }, singleSelectionChildParameters: { singleSelectionDisabled }, ...restParams }) {
    monitorCallCount(useListboxItem);
    const { propsChild, propsTabbable, refElementReturn, pressParameters: { onPressSync, excludeSpace, ...void2 }, ...restRet } = useCompleteListNavigationChildDeclarative({
        context,
        singleSelectionChildParameters: { singleSelectionDisabled },
        ...restParams
    });
    assertEmptyObject(void1);
    assertEmptyObject(void2);
    //if (context.multiSelectionContext.multiSelectionMode == "disabled")
    //    console.assert(selected == null);
    propsChild.role = "option";
    propsChild["aria-disabled"] = singleSelectionDisabled ? "true" : undefined;
    const { pressReturn, props: propsPress } = usePress({
        refElementReturn,
        pressParameters: {
            onPressSync,
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
}
//# sourceMappingURL=use-listbox.js.map