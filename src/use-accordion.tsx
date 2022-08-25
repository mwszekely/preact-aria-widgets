import { h } from "preact";
import { returnTrue, useChildrenFlag, useEffect, useHasFocus, useLinearNavigation, useManagedChildren, useMergedProps, useRandomId, useRefElement, useStableCallback, useStableGetter, useState } from "preact-prop-helpers";
import { FlaggableChildInfoBase, ManagedChildren } from "preact-prop-helpers/use-child-manager";
import { useCallback, useRef } from "preact/hooks";
import { TagSensitiveProps } from "./props";
import { usePressEventHandlers } from "./use-button";

export type UseAriaAccordion<HeaderElement extends Element, BodyElement extends Element> = (args: UseAriaAccordionParameters) => UseAriaAccordionReturnType<HeaderElement, BodyElement>;
export type UseAriaAccordionSection<HeaderElement extends Element, BodyElement extends Element> = (args: UseAriaAccordionSectionParameters) => UseAriaAccordionSectionReturnType<HeaderElement, BodyElement>;

export interface UseAriaAccordionParameters {
    initialIndex?: number | null;
}

export interface UseAriaAccordionReturnType<HeaderElement extends Element, BodyElement extends Element> {
    useAriaAccordionSection: UseAriaAccordionSection<HeaderElement, BodyElement>;
    accordionSections: ManagedChildren<UseAriaAccordionSectionInfoBase>;
    changeExpandedIndex: (arg: number | ((prevState: number | null) => number | null) | null) => number | null;
}

export interface UseAriaAccordionSectionInfoBase extends FlaggableChildInfoBase<"tabbed" | "open"> {
    //open?: boolean | undefined | null;
    setOpenFromParent(open: boolean): void;
    getOpenFromParent(): boolean | null;
    focus(): void;
}

export interface UseAriaAccordionSectionParameters {
    info: Omit<UseAriaAccordionSectionInfoBase, "setOpenFromParent" | "getOpenFromParent" | "focus" | "flags">;
    open?: boolean | undefined;
}

export interface UseAriaAccordionSectionReturnType<HeaderElement extends Element, BodyElement extends Element> {
    expanded: boolean;
    useAriaAccordionSectionHeaderProps: (props: h.JSX.HTMLAttributes<HeaderElement>) => h.JSX.HTMLAttributes<HeaderElement>;
    useAriaAccordionSectionBodyProps: (props: h.JSX.HTMLAttributes<BodyElement>) => h.JSX.HTMLAttributes<BodyElement>;
}


export type UseAriaAccordionSectionHeader<E extends Element> = ({ tag }: TagSensitiveProps<E>) => UseAriaAccordionSectionHeaderReturnType<E>;
export interface UseAriaAccordionSectionHeaderReturnType<E extends Element> { useAriaAccordionSectionHeaderProps: (props: h.JSX.HTMLAttributes<E>) => h.JSX.HTMLAttributes<E>; }
export type UseAriaAccordionSectionBody<E extends Element> = () => UseAriaAccordionSectionBodyReturnType<E>;
export interface UseAriaAccordionSectionBodyReturnType<E extends Element> { useAriaAccordionSectionBodyProps: (props: h.JSX.HTMLAttributes<E>) => h.JSX.HTMLAttributes<E>; }

