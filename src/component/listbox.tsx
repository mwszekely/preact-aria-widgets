import { createContext, Ref, VNode } from "preact";
import { memo } from "preact/compat";
import { useCallback, useContext } from "preact/hooks";
import { OmitStrong } from "../props.js";
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
    Pick<M, "index" | "hidden" | "disabled">,
    Get<UseListboxItemParameters<ListItemElement, ListboxInfo<ListItemElement>>, "sortableChildParameters">,
    Get<UseListboxItemParameters<ListItemElement, ListboxInfo<ListItemElement>>, "pressParameters">,
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
            pageNavigationSize: 1
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
            typeaheadTimeout: Infinity
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
    render
}: ListboxProps<ListElement, ListItemElement, LabelElement, M>) {
    const listboxGroupInfo = useContext(ListboxGroupContext);
    const info = useListbox<ListElement, ListItemElement, LabelElement, M>({
        labelParameters: { ariaLabel },
        staggeredChildrenParameters: {
            staggered: staggered || false
        },
        linearNavigationParameters: {
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
            collator: useDefault("collator", collator),
            noTypeahead: useDefault("noTypeahead", noTypeahead),
            typeaheadTimeout: useDefault("typeaheadTimeout", typeaheadTimeout)
        },
        singleSelectionParameters: { ariaPropName: ariaPropName || "aria-selected", selectionMode: selectionMode || "activation" }
    });

    return (
        <ListboxContext.Provider value={info.context}>{render(info)}</ListboxContext.Provider>
    );
})

export const ListboxItem = memoForwardRef(function ListboxItem<ListboxItemElement extends Element, M extends ListboxInfo<ListboxItemElement> = ListboxInfo<ListboxItemElement>>({
    disabled,
    focusSelf,
    onPressSync,
    getText,
    hidden,
    index,
    render,
    selected,
    getSortValue,
    ...subInfo
}: ListboxItemProps<ListboxItemElement, M>) {
    const context = useContext(ListboxContext) as UseListboxContext<any, ListboxItemElement, M>;
    console.assert(context != null, `This ListboxItem is not contained within a Listbox`);
    const focusSelfDefault = useCallback((e: any) => { e?.focus(); }, []);
    const info = useListboxItem<ListboxItemElement, M>({
        info: { index, hidden: hidden || false, disabled: disabled || false, focusSelf: focusSelf ?? focusSelfDefault, ...subInfo } as M,
        context,
        listboxParameters: { selected: selected ?? null, },
        pressParameters: { onPressSync },
        sortableChildParameters: { getSortValue: getSortValue },
        textContentParameters: { getText: useDefault("getText", getText) },
    });

    return render(info);
})
