import { createContext, Ref, VNode } from "preact";
import { useCallback, useContext, useImperativeHandle } from "preact/hooks";
import { TabPanelsContext, TabsContext, useTab, useTabPanel, UseTabPanelParameters, UseTabPanelReturnType, UseTabParameters, UseTabReturnType, useTabs, UseTabsParameters, UseTabsReturnType } from "../use-tabs";
import { memoForwardRef, PartialExcept, useDefault } from "./util";

type Get<T, K extends keyof T> = T[K];

interface TabsPropsBase<TabContainerElement extends Element, TabElement extends Element, TabLabelElement extends Element> extends
    Get<UseTabsParameters<TabContainerElement, TabElement, TabLabelElement>, "labelParameters">,
    Get<UseTabsParameters<TabContainerElement, TabElement, TabLabelElement>, "linearNavigationParameters">,
    Get<UseTabsParameters<TabContainerElement, TabElement, TabLabelElement>, "rearrangeableChildrenParameters">,
    Get<UseTabsParameters<TabContainerElement, TabElement, TabLabelElement>, "rovingTabIndexParameters">,
    Get<UseTabsParameters<TabContainerElement, TabElement, TabLabelElement>, "singleSelectionParameters">,
    Get<UseTabsParameters<TabContainerElement, TabElement, TabLabelElement>, "sortableChildrenParameters">,
    Get<UseTabsParameters<TabContainerElement, TabElement, TabLabelElement>, "staggeredChildrenParameters">,
    Get<UseTabsParameters<TabContainerElement, TabElement, TabLabelElement>, "tabsParameters">,
    Get<UseTabsParameters<TabContainerElement, TabElement, TabLabelElement>, "typeaheadNavigationParameters"> {
}

interface TabPropsBase<TabElement extends Element> extends
    Get<UseTabParameters<TabElement>, "managedChildParameters">,
    Get<UseTabParameters<TabElement>, "singleSelectionChildParameters">,
    Get<UseTabParameters<TabElement>, "sortableChildParameters">,
    Get<UseTabParameters<TabElement>, "rovingTabIndexChildParameters">,
    Get<UseTabParameters<TabElement>, "textContentParameters">,
    Get<UseTabParameters<TabElement>, "completeListNavigationChildParameters"> {
}

interface TabPanelPropsBase extends
    Get<UseTabPanelParameters, "managedChildParameters"> {
}

export interface TabsProps<TabContainerElement extends Element, TabElement extends Element, TabLabelElement extends Element> extends PartialExcept<TabsPropsBase<TabContainerElement, TabElement, TabLabelElement>, "orientation" | "ariaLabel"> {
    render(info: UseTabsReturnType<TabContainerElement, TabElement, TabLabelElement>): VNode<any>;
}

export interface TabProps<TabElement extends Element> extends PartialExcept<TabPropsBase<TabElement>, "index" | "getSortValue"> {
    render(info: UseTabReturnType<TabElement>): VNode<any>;
}

export interface TabPanelProps<PanelElement extends Element> extends PartialExcept<TabPanelPropsBase, "index"> {
    render(info: UseTabPanelReturnType<PanelElement>): VNode<any>;
}

const TabsContext = createContext<TabsContext<any, any, any>>(null!);
const TabPanelsContext = createContext<TabPanelsContext<any>>(null!);

export const Tabs = memoForwardRef(function Tabs<TabContainerElement extends Element, TabElement extends Element, TabLabelElement extends Element>({
    ariaLabel,
    collator,
    compare,
    disableArrowKeys,
    disableHomeEndKeys,
    getIndex,
    initiallySelectedIndex,
    navigatePastEnd,
    navigatePastStart,
    noTypeahead,
    onSelectedIndexChange,
    onTabbableIndexChange,
    orientation,
    staggered,
    pageNavigationSize,
    localStorageKey,
    //groupingType,
    untabbable,
    typeaheadTimeout,
    role,
    render
}: TabsProps<TabContainerElement, TabElement, TabLabelElement>, ref?: Ref<any>) {
    const info = useTabs<TabContainerElement, TabElement, TabLabelElement>({
        labelParameters: { ariaLabel },
        staggeredChildrenParameters: { staggered: staggered || false },
        linearNavigationParameters: {
            disableArrowKeys: useDefault("disableArrowKeys", disableArrowKeys),
            disableHomeEndKeys: useDefault("disableHomeEndKeys", disableHomeEndKeys),
            navigatePastEnd: navigatePastEnd ?? "wrap",
            navigatePastStart: navigatePastStart ?? "wrap",
            pageNavigationSize: useDefault("pageNavigationSize", pageNavigationSize)
        },
        rearrangeableChildrenParameters: { getIndex: useDefault("getIndex", getIndex) },
        rovingTabIndexParameters: {
            onTabbableIndexChange: onTabbableIndexChange ?? null,
            untabbable: untabbable ?? false
        },
        singleSelectionParameters: { initiallySelectedIndex: initiallySelectedIndex ?? 0, onSelectedIndexChange: onSelectedIndexChange ?? null },
        sortableChildrenParameters: { compare: compare ?? null },
        tabsParameters: { orientation, role, localStorageKey: localStorageKey ?? null },
        typeaheadNavigationParameters: {
            collator: useDefault("collator", collator),
            noTypeahead: useDefault("noTypeahead", noTypeahead),
            typeaheadTimeout: useDefault("typeaheadTimeout", typeaheadTimeout)
        }
    });

    const { contextPanels, contextTabs } = info;

    useImperativeHandle(ref!, () => info);


    return (
        <TabsContext.Provider value={contextTabs}>
            <TabPanelsContext.Provider value={contextPanels}>
                {render(info)}
            </TabPanelsContext.Provider>
        </TabsContext.Provider>
    )
})

export const Tab = memoForwardRef(function Tab<E extends Element>({
    disabled,
    focusSelf,
    hidden,
    index,
    getText,
    getSortValue,
    render
}: TabProps<E>, ref?: Ref<any>) {
    const context = useContext(TabsContext);
    console.assert(context != null, `This Tab is not contained within a Tabs component`);
    const focusSelfDefault = useCallback((e: any) => { e?.focus(); }, []);
    const info = useTab<E>({
        completeListNavigationChildParameters: { focusSelf: focusSelf ?? focusSelfDefault },
        context,
        rovingTabIndexChildParameters: { hidden: hidden ?? false },
        sortableChildParameters: { getSortValue },
        managedChildParameters: { index },
        singleSelectionChildParameters: { disabled: disabled ?? false, selectionMode: "focus" },
        textContentParameters: { getText: useDefault("getText", getText) }
    });
    useImperativeHandle(ref!, () => info);
    return render(info);
})

export function TabPanel<E extends Element>({
    index,
    render
}: TabPanelProps<E>) {
    const context = useContext(TabPanelsContext);
    const info = useTabPanel<E>({
        context,
        managedChildParameters: { index }
    });
    return render(info);
}
