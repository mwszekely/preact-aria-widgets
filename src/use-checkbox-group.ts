import { h } from "preact";
import { CompleteListNavigationContext, PassiveStateUpdater, returnFalse, returnNull, returnZero, useCompleteListNavigation, useCompleteListNavigationChild, UseCompleteListNavigationChildInfo, UseCompleteListNavigationChildParameters, UseCompleteListNavigationChildReturnType, UseCompleteListNavigationParameters, UseCompleteListNavigationReturnType, UseListNavigationSingleSelectionSortableChildInfo, useMergedProps, usePassiveState, useStableCallback, useStableGetter, useStableObject, useState } from "preact-prop-helpers";
import { StateUpdater, useCallback, useEffect, useLayoutEffect, useRef } from "preact/hooks";
import { debugLog, EnhancedEvent, OmitStrong } from "./props";
import { CheckboxCheckedType } from "./use-label";

export type CheckboxGroupChangeEvent<E extends EventTarget> = EnhancedEvent<E, Event, { childrenChecked: boolean | Map<number, boolean | "mixed"> }>;

export interface UseCheckboxGroupParameters<ParentElement extends Element, TabbableChildElement extends Element, M extends CheckboxGroupInfo<TabbableChildElement>> extends OmitStrong<UseCompleteListNavigationParameters<ParentElement, TabbableChildElement, M>, "paginatedChildrenParameters" | "singleSelectionParameters"> {
    /**
     * This is called whenever the parent checkbox is changed and an update of
     * all the children needs to occur.
     * 
     * `event[EventDetail].childrenChecked` will be 
     * * true when all children need to become checked
     * * false when all children need to become unchecked
     * * A `Map<index,checked>` of each child's status when reverting to "mixed".
     * 
     * Because we're dealing with controlled components here, and the data for
     * what checkboxes are checked live *outside* of any of these hooks,
     * it's you who's responsible for listening for this event, modifying the
     * data, and re-rendering appropriately.
     * 
     * Highly recommended to, for example, add each child's `onInput` event handler
     * available in the child info the parent gets so it can call the handler
     * remotely from `managedCheckboxes`.
     * @param event 
     */
    //checkboxGroup: {}
    //onUpdateChildren(event: CheckboxGroupChangeEvent<h.JSX.TargetedEvent<E>>): void;
}

//export interface UseCheckboxGroupChildInfoBase<K extends string> extends ListNavigationChildInfoBase<K> {
/**
 * The id attribute used for the child.
 */
//id: string;

/**
 * The current checked state of this child.
 * 
 * This is used by the parent whenever it's interacted with 
 * and about to force every one to be something different -- 
 * it will save the state of all child checkboxes for later
 * by asking each one what its current state is individually
 * at that moment.
 * 
 * All the checkbox's states are captured when the parent
 * is in the "mixed" state and is clicked. It keeps them
 * that way until the same conditions arise again.
 */
//    getLastUserChecked(): boolean | "mixed";
//    onInput: UseCheckboxParameters<any, any>["onInput"];
//}

interface CheckboxGroupInfoBaseBase<TCE extends Element> {
    _e?: TCE;
}

interface CheckboxGroupInfoBase1<TCE extends Element> extends CheckboxGroupInfoBaseBase<TCE> {
    checkboxChildType: "parent";
}

interface CheckboxGroupInfoBase2<TCE extends Element> extends CheckboxGroupInfoBaseBase<TCE> {
    checkboxChildType: "child";
    getChecked(): boolean | "mixed";
    getLastUserChecked(): boolean | "mixed";
    setCheckedFromParentInput(newChecked: CheckboxCheckedType, e: Event): void | Promise<void>;
}

export interface CheckboxGroupInfo<TCE extends Element> extends UseCompleteListNavigationChildInfo<TCE> {
    checkboxInfo: (CheckboxGroupInfoBase1<TCE> | CheckboxGroupInfoBase2<TCE>);
}


