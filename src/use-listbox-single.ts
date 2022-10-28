import { h, VNode } from "preact";
import {
    assertEmptyObject,
    GetIndex,
    useHasCurrentFocus,
    UseListNavigationContext,
    useListNavigationSingleSelection,
    useListNavigationSingleSelectionChild,
    UseListNavigationSingleSelectionChildInfo,
    UseListNavigationSingleSelectionChildParameters,
    UseListNavigationSingleSelectionChildReturnType,
    UseListNavigationSingleSelectionParameters,
    UseListNavigationSingleSelectionReturnType,
    useManagedChild,
    UseManagedChildParameters,
    useManagedChildren,
    UseManagedChildrenContext,
    UseManagedChildrenReturnTypeInfo,
    useMergedProps,
    usePress,
    UsePressParameters,
    useRandomId,
    useRefElement,
    UseSingleSelectionContext,
    useSortableChildren,
    useStableCallback,
    useStableObject
} from "preact-prop-helpers";
import { GetValid } from "preact-prop-helpers/use-sortable-children";
import { useCallback } from "preact/hooks";
import { debugLog, ElementToTag, EventDetail, overwriteWithWarning } from "./props";
import { useLabel, UseLabelParameters, UseLabelReturnTypeInfo } from "./use-label";

export type ListboxSingleSelectEvent<E extends EventTarget> = { [EventDetail]: { selectedIndex: number } } & Pick<h.JSX.TargetedEvent<E>, "target" | "currentTarget">;

export interface UseListboxSingleParameters<LabelElement extends Element, ListElement extends Element, ListItemElement extends Element, M extends UseListboxSingleInfo<ListItemElement>> {
    singleSelectionParameters: UseListNavigationSingleSelectionParameters<ListItemElement, M>["singleSelectionParameters"];
    typeaheadNavigationParameters: UseListNavigationSingleSelectionParameters<ListItemElement, M>["typeaheadNavigationParameters"];
    linearNavigationParameters: Pick<UseListNavigationSingleSelectionParameters<ListItemElement, M>["linearNavigationParameters"], "disableArrowKeys" | "disableHomeEndKeys" | "navigationDirection">;
    labelParameters: UseLabelParameters<ListElement, LabelElement, never>["labelParameters"];
    /*randomIdInputParameters: UseLabelParameters<ListElement, LabelElement, never>["randomIdInputParameters"];
    randomIdLabelParameters: UseLabelParameters<ListElement, LabelElement, never>["randomIdLabelParameters"];
    randomIdReferencerElementInputParameters: UseLabelParameters<ListElement, LabelElement, never>["randomIdReferencerElementInputParameters"];
    randomIdReferencerElementLabelParameters: UseLabelParameters<ListElement, LabelElement, never>["randomIdReferencerElementLabelParameters"];*/
    listboxSingleParameters: {
        onSelect?(event: ListboxSingleSelectEvent<Element>): void;
        tagLabel: ElementToTag<LabelElement>;
        tagList: ElementToTag<ListElement>;
    }
}

export interface UseListboxSingleItemParameters<E extends Element, M extends UseListboxSingleInfo<E>> {
    managedChildParameters: Pick<UseManagedChildParameters<M>["managedChildParameters"], "index" | "hidden">;
    rovingTabIndexChildParameters: UseListNavigationSingleSelectionChildParameters<E>["rovingTabIndexChildParameters"];
    rovingTabIndexReturn: UseListNavigationSingleSelectionChildParameters<E>["rovingTabIndexReturn"];
    singleSelectionChildParameters: UseListNavigationSingleSelectionChildParameters<E>["singleSelectionChildParameters"];
    singleSelectionReturn: UseListNavigationSingleSelectionChildParameters<E>["singleSelectionReturn"];
    typeaheadNavigationChildParameters: UseListNavigationSingleSelectionChildParameters<E>["typeaheadNavigationChildParameters"];
    managedChildrenReturn: UseManagedChildrenReturnTypeInfo<M>["managedChildrenReturn"];
    pressParameters: Omit<UsePressParameters<E, never>["pressParameters"], "onPressSync" | "focusSelf">;
    listboxSingleItemParameters: { disabled?: boolean; }
}



