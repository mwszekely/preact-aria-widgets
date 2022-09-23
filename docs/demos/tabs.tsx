
import { useState } from "preact-prop-helpers";
import { EventDetail } from "../../index";
import { Tabs, defaultRenderTabs, defaultRenderTab, defaultRenderTabPanel } from "../../"
import { Tab, TabPanel } from "../../component/tabs";

/*function DemoButton({ tag, ...props }: { tag: string } & RenderableProps<{}>) {
    return <AriaButton disabled={disabled} onPress={onPress} pressed={} {...props} tag={tag as any}   />
}*/


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
                    onSelectedIndexChange={e => setSelectedIndex(e[EventDetail].selectedIndex)}

                    render={defaultRenderTabs({
                        panels: Array.from((function* () {
                            for (let i = 0; i < count; ++i) {
                                const label = `Tab panel #${i}`;
                                yield <TabPanel index={i} key={i} render={defaultRenderTabPanel({ tagTabPanel: "div", makePropsTabPanel: ({ tabPanel: { visible } }) => ({ hidden: !visible, children: label }) })} />
                            }
                        })()),
                        tagLabel: "label", tagList: "ul", makePropsLabel: () => ({ children: "Tabs example" }), makePropsList: () => ({
                            children: <>
                                {Array.from((function* () {
                                    for (let i = 0; i < count; ++i) {
                                        const label = `Tab #${i}`;
                                        yield <Tab key={i} index={i} getDocument={getDocument} render={defaultRenderTab({ tagTab: "li", makePropsTab: () => ({ children: label }) })} text={label} />
                                    }
                                })())}
                            </>
                        })
                    })} />
            </div>
        </>
    )
}