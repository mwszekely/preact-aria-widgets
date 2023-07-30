import { assertEmptyObject, focus, monitorCallCount, returnFalse, returnNull, returnZero, useCompleteListNavigation, useCompleteListNavigationChild, useMemoObject, useMergedProps, usePassiveState, useStableCallback, useStableGetter, useState } from "preact-prop-helpers";
import { useCallback, useEffect, useLayoutEffect, useRef } from "preact/hooks";
/**
 * Allows a parent checkbox to control a number of child checkboxes, in accordance with the [Checkbox](https://www.w3.org/WAI/ARIA/apg/patterns/checkbox/) pattern.
 *
 * @compositeParams
 *
 * @hasChild {@link useCheckboxGroupParent}
 * @hasChild {@link useCheckboxGroupChild}
 */
export function useCheckboxGroup({ linearNavigationParameters, rovingTabIndexParameters, checkboxGroupParameters: { orientation }, ...listNavParameters }) {
    monitorCallCount(useCheckboxGroup);
    const { context, linearNavigationReturn, managedChildrenReturn, props, rearrangeableChildrenReturn, rovingTabIndexReturn, singleSelectionReturn, staggeredChildrenReturn, paginatedChildrenReturn, sortableChildrenReturn, typeaheadNavigationReturn, childrenHaveFocusReturn, } = useCompleteListNavigation({
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
    const [getControlsSetterOnParentCheckbox, setControlsSetterOnParentCheckbox] = usePassiveState(updateParentControlIds, returnNull);
    const [_getUpdateIndex, setUpdateIndex] = usePassiveState(useStableCallback(() => { updateParentControlIds(getControlsSetterOnParentCheckbox()); }), returnZero, setTimeout);
    // Lots of machinery to track what total percentage of all checkboxes are checked,
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
            if (child.checkboxChildType == "child")
                willChangeAny ||= (child.getChecked() != child.getLastUserChecked());
        });
        children.forEach(child => {
            if (child.checkboxChildType == "child") {
                const prevChecked = child.getChecked();
                let checked;
                if (nextChecked == "mixed") {
                    if (willChangeAny)
                        checked = (child.getLastUserChecked());
                    else
                        checked = true;
                }
                else {
                    checked = nextChecked;
                }
                if (checked != prevChecked) {
                    const promise = child.setCheckedFromParentInput(checked, e);
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
export function useCheckboxGroupParent({ context: { checkboxGroupParentContext: { setControlsSetterOnParentCheckbox, setSetParentCheckboxChecked, getPercentChecked, getTotalChecked, getTotalChildren, onCheckboxGroupParentInput }, ...context }, info, hasCurrentFocusParameters, refElementParameters, textContentParameters }) {
    const { hasCurrentFocusReturn, managedChildReturn, pressParameters, textContentReturn, refElementReturn, propsChild, propsTabbable, paginatedChildReturn, rovingTabIndexChildReturn, staggeredChildReturn, singleSelectionChildReturn, } = useCompleteListNavigationChild({
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
export function useCheckboxGroupChild({ checkboxGroupChildParameters, context, info: { focusSelf, getSortValue, index, unselectable, untabbable, ...void3 }, textContentParameters, hasCurrentFocusParameters, refElementParameters, ...void4 }) {
    const { checkboxGroupChildrenContext: { allIds, setUpdateIndex, setTotalChildren, setTotalChecked, } } = context;
    monitorCallCount(useCheckboxGroupChild);
    const { checked, onChangeFromParent, ...void1 } = checkboxGroupChildParameters;
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
    const { hasCurrentFocusReturn, managedChildReturn, refElementReturn, textContentReturn, propsChild, propsTabbable, singleSelectionChildReturn: _singleSelectionChildReturn, staggeredChildReturn, paginatedChildReturn, rovingTabIndexChildReturn, pressParameters, ...void2 } = useCompleteListNavigationChild({
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
    };
}
//# sourceMappingURL=use-checkbox-group.js.map