//export type UseListboxSingleItem<ListItemElement extends Element, C, K extends string> = (info: UseListboxSingleItemParameters<ListItemElement, C, K>) => UseListboxSingleItemReturnTypeWithHooks<ListItemElement>;

export interface UseListboxSingleItemReturnTypeInfo<ListItemElement extends Element> extends UseListNavigationSingleSelectionChildReturnType<ListItemElement> {
    listboxSingleItemReturn: { propsUnstable: h.JSX.HTMLAttributes<ListItemElement> }
}

export interface UseListboxSingleItemReturnTypeWithHooks<ListItemElement extends Element> extends UseListboxSingleItemReturnTypeInfo<ListItemElement> {
    useListboxSingleItemProps: (props: h.JSX.HTMLAttributes<ListItemElement>) => h.JSX.HTMLAttributes<ListItemElement>;
}

export interface UseListboxSingleReturnTypeInfo<LabelElement extends Element, ListElement extends Element, ListItemElement extends Element> extends UseListNavigationSingleSelectionReturnType<ListElement, ListItemElement>, UseLabelReturnTypeInfo<ListElement, LabelElement> {
    listboxSingleReturn: { propsStable: { role: "listbox" } };
}

export interface UseListboxSingleInfo<ListItemElement extends Element> extends UseListNavigationSingleSelectionChildInfo<ListItemElement> { }

export type ListboxSingleContext<ListItemElement extends Element, M extends UseListboxSingleInfo<ListItemElement>> = UseListNavigationContext<ListItemElement> & UseSingleSelectionContext & UseManagedChildrenContext<M>

