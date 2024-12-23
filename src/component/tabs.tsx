import { assertEmptyObject, createContext, focus, identity, memo, OmitStrong, useCallback, useEnsureStability, useImperativeHandle } from "preact-prop-helpers";
import { Get, Get6, Get9, useContextWithWarning } from "../props.js";
import { TabInfo, TabPanelInfo, useTab, useTabPanel, UseTabPanelParameters, UseTabPanelReturnType, UseTabPanelsContext, UseTabParameters, UseTabReturnType, useTabs, UseTabsContext, UseTabsParameters, UseTabsReturnType } from "../use-tabs.js";
import { GenericComponentProps, useComponent, useDefault } from "./util.js";

export type TabsProps<TabContainerElement extends Element, TabElement extends Element, TabLabelElement extends Element, M extends TabInfo<TabElement> = TabInfo<TabElement>> = GenericComponentProps<
    UseTabsReturnType<TabContainerElement, TabElement, TabLabelElement, M>,
    Get9<UseTabsParameters<TabContainerElement, TabElement, M>, "labelParameters", "linearNavigationParameters", "rovingTabIndexParameters", "singleSelectionParameters", "tabsParameters", "typeaheadNavigationParameters", "singleSelectionParameters", "refElementParameters", "processedIndexManglerParameters">,
    "orientation" | "ariaLabel"
>;


export type TabProps<TabElement extends Element, M extends TabInfo<TabElement> = TabInfo<TabElement>> = GenericComponentProps<
    UseTabReturnType<TabElement, M>,
    Get6<UseTabParameters<TabElement, TabInfo<TabElement>>, "pressParameters", "textContentParameters", "info", "hasCurrentFocusParameters", "refElementParameters", "singleSelectionChildParameters">,
    "index"
> & { info?: OmitStrong<M, keyof TabInfo<TabElement>>; };

export type TabPanelProps<PanelElement extends Element, M extends TabPanelInfo = TabPanelInfo> = GenericComponentProps<
    UseTabPanelReturnType<PanelElement>,
    Get<UseTabPanelParameters<M>, "info">,
    "index"
> & { info?: OmitStrong<M, keyof TabPanelInfo>; };


const TabsContext = createContext<UseTabsContext<any, any>>(null!);
const TabPanelsContext = createContext<UseTabPanelsContext<any>>(null!);
//const UntabbableContext = createContext(false);
//const SelectionModeContext = createContext<NonNullable<UseTabsParameters<any, any, any>["singleSelectionParameters"]["selectionMode"]>>("focus");

export const Tabs = /* @__PURE__ */ memo((function Tabs<TabContainerElement extends Element, TabElement extends Element, TabLabelElement extends Element>({
    ariaLabel,
    collator,
    disableHomeEndKeys,
    initiallySingleSelectedIndex,
    navigatePastEnd,
    navigatePastStart,
    noTypeahead,
    onSingleSelectedIndexChange,
    onTabbableIndexChange,
    orientation,
    pageNavigationSize,
    localStorageKey,
    singleSelectionMode,
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
    getSortValueAt,
    compare,
    getIndex,
    ...void1
}: TabsProps<TabContainerElement, TabElement, TabLabelElement>) {
    untabbable ??= false;
    getSortValueAt ??= identity;
    useEnsureStability("Tabs", getSortValueAt);
    assertEmptyObject(void1);
    const info = useTabs<TabContainerElement, TabElement, TabLabelElement>({
        labelParameters: { ariaLabel },
        linearNavigationParameters: {
            onNavigateLinear,
            disableHomeEndKeys: useDefault("disableHomeEndKeys", disableHomeEndKeys),
            navigatePastEnd: navigatePastEnd ?? "wrap",
            navigatePastStart: navigatePastStart ?? "wrap",
            pageNavigationSize: useDefault("pageNavigationSize", pageNavigationSize)
        },
        rovingTabIndexParameters: {
            onTabbableIndexChange,
            untabbable
        },
        singleSelectionParameters: { initiallySingleSelectedIndex, onSingleSelectedIndexChange, singleSelectionMode: singleSelectionMode || "focus" },
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
        refElementParameters: { onElementChange, onMount, onUnmount },
        processedIndexManglerParameters: { getSortValueAt, compare, getIndex: useDefault("getIndex", getIndex) }
    });

    const { contextPanels, contextTabs } = info;

    useImperativeHandle(imperativeHandle!, () => info);

    return (
        <TabsContext.Provider value={contextTabs}>
            <TabPanelsContext.Provider value={contextPanels}>
                {render(info)}
            </TabPanelsContext.Provider>
        </TabsContext.Provider>
    )
}))

export const Tab = /* @__PURE__ */ memo((function Tab<E extends Element>({
    focusSelf,
    untabbable,
    index,
    getText,
    render,
    longPressThreshold,
    onPressingChange,
    imperativeHandle,
    onElementChange,
    onMount,
    onUnmount,
    onCurrentFocusedChanged,
    onCurrentFocusedInnerChanged,
    singleSelectionDisabled,
    onTextContentChange,
    info: uinfo,
    ...void1
}: TabProps<E, TabInfo<E>>) {

    assertEmptyObject(void1);
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
                untabbable: untabbable || false,
                focusSelf: focusSelf ?? focusSelfDefault,
                ...uinfo
            },
            context,
            hasCurrentFocusParameters: { onCurrentFocusedChanged, onCurrentFocusedInnerChanged },
            refElementParameters: { onElementChange, onMount, onUnmount },
            pressParameters: { focusSelf: focusSelfDefault, longPressThreshold, onPressingChange },
            textContentParameters: { getText: useDefault("getText", getText), onTextContentChange },
            singleSelectionChildParameters: { singleSelectionDisabled: singleSelectionDisabled || false, }
        }));
}))

export const TabPanel = /* @__PURE__ */ memo((function TabPanel<E extends Element>({
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
}))
