import { h } from "preact";
import { ManagedChildInfo, UseTextContentReturnType, OnChildrenMountChange, UseTypeaheadNavigationContext, PassiveStateUpdater, PersistentStates, useChildrenFlag, useLinearNavigation, UseLinearNavigationParameters, useManagedChild, UseManagedChildParameters, useManagedChildren, UseManagedChildrenContext, UseManagedChildrenParameters, UseManagedChildrenReturnType, useMergedProps, usePersistentState, UsePressReturnType, useRandomId, useRefElement, UseRefElementParameters, UseRefElementReturnType, UseRovingTabIndexChildParameters, useStableCallback, useStableGetter, useStableObject, useState, useTypeaheadNavigation, UseTypeaheadNavigationParameters, useTypeaheadNavigationChild, UseTypeaheadNavigationChildParameters } from "preact-prop-helpers";
import { UseTextContentParameters } from "preact-prop-helpers/dom-helpers/use-text-content";
import { useCallback } from "preact/hooks";
import { debugLog, DisabledType, OmitStrong, Prefices } from "./props";
import { ButtonPressEvent, useButton, UseButtonParameters, UseButtonReturnType } from "./use-button";

//export type UseAccordion<M extends UseAccordionSectionInfo> = (args: UseAccordionParameters<M>) => UseAccordionReturnType<M>;
//export type UseAccordionSection<HeaderElement extends Element, BodyElement extends Element, M extends UseAccordionSectionInfo> = (args: UseAccordionSectionParameters<HeaderElement, M>) => UseAccordionSectionReturnType<HeaderElement, BodyElement>;

export interface UseAccordionParameters<HeaderButtonElement extends Element, M extends UseAccordionSectionInfo> extends
    UseManagedChildrenParameters<M>,
    Pick<UseTypeaheadNavigationParameters<HeaderButtonElement>, "typeaheadNavigationParameters"> {
    accordionParameters: { initialIndex?: number | null; localStorageKey: keyof PersistentStates | null; }
    linearNavigationParameters: OmitStrong<UseLinearNavigationParameters<HeaderButtonElement, HeaderButtonElement>["linearNavigationParameters"], "getHighestIndex" | "isValid" | "indexDemangler" | "indexMangler">;
}

export interface UseAccordionReturnType<HeaderButtonElement extends Element, M extends UseAccordionSectionInfo> extends UseManagedChildrenReturnType<M> {
    /** **STABLE** */
    accordionReturn: { changeExpandedIndex: PassiveStateUpdater<number | null, Event> }
    context: UseAccordionContext<HeaderButtonElement, M>;
}


export interface UseAccordionSectionInfo extends ManagedChildInfo<number> {
    setOpenFromParent(open: boolean): void;
    getOpenFromParent(): boolean | null;
    setMostRecentlyTabbed(tabbed: boolean): void;
    getMostRecentlyTabbed(): boolean | null;
    focusSelf(): void;
    disabled: DisabledType;
    hidden: boolean;
}

export interface UseAccordionSectionParameters<HeaderButtonElement extends Element, M extends UseAccordionSectionInfo> extends
    Omit<UseTypeaheadNavigationChildParameters<HeaderButtonElement>, "refElementReturn" | "typeaheadNavigationChildContext">,
    UseRefElementParameters<HeaderButtonElement> {
    managedChildParameters: OmitStrong<UseManagedChildParameters<M>["managedChildParameters"], never>;
    context: UseAccordionContext<HeaderButtonElement, M>;
    rovingTabIndexChildParameters: Pick<UseRovingTabIndexChildParameters<any>["rovingTabIndexChildParameters"], "hidden">;
    accordionSectionParameters: {
        /** 
         * If this prop is `true` or `false` isn't null, then this section
         * will be open/closed regardless of what the parent's singular open index is.
         * 
         * In other words, leave null to only allow one section to be open at a time,
         * or to allow multiple sections to be open at once, 
         * set the parent's index to null and toggle this `true`/`false` when the button's pressed
         */
        open: boolean | undefined;
        /** Generally `"region"` */
        bodyRole: string;
    }
    buttonParameters: OmitStrong<UseButtonParameters<HeaderButtonElement>["buttonParameters"], "pressed" | "role">;
    pressParameters: OmitStrong<UseButtonParameters<HeaderButtonElement>["pressParameters"], never>;

}

