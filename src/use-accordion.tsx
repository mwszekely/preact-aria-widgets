import { h } from "preact";
import { OnChildrenMountChange, returnTrue, useChildrenFlag, useLinearNavigation, UseLinearNavigationParameters, UseManagedChildParameters, useManagedChildren, UseManagedChildrenParameters, UseManagedChildrenReturnTypeInfo, useMergedProps, useRandomId, useRefElement, UseRefElementParameters, useStableCallback, useStableGetter, useState } from "preact-prop-helpers";
import { useCallback, useRef } from "preact/hooks";
import { debugLog } from "./props";
import { useButton, UseButtonParameters } from "./use-button";

export type UseAccordion<HeaderElement extends Element, BodyElement extends Element, AccSubInfo> = (args: UseAccordionParameters) => UseAccordionReturnTypeWithHooks<HeaderElement, BodyElement, AccSubInfo>;
export type UseAccordionSection<HeaderElement extends Element, BodyElement extends Element, AccSubInfo> = (args: UseAccordionSectionParameters<HeaderElement, AccSubInfo, never, AccSubInfo>) => UseAccordionSectionReturnTypeWithHooks<HeaderElement, BodyElement>;

export interface UseAccordionParameters extends UseLinearNavigationParameters<"navigateToFirst" | "navigateToLast" | "navigateToNext" | "navigateToPrev">, UseManagedChildrenParameters<number, never> {
    accordionParameters: { initialIndex?: number | null; }
}

export interface UseAccordionReturnTypeInfo<AccSubInfo> extends UseManagedChildrenReturnTypeInfo<number, UseAccordionSectionInfoBase<AccSubInfo>, "tabbed" | "open"> {
    /** **STABLE** */
    accordionReturn: { changeExpandedIndex: (arg: number | ((prevState: number | null) => number | null) | null) => number | null; }
}

export interface UseAccordionReturnTypeWithHooks<HeaderElement extends Element, BodyElement extends Element, AccSubInfo> extends UseAccordionReturnTypeInfo<AccSubInfo> {
    /** **STABLE** */
    useAccordionSection: UseAccordionSection<HeaderElement, BodyElement, AccSubInfo>;
}

export interface UseAccordionSectionInfoBase<AccSubInfo> {
    setOpenFromParent(open: boolean): void;
    getOpenFromParent(): boolean | null;
    focus(): void;
    subInfo: AccSubInfo;
}

export interface UseAccordionSectionParameters<HeaderElement extends Element, AccSubInfo, K extends string, SubbestInfo> extends
    UseManagedChildParameters<number, UseAccordionSectionInfoBase<AccSubInfo>, K | "tabbed" | "open", never, SubbestInfo>,
    UseRefElementParameters<HeaderElement> {
    accordionSectionParameters: { open?: boolean | undefined; }
    accordionButtonParameters: Omit<UseButtonParameters<HeaderElement>["buttonParameters"], "pressed" | "onPress">;
    //hasFocusParameters: ;
}

export interface UseAccordionSectionReturnTypeInfo {
    accordionSectionReturn: {
        expanded: boolean;
        focused: boolean;
    }
}

export interface UseAccordionSectionReturnTypeWithHooks<HeaderElement extends Element, BodyElement extends Element> extends UseAccordionSectionReturnTypeInfo {
    /** *Unstable* */
    useAccordionSectionHeaderProps: (props: h.JSX.HTMLAttributes<HeaderElement>) => h.JSX.HTMLAttributes<HeaderElement>;
    /** *Unstable* */
    useAccordionSectionBodyProps: (props: h.JSX.HTMLAttributes<BodyElement>) => h.JSX.HTMLAttributes<BodyElement>;
}


