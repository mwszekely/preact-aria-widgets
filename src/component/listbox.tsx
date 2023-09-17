import { createContext } from "preact";
import { TargetedOmit, UseCompleteListNavigationChildrenInfo, UseCompleteListNavigationChildrenParameters, UseCompleteListNavigationChildrenReturnType, UseProcessedChildContext, UseProcessedChildInfo, UseProcessedChildReturnType, UseProcessedChildrenContext, UseRefElementParameters, VNode, assertEmptyObject, focus, useCompleteListNavigationChildren, useMergedProps, useProcessedChild, useRefElement, useStableCallback } from "preact-prop-helpers";
import { memo } from "preact/compat";
import { useCallback, useContext, useEffect } from "preact/hooks";
import { Get, Get10, Get3, Get4, Get7, OmitStrong, useContextWithWarning } from "../props.js";
import { ListboxInfo, UseListboxContext, UseListboxItemParameters, UseListboxItemReturnType, UseListboxParameters, UseListboxReturnType, useListbox, useListboxItem } from "../use-listbox.js";
import { GenericComponentProps, useComponent, useComponentC, useDefault } from "./util.js";


interface ListboxPropsBase<ListElement extends Element, ListItemElement extends Element, LabelElement extends Element, M extends ListboxInfo<ListItemElement> = ListboxInfo<ListItemElement>> extends
    Get10<UseListboxParameters<ListElement, ListItemElement, LabelElement, M>, "labelParameters", "linearNavigationParameters", "rovingTabIndexParameters", "typeaheadNavigationParameters", "singleSelectionParameters", "refElementParameters", "singleSelectionParameters", "singleSelectionDeclarativeParameters", "multiSelectionParameters", "paginatedChildrenParameters">,
    OmitStrong<Get<UseListboxParameters<ListElement, ListItemElement, LabelElement, M>, "listboxParameters">, "groupingType"> {
}


interface ListboxChildrenPropsBase<ListItemElement extends Element, M extends UseCompleteListNavigationChildrenInfo<ListItemElement> = UseCompleteListNavigationChildrenInfo<ListItemElement>> extends
    Get4<UseCompleteListNavigationChildrenParameters<ListItemElement, M>, "managedChildrenParameters", "paginatedChildrenParameters", "rearrangeableChildrenParameters", "staggeredChildrenParameters"> {
}

interface ListboxItemOuterPropsBase<ListItemElement extends Element, M extends UseProcessedChildInfo<ListItemElement> = UseProcessedChildInfo<ListItemElement>> extends
    Get<UseRefElementParameters<ListItemElement>, "refElementParameters">,
    Pick<M, "index"> {
}

interface ListboxItemInnerPropsBase<ListItemElement extends Element, M extends ListboxInfo<ListItemElement> = ListboxInfo<ListItemElement>> extends
    Get7<UseListboxItemParameters<ListItemElement, ListboxInfo<ListItemElement>>, "listboxParameters", "textContentParameters", "refElementParameters", "hasCurrentFocusParameters", "singleSelectionChildParameters", "multiSelectionChildParameters", "multiSelectionChildDeclarativeParameters">,
    OmitStrong<NonNullable<Get<UseListboxItemParameters<ListItemElement, ListboxInfo<ListItemElement>>, "pressParameters">>, never>,
    Pick<M, "index" | "untabbable" | "focusSelf"> {
}

export interface ListboxProps<ListElement extends Element, ListItemElement extends Element, LabelElement extends Element, M extends ListboxInfo<ListItemElement>> extends GenericComponentProps<
    UseListboxReturnType<ListElement, ListItemElement, LabelElement, M>,
    ListboxPropsBase<ListElement, ListItemElement, LabelElement, M>,
    "ariaLabel"> {
}
export interface ListboxChildrenProps<ListItemElement extends Element, M extends UseCompleteListNavigationChildrenInfo<ListItemElement>> extends GenericComponentProps<
    UseCompleteListNavigationChildrenReturnType<ListItemElement, M>,
    ListboxChildrenPropsBase<ListItemElement, M>,
    "children"> {
}


type InnerOuterDifference<ListItemElement extends Element> = Get3<UseProcessedChildReturnType<ListItemElement, UseProcessedChildInfo<ListItemElement>>, "managedChildReturn", "paginatedChildReturn", "staggeredChildReturn">;

