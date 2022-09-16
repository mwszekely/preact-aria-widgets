
import { ComponentChildren, h, RenderableProps } from "preact";
import { AriaAccordion, AriaAccordionSection, Heading } from "../../index";

function DemoAccordion(props: RenderableProps<{}>) {
    return <AriaAccordion {...props} render={(info, children) => { return <div id="accordion-demo">{children}</div> }} />
}

function DemoAccordionSection({ index, body, heading, disabled, open }: { open?: boolean, disabled: boolean, index: number, heading: ComponentChildren, body: ComponentChildren }) {
    return <AriaAccordionSection<HTMLDivElement, HTMLDivElement> index={index} open={open} disabled={disabled} render={(info, headerProps, bodyProps) => {
        return (
            <>
                <Heading heading={<div {...headerProps}>{heading} ({!info.accordionSection.expanded && "not "} open), ({!info.accordionSection.focused && "not "} focused)</div>}>
                    <div {...bodyProps}>{body}</div>
                </Heading>
            </>
        )
    }}></AriaAccordionSection>
}

export function Blurb() {
    return (
        <>
            <p><a href="https://www.w3.org/WAI/ARIA/apg/patterns/accordion/">In accordance with the ARIA guidelines for Accordion patterns,</a> this widget supports the following:</p>
            <ul>
                <li>Each section's header and body are linked via ID; the body is <code>labelled-by</code> the header and the header <code>control</code>s the body.</li>
                <li>The header is a button and responds to keyboard, mouse, touch, etc. events, regardless of the element used.</li>
                <li>If the header element is not a <code>&lt;button&gt;</code> element, it is given that <code>role</code>.</li>
                <li>Up/down &amp; Home/End keys navigate through the list, as does Tab and Shift+Tab</li>
                <li></li>
            </ul>
            <p><strong>Things <em>not</em> handled:</strong></p>
            <ul>
                <li>The <code>render</code> prop each <code>AccordionSection</code> takes must wrap the header button with a <a href="https://w3c.github.io/aria/#heading">heading</a> (e.g. <code>h3</code>, or <code>&lt;Heading&gt;</code>). See the default implementation for an example.</li>
            </ul>
        </>
    )
}

export function Code() {
    return (<code>{`<AriaAccordion render={...}>
    <AriaAccordionSection index={0} render={...} />
    <AriaAccordionSection index={1} render={...} />
    <AriaAccordionSection index={2} render={...} />
</AriaAccordion>`}</code>)
}

export function Demo() {

    return (
        <>
            <Blurb />
            <Code />
            <DemoAccordion>
                <DemoAccordionSection index={0} heading="Accordion section #0" body="Body content #0" disabled={false} />
                <DemoAccordionSection index={1} heading="Accordion section #1" body="Body content #1" disabled={false} />
                <DemoAccordionSection index={2} heading="Accordion section #2 (disabled)" body="Body content #2" disabled={true} />
                <DemoAccordionSection index={3} heading="Accordion section #3 (forced open)" body="Body content #3" disabled={false} open={true} />
                <DemoAccordionSection index={4} heading="Accordion section #4 (forced closed)" body="Body content #4" disabled={false} open={false} />
            </DemoAccordion>
        </>
    )
}