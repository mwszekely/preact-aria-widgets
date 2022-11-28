import { h } from "preact";
import { ManagedChildInfo, OnChildrenMountChange, useChildrenFlag, useLinearNavigation, UseLinearNavigationParameters, useManagedChild, UseManagedChildParameters, useManagedChildren, UseManagedChildrenContext, UseManagedChildrenParameters, UseManagedChildrenReturnType, useMergedProps, UsePressReturnType, useRandomId, useRefElement, UseRefElementParameters, UseRefElementReturnType, UseRovingTabIndexChildParameters, useStableCallback, useStableGetter, useStableObject, useState } from "preact-prop-helpers";
import { StateUpdater, useCallback } from "preact/hooks";
import { debugLog, DisabledType } from "./props";
import { ButtonPressEvent, useButton, UseButtonParameters } from "./use-button";

export type UseAccordion<M extends UseAccordionSectionInfo> = (args: UseAccordionParameters<M>) => UseAccordionReturnType<M>;
//export type UseAccordionSection<HeaderElement extends Element, BodyElement extends Element, M extends UseAccordionSectionInfo> = (args: UseAccordionSectionParameters<HeaderElement, M>) => UseAccordionSectionReturnType<HeaderElement, BodyElement>;

export interface UseAccordionParameters<M extends UseAccordionSectionInfo> extends UseManagedChildrenParameters<M> {
    accordionParameters: { initialIndex?: number | null; }
    linearNavigationParameters: Omit<UseLinearNavigationParameters["linearNavigationParameters"], "navigateRelative" | "navigateAbsolute" | "getHighestIndex" | "isValid" | "indexDemangler" | "indexMangler">;
}

export interface UseAccordionReturnType<M extends UseAccordionSectionInfo> extends UseManagedChildrenReturnType<M> {
    /** **STABLE** */
    accordionReturn: { changeExpandedIndex: (arg: number | ((prevState: number | null) => number | null) | null) => number | null; }
    context: UseAccordionContext<M>;
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
    UseRefElementParameters<HeaderButtonElement> {
    managedChildParameters: Omit<UseManagedChildParameters<M, never>["managedChildParameters"], "setOpenFromParent" | "getOpenFromParent" | "setMostRecentlyTabbed" | "getMostRecentlyTabbed" | "focusSelf" | "disabled">;
    context: UseAccordionContext<M>;
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
    buttonParameters: Omit<UseButtonParameters<HeaderButtonElement>["buttonParameters"], "pressed" | "role">;
    pressParameters: Omit<UseButtonParameters<HeaderButtonElement>["pressParameters"], "onPressSync">;

}

export interface UseAccordionSectionReturnType<HeaderElement extends Element, HeaderButtonElement extends Element, BodyElement extends Element> extends UsePressReturnType<HeaderButtonElement>, UseRefElementReturnType<HeaderButtonElement> {
    accordionSectionReturn: {
        expanded: boolean;
        focused: boolean;
        mostRecentlyTabbed: boolean;
    }

