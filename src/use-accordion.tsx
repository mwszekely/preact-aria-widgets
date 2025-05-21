import { identity } from "lodash-es";
import {
    ElementProps,
    EventType,
    JSX,
    ManagedChildInfo,
    Nullable,
    OnChildrenMountChange,
    PassiveStateUpdater,
    PersistentStates,
    TargetedOmit,
    TargetedPick,
    UseGenericChildParameters,
    UseHasCurrentFocusReturnType,
    UseLinearNavigationParameters,
    UseLinearNavigationReturnType,
    UseManagedChildParameters,
    UseManagedChildrenContext,
    UseManagedChildrenParameters,
    UseManagedChildrenReturnType,
    UsePressParameters,
    UseRefElementParameters,
    UseRefElementReturnTypeSelf,
    UseTextContentParameters,
    UseTextContentReturnType,
    UseTypeaheadNavigationChildParameters,
    UseTypeaheadNavigationChildReturnType,
    UseTypeaheadNavigationContext,
    UseTypeaheadNavigationParameters,
    UseTypeaheadNavigationReturnType,
    assertEmptyObject,
    findBackupFocus,
    getDocument,
    useCallback,
    useChildrenFlag,
    useHasCurrentFocus,
    useLinearNavigation,
    useManagedChild,
    useManagedChildren,
    useMemoObject,
    useMergedProps,
    useMonitoring,
    usePersistentState,
    useRandomId,
    useRefElement,
    useStableCallback,
    useState,
    useTextContent,
    useTypeaheadNavigation,
    useTypeaheadNavigationChild
} from "preact-prop-helpers";
import { DisabledType, OmitStrong, Prefices } from "./props.js";
import { UseButtonParameters, UseButtonReturnType, useButton } from "./use-button.js";

export interface UseAccordionParametersSelf {
    /**
     * Almost all Accordions are `"vertical"`, but you certainly can have a `"horizontal"` Accordion if you want.
     * 
     * @remarks This subsumes (and replaces) `linearNavigationParameters.arrowKeyDirection`.
     */
    orientation: Nullable<"vertical" | "horizontal">;

    /** For a one-at-a-time accordion, which index is initially opened? */
    initialIndex: Nullable<number>;

    /** For a one-at-a-time accordion, this is the key {@link usePersistentState} will use to remember which one is open. */
    localStorageKey: Nullable<keyof PersistentStates>;
}

export interface UseAccordionParameters<HeaderButtonElement extends Element, M extends UseAccordionSectionInfo<HeaderButtonElement>> extends
    TargetedOmit<UseLinearNavigationParameters<HeaderButtonElement, HeaderButtonElement>, "linearNavigationParameters", "isValidForLinearNavigation" | "getLowestIndex" | "arrowKeyDirection" | "getHighestIndex">,
    TargetedOmit<UseTypeaheadNavigationParameters<HeaderButtonElement>, "typeaheadNavigationParameters", "isValidForTypeaheadNavigation">,
    UseManagedChildrenParameters<M> {
    accordionParameters: UseAccordionParametersSelf;
}

export interface UseAccordionReturnTypeSelf {
    /**
     * For a one-at-a-time, changes which one is currently open
     */
    changeExpandedIndex: PassiveStateUpdater<number | null, Event>;
}

export interface UseAccordionReturnType<HeaderButtonElement extends Element, M extends UseAccordionSectionInfo<HeaderButtonElement>> extends
    UseManagedChildrenReturnType<M>,
    OmitStrong<UseTypeaheadNavigationReturnType<HeaderButtonElement>, "propsStable"> {

    /** @stable */
    accordionReturn: UseAccordionReturnTypeSelf;
    context: UseAccordionContext<HeaderButtonElement, M>;
}


export interface UseAccordionSectionInfo<E extends Element> extends ManagedChildInfo<number> {
    setOpenFromParent(open: boolean): void;
    getOpenFromParent(): boolean | null;
    setMostRecentlyTabbed(tabbed: boolean): void;
    getMostRecentlyTabbed(): boolean | null;
    focusSelf(e: E): void;
    getElement(): E | null;
    disabled: DisabledType;
    untabbable: boolean;
}

export interface UseAccordionSectionParametersSelf {
    /** 
     * If this prop is `true` or `false` (isn't null), then this section
     * will be open/closed regardless of what the parent's singular open index is.
     * 
     * In other words, leave null to only allow one section to be open at a time.
     * To allow multiple sections to be open at once, 
     * set the parent's index to null and toggle this `true`/`false` when the button's pressed
     */
    open: boolean | null | undefined;
    /** 
     * Generally `"region"`.
     * 
     */
    bodyRole: JSX.AriaRole;
}

