import { CompleteListNavigationContext, ElementProps, Nullable, PassiveStateUpdater, TargetedOmit, UseCompleteListNavigationChildInfo, UseCompleteListNavigationChildParameters, UseCompleteListNavigationChildReturnType, UseCompleteListNavigationParameters, UseCompleteListNavigationReturnType, UseGenericChildParameters, assertEmptyObject, focus, monitorCallCount, returnFalse, returnNull, returnZero, useCompleteListNavigation, useCompleteListNavigationChild, useMemoObject, useMergedProps, usePassiveState, useStableCallback, useStableGetter, useState } from "preact-prop-helpers";
import { StateUpdater, useCallback, useEffect, useLayoutEffect, useRef } from "preact/hooks";
import { EnhancedEventHandler, OmitStrong, TargetedEnhancedEvent } from "./props.js";
import { CheckboxCheckedType } from "./use-checkbox-like.js";

export interface CheckboxGroupChangeEventDetail {
    childrenChecked: boolean | Map<number, boolean | "mixed">;
}

export type TargetedCheckboxGroupChangeEvent = TargetedEnhancedEvent<Event, CheckboxGroupChangeEventDetail>;
export type CheckboxGroupChangeEventHandler = EnhancedEventHandler<Event, CheckboxGroupChangeEventDetail>;
export interface UseCheckboxGroupParametersSelf {
    orientation: "vertical" | "horizontal";
}

export interface UseCheckboxGroupParameters<ParentElement extends Element, TabbableChildElement extends Element> extends
    OmitStrong<UseCompleteListNavigationParameters<ParentElement, TabbableChildElement, CheckboxGroupInfo<TabbableChildElement>>, "linearNavigationParameters" | "paginatedChildrenParameters" | "singleSelectionParameters" | "rovingTabIndexParameters">,
    TargetedOmit<UseCompleteListNavigationParameters<ParentElement, TabbableChildElement, CheckboxGroupInfo<TabbableChildElement>>, "linearNavigationParameters", "arrowKeyDirection">,
    TargetedOmit<UseCompleteListNavigationParameters<ParentElement, TabbableChildElement, CheckboxGroupInfo<TabbableChildElement>>, "rovingTabIndexParameters", "focusSelfParent"> {
    checkboxGroupParameters: UseCheckboxGroupParametersSelf;
}

interface CheckboxGroupInfoBaseBase<TCE extends Element> {
    _e?: TCE;
}

interface CheckboxGroupInfoBase<TCE extends Element> extends CheckboxGroupInfoBaseBase<TCE> {
    checkboxChildType: "child" | "parent";

    // These are child-only. If `checkboxChildType` is parent, then these are null

    /** Child-only */
    getChecked: Nullable<() => boolean | "mixed">;
    /** Child-only */
    getLastUserChecked: Nullable<() => boolean | "mixed">;
    /** Child-only */
    setCheckedFromParentInput: Nullable<(newChecked: CheckboxCheckedType, e: Event) => void | Promise<void>>;
}

export interface CheckboxGroupInfo<TCE extends Element> extends UseCompleteListNavigationChildInfo<TCE>, CheckboxGroupInfoBase<TCE> {
}

export interface UseCheckboxGroupChildParametersSelf {
    checked: CheckboxCheckedType;
    onChangeFromParent(checked: CheckboxCheckedType, e: Event): void | Promise<void>;
}

export interface UseCheckboxGroupChildParameters<TCE extends Element> extends
    UseGenericChildParameters<CheckboxGroupContext<TCE>, Pick<CheckboxGroupInfo<TCE>, "index" | "focusSelf" | "untabbable" | "unselectable" | "getSortValue">>,
    OmitStrong<UseCompleteListNavigationChildParameters<TCE, CheckboxGroupInfo<TCE>>, "context" | "info"> {
    checkboxGroupChildParameters: UseCheckboxGroupChildParametersSelf;
}
export interface UseCheckboxGroupChildReturnTypeSelf {
    onControlIdChanged: (next: string | undefined, prev: string | undefined) => void;
    onChildCheckedChange: (checked: CheckboxCheckedType) => void;
}

