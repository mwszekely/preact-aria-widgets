import { createContext, createElement, h, Ref, VNode } from "preact";
import { UseHasFocusParameters } from "preact-prop-helpers";
import { useContext, useEffect, useImperativeHandle } from "preact/hooks";
import { ElementToTag, PropModifier } from "../props";
import { useAccordion, UseAccordionParameters, UseAccordionReturnTypeInfo, UseAccordionSection, UseAccordionSectionParameters, UseAccordionSectionReturnTypeInfo } from "../use-accordion";
import { Heading } from "./heading";
import { memoForwardRef } from "./util";

type Get<T, K extends keyof T> = T[K];

export interface AccordionProps<AccSubInfo> extends
    Get<UseAccordionParameters, "accordion">,
    Get<UseAccordionParameters, "linearNavigation">,
    Get<UseAccordionParameters, "managedChildren"> {
    expandedIndex?: number | undefined | null;
    ref?: Ref<UseAccordionReturnTypeInfo<AccSubInfo>>
    render(info: UseAccordionReturnTypeInfo<AccSubInfo>): VNode<any>;
}

export interface AccordionSectionProps<HeaderElement extends Element, BodyElement extends Element, AccSubInfo, K extends string> extends
    Get<UseAccordionSectionParameters<HeaderElement, AccSubInfo, K, {}>, "accordionSection">,
    Get<UseAccordionSectionParameters<HeaderElement, AccSubInfo, K, {}>, "managedChild">,
    UseHasFocusParameters<HeaderElement>,
    Get<UseAccordionSectionParameters<HeaderElement, AccSubInfo, K, {}>, "button"> {
    subInfo: Get<UseAccordionSectionParameters<HeaderElement, AccSubInfo, K, AccSubInfo>, "subInfo">;
    ref?: Ref<UseAccordionSectionReturnTypeInfo>;
    render(info: UseAccordionSectionReturnTypeInfo, makeHeaderProps: PropModifier<HeaderElement>, makeBodyProps: PropModifier<BodyElement>): VNode<any>;
}


const AccordionSectionContext = createContext<UseAccordionSection<any, any, any>>(null!);
export const Accordion = memoForwardRef(function Accordion<HeaderElement extends HTMLElement, BodyElement extends HTMLElement | SVGElement, AccSubInfo = undefined>({
    disableArrowKeys,
    disableHomeEndKeys,
    expandedIndex,
    initialIndex,
    navigationDirection,
    onAfterChildLayoutEffect,
    onChildrenMountChange,
    render,
    ..._rest
}: AccordionProps<AccSubInfo>, ref?: Ref<any>) {

    const { useAccordionSection, ...provider } = useAccordion<HeaderElement, BodyElement, AccSubInfo>({
        accordion: { initialIndex },
        linearNavigation: { disableArrowKeys, disableHomeEndKeys, navigationDirection },
        managedChildren: { onAfterChildLayoutEffect, onChildrenMountChange }
    });
    useImperativeHandle(ref!, () => provider);
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

export const AccordionSection = memoForwardRef(function AccordionSection<HeaderElement extends Element, BodyElement extends Element, AccSubInfo, K extends string>({
    open,
    index,
    tagButton,
    disabled,
    flags,
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
    onWindowFocusedChange,
    subInfo
}: AccordionSectionProps<HeaderElement, BodyElement, AccSubInfo, K>, ref?: Ref<any>) {
    const useAccordionSection = useContext(AccordionSectionContext) as UseAccordionSection<HeaderElement, BodyElement, AccSubInfo>;
    const { useAccordionSectionBodyProps, useAccordionSectionHeaderProps, ...sectionInfo } = useAccordionSection({
        button: { disabled, tagButton },
        accordionSection: { open },
        managedChild: { index, flags },
        hasFocus: { getDocument, getWindow, onActiveElementChange, onElementChange, onFocusedChanged, onFocusedInnerChanged, onLastActiveElementChange, onLastFocusedChanged, onLastFocusedInnerChanged, onMount, onUnmount, onWindowFocusedChange },
        subInfo
    });

    useImperativeHandle(ref!, () => sectionInfo);

    return render(sectionInfo, useAccordionSectionHeaderProps, useAccordionSectionBodyProps);
})