export interface UseAccordionSectionParameters<HeaderContainerElement extends Element, HeaderButtonElement extends Element, BodyElement extends Element, M extends UseAccordionSectionInfo<HeaderButtonElement>> extends
    UseGenericChildParameters<UseAccordionContext<HeaderButtonElement, M>, Pick<M, "index" | "untabbable">>,
    OmitStrong<UseTypeaheadNavigationChildParameters<HeaderButtonElement>, "info" | "context">,
    OmitStrong<UseManagedChildParameters<M>, "info">,
    TargetedPick<UsePressParameters<HeaderButtonElement>, "pressParameters", "focusSelf">,
    Pick<UseTextContentParameters<HeaderContainerElement>, "textContentParameters">,
    TargetedOmit<UseButtonParameters<HeaderButtonElement>, "buttonParameters", "pressed" | "role"> {

    refElementHeaderButtonParameters: UseRefElementParameters<HeaderButtonElement>["refElementParameters"];
    refElementBodyParameters: UseRefElementParameters<BodyElement>["refElementParameters"];
    context: UseAccordionContext<HeaderButtonElement, M>;
    accordionSectionParameters: UseAccordionSectionParametersSelf;
}

export interface UseAccordionSectionReturnTypeSelf {
    expanded: boolean;
    focused: boolean;
    mostRecentlyTabbed: boolean;
}

export interface UseAccordionSectionReturnType<HeaderElement extends Element, HeaderButtonElement extends Element, BodyElement extends Element> extends
    OmitStrong<UseButtonReturnType<HeaderButtonElement>, "props" | "refElementReturn">,
    OmitStrong<UseTypeaheadNavigationChildReturnType, "pressParameters" | "textContentParameters">,
    OmitStrong<UseLinearNavigationReturnType<HeaderButtonElement>, "propsStable">,
    OmitStrong<UseTextContentReturnType, never>,
    OmitStrong<UseHasCurrentFocusReturnType<HeaderButtonElement>, never> {
    accordionSectionReturn: UseAccordionSectionReturnTypeSelf;

    propsHeaderButton: ElementProps<HeaderButtonElement>;
    propsHeader: ElementProps<HeaderElement>;
    propsBody: ElementProps<BodyElement>;
    refElementBodyReturn: UseRefElementReturnTypeSelf<BodyElement>;
    refElementHeaderButtonReturn: UseRefElementReturnTypeSelf<HeaderButtonElement>;
}

export interface UseAccordionContextSelf<HeaderButtonElement extends Element> {
    changeTabbedIndex: PassiveStateUpdater<number | null, Event>;
    changeExpandedIndex: PassiveStateUpdater<number | null, Event>;
    getExpandedIndex: () => (number | null);
    getTabbedIndex: () => (number | null);
    stableTypeaheadProps: ElementProps<HeaderButtonElement>;
}

export interface UseAccordionContext<HeaderButtonElement extends Element, M extends UseAccordionSectionInfo<HeaderButtonElement>> extends UseManagedChildrenContext<M>, UseTypeaheadNavigationContext {
    accordionSectionContext: UseAccordionContextSelf<HeaderButtonElement>;