interface ListboxItemOuterProps<ListItemElement extends Element, M extends UseProcessedChildInfo<ListItemElement>> extends
    GenericComponentProps<
        UseProcessedChildReturnType<ListItemElement, UseProcessedChildInfo<ListItemElement>> | null,
        ListboxItemOuterPropsBase<ListItemElement, M>,
        "index"> {
}
interface ListboxItemInnerProps<ListItemElement extends Element, M extends ListboxInfo<ListItemElement>> extends
    GenericComponentProps<
        (TargetedOmit<OmitStrong<UseProcessedChildReturnType<ListItemElement, UseProcessedChildInfo<ListItemElement>>, "managedChildReturn">, "staggeredChildReturn", "childUseEffect"> & Partial<UseListboxItemReturnType<ListItemElement, ListboxInfo<ListItemElement>>>),
        ListboxItemInnerPropsBase<ListItemElement, M>,
        "index">,
    InnerOuterDifference<ListItemElement> {
    props: UseProcessedChildReturnType<ListItemElement, UseProcessedChildInfo<ListItemElement>>["props"];
}

const ListboxContext = createContext<UseListboxContext<any, any>>(null!);
const ListboxChildrenContext = createContext<UseProcessedChildrenContext>(null!);
const ListboxChildContext = createContext<UseProcessedChildContext<any, any>>(null!);

const ListboxGroupContext = createContext<null | UseListboxReturnType<any, any, any, any>>(null);
export const GroupedListbox = memo(function GroupedListbox<LabelElement extends Element>({
    ariaLabel,
    orientation,
    render,
    onElementChange,
    onMount,
    onUnmount
}: Pick<ListboxProps<any, any, LabelElement, any>, "orientation" | "ariaLabel" | "render" | "onElementChange" | "onMount" | "onUnmount">) {

    const info = useListbox<any, any, LabelElement>({
        labelParameters: { ariaLabel },
        linearNavigationParameters: {
            navigatePastEnd: "passthrough",
            navigatePastStart: "passthrough",
            disableHomeEndKeys: true,
            pageNavigationSize: 1,
            onNavigateLinear: null
        },
        paginatedChildrenParameters: { paginationMax: null, paginationMin: null },
        listboxParameters: { groupingType: "with-groups", orientation: orientation ?? "vertical" },
        rovingTabIndexParameters: { onTabbableIndexChange: null, untabbable: false },
        typeaheadNavigationParameters: {
            collator: null,
            noTypeahead: true,
            typeaheadTimeout: Infinity,
            onNavigateTypeahead: null
        },
        refElementParameters: { onElementChange, onMount, onUnmount },
        singleSelectionParameters: { singleSelectionMode: "disabled", singleSelectionAriaPropName: null },
        multiSelectionParameters: { multiSelectionMode: "disabled", multiSelectionAriaPropName: null, onSelectionChange: null },
        singleSelectionDeclarativeParameters: { onSingleSelectedIndexChange: null, singleSelectedIndex: null }
    });

    return (
        <ListboxGroupContext.Provider value={info}>{render(info)}</ListboxGroupContext.Provider>
    );

})

export const Listbox = memo(function Listbox<ListElement extends Element, ListItemElement extends Element, LabelElement extends Element>({
    ariaLabel,
    collator,
    disableHomeEndKeys,
    singleSelectedIndex,
    navigatePastEnd,
    navigatePastStart,
    noTypeahead,
    onSingleSelectedIndexChange,
    onTabbableIndexChange,
    pageNavigationSize,
    untabbable,
    typeaheadTimeout,
    orientation,
    onNavigateLinear,
    onNavigateTypeahead,
    onElementChange,
    onMount,
    onUnmount,
    render,
    imperativeHandle,
    singleSelectionAriaPropName,
    singleSelectionMode,
    multiSelectionAriaPropName,
    multiSelectionMode,
    onSelectionChange,
    paginationMax,
    paginationMin,
    ...void1
}: ListboxProps<ListElement, ListItemElement, LabelElement, ListboxInfo<ListItemElement>>) {
    const listboxGroupInfo = useContext(ListboxGroupContext);

    assertEmptyObject(void1);
    return useComponentC(
        imperativeHandle,
        render,
        ListboxContext,
        ListboxChildrenContext,
        useListbox<ListElement, ListItemElement, LabelElement>({
            labelParameters: { ariaLabel },
            linearNavigationParameters: {
                onNavigateLinear,
                navigatePastEnd: navigatePastEnd ?? "wrap",
                navigatePastStart: navigatePastStart ?? "wrap",
                disableHomeEndKeys: useDefault("disableHomeEndKeys", disableHomeEndKeys),
                pageNavigationSize: useDefault("pageNavigationSize", pageNavigationSize)
            },
            paginatedChildrenParameters: {
                paginationMax,
                paginationMin
            },
            listboxParameters: {
                groupingType: listboxGroupInfo == null ? "without-groups" : "group",
                orientation: orientation ?? "vertical"
            },
            rovingTabIndexParameters: {
                onTabbableIndexChange,
                untabbable: untabbable ?? false
            },
            typeaheadNavigationParameters: {
                onNavigateTypeahead,
                collator: useDefault("collator", collator),
                noTypeahead: useDefault("noTypeahead", noTypeahead),
                typeaheadTimeout: useDefault("typeaheadTimeout", typeaheadTimeout)
            },
            refElementParameters: { onElementChange, onMount, onUnmount },
            singleSelectionParameters: { singleSelectionAriaPropName, singleSelectionMode: singleSelectionMode || "disabled" },
            singleSelectionDeclarativeParameters: { onSingleSelectedIndexChange, singleSelectedIndex },
            multiSelectionParameters: { multiSelectionAriaPropName, multiSelectionMode: multiSelectionMode || "disabled", onSelectionChange }
        })
    )
})

