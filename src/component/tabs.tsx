import { createContext, Ref, VNode } from "preact";
import { useCallback, useContext, useImperativeHandle } from "preact/hooks";
import { OmitStrong } from "../props.js";
import { TabInfo, TabPanelInfo, useTab, useTabPanel, UseTabPanelReturnType, UseTabPanelsContext, UseTabParameters, UseTabReturnType, useTabs, UseTabsContext, UseTabsParameters, UseTabsReturnType } from "../use-tabs.js";
import { memoForwardRef, PartialExcept, useDefault } from "./util.js";
import { focus } from "preact-prop-helpers";

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
    Get<UseTabsParameters<TabContainerElement, TabElement, TabLabelElement, M>, "typeaheadNavigationParameters">,
    Get<UseTabsParameters<TabContainerElement, TabElement, TabLabelElement, M>, "singleSelectionParameters"> {
}

interface TabPropsBase<TabElement extends Element, M extends TabInfo<TabElement>> extends
    Pick<M, "index" | "hidden" | "disabled">,
    Get<UseTabParameters<TabElement, M>, "sortableChildParameters">,
    Get<UseTabParameters<TabElement, M>, "textContentParameters"> {
    focusSelf: M["focusSelf"];
    info?: OmitStrong<M, keyof TabInfo<TabElement>>
}

interface TabPanelPropsBase<M extends TabPanelInfo> extends Pick<M, "index"> {
    info?: OmitStrong<M, keyof TabPanelInfo>
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

const TabsContext = createContext<UseTabsContext<any, any, any>>(null!);
const TabPanelsContext = createContext<UseTabPanelsContext<any>>(null!);
const UntabbableContext = createContext(false);
//const AriaPropNameContext = createContext<UseTabsParameters<any, any, any, any>["singleSelectionParameters"]["ariaPropName"]>("aria-selected")
const SelectionModeContext = createContext<NonNullable<UseTabsParameters<any, any, any, any>["singleSelectionParameters"]["selectionMode"]>>("focus");

export const Tabs = memoForwardRef(function Tabs<TabContainerElement extends Element, TabElement extends Element, TabLabelElement extends Element, M extends TabInfo<TabElement> = TabInfo<TabElement>>({
    ariaLabel,
    collator,
    compare,
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
    selectionMode,
    //groupingType,
    untabbable,
    typeaheadTimeout,
    role,
    render
}: TabsProps<TabContainerElement, TabElement, TabLabelElement, M>, ref?: Ref<any>) {
    untabbable ??= false;
    selectionMode ??= "focus";

    const info = useTabs<TabContainerElement, TabElement, TabLabelElement, M>({
        labelParameters: { ariaLabel },
        staggeredChildrenParameters: { staggered: staggered || false },
        linearNavigationParameters: {
            disableHomeEndKeys: useDefault("disableHomeEndKeys", disableHomeEndKeys),
            navigatePastEnd: navigatePastEnd ?? "wrap",
            navigatePastStart: navigatePastStart ?? "wrap",
            pageNavigationSize: useDefault("pageNavigationSize", pageNavigationSize)
        },
        rearrangeableChildrenParameters: { getIndex: useDefault("getIndex", getIndex) },
        rovingTabIndexParameters: {
            onTabbableIndexChange: onTabbableIndexChange ?? null,
            untabbable
        },
        singleSelectionParameters: { initiallySelectedIndex: initiallySelectedIndex ?? 0, onSelectedIndexChange: onSelectedIndexChange ?? null, selectionMode },
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
        <UntabbableContext.Provider value={untabbable}>
            <SelectionModeContext.Provider value={selectionMode}>
                <TabsContext.Provider value={contextTabs}>
                    <TabPanelsContext.Provider value={contextPanels}>
                        {render(info)}
                    </TabPanelsContext.Provider>
                </TabsContext.Provider>
            </SelectionModeContext.Provider>
        </UntabbableContext.Provider>
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
    info: uinfo
}: TabProps<E, M>, ref?: Ref<any>) {
    const context = useContext(TabsContext);
    console.assert(context != null, `This Tab is not contained within a Tabs component`);
    const focusSelfDefault = useCallback((e: any) => { focus(e); }, []);
    const info = useTab<E, M>({
        info: { index, disabled, hidden, focusSelf: focusSelf ?? focusSelfDefault, ...uinfo } as M,
        context,
        sortableChildParameters: { getSortValue },
        textContentParameters: { getText: useDefault("getText", getText) },
        pressParameters: null, //{ focusSelf: focusSelf ?? focusSelfDefault, onPressSync: null },
        rovingTabIndexParameters: { untabbable: useContext(UntabbableContext) },
        singleSelectionParameters: { selectionMode: useContext(SelectionModeContext) }
    });
    useImperativeHandle(ref!, () => info);
    return render(info);
})

export function TabPanel<E extends Element, M extends TabPanelInfo = TabPanelInfo>({
    index,
    render,
    info: uinfo
}: TabPanelProps<E, M>) {
    const context = useContext(TabPanelsContext);
    const info = useTabPanel<E, M>({
        context,
        info: { index, ...uinfo } as M
    });
    return render(info);
}
