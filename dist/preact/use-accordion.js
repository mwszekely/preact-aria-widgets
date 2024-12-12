import { identity } from "lodash-es";
import { assertEmptyObject, findBackupFocus, getDocument, useCallback, useChildrenFlag, useHasCurrentFocus, useLinearNavigation, useManagedChild, useManagedChildren, useMemoObject, useMergedProps, useMonitoring, usePersistentState, useRandomId, useRefElement, useStableCallback, useState, useTextContent, useTypeaheadNavigation, useTypeaheadNavigationChild } from "preact-prop-helpers";
import { Prefices } from "./props.js";
import { useButton } from "./use-button.js";
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
export function useAccordion({ accordionParameters: { initialIndex, localStorageKey, orientation, ...accordionParameters }, typeaheadNavigationParameters: { collator, noTypeahead, onNavigateTypeahead, typeaheadTimeout, ...typeaheadNavigationParameters }, linearNavigationParameters: { disableHomeEndKeys, navigatePastEnd, navigatePastStart, pageNavigationSize, onNavigateLinear, ...linearNavigationParameters }, managedChildrenParameters: { onAfterChildLayoutEffect, onChildrenMountChange: ocmc1, onChildrenCountChange, ...managedChildrenParameters }, ...void1 }) {
    return useMonitoring(function useAccordion() {
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
            onClosestFit: null,
            indexDemangler: identity
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
            indexDemangler: identity,
            onIndexChange: useCallback((i) => {
                if (i != null) {
                    const element = getChildren().getAt(i)?.getElement();
                    if (element)
                        getChildren().getAt(i)?.focusSelf(element);
                }
            }, []),
            onClosestFit: useStableCallback((index) => {
                const document = getDocument();
                // After needing to do a closest fit, we still need to handle focus:
                if (document && (document.activeElement == null || document.activeElement == document.body)) {
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
}
/**
 * @compositeParams
 */
export function useAccordionSection({ buttonParameters: { disabled, tagButton, onPressSync: userOnPress, ...buttonParameters }, accordionSectionParameters: { open: openFromUser, bodyRole, ...void3 }, info: { index, untabbable, ...void4 }, textContentParameters: { getText, onTextContentChange: otcc1, ...void5 }, context, refElementBodyParameters, refElementHeaderButtonParameters, pressParameters: { focusSelf, ...pressParameters }, ...void1 }) {
    return useMonitoring(function useAccordionSection() {
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
            processedIndexManglerReturn: { indexMangler: identity, indexDemangler: identity }
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
        console.log(`RENDER accordion section #${index}`);
        const { pressReturn, props, refElementReturn: refElementHeaderButtonReturn, ...void12 } = useButton({
            buttonParameters: {
                pressed: null,
                role: "button",
                disabled,
                tagButton,
                onPressSync: (e) => {
                    console.log(`Press event for accordion section #${index}`);
                    debugger;
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
}
//# sourceMappingURL=use-accordion.js.map