    propsHeaderButton: h.JSX.HTMLAttributes<HeaderButtonElement>;
    propsHeader: h.JSX.HTMLAttributes<HeaderElement>;
    propsBody: h.JSX.HTMLAttributes<BodyElement>
}

export interface UseAccordionContext<M extends UseAccordionSectionInfo> extends UseManagedChildrenContext<M> {
    accordionSectionParameters: {
        changeTabbedIndex: StateUpdater<number | null>;
        changeExpandedIndex: StateUpdater<number | null>;
        getExpandedIndex: () => (number | null);
        getTabbedIndex: () => (number | null);
    }
    linearNavigationParameters: UseLinearNavigationParameters["linearNavigationParameters"];
    rovingTabIndexReturn: UseLinearNavigationParameters["rovingTabIndexReturn"];
}

export function useAccordion<M extends UseAccordionSectionInfo>({
    accordionParameters: { initialIndex },
    linearNavigationParameters: { disableArrowKeys, disableHomeEndKeys, navigationDirection, navigatePastEnd, navigatePastStart, pageNavigationSize },
    managedChildrenParameters: { onAfterChildLayoutEffect, onChildrenMountChange }
}: UseAccordionParameters<M>): UseAccordionReturnType<M> {
    debugLog("useAccordian");
    //const [_currentFocusedIndex, setCurrentFocusedIndex, getCurrentFocusedIndex] = useState<number | null>(null);

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


    const { changeIndex: changeExpandedIndex, getCurrentIndex: _getCurrentExpandedIndex } = useChildrenFlag({
        initialIndex,
        getChildren,
        getAt: useCallback((child) => { return child.getOpenFromParent(); }, []),
        setAt: useCallback((child, open) => { return child.setOpenFromParent(open); }, []),
        isValid,
        onIndexChange: null,
        //key: "open",
        closestFit: false
    });

    const { changeIndex: changeTabbedIndex, getCurrentIndex: _getTabbedIndex, reevaluateClosestFit: ocmc2 } = useChildrenFlag({
        initialIndex,
        getChildren,
        getAt: useCallback((child) => { return child.getMostRecentlyTabbed(); }, []),
        setAt: useCallback((child, tabbed) => { return child.setMostRecentlyTabbed(tabbed); }, []),
        isValid,
        closestFit: true,
        onIndexChange: useCallback((i: number | null) => {
            if (i != null) {
                getChildren().getAt(i)?.focusSelf();
            }
        }, [])
    })

    //const navigateAbsolute = useCallback((i: number) => { return changeTabbedIndex(i); }, []);
    //const navigateRelative = useCallback((s: number, o: number) => { return changeTabbedIndex(o + s); }, []);


    return {
        context: useStableObject<UseAccordionContext<M>>({
            ...context,
            accordionSectionParameters: useStableObject({
                changeExpandedIndex,
                changeTabbedIndex,
                getExpandedIndex: _getCurrentExpandedIndex,
                getTabbedIndex: _getTabbedIndex
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
            rovingTabIndexReturn: useStableObject({
                getTabbableIndex: _getCurrentExpandedIndex,
                setTabbableIndex: changeTabbedIndex
            })
        }),
        managedChildrenReturn: mcReturnType.managedChildrenReturn,
        accordionReturn: useStableObject({ changeExpandedIndex })
    };
}

function identity<T>(t: T) { return t; }




export function useAccordionSection<_HeaderContainerElement extends Element, HeaderButtonElement extends Element, BodyElement extends Element>({
    buttonParameters,
    pressParameters: { exclude },
    accordionSectionParameters: { open: openFromUser, bodyRole },
    managedChildParameters: { index },
    rovingTabIndexChildParameters: { hidden },
    //managedChildContext,
    context,
    context: {
        accordionSectionParameters: { changeExpandedIndex, changeTabbedIndex: _setCurrentFocusedIndex, getTabbedIndex: getCurrentFocusedIndex },
        linearNavigationParameters,
        rovingTabIndexReturn
    },
    refElementParameters,
}: UseAccordionSectionParameters<HeaderButtonElement, UseAccordionSectionInfo>): UseAccordionSectionReturnType<_HeaderContainerElement, HeaderButtonElement, BodyElement> {

    const { disabled, onPress: userOnPress } = buttonParameters;

    debugLog("useAccordianSection");
    const [openFromParent, setOpenFromParent, getOpenFromParent] = useState<boolean | null>(null);
    const [mostRecentlyTabbed, setMostRecentlyTabbed, getMostRecentlyTabbed] = useState<boolean | null>(null);

    type M = UseAccordionSectionInfo;


    const { randomIdReturn: _bodyIdReturn, propsSource: propsBodySource, propsReferencer: propsHeadReferencer } = useRandomId<BodyElement, HeaderButtonElement>({ randomIdParameters: { prefix: "aria-accordion-section-body-", referencerProp: "aria-controls" } });
    const { randomIdReturn: _headIdReturn, propsSource: propsHeadSource, propsReferencer: propsBodyReferencer } = useRandomId<HeaderButtonElement, BodyElement>({ randomIdParameters: { prefix: "aria-accordion-section-header-", referencerProp: "aria-labelledby" } });
    //const { randomIdSourceReturn: { propsStable: useBodyAsSourceIdProps } } = useBodyAsSourceId();
    //const { randomIdReferencerReturn: { propsStable: useBodyAsReferencerIdProps } } = useBodyAsReferencerId<BodyElement>({ randomIdReferencerParameters: { referencerProp: "aria-controls" as never } });
    //const { randomIdSourceReturn: { propsStable: useHeaderAsSourceIdProps } } = useHeaderAsSourceId();
    //const { randomIdReferencerReturn: { propsStable: useHeaderAsReferencerIdProps } } = useHeaderAsReferencerId<HeaderElement>({ randomIdReferencerParameters: { referencerProp: "aria-labelledby" as never } });

    const open = ((openFromUser ?? openFromParent) ?? false);
    //const getOpen = useStableGetter(!!open);
    const _getIndex = useStableGetter(index);

    const { refElementReturn: { getElement: getHeaderElement, propsStable: headerRefElementProps } } = useRefElement<HeaderButtonElement>({ refElementParameters: {} });
    const { refElementReturn: { getElement: _getBodyElement, propsStable: bodyRefElementProps } } = useRefElement<BodyElement>({ refElementParameters: {} });
    const focusSelf = useCallback(() => {
        if (getCurrentFocusedIndex() != null)
            (getHeaderElement() as Element as HTMLElement | undefined)?.focus();
    }, []);
    /*const openRef = useRef({
            get: () => !!getOpenFromParent(),
            set: (open: boolean) => {
                setOpenFromParent(open);

                if (open) {
                    const bodyElement = getBodyElement();
                    setCurrentFocusedIndex(getIndex());
                    if (bodyElement) {
                        queueMicrotask(() => bodyElement.focus());
                }
            }
            },
            isValid: returnTrue
        });
        const tabbedRef = useRef({
            get: () => (getCurrentFocusedIndex() == getIndex()),
            set: (open: boolean) => {
                if (open)
                    setCurrentFocusedIndex(getIndex());
            },
            isValid: returnTrue
    });*/
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

    const { pressReturn, props: buttonProps, refElementReturn } = useButton<HeaderButtonElement>({
        buttonParameters: { ...buttonParameters, pressed: null, onPress, role: "button" },
        pressParameters: { exclude },
        refElementParameters
    });


    const linearReturnType = useLinearNavigation<HeaderButtonElement>({ linearNavigationParameters, rovingTabIndexReturn });

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