export interface UseCheckboxGroupChildReturnType<TCE extends Element> extends OmitStrong<UseCompleteListNavigationChildReturnType<TCE, CheckboxGroupInfo<TCE>>, "singleSelectionChildReturn"> {
    checkboxGroupChildReturn: UseCheckboxGroupChildReturnTypeSelf;
}


//export type UseCheckboxGroupChild<InputElement extends Element, LabelElement extends Element, TCE extends InputElement | LabelElement, M extends CheckboxGroupInfo<TCE>> = (args: UseCheckboxGroupChildParameters<TCE, M>) => UseCheckboxGroupChildReturnType<TCE, M>

export interface UseCheckboxGroupReturnType<GroupElement extends Element, TCE extends Element> extends
    OmitStrong<UseCompleteListNavigationReturnType<GroupElement, TCE, CheckboxGroupInfo<TCE>>, "context"> {
    context: CheckboxGroupContext<TCE>;
}

export interface UseCheckboxGroupParentParameters<TCE extends Element> extends
    UseGenericChildParameters<CheckboxGroupContext<TCE>, Pick<CheckboxGroupInfo<TCE>, "index" | "focusSelf" | "untabbable" | "unselectable" | "getSortValue">>,
    OmitStrong<UseCompleteListNavigationChildParameters<TCE, CheckboxGroupInfo<TCE>>, "context" | "info"> {
}

export interface UseCheckboxGroupParentReturnTypeSelf {
    checked: CheckboxCheckedType;
    getPercent(): number;
    onParentCheckedChange: (e: Event) => Promise<void>;
}

export interface UseCheckboxGroupParentReturnType<TCE extends Element> extends OmitStrong<UseCompleteListNavigationChildReturnType<TCE, CheckboxGroupInfo<TCE>>, never> {
    checkboxGroupParentReturn: UseCheckboxGroupParentReturnTypeSelf;
}



export interface CheckboxGroupContext<TCE extends Element> extends CompleteListNavigationContext<TCE, CheckboxGroupInfo<TCE>> {
    // parent
    checkboxGroupParentContext: {

        /**
         * So the group needs to be able to provide the parent checkbox with all the IDs of each child for its aria-controls prop.
         * 
         * Thus, the parent needs to provide the group with its own function to be able to call "setMyAriaControls(theIdsOfEachChild)".
         * 
         * That's what this is.
         */
        setControlsSetterOnParentCheckbox: PassiveStateUpdater<StateUpdater<string> | null, Event>;

        /**
         * Similar to the above, but for the overall checked state on the parent checkbox for the group to coordinate.
         */
        setSetParentCheckboxChecked: PassiveStateUpdater<StateUpdater<CheckboxCheckedType> | null, Event>;

        getPercentChecked: (totalChecked: number, totalChildren: number) => number;

        getTotalChecked: () => number;
        getTotalChildren: () => number;

        onCheckboxGroupParentInput: (e: Event) => Promise<void>;
    }
    checkboxGroupChildrenContext: {

        // children
        setUpdateIndex: PassiveStateUpdater<number, Event>;
        allIds: Set<string>;
        setTotalChildren: PassiveStateUpdater<number, Event>;
        setTotalChecked: PassiveStateUpdater<number, Event>;
    }

}

/**
 * Allows a parent checkbox to control a number of child checkboxes, in accordance with the [Checkbox](https://www.w3.org/WAI/ARIA/apg/patterns/checkbox/) pattern.
 * 
 * @compositeParams
 * 
 * @hasChild {@link useCheckboxGroupParent}
 * @hasChild {@link useCheckboxGroupChild}
 */
