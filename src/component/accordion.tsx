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
    imperativeHandle?: Ref<UseAccordionReturnType<UseAccordionSectionInfo>>
    render(info: UseAccordionReturnType<UseAccordionSectionInfo>): VNode<any>;
}

export interface AccordionSectionProps<HeaderElement extends Element, BodyElement extends Element> extends
    Get<UseAccordionSectionParameters<HeaderElement, UseAccordionSectionInfo>, "accordionSectionParameters">,
    Get<UseAccordionSectionParameters<HeaderElement, UseAccordionSectionInfo>, "managedChildParameters">,
    Get<UseAccordionSectionParameters<HeaderElement, UseAccordionSectionInfo>, "buttonParameters">,
    Get<UseAccordionSectionParameters<HeaderElement, UseAccordionSectionInfo>, "pressParameters"> {
    imperativeHandle?: Ref<UseAccordionSectionReturnType<HeaderElement, BodyElement>>;
    render(info: UseAccordionSectionReturnType<HeaderElement, BodyElement>): VNode<any>;
}


const AccordionSectionContext = createContext<UseAccordionContext<any>>(null!);
export const Accordion = memoForwardRef(function Accordion({
    disableArrowKeys,
    disableHomeEndKeys,
    initialIndex,
    navigationDirection,
    onAfterChildLayoutEffect,
    onChildrenMountChange,
    navigatePastEnd,
    navigatePastStart,
    pageNavigationSize,
    render,
    imperativeHandle,
    ..._rest
}: AccordionProps, ref?: Ref<any>) {

    const info = useAccordion<UseAccordionSectionInfo>({
        accordionParameters: { initialIndex },
        linearNavigationParameters: { disableArrowKeys, disableHomeEndKeys, navigationDirection, navigatePastEnd, navigatePastStart, pageNavigationSize },
        managedChildrenParameters: { onAfterChildLayoutEffect, onChildrenMountChange }
    });
    useImperativeHandle(imperativeHandle!, () => info);

    return (
        <AccordionSectionContext.Provider value={info.context}>{render(info)}</AccordionSectionContext.Provider>
    )
})

export function defaultRenderAccordionSection<HeaderContainerElement extends Element, HeaderButtonElement extends Element, BodyElement extends Element>({ makePropsHeadingContainer, makePropsHeadingButton, makePropsBody, tagBody, tagHeadingButton }: { tagHeadingButton: ElementToTag<HeaderButtonElement>; tagBody: ElementToTag<BodyElement>; makePropsHeadingContainer(info: UseAccordionSectionReturnType<HeaderButtonElement, BodyElement>): h.JSX.HTMLAttributes<HeaderContainerElement>, makePropsHeadingButton(info: UseAccordionSectionReturnType<HeaderButtonElement, BodyElement>): h.JSX.HTMLAttributes<HeaderButtonElement>, makePropsBody(info: UseAccordionSectionReturnType<HeaderButtonElement, BodyElement>): h.JSX.HTMLAttributes<BodyElement> }) {
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

export const AccordionSection = memoForwardRef(function AccordionSection<HeaderContainerElement extends Element, HeaderButtonElement extends Element, BodyElement extends Element>({
    open,
    index,
    tagButton,
    disabled,
    bodyRole,
    onPress,
    exclude,
    hidden,
    imperativeHandle,
    render,
}: AccordionSectionProps<HeaderButtonElement, BodyElement>, ref?: Ref<any>) {
    const context = useContext(AccordionSectionContext) as UseAccordionContext<UseAccordionSectionInfo>;
    const info = useAccordionSection<HeaderContainerElement, HeaderButtonElement, BodyElement>({
        buttonParameters: { disabled, tagButton, onPress },
        accordionSectionParameters: { open, bodyRole },
        managedChildParameters: { index, hidden },
        pressParameters: { exclude },
        refElementParameters: {  },
        context
        //  hasFocus: { getDocument, getWindow, onActiveElementChange, onElementChange, onFocusedChanged, onFocusedInnerChanged, onLastActiveElementChange, onLastFocusedChanged, onLastFocusedInnerChanged, onMount, onUnmount, onWindowFocusedChange },
        //  subInfo
    });

    useImperativeHandle(imperativeHandle!, () => info);

    return render(info);
})


