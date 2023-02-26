import { createContext, Ref, VNode } from "preact";
import { useCallback, useContext, useImperativeHandle } from "preact/hooks";
import { OmitStrong } from "../props.js";
import { TabInfo, TabPanelInfo, TabPanelsContext, TabsContext, useTab, useTabPanel, UseTabPanelParameters, UseTabPanelReturnType, UseTabParameters, UseTabReturnType, useTabs, UseTabsParameters, UseTabsReturnType } from "../use-tabs.js";
import { memoForwardRef, PartialExcept, useDefault } from "./util.js";

type Get<T, K extends keyof T> = T[K];

interface TabsPropsBase<TabContainerElement extends Element, TabElement extends Element, TabLabelElement extends Element, M extends TabInfo<TabElement>> extends
    Get<UseTabsParameters<TabContainerElement, TabElement, TabLabelElement, M>, "labelParameters">,
    Get<UseTabsParameters<TabContainerElement, TabElement, TabLabelElement, M>, "linearNavigationParameters">,
    Get<UseTabsParameters<TabContainerElement, TabElement, TabLabelElement, M>, "rearrangeableChildrenParameters">,
    Get<UseTabsParameters<TabContainerElement, TabElement, TabLabelElement, M>, "rovingTabIndexParameters">,
    Get<UseTabsParameters<TabContainerElement, TabElement, TabLabelElement, M>, "singleSelectionParameters">,
    Get<UseTabsParameters<TabContainerElement, TabElement, TabLabelElement, M>, "sortableChildrenParameters">,
    Get<UseTabsParameters<TabContainerElement, TabElement, TabLabelElement, M>, "staggeredChildrenParameters">,
    Get<UseTabsParameters<TabContainerElement, TabElement, TabLabelElement, M>, "tabsParameters">,
    Get<UseTabsParameters<TabContainerElement, TabElement, TabLabelElement, M>, "typeaheadNavigationParameters"> {
}

interface TabPropsBase<TabElement extends Element, M extends TabInfo<TabElement>> extends
    Get<UseTabParameters<TabElement, M>, "managedChildParameters">,
    Get<UseTabParameters<TabElement, M>, "singleSelectionChildParameters">,
    Get<UseTabParameters<TabElement, M>, "sortableChildParameters">,
    Get<UseTabParameters<TabElement, M>, "rovingTabIndexChildParameters">,
    Get<UseTabParameters<TabElement, M>, "textContentParameters"> {
    focusSelf: Get<UseTabParameters<TabElement, M>, "completeListNavigationChildParameters">["focusSelf"];
    subInfo?: OmitStrong<Get<UseTabParameters<TabElement, M>, "completeListNavigationChildParameters">, "focusSelf">
}

interface TabPanelPropsBase<M extends TabPanelInfo> extends
    Get<UseTabPanelParameters<M>, "managedChildParameters"> {
}

export interface TabsProps<TabContainerElement extends Element, TabElement extends Element, TabLabelElement extends Element, M extends TabInfo<TabElement>> extends PartialExcept<TabsPropsBase<TabContainerElement, TabElement, TabLabelElement, M>, "orientation" | "ariaLabel"> {
    render(info: UseTabsReturnType<TabContainerElement, TabElement, TabLabelElement, M>): VNode<any>;
}

export interface TabProps<TabElement extends Element, M extends TabInfo<TabElement>> extends PartialExcept<TabPropsBase<TabElement, M>, "index" | "getSortValue"> {
    render(info: UseTabReturnType<TabElement, M>): VNode<any>;
}

export interface TabPanelProps<PanelElement extends Element, M extends TabPanelInfo> extends PartialExcept<TabPanelPropsBase<M>, "index"> {
    render(info: UseTabPanelReturnType<PanelElement>): VNode<any>;
}

const TabsContext = createContext<TabsContext<any, any, any>>(null!);
const TabPanelsContext = createContext<TabPanelsContext<any>>(null!);

export const Tabs = memoForwardRef(function Tabs<TabContainerElement extends Element, TabElement extends Element, TabLabelElement extends Element, M extends TabInfo<TabElement> = TabInfo<TabElement>>({
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
}: TabsProps<TabContainerElement, TabElement, TabLabelElement, M>, ref?: Ref<any>) {
    const info = useTabs<TabContainerElement, TabElement, TabLabelElement, M>({
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

export const Tab = memoForwardRef(function Tab<E extends Element, M extends TabInfo<E> = TabInfo<E>>({
    disabled,
    focusSelf,
    hidden,
    index,
    getText,
    getSortValue,
    render,
    selectionMode,
    subInfo
}: TabProps<E, M>, ref?: Ref<any>) {
    const context = useContext(TabsContext);
    console.assert(context != null, `This Tab is not contained within a Tabs component`);
    const focusSelfDefault = useCallback((e: any) => { e?.focus(); }, []);
    const info = useTab<E, M>({
        completeListNavigationChildParameters: { focusSelf: focusSelf ?? focusSelfDefault, ...subInfo } as M,
        context,
        rovingTabIndexChildParameters: { hidden: hidden ?? false },
        sortableChildParameters: { getSortValue },
        managedChildParameters: { index },
        singleSelectionChildParameters: { disabled: disabled ?? false, selectionMode: selectionMode ?? "focus" },
        textContentParameters: { getText: useDefault("getText", getText) }
    });
    useImperativeHandle(ref!, () => info);
    return render(info);
})

export function TabPanel<E extends Element, M extends TabPanelInfo = TabPanelInfo>({
    index,
    render
}: TabPanelProps<E, M>) {
    const context = useContext(TabPanelsContext);
    const info = useTabPanel<E, M>({
        context,
        managedChildParameters: { index }
    });
    return render(info);
}
