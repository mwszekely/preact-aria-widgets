import { h } from "preact";
import { OnChildrenMountChange, returnTrue, useChildrenFlag, UseHasFocusParameters, useLinearNavigation, UseLinearNavigationParameters, UseManagedChildParameters, useManagedChildren, UseManagedChildrenParameters, UseManagedChildrenReturnTypeInfo, useMergedProps, useRandomId, useRefElement, useStableCallback, useStableGetter, useState } from "preact-prop-helpers";
import { useCallback, useRef } from "preact/hooks";
import { debugLog } from "./props";
import { useButton, UseButtonParameters } from "./use-button";

export type UseAccordion<HeaderElement extends Element, BodyElement extends Element, AccSubInfo> = (args: UseAccordionParameters) => UseAccordionReturnTypeWithHooks<HeaderElement, BodyElement, AccSubInfo>;
export type UseAccordionSection<HeaderElement extends Element, BodyElement extends Element, AccSubInfo> = (args: UseAccordionSectionParameters<HeaderElement, AccSubInfo, never, AccSubInfo>) => UseAccordionSectionReturnTypeWithHooks<HeaderElement, BodyElement>;

export interface UseAccordionParameters extends UseLinearNavigationParameters<"navigateToFirst" | "navigateToLast" | "navigateToNext" | "navigateToPrev">, UseManagedChildrenParameters<number, never> {
    accordion: { initialIndex?: number | null; }
}

