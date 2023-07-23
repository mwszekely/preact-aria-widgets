import { identity } from "lodash-es";
import { h } from "preact";
import { ElementProps, ManagedChildInfo, OnChildrenMountChange, PassiveStateUpdater, PersistentStates, TargetedOmit, UseHasCurrentFocusReturnType, UseLinearNavigationParameters, UseManagedChildParameters, UseManagedChildrenContext, UseManagedChildrenParameters, UseManagedChildrenReturnType, UsePressReturnType, UseRefElementParameters, UseRefElementReturnType, UseTextContentReturnType, UseTypeaheadNavigationChildParameters, UseTypeaheadNavigationContext, UseTypeaheadNavigationParameters, assertEmptyObject, findBackupFocus, focus, monitorCallCount, useChildrenFlag, useHasCurrentFocus, useLinearNavigation, useManagedChild, useManagedChildren, useMemoObject, useMergedProps, usePersistentState, useRandomId, useRefElement, useStableCallback, useState, useTypeaheadNavigation, useTypeaheadNavigationChild } from "preact-prop-helpers";
import { useCallback } from "preact/hooks";
import { DisabledType, OmitStrong, Prefices } from "./props.js";
import { ButtonPressEventHandler, UseButtonParameters, UseButtonReturnType, useButton } from "./use-button.js";

export interface UseAccordionParametersSelf {
    orientation?: "vertical" | "horizontal";
    initialIndex?: number | null;
    localStorageKey: keyof PersistentStates | null;
}

export interface UseAccordionParameters<HeaderButtonElement extends Element, M extends UseAccordionSectionInfo> extends
    TargetedOmit<UseLinearNavigationParameters<HeaderButtonElement, HeaderButtonElement, M>, "linearNavigationParameters", "getLowestIndex" | "arrowKeyDirection" | "getHighestIndex" | "isValid" | "indexDemangler" | "indexMangler">,
    UseManagedChildrenParameters<M>,
    Pick<UseTypeaheadNavigationParameters<HeaderButtonElement, M>, "typeaheadNavigationParameters"> {
    accordionParameters: UseAccordionParametersSelf;
}

export interface UseAccordionReturnTypeSelf { changeExpandedIndex: PassiveStateUpdater<number | null, Event> }

export interface UseAccordionReturnType<HeaderButtonElement extends Element, M extends UseAccordionSectionInfo> extends UseManagedChildrenReturnType<M> {
    /** **STABLE** */
    accordionReturn: UseAccordionReturnTypeSelf;
    context: UseAccordionContext<HeaderButtonElement, M>;

    props: ElementProps<any>;
}


export interface UseAccordionSectionInfo extends ManagedChildInfo<number> {
    setOpenFromParent(open: boolean): void;
    getOpenFromParent(): boolean | null;
    setMostRecentlyTabbed(tabbed: boolean): void;
    getMostRecentlyTabbed(): boolean | null;
    focusSelf(): void;
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
    /** Generally `"region"` */
    bodyRole: h.JSX.AriaRole;
}

export interface UseAccordionSectionParameters<HeaderButtonElement extends Element, M extends UseAccordionSectionInfo> extends
    OmitStrong<UseTypeaheadNavigationChildParameters<HeaderButtonElement, M>, "info" | "refElementReturn" | "context">,
    UseRefElementParameters<HeaderButtonElement>,
    UseManagedChildParameters<M, "index" | "untabbable">,
    TargetedOmit<UseButtonParameters<HeaderButtonElement>, "buttonParameters", "pressed" | "role"> {
    context: UseAccordionContext<HeaderButtonElement, M>;
    accordionSectionParameters: UseAccordionSectionParametersSelf;
}

export interface UseAccordionSectionReturnTypeSelf {
    expanded: boolean;
    focused: boolean;
    mostRecentlyTabbed: boolean;
}

export interface UseAccordionSectionReturnType<HeaderElement extends Element, HeaderButtonElement extends Element, BodyElement extends Element> extends
    OmitStrong<UsePressReturnType<HeaderButtonElement>, "props">,
    OmitStrong<UseRefElementReturnType<HeaderButtonElement>, "propsStable">,
    UseTextContentReturnType,
    UseHasCurrentFocusReturnType<HeaderButtonElement> {
    accordionSectionReturn: UseAccordionSectionReturnTypeSelf;

    propsHeaderButton: ElementProps<HeaderButtonElement>;
    propsHeader: ElementProps<HeaderElement>;
    propsBody: ElementProps<BodyElement>
}

export interface UseAccordionContextSelf<HeaderButtonElement extends Element> {
    changeTabbedIndex: PassiveStateUpdater<number | null, Event>;
    changeExpandedIndex: PassiveStateUpdater<number | null, Event>;
    getExpandedIndex: () => (number | null);
    getTabbedIndex: () => (number | null);
    stableTypeaheadProps: ElementProps<HeaderButtonElement>;
}

