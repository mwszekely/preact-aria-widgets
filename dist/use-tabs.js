import { generateRandomId, returnTrue, useChildrenFlag, useCompleteListNavigation, useCompleteListNavigationChild, useManagedChild, useManagedChildren, useMergedProps, usePersistentState, usePress, useStableCallback, useStableObject, useState } from "preact-prop-helpers";
import { useCallback, useLayoutEffect } from "preact/hooks";
import { debugLog, EventDetail, Prefices } from "./props.js";
import { useLabelSynthetic } from "./use-label.js";
export function useTabs({ labelParameters, linearNavigationParameters, singleSelectionParameters: { onSelectedIndexChange: ssi, ...singleSelectionParameters }, tabsParameters: { orientation, role, localStorageKey }, ...restParams }) {
    debugLog("useTabs");
    const [localStorageIndex, setLocalStorageIndex] = usePersistentState(localStorageKey ?? null, 0);
    if (localStorageIndex != null)
        singleSelectionParameters.initiallySelectedIndex = localStorageIndex;
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
        initialIndex: null,
        getAt: useStableCallback((i) => { return i.getVisible() ?? false; /*getPanels().getAt(i)?.getVisible() ?? false)*/ }, []),
        setAt: useStableCallback((i, b, n, p) => { return i.setVisibleIndex(n, p); /*(getPanels().getAt(i)?.setVisible(b));*/ }, []),
        isValid: returnTrue,
        onIndexChange: null
    });
    useLayoutEffect(() => {
        changeVisiblePanel(singleSelectionParameters.initiallySelectedIndex);
    }, []);
    const { propsInput, propsLabel, randomIdInputReturn: { id: _inputId }, randomIdLabelReturn: { id: _labelId }, } = useLabelSynthetic({
        labelParameters: { ...labelParameters, onLabelClick: useStableCallback(() => listNavRet1.rovingTabIndexReturn.focusSelf()) },
        randomIdInputParameters: { prefix: Prefices.tablist },
        randomIdLabelParameters: { prefix: Prefices.tablistLabel },
    });
    const { props: listNavigationSingleSelectionProps, context, ...listNavRet1 } = useCompleteListNavigation({
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
        propsContainer: useMergedProps(listNavigationSingleSelectionProps, propsInput, {
            role: (role ?? "tablist"),
            "aria-orientation": orientation ?? "horizontal",
        }),
        propsLabel,
        ...listNavRet1
    };
}
export function useTab({ completeListNavigationChildParameters: { focusSelf, ...completeListNavigationChildParameters }, managedChildParameters, textContentParameters, singleSelectionChildParameters: { selectionMode, ...singleSelectionChildParameters }, rovingTabIndexChildParameters, sortableChildParameters, context }) {
    const { props: listNavigationSingleSelectionChildProps, ...listNavRet2 } = useCompleteListNavigationChild({
        completeListNavigationChildParameters: { focusSelf, ...completeListNavigationChildParameters },
        context,
        managedChildParameters,
        rovingTabIndexChildParameters,
        sortableChildParameters,
        textContentParameters,
        singleSelectionChildParameters: { ariaPropName: "aria-selected", selectionMode: selectionMode ?? "foucs", ...singleSelectionChildParameters },
    });
    const { pressParameters, refElementReturn } = listNavRet2;
    const { pressReturn } = usePress({ pressParameters: { ...pressParameters, focusSelf }, refElementReturn });
    const { singleSelectionChildReturn: { selected }, rovingTabIndexChildReturn: { tabbable } } = listNavRet2;
    const { getPanelId, getTabId } = context.tabsContext;
    const panelId = getPanelId(managedChildParameters.index);
    const tabId = getTabId(managedChildParameters.index);
    debugLog("useTab", managedChildParameters.index, selected.toString());
    return {
        props: useMergedProps(pressReturn.propsUnstable, listNavigationSingleSelectionChildProps, {
            "data-tabbable": tabbable.toString(),
            "data-selected": selected.toString(),
            role: "tab",
            "aria-controls": panelId,
            id: tabId
        }),
        pressReturn,
        ...listNavRet2
    };
}
export function useTabPanel({ managedChildParameters, context }) {
    const { index } = managedChildParameters;
    debugLog("useTabPanel", index);
    const { tabPanelContext: { getVisibleIndex: g, getPanelId, getTabId } } = context;
    //const [correspondingTabId, setCorrespondingTabId] = useState<string | null>(null);
    const [lastKnownVisibleIndex, setLastKnownVisibleIndex, getLastKnownVisibleIndex] = useState(g());
    const [isVisible, setIsVisible, getIsVisible] = useState(null);
    //const visibleRef = useRef<ChildFlagOperations>({ get: getIsVisible, set: setIsVisible, isValid: returnTrue });
    useManagedChild({ context, managedChildParameters: { index } }, {
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
        ...managedChildParameters
    });
    const panelId = getPanelId(managedChildParameters.index);
    const tabId = getTabId(managedChildParameters.index);
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