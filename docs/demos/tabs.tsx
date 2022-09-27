
import { useState } from "preact-prop-helpers";
import { memo } from "preact/compat";
import { defaultRenderTab, defaultRenderTabPanel, defaultRenderTabs, Tabs } from "../../";
import { Tab, TabPanel } from "../../component/tabs";
import { EventDetail } from "../../index";


function getDocument() { return window.document; }

export function Blurb() {
    return (
        <>
            <p><a href="https://www.w3.org/WAI/ARIA/apg/patterns/tabpanel/">In accordance with the ARIA guidelines for Tab and Tab Panel patterns,</a> this widget supports the following:</p>
            <ul>
                <li>The tabs are treated as a composite component with list navigation; see <code>AiraSingleSelectList</code> for more information</li>
            </ul>
            <p><strong>Things <em>not</em> handled:</strong></p>
            <ul>
                <li>TODO</li>
            </ul>
        </>
    )
}

export function Code() {
    return (<code>{``}</code>)
}

export function Demo() {
    const [count, setCount] = useState(5);
    const [selectedIndex, setSelectedIndex] = useState(0);


    return (
        <>
            <Blurb />
            <Code />
            <label><input type="number" min={0} value={count} onInput={e => setCount(e.currentTarget.valueAsNumber)} /> # of tabs</label>
            <div>
                <Tabs
                    selectedIndex={selectedIndex}
                    selectionMode="focus"
                    onSelectedIndexChange={e => setSelectedIndex(e[EventDetail].selectedIndex)}

                    render={defaultRenderTabs({
                        panels: Array.from((function* () {
                            for (let i = 0; i < count; ++i) {
                                yield <DemoTabPanel i={i} />
                            }
                        })()),
                        tagLabel: "label",
                        tagList: "ul",
                        makePropsLabel: () => ({ children: "Tabs example" }),
                        makePropsList: () => ({
                            children: <>
                                {Array.from((function* () {
                                    for (let i = 0; i < count; ++i) {
                                        yield <DemoTab i={i} />
                                    }
                                })())}
                            </>
                        })
                    })} />
            </div>
        </>
    )
}

const DemoTab = memo(function DemoTab({ i }: { i: number }) {
    const label = `Tab #${i}`;
    return <Tab key={i} index={i} getDocument={getDocument} render={defaultRenderTab({ tagTab: "li", makePropsTab: () => ({ children: label }) })} text={label} />
})

const DemoTabPanel = memo(function DemoTabPanel({ i }: { i: number }) {
    const label = `Tab panel #${i}`;
    return <TabPanel index={i} key={i} render={defaultRenderTabPanel({ tagTabPanel: "div", makePropsTabPanel: ({ tabPanel: { visible } }) => ({ hidden: !visible, children: label }) })} />
})

