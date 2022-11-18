import { createContext, createElement, h, Ref, VNode } from "preact";
import { useContext, useEffect, useImperativeHandle } from "preact/hooks";
import { ElementToTag, PropModifier } from "../props";
import { useAccordion, UseAccordionParameters, UseAccordionReturnType, UseAccordionSectionInfo, UseAccordionSectionParameters, UseAccordionSectionReturnType, UseAccordionContext, useAccordionSection } from "../use-accordion";
import { Heading } from "./heading";
import { memoForwardRef } from "./util";

type Get<T, K extends keyof T> = T[K];

export interface AccordionProps extends
    Get<UseAccordionParameters<UseAccordionSectionInfo>, "accordionParameters">,
    Get<UseAccordionParameters<UseAccordionSectionInfo>, "linearNavigationParameters">,
    Get<UseAccordionParameters<UseAccordionSectionInfo>, "managedChildrenParameters"> {
    expandedIndex?: number | undefined | null;
    ref?: Ref<UseAccordionReturnType<UseAccordionSectionInfo>>
    render(info: UseAccordionReturnType<UseAccordionSectionInfo>): VNode<any>;
}

export interface AccordionSectionProps<HeaderElement extends Element, BodyElement extends Element> extends
    Get<UseAccordionSectionParameters<HeaderElement, UseAccordionSectionInfo>, "accordionSectionParameters">,
    Get<UseAccordionSectionParameters<HeaderElement, UseAccordionSectionInfo>, "managedChildParameters">,
    Get<UseAccordionSectionParameters<HeaderElement, UseAccordionSectionInfo>, "buttonParameters"> {
    //subInfo: Get<UseAccordionSectionParameters<HeaderElement, UseAccordionSectionInfo>, "subInfo">;
    ref?: Ref<UseAccordionSectionReturnType<HeaderElement, BodyElement>>;
    render(info: UseAccordionSectionReturnType<HeaderElement, BodyElement>): VNode<any>;
}


const AccordionSectionContext = createContext<UseAccordionContext<any>>(null!);
export const Accordion = memoForwardRef(function Accordion<HeaderElement extends Element, BodyElement extends Element>({
    disableArrowKeys,
    disableHomeEndKeys,
    expandedIndex,
    initialIndex,
    navigationDirection,
    onAfterChildLayoutEffect,
    onChildrenMountChange,
    navigatePastEnd,
    navigatePastStart,
    pageNavigationSize,
    render,
    ..._rest
}: AccordionProps, ref?: Ref<any>) {

    const info = useAccordion<UseAccordionSectionInfo>({
        accordionParameters: { initialIndex },
        linearNavigationParameters: { disableArrowKeys, disableHomeEndKeys, navigationDirection, navigatePastEnd, navigatePastStart, pageNavigationSize },
        managedChildrenParameters: { onAfterChildLayoutEffect, onChildrenMountChange }
    });
    useImperativeHandle(ref!, () => info);
    ///useEffect(() => { provider.accordion.changeExpandedIndex(expandedIndex! ?? null); }, [expandedIndex]);

    return (
        <AccordionSectionContext.Provider value={info.context}>{render(info)}</AccordionSectionContext.Provider>
    )
})

export function defaultRenderAccordionSection<HeaderContainerElement extends HTMLElement, HeaderButtonElement extends HTMLElement, BodyElement extends HTMLElement>({ makePropsHeadingContainer, makePropsHeadingButton, makePropsBody, tagBody, tagHeadingButton }: { tagHeadingButton: ElementToTag<HeaderButtonElement>; tagBody: ElementToTag<BodyElement>; makePropsHeadingContainer(info: UseAccordionSectionReturnTypeInfo): h.JSX.HTMLAttributes<HeaderContainerElement>, makePropsHeadingButton(info: UseAccordionSectionReturnTypeInfo): h.JSX.HTMLAttributes<HeaderButtonElement>, makePropsBody(info: UseAccordionSectionReturnTypeInfo): h.JSX.HTMLAttributes<BodyElement> }) {
    return function (info: UseAccordionSectionReturnType<HeaderButtonElement, BodyElement>, modifyHeadingButtonProps: PropModifier<HeaderButtonElement>, modifyBodyProps: PropModifier<BodyElement>): VNode<any> {
        return (
            <>
                <Heading<HeaderContainerElement> {...makePropsHeadingContainer(info)} heading={createElement(tagHeadingButton as never, modifyHeadingButtonProps(makePropsHeadingButton(info)))}>
                    {createElement(tagBody as never, modifyBodyProps(makePropsBody(info)))}
                </Heading>
            </>
        )
    }
}

export const AccordionSection = memoForwardRef(function AccordionSection<HeaderElement extends Element, BodyElement extends Element>({
    open,
    index,
    tagButton,
    disabled,
    bodyRole,
    hidden,
    render,
}: AccordionSectionProps<HeaderElement, BodyElement>, ref?: Ref<any>) {
    const {
        managedChildParameters,
        accordionSectionParameters,
        linearNavigationParameters,
        rovingTabIndexReturn
    } = useContext(AccordionSectionContext) as UseAccordionContext<UseAccordionSectionInfo>;
    const info = useAccordionSection({
        buttonParameters: { disabled, tagButton },
        accordionSectionParameters: { open, bodyRole },
        managedChildParameters: { index, hidden },
        accordionSectionContext,
        managedChildContext,
        pressParameters,
        refElementParameters
        //  hasFocus: { getDocument, getWindow, onActiveElementChange, onElementChange, onFocusedChanged, onFocusedInnerChanged, onLastActiveElementChange, onLastFocusedChanged, onLastFocusedInnerChanged, onMount, onUnmount, onWindowFocusedChange },
        //  subInfo
    });

    useImperativeHandle(ref!, () => sectionInfo);

    return render(sectionInfo, useAccordionSectionHeaderProps, useAccordionSectionBodyProps);
})


