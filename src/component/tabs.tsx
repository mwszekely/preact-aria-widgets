import { createContext } from "preact";
import { assertEmptyObject, focus, memo, OmitStrong } from "preact-prop-helpers";
import { useCallback, useImperativeHandle } from "preact/hooks";
import { Get, Get11, Get5, useContextWithWarning } from "../props.js";
import { TabInfo, TabPanelInfo, useTab, useTabPanel, UseTabPanelParameters, UseTabPanelReturnType, UseTabPanelsContext, UseTabParameters, UseTabReturnType, useTabs, UseTabsContext, UseTabsParameters, UseTabsReturnType } from "../use-tabs.js";
import { GenericComponentProps, useComponent, useDefault } from "./util.js";

export type TabsProps<TabContainerElement extends Element, TabElement extends Element, TabLabelElement extends Element, M extends TabInfo<TabElement> = TabInfo<TabElement>> = GenericComponentProps<
    UseTabsReturnType<TabContainerElement, TabElement, TabLabelElement, M>,
    Get11<UseTabsParameters<TabContainerElement, TabElement, M>, "labelParameters", "linearNavigationParameters", "rearrangeableChildrenParameters", "rovingTabIndexParameters", "singleSelectionParameters", "sortableChildrenParameters", "staggeredChildrenParameters", "tabsParameters", "typeaheadNavigationParameters", "singleSelectionParameters", "refElementParameters">,
    "orientation" | "ariaLabel"
>;


export type TabProps<TabElement extends Element, M extends TabInfo<TabElement> = TabInfo<TabElement>> = GenericComponentProps<
    UseTabReturnType<TabElement, M>,
    Get5<UseTabParameters<TabElement, TabInfo<TabElement>>, "pressParameters", "textContentParameters", "info", "hasCurrentFocusParameters", "refElementParameters">,
    "index" | "getSortValue"
> & { info?: OmitStrong<M, keyof TabInfo<TabElement>>; };

export type TabPanelProps<PanelElement extends Element, M extends TabPanelInfo = TabPanelInfo> = GenericComponentProps<
    UseTabPanelReturnType<PanelElement>,
    Get<UseTabPanelParameters<M>, "info">,
    "index"
> & { info?: OmitStrong<M, keyof TabPanelInfo>; };


const TabsContext = createContext<UseTabsContext<any, any>>(null!);
const TabPanelsContext = createContext<UseTabPanelsContext<any>>(null!);
const UntabbableContext = createContext(false);
const SelectionModeContext = createContext<NonNullable<UseTabsParameters<any, any, any>["singleSelectionParameters"]["selectionMode"]>>("focus");

export const Tabs = memo(function Tabs<TabContainerElement extends Element, TabElement extends Element, TabLabelElement extends Element>({
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
    untabbable,
    typeaheadTimeout,
    role,
    onNavigateLinear,
    onNavigateTypeahead,
    imperativeHandle,
    onElementChange, 
    onMount, 
    onUnmount,
    render,
    ...void1
}: TabsProps<TabContainerElement, TabElement, TabLabelElement>) {
    untabbable ??= false;
    selectionMode ??= "focus";
    assertEmptyObject(void1);
    const info = useTabs<TabContainerElement, TabElement, TabLabelElement>({
        labelParameters: { ariaLabel },
        staggeredChildrenParameters: { staggered: staggered || false },
        linearNavigationParameters: {
            onNavigateLinear,
            disableHomeEndKeys: useDefault("disableHomeEndKeys", disableHomeEndKeys),
            navigatePastEnd: navigatePastEnd ?? "wrap",
            navigatePastStart: navigatePastStart ?? "wrap",
            pageNavigationSize: useDefault("pageNavigationSize", pageNavigationSize)
        },
        rearrangeableChildrenParameters: { getIndex: useDefault("getIndex", getIndex) },
        rovingTabIndexParameters: {
            onTabbableIndexChange,
            untabbable
        },
        singleSelectionParameters: { initiallySelectedIndex, onSelectedIndexChange, selectionMode },
        sortableChildrenParameters: { compare },
        tabsParameters: { 
            orientation, 
            role, 
            localStorageKey
        },
        typeaheadNavigationParameters: {
            onNavigateTypeahead,
            collator: useDefault("collator", collator),
            noTypeahead: useDefault("noTypeahead", noTypeahead),
            typeaheadTimeout: useDefault("typeaheadTimeout", typeaheadTimeout)
        },
        refElementParameters: { onElementChange, onMount, onUnmount }
    });

    const { contextPanels, contextTabs } = info;

    useImperativeHandle(imperativeHandle!, () => info);

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

export function Tab<E extends Element>({
    unselectable,
    focusSelf,
    untabbable,
    index,
    getText,
    render,
    longPressThreshold,
    onPressingChange,
    getSortValue,
    imperativeHandle,
    onElementChange, 
    onMount, 
    onUnmount,
    onCurrentFocusedChanged, 
    onCurrentFocusedInnerChanged,
    info: uinfo
}: TabProps<E, TabInfo<E>>) {
    
    const context = useContextWithWarning(TabsContext, "tabs");
    console.assert(context != null, `This Tab is not contained within a Tabs component`);
    const focusSelfDefault = useCallback((e: any) => { focus(e); }, []);
    return useComponent(
        imperativeHandle,
        render,
        null,
        useTab<E>({
            info: {
                index,
                unselectable: unselectable || false,
                untabbable: untabbable || false,
                focusSelf: focusSelf ?? focusSelfDefault,
                getSortValue,
                ...uinfo
            },
            context,
            hasCurrentFocusParameters: { onCurrentFocusedChanged, onCurrentFocusedInnerChanged },
            refElementParameters: { onElementChange, onMount, onUnmount },
            pressParameters: { focusSelf: focusSelfDefault, longPressThreshold, onPressingChange },
            textContentParameters: { getText: useDefault("getText", getText) }
        }));
}

export function TabPanel<E extends Element>({
    index,
    render,
    info: uinfo
}: TabPanelProps<E, TabPanelInfo>) {
    const context = useContextWithWarning(TabPanelsContext, "tabs");
    const info = useTabPanel<E>({
        context,
        info: { index, ...uinfo }
    });
    return render(info);
}
