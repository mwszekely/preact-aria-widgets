import { h } from "preact";
import { OnChildrenMountChange, returnTrue, useChildrenFlag, useHasFocus, useLinearNavigation, UseLinearNavigationParameters, UseManagedChildParameters, useManagedChildren, UseManagedChildrenParameters, UseManagedChildrenReturnTypeInfo, useRandomId, useRefElement, useStableCallback, useStableGetter, useState } from "preact-prop-helpers";
import { useCallback, useRef } from "preact/hooks";
import { useAriaButton, UseAriaButtonParameters } from "./use-button";

export type UseAriaAccordion<HeaderElement extends Element, BodyElement extends Element> = (args: UseAriaAccordionParameters) => UseAriaAccordionReturnTypeWithHooks<HeaderElement, BodyElement>;
export type UseAriaAccordionSection<HeaderElement extends Element, BodyElement extends Element> = (args: UseAriaAccordionSectionParameters<HeaderElement>) => UseAriaAccordionSectionReturnTypeWithHooks<HeaderElement, BodyElement>;

export interface UseAriaAccordionParameters extends UseLinearNavigationParameters<"navigateToFirst" | "navigateToLast" | "navigateToNext" | "navigateToPrev">, UseManagedChildrenParameters<number, never> {
    accordion: { initialIndex?: number | null; }
}

export interface UseAriaAccordionReturnTypeInfo extends UseManagedChildrenReturnTypeInfo<number, UseAriaAccordionSectionInfoBase, "tabbed" | "open"> {
    /** **STABLE** */
    accordion: { changeExpandedIndex: (arg: number | ((prevState: number | null) => number | null) | null) => number | null; }
}

export interface UseAriaAccordionReturnTypeWithHooks<HeaderElement extends Element, BodyElement extends Element> extends UseAriaAccordionReturnTypeInfo {
    /** **STABLE** */
    useAriaAccordionSection: UseAriaAccordionSection<HeaderElement, BodyElement>;
}

export interface UseAriaAccordionSectionInfoBase {
    setOpenFromParent(open: boolean): void;
    getOpenFromParent(): boolean | null;
    focus(): void;
}

export interface UseAriaAccordionSectionParameters<HeaderElement extends Element> {
    managedChildren: UseManagedChildParameters<number, UseAriaAccordionSectionInfoBase, "tabbed" | "open", "subInfo" | "flags">["managedChild"];
    accordionSection: { open?: boolean | undefined; }
    button: Omit<UseAriaButtonParameters<HeaderElement>, "onPress" | "pressed">;
}

export interface UseAriaAccordionSectionReturnTypeInfo {
    accordionSection: {
        expanded: boolean;
        focused: boolean;
        headerId: string | undefined;
        bodyId: string | undefined;
        getHeaderId(): string | undefined;
        getBodyId(): string | undefined;
    }
}

export interface UseAriaAccordionSectionReturnTypeWithHooks<HeaderElement extends Element, BodyElement extends Element> extends UseAriaAccordionSectionReturnTypeInfo {
    /** *Unstable* */
    useAriaAccordionSectionHeaderProps: (props: h.JSX.HTMLAttributes<HeaderElement>) => h.JSX.HTMLAttributes<HeaderElement>;
    /** *Unstable* */
    useAriaAccordionSectionBodyProps: (props: h.JSX.HTMLAttributes<BodyElement>) => h.JSX.HTMLAttributes<BodyElement>;
}


//export type UseAriaAccordionSectionHeader<E extends Element> = (args: UseAriaButtonParameters<E>) => UseAriaAccordionSectionHeaderReturnType<E>;
//export interface UseAriaAccordionSectionHeaderReturnType<E extends Element> { useAriaAccordionSectionHeaderProps: (props: h.JSX.HTMLAttributes<E>) => h.JSX.HTMLAttributes<E>; }
//export type UseAriaAccordionSectionBody<E extends Element> = () => UseAriaAccordionSectionBodyReturnType<E>;
//export interface UseAriaAccordionSectionBodyReturnType<E extends Element> { useAriaAccordionSectionBodyProps: (props: h.JSX.HTMLAttributes<E>) => h.JSX.HTMLAttributes<E>; }

export function useAriaAccordion<HeaderElement extends HTMLElement, BodyElement extends HTMLElement | SVGElement>({ accordion: { initialIndex }, linearNavigation: { disableArrowKeys, disableHomeEndKeys, navigationDirection }, managedChildren: { onAfterChildLayoutEffect, onChildrenMountChange } }: UseAriaAccordionParameters): UseAriaAccordionReturnTypeWithHooks<HeaderElement, BodyElement> {

    const [_currentFocusedIndex, setCurrentFocusedIndex, getCurrentFocusedIndex] = useState<number | null>(null);

    const mcReturnType = useManagedChildren<number, UseAriaAccordionSectionInfoBase, "tabbed" | "open">({
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
            navigationDirection: navigationDirection ?? "block"
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

    const useAriaAccordionSection: UseAriaAccordionSection<HeaderElement, BodyElement> = useCallback<UseAriaAccordionSection<HeaderElement, BodyElement>>(({ button: { tag, disabled }, accordionSection: { open: openFromUser }, managedChildren: { index } }) => {


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

        function useAriaAccordionSectionHeaderProps({ ["aria-expanded"]: ariaExpanded, ["aria-disabled"]: ariaDisabled, ...props }: h.JSX.HTMLAttributes<HeaderElement>): h.JSX.HTMLAttributes<HeaderElement> {

            //const onFocus = () => { changeTabbedIndex(index); }
            const onPress = () => {
                if (getOpenFromParent())
                    changeExpandedIndex(null);
                else
                    changeExpandedIndex(index);
            };

            props.tabIndex = 0;
            const { useAriaButtonProps } = useAriaButton({ tag, disabled, onPress });
            const retB = useAriaButtonProps(props);
            //const retB = useMergedProps<HeaderElement>(usePressEventHandlers<HeaderElement>(onClick, undefined), props);



            const { useHasFocusProps } = useHasFocus<HeaderElement>({
                onFocusedInnerChanged: useStableCallback((focused: boolean) => {
                    if (focused)
                        changeTabbedIndex(index);
                })
            })

            //const ret3: h.JSX.HTMLAttributes<HeaderElement>
            //    = useMergedProps<HeaderElement>(retD, { onFocus });


            return useHasFocusProps(useLinearNavigationProps(useHeaderAsSourceIdProps(useHeaderAsReferencerIdProps({
                "aria-expanded": (ariaExpanded ?? open ?? false).toString(),
                "aria-disabled": (ariaDisabled ?? (open ? "true" : undefined)),
                ...useHeaderRefElementProps(retB)
            } as h.JSX.HTMLAttributes<HeaderElement>))));
        }


        function useAriaAccordionSectionBodyProps({ role, ...props }: h.JSX.HTMLAttributes<BodyElement>): h.JSX.HTMLAttributes<BodyElement> {
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
            useAriaAccordionSectionHeaderProps,
            useAriaAccordionSectionBodyProps,

        }
    }, []);

    return {
        managedChildren: mcReturnType.managedChildren,
        accordion: { changeExpandedIndex },
        useAriaAccordionSection,
    }
}



