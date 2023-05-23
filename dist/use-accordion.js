import { identity } from "lodash-es";
import { assertEmptyObject, monitorCallCount, useChildrenFlag, useLinearNavigation, useManagedChild, useManagedChildren, useMergedProps, usePersistentState, useRandomId, useRefElement, useStableCallback, useMemoObject, useState, useTypeaheadNavigation, useTypeaheadNavigationChild } from "preact-prop-helpers";
import { useCallback } from "preact/hooks";
import { Prefices } from "./props.js";
import { useButton } from "./use-button.js";
export function useAccordion({ accordionParameters: { initialIndex, localStorageKey, orientation }, typeaheadNavigationParameters, linearNavigationParameters: { disableHomeEndKeys, navigatePastEnd, navigatePastStart, pageNavigationSize }, managedChildrenParameters: { onAfterChildLayoutEffect, onChildrenMountChange }, ...rest }) {
    monitorCallCount(useAccordion);
    assertEmptyObject(rest);
    const [localStorageIndex, setLocalStorageIndex] = usePersistentState(localStorageKey ?? null, initialIndex ?? null);
    if (localStorageIndex != null)
        initialIndex = localStorageIndex;
    const { managedChildrenReturn, context: { managedChildContext } } = useManagedChildren({
        managedChildrenParameters: {
            onChildrenMountChange: useStableCallback((m, u) => { ocmc2(); onChildrenMountChange?.(m, u); }),
            onAfterChildLayoutEffect
        }
    });
    const { getChildren } = managedChildrenReturn;
    const isValidByChild = useCallback((c) => (c && !c.disabled && !c.hidden), []);
    const isValidByIndex = useCallback((c) => {
        const child = getChildren().getAt(c);
        if (child) {
            return isValidByChild(child);
        }
        return false;
    }, []);
    // Keep track of the one expanded index (if there is only one expanded index)
    const { changeIndex: changeExpandedIndexLocalOnly, getCurrentIndex: getCurrentExpandedIndex } = useChildrenFlag({
        initialIndex,
        getChildren,
        getAt: useCallback((child) => { return child.getOpenFromParent() ?? false; }, []),
        setAt: useCallback((child, open) => { return child.setOpenFromParent(open); }, []),
        isValid: isValidByChild,
        onIndexChange: null,
        closestFit: false
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
                getChildren().getAt(i)?.focusSelf();
            }
        }, [])
    });
    const changeExpandedIndex = useStableCallback((value) => {
        changeExpandedIndexLocalOnly(value);
        setLocalStorageIndex(value);
    });
    const rovingTabIndexReturn = useMemoObject({
        getTabbableIndex: getTabbedIndex,
        setTabbableIndex: changeTabbedIndex
    });
    const { context: { typeaheadNavigationContext }, typeaheadNavigationReturn, propsStable: propsTN } = useTypeaheadNavigation({
        rovingTabIndexReturn,
        typeaheadNavigationParameters
    });
    return {
        context: useMemoObject({
            managedChildContext,
            typeaheadNavigationContext,
            accordionSectionParameters: useMemoObject({
                changeExpandedIndex,
                changeTabbedIndex,
                getExpandedIndex: getCurrentExpandedIndex,
                getTabbedIndex: getTabbedIndex,
                stableTypeaheadProps: propsTN,
            }),
            linearNavigationParameters: useMemoObject({
                disableHomeEndKeys,
                getHighestIndex: useCallback(() => getChildren().getHighestIndex(), []),
                indexMangler: identity,
                indexDemangler: identity,
                arrowKeyDirection: orientation ?? "vertical",
                isValid: isValidByIndex,
                navigatePastEnd,
                navigatePastStart,
                pageNavigationSize
            }),
            rovingTabIndexReturn
        }),
        managedChildrenReturn,
        accordionReturn: useMemoObject({ changeExpandedIndex })
    };
}
export function useAccordionSection({ buttonParameters, accordionSectionParameters: { open: openFromUser, bodyRole }, info: { index, hidden }, textContentParameters, context: { accordionSectionParameters: { changeExpandedIndex, changeTabbedIndex: setCurrentFocusedIndex, getTabbedIndex: getCurrentFocusedIndex, stableTypeaheadProps }, linearNavigationParameters, rovingTabIndexReturn, managedChildContext, typeaheadNavigationContext }, refElementParameters, }) {
    monitorCallCount(useAccordionSection);
    const { disabled, onPress: userOnPress } = buttonParameters;
    const [openFromParent, setOpenFromParent, getOpenFromParent] = useState(null);
    const [mostRecentlyTabbed, setMostRecentlyTabbed, getMostRecentlyTabbed] = useState(null);
    const { randomIdReturn: _bodyIdReturn, propsSource: propsBodySource, propsReferencer: propsHeadReferencer } = useRandomId({ randomIdParameters: { prefix: Prefices.accordionSectionHeaderButton, otherReferencerProp: "aria-controls" } });
    const { randomIdReturn: _headIdReturn, propsSource: propsHeadSource, propsReferencer: propsBodyReferencer } = useRandomId({ randomIdParameters: { prefix: Prefices.accordionSectionBody, otherReferencerProp: "aria-labelledby" } });
    const open = ((openFromUser ?? openFromParent) ?? false);
    const { refElementReturn: { getElement: getHeaderElement }, propsStable: headerRefElementProps } = useRefElement({ refElementParameters: {} });
    const { refElementReturn: { getElement: _getBodyElement }, propsStable: bodyRefElementProps } = useRefElement({ refElementParameters: {} });
    const focusSelf = useStableCallback(() => {
        getHeaderElement()?.focus();
    });
    const { managedChildReturn: { getChildren: _getSections } } = useManagedChild({
        context: {
            managedChildContext
        },
        info: {
            index,
            disabled,
            focusSelf,
            getMostRecentlyTabbed,
            getOpenFromParent,
            hidden,
            setMostRecentlyTabbed,
            setOpenFromParent,
        }
    });
    const onPress = (e) => {
        setCurrentFocusedIndex(index);
        if (getOpenFromParent())
            changeExpandedIndex(null);
        else
            changeExpandedIndex(index);
        userOnPress?.(e);
    };
    const { propsStable: propsLN, ...linearReturnType } = useLinearNavigation({ linearNavigationParameters, rovingTabIndexReturn });
    const { pressParameters: { excludeSpace }, textContentReturn } = useTypeaheadNavigationChild({
        info: { index },
        refElementReturn: { getElement: useStableCallback(() => refElementReturn.getElement()) },
        textContentParameters,
        context: { typeaheadNavigationContext }
    });
    const buttonReturn = useButton({
        buttonParameters: { ...buttonParameters, pressed: null, onPress, role: "button", },
        pressParameters: { excludeSpace, allowRepeatPresses: false },
        refElementParameters
    });
    const { pressReturn, props: buttonProps, refElementReturn } = buttonReturn;
    //const { linearNavigationReturn: { propsStable } } = linearReturnType;
    const headerButtonProps = useMergedProps(buttonProps, headerRefElementProps, propsHeadReferencer, propsHeadSource, propsLN, stableTypeaheadProps, { "aria-expanded": (open ?? false).toString(), });
    const bodyProps = useMergedProps(bodyRefElementProps, propsBodyReferencer, propsBodySource, {
        role: bodyRole,
        tabIndex: -1
    });
    return {
        pressReturn,
        refElementReturn,
        textContentReturn,
        accordionSectionReturn: {
            mostRecentlyTabbed: !!mostRecentlyTabbed,
            expanded: open,
            focused: (getCurrentFocusedIndex() == index)
        },
        propsHeaderButton: headerButtonProps,
        propsHeader: {},
        propsBody: bodyProps,
    };
}
//# sourceMappingURL=use-accordion.js.map