export function useListboxSingle<LabelElement extends Element, ListElement extends Element, ListItemElement extends Element, M extends UseListboxSingleInfo<ListItemElement>>({
    listboxSingleParameters: { tagLabel, tagList, onSelect, ...void6 },
    singleSelectionParameters,
    typeaheadNavigationParameters,
    linearNavigationParameters: { disableArrowKeys, disableHomeEndKeys, navigationDirection, ...void11 },
    labelParameters,
    ...void10
}: UseListboxSingleParameters<LabelElement, ListElement, ListItemElement, M>): UseListboxSingleReturnTypeInfo<LabelElement, ListElement, ListItemElement> {
    debugLog("useListboxSingle");

    const { randomIdInputReturn, randomIdLabelReturn, randomIdReferencerInputReturn, randomIdReferencerLabelReturn, randomIdSourceInputReturn, randomIdSourceLabelReturn, labelInputReturn, ...void12 } = useLabel<ListElement, LabelElement>({
        labelParameters,
        randomIdInputParameters: { prefix: "listbox-input-" },
        randomIdLabelParameters: { prefix: "listbox-label-" },
        randomIdReferencerElementInputParameters: { referencerProp: "aria-labelledby" },
        randomIdReferencerElementLabelParameters: { referencerProp: null },
    });

    const { initiallySelectedIndex, onSelectedIndexChange, ...void9 } = singleSelectionParameters;



    const getHighestIndex = useCallback(() => getChildren().getHighestIndex(), []);
    const getChildren = useCallback<typeof getChildren2>(() => { return managedChildrenReturn.getChildren() }, []);

    const {
        linearNavigationParameters,
        rearrangeableChildrenReturn,
        sortableChildrenReturn,
        useSortableProps,
        ...void8
    } = useSortableChildren<ListElement, M>({
        rearrangeableChildrenParameters: {
            getHighestChildIndex: getHighestIndex,
            getIndex: useCallback<GetIndex<{ index: number }>>((a: VNode<{ index: number }>) => a.props.index, []),
            getValid: useStableCallback<GetValid>((index) => { return !(getChildren().getAt(index)?.hidden) })
        },
        sortableChildrenParameters: { compare: useCallback((rhs, lhs) => { return lhs.index - rhs.index }, []) }
    })

    const {
        childrenHaveFocusParameters,
        linearNavigationReturn,
        managedChildrenParameters,
        rovingTabIndexChildParameters,
        rovingTabIndexReturn,
        singleSelectionReturn,
        typeaheadNavigationChildParameters,
        typeaheadNavigationReturn,
        ...void7
    } = useListNavigationSingleSelection<ListElement, ListItemElement, M>({
        linearNavigationParameters: {
            disableArrowKeys,
            disableHomeEndKeys,
            getHighestIndex,
            navigationDirection,
            ...linearNavigationParameters
        },
        managedChildrenReturn: { getChildren },
        rovingTabIndexParameters: { initiallyTabbedIndex: singleSelectionParameters.initiallySelectedIndex, onTabbableIndexChange: null },
        singleSelectionParameters,
        typeaheadNavigationParameters
    });

    const { managedChildrenReturn, ...void5 } = useManagedChildren<M>({ managedChildrenParameters: { onAfterChildLayoutEffect: null, onChildrenMountChange: null } });
    const { getChildren: getChildren2 } = managedChildrenReturn;
    const { sort } = sortableChildrenReturn;
    const { shuffle } = rearrangeableChildrenReturn;
    const children = getChildren();

    const { propsStable: p1, ...void1 } = linearNavigationReturn;
    const { focusSelf, getTabbableIndex, setTabbableIndex, ...void2 } = rovingTabIndexReturn;
    const { getSelectedIndex, setSelectedIndex, ...void3 } = singleSelectionReturn;
    const { propsStable: p2, currentTypeahead, invalidTypeahead, ...void4 } = typeaheadNavigationReturn;
    const context: ListboxSingleContext<ListItemElement, M> = useStableObject({
        rovingTabIndexChildParameters,
        typeaheadNavigationChildParameters,
        rovingTabIndexReturn,
        singleSelectionReturn,
        managedChildrenReturn
    });

    const props = useMergedProps(p1, p2);

    assertEmptyObject(void1);
    assertEmptyObject(void2);
    assertEmptyObject(void3);
    assertEmptyObject(void4);
    assertEmptyObject(void5);
    assertEmptyObject(void6);
    assertEmptyObject(void7);
    assertEmptyObject(void8);
    assertEmptyObject(void9);
    assertEmptyObject(void10);
    assertEmptyObject(void11);
    assertEmptyObject(void12);


    return {
        childrenHaveFocusParameters,
        labelInputReturn,
        linearNavigationReturn,
        managedChildrenParameters,
        randomIdInputReturn,
        randomIdLabelReturn,
        randomIdReferencerInputReturn,
        randomIdReferencerLabelReturn,
        randomIdSourceInputReturn,
        randomIdSourceLabelReturn,
        rovingTabIndexChildParameters,
        rovingTabIndexReturn,
        singleSelectionReturn,
        typeaheadNavigationChildParameters,
        typeaheadNavigationReturn,
        listboxSingleReturn: { propsStable: useStableObject({ role: "listbox" }) }
    };
}