export const ListboxChildren = memo(function ListboxChildren<ListItemElement extends Element, M extends UseCompleteListNavigationChildrenInfo<ListItemElement>>({
    children,
    render,
    adjust,
    compare,
    getIndex,
    imperativeHandle,
    onAfterChildLayoutEffect,
    onChildrenCountChange,
    onChildrenMountChange,
    onRearranged,
    paginationMax,
    paginationMin,
    staggered
}: ListboxChildrenProps<ListItemElement, M>) {
    const r = useCompleteListNavigationChildren({
        context: useContext(ListboxChildrenContext),
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
    });
    return useComponent(imperativeHandle,
        render,
        ListboxChildContext,
        r);
})

export interface ListboxItemProps<ListboxItemElement extends Element> extends
    OmitStrong<ListboxItemOuterProps<ListboxItemElement, UseProcessedChildInfo<ListboxItemElement>>, "render" | "imperativeHandle">,
    OmitStrong<ListboxItemInnerProps<ListboxItemElement, ListboxInfo<ListboxItemElement>>, keyof InnerOuterDifference<any> | "render" | "imperativeHandle" | "props"> {
    imperativeHandle?: UseListboxItemReturnType<ListboxItemElement, any>;// & UseProcessedChildReturnType<ListboxItemElement, any>;
    render: (info: Partial<UseListboxItemReturnType<ListboxItemElement, any>> & OmitStrong<UseProcessedChildReturnType<ListboxItemElement, any>, "refElementParameters">) => VNode;
}

export const ListboxItem = memo(function ListboxItem<ListboxItemElement extends Element>({
    index,
    render,
    imperativeHandle,
    //children: childrin,
    onElementChange: oec1,
    onMount,
    onUnmount,
    getText,
    untabbable,
    allowRepeatPresses,
    excludeEnter,
    excludePointer,
    longPressThreshold,
    onPressingChange,
    onCurrentFocusedChanged,
    onCurrentFocusedInnerChanged,
    focusSelf,
    multiSelectionDisabled,
    singleSelectionDisabled,
    multiSelected,
    onMultiSelectedChange,
    ...void1
}: ListboxItemProps<ListboxItemElement>) {
    const context = useContextWithWarning(ListboxContext, "listbox");
    console.assert(context != null, `This ListboxItem is not contained within a Listbox`);
    assertEmptyObject(void1);

    const {
        propsStable,
        refElementReturn
    } = useRefElement<ListboxItemElement>({
        refElementParameters: {
            onElementChange: useStableCallback((...a) => { oec1?.(...a); oec2?.(...a) }),
            onMount,
            onUnmount
        }
    });

    const { props, refElementParameters: { onElementChange: oec2 }, ...i2 } = useProcessedChild<ListboxItemElement>({
        context: useContextWithWarning(ListboxChildContext, "ListboxChildren"),
        info: { index }
    })

    const {
        managedChildReturn: { getChildren },
        paginatedChildReturn: { hideBecausePaginated, parentIsPaginated },
        staggeredChildReturn: { hideBecauseStaggered, parentIsStaggered, childUseEffect }
    } = i2;

    const props2 = useMergedProps(props, propsStable);

    if (hideBecausePaginated || hideBecauseStaggered) {
        return render({
            ...i2,
            props: props2,
            hasCurrentFocusReturn: undefined,
            multiSelectionChildReturn: undefined,
            pressReturn: undefined,
            refElementReturn: undefined,
            rovingTabIndexChildReturn: undefined,
            singleSelectionChildReturn: undefined,
            textContentReturn: undefined,
            managedChildReturn: { getChildren }
        });
    }

    return (
        <ListboxItemInner
            index={index}
            render={render}
            allowRepeatPresses={allowRepeatPresses}
            excludeEnter={excludeEnter}
            excludePointer={excludePointer}
            focusSelf={focusSelf}
            getText={getText}
            imperativeHandle={imperativeHandle as any}
            longPressThreshold={longPressThreshold}
            multiSelected={multiSelected}
            multiSelectionDisabled={multiSelectionDisabled}
            onCurrentFocusedChanged={onCurrentFocusedChanged}
            onCurrentFocusedInnerChanged={onCurrentFocusedInnerChanged}
            onMount={onMount}
            onMultiSelectedChange={onMultiSelectedChange}
            onPressingChange={onPressingChange}
            onUnmount={onUnmount}
            singleSelectionDisabled={singleSelectionDisabled}
            untabbable={untabbable}
            getChildren={getChildren}
            hideBecausePaginated={hideBecausePaginated}
            hideBecauseStaggered={hideBecauseStaggered}
            parentIsPaginated={parentIsPaginated}
            parentIsStaggered={parentIsStaggered}
            childUseEffect={childUseEffect}
            props={props2}
            {...void1}
        />
    );
})

