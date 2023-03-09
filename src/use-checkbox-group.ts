import { h } from "preact";
import { CompleteListNavigationContext, PassiveStateUpdater, returnFalse, returnNull, returnZero, useCompleteListNavigation, useCompleteListNavigationChild, UseCompleteListNavigationChildInfo, UseCompleteListNavigationChildParameters, UseCompleteListNavigationChildReturnType, UseCompleteListNavigationParameters, UseCompleteListNavigationReturnType, useMergedProps, usePassiveState, useStableCallback, useStableGetter, useStableObject, useState } from "preact-prop-helpers";
import { StateUpdater, useCallback, useEffect, useLayoutEffect, useRef } from "preact/hooks";
import { debugLog, EnhancedEvent, OmitStrong } from "./props.js";
import { CheckboxCheckedType } from "./use-checkbox-like.js";

export type CheckboxGroupChangeEvent<E extends EventTarget> = EnhancedEvent<E, Event, { childrenChecked: boolean | Map<number, boolean | "mixed"> }>;

export interface UseCheckboxGroupParameters<ParentElement extends Element, TabbableChildElement extends Element, M extends CheckboxGroupInfo<TabbableChildElement>> extends OmitStrong<UseCompleteListNavigationParameters<ParentElement, TabbableChildElement, M>, "paginatedChildrenParameters" | "singleSelectionParameters"> {

}

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


export interface UseCheckboxGroupChildParameters<TCE extends Element, M extends CheckboxGroupInfo<TCE>> extends OmitStrong<UseCompleteListNavigationChildParameters<TCE, M, "checkboxInfo">, "managedChildParameters" | "singleSelectionChildParameters"> {
    context: CheckboxGroupContext<any, TCE, M>;
    checkboxGroupChild: {
        checked: CheckboxCheckedType;
        onChangeFromParent(checked: CheckboxCheckedType, e: Event): void | Promise<void>;
    }
    managedChildParameters: OmitStrong<UseCompleteListNavigationChildParameters<TCE, M, never>["managedChildParameters"], never>;
}
export interface UseCheckboxGroupChildReturnType<TCE extends Element, M extends CheckboxGroupInfo<TCE>> extends OmitStrong<UseCompleteListNavigationChildReturnType<TCE, M>, "singleSelectionChildReturn"> {
    checkboxGroupChild: {
        onControlIdChanged: (next: string | undefined, prev: string | undefined) => void;
        onChildCheckedChange: (checked: CheckboxCheckedType) => void;
    }
}


//export type UseCheckboxGroupChild<InputElement extends Element, LabelElement extends Element, TCE extends InputElement | LabelElement, M extends CheckboxGroupInfo<TCE>> = (args: UseCheckboxGroupChildParameters<TCE, M>) => UseCheckboxGroupChildReturnType<TCE, M>

export interface UseCheckboxGroupReturnType<GroupElement extends Element, TCE extends Element, M extends CheckboxGroupInfo<TCE>> extends UseCompleteListNavigationReturnType<GroupElement, TCE, M> {
    context: CheckboxGroupContext<GroupElement, TCE, M>;
}

export interface UseCheckboxGroupParentParameters<TCE extends Element, M extends CheckboxGroupInfo<TCE>> extends OmitStrong<UseCompleteListNavigationChildParameters<TCE, M, never>, "managedChildParameters" | "singleSelectionChildParameters"> {
    context: CheckboxGroupContext<any, TCE, M>;
    managedChildParameters: OmitStrong<UseCompleteListNavigationChildParameters<TCE, CheckboxGroupInfo<TCE>, never>["managedChildParameters"], never>
}


