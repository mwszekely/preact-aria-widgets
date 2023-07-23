import { h } from "preact";
import {
    CompleteListNavigationContext,
    ElementProps,
    TargetedOmit,
    TargetedPick,
    UseCompleteListNavigationChildInfo,
    UseCompleteListNavigationChildParameters,
    UseCompleteListNavigationChildReturnType,
    UseCompleteListNavigationParameters,
    UseCompleteListNavigationReturnType,
    UsePressParameters,
    UsePressReturnType, UseSingleSelectionDeclarativeParameters,
    assertEmptyObject,
    enhanceEvent,
    focus,
    monitorCallCount, useCompleteListNavigationChild,
    useCompleteListNavigationDeclarative,
    useEnsureStability,
    useMemoObject,
    useMergedProps,
    usePress,
    useStableCallback
} from "preact-prop-helpers";
import { EventDetail, OmitStrong, Prefices } from "./props.js";
import { UseLabelSyntheticParameters, useLabelSynthetic } from "./use-label.js";

export type ListboxSingleSelectEvent<E extends EventTarget> = { [EventDetail]: { selectedIndex: number } } & Pick<h.JSX.TargetedEvent<E>, "target" | "currentTarget">;
export type ListboxMultiSelectEvent<E extends EventTarget> = { [EventDetail]: { selected: boolean } } & Pick<h.JSX.TargetedEvent<E>, "target" | "currentTarget">;

export interface UseListboxContext<ListElement extends Element, ListItemElement extends Element, M extends ListboxInfo<ListItemElement>> extends CompleteListNavigationContext<ListElement, ListItemElement, M> {
    listboxContext: { selectionLimit: "single" | "multi" | "none" }
}

export interface UseListboxParametersSelf<ListElement extends Element, ListItemElement extends Element, _LabelElement extends Element, M extends ListboxInfo<ListItemElement>> {

    orientation: "horizontal" | "vertical";

    /**
     * When `"single"`, the selected item is controlled
     * via `selectedIndex`. When `"multi"`, the selected
     * items are controlled by their individual `selected` props.
     */
    selectionLimit: "single" | "multi" | "none";

    /**
     * Only used when `groupingType` is `"without-groups"` or `"group"`
     */
    selectedIndex: number | null;
    onSelectedIndexChange: UseSingleSelectionDeclarativeParameters["singleSelectionDeclarativeParameters"]["onSelectedIndexChange"] //PassiveStateUpdater<number | null, Event> | null;

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
    OmitStrong<UseCompleteListNavigationParameters<ListElement, ListItemElement, M>, "rovingTabIndexParameters" | "linearNavigationParameters" | "singleSelectionParameters">,
    TargetedOmit<UseLabelSyntheticParameters, "labelParameters", "onLabelClick">,
    TargetedOmit<UseCompleteListNavigationParameters<ListElement, ListItemElement, M>, "rovingTabIndexParameters", "focusSelfParent">,
    TargetedOmit<UseCompleteListNavigationParameters<ListElement, ListItemElement, M>, "linearNavigationParameters", "arrowKeyDirection">,
    TargetedPick<UseCompleteListNavigationParameters<ListElement, ListItemElement, M>, "singleSelectionParameters", "ariaPropName" | "selectionMode"> {
    listboxParameters: UseListboxParametersSelf<ListElement, ListItemElement, _LabelElement, M>;
}
export interface UseListboxReturnType<ListElement extends Element, ListItemElement extends Element, LabelElement extends Element, M extends ListboxInfo<ListItemElement>> extends OmitStrong<UseCompleteListNavigationReturnType<ListElement, ListItemElement, M>, "singleSelectionReturn" | "props"> {
    propsListbox: ElementProps<ListElement>;
    propsListboxLabel: ElementProps<LabelElement>;
    context: UseListboxContext<ListElement, ListItemElement, M>;
}
export interface UseListboxItemReturnType<ListItemElement extends Element, M extends ListboxInfo<ListItemElement>> extends OmitStrong<UseCompleteListNavigationChildReturnType<ListItemElement, M>, "propsChild" | "propsTabbable" | "pressParameters">, UsePressReturnType<ListItemElement> { }


export interface UseListboxItemParametersSelf<ListItemElement extends Element> {
    /**
     * When the `selectionLimit` is `"single"`, this must be `null`.
     */
    selected: boolean | null;

