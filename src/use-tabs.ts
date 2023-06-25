import { h } from "preact";
import { CompleteListNavigationContext, ElementProps, ManagedChildInfo, OnChildrenMountChange, PersistentStates, UseCompleteListNavigationChildInfo, UseCompleteListNavigationChildParameters, UseCompleteListNavigationChildReturnType, UseCompleteListNavigationParameters, UseCompleteListNavigationReturnType, UseManagedChildParameters, UseManagedChildrenContext, UsePressReturnType, focus, generateRandomId, monitorCallCount, returnTrue, useChildrenFlag, useCompleteListNavigation, useCompleteListNavigationChild, useManagedChild, useManagedChildren, useMemoObject, useMergedProps, usePersistentState, useStableCallback, useState } from "preact-prop-helpers";
import { useCallback, useLayoutEffect } from "preact/hooks";
import { EventDetail, OmitStrong, Prefices } from "./props.js";
import { UseLabelSyntheticParameters, useLabelSynthetic } from "./use-label.js";


export interface TabPanelInfo extends ManagedChildInfo<number> {
    getVisible(): boolean;
    setVisibleIndex: (newIndex: number | null, previousIndex: number | null) => void;
}

export interface TabInfo<E extends Element> extends UseCompleteListNavigationChildInfo<E> { }


export type TabsChangeEvent<E extends Element> = { [EventDetail]: { selectedIndex: number } } & Pick<h.JSX.TargetedEvent<E>, "target" | "currentTarget">;

export interface UseTabsParameters<TabContainerElement extends Element, TabElement extends Element, TabLabelElement extends Element, M extends TabInfo<TabElement>> extends UseTabListParameters<TabContainerElement, TabElement, M> {

    labelParameters: OmitStrong<UseLabelSyntheticParameters["labelParameters"], "onLabelClick">;
    tabsParameters: {
        localStorageKey: keyof PersistentStates | null;
        orientation: "horizontal" | "vertical";
        role?: "tablist" | string;
    }
}
export interface UseTabParameters<TabElement extends Element, M extends TabInfo<TabElement>> extends OmitStrong<UseCompleteListNavigationChildParameters<TabElement,M>, never> {
    //singleSelectionParameters: OmitStrong<UseCompleteListNavigationChildParameters<TabElement,M>["singleSelectionParameters"], "ariaPropName">;
    //singleSelectionChildParameters: OmitStrong<UseCompleteListNavigationChildParameters<TabElement, M>["singleSelectionChildParameters"], "ariaPropName">;
    context: UseTabsContext<any, TabElement, M>;
}

export interface UseTabPanelParameters<M extends TabPanelInfo> extends OmitStrong<UseManagedChildParameters<M>, "info"> {
    info: OmitStrong<UseManagedChildParameters<M>["info"], "setVisibleIndex" | "getVisible">
    context: UseTabPanelsContext<M>;
}

export interface UseTabsContext<ParentElement extends Element, ChildElement extends Element, M extends TabInfo<ChildElement>> extends CompleteListNavigationContext<ParentElement, ChildElement, M> {
    tabsContext: TC;
}

export interface UseTabPanelsContext<M extends TabPanelInfo> extends UseManagedChildrenContext<M> {
    tabPanelContext: TC;
}

interface TC {
    getVisibleIndex: () => number | null;
    getPanelId: (index: number) => string;
    getTabId: (index: number) => string;
}

export interface UseTabReturnType<TabElement extends Element, M extends TabInfo<TabElement>> extends UseCompleteListNavigationChildReturnType<TabElement, M>, UsePressReturnType<TabElement> { }


export interface UseTabLabelParameters { }
interface UseTabListParameters<TabContainerElement extends Element, TabElement extends Element, M extends TabInfo<TabElement>> extends OmitStrong<UseCompleteListNavigationParameters<TabContainerElement, TabElement, M>, "rovingTabIndexParameters" | "paginatedChildrenParameters" | "linearNavigationParameters" | "singleSelectionParameters"> {
    rovingTabIndexParameters: OmitStrong<UseCompleteListNavigationParameters<TabContainerElement, TabElement, M>["rovingTabIndexParameters"], "focusSelfParent">;
    linearNavigationParameters: OmitStrong<UseCompleteListNavigationParameters<TabContainerElement, TabElement, M>["linearNavigationParameters"], "arrowKeyDirection">;
    singleSelectionParameters: Partial<OmitStrong<UseCompleteListNavigationParameters<TabContainerElement, TabElement, M>["singleSelectionParameters"], "ariaPropName">>;
}
export interface UseTabListReturnType<ParentElement extends Element, ChildElement extends Element, M extends TabInfo<ChildElement>> extends UseCompleteListNavigationReturnType<ParentElement, ChildElement, M> {
}
export interface UseTabPanelReturnType<E extends Element> {
    props: ElementProps<E>;
    tabPanelReturn: { visibleOffset: number | null; visible: boolean | null; getVisible: () => boolean; };
}


