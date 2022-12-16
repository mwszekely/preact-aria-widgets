import { createContext, Ref, VNode } from "preact";
import { returnNull } from "preact-prop-helpers";
import { useCallback, useContext, useState } from "preact/hooks";
import { ListboxInfo, useListbox, UseListboxContext, useListboxItem, UseListboxItemParameters, UseListboxItemReturnType, UseListboxParameters, UseListboxReturnType } from "../use-listbox";
import { PartialExcept, useDefault } from "./util";

type Get<T, K extends keyof T> = T[K];
//type Get2<T, K extends keyof T, K2 extends keyof T[K]> = T[K][K2];

interface ListboxPropsBase<ListElement extends Element, ListItemElement extends Element, LabelElement extends Element, M extends ListboxInfo<ListItemElement>> extends
    Get<UseListboxParameters<ListElement, ListItemElement, LabelElement, M>, "labelParameters">,
    Get<UseListboxParameters<ListElement, ListItemElement, LabelElement, M>, "linearNavigationParameters">,
    Get<UseListboxParameters<ListElement, ListItemElement, LabelElement, M>, "listboxParameters">,
    Get<UseListboxParameters<ListElement, ListItemElement, LabelElement, M>, "rearrangeableChildrenParameters">,
    Get<UseListboxParameters<ListElement, ListItemElement, LabelElement, M>, "rovingTabIndexParameters">,
    Get<UseListboxParameters<ListElement, ListItemElement, LabelElement, M>, "sortableChildrenParameters">,
    Get<UseListboxParameters<ListElement, ListItemElement, LabelElement, M>, "typeaheadNavigationParameters"> {
    ref?: Ref<UseListboxReturnType<ListElement, ListItemElement, LabelElement, M>>;
}

interface ListboxItemPropsBase<ListItemElement extends Element, M extends ListboxInfo<ListItemElement>> extends
    Get<UseListboxItemParameters<ListItemElement, ListboxInfo<ListItemElement>>, "listboxParameters">,
    Get<UseListboxItemParameters<ListItemElement, ListboxInfo<ListItemElement>>, "managedChildParameters">,
    Get<UseListboxItemParameters<ListItemElement, ListboxInfo<ListItemElement>>, "pressParameters">,
    Get<UseListboxItemParameters<ListItemElement, ListboxInfo<ListItemElement>>, "sortableChildParameters">,
    Get<UseListboxItemParameters<ListItemElement, ListboxInfo<ListItemElement>>, "rovingTabIndexChildParameters">,
    Get<UseListboxItemParameters<ListItemElement, ListboxInfo<ListItemElement>>, "singleSelectionChildParameters">,
    Get<UseListboxItemParameters<ListItemElement, ListboxInfo<ListItemElement>>, "textContentParameters"> {
    ref?: Ref<UseListboxItemReturnType<ListItemElement, M>>;
}

export interface ListboxProps<ListElement extends Element, ListItemElement extends Element, LabelElement extends Element, M extends ListboxInfo<ListItemElement>> extends PartialExcept<ListboxPropsBase<ListElement, ListItemElement, LabelElement, M>, "ariaLabel" | "groupingType" | "navigationDirection" | "selectionLimit" | "selectedIndex"> {
    render(info: UseListboxReturnType<ListElement, ListItemElement, LabelElement, M>): VNode;
}
export interface ListboxItemProps<ListItemElement extends Element, M extends ListboxInfo<ListItemElement>> extends PartialExcept<ListboxItemPropsBase<ListItemElement, M>, "ariaPropName" | "index" | "getSortValue"> {
    render(info: UseListboxItemReturnType<ListItemElement, ListboxInfo<ListItemElement>>): VNode;
}

const ListboxContext = createContext<UseListboxContext<any, any, any>>(null!);