export interface UseCheckboxGroupChildParameters<TCE extends Element, M extends CheckboxGroupInfo<TCE>> extends OmitStrong<UseCompleteListNavigationChildParameters<TCE, M, "checkboxInfo">, "managedChildParameters" | "pressParameters" | "singleSelectionChildParameters"> {
    context: CheckboxGroupContext<any, TCE, M>;
    checkboxGroupChild: {
        //focusSelf(e: TCE): void;
        checked: CheckboxCheckedType;
        onChangeFromParent(checked: CheckboxCheckedType, e: Event): void | Promise<void>;
    }
    managedChildParameters: OmitStrong<UseCompleteListNavigationChildParameters<TCE, M, never>["managedChildParameters"], never>
    pressParameters: UseCompleteListNavigationChildParameters<TCE, M, never>["pressParameters"];
}
export interface UseCheckboxGroupChildReturnType<TCE extends Element, M extends CheckboxGroupInfo<TCE>> extends OmitStrong<UseCompleteListNavigationChildReturnType<TCE, M>, "singleSelectionChildReturn"> {
    checkboxGroupChild: {
        onControlIdChanged: (next: string | undefined, prev: string | undefined) => void;
        onChildCheckedChange: (checked: CheckboxCheckedType) => void;
    }
}

//export interface UseCheckboxGroupChildReturnTypeWithHooks<InputElement extends Element, LabelElement extends Element> extends UseCheckboxGroupChildReturnTypeInfo<InputElement, LabelElement> {
// This is just whichever of the two should receive list-nav-related props (so based on `labelPosition` for checkboxes).
// Alternatively, don't use this if you explicitly don't want this group's list navigation
//listNavigationChildProps: h.JSX.HTMLAttributes<InputElement> | h.JSX.HTMLAttributes<LabelElement>;
//}


export type UseCheckboxGroupChild<InputElement extends Element, LabelElement extends Element, TCE extends InputElement | LabelElement, M extends CheckboxGroupInfo<TCE>> = (args: UseCheckboxGroupChildParameters<TCE, M>) => UseCheckboxGroupChildReturnType<TCE, M> /*{
    //tabbable: boolean | null;
    checkboxLike: UseCheckboxReturnType<InputElement, LabelElement>["checkboxLike"];
    label: UseCheckboxReturnType<InputElement, LabelElement>["label"];
    rovingTabIndex: UseListNavigationChildReturnType<InputElement>["rovingTabIndex"];
    useCheckboxGroupChildInputProps: ({ tabIndex, ...props }: h.JSX.HTMLAttributes<InputElement>) => h.JSX.HTMLAttributes<InputElement>;
    useCheckboxGroupChildLabelProps: ({ tabIndex, ...props }: h.JSX.HTMLAttributes<LabelElement>) => h.JSX.HTMLAttributes<LabelElement>;
}*/



export interface UseCheckboxGroupReturnType<GroupElement extends Element, TCE extends Element, M extends CheckboxGroupInfo<TCE>> extends UseCompleteListNavigationReturnType<GroupElement, TCE, M> {
    context: CheckboxGroupContext<GroupElement, TCE, M>;
}

//export interface UseCheckboxGroupReturnTypeWithHooks<GroupElement extends Element, InputElement extends Element, LabelElement extends Element, CBGSubInfo, K extends string> extends UseCheckboxGroupReturnTypeInfo<GroupElement, InputElement, LabelElement, CBGSubInfo, K> {
/** **STABLE ** */
//checkboxes: ManagedChildren<I>;
/**
 * Each child checkbox must call this hook, *in addition to* `useCheckbox`
 */
//    useCheckboxGroupChild: UseCheckboxGroupChild<InputElement, LabelElement, CBGSubInfo, K>;
/**
 * **STABLE**
 * 
 * The parent checkbox must use this hook
 */
//    useCheckboxGroupParent: UseCheckboxGroupParent<InputElement, LabelElement, CBGSubInfo, K>;

// Use on either e.g. the div containing the children, or each individual child
//listNavigationProps: h.JSX.HTMLAttributes<any>;
//}

