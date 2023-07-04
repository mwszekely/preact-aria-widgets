import { createContext, Ref, VNode } from "preact";
import { focus } from "preact-prop-helpers";
import { memo } from "preact/compat";
import { useCallback, useContext } from "preact/hooks";
import { OmitStrong, useContextWithWarning } from "../props.js";
import { ListboxInfo, useListbox, UseListboxContext, useListboxItem, UseListboxItemParameters, UseListboxItemReturnType, UseListboxParameters, UseListboxReturnType } from "../use-listbox.js";
import { memoForwardRef, PartialExcept, useDefault } from "./util.js";

type Get<T, K extends keyof T> = T[K];

interface ListboxPropsBase<ListElement extends Element, ListItemElement extends Element, LabelElement extends Element, M extends ListboxInfo<ListItemElement>> extends
    Get<UseListboxParameters<ListElement, ListItemElement, LabelElement, M>, "labelParameters">,
    Get<UseListboxParameters<ListElement, ListItemElement, LabelElement, M>, "linearNavigationParameters">,
    OmitStrong<Get<UseListboxParameters<ListElement, ListItemElement, LabelElement, M>, "listboxParameters">, "groupingType">,
    Get<UseListboxParameters<ListElement, ListItemElement, LabelElement, M>, "rearrangeableChildrenParameters">,
    Get<UseListboxParameters<ListElement, ListItemElement, LabelElement, M>, "rovingTabIndexParameters">,
    Get<UseListboxParameters<ListElement, ListItemElement, LabelElement, M>, "sortableChildrenParameters">,
    Get<UseListboxParameters<ListElement, ListItemElement, LabelElement, M>, "staggeredChildrenParameters">,
    Get<UseListboxParameters<ListElement, ListItemElement, LabelElement, M>, "paginatedChildrenParameters">,
    Get<UseListboxParameters<ListElement, ListItemElement, LabelElement, M>, "typeaheadNavigationParameters">,
    Get<UseListboxParameters<ListElement, ListItemElement, LabelElement, M>, "singleSelectionParameters"> {
    ref?: Ref<UseListboxReturnType<ListElement, ListItemElement, LabelElement, M>>;
}

interface ListboxItemPropsBase<ListItemElement extends Element, M extends ListboxInfo<ListItemElement>> extends
    Get<UseListboxItemParameters<ListItemElement, ListboxInfo<ListItemElement>>, "listboxParameters">,
    Pick<M, "index" | "untabbable" | "unselectable">,
    Get<UseListboxItemParameters<ListItemElement, ListboxInfo<ListItemElement>>, "sortableChildParameters">,
    OmitStrong<NonNullable<Get<UseListboxItemParameters<ListItemElement, ListboxInfo<ListItemElement>>, "pressParameters">>, "focusSelf">,
    Get<UseListboxItemParameters<ListItemElement, ListboxInfo<ListItemElement>>, "textContentParameters"> {
    focusSelf?: UseListboxItemParameters<ListItemElement, ListboxInfo<ListItemElement>>["info"]["focusSelf"];
    subInfo?: OmitStrong<UseListboxItemParameters<ListItemElement, ListboxInfo<ListItemElement>>["info"], "focusSelf">;
    ref?: Ref<UseListboxItemReturnType<ListItemElement, M>>;
}

export interface ListboxProps<ListElement extends Element, ListItemElement extends Element, LabelElement extends Element, M extends ListboxInfo<ListItemElement>> extends PartialExcept<ListboxPropsBase<ListElement, ListItemElement, LabelElement, M>, "ariaLabel" | "selectionLimit" | "selectedIndex"> {
    render(info: UseListboxReturnType<ListElement, ListItemElement, LabelElement, M>): VNode;
}
export interface ListboxItemProps<ListItemElement extends Element, M extends ListboxInfo<ListItemElement>> extends PartialExcept<ListboxItemPropsBase<ListItemElement, M>, "index" | "getSortValue"> {
    render(info: UseListboxItemReturnType<ListItemElement, ListboxInfo<ListItemElement>>): VNode;
}

const ListboxContext = createContext<UseListboxContext<any, any, any>>(null!);

const ListboxGroupContext = createContext<null | UseListboxReturnType<any, any, any, any>>(null);
export const GroupedListbox = memo(function GroupedListbox<LabelElement extends Element>({ ariaLabel, selectionLimit, orientation, render }: Pick<ListboxProps<any, any, LabelElement, any>, "orientation" | "ariaLabel" | "selectionLimit" | "render">) {

    const info = useListbox<any, any, LabelElement, any>({
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
        singleSelectionParameters: { ariaPropName: null, selectionMode: "disabled" }
    });
    info.context;
    return (
        <ListboxGroupContext.Provider value={info}>{render(info)}</ListboxGroupContext.Provider>
    );

})

export const Listbox = memoForwardRef(function Listbox<ListElement extends Element, ListItemElement extends Element, LabelElement extends Element, M extends ListboxInfo<ListItemElement> = ListboxInfo<ListItemElement>>({
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
    render
}: ListboxProps<ListElement, ListItemElement, LabelElement, M>) {
    const listboxGroupInfo = useContext(ListboxGroupContext);
    ariaPropName ||= "aria-selected";
    selectionMode ||= "activation";
    untabbable ||= false;

    const info = useListbox<ListElement, ListItemElement, LabelElement, M>({
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
            paginationMax: paginationMax ?? null,
            paginationMin: paginationMin ?? null
        },
        listboxParameters: { selectionLimit, groupingType: listboxGroupInfo == null ? "without-groups" : "group", selectedIndex, onSelectedIndexChange: onSelectedIndexChange ?? null, orientation: orientation ?? "vertical" },
        rearrangeableChildrenParameters: { getIndex: useDefault("getIndex", getIndex) },
        rovingTabIndexParameters: { onTabbableIndexChange: onTabbableIndexChange ?? null, untabbable: untabbable ?? false },
        sortableChildrenParameters: { compare: compare ?? null },
        typeaheadNavigationParameters: {
            onNavigateTypeahead,
            collator: useDefault("collator", collator),
            noTypeahead: useDefault("noTypeahead", noTypeahead),
            typeaheadTimeout: useDefault("typeaheadTimeout", typeaheadTimeout)
        },
        singleSelectionParameters: { ariaPropName, selectionMode }
    });

    return (
        <ListboxContext.Provider value={info.context}>{render(info)}</ListboxContext.Provider>
    );
})

export const ListboxItem = memoForwardRef(function ListboxItem<ListboxItemElement extends Element, M extends ListboxInfo<ListboxItemElement> = ListboxInfo<ListboxItemElement>>({
    unselectable,
    focusSelf,
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
    ...subInfo
}: ListboxItemProps<ListboxItemElement, M>) {
    const context = useContextWithWarning(ListboxContext, "listbox");
    console.assert(context != null, `This ListboxItem is not contained within a Listbox`);
    const focusSelfDefault = useCallback((e: any) => { focus(e); }, []);
    focusSelf ??= focusSelfDefault;

    const info = useListboxItem<ListboxItemElement, M>({
        info: { index, untabbable: untabbable || false, unselectable: unselectable || false, focusSelf, ...subInfo } as M,
        context,
        listboxParameters: { selected: selected ?? null, onMultiSelect: onMultiSelect || null },
        pressParameters: { focusSelf, allowRepeatPresses, excludeEnter, excludePointer, longPressThreshold, onPressingChange },
        sortableChildParameters: { getSortValue: getSortValue },
        textContentParameters: { getText: useDefault("getText", getText) },
    });

    return render(info);
})
