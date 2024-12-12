import {
    CompleteListNavigationContext,
    ElementProps,
    EventType,
    ManagedChildInfo,
    Nullable,
    OnChildrenMountChange,
    PersistentStates,
    TargetedOmit,
    UseCompleteListNavigationChildInfo,
    UseCompleteListNavigationChildParameters,
    UseCompleteListNavigationChildReturnType,
    UseCompleteListNavigationParameters,
    UseCompleteListNavigationReturnType,
    UseGenericChildParameters,
    UseManagedChildParameters,
    UseManagedChildrenContext,
    UsePressParameters,
    UsePressReturnType,
    assertEmptyObject,
    focus,
    generateRandomId,
    identity,
    returnFalse,
    returnTrue,
    useCallback,
    useChildrenFlag,
    useCompleteListNavigation,
    useCompleteListNavigationChild,
    useLayoutEffect,
    useManagedChild,
    useManagedChildren,
    useMemoObject,
    useMergedProps,
    useMonitoring,
    usePersistentState,
    usePress,
    useStableCallback,
    useState
} from "preact-prop-helpers";
import { EventDetail, OmitStrong, Prefices } from "./props.js";
import { UseLabelSyntheticParameters, useLabelSynthetic } from "./use-label.js";


export interface TabPanelInfo extends ManagedChildInfo<number> {
    getVisible(): boolean;
    setVisibleIndex: (newIndex: number | null, previousIndex: number | null) => void;
}

export interface TabInfo<E extends Element> extends UseCompleteListNavigationChildInfo<E> { }


export type TabsChangeEvent<E extends Element> = { [EventDetail]: { selectedIndex: number } } & Pick<EventType<E, Event>, "target" | "currentTarget">;

export interface UseTabsParametersSelf {
    localStorageKey: Nullable<keyof PersistentStates>;
    orientation: "horizontal" | "vertical";
    role: Nullable<"tablist" | string>;
}

export interface UseTabsParameters<TabContainerElement extends Element, TabElement extends Element, M extends TabInfo<TabElement>> extends
    UseTabListParameters<TabContainerElement, TabElement, M>,
    TargetedOmit<UseLabelSyntheticParameters, "labelParameters", "onLabelClick"> {
    tabsParameters: UseTabsParametersSelf;
}
export interface UseTabParameters<TabElement extends Element, M extends TabInfo<TabElement>> extends
    UseGenericChildParameters<UseTabsContext<TabElement, M>, Pick<TabInfo<TabElement>, "index" | "focusSelf" | "untabbable">>,
    OmitStrong<UseCompleteListNavigationChildParameters<TabElement, M>, "context" | "info" | "multiSelectionChildParameters">,
    TargetedOmit<UsePressParameters<TabElement>, "pressParameters", "excludeEnter" | "excludePointer" | "excludeSpace" | "allowRepeatPresses" | "onPressSync"> {

}

export interface UseTabPanelParameters<M extends TabPanelInfo> extends
    UseGenericChildParameters<UseTabPanelsContext<M>, Pick<M, "index">>,
    OmitStrong<UseManagedChildParameters<M>, "context" | "info"> {
}

