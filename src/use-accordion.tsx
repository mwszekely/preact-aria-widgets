import { h } from "preact";
import { ManagedChildInfo, useChildManager } from "preact-prop-helpers/use-child-manager";
import { UseHasFocusPropsReturnType } from "preact-prop-helpers/use-has-focus";
import { useLinearNavigation, UseLinearNavigationPropsReturnType } from "preact-prop-helpers/use-keyboard-navigation";
import { useLayoutEffect } from "preact-prop-helpers/use-layout-effect";
import { MergedProps, useMergedProps } from "preact-prop-helpers/use-merged-props";
import { useRandomId, UseRandomIdPropsReturnType, UseReferencedIdPropsReturnType } from "preact-prop-helpers/use-random-id";
import { useRefElement } from "preact-prop-helpers/use-ref-element";
import { useStableCallback } from "preact-prop-helpers/use-stable-callback";
import { useState } from "preact-prop-helpers/use-state";
import { useCallback } from "preact/hooks";
import { TagSensitiveProps } from "props";
import { useButtonLikeEventHandlers } from "./use-button";

export type UseAriaAccordion<E extends Element> = (args: UseAriaAccordionParameters) => UseAriaAccordionReturnType<E>;
export type UseAriaAccordionSection = (args: UseAriaAccordionSectionParameters) => UseAriaAccordionSectionReturnType
export type UseAriaAccordionSectionHeaderProps<E extends Element> = <P extends UseAriaAccordionSectionHeaderPropsParameters<E>>(props: P) => UseAriaAccordionSectionHeaderPropsReturnType<E, P>;
export type UseAriaAccordionSectionBodyProps<E extends Element> = <P extends UseAriaAccordionSectionBodyPropsParameters<E>>(props: P) => UseAriaAccordionSectionBodyPropsReturnType<E, P>;


export interface UseAriaAccordionParameters {
    expandedIndex?: number | null;
    setExpandedIndex?(i: number | null): void;
}

export interface UseAriaAccordionReturnType<E extends Element> {
    useAriaAccordionSection: UseAriaAccordionSection;
    useAriaAccordionProps: UseAriaAccordionProps<E>;
}

export type UseAriaAccordionProps<E extends Element> = <P extends UseAriaAccordionPropsParameters<E>>(props: P) => UseAriaAccordionPropsReturnType<E, P>;

export type UseAriaAccordionPropsReturnType<E extends Element, P extends UseAriaAccordionPropsParameters<E>> = UseLinearNavigationPropsReturnType<E, P>;

export interface UseAriaAccordionSectionInfo extends ManagedChildInfo<number> {
    open?: boolean | undefined | null;
    setOpenFromParent(open: boolean): void;
    focus(): void;
}

export interface UseAriaAccordionSectionParameters extends Omit<UseAriaAccordionSectionInfo, "setOpenFromParent" | "focus"> {
    open?: boolean | undefined;
}

export interface UseAriaAccordionSectionHeaderPropsParameters<E extends Element> extends h.JSX.HTMLAttributes<E> { }
export interface UseAriaAccordionSectionBodyPropsParameters<E extends Element> extends h.JSX.HTMLAttributes<E> { }

export interface UseAriaAccordionSectionReturnType {
    expanded: boolean | null;
    useAriaAccordionSectionHeader: UseAriaAccordionSectionHeader;
    useAriaAccordionSectionBody: UseAriaAccordionSectionBody;
}
export type UseAriaAccordionSectionHeaderPropsReturnType<E extends Element, P extends UseAriaAccordionSectionHeaderPropsParameters<E>> = MergedProps<E, UseRandomIdPropsReturnType<UseReferencedIdPropsReturnType<{ "aria-expanded": string; "aria-disabled": string | undefined; } & UseHasFocusPropsReturnType<E, Omit<P, "aria-expanded" | "aria-disabled">>, "aria-controls">>, { onClick: h.JSX.EventHandler<h.JSX.TargetedMouseEvent<E>> }>;
export type UseAriaAccordionSectionBodyPropsReturnType<E extends Element, P extends UseAriaAccordionSectionBodyPropsParameters<E>> = UseRandomIdPropsReturnType<UseReferencedIdPropsReturnType<{ role: string; } & Omit<P, "role">, "aria-labelledby">>;

export type UseAriaAccordionSectionHeader = <E extends HTMLElement>({ tag }: TagSensitiveProps<E>) => UseAriaAccordionSectionHeaderReturnType<E>;
export interface UseAriaAccordionSectionHeaderReturnType<E extends Element> { useAriaAccordionSectionHeaderProps: UseAriaAccordionSectionHeaderProps<E>; }
export type UseAriaAccordionSectionBody = <E extends Element>() => UseAriaAccordionSectionBodyReturnType<E>;
export interface UseAriaAccordionSectionBodyReturnType<E extends Element> { useAriaAccordionSectionBodyProps: UseAriaAccordionSectionBodyProps<E>; }


interface UseAriaAccordionPropsParameters<E extends Element> extends h.JSX.HTMLAttributes<E> { }


