import {
    CompleteListNavigationContext,
    ElementProps,
    EventType,
    TargetedOmit,
    TargetedPick,
    UseCompleteListNavigationChildDeclarativeParameters,
    UseCompleteListNavigationChildDeclarativeReturnType,
    UseCompleteListNavigationChildInfo,
    UseCompleteListNavigationChildInfoKeysParameters,
    UseCompleteListNavigationDeclarativeParameters,
    UseCompleteListNavigationParameters,
    UseCompleteListNavigationReturnType,
    UseGenericChildParameters,
    UsePressParameters,
    UsePressReturnType,
    assertEmptyObject,
    focus, monitorCallCount,
    useCompleteListNavigationChildDeclarative,
    useCompleteListNavigationDeclarative,
    useMergedProps,
    usePress,
    useStableCallback
} from "preact-prop-helpers";
import { EventDetail, OmitStrong, Prefices } from "./props.js";
import { UseLabelSyntheticParameters, useLabelSynthetic } from "./use-label.js";

export type ListboxSingleSelectEvent<E extends EventTarget> = { [EventDetail]: { selectedIndex: number } } & Pick<EventType<E, Event>, "target" | "currentTarget">;
export type ListboxMultiSelectEvent<E extends EventTarget> = { [EventDetail]: { selected: boolean } } & Pick<EventType<E, Event>, "target" | "currentTarget">;

export interface UseListboxContext<ListItemElement extends Element, M extends ListboxInfo<ListItemElement>> extends CompleteListNavigationContext<ListItemElement, M> { }

export interface UseListboxParametersSelf {

    orientation: "horizontal" | "vertical";

    /**
     * * `"without-groups"`: This is a listbox with no groups
     * * `"with-groups"`: This is a listbox that is grouped into 2 or more labelled sections. In this case, **all navigation and selection is disabled** (meaning you can pass whatever you'd like to them, it's all ignored) and delegated to the child `group`s.
     * * `"group"`: This is a group, contained within a listbox with `type=="with-groups"`
     * 
     * There is currently no support for a mix of grouped and ungrouped options.
     */
    groupingType: "with-groups" | "without-groups" | "group";
}

export interface UseListboxParameters<ListElement extends Element, ListItemElement extends Element, _LabelElement extends Element, M extends ListboxInfo<ListItemElement>> extends
    OmitStrong<UseCompleteListNavigationDeclarativeParameters<ListElement, ListItemElement, M>, "rovingTabIndexParameters" | "linearNavigationParameters" | "singleSelectionParameters">,
    TargetedOmit<UseLabelSyntheticParameters, "labelParameters", "onLabelClick">,
    TargetedOmit<UseCompleteListNavigationParameters<ListElement, ListItemElement, M>, "rovingTabIndexParameters", "focusSelfParent">,
    TargetedOmit<UseCompleteListNavigationParameters<ListElement, ListItemElement, M>, "linearNavigationParameters", "arrowKeyDirection">,
    TargetedPick<UseCompleteListNavigationParameters<ListElement, ListItemElement, M>, "singleSelectionParameters", "singleSelectionAriaPropName" | "singleSelectionMode"> {
    listboxParameters: UseListboxParametersSelf;
}
export interface UseListboxReturnType<ListElement extends Element, ListItemElement extends Element, LabelElement extends Element, M extends ListboxInfo<ListItemElement>> extends OmitStrong<UseCompleteListNavigationReturnType<ListElement, ListItemElement, M>, "singleSelectionReturn" | "props"> {
    propsListbox: ElementProps<ListElement>;
    propsListboxLabel: ElementProps<LabelElement>;
    context: UseListboxContext<ListItemElement, M>;
}
export interface UseListboxItemReturnType<ListItemElement extends Element, M extends ListboxInfo<ListItemElement>> extends OmitStrong<UseCompleteListNavigationChildDeclarativeReturnType<ListItemElement, M>, "propsChild" | "propsTabbable" | "pressParameters">, UsePressReturnType<ListItemElement> { }


export interface UseListboxItemParametersSelf {
    /**
     * When the `selectionLimit` is `"single"`, this must be `null`.
     */
    //selected: Nullable<boolean>;