export interface UseAccordionSectionReturnType<HeaderElement extends Element, HeaderButtonElement extends Element, BodyElement extends Element> extends
    UsePressReturnType<HeaderButtonElement>,
    UseRefElementReturnType<HeaderButtonElement>,
    UseTextContentReturnType {
    accordionSectionReturn: {
        expanded: boolean;
        focused: boolean;
        mostRecentlyTabbed: boolean;
    }

    propsHeaderButton: h.JSX.HTMLAttributes<HeaderButtonElement>;
    propsHeader: h.JSX.HTMLAttributes<HeaderElement>;
    propsBody: h.JSX.HTMLAttributes<BodyElement>
}

export interface UseAccordionContext<HeaderButtonElement extends Element, M extends UseAccordionSectionInfo> extends UseManagedChildrenContext<M>, UseTypeaheadNavigationContext {
    accordionSectionParameters: {
        changeTabbedIndex: PassiveStateUpdater<number | null, Event>;
        changeExpandedIndex: PassiveStateUpdater<number | null, Event>;
        getExpandedIndex: () => (number | null);
        getTabbedIndex: () => (number | null);
        stableTypeaheadProps: h.JSX.HTMLAttributes<HeaderButtonElement>;
    }
    linearNavigationParameters: UseLinearNavigationParameters<HeaderButtonElement, HeaderButtonElement>["linearNavigationParameters"];
    rovingTabIndexReturn: UseLinearNavigationParameters<HeaderButtonElement, HeaderButtonElement>["rovingTabIndexReturn"];
}

export function useAccordion<HeaderButtonElement extends Element, M extends UseAccordionSectionInfo>({
    accordionParameters: { initialIndex, localStorageKey },
    typeaheadNavigationParameters,
    linearNavigationParameters: { disableArrowKeys, disableHomeEndKeys, navigationDirection, navigatePastEnd, navigatePastStart, pageNavigationSize },
    managedChildrenParameters: { onAfterChildLayoutEffect, onChildrenMountChange }
}: UseAccordionParameters<HeaderButtonElement, M>): UseAccordionReturnType<HeaderButtonElement, M> {
    debugLog("useAccordian");
    //const [_currentFocusedIndex, setCurrentFocusedIndex, getCurrentFocusedIndex] = useState<number | null>(null);



    const [localStorageIndex, setLocalStorageIndex] = usePersistentState<never, number | null>(localStorageKey ?? null, initialIndex ?? null);
    if (localStorageIndex != null)
        initialIndex = localStorageIndex;

    const mcReturnType = useManagedChildren<M>({
        managedChildrenParameters: {
            onChildrenMountChange: useStableCallback<OnChildrenMountChange<number>>((m, u) => { ocmc2(); onChildrenMountChange?.(m, u); }),
            onAfterChildLayoutEffect
        }
    });

    const { managedChildrenReturn: { getChildren }, context } = mcReturnType;

    const isValid = useCallback((c: M) => (!c.disabled && !c.hidden), []);
    const isValid2 = useCallback((c: number): boolean => {
        const child = getChildren().getAt(c);
        if (child) {
            return isValid(child);
        }
        return false;
    }, []);


    const { changeIndex: changeExpandedIndexLocalOnly, getCurrentIndex: getCurrentExpandedIndex } = useChildrenFlag<M, Event>({
        initialIndex,
        getChildren,
        getAt: useCallback((child) => { return child.getOpenFromParent() ?? false; }, []),
        setAt: useCallback((child, open) => { return child.setOpenFromParent(open); }, []),
        isValid,
        onIndexChange: null,
        //key: "open",
        closestFit: false
    });

    const { changeIndex: changeTabbedIndex, getCurrentIndex: getTabbedIndex, reevaluateClosestFit: ocmc2 } = useChildrenFlag<M, Event>({
        initialIndex,
        getChildren,
        getAt: useCallback((child) => { return child.getMostRecentlyTabbed() ?? false; }, []),
        setAt: useCallback((child, tabbed) => { return child.setMostRecentlyTabbed(tabbed); }, []),
        isValid,
        closestFit: true,
        onIndexChange: useCallback((i: number | null) => {
            if (i != null) {
                getChildren().getAt(i)?.focusSelf();
            }
        }, [])
    });

    const changeExpandedIndex = useStableCallback<typeof changeExpandedIndexLocalOnly>((value) => {
        changeExpandedIndexLocalOnly(value);
        setLocalStorageIndex(value);
    })

    //const navigateAbsolute = useCallback((i: number) => { return changeTabbedIndex(i); }, []);
    //const navigateRelative = useCallback((s: number, o: number) => { return changeTabbedIndex(o + s); }, []);

    const rovingTabIndexReturn = useStableObject({
        getTabbableIndex: getTabbedIndex,
        setTabbableIndex: changeTabbedIndex
    })

    const {
        typeaheadNavigationChildContext,
        typeaheadNavigationReturn
    } = useTypeaheadNavigation<HeaderButtonElement, HeaderButtonElement>({
        rovingTabIndexReturn,
        typeaheadNavigationParameters
    })

    return {
        context: useStableObject<UseAccordionContext<HeaderButtonElement, M>>({
            ...context,
            ...typeaheadNavigationChildContext,
            accordionSectionParameters: useStableObject({
                changeExpandedIndex,
                changeTabbedIndex,
                getExpandedIndex: getCurrentExpandedIndex,
                getTabbedIndex: getTabbedIndex,
                stableTypeaheadProps: typeaheadNavigationReturn.propsStable,
            }),
            linearNavigationParameters: useStableObject({
                disableArrowKeys,
                disableHomeEndKeys,
                getHighestIndex: useCallback(() => getChildren().getHighestIndex(), []),
                indexMangler: identity,
                indexDemangler: identity,
                navigationDirection,
                isValid: isValid2,
                navigatePastEnd,
                navigatePastStart,
                pageNavigationSize
            }),
            rovingTabIndexReturn
        }),
        managedChildrenReturn: mcReturnType.managedChildrenReturn,
        accordionReturn: useStableObject({ changeExpandedIndex })
    };
}

