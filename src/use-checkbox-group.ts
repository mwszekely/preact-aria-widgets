import {
    CompleteListNavigationContext,
    ElementProps,
    Nullable,
    PassiveStateUpdater,
    TargetedOmit,
    UseCompleteListNavigationChildInfo,
    UseCompleteListNavigationChildParameters,
    UseCompleteListNavigationChildReturnType,
    UseCompleteListNavigationParameters,
    UseCompleteListNavigationReturnType,
    UseGenericChildParameters,
    assertEmptyObject,
    focus,
    returnFalse,
    returnNull,
    returnZero,
    useCompleteListNavigation,
    useCompleteListNavigationChild,
    useMemoObject,
    useMergedProps,
    usePassiveState,
    useStableCallback,
    useStableGetter,
    useState
} from "preact-prop-helpers";
import { StateUpdater, useCallback, useEffect, useLayoutEffect, useRef } from "preact/hooks";
import { EnhancedEventHandler, OmitStrong, TargetedEnhancedEvent, monitored } from "./props.js";
import { CheckboxCheckedType } from "./use-checkbox-like.js";

/**
 * 
 * As a general reminder,
 * 
 * A checkbox group contains several parts:
 * 
 * * The group
 * * The checkbox parent
 * * Multiple checkbox children
 * * Each of those parent/child checkboxes themselves *separately* calls useCheckbox (useCheckbox isn't called by any of these hooks)
 * 
 */
const _comment = undefined;

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
    UseGenericChildParameters<CheckboxGroupContext<TCE>, Pick<CheckboxGroupInfo<TCE>, "index" | "focusSelf" | "untabbable">>,
    OmitStrong<UseCompleteListNavigationChildParameters<TCE, CheckboxGroupInfo<TCE>>, "context" | "info" | "singleSelectionChildParameters" | "multiSelectionChildParameters">,
    TargetedOmit<UseCompleteListNavigationChildParameters<TCE, CheckboxGroupInfo<TCE>>, "multiSelectionChildParameters", "initiallyMultiSelected"> {
    checkboxGroupChildParameters: UseCheckboxGroupChildParametersSelf;
}
export interface UseCheckboxGroupChildReturnTypeSelf {
    onControlIdChanged: (next: string | undefined, prev: string | undefined) => void;
    onChildCheckedChange: (checked: CheckboxCheckedType) => void;
}

export interface UseCheckboxGroupChildReturnType<TCE extends Element> extends OmitStrong<UseCompleteListNavigationChildReturnType<TCE, CheckboxGroupInfo<TCE>>, "singleSelectionChildReturn"> {
    checkboxGroupChildReturn: UseCheckboxGroupChildReturnTypeSelf;
}


export interface UseCheckboxGroupReturnType<GroupElement extends Element, TCE extends Element> extends
    OmitStrong<UseCompleteListNavigationReturnType<GroupElement, TCE, CheckboxGroupInfo<TCE>>, "contextChildren" | "contextProcessing"> {
    context: CheckboxGroupContext<TCE>;
}

export interface UseCheckboxGroupParentParameters<TCE extends Element> extends
    UseGenericChildParameters<CheckboxGroupContext<TCE>, Pick<CheckboxGroupInfo<TCE>, "index" | "focusSelf" | "untabbable">>,
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
 * @remarks `useCheckboxGroup` and its child hooks **do not** call `useCheckbox`. These hooks are for creating CheckboxGroup-like functionality&mdash;in theory, this could be implemented in a listbox.
 * 
 * A checkbox group is made up of the "Parent" checkbox and the "Child" checkboxes.  Of course, all of them are children of the group as a whole, but the "Parent" checkbox is the one that, when clicked, toggles the checked state of all the "Child" checkboxes.
 * 
 * A checkbox group's parent, when clicked, toggles between three states:
 * ```md-literal
 * * Unchecked (all children become unchecked)
 * * Mixed (all children become the last user-input value)
 * * Checked (all children become checked)
 * ```
 * 
 * This functions even if it takes an `async` amount of time to complete the "cause the child checkbox to change its state" action.
 * 
 * @compositeParams
 * 
 * @hasChild {@link useCheckboxGroupParent}
 * @hasChild {@link useCheckboxGroupChild}
 */