export function useListboxSingleItem<E extends HTMLElement, M extends UseListboxSingleInfo<E>>({
    listboxSingleItemParameters: { disabled },
    rovingTabIndexChildParameters,
    rovingTabIndexReturn,
    singleSelectionChildParameters,
    singleSelectionReturn,
    typeaheadNavigationChildParameters,
    managedChildParameters: { index, hidden },
    managedChildrenReturn,
    pressParameters: { exclude, onPseudoActiveStart, onPseudoActiveStop }
}: UseListboxSingleItemParameters<E, M>): UseListboxSingleItemReturnTypeInfo<E> {

    debugLog("useListboxSingleItem", index);

    const focusSelf = useCallback((e: E) => { e.focus() }, []);
    const { refElementReturn } = useRefElement<E>({ refElementParameters: { onElementChange: undefined } });
    const { getElement, propsStable: p3 } = refElementReturn;
    const { text } = typeaheadNavigationChildParameters;


    const {
        hasCurrentFocusParameters,
        managedChildParameters,
        pressParameters,
        rovingTabIndexChildReturn,
        singleSelectionChildReturn,
        ...void6
    } = useListNavigationSingleSelectionChild<E>({
        managedChildParameters: { hidden, index },
        rovingTabIndexChildParameters: rovingTabIndexChildParameters,
        rovingTabIndexReturn,
        singleSelectionChildParameters,
        singleSelectionReturn,
        typeaheadNavigationChildParameters
    });

    const { onCurrentFocusedInnerChanged, ...void5 } = hasCurrentFocusParameters;
    const { getSelected, selected, setSelected, ...void4 } = managedChildParameters;
    const { onPressSync, ...void3 } = pressParameters;
    const { setTabbable, getTabbable, propsUnstable: p2, tabbable, ...void2 } = rovingTabIndexChildReturn;
    const { propsUnstable: p4, ...void1 } = singleSelectionChildReturn;

    const {
        pressReturn: { propsStable: p5 }
    } = usePress<E>({
        pressParameters: { exclude, focusSelf, onPressSync: disabled? null : onPressSync, onPseudoActiveStart, onPseudoActiveStop },
        refElementReturn
    })

    useManagedChild<M>({
        managedChildParameters: { index, focusSelf, getElement, getSelected, getTabbable, hidden, selected, setSelected, setTabbable, tabbable, text } as M,
        managedChildrenReturn
    });

    assertEmptyObject(void1);
    assertEmptyObject(void2);
    assertEmptyObject(void3);
    assertEmptyObject(void4);
    assertEmptyObject(void5);
    assertEmptyObject(void6);

    const {
        hasCurrentFocusReturn: { propsStable: p6 }
    } = useHasCurrentFocus({
        refElementReturn,
        hasCurrentFocusParameters: {
            onCurrentFocusedChanged: null,
            onCurrentFocusedInnerChanged
        }
    });

    const props = useMergedProps<E>(p2, p3, p4, p5, p6);

    return {
        hasCurrentFocusParameters,
        managedChildParameters,
        pressParameters,
        rovingTabIndexChildReturn,
        singleSelectionChildReturn,
        listboxSingleItemReturn: { propsUnstable: { "aria-disabled": (!!disabled).toString() } }
    }

    /*const {
        hasCurrentFocusParameters,
        managedChildParameters: { getSelected, selected, setSelected },
        pressParameters,
        rovingTabIndexChildReturn,
        singleSelectionChildReturn
    } = useListNavigationSingleSelectionChild<E>({
        managedChildParameters: { hidden, index },
        rovingTabIndexChildParameters,
        rovingTabIndexReturn,
        singleSelectionChildParameters,
        singleSelectionReturn,
        typeaheadNavigationChildParameters
    });

    return {
        hasCurrentFocusParameters,
        managedChildParameters: {},
        pressParameters,
        rovingTabIndexChildReturn,
        singleSelectionChildReturn
    };

    function useListboxSingleItemProps<P extends h.JSX.HTMLAttributes<ListItemElement>>(props: P) {

        props.role = "option";
        props["aria-selected"] = (ss_ret.selected ?? false).toString();
        if (disabled)
            props["aria-disabled"] = "true";

        return useMergedProps(listNavigationSingleSelectionChildProps, props);
    }*/
}


export function useListboxGroup<ContainerElement extends Element, HeadingElement extends Element>() {
    const { useRandomIdReferencerElement, useRandomIdSourceElement } = useRandomId<HeadingElement>({ randomIdParameters: { prefix: "listbox-multi-group" } });
    const { randomIdSourceReturn, ...void1 } = useRandomIdSourceElement();
    const { randomIdReferencerReturn, ...void2 } = useRandomIdReferencerElement<ContainerElement>({ randomIdReferencerParameters: { referencerProp: "aria-labelledby" } });

    assertEmptyObject(void1);
    assertEmptyObject(void2);

    return {
        randomIdSourceReturn,
        randomIdReferencerReturn,
        listboxGroup: { propsStable: useStableObject({ role: "group" } as const) }
    }
}
