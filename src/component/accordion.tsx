import { ComponentChildren, createContext, h, Ref, VNode } from "preact";
import { useEffect } from "preact-prop-helpers";
import { forwardRef } from "preact/compat";
import { useContext } from "preact/hooks";
import { UseAriaButtonParameters } from "use-button";
import { useAriaAccordion, UseAriaAccordionParameters, UseAriaAccordionReturnTypeInfo, UseAriaAccordionSection, UseAriaAccordionSectionParameters, UseAriaAccordionSectionReturnTypeInfo } from "../use-accordion";
import { Heading } from "./heading";

type Get<T, K extends keyof T> = T[K];

export interface AriaAccordionProps extends
    Get<UseAriaAccordionParameters, "accordion">,
    Get<UseAriaAccordionParameters, "linearNavigation">,
    Get<UseAriaAccordionParameters, "managedChildren"> {
    expandedIndex?: number | undefined | null;
    children?: ComponentChildren;
    render?(info: UseAriaAccordionReturnTypeInfo, children: ComponentChildren): VNode<any>;
}

export interface AriaAccordionSectionProps<HeaderElement extends Element, BodyElement extends Element> extends
    Get<UseAriaAccordionSectionParameters<HeaderElement>, "accordionSection">,
    Get<UseAriaAccordionSectionParameters<HeaderElement>, "managedChildren">,
    Omit<UseAriaButtonParameters<HeaderElement>, "pressed" | "onPress"> {
    render?(info: UseAriaAccordionSectionReturnTypeInfo, headerProps: h.JSX.HTMLAttributes<HeaderElement>, bodyProps: h.JSX.HTMLAttributes<BodyElement>): VNode<any>;
}


const AccordionSectionContext = createContext<UseAriaAccordionSection<any, any>>(null!);
export function AriaAccordion({ disableArrowKeys, disableHomeEndKeys, expandedIndex, initialIndex, navigationDirection, onAfterChildLayoutEffect, onChildrenMountChange, render, children }: AriaAccordionProps) {
    const { useAriaAccordionSection, ...provider } = useAriaAccordion({
        accordion: { initialIndex },
        linearNavigation: { disableArrowKeys, disableHomeEndKeys, navigationDirection },
        managedChildren: { onAfterChildLayoutEffect, onChildrenMountChange }
    });

    useEffect(() => { provider.accordion.changeExpandedIndex(expandedIndex! ?? null); }, [expandedIndex]);

    return (
        <AccordionSectionContext.Provider value={useAriaAccordionSection}>{(render ?? defaultRenderAccordion)(provider, children)}</AccordionSectionContext.Provider>
    )
}

function defaultRenderAccordion(info: UseAriaAccordionReturnTypeInfo, children: ComponentChildren): VNode<any> {
    return (<>{children}</>)
}

function defaultRenderSection(info: UseAriaAccordionSectionReturnTypeInfo, headingProps: h.JSX.HTMLAttributes<any>, bodyProps: h.JSX.HTMLAttributes<any>): VNode<any> {
    return (
        <>
            <Heading heading={<div {...headingProps} />}>
                <div {...bodyProps} />
            </Heading>
        </>
    )
}

function AriaAccordionSectionU<HeaderElement extends Element, BodyElement extends Element>({ open, index, tag, disabled, render, ...unknownProps }: AriaAccordionSectionProps<HeaderElement, BodyElement>, ref: Ref<HeaderElement>) {
    const useAriaAccordionSection = useContext(AccordionSectionContext);
    const { useAriaAccordionSectionBodyProps, useAriaAccordionSectionHeaderProps, ...sectionInfo } = useAriaAccordionSection({ button: { tag, disabled }, accordionSection: { open }, managedChildren: { index } });

    return (render ?? defaultRenderSection)(sectionInfo, useAriaAccordionSectionHeaderProps({ ...unknownProps, ref }), useAriaAccordionSectionBodyProps({}));
}

export const AriaAccordionSection = forwardRef(AriaAccordionSectionU) as typeof AriaAccordionSectionU;

