import { h } from "preact";
import { ManagedChildInfo, OnChildrenMountChange, useChildrenFlag, useLinearNavigation, UseLinearNavigationParameters, useManagedChild, UseManagedChildParameters, useManagedChildren, UseManagedChildrenParameters, UseManagedChildrenReturnType, useMergedProps, UsePressReturnType, useRandomId, useRefElement, UseRefElementParameters, UseRefElementReturnType, useStableCallback, useStableGetter, useStableObject, useState } from "preact-prop-helpers";
import { StateUpdater, useCallback } from "preact/hooks";
import { debugLog, DisabledType } from "./props";
import { useButton, UseButtonParameters } from "./use-button";

export type UseAccordion<M extends UseAccordionSectionInfo> = (args: UseAccordionParameters<M>) => UseAccordionReturnType<M>;
export type UseAccordionSection<HeaderElement extends Element, BodyElement extends Element, M extends UseAccordionSectionInfo> = (args: UseAccordionSectionParameters<HeaderElement, M>) => UseAccordionSectionReturnType<HeaderElement, BodyElement>;

export interface UseAccordionParameters<M extends UseAccordionSectionInfo> extends UseManagedChildrenParameters<M> {
    accordionParameters: { initialIndex?: number | null; }
    linearNavigationParameters: Omit<UseLinearNavigationParameters["linearNavigationParameters"], "navigateRelative" | "navigateAbsolute">;
}

export interface UseAccordionReturnType<M extends UseAccordionSectionInfo> extends UseManagedChildrenReturnType<M> {
    /** **STABLE** */
    accordionReturn: { changeExpandedIndex: (arg: number | ((prevState: number | null) => number | null) | null) => number | null; }
    accordionSectionContext: {
        accordionSectionParameters: {
            changeTabbedIndex: StateUpdater<number | null>;
            changeExpandedIndex: StateUpdater<number | null>;
            getExpandedIndex: () => (number | null);
            getTabbedIndex: () => (number | null);
        }
        linearNavigationParameters: UseLinearNavigationParameters["linearNavigationParameters"];
        rovingTabIndexReturn: UseLinearNavigationParameters["rovingTabIndexReturn"];
    }
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

export interface UseAccordionSectionParameters<HeaderElement extends Element, M extends UseAccordionSectionInfo> extends
    UseRefElementParameters<HeaderElement> {
    managedChildContext: UseManagedChildParameters<M>["managedChildContext"];
    managedChildParameters: Omit<UseManagedChildParameters<M>["managedChildParameters"], "setOpenFromParent" | "getOpenFromParent" | "setMostRecentlyTabbed" | "getMostRecentlyTabbed" | "focusSelf" | "disabled">;
    accordionSectionContext: UseAccordionReturnType<M>["accordionSectionContext"];
    accordionSectionParameters: {
        open: boolean | undefined;
        /** Generally `"region"` */
        bodyRole: string;
        /**
         * When hidden, this section cannot be selected or opened.
         * 
         * `hidden` implies `accordionButtonParameters.disabled`, but not the other way around
         */
        //hidden: boolean;
    }
    buttonParameters: Omit<UseButtonParameters<HeaderElement>["buttonParameters"], "pressed" | "onPress">;
    pressParameters: Omit<UseButtonParameters<HeaderElement>["pressParameters"], "onPressSync">;

}

export interface UseAccordionSectionReturnType<HeaderElement extends Element, BodyElement extends Element> extends UsePressReturnType<HeaderElement>, UseRefElementReturnType<HeaderElement> {
    accordionSectionReturn: {
        expanded: boolean;
        focused: boolean;
        mostRecentlyTabbed: boolean;
    }

    propsHeaderButton: h.JSX.HTMLAttributes<HeaderElement>;
    propsBody: h.JSX.HTMLAttributes<BodyElement>
}

export function useAccordion<M extends UseAccordionSectionInfo>({
    accordionParameters: { initialIndex },
    linearNavigationParameters: { disableArrowKeys, disableHomeEndKeys, navigationDirection },
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

    const { managedChildrenReturn: { getChildren }, managedChildContext } = mcReturnType;




    const { changeIndex: changeExpandedIndex, getCurrentIndex: _getCurrentExpandedIndex } = useChildrenFlag({
        initialIndex,
        getChildren,
        getAt: useCallback((child) => { return child.getOpenFromParent(); }, []),
        setAt: useCallback((child, open) => { return child.setOpenFromParent(open); }, []),
        isValid: useCallback(c => (!c.disabled && !c.hidden), []),
        onIndexChange: null,
        //key: "open",
        closestFit: false
    });

    const { changeIndex: changeTabbedIndex, getCurrentIndex: _getTabbedIndex, reevaluateClosestFit: ocmc2 } = useChildrenFlag({
        initialIndex,
        getChildren,
        getAt: useCallback((child) => { return child.getMostRecentlyTabbed(); }, []),
        setAt: useCallback((child, tabbed) => { return child.setMostRecentlyTabbed(tabbed); }, []),
        isValid: useCallback(c => (!c.disabled && !c.hidden), []),
        closestFit: true,
        onIndexChange: useCallback((i: number | null) => {
            if (i != null) {
                getChildren().getAt(i)?.focusSelf();
            }
        }, [])
    })

    const navigateAbsolute = useCallback((i: number) => { return changeTabbedIndex(i); }, []);
    const navigateRelative = useCallback((s: number, o: number) => { return changeTabbedIndex(o + s); }, []);



    return {
        managedChildrenReturn: mcReturnType.managedChildrenReturn,
        accordionReturn: { changeExpandedIndex },
        managedChildContext,
        accordionSectionContext: useStableObject({
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
                navigateAbsolute,
                navigateRelative,
                navigationDirection,
            }),
            rovingTabIndexReturn: useStableObject({
                getTabbableIndex: _getCurrentExpandedIndex,
                setTabbableIndex: changeTabbedIndex
            })
        })
    };
}