    //onMultiSelect: Nullable<((e: ListboxMultiSelectEvent<ListItemElement>) => void)>;
}

export interface UseListboxItemParameters<ListItemElement extends Element, M extends ListboxInfo<ListItemElement>> extends
    UseGenericChildParameters<UseListboxContext<ListItemElement, M>, Pick<M, UseCompleteListNavigationChildInfoKeysParameters<M>>>,
    UseCompleteListNavigationChildDeclarativeParameters<ListItemElement, M>,
    TargetedOmit<UsePressParameters<ListItemElement>, "pressParameters", "excludeSpace" | "onPressSync" | "focusSelf"> {
    listboxParameters: UseListboxItemParametersSelf;
}

export interface ListboxInfo<ListItemElement extends Element> extends UseCompleteListNavigationChildInfo<ListItemElement> {

}

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
export function useListbox<ListElement extends Element, ListItemElement extends Element, LabelElement extends Element>({
    labelParameters,
    listboxParameters: { groupingType, orientation },
    linearNavigationParameters,
    singleSelectionParameters: { singleSelectionAriaPropName, singleSelectionMode, ...void1 },
    multiSelectionParameters: { multiSelectionAriaPropName, multiSelectionMode, onSelectionChange, ...void2 },
    singleSelectionDeclarativeParameters: { onSingleSelectedIndexChange, singleSelectedIndex, ...void3 },
    rovingTabIndexParameters,
    ...restParams
}: UseListboxParameters<ListElement, ListItemElement, LabelElement, ListboxInfo<ListItemElement>>): UseListboxReturnType<ListElement, ListItemElement, LabelElement, ListboxInfo<ListItemElement>> {
    monitorCallCount(useListbox);
    assertEmptyObject(void1);
    assertEmptyObject(void2);
    assertEmptyObject(void3);

    type M = ListboxInfo<ListItemElement>;

    const {
        propsInput: propsLabelList,
        propsLabel: propsLabelLabel,
        randomIdInputReturn: { id: _inputId },
        randomIdLabelReturn: { id: _labelId }
    } = useLabelSynthetic<ListElement, LabelElement>({
        labelParameters: {
            ...labelParameters,
            onLabelClick: useStableCallback(() => {
                rovingTabIndexReturn.focusSelf();
            })
        },
        randomIdInputParameters: { prefix: Prefices.listbox },
        randomIdLabelParameters: { prefix: Prefices.listboxLabel }
    });
    let {
        context,
        props: { ...props },
        rovingTabIndexReturn,
        singleSelectionReturn,
        ...restRet
    } = useCompleteListNavigationDeclarative<ListElement, ListItemElement, M>({
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
        context = null!
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
    }
}

/**
 * @compositeParams
 */
export function useListboxItem<ListItemElement extends Element, M extends ListboxInfo<ListItemElement> = ListboxInfo<ListItemElement>>({
    context,
    listboxParameters: { },
    pressParameters: { allowRepeatPresses, excludeEnter, excludePointer, longPressThreshold, onPressingChange, ...void1 },
    singleSelectionChildParameters: { singleSelectionDisabled },
    ...restParams
}: UseListboxItemParameters<ListItemElement, M>): UseListboxItemReturnType<ListItemElement, M> {
    monitorCallCount(useListboxItem);


    const {
        propsChild,
        propsTabbable,
        refElementReturn,
        pressParameters: { onPressSync, excludeSpace, ...void2 },
        ...restRet
    } = useCompleteListNavigationChildDeclarative<ListItemElement, M>({
        context,
        singleSelectionChildParameters: { singleSelectionDisabled },
        ...restParams
    });

    assertEmptyObject(void1);
    assertEmptyObject(void2);

    propsChild.role = "option";
    propsChild["aria-disabled"] = singleSelectionDisabled ? "true" : undefined;

    const { pressReturn, props: propsPress } = usePress<ListItemElement>({
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
    })

    return {
        pressReturn,
        refElementReturn,
        props: useMergedProps(propsChild, propsTabbable, propsPress),
        ...restRet
    }
}
