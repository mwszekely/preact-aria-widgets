import { identity } from 'lodash-es';
import { useContext, monitored, useRefElement, usePress, useStableCallback, enhanceEvent, returnFalse, assertEmptyObject, useMergedProps, usePersistentState, useManagedChildren, useCallback, useChildrenFlag, findBackupFocus, useMemoObject, useTypeaheadNavigation, useState, useRandomId, useHasCurrentFocus, useManagedChild, useLinearNavigation, useTypeaheadNavigationChild, useTextContent, useCompleteListNavigation, focus, useRef, usePassiveState, returnNull, returnZero, useCompleteListNavigationChild, useLayoutEffect, useEffect, useStableGetter, useRandomDualIds, returnTrue, useModal, findFirstFocusable, useCompleteGridNavigationDeclarative, useCompleteGridNavigationRow, useCompleteGridNavigationCell, useCompleteListNavigationDeclarative, useCompleteListNavigationChildDeclarative, useTimeout, createContext, usePortalChildren, useMemo, useAsyncHandler, EventDetail, generateRandomId, useCompleteGridNavigation, useGlobalHandler, useDismiss, useImperativeHandle, createPortal, memo, createElement, useCompleteGridNavigationRows, useProcessedChild, useCompleteListNavigationChildren } from 'preact-prop-helpers/react';
export { EventDetail } from 'preact-prop-helpers/react';
import { jsxs, Fragment, jsx } from 'react/jsx-runtime';

function useContextWithWarning(context, parentContextName) {
    let ret = useContext(context);
    if (ret == null) {
        /* eslint-disable no-debugger */
        debugger;
        console.error(`This child is missing its parent ${parentContextName} context`);
    }
    return ret;
}
function noop() { return; }
// (These do not need to be unique)
const Prefices = {
    accordionSectionHeaderButton: "ashb-",
    accordionSectionBody: "asb-",
    checkboxLikeInput: "cbli-",
    checkboxLikeLabel: "cbll-",
    dialog: "mdl-",
    dialogTitle: "mdlt-",
    drawer: "mdw-",
    drawerTitle: "mdwt-",
    gridlist: "gl-",
    gridlistLabel: "gll-",
    listbox: "lb-",
    listboxLabel: "lbl-",
    menu: "menu-",
    progressIndicator: "pi-",
    progressLabel: "pl-",
    radioGroup: "rg-",
    radioGroupLabel: "rgl-",
    radio: "rb-",
    radioLabel: "rbl-",
    sliderThumb: "st-",
    table: "tb-",
    tableLabel: "tbl-",
    tablist: "tl-",
    tablistLabel: "tll-",
    tooltip: "tt-",
    toolbar: "tlb-",
    toolbarLabel: "tlbl-"
};

/**
 * Implements a [Button](https://www.w3.org/WAI/ARIA/apg/patterns/button/) pattern.
 *
 * @remarks The press handler is sync by default. See `useProgressWithHandler` to turn an async function into a sync function with a progress bar.
 *
 * @compositeParams
 */
const useButton = monitored(function useButton({ buttonParameters: { tagButton, disabled, pressed, role, onPressSync, ...void1 }, pressParameters: { focusSelf, allowRepeatPresses, longPressThreshold, onPressingChange, excludeSpace, ...void3 }, refElementParameters, ...void2 }) {
    //if (tagButton != "button")
    //    debugger;
    const { refElementReturn, propsStable: propsRef, ...void5 } = useRefElement({ refElementParameters });
    const { pressReturn, props: propsPress, ...void4 } = usePress({
        refElementReturn,
        pressParameters: {
            onPressSync: useStableCallback((e) => {
                if (!disabled) {
                    const p = (pressed == null ? undefined : !pressed);
                    onPressSync?.(enhanceEvent(e, { pressed: p }));
                }
            }),
            focusSelf,
            allowRepeatPresses,
            excludeEnter: returnFalse,
            excludePointer: returnFalse,
            excludeSpace,
            longPressThreshold,
            onPressingChange
        },
    });
    const baseProps = { "aria-pressed": (pressed === true ? "true" : pressed === false ? "false" : undefined) };
    const buttonProps = { ...baseProps, disabled: (disabled && disabled != "soft") ? true : false, "aria-disabled": (disabled === 'soft' ? 'true' : undefined), role: role == "button" ? undefined : role };
    const divProps = { ...baseProps, tabIndex: (disabled === "hard" ? -1 : 0), role: role || "button", "aria-disabled": disabled ? "true" : undefined };
    assertEmptyObject(void1);
    assertEmptyObject(void2);
    assertEmptyObject(void3);
    assertEmptyObject(void4);
    assertEmptyObject(void5);
    return {
        pressReturn,
        props: useMergedProps(propsPress, propsRef, (tagButton == 'button' ? buttonProps : divProps)),
        refElementReturn,
    };
});

/**
 * Implements an [Accordion](https://www.w3.org/WAI/ARIA/apg/patterns/accordion/) pattern.
 *
 * @remarks Accordions can be single-select or multi-select. For multi-select accordions, give each child its own `open` prop. For single-select accordions, just have their `open` prop be `null`.
 *
 * For some reason, accordions don't require a parent element, and don't have a roving tab index, but do implement keyboard navigation.
 *
 * This makes their implementation a little bit messy. Each child individually handles keyboard navigation even though the parent component (but not element) orchestrates it.
 *
 * @compositeParams
 *
 * @hasChild {@link useAccordionSection}
 */
const useAccordion = monitored(function useAccordion({ accordionParameters: { initialIndex, localStorageKey, orientation, ...accordionParameters }, typeaheadNavigationParameters: { collator, noTypeahead, onNavigateTypeahead, typeaheadTimeout, ...typeaheadNavigationParameters }, linearNavigationParameters: { disableHomeEndKeys, navigatePastEnd, navigatePastStart, pageNavigationSize, onNavigateLinear, ...linearNavigationParameters }, managedChildrenParameters: { onAfterChildLayoutEffect, onChildrenMountChange: ocmc1, onChildrenCountChange, ...managedChildrenParameters }, ...void1 }) {
    const [localStorageIndex, setLocalStorageIndex] = usePersistentState(localStorageKey ?? null, initialIndex ?? null);
    if (localStorageIndex != null)
        initialIndex = localStorageIndex;
    const { managedChildrenReturn, context: { managedChildContext } } = useManagedChildren({
        managedChildrenParameters: {
            onChildrenMountChange: useStableCallback((m, u) => { ocmc2(undefined); ocmc1?.(m, u); }),
            onAfterChildLayoutEffect,
            onChildrenCountChange,
            ...managedChildrenParameters
        }
    });
    const { getChildren } = managedChildrenReturn;
    const isValidByChild = useCallback((c) => (c && !c.disabled && !c.untabbable), []);
    const isValidByIndex = useCallback((c) => {
        const child = getChildren().getAt(c);
        if (child) {
            return isValidByChild(child);
        }
        return false;
    }, []);
    //const { propsStable, refElementReturn: { getElement } } = useRefElement<any>({ refElementParameters })
    // Keep track of the one expanded index (if there is only one expanded index)
    const { changeIndex: changeExpandedIndexLocalOnly, getCurrentIndex: getCurrentExpandedIndex } = useChildrenFlag({
        initialIndex,
        getChildren,
        getAt: useCallback((child) => { return child.getOpenFromParent() ?? false; }, []),
        setAt: useCallback((child, open) => { return child.setOpenFromParent(open); }, []),
        isValid: isValidByChild,
        onIndexChange: null,
        closestFit: false,
        onClosestFit: null
    });
    // Also keep track of which button is currently tabbable.
    // For some reason, Accordion buttons are both individually tabbable *and* arrow-key navigatable.
    const { changeIndex: changeTabbedIndex, getCurrentIndex: getTabbedIndex, reevaluateClosestFit: ocmc2 } = useChildrenFlag({
        initialIndex,
        getChildren,
        getAt: useCallback((child) => { return child.getMostRecentlyTabbed() ?? false; }, []),
        setAt: useCallback((child, tabbed) => { return child.setMostRecentlyTabbed(tabbed); }, []),
        isValid: isValidByChild,
        closestFit: true,
        onIndexChange: useCallback((i) => {
            if (i != null) {
                const element = getChildren().getAt(i)?.getElement();
                if (element)
                    getChildren().getAt(i)?.focusSelf(element);
            }
        }, []),
        onClosestFit: useStableCallback((index) => {
            // After needing to do a closest fit, we still need to handle focus:
            if (document.activeElement == null || document.activeElement == document.body) {
                if (index != null) {
                    let backupIndex = 0;
                    let usedBackup = false;
                    let element = getChildren().getAt(index)?.getElement();
                    while (element == null && backupIndex <= getChildren().getHighestIndex()) {
                        element = getChildren().getAt(backupIndex)?.getElement();
                        ++backupIndex;
                        usedBackup = true;
                    }
                    if (usedBackup)
                        findBackupFocus(element).focus();
                    else if (element)
                        getChildren().getAt(index)?.focusSelf(element);
                }
            }
        })
    });
    const changeExpandedIndex = useStableCallback((value, r) => {
        changeExpandedIndexLocalOnly(value, r);
        setLocalStorageIndex(value);
    });
    const rovingTabIndexReturn = useMemoObject({
        getTabbableIndex: getTabbedIndex,
        setTabbableIndex: changeTabbedIndex
    });
    const { context: { typeaheadNavigationContext }, typeaheadNavigationReturn, propsStable: propsTN, ...void2 } = useTypeaheadNavigation({
        rovingTabIndexReturn,
        typeaheadNavigationParameters: {
            isValidForTypeaheadNavigation: isValidByIndex,
            collator,
            noTypeahead,
            onNavigateTypeahead,
            typeaheadTimeout,
            ...typeaheadNavigationParameters
        }
    });
    assertEmptyObject(accordionParameters);
    assertEmptyObject(linearNavigationParameters);
    assertEmptyObject(managedChildrenParameters);
    assertEmptyObject(typeaheadNavigationParameters);
    assertEmptyObject(void1);
    assertEmptyObject(void2);
    return {
        typeaheadNavigationReturn,
        context: useMemoObject({
            managedChildContext,
            typeaheadNavigationContext,
            accordionSectionContext: useMemoObject({
                changeExpandedIndex,
                changeTabbedIndex,
                getExpandedIndex: getCurrentExpandedIndex,
                getTabbedIndex: getTabbedIndex,
                stableTypeaheadProps: propsTN,
            }),
            linearNavigationParameters: useMemoObject({
                getHighestIndex: useCallback(() => getChildren().getHighestIndex(), []),
                getLowestIndex: useCallback(() => getChildren().getLowestIndex(), []),
                indexMangler: identity,
                indexDemangler: identity,
                isValidForLinearNavigation: isValidByIndex,
                arrowKeyDirection: orientation ?? "vertical",
                disableHomeEndKeys,
                navigatePastEnd,
                navigatePastStart,
                pageNavigationSize,
                onNavigateLinear,
                ...linearNavigationParameters
            }),
            rovingTabIndexReturn
        }),
        managedChildrenReturn,
        accordionReturn: useMemoObject({ changeExpandedIndex })
    };
});
/**
 * @compositeParams
 */
