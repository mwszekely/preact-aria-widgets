import { Accordion, AccordionSection, Heading } from "../../dist/index.js";
import { TestItem, useTestSyncState } from "../util.js";
import { DisabledIndex, MissingIndex, fromStringNumber, fromStringString } from "./base.types.js";

export function TestBasesAccordion() {
    const [childCount] = useTestSyncState("Accordion", "setChildCount", 10, fromStringNumber);
    const [orientation] = useTestSyncState("Accordion", "setOrientation", "vertical", fromStringString);

    installTestingHandler("Button", "onPress", e => alert(e))
    return (
        <TestItem>
            <Accordion
                orientation={orientation}
                render={accordionInfo => {
                    
                    return (
                        <div data-accordion>
                            {Array.from(function* () {
                                for (let i = 0; i < childCount; ++i) {
                                    yield <Child index={i} />
                                }
                            }())}
                        </div>
                    )
                }} />
        </TestItem>
    )
}

function Child({ index }: { index: number }) {
    const [open, setOpen] = useTestSyncState("Accordion", `setChildOpened_${index}`, null, fromStringString);

    if (index == MissingIndex)
        return <div aria-hidden><div data-accordion-header>(There is no section #{index}&mdash;it is a hole in the array)<div data-accordion-header-button /></div><div data-accordion-section /></div>

    return (
        <AccordionSection<HTMLDivElement, HTMLButtonElement, HTMLDivElement>
            disabled={index == DisabledIndex}
            tagButton="button"
            index={index}
            open={open == "true" ? true : open == "false" ? false : undefined}
            onPressSync={open != null ? (e => setOpen(o => (o == "true" ? "false" : o == "false" ? "true" : null))) : null}
            render={sectionInfo => {
                return (
                    <>
                        <Heading data-accordion-header heading={<button {...sectionInfo.propsHeaderButton} data-accordion-header-button>Toggle accordion #{index}</button>} {...sectionInfo.propsHeader}>
                            <div {...sectionInfo.propsBody} hidden={!sectionInfo.accordionSectionReturn.expanded} data-accordion-section>
                                Accordion section body #{index}.
                            </div>
                        </Heading>

                    </>
                );
            }} />
    )
}