function identity<T>(t: T) { return t; }




export function useAccordionSection<_HeaderContainerElement extends Element, HeaderButtonElement extends Element, BodyElement extends Element>({
    buttonParameters,
    pressParameters: { },
    accordionSectionParameters: { open: openFromUser, bodyRole },
    managedChildParameters: { index },
    rovingTabIndexChildParameters: { hidden },
    textContentParameters,
    //managedChildContext,
    context,
    context: {
        accordionSectionParameters: { changeExpandedIndex, changeTabbedIndex: _setCurrentFocusedIndex, getTabbedIndex: getCurrentFocusedIndex, stableTypeaheadProps },
        linearNavigationParameters,
        rovingTabIndexReturn,
        typeaheadNavigationChildParameters,
    },
    refElementParameters,
}: UseAccordionSectionParameters<HeaderButtonElement, UseAccordionSectionInfo>): UseAccordionSectionReturnType<_HeaderContainerElement, HeaderButtonElement, BodyElement> {

    const { disabled, onPress: userOnPress } = buttonParameters;

    debugLog("useAccordianSection");
    const [openFromParent, setOpenFromParent, getOpenFromParent] = useState<boolean | null>(null);
    const [mostRecentlyTabbed, setMostRecentlyTabbed, getMostRecentlyTabbed] = useState<boolean | null>(null);

    type M = UseAccordionSectionInfo;


    const { randomIdReturn: _bodyIdReturn, propsSource: propsBodySource, propsReferencer: propsHeadReferencer } = useRandomId<BodyElement, HeaderButtonElement>({ randomIdParameters: { prefix: Prefices.accordionSectionHeaderButton, otherReferencerProp: "aria-controls" } });
    const { randomIdReturn: _headIdReturn, propsSource: propsHeadSource, propsReferencer: propsBodyReferencer } = useRandomId<HeaderButtonElement, BodyElement>({ randomIdParameters: { prefix: Prefices.accordionSectionBody, otherReferencerProp: "aria-labelledby" } });
    //const { randomIdSourceReturn: { propsStable: useBodyAsSourceIdProps } } = useBodyAsSourceId();
    //const { randomIdReferencerReturn: { propsStable: useBodyAsReferencerIdProps } } = useBodyAsReferencerId<BodyElement>({ randomIdReferencerParameters: { otherReferencerProp: "aria-controls" as never } });
    //const { randomIdSourceReturn: { propsStable: useHeaderAsSourceIdProps } } = useHeaderAsSourceId();
    //const { randomIdReferencerReturn: { propsStable: useHeaderAsReferencerIdProps } } = useHeaderAsReferencerId<HeaderElement>({ randomIdReferencerParameters: { otherReferencerProp: "aria-labelledby" as never } });

    const open = ((openFromUser ?? openFromParent) ?? false);
    //const getOpen = useStableGetter(!!open);
    const _getIndex = useStableGetter(index);

    const { refElementReturn: { getElement: getHeaderElement, propsStable: headerRefElementProps } } = useRefElement<HeaderButtonElement>({ refElementParameters: {} });
    const { refElementReturn: { getElement: _getBodyElement, propsStable: bodyRefElementProps } } = useRefElement<BodyElement>({ refElementParameters: {} });
    const focusSelf = useCallback(() => {
        //if (getCurrentFocusedIndex() != null)
        (getHeaderElement() as Element as HTMLElement | undefined)?.focus();
    }, []);

    const { managedChildReturn: { getChildren: _getSections } } = useManagedChild<M>({
        context,
        managedChildParameters: {
            index: index,
        }
    }, {
        index,
        disabled,
        focusSelf,
        getMostRecentlyTabbed,
        getOpenFromParent,
        hidden,
        setMostRecentlyTabbed,
        setOpenFromParent,
    });

    //const onFocus = () => { changeTabbedIndex(index); }
    const onPress = (e: ButtonPressEvent<HeaderButtonElement>) => {
        if (getOpenFromParent())
            changeExpandedIndex(null);
        else
            changeExpandedIndex(index);

        userOnPress?.(e);
    };


    const linearReturnType = useLinearNavigation<HeaderButtonElement, HeaderButtonElement>({ linearNavigationParameters, rovingTabIndexReturn });
    const {
        pressParameters: { excludeSpace },
        textContentReturn
    } = useTypeaheadNavigationChild<HeaderButtonElement>({
        managedChildParameters: { index },
        refElementReturn: { getElement: useStableCallback(() => refElementReturn.getElement()) },
        textContentParameters,
        typeaheadNavigationChildContext: { typeaheadNavigationChildParameters }
    })

    const buttonReturn: UseButtonReturnType<HeaderButtonElement> = useButton<HeaderButtonElement>({
        buttonParameters: { ...buttonParameters, pressed: null, onPress, role: "button" },
        pressParameters: { excludeSpace },
        refElementParameters
    });

    const { pressReturn, props: buttonProps, refElementReturn } = buttonReturn;

    const { linearNavigationReturn: { propsStable } } = linearReturnType;

    /*function useAccordionSectionHeaderProps({ ["aria-expanded"]: ariaExpanded, ["aria-disabled"]: ariaDisabled, ...props }: h.JSX.HTMLAttributes<HeaderElement>): h.JSX.HTMLAttributes<HeaderElement> {

            props.tabIndex = 0;


            return useMergedProps(useHeaderAsSourceIdProps, useHeaderAsReferencerIdProps, propsStable, {
                "aria-expanded": (ariaExpanded ?? open ?? false).toString(),
                "aria-disabled": (ariaDisabled ?? (open ? "true" : undefined)),
                ...useMergedProps(headerRefElementProps, useButtonProps(props))
            } as h.JSX.HTMLAttributes<HeaderElement>);
        }


        function useAccordionSectionBodyProps({ role, ...props }: h.JSX.HTMLAttributes<BodyElement>): h.JSX.HTMLAttributes<BodyElement> {
            const ret1 = useMergedProps(useBodyAsReferencerIdProps, { role: role ?? "region", ...props });
            const ret2 = useMergedProps(useBodyAsSourceIdProps, ret1);
            ret2.tabIndex ??= -1;
            return useMergedProps(bodyRefElementProps, ret2);
    }*/

    const headerButtonProps = useMergedProps<HeaderButtonElement>(
        buttonProps,
        headerRefElementProps,
        propsHeadReferencer,
        propsHeadSource,
        propsStable,
        stableTypeaheadProps,
        { "aria-expanded": (open ?? false).toString(), }
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
        propsBody: bodyProps
    };
}