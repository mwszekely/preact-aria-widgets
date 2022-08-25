import { createContext, createElement, h, RenderableProps, VNode } from "preact";
import { forwardRef } from "preact/compat";
import { ManagedChildren } from "preact-prop-helpers/use-child-manager";
import { useContext, useMemo } from "preact/hooks";
import { ElementToTag } from "props";
import { useAriaAccordion, UseAriaAccordionParameters, UseAriaAccordionSection, UseAriaAccordionSectionInfoBase, UseAriaAccordionSectionParameters } from "../use-accordion";
import { useEffect } from "preact-prop-helpers";

export interface AriaAccordionProps extends RenderableProps<UseAriaAccordionParameters> {
    expandedIndex?: number | undefined | null;
}

export interface AriaAccordionSectionProps<HeaderElement extends EventTarget, BodyElement extends EventTarget> extends Omit<UseAriaAccordionSectionParameters["info"], never>, Omit<UseAriaAccordionSectionParameters, "info"> {
    tagHeader: ElementToTag<HeaderElement>;
    tagBody: ElementToTag<BodyElement>;
    propsHeader(args: AriaAccordionSectionPropsDerivedFrom): h.JSX.HTMLAttributes<HeaderElement>;
    propsBody(args: AriaAccordionSectionPropsDerivedFrom): h.JSX.HTMLAttributes<BodyElement>;
    render?(header: VNode<any>, body: VNode<any>): VNode<any>;
}

export interface AriaAccordionSectionPropsDerivedFrom {
    expanded: boolean;
    accordionSections: ManagedChildren<UseAriaAccordionSectionInfoBase>;
}

const AccordionSectionContext = createContext<{ useAriaAccordionSection: UseAriaAccordionSection<any, any>, accordionSections: ManagedChildren<UseAriaAccordionSectionInfoBase> }>(null!);
function AriaAccordionU({ initialIndex, children, expandedIndex }: AriaAccordionProps) {
    const { accordionSections, useAriaAccordionSection, changeExpandedIndex } = useAriaAccordion({ initialIndex: (initialIndex ?? expandedIndex) });
    const provider = useMemo(() => ({ useAriaAccordionSection, accordionSections }), [useAriaAccordionSection, accordionSections]);
    useEffect(() => { changeExpandedIndex(expandedIndex! ?? null); }, [expandedIndex]);

    return (
        <AccordionSectionContext.Provider value={provider}>{children}</AccordionSectionContext.Provider>
    )
}

function defaultRender(header: VNode<any>, body: VNode<any>): VNode<any> {
    return (
        <>
            {header}
            {body}
        </>
    )
}

export function AriaAccordionSectionU<HeaderElement extends Element, BodyElement extends Element>({ open, tagBody, tagHeader, propsBody, propsHeader, index, render }: AriaAccordionSectionProps<HeaderElement, BodyElement>) {
    const { accordionSections, useAriaAccordionSection } = useContext(AccordionSectionContext);
    const { expanded, useAriaAccordionSectionBodyProps, useAriaAccordionSectionHeaderProps } = useAriaAccordionSection({ open, info: { index } });

    const header = createElement(tagHeader, useAriaAccordionSectionHeaderProps(propsHeader({ accordionSections, expanded })));
    const body = createElement(tagBody, useAriaAccordionSectionBodyProps(propsBody({ accordionSections, expanded })));
    return (render ?? defaultRender)(header, body);
}

export const AriaAccordion = forwardRef(AriaAccordionU) as typeof AriaAccordionU;
export const AriaAccordionSection = forwardRef(AriaAccordionSectionU) as typeof AriaAccordionSectionU;