export interface UseCheckboxGroupParentReturnType<TCE extends Element, M extends CheckboxGroupInfo<TCE>> extends OmitStrong<UseCompleteListNavigationChildReturnType<TCE, M>, "pressParameters"> {
    checkboxGroupParentReturn: {
        checked: CheckboxCheckedType;
        getPercent(): number;
        onParentCheckedChange: (e: Event) => Promise<void>;
    }
}



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
    const {
        childrenHaveFocusReturn,
        context,
        linearNavigationReturn,
        managedChildrenReturn,
        propsStable,
        rearrangeableChildrenReturn,
        rovingTabIndexReturn,
        singleSelectionReturn,
        staggeredChildrenReturn,
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
        propsStable,
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



export function useCheckboxGroupParent<TCE extends Element>({
    completeListNavigationChildParameters,
    context,
    managedChildParameters,
    rovingTabIndexChildParameters,
    textContentParameters,
    sortableChildParameters,
}: UseCheckboxGroupParentParameters<TCE, CheckboxGroupInfo<TCE>>): UseCheckboxGroupParentReturnType<TCE, CheckboxGroupInfo<TCE>> {
    const { checkboxGroupParentContext: { setSetter, setSetParentCheckboxChecked, getPercentChecked, getTotalChecked, getTotalChildren, onCheckboxGroupParentInput } } = context;
    const {
        hasCurrentFocusReturn,
        managedChildReturn,
        pressParameters,
        refElementReturn,
        props,
        paginatedChildReturn,
        rovingTabIndexChildReturn,
        staggeredChildReturn,
        singleSelectionChildReturn,
    } = useCompleteListNavigationChild<TCE, CheckboxGroupInfo<TCE>, never>({
        completeListNavigationChildParameters,
        context,
        managedChildParameters,
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
        refElementReturn,
        props: useMergedProps({ "aria-controls": ariaControls } as h.JSX.HTMLAttributes<TCE>, props),
        rovingTabIndexChildReturn,
        paginatedChildReturn,
        singleSelectionChildReturn,
    }
}


/**
 * Implements the "child" part of a checkbox group.
 * 
 * Does not implement any actual "checkbox" functionality,
 * but it does tell you what to do *with* a checkbox.
 * 
 * (That is to say, use `onChildCheckedChange` whenever
 * your checkbox or checkbox-like thing changes, and
 * properly implement `onChangeFromParent` to work
 * properly when the parent changes)
 * 
 * @param param0 
 * @returns 
 */
export function useCheckboxGroupChild<TCE extends Element>({
    checkboxGroupChild,
    completeListNavigationChildParameters,
    context,
    managedChildParameters,
    textContentParameters,
    rovingTabIndexChildParameters,
    sortableChildParameters,
}: UseCheckboxGroupChildParameters<TCE, CheckboxGroupInfo<TCE>>): UseCheckboxGroupChildReturnType<TCE, CheckboxGroupInfo<TCE>> {
    const { checkboxGroupChildrenContext: { allIds, setUpdateIndex, setTotalChildren, setTotalChecked, } } = context;

    debugLog("useCheckboxGroupChild", managedChildParameters.index);

    const { checked, onChangeFromParent } = checkboxGroupChild;
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
        pressParameters,
        refElementReturn,
        props,
        singleSelectionChildReturn: _singleSelectionChildReturn,
        staggeredChildReturn,
        paginatedChildReturn,
        rovingTabIndexChildReturn,
    } = useCompleteListNavigationChild<TCE, CheckboxGroupInfo<TCE>, never>({
        completeListNavigationChildParameters: { checkboxInfo: { checkboxChildType: "child", getLastUserChecked, getChecked, setCheckedFromParentInput: onChangeFromParent }, ...completeListNavigationChildParameters },
        context,
        managedChildParameters: { ...managedChildParameters },
        rovingTabIndexChildParameters,
        textContentParameters,
        sortableChildParameters,
        singleSelectionChildParameters: { ariaPropName: null, selectionMode: "disabled", disabled: true },
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
        refElementReturn,
        props,
        pressParameters,
        rovingTabIndexChildReturn,
    }
}

