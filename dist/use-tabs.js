import { assertEmptyObject, focus, generateRandomId, monitorCallCount, returnTrue, useChildrenFlag, useCompleteListNavigation, useCompleteListNavigationChild, useManagedChild, useManagedChildren, useMemoObject, useMergedProps, usePersistentState, usePress, useStableCallback, useState } from "preact-prop-helpers";
import { useCallback, useLayoutEffect } from "preact/hooks";
import { EventDetail, Prefices } from "./props.js";
import { useLabelSynthetic } from "./use-label.js";
export function useTabs({ labelParameters, linearNavigationParameters, singleSelectionParameters: { initiallySelectedIndex, onSelectedIndexChange: ssi, selectionMode, ...singleSelectionParameters }, tabsParameters: { orientation, role, localStorageKey }, rovingTabIndexParameters, ...restParams }) {
    monitorCallCount(useTabs);
    const [localStorageIndex, setLocalStorageIndex] = usePersistentState(localStorageKey ?? null, 0);
    if (localStorageIndex != null)
        initiallySelectedIndex = localStorageIndex;
    const baseId = generateRandomId("aria-tabs-");
    const getTabId = useCallback((index) => { return baseId + "-tab-" + index; }, []);
    const getPanelId = useCallback((index) => { return baseId + "-panel-" + index; }, []);
    // Used for the panels, not the tabs in the tablist.
    // Those are in useTabList itself.
    const { context: managedChildContext, managedChildrenReturn: panelChildrenReturn } = useManagedChildren({
        managedChildrenParameters: {
            onChildrenMountChange: useStableCallback((_m, _u) => { reevaluateClosestFit(); })
        }
    });
    const { changeIndex: changeVisiblePanel, getCurrentIndex: getVisibleIndex, reevaluateClosestFit } = useChildrenFlag({
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
    }, []);
    const { propsInput, propsLabel, randomIdInputReturn: { id: _inputId }, randomIdLabelReturn: { id: _labelId }, } = useLabelSynthetic({
        labelParameters: { ...labelParameters, onLabelClick: useStableCallback(() => listNavRet1.rovingTabIndexReturn.focusSelf()) },
        randomIdInputParameters: { prefix: Prefices.tablist },
        randomIdLabelParameters: { prefix: Prefices.tablistLabel },
    });
    const { props: listNavigationSingleSelectionProps, context, ...listNavRet1 } = useCompleteListNavigation({
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
        propsContainer: useMergedProps(listNavigationSingleSelectionProps, propsInput, {
            role: (role ?? "tablist"),
            "aria-orientation": orientation ?? "horizontal",
        }),
        propsLabel,
        ...listNavRet1
    };
}
export function useTab({ info: { focusSelf: focusSelfParent, ...info }, textContentParameters, sortableChildParameters, pressParameters: { focusSelf: focusSelfChild, allowRepeatPresses, excludeEnter, excludePointer, longPressThreshold, onPressingChange, ...void2 }, context }) {
    const { propsChild: listNavigationSingleSelectionChildProps, propsTabbable, pressParameters: { onPressSync, excludeSpace, ...void1 }, refElementReturn, ...listNavRet2 } = useCompleteListNavigationChild({
        context,
        info: { focusSelf: focusSelfParent, ...info },
        sortableChildParameters,
        textContentParameters,
    });
    //const { pressParameters, refElementReturn } = listNavRet2
    const { pressReturn, props: propsPressStable } = usePress({ pressParameters: { onPressSync, focusSelf: focusSelfChild }, refElementReturn });
    const { singleSelectionChildReturn: { selected }, rovingTabIndexChildReturn: { tabbable } } = listNavRet2;
    const { getPanelId, getTabId } = context.tabsContext;
    const panelId = getPanelId(info.index);
    const tabId = getTabId(info.index);
    assertEmptyObject(void1);
    assertEmptyObject(void2);
    monitorCallCount(useTab);
    return {
        pressReturn,
        refElementReturn,
        props: useMergedProps(propsPressStable, listNavigationSingleSelectionChildProps, propsTabbable, {
            "data-tabbable": tabbable.toString(),
            "data-selected": selected.toString(),
            role: "tab",
            "aria-controls": panelId,
            id: tabId
        }),
        ...listNavRet2
    };
}
export function useTabPanel({ info, context }) {
    const { index } = info;
    monitorCallCount(useTabPanel);
    const { tabPanelContext: { getVisibleIndex: g, getPanelId, getTabId } } = context;
    //const [correspondingTabId, setCorrespondingTabId] = useState<string | null>(null);
    const [lastKnownVisibleIndex, setLastKnownVisibleIndex, getLastKnownVisibleIndex] = useState(g());
    const [isVisible, setIsVisible, getIsVisible] = useState(null);
    //const visibleRef = useRef<ChildFlagOperations>({ get: getIsVisible, set: setIsVisible, isValid: returnTrue });
    useManagedChild({
        context, info: {
            getVisible: useStableCallback(() => { return getLastKnownVisibleIndex() == index; }),
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
        }
    });
    const panelId = getPanelId(info.index);
    const tabId = getTabId(info.index);
    //const isVisible = (lastKnownVisibleIndex === index);
    return {
        props: useMergedProps({
            role: "tabpanel",
            "aria-labelledby": tabId,
            id: panelId,
            inert: !isVisible
        }),
        tabPanelReturn: {
            visibleOffset: lastKnownVisibleIndex == null ? null : (index - lastKnownVisibleIndex),
            visible: isVisible,
            getVisible: useStableCallback(() => { return getLastKnownVisibleIndex() === index; })
        }
    };
}
//# sourceMappingURL=use-tabs.js.map