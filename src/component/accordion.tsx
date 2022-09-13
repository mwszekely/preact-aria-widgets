import { ComponentChildren, createContext, h, VNode } from "preact";
import { useEffect } from "preact-prop-helpers";
import { forwardRef } from "preact/compat";
import { useContext } from "preact/hooks";
import { useAriaAccordion, UseAriaAccordionParameters, UseAriaAccordionReturnTypeInfo, UseAriaAccordionSection, UseAriaAccordionSectionParameters, UseAriaAccordionSectionReturnTypeInfo } from "../use-accordion";

type Get<T, K extends keyof T> = T[K];

export interface AriaAccordionProps extends
    Get<UseAriaAccordionParameters, "accordion">,
    Get<UseAriaAccordionParameters, "linearNavigation">,
    Get<UseAriaAccordionParameters, "managedChildren"> {
    expandedIndex?: number | undefined | null;
    children: ComponentChildren;
    render?(info: UseAriaAccordionReturnTypeInfo, children: ComponentChildren): VNode<any>;
}

export interface AriaAccordionSectionProps<HeaderElement extends EventTarget, BodyElement extends EventTarget> extends
    Get<UseAriaAccordionSectionParameters, "accordionSection">,
    Get<UseAriaAccordionSectionParameters, "managedChildren"> {
    //tagHeader: ElementToTag<HeaderElement>;
    //tagBody: ElementToTag<BodyElement>;
    //propsHeader(): h.JSX.HTMLAttributes<HeaderElement>;
    //propsBody(): h.JSX.HTMLAttributes<BodyElement>;
    render?(info: UseAriaAccordionSectionReturnTypeInfo, headerProps: h.JSX.HTMLAttributes<HeaderElement>, bodyProps: h.JSX.HTMLAttributes<BodyElement>): VNode<any>;
}

/*export interface AriaAccordionSectionPropsDerivedFrom {
    expanded: boolean;
    accordionSections: ManagedChildren<UseAriaAccordionSectionInfoBase>;
}*/

const AccordionSectionContext = createContext<UseAriaAccordionSection<any, any>>(null!);
function AriaAccordionU({ disableArrowKeys, disableHomeEndKeys, expandedIndex, initialIndex, navigationDirection, onAfterChildLayoutEffect, onChildrenMountChange, render, children }: AriaAccordionProps) {
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

function defaultRenderSection(info: UseAriaAccordionSectionReturnTypeInfo, headerProps: h.JSX.HTMLAttributes<any>, bodyProps: h.JSX.HTMLAttributes<any>): VNode<any> {
    return (
        <>
            <div {...headerProps} />
            <div {...bodyProps} />
        </>
    )
}

export function AriaAccordionSectionU<HeaderElement extends Element, BodyElement extends Element>({ open, index, render }: AriaAccordionSectionProps<HeaderElement, BodyElement>) {
    const useAriaAccordionSection = useContext(AccordionSectionContext);
    const { useAriaAccordionSectionBodyProps, useAriaAccordionSectionHeaderProps, ...sectionInfo } = useAriaAccordionSection({ accordionSection: { open }, managedChildren: { index } });

    return (render ?? defaultRenderSection)(sectionInfo, useAriaAccordionSectionHeaderProps({}), useAriaAccordionSectionBodyProps({}));
}

export const AriaAccordion = forwardRef(AriaAccordionU) as typeof AriaAccordionU;
export const AriaAccordionSection = forwardRef(AriaAccordionSectionU) as typeof AriaAccordionSectionU;