    // These are here because there's no parent element -- the child handles these.
    // Accordions are a bit odd.
    linearNavigationParameters: UseLinearNavigationParameters<HeaderButtonElement, HeaderButtonElement>["linearNavigationParameters"];
    rovingTabIndexReturn: UseLinearNavigationParameters<HeaderButtonElement, HeaderButtonElement>["rovingTabIndexReturn"];
}

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
export function useAccordion<HeaderButtonElement extends Element>({
    accordionParameters: { initialIndex, localStorageKey, orientation, ...accordionParameters },
    typeaheadNavigationParameters: { collator, noTypeahead, onNavigateTypeahead, typeaheadTimeout, ...typeaheadNavigationParameters },
    linearNavigationParameters: { disableHomeEndKeys, navigatePastEnd, navigatePastStart, pageNavigationSize, onNavigateLinear, ...linearNavigationParameters },
    managedChildrenParameters: { onAfterChildLayoutEffect, onChildrenMountChange: ocmc1, onChildrenCountChange, ...managedChildrenParameters },
    ...void1
}: UseAccordionParameters<HeaderButtonElement, UseAccordionSectionInfo<HeaderButtonElement>>): UseAccordionReturnType<HeaderButtonElement, UseAccordionSectionInfo<HeaderButtonElement>> {
    return useMonitoring(function useAccordion(): UseAccordionReturnType<HeaderButtonElement, UseAccordionSectionInfo<HeaderButtonElement>> {

        type M = UseAccordionSectionInfo<HeaderButtonElement>;

        const [localStorageIndex, setLocalStorageIndex] = usePersistentState<never, number | null>(localStorageKey ?? null, initialIndex ?? null);
        if (localStorageIndex != null)
            initialIndex = localStorageIndex;

        const { managedChildrenReturn, context: { managedChildContext } } = useManagedChildren<M>({
            managedChildrenParameters: {
                onChildrenMountChange: useStableCallback<OnChildrenMountChange<number>>((m, u) => { ocmc2(undefined!); ocmc1?.(m, u); }),
                onAfterChildLayoutEffect,
                onChildrenCountChange,
                ...managedChildrenParameters
            }
        });

        const { getChildren } = managedChildrenReturn;

        const isValidByChild = useCallback((c: M) => (c && !c.disabled && !c.untabbable), []);
        const isValidByIndex = useCallback((c: number): boolean => {
            const child = getChildren().getAt(c);
            if (child) {
                return isValidByChild(child);
            }
            return false;
        }, []);

        //const { propsStable, refElementReturn: { getElement } } = useRefElement<any>({ refElementParameters })

        // Keep track of the one expanded index (if there is only one expanded index)
        const { changeIndex: changeExpandedIndexLocalOnly, getCurrentIndex: getCurrentExpandedIndex } = useChildrenFlag<M, Event>({
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
        const { changeIndex: changeTabbedIndex, getCurrentIndex: getTabbedIndex, reevaluateClosestFit: ocmc2 } = useChildrenFlag<M, EventType<any, any>>({
            initialIndex,
            getChildren,
            getAt: useCallback((child) => { return child.getMostRecentlyTabbed() ?? false; }, []),
            setAt: useCallback((child, tabbed) => { return child.setMostRecentlyTabbed(tabbed); }, []),
            isValid: isValidByChild,
            closestFit: true,
            indexDemangler: identity,
            onIndexChange: useCallback((i: number | null) => {
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
                            findBackupFocus(element!).focus();
                        else if (element)
                            getChildren().getAt(index)?.focusSelf(element);
                    }
                }
            })
        });

        const changeExpandedIndex = useStableCallback<typeof changeExpandedIndexLocalOnly>((value, r) => {
            changeExpandedIndexLocalOnly(value, r);
            setLocalStorageIndex(value);
        });

        const rovingTabIndexReturn = useMemoObject<UseTypeaheadNavigationParameters<any>["rovingTabIndexReturn"]>({
            getTabbableIndex: getTabbedIndex,
            setTabbableIndex: changeTabbedIndex
        })

        const {
            context: { typeaheadNavigationContext },
            typeaheadNavigationReturn,
            propsStable: propsTN,
            ...void2
        } = useTypeaheadNavigation<HeaderButtonElement, HeaderButtonElement>({
            rovingTabIndexReturn,
            typeaheadNavigationParameters: {
                isValidForTypeaheadNavigation: isValidByIndex,
                collator,
                noTypeahead,
                onNavigateTypeahead,
                typeaheadTimeout,
                ...typeaheadNavigationParameters
            }
        })

        assertEmptyObject(accordionParameters);
        assertEmptyObject(linearNavigationParameters);
        assertEmptyObject(managedChildrenParameters);
        assertEmptyObject(typeaheadNavigationParameters);
        assertEmptyObject(void1);
        assertEmptyObject(void2);

        return {
            typeaheadNavigationReturn,
            context: useMemoObject<UseAccordionContext<HeaderButtonElement, M>>({
                managedChildContext,
                typeaheadNavigationContext,
                accordionSectionContext: useMemoObject<UseAccordionContextSelf<HeaderButtonElement>>({
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
export function useAccordionSection<HeaderContainerElement extends Element, HeaderButtonElement extends Element, BodyElement extends Element>({
    buttonParameters: { disabled, tagButton, onPressSync: userOnPress, ...buttonParameters },
    accordionSectionParameters: { open: openFromUser, bodyRole, ...void3 },
    info: { index, untabbable, ...void4 },
    textContentParameters: { getText, onTextContentChange: otcc1, ...void5 },
    context,
    refElementBodyParameters,
    refElementHeaderButtonParameters,
    pressParameters: { focusSelf, ...pressParameters },
    ...void1
}: UseAccordionSectionParameters<HeaderContainerElement, HeaderButtonElement, BodyElement, UseAccordionSectionInfo<HeaderButtonElement>>): UseAccordionSectionReturnType<HeaderContainerElement, HeaderButtonElement, BodyElement> {

    return useMonitoring(function useAccordionSection(): UseAccordionSectionReturnType<HeaderContainerElement, HeaderButtonElement, BodyElement> {
        type M = UseAccordionSectionInfo<HeaderButtonElement>

        const [openFromParent, setOpenFromParent, getOpenFromParent] = useState<boolean | null>(null);
        const [mostRecentlyTabbed, setMostRecentlyTabbed, getMostRecentlyTabbed] = useState<boolean | null>(null);

        const {
            accordionSectionContext: {
                changeExpandedIndex,
                changeTabbedIndex: setCurrentFocusedIndex,
                getTabbedIndex: getCurrentFocusedIndex,
                stableTypeaheadProps
            },
            linearNavigationParameters,
            rovingTabIndexReturn,
        } = context;

        const { randomIdReturn: _bodyIdReturn, propsSource: propsBodySource, propsReferencer: propsHeadReferencer } = useRandomId<BodyElement, HeaderButtonElement>({ randomIdParameters: { prefix: Prefices.accordionSectionHeaderButton, otherReferencerProp: "aria-controls" } });
        const { randomIdReturn: _headIdReturn, propsSource: propsHeadSource, propsReferencer: propsBodyReferencer } = useRandomId<HeaderButtonElement, BodyElement>({ randomIdParameters: { prefix: Prefices.accordionSectionBody, otherReferencerProp: "aria-labelledby" } });
        const open = ((openFromUser ?? openFromParent) ?? false);

        const { refElementReturn: refElementBodyReturn, propsStable: bodyRefElementProps } = useRefElement<BodyElement>({ refElementParameters: refElementBodyParameters });
        const { hasCurrentFocusReturn } = useHasCurrentFocus({
            refElementReturn: { getElement: useStableCallback(() => { return refElementHeaderButtonReturn.getElement() }) },
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

        const { managedChildReturn: { getChildren: _getSections }, ...void9 } = useManagedChild<M>({
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
                getElement: useStableCallback(() => { return refElementHeaderButtonReturn.getElement() }),
            }
        });

        const { propsStable: propsLN, linearNavigationReturn, ...void10 } = useLinearNavigation<HeaderButtonElement, HeaderButtonElement>({
            linearNavigationParameters,
            rovingTabIndexReturn,
            paginatedChildrenParameters: { paginationMin: null, paginationMax: null },
            processedIndexManglerReturn: { indexMangler: identity, indexDemangler: identity }
        });
        const {
            pressParameters: { excludeSpace, ...void11 },
            //textContentReturn,
            textContentParameters: { onTextContentChange: otcc2, ...void13 },
            ...void2
        } = useTypeaheadNavigationChild<HeaderButtonElement>({
            info: { index },

            //refElementReturn: { getElement: useStableCallback((): HeaderButtonElement | null => refElementHeaderButtonReturn.getElement()) },
            //textContentParameters: { getText, },
            context
        })
        const { propsStable, refElementReturn } = useRefElement<HeaderContainerElement>({ refElementParameters: { onElementChange: null, onMount: null, onUnmount: null } })
        const { textContentReturn } = useTextContent<HeaderContainerElement>({
            refElementReturn,
            textContentParameters: { getText, onTextContentChange: useStableCallback((...a) => { otcc1?.(...a); otcc2?.(...a); }) }
        })

        const {
            pressReturn,
            props,
            refElementReturn: refElementHeaderButtonReturn,
            ...void12
        }: UseButtonReturnType<HeaderButtonElement> = useButton<HeaderButtonElement>({
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
            propsHeaderButton: useMergedProps<HeaderButtonElement>(
                props,
                hasCurrentFocusReturn.propsStable,
                propsHeadReferencer,
                propsHeadSource,
                propsLN,
                stableTypeaheadProps,
                { "aria-expanded": (open ?? false), }
            ),
            propsBody: useMergedProps<BodyElement>(
                bodyRefElementProps,
                propsBodyReferencer,
                propsBodySource,
                {
                    role: bodyRole,
                    tabIndex: -1
                }
            ),
            propsHeader: propsStable

        };
    });

}