export interface UseAccordionReturnTypeInfo<AccSubInfo> extends UseManagedChildrenReturnTypeInfo<number, UseAccordionSectionInfoBase<AccSubInfo>, "tabbed" | "open"> {
    /** **STABLE** */
    accordion: { changeExpandedIndex: (arg: number | ((prevState: number | null) => number | null) | null) => number | null; }
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

export interface UseAccordionSectionParameters<HeaderElement extends Element, AccSubInfo, K extends string, SubbestInfo> extends UseManagedChildParameters<number, UseAccordionSectionInfoBase<AccSubInfo>, K | "tabbed" | "open", never, SubbestInfo> {
    accordionSection: { open?: boolean | undefined; }
    button: Omit<UseButtonParameters<HeaderElement>["button"], "pressed" | "onPress">;
    hasFocus: UseHasFocusParameters<HeaderElement>;
}

export interface UseAccordionSectionReturnTypeInfo {
    accordionSection: {
        expanded: boolean;
        focused: boolean;
        headerId: string | undefined;
        bodyId: string | undefined;
        getHeaderId(): string | undefined;
        getBodyId(): string | undefined;
    }
}

export interface UseAccordionSectionReturnTypeWithHooks<HeaderElement extends Element, BodyElement extends Element> extends UseAccordionSectionReturnTypeInfo {
    /** *Unstable* */
    useAccordionSectionHeaderProps: (props: h.JSX.HTMLAttributes<HeaderElement>) => h.JSX.HTMLAttributes<HeaderElement>;
    /** *Unstable* */
    useAccordionSectionBodyProps: (props: h.JSX.HTMLAttributes<BodyElement>) => h.JSX.HTMLAttributes<BodyElement>;
}


//export type UseAccordionSectionHeader<E extends Element> = (args: UseButtonParameters<E>) => UseAccordionSectionHeaderReturnType<E>;
//export interface UseAccordionSectionHeaderReturnType<E extends Element> { useAccordionSectionHeaderProps: (props: h.JSX.HTMLAttributes<E>) => h.JSX.HTMLAttributes<E>; }
//export type UseAccordionSectionBody<E extends Element> = () => UseAccordionSectionBodyReturnType<E>;
//export interface UseAccordionSectionBodyReturnType<E extends Element> { useAccordionSectionBodyProps: (props: h.JSX.HTMLAttributes<E>) => h.JSX.HTMLAttributes<E>; }

export function useAccordion<HeaderElement extends HTMLElement, BodyElement extends HTMLElement | SVGElement, AccSubInfo>({ accordion: { initialIndex }, linearNavigation: { disableArrowKeys, disableHomeEndKeys, navigationDirection }, managedChildren: { onAfterChildLayoutEffect, onChildrenMountChange } }: UseAccordionParameters): UseAccordionReturnTypeWithHooks<HeaderElement, BodyElement, AccSubInfo> {
    debugLog("useAccordian");
    const [_currentFocusedIndex, setCurrentFocusedIndex, getCurrentFocusedIndex] = useState<number | null>(null);

    const mcReturnType = useManagedChildren<number, UseAccordionSectionInfoBase<AccSubInfo>, "tabbed" | "open">({
        managedChildren: {
            onChildrenMountChange: useStableCallback<OnChildrenMountChange<number>>((m, u) => { ocmc2(); onChildrenMountChange?.(m, u); }),
            onAfterChildLayoutEffect
        }
    });

    const { useManagedChild, managedChildren: { children } } = mcReturnType;

    const navigateToFirst = useCallback(() => { changeTabbedIndex(0); }, []);
    const navigateToLast = useCallback(() => { changeTabbedIndex(children.getHighestIndex()); }, []);
    const navigateToPrev = useCallback(() => { changeTabbedIndex(i => ((i ?? 0) - 1)) }, []);
    const navigateToNext = useCallback(() => { changeTabbedIndex(i => ((i ?? 0) + 1)) }, []);
    const linearReturnType = useLinearNavigation<HeaderElement>({
        linearNavigation: {
            navigateToFirst,
            navigateToLast,
            navigateToNext,
            navigateToPrev,
            disableArrowKeys,
            disableHomeEndKeys,
            navigationDirection: navigationDirection ?? "vertical"  // TODO: Make this relative to the page's logical direction
        }
    });

    const { linearNavigationProps } = linearReturnType;


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

    const useAccordionSection: UseAccordionSection<HeaderElement, BodyElement, AccSubInfo> = useCallback<UseAccordionSection<HeaderElement, BodyElement, AccSubInfo>>(({ button: { disabled, tagButton }, accordionSection: { open: openFromUser }, managedChild: { index, flags }, subInfo, hasFocus: { onFocusedInnerChanged, ...hasFocus } }) => {

        debugLog("useAccordianSection");
        const [openFromParent, setOpenFromParent, getOpenFromParent] = useState<boolean | null>(null);



        const { useRandomIdSourceElement: useBodyAsSourceId, useRandomIdReferencerElement: useHeaderAsReferencerId, randomId: { usedId: bodyId, getUsedId: getBodyId } } = useRandomId<BodyElement>({ randomId: { prefix: "aria-accordion-section-body-" }, managedChildren: { onAfterChildLayoutEffect: null, onChildrenMountChange: null } });
        const { useRandomIdSourceElement: useHeaderAsSourceId, useRandomIdReferencerElement: useBodyAsReferencerId, randomId: { usedId: headerId, getUsedId: getHeaderId } } = useRandomId<HeaderElement>({ randomId: { prefix: "aria-accordion-section-header-" }, managedChildren: { onAfterChildLayoutEffect: null, onChildrenMountChange: null } });
        const { useRandomIdSourceElementProps: useBodyAsSourceIdProps } = useBodyAsSourceId();
        const { useRandomIdReferencerElementProps: useBodyAsReferencerIdProps } = useBodyAsReferencerId<BodyElement>("aria-labelledby" as never);
        const { useRandomIdSourceElementProps: useHeaderAsSourceIdProps } = useHeaderAsSourceId();
        const { useRandomIdReferencerElementProps: useHeaderAsReferencerIdProps } = useHeaderAsReferencerId<HeaderElement>("aria-controls" as never);

        const open = ((openFromUser ?? openFromParent) ?? false);
        //const getOpen = useStableGetter(!!open);
        const getIndex = useStableGetter(index);

        const { getElement: getHeaderElement, refElementProps: headerRefElementProps } = useRefElement<HeaderElement>({});
        const { getElement: getBodyElement, refElementProps: bodyRefElementProps } = useRefElement<BodyElement>({});
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
            managedChild: {
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
                button: { tagButton, disabled, onPress }, hasFocus: {
                    ...hasFocus,
                    onFocusedInnerChanged: useStableCallback((focused: boolean, prev: boolean | undefined) => {
                        onFocusedInnerChanged?.(focused, prev);
                        if (focused)
                            changeTabbedIndex(index);
                    })
                }
            });
        function useAccordionSectionHeaderProps({ ["aria-expanded"]: ariaExpanded, ["aria-disabled"]: ariaDisabled, ...props }: h.JSX.HTMLAttributes<HeaderElement>): h.JSX.HTMLAttributes<HeaderElement> {

            props.tabIndex = 0;


            return useHeaderAsSourceIdProps(useHeaderAsReferencerIdProps(useMergedProps(linearNavigationProps, {
                "aria-expanded": (ariaExpanded ?? open ?? false).toString(),
                "aria-disabled": (ariaDisabled ?? (open ? "true" : undefined)),
                ...useMergedProps(headerRefElementProps, useButtonProps(props))
            } as h.JSX.HTMLAttributes<HeaderElement>)));
        }


        function useAccordionSectionBodyProps({ role, ...props }: h.JSX.HTMLAttributes<BodyElement>): h.JSX.HTMLAttributes<BodyElement> {
            const ret1 = useBodyAsReferencerIdProps({ role: role ?? "region", ...props });
            const ret2 = useBodyAsSourceIdProps(ret1);
            ret2.tabIndex ??= -1;
            return useMergedProps(bodyRefElementProps, ret2);
        }

        return {
            accordionSection: {
                expanded: open,
                focused: (getCurrentFocusedIndex() == index),
                bodyId,
                headerId,
                getBodyId,
                getHeaderId
            },
            useAccordionSectionHeaderProps,
            useAccordionSectionBodyProps,

        }
    }, []);

    return {
        managedChildren: mcReturnType.managedChildren,
        accordion: { changeExpandedIndex },
        useAccordionSection,
    }
}