export function useAccordionSection<HeaderElement extends HTMLElement, BodyElement extends HTMLElement | SVGElement>({
    buttonParameters,
    pressParameters: { exclude, onPseudoActiveStart, onPseudoActiveStop },
    accordionSectionParameters: { open: openFromUser, bodyRole },
    managedChildParameters: { index, hidden },
    managedChildContext,
    accordionSectionContext: {
        accordionSectionParameters: { changeExpandedIndex, changeTabbedIndex: _setCurrentFocusedIndex, getTabbedIndex: getCurrentFocusedIndex },
        linearNavigationParameters,
        rovingTabIndexReturn
    },
    refElementParameters,
}: UseAccordionSectionParameters<HeaderElement, UseAccordionSectionInfo>): UseAccordionSectionReturnType<HeaderElement, BodyElement> {

    const { disabled } = buttonParameters;

    debugLog("useAccordianSection");
    const [openFromParent, setOpenFromParent, getOpenFromParent] = useState<boolean | null>(null);
    const [mostRecentlyTabbed, setMostRecentlyTabbed, getMostRecentlyTabbed] = useState<boolean | null>(null);

    type M = UseAccordionSectionInfo;


    const { useRandomIdSourceElement: useBodyAsSourceId, useRandomIdReferencerElement: useHeaderAsReferencerId } = useRandomId<BodyElement>({ randomIdParameters: { prefix: "aria-accordion-section-body-" } });
    const { useRandomIdSourceElement: useHeaderAsSourceId, useRandomIdReferencerElement: useBodyAsReferencerId } = useRandomId<HeaderElement>({ randomIdParameters: { prefix: "aria-accordion-section-header-" } });
    const { randomIdSourceReturn: { propsStable: useBodyAsSourceIdProps } } = useBodyAsSourceId();
    const { randomIdReferencerReturn: { propsStable: useBodyAsReferencerIdProps } } = useBodyAsReferencerId<BodyElement>({ randomIdReferencerParameters: { referencerProp: "aria-controls" as never } });
    const { randomIdSourceReturn: { propsStable: useHeaderAsSourceIdProps } } = useHeaderAsSourceId();
    const { randomIdReferencerReturn: { propsStable: useHeaderAsReferencerIdProps } } = useHeaderAsReferencerId<HeaderElement>({ randomIdReferencerParameters: { referencerProp: "aria-labelledby" as never } });

    const open = ((openFromUser ?? openFromParent) ?? false);
    //const getOpen = useStableGetter(!!open);
    const _getIndex = useStableGetter(index);

    const { refElementReturn: { getElement: getHeaderElement, propsStable: headerRefElementProps } } = useRefElement<HeaderElement>({ refElementParameters: {} });
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
    const __: void = useManagedChild<M>({
        managedChildContext,
        managedChildParameters: {
            index: index,
            disabled,
            focusSelf,
            getMostRecentlyTabbed,
            getOpenFromParent,
            hidden,
            setMostRecentlyTabbed,
            setOpenFromParent,
        }
    });

    //const onFocus = () => { changeTabbedIndex(index); }
    const onPress = () => {
        if (getOpenFromParent())
            changeExpandedIndex(null);
        else
            changeExpandedIndex(index);
    };

    const { pressReturn, props: buttonProps, refElementReturn } = useButton<HeaderElement>({
        buttonParameters: {...buttonParameters, pressed: null, onPress },
        pressParameters: { exclude, onPseudoActiveStart, onPseudoActiveStop },
        refElementParameters
    });


    const linearReturnType = useLinearNavigation<HeaderElement>({ linearNavigationParameters, rovingTabIndexReturn });

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

    const headerButtonProps = useMergedProps<HeaderElement>(
        buttonProps,
        headerRefElementProps,
        useHeaderAsSourceIdProps,
        useHeaderAsReferencerIdProps,
        propsStable,
        { "aria-expanded": (open ?? false).toString(), }
    );

    const bodyProps = useMergedProps<BodyElement>(
        bodyRefElementProps,
        useBodyAsSourceIdProps,
        useBodyAsReferencerIdProps,
        { role: bodyRole, tabIndex: -1 }
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
        propsBody: bodyProps
    };
}