export interface UseTabsContext<ChildElement extends Element, M extends TabInfo<ChildElement>> extends CompleteListNavigationContext<ChildElement, M> {
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

export interface UseTabReturnType<TabElement extends Element, M extends TabInfo<TabElement>> extends OmitStrong<UseCompleteListNavigationChildReturnType<TabElement, M>, "pressParameters" | "propsChild" | "propsTabbable">, UsePressReturnType<TabElement> {
    props: ElementProps<TabElement>;
}

/* eslint-disable @typescript-eslint/no-empty-interface */
export interface UseTabLabelParameters { }
export interface UseTabListParameters<TabContainerElement extends Element, TabElement extends Element, M extends TabInfo<TabElement>> extends
    OmitStrong<UseCompleteListNavigationParameters<TabContainerElement, TabElement, M>, "rovingTabIndexParameters" | "paginatedChildrenParameters" | "linearNavigationParameters" | "singleSelectionParameters" | "multiSelectionParameters">,
    TargetedOmit<UseCompleteListNavigationParameters<TabContainerElement, TabElement, M>, "rovingTabIndexParameters", "focusSelfParent">,
    TargetedOmit<UseCompleteListNavigationParameters<TabContainerElement, TabElement, M>, "linearNavigationParameters", "arrowKeyDirection">,
    TargetedOmit<UseCompleteListNavigationParameters<TabContainerElement, TabElement, M>, "singleSelectionParameters", "singleSelectionAriaPropName"> {

}
export interface UseTabListReturnType<ParentElement extends Element, ChildElement extends Element, M extends TabInfo<ChildElement>> extends UseCompleteListNavigationReturnType<ParentElement, ChildElement, M> {
}
export interface UseTabPanelReturnTypeSelf {
    visibleOffset: number | null;
    visible: boolean | null;
    getVisible: () => boolean;
}

export interface UseTabPanelReturnType<E extends Element> {
    props: ElementProps<E>;
    tabPanelReturn: UseTabPanelReturnTypeSelf;
}

/* eslint-disable @typescript-eslint/no-empty-interface */
export interface UseTabListLabelReturnTypeInfo { }
export interface UseTabLabelReturnTypeWithHooks<LabelElement extends Element> extends UseTabListLabelReturnTypeInfo {
    useTabListLabelProps: (props: ElementProps<LabelElement>) => ElementProps<LabelElement>;
}

export interface UseTabsReturnType<TabContainerElement extends Element, TabElement extends Element, LabelElement extends Element, M extends TabInfo<TabElement> = TabInfo<TabElement>> extends OmitStrong<UseCompleteListNavigationReturnType<TabContainerElement, TabElement, M>, "props" | "context"> {
    propsContainer: ElementProps<TabContainerElement>;
    propsLabel: ElementProps<LabelElement>;
    contextPanels: UseTabPanelsContext<TabPanelInfo>;
    contextTabs: UseTabsContext<TabElement, M>;
}

export type UseTab<_TabContainerElement extends Element, TabElement extends Element, M extends TabInfo<TabElement>> = (args: UseTabParameters<TabElement, M>) => UseTabReturnType<TabElement, M>;
export type UseTabList<TabContainerElement extends Element, TabElement extends Element, M extends TabInfo<TabElement>> = (args: UseTabListParameters<TabContainerElement, TabElement, M>) => UseTabListReturnType<TabContainerElement, TabElement, M>;
export type UseTabPanel<PanelElement extends Element, M extends TabPanelInfo> = (args: UseTabPanelParameters<M>) => UseTabPanelReturnType<PanelElement>;
export type UseTabListLabel<LabelElement extends Element> = (args: UseTabLabelParameters) => UseTabLabelReturnTypeWithHooks<LabelElement>;

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
export function useTabs<TabListElement extends Element, TabElement extends Element, LabelElement extends Element>({
    labelParameters,
    linearNavigationParameters,
    singleSelectionParameters: { initiallySingleSelectedIndex, onSingleSelectedIndexChange: ssi, singleSelectionMode, ...singleSelectionParameters },
    tabsParameters: { orientation, role, localStorageKey },
    rovingTabIndexParameters,
    ...restParams
}: UseTabsParameters<TabListElement, TabElement, TabInfo<TabElement>>): UseTabsReturnType<TabListElement, TabElement, LabelElement, TabInfo<TabElement>> {

    return useMonitoring(function useTabs() {
        const [localStorageIndex, setLocalStorageIndex] = usePersistentState<never, number | null>(localStorageKey ?? null, 0);
        if (localStorageIndex != null)
            initiallySingleSelectedIndex = localStorageIndex;

        const baseId = generateRandomId("aria-tabs-");
        const getTabId = useCallback((index: number) => { return baseId + "-tab-" + index; }, []);
        const getPanelId = useCallback((index: number) => { return baseId + "-panel-" + index; }, []);

        // Used for the panels, not the tabs in the tablist.
        // Those are in useTabList itself.
        const { context: managedChildContext, managedChildrenReturn: panelChildrenReturn } = useManagedChildren<TabPanelInfo>({
            managedChildrenParameters: {

                onChildrenMountChange: useStableCallback<OnChildrenMountChange<number>>((_m, _u) => { reevaluateClosestFit(undefined!); })
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
            onIndexChange: null,
            indexDemangler: identity,
        });

        useLayoutEffect(() => {
            changeVisiblePanel(initiallySingleSelectedIndex ?? null, undefined!);
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
        } = useCompleteListNavigation<TabListElement, TabElement, TabInfo<TabElement>>({
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
                ...context,
                tabsContext: useMemoObject({ getTabId, getPanelId, getVisibleIndex, setSelectedIndex: changeSingleSelectedIndex })
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
    });
}

/**
 * Implements a single tab of a Tabs component.
 * 
 * The index that this child uses controls which TabPanel it shows when selected.
 * 
 * @compositeParams
 */
export function useTab<TabElement extends Element>({
    info: { focusSelf: focusSelfParent, index, untabbable, ...info },
    textContentParameters,
    pressParameters: { focusSelf: focusSelfChild, longPressThreshold, onPressingChange, ...void2 },
    context,
    hasCurrentFocusParameters,
    refElementParameters,
    singleSelectionChildParameters,
    ...void3
}: UseTabParameters<TabElement, TabInfo<TabElement>>): UseTabReturnType<TabElement, TabInfo<TabElement>> {
    return useMonitoring(function useTab(): UseTabReturnType<TabElement, TabInfo<TabElement>> {
        const { propsChild: listNavigationSingleSelectionChildProps, propsTabbable, pressParameters: { onPressSync, excludeSpace, ...void1 }, refElementReturn, ...listNavRet2 } = useCompleteListNavigationChild({
            context,
            info: { index, focusSelf: focusSelfParent, untabbable, ...info },
            textContentParameters,
            hasCurrentFocusParameters,
            refElementParameters,
            singleSelectionChildParameters,
            multiSelectionChildParameters: { initiallyMultiSelected: false, multiSelectionDisabled: true, onMultiSelectChange: null },
        });

        const { pressReturn, props: propsPressStable } = usePress<TabElement>({
            pressParameters: {
                onPressSync,
                focusSelf: focusSelfChild,
                allowRepeatPresses: false,
                excludeEnter: returnFalse,
                excludePointer: returnFalse,
                excludeSpace,
                longPressThreshold,
                onPressingChange
            },
            refElementReturn
        });
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
            props: useMergedProps(
                propsPressStable,
                listNavigationSingleSelectionChildProps,
                propsTabbable,
                {
                    "data-tabbable": tabbable.toString(),
                    "data-selected": singleSelected.toString(),
                    role: "tab",
                    "aria-controls": panelId,
                    id: tabId
                } as {}),
            ...listNavRet2
        }
    });
}


/**
 * Implements the TabPanel a Tab controls.
 * 
 * @remarks A hidden tab panel is made `inert` so that it cannot be interacted with, so you can just set `opacity: 0` on your hidden panels if that's how you want to style them. 
 * They'll still be properly removed from the tab order (i.e. you don't **also** need `display: none`).
 * 
 * @compositeParams
 */
export function useTabPanel<PanelElement extends Element>({ info, context }: UseTabPanelParameters<TabPanelInfo>): UseTabPanelReturnType<PanelElement> {
    return useMonitoring(function useTablePanel(): UseTabPanelReturnType<PanelElement> {
        const { index } = info;

        const { tabPanelContext: { getVisibleIndex: g, getPanelId, getTabId } } = context;
        const [lastKnownVisibleIndex, setLastKnownVisibleIndex, getLastKnownVisibleIndex] = useState(g());
        const [isVisible, setIsVisible, _getIsVisible] = useState(null as boolean | null);
        useManagedChild<TabPanelInfo>({
            context,
            info: {
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
            }
        });
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
    });
}