export const useCheckboxGroup = monitored(function useCheckboxGroup<GroupElement extends Element, TCE extends Element>({
    linearNavigationParameters,
    rovingTabIndexParameters,
    checkboxGroupParameters: { orientation, ...void2 },
    multiSelectionParameters,
    refElementParameters,
    typeaheadNavigationParameters,
    ...void1
}: UseCheckboxGroupParameters<GroupElement, TCE>): UseCheckboxGroupReturnType<GroupElement, TCE> {

    const {
        contextChildren,
        contextProcessing: _contextProcessing,
        linearNavigationReturn,
        managedChildrenReturn,
        props,
        rearrangeableChildrenReturn,
        rovingTabIndexReturn,
        singleSelectionReturn,
        typeaheadNavigationReturn,
        childrenHaveFocusReturn,
        multiSelectionReturn,
        refElementReturn,
        ...void3
    } = useCompleteListNavigation<GroupElement, TCE, CheckboxGroupInfo<TCE>>({
        linearNavigationParameters: { arrowKeyDirection: orientation, ...linearNavigationParameters },
        rovingTabIndexParameters: { focusSelfParent: focus, ...rovingTabIndexParameters },
        singleSelectionParameters: { initiallySingleSelectedIndex: null, onSingleSelectedIndexChange: null, singleSelectionAriaPropName: null, singleSelectionMode: "disabled" },
        paginatedChildrenParameters: { paginationMax: null, paginationMin: null },
        multiSelectionParameters,
        refElementParameters,
        typeaheadNavigationParameters
    });

    assertEmptyObject(void3);

    const { getChildren } = managedChildrenReturn;
    const children = getChildren();

    assertEmptyObject(void1);
    assertEmptyObject(void2);

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
        refElementReturn,
        linearNavigationReturn,
        childrenHaveFocusReturn,
        context: useMemoObject({
            ...contextChildren,
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
        rearrangeableChildrenReturn,
        singleSelectionReturn,
        managedChildrenReturn,
        rovingTabIndexReturn,
        typeaheadNavigationReturn,
        multiSelectionReturn
    };
})



/**
 * Implements the logic for the parent checkbox (but not the checkbox itself).
 * 
 * @compositeParams
 */
export const useCheckboxGroupParent = monitored(function useCheckboxGroupParent<TCE extends Element>({
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
    textContentParameters,
    multiSelectionChildParameters,
    singleSelectionChildParameters,
    ...void1
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
        rovingTabIndexChildReturn,
        singleSelectionChildReturn,
        multiSelectionChildReturn,
        ...void2
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
        textContentParameters,
        multiSelectionChildParameters,
        singleSelectionChildParameters
    });

    assertEmptyObject(void1);
    assertEmptyObject(void2);

    const [ariaControls, setControls] = useState("");
    useLayoutEffect(() => {
        setControlsSetterOnParentCheckbox(() => setControls, undefined);
    }, [setControls]);

    const [checked, setChecked] = useState<CheckboxCheckedType>(false);
    useEffect(() => {
        setSetParentCheckboxChecked(() => setChecked, undefined);
    }, [])

    const checkboxGroupParentReturn = { checked, onParentCheckedChange: onCheckboxGroupParentInput, getPercent: useStableCallback(() => { return getPercentChecked(getTotalChecked(), getTotalChildren()) }) };
    return {
        checkboxGroupParentReturn,
        hasCurrentFocusReturn,
        managedChildReturn,
        textContentReturn,
        refElementReturn,
        propsChild: useMergedProps({ "aria-controls": ariaControls } as ElementProps<TCE>, propsChild),
        propsTabbable,
        rovingTabIndexChildReturn,
        singleSelectionChildReturn,
        pressParameters,
        multiSelectionChildReturn
    }
})


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
export const useCheckboxGroupChild = monitored(function useCheckboxGroupChild<TCE extends Element>({
    checkboxGroupChildParameters,
    context,
    info: { focusSelf, index, untabbable, ...void3 },
    textContentParameters,
    hasCurrentFocusParameters,
    refElementParameters,
    multiSelectionChildParameters: { multiSelectionDisabled, onMultiSelectChange, ...void5 },
    ...void4
}: UseCheckboxGroupChildParameters<TCE>): UseCheckboxGroupChildReturnType<TCE> {
    const { checkboxGroupChildrenContext: { allIds, setUpdateIndex, setTotalChildren, setTotalChecked, } } = context;

    const { checked, onChangeFromParent, ...void1 } = checkboxGroupChildParameters;
    const getChecked = useStableGetter(checked);
    const [getLastUserChecked, setLastUserChecked] = usePassiveState<boolean | "mixed", Event>(null, returnFalse);
    const onChildCheckedChange = useStableCallback((checked: CheckboxCheckedType) => {
        setLastUserChecked(checked, undefined);
    });

    const onControlIdChanged = useCallback((next: string | undefined, prev: string | undefined) => {
        if (prev)
            allIds.delete(prev);

        if (next)
            allIds.add(next);

        if (!!next || !!prev) {
            setUpdateIndex(i => ((i ?? 0) + 1), undefined);
        }
    }, []);

    useEffect(() => {
        setTotalChildren(c => ((c ?? 0) + 1), undefined);
        return () => setTotalChildren(c => ((c ?? 0) - 1), undefined);
    }, [])


    useEffect(() => {
        if (checked) {
            setTotalChecked(c => ((c ?? 0) + 1), undefined);
            return () => setTotalChecked(c => ((c ?? 0) - 1), undefined);
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
        rovingTabIndexChildReturn,
        pressParameters,
        multiSelectionChildReturn,
        ...void2
    } = useCompleteListNavigationChild<TCE, CheckboxGroupInfo<TCE>>({
        info: {
            checkboxChildType: "child",
            getLastUserChecked,
            getChecked,
            setCheckedFromParentInput: onChangeFromParent,
            focusSelf,
            index,
            untabbable
        },
        context,
        textContentParameters,
        hasCurrentFocusParameters,
        refElementParameters,
        singleSelectionChildParameters: { singleSelectionDisabled: true },
        multiSelectionChildParameters: { initiallyMultiSelected: !!checked, multiSelectionDisabled, onMultiSelectChange }
    });

    assertEmptyObject(void1);
    assertEmptyObject(void2);
    assertEmptyObject(void3);
    assertEmptyObject(void4);
    assertEmptyObject(void5);

    return {
        checkboxGroupChildReturn: {
            onChildCheckedChange,
            onControlIdChanged
        },
        textContentReturn,
        hasCurrentFocusReturn,
        managedChildReturn,
        refElementReturn,
        propsChild,
        propsTabbable,
        pressParameters,
        rovingTabIndexChildReturn,
        multiSelectionChildReturn,
    }
})