/* eslint-disable @typescript-eslint/no-empty-interface */
export interface UseCheckboxGroupParentParameters<TCE extends Element, M extends CheckboxGroupInfo<TCE>> extends OmitStrong<UseCompleteListNavigationChildParameters<TCE, M, never>, "managedChildParameters" | "pressParameters" | "singleSelectionChildParameters"> {
    context: CheckboxGroupContext<any, TCE, M>;
    managedChildParameters: OmitStrong<UseCompleteListNavigationChildParameters<TCE, CheckboxGroupInfo<TCE>, never>["managedChildParameters"], never>
    pressParameters: UseCompleteListNavigationChildParameters<TCE, CheckboxGroupInfo<TCE>, never>["pressParameters"];
}

//export type UseCheckboxGroupParent<TCE extends Element> = (a: UseCheckboxGroupParentParameters<TCE>) => UseCheckboxGroupParentReturnType<TCE>;

export interface UseCheckboxGroupParentReturnType<TCE extends Element, M extends CheckboxGroupInfo<TCE>> extends UseCompleteListNavigationChildReturnType<TCE, M> {
    checkboxGroupParentReturn: {
        checked: CheckboxCheckedType;
        getPercent(): number;
        onParentCheckedChange: (e: Event) => Promise<void>;
    }
}

//export interface UseCheckboxGroupParentReturnTypeWithHooks<InputElement extends Element, _LabelElement extends Element> extends UseCheckboxGroupParentReturnTypeInfo<InputElement> {
//    useCheckboxGroupParentProps: (props: h.JSX.HTMLAttributes<InputElement>) => h.JSX.HTMLAttributes<InputElement>;
//}

