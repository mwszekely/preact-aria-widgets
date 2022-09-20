import { createContext, createElement, h, VNode } from "preact";
import { useEffect, UseHasFocusParameters } from "preact-prop-helpers";
import { useContext } from "preact/hooks";
import { ElementToTag, PropModifier } from "props";
import { UseAriaButtonParameters } from "use-button";
import { useAriaAccordion, UseAriaAccordionParameters, UseAriaAccordionReturnTypeInfo, UseAriaAccordionSection, UseAriaAccordionSectionParameters, UseAriaAccordionSectionReturnTypeInfo } from "../use-accordion";
import { Heading } from "./heading";

type Get<T, K extends keyof T> = T[K];

export interface AriaAccordionProps extends
    Get<UseAriaAccordionParameters, "accordion">,
    Get<UseAriaAccordionParameters, "linearNavigation">,
    Get<UseAriaAccordionParameters, "managedChildren"> {
    expandedIndex?: number | undefined | null;
    render(info: UseAriaAccordionReturnTypeInfo): VNode<any>;
}

export interface AriaAccordionSectionProps<HeaderElement extends Element, BodyElement extends Element> extends
    Get<UseAriaAccordionSectionParameters<HeaderElement>, "accordionSection">,
    Get<UseAriaAccordionSectionParameters<HeaderElement>, "managedChildren">,
    UseHasFocusParameters<HeaderElement>,
    Omit<UseAriaButtonParameters<HeaderElement>, "pressed" | "onPress"> {
    render(info: UseAriaAccordionSectionReturnTypeInfo, makeHeaderProps: PropModifier<HeaderElement>, makeBodyProps: PropModifier<BodyElement>): VNode<any>;
}


const AccordionSectionContext = createContext<UseAriaAccordionSection<any, any>>(null!);
export function AriaAccordion({ disableArrowKeys, disableHomeEndKeys, expandedIndex, initialIndex, navigationDirection, onAfterChildLayoutEffect, onChildrenMountChange, render }: AriaAccordionProps) {
    const { useAriaAccordionSection, ...provider } = useAriaAccordion({
        accordion: { initialIndex },
        linearNavigation: { disableArrowKeys, disableHomeEndKeys, navigationDirection },
        managedChildren: { onAfterChildLayoutEffect, onChildrenMountChange }
    });

    useEffect(() => { provider.accordion.changeExpandedIndex(expandedIndex! ?? null); }, [expandedIndex]);

    return (
        <AccordionSectionContext.Provider value={useAriaAccordionSection}>{render(provider)}</AccordionSectionContext.Provider>
    )
}

export function defaultRenderAccordionSection<HeaderElement extends HTMLElement, BodyElement extends HTMLElement>({ makePropsHeading, makePropsBody, tagBody, tagHeading }: { tagHeading: ElementToTag<HeaderElement>; tagBody: ElementToTag<BodyElement>; makePropsHeading(info: UseAriaAccordionSectionReturnTypeInfo): h.JSX.HTMLAttributes<HeaderElement>, makePropsBody(info: UseAriaAccordionSectionReturnTypeInfo): h.JSX.HTMLAttributes<BodyElement> }) {
    return function (info: UseAriaAccordionSectionReturnTypeInfo, modifyHeadingProps: PropModifier<HeaderElement>, modifyBodyProps: PropModifier<BodyElement>): VNode<any> {
        const {
            accordionSection: {
                focused
            }
        } = info;
        return (
            <>
                <Heading heading={createElement(tagHeading as never, modifyHeadingProps({ ...makePropsHeading(info) }))}>
                    {createElement(tagBody as never, modifyBodyProps(makePropsBody(info)))}
                </Heading>
            </>
        )
    }
}

export function AriaAccordionSection<HeaderElement extends Element, BodyElement extends Element>({
    open,
    index,
    tag,
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
}: AriaAccordionSectionProps<HeaderElement, BodyElement>) {
    const useAriaAccordionSection = useContext(AccordionSectionContext);
    const { useAriaAccordionSectionBodyProps, useAriaAccordionSectionHeaderProps, ...sectionInfo } = useAriaAccordionSection({
        button: { tag, disabled },
        accordionSection: { open },
        managedChildren: { index },
        hasFocus: { getDocument, getWindow, onActiveElementChange, onElementChange, onFocusedChanged, onFocusedInnerChanged, onLastActiveElementChange, onLastFocusedChanged, onLastFocusedInnerChanged, onMount, onUnmount, onWindowFocusedChange }
    });

    return render(sectionInfo, useAriaAccordionSectionHeaderProps, useAriaAccordionSectionBodyProps);
}