export function useCheckboxGroup<GroupElement extends Element, TCE extends Element>({
    linearNavigationParameters,
    rovingTabIndexParameters,
    checkboxGroupParameters: { orientation },
    ...listNavParameters
}: UseCheckboxGroupParameters<GroupElement, TCE>): UseCheckboxGroupReturnType<GroupElement, TCE> {
    monitorCallCount(useCheckboxGroup);

    const {
        context,
        linearNavigationReturn,
        managedChildrenReturn,
        props,
        rearrangeableChildrenReturn,
        rovingTabIndexReturn,
        singleSelectionReturn,
        staggeredChildrenReturn,
        paginatedChildrenReturn,
        sortableChildrenReturn,
        typeaheadNavigationReturn,
        childrenHaveFocusReturn,
    } = useCompleteListNavigation<GroupElement, TCE, CheckboxGroupInfo<TCE>>({
        linearNavigationParameters: { arrowKeyDirection: orientation, ...linearNavigationParameters },
        rovingTabIndexParameters: { focusSelfParent: focus, ...rovingTabIndexParameters },
        singleSelectionParameters: { initiallySelectedIndex: null, onSelectedIndexChange: null, ariaPropName: null, selectionMode: "disabled" },
        paginatedChildrenParameters: { paginationMax: null, paginationMin: null },
        ...listNavParameters
    });

    const { getChildren } = managedChildrenReturn;
    const children = getChildren();


    // Keep track of all child IDs, and any time any of them change, 
    // generate a new string with all of them concatenated together
    // (but only once per render);
    const allIds = useRef(new Set<string>());
    const updateParentControlIds = useStableCallback((setter: StateUpdater<string> | null) => { setter?.(Array.from(allIds.current).join(" ")) });
    const [getControlsSetterOnParentCheckbox, setControlsSetterOnParentCheckbox] = usePassiveState<StateUpdater<string> | null, Event>(updateParentControlIds, returnNull);
    const [_getUpdateIndex, setUpdateIndex] = usePassiveState<number, Event>(useStableCallback(() => { updateParentControlIds(getControlsSetterOnParentCheckbox()) }), returnZero, setTimeout);

    // Lots of machinery to track what total percentage of all checkboxes are checked,
    // and notifying the parent checkbox of this information (while re-rendering as little as possible)
    const getSelfIsChecked = useCallback((percentChecked: number): CheckboxCheckedType => { return percentChecked <= 0 ? false : percentChecked >= 1 ? true : "mixed"; }, []);
    const onAnyChildCheckedUpdate = useStableCallback((setter: StateUpdater<CheckboxCheckedType> | null, percentChecked: number) => { setter?.(getSelfIsChecked(percentChecked)); })
    const [getTotalChildren, setTotalChildren] = usePassiveState(useCallback((totalChildren: number) => { onAnyChildCheckedUpdate(getSetParentCheckboxChecked(), getPercentChecked(getTotalChecked(), totalChildren)) }, []), returnZero);
    const [getTotalChecked, setTotalChecked] = usePassiveState(useCallback((totalChecked: number) => { onAnyChildCheckedUpdate(getSetParentCheckboxChecked(), getPercentChecked(totalChecked, getTotalChildren())) }, []), returnZero);
    const getPercentChecked = useCallback((totalChecked: number, totalChildren: number): number => {
        if (totalChildren > 0)
            return totalChecked / totalChildren;
        else
            return (totalChecked == 0 ? 0 : 1);
    }, []);

    const [getSetParentCheckboxChecked, setSetParentCheckboxChecked] = usePassiveState<StateUpdater<CheckboxCheckedType> | null, Event>(useStableCallback((setter: StateUpdater<CheckboxCheckedType> | null) => {
        onAnyChildCheckedUpdate(setter, getPercentChecked(getTotalChecked(), getTotalChildren()))
    }));


    const onCheckboxGroupParentInput = useCallback(async (e: Event): Promise<void> => {
        e.preventDefault();

        const selfIsChecked = getSelfIsChecked(getPercentChecked(getTotalChecked(), getTotalChildren()));
        const nextChecked = (selfIsChecked === false ? "mixed" : selfIsChecked === "mixed" ? true : false);
        let willChangeAny = false;
        const promises: Promise<any>[] = [];
        children.forEach(child => {
            if (child.checkboxChildType == "child")
                willChangeAny ||= (child.getChecked!() != child.getLastUserChecked!())
        });
        children.forEach(child => {
            if (child.checkboxChildType == "child") {
                const prevChecked = child.getChecked!();
                let checked: CheckboxCheckedType;
                if (nextChecked == "mixed") {
                    if (willChangeAny)
                        checked = (child.getLastUserChecked!());
                    else
                        checked = true;
                }
                else {
                    checked = nextChecked;
                }
                if (checked != prevChecked) {
                    const promise = child.setCheckedFromParentInput!(checked, e);
                    if (promise) {
                        promises.push(promise);
                    }
                }
            }
        });

        await Promise.all(promises);
    }, []);


    return {
        linearNavigationReturn,
        childrenHaveFocusReturn,
        context: useMemoObject({
            ...context,
            checkboxGroupChildrenContext: useMemoObject({
                setUpdateIndex,
                allIds: allIds.current,
                setTotalChecked,
                setTotalChildren
            }),
            checkboxGroupParentContext: useMemoObject({
                setControlsSetterOnParentCheckbox,
                setSetParentCheckboxChecked,
                getPercentChecked,
                getTotalChecked,
                getTotalChildren,
                onCheckboxGroupParentInput,
            })
        }),
        props,
        staggeredChildrenReturn,
        paginatedChildrenReturn,
        rearrangeableChildrenReturn,
        singleSelectionReturn,
        sortableChildrenReturn,
        managedChildrenReturn,
        rovingTabIndexReturn,
        typeaheadNavigationReturn
    };
}