const useAccordionSection = monitored(function useAccordionSection({ buttonParameters: { disabled, tagButton, onPressSync: userOnPress, ...buttonParameters }, accordionSectionParameters: { open: openFromUser, bodyRole, ...void3 }, info: { index, untabbable, ...void4 }, textContentParameters: { getText, onTextContentChange: otcc1, ...void5 }, context, refElementBodyParameters, refElementHeaderButtonParameters, pressParameters: { focusSelf, ...pressParameters }, ...void1 }) {
    const [openFromParent, setOpenFromParent, getOpenFromParent] = useState(null);
    const [mostRecentlyTabbed, setMostRecentlyTabbed, getMostRecentlyTabbed] = useState(null);
    const { accordionSectionContext: { changeExpandedIndex, changeTabbedIndex: setCurrentFocusedIndex, getTabbedIndex: getCurrentFocusedIndex, stableTypeaheadProps }, linearNavigationParameters, rovingTabIndexReturn, } = context;
    const { randomIdReturn: _bodyIdReturn, propsSource: propsBodySource, propsReferencer: propsHeadReferencer } = useRandomId({ randomIdParameters: { prefix: Prefices.accordionSectionHeaderButton, otherReferencerProp: "aria-controls" } });
    const { randomIdReturn: _headIdReturn, propsSource: propsHeadSource, propsReferencer: propsBodyReferencer } = useRandomId({ randomIdParameters: { prefix: Prefices.accordionSectionBody, otherReferencerProp: "aria-labelledby" } });
    const open = ((openFromUser ?? openFromParent) ?? false);
    const { refElementReturn: refElementBodyReturn, propsStable: bodyRefElementProps } = useRefElement({ refElementParameters: refElementBodyParameters });
    const { hasCurrentFocusReturn } = useHasCurrentFocus({
        refElementReturn: { getElement: useStableCallback(() => { return refElementHeaderButtonReturn.getElement(); }) },
        hasCurrentFocusParameters: {
            onCurrentFocusedChanged: null,
            onCurrentFocusedInnerChanged: useStableCallback((focused, _prev) => {
                if (focused) {
                    setCurrentFocusedIndex(index, undefined);
                    setMostRecentlyTabbed(true);
                }
            })
        }
    });
    const { managedChildReturn: { getChildren: _getSections }, ...void9 } = useManagedChild({
        context,
        info: {
            index,
            disabled: disabled || false,
            focusSelf,
            getMostRecentlyTabbed,
            getOpenFromParent,
            untabbable,
            setMostRecentlyTabbed,
            setOpenFromParent,
            getElement: useStableCallback(() => { return refElementHeaderButtonReturn.getElement(); }),
        }
    });
    const { propsStable: propsLN, linearNavigationReturn, ...void10 } = useLinearNavigation({
        linearNavigationParameters,
        rovingTabIndexReturn,
        paginatedChildrenParameters: { paginationMin: null, paginationMax: null },
        rearrangeableChildrenReturn: { indexMangler: identity, indexDemangler: identity }
    });
    const { pressParameters: { excludeSpace, ...void11 }, 
    //textContentReturn,
    textContentParameters: { onTextContentChange: otcc2, ...void13 }, ...void2 } = useTypeaheadNavigationChild({
        info: { index },
        //refElementReturn: { getElement: useStableCallback((): HeaderButtonElement | null => refElementHeaderButtonReturn.getElement()) },
        //textContentParameters: { getText, },
        context
    });
    const { propsStable, refElementReturn } = useRefElement({ refElementParameters: { onElementChange: null, onMount: null, onUnmount: null } });
    const { textContentReturn } = useTextContent({
        refElementReturn,
        textContentParameters: { getText, onTextContentChange: useStableCallback((...a) => { otcc1?.(...a); otcc2?.(...a); }) }
    });
    const { pressReturn, props, refElementReturn: refElementHeaderButtonReturn, ...void12 } = useButton({
        buttonParameters: {
            pressed: null,
            role: "button",
            disabled,
            tagButton,
            onPressSync: (e) => {
                setCurrentFocusedIndex(index, e);
                if (getOpenFromParent())
                    changeExpandedIndex(null, e);
                else
                    changeExpandedIndex(index, e);
                userOnPress?.(e);
            },
            ...buttonParameters
        },
        pressParameters: {
            excludeSpace,
            focusSelf,
            allowRepeatPresses: false,
            longPressThreshold: null,
            onPressingChange: null,
            ...pressParameters
        },
        refElementParameters: refElementHeaderButtonParameters
    });
    assertEmptyObject(void1);
    assertEmptyObject(void2);
    assertEmptyObject(void3);
    assertEmptyObject(void4);
    assertEmptyObject(void5);
    assertEmptyObject(pressParameters);
    assertEmptyObject(buttonParameters);
    assertEmptyObject(void9);
    assertEmptyObject(void10);
    assertEmptyObject(void11);
    assertEmptyObject(void12);
    assertEmptyObject(void13);
    return {
        pressReturn,
        refElementBodyReturn,
        refElementHeaderButtonReturn,
        linearNavigationReturn,
        textContentReturn,
        hasCurrentFocusReturn,
        accordionSectionReturn: {
            mostRecentlyTabbed: !!mostRecentlyTabbed,
            expanded: open,
            focused: (getCurrentFocusedIndex() == index)
        },
        propsHeaderButton: useMergedProps(props, hasCurrentFocusReturn.propsStable, propsHeadReferencer, propsHeadSource, propsLN, stableTypeaheadProps, { "aria-expanded": (open ?? false), }),
        propsBody: useMergedProps(bodyRefElementProps, propsBodyReferencer, propsBodySource, {
            role: bodyRole,
            tabIndex: -1
        }),
        propsHeader: propsStable
    };
});

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
const useCheckboxGroup = monitored(function useCheckboxGroup({ linearNavigationParameters, rovingTabIndexParameters, checkboxGroupParameters: { orientation, ...void2 }, multiSelectionParameters, refElementParameters, typeaheadNavigationParameters, ...void1 }) {
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
const useCheckboxGroupParent = monitored(function useCheckboxGroupParent({ context: { checkboxGroupParentContext: { setControlsSetterOnParentCheckbox, setSetParentCheckboxChecked, getPercentChecked, getTotalChecked, getTotalChildren, onCheckboxGroupParentInput }, ...context }, info, hasCurrentFocusParameters, refElementParameters, textContentParameters, multiSelectionChildParameters, singleSelectionChildParameters, ...void1 }) {
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
const useCheckboxGroupChild = monitored(function useCheckboxGroupChild({ checkboxGroupChildParameters, context, info: { focusSelf, index, untabbable, ...void3 }, textContentParameters, hasCurrentFocusParameters, refElementParameters, multiSelectionChildParameters: { multiSelectionDisabled, onMultiSelectChange, ...void5 }, ...void4 }) {
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

/**
 * @compositeParams
 */
function useLabel({ randomIdInputParameters, randomIdLabelParameters, labelParameters: { tagInput, tagLabel, ariaLabel, labelPosition, onLabelClick } }) {
    const nativeHTMLBehavior = (tagInput == "input" && tagLabel == "label" && labelPosition != "wrapping");
    const synthetic = !nativeHTMLBehavior;
    const { propsInput, propsLabel, randomIdInputReturn, randomIdLabelReturn } = useRandomDualIds({
        randomIdInputParameters: { ...randomIdInputParameters, otherReferencerProp: !synthetic && labelPosition === "separate" ? "for" : null },
        randomIdLabelParameters: { ...randomIdLabelParameters, otherReferencerProp: synthetic ? "aria-labelledby" : null },
    });
    const { refElementReturn, propsStable: propsRef } = useRefElement({ refElementParameters: {} });
    if (labelPosition == 'none') {
        // When we set the aria-label, intentionally clobber element-based labels (for example, in case they don't exist).
        propsInput["aria-label"] = (ariaLabel);
        propsInput["aria-labelledby"] = undefined;
        propsLabel["for"] = undefined;
    }
    const { pressReturn, props: propsPress } = usePress({
        pressParameters: {
            excludeEnter: returnTrue,
            excludeSpace: returnTrue,
            onPressSync: onLabelClick,
            focusSelf: noop,
            allowRepeatPresses: false,
            excludePointer: null,
            longPressThreshold: null,
            onPressingChange: null
        },
        refElementReturn
    });
    return {
        pressReturn,
        propsInput,
        propsLabel: useMergedProps(propsLabel, propsRef, propsPress),
        randomIdInputReturn,
        randomIdLabelReturn,
    };
}
/**
 * Shortcut for `useLabel` that assumes we're just never working with native HTML `input` and `label` elements. So for labelling guaranteably non-native elements.
 *
 * @compositeParams
 */
const useLabelSynthetic = monitored(function useLabelSynthetic({ labelParameters: { ariaLabel, onLabelClick }, ...rest }) {
    return useLabel({
        labelParameters: {
            ariaLabel,
            labelPosition: ariaLabel == null ? "separate" : "none",
            tagInput: "div",
            tagLabel: "div",
            onLabelClick
        },
        ...rest
    });
});

function preventDefault(e) {
    e.preventDefault();
}
/**
 * Handles any component that's "checkbox-like" (checkboxes, radios, switches, etc.)
 *
 * @remarks Handles any component where there's:
 * ```md-literal
 * 1. Some kind of an on/off binary/trinary input element that needs event handlers
 * 2. Some kind of label for that input element
 * ```md-literal
 *
 * See also `useLabel` for when there's a label for a non-checkbox-like component.
 *
 * @compositeParams
 */
const useCheckboxLike = monitored(function useCheckboxLike({ labelParameters, randomIdInputParameters, randomIdLabelParameters, checkboxLikeParameters: { checked, disabled, role, ...void1 }, refElementInputReturn, refElementLabelReturn, pressParameters: { excludeSpace, longPressThreshold, onPressSync: onInputSync, ...void2 }, ...void3 }) {
    const { getElement: getInputElement } = refElementInputReturn;
    const { getElement: getLabelElement } = refElementLabelReturn;
    const { tagInput, tagLabel, labelPosition } = labelParameters;
    // onClick and onChange are a bit messy, so we need to
    // *always* make sure that the visible state is correct
    // after all the event dust settles.
    // See https://github.com/preactjs/preact/issues/2745,
    // and https://github.com/preactjs/preact/issues/1899#issuecomment-525690194
    useEffect(() => {
        const element = getInputElement();
        if (element && tagInput == "input") {
            element.indeterminate = (checked === "mixed");
            element.checked = (checked === true);
        }
    }, [tagInput, (checked ?? false)]);
    const { randomIdInputReturn, randomIdLabelReturn, propsInput, propsLabel, pressReturn } = useLabel({
        labelParameters: {
            ...labelParameters,
            onLabelClick: useStableCallback((e) => {
                if (!disabled && tagInput != "input" && tagLabel != "label" && labelPosition != "separate") {
                    focusSelf();
                    onInputSync?.(e);
                }
            })
        },
        randomIdInputParameters,
        randomIdLabelParameters,
    });
    const focusSelf = useStableCallback(() => {
        let elementToFocus = null;
        if (labelPosition == "wrapping")
            elementToFocus = getLabelElement();
        else
            elementToFocus = getInputElement();
        focus(elementToFocus);
    });
    const onClickInputSync = (labelPosition == "wrapping" ? undefined : onInputSync);
    const onClickLabelSync = onInputSync;
    const { pressReturn: pressInputReturn, props: propsPressInput } = usePress({ pressParameters: { excludeSpace, allowRepeatPresses: false, excludeEnter: null, excludePointer: null, longPressThreshold, onPressingChange: null, focusSelf, onPressSync: (disabled) ? undefined : onClickInputSync }, refElementReturn: refElementInputReturn });
    const { pressReturn: pressLabelReturn, props: propsPressLabel } = usePress({ pressParameters: { excludeSpace, allowRepeatPresses: false, excludeEnter: null, excludePointer: null, longPressThreshold, onPressingChange: null, focusSelf, onPressSync: (disabled) ? undefined : onClickLabelSync }, refElementReturn: refElementLabelReturn });
    const propsUnstableInput = {};
    const propsUnstableLabel = {};
    // Make sure that label clicks can't affect the visual state of the checkbox
    propsUnstableInput.onClick = preventDefault;
    propsUnstableLabel.onClick = preventDefault;
    propsUnstableInput.onInput = preventDefault;
    propsUnstableInput.onChange = preventDefault;
    propsUnstableInput.type = role == "radio" ? "radio" : "checkbox";
    switch (labelPosition) {
        case "none":
        case "separate": {
            if (tagInput == "input") {
                // Even in the most default input behavior, we still need to handle
                // special abstraction over checked="mixed" and disabled="soft"
                propsUnstableInput.checked = (checked === true);
                if (disabled === true || disabled === 'hard')
                    propsUnstableInput.disabled = true;
                else if (disabled == "soft")
                    propsUnstableInput["aria-disabled"] = "true";
            }
            else {
                // div inputs need their various ARIA roles and properties
                propsUnstableInput.role = role;
                propsUnstableInput.tabIndex = 0;
                propsUnstableInput["aria-checked"] = (checked ?? false);
                propsUnstableInput["aria-disabled"] = (!!disabled);
            }
            break;
        }
        case "wrapping": {
            if (tagInput == "input") {
                // For form submission and styling
                propsUnstableInput.checked = (checked === true);
                propsUnstableInput.disabled = (disabled === true);
                // Because the wrapped label handles all interactions,
                // we need to make sure this element can't be interacted with
                // even if it's an input element.
                propsUnstableInput.inert = true;
                propsUnstableInput.tabIndex = -1;
                propsUnstableInput.role = "presentation";
                propsUnstableInput["aria-hidden"] = "true";
                propsUnstableInput.onFocus = _ => focus(getLabelElement?.());
            }
            // Wrapping labels are the actual inputs that are interacted with
            // And are very similar conceptually to div inputs when separated
            propsUnstableLabel.role = role;
            propsUnstableLabel.tabIndex = 0;
            propsUnstableLabel["aria-checked"] = (checked ?? false);
            propsUnstableLabel["aria-disabled"] = (!!disabled);
            break;
        }
    }
    assertEmptyObject(void1);
    assertEmptyObject(void2);
    assertEmptyObject(void3);
    return {
        randomIdInputReturn,
        randomIdLabelReturn,
        pressInputReturn,
        pressLabelReturn,
        checkboxLikeInputReturn: { propsUnstable: propsUnstableInput },
        checkboxLikeLabelReturn: { propsUnstable: propsUnstableLabel },
        propsInput: useMergedProps(propsInput, propsUnstableInput, propsPressInput),
        propsLabel: useMergedProps(propsLabel, propsUnstableLabel, propsPressLabel),
        checkboxLikeReturn: { focusSelf },
        pressReturn
    };
});

/**
 * Implements a [Checkbox](https://www.w3.org/WAI/ARIA/apg/patterns/checkbox/) pattern.
 *
 * @compositeParams
 */
const useCheckbox = monitored(function useCheckbox({ checkboxLikeParameters: { checked, disabled, ...void2 }, checkboxParameters: { onCheckedChange, ...void4 }, labelParameters, pressParameters, ...void1 }) {
    const { tagInput, labelPosition } = labelParameters;
    const { refElementReturn: refElementInputReturn, propsStable: propsRefInput } = useRefElement({ refElementParameters: {} });
    const { refElementReturn: refElementLabelReturn, propsStable: propsRefLabel } = useRefElement({ refElementParameters: {} });
    const { propsInput, propsLabel, checkboxLikeInputReturn, checkboxLikeLabelReturn, checkboxLikeReturn, pressInputReturn, pressLabelReturn, pressReturn, randomIdInputReturn, randomIdLabelReturn, ...void3 } = useCheckboxLike({
        randomIdInputParameters: { prefix: Prefices.checkboxLikeInput },
        randomIdLabelParameters: { prefix: Prefices.checkboxLikeLabel },
        refElementInputReturn,
        refElementLabelReturn,
        checkboxLikeParameters: { role: "checkbox", checked, disabled },
        pressParameters: {
            onPressSync: useStableCallback(e => { onCheckedChange?.(enhanceEvent(e, { checked: !checked, previous: checked })); }),
            ...pressParameters,
        },
        labelParameters,
    });
    assertEmptyObject(void1);
    assertEmptyObject(void2);
    assertEmptyObject(void3);
    assertEmptyObject(void4);
    return {
        checkboxReturn: { propsUnstable: { type: (tagInput == "input" && labelPosition != "wrapping" ? "checkbox" : undefined) } },
        propsInput: useMergedProps(propsInput, propsRefInput),
        propsLabel: useMergedProps(propsLabel, propsRefLabel),
        checkboxLikeInputReturn,
        checkboxLikeLabelReturn,
        checkboxLikeReturn,
        pressInputReturn,
        pressLabelReturn,
        pressReturn,
        randomIdInputReturn,
        randomIdLabelReturn
    };
});

/**
 * Implements a [Dialog](https://www.w3.org/WAI/ARIA/apg/patterns/dialog/) pattern.
 *
 * @compositeParams
 */
const useDialog = monitored(function useDialog({ dismissParameters, escapeDismissParameters, focusTrapParameters, activeElementParameters, backdropDismissParameters, modalParameters, refElementParameters, labelParameters, ...void1 }) {
    const { propsFocusContainer, propsStablePopup, propsStableSource, refElementPopupReturn, refElementSourceReturn, ...void2 } = useModal({
        dismissParameters: { dismissActive: true, ...dismissParameters },
        backdropDismissParameters: { onDismissBackdrop: null, ...backdropDismissParameters },
        lostFocusDismissParameters: { onDismissLostFocus: null, dismissLostFocusActive: false },
        escapeDismissParameters: { onDismissEscape: null, ...escapeDismissParameters },
        modalParameters,
        refElementParameters,
        activeElementParameters,
        focusTrapParameters: { trapActive: true, onlyMoveFocus: false, ...focusTrapParameters }
    });
    const { propsInput, propsLabel, pressReturn, randomIdInputReturn: _randomIdInputReturn, randomIdLabelReturn: _randomIdLabelReturn, ...void3 } = useLabelSynthetic({
        labelParameters: {
            ...labelParameters,
            onLabelClick: useStableCallback(() => {
                const e = refElementPopupReturn.getElement();
                focusTrapParameters.focusPopup(e, () => findFirstFocusable(e));
            })
        },
        randomIdInputParameters: { prefix: Prefices.dialog },
        randomIdLabelParameters: { prefix: Prefices.dialogTitle }
    });
    assertEmptyObject(void1);
    assertEmptyObject(void2);
    assertEmptyObject(void3);
    return {
        propsFocusContainer,
        propsDialog: useMergedProps(propsStablePopup, propsInput),
        propsSource: { ...propsStableSource },
        propsTitle: propsLabel,
        pressReturn,
        refElementPopupReturn,
        refElementSourceReturn
    };
});

/**
 * Implements a drawer, which is a specific kind of [Dialog](https://www.w3.org/WAI/ARIA/apg/patterns/dialog/).
 *
 * @compositeParams
 */
const useDrawer = monitored(function useDrawer({ dismissParameters, escapeDismissParameters, focusTrapParameters, activeElementParameters, labelParameters, backdropDismissParameters, lostFocusDismissParameters, modalParameters, refElementParameters, ...void1 }) {
    const { propsFocusContainer, propsStablePopup, propsStableSource, refElementPopupReturn, refElementSourceReturn, ...void2 } = useModal({
        dismissParameters: { dismissActive: true, ...dismissParameters },
        escapeDismissParameters: { onDismissEscape: null, ...escapeDismissParameters },
        backdropDismissParameters: { onDismissBackdrop: null, ...backdropDismissParameters },
        lostFocusDismissParameters: { onDismissLostFocus: null, ...lostFocusDismissParameters },
        activeElementParameters,
        modalParameters,
        refElementParameters,
        focusTrapParameters: { onlyMoveFocus: false, ...focusTrapParameters }
    });
    const { propsInput, propsLabel, pressReturn: _pressReturn, randomIdInputReturn: _randomIdInputReturn, randomIdLabelReturn: _randomIdLabelReturn, ...void3 } = useLabelSynthetic({
        labelParameters: {
            ...labelParameters, onLabelClick: useStableCallback(() => {
                const e = refElementPopupReturn.getElement();
                focusTrapParameters.focusPopup(e, () => findFirstFocusable(e));
            })
        },
        randomIdInputParameters: { prefix: Prefices.drawer },
        randomIdLabelParameters: { prefix: Prefices.drawerTitle }
    });
    assertEmptyObject(void1);
    assertEmptyObject(void2);
    assertEmptyObject(void3);
    return {
        propsFocusContainer,
        propsDrawer: useMergedProps(propsStablePopup, propsInput),
        propsTitle: propsLabel,
        propsSource: { ...propsStableSource },
        refElementPopupReturn,
        refElementSourceReturn,
    };
});

/**
 * Implements a gridlist, effectively a [Listbox](https://www.w3.org/WAI/ARIA/apg/patterns/listbox/) enhanced with the capabilities of a [Grid](https://www.w3.org/WAI/ARIA/apg/patterns/grid/).
 *
 * @remarks A Listbox is a very limited structure, essentially being just a list with no further interactive content allowed.
 *
 * If you need a list where each list item has a menu or a button or other non-text content, a Gridlist is probably what you want.
 *
 * @compositeParams
 *
 * @hasChild {@link useGridlistRow}
 * @hasChild {@link useGridlistCell}
 */
const useGridlist = monitored(function useGridlist({ labelParameters, listboxParameters: { groupingType, ...void1 }, rovingTabIndexParameters, singleSelectionParameters, gridNavigationParameters, linearNavigationParameters, multiSelectionParameters, paginatedChildrenParameters, refElementParameters, typeaheadNavigationParameters, singleSelectionDeclarativeParameters, ...void2 }) {
    assertEmptyObject(void1);
    assertEmptyObject(void2);
    const { propsInput: propsLabelList, propsLabel: propsLabelLabel, randomIdInputReturn: { id: _gridlistId }, randomIdLabelReturn: { id: _labelId } } = useLabelSynthetic({
        labelParameters: {
            ...labelParameters,
            onLabelClick: useStableCallback(() => {
                rovingTabIndexReturn.focusSelf();
            })
        },
        randomIdInputParameters: { prefix: Prefices.gridlist },
        randomIdLabelParameters: { prefix: Prefices.gridlistLabel }
    });
    const { contextChildren, props, rovingTabIndexReturn, singleSelectionReturn: _singleSelectionReturn, ...restRet } = useCompleteGridNavigationDeclarative({
        singleSelectionDeclarativeParameters,
        rovingTabIndexParameters: { ...rovingTabIndexParameters, focusSelfParent: focus },
        gridNavigationParameters,
        linearNavigationParameters,
        multiSelectionParameters,
        paginatedChildrenParameters,
        refElementParameters,
        singleSelectionParameters,
        typeaheadNavigationParameters
    });
    let propsGridlist = useMergedProps(props, propsLabelList, { "aria-multiselectable": (contextChildren.multiSelectionContext.multiSelectionMode != "disabled" ? "true" : undefined) });
    let fullContext = useMemoObject({
        ...contextChildren,
        gridlistRowContext: useMemoObject({
        //selectionLimit
        })
    });
    if (groupingType == "group")
        propsGridlist.role = "group";
    else if (groupingType == "with-groups") {
        // Intentionally clobbering all the list navigation stuff.
        propsGridlist = { role: "grid" };
        // ...actually, context too while we're at it.
        fullContext = null;
    }
    else {
        propsGridlist.role = "grid";
    }
    return {
        contextChildren: fullContext,
        rovingTabIndexReturn,
        propsGridlist,
        propsGridlistLabel: propsLabelLabel,
        ...restRet
    };
});
/**
 * @compositeParams
 *
 */
const useGridlistRow = monitored(function useGridlistRow({ gridlistRowParameters: { selected }, linearNavigationParameters, context: cx1, info, rovingTabIndexParameters, textContentParameters, typeaheadNavigationParameters, hasCurrentFocusParameters, singleSelectionChildParameters, multiSelectionChildParameters, ...void1 }) {
    const { context: cx2, hasCurrentFocusReturn, linearNavigationReturn, managedChildReturn, managedChildrenReturn, props, rovingTabIndexChildReturn, rovingTabIndexReturn, singleSelectionChildReturn, textContentReturn, typeaheadNavigationReturn, pressParameters, multiSelectionChildReturn, refElementReturn, ...void2 } = useCompleteGridNavigationRow({
        linearNavigationParameters,
        info,
        context: cx1,
        rovingTabIndexParameters,
        textContentParameters,
        typeaheadNavigationParameters,
        hasCurrentFocusParameters,
        singleSelectionChildParameters,
        multiSelectionChildParameters,
    });
    // `selected` should only be true/false for multi-selection
    if (cx1.multiSelectionContext.multiSelectionMode == "disabled")
        console.assert(selected == null);
    props.role = "row";
    assertEmptyObject(void1);
    assertEmptyObject(void2);
    return {
        pressParameters,
        linearNavigationReturn,
        managedChildrenReturn,
        managedChildReturn,
        rovingTabIndexChildReturn,
        rovingTabIndexReturn,
        singleSelectionChildReturn,
        multiSelectionChildReturn,
        textContentReturn,
        typeaheadNavigationReturn,
        context: cx2,
        hasCurrentFocusReturn,
        refElementReturn,
        props
    };
});
/**
 * @compositeParams
 *
 */
const useGridlistCell = monitored(function useGridlistCell({ pressParameters: { onPressSync, longPressThreshold, onPressingChange, ...void1 }, ...p }) {
    const { props, refElementReturn, ...info } = useCompleteGridNavigationCell(p);
    assertEmptyObject(void1);
    const { pressReturn, props: propsPress } = usePress({
        pressParameters: { onPressSync, focusSelf: p.info.focusSelf, allowRepeatPresses: false, excludeEnter: null, excludePointer: null, excludeSpace: info.pressParameters.excludeSpace, longPressThreshold, onPressingChange },
        refElementReturn,
    });
    return {
        ...info,
        propsPress,
        propsCell: { role: "gridcell" },
        propsTabbable: props,
        refElementReturn,
        pressReturn
    };
});
/*interface UseGridlistSectionParameters {
    gridlistSectionParameters: {
        compareRows: (lhsIndex: number, rhsIndex: number) => number;
    }
    gridlistSectionContext: {

    }
}*/

/**
 * Implements a [Listbox](https://www.w3.org/WAI/ARIA/apg/patterns/listbox/) pattern.
 *
 * @remarks A listbox is a very limited widget and its items cannot contain interactive or non-text content.
 *
 * @see {@link useGridlist} for a more capable list widget.
 *
 * @compositeParams
 *
 * @hasChild {@link useListboxItem}
 */
const useListbox = monitored(function useListbox({ labelParameters, listboxParameters: { groupingType, orientation }, linearNavigationParameters, singleSelectionParameters: { singleSelectionAriaPropName, singleSelectionMode, ...void1 }, multiSelectionParameters: { multiSelectionAriaPropName, multiSelectionMode, onSelectionChange, ...void2 }, singleSelectionDeclarativeParameters: { onSingleSelectedIndexChange, singleSelectedIndex, ...void3 }, rovingTabIndexParameters, ...restParams }) {
    assertEmptyObject(void1);
    assertEmptyObject(void2);
    assertEmptyObject(void3);
    const { propsInput: propsLabelList, propsLabel: propsLabelLabel, randomIdInputReturn: { id: _inputId }, randomIdLabelReturn: { id: _labelId } } = useLabelSynthetic({
        labelParameters: {
            ...labelParameters,
            onLabelClick: useStableCallback(() => {
                rovingTabIndexReturn.focusSelf();
            })
        },
        randomIdInputParameters: { prefix: Prefices.listbox },
        randomIdLabelParameters: { prefix: Prefices.listboxLabel }
    });
    let { contextChildren, contextProcessing, props: { ...props }, rovingTabIndexReturn, singleSelectionReturn: _singleSelectionReturn, ...restRet } = useCompleteListNavigationDeclarative({
        rovingTabIndexParameters: { ...rovingTabIndexParameters, focusSelfParent: focus },
        singleSelectionDeclarativeParameters: { onSingleSelectedIndexChange, singleSelectedIndex },
        singleSelectionParameters: { singleSelectionAriaPropName: singleSelectionAriaPropName || "aria-selected", singleSelectionMode },
        linearNavigationParameters: { arrowKeyDirection: orientation, ...linearNavigationParameters },
        multiSelectionParameters: { multiSelectionAriaPropName, multiSelectionMode, onSelectionChange },
        ...restParams
    });
    if (groupingType == "group")
        props.role = "group";
    else if (groupingType == "with-groups") {
        // Intentionally clobbering all the list navigation stuff.
        props = { role: "listbox" };
        // ...actually, context too while we're at it.
        contextChildren = null;
        contextProcessing = null;
    }
    else {
        props.role = "listbox";
    }
    return {
        ...restRet,
        contextChildren,
        contextProcessing,
        rovingTabIndexReturn,
        propsListbox: useMergedProps(props, propsLabelList, { "aria-multiselectable": (multiSelectionMode != "disabled" ? true : undefined) }),
        propsListboxLabel: propsLabelLabel
    };
});
/*
export interface UseListboxChildrenParameters<TabbableChildElement extends Element, M extends UseProcessedChildInfo<TabbableChildElement>> extends    UseCompleteListNavigationChildrenParameters<TabbableChildElement, M> {
}

export const useListboxChildren = monitored(function useListboxChildren<E extends Element, M extends UseProcessedChildInfo<E>>({
    context,
    managedChildrenParameters,
    paginatedChildrenParameters,
    rearrangeableChildrenParameters,
    staggeredChildrenParameters
}: UseListboxChildrenParameters<E, M>) {
    return useCompleteListNavigationChildren<E, M>({
        context,
        managedChildrenParameters,
        paginatedChildrenParameters,
        rearrangeableChildrenParameters,
        staggeredChildrenParameters
    });
})*/
/**
 * @compositeParams
 */
const useListboxItem = monitored(function useListboxItem({ context, listboxParameters, pressParameters: { allowRepeatPresses, excludeEnter, excludePointer, longPressThreshold, onPressingChange, ...void1 }, singleSelectionChildParameters: { singleSelectionDisabled }, ...restParams }) {
    const { propsChild, propsTabbable, refElementReturn, pressParameters: { onPressSync, excludeSpace, ...void2 }, ...restRet } = useCompleteListNavigationChildDeclarative({
        context,
        singleSelectionChildParameters: { singleSelectionDisabled },
        ...restParams
    });
    assertEmptyObject(void1);
    assertEmptyObject(void2);
    assertEmptyObject(listboxParameters);
    propsChild.role = "option";
    propsChild["aria-disabled"] = singleSelectionDisabled ? "true" : undefined;
    const { pressReturn, props: propsPress } = usePress({
        refElementReturn,
        pressParameters: {
            onPressSync,
            focusSelf: restParams.info.focusSelf,
            excludeSpace,
            allowRepeatPresses,
            excludeEnter,
            excludePointer,
            longPressThreshold,
            onPressingChange
        }
    });
    return {
        pressReturn,
        refElementReturn,
        props: useMergedProps(propsChild, propsTabbable, propsPress),
        ...restRet
    };
});

/**
 * A menu surface is what handles user interaction with an interactive but transient surface (like a menu or a popup, but not something potentially modal like a dialog).
 *
 * @remarks The keyboard (etc.) interactions are shared among a lot of widgets, and the opening button has some ARIA properties that need setting.
 *
 * Related to **menus**, which are a **menubar** contained within a **menu surface**.
 *
 * @compositeParams
 */
const useMenuSurface = monitored(function useMenuSurface({ dismissParameters, focusTrapParameters, activeElementParameters, menuSurfaceParameters: { role, surfaceId, ...void1 }, modalParameters, escapeDismissParameters, ...void2 }) {
    const { refElementReturn: { getElement: getButtonElement }, propsStable: propsRefTrigger, ...void4 } = useRefElement({ refElementParameters: { onElementChange: undefined } });
    const { refElementReturn: { getElement: getMenuElement, ...void5 }, propsStable: propsRefSurface, ...void6 } = useRefElement({ refElementParameters: { onElementChange: undefined } });
    const { propsFocusContainer, propsStablePopup: propsPopup, propsStableSource: ps2, refElementPopupReturn, refElementSourceReturn } = useModal({
        dismissParameters: { dismissActive: true, ...dismissParameters },
        backdropDismissParameters: { dismissBackdropActive: true, onDismissBackdrop: null },
        lostFocusDismissParameters: { dismissLostFocusActive: true, onDismissLostFocus: null },
        escapeDismissParameters: { dismissEscapeActive: true, onDismissEscape: null, ...escapeDismissParameters },
        modalParameters,
        refElementParameters: {},
        activeElementParameters,
        focusTrapParameters: {
            onlyMoveFocus: true,
            trapActive: true,
            focusOpener: useStableCallback(() => {
                const buttonElement = getButtonElement();
                focus(buttonElement);
            }),
            ...focusTrapParameters
        }
    });
    assertEmptyObject(void1);
    assertEmptyObject(void2);
    assertEmptyObject(void4);
    assertEmptyObject(void5);
    assertEmptyObject(void6);
    const propsSurface = useMergedProps(propsRefSurface, propsPopup, propsFocusContainer);
    const propsTarget = useMergedProps({
        role,
        id: surfaceId
    });
    const propsTrigger = useMergedProps({
        "aria-expanded": (modalParameters.active),
        "aria-haspopup": role,
    }, propsRefTrigger, ps2, { "aria-controls": surfaceId });
    const propsSentinel = useFocusSentinel({
        focusSentinel: {
            sendFocusToMenu: useStableCallback(() => { return focusTrapParameters.focusPopup(getMenuElement(), () => findFirstFocusable(getMenuElement())); }),
            onClose: useStableCallback((e) => { dismissParameters.onDismiss(e, "lost-focus"); }),
            open: modalParameters.active
        }
    });
    return {
        propsSentinel,
        propsSurface,
        propsTarget,
        propsTrigger,
        refElementPopupReturn,
        refElementSourceReturn
    };
});
/**
 * A focus sentinel is a hidden but focusable element that comes at the start or end
 * of the out-of-place-focusable component that, when activated or focused over, closes the component
 * (if focused within 100ms of the open prop changing, instead of
 * closing, focusing the sentinel immediately asks it to focus itself).
 * This exists for things like menus which can have focus but also need a way to return
 * to whatever out-of-place parent they came from when naturally tabbed out of (as opposed
 * to dialogs which loop back around when tabbed out of). While mouse users can click out of a menu
 * and keyboard users can escape to close a menu, screen readers and other input methods
 * that don't use those two would become stuck.
 *
 * @compositeParams
 */
const useFocusSentinel = monitored(function useFocusSentinel({ focusSentinel: { open, onClose, sendFocusToMenu } }) {
    const getSendFocusWithinMenu = useStableGetter(sendFocusToMenu);
    const stableOnClose = useStableCallback(onClose);
    const [sentinelIsActive, setSentinelIsActive] = useState(false);
    useTimeout({ callback: () => { setSentinelIsActive(open); }, timeout: 100, triggerIndex: `${open}-${sentinelIsActive}` });
    const onFocus = sentinelIsActive ? ((e) => stableOnClose(e)) : (() => getSendFocusWithinMenu()?.());
    const onClick = (e) => stableOnClose(e);
    return {
        tabIndex: sentinelIsActive ? 0 : -1,
        onFocus,
        onClick
    };
});

/**
 * Implements a [Toolbar](https://www.w3.org/WAI/ARIA/apg/patterns/toolbar/) pattern, which is a collection of widgets in an expected order with a label (visible or hidden) and with the usual keyboard navigation stuff.
 *
 * @remarks
 * The main difference between a toolbar and a menubar is that a menubar contains purely static menuitems,
 * but a toolbar is the more general case, being able to contain anything at all.
 * A menubar is implemented as a special case of a toolbar, and a menu is implemented as a specialized menubar.
 *
 * Either way, be sure to specify the role and orientation this toolbar has (role=toolbar if you're using this as an actual toolbar).
 *
 * @compositeParams
 */
const useToolbar = monitored(function useToolbar({ linearNavigationParameters, toolbarParameters: { orientation, role, disabled }, labelParameters, rovingTabIndexParameters, singleSelectionParameters, singleSelectionDeclarativeParameters, ...listNavParameters }) {
    if (singleSelectionDeclarativeParameters.singleSelectedIndex !== undefined) {
        console.assert(singleSelectionParameters.singleSelectionMode != "disabled");
    }
    const { contextChildren, contextProcessing, props, ...listNavReturn } = useCompleteListNavigationDeclarative({
        ...listNavParameters,
        rovingTabIndexParameters: { ...rovingTabIndexParameters, untabbable: disabled, focusSelfParent: focus },
        singleSelectionDeclarativeParameters,
        paginatedChildrenParameters: { paginationMax: null, paginationMin: null },
        linearNavigationParameters: { ...linearNavigationParameters, arrowKeyDirection: orientation },
        singleSelectionParameters,
    });
    const { propsInput: propsToolbar, propsLabel, randomIdInputReturn, randomIdLabelReturn } = useLabelSynthetic({
        labelParameters: { ...labelParameters, onLabelClick: listNavReturn.rovingTabIndexReturn.focusSelf },
        randomIdInputParameters: { prefix: Prefices.toolbar },
        randomIdLabelParameters: { prefix: Prefices.toolbarLabel }
    });
    // Note: We return tabIndex=-1 (when not disabled) because some browsers (at least Firefox) seem to add role=toolbar to the tab order?
    // Probably needs a bit more digging because this feels like a bit of a blunt fix.
    return {
        contextChildren: useMemoObject({ ...contextChildren, toolbarContext: useMemoObject({}) }),
        contextProcessing,
        propsLabel,
        propsToolbar: useMergedProps({
            ...propsToolbar,
            role: role ?? undefined,
            tabIndex: disabled ? 0 : -1,
            "aria-disabled": disabled ? "true" : undefined
        }, props),
        randomIdInputReturn,
        randomIdLabelReturn,
        ...listNavReturn
    };
});
/**
 * @compositeParams
 */
const useToolbarChild = monitored(function useToolbarChild({ context, info, toolbarChildParameters: { disabledProp }, ...args }) {
    const { propsChild, propsTabbable, ...listNavReturn } = useCompleteListNavigationChild({ info, context, ...args });
    return {
        propsChild: useMergedProps(propsChild, { [disabledProp]: (args.singleSelectionChildParameters.singleSelectionDisabled || args.multiSelectionChildParameters.multiSelectionDisabled) ? true : undefined }),
        propsTabbable,
        ...listNavReturn
    };
});

/**
 * Implements a [Menubar](https://www.w3.org/WAI/ARIA/apg/patterns/menubar/) pattern.
 *
 * @remarks A menubar is identical to a toolbar, except that every item
 * in a menubar is a menuitem (or similar) and has some sort of
 * role and action when pressed besides just single selection (if applicable).
 *
 * (A toolbar child won't have a defined role, but every menubar child will)
 *
 * @compositeParams
 */
const useMenubar = monitored(function useMenubar(args) {
    const { propsToolbar: propsMenubar, ...restReturn } = useToolbar(args);
    return {
        propsMenubar,
        ...restReturn
    };
});
/**
 * @compositeParams
 */
const useMenubarChild = monitored(function useMenubarChild({ menuItemParameters: { onPress: opu, role }, pressParameters: { onPressingChange, ...void1 }, ...restParams }) {
    const focusSelf = useCallback((e) => focus(e), []);
    assertEmptyObject(void1);
    const { propsChild, propsTabbable, pressParameters: { onPressSync, excludeSpace }, ...restRet } = useToolbarChild({
        ...restParams,
        toolbarChildParameters: { disabledProp: "aria-disabled" }
    });
    const { pressReturn, props: propsPress } = usePress({
        pressParameters: {
            focusSelf,
            excludeSpace,
            onPressSync: useStableCallback((e) => {
                onPressSync?.(e);
                opu?.(e);
            }),
            allowRepeatPresses: false,
            excludeEnter: returnFalse,
            excludePointer: returnFalse,
            longPressThreshold: null,
            onPressingChange
        }, refElementReturn: restRet.refElementReturn
    });
    propsChild.role = role;
    return {
        props: useMergedProps(propsChild, propsTabbable, propsPress),
        pressReturn,
        ...restRet
    };
});

/**
 * Implements the [Menu](https://www.w3.org/WAI/ARIA/apg/patterns/menubar/) and [Menu Button](https://www.w3.org/WAI/ARIA/apg/patterns/menu-button/) patterns.
 *
 * @remarks A menu is a specialization of a menubar (something that handles navigation among a set of menuitems)
 * and a menu surface (something that handles moving focus to/from an unrelated area of the page).
 *
 * Additionally, pressing the arrow key that corresponds to the direction that the menu opens
 * in will open it.
 *
 * @compositeParams
 */
const useMenu = monitored(function useMenu({ dismissParameters, escapeDismissParameters, menuParameters: { openDirection, onOpen }, menuSurfaceParameters, activeElementParameters, toolbarParameters, modalParameters, ...restParams }) {
    const { contextChildren, propsLabel: propsButtonAsMenuLabel, propsMenubar, randomIdInputReturn, rovingTabIndexReturn, ...restRet } = useMenubar({
        toolbarParameters: { role: "menu", ...toolbarParameters },
        labelParameters: { ariaLabel: null },
        ...restParams
    });
    const onKeyDown = useStableCallback((e) => {
        const isOpen = modalParameters.active;
        if (!isOpen) {
            switch (e.key) {
                case "ArrowUp": {
                    if (openDirection == 'up') {
                        onOpen();
                        e.preventDefault();
                        e.stopPropagation();
                    }
                    break;
                }
                case "ArrowDown": {
                    if (openDirection == 'down') {
                        onOpen();
                        e.preventDefault();
                        e.stopPropagation();
                    }
                    break;
                }
                case "ArrowLeft": {
                    if (openDirection == 'left') {
                        onOpen();
                        e.preventDefault();
                        e.stopPropagation();
                    }
                    break;
                }
                case "ArrowRight": {
                    if (openDirection == 'right') {
                        onOpen();
                        e.preventDefault();
                        e.stopPropagation();
                    }
                    break;
                }
            }
        }
    });
    const { propsTarget, propsTrigger, refElementSourceReturn, ...restRet2 } = useMenuSurface({
        menuSurfaceParameters: {
            ...menuSurfaceParameters,
            surfaceId: randomIdInputReturn.id,
            role: "menu",
        },
        escapeDismissParameters,
        modalParameters,
        dismissParameters,
        activeElementParameters,
        focusTrapParameters: {
            focusPopup: () => { rovingTabIndexReturn.focusSelf(); }
        }
    });
    return {
        ...restRet,
        ...restRet2,
        context: useMemoObject({
            ...contextChildren,
            menu: useMemoObject({
                closeFromMenuItemClicked: useStableCallback((e) => {
                    dismissParameters.onDismiss(e, "item-clicked"); // TODO
                })
            })
        }),
        refElementSourceReturn,
        rovingTabIndexReturn,
        randomIdInputReturn,
        propsTarget: useMergedProps(propsTarget, propsMenubar),
        propsTrigger: useMergedProps({ onKeyDown }, propsTrigger, propsButtonAsMenuLabel),
    };
});
/**
 * @compositeParams
 */
const useMenuItem = monitored(function useMenuItem(p) {
    const ret = useMenubarChild(p);
    return {
        ...ret,
        menuItemReturn: { closeMenu: p.context.menu.closeFromMenuItemClicked }
    };
});

const NotificationProviderContext = createContext(null);
/**
 * Allows children to send notifications to a screen reader or other assistive technology.
 *
 * Please note that because some devices only check for `aria-live` regions *once* on page load,
 * they cannot be created dynamically. You must pass the ID of the **already-existing** elements to use (or the elements themselves).
 *
 * One *must* have `aria-live=polite` and one *must* have `aria-live=assertive`, but there aren't really any other requirements.
 * They shouldn't be visible, I suppose.
 *
 * @compositeParams
 *
 * @hasChild {@link useNotify}
 */
const useNotificationProvider = monitored(function useNotificationProvider({ targetAssertive, targetPolite }) {
    const { children: childrenPolite, pushChild: notifyPolite, portalElement: politeElement } = usePortalChildren({ target: targetPolite });
    const { children: childrenAssertive, pushChild: notifyAssertive, portalElement: assertiveElement } = usePortalChildren({ target: targetAssertive });
    console.assert(politeElement?.getAttribute("aria-live") == "polite");
    console.assert(assertiveElement?.getAttribute("aria-live") == "assertive");
    const notify = useCallback((mode, child) => {
        return mode == "assertive" ? notifyAssertive(child) : notifyPolite(child);
    }, [notifyAssertive, notifyPolite]);
    return {
        notify,
        context: useMemo(() => ({ notify }), [notify]),
        children: (jsxs(Fragment, { children: [childrenPolite, childrenAssertive] }))
    };
});
function useNotify() {
    return useContextWithWarning(NotificationProviderContext, "notification provider").notify;
}

/**
 * Provides the attributes and roles for a progress bar.
 *
 * @compositeParams
 */
const useProgress = monitored(function useProgress({ labelParameters, progressIndicatorParameters: { max, value, valueText, tagProgressIndicator, ...void1 }, ...void2 }) {
    const { propsInput, propsLabel, randomIdInputReturn, randomIdLabelReturn, pressReturn, ...void3 } = useLabelSynthetic({
        labelParameters: { ...labelParameters, onLabelClick: null },
        randomIdInputParameters: { prefix: Prefices.progressIndicator },
        randomIdLabelParameters: { prefix: Prefices.progressLabel }
    });
    // This isn't an input in the usual sense -- it's not tabbable.
    // TODO: Make this an option in the hook itself
    propsInput.tabIndex = -1;
    const busy = value && value != "disabled"; //value == "disabled" || !value? false : true;// (!!value);
    const disabled = (value == "disabled");
    if (typeof value != "number") {
        value = null;
        max ??= 100;
    }
    const indicatorProps = tagProgressIndicator === "progress" ?
        {
            max,
            value: (value ?? undefined),
            "aria-valuemin": 0,
            "aria-valuenow": value == null ? undefined : value,
        }
        :
            {
                "aria-valuemin": 0,
                "aria-valuemax": max == null ? undefined : max,
                "aria-valuetext": valueText == null ? undefined : `${valueText}`,
                "aria-valuenow": value == null ? undefined : value,
                role: "progressbar"
            };
    if (disabled) {
        indicatorProps["aria-hidden"] = true;
    }
    const labelProps = {
        "aria-hidden": (!busy ? "true" : undefined)
    };
    const regionProps = {
        "aria-busy": !!(busy),
        "aria-describedby": randomIdInputReturn.id
    };
    assertEmptyObject(void1);
    assertEmptyObject(void2);
    assertEmptyObject(void3);
    return {
        propsProgressIndicator: useMergedProps(indicatorProps, propsInput),
        propsProgressLabel: useMergedProps(labelProps, propsLabel),
        propsProgressRegion: regionProps,
        randomIdInputReturn,
        randomIdLabelReturn,
        pressReturn,
    };
});
/**
 * Provides props for a progress bar based on the progress of an async event handler, and notifies ATs when the operation has started/finished.
 *
 * @remarks This hook is meant to be combined with other hooks, generally wrapping around the other hook.
 * You don't actually need an entire progress bar element as long as your `notify*` parameters are good.
 *
 * @compositeParams
 */
const useProgressWithHandler = monitored(function useProgressWithHandler({ labelParameters, progressIndicatorParameters, asyncHandlerParameters: { asyncHandler, ...asyncHandlerParameters }, progressWithHandlerParameters: { forciblyPending, notifyFailure, notifyPending, notifySuccess, ...void1 }, ...void2 }) {
    assertEmptyObject(void1);
    assertEmptyObject(void2);
    const notify = useNotify();
    const asyncInfo = useAsyncHandler({
        ...asyncHandlerParameters,
        asyncHandler: (...args) => {
            try {
                let promiseOrValue = asyncHandler?.(...args);
                if (promiseOrValue && "then" in promiseOrValue) {
                    if (notifyPending)
                        notify("assertive", notifyPending);
                    return promiseOrValue.then((value) => {
                        if (notifySuccess)
                            notify("assertive", notifySuccess);
                        return value;
                    });
                }
                return promiseOrValue;
            }
            catch (ex) {
                if (notifyFailure)
                    notify("assertive", notifyFailure);
                throw ex;
            }
        }
    });
    const { propsProgressIndicator, propsProgressLabel, propsProgressRegion } = useProgress({
        labelParameters,
        progressIndicatorParameters: {
            max: 1,
            value: (forciblyPending || asyncInfo.pending) ? "indeterminate" : "disabled",
            valueText: null,
            ...progressIndicatorParameters
        },
    });
    return {
        propsProgressIndicator,
        propsProgressLabel,
        propsProgressRegion,
        asyncHandlerReturn: asyncInfo
    };
});

/**
 * Implements a [Radio Group](https://www.w3.org/WAI/ARIA/apg/patterns/radio/) pattern.
 *
 * @remarks Which radio is the selected one is controlled by the `selectedValue` parameter on the parent.
 *
 * @compositeParams
 *
 * @hasChild {@link useRadio}
 */
const useRadioGroup = monitored(function useRadioGroup({ labelParameters, radioGroupParameters: { name, selectedValue, onSelectedValueChange, ...void2 }, rovingTabIndexParameters, linearNavigationParameters, typeaheadNavigationParameters, refElementParameters, singleSelectionParameters: { singleSelectionMode, ...void4 }, ...void1 }) {
    // TODO: The way this is structured causes 1 extra re-render on the parent
    // when the selectedValue changes to selectedIndex.
    const [selectedIndex, setSelectedIndex] = useState(null);
    const nameToIndex = useRef(new Map());
    const indexToName = useRef(new Map());
    useEffect(() => {
        setSelectedIndex(nameToIndex.current.get(selectedValue) ?? null);
    }, [selectedValue]);
    const { propsInput: propsGroup1, propsLabel } = useLabelSynthetic({
        labelParameters: {
            onLabelClick: useStableCallback(() => {
                rovingTabIndexReturn.focusSelf();
            }),
            ...labelParameters
        },
        randomIdLabelParameters: { prefix: Prefices.radioGroupLabel, },
        randomIdInputParameters: { prefix: Prefices.radioGroup }
    });
    const { contextChildren, props: propsGroup2, singleSelectionReturn, multiSelectionReturn: _multiSelectionReturn, managedChildrenReturn, rovingTabIndexReturn, linearNavigationReturn, rearrangeableChildrenReturn, typeaheadNavigationReturn, childrenHaveFocusReturn, contextProcessing: _contextProcessing, refElementReturn, ...void3 } = useCompleteListNavigationDeclarative({
        singleSelectionDeclarativeParameters: {
            singleSelectedIndex: selectedIndex,
            onSingleSelectedIndexChange: useStableCallback((e) => {
                setSelectedIndex(e[EventDetail].selectedIndex);
                onSelectedValueChange?.(enhanceEvent(e, { selectedValue: indexToName.current.get(e[EventDetail].selectedIndex) }));
            }),
        },
        singleSelectionParameters: { singleSelectionMode, singleSelectionAriaPropName: null },
        multiSelectionParameters: { multiSelectionMode: "disabled", multiSelectionAriaPropName: null, onSelectionChange: null },
        paginatedChildrenParameters: { paginationMin: null, paginationMax: null },
        rovingTabIndexParameters: { ...rovingTabIndexParameters, focusSelfParent: focus },
        linearNavigationParameters,
        typeaheadNavigationParameters,
        refElementParameters
    });
    const propsRadioGroup = useMergedProps(propsGroup1, propsGroup2, { role: "radiogroup" });
    assertEmptyObject(void1);
    assertEmptyObject(void2);
    assertEmptyObject(void3);
    assertEmptyObject(void4);
    return {
        propsRadioGroup,
        propsRadioGroupLabel: propsLabel,
        rovingTabIndexReturn,
        linearNavigationReturn,
        refElementReturn,
        managedChildrenReturn,
        radioGroupReturn: { selectedIndex },
        singleSelectionReturn,
        rearrangeableChildrenReturn,
        typeaheadNavigationReturn,
        childrenHaveFocusReturn,
        context: useMemo(() => ({
            ...contextChildren,
            radioContext: { name, indexToName: indexToName.current, nameToIndex: nameToIndex.current }
        }), [name]),
    };
});
/**
 * Implements a single radio button, as part of a radio group.
 *
 * @compositeParams
 */
const useRadio = monitored(function useRadio({ radioParameters: { value, ...void5 }, checkboxLikeParameters: { disabled, ...void4 }, labelParameters, info, context, textContentParameters, pressParameters: { longPressThreshold, ...void3 }, hasCurrentFocusParameters, refElementParameters, ...void1 }) {
    const index = info.index;
    const { name, indexToName, nameToIndex } = context.radioContext;
    const { tagInput, labelPosition } = labelParameters;
    const { pressParameters: { excludeSpace, onPressSync }, singleSelectionChildReturn, propsTabbable, propsChild: listNavigationSingleSelectionChildProps, ...listNavRet } = useCompleteListNavigationChildDeclarative({
        info: {
            focusSelf: useStableCallback((_e) => { return checkboxLikeRet.checkboxLikeReturn.focusSelf(); }),
            ...info
        },
        context,
        textContentParameters,
        hasCurrentFocusParameters,
        refElementParameters,
        singleSelectionChildParameters: { singleSelectionDisabled: !!disabled },
        multiSelectionChildParameters: { multiSelectionDisabled: true },
        multiSelectionChildDeclarativeParameters: { multiSelected: false, onMultiSelectedChange: null }
    });
    assertEmptyObject(void1);
    assertEmptyObject(void3);
    assertEmptyObject(void4);
    assertEmptyObject(void5);
    const { singleSelected: checked } = singleSelectionChildReturn;
    const { refElementReturn: refElementInputReturn, propsStable: propsRefInput } = useRefElement({ refElementParameters: {} });
    const { refElementReturn: refElementLabelReturn, propsStable: propsRefLabel } = useRefElement({ refElementParameters: {} });
    const { propsInput, propsLabel, ...checkboxLikeRet } = useCheckboxLike({
        checkboxLikeParameters: {
            checked: (checked ?? false),
            disabled,
            role: "radio"
        },
        pressParameters: { excludeSpace, longPressThreshold, onPressSync },
        labelParameters,
        randomIdInputParameters: { prefix: Prefices.radio },
        randomIdLabelParameters: { prefix: Prefices.radioLabel },
        refElementInputReturn,
        refElementLabelReturn
    });
    useLayoutEffect(() => {
        nameToIndex.set(value, index);
        indexToName.set(index, value);
        return () => {
            nameToIndex.delete(value);
            indexToName.delete(index);
        };
    }, [value, index]);
    if (tagInput == "input") {
        propsInput.name = name;
        propsInput.checked = (checked ?? false);
        propsInput.type = "radio";
    }
    else {
        propsInput["aria-checked"] = (checked ?? false);
    }
    const propsIfInputHandlesFocus = useMergedProps(listNavigationSingleSelectionChildProps, propsTabbable, propsInput);
    const propsInput2 = useMergedProps(propsRefInput, labelPosition != "wrapping" ? propsIfInputHandlesFocus : propsInput);
    const propsIfLabelHandlesFocus = useMergedProps(listNavigationSingleSelectionChildProps, propsTabbable, propsLabel);
    const propsLabel2 = useMergedProps(propsRefLabel, labelPosition == "wrapping" ? propsIfLabelHandlesFocus : propsLabel);
    const ret = {
        propsInput: propsInput2,
        propsLabel: propsLabel2,
        singleSelectionChildReturn,
        ...checkboxLikeRet,
        ...listNavRet
    };
    return ret;
});

/**
 * Implements a [Slider](https://www.w3.org/WAI/ARIA/apg/patterns/slider-multithumb/) pattern.
 *
 * @compositeParams
 *
 * @hasChild {@link useSliderThumb}
 */
const useSlider = monitored(function useSlider({ sliderParameters: { max, min }, managedChildrenParameters }) {
    const { context, managedChildrenReturn } = useManagedChildren({ managedChildrenParameters });
    const baseIdRef = useRef(null);
    if (baseIdRef.current === null)
        baseIdRef.current = generateRandomId(Prefices.sliderThumb);
    return {
        context: useMemo(() => ({
            ...context,
            sliderContext: {
                min,
                max,
                baseId: baseIdRef.current
            }
        }), [min, max]),
        managedChildrenReturn
    };
});
/**
 * @compositeParams
 */
const useSliderThumb = monitored(function useSliderThumb({ sliderThumbParameters: { tag, value, max: maxOverride, min: minOverride, valueText, label, onValueChange, ...void2 }, info, context: { sliderContext: { max: maxParent, min: minParent }, ...context }, ...void1 }) {
    const { managedChildReturn } = useManagedChild({ info, context });
    const min = (minOverride ?? minParent);
    const max = (maxOverride ?? maxParent);
    let newProps = (tag == "input" ?
        { min, max, value, type: "range" } :
        { "aria-valuemax": max, "aria-valuemin": min, "aria-valuenow": value });
    newProps = { ...newProps, "aria-label": label, "aria-valuetext": valueText ?? undefined, style: { "--range-value": `${value}`, "--range-value-text": `${valueText}` } };
    if (tag == "input") {
        newProps.onInput = e => {
            onValueChange?.(enhanceEvent(e, { value: e.currentTarget.valueAsNumber }));
        };
    }
    else {
        throw new Error("Unimplemented");
    }
    assertEmptyObject(void1);
    assertEmptyObject(void2);
    return {
        sliderThumbReturn: {
            min,
            max
        },
        managedChildReturn,
        propsSliderThumb: newProps
    };
});

/**
 * Creates a sortable data table in a [Grid](https://www.w3.org/WAI/ARIA/apg/patterns/grid/) pattern.
 *
 * @remarks Note that in many cases this is overkill. If you don't need sorting and navigation between cells of interactive content, then you can just use a regular &lt;table&gt;
 *
 * @compositeParams
 *
 * @hasChild {@link useTableSection}
 * @hasChild {@link useTableRow}
 * @hasChild {@link useTableCell}
 */
const useTable = monitored(function useTable({ labelParameters, tableParameters: { tagTable }, singleSelectionParameters: { singleSelectionMode, ...void1 }, multiSelectionParameters: { multiSelectionMode, ...void2 }, ...void3 }) {
    assertEmptyObject(void1);
    assertEmptyObject(void2);
    assertEmptyObject(void3);
    // This is the function that, when called, sorts the body's children.
    // It's here to coordinate among multiple table sections (i.e. the head sorts the body, but they're siblings to each other, so we need to take care that)
    // TODO: This...should probably be useManagedChildren
    const [getSortBody, setSortBody] = usePassiveState(null, returnNull);
    const [_sortDirection, setSortDirection, getSortDirection] = useState("ascending");
    const [_sortColumn, setSortColumn, getSortColumn] = useState(null);
    /*const updateSortDirection = useCallback((column: number) => {
        const { column: currentColumn, direction: currentDirection } = getSortColumn();
        const next = { column, direction: column != currentColumn ? "ascending" : (currentDirection == "ascending" ? "descending" : "ascending") } as const;
        setSortColumn(next);
        return next;
    }, []);
    const sortByColumn = useCallback((column: number) => {
        const next = updateSortDirection(column);
        getSortBody()?.();
        return next;
    }, [])*/
    const sortByColumn = useCallback((column) => {
        let nextSortDirection = getSortDirection();
        let nextSortIndex = getSortColumn();
        if (column == nextSortIndex) {
            setSortDirection(nextSortDirection = (nextSortDirection == "ascending" ? "descending" : "ascending"));
        }
        else {
            setSortColumn(nextSortIndex = column);
        }
        const sortBody = getSortBody();
        console.assert(!!sortBody);
        if (!sortBody) {
            /* eslint-disable no-debugger */
            debugger;
            console.error("An attempt was made to sort a table with a head but no body");
        }
        else {
            sortBody();
        }
        return { column: nextSortIndex, direction: nextSortDirection };
    }, []);
    const { propsInput: propsLabelList, propsLabel: propsLabelLabel } = useLabelSynthetic({
        labelParameters: { ...labelParameters, onLabelClick: null },
        randomIdInputParameters: { prefix: Prefices.table },
        randomIdLabelParameters: { prefix: Prefices.tableLabel }
    });
    return {
        propsTable: useMergedProps({ role: tagTable == "table" ? undefined : "grid", "aria-multiselectable": (multiSelectionMode != "disabled" ? "true" : undefined) }, propsLabelList),
        propsLabel: propsLabelLabel,
        context: useMemoObject({
            tableContext: useMemoObject({
                sortByColumn,
                setSortBodyFunction: setSortBody,
                getCurrentSortColumn: getSortColumn,
                getCurrentSortDirection: getSortDirection,
                singleSelectionMode,
                multiSelectionMode
            })
        })
    };
});
/*
function fuzzyCompare(lhs: any, rhs: any): number {
    if (lhs === rhs)
        return 0;

    if (lhs == null || rhs == null) {
        if (lhs == null && rhs != null)
            return -1;
        if (lhs != null && rhs == null)
            return 1;
        if (lhs === null && rhs === undefined)
            return 1;
        if (lhs === undefined && rhs === null)
            return -1;
    }
    else {
        if (lhs == rhs)
            return 0;
        if (lhs < rhs)
            return -1;
        return 1;
    }

    return 0;

}*/
const naturalSectionTypes = new Set(["thead", "tbody", "tfoot"]);
/**
 * @compositeParams
 */
const useTableSection = monitored(function useTableSection({ linearNavigationParameters, rovingTabIndexParameters, singleSelectionParameters, multiSelectionParameters, gridNavigationParameters, paginatedChildrenParameters, tableSectionParameters: { tagTableSection, location }, typeaheadNavigationParameters, contextChildren: { tableContext, ...void3 }, refElementParameters, ...void1 }) {
    const { childrenHaveFocusReturn, contextChildren, contextProcessing, refElementReturn, linearNavigationReturn, managedChildrenReturn, props: { ...props }, rovingTabIndexReturn, singleSelectionReturn, multiSelectionReturn, typeaheadNavigationReturn, rearrangeableChildrenReturn, ...void2 } = useCompleteGridNavigation({
        linearNavigationParameters,
        rovingTabIndexParameters: { ...rovingTabIndexParameters, focusSelfParent: focus },
        singleSelectionParameters: { ...singleSelectionParameters, singleSelectionMode: tableContext.singleSelectionMode },
        multiSelectionParameters: { ...multiSelectionParameters, multiSelectionMode: tableContext.multiSelectionMode },
        paginatedChildrenParameters,
        typeaheadNavigationParameters,
        gridNavigationParameters,
        refElementParameters,
    });
    if (!naturalSectionTypes.has(tagTableSection)) {
        props.role = "rowgroup";
    }
    useEffect(() => {
        if (location == "body") {
            tableContext.setSortBodyFunction(() => {
                return () => { rearrangeableChildrenReturn.sort(tableContext.getCurrentSortDirection()); };
            });
        }
    });
    assertEmptyObject(void1);
    assertEmptyObject(void2);
    assertEmptyObject(void3);
    return {
        childrenHaveFocusReturn,
        contextChildren: {
            ...contextChildren,
            tableContext
        },
        contextProcessing,
        refElementReturn,
        linearNavigationReturn,
        managedChildrenReturn,
        rovingTabIndexReturn,
        singleSelectionReturn,
        multiSelectionReturn,
        rearrangeableChildrenReturn,
        typeaheadNavigationReturn,
        propsTableSection: props
    };
});
/**
 * @compositeParams
 */
const useTableRow = monitored(function useTableRow({ info, textContentParameters, context: cx1, tableRowParameters: { selected }, linearNavigationParameters, rovingTabIndexParameters, hasCurrentFocusParameters, singleSelectionChildParameters, multiSelectionChildParameters, ...void1 }) {
    assertEmptyObject(void1);
    const { context: cx2, managedChildrenReturn, props: { ...props }, ...restRet
    // props
     } = useCompleteGridNavigationRow({
        textContentParameters,
        hasCurrentFocusParameters,
        context: { ...cx1 },
        info,
        linearNavigationParameters,
        rovingTabIndexParameters,
        singleSelectionChildParameters,
        multiSelectionChildParameters,
        // gridNavigationSelectionSortableRowParameters: { getSortableColumnIndex: cx1.tableContext.getCurrentSortColumn },
        typeaheadNavigationParameters: { noTypeahead: true, collator: null, typeaheadTimeout: Infinity, onNavigateTypeahead: null }
    });
    props.role = "row";
    // TODO: Unneeded?
    if (selected) {
        switch (cx1.singleSelectionContext.singleSelectionAriaPropName) {
            case "aria-checked":
            case "aria-pressed":
            case "aria-selected":
                props[cx1.singleSelectionContext.singleSelectionAriaPropName ?? "aria-selected"] = "true";
                break;
            default: {
                console.assert(false, cx1.singleSelectionContext.singleSelectionAriaPropName + " is not valid for multi-select -- prefer checked, selected, or pressed");
            }
        }
    }
    return {
        context: useMemoObject({
            ...cx2,
            tableContext: cx1.tableContext
        }),
        props,
        managedChildrenReturn,
        ...restRet
    };
});
/**
 * @compositeParams
 */
const useTableCell = monitored(function useTableCell({ tableCellParameters: { tagTableCell }, info, ...p }) {
    const { props, ...ret } = useCompleteGridNavigationCell({
        info,
        ...p
    });
    return {
        propsFocus: props,
        propsCell: { role: (tagTableCell != "th" && tagTableCell != "td") ? "gridcell" : undefined },
        ...ret,
        tableCellReturn: {
            sortByThisColumn: useStableCallback(() => {
                return p.context.tableContext.sortByColumn(info.index);
            }, [])
        }
    };
});

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
const useTabs = monitored(function useTabs({ labelParameters, linearNavigationParameters, singleSelectionParameters: { initiallySingleSelectedIndex, onSingleSelectedIndexChange: ssi, singleSelectionMode, ...singleSelectionParameters }, tabsParameters: { orientation, role, localStorageKey }, rovingTabIndexParameters, ...restParams }) {
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
const useTab = monitored(function useTab({ info: { focusSelf: focusSelfParent, index, untabbable, ...info }, textContentParameters, pressParameters: { focusSelf: focusSelfChild, longPressThreshold, onPressingChange, ...void2 }, context, hasCurrentFocusParameters, refElementParameters, singleSelectionChildParameters, ...void3 }) {
    const { propsChild: listNavigationSingleSelectionChildProps, propsTabbable, pressParameters: { onPressSync, excludeSpace, ...void1 }, refElementReturn, ...listNavRet2 } = useCompleteListNavigationChild({
        context,
        info: { index, focusSelf: focusSelfParent, untabbable, ...info },
        textContentParameters,
        hasCurrentFocusParameters,
        refElementParameters,
        singleSelectionChildParameters,
        multiSelectionChildParameters: { initiallyMultiSelected: false, multiSelectionDisabled: true, onMultiSelectChange: null },
    });
    const { pressReturn, props: propsPressStable } = usePress({
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
const useTabPanel = monitored(function useTabPanel({ info, context }) {
    const { index } = info;
    const { tabPanelContext: { getVisibleIndex: g, getPanelId, getTabId } } = context;
    const [lastKnownVisibleIndex, setLastKnownVisibleIndex, getLastKnownVisibleIndex] = useState(g());
    const [isVisible, setIsVisible, _getIsVisible] = useState(null);
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

/**
 * Allows any descendent children to push a visible (and/or audible) message to the user's attention.
 *
 * @compositeParams
 *
 * @hasChild {@link useToast}
 */
const useToasts = monitored(function useToasts({ managedChildrenParameters: { onChildrenMountChange: ocmu, onAfterChildLayoutEffect }, toastsParameters: { visibleCount } }) {
    // Normally, this does just look like [0, 1, 2, 3], etc
    // so it could be just an index to the current toast,
    // but if we dismiss toasts out of order, it's [0, 2, 3] or something.
    // So just keep track of it all in a big ol', there's only one of these on a page anyway,
    // and if you're pusing 10000 toasts at once an Array<number> isn't going to be your bottleneck.
    const currentIndexQueue = useRef([]);
    const getMaxVisibleCount = useStableGetter(visibleCount);
    const nextIndexToStartAt = useRef(0);
    const { refElementReturn: { getElement }, propsStable } = useRefElement({ refElementParameters: {} });
    const { context, managedChildrenReturn, ..._childInfo } = useManagedChildren({ managedChildrenParameters: { onAfterChildLayoutEffect, onChildrenMountChange: ocmu } });
    const { getChildren: getToastQueue } = managedChildrenReturn;
    const toastQueue = getToastQueue();
    // When a toast is shown or hidden, always make sure that we're showing all the toasts that we should be.
    const showHighestPriorityToast = useCallback(() => {
        const max = Math.min(getMaxVisibleCount(), currentIndexQueue.current.length);
        let start = nextIndexToStartAt.current;
        for (let i = start; i < max; ++i) {
            const highestPriorityToast = toastQueue.getAt(currentIndexQueue.current[i]);
            console.assert(!!highestPriorityToast);
            highestPriorityToast?.show();
        }
        nextIndexToStartAt.current = max;
    }, []);
    // Any time a new toast mounts, update our bottommostToastIndex to point to it if necessary
    // ("necessary" just meaning if it's the first toast ever or all prior toasts have been dismissed)
    const onAnyToastMounted = useCallback((toastIndex) => {
        currentIndexQueue.current.push(toastIndex);
        toastQueue.getAt(toastIndex)?.setNumberAheadOfMe(currentIndexQueue.current.length - 1);
        showHighestPriorityToast();
    }, []);
    // Any time a toast is dismissed, update our bottommostToastIndex to point to the next toast in the queue, if one exists.
    const onAnyToastDismissed = useCallback((_index) => {
        // When we dismiss a toast, remove it from the "to-display" queue by actually splicing it out of the array.
        // Then notify each toast of its change in position within that queue to keep the two in sync.
        const removalIndex = currentIndexQueue.current.findIndex(i => i == _index);
        // For all toasts that have already been dismissed, shift them even further back by one to "make space" 
        // (they're removed from the queue but this is the negative index they would have if we kept negatives in the queue)
        // for the newly-dismissed toast.
        toastQueue.forEach(c => {
            c.setNumberAheadOfMe(prev => {
                if (prev < 0)
                    return prev - 1;
                else
                    return prev;
            });
        });
        // Let this toast know that it's now the most recently dismissed toast
        toastQueue.getAt(_index)?.setNumberAheadOfMe(-1);
        // Notify all toasts waiting behind this one in the queue that they've moved up one slot
        toastQueue.forEach(c => {
            c.setNumberAheadOfMe(prev => {
                if (prev > removalIndex)
                    return prev - 1;
                else
                    return prev;
            });
        });
        // Actually modify the queue itself
        currentIndexQueue.current.splice(removalIndex, 1);
        // And after all that, make sure that we're showing any toasts that have been waiting in the queue
        showHighestPriorityToast();
    }, []);
    const [_mouseOver2, setMouseOver, _getMouseOver] = useState(false);
    useGlobalHandler(document, "pointermove", e => {
        const mouseOver = (e.target != null && e.target instanceof Node && (getElement()?.contains(e.target) || getElement() == e.target));
        setMouseOver(mouseOver);
    });
    const toastContext = {
        onAnyToastDismissed,
        getMaxVisibleCount,
        onAnyToastMounted
    };
    const props = useMergedProps(useMergedProps(propsStable, { class: "toasts-container" }));
    return {
        context: {
            ...context,
            toastContext
        },
        managedChildrenReturn,
        props
    };
});
/**
 * @compositeParams
 */
const useToast = monitored(function useToast({ toastParameters: { politeness, timeout, children }, info: { index, ...info }, context }) {
    const { getMaxVisibleCount, onAnyToastDismissed, onAnyToastMounted } = context.toastContext;
    const [numberOfToastsAheadOfUs, setNumberOfToastsAheadOfUs] = useState(Infinity);
    const getIndex = useStableGetter(index);
    const [dismissed2, setDismissed2, getDismissed2] = useState(false);
    const [showing2, setShowing2, getShowing2] = useState(false);
    const [triggerIndex, setTriggerIndex] = useState(1);
    const notify = useNotify();
    const dismiss = useCallback(() => {
        if (!getDismissed2())
            onAnyToastDismissed(getIndex());
        setDismissed2(true);
        setShowing2(false);
    }, []);
    const show = useStableCallback(() => {
        notify(politeness ?? "polite", jsx("p", { children: children }));
        setShowing2(true);
    });
    useEffect(() => {
        if (!getDismissed2() && !getShowing2()) {
            if (numberOfToastsAheadOfUs >= 0 && numberOfToastsAheadOfUs < getMaxVisibleCount()) {
                show();
            }
        }
    }, [numberOfToastsAheadOfUs]);
    const focus2 = useCallback(() => {
        const element = getElement();
        if (element) {
            const firstFocusable = findFirstFocusable(element);
            focus(firstFocusable);
        }
    }, []);
    const { managedChildReturn } = useManagedChild({ info: { index, focus: focus2, setNumberAheadOfMe: setNumberOfToastsAheadOfUs, show, ...info }, context });
    const resetDismissTimer = useCallback(() => {
        setTriggerIndex(i => ++i);
    }, []);
    useEffect(() => {
        onAnyToastMounted(index);
    }, []);
    const dismissTimeoutKey = (timeout == null || numberOfToastsAheadOfUs != 0) ? null : isFinite(timeout) ? timeout : timeout > 0 ? null : 0;
    useTimeout({
        timeout: dismissTimeoutKey,
        callback: () => {
            if (showing2)
                dismiss();
        },
        triggerIndex: showing2 ? triggerIndex : false
    });
    const { refElementReturn: { getElement }, propsStable } = useRefElement({ refElementParameters: {} });
    return {
        toastReturn: {
            dismissed: dismissed2,
            showing: showing2,
            numberOfToastsAheadOfUs,
            dismiss,
            resetDismissTimer
        },
        managedChildReturn,
        props: propsStable
    };
});

// Intentionally (?) unused
typeof window == "undefined" ? null : matchMedia("(any-hover: hover)");
// Track if the current input has hover capabilities
// (This is responsive to whatever the "primary" device is)
let mediaQuery = typeof window == "undefined" ? null : matchMedia("(hover: hover)");
let pageCurrentlyUsingHover = mediaQuery?.matches || false;
let allCallbacks = new Set();
if (mediaQuery)
    mediaQuery.onchange = ev => { pageCurrentlyUsingHover = ev.matches; allCallbacks.forEach(fn => fn(ev.matches)); };
//setTimeout(() => alert(`Hover: ${pageCurrentlyUsingHover.toString()}`), 1000);
/*
//let delayedAlert2 = debounce(delayedAlert3, 4000);
let messages = new Set<string>();
const delayedAlert2 = debounce(function delayedAlert3() {
    alert([...messages].join("\n"));
    messages.clear();
}, 2500);

function delayedAlert(message: string) {
    messages.add(message);
    delayedAlert2();
}*/
/**
 * Implements a [Tooltip](https://www.w3.org/WAI/ARIA/apg/patterns/tooltip/) pattern.
 *
 * @remarks Tooltips are remarkably under-specified, so some of this is speculative.
 *
 * @compositeParams
 */
const useTooltip = monitored(function useTooltip({ tooltipParameters: { onStatus, tooltipSemanticType, hoverDelay, usesLongPress }, activeElementParameters, escapeDismissParameters, pressReturn: { longPress, ...void2 }, ...void1 }) {
    useGlobalHandler(window, "mouseout", useCallback((e) => {
        if (e.relatedTarget == null)
            onHoverChanged(false, "popup");
    }, []));
    const [usesHover, setUsesHover] = useState(pageCurrentlyUsingHover);
    useEffect(() => {
        if (mediaQuery) {
            let handler = (ev) => { setUsesHover(ev.matches); };
            mediaQuery.addEventListener("change", handler, { passive: true });
            return () => mediaQuery.removeEventListener("change", handler, {});
        }
    });
    /**
     * Whether the hover/focus-popup/trigger state we have results in us showing this tooltip.
     *
     * This is used purely to attach global event handlers that should only be there when the tooltip is open (e.g. `useDismiss`)
     */
    const [openLocal, setOpenLocal] = useState(false);
    const [getState, setState] = usePassiveState(useStableCallback((nextState, _prevState) => {
        //delayedAlert(`${prevState ?? "null"} to ${nextState}`);
        if (hoverTimeoutHandle.current) {
            clearTimeout(hoverTimeoutHandle.current);
            hoverTimeoutHandle.current = null;
        }
        if (nextState == null)
            inputState.current = null;
        switch (nextState) {
            case "focused-popup":
            case "focused-trigger":
                onStatus("focus");
                break;
            case "hovering-popup":
            case "hovering-trigger":
                onStatus("hover");
                break;
            default:
                onStatus(null);
                break;
        }
        setOpenLocal(!!nextState);
    }), returnNull);
    let { propsReferencer: propsTrigger, propsSource: propsPopup } = useRandomId({ randomIdParameters: { prefix: Prefices.tooltip, otherReferencerProp: (tooltipSemanticType == "description" ? "aria-describedby" : "aria-labelledby") } });
    const { refElementReturn: { getElement: getTriggerElement }, propsStable: triggerRefProps } = useRefElement({ refElementParameters: {} });
    const { refElementReturn: { getElement: getPopupElement }, propsStable: popupRefProps } = useRefElement({ refElementParameters: {} });
    let inputState = useRef(null);
    let hoverTimeoutHandle = useRef(null);
    const onHoverChanged = useStableCallback((hovering, which) => {
        if (hoverTimeoutHandle.current)
            clearTimeout(hoverTimeoutHandle.current);
        //delayedAlert(`onHoverChanged(${hovering.toString()}, ${which}) with inputState == ${inputState.current}`)
        // Ignore emulated cursor hover events when we're not even using a pointer
        // if ()
        //    return;
        if (hovering) {
            inputState.current = "hover";
            if (usesLongPress && !usesHover) ;
            else {
                hoverTimeoutHandle.current = setTimeout(() => {
                    setState(`hovering-${which}`);
                    hoverTimeoutHandle.current = null;
                }, hoverDelay || 0);
            }
        }
        else {
            setState(null);
            inputState.current = null;
        }
    });
    const onCurrentFocusedInnerChanged = useCallback((focused, which) => {
        // delayedAlert(`onFocusedChanged(${focused.toString()}, ${which}) with inputState == ${inputState.current}`)
        if (inputState.current != "hover") {
            if (focused) {
                inputState.current = 'focus';
                setState(`focused-${which}`);
            }
            else {
                setState(null);
                inputState.current = null;
            }
        }
        else {
            setState(null);
            inputState.current = null;
        }
    }, []);
    const onTriggerCurrentFocusedInnerChanged = useCallback((focused) => onCurrentFocusedInnerChanged(focused, "trigger"), [onCurrentFocusedInnerChanged]);
    const onPopupCurrentFocusedInnerChanged = useCallback((focused) => onCurrentFocusedInnerChanged(focused, "popup"), [onCurrentFocusedInnerChanged]);
    const { hasCurrentFocusReturn: triggerFocusReturn } = useHasCurrentFocus({ hasCurrentFocusParameters: { onCurrentFocusedChanged: null, onCurrentFocusedInnerChanged: onTriggerCurrentFocusedInnerChanged }, refElementReturn: { getElement: getTriggerElement } });
    const { hasCurrentFocusReturn: popupFocusReturn } = useHasCurrentFocus({ hasCurrentFocusParameters: { onCurrentFocusedChanged: null, onCurrentFocusedInnerChanged: onPopupCurrentFocusedInnerChanged }, refElementReturn: { getElement: getPopupElement } });
    const { refElementPopupReturn, refElementSourceReturn, propsStablePopup, propsStableSource } = useDismiss({
        backdropDismissParameters: {
            dismissBackdropActive: true, // we handle this ourselves, but for mobile devices with a sorta virtualish cursor this helps. 
            onDismissBackdrop: null
        },
        lostFocusDismissParameters: {
            dismissLostFocusActive: false, // and it interferes with our own focus logic (or, our onClose there does)
            onDismissLostFocus: null,
        },
        dismissParameters: {
            dismissActive: openLocal,
            onDismiss: useStableCallback((_e, _reason) => {
                setState(null);
            }),
        },
        activeElementParameters,
        escapeDismissParameters: {
            dismissEscapeActive: true,
            onDismissEscape: null,
            ...escapeDismissParameters
        },
    });
    const otherPopupProps = {
        onPointerEnter: useCallback(() => { onHoverChanged(true, "popup"); }, []),
        //onPointerLeave: useCallback(() => { onHoverChanged(false, "popup") }, [])
    };
    const otherTriggerProps = {
        onPointerEnter: useCallback(() => { onHoverChanged(true, "trigger"); }, []),
        onPointerUp: useCallback(() => { onHoverChanged(false, "trigger"); }, []),
        onClick: useStableCallback((e) => {
            // When we click/tap the trigger,
            // if we can't hover it
            if (!usesHover) {
                // We can't hover the trigger we just tapped
                if (usesLongPress) ;
                else {
                    // Presumably static text content or something else -- focus it so the tooltip will show
                    onCurrentFocusedInnerChanged(true, "trigger");
                    focus(e.currentTarget);
                }
            }
            else {
                // We're using a mouse or other hovering pointer (so not a stylus/touchscreen)
                onHoverChanged(true, "trigger");
            }
            /*onHoverChanged(true, "trigger");
            if (e.currentTarget && "focus" in e.currentTarget)
            focus(e.currentTarget as HTMLElement); */
        }),
        //onPointerLeave: useCallback(() => { onHoverChanged(false, "trigger") }, [])
    };
    useGlobalHandler(document, "pointermove", !openLocal ? null : (e => {
        const popupElement = getPopupElement();
        const triggerElement = getTriggerElement();
        const mouseElement = e.target;
        let overPopup = (popupElement?.contains(mouseElement));
        let overTrigger = (triggerElement?.contains(mouseElement));
        if (!overPopup && !overTrigger && inputState.current == 'hover') {
            onHoverChanged(false, "popup");
        }
    }), { capture: true, passive: true });
    assertEmptyObject(void1);
    assertEmptyObject(void2);
    useEffect(() => {
        // When a long press starts, if we use those and we're on a touch device,
        // then show the tooltip by focusing the trigger.
        if (usesLongPress && !usesHover) {
            if (longPress) {
                inputState.current = null;
                onCurrentFocusedInnerChanged(true, "trigger");
                focus(getTriggerElement());
            }
        }
    }, [longPress, usesHover, usesLongPress]);
    return {
        refElementPopupReturn,
        refElementSourceReturn,
        propsPopup: useMergedProps(popupRefProps, propsPopup, popupFocusReturn.propsStable, { role: "tooltip" }, otherPopupProps, propsStablePopup),
        propsTrigger: useMergedProps(triggerRefProps, propsTrigger, triggerFocusReturn.propsStable, { onClick: useStableCallback(e => focus(e.currentTarget)) }, otherTriggerProps, propsStableSource),
        tooltipReturn: {
            getState,
            //stateIsFocus,
            //stateIsMouse
        }
    };
});

/**
 * Almost all components are built in the exact same way from their implementing hook -- this just sets all of that up.
 *
 * @param imperativeHandle The `imperativeHandle` prop all component props have that hook a `ref` up to the hook's return values
 * @param render The `render` prop all component props have that turns a hook's return values into JSX to render
 * @param Context Optional. Some hooks return a `context` object, and if so, it will be rendered with the `Context` object provided.
 * @param info The return type of the hook.
 * @returns
 */
function useComponent(imperativeHandle, render, Context, info) {
    useImperativeHandle(imperativeHandle, () => info);
    if (Context) {
        return jsx(Context.Provider, { value: info.context, children: render(info) });
    }
    else {
        return render(info);
    }
}
function useComponentC(imperativeHandle, render, ContextChildren, ContextProcessing, info) {
    useImperativeHandle(imperativeHandle, () => info);
    let ch = render(info);
    if (ContextChildren) {
        ch = jsx(ContextChildren.Provider, { value: info.contextChildren, children: ch });
    }
    if (ContextProcessing) {
        ch = jsx(ContextProcessing.Provider, { value: info.contextProcessing, children: ch });
    }
    return ch;
}
const ContextDefaults = {
    collator: createContext(null),
    pageNavigationSize: createContext(0.1),
    typeaheadTimeout: createContext(1000),
    focusSelf: createContext((e) => e.focus?.()),
    noTypeahead: createContext(false),
    getIndex: createContext(v => v.props.index),
    disableArrowKeys: createContext(false),
    disableHomeEndKeys: createContext(false),
    getWindow: createContext(() => globalThis.window),
    getDocument: createContext(() => globalThis.document),
    focusOpener: createContext((e) => focus(e)),
    getText: createContext((e) => (e?.textContent ?? "")),
    singleSelectionMode: createContext("activation"),
    multiSelectionMode: createContext("activation"),
};
function useDefault(context, userValue) {
    const defaultValue = useContext(ContextDefaults[context]);
    return userValue ?? defaultValue;
}
const ParentDepthContext = createContext(0);
function useDefaultRenderPortal({ portalId, children }) {
    const portalRef = useRef(null);
    portalRef.current ??= document.getElementById(portalId);
    if (portalRef.current)
        return createPortal(children, portalRef.current);
    else
        return children;
}

const AccordionSectionContext = createContext(null);
const Accordion = memo(function Accordion({ disableHomeEndKeys, initialIndex, onAfterChildLayoutEffect, onChildrenMountChange, navigatePastEnd, navigatePastStart, pageNavigationSize, localStorageKey, collator, noTypeahead, typeaheadTimeout, onChildrenCountChange, render, imperativeHandle, orientation, onNavigateLinear, onNavigateTypeahead, ...void1 }) {
    assertEmptyObject(void1);
    return (useComponent(imperativeHandle, render, AccordionSectionContext, useAccordion({
        accordionParameters: { orientation, initialIndex, localStorageKey: localStorageKey ?? null },
        typeaheadNavigationParameters: {
            onNavigateTypeahead,
            collator: useDefault("collator", collator),
            noTypeahead: useDefault("noTypeahead", noTypeahead),
            typeaheadTimeout: useDefault("typeaheadTimeout", typeaheadTimeout)
        },
        linearNavigationParameters: {
            onNavigateLinear,
            disableHomeEndKeys: useDefault("disableHomeEndKeys", disableHomeEndKeys),
            navigatePastEnd: navigatePastEnd ?? "wrap",
            navigatePastStart: navigatePastStart ?? "wrap",
            pageNavigationSize: useDefault("pageNavigationSize", pageNavigationSize)
        },
        managedChildrenParameters: { onAfterChildLayoutEffect, onChildrenMountChange, onChildrenCountChange },
    })));
});
const AccordionSection = memo((function AccordionSection({ open, index, tagButton, disabled, bodyRole, untabbable, getText, imperativeHandle, onPressSync, focusSelf, render, info, onElementChange, onMount, onUnmount, onTextContentChange, ...void1 }) {
    assertEmptyObject(void1);
    return useComponent(imperativeHandle, render, null, useAccordionSection({
        buttonParameters: { disabled: disabled ?? false, tagButton, onPressSync: onPressSync },
        pressParameters: { focusSelf: useDefault("focusSelf", focusSelf) },
        accordionSectionParameters: { open, bodyRole: bodyRole ?? "region" },
        info: { index, untabbable: untabbable || false, ...info },
        refElementHeaderButtonParameters: { onElementChange, onMount, onUnmount },
        refElementBodyParameters: {},
        textContentParameters: { getText: useDefault("getText", getText), onTextContentChange },
        context: useContextWithWarning(AccordionSectionContext, "accordion section"),
    }));
}));

const Button = memo((function Button({ tagButton, pressed, render, disabled, onElementChange, onMount, onUnmount, allowRepeatPresses, longPressThreshold, excludeSpace, onPressingChange, onPressSync, focusSelf, role, imperativeHandle, ...void1 }) {
    assertEmptyObject(void1);
    return useComponent(imperativeHandle, render, null, useButton({
        buttonParameters: { onPressSync, role: role, tagButton, pressed, disabled },
        pressParameters: { longPressThreshold, allowRepeatPresses, excludeSpace, onPressingChange, focusSelf: useDefault("focusSelf", focusSelf) },
        refElementParameters: { onElementChange, onMount, onUnmount },
    }));
}));

const UseCheckboxGroupChildContext = createContext(null);
const CheckboxGroup = memo((function CheckboxGroup({ render, collator, disableHomeEndKeys, noTypeahead, typeaheadTimeout, onTabbableIndexChange, untabbable, navigatePastEnd, navigatePastStart, pageNavigationSize, orientation, onNavigateLinear, onNavigateTypeahead, imperativeHandle, onElementChange, onMount, onUnmount, multiSelectionAriaPropName, multiSelectionMode, onSelectionChange, ...void1 }) {
    assertEmptyObject(void1);
    return useComponent(imperativeHandle, render, UseCheckboxGroupChildContext, useCheckboxGroup({
        linearNavigationParameters: {
            onNavigateLinear,
            navigatePastEnd: navigatePastEnd ?? "wrap",
            navigatePastStart: navigatePastStart ?? "wrap",
            disableHomeEndKeys: useDefault("disableHomeEndKeys", disableHomeEndKeys),
            pageNavigationSize: useDefault("pageNavigationSize", pageNavigationSize)
        },
        checkboxGroupParameters: {
            orientation: orientation ?? "vertical"
        },
        rovingTabIndexParameters: {
            onTabbableIndexChange,
            untabbable: untabbable || false
        },
        typeaheadNavigationParameters: {
            onNavigateTypeahead,
            collator: useDefault("collator", collator),
            noTypeahead: useDefault("noTypeahead", noTypeahead),
            typeaheadTimeout: useDefault("typeaheadTimeout", typeaheadTimeout)
        },
        refElementParameters: { onElementChange, onMount, onUnmount },
        multiSelectionParameters: { multiSelectionAriaPropName, multiSelectionMode: multiSelectionMode || "activation", onSelectionChange }
    }));
}));
const CheckboxGroupParent = memo((function CheckboxGroupParent({ render, index, focusSelf, untabbable, imperativeHandle, getText, onCurrentFocusedChanged, onCurrentFocusedInnerChanged, onElementChange, onMount, onUnmount, initiallyMultiSelected, multiSelectionDisabled, onMultiSelectChange, singleSelectionDisabled, onTextContentChange, 
//info,
..._rest }) {
    const context = useContextWithWarning(UseCheckboxGroupChildContext, "checkbox group");
    console.assert(context != null, `This CheckboxGroupParent is not contained within a CheckboxGroup`);
    return (useComponent(imperativeHandle, render, null, useCheckboxGroupParent({
        info: {
            index,
            untabbable: untabbable || false,
            focusSelf,
        },
        context,
        textContentParameters: {
            getText: useDefault("getText", getText),
            onTextContentChange
        },
        hasCurrentFocusParameters: { onCurrentFocusedChanged, onCurrentFocusedInnerChanged },
        refElementParameters: { onElementChange, onMount, onUnmount },
        multiSelectionChildParameters: { multiSelectionDisabled: multiSelectionDisabled || false, initiallyMultiSelected: initiallyMultiSelected || false, onMultiSelectChange },
        singleSelectionChildParameters: { singleSelectionDisabled: singleSelectionDisabled || false }
    })));
}));
const CheckboxGroupChild = memo((function CheckboxGroupChild({ index, render, checked, onChangeFromParent, untabbable, getText, focusSelf, 
//info,
imperativeHandle, onCurrentFocusedChanged, onCurrentFocusedInnerChanged, onElementChange, onMount, onUnmount, multiSelectionDisabled, onMultiSelectChange, onTextContentChange, ...void1 }) {
    assertEmptyObject(void1);
    return useComponent(imperativeHandle, render, null, useCheckboxGroupChild({
        checkboxGroupChildParameters: {
            checked: checked,
            onChangeFromParent
        },
        info: {
            index,
            untabbable: untabbable || false,
            focusSelf
        },
        textContentParameters: {
            getText: useDefault("getText", getText),
            onTextContentChange,
        },
        context: useContextWithWarning(UseCheckboxGroupChildContext, "checkbox group"),
        hasCurrentFocusParameters: {
            onCurrentFocusedChanged,
            onCurrentFocusedInnerChanged
        },
        refElementParameters: {
            onElementChange,
            onMount,
            onUnmount
        },
        multiSelectionChildParameters: { multiSelectionDisabled: multiSelectionDisabled || false, onMultiSelectChange },
    }));
}));

function defaultRenderCheckboxLike({ labelPosition, tagInput, tagLabel, makePropsInput, makePropsLabel }) {
    return function (info) {
        const inputProps = (makePropsInput(info));
        const { children, ...labelProps } = (makePropsLabel(info));
        if (labelPosition == "wrapping") {
            const input = createElement(tagInput, inputProps);
            const label = createElement(tagLabel, { ...labelProps, children: jsxs(Fragment, { children: [input, children] }) });
            return (jsx(Fragment, { children: label }));
        }
        else if (labelPosition == "separate") {
            const input = createElement(tagInput, inputProps);
            const label = createElement(tagLabel, { children, ...labelProps });
            return (jsxs(Fragment, { children: [input, label] }));
        }
        else {
            console.assert(!!inputProps["aria-label"]);
            return createElement(tagInput, inputProps);
        }
    };
}
const Checkbox = memo((function Checkbox({ checked, disabled, tagLabel, labelPosition, tagInput, ariaLabel, longPressThreshold, excludeSpace, imperativeHandle, render, onCheckedChange, ...void1 }) {
    assertEmptyObject(void1);
    return useComponent(imperativeHandle, render, null, useCheckbox({
        checkboxLikeParameters: { checked, disabled: disabled ?? false },
        labelParameters: { ariaLabel: ariaLabel, labelPosition, tagInput, tagLabel },
        pressParameters: { excludeSpace, longPressThreshold },
        checkboxParameters: { onCheckedChange }
    }));
}));

const Dialog = memo((function Dialog({ active, onDismiss, dismissBackdropActive, dismissEscapeActive, focusOpener, getDocument, imperativeHandle, parentDepth, onActiveElementChange, onLastActiveElementChange, onWindowFocusedChange, focusPopup, ariaLabel, onElementChange, onMount, onUnmount, render }) {
    const defaultParentDepth = useContext(ParentDepthContext);
    let myDepth = (parentDepth ?? defaultParentDepth) + 1;
    return (jsx(ParentDepthContext.Provider, { value: myDepth, children: useComponent(imperativeHandle, render, null, useDialog({
            dismissParameters: {
                onDismiss,
            },
            backdropDismissParameters: { dismissBackdropActive: dismissBackdropActive || false },
            //lostFocusDismissParameters: { dismissLostFocusActive: dismissLostFocusActive || false },
            modalParameters: { active },
            refElementParameters: { onElementChange, onMount, onUnmount },
            escapeDismissParameters: {
                dismissEscapeActive: dismissEscapeActive || false,
                parentDepth: parentDepth ?? defaultParentDepth
            },
            activeElementParameters: {
                getDocument: useDefault("getDocument", getDocument),
                onActiveElementChange,
                onLastActiveElementChange,
                onWindowFocusedChange
            },
            focusTrapParameters: {
                focusOpener: useDefault("focusOpener", focusOpener),
                focusPopup
            },
            labelParameters: { ariaLabel }
        })) }));
}));

const Drawer = memo((function Drawer({ active, onDismiss, dismissBackdropActive, dismissEscapeActive, dismissLostFocusActive, onElementChange, onMount, onUnmount, focusOpener, focusPopup, getDocument, imperativeHandle, onActiveElementChange, onLastActiveElementChange, onWindowFocusedChange, parentDepth, render, trapActive, ariaLabel, ...void1 }) {
    const defaultParentDepth = useContext(ParentDepthContext);
    let myDepth = (parentDepth ?? defaultParentDepth) + 1;
    assertEmptyObject(void1);
    return (jsx(ParentDepthContext.Provider, { value: myDepth, children: useComponent(imperativeHandle, render, null, useDrawer({
            dismissParameters: {
                onDismiss,
            },
            backdropDismissParameters: { dismissBackdropActive: dismissBackdropActive || false },
            lostFocusDismissParameters: { dismissLostFocusActive: dismissLostFocusActive || false },
            modalParameters: { active },
            refElementParameters: { onElementChange, onMount, onUnmount },
            escapeDismissParameters: {
                parentDepth: parentDepth ?? defaultParentDepth,
                dismissEscapeActive: dismissEscapeActive || false
            },
            activeElementParameters: {
                getDocument: useDefault("getDocument", getDocument),
                onActiveElementChange,
                onLastActiveElementChange,
                onWindowFocusedChange
            },
            focusTrapParameters: {
                focusOpener: useDefault("focusOpener", focusOpener),
                focusPopup,
                trapActive: trapActive ?? false
            },
            labelParameters: { ariaLabel }
        })) }));
}));

const GridlistContext = createContext(null);
const GridlistRowContext = createContext(null);
const GridlistRowsContext = createContext(null);
const ProcessedChildContext = createContext(null);
const Gridlist = memo((function Gridlist({ collator, disableHomeEndKeys, noTypeahead, onTabbableIndexChange, groupingType, typeaheadTimeout, singleSelectedIndex, navigatePastEnd, navigatePastStart, onSingleSelectedIndexChange, pageNavigationSize, untabbable, paginationMax, paginationMin, onTabbableColumnChange, ariaLabel, onNavigateLinear, onNavigateTypeahead, imperativeHandle, onElementChange, onMount, onUnmount, render, multiSelectionAriaPropName, multiSelectionMode, onSelectionChange, singleSelectionAriaPropName, singleSelectionMode, initiallyTabbableColumn, ...void1 }) {
    assertEmptyObject(void1);
    return useComponentC(imperativeHandle, render, GridlistContext, GridlistRowsContext, useGridlist({
        linearNavigationParameters: {
            onNavigateLinear,
            disableHomeEndKeys: useDefault("disableHomeEndKeys", disableHomeEndKeys),
            navigatePastEnd: (navigatePastEnd ?? "wrap"),
            navigatePastStart: (navigatePastStart ?? "wrap"),
            pageNavigationSize: useDefault("pageNavigationSize", pageNavigationSize),
        },
        rovingTabIndexParameters: {
            onTabbableIndexChange,
            untabbable: untabbable || false
        },
        typeaheadNavigationParameters: {
            onNavigateTypeahead,
            collator: useDefault("collator", collator),
            noTypeahead: useDefault("noTypeahead", noTypeahead),
            typeaheadTimeout: useDefault("typeaheadTimeout", typeaheadTimeout),
        },
        listboxParameters: {
            groupingType
        },
        gridNavigationParameters: {
            onTabbableColumnChange,
            initiallyTabbableColumn: initiallyTabbableColumn || 0
        },
        labelParameters: {
            ariaLabel
        },
        paginatedChildrenParameters: {
            paginationMax,
            paginationMin
        },
        singleSelectionParameters: { singleSelectionAriaPropName, singleSelectionMode: singleSelectionMode || "disabled" },
        multiSelectionParameters: { multiSelectionAriaPropName, multiSelectionMode: multiSelectionMode || "disabled", onSelectionChange },
        singleSelectionDeclarativeParameters: { onSingleSelectedIndexChange, singleSelectedIndex },
        refElementParameters: { onElementChange, onMount, onUnmount }
    }));
}));
const GridlistRows = memo((function GridlistRows({ render, adjust, children, compare, getIndex, imperativeHandle, onAfterChildLayoutEffect, onChildrenCountChange, onChildrenMountChange, onRearranged, paginationMax, paginationMin, staggered }) {
    return useComponent(imperativeHandle, render, ProcessedChildContext, useCompleteGridNavigationRows({
        context: useContext(GridlistRowsContext),
        managedChildrenParameters: {
            onAfterChildLayoutEffect,
            onChildrenCountChange,
            onChildrenMountChange
        },
        paginatedChildrenParameters: {
            paginationMax,
            paginationMin
        },
        rearrangeableChildrenParameters: {
            adjust,
            children,
            compare,
            getIndex: useDefault("getIndex", getIndex),
            onRearranged
        },
        staggeredChildrenParameters: {
            staggered: staggered || false
        }
    }));
}));
const GridlistRow = memo((function GridlistRow({ index, render, imperativeHandle, onElementChange: oec1, onMount, onUnmount, getText, untabbable, onCurrentFocusedChanged, onCurrentFocusedInnerChanged, multiSelectionDisabled, singleSelectionDisabled, collator, initiallyMultiSelected, initiallyTabbedIndex, navigatePastEnd, navigatePastStart, noTypeahead, onMultiSelectChange, onNavigateTypeahead, onTabbableIndexChange, selected, typeaheadTimeout, onTextContentChange, ...void1 }) {
    assertEmptyObject(void1);
    const { propsStable, refElementReturn } = useRefElement({
        refElementParameters: {
            onElementChange: useStableCallback((...a) => { oec1?.(...a); oec2?.(...a); }),
            onMount,
            onUnmount
        }
    });
    const { props, refElementParameters: { onElementChange: oec2 }, ...i2 } = useProcessedChild({
        context: useContextWithWarning(ProcessedChildContext, "ListboxChildren"),
        info: { index }
    });
    const { managedChildReturn: { getChildren }, paginatedChildReturn: { hideBecausePaginated, parentIsPaginated }, staggeredChildReturn: { hideBecauseStaggered, parentIsStaggered, childUseEffect } } = i2;
    const props2 = useMergedProps(props, propsStable);
    const processedGridlistRowReturn = {
        hidden: true,
        ...i2,
        props: props2,
        refElementReturn,
        managedChildReturn: { getChildren }
    };
    const retIfHidden = render(processedGridlistRowReturn);
    if (hideBecausePaginated || hideBecauseStaggered) {
        return retIfHidden;
    }
    else {
        return (jsx(GridlistRowInner, { index: index, render: render, collator: collator, initiallyMultiSelected: initiallyMultiSelected, initiallyTabbedIndex: initiallyTabbedIndex, navigatePastEnd: navigatePastEnd, navigatePastStart: navigatePastStart, noTypeahead: noTypeahead, onMultiSelectChange: onMultiSelectChange, onNavigateTypeahead: onNavigateTypeahead, onTabbableIndexChange: onTabbableIndexChange, selected: selected, typeaheadTimeout: typeaheadTimeout, getText: getText, imperativeHandle: imperativeHandle, multiSelectionDisabled: multiSelectionDisabled, onCurrentFocusedChanged: onCurrentFocusedChanged, onCurrentFocusedInnerChanged: onCurrentFocusedInnerChanged, singleSelectionDisabled: singleSelectionDisabled, untabbable: untabbable, hideBecausePaginated: hideBecausePaginated, hideBecauseStaggered: hideBecauseStaggered, parentIsPaginated: parentIsPaginated, parentIsStaggered: parentIsStaggered, childUseEffect: childUseEffect, onTextContentChange: onTextContentChange, props: props2, ...void1 }));
    }
}));
const GridlistRowInner = memo((function GridlistRowInner({ index, collator, untabbable, navigatePastEnd, navigatePastStart, noTypeahead, onTabbableIndexChange, selected, typeaheadTimeout, getText, render, initiallyTabbedIndex, onNavigateTypeahead, imperativeHandle, onCurrentFocusedChanged, onCurrentFocusedInnerChanged, initiallyMultiSelected, multiSelectionDisabled, onMultiSelectChange, singleSelectionDisabled, childUseEffect, hideBecausePaginated, hideBecauseStaggered, parentIsPaginated, parentIsStaggered, props: props1, onTextContentChange, ...void1 }) {
    assertEmptyObject(void1);
    const { context, hasCurrentFocusReturn, linearNavigationReturn, managedChildReturn, managedChildrenReturn, multiSelectionChildReturn, pressParameters, props: props2, rovingTabIndexChildReturn, rovingTabIndexReturn, refElementReturn, singleSelectionChildReturn, textContentReturn, typeaheadNavigationReturn, } = useGridlistRow({
        info: {
            index,
            untabbable: untabbable || false
            //...uinfo
        },
        context: useContextWithWarning(GridlistContext, "gridlist"),
        gridlistRowParameters: { selected },
        textContentParameters: { getText: useDefault("getText", getText), onTextContentChange },
        linearNavigationParameters: {
            navigatePastEnd: navigatePastEnd ?? "wrap",
            navigatePastStart: navigatePastStart ?? "wrap"
        },
        hasCurrentFocusParameters: {
            onCurrentFocusedChanged,
            onCurrentFocusedInnerChanged,
        },
        rovingTabIndexParameters: {
            onTabbableIndexChange,
            initiallyTabbedIndex,
            untabbable: untabbable || false,
        },
        typeaheadNavigationParameters: {
            onNavigateTypeahead,
            collator: useDefault("collator", collator),
            noTypeahead: useDefault("noTypeahead", noTypeahead),
            typeaheadTimeout: useDefault("typeaheadTimeout", typeaheadTimeout)
        },
        singleSelectionChildParameters: { singleSelectionDisabled: singleSelectionDisabled || false },
        multiSelectionChildParameters: { multiSelectionDisabled: multiSelectionDisabled || false, initiallyMultiSelected: initiallyMultiSelected || false, onMultiSelectChange }
    });
    useEffect(childUseEffect, [childUseEffect]);
    return useComponent(imperativeHandle, render, GridlistRowContext, {
        context,
        hasCurrentFocusReturn,
        linearNavigationReturn,
        managedChildrenReturn,
        managedChildReturn,
        multiSelectionChildReturn,
        pressParameters,
        props: useMergedProps(props1, props2),
        rovingTabIndexChildReturn,
        rovingTabIndexReturn,
        singleSelectionChildReturn,
        textContentReturn,
        typeaheadNavigationReturn,
        refElementReturn,
        paginatedChildReturn: { hideBecausePaginated, parentIsPaginated },
        staggeredChildReturn: { hideBecauseStaggered, parentIsStaggered },
    });
}));
const GridlistChild = memo((function GridlistChild({ index, colSpan, focusSelf, untabbable, getText, onPressSync, longPressThreshold, onPressingChange, render, imperativeHandle, onTextContentChange, info: subInfo }) {
    const context = useContextWithWarning(GridlistRowContext, "gridlist row");
    console.assert(context != null, `This GridlistChild is not contained within a GridlistRow that is contained within a Gridlist`);
    const defaultFocusSelf = useStableCallback((e) => { focus(e); }, []);
    const info = useGridlistCell({
        info: {
            index: index,
            untabbable: untabbable || false,
            focusSelf: (focusSelf ?? defaultFocusSelf),
            ...subInfo
        },
        context,
        gridNavigationCellParameters: { colSpan: colSpan ?? 1 },
        textContentParameters: { getText: useDefault("getText", getText), onTextContentChange },
        pressParameters: { onPressSync, longPressThreshold, onPressingChange }
    });
    useImperativeHandle(imperativeHandle, () => info);
    return render(info);
}));

const HeadingLevelContext = createContext(0);
/**
 * Utility component that creates a heading `h1`, `h2`, `h3`, etc.
 *
 * Which one is chosen depends on a parent `Heading`, with the root-most `Heading`
 * starting at 1, or the value specified by `HeadingReset`.
 *
 * Specify the actual contents of the heading with the `heading` prop.
 *
 */
const Heading = memo(function Heading({ children, heading, tag, ...props }) {
    const headingLevelBeforeUs = useContext(HeadingLevelContext);
    const newHeadingLevel = headingLevelBeforeUs + 1;
    if (tag == null) {
        if (newHeadingLevel <= 6) {
            tag = `h${newHeadingLevel}`;
        }
        else {
            tag = 'div';
        }
    }
    return (jsx(Fragment, { children: jsxs(HeadingReset, { newLevel: headingLevelBeforeUs + 1, children: [createElement(tag, props, heading), children] }) }));
});
/**
 * Set the value that the next `Heading` will use as its base.
 *
 * Minimum of 1.
 */
const HeadingReset = memo(function HeadingReset({ newLevel, children }) {
    return (jsx(HeadingLevelContext.Provider, { value: newLevel - 1, children: children }));
});

const ListboxContext = createContext(null);
const ListboxChildrenContext = createContext(null);
const ListboxChildContext = createContext(null);
const ListboxGroupContext = createContext(null);
const GroupedListbox = memo((function GroupedListbox({ ariaLabel, orientation, render, onElementChange, onMount, onUnmount }) {
    const info = useListbox({
        labelParameters: { ariaLabel },
        linearNavigationParameters: {
            navigatePastEnd: "passthrough",
            navigatePastStart: "passthrough",
            disableHomeEndKeys: true,
            pageNavigationSize: 1,
            onNavigateLinear: null
        },
        paginatedChildrenParameters: { paginationMax: null, paginationMin: null },
        listboxParameters: { groupingType: "with-groups", orientation: orientation ?? "vertical" },
        rovingTabIndexParameters: { onTabbableIndexChange: null, untabbable: false },
        typeaheadNavigationParameters: {
            collator: null,
            noTypeahead: true,
            typeaheadTimeout: Infinity,
            onNavigateTypeahead: null
        },
        refElementParameters: { onElementChange, onMount, onUnmount },
        singleSelectionParameters: { singleSelectionMode: "disabled", singleSelectionAriaPropName: null },
        multiSelectionParameters: { multiSelectionMode: "disabled", multiSelectionAriaPropName: null, onSelectionChange: null },
        singleSelectionDeclarativeParameters: { onSingleSelectedIndexChange: null, singleSelectedIndex: null }
    });
    return (jsx(ListboxGroupContext.Provider, { value: info, children: render(info) }));
}));
const Listbox = memo((function Listbox({ ariaLabel, collator, disableHomeEndKeys, singleSelectedIndex, navigatePastEnd, navigatePastStart, noTypeahead, onSingleSelectedIndexChange, onTabbableIndexChange, pageNavigationSize, untabbable, typeaheadTimeout, orientation, onNavigateLinear, onNavigateTypeahead, onElementChange, onMount, onUnmount, render, imperativeHandle, singleSelectionAriaPropName, singleSelectionMode, multiSelectionAriaPropName, multiSelectionMode, onSelectionChange, paginationMax, paginationMin, ...void1 }) {
    const listboxGroupInfo = useContext(ListboxGroupContext);
    assertEmptyObject(void1);
    return useComponentC(imperativeHandle, render, ListboxContext, ListboxChildrenContext, useListbox({
        labelParameters: { ariaLabel },
        linearNavigationParameters: {
            onNavigateLinear,
            navigatePastEnd: navigatePastEnd ?? "wrap",
            navigatePastStart: navigatePastStart ?? "wrap",
            disableHomeEndKeys: useDefault("disableHomeEndKeys", disableHomeEndKeys),
            pageNavigationSize: useDefault("pageNavigationSize", pageNavigationSize)
        },
        paginatedChildrenParameters: {
            paginationMax,
            paginationMin
        },
        listboxParameters: {
            groupingType: listboxGroupInfo == null ? "without-groups" : "group",
            orientation: orientation ?? "vertical"
        },
        rovingTabIndexParameters: {
            onTabbableIndexChange,
            untabbable: untabbable ?? false
        },
        typeaheadNavigationParameters: {
            onNavigateTypeahead,
            collator: useDefault("collator", collator),
            noTypeahead: useDefault("noTypeahead", noTypeahead),
            typeaheadTimeout: useDefault("typeaheadTimeout", typeaheadTimeout)
        },
        refElementParameters: { onElementChange, onMount, onUnmount },
        singleSelectionParameters: { singleSelectionAriaPropName, singleSelectionMode: singleSelectionMode || "disabled" },
        singleSelectionDeclarativeParameters: { onSingleSelectedIndexChange, singleSelectedIndex },
        multiSelectionParameters: { multiSelectionAriaPropName, multiSelectionMode: multiSelectionMode || "disabled", onSelectionChange }
    }));
}));
const ListboxChildren = memo((function ListboxChildren({ children, render, adjust, compare, getIndex, imperativeHandle, onAfterChildLayoutEffect, onChildrenCountChange, onChildrenMountChange, onRearranged, paginationMax, paginationMin, staggered }) {
    const r = useCompleteListNavigationChildren({
        context: useContext(ListboxChildrenContext),
        managedChildrenParameters: {
            onAfterChildLayoutEffect,
            onChildrenCountChange,
            onChildrenMountChange
        },
        paginatedChildrenParameters: {
            paginationMax,
            paginationMin
        },
        rearrangeableChildrenParameters: {
            adjust,
            children,
            compare,
            getIndex: useDefault("getIndex", getIndex),
            onRearranged
        },
        staggeredChildrenParameters: {
            staggered: staggered || false
        }
    });
    return useComponent(imperativeHandle, render, ListboxChildContext, r);
}));
const ListboxItem = memo((function ListboxItemOuter({ index, render, imperativeHandle, onElementChange: oec1, onMount, onUnmount, getText, untabbable, allowRepeatPresses, excludeEnter, excludePointer, longPressThreshold, onPressingChange, onCurrentFocusedChanged, onCurrentFocusedInnerChanged, focusSelf, multiSelectionDisabled, singleSelectionDisabled, multiSelected, onMultiSelectedChange, onTextContentChange, ...void1 }) {
    const context = useContextWithWarning(ListboxContext, "listbox");
    console.assert(context != null, `This ListboxItem is not contained within a Listbox`);
    assertEmptyObject(void1);
    const { propsStable, refElementReturn } = useRefElement({
        refElementParameters: {
            onElementChange: useStableCallback((...a) => { oec1?.(...a); oec2?.(...a); }),
            onMount,
            onUnmount
        }
    });
    const { props, refElementParameters: { onElementChange: oec2 }, ...i2 } = useProcessedChild({
        context: useContextWithWarning(ListboxChildContext, "ListboxChildren"),
        info: { index }
    });
    const { managedChildReturn: { getChildren }, paginatedChildReturn: { hideBecausePaginated, parentIsPaginated }, staggeredChildReturn: { hideBecauseStaggered, parentIsStaggered, childUseEffect } } = i2;
    const props2 = useMergedProps(props, propsStable);
    // The odd ordering here is to avoid uncommon RoH violation
    const processedListboxItemReturn = {
        hidden: true,
        ...i2,
        props: props2,
        refElementReturn,
        managedChildReturn: { getChildren }
    };
    useImperativeHandle(imperativeHandle, () => processedListboxItemReturn);
    let retIfHidden = render(processedListboxItemReturn);
    if (hideBecausePaginated || hideBecauseStaggered) {
        return retIfHidden;
    }
    else {
        return (jsx(ListboxItemInner, { index: index, render: render, allowRepeatPresses: allowRepeatPresses, excludeEnter: excludeEnter, excludePointer: excludePointer, focusSelf: focusSelf, getText: getText, imperativeHandle: imperativeHandle, longPressThreshold: longPressThreshold, multiSelected: multiSelected, multiSelectionDisabled: multiSelectionDisabled, onCurrentFocusedChanged: onCurrentFocusedChanged, onCurrentFocusedInnerChanged: onCurrentFocusedInnerChanged, onMount: onMount, onMultiSelectedChange: onMultiSelectedChange, onPressingChange: onPressingChange, onUnmount: onUnmount, singleSelectionDisabled: singleSelectionDisabled, untabbable: untabbable, hideBecausePaginated: hideBecausePaginated, hideBecauseStaggered: hideBecauseStaggered, parentIsPaginated: parentIsPaginated, parentIsStaggered: parentIsStaggered, childUseEffect: childUseEffect, onTextContentChange: onTextContentChange, props: props2, ...void1 }));
    }
}));
// Separated into its own component because hooks can't be if'd.
const ListboxItemInner = memo((function ListboxItemInner({ getText, untabbable, index, render, allowRepeatPresses, excludeEnter, excludePointer, longPressThreshold, onPressingChange, onElementChange, onMount, onUnmount, onCurrentFocusedChanged, onCurrentFocusedInnerChanged, focusSelf, imperativeHandle, multiSelectionDisabled, singleSelectionDisabled, multiSelected, onMultiSelectedChange, hideBecausePaginated, hideBecauseStaggered, parentIsPaginated, parentIsStaggered, props: props1, childUseEffect, onTextContentChange, ...void1 }) {
    const context = useContextWithWarning(ListboxContext, "listbox");
    console.assert(context != null, `This ListboxItem is not contained within a Listbox`);
    const focusSelfDefault = useCallback((e) => { focus(e); }, []);
    assertEmptyObject(void1);
    useEffect(childUseEffect, [childUseEffect]);
    const { hasCurrentFocusReturn, managedChildReturn, multiSelectionChildReturn, pressReturn, props: props2, refElementReturn, rovingTabIndexChildReturn, singleSelectionChildReturn, textContentReturn } = useListboxItem({
        info: {
            index,
            untabbable: untabbable || false,
            focusSelf: focusSelf ?? focusSelfDefault,
        },
        context,
        listboxParameters: {},
        pressParameters: { allowRepeatPresses, excludeEnter, excludePointer, longPressThreshold, onPressingChange },
        textContentParameters: { getText: useDefault("getText", getText), onTextContentChange },
        hasCurrentFocusParameters: { onCurrentFocusedChanged, onCurrentFocusedInnerChanged, },
        refElementParameters: { onElementChange, onMount, onUnmount },
        singleSelectionChildParameters: { singleSelectionDisabled: singleSelectionDisabled || false },
        multiSelectionChildParameters: { multiSelectionDisabled: multiSelectionDisabled || false },
        multiSelectionChildDeclarativeParameters: { onMultiSelectedChange, multiSelected: multiSelected || false },
    });
    return useComponent(imperativeHandle, render, null, {
        hasCurrentFocusReturn,
        multiSelectionChildReturn,
        pressReturn,
        props: useMergedProps(props1, props2),
        refElementReturn,
        rovingTabIndexChildReturn,
        singleSelectionChildReturn,
        textContentReturn,
        managedChildReturn,
        staggeredChildReturn: { hideBecauseStaggered, parentIsStaggered },
        paginatedChildReturn: { hideBecausePaginated, parentIsPaginated }
    });
}));

const MenuItemContext = createContext(null);
const Menu = memo((function Menu({ collator, disableHomeEndKeys, noTypeahead, typeaheadTimeout, orientation, singleSelectionAriaPropName, singleSelectionMode, untabbable, active, onDismiss, onElementChange, onMount, onUnmount, openDirection, onTabbableIndexChange, singleSelectedIndex, navigatePastEnd, navigatePastStart, onSingleSelectedIndexChange, multiSelectionAriaPropName, multiSelectionMode, onSelectionChange, pageNavigationSize, parentDepth, disabled, onOpen, onNavigateLinear, onNavigateTypeahead, getDocument, onActiveElementChange, onLastActiveElementChange, onWindowFocusedChange, render, imperativeHandle, ...void1 }) {
    const defaultParentDepth = useContext(ParentDepthContext);
    let myDepth = (parentDepth ?? defaultParentDepth) + 1;
    untabbable ||= false;
    assertEmptyObject(void1);
    return (jsx(ParentDepthContext.Provider, { value: myDepth, children: useComponent(imperativeHandle, render, MenuItemContext, useMenu({
            linearNavigationParameters: {
                onNavigateLinear,
                disableHomeEndKeys: useDefault("disableHomeEndKeys", disableHomeEndKeys),
                pageNavigationSize: useDefault("pageNavigationSize", pageNavigationSize),
                navigatePastEnd: navigatePastEnd ?? "wrap",
                navigatePastStart: navigatePastStart ?? "wrap"
            },
            escapeDismissParameters: { parentDepth: parentDepth || 1, },
            dismissParameters: { onDismiss },
            modalParameters: { active },
            refElementParameters: { onElementChange, onMount, onUnmount },
            activeElementParameters: {
                getDocument: useDefault("getDocument", getDocument),
                onActiveElementChange,
                onLastActiveElementChange,
                onWindowFocusedChange
            },
            menuParameters: {
                openDirection,
                onOpen
            },
            menuSurfaceParameters: {},
            rovingTabIndexParameters: {
                onTabbableIndexChange,
                untabbable: untabbable
            },
            typeaheadNavigationParameters: {
                onNavigateTypeahead,
                collator: useDefault("collator", collator),
                noTypeahead: useDefault("noTypeahead", noTypeahead),
                typeaheadTimeout: useDefault("typeaheadTimeout", typeaheadTimeout)
            },
            toolbarParameters: {
                orientation,
                disabled: disabled || false
            },
            singleSelectionParameters: {
                singleSelectionAriaPropName: singleSelectionAriaPropName || "aria-selected",
                singleSelectionMode: singleSelectionMode || "disabled",
            },
            multiSelectionParameters: {
                multiSelectionAriaPropName,
                multiSelectionMode: multiSelectionMode || "disabled",
                onSelectionChange
            },
            singleSelectionDeclarativeParameters: {
                singleSelectedIndex,
                onSingleSelectedIndexChange,
            }
        })) }));
}));
const MenuItem = memo((function MenuItem({ index, untabbable, onPress, getText, role, focusSelf, onPressingChange, render, imperativeHandle, onCurrentFocusedChanged, onCurrentFocusedInnerChanged, onElementChange, onMount, onUnmount, info: uinfo, initiallyMultiSelected, multiSelectionDisabled, onMultiSelectChange, singleSelectionDisabled, onTextContentChange, ...void1 }) {
    const context = useContextWithWarning(MenuItemContext, "menu");
    const defaultFocusSelf = useCallback((e) => focus(e), []);
    assertEmptyObject(void1);
    return (useComponent(imperativeHandle, render, null, useMenuItem({
        info: {
            index,
            untabbable: untabbable || false,
            focusSelf: focusSelf ?? defaultFocusSelf,
            ...uinfo
        },
        context,
        textContentParameters: {
            getText: useDefault("getText", getText),
            onTextContentChange,
        },
        menuItemParameters: {
            onPress,
            role: role ?? "menuitem"
        },
        pressParameters: {
            onPressingChange
        },
        hasCurrentFocusParameters: { onCurrentFocusedChanged, onCurrentFocusedInnerChanged },
        refElementParameters: { onElementChange, onMount, onUnmount },
        singleSelectionChildParameters: { singleSelectionDisabled: singleSelectionDisabled || false },
        multiSelectionChildParameters: { multiSelectionDisabled: multiSelectionDisabled || false, initiallyMultiSelected: initiallyMultiSelected || false, onMultiSelectChange }
    })));
}));

const MenubarItemContext = createContext(null);
const Menubar = memo((function Menubar({ render, collator, disableHomeEndKeys, navigatePastEnd, navigatePastStart, pageNavigationSize, orientation, noTypeahead, untabbable, onTabbableIndexChange, disabled, singleSelectedIndex, onSingleSelectedIndexChange, typeaheadTimeout, role, ariaLabel, multiSelectionAriaPropName, multiSelectionMode, onSelectionChange, singleSelectionAriaPropName, singleSelectionMode, onNavigateLinear, onNavigateTypeahead, imperativeHandle, onElementChange, onMount, onUnmount, ...void1 }) {
    assertEmptyObject(void1);
    const info = useMenubar({
        linearNavigationParameters: {
            onNavigateLinear,
            disableHomeEndKeys: useDefault("disableHomeEndKeys", disableHomeEndKeys),
            navigatePastEnd: navigatePastEnd ?? "wrap",
            navigatePastStart: navigatePastStart ?? "wrap",
            pageNavigationSize: useDefault("pageNavigationSize", pageNavigationSize)
        },
        toolbarParameters: {
            orientation,
            role: role ?? "menubar",
            disabled: disabled || false
        },
        rovingTabIndexParameters: {
            onTabbableIndexChange,
            untabbable: untabbable || false
        },
        typeaheadNavigationParameters: {
            onNavigateTypeahead,
            collator: useDefault("collator", collator),
            noTypeahead: useDefault("noTypeahead", noTypeahead),
            typeaheadTimeout: useDefault("typeaheadTimeout", typeaheadTimeout)
        },
        labelParameters: {
            ariaLabel
        },
        singleSelectionParameters: {
            singleSelectionAriaPropName,
            singleSelectionMode: singleSelectionMode || "activation",
        },
        multiSelectionParameters: {
            multiSelectionAriaPropName,
            multiSelectionMode: multiSelectionMode || "activation",
            onSelectionChange
        },
        singleSelectionDeclarativeParameters: {
            singleSelectedIndex,
            onSingleSelectedIndexChange
        },
        refElementParameters: { onElementChange, onMount, onUnmount }
    });
    useImperativeHandle(imperativeHandle, () => info);
    return (jsx(MenubarItemContext.Provider, { value: info.contextChildren, children: render(info) }));
}));
const MenubarItem = memo((function MenubarItem({ index, render, focusSelf, untabbable, getText, onPress, onPressingChange, role, imperativeHandle, onCurrentFocusedChanged, onCurrentFocusedInnerChanged, onElementChange, onMount, onUnmount, info: uinfo, initiallyMultiSelected, multiSelectionDisabled, onMultiSelectChange, singleSelectionDisabled, onTextContentChange, ...void1 }) {
    const defaultFocusSelf = useCallback((e) => focus(e), []);
    assertEmptyObject(void1);
    return useComponent(imperativeHandle, render, null, useMenubarChild({
        info: { index, untabbable: untabbable || false, focusSelf: focusSelf ?? defaultFocusSelf, ...uinfo },
        context: useContextWithWarning(MenubarItemContext, "menubar"),
        textContentParameters: { getText: useDefault("getText", getText), onTextContentChange },
        menuItemParameters: { onPress: onPress ?? null, role: role ?? "menuitem" },
        pressParameters: { onPressingChange },
        hasCurrentFocusParameters: { onCurrentFocusedChanged, onCurrentFocusedInnerChanged },
        refElementParameters: { onElementChange, onMount, onUnmount },
        singleSelectionChildParameters: { singleSelectionDisabled: singleSelectionDisabled || false },
        multiSelectionChildParameters: { multiSelectionDisabled: multiSelectionDisabled || false, initiallyMultiSelected: initiallyMultiSelected || false, onMultiSelectChange }
    }));
}));

const Progress = memo((function Progress({ tagProgressIndicator, ariaLabel, max, render, value, valueText, imperativeHandle, ...void1 }) {
    assertEmptyObject(void1);
    return useComponent(imperativeHandle, render, null, useProgress({
        labelParameters: { ariaLabel },
        progressIndicatorParameters: {
            max: max ?? 100,
            value: value ?? "indeterminate",
            valueText,
            tagProgressIndicator
        }
    }));
}));
const ProgressWithHandler = memo((function ProgressWithHandler({ ariaLabel, forciblyPending, render, tagProgressIndicator, asyncHandler, capture, debounce, throttle, notifyFailure, notifyPending, notifySuccess, imperativeHandle, ...void1 }) {
    assertEmptyObject(void1);
    return useComponent(imperativeHandle, render, null, useProgressWithHandler({
        asyncHandlerParameters: { asyncHandler, capture, debounce, throttle },
        labelParameters: { ariaLabel },
        progressIndicatorParameters: { tagProgressIndicator },
        progressWithHandlerParameters: { forciblyPending, notifyFailure, notifyPending, notifySuccess }
    }));
}));

const RadioContext = createContext(null);
//const ProcessedChildrenContext = createContext<UseProcessedChildrenContext>(null!);
const RadioGroup = memo((function RadioGroup({ render, name, collator, disableHomeEndKeys, arrowKeyDirection, noTypeahead, typeaheadTimeout, ariaLabel, navigatePastEnd, navigatePastStart, selectedValue, untabbable, onTabbableIndexChange, onNavigateLinear, onNavigateTypeahead, pageNavigationSize, onElementChange, onMount, onUnmount, imperativeHandle, onSelectedValueChange, singleSelectionMode, ...void1 }) {
    untabbable ??= false;
    assertEmptyObject(void1);
    return useComponent(imperativeHandle, render, RadioContext, useRadioGroup({
        singleSelectionParameters: { singleSelectionMode: singleSelectionMode ?? "focus" },
        linearNavigationParameters: {
            onNavigateLinear,
            arrowKeyDirection: arrowKeyDirection ?? "either",
            navigatePastEnd: navigatePastEnd ?? "wrap",
            navigatePastStart: navigatePastStart ?? "wrap",
            disableHomeEndKeys: useDefault("disableHomeEndKeys", disableHomeEndKeys),
            pageNavigationSize: useDefault("pageNavigationSize", pageNavigationSize)
        },
        labelParameters: { ariaLabel },
        radioGroupParameters: { name, selectedValue, onSelectedValueChange },
        rovingTabIndexParameters: {
            onTabbableIndexChange,
            untabbable
        },
        typeaheadNavigationParameters: {
            onNavigateTypeahead,
            collator: useDefault("collator", collator),
            noTypeahead: useDefault("noTypeahead", noTypeahead),
            typeaheadTimeout: useDefault("typeaheadTimeout", typeaheadTimeout)
        },
        refElementParameters: { onElementChange, onMount, onUnmount },
    }));
}));
const Radio = memo((function Radio({ disabled, index, render, value, ariaLabel, labelPosition, untabbable, tagInput, tagLabel, getText, longPressThreshold, onElementChange, onMount, onUnmount, onCurrentFocusedChanged, onCurrentFocusedInnerChanged, imperativeHandle, onTextContentChange, ...void1 }) {
    assertEmptyObject(void1);
    const context = useContextWithWarning(RadioContext, "radio group");
    console.assert(context != null, `This Radio is not contained within a RadioGroup`);
    //const getValue = useStableGetter(value);
    return useComponent(imperativeHandle, render, null, useRadio({
        radioParameters: { value },
        checkboxLikeParameters: { disabled: disabled ?? false },
        info: { index, untabbable: untabbable || false },
        context,
        labelParameters: { ariaLabel, labelPosition, tagInput, tagLabel },
        textContentParameters: { getText: useDefault("getText", getText), onTextContentChange },
        pressParameters: { longPressThreshold },
        hasCurrentFocusParameters: { onCurrentFocusedChanged, onCurrentFocusedInnerChanged },
        refElementParameters: { onElementChange, onMount, onUnmount }
    }));
}));

const SliderThumbContext = createContext(null);
function Slider({ max, min, onAfterChildLayoutEffect, onChildrenMountChange, render, imperativeHandle, onChildrenCountChange, ...void1 }) {
    assertEmptyObject(void1);
    return useComponent(imperativeHandle, render, SliderThumbContext, useSlider({
        managedChildrenParameters: { onAfterChildLayoutEffect, onChildrenMountChange, onChildrenCountChange },
        sliderParameters: { max, min }
    }));
}
function SliderThumb({ label, tag, value, max, min, index, render, valueText, imperativeHandle, onValueChange, info, ...void1 }) {
    assertEmptyObject(void1);
    return useComponent(imperativeHandle, render, null, useSliderThumb({
        context: (useContextWithWarning(SliderThumbContext, "slider")),
        info: { index, ...info },
        sliderThumbParameters: { label, tag, value, max, min, valueText, onValueChange },
    }));
}

const TableContext = createContext(null);
const TableSectionContext = createContext(null);
const TableRowsContext = createContext(null);
const ProcessedRowContext = createContext(null);
const TableRowContext = createContext(null);
const Table = memo((function Table({ ariaLabel, singleSelectionMode, multiSelectionMode, tagTable, imperativeHandle, render, ...void1 }) {
    assertEmptyObject(void1);
    return useComponent(imperativeHandle, render, TableContext, useTable({
        labelParameters: { ariaLabel },
        tableParameters: { tagTable, },
        singleSelectionParameters: { singleSelectionMode: singleSelectionMode || "disabled" },
        multiSelectionParameters: { multiSelectionMode: multiSelectionMode || "disabled" },
    }));
}));
const TableSection = memo((function TableSection({ disableHomeEndKeys, initiallySingleSelectedIndex, untabbable, navigatePastEnd, navigatePastStart, onSingleSelectedIndexChange, onTabbableColumnChange, onTabbableIndexChange, pageNavigationSize, paginationMax, paginationMin, render, location, imperativeHandle, multiSelectionAriaPropName, onSelectionChange, singleSelectionAriaPropName, onNavigateLinear, collator, noTypeahead, onNavigateTypeahead, typeaheadTimeout, tagTableSection, onElementChange, onMount, onUnmount, initiallyTabbableColumn, ...void1 }) {
    assertEmptyObject(void1);
    return useComponentC(imperativeHandle, render, TableSectionContext, TableRowsContext, useTableSection({
        gridNavigationParameters: {
            onTabbableColumnChange: onTabbableColumnChange,
            initiallyTabbableColumn: initiallyTabbableColumn || 0
        },
        typeaheadNavigationParameters: {
            onNavigateTypeahead,
            collator: useDefault("collator", collator),
            noTypeahead: useDefault("noTypeahead", noTypeahead),
            typeaheadTimeout: useDefault("typeaheadTimeout", typeaheadTimeout)
        },
        linearNavigationParameters: {
            onNavigateLinear,
            disableHomeEndKeys: useDefault("disableHomeEndKeys", disableHomeEndKeys),
            navigatePastEnd: navigatePastEnd ?? "wrap",
            navigatePastStart: navigatePastStart ?? "wrap",
            pageNavigationSize: useDefault("pageNavigationSize", pageNavigationSize)
        },
        paginatedChildrenParameters: {
            paginationMax,
            paginationMin,
        },
        rovingTabIndexParameters: {
            onTabbableIndexChange,
            untabbable: untabbable || false,
        },
        singleSelectionParameters: {
            initiallySingleSelectedIndex,
            onSingleSelectedIndexChange,
            singleSelectionAriaPropName
        },
        multiSelectionParameters: {
            multiSelectionAriaPropName,
            onSelectionChange,
        },
        contextChildren: useContextWithWarning(TableContext, "table"),
        tableSectionParameters: {
            tagTableSection,
            location
        },
        refElementParameters: { onElementChange, onMount, onUnmount }
    }));
}));
const TableRows = memo((function TableRows({ render, adjust, children, compare, getIndex, imperativeHandle, onAfterChildLayoutEffect, onChildrenCountChange, onChildrenMountChange, onRearranged, paginationMax, paginationMin, staggered }) {
    return useComponent(imperativeHandle, render, ProcessedRowContext, useCompleteGridNavigationRows({
        context: useContext(TableRowsContext),
        managedChildrenParameters: {
            onAfterChildLayoutEffect,
            onChildrenCountChange,
            onChildrenMountChange
        },
        paginatedChildrenParameters: {
            paginationMax,
            paginationMin
        },
        rearrangeableChildrenParameters: {
            adjust,
            children,
            compare,
            getIndex: useDefault("getIndex", getIndex),
            onRearranged
        },
        staggeredChildrenParameters: {
            staggered: staggered || false
        }
    }));
}));
const TableRow = memo((function TableRow({ index, render, imperativeHandle, onElementChange: oec1, onMount, onUnmount, getText, untabbable, onCurrentFocusedChanged, onCurrentFocusedInnerChanged, multiSelectionDisabled, singleSelectionDisabled, initiallyMultiSelected, initiallyTabbedIndex, navigatePastEnd, navigatePastStart, onMultiSelectChange, onTabbableIndexChange, selected, tagTableRow, onTextContentChange, ...void1 }) {
    assertEmptyObject(void1);
    const { propsStable, refElementReturn } = useRefElement({
        refElementParameters: {
            onElementChange: useStableCallback((...a) => { oec1?.(...a); oec2?.(...a); }),
            onMount,
            onUnmount
        }
    });
    const { props, refElementParameters: { onElementChange: oec2 }, ...i2 } = useProcessedChild({
        context: useContextWithWarning(ProcessedRowContext, "ListboxChildren"),
        info: { index }
    });
    const { managedChildReturn: { getChildren }, paginatedChildReturn: { hideBecausePaginated, parentIsPaginated }, staggeredChildReturn: { hideBecauseStaggered, parentIsStaggered, childUseEffect } } = i2;
    const props2 = useMergedProps(props, propsStable);
    const processedTableRowReturn = {
        hidden: true,
        ...i2,
        props: props2,
        refElementReturn,
        managedChildReturn: { getChildren }
    };
    const retIfHidden = render(processedTableRowReturn);
    if (hideBecausePaginated || hideBecauseStaggered) {
        return retIfHidden;
    }
    else {
        return (jsx(TableRowInner, { index: index, render: render, initiallyMultiSelected: initiallyMultiSelected, initiallyTabbedIndex: initiallyTabbedIndex, navigatePastEnd: navigatePastEnd, navigatePastStart: navigatePastStart, onMultiSelectChange: onMultiSelectChange, onTabbableIndexChange: onTabbableIndexChange, selected: selected, tagTableRow: tagTableRow, getText: getText, imperativeHandle: imperativeHandle, multiSelectionDisabled: multiSelectionDisabled, onCurrentFocusedChanged: onCurrentFocusedChanged, onCurrentFocusedInnerChanged: onCurrentFocusedInnerChanged, singleSelectionDisabled: singleSelectionDisabled, untabbable: untabbable, hideBecausePaginated: hideBecausePaginated, hideBecauseStaggered: hideBecauseStaggered, parentIsPaginated: parentIsPaginated, parentIsStaggered: parentIsStaggered, childUseEffect: childUseEffect, onTextContentChange: onTextContentChange, props: props2, ...void1 }));
    }
}));
const TableRowInner = memo((function TableRowInner({ index, getText, tagTableRow, onTabbableIndexChange, navigatePastEnd, navigatePastStart, selected, initiallyTabbedIndex, untabbable, imperativeHandle, onCurrentFocusedChanged, onCurrentFocusedInnerChanged, render, initiallyMultiSelected, multiSelectionDisabled, onMultiSelectChange, singleSelectionDisabled, childUseEffect, hideBecausePaginated, hideBecauseStaggered, parentIsPaginated, parentIsStaggered, onTextContentChange, props: props1, ...void1 }) {
    assertEmptyObject(void1);
    const { props: props2, context, hasCurrentFocusReturn, linearNavigationReturn, managedChildReturn, managedChildrenReturn, multiSelectionChildReturn, pressParameters, refElementReturn, rovingTabIndexChildReturn, rovingTabIndexReturn, singleSelectionChildReturn, textContentReturn, typeaheadNavigationReturn, } = useTableRow({
        info: {
            index,
            untabbable: untabbable || false
        },
        context: useContextWithWarning(TableSectionContext, "table section"),
        textContentParameters: {
            getText: useDefault("getText", getText),
            onTextContentChange
        },
        tableRowParameters: {
            selected,
            tagTableRow: tagTableRow || "tr"
        },
        hasCurrentFocusParameters: {
            onCurrentFocusedChanged,
            onCurrentFocusedInnerChanged,
        },
        linearNavigationParameters: {
            navigatePastEnd: navigatePastEnd || "wrap",
            navigatePastStart: navigatePastStart || "wrap"
        },
        rovingTabIndexParameters: {
            onTabbableIndexChange: onTabbableIndexChange || null,
            initiallyTabbedIndex: initiallyTabbedIndex ?? null,
            untabbable: untabbable || false
        },
        singleSelectionChildParameters: { singleSelectionDisabled: singleSelectionDisabled || false },
        multiSelectionChildParameters: { multiSelectionDisabled: multiSelectionDisabled || false, initiallyMultiSelected: initiallyMultiSelected || false, onMultiSelectChange }
    });
    useEffect(childUseEffect, [childUseEffect]);
    return useComponent(imperativeHandle, render, TableRowContext, {
        context,
        hasCurrentFocusReturn,
        linearNavigationReturn,
        managedChildrenReturn,
        managedChildReturn,
        multiSelectionChildReturn,
        pressParameters,
        props: useMergedProps(props1, props2),
        rovingTabIndexChildReturn,
        rovingTabIndexReturn,
        singleSelectionChildReturn,
        textContentReturn,
        typeaheadNavigationReturn,
        refElementReturn,
        paginatedChildReturn: { hideBecausePaginated, parentIsPaginated },
        staggeredChildReturn: { hideBecauseStaggered, parentIsStaggered },
    });
}));
const TableCell = memo((function TableCell({ index, getText, focusSelf, untabbable, tagTableCell, render, colSpan, imperativeHandle, getSortValue, onTextContentChange, info: uinfo, ...void1 }) {
    const defaultFocusSelf = useStableCallback((e) => { focus(e); }, []);
    assertEmptyObject(void1);
    return useComponent(imperativeHandle, render, null, useTableCell({
        info: {
            index,
            focusSelf: focusSelf ?? defaultFocusSelf,
            untabbable: untabbable || false,
            getSortValue,
            ...uinfo
        },
        context: useContextWithWarning(TableRowContext, "table row"),
        gridNavigationCellParameters: {
            colSpan: colSpan ?? 1
        },
        tableCellParameters: {
            tagTableCell
        },
        textContentParameters: {
            getText: useDefault("getText", getText),
            onTextContentChange,
        }
    }));
}));

const TabsContext = createContext(null);
const TabPanelsContext = createContext(null);
//const UntabbableContext = createContext(false);
//const SelectionModeContext = createContext<NonNullable<UseTabsParameters<any, any, any>["singleSelectionParameters"]["selectionMode"]>>("focus");
const Tabs = memo((function Tabs({ ariaLabel, collator, disableHomeEndKeys, initiallySingleSelectedIndex, navigatePastEnd, navigatePastStart, noTypeahead, onSingleSelectedIndexChange, onTabbableIndexChange, orientation, pageNavigationSize, localStorageKey, singleSelectionMode, untabbable, typeaheadTimeout, role, onNavigateLinear, onNavigateTypeahead, imperativeHandle, onElementChange, onMount, onUnmount, render, ...void1 }) {
    untabbable ??= false;
    assertEmptyObject(void1);
    const info = useTabs({
        labelParameters: { ariaLabel },
        linearNavigationParameters: {
            onNavigateLinear,
            disableHomeEndKeys: useDefault("disableHomeEndKeys", disableHomeEndKeys),
            navigatePastEnd: navigatePastEnd ?? "wrap",
            navigatePastStart: navigatePastStart ?? "wrap",
            pageNavigationSize: useDefault("pageNavigationSize", pageNavigationSize)
        },
        rovingTabIndexParameters: {
            onTabbableIndexChange,
            untabbable
        },
        singleSelectionParameters: { initiallySingleSelectedIndex, onSingleSelectedIndexChange, singleSelectionMode: singleSelectionMode || "focus" },
        tabsParameters: {
            orientation,
            role,
            localStorageKey
        },
        typeaheadNavigationParameters: {
            onNavigateTypeahead,
            collator: useDefault("collator", collator),
            noTypeahead: useDefault("noTypeahead", noTypeahead),
            typeaheadTimeout: useDefault("typeaheadTimeout", typeaheadTimeout)
        },
        refElementParameters: { onElementChange, onMount, onUnmount }
    });
    const { contextPanels, contextTabs } = info;
    useImperativeHandle(imperativeHandle, () => info);
    return (jsx(TabsContext.Provider, { value: contextTabs, children: jsx(TabPanelsContext.Provider, { value: contextPanels, children: render(info) }) }));
}));
const Tab = memo((function Tab({ focusSelf, untabbable, index, getText, render, longPressThreshold, onPressingChange, imperativeHandle, onElementChange, onMount, onUnmount, onCurrentFocusedChanged, onCurrentFocusedInnerChanged, singleSelectionDisabled, onTextContentChange, info: uinfo, ...void1 }) {
    assertEmptyObject(void1);
    const context = useContextWithWarning(TabsContext, "tabs");
    console.assert(context != null, `This Tab is not contained within a Tabs component`);
    const focusSelfDefault = useCallback((e) => { focus(e); }, []);
    return useComponent(imperativeHandle, render, null, useTab({
        info: {
            index,
            untabbable: untabbable || false,
            focusSelf: focusSelf ?? focusSelfDefault,
            ...uinfo
        },
        context,
        hasCurrentFocusParameters: { onCurrentFocusedChanged, onCurrentFocusedInnerChanged },
        refElementParameters: { onElementChange, onMount, onUnmount },
        pressParameters: { focusSelf: focusSelfDefault, longPressThreshold, onPressingChange },
        textContentParameters: { getText: useDefault("getText", getText), onTextContentChange },
        singleSelectionChildParameters: { singleSelectionDisabled: singleSelectionDisabled || false, }
    }));
}));
const TabPanel = memo((function TabPanel({ index, render, info: uinfo }) {
    const context = useContextWithWarning(TabPanelsContext, "tabs");
    const info = useTabPanel({
        context,
        info: { index, ...uinfo }
    });
    return render(info);
}));

const ToastContext = createContext(null);
function Toasts({ onAfterChildLayoutEffect, onChildrenMountChange, render, visibleCount, imperativeHandle, onChildrenCountChange, ...void1 }) {
    assertEmptyObject(void1);
    return useComponent(imperativeHandle, render, ToastContext, useToasts({
        managedChildrenParameters: {
            onAfterChildLayoutEffect,
            onChildrenMountChange,
            onChildrenCountChange
        },
        toastsParameters: {
            visibleCount
        }
    }));
}
function Toast({ render, index, timeout, politeness, children, info, imperativeHandle }) {
    return useComponent(imperativeHandle, render, null, useToast({
        toastParameters: {
            timeout,
            politeness,
            children
        },
        info: {
            index,
            ...info
        },
        context: useContextWithWarning(ToastContext, "toasts provider")
    }));
}

// TODO: Are there performance/sanity implications for having one context per primitive?
// const UntabbableContext = createContext(false);
//const AriaPropNameContext = createContext<UseToolbarParameters<any, any, any>["singleSelectionParameters"]["singleSelectionAriaPropName"]>("aria-selected")
//const SelectionModeContext = createContext<UseToolbarParameters<any, any, any>["singleSelectionParameters"]["singleSelectionMode"]>("focus");
const ToolbarContext = createContext(null);
const ProcessedChildrenContext = createContext(null);
const Toolbar = memo((function ToolbarU({ render, role, collator, disableHomeEndKeys, disabled, navigatePastEnd, navigatePastStart, pageNavigationSize, singleSelectedIndex, onSingleSelectedIndexChange, orientation, noTypeahead, onTabbableIndexChange, typeaheadTimeout, ariaLabel, imperativeHandle, multiSelectionAriaPropName, multiSelectionMode, onSelectionChange, singleSelectionAriaPropName, singleSelectionMode, untabbable, onNavigateLinear, onNavigateTypeahead, onElementChange, onMount, onUnmount }) {
    return (useComponentC(imperativeHandle, render, ToolbarContext, ProcessedChildrenContext, useToolbar({
        linearNavigationParameters: {
            onNavigateLinear,
            disableHomeEndKeys: useDefault("disableHomeEndKeys", disableHomeEndKeys),
            navigatePastEnd: navigatePastEnd ?? "wrap",
            navigatePastStart: navigatePastStart ?? "wrap",
            pageNavigationSize: useDefault("pageNavigationSize", pageNavigationSize)
        },
        toolbarParameters: {
            orientation,
            disabled: disabled || false,
            role: role ?? "toolbar",
        },
        rovingTabIndexParameters: { onTabbableIndexChange, untabbable: untabbable || false },
        typeaheadNavigationParameters: {
            onNavigateTypeahead,
            collator: useDefault("collator", collator),
            noTypeahead: useDefault("noTypeahead", noTypeahead),
            typeaheadTimeout: useDefault("typeaheadTimeout", typeaheadTimeout)
        },
        labelParameters: { ariaLabel },
        singleSelectionParameters: { singleSelectionAriaPropName, singleSelectionMode },
        multiSelectionParameters: { multiSelectionAriaPropName, multiSelectionMode, onSelectionChange },
        singleSelectionDeclarativeParameters: { singleSelectedIndex, onSingleSelectedIndexChange },
        refElementParameters: { onElementChange, onMount, onUnmount },
    })));
}));
const ToolbarChild = memo((function ToolbarChild({ index, render, focusSelf, getText, disabledProp, untabbable, onElementChange, onMount, onUnmount, onCurrentFocusedChanged, onCurrentFocusedInnerChanged, imperativeHandle, info: uinfo, initiallyMultiSelected, multiSelectionDisabled, onMultiSelectChange, singleSelectionDisabled, onTextContentChange, ...void1 }) {
    const context = useContextWithWarning(ToolbarContext, "toolbar");
    const focusSelfDefault = useCallback((e) => { focus(e); }, []);
    focusSelf ??= focusSelfDefault;
    assertEmptyObject(void1);
    return useComponent(imperativeHandle, render, null, useToolbarChild({
        context,
        toolbarChildParameters: { disabledProp },
        info: {
            index,
            focusSelf,
            untabbable: untabbable || false,
            ...uinfo
        },
        textContentParameters: { getText: useDefault("getText", getText), onTextContentChange },
        hasCurrentFocusParameters: { onCurrentFocusedChanged, onCurrentFocusedInnerChanged },
        refElementParameters: { onElementChange, onMount, onUnmount },
        singleSelectionChildParameters: { singleSelectionDisabled: singleSelectionDisabled || false },
        multiSelectionChildParameters: { multiSelectionDisabled: multiSelectionDisabled || false, initiallyMultiSelected: initiallyMultiSelected || false, onMultiSelectChange }
    }));
}));

const Tooltip = memo(function TooltipU({ onStatus, getDocument, parentDepth, hoverDelay, render, imperativeHandle, onActiveElementChange, onLastActiveElementChange, onWindowFocusedChange, tooltipSemanticType, usesLongPress, longPress, ...void1 }) {
    const defaultParentDepth = useContext(ParentDepthContext);
    let myDepth = (parentDepth ?? defaultParentDepth) + 1;
    assertEmptyObject(void1);
    return (jsx(ParentDepthContext.Provider, { value: myDepth, children: useComponent(imperativeHandle, render, null, useTooltip({
            escapeDismissParameters: {
                getDocument: useDefault("getDocument", getDocument),
                parentDepth: parentDepth ?? defaultParentDepth,
            },
            activeElementParameters: {
                getDocument: useDefault("getDocument", getDocument),
                onActiveElementChange,
                onLastActiveElementChange,
                onWindowFocusedChange
            },
            tooltipParameters: {
                onStatus,
                tooltipSemanticType,
                hoverDelay: hoverDelay ?? null,
                usesLongPress: usesLongPress || false
            },
            pressReturn: { longPress: longPress || false }
        })) }));
});

export { Accordion, AccordionSection, Button, Checkbox, CheckboxGroup, CheckboxGroupChild, CheckboxGroupParent, Dialog, Drawer, Gridlist, GridlistChild, GridlistRow, GridlistRows, GroupedListbox, Heading, HeadingReset, Listbox, ListboxChildren, ListboxItem, Menu, MenuItem, Menubar, MenubarItem, MenubarItemContext, NotificationProviderContext, ParentDepthContext, Progress, ProgressWithHandler, Radio, RadioGroup, Slider, SliderThumb, Tab, TabPanel, Table, TableCell, TableRow, TableRows, TableSection, Tabs, Toast, Toasts, Toolbar, ToolbarChild, Tooltip, defaultRenderCheckboxLike, useAccordion, useAccordionSection, useButton, useCheckbox, useCheckboxGroup, useCheckboxGroupChild, useCheckboxGroupParent, useCheckboxLike, useDefault, useDefaultRenderPortal, useDialog, useDrawer, useFocusSentinel, useGridlist, useGridlistCell, useGridlistRow, useLabel, useLabelSynthetic, useListbox, useListboxItem, useMenu, useMenuItem, useMenuSurface, useMenubar, useMenubarChild, useNotificationProvider, useNotify, useProgress, useProgressWithHandler, useRadio, useRadioGroup, useSlider, useSliderThumb, useTab, useTabPanel, useTable, useTableCell, useTableRow, useTableSection, useTabs, useToast, useToasts, useToolbar, useToolbarChild, useTooltip };
//# sourceMappingURL=index.js.map
