import { createContext, createElement, h, VNode } from "preact";
import { ElementToTag } from "../props";
import { useAriaTabs, UseAriaTabsParameters, UseTab, UseTabInfo, UseTabPanel } from "../use-tabs";
import { AriaListboxSinglePropsDerivedFrom } from "./listbox-single";

export interface TabsProps<LabelElement extends Element, ListElement extends Element> extends Omit<UseAriaTabsParameters, "indexMangler" | "indexDemangler" | "onAfterChildLayoutEffect" | "onChildrenMountChange" | "onTabbableIndexChange" | "onTabbableRender" | "onTabbedInTo" | "onTabbedOutOf"> {
    tagLabel: ElementToTag<LabelElement>;
    tagList: ElementToTag<ListElement>;
    propsLabel: () => h.JSX.HTMLAttributes<LabelElement>;
    propsList: () => h.JSX.HTMLAttributes<ListElement>;
    render?(label: VNode<any>, list: VNode<any>): VNode<any>;
}

export type TabProps<ListboxItemElement extends HTMLElement> = Omit<Parameters<UseTab<ListboxItemElement>>[0], "blurSelf" | "focusSelf" | "flags"> & {
    tagListItem: ElementToTag<ListboxItemElement>;
    propsListItem: (args: AriaListboxSinglePropsDerivedFrom) => h.JSX.HTMLAttributes<ListboxItemElement>;
    render?(listItem: VNode<any>): VNode<any>;
}

const TabContext = createContext<UseTab<any>>(null!);
const TabPanelContext = createContext<UseTabPanel<any>>(null!);

export function Tabs<LabelElement extends HTMLElement, ListElement extends HTMLElement, TabElement extends HTMLElement, TabPanelElement extends HTMLElement>({ initialIndex, onSelect, orientation, propsLabel, propsList, selectedIndex, selectionMode, tagLabel, tagList, collator, disableArrowKeys, disableHomeEndKeys, navigationDirection, noTypeahead, render, typeaheadTimeout }: TabsProps<LabelElement, ListElement>) {
    const {
        currentTypeahead,
        focusSelf,
        getTabbableIndex,
        useTab,
        useTabPanel,
        useTabsLabelProps,
        useTabsListProps
    } = useAriaTabs<ListElement, TabElement, TabPanelElement, LabelElement>({
        initialIndex,
        onSelect,
        orientation,
        selectedIndex,
        selectionMode,
        collator,
        disableArrowKeys,
        disableHomeEndKeys,
        navigationDirection,
        noTypeahead
    });



    const label = createElement(tagLabel, useTabsLabelProps(propsLabel()) as any);
    const list = createElement(tagList, useTabsListProps(propsList()) as any);

    return (
        <TabContext.Provider value={useTab}>
            <TabPanelContext.Provider value={useTabPanel}>
                {(render ?? defaultTabsRender)(label, list)}
            </TabPanelContext.Provider>
        </TabContext.Provider>
    )
}

function defaultTabsRender(label: VNode<any>, list: VNode<any>) {
    return (
        <>{label}{list}</>
    )
}
