import { createContext, createElement, h, VNode } from "preact";
import { UseHasFocusParameters } from "preact-prop-helpers";
import { useContext, useEffect } from "preact/hooks";
import { ElementToTag, PropModifier } from "props";
import { useAccordion, UseAccordionParameters, UseAccordionReturnTypeInfo, UseAccordionSection, UseAccordionSectionParameters, UseAccordionSectionReturnTypeInfo } from "../use-accordion";
import { Heading } from "./heading";
import { memo } from "preact/compat";

type Get<T, K extends keyof T> = T[K];

export interface AccordionProps extends
    Get<UseAccordionParameters, "accordion">,
    Get<UseAccordionParameters, "linearNavigation">,
    Get<UseAccordionParameters, "managedChildren"> {
    expandedIndex?: number | undefined | null;
    render(info: UseAccordionReturnTypeInfo): VNode<any>;
}

export interface AccordionSectionProps<HeaderElement extends Element, BodyElement extends Element> extends
    Get<UseAccordionSectionParameters<HeaderElement>, "accordionSection">,
    Get<UseAccordionSectionParameters<HeaderElement>, "managedChildren">,
    UseHasFocusParameters<HeaderElement>,
    Get<UseAccordionSectionParameters<HeaderElement>, "button"> {
    render(info: UseAccordionSectionReturnTypeInfo, makeHeaderProps: PropModifier<HeaderElement>, makeBodyProps: PropModifier<BodyElement>): VNode<any>;
}


const AccordionSectionContext = createContext<UseAccordionSection<any, any>>(null!);
export const Accordion = memo(function Accordion({ disableArrowKeys, disableHomeEndKeys, expandedIndex, initialIndex, navigationDirection, onAfterChildLayoutEffect, onChildrenMountChange, render }: AccordionProps) {
    const { useAccordionSection, ...provider } = useAccordion({
        accordion: { initialIndex },
        linearNavigation: { disableArrowKeys, disableHomeEndKeys, navigationDirection },
        managedChildren: { onAfterChildLayoutEffect, onChildrenMountChange }
    });

    useEffect(() => { provider.accordion.changeExpandedIndex(expandedIndex! ?? null); }, [expandedIndex]);

    return (
        <AccordionSectionContext.Provider value={useAccordionSection}>{render(provider)}</AccordionSectionContext.Provider>
    )
})

export function defaultRenderAccordionSection<HeaderContainerElement extends HTMLElement, HeaderButtonElement extends HTMLElement, BodyElement extends HTMLElement>({ makePropsHeadingContainer, makePropsHeadingButton, makePropsBody, tagBody, tagHeadingButton }: { tagHeadingButton: ElementToTag<HeaderButtonElement>; tagBody: ElementToTag<BodyElement>; makePropsHeadingContainer(info: UseAccordionSectionReturnTypeInfo): h.JSX.HTMLAttributes<HeaderContainerElement>, makePropsHeadingButton(info: UseAccordionSectionReturnTypeInfo): h.JSX.HTMLAttributes<HeaderButtonElement>, makePropsBody(info: UseAccordionSectionReturnTypeInfo): h.JSX.HTMLAttributes<BodyElement> }) {
    return function (info: UseAccordionSectionReturnTypeInfo, modifyHeadingButtonProps: PropModifier<HeaderButtonElement>, modifyBodyProps: PropModifier<BodyElement>): VNode<any> {
        return (
            <>
                <Heading<HeaderContainerElement> {...makePropsHeadingContainer(info)} heading={createElement(tagHeadingButton as never, modifyHeadingButtonProps(makePropsHeadingButton(info)))}>
                    {createElement(tagBody as never, modifyBodyProps(makePropsBody(info)))}
                </Heading>
            </>
        )
    }
}

export const AccordionSection = memo(function AccordionSection<HeaderElement extends Element, BodyElement extends Element>({
    open,
    index,
    tagButton,
    disabled,
    render,
    getDocument,
    getWindow,
    onActiveElementChange,
    onElementChange,
    onFocusedChanged,
    onFocusedInnerChanged,
    onLastActiveElementChange,
    onLastFocusedChanged,
    onLastFocusedInnerChanged,
    onMount,
    onUnmount,
    onWindowFocusedChange
}: AccordionSectionProps<HeaderElement, BodyElement>) {
    const useAccordionSection = useContext(AccordionSectionContext);
    const { useAccordionSectionBodyProps, useAccordionSectionHeaderProps, ...sectionInfo } = useAccordionSection({
        button: { disabled, tagButton },
        accordionSection: { open },
        managedChildren: { index },
        hasFocus: { getDocument, getWindow, onActiveElementChange, onElementChange, onFocusedChanged, onFocusedInnerChanged, onLastActiveElementChange, onLastFocusedChanged, onLastFocusedInnerChanged, onMount, onUnmount, onWindowFocusedChange }
    });

    return render(sectionInfo, useAccordionSectionHeaderProps, useAccordionSectionBodyProps);
})