// Separated into its own component because hooks can't be if'd.
const ListboxItemInner = memo(function ListboxItemInner<ListboxItemElement extends Element>({
    getText,
    untabbable,
    index,
    render,
    allowRepeatPresses,
    excludeEnter,
    excludePointer,
    longPressThreshold,
    onPressingChange,
    onElementChange,
    onMount,
    onUnmount,
    onCurrentFocusedChanged,
    onCurrentFocusedInnerChanged,
    focusSelf,
    imperativeHandle,
    multiSelectionDisabled,
    singleSelectionDisabled,
    multiSelected,
    onMultiSelectedChange,
    getChildren,
    hideBecausePaginated,
    hideBecauseStaggered,
    parentIsPaginated,
    parentIsStaggered,
    props: props1,
    childUseEffect,
    ...void1
}: ListboxItemInnerProps<ListboxItemElement, ListboxInfo<ListboxItemElement>>) {
    const context = useContextWithWarning(ListboxContext, "listbox");
    console.assert(context != null, `This ListboxItem is not contained within a Listbox`);
    const focusSelfDefault = useCallback((e: any) => { focus(e); }, []);
    assertEmptyObject(void1);

    useEffect(childUseEffect, [childUseEffect]);

    const {
        hasCurrentFocusReturn,
        managedChildReturn,
        multiSelectionChildReturn,
        pressReturn,
        props: props2,
        refElementReturn,
        rovingTabIndexChildReturn,
        singleSelectionChildReturn,
        textContentReturn
    } = useListboxItem<ListboxItemElement, ListboxInfo<ListboxItemElement>>({
        info: {
            index,
            untabbable: untabbable || false,
            focusSelf: focusSelf ?? focusSelfDefault,
        },
        context,
        listboxParameters: {},
        pressParameters: { allowRepeatPresses, excludeEnter, excludePointer, longPressThreshold, onPressingChange },
        textContentParameters: { getText: useDefault("getText", getText) },
        hasCurrentFocusParameters: { onCurrentFocusedChanged, onCurrentFocusedInnerChanged, },
        refElementParameters: { onElementChange, onMount, onUnmount },
        singleSelectionChildParameters: { singleSelectionDisabled: singleSelectionDisabled || false },
        multiSelectionChildParameters: { multiSelectionDisabled: multiSelectionDisabled || false },
        multiSelectionChildDeclarativeParameters: { onMultiSelectedChange, multiSelected: multiSelected || false },
    })

    return useComponent(
        imperativeHandle,
        render,
        null,
        {
            hasCurrentFocusReturn,
            multiSelectionChildReturn,
            pressReturn,
            props: useMergedProps(props1, props2),
            refElementReturn,
            rovingTabIndexChildReturn,
            singleSelectionChildReturn,
            textContentReturn,
            managedChildReturn,
            staggeredChildReturn: { hideBecauseStaggered, parentIsStaggered },
        });
})