export function useAccordion<HeaderElement extends HTMLElement, BodyElement extends HTMLElement | SVGElement, AccSubInfo>({
    accordionParameters: { initialIndex },
    linearNavigationParameters: { disableArrowKeys, disableHomeEndKeys, navigationDirection },
    managedChildrenParameters: { onAfterChildLayoutEffect, onChildrenMountChange }
}: UseAccordionParameters): UseAccordionReturnTypeWithHooks<HeaderElement, BodyElement, AccSubInfo> {
    debugLog("useAccordian");
    const [_currentFocusedIndex, setCurrentFocusedIndex, getCurrentFocusedIndex] = useState<number | null>(null);

    const mcReturnType = useManagedChildren<number, UseAccordionSectionInfoBase<AccSubInfo>, "tabbed" | "open">({
        managedChildrenParameters: {
            onChildrenMountChange: useStableCallback<OnChildrenMountChange<number>>((m, u) => { ocmc2(); onChildrenMountChange?.(m, u); }),
            onAfterChildLayoutEffect
        }
    });

    const { useManagedChild, managedChildrenReturn: { children } } = mcReturnType;

    const navigateToFirst = useCallback(() => { changeTabbedIndex(0); }, []);
    const navigateToLast = useCallback(() => { changeTabbedIndex(children.getHighestIndex()); }, []);
    const navigateToPrev = useCallback(() => { changeTabbedIndex(i => ((i ?? 0) - 1)) }, []);
    const navigateToNext = useCallback(() => { changeTabbedIndex(i => ((i ?? 0) + 1)) }, []);
    const linearReturnType = useLinearNavigation<HeaderElement>({
        linearNavigationParameters: {
            navigateToFirst,
            navigateToLast,
            navigateToNext,
            navigateToPrev,
            disableArrowKeys,
            disableHomeEndKeys,
            navigationDirection: navigationDirection ?? "vertical"  // TODO: Make this relative to the page's logical direction
        }
    });

    const { linearNavigationReturn: { propsStable } } = linearReturnType;


    const { changeIndex: changeExpandedIndex, getCurrentIndex: _getCurrentExpandedIndex } = useChildrenFlag({
        initialIndex,
        children,
        key: "open",
        closestFit: false
    });

    const { changeIndex: changeTabbedIndex, getCurrentIndex: _getTabbedIndex, reevaluateClosestFit: ocmc2 } = useChildrenFlag({
        initialIndex,
        children,
        key: "tabbed",
        closestFit: true,
        onIndexChange: useCallback((i: number | null) => {
            if (i != null) {
                children.getAt(i)?.subInfo.focus();
            }
        }, [])
    })

    const useAccordionSection: UseAccordionSection<HeaderElement, BodyElement, AccSubInfo> = useCallback<UseAccordionSection<HeaderElement, BodyElement, AccSubInfo>>(({
        accordionButtonParameters: { disabled, tagButton },
        accordionSectionParameters: { open: openFromUser },
        managedChildParameters: { index, flags },
        subInfo,
        refElementParameters
     }): UseAccordionSectionReturnTypeWithHooks<HeaderElement, BodyElement> => {

        debugLog("useAccordianSection");
        const [openFromParent, setOpenFromParent, getOpenFromParent] = useState<boolean | null>(null);



        const { useRandomIdSourceElement: useBodyAsSourceId, useRandomIdReferencerElement: useHeaderAsReferencerId } = useRandomId<BodyElement>({ randomIdParameters: { prefix: "aria-accordion-section-body-" } });
        const { useRandomIdSourceElement: useHeaderAsSourceId, useRandomIdReferencerElement: useBodyAsReferencerId } = useRandomId<HeaderElement>({ randomIdParameters: { prefix: "aria-accordion-section-header-" } });
        const { randomIdSourceReturn: {propsStable: useBodyAsSourceIdProps} } = useBodyAsSourceId();
        const { randomIdReferencerReturn: {propsStable: useBodyAsReferencerIdProps} } = useBodyAsReferencerId<BodyElement>({ randomIdReferencerParameters: { referencerProp: "aria-controls" as never } });
        const { randomIdSourceReturn: {propsStable: useHeaderAsSourceIdProps} } = useHeaderAsSourceId();
        const { randomIdReferencerReturn: {propsStable: useHeaderAsReferencerIdProps} } = useHeaderAsReferencerId<HeaderElement>({ randomIdReferencerParameters: { referencerProp: "aria-labelledby" as never }});

        const open = ((openFromUser ?? openFromParent) ?? false);
        //const getOpen = useStableGetter(!!open);
        const getIndex = useStableGetter(index);

        const { refElementReturn: { getElement: getHeaderElement, propsStable: headerRefElementProps } } = useRefElement<HeaderElement>({ refElementParameters: {} });
        const { refElementReturn: { getElement: getBodyElement, propsStable: bodyRefElementProps } } = useRefElement<BodyElement>({ refElementParameters: {} });
        const focus = useCallback(() => {
            if (getCurrentFocusedIndex() != null)
                (getHeaderElement() as Element as HTMLElement | undefined)?.focus();
        }, []);
        const openRef = useRef({
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
        });
        const __: void = useManagedChild({
            managedChildParameters: {
                index: index,
                flags: {
                    open: openRef.current,
                    tabbed: tabbedRef.current,
                    ...flags
                }
            },
            subInfo: {
                focus,
                getOpenFromParent,
                setOpenFromParent,
                subInfo
            }
        });

        //const onFocus = () => { changeTabbedIndex(index); }
        const onPress = () => {
            if (getOpenFromParent())
                changeExpandedIndex(null);
            else
                changeExpandedIndex(index);
        };

        const { useButtonProps } = useButton<HeaderElement>({
            buttonParameters: { tagButton, disabled, onPress }, 
            refElementParameters
        });
        
        function useAccordionSectionHeaderProps({ ["aria-expanded"]: ariaExpanded, ["aria-disabled"]: ariaDisabled, ...props }: h.JSX.HTMLAttributes<HeaderElement>): h.JSX.HTMLAttributes<HeaderElement> {

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
        }

        return {
            accordionSectionReturn: {
                expanded: open,
                focused: (getCurrentFocusedIndex() == index)
            },
            useAccordionSectionHeaderProps,
            useAccordionSectionBodyProps,

        }
    }, []);

    return {
        managedChildrenReturn: mcReturnType.managedChildrenReturn,
        accordionReturn: { changeExpandedIndex },
        useAccordionSection,
    }
}