/**
 * Implements the logic for the parent checkbox (but not the checkbox itself).
 * 
 * @compositeParams
 */
export function useCheckboxGroupParent<TCE extends Element>({
    context: {
        checkboxGroupParentContext: {
            setControlsSetterOnParentCheckbox,
            setSetParentCheckboxChecked,
            getPercentChecked,
            getTotalChecked,
            getTotalChildren,
            onCheckboxGroupParentInput
        },
        ...context
    },
    info,
    hasCurrentFocusParameters,
    refElementParameters,
    textContentParameters
}: UseCheckboxGroupParentParameters<TCE>): UseCheckboxGroupParentReturnType<TCE> {
    type M = CheckboxGroupInfo<TCE>;

    const {
        hasCurrentFocusReturn,
        managedChildReturn,
        pressParameters,
        textContentReturn,
        refElementReturn,
        propsChild,
        propsTabbable,
        paginatedChildReturn,
        rovingTabIndexChildReturn,
        staggeredChildReturn,
        singleSelectionChildReturn,
    } = useCompleteListNavigationChild<TCE, M>({
        context,
        hasCurrentFocusParameters,
        refElementParameters,
        info: {
            ...info,
            checkboxChildType: "parent",

            // These 3 are child-only
            getLastUserChecked: null,
            setCheckedFromParentInput: null,
            getChecked: null
        },
        textContentParameters
    });

    const [ariaControls, setControls] = useState("");
    useLayoutEffect(() => {
        setControlsSetterOnParentCheckbox(() => setControls);
    }, [setControls]);
    monitorCallCount(useCheckboxGroupParent);

    const [checked, setChecked] = useState<CheckboxCheckedType>(false);
    useEffect(() => {
        setSetParentCheckboxChecked(() => setChecked);
    }, [])

    const checkboxGroupParentReturn = { checked, onParentCheckedChange: onCheckboxGroupParentInput, getPercent: useStableCallback(() => { return getPercentChecked(getTotalChecked(), getTotalChildren()) }) };
    return {
        checkboxGroupParentReturn,
        hasCurrentFocusReturn,
        managedChildReturn,
        textContentReturn,
        staggeredChildReturn,
        refElementReturn,
        propsChild: useMergedProps({ "aria-controls": ariaControls } as ElementProps<TCE>, propsChild),
        propsTabbable,
        rovingTabIndexChildReturn,
        paginatedChildReturn,
        singleSelectionChildReturn,
        pressParameters
    }
}


