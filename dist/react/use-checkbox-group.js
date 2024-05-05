import { assertEmptyObject, focus, returnFalse, returnNull, returnZero, useCompleteListNavigation, useCompleteListNavigationChild, useMemoObject, useMergedProps, usePassiveState, useStableCallback, useStableGetter, useState } from "preact-prop-helpers/react";
import { useCallback, useEffect, useLayoutEffect, useRef } from "preact/hooks";
import { monitored } from "./props.js";
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
export const useCheckboxGroup = monitored(function useCheckboxGroup({ linearNavigationParameters, rovingTabIndexParameters, checkboxGroupParameters: { orientation, ...void2 }, multiSelectionParameters, refElementParameters, typeaheadNavigationParameters, ...void1 }) {
    const { contextChildren, contextProcessing: _contextProcessing, linearNavigationReturn, managedChildrenReturn, props, rearrangeableChildrenReturn, rovingTabIndexReturn, singleSelectionReturn, typeaheadNavigationReturn, childrenHaveFocusReturn, multiSelectionReturn, refElementReturn, ...void3 } = useCompleteListNavigation({
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
});
/**
 * Implements the logic for the parent checkbox (but not the checkbox itself).
 *
 * @compositeParams
 */
export const useCheckboxGroupParent = monitored(function useCheckboxGroupParent({ context: { checkboxGroupParentContext: { setControlsSetterOnParentCheckbox, setSetParentCheckboxChecked, getPercentChecked, getTotalChecked, getTotalChildren, onCheckboxGroupParentInput }, ...context }, info, hasCurrentFocusParameters, refElementParameters, textContentParameters, multiSelectionChildParameters, singleSelectionChildParameters, ...void1 }) {
    const { hasCurrentFocusReturn, managedChildReturn, pressParameters, textContentReturn, refElementReturn, propsChild, propsTabbable, rovingTabIndexChildReturn, singleSelectionChildReturn, multiSelectionChildReturn, ...void2 } = useCompleteListNavigationChild({
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
    const [checked, setChecked] = useState(false);
    useEffect(() => {
        setSetParentCheckboxChecked(() => setChecked, undefined);
    }, []);
    const checkboxGroupParentReturn = { checked, onParentCheckedChange: onCheckboxGroupParentInput, getPercent: useStableCallback(() => { return getPercentChecked(getTotalChecked(), getTotalChildren()); }) };
    return {
        checkboxGroupParentReturn,
        hasCurrentFocusReturn,
        managedChildReturn,
        textContentReturn,
        refElementReturn,
        propsChild: useMergedProps({ "aria-controls": ariaControls }, propsChild),
        propsTabbable,
        rovingTabIndexChildReturn,
        singleSelectionChildReturn,
        pressParameters,
        multiSelectionChildReturn
    };
});
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
export const useCheckboxGroupChild = monitored(function useCheckboxGroupChild({ checkboxGroupChildParameters, context, info: { focusSelf, index, untabbable, ...void3 }, textContentParameters, hasCurrentFocusParameters, refElementParameters, multiSelectionChildParameters: { multiSelectionDisabled, onMultiSelectChange, ...void5 }, ...void4 }) {
    const { checkboxGroupChildrenContext: { allIds, setUpdateIndex, setTotalChildren, setTotalChecked, } } = context;
    const { checked, onChangeFromParent, ...void1 } = checkboxGroupChildParameters;
    const getChecked = useStableGetter(checked);
    const [getLastUserChecked, setLastUserChecked] = usePassiveState(null, returnFalse);
    const onChildCheckedChange = useStableCallback((checked) => {
        setLastUserChecked(checked, undefined);
    });
    const onControlIdChanged = useCallback((next, prev) => {
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
    }, []);
    useEffect(() => {
        if (checked) {
            setTotalChecked(c => ((c ?? 0) + 1), undefined);
            return () => setTotalChecked(c => ((c ?? 0) - 1), undefined);
        }
    }, [checked]);
    const { hasCurrentFocusReturn, managedChildReturn, refElementReturn, textContentReturn, propsChild, propsTabbable, singleSelectionChildReturn: _singleSelectionChildReturn, rovingTabIndexChildReturn, pressParameters, multiSelectionChildReturn, ...void2 } = useCompleteListNavigationChild({
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
    };
});
//# sourceMappingURL=use-checkbox-group.js.map