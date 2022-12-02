
import clsx from "clsx"
import { Heading } from "component/heading"
import { memoForwardRef, PartialExcept } from "component/util"
import { ComponentChildren, h, Ref } from "preact"
import { useMergedProps } from "preact-prop-helpers"
import { Accordion, AccordionDemo, AccordionProps, AccordionSection, AccordionSectionDemo, AccordionSectionProps } from "../accordion"
import { getDefaultClass, StandardProps } from "./util"

export interface Accordion2Props extends Pick<h.JSX.HTMLAttributes<HTMLDivElement>, StandardProps>, Omit<AccordionProps<HTMLButtonElement>, "render" | "ref"> { }
export interface AccordionSection2Props extends Pick<h.JSX.HTMLAttributes<HTMLDivElement>, StandardProps>, Pick<AccordionSectionProps<HTMLDivElement, HTMLButtonElement, HTMLDivElement>, "disabled" | "index" | "hidden" | "open"> {
    heading: ComponentChildren;
}
/*
export const Accordion2 = memoForwardRef(function Accordion2({ children, navigationDirection, disableArrowKeys, disableHomeEndKeys, initialIndex, navigatePastEnd, navigatePastStart, onAfterChildLayoutEffect, onChildrenMountChange, pageNavigationSize, ...props }: Accordion2Props, ref?: Ref<HTMLDivElement>) {
    return (<Accordion
        navigationDirection="vertical"
        render={info => {
            return (
                <div {...useMergedProps<HTMLDivElement>({ ref, ...props }, { className: getDefaultClass("accordion", "accordion") })}>
                    {children}
                </div>
            )
        }} />)
})

export const AccordionSection2 = memoForwardRef(function AccordionSection2({ index, heading, children, disabled, hidden, key, open }: AccordionSection2Props, ref?: Ref<HTMLDivElement>) {
    return (
        <AccordionSection<any, HTMLButtonElement, HTMLDivElement>
            index={index}
            disabled={disabled}
            open={open}
            hidden={hidden}
            tagButton="button"
            render={info => {
                const cls = clsx(
                    getDefaultClass("accordion", "accordion-section"),
                    info.accordionSectionReturn.expanded && getDefaultClass("accordion", "expanded"),
                    info.accordionSectionReturn.focused && getDefaultClass("accordion", "focused"),
                    info.accordionSectionReturn.mostRecentlyTabbed && getDefaultClass("accordion", "most-recently-tabbed"),
                    info.pressReturn.pseudoActive && getDefaultClass("accordion", "active")
                );
                return (
                    <Heading heading={<button {...info.propsHeaderButton}>{heading}</button>} {...useMergedProps({ ref, className: cls }, info.propsHeader)}>
                        <div {...info.propsBody}>{children}</div>
                    </Heading>
                )
            }}
        />
    )
})*/
