import { h } from "preact";
import {
    CompleteListNavigationContext, PassiveStateUpdater, useCompleteListNavigation,
    useCompleteListNavigationChild,
    UseCompleteListNavigationChildParameters,
    UseCompleteListNavigationChildReturnType,
    UseCompleteListNavigationParameters,
    UseCompleteListNavigationReturnType, useEnsureStability, UseListNavigationSingleSelectionSortableChildInfo, useMergedProps, useSingleSelectionDeclarative, useStableCallback, useStableObject
} from "preact-prop-helpers";
import { EventDetail, Prefices } from "./props";
import { useLabelSynthetic, UseLabelSyntheticParameters } from "./use-label";

export type ListboxSingleSelectEvent<E extends EventTarget> = { [EventDetail]: { selectedIndex: number } } & Pick<h.JSX.TargetedEvent<E>, "target" | "currentTarget">;

export interface UseListboxContext<ListElement extends Element, ListItemElement extends Element, M extends ListboxInfo<ListItemElement>> extends CompleteListNavigationContext<ListElement, ListItemElement, M> {
    listboxContext: { selectionLimit: "single" | "multi" }
}

export interface UseListboxParameters<ListElement extends Element, ListItemElement extends Element, _LabelElement extends Element, M extends ListboxInfo<ListItemElement>> extends Omit<UseCompleteListNavigationParameters<ListElement, ListItemElement, M>, "singleSelectionParameters"> {
    labelParameters: Omit<UseLabelSyntheticParameters["labelParameters"], "onLabelClick">;
    listboxParameters: {
        /**
         * When `"single"`, the selected item is controlled
         * via `selectedIndex`. When `"multi"`, the selected
         * items are controlled by their individual `selected` props.
         */
        selectionLimit: "single" | "multi";

        /**
         * Only used when `groupingType` is `"without-groups"` or `"group"`
         */
        selectedIndex: number | null;
        setSelectedIndex: PassiveStateUpdater<number | null, Event>;

        /**
         * * `"without-groups"`: This is a listbox with no groups
         * * `"with-groups"`: This is a listbox that is grouped into 2 or more labelled sections. In this case, **all navigation and selection is disabled** (meaning you can pass whatever you'd like to them, it's all ignored) and delegated to the child `group`s.
         * * `"group"`: This is a group, contained within a listbox with `type=="with-groups"`
         * 
         * There is currently no support for a mix of grouped and ungrouped options.
         */
        groupingType: "with-groups" | "without-groups" | "group";
    }
}
export interface UseListboxReturnType<ListElement extends Element, ListItemElement extends Element, LabelElement extends Element, M extends ListboxInfo<ListItemElement>> extends Omit<UseCompleteListNavigationReturnType<ListElement, ListItemElement, M>, "props"> {
    propsListbox: h.JSX.HTMLAttributes<ListElement>;
    propsListboxLabel: h.JSX.HTMLAttributes<LabelElement>;
    context: UseListboxContext<ListElement, ListItemElement, M>;
}
export interface UseListboxItemReturnType<ListItemElement extends Element, M extends ListboxInfo<ListItemElement>> extends UseCompleteListNavigationChildReturnType<ListItemElement, M> { }
export interface UseListboxItemParameters<ListItemElement extends Element, M extends ListboxInfo<ListItemElement>> extends UseCompleteListNavigationChildParameters<ListItemElement, M, never> {
    listboxParameters: {
        /**
         * When the `selectionLimit` is `"single"`, this must be `null`.
         */
        selected: boolean | null;
    }
    context: UseListboxContext<any, ListItemElement, M>;
}

export interface ListboxInfo<ListItemElement extends Element> extends UseListNavigationSingleSelectionSortableChildInfo<ListItemElement> {

}

export function useListbox<ListElement extends Element, ListItemElement extends Element, LabelElement extends Element, M extends ListboxInfo<ListItemElement>>({
    linearNavigationParameters,
    rearrangeableChildrenParameters,
    rovingTabIndexParameters,
    sortableChildrenParameters,
    typeaheadNavigationParameters,
    labelParameters,
    listboxParameters: { selectionLimit, groupingType, selectedIndex, setSelectedIndex }
}: UseListboxParameters<ListElement, ListItemElement, LabelElement, M>): UseListboxReturnType<ListElement, ListItemElement, LabelElement, M> {
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
        childrenHaveFocusReturn,
        context,
        linearNavigationReturn,
        managedChildrenReturn,
        props,
        rearrangeableChildrenReturn,
        rovingTabIndexReturn,
        singleSelectionReturn,
        sortableChildrenReturn,
        typeaheadNavigationReturn
    } = useCompleteListNavigation<ListElement, ListItemElement, M>({
        linearNavigationParameters,
        rearrangeableChildrenParameters,
        rovingTabIndexParameters,
        singleSelectionParameters: { initiallySelectedIndex: selectedIndex, setSelectedIndex },
        sortableChildrenParameters,
        typeaheadNavigationParameters
    });

    const _v: void = useSingleSelectionDeclarative({ 
        singleSelectionDeclarativeParameters: { selectedIndex }, 
        singleSelectionReturn: { setSelectedIndex: singleSelectionReturn.setSelectedIndex }
     })

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
        childrenHaveFocusReturn,
        context: useStableObject({
            ...context,
            listboxContext: useStableObject({
                selectionLimit
            })
        }),
        linearNavigationReturn,
        managedChildrenReturn,
        rearrangeableChildrenReturn,
        rovingTabIndexReturn,
        singleSelectionReturn,
        sortableChildrenReturn,
        typeaheadNavigationReturn,
        propsListbox: useMergedProps(props, propsLabelList, { "aria-multiselectable": (selectionLimit == "multi" ? "true" : undefined) }),
        propsListboxLabel: propsLabelLabel
    }
}

export function useListboxItem<ListItemElement extends Element, M extends ListboxInfo<ListItemElement>>({
    completeListNavigationChildParameters,
    pressParameters,
    context: { listboxContext: { selectionLimit }, ...context },
    managedChildParameters,
    singleSelectionChildParameters,
    rovingTabIndexChildParameters,
    sortableChildParameters,
    textContentParameters,
    listboxParameters: { selected }
}: UseListboxItemParameters<ListItemElement, M>): UseListboxItemReturnType<ListItemElement, M> {
    const {
        hasCurrentFocusReturn,
        managedChildReturn,
        pressReturn,
        props,
        rovingTabIndexChildReturn,
        singleSelectionChildReturn
    } = useCompleteListNavigationChild<ListItemElement, M, never>({
        completeListNavigationChildParameters,
        textContentParameters,
        managedChildParameters,
        pressParameters,
        singleSelectionChildParameters,
        rovingTabIndexChildParameters,
        sortableChildParameters,
        context
    });


    if (selectionLimit == "single")
        console.assert(selected == null);

    props.role = "option";

    return {
        hasCurrentFocusReturn,
        managedChildReturn,
        pressReturn,
        props,
        rovingTabIndexChildReturn,
        singleSelectionChildReturn
    }
}
/*
export function useListboxGroup<ContainerElement extends Element, HeadingElement extends Element>() {
    const {
        propsReferencer,
        propsSource,
        randomIdReturn
    } = useRandomId<HeadingElement, ContainerElement>({ randomIdParameters: { prefix: "listbox-multi-group-", otherReferencerProp: "aria-labelledby" } });

    propsReferencer.role = "group";

    return {
        propsHeading: propsSource,
        propsContainer: propsReferencer
    }
}*/
