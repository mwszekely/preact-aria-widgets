import { createContext } from "preact";
import { assertEmptyObject, focus } from "preact-prop-helpers";
import { memo } from "preact/compat";
import { useCallback, useContext } from "preact/hooks";
import { Get, Get13, Get7, OmitStrong, useContextWithWarning } from "../props.js";
import { ListboxInfo, UseListboxContext, UseListboxItemParameters, UseListboxItemReturnType, UseListboxParameters, UseListboxReturnType, useListbox, useListboxItem } from "../use-listbox.js";
import { GenericComponentProps, useComponent, useDefault } from "./util.js";


interface ListboxPropsBase<ListElement extends Element, ListItemElement extends Element, LabelElement extends Element, M extends ListboxInfo<ListItemElement> = ListboxInfo<ListItemElement>> extends
    Get13<UseListboxParameters<ListElement, ListItemElement, LabelElement, M>, "labelParameters", "linearNavigationParameters", "rearrangeableChildrenParameters", "rovingTabIndexParameters", "sortableChildrenParameters", "staggeredChildrenParameters", "paginatedChildrenParameters", "typeaheadNavigationParameters", "singleSelectionParameters", "refElementParameters", "singleSelectionParameters", "singleSelectionDeclarativeParameters", "multiSelectionParameters">,
    OmitStrong<Get<UseListboxParameters<ListElement, ListItemElement, LabelElement, M>, "listboxParameters">, "groupingType"> {
}

interface ListboxItemPropsBase<ListItemElement extends Element, M extends ListboxInfo<ListItemElement> = ListboxInfo<ListItemElement>> extends
    Get7<UseListboxItemParameters<ListItemElement, ListboxInfo<ListItemElement>>, "listboxParameters", "textContentParameters", "refElementParameters", "hasCurrentFocusParameters", "singleSelectionChildParameters", "multiSelectionChildParameters", "multiSelectionChildDeclarativeParameters">,
    Pick<M, "index" | "untabbable" | "getSortValue" | "focusSelf">,
    OmitStrong<NonNullable<Get<UseListboxItemParameters<ListItemElement, ListboxInfo<ListItemElement>>, "pressParameters">>, never> {
    //focusSelf?: UseListboxItemParameters<ListItemElement, ListboxInfo<ListItemElement>>["info"]["focusSelf"];
    //subInfo?: OmitStrong<UseListboxItemParameters<ListItemElement, ListboxInfo<ListItemElement>>["info"], "focusSelf">;
}

export interface ListboxProps<ListElement extends Element, ListItemElement extends Element, LabelElement extends Element, M extends ListboxInfo<ListItemElement>> extends GenericComponentProps<
    UseListboxReturnType<ListElement, ListItemElement, LabelElement, M>,
    ListboxPropsBase<ListElement, ListItemElement, LabelElement, M>,
    "ariaLabel"> {
}
export interface ListboxItemProps<ListItemElement extends Element, M extends ListboxInfo<ListItemElement>> extends
    GenericComponentProps<
    UseListboxItemReturnType<ListItemElement, ListboxInfo<ListItemElement>>, 
    ListboxItemPropsBase<ListItemElement, M>,
        "index" | "getSortValue"> {
}

const ListboxContext = createContext<UseListboxContext<any, any, any>>(null!);

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
        staggeredChildrenParameters: { staggered: false },
        paginatedChildrenParameters: { paginationMax: null, paginationMin: null },
        listboxParameters: { groupingType: "with-groups", orientation: orientation ?? "vertical" },
        rearrangeableChildrenParameters: { getIndex: useDefault("getIndex", undefined) },
        rovingTabIndexParameters: { onTabbableIndexChange: null, untabbable: false },
        sortableChildrenParameters: { compare: null },
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
    compare,
    disableHomeEndKeys,
    getIndex,
    singleSelectedIndex,
    navigatePastEnd,
    navigatePastStart,
    noTypeahead,
    onSingleSelectedIndexChange,
    onTabbableIndexChange,
    staggered,
    pageNavigationSize,
    paginationMax,
    paginationMin,
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
    ...void1
}: ListboxProps<ListElement, ListItemElement, LabelElement, ListboxInfo<ListItemElement>>) {
    const listboxGroupInfo = useContext(ListboxGroupContext);

    assertEmptyObject(void1);

    return useComponent(
        imperativeHandle,
        render,
        ListboxContext,
        useListbox<ListElement, ListItemElement, LabelElement>({
            labelParameters: { ariaLabel },
            staggeredChildrenParameters: {
                staggered: staggered || false
            },
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
            rearrangeableChildrenParameters: { getIndex: useDefault("getIndex", getIndex) },
            rovingTabIndexParameters: {
                onTabbableIndexChange,
                untabbable: untabbable ?? false
            },
            sortableChildrenParameters: { compare },
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

export const ListboxItem = memo(function ListboxItem<ListboxItemElement extends Element>({
    getText,
    untabbable,
    index,
    render,
    getSortValue,
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
    ...void1
}: ListboxItemProps<ListboxItemElement, ListboxInfo<ListboxItemElement>>) {
    const context = useContextWithWarning(ListboxContext, "listbox");
    console.assert(context != null, `This ListboxItem is not contained within a Listbox`);
    const focusSelfDefault = useCallback((e: any) => { focus(e); }, []);
    assertEmptyObject(void1);

    return useComponent(
        imperativeHandle,
        render,
        null,
        useListboxItem<ListboxItemElement, ListboxInfo<ListboxItemElement>>({
            info: {
                index,
                untabbable: untabbable || false,
                focusSelf: focusSelf ?? focusSelfDefault,
                getSortValue
            },
            context,
            listboxParameters: {  },
            pressParameters: { allowRepeatPresses, excludeEnter, excludePointer, longPressThreshold, onPressingChange },
            textContentParameters: { getText: useDefault("getText", getText) },
            hasCurrentFocusParameters: { onCurrentFocusedChanged, onCurrentFocusedInnerChanged, },
            refElementParameters: { onElementChange, onMount, onUnmount },
            singleSelectionChildParameters: { singleSelectionDisabled: singleSelectionDisabled || false },
            multiSelectionChildParameters: { multiSelectionDisabled: multiSelectionDisabled || false },
            multiSelectionChildDeclarativeParameters: { onMultiSelectedChange, multiSelected: multiSelected || false },
        }))
})
