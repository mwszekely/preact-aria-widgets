import { h } from "preact";
import { CompleteListNavigationContext, generateRandomId, ManagedChildInfo, OnChildrenMountChange, PersistentStates, returnTrue, useChildrenFlag, useCompleteListNavigation, useCompleteListNavigationChild, UseCompleteListNavigationChildInfo, UseCompleteListNavigationChildParameters, UseCompleteListNavigationChildReturnType, UseCompleteListNavigationParameters, UseCompleteListNavigationReturnType, useManagedChild, UseManagedChildParameters, useManagedChildren, UseManagedChildrenContext, useMergedProps, usePersistentState, usePress, useStableCallback, useStableObject, useState } from "preact-prop-helpers";
import { useCallback, useLayoutEffect } from "preact/hooks";
import { debugLog, EventDetail, OmitStrong, Prefices } from "./props.js";
import { useLabelSynthetic, UseLabelSyntheticParameters } from "./use-label.js";


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
export interface UseTabParameters<TabElement extends Element, M extends TabInfo<TabElement>> extends OmitStrong<UseCompleteListNavigationChildParameters<TabElement,M, never>, "singleSelectionChildParameters"> {
    singleSelectionChildParameters: OmitStrong<UseCompleteListNavigationChildParameters<TabElement, M, never>["singleSelectionChildParameters"], "ariaPropName">;
    context: TabsContext<any, TabElement, M>;
}

export interface UseTabPanelParameters<M extends TabPanelInfo> extends OmitStrong<UseManagedChildParameters<M>, "managedChildParameters"> {
    managedChildParameters: OmitStrong<UseManagedChildParameters<M>["managedChildParameters"], never>
    context: TabPanelsContext<M>;
}

export interface TabsContext<ParentElement extends Element, ChildElement extends Element, M extends TabInfo<ChildElement>> extends CompleteListNavigationContext<ParentElement, ChildElement, M> {
    tabsContext: TC;
}

export interface TabPanelsContext<M extends TabPanelInfo> extends UseManagedChildrenContext<M> {
    tabPanelContext: TC;
}

interface TC {
    getVisibleIndex: () => number | null;
    getPanelId: (index: number) => string;
    getTabId: (index: number) => string;
}

export interface UseTabReturnType<TabElement extends Element, M extends TabInfo<TabElement>> extends UseCompleteListNavigationChildReturnType<TabElement, M> { }


export interface UseTabLabelParameters { }
interface UseTabListParameters<TabContainerElement extends Element, TabElement extends Element, M extends TabInfo<TabElement>> extends OmitStrong<UseCompleteListNavigationParameters<TabContainerElement, TabElement, M>, "paginatedChildrenParameters" | "linearNavigationParameters"> {
    linearNavigationParameters: OmitStrong<UseCompleteListNavigationParameters<TabContainerElement, TabElement, M>["linearNavigationParameters"], "navigationDirection">;
}
export interface UseTabListReturnType<ParentElement extends Element, ChildElement extends Element, M extends TabInfo<ChildElement>> extends UseCompleteListNavigationReturnType<ParentElement, ChildElement, M> {
}
export interface UseTabPanelReturnType<E extends Element> {
    props: h.JSX.HTMLAttributes<E>;
    tabPanelReturn: { visibleOffset: number | null; visible: boolean | null; getVisible: () => boolean; };
}


export interface UseTabListLabelReturnTypeInfo { }
export interface UseTabLabelReturnTypeWithHooks<LabelElement extends Element> extends UseTabListLabelReturnTypeInfo {
    useTabListLabelProps: (props: h.JSX.HTMLAttributes<LabelElement>) => h.JSX.HTMLAttributes<LabelElement>;
}

export interface UseTabsReturnType<TabContainerElement extends Element, TabElement extends Element, LabelElement extends Element, M extends TabInfo<TabElement>> extends OmitStrong<UseCompleteListNavigationReturnType<TabContainerElement, TabElement, M>, "props" | "context"> {
    propsContainer: h.JSX.HTMLAttributes<TabContainerElement>;
    propsLabel: h.JSX.HTMLAttributes<LabelElement>;
    contextPanels: TabPanelsContext<TabPanelInfo>;
    contextTabs: TabsContext<TabContainerElement, TabElement, M>;
}

export type UseTab<_TabContainerElement extends Element, TabElement extends Element, M extends TabInfo<TabElement>> = (args: UseTabParameters<TabElement, M>) => UseTabReturnType<TabElement, M>;
export type UseTabList<TabContainerElement extends Element, TabElement extends Element, M extends TabInfo<TabElement>> = (args: UseTabListParameters<TabContainerElement, TabElement, M>) => UseTabListReturnType<TabContainerElement, TabElement, M>;
export type UseTabPanel<PanelElement extends Element, M extends TabPanelInfo> = (args: UseTabPanelParameters<M>) => UseTabPanelReturnType<PanelElement>;
export type UseTabListLabel<LabelElement extends Element> = (args: UseTabLabelParameters) => UseTabLabelReturnTypeWithHooks<LabelElement>;