    onMultiSelect: null | ((e: ListboxMultiSelectEvent<ListItemElement>) => void);
}

export interface UseListboxItemParameters<ListItemElement extends Element, M extends ListboxInfo<ListItemElement>> extends
    UseCompleteListNavigationChildParameters<ListItemElement, M>,
    TargetedOmit<UsePressParameters<ListItemElement>, "pressParameters", "excludeSpace" | "onPressSync"> {
    listboxParameters: UseListboxItemParametersSelf<ListItemElement>;
    context: UseListboxContext<any, ListItemElement, M>;
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
export function useListbox<ListElement extends Element, ListItemElement extends Element, LabelElement extends Element, M extends ListboxInfo<ListItemElement> = ListboxInfo<ListItemElement>>({
    labelParameters,
    listboxParameters: { selectionLimit, groupingType, selectedIndex, onSelectedIndexChange, orientation },
    linearNavigationParameters,
    singleSelectionParameters: { ariaPropName, selectionMode },
    rovingTabIndexParameters,
    ...restParams
}: UseListboxParameters<ListElement, ListItemElement, LabelElement, M>): UseListboxReturnType<ListElement, ListItemElement, LabelElement, M> {
    monitorCallCount(useListbox);
    useEnsureStability("useListbox", selectionLimit);

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
        singleSelectionDeclarativeParameters: { selectedIndex, onSelectedIndexChange },
        singleSelectionParameters: { ariaPropName: ariaPropName || "aria-selected", selectionMode: selectionMode },
        linearNavigationParameters: { arrowKeyDirection: orientation, ...linearNavigationParameters },
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

    if (selectionLimit == "multi")
        console.assert(singleSelectionReturn.getSelectedIndex() == null)

    return {
        ...restRet,
        context: useMemoObject({
            ...context,
            listboxContext: useMemoObject({
                selectionLimit
            })
        }),
        rovingTabIndexReturn,
        propsListbox: useMergedProps(props, propsLabelList, { "aria-multiselectable": (selectionLimit == "multi" ? "true" : undefined) }),
        propsListboxLabel: propsLabelLabel
    }
}

/**
 * @compositeParams
 */
export function useListboxItem<ListItemElement extends Element, M extends ListboxInfo<ListItemElement> = ListboxInfo<ListItemElement>>({
    context: { listboxContext: { selectionLimit }, ...context },
    listboxParameters: { selected, onMultiSelect },
    pressParameters: { focusSelf, allowRepeatPresses, excludeEnter, excludePointer, longPressThreshold, onPressingChange, ...void1 },
    ...restParams
}: UseListboxItemParameters<ListItemElement, M>): UseListboxItemReturnType<ListItemElement, M> {
    monitorCallCount(useListboxItem);

    const {
        propsChild,
        propsTabbable,
        refElementReturn,
        pressParameters: { onPressSync, excludeSpace, ...void2 },
        ...restRet
    } = useCompleteListNavigationChild<ListItemElement, M>({
        context,
        ...restParams
    });

    assertEmptyObject(void1);
    assertEmptyObject(void2);

    if (selectionLimit == "single")
        console.assert(selected == null);

    propsChild.role = "option";
    propsChild["aria-disabled"] = restParams.info.unselectable ? "true" : undefined;

    const { pressReturn, props: propsPress } = usePress<ListItemElement>({
        refElementReturn, pressParameters: {
            focusSelf,
            onPressSync: useStableCallback((e) => {
                onPressSync?.(e);
                if (selectionLimit == "multi")
                    onMultiSelect?.(enhanceEvent(e, { selected: !selected }));
            }),
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