export function Listbox<ListElement extends Element, ListItemElement extends Element, LabelElement extends Element>({
    ariaLabel,
    collator,
    compare,
    disableArrowKeys,
    disableHomeEndKeys,
    getIndex,
    selectedIndex,
    navigatePastEnd,
    navigatePastStart,
    navigationDirection,
    noTypeahead,
    setSelectedIndex,
    onTabbableIndexChange,
    pageNavigationSize,
    selectionLimit,
    groupingType,
    untabbable,
    typeaheadTimeout,
    render
}: ListboxProps<ListElement, ListItemElement, LabelElement, ListboxInfo<ListItemElement>>) {
    const info = useListbox<ListElement, ListItemElement, LabelElement, ListboxInfo<ListItemElement>>({
        labelParameters: { ariaLabel },
        linearNavigationParameters: {
            navigatePastEnd: navigatePastEnd ?? "wrap",
            navigatePastStart: navigatePastStart ?? "wrap",
            navigationDirection,

            disableArrowKeys: useDefault("disableArrowKeys", disableArrowKeys),
            disableHomeEndKeys: useDefault("disableHomeEndKeys", disableHomeEndKeys),
            pageNavigationSize: useDefault("pageNavigationSize", pageNavigationSize)
        },
        listboxParameters: { selectionLimit, groupingType, selectedIndex, setSelectedIndex: setSelectedIndex ?? noop },
        rearrangeableChildrenParameters: { getIndex: useDefault("getIndex", getIndex) },
        rovingTabIndexParameters: { onTabbableIndexChange: onTabbableIndexChange ?? null, untabbable: untabbable ?? false },
        //singleSelectionParameters: { initiallySelectedIndex: initiallySelectedIndex ?? null, setSelectedIndex: setSelectedIndex ?? null },
        sortableChildrenParameters: { compare: compare ?? null },
        typeaheadNavigationParameters: {
            collator: useDefault("collator", collator),
            noTypeahead: useDefault("noTypeahead", noTypeahead),
            typeaheadTimeout: useDefault("typeaheadTimeout", typeaheadTimeout)
        }
    });

    return (
        <ListboxContext.Provider value={info.context}>{render(info)}</ListboxContext.Provider>
    );
}

function noop() { }

export function ListboxItem<ListboxItemElement extends Element>({ ariaPropName, disabled, exclude, focusSelf, getText, hidden, index, onPressSync, render, selected, selectionMode, getSortValue }: ListboxItemProps<ListboxItemElement, ListboxInfo<ListboxItemElement>>) {
    const context = useContext(ListboxContext) as UseListboxContext<any, ListboxItemElement, ListboxInfo<ListboxItemElement>>;
    const focusSelfDefault = useCallback((e: any) => { e?.focus(); }, []);
    const info = useListboxItem({
        completeListNavigationChildParameters: {},
        context,
        listboxParameters: { selected: selected ?? null, },
        managedChildParameters: { index },
        rovingTabIndexChildParameters: { hidden: hidden ?? false },
        sortableChildParameters: { getSortValue: getSortValue },
        pressParameters: { exclude, focusSelf: focusSelf ?? focusSelfDefault, onPressSync },
        textContentParameters: { getText: useDefault("getText", getText) },
        singleSelectionChildParameters: {
            disabled: disabled ?? false,
            ariaPropName,
            selectionMode: useDefault("selectionMode", selectionMode)
        }
    });

    return render(info);
}

export function DemoListbox() {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(0);

    return (
        <Listbox<HTMLOListElement, HTMLLIElement, HTMLLabelElement>
            ariaLabel={null}
            collator={null}
            disableArrowKeys={false}
            disableHomeEndKeys={false}
            navigatePastEnd="wrap"
            navigatePastStart="wrap"
            selectedIndex={selectedIndex}
            setSelectedIndex={e => setSelectedIndex(e)}
            getIndex={v => v.props.index}
            noTypeahead={false}
            navigationDirection="vertical"
            selectionLimit="single"
            onTabbableIndexChange={null}
            pageNavigationSize={0.1}
            groupingType="without-groups"
            typeaheadTimeout={1000}
            compare={((lhs, rhs) => lhs.index - rhs.index)}
            render={info => {
                return (
                    <>
                        <label {...info.propsListboxLabel}>Listbox</label>
                        <ol {...info.propsListbox}></ol>
                    </>
                )
            }}
        />
    )
}

export function DemoListboxItem({ index }: { index: number }) {
    return (
        <ListboxItem<HTMLLIElement>
            ariaPropName="aria-selected"
            disabled={false}
            exclude={undefined}
            getSortValue={returnNull}
            focusSelf={e => e.focus()}
            hidden={false}
            index={index}
            onPressSync={null}
            selected={null}
            selectionMode="activation"
            render={info => {
                return (
                    <li {...info.props}>List item (index #{index})</li>
                )
            }}
        />
    )
}
