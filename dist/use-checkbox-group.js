import { focus, monitorCallCount, returnFalse, returnNull, returnZero, useCompleteListNavigation, useCompleteListNavigationChild, useMemoObject, useMergedProps, usePassiveState, useStableCallback, useStableGetter, useState } from "preact-prop-helpers";
import { useCallback, useEffect, useLayoutEffect, useRef } from "preact/hooks";
/**
 *
 *
 * @param param0
 * @returns
 */
export function useCheckboxGroup({ linearNavigationParameters, rovingTabIndexParameters, checkboxGroupParameters: { orientation }, ...listNavParameters }) {
    monitorCallCount(useCheckboxGroup);
    const { childrenHaveFocusReturn, context, linearNavigationReturn, managedChildrenReturn, props, rearrangeableChildrenReturn, rovingTabIndexReturn, singleSelectionReturn, staggeredChildrenReturn, paginatedChildrenReturn, sortableChildrenReturn, typeaheadNavigationReturn } = useCompleteListNavigation({
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
    const allIds = useRef(new Set());
    const updateParentControlIds = useStableCallback((setter) => { setter?.(Array.from(allIds.current).join(" ")); });
    const [getSetter, setSetter] = usePassiveState(updateParentControlIds, returnNull);
    const [_getUpdateIndex, setUpdateIndex] = usePassiveState(useStableCallback(() => { updateParentControlIds(getSetter()); }), returnZero);
    // Lots of machenery to track what total percentage of all checkboxes are checked,
    // and notifying the parent checkbox of this information (while re-rendering as little as possible)
    const getSelfIsChecked = useCallback((percentChecked) => { return percentChecked <= 0 ? false : percentChecked >= 1 ? true : "mixed"; }, []);
    const onAnyChildCheckedUpdate = useStableCallback((setter, percentChecked) => { setter?.(getSelfIsChecked(percentChecked)); });
    const [getTotalChildren, setTotalChildren] = usePassiveState(useCallback((totalChildren) => { onAnyChildCheckedUpdate(getSetParentCheckboxChecked(), getPercentChecked(getTotalChecked(), totalChildren)); }, []), returnZero);
    const [getTotalChecked, setTotalChecked] = usePassiveState(useCallback((totalChecked) => { onAnyChildCheckedUpdate(getSetParentCheckboxChecked(), getPercentChecked(totalChecked, getTotalChildren())); }, []), returnZero);
    const getPercentChecked = useCallback((totalChecked, totalChildren) => {
        if (totalChildren > 0)
            return totalChecked / totalChildren;
        else
            return (totalChecked == 0 ? 0 : 1);
    }, []);
    const [getSetParentCheckboxChecked, setSetParentCheckboxChecked] = usePassiveState(useStableCallback((setter) => {
        onAnyChildCheckedUpdate(setter, getPercentChecked(getTotalChecked(), getTotalChildren()));
    }));
    const onCheckboxGroupParentInput = useCallback(async (e) => {
        e.preventDefault();
        const selfIsChecked = getSelfIsChecked(getPercentChecked(getTotalChecked(), getTotalChildren()));
        const nextChecked = (selfIsChecked === false ? "mixed" : selfIsChecked === "mixed" ? true : false);
        let willChangeAny = false;
        const promises = [];
        children.forEach(child => {
            if (child.checkboxInfo.checkboxChildType == "child")
                willChangeAny ||= (child.checkboxInfo.getChecked() != child.checkboxInfo.getLastUserChecked());
        });
        children.forEach(child => {
            if (child.checkboxInfo.checkboxChildType == "child") {
                const prevChecked = child.checkboxInfo.getChecked();
                let checked;
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
        context: useMemoObject({
            ...context,
            checkboxGroupChildrenContext: useMemoObject({
                setUpdateIndex,
                allIds: allIds.current,
                setTotalChecked,
                setTotalChildren
            }),
            checkboxGroupParentContext: useMemoObject({
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
export function useCheckboxGroupParent({ context, info, textContentParameters }) {
    const { checkboxGroupParentContext: { setSetter, setSetParentCheckboxChecked, getPercentChecked, getTotalChecked, getTotalChildren, onCheckboxGroupParentInput } } = context;
    const { hasCurrentFocusReturn, managedChildReturn, pressParameters, textContentReturn, refElementReturn, propsChild, propsTabbable, paginatedChildReturn, rovingTabIndexChildReturn, staggeredChildReturn, singleSelectionChildReturn, } = useCompleteListNavigationChild({
        context,
        info,
        textContentParameters
    });
    const [ariaControls, setControls] = useState("");
    useLayoutEffect(() => {
        setSetter(() => setControls);
    }, [setControls]);
    monitorCallCount(useCheckboxGroupParent);
    const [checked, setChecked] = useState(false);
    useEffect(() => {
        setSetParentCheckboxChecked(() => setChecked);
    }, []);
    const checkboxGroupParentReturn = { checked, onParentCheckedChange: onCheckboxGroupParentInput, getPercent: useStableCallback(() => { return getPercentChecked(getTotalChecked(), getTotalChildren()); }) };
    return {
        checkboxGroupParentReturn,
        hasCurrentFocusReturn,
        managedChildReturn,
        textContentReturn,
        staggeredChildReturn,
        refElementReturn,
        propsChild: useMergedProps({ "aria-controls": ariaControls }, propsChild),
        propsTabbable,
        rovingTabIndexChildReturn,
        paginatedChildReturn,
        singleSelectionChildReturn,
        pressParameters
    };
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
export function useCheckboxGroupChild({ checkboxGroupChild, context, info, textContentParameters, }) {
    const { checkboxGroupChildrenContext: { allIds, setUpdateIndex, setTotalChildren, setTotalChecked, } } = context;
    monitorCallCount(useCheckboxGroupChild);
    const { checked, onChangeFromParent } = checkboxGroupChild;
    const getChecked = useStableGetter(checked);
    const [getLastUserChecked, setLastUserChecked] = usePassiveState(null, returnFalse);
    const onChildCheckedChange = useStableCallback((checked) => {
        setLastUserChecked(checked);
    });
    const onControlIdChanged = useCallback((next, prev) => {
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
    }, []);
    useEffect(() => {
        if (checked) {
            setTotalChecked(c => ((c ?? 0) + 1));
            return () => setTotalChecked(c => ((c ?? 0) - 1));
        }
    }, [checked]);
    const { hasCurrentFocusReturn, managedChildReturn, refElementReturn, textContentReturn, propsChild, propsTabbable, singleSelectionChildReturn: _singleSelectionChildReturn, staggeredChildReturn, paginatedChildReturn, rovingTabIndexChildReturn, pressParameters } = useCompleteListNavigationChild({
        info: { checkboxInfo: { checkboxChildType: "child", getLastUserChecked, getChecked, setCheckedFromParentInput: onChangeFromParent }, ...info },
        context,
        textContentParameters,
    });
    return {
        checkboxGroupChild: {
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
    };
}
//# sourceMappingURL=use-checkbox-group.js.map