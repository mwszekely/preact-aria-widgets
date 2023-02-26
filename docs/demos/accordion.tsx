
import { ComponentChildren, h, RenderableProps, VNode } from "preact";
import { memo } from "preact/compat";
import { useState } from "preact/hooks";
import { Accordion, AccordionSection, Heading } from "../../dist/index.js";

function DemoAccordion({ children }: RenderableProps<{}>) {
    return <Accordion navigationDirection="vertical" render={(_info): VNode<any> => { return <div id="accordion-demo">{children}</div> }} />
}

const DemoAccordionSection = memo(function DemoAccordionSection({ index, body, heading, disabled, open }: { open?: boolean, disabled: boolean, index: number, heading: ComponentChildren, body: ComponentChildren }) {
    return <AccordionSection<HTMLDivElement, HTMLButtonElement, HTMLDivElement>
        index={index}
        tagButton="button"
        open={open}
        disabled={disabled}
        render={info => (
            <Heading<HTMLDivElement> {...info.propsHeader} tag="div" heading={<><span>{heading}</span><button {...info.propsHeaderButton}>Toggle open</button></>}>
                <p {...info.propsBody} hidden={!info.accordionSectionReturn.expanded}>
                    {body}
                </p>
            </Heading>
        )} />
})

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
    return (<code>{`<Accordion render={...}>
    <AccordionSection index={0} render={...} />
    <AccordionSection index={1} render={...} />
    <AccordionSection index={2} render={...} />
</Accordion>`}</code>)
}

export function Demo() {
    const [count, setCount] = useState(5);

    return (
        <>
            <Blurb />
            <Code />
            <label><input type="number" min={0} value={count} onInput={e => setCount(e.currentTarget.valueAsNumber)} /> # of accordion sections</label>
            <DemoAccordion>
                <>{Array.from((function* () {
                    yield <DemoAccordionSection index={0} heading="Accordion section #0" body="Body content #0" disabled={false} />
                    yield <DemoAccordionSection index={1} heading="Accordion section #1" body="Body content #1" disabled={false} />
                    yield <DemoAccordionSection index={2} heading="Accordion section #2 (disabled)" body="Body content #2" disabled={true} />
                    yield <DemoAccordionSection index={3} heading="Accordion section #3 (forced open)" body="Body content #3" disabled={false} open={true} />
                    yield <DemoAccordionSection index={4} heading="Accordion section #4 (forced closed)" body="Body content #4" disabled={false} open={false} />
                    for (let i = 5; i < count; ++i) {
                        yield <DemoAccordionSection index={i} heading={`Accordion section #${i}`} body={`BodyContent #${i}`} disabled={false} />
                    }
                })()).slice(0, count)}</>
            </DemoAccordion>
        </>
    )
}