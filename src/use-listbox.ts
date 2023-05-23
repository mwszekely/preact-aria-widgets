import { h } from "preact";
import {
    CompleteListNavigationContext, monitorCallCount, useCompleteListNavigationChild,
    UseCompleteListNavigationChildInfo,
    UseCompleteListNavigationChildParameters,
    UseCompleteListNavigationChildReturnType,
    useCompleteListNavigationDeclarative,
    UseCompleteListNavigationParameters,
    UseCompleteListNavigationReturnType, useEnsureStability, useMergedProps, usePress, UsePressParameters, UsePressReturnType, UseSingleSelectionParameters, useStableCallback, useMemoObject
} from "preact-prop-helpers";
import { EventDetail, OmitStrong, Prefices } from "./props.js";
import { useLabelSynthetic, UseLabelSyntheticParameters } from "./use-label.js";

export type ListboxSingleSelectEvent<E extends EventTarget> = { [EventDetail]: { selectedIndex: number } } & Pick<h.JSX.TargetedEvent<E>, "target" | "currentTarget">;

export interface UseListboxContext<ListElement extends Element, ListItemElement extends Element, M extends ListboxInfo<ListItemElement>> extends CompleteListNavigationContext<ListElement, ListItemElement, M> {
    listboxContext: { selectionLimit: "single" | "multi" | "none" }
}

export interface UseListboxParameters<ListElement extends Element, ListItemElement extends Element, _LabelElement extends Element, M extends ListboxInfo<ListItemElement>> extends OmitStrong<UseCompleteListNavigationParameters<ListElement, ListItemElement, M>, "linearNavigationParameters" | "singleSelectionParameters"> {
    linearNavigationParameters: OmitStrong<UseCompleteListNavigationParameters<ListElement, ListItemElement, M>["linearNavigationParameters"], "arrowKeyDirection">;
    labelParameters: OmitStrong<UseLabelSyntheticParameters["labelParameters"], "onLabelClick">;
    singleSelectionParameters: Pick<UseCompleteListNavigationParameters<ListElement, ListItemElement, M>["singleSelectionParameters"], "ariaPropName" | "selectionMode">
    listboxParameters: {

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
        onSelectedIndexChange: UseSingleSelectionParameters<ListElement, ListItemElement, M>["singleSelectionParameters"]["onSelectedIndexChange"] //PassiveStateUpdater<number | null, Event> | null;

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
export interface UseListboxReturnType<ListElement extends Element, ListItemElement extends Element, LabelElement extends Element, M extends ListboxInfo<ListItemElement>> extends OmitStrong<UseCompleteListNavigationReturnType<ListElement, ListItemElement, M>, "singleSelectionReturn" | "props"> {
    propsListbox: h.JSX.HTMLAttributes<ListElement>;
    propsListboxLabel: h.JSX.HTMLAttributes<LabelElement>;
    context: UseListboxContext<ListElement, ListItemElement, M>;
}
export interface UseListboxItemReturnType<ListItemElement extends Element, M extends ListboxInfo<ListItemElement>> extends UseCompleteListNavigationChildReturnType<ListItemElement, M>, UsePressReturnType<ListItemElement> { }
export interface UseListboxItemParameters<ListItemElement extends Element, M extends ListboxInfo<ListItemElement>> extends UseCompleteListNavigationChildParameters<ListItemElement, M> {
    //pressParameters: Pick<UsePressParameters<ListItemElement>["pressParameters"], "onPressSync">;
    listboxParameters: {
        /**
         * When the `selectionLimit` is `"single"`, this must be `null`.
         */
        selected: boolean | null;
    }
    context: UseListboxContext<any, ListItemElement, M>;
}

export interface ListboxInfo<ListItemElement extends Element> extends UseCompleteListNavigationChildInfo<ListItemElement> {

}

export function useListbox<ListElement extends Element, ListItemElement extends Element, LabelElement extends Element, M extends ListboxInfo<ListItemElement>>({
    labelParameters,
    listboxParameters: { selectionLimit, groupingType, selectedIndex, onSelectedIndexChange, orientation },
    linearNavigationParameters,
    singleSelectionParameters: { ariaPropName, selectionMode },
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
        singleSelectionDeclarativeParameters: { selectedIndex, setSelectedIndex: (i,e) => { debugger; onSelectedIndexChange?.(i,e) } },
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

export function useListboxItem<ListItemElement extends Element, M extends ListboxInfo<ListItemElement>>({
    context: { listboxContext: { selectionLimit }, ...context },
    listboxParameters: { selected },
    rovingTabIndexParameters,
    singleSelectionParameters,
    pressParameters,
    ...restParams
}: UseListboxItemParameters<ListItemElement, M>): UseListboxItemReturnType<ListItemElement, M> {
    monitorCallCount(useListboxItem);

    const {
        props,
        refElementReturn,
        ...restRet
    } = useCompleteListNavigationChild<ListItemElement, M>({
        context,
        rovingTabIndexParameters,
        singleSelectionParameters,
        pressParameters,
        ...restParams
    });

    if (selectionLimit == "single")
        console.assert(selected == null);

    props.role = "option";
    props["aria-disabled"] = restParams.info.disabled? "true" : undefined;

    return {
        //pressReturn,
        refElementReturn,
        props, //useMergedProps(props, propsPress),
        ...restRet
    }
}
