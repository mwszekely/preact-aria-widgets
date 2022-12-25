
import { returnZero, useState } from "preact-prop-helpers";
import { memo } from "preact/compat";
import { Tabs } from "../../";
import { Tab, TabPanel } from "../../component/tabs";

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
    //const [selectedIndex, setSelectedIndex] = useState(0 as number | null);


    return (
        <>
            <Blurb />
            <Code />
            <label><input type="number" min={0} value={count} onInput={e => setCount(e.currentTarget.valueAsNumber)} /> # of tabs</label>
            <div>
                <Tabs<HTMLUListElement, HTMLLIElement, HTMLLabelElement>
                    ariaLabel={null}
                    orientation="horizontal"

                    render={info => {
                        /* 
                        defaultRenderTabs({
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
                    })
                        
                        */

                        return (
                            <>
                                <label {...info.propsLabel}>Tabs example</label>
                                <ul {...info.propsContainer} style={{display: "flex"}}>{Array.from((function* () {
                                    for (let i = 0; i < count; ++i) {
                                        yield <DemoTab i={i} />
                                    }
                                })())}</ul>
                                <div>
                                    {Array.from((function* () {
                                        for (let i = 0; i < count; ++i) {
                                            yield <DemoTabPanel i={i} />
                                        }
                                    })())}
                                </div>
                            </>
                        )
                    }} />
            </div>
        </>
    )
}

const DemoTab = memo(function DemoTab({ i }: { i: number }) {
    return <Tab<HTMLLIElement> focusSelf={e => e.focus()} key={i} index={i} render={info => <li {...info.props} style={{marginLeft: "2em"}}>Tab #{i} (offset: {info.singleSelectionChildReturn.selectedOffset ?? "null"}) {info.singleSelectionChildReturn.selected && "(visible)"}</li>} getSortValue={returnZero} />
})

const DemoTabPanel = memo(function DemoTabPanel({ i }: { i: number }) {
    return <TabPanel<HTMLDivElement> index={i} key={i} render={info => <div {...info.props} hidden={!info.tabPanelReturn.visible}>Tab panel #{i} (offset: {info.tabPanelReturn.visibleOffset ?? "null"})</div>} />
})

