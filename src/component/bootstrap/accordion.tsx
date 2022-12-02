
import clsx from "clsx"
import { Heading } from "component/heading"
import { memoForwardRef, PartialExcept } from "component/util"
import { ComponentChildren, h, Ref } from "preact"
import { useMergedProps } from "preact-prop-helpers"
import { Accordion, AccordionDemo, AccordionProps, AccordionSection, AccordionSectionDemo, AccordionSectionProps } from "../accordion"
import { StandardProps } from "./util"

export interface Accordion2Props extends Pick<h.JSX.HTMLAttributes<HTMLDivElement>, StandardProps>, Omit<AccordionProps<HTMLButtonElement>, "render" | "ref"> { }
export interface AccordionSection2Props extends Pick<h.JSX.HTMLAttributes<HTMLDivElement>, StandardProps>, Pick<AccordionSectionProps<HTMLDivElement, HTMLButtonElement, HTMLDivElement>, "disabled" | "index" | "hidden" | "open"> {
    heading: ComponentChildren;
}

export const Accordion2 = memoForwardRef(function Accordion2({ children, navigationDirection, disableArrowKeys, disableHomeEndKeys, initialIndex, navigatePastEnd, navigatePastStart, onAfterChildLayoutEffect, onChildrenMountChange, pageNavigationSize, ...props }: Accordion2Props, ref?: Ref<HTMLDivElement>) {
    return (<Accordion
        navigationDirection="vertical"
        render={info => {
            return (
                <div {...useMergedProps<HTMLDivElement>({ ref, ...props }, { className: "accordion" })}>
                    {children}
                </div>
            )
        }} />)
})

export const AccordionSection2 = memoForwardRef(function AccordionSection2({ index, heading, children, disabled, hidden, open }: AccordionSection2Props, ref?: Ref<HTMLDivElement>) {
    return (
        <AccordionSection<any, HTMLButtonElement, HTMLDivElement>
            index={index}
            disabled={disabled}
            open={open}
            hidden={hidden}
            tagButton="button"
            render={info => {
                const sectionClassName = clsx("accordion-item");
                const headerClassName = clsx("accordion-header");
                const bodyClassName = clsx("accordion-item");
                const buttonClassName = clsx(
                    "accordion-button",
                    info.accordionSectionReturn.expanded && ("expanded"),
                    info.accordionSectionReturn.focused && ("focused"),
                    info.accordionSectionReturn.mostRecentlyTabbed && ("most-recently-tabbed"),
                    info.pressReturn.pseudoActive && ("active")
                );
                return (
                    <div class={sectionClassName}>
                        <Heading heading={<button {...useMergedProps(info.propsHeaderButton, { className: buttonClassName })}>{heading}</button>} {...useMergedProps({ ref, className: headerClassName }, info.propsHeader)}>
                            <div {...useMergedProps(info.propsBody, { className: bodyClassName })}>{children}</div>
                        </Heading>
                    </div>
                )
            }}
        />
    )
})
