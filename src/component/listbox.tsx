import { createContext } from "preact";
import { assertEmptyObject, focus } from "preact-prop-helpers";
import { memo } from "preact/compat";
import { useCallback, useContext } from "preact/hooks";
import { Get, Get10, Get4, OmitStrong, useContextWithWarning } from "../props.js";
import { ListboxInfo, useListbox, UseListboxContext, useListboxItem, UseListboxItemParameters, UseListboxItemReturnType, UseListboxParameters, UseListboxReturnType } from "../use-listbox.js";
import { GenericComponentProps, useComponent, useDefault } from "./util.js";


interface ListboxPropsBase<ListElement extends Element, ListItemElement extends Element, LabelElement extends Element, M extends ListboxInfo<ListItemElement> = ListboxInfo<ListItemElement>> extends
    Get10<UseListboxParameters<ListElement, ListItemElement, LabelElement, M>, "labelParameters", "linearNavigationParameters", "rearrangeableChildrenParameters", "rovingTabIndexParameters", "sortableChildrenParameters", "staggeredChildrenParameters", "paginatedChildrenParameters", "typeaheadNavigationParameters", "singleSelectionParameters", "refElementParameters">,
    OmitStrong<Get<UseListboxParameters<ListElement, ListItemElement, LabelElement, M>, "listboxParameters">, "groupingType"> {
}

interface ListboxItemPropsBase<ListItemElement extends Element, M extends ListboxInfo<ListItemElement> = ListboxInfo<ListItemElement>> extends
    Get4<UseListboxItemParameters<ListItemElement, ListboxInfo<ListItemElement>>, "listboxParameters", "textContentParameters", "refElementParameters", "hasCurrentFocusParameters">,
    Pick<M, "index" | "untabbable" | "unselectable" | "getSortValue" | "focusSelf">,
    OmitStrong<NonNullable<Get<UseListboxItemParameters<ListItemElement, ListboxInfo<ListItemElement>>, "pressParameters">>, never> {
    //focusSelf?: UseListboxItemParameters<ListItemElement, ListboxInfo<ListItemElement>>["info"]["focusSelf"];
    //subInfo?: OmitStrong<UseListboxItemParameters<ListItemElement, ListboxInfo<ListItemElement>>["info"], "focusSelf">;
}

export interface ListboxProps<ListElement extends Element, ListItemElement extends Element, LabelElement extends Element, M extends ListboxInfo<ListItemElement>> extends GenericComponentProps<
    UseListboxReturnType<ListElement, ListItemElement, LabelElement, M>,
    ListboxPropsBase<ListElement, ListItemElement, LabelElement, M>,
    "ariaLabel" | "selectionLimit" | "selectedIndex"> {
}
export interface ListboxItemProps<ListItemElement extends Element, M extends ListboxInfo<ListItemElement>> extends
    GenericComponentProps<UseListboxItemReturnType<ListItemElement, ListboxInfo<ListItemElement>>, ListboxItemPropsBase<ListItemElement, M>,
        "index" | "getSortValue"> {
}

const ListboxContext = createContext<UseListboxContext<any, any, any>>(null!);

const ListboxGroupContext = createContext<null | UseListboxReturnType<any, any, any, any>>(null);
export const GroupedListbox = memo(function GroupedListbox<LabelElement extends Element>({ ariaLabel, selectionLimit, orientation, render, onElementChange, onMount, onUnmount }: Pick<ListboxProps<any, any, LabelElement, any>, "orientation" | "ariaLabel" | "selectionLimit" | "render" | "onElementChange" | "onMount" | "onUnmount">) {

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
        listboxParameters: { selectionLimit, groupingType: "with-groups", selectedIndex: null, onSelectedIndexChange: null, orientation: orientation ?? "vertical" },
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
        singleSelectionParameters: { ariaPropName: null, selectionMode: "disabled" }
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
    selectedIndex,
    navigatePastEnd,
    navigatePastStart,
    noTypeahead,
    onSelectedIndexChange,
    onTabbableIndexChange,
    staggered,
    pageNavigationSize,
    paginationMax,
    paginationMin,
    selectionLimit,
    untabbable,
    typeaheadTimeout,
    orientation,
    ariaPropName,
    selectionMode,
    onNavigateLinear,
    onNavigateTypeahead,
    onElementChange,
    onMount,
    onUnmount,
    render,
    imperativeHandle,
    ...void1
}: ListboxProps<ListElement, ListItemElement, LabelElement, ListboxInfo<ListItemElement>>) {
    const listboxGroupInfo = useContext(ListboxGroupContext);
    ariaPropName ||= "aria-selected";
    selectionMode ||= "activation";
    untabbable ||= false;

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
                selectionLimit,
                groupingType: listboxGroupInfo == null ? "without-groups" : "group",
                selectedIndex,
                onSelectedIndexChange,
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
            singleSelectionParameters: { ariaPropName, selectionMode }
        })
    )
})

export const ListboxItem = memo(function ListboxItem<ListboxItemElement extends Element>({
    unselectable,
    getText,
    untabbable,
    index,
    render,
    selected,
    getSortValue,
    allowRepeatPresses,
    excludeEnter,
    excludePointer,
    longPressThreshold,
    onPressingChange,
    onMultiSelect,
    onElementChange,
    onMount,
    onUnmount,
    onCurrentFocusedChanged,
    onCurrentFocusedInnerChanged,
    focusSelf,
    imperativeHandle,
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
        useListboxItem<ListboxItemElement>({
            info: {
                index,
                untabbable: untabbable || false,
                unselectable: unselectable || false,
                focusSelf: focusSelf ?? focusSelfDefault,
                getSortValue
            },
            context,
            listboxParameters: { selected, onMultiSelect },
            pressParameters: { allowRepeatPresses, excludeEnter, excludePointer, longPressThreshold, onPressingChange },
            textContentParameters: { getText: useDefault("getText", getText) },
            hasCurrentFocusParameters: { onCurrentFocusedChanged, onCurrentFocusedInnerChanged, },
            refElementParameters: { onElementChange, onMount, onUnmount }
        }))
})