export function useTabs<TabListElement extends Element, TabElement extends Element, LabelElement extends Element, M extends TabInfo<TabElement>>({
    labelParameters,
    linearNavigationParameters,
    singleSelectionParameters: { onSelectedIndexChange: ssi, ...singleSelectionParameters },
    tabsParameters: { orientation, role, localStorageKey },
    ...restParams
}: UseTabsParameters<TabListElement, TabElement, LabelElement, M>): UseTabsReturnType<TabListElement, TabElement, LabelElement, M> {

    debugLog("useTabs");

    const [localStorageIndex, setLocalStorageIndex] = usePersistentState<never, number | null>(localStorageKey ?? null, 0);
    if (localStorageIndex != null)
        singleSelectionParameters.initiallySelectedIndex = localStorageIndex;

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
        initialIndex: null,
        getAt: useStableCallback((i) => { return i.getVisible() ?? false; /*getPanels().getAt(i)?.getVisible() ?? false)*/ }, []),
        setAt: useStableCallback((i, b, n, p) => { return i.setVisibleIndex(n, p); /*(getPanels().getAt(i)?.setVisible(b));*/ }, []),
        isValid: returnTrue,
        onIndexChange: null
    });

    useLayoutEffect(() => {
        changeVisiblePanel(singleSelectionParameters.initiallySelectedIndex);
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
        linearNavigationParameters: { navigationDirection: orientation, ...linearNavigationParameters },
        singleSelectionParameters: {
            onSelectedIndexChange: useStableCallback((i, p) => {
                ssi?.(i, p);
                changeVisiblePanel(i);
                setLocalStorageIndex(i);
                changeSelectedIndex(i, p);
            }),
            ...singleSelectionParameters
        },
        paginatedChildrenParameters: { paginationMax: null, paginationMin: null },
        ...restParams
    });


    const { singleSelectionReturn: { changeSelectedIndex } } = listNavRet1;

    return {
        contextPanels: useStableObject({
            ...managedChildContext,
            tabPanelContext: useStableObject({
                getPanelId,
                getTabId,
                getVisibleIndex,
                setSelectedIndex: changeSelectedIndex
            })
        }),
        contextTabs: useStableObject({
            ...context,
            tabsContext: useStableObject({ getTabId, getPanelId, getVisibleIndex, setSelectedIndex: changeSelectedIndex })
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
    completeListNavigationChildParameters: { focusSelf, ...completeListNavigationChildParameters },
    managedChildParameters,
    textContentParameters,
    singleSelectionChildParameters: { selectionMode, ...singleSelectionChildParameters },
    rovingTabIndexChildParameters,
    sortableChildParameters,
    context
}: UseTabParameters<TabElement, M>) {

    const { props: listNavigationSingleSelectionChildProps, ...listNavRet2 } = useCompleteListNavigationChild({
        completeListNavigationChildParameters: { focusSelf, ...completeListNavigationChildParameters } as M,
        context,
        managedChildParameters,
        rovingTabIndexChildParameters,
        sortableChildParameters,
        textContentParameters,
        singleSelectionChildParameters: { ariaPropName: "aria-selected", selectionMode: selectionMode ?? "foucs", ...singleSelectionChildParameters },
    });
    const { pressParameters, refElementReturn } = listNavRet2
    const { pressReturn } = usePress<TabElement>({ pressParameters: { ...pressParameters, focusSelf }, refElementReturn })
    const { singleSelectionChildReturn: { selected }, rovingTabIndexChildReturn: { tabbable } } = listNavRet2;
    const { getPanelId, getTabId } = context.tabsContext;

    const panelId = getPanelId(managedChildParameters.index);
    const tabId = getTabId(managedChildParameters.index);

    debugLog("useTab", managedChildParameters.index, selected.toString());
    return {
        props: useMergedProps(
            pressReturn.propsUnstable,
            listNavigationSingleSelectionChildProps,
            {
                "data-tabbable": tabbable.toString(),
                "data-selected": selected.toString(),
                role: "tab",
                "aria-controls": panelId,
                id: tabId
            } as {}),
        pressReturn,
        ...listNavRet2
    }
}


export function useTabPanel<PanelElement extends Element, M extends TabPanelInfo>({ managedChildParameters, context }: UseTabPanelParameters<M>): UseTabPanelReturnType<PanelElement> {
    const { index } = managedChildParameters;
    debugLog("useTabPanel", index);
    const { tabPanelContext: { getVisibleIndex: g, getPanelId, getTabId } } = context;
    //const [correspondingTabId, setCorrespondingTabId] = useState<string | null>(null);
    const [lastKnownVisibleIndex, setLastKnownVisibleIndex, getLastKnownVisibleIndex] = useState(g());
    const [isVisible, setIsVisible, getIsVisible] = useState(null as boolean | null);
    //const visibleRef = useRef<ChildFlagOperations>({ get: getIsVisible, set: setIsVisible, isValid: returnTrue });
    useManagedChild<TabPanelInfo>({ context, managedChildParameters: { index } }, {
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
        ...managedChildParameters
    });
    const panelId = getPanelId(managedChildParameters.index);
    const tabId = getTabId(managedChildParameters.index);
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