export interface UseTabListLabelReturnTypeInfo { }
export interface UseTabLabelReturnTypeWithHooks<LabelElement extends Element> extends UseTabListLabelReturnTypeInfo {
    useTabListLabelProps: (props: ElementProps<LabelElement>) => ElementProps<LabelElement>;
}

export interface UseTabsReturnType<TabContainerElement extends Element, TabElement extends Element, LabelElement extends Element, M extends TabInfo<TabElement>> extends OmitStrong<UseCompleteListNavigationReturnType<TabContainerElement, TabElement, M>, "props" | "context"> {
    propsContainer: ElementProps<TabContainerElement>;
    propsLabel: ElementProps<LabelElement>;
    contextPanels: UseTabPanelsContext<TabPanelInfo>;
    contextTabs: UseTabsContext<TabContainerElement, TabElement, M>;
}

export type UseTab<_TabContainerElement extends Element, TabElement extends Element, M extends TabInfo<TabElement>> = (args: UseTabParameters<TabElement, M>) => UseTabReturnType<TabElement, M>;
export type UseTabList<TabContainerElement extends Element, TabElement extends Element, M extends TabInfo<TabElement>> = (args: UseTabListParameters<TabContainerElement, TabElement, M>) => UseTabListReturnType<TabContainerElement, TabElement, M>;
export type UseTabPanel<PanelElement extends Element, M extends TabPanelInfo> = (args: UseTabPanelParameters<M>) => UseTabPanelReturnType<PanelElement>;
export type UseTabListLabel<LabelElement extends Element> = (args: UseTabLabelParameters) => UseTabLabelReturnTypeWithHooks<LabelElement>;

export function useTabs<TabListElement extends Element, TabElement extends Element, LabelElement extends Element, M extends TabInfo<TabElement>>({
    labelParameters,
    linearNavigationParameters,
    singleSelectionParameters: { initiallySelectedIndex, onSelectedIndexChange: ssi, selectionMode, ...singleSelectionParameters },
    tabsParameters: { orientation, role, localStorageKey },
    rovingTabIndexParameters,
    ...restParams
}: UseTabsParameters<TabListElement, TabElement, LabelElement, M>): UseTabsReturnType<TabListElement, TabElement, LabelElement, M> {

    monitorCallCount(useTabs);

    const [localStorageIndex, setLocalStorageIndex] = usePersistentState<never, number | null>(localStorageKey ?? null, 0);
    if (localStorageIndex != null)
        initiallySelectedIndex = localStorageIndex;

    const baseId = generateRandomId("aria-tabs-");
    const getTabId = useCallback((index: number) => { return baseId + "-tab-" + index; }, []);
    const getPanelId = useCallback((index: number) => { return baseId + "-panel-" + index; }, []);

    // Used for the panels, not the tabs in the tablist.
    // Those are in useTabList itself.
    const { context: managedChildContext, managedChildrenReturn: panelChildrenReturn } = useManagedChildren<TabPanelInfo>({
        managedChildrenParameters: {

            onChildrenMountChange: useStableCallback<OnChildrenMountChange<number>>((_m, _u) => { reevaluateClosestFit(); })
        }
    });

    const { changeIndex: changeVisiblePanel, getCurrentIndex: getVisibleIndex, reevaluateClosestFit } = useChildrenFlag<TabPanelInfo, Event>({
        getChildren: panelChildrenReturn.getChildren,
        closestFit: false,
        onClosestFit: null,
        initialIndex: null,
        getAt: useStableCallback((i) => { return i.getVisible() ?? false; /*getPanels().getAt(i)?.getVisible() ?? false)*/ }, []),
        setAt: useStableCallback((i, b, n, p) => { return i.setVisibleIndex(n, p); /*(getPanels().getAt(i)?.setVisible(b));*/ }, []),
        isValid: returnTrue,
        onIndexChange: null
    });

    useLayoutEffect(() => {
        changeVisiblePanel(initiallySelectedIndex ?? null);
    }, [])

    const {
        propsInput,
        propsLabel,
        randomIdInputReturn: { id: _inputId },
        randomIdLabelReturn: { id: _labelId },
    } = useLabelSynthetic<TabListElement, LabelElement>({
        labelParameters: { ...labelParameters, onLabelClick: useStableCallback(() => listNavRet1.rovingTabIndexReturn.focusSelf()) },
        randomIdInputParameters: { prefix: Prefices.tablist },
        randomIdLabelParameters: { prefix: Prefices.tablistLabel },
    });


    const {
        props: listNavigationSingleSelectionProps,
        context,
        ...listNavRet1
    } = useCompleteListNavigation<TabListElement, TabElement, M>({
        linearNavigationParameters: { arrowKeyDirection: orientation, ...linearNavigationParameters },
        rovingTabIndexParameters: { ...rovingTabIndexParameters, focusSelfParent: focus },
        singleSelectionParameters: {
            onSelectedIndexChange: useStableCallback((e) => {
                ssi?.(e);
                changeVisiblePanel(e[EventDetail].selectedIndex);
                setLocalStorageIndex(e[EventDetail].selectedIndex);
                changeSelectedIndex(e[EventDetail].selectedIndex);
            }),
            ariaPropName: "aria-selected", 
            selectionMode: selectionMode ?? "focus",
            initiallySelectedIndex: initiallySelectedIndex ?? null,
            ...singleSelectionParameters
        },
        paginatedChildrenParameters: { paginationMax: null, paginationMin: null },
        ...restParams
    });


    const { singleSelectionReturn: { changeSelectedIndex } } = listNavRet1;

    return {
        contextPanels: useMemoObject({
            ...managedChildContext,
            tabPanelContext: useMemoObject({
                getPanelId,
                getTabId,
                getVisibleIndex,
                setSelectedIndex: changeSelectedIndex
            })
        }),
        contextTabs: useMemoObject({
            ...context,
            tabsContext: useMemoObject({ getTabId, getPanelId, getVisibleIndex, setSelectedIndex: changeSelectedIndex })
        }),
        propsContainer: useMergedProps(
            listNavigationSingleSelectionProps,
            propsInput,
            {
                role: (role ?? "tablist"),
                "aria-orientation": orientation ?? "horizontal",
            } as {}),
        propsLabel,
        ...listNavRet1
    }
}