/**
 * Implements the "child" part of a checkbox group.
 * 
 * @remarks Does not implement any actual "checkbox" functionality,
 * but it does tell you what to do *with* a checkbox.
 * 
 * (That is to say, use `onChildCheckedChange` whenever
 * your checkbox or checkbox-like thing changes, and
 * properly implement `onChangeFromParent` to work
 * properly when the parent changes)
 * 
 * @compositeParams
 */
export function useCheckboxGroupChild<TCE extends Element>({
    checkboxGroupChildParameters,
    context,
    info: { focusSelf, getSortValue, index, unselectable, untabbable, ...void3 },
    textContentParameters,
    hasCurrentFocusParameters,
    refElementParameters,
    ...void4
}: UseCheckboxGroupChildParameters<TCE>): UseCheckboxGroupChildReturnType<TCE> {
    const { checkboxGroupChildrenContext: { allIds, setUpdateIndex, setTotalChildren, setTotalChecked, } } = context;
    type M = CheckboxGroupInfo<TCE>;
    monitorCallCount(useCheckboxGroupChild);

    const { checked, onChangeFromParent, ...void1 } = checkboxGroupChildParameters;
    const getChecked = useStableGetter(checked);
    const [getLastUserChecked, setLastUserChecked] = usePassiveState<boolean | "mixed", Event>(null, returnFalse);
    const onChildCheckedChange = useStableCallback((checked: CheckboxCheckedType) => {
        setLastUserChecked(checked);
    });

    const onControlIdChanged = useCallback((next: string | undefined, prev: string | undefined) => {
        if (prev)
            allIds.delete(prev);

        if (next)
            allIds.add(next);

        if (!!next || !!prev) {
            setUpdateIndex(i => ((i ?? 0) + 1));
        }
    }, []);

    useEffect(() => {
        setTotalChildren(c => ((c ?? 0) + 1));
        return () => setTotalChildren(c => ((c ?? 0) - 1));
    }, [])


    useEffect(() => {
        if (checked) {
            setTotalChecked(c => ((c ?? 0) + 1));
            return () => setTotalChecked(c => ((c ?? 0) - 1));
        }
    }, [checked]);

    const {
        hasCurrentFocusReturn,
        managedChildReturn,
        refElementReturn,
        textContentReturn,
        propsChild,
        propsTabbable,
        singleSelectionChildReturn: _singleSelectionChildReturn,
        staggeredChildReturn,
        paginatedChildReturn,
        rovingTabIndexChildReturn,
        pressParameters,
        ...void2
    } = useCompleteListNavigationChild<TCE, CheckboxGroupInfo<TCE>>({
        info: {
            checkboxChildType: "child",
            getLastUserChecked,
            getChecked,
            setCheckedFromParentInput: onChangeFromParent,
            focusSelf,
            getSortValue,
            index,
            unselectable,
            untabbable
        },
        context,
        textContentParameters,
        hasCurrentFocusParameters,
        refElementParameters,
    });

    assertEmptyObject(void1);
    assertEmptyObject(void2);
    assertEmptyObject(void3);
    assertEmptyObject(void4);

    return {
        checkboxGroupChildReturn: {
            onChildCheckedChange,
            onControlIdChanged
        },
        textContentReturn,
        hasCurrentFocusReturn,
        managedChildReturn,
        staggeredChildReturn,
        paginatedChildReturn,
        refElementReturn,
        propsChild,
        propsTabbable,
        pressParameters,
        rovingTabIndexChildReturn,
    }
}