export interface CheckboxGroupContext<GroupElement extends Element, TCE extends Element, M extends CheckboxGroupInfo<TCE>> extends CompleteListNavigationContext<GroupElement, TCE, M> {
    // parent
    checkboxGroupParentContext: {

        // What a horrifying type.  Name this better please.
        setSetter: PassiveStateUpdater<StateUpdater<string> | null, Event>;

        // whyyyyy
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
 * 
 * 
 * @param param0 
 * @returns 
 */
export function useCheckboxGroup<GroupElement extends Element, TCE extends Element>({
    linearNavigationParameters,
    rearrangeableChildrenParameters,
    sortableChildrenParameters,
    rovingTabIndexParameters,
    typeaheadNavigationParameters,
    staggeredChildrenParameters
}: UseCheckboxGroupParameters<GroupElement, TCE, CheckboxGroupInfo<TCE>>): UseCheckboxGroupReturnType<GroupElement, TCE, CheckboxGroupInfo<TCE>> {
    debugLog("useCheckboxGroup");
    //const onUpdateChildren = useStableCallback(onUpdateChildrenUnstable ?? (() => {}));
    const {
        childrenHaveFocusReturn,
        context,
        linearNavigationReturn,
        managedChildrenReturn,
        props,
        rearrangeableChildrenReturn,
        rovingTabIndexReturn,
        singleSelectionReturn,
        paginatedChildrenReturn,
        sortableChildrenReturn,
        typeaheadNavigationReturn
    } = useCompleteListNavigation<GroupElement, TCE, CheckboxGroupInfo<TCE>>({
        linearNavigationParameters,
        staggeredChildrenParameters,
        rearrangeableChildrenParameters,
        rovingTabIndexParameters,
        singleSelectionParameters: { initiallySelectedIndex: null, onSelectedIndexChange: null },
        sortableChildrenParameters,
        paginatedChildrenParameters: { paginationMax: null, paginationMin: null },
        typeaheadNavigationParameters
    });

    const { getChildren } = managedChildrenReturn;
    const children = getChildren();

    //const [uncheckedCount, setUnheckedCount] = useState(0);


    // Keep track of all child IDs, and any time any of them change, 
    // generate a new string with all of them concatenated together
    // (but only once per render);
    const allIds = useRef(new Set<string>());
    const updateParentControlIds = useStableCallback((setter: StateUpdater<string> | null) => { setter?.(Array.from(allIds.current).join(" ")) });
    const [getSetter, setSetter] = usePassiveState<StateUpdater<string> | null, Event>(updateParentControlIds, returnNull);
    const [_getUpdateIndex, setUpdateIndex] = usePassiveState<number, Event>(useStableCallback(() => { updateParentControlIds(getSetter()) }), returnZero);

    // Lots of machenery to track what total percentage of all checkboxes are checked,
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
            if (child.checkboxInfo.checkboxChildType == "child")
                willChangeAny ||= (child.checkboxInfo.getChecked() != child.checkboxInfo.getLastUserChecked())
        });
        children.forEach(child => {
            if (child.checkboxInfo.checkboxChildType == "child") {
                const prevChecked = child.checkboxInfo.getChecked();
                let checked: CheckboxCheckedType;
                if (nextChecked == "mixed") {
                    if (willChangeAny)
                        checked = (child.checkboxInfo.getLastUserChecked());
                    else
                        checked = true;
                }
                else {
                    checked = nextChecked;
                }
                if (checked != prevChecked) {
                    const promise = child.checkboxInfo.setCheckedFromParentInput(checked, e);
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
        context: useStableObject({
            ...context,
            checkboxGroupChildrenContext: useStableObject({
                setUpdateIndex,
                allIds: allIds.current,
                setTotalChecked,
                setTotalChildren
            }),
            checkboxGroupParentContext: useStableObject({
                setSetter,
                setSetParentCheckboxChecked,
                getPercentChecked,
                getTotalChecked,
                getTotalChildren,
                onCheckboxGroupParentInput,
            })
        }),
        childrenHaveFocusReturn,
        props,
        paginatedChildrenReturn,
        rearrangeableChildrenReturn,
        singleSelectionReturn,
        sortableChildrenReturn,
        managedChildrenReturn,
        rovingTabIndexReturn,
        typeaheadNavigationReturn
        /*checkboxGroup: {
            parentIsChecked: getSelfIsCheckedUnstable() as boolean | "mixed",
            parentPercentChecked: (checkedCount / (children.getHighestIndex() + 1)),
        }*/
    };
}


// If the user has changed the parent checkbox's value, then this ref holds a memory of what values were held before.
// Otherwise, it's null when the last input was from a child checkbox. 
//const savedCheckedValues = useRef<Map<number, boolean | "mixed"> | null>(null);
export function useCheckboxGroupParent<TCE extends Element>({
    completeListNavigationChildParameters,
    context,
    managedChildParameters,
    pressParameters,
    rovingTabIndexChildParameters,
    textContentParameters,
    sortableChildParameters,
}: UseCheckboxGroupParentParameters<TCE, CheckboxGroupInfo<TCE>>): UseCheckboxGroupParentReturnType<TCE, CheckboxGroupInfo<TCE>> {
    const { checkboxGroupParentContext: { setSetter, setSetParentCheckboxChecked, getPercentChecked, getTotalChecked, getTotalChildren, onCheckboxGroupParentInput } } = context;
    //const focusSelf = useCallback((e: any) => (e as Element as HTMLElement).focus?.(), []);
    const {
        hasCurrentFocusReturn,
        managedChildReturn,
        pressReturn,
        props,
        paginatedChildReturn,
        rovingTabIndexChildReturn,
        staggeredChildReturn,
        singleSelectionChildReturn,
    } = useCompleteListNavigationChild<TCE, CheckboxGroupInfo<TCE>, never>({
        completeListNavigationChildParameters,
        context,
        managedChildParameters,
        pressParameters,
        rovingTabIndexChildParameters,
        sortableChildParameters,
        textContentParameters,
        // single selection isn't used because checkboxes are multiselect; "disabled" refers only to that.
        singleSelectionChildParameters: { ariaPropName: null, selectionMode: "disabled", disabled: true },
    });

    const [ariaControls, setControls] = useState("");
    useLayoutEffect(() => {
        setSetter(() => setControls);
    }, [setControls]);
    debugLog("useCheckboxGroupParent");

    const [checked, setChecked] = useState<CheckboxCheckedType>(false);
    useEffect(() => {
        setSetParentCheckboxChecked(() => setChecked);
    }, [])

    const checkboxGroupParentReturn = { checked, onParentCheckedChange: onCheckboxGroupParentInput, getPercent: useStableCallback(() => { return getPercentChecked(getTotalChecked(), getTotalChildren()) }) };
    return {
        checkboxGroupParentReturn,
        hasCurrentFocusReturn,
        managedChildReturn,
        staggeredChildReturn,
        pressReturn,
        props: useMergedProps({ "aria-controls": ariaControls } as h.JSX.HTMLAttributes<TCE>, props),
        rovingTabIndexChildReturn,
        paginatedChildReturn,
        singleSelectionChildReturn,
        /*checkboxGroupParentReturn,
        hasCurrentFocusParameters,
        rovingTabIndexChildReturn,
        useCheckboxGroupParentProps: function useCheckboxGroupParentInputProps(props: h.JSX.HTMLAttributes<InputElement>): h.JSX.HTMLAttributes<InputElement> {
            return useMergedProps({ "aria-controls": ariaControls } as h.JSX.HTMLAttributes<InputElement>, props);
        }*/
    }
}



export function useCheckboxGroupChild<TCE extends Element>({
    checkboxGroupChild,
    completeListNavigationChildParameters,
    context,
    managedChildParameters,
    pressParameters,
    textContentParameters,
    rovingTabIndexChildParameters,
    sortableChildParameters,
}: UseCheckboxGroupChildParameters<TCE, CheckboxGroupInfo<TCE>>): UseCheckboxGroupChildReturnType<TCE, CheckboxGroupInfo<TCE>> {
    const { checkboxGroupChildrenContext: { allIds, setUpdateIndex, setTotalChildren, setTotalChecked, } } = context;

    debugLog("useCheckboxGroupChild", managedChildParameters.index);
    //const { checkbox: { onCheckedChange }, checkboxLike: { checked, disabled, labelPosition }, label: { tagInput, tagLabel }, hasFocusInput, hasFocusLabel } = asCheckbox;
    //const { subInfo, checkboxGroupChild: { checked, focusSelf, onChangeFromParent } } = asCheckboxGroupChild;

    const { checked, onChangeFromParent } = checkboxGroupChild;
    const getChecked = useStableGetter(checked);
    //labelPosition ??= "separate";
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
        pressReturn,
        props,
        singleSelectionChildReturn: _singleSelectionChildReturn,
        staggeredChildReturn,
        paginatedChildReturn,
        rovingTabIndexChildReturn,
    } = useCompleteListNavigationChild<TCE, CheckboxGroupInfo<TCE>, never>({
        completeListNavigationChildParameters: { checkboxInfo: { checkboxChildType: "child", getLastUserChecked, getChecked, setCheckedFromParentInput: onChangeFromParent }, ...completeListNavigationChildParameters },
        context,
        managedChildParameters: { ...managedChildParameters },
        pressParameters,
        rovingTabIndexChildParameters,
        textContentParameters,
        sortableChildParameters,
        singleSelectionChildParameters: { ariaPropName: null, selectionMode: "disabled", disabled: true },
        //subInfo: { type: "child", getLastUserChecked, setCheckedFromParentInput: onChangeFromParent, getChecked, subInfo },
        /*listNavigationChildParameters: asCheckboxGroupChild.listNavigationChildParameters,
        managedChildParameters: asCheckboxGroupChild.managedChildParameters,
        refElementReturn: asCheckboxGroupChild.refElementReturn,
        rovingTabIndexChildParameters: { ...asCheckboxGroupChild.rovingTabIndexChildParameters, focusSelf }*/
    });

    return {
        checkboxGroupChild: {
            onChildCheckedChange,
            onControlIdChanged
        },
        hasCurrentFocusReturn,
        managedChildReturn,
        staggeredChildReturn,
        paginatedChildReturn,
        pressReturn,
        props,
        rovingTabIndexChildReturn,
        //singleSelectionChildReturn

    }



}