export interface UseAccordionContext<HeaderButtonElement extends Element, M extends UseAccordionSectionInfo> extends UseManagedChildrenContext<M>, UseTypeaheadNavigationContext {
    accordionSectionParameters: UseAccordionContextSelf<HeaderButtonElement>;
    linearNavigationParameters: UseLinearNavigationParameters<HeaderButtonElement, HeaderButtonElement, M>["linearNavigationParameters"];
    rovingTabIndexReturn: UseLinearNavigationParameters<HeaderButtonElement, HeaderButtonElement, M>["rovingTabIndexReturn"];
}

/**
 * Implements an [Accordion](https://www.w3.org/WAI/ARIA/apg/patterns/accordion/) pattern.
 * 
 * @compositeParams
 * 
 * @hasChild {@link useAccordionSection}
 */
export function useAccordion<HeaderButtonElement extends Element, M extends UseAccordionSectionInfo>({
    accordionParameters: { initialIndex, localStorageKey, orientation, ...void2 },
    typeaheadNavigationParameters,
    linearNavigationParameters: { disableHomeEndKeys, navigatePastEnd, navigatePastStart, pageNavigationSize, onNavigateLinear, ...void1 },
    managedChildrenParameters: { onAfterChildLayoutEffect, onChildrenMountChange, onChildrenCountChange, ...void3 },
    ...void4
}: UseAccordionParameters<HeaderButtonElement, M>): UseAccordionReturnType<HeaderButtonElement, M> {
    monitorCallCount(useAccordion);
    assertEmptyObject(void1);
    assertEmptyObject(void2);
    assertEmptyObject(void3);
    assertEmptyObject(void4);

    const [localStorageIndex, setLocalStorageIndex] = usePersistentState<never, number | null>(localStorageKey ?? null, initialIndex ?? null);
    if (localStorageIndex != null)
        initialIndex = localStorageIndex;

    const { managedChildrenReturn, context: { managedChildContext } } = useManagedChildren<M>({
        managedChildrenParameters: {
            onChildrenMountChange: useStableCallback<OnChildrenMountChange<number>>((m, u) => { ocmc2(); onChildrenMountChange?.(m, u); }),
            onAfterChildLayoutEffect,
            onChildrenCountChange
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

    const { propsStable, refElementReturn: { getElement } } = useRefElement<any>({})

    // Keep track of the one expanded index (if there is only one expanded index)
    const { changeIndex: changeExpandedIndexLocalOnly, getCurrentIndex: getCurrentExpandedIndex } = useChildrenFlag<M, Event>({
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
    const { changeIndex: changeTabbedIndex, getCurrentIndex: getTabbedIndex, reevaluateClosestFit: ocmc2 } = useChildrenFlag<M, Event>({
        initialIndex,
        getChildren,
        getAt: useCallback((child) => { return child.getMostRecentlyTabbed() ?? false; }, []),
        setAt: useCallback((child, tabbed) => { return child.setMostRecentlyTabbed(tabbed); }, []),
        isValid: isValidByChild,
        closestFit: true,
        onIndexChange: useCallback((i: number | null) => {
            if (i != null) {
                getChildren().getAt(i)?.focusSelf();
            }
        }, []),
        onClosestFit: useStableCallback((index) => {
            if (document.activeElement == null || document.activeElement == document.body) {
                if (index == null)
                    findBackupFocus(getElement()!).focus();
                else
                    getChildren().getAt(index)?.focusSelf();
            }
        })
    });

    const changeExpandedIndex = useStableCallback<typeof changeExpandedIndexLocalOnly>((value) => {
        changeExpandedIndexLocalOnly(value);
        setLocalStorageIndex(value);
    });

    const rovingTabIndexReturn = useMemoObject({
        getTabbableIndex: getTabbedIndex,
        setTabbableIndex: changeTabbedIndex
    })

    const {
        context: { typeaheadNavigationContext },
        typeaheadNavigationReturn,
        propsStable: propsTN
    } = useTypeaheadNavigation<HeaderButtonElement, HeaderButtonElement, M>({
        rovingTabIndexReturn,
        typeaheadNavigationParameters
    })

    return {
        props: propsStable,
        context: useMemoObject<UseAccordionContext<HeaderButtonElement, M>>({


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
                getLowestIndex: useCallback(() => getChildren().getLowestIndex(), []),
                indexMangler: identity,
                indexDemangler: identity,
                arrowKeyDirection: orientation ?? "vertical",
                isValid: isValidByIndex,
                navigatePastEnd,
                navigatePastStart,
                pageNavigationSize,
                onNavigateLinear
            }),
            rovingTabIndexReturn
        }),
        managedChildrenReturn,
        accordionReturn: useMemoObject({ changeExpandedIndex })
    };
}

/**
 * @compositeParams
 */
export function useAccordionSection<_HeaderContainerElement extends Element, HeaderButtonElement extends Element, BodyElement extends Element, M extends UseAccordionSectionInfo = UseAccordionSectionInfo>({
    buttonParameters,
    accordionSectionParameters: { open: openFromUser, bodyRole },
    info: { index, untabbable, ...info },
    textContentParameters,
    context: {
        accordionSectionParameters: { changeExpandedIndex, changeTabbedIndex: setCurrentFocusedIndex, getTabbedIndex: getCurrentFocusedIndex, stableTypeaheadProps },
        linearNavigationParameters,
        rovingTabIndexReturn,
        managedChildContext,
        typeaheadNavigationContext
    },
    refElementParameters,
}: UseAccordionSectionParameters<HeaderButtonElement, M>): UseAccordionSectionReturnType<_HeaderContainerElement, HeaderButtonElement, BodyElement> {
    monitorCallCount(useAccordionSection);

    const { disabled, onPress: userOnPress } = buttonParameters;
    const [openFromParent, setOpenFromParent, getOpenFromParent] = useState<boolean | null>(null);
    const [mostRecentlyTabbed, setMostRecentlyTabbed, getMostRecentlyTabbed] = useState<boolean | null>(null);



    const { randomIdReturn: _bodyIdReturn, propsSource: propsBodySource, propsReferencer: propsHeadReferencer } = useRandomId<BodyElement, HeaderButtonElement>({ randomIdParameters: { prefix: Prefices.accordionSectionHeaderButton, otherReferencerProp: "aria-controls" } });
    const { randomIdReturn: _headIdReturn, propsSource: propsHeadSource, propsReferencer: propsBodyReferencer } = useRandomId<HeaderButtonElement, BodyElement>({ randomIdParameters: { prefix: Prefices.accordionSectionBody, otherReferencerProp: "aria-labelledby" } });
    const open = ((openFromUser ?? openFromParent) ?? false);

    const { refElementReturn: { getElement: getHeaderElement }, propsStable: headerRefElementProps } = useRefElement<HeaderButtonElement>({ refElementParameters: {} });
    const { refElementReturn: { getElement: _getBodyElement }, propsStable: bodyRefElementProps } = useRefElement<BodyElement>({ refElementParameters: {} });
    const { hasCurrentFocusReturn } = useHasCurrentFocus({
        refElementReturn: { getElement: getHeaderElement }, hasCurrentFocusParameters: {
            onCurrentFocusedInnerChanged: useStableCallback(focused => {
                if (focused) {
                    setCurrentFocusedIndex(index);
                    setMostRecentlyTabbed(true);
                }
            })
        }
    })
    const focusSelf = useStableCallback(() => {
        focus(getHeaderElement());
    });

    const { managedChildReturn: { getChildren: _getSections } } = useManagedChild<M>({
        context: {
            managedChildContext
        },
        info: {
            index,
            disabled,
            focusSelf,
            getMostRecentlyTabbed,
            getOpenFromParent,
            untabbable,
            setMostRecentlyTabbed,
            setOpenFromParent,
            ...info
        } as M
    });

    const onPress: ButtonPressEventHandler<HeaderButtonElement> = (e) => {
        setCurrentFocusedIndex(index);
        if (getOpenFromParent())
            changeExpandedIndex(null);
        else
            changeExpandedIndex(index);

        userOnPress?.(e);
    };

    const { propsStable: propsLN, ...linearReturnType } = useLinearNavigation<HeaderButtonElement, HeaderButtonElement, M>({ linearNavigationParameters, rovingTabIndexReturn, paginatedChildrenParameters: { paginationMin: null, paginationMax: null } });
    const {
        pressParameters: { excludeSpace },
        textContentReturn
    } = useTypeaheadNavigationChild<HeaderButtonElement, M>({
        info: { index },
        refElementReturn: { getElement: useStableCallback(() => refElementReturn.getElement()) },
        textContentParameters,
        context: { typeaheadNavigationContext }
    })

    const buttonReturn: UseButtonReturnType<HeaderButtonElement> = useButton<HeaderButtonElement>({
        buttonParameters: { ...buttonParameters, pressed: null, onPress, role: "button", },
        pressParameters: { excludeSpace, allowRepeatPresses: false, excludeEnter: null, excludePointer: null, longPressThreshold: null, onPressingChange: null },
        refElementParameters
    });

    const { pressReturn, props: buttonProps, refElementReturn } = buttonReturn;

    //const { linearNavigationReturn: { propsStable } } = linearReturnType;

    const headerButtonProps = useMergedProps<HeaderButtonElement>(
        buttonProps,
        hasCurrentFocusReturn.propsStable,
        headerRefElementProps,
        propsHeadReferencer,
        propsHeadSource,
        propsLN,
        stableTypeaheadProps,
        { "aria-expanded": (open ?? false), }
    );

    const bodyProps = useMergedProps<BodyElement>(
        bodyRefElementProps,
        propsBodyReferencer,
        propsBodySource,
        {
            role: bodyRole,
            tabIndex: -1
        }
    );

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
        propsHeader: {},    // This is intentionally empty, it's just a reminder that there *does* need to be a header that contains the button.
        propsBody: bodyProps,
        hasCurrentFocusReturn
    };
}