export function useAriaAccordion<HeaderElement extends HTMLElement, BodyElement extends HTMLElement | SVGElement>({ initialIndex }: UseAriaAccordionParameters): UseAriaAccordionReturnType<HeaderElement, BodyElement> {

    //const [lastFocusedIndex, setLastFocusedIndex, _getLastFocusedIndex] = useState<number | null>(null);
    const [_currentFocusedIndex, setCurrentFocusedIndex, getCurrentFocusedIndex] = useState<number | null>(null);

    const { useManagedChild: useManagedChildSection, children } = useManagedChildren<UseAriaAccordionSectionInfoBase>({ onChildrenMountChange: useStableCallback((m, u) => { ocmc1(m, u); ocmc2(m, u) }), onAfterChildLayoutEffect: null });

    const navigateToFirst = useCallback(() => { changeTabbedIndex(0); }, []);
    const navigateToLast = useCallback(() => { changeTabbedIndex(children.getHighestIndex()); }, []);
    const navigateToPrev = useCallback(() => { changeTabbedIndex(i => ((i ?? 0) - 1)) }, []);
    const navigateToNext = useCallback(() => { changeTabbedIndex(i => ((i ?? 0) + 1)) }, []);
    const { useLinearNavigationProps } = useLinearNavigation<HeaderElement>({ navigationDirection: "block", navigateToFirst, navigateToLast, navigateToPrev, navigateToNext });


    const { changeIndex: changeExpandedIndex, getCurrentIndex: getCurrentExpandedIndex, onChildrenMountChange: ocmc1 } = useChildrenFlag({
        initialIndex,
        children,
        key: "open",
        closestFit: false
    });

    const { changeIndex: changeTabbedIndex, getCurrentIndex: getTabbedIndex, onChildrenMountChange: ocmc2 } = useChildrenFlag({
        initialIndex,
        children,
        key: "tabbed",
        closestFit: false,
        onIndexChange: useCallback((i: number | null) => {
            if (i != null) {
                children.getAt(i)?.focus();
            }
        }, [])
    })

    const useAriaAccordionSection: UseAriaAccordionSection<HeaderElement, BodyElement> = useCallback<UseAriaAccordionSection<HeaderElement, BodyElement>>(({ open: openFromUser, info: args }: UseAriaAccordionSectionParameters) => {

        const index = args.index;

        const [openFromParent, setOpenFromParent, getOpenFromParent] = useState<boolean | null>(null);



        const { useRandomIdSourceElement: useBodyAsSourceId, useRandomIdReferencerElement: useHeaderAsReferencerId } = useRandomId<BodyElement>({ prefix: "aria-accordion-section-body-", onAfterChildLayoutEffect: null, onChildrenMountChange: null });
        const { useRandomIdSourceElement: useHeaderAsSourceId, useRandomIdReferencerElement: useBodyAsReferencerId } = useRandomId<HeaderElement>({ prefix: "aria-accordion-section-header-", onAfterChildLayoutEffect: null, onChildrenMountChange: null });
        const { useRandomIdSourceElementProps: useBodyAsSourceIdProps } = useBodyAsSourceId();
        const { useRandomIdReferencerElementProps: useBodyAsReferencerIdProps } = useBodyAsReferencerId<BodyElement>("aria-labelledby" as never);
        const { useRandomIdSourceElementProps: useHeaderAsSourceIdProps } = useHeaderAsSourceId();
        const { useRandomIdReferencerElementProps: useHeaderAsReferencerIdProps } = useHeaderAsReferencerId<HeaderElement>("aria-controls" as never);

        const open = ((openFromUser ?? openFromParent) ?? false);
        //const getOpen = useStableGetter(!!open);
        const getIndex = useStableGetter(index);

        // TODO: Convert to use useManagedChild so that this hook 
        // is stable without (directly) depending on the open state.

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
                    changeExpandedIndex(getIndex());
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
        const __: void = useManagedChildSection({ info: { index, setOpenFromParent, getOpenFromParent, focus, flags: { open: openRef.current, tabbed: tabbedRef.current } } });

        function useAriaAccordionSectionHeaderProps({ ["aria-expanded"]: ariaExpanded, ["aria-disabled"]: ariaDisabled, ...props }: h.JSX.HTMLAttributes<HeaderElement>): h.JSX.HTMLAttributes<HeaderElement> {

            const onFocus = () => { changeTabbedIndex(args.index); }
            const onClick = () => {
                if (getOpenFromParent())
                    changeExpandedIndex(null);
                else
                    changeExpandedIndex(args.index);
            };

            props.tabIndex = 0;
            const retB = useMergedProps<HeaderElement>(usePressEventHandlers<HeaderElement>(onClick, undefined), props);

            const retC = useHeaderAsReferencerIdProps({
                "aria-expanded": (ariaExpanded ?? (open).toString()),
                "aria-disabled": (ariaDisabled ?? (open ? "true" : undefined)),
                ...useHeaderRefElementProps(retB)
            } as h.JSX.HTMLAttributes<HeaderElement>);

            const retD = useHeaderAsSourceIdProps(retC);

            const ret3: h.JSX.HTMLAttributes<HeaderElement>
                = useMergedProps<HeaderElement>(retD, { onFocus });


            return useLinearNavigationProps(ret3) as h.JSX.HTMLAttributes<HeaderElement>;
        }


        function useAriaAccordionSectionBodyProps({ role, ...props }: h.JSX.HTMLAttributes<BodyElement>): h.JSX.HTMLAttributes<BodyElement> {
            const ret1 = useBodyAsReferencerIdProps({ role: role ?? "region", ...props });
            const ret2 = useBodyAsSourceIdProps(ret1);
            ret2.tabIndex ??= -1;
            return useBodyRefElementProps(ret2);
        }

        return {
            expanded: open,
            useAriaAccordionSectionHeaderProps,
            useAriaAccordionSectionBodyProps,
        }
    }, [useLinearNavigationProps]);

    return {
        changeExpandedIndex,
        useAriaAccordionSection,
        accordionSections: children
    }
}