export function useTab<TabElement extends Element, M extends TabInfo<TabElement>>({
    info: { focusSelf, ...info },
    textContentParameters,
    sortableChildParameters,
    pressParameters,
    context
}: UseTabParameters<TabElement, M>): UseTabReturnType<TabElement, M> {

    const { props: listNavigationSingleSelectionChildProps, propsPressStable, ...listNavRet2 } = useCompleteListNavigationChild({
        context,
        info: { focusSelf, ...info } as M,
        sortableChildParameters,
        textContentParameters,
        pressParameters
    });
    //const { pressParameters, refElementReturn } = listNavRet2
    //const { pressReturn, props: propsPress } = usePress<TabElement>({ pressParameters: { ...pressParameters, onPressSync: useStableCallback((e) => listNavRet2.singleSelectionChildReturn.setThisOneSelected(e)), focusSelf }, refElementReturn })
    const { singleSelectionChildReturn: { selected }, rovingTabIndexChildReturn: { tabbable } } = listNavRet2;
    const { getPanelId, getTabId } = context.tabsContext;

    const panelId = getPanelId(info.index);
    const tabId = getTabId(info.index);

    monitorCallCount(useTab);
    return {
        propsPressStable,
        props: useMergedProps(
            listNavigationSingleSelectionChildProps,
            {
                "data-tabbable": tabbable.toString(),
                "data-selected": selected.toString(),
                role: "tab",
                "aria-controls": panelId,
                id: tabId
            } as {}),
        ...listNavRet2
    }
}


export function useTabPanel<PanelElement extends Element, M extends TabPanelInfo>({ info, context }: UseTabPanelParameters<M>): UseTabPanelReturnType<PanelElement> {
    const { index } = info;
    monitorCallCount(useTabPanel);
    const { tabPanelContext: { getVisibleIndex: g, getPanelId, getTabId } } = context;
    //const [correspondingTabId, setCorrespondingTabId] = useState<string | null>(null);
    const [lastKnownVisibleIndex, setLastKnownVisibleIndex, getLastKnownVisibleIndex] = useState(g());
    const [isVisible, setIsVisible, getIsVisible] = useState(null as boolean | null);
    //const visibleRef = useRef<ChildFlagOperations>({ get: getIsVisible, set: setIsVisible, isValid: returnTrue });
    useManagedChild<TabPanelInfo>({ context, info: {
        getVisible: useStableCallback(() => { return getLastKnownVisibleIndex() == index }),
        setVisibleIndex: useStableCallback((newIndex, prevIndex) => {
            // Similar logic is in singleSelection, but we need to duplicate it here
            let changeIndex = (newIndex == index ? prevIndex : newIndex);
            if (changeIndex != null)
                setLastKnownVisibleIndex(changeIndex);

            if (newIndex == index) {
                setIsVisible(true);
            }
            else {
                setIsVisible(false);
            }
        }),
        ...info
    } });
    const panelId = getPanelId(info.index);
    const tabId = getTabId(info.index);
    //const isVisible = (lastKnownVisibleIndex === index);


    return {
        props: useMergedProps<PanelElement>({
            role: "tabpanel",
            "aria-labelledby": tabId,
            id: panelId,
            inert: !isVisible
        } as {}),
        tabPanelReturn: {
            visibleOffset: lastKnownVisibleIndex == null ? null : (index - lastKnownVisibleIndex),
            visible: isVisible,
            getVisible: useStableCallback(() => { return getLastKnownVisibleIndex() === index; })
        }
    }
}