export function useAriaAccordion<E extends Element>({ expandedIndex, setExpandedIndex }: UseAriaAccordionParameters): UseAriaAccordionReturnType<E> {

    const [lastFocusedIndex, setLastFocusedIndex, getLastFocusedIndex] = useState(0);
    const stableSetExpandedIndex = useStableCallback(setExpandedIndex ?? (() => { }));

    const { managedChildren: managedAccordionSections, useManagedChild: useManagedChildSection } = useChildManager<UseAriaAccordionSectionInfo>();
    const { useLinearNavigationProps } = useLinearNavigation<E>({ managedChildren: managedAccordionSections, navigationDirection: "block", getIndex: getLastFocusedIndex, setIndex: setLastFocusedIndex });

    // Any time list management changes the focused index, manually focus the child
    // TODO: Can this be cut?
    useLayoutEffect(() => {
        if (lastFocusedIndex != null && lastFocusedIndex >= 0)
            managedAccordionSections[lastFocusedIndex]?.focus();
    }, [lastFocusedIndex])

    // Any time a new expanded index is given, 
    // collapse the old section and expand the new one.
    useLayoutEffect(([prevExpandedIndex]) => {
        if (prevExpandedIndex != null && prevExpandedIndex <= managedAccordionSections.length)
            managedAccordionSections[prevExpandedIndex]?.setOpenFromParent(false);

        if (expandedIndex != null && expandedIndex <= managedAccordionSections.length)
            managedAccordionSections[expandedIndex]?.setOpenFromParent(true);
    }, [expandedIndex, managedAccordionSections.length])

    const useAriaAccordionSection = useCallback<UseAriaAccordionSection>((args: UseAriaAccordionSectionParameters): UseAriaAccordionSectionReturnType => {


        const [openFromParent, setOpenFromParent, getOpenFromParent] = useState<boolean | null>(null);



        const { randomId: bodyRandomId, useRandomIdProps: useBodyRandomIdProps, useReferencedIdProps: useReferencedBodyIdProps } = useRandomId({ prefix: "aria-accordion-section-body-" });
        const { randomId: headRandomId, useRandomIdProps: useHeadRandomIdProps, useReferencedIdProps: useReferencedHeadIdProps } = useRandomId({ prefix: "aria-accordion-section-header-" });

        let open = ((openFromParent || args.open)) ?? null;

        // TODO: Convert to use useManagedChild so that this hook 
        // is stable without (directly) depending on the open state.
        const useAriaAccordionSectionHeader = useCallback(function useAriaAccordionSectionHeader<E extends HTMLElement>({ tag }: TagSensitiveProps<E>): UseAriaAccordionSectionHeaderReturnType<E> {

            const { useRefElementProps, element } = useRefElement<E>();
            const focus = useCallback(() => { element?.focus(); }, [element]);
            const { useManagedChildProps } = useManagedChildSection<E>({ index: args.index, open: open, setOpenFromParent, focus });

            function useAriaAccordionSectionHeaderProps<P extends UseAriaAccordionSectionHeaderPropsParameters<E>>({ ["aria-expanded"]: ariaExpanded, ["aria-disabled"]: ariaDisabled, ...props }: P): UseAriaAccordionSectionHeaderPropsReturnType<E, P> {

                const onFocus = () => { setLastFocusedIndex(args.index); }
                let onClick = () => {
                    if (getOpenFromParent())
                        stableSetExpandedIndex(null);
                    else
                        stableSetExpandedIndex(args.index);
                };

                let retA = useMergedProps<E>()({ onClick }, props);
                let retB = useMergedProps<E>()({ tabIndex: 0 }, useButtonLikeEventHandlers<E>(onClick)(props));

                let ret3:
                    MergedProps<E, UseRandomIdPropsReturnType<UseReferencedIdPropsReturnType<{ "aria-expanded": string; "aria-disabled": string | undefined; } & UseHasFocusPropsReturnType<E, Omit<P, "aria-expanded" | "aria-disabled">>, "aria-controls">>, { onClick: h.JSX.EventHandler<h.JSX.TargetedMouseEvent<E>> }>
                    = useMergedProps<E>()(useHeadRandomIdProps(useReferencedBodyIdProps("aria-controls")({
                        "aria-expanded": (ariaExpanded ?? (!!open).toString()),
                        "aria-disabled": (ariaDisabled ?? (open ? "true" : undefined)),
                        ...useRefElementProps(useManagedChildProps(tag === "button" ? retA : retB))
                    })), { onFocus });


                return ret3;
            };

            return { useAriaAccordionSectionHeaderProps };
        }, [open]);


        const useAriaAccordionSectionBody = useCallback(function useAriaAccordionSectionBody<E extends Element>() {
            function useAriaAccordionSectionBodyProps<P extends UseAriaAccordionSectionBodyPropsParameters<E>>({ role, ...props }: P): UseAriaAccordionSectionBodyPropsReturnType<E, P> {
                let ret1 = useReferencedHeadIdProps("aria-labelledby")({ role: role ?? "region", ...props });
                let ret2 = useBodyRandomIdProps(ret1);
                return ret2;
            };
            return {
                useAriaAccordionSectionBodyProps
            }
        }, []);

        return {
            expanded: open,
            useAriaAccordionSectionHeader,
            useAriaAccordionSectionBody,
        }
    }, []);


    function useAriaAccordionProps<P extends UseAriaAccordionPropsParameters<E>>(props: P) {
        return useLinearNavigationProps(props);
    }

    return {
        useAriaAccordionSection,
        useAriaAccordionProps
    }
}



