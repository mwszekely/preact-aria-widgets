import { h } from "preact";
import { OnChildrenMountChange, returnTrue, useChildrenFlag, UseHasFocusParameters, useLinearNavigation, UseLinearNavigationParameters, UseManagedChildParameters, useManagedChildren, UseManagedChildrenParameters, UseManagedChildrenReturnTypeInfo, useRandomId, useRefElement, useStableCallback, useStableGetter, useState } from "preact-prop-helpers";
import { useCallback, useRef } from "preact/hooks";
import { debugLog } from "./props";
import { useButton, UseButtonParameters } from "./use-button";

export type UseAccordion<HeaderElement extends Element, BodyElement extends Element> = (args: UseAccordionParameters) => UseAccordionReturnTypeWithHooks<HeaderElement, BodyElement>;
export type UseAccordionSection<HeaderElement extends Element, BodyElement extends Element> = (args: UseAccordionSectionParameters<HeaderElement>) => UseAccordionSectionReturnTypeWithHooks<HeaderElement, BodyElement>;

export interface UseAccordionParameters extends UseLinearNavigationParameters<"navigateToFirst" | "navigateToLast" | "navigateToNext" | "navigateToPrev">, UseManagedChildrenParameters<number, never> {
    accordion: { initialIndex?: number | null; }
}

export interface UseAccordionReturnTypeInfo extends UseManagedChildrenReturnTypeInfo<number, UseAccordionSectionInfoBase, "tabbed" | "open"> {
    /** **STABLE** */
    accordion: { changeExpandedIndex: (arg: number | ((prevState: number | null) => number | null) | null) => number | null; }
}

export interface UseAccordionReturnTypeWithHooks<HeaderElement extends Element, BodyElement extends Element> extends UseAccordionReturnTypeInfo {
    /** **STABLE** */
    useAccordionSection: UseAccordionSection<HeaderElement, BodyElement>;
}

export interface UseAccordionSectionInfoBase {
    setOpenFromParent(open: boolean): void;
    getOpenFromParent(): boolean | null;
    focus(): void;
}

export interface UseAccordionSectionParameters<HeaderElement extends Element> {
    managedChildren: UseManagedChildParameters<number, UseAccordionSectionInfoBase, "tabbed" | "open", "subInfo" | "flags">["managedChild"];
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

export function useAccordion<HeaderElement extends HTMLElement, BodyElement extends HTMLElement | SVGElement>({ accordion: { initialIndex }, linearNavigation: { disableArrowKeys, disableHomeEndKeys, navigationDirection }, managedChildren: { onAfterChildLayoutEffect, onChildrenMountChange } }: UseAccordionParameters): UseAccordionReturnTypeWithHooks<HeaderElement, BodyElement> {
    debugLog("useAccordian");
    const [_currentFocusedIndex, setCurrentFocusedIndex, getCurrentFocusedIndex] = useState<number | null>(null);

    const mcReturnType = useManagedChildren<number, UseAccordionSectionInfoBase, "tabbed" | "open">({
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

    const { useLinearNavigationProps } = linearReturnType;


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

    const useAccordionSection: UseAccordionSection<HeaderElement, BodyElement> = useCallback<UseAccordionSection<HeaderElement, BodyElement>>(({ button: { disabled, tagButton }, accordionSection: { open: openFromUser }, managedChildren: { index }, hasFocus: { onFocusedInnerChanged, ...hasFocus } }) => {

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

        const { getElement: getHeaderElement, useRefElementProps: useHeaderRefElementProps } = useRefElement<HeaderElement>({});
        const { getElement: getBodyElement, useRefElementProps: useBodyRefElementProps } = useRefElement<BodyElement>({});
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
                    tabbed: tabbedRef.current
                },
                subInfo: {
                    focus,
                    getOpenFromParent,
                    setOpenFromParent
                },
                // info: { index, setOpenFromParent, getOpenFromParent, focus, flags: { open: openRef.current, tabbed: tabbedRef.current } }
            }
        });

        function useAccordionSectionHeaderProps({ ["aria-expanded"]: ariaExpanded, ["aria-disabled"]: ariaDisabled, ...props }: h.JSX.HTMLAttributes<HeaderElement>): h.JSX.HTMLAttributes<HeaderElement> {

            //const onFocus = () => { changeTabbedIndex(index); }
            const onPress = () => {
                if (getOpenFromParent())
                    changeExpandedIndex(null);
                else
                    changeExpandedIndex(index);
            };

            props.tabIndex = 0;
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
            const retB = useButtonProps(props);




            //const ret3: h.JSX.HTMLAttributes<HeaderElement>
            //    = useMergedProps<HeaderElement>(retD, { onFocus });


            return useLinearNavigationProps(useHeaderAsSourceIdProps(useHeaderAsReferencerIdProps({
                "aria-expanded": (ariaExpanded ?? open ?? false).toString(),
                "aria-disabled": (ariaDisabled ?? (open ? "true" : undefined)),
                ...useHeaderRefElementProps(retB)
            } as h.JSX.HTMLAttributes<HeaderElement>)));
        }


        function useAccordionSectionBodyProps({ role, ...props }: h.JSX.HTMLAttributes<BodyElement>): h.JSX.HTMLAttributes<BodyElement> {
            const ret1 = useBodyAsReferencerIdProps({ role: role ?? "region", ...props });
            const ret2 = useBodyAsSourceIdProps(ret1);
            ret2.tabIndex ??= -1;
            return useBodyRefElementProps(ret2);
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



