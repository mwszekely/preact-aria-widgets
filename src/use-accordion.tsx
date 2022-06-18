import { h } from "preact";
import { ManagedChildInfo, useChildFlag, useChildManager, useHasFocus, useLinearNavigation, useMergedProps, useRandomId, UseRandomIdPropsReturnType, UseRefElementPropsReturnType, UseReferencedIdPropsReturnType, useStableCallback, useState } from "preact-prop-helpers";
import { useCallback } from "preact/hooks";
import { TagSensitiveProps } from "./props";
import { usePressEventHandlers } from "./use-button";

export type UseAriaAccordion<ParentElement extends Element, ChildElement extends Element> = (args: UseAriaAccordionParameters) => UseAriaAccordionReturnType<ParentElement, ChildElement>;
export type UseAriaAccordionSection<E extends Element> = (args: UseAriaAccordionSectionParameters) => UseAriaAccordionSectionReturnType<E>;
export type UseAriaAccordionSectionHeaderProps<E extends Element> = <P extends h.JSX.HTMLAttributes<E>>(props: P) => UseAriaAccordionSectionHeaderPropsReturnType<E, P>;
export type UseAriaAccordionSectionBodyProps<E extends Element> = <P extends h.JSX.HTMLAttributes<E>>(props: P) => UseAriaAccordionSectionBodyPropsReturnType<E, P>;


export interface UseAriaAccordionParameters {
    expandedIndex?: number | null;
    setExpandedIndex?(i: number | null): void;
}

export interface UseAriaAccordionReturnType<_ParentElement extends Element, ChildElement extends Element> {
    useAriaAccordionSection: UseAriaAccordionSection<ChildElement>;
    managedChildren: UseAriaAccordionSectionInfo[];
}

export interface UseAriaAccordionSectionInfo extends ManagedChildInfo<number> {
    open?: boolean | undefined | null;
    setOpenFromParent(open: boolean): void;
    getOpenFromParent(): boolean | null;
    focus(): void;
}

export interface UseAriaAccordionSectionParameters extends Omit<UseAriaAccordionSectionInfo, "setOpenFromParent" | "getOpenFromParent" | "focus"> {
    open?: boolean | undefined;
}

export interface UseAriaAccordionSectionReturnType<ChildElement extends Element> {
    expanded: boolean | null;
    useAriaAccordionSectionHeader: UseAriaAccordionSectionHeader<ChildElement>;
    useAriaAccordionSectionBody: UseAriaAccordionSectionBody;
}

export type UseAriaAccordionSectionHeaderPropsReturnType<E extends Element, P extends h.JSX.HTMLAttributes<E>> = UseRefElementPropsReturnType<E, P>;
export type UseAriaAccordionSectionBodyPropsReturnType<E extends Element, P extends h.JSX.HTMLAttributes<E>> = UseRandomIdPropsReturnType<UseReferencedIdPropsReturnType<{ role: string; } & Omit<P, "role">, "aria-labelledby">>;

export type UseAriaAccordionSectionHeader<E extends Element> = ({ tag }: TagSensitiveProps<E>) => UseAriaAccordionSectionHeaderReturnType<E>;
export interface UseAriaAccordionSectionHeaderReturnType<E extends Element> { useAriaAccordionSectionHeaderProps: UseAriaAccordionSectionHeaderProps<E>; }
export type UseAriaAccordionSectionBody = <E extends Element>() => UseAriaAccordionSectionBodyReturnType<E>;
export interface UseAriaAccordionSectionBodyReturnType<E extends Element> { useAriaAccordionSectionBodyProps: UseAriaAccordionSectionBodyProps<E>; }


export interface UseAriaAccordionPropsParameters<E extends Element> extends h.JSX.HTMLAttributes<E> { }

export function useAriaAccordion<ParentElement extends Element, ChildElement extends Element>({ expandedIndex, setExpandedIndex }: UseAriaAccordionParameters): UseAriaAccordionReturnType<ParentElement, ChildElement> {

    const [lastFocusedIndex, setLastFocusedIndex, _getLastFocusedIndex] = useState<number | null>(null);
    const [_currentFocusedIndex, setCurrentFocusedIndex, getCurrentFocusedIndex] = useState<number | null>(null);
    const stableSetExpandedIndex = useStableCallback(setExpandedIndex ?? (() => { }));

    const { managedChildren: managedAccordionSections, useManagedChild: useManagedChildSection } = useChildManager<UseAriaAccordionSectionInfo>();

    const navigateToFirst = useCallback(() => { setLastFocusedIndex((0)); }, []);
    const navigateToLast = useCallback(() => { setLastFocusedIndex((managedAccordionSections.length - 1)); }, []);
    const navigateToPrev = useCallback(() => { setLastFocusedIndex(i => ((i ?? 0) - 1)) }, []);
    const navigateToNext = useCallback(() => { setLastFocusedIndex(i => ((i ?? 0) + 1)) }, []);
    const { useLinearNavigationProps } = useLinearNavigation<ChildElement>({ managedChildren: managedAccordionSections, navigationDirection: "block", index: lastFocusedIndex ?? 0, navigateToFirst, navigateToLast, navigateToPrev, navigateToNext });

    useChildFlag({
        activatedIndex: expandedIndex,
        managedChildren: managedAccordionSections,
        setChildFlag: (i, open) => managedAccordionSections[i]?.setOpenFromParent(open),
        getChildFlag: (i) => (managedAccordionSections[i]?.getOpenFromParent() ?? null)
    });

    useChildFlag({
        activatedIndex: lastFocusedIndex,
        managedChildren: managedAccordionSections,
        setChildFlag: (i, open) => open && managedAccordionSections[i].focus(),
        getChildFlag: (_) => false
    })

    const useAriaAccordionSection = useCallback<UseAriaAccordionSection<ChildElement>>((args: UseAriaAccordionSectionParameters): UseAriaAccordionSectionReturnType<ChildElement> => {

        const index = args.index;

        const [openFromParent, setOpenFromParent, getOpenFromParent] = useState<boolean | null>(null);



        const { useRandomIdProps: useBodyRandomIdProps, useReferencedIdProps: useReferencedBodyIdProps } = useRandomId({ prefix: "aria-accordion-section-body-" });
        const { useRandomIdProps: useHeadRandomIdProps, useReferencedIdProps: useReferencedHeadIdProps } = useRandomId({ prefix: "aria-accordion-section-header-" });

        const open = ((args.open ?? openFromParent) ?? null);

        // TODO: Convert to use useManagedChild so that this hook 
        // is stable without (directly) depending on the open state.
        const useAriaAccordionSectionHeader = useCallback<UseAriaAccordionSectionHeader<ChildElement>>(function useAriaAccordionSectionHeader({ ..._ }) {

            const { getElement, useHasFocusProps } = useHasFocus<ChildElement>({
                onFocusedChanged: useCallback((focused: boolean) => {
                    if (focused)
                        setCurrentFocusedIndex(index);
                    else
                        setCurrentFocusedIndex(oldIndex => oldIndex === index ? null : index);

                }, [])
            });
            const focus = useCallback(() => {
                if (getCurrentFocusedIndex() != null)
                    (getElement() as Element as HTMLElement | undefined)?.focus();
            }, []);
            const { useManagedChildProps } = useManagedChildSection<ChildElement>({ index, open, setOpenFromParent, getOpenFromParent, focus });

            function useAriaAccordionSectionHeaderProps<P extends h.JSX.HTMLAttributes<ChildElement>>({ ["aria-expanded"]: ariaExpanded, ["aria-disabled"]: ariaDisabled, ...props }: P): UseAriaAccordionSectionHeaderPropsReturnType<ChildElement, P> {

                const onFocus = () => { setLastFocusedIndex(args.index); }
                const onClick = () => {
                    if (getOpenFromParent())
                        stableSetExpandedIndex(null);
                    else
                        stableSetExpandedIndex(args.index);
                };

                const retB = useMergedProps<ChildElement>()({ tabIndex: 0 }, usePressEventHandlers<ChildElement>(onClick, undefined)(props));

                const ret3: h.JSX.HTMLAttributes<ChildElement>
                    = useMergedProps<ChildElement>()(useHeadRandomIdProps(useReferencedBodyIdProps("aria-controls")({
                        "aria-expanded": (ariaExpanded ?? (!!open).toString()),
                        "aria-disabled": (ariaDisabled ?? (open ? "true" : undefined)),
                        ...useHasFocusProps(useManagedChildProps(retB))
                    } as h.JSX.HTMLAttributes<ChildElement>)), { onFocus });


                return useLinearNavigationProps(ret3) as UseAriaAccordionSectionHeaderPropsReturnType<ChildElement, P>;
            }

            return { useAriaAccordionSectionHeaderProps };
        }, [useLinearNavigationProps, index, open]);


        const useAriaAccordionSectionBody = useCallback(function useAriaAccordionSectionBody<E extends Element>() {
            function useAriaAccordionSectionBodyProps<P extends h.JSX.HTMLAttributes<E>>({ role, ...props }: P): UseAriaAccordionSectionBodyPropsReturnType<E, P> {
                const ret1 = useReferencedHeadIdProps("aria-labelledby")({ role: role ?? "region", ...props });
                const ret2 = useBodyRandomIdProps(ret1);
                return ret2;
            }
            return {
                useAriaAccordionSectionBodyProps
            }
        }, []);

        return {
            expanded: open,
            useAriaAccordionSectionHeader,
            useAriaAccordionSectionBody,
        }
    }, [useLinearNavigationProps]);

    return {
        useAriaAccordionSection,
        managedChildren: managedAccordionSections
    }
}



