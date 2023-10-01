import { assertEmptyObject, focus, generateRandomId, returnFalse, returnTrue, useChildrenFlag, useCompleteListNavigation, useCompleteListNavigationChild, useManagedChild, useManagedChildren, useMemoObject, useMergedProps, usePersistentState, usePress, useStableCallback, useState } from "preact-prop-helpers";
import { useCallback, useLayoutEffect } from "preact/hooks";
import { EventDetail, Prefices, monitored } from "./props.js";
import { useLabelSynthetic } from "./use-label.js";
/**
 * Implements a [Tabs](https://www.w3.org/WAI/ARIA/apg/patterns/tabs/) pattern.
 *
 * @remarks Tabs consist of both a list of tabs and a list of tab panels.
 * A Tab and a TabPanel that share the same index are linked together; when that tab is selected that panel is shown.
 *
 * @compositeParams
 *
 * @hasChild {@link useTab}
 * @hasChild {@link useTabPanel}
 */
export const useTabs = monitored(function useTabs({ labelParameters, linearNavigationParameters, singleSelectionParameters: { initiallySingleSelectedIndex, onSingleSelectedIndexChange: ssi, singleSelectionMode, ...singleSelectionParameters }, tabsParameters: { orientation, role, localStorageKey }, rovingTabIndexParameters, ...restParams }) {
    const [localStorageIndex, setLocalStorageIndex] = usePersistentState(localStorageKey ?? null, 0);
    if (localStorageIndex != null)
        initiallySingleSelectedIndex = localStorageIndex;
    const baseId = generateRandomId("aria-tabs-");
    const getTabId = useCallback((index) => { return baseId + "-tab-" + index; }, []);
    const getPanelId = useCallback((index) => { return baseId + "-panel-" + index; }, []);
    // Used for the panels, not the tabs in the tablist.
    // Those are in useTabList itself.
    const { context: managedChildContext, managedChildrenReturn: panelChildrenReturn } = useManagedChildren({
        managedChildrenParameters: {
            onChildrenMountChange: useStableCallback((_m, _u) => { reevaluateClosestFit(undefined); })
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
        changeVisiblePanel(initiallySingleSelectedIndex ?? null, undefined);
    }, []);
    const { propsInput, propsLabel, randomIdInputReturn: { id: _inputId }, randomIdLabelReturn: { id: _labelId }, } = useLabelSynthetic({
        labelParameters: { ...labelParameters, onLabelClick: useStableCallback(() => listNavRet1.rovingTabIndexReturn.focusSelf()) },
        randomIdInputParameters: { prefix: Prefices.tablist },
        randomIdLabelParameters: { prefix: Prefices.tablistLabel },
    });
    const { props: listNavigationSingleSelectionProps, contextChildren, ...listNavRet1 } = useCompleteListNavigation({
        linearNavigationParameters: { arrowKeyDirection: orientation, ...linearNavigationParameters },
        rovingTabIndexParameters: { ...rovingTabIndexParameters, focusSelfParent: focus },
        singleSelectionParameters: {
            onSingleSelectedIndexChange: useStableCallback((e) => {
                ssi?.(e);
                changeVisiblePanel(e[EventDetail].selectedIndex, e);
                setLocalStorageIndex(e[EventDetail].selectedIndex);
                changeSingleSelectedIndex(e[EventDetail].selectedIndex, e);
            }),
            singleSelectionAriaPropName: "aria-selected",
            singleSelectionMode: singleSelectionMode ?? "focus",
            initiallySingleSelectedIndex: initiallySingleSelectedIndex ?? null,
            ...singleSelectionParameters
        },
        multiSelectionParameters: {
            multiSelectionAriaPropName: null,
            multiSelectionMode: "disabled",
            onSelectionChange: null
        },
        paginatedChildrenParameters: { paginationMax: null, paginationMin: null },
        ...restParams
    });
    const { singleSelectionReturn: { changeSingleSelectedIndex } } = listNavRet1;
    return {
        contextPanels: useMemoObject({
            ...managedChildContext,
            tabPanelContext: useMemoObject({
                getPanelId,
                getTabId,
                getVisibleIndex,
                setSelectedIndex: changeSingleSelectedIndex
            })
        }),
        contextTabs: useMemoObject({
            ...contextChildren,
            tabsContext: useMemoObject({ getTabId, getPanelId, getVisibleIndex, setSelectedIndex: changeSingleSelectedIndex })
        }),
        propsContainer: useMergedProps(listNavigationSingleSelectionProps, propsInput, {
            role: (role ?? "tablist"),
            "aria-orientation": orientation ?? "horizontal",
        }),
        propsLabel,
        ...listNavRet1
    };
});
/**
 * Implements a single tab of a Tabs component.
 *
 * The index that this child uses controls which TabPanel it shows when selected.
 *
 * @compositeParams
 */
export const useTab = monitored(function useTab({ info: { focusSelf: focusSelfParent, index, untabbable, ...info }, textContentParameters, pressParameters: { focusSelf: focusSelfChild, longPressThreshold, onPressingChange, ...void2 }, context, hasCurrentFocusParameters, refElementParameters, singleSelectionChildParameters, ...void3 }) {
    const { propsChild: listNavigationSingleSelectionChildProps, propsTabbable, pressParameters: { onPressSync, excludeSpace, ...void1 }, refElementReturn, ...listNavRet2 } = useCompleteListNavigationChild({
        context,
        info: { index, focusSelf: focusSelfParent, untabbable, ...info },
        textContentParameters,
        hasCurrentFocusParameters,
        refElementParameters,
        singleSelectionChildParameters,
        multiSelectionChildParameters: { initiallyMultiSelected: false, multiSelectionDisabled: true, onMultiSelectChange: null },
    });
    const { pressReturn, props: propsPressStable } = usePress({ pressParameters: { onPressSync, focusSelf: focusSelfChild, allowRepeatPresses: false, excludeEnter: returnFalse, excludePointer: returnFalse, excludeSpace: returnFalse, longPressThreshold, onPressingChange }, refElementReturn });
    const { singleSelectionChildReturn: { singleSelected }, rovingTabIndexChildReturn: { tabbable } } = listNavRet2;
    const { getPanelId, getTabId } = context.tabsContext;
    const panelId = getPanelId(index);
    const tabId = getTabId(index);
    assertEmptyObject(void1);
    assertEmptyObject(void2);
    assertEmptyObject(void3);
    return {
        pressReturn,
        refElementReturn,
        props: useMergedProps(propsPressStable, listNavigationSingleSelectionChildProps, propsTabbable, {
            "data-tabbable": tabbable.toString(),
            "data-selected": singleSelected.toString(),
            role: "tab",
            "aria-controls": panelId,
            id: tabId
        }),
        ...listNavRet2
    };
});
/**
 * Implements the TabPanel a Tab controls.
 *
 * @remarks A hidden tab panel is made `inert` so that it cannot be interacted with, so you can just set `opacity: 0` on your hidden panels if that's how you want to style them.
 * They'll still be properly removed from the tab order (i.e. you don't **also** need `display: none`).
 *
 * @compositeParams
 */
export const useTabPanel = monitored(function useTabPanel({ info, context }) {
    const { index } = info;
    const { tabPanelContext: { getVisibleIndex: g, getPanelId, getTabId } } = context;
    //const [correspondingTabId, setCorrespondingTabId] = useState<string | null>(null);
    const [lastKnownVisibleIndex, setLastKnownVisibleIndex, getLastKnownVisibleIndex] = useState(g());
    const [isVisible, setIsVisible, getIsVisible] = useState(null);
    //const visibleRef = useRef<ChildFlagOperations>({ get: getIsVisible, set: setIsVisible, isValid: returnTrue });
    useManagedChild({
        context,
        info: {
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
});
//# sourceMappingURL=use-